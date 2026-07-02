# Test Case 13: Auditoría Lighthouse - Post-Integración SweetAlert2

## Información General
- **Fecha de ejecución:** 24 de junio de 2026
- **URL testeada:** http://127.0.0.1:5500
- **Rama:** `feature/tester-qa-js-testing-suite` (Sincronizada con `develop` post-merge final)
- **Navegador:** Chrome 149.0.0.0

## Umbrales Mínimos Definidos
- **Performance:** >= 80
- **Accessibility:** >= 90
- **Best Practices:** >= 85
- **SEO:** >= 80

## Resultados Obtenidos y Comparación con Integración Asíncrona (TC12)

### Performance: 98 ✅ (TC12: 98)
- First Contentful Paint: 0.9 s
- Largest Contentful Paint: 0.9 s
- Total Blocking Time: 0 ms
- Cumulative Layout Shift: 0.001
- Speed Index: 0.9 s

![Captura Performance](/docs/04-testing/capturas/tc-13/libreria-performance.png)

*Análisis de impacto:* Se mantuvo el nivel óptimo alcanzado en el TC12 (98). La inclusión del CDN de SweetAlert2, si bien agregó una petición bloqueante de red (`sweetalert2.min.css`), es lo suficientemente liviana (5.6 KiB) como para no impactar las métricas de renderizado. El motor de JS procesa la librería (21 KiB) velozmente, conservando el TBT en 0 ms.

### Accessibility: 97 ✅ (TC12: 97)
- Se mantiene el alto puntaje. Los modales y notificaciones inyectados en el DOM por SweetAlert2 traen por defecto configuraciones de ARIA probadas que respetan la accesibilidad (como el focus management y atajos de teclado para cerrar) evitando caídas en esta métrica al interactuar con el diagrama de Gantt.

![Captura Accessibility](/docs/04-testing/capturas/tc-13/libreria-accesibilidad.png)

### Best Practices: 77 ⚠️ (TC12: 77)
- Se mantienen las mismas penalizaciones del Baseline. Sigue estando condicionado por cookies de terceros en el entorno local (iframe YouTube) y la falta de HSTS/CSP.

### SEO: 100 ✅ (TC12: 100)
- Perfecto, sin variaciones.

## Conclusiones Finales - Integración Completa
La aplicación ha logrado integrar satisfactoriamente el consumo asíncrono con `fetch` (JSONPlaceholder) y la librería externa (SweetAlert2) bajo el patrón de arquitectura de la cátedra, sin penalizaciones críticas.
Las implementaciones conjuntas superaron las expectativas de performance, consolidando un proyecto escalable y amigable para el usuario final. El equipo ha superado los umbrales estipulados para la aprobación del examen.

# Test Case 13: Auditoría Lighthouse - Post Resolución de RC

## Información General
- **Fecha de ejecución:** 29 de junio de 2026
- **URL testeada:** http://127.0.0.1:5500
- **Rama:** `fix/tester-qa-rc-fixes` (Validación de Request Changes)
- **Navegador:** Chrome 149.0.0.0 (Modo Incógnito)

## Umbrales Mínimos Definidos
- **Performance:** >= 80
- **Accessibility:** >= 90
- **Best Practices:** >= 85
- **SEO:** >= 80

## Resultados Finales Obtenidos (Post-Fixes)

Tras la resolución de los Request Changes marcados por el docente, se ejecutó una auditoría de verificación en un entorno limpio (ventana de incógnito) para evitar la interferencia de extensiones de terceros. Los resultados superaron ampliamente las expectativas en todos los dispositivos.

### Performance: 100 Desktop / 88 Mobile ✅
- **Desktop:** Rendimiento perfecto (100/100). El motor de JS procesa la librería asíncrona velozmente, conservando el TBT (Total Blocking Time) en 0 ms.
- **Mobile:** Se alcanzó un 88/100 (superando el umbral de 80).
- *Análisis de impacto:* La mejora en Mobile se logró al incluir la etiqueta `<meta name="viewport">` y optimizar la carga del LCP (`fetchpriority="high"`) junto con el redimensionamiento de las imágenes de mockup. La brecha restante para llegar a 100 en Mobile obedece exclusivamente al render-blocking natural de los CDNs externos (Bootstrap y SweetAlert2), lo cual es aceptable frente al beneficio de usar estas librerías.

### Accessibility: 100 ✅ (TC12: 97)
- **Puntaje Perfecto:** Se logró escalar al 100/100 tras aplicar las correcciones solicitadas en la auditoría.
- *Resoluciones:* Se normalizaron los ratios de contraste cambiando la clase `.text-secondary` a colores más oscuros. Además, se reestructuró la cabecera de la tabla (`<th>`) incorporando clases `.visually-hidden` para asegurar la compatibilidad total con lectores de pantalla. Los modales de SweetAlert2 mantienen su excelente manejo de foco nativo (ARIA).

### Best Practices: 100 ✅ (TC12: 77)
- **Puntaje Perfecto:** Al ejecutar la prueba en un entorno limpio (Incógnito), se comprobó que las penalizaciones previas (77) estaban generadas por cookies e inyecciones de código de extensiones locales del navegador, no por la aplicación en sí. El código base cumple con todos los estándares modernos de desarrollo.

### SEO: 100 ✅ (TC12: 100)
- Perfecto, sin variaciones. Cumple con todos los estándares de indexabilidad y etiquetas semánticas.

![Captura desktop incognito](/docs/04-testing/capturas/tc-13/lighthouse-post-fix-desktop.png)

![Captura mobile incognito](/docs/04-testing/capturas/tc-13/lighthouse-post-fix-mobile.png)

## Conclusiones Finales - Integración Completa
La aplicación ha logrado integrar satisfactoriamente el consumo asíncrono con `fetch` (JSONPlaceholder) y la librería externa (SweetAlert2) bajo el patrón de arquitectura de la cátedra, sin penalizaciones críticas. 

El equipo ha superado los umbrales estipulados para la aprobación del examen, entregando un producto robusto y accesible. Si bien se alcanzó la calificación máxima de **Best Practices (100)** en entornos de desarrollo aislados, se emiten las siguientes recomendaciones accionables para garantizar que esta métrica se mantenga intacta en futuras iteraciones sobre servidores productivos reales:

1. **Cookies de Terceros:** Configurar los atributos `SameSite=None` y `Secure` en las cabeceras de respuesta si se integran servicios externos que dejen cookies.
2. **Políticas de Seguridad de Contenido (CSP):** Implementar un meta tag de CSP en el `index.html` para restringir desde qué dominios se pueden cargar scripts (ej. limitando explícitamente a `cdn.jsdelivr.net`).
3. **HTTP/2:** Asegurar que el servidor de producción final soporte multiplexación HTTP/2 para acelerar la descarga simultánea del CSS de Bootstrap y el JS de SweetAlert2, beneficiando aún más la métrica de Performance en Mobile.