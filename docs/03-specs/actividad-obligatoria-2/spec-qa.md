# Spec QA — Actividad Obligatoria N°2

## Rol
Documentador / QA Tester

## Objetivo
Planificar, ejecutar y documentar el proceso de testing de la Actividad Obligatoria N°2, validando el comportamiento visual, responsive, performance, accesibilidad y estructura semántica del sitio, tanto antes del merge de las ramas feature como después de la integración final en develop.

## Alcance
El testing cubrirá los siguientes aspectos del proyecto:

1. Compatibilidad visual en navegadores desktop.
2. Adaptación responsive en dispositivos móviles y tablet.
3. Performance y tiempos de carga.
4. Accesibilidad web.
5. Validación de estructura HTML semántica y validación de CSS.

## Plan de testing

### Momento 1 — Testing pre-merge
Se ejecutarán pruebas sobre las ramas `feature/` del Desarrollador Frontend/CSS y del Especialista en Responsive Design antes de su merge a `develop`.

Objetivo de este momento:
- Detectar errores tempranos de integración parcial.
- Informar bugs antes de que los cambios lleguen a `develop`.
- Permitir correcciones previas al merge.

### Momento 2 — Testing post-merge a develop
Se ejecutarán nuevamente los test cases sobre la rama `develop`, una vez integradas todas las features.

Objetivo de este momento:
- Detectar errores que aparezcan únicamente con la integración completa.
- Validar que los estilos CSS y el diseño responsive convivan correctamente.
- Verificar el estado final antes de crear la release.

## Test cases a ejecutar

### Test Case 1 — Compatibilidad en navegadores desktop
Se validará la correcta visualización del sitio en:
- Chrome (1920x1080)
- Firefox (1440x900)
- Safari/macOS (1280x800)
- Edge (1280x800)

Se observarán:
- diferencias visuales entre navegadores
- ruptura de layout
- inconsistencias en navegación, botones, formularios y cards
- alineaciones, tipografía y espaciados

### Test Case 2 — Responsive en dispositivos móviles y tablet
Se validará el comportamiento responsive utilizando viewport emulation en:
- iPhone 14 Pro (390x844)
- Samsung Galaxy S23 (412x915)
- iPad Air (820x1180)

Se observarán:
- adaptación del layout
- overflow horizontal
- texto cortado
- superposición de elementos
- comportamiento de menú, botones y formularios

### Test Case 3 — Performance y carga
Se relevarán métricas de carga del sitio utilizando Playwright MCP y Performance API.

Se registrarán:
- DOMContentLoaded
- Load completo
- DOM Interactive
- recursos cargados, tamaño y tiempo de descarga

### Test Case 4 — Accesibilidad web
Se analizará la accesibilidad utilizando Playwright MCP con axe-core.

Se registrarán:
- violaciones WCAG 2.1
- nivel de impacto: critical, serious, moderate, minor
- elementos afectados
- regla axe correspondiente

### Test Case 5 — Validación de estructura HTML semántica y CSS
Se validará:
- jerarquía de headings
- landmarks semánticos (`main`, `nav`, `section`, `article`, `footer`)
- asociación correcta entre labels y campos de formulario
- validación HTML mediante W3C
- validación CSS de `styles.css`, `components.css` y `responsive.css`

## Herramientas a utilizar

### Playwright MCP
Se utilizará para automatizar la navegación del sitio en `http://localhost:3000`, ejecutar pruebas visuales y funcionales, emular distintos viewports y relevar métricas de performance y accesibilidad.

### GitHub MCP
Se utilizará para crear issues de tipo bug directamente desde el flujo de testing, dejando trazabilidad de cada hallazgo relevante encontrado durante las pruebas.

## Justificación de las herramientas
Playwright MCP permite ejecutar pruebas reales sobre el sitio en entorno local y simular distintos navegadores o dispositivos, lo cual es fundamental para validar compatibilidad, responsive, performance y accesibilidad.

GitHub MCP permite registrar formalmente los hallazgos como issues de tipo bug, asociarlos al trabajo del equipo y facilitar su seguimiento y resolución antes de la release.

## Criterios de aceptación
- [ ] Se ejecutaron 5 test cases con Playwright MCP contra `http://localhost:3000`
- [ ] Se realizó testing en Momento 1 sobre ramas `feature/`
- [ ] Se realizó testing en Momento 2 sobre la rama `develop`
- [ ] Se creó al menos un issue bug por cada hallazgo relevante
- [ ] Todos los test cases incluyen capturas de pantalla
- [ ] Se completó `testing-doc.md` con índice y resumen de issues
- [ ] Se notificó a los responsables de los bugs encontrados
- [ ] Se documentó en cada test case el momento de ejecución y los issues generados

## Estrategia de registro de hallazgos
Se considerará bug todo hallazgo que:
- rompa el layout o la experiencia visual
- genere problemas de responsive
- afecte accesibilidad de manera relevante
- incumpla estructura semántica esperada
- presente errores de validación HTML o CSS importantes
- degrade la performance de forma visible o injustificada

No se registrarán como bugs observaciones menores que no afecten el funcionamiento, la visualización o la calidad general del entregable, salvo que acumuladas representen una inconsistencia relevante.

## Evidencia del proceso
_Esta sección se completará al finalizar las pruebas._

### Prompts utilizados en Copilot Agent + Playwright MCP
Pendiente de completar.

### Resumen de resultados
Pendiente de completar.

### Cantidad de tests ejecutados
Pendiente de completar.

### Cantidad de bugs creados
Pendiente de completar.

### Decisiones sobre hallazgos registrados como bugs
Pendiente de completar.