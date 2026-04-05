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
| [#28](https://github.com/martindebenedetti/Planix/issues/28) | Desborde horizontal de la tabla Gantt en viewports desktop | Compatibilidad visual desktop | Frontend | Abierto |

## Resumen de issues — Momento 2
| Issue | Título | Tipo de hallazgo | Responsable | Estado |
|---|---|---|---|---|
| Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |

## Observaciones
En el **Momento 1** se ejecutaron los siguientes test cases sobre la rama `feature/dev-frontend-css-add-styles`:

- **TC1** — Compatibilidad visual en navegadores desktop  
  Resultado: **FAIL CON OBSERVACIONES**  
  Hallazgo principal: desborde horizontal de la tabla Gantt en todos los viewports desktop evaluados.  
  Issue asociado: [#28](https://github.com/martindebenedetti/Planix/issues/28)

- **TC3** — Performance y carga  
  Resultado: **PASS — Sin hallazgos**  
  No se detectaron problemas significativos de performance o carga.

- **TC4** — Accesibilidad web  
  Resultado: **PASS — Sin hallazgos**  
  No se detectaron violaciones WCAG 2.1 en la revisión realizada.

- **TC5** — Validación de estructura HTML semántica y CSS  
  Resultado: **PASS — Sin hallazgos**  
  La estructura HTML semántica y la carga de los archivos CSS relevantes para esta rama fueron correctas.

Queda pendiente la ejecución del **TC2** sobre la rama de responsive y, posteriormente, el **Momento 2** completo sobre `develop`.