# Testing Doc — Primer Parcial

## Índice de test cases
- [Test Case 1 — Compatibilidad en navegadores desktop](./test-case-1.md)
- [Test Case 2 — Responsive en dispositivos móviles y tablet](./test-case-2.md)
- [Test Case 3 — Performance y carga](./test-case-3.md)
- [Test Case 4 — Accesibilidad web](./test-case-4.md)
- [Test Case 5 — Validación de estructura HTML semántica y CSS](./test-case-5.md)
- [Test Case 6 — Migración Bootstrap responsive](./test-case-6.md)
- [Test Case 7 — Modal compartir enlace Bootstrap](./test-case-7.md)
- [Test Case 8 — Offcanvas de ayuda Bootstrap](./test-case-8.md)
- [Test Case 9 — Responsive: Implementación de Componente Avanzado HTML (iframe YouTube)](./test-case-9.md)
- [Test Case 10 — Responsive: Implementación de Componente Avanzado HTML (details/summary)](./test-case-10.md)


## Resumen general
Este documento centraliza los resultados de testing ejecutados en dos momentos:
- **Momento 1**: testing pre-merge sobre ramas `feature/`
- **Momento 2**: testing post-merge sobre `develop`

## Resumen de issues — Momento 1
| Issue | Título | Tipo de hallazgo | Responsable | Estado |
|---|---|---|---|---|
| [#28](https://github.com/martindebenedetti/Planix/issues/28) | Desborde horizontal de la tabla Gantt en viewports desktop | Compatibilidad visual desktop | Frontend | Cerrado |

## Resumen de issues — Momento 2
| Issue | Título | Tipo de hallazgo | Responsable | Estado |
|---|---|---|---|---|
| No se generaron issues | Sin hallazgos relevantes en integración final | QA post-merge | QA | Cerrado |

## Observaciones
En el **Momento 1** se ejecutaron los siguientes test cases:

- **TC1** — Compatibilidad visual en navegadores desktop sobre la rama `feature/dev-frontend-css-add-styles`  
  Resultado: **FAIL CON OBSERVACIONES**  
  Hallazgo principal: desborde horizontal de la tabla Gantt en todos los viewports desktop evaluados.  
  Issue asociado: [#28](https://github.com/martindebenedetti/Planix/issues/28) (**cerrado**)

- **TC2** — Responsive en dispositivos móviles y tablet sobre la rama `feature/responsive-design-add-responsive-styles`  
  Resultado: **PASS — Sin hallazgos**  
  No se detectaron problemas de overflow horizontal, texto cortado, superposición de elementos ni fallas de adaptación en menú, botones o formulario.

- **TC3** — Performance y carga sobre la rama `feature/dev-frontend-css-add-styles`  
  Resultado: **PASS — Sin hallazgos**  
  No se detectaron problemas significativos de performance o carga.

- **TC4** — Accesibilidad web sobre la rama `feature/dev-frontend-css-add-styles`  
  Resultado: **PASS — Sin hallazgos**  
  No se detectaron violaciones WCAG 2.1 en la revisión realizada.

- **TC5** — Validación de estructura HTML semántica y CSS sobre la rama `feature/dev-frontend-css-add-styles`  
  Resultado: **PASS — Sin hallazgos**  
  La estructura HTML semántica y la carga de los archivos CSS relevantes para la rama evaluada fueron correctas.

En el **Momento 2**, ya con todas las features integradas en `develop`, se obtuvieron los siguientes resultados:

- **TC1** — Compatibilidad visual en navegadores desktop  
  Resultado: **PASS — Sin hallazgos**  
  Se verificó que el issue [#28](https://github.com/martindebenedetti/Planix/issues/28) quedó resuelto en la integración final.

- **TC2** — Responsive en dispositivos móviles y tablet  
  Resultado: **PASS — Sin hallazgos**  
  El diseño responsive se comportó correctamente en iPhone 14 Pro, Samsung Galaxy S23 e iPad Air.

- **TC3** — Performance y carga  
  Resultado: **PASS — Sin hallazgos**  
  No se detectaron problemas significativos de carga; `responsive.css` se cargó correctamente.

- **TC4** — Accesibilidad web  
  Resultado: **PASS — Sin hallazgos**  
  No se detectaron violaciones WCAG 2.1 en la integración final.

- **TC5** — Validación de estructura HTML semántica y CSS  
  Resultado: **PASS — Sin hallazgos**  
  La jerarquía de headings, los landmarks semánticos, los labels y la carga de estilos fueron correctos.

- **TC6** — Migración Bootstrap responsive  
  Resultado: **PASS — Sin hallazgos**  
  Los breakpoints mobile, tablet y desktop se mantienen estables y los overrides visuales de Bootstrap se aplican correctamente.

- **TC7** — Modal compartir enlace Bootstrap  
  Resultado: **PASS — Sin hallazgos**  
  El modal se abre, muestra overlay/backdrop y se cierra correctamente en desktop, mobile e iPad. `bootstrap-overrides.css` se aplica en `.modal-content`.

- **TC8** — Offcanvas de ayuda Bootstrap  
  Resultado: **PASS — Sin hallazgos**  
  El offcanvas de ayuda se abre y cierra correctamente, el overlay funciona y se mantiene la identidad visual en desktop, mobile e iPad.

- **TC9** — Responsive: iframe YouTube  
  Resultado: **PASS — Sin hallazgos**  
  El componente iframe se adapta correctamente en los tres viewports y conserva la experiencia visual esperada.

- **TC10** — Responsive: details/summary  
  Resultado: **PASS — Sin hallazgos**  
  El componente accordion se comporta bien en desktop, mobile e iPad, las transiciones son estables y la visual permanece coherente.

No se detectaron nuevos bugs en Momento 2.
 
## Ejecucion Jasmine - Actividad Obligatoria 3

Se agrego una ejecucion especifica de tests unitarios y de funciones UI para la rama `fix/RCN1-ui-test-spies`.

| Fecha | Runner | Resultado | Evidencia |
|---|---|---|---|
| 03/06/2026 | `js/test/test-runner.html` con Jasmine CDN en Chrome headless | **43 specs, 0 failures** | `js/test/screenshots/jasmine-ui-spies-2026-06-03.png` y `js/test/screenshots/jasmine-ui-spies-suite-detail-2026-06-03.png` |

Cobertura incorporada:
- 4 flujos de logica pura: crear proyecto, agregar tarea, calcular avance, listar/filtrar tareas.
- Tests de UI para `ejecutarCrearProyecto()`, `ejecutarAgregarTarea()`, `ejecutarCalcularAvance()`, `ejecutarFiltrarTareas()` y `mostrarMenuPrincipal()`.
- Uso de `spyOn(window, 'prompt')` y `spyOn(window, 'alert')`.
- Assertions requeridas: `toBe()`, `toEqual()`, `toContain()`, `toThrow()`, `toBeTruthy()` y `toBeFalsy()`.
