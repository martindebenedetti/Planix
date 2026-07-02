# Test Case 12: Auditoría Lighthouse - Post-Integración Fetch API

## Información General
- **Fecha de ejecución:** 24 de junio de 2026
- **URL testeada:** http://127.0.0.1:5500
- **Rama:** `feature/tester-qa-js-testing-suite` (Sincronizada con `develop` post-merge de Fetch API)
- **Navegador:** Chrome 149.0.0.0

## Umbrales Mínimos Definidos
- **Performance:** >= 80
- **Accessibility:** >= 90
- **Best Practices:** >= 85
- **SEO:** >= 80

## Resultados Obtenidos y Comparación con Baseline (TC11)

### Performance: 98 ✅ (Baseline: 76)
- First Contentful Paint: 0.9 s
- Largest Contentful Paint: 0.9 s
- Total Blocking Time: 0 ms
- Cumulative Layout Shift: 0.012
- Speed Index: 0.9 s

![Captura Performance](/docs/04-testing/capturas/tc-12/fetch-performance.png)

*Análisis de impacto:* El puntaje de rendimiento experimentó una mejora significativa, superando ampliamente el umbral exigido. La carga diferida de datos mediante promesas (`apiService.js`) demostró ser altamente eficiente. El hilo principal no sufrió bloqueos durante el mapeo y renderizado de las nuevas tareas (TBT = 0 ms). Sigue pendiente de impacto total en producción la Issue [#130](https://github.com/martindebenedetti/Planix/issues/130) referida a la imagen de cabecera.

### Accessibility: 97 ✅ (Baseline: 96)
- Se mantiene estable con una leve mejora en la evaluación del DOM dinámico. Los nuevos estados inyectados durante la carga de la API (ej. texto de "Cargando...") respetan la semántica visual y no introducen penalizaciones.

![Captura Accessibility](/docs/04-testing/capturas/tc-12/fetch-accesibilidad.png)

### Best Practices: 77 ⚠️ (Baseline: 77)
- Se mantienen las mismas penalizaciones del Baseline. 
- *Observaciones:* Presencia de cookies de terceros asociadas al iframe del video de YouTube y ausencia de políticas estrictas de seguridad (CSP, HSTS) inherentes al entorno de pruebas local.

### SEO: 100 ✅ (Baseline: 100)
- Continúa en estado óptimo. Todas las etiquetas y meta descripciones siguen intactas tras la inyección de componentes en el DOM.

## Conclusiones Post-Fetch
La integración del módulo `apiService.js` y el consumo asíncrono de datos desde la API externa JSONPlaceholder demostró un impacto altamente positivo en la estabilidad de la aplicación. El patrón arquitectónico empleado para manejar el consumo HTTP (Promesas con `async/await` encapsuladas) garantiza que no haya cuellos de botella en la renderización principal, aprobando holgadamente los umbrales de Performance y Accesibilidad definidos para esta etapa del desarrollo.