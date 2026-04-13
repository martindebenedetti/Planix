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
- [x] Se ejecutaron 5 test cases con Playwright MCP contra `http://localhost:3000`
- [x] Se realizó testing en Momento 1 sobre ramas `feature/`
- [ ] Se realizó testing en Momento 2 sobre la rama `develop`
- [x] Se creó al menos un issue bug por cada hallazgo relevante
- [ ] Todos los test cases incluyen capturas de pantalla
- [x] Se completó `testing-doc.md` con índice y resumen de issues
- [x] Se notificó al Desarrollador Frontend y al Especialista en Responsive sobre los bugs encontrados
- [x] Se documentó en cada test case el momento de ejecución y los issues generados

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

### Prompts utilizados en Copilot Agent + Playwright MCP

Se utilizaron prompts específicos para cada test case del Momento 1.

**TC1 — Compatibilidad visual en navegadores desktop**  
Se utilizó un prompt orientado a verificar la visualización del sitio en viewports desktop (1920x1080, 1440x900 y 1280x800), revisando navegación, layout general, footer y presencia de overflow horizontal.

**TC2 — Responsive en dispositivos móviles y tablet**  
Se utilizó un prompt orientado a revisar el comportamiento responsive del sitio en los viewports 390x844, 412x915 y 820x1180, verificando overflow horizontal, texto cortado, superposición de elementos, adaptación de menú/botones y comportamiento del formulario.

**TC3 — Performance y carga**  
Se utilizó un prompt orientado a relevar métricas de carga (`DOMContentLoaded`, `Load completo`, `DOM Interactive`) y listar recursos cargados con tamaño y tiempo de descarga.

**TC4 — Accesibilidad web**  
Se utilizó un prompt orientado a ejecutar una revisión de accesibilidad con axe-core, agrupando hallazgos por nivel de impacto (`critical`, `serious`, `moderate`, `minor`).

**TC5 — Validación de estructura HTML semántica y CSS**  
Se utilizó un prompt orientado a revisar jerarquía de headings, landmarks semánticos, asociación entre labels y campos del formulario y estado de carga de archivos CSS.

### Resumen de resultados

Durante el Momento 1 se obtuvieron los siguientes resultados:

#### Rama `feature/dev-frontend-css-add-styles`
- **TC1**: FAIL CON OBSERVACIONES  
  Se detectó desborde horizontal de la tabla Gantt en todos los viewports desktop evaluados.
- **TC3**: PASS — Sin hallazgos  
  No se detectaron problemas significativos de performance o carga.
- **TC4**: PASS — Sin hallazgos  
  No se detectaron violaciones WCAG 2.1 en la revisión realizada.
- **TC5**: PASS — Sin hallazgos  
  La estructura HTML semántica y la carga de los archivos CSS relevantes para esta rama resultaron correctas.

#### Rama `feature/responsive-design-add-responsive-styles`
- **TC2**: PASS — Sin hallazgos  
  No se detectaron problemas de overflow horizontal, texto cortado, superposición de elementos ni fallas de adaptación en menú, botones o formulario.

### Cantidad de tests ejecutados

- Test cases ejecutados hasta el momento: **5**
- Momento ejecutado hasta el momento: **Momento 1 completo**
- Test cases pendientes: **Momento 2** completo sobre `develop`

### Cantidad de bugs creados

- Bugs creados hasta el momento: **1**
- Issue generado: [#28](https://github.com/martindebenedetti/Planix/issues/28)

### Decisiones sobre hallazgos registrados como bugs

Se registró como bug el hallazgo del **TC1** porque el desborde horizontal de la tabla Gantt afecta la visualización del componente en todos los viewports desktop testeados y obliga al usuario a desplazarse lateralmente para acceder a toda la información.

No se registró bug en **TC2** porque no se detectaron hallazgos relevantes de responsive en la rama evaluada.

No se registraron bugs en **TC3**, **TC4** ni **TC5** porque no se detectaron problemas relevantes de performance, accesibilidad o estructura semántica atribuibles a la rama evaluada.

### Observación de avance

El **Momento 1** quedó completo. Queda pendiente la repetición de los 5 test cases en el **Momento 2** sobre la rama `develop`, una vez integradas todas las features.
