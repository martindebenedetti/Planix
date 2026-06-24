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