# Testing Doc — Actividad Obligatoria N°2

## Índice de test cases
- [Test Case 1 — Compatibilidad en navegadores desktop](./test-case-1.md)
- [Test Case 2 — Responsive en dispositivos móviles y tablet](./test-case-2.md)
- [Test Case 3 — Performance y carga](./test-case-3.md)
- [Test Case 4 — Accesibilidad web](./test-case-4.md)
- [Test Case 5 — Validación de estructura HTML semántica y CSS](./test-case-5.md)

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
| Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |

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

Queda pendiente la ejecución completa del **Momento 2** sobre `develop`.
