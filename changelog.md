# Changelog

Este archivo se actualiza con cada Pull Request para registrar avances y correcciones.

---

## [Unreleased]

### Added

- [feature/dev-eventos-dom] Refactorización de `js/script.js` a controlador puro, eliminación de `prompt()`/`alert()`, implementación de eventos del DOM para captura de datos, renderizado dinámico de la interfaz (tabla Gantt, barra de progreso, alertas visuales) e integración con persistencia y modelos. Actualización de `index.html` y documentación técnica en `spec-dev-eventos-dom.md`.  
  PR: [#113](https://github.com/martindebenedetti/Planix/pull/113) — @giann98 (Desarrollador JS Eventos + DOM) — Issue: [#111](https://github.com/martindebenedetti/Planix/issues/111)

- [feature/dev-poo-logica-negocio] Implementación de clases del dominio (Tarea, Proyecto, GestorProyectos) en `js/models/` aplicando POO en ES5. Creación de diagrama de clases PlantUML, actualización de `index.html` y documentación técnica en `spec-dev-poo.md`.  
  PR: [#108](https://github.com/martindebenedetti/Planix/pull/108) — @martindebenedetti (Desarrollador JS POO) — Issue: [#107](https://github.com/martindebenedetti/Planix/issues/107)

- [feature/dev-storage] Se agrega la capa de abstracción para `localStorage` y `sessionStorage` mediante `js/utils/storage.js`, y documentación de estrategia en `docs/06-storage/storage-doc.md`.  
  PR: [#106](https://github.com/martindebenedetti/Planix/pull/106) — @leanlex (Desarrollador JS Storage) — Issue: [#105](https://github.com/martindebenedetti/Planix/issues/105)

---

## [Release Actividad Obligatoria N° 3] 2026-05-18

### Added

- [feature/coord-cierre-etapa] Se actualiza `spec-devops.md` con cierre de Actividad, se actualiza `plan.md` y `README.md`. PR: [#89](https://github.com/martindebenedetti/Planix/pull/89) — @giann98 (Coordinador / DevOps) — Issue: #83

- [feature/tester-javascript-jasmine] Se agrega `spec-tester.md` y completa con la realización de los test. Se crean archivos `js/test/script.spec.js`, `js/test/test-runner.html`, `js/test/testing-doc.md` y las capturas en `js/test/screenshots/`. PR: [#88](https://github.com/martindebenedetti/Planix/pull/88) — @giann98 (Tester QA)

- [feature/dev-javascript-logica-negocio] Implementación de lógica de negocio JavaScript para los 4 flujos principales de Planix. Se agrega `js/script.js`, se referencia desde `index.html` y se completa `spec-dev-javascript.md`. PR: [#87](https://github.com/martindebenedetti/Planix/pull/87) — @leanlex (Desarrollador JavaScript) — Issue: #80, #81

- [feature/arq-diagramas-actividades] Creación de documentación, diagramas `.puml` y exportación de PNG para los 4 flujos principales del sistema. PR: [#85](https://github.com/martindebenedetti/Planix/pull/85) — @martindebenedetti (Arquitecto de Diagramas de Actividades) — Issue: #82

- [feature/coord-devops-tercera-entrega] Se documenta la carga de la PR Feature/coord devops tercera entrega, se carga el spec-devops.md. PR: [#84](https://github.com/martindebenedetti/Planix/pull/84) — @martindebenedetti (Arquitecto de Diagrama de Actividades) Ayudando al rol(Coordinador / DevOps) — Issue: #83

### Fixed

---

- [fix/RCN1-ui-test-spies] RCN1 Se realiza cambios en los documentos de test y se vuelve a ejecutar la suite de Jasmine con 43 casos, agregando los spies PR: [#103] (https://github.com/martindebenedetti/Planix/pull/103) — @giann98 (Tester JavaScript)

- [fix/RC25-justificacion-test] RC25 Se agrega justificación al test realizado en `testing-doc.md`. PR: [#102] (https://github.com/martindebenedetti/Planix/pull/102) — @giann98 (Tester JavaScript)

- [fix/RC24-seccion-at-close] RC24 Corrección de estructura en `spec-tester.md` separando la sección
  "AL CERRAR" de la sección "DURANTE". PR: [#101] (https://github.com/martindebenedetti/Planix/pull/101) — @giann98 (Tester JavaScript)

- [fix/tester-ui-spies-changelog] Se agregan tests de UI con spies de Jasmine para `ejecutarCrearProyecto`, `ejecutarAgregarTarea`, `ejecutarCalcularAvance`, `ejecutarFiltrarTareas` y `mostrarMenuPrincipal`. Se actualiza changelog con PR #99.
  PR: [#100](https://github.com/martindebenedetti/Planix/pull/100) — @leanlex (Tester JavaScript)

- [fix/dev-javascript-rc19-rc20] Se mueve el script embebido del modal compartir de `index.html` a `js/script.js`, integrándolo en el bloque `DOMContentLoaded` junto con `mostrarMenuPrincipal()`.
  PR: [#99](https://github.com/martindebenedetti/Planix/pull/99) — @leanlex (Desarrollador JavaScript)

- [fix/rc-diagramas-actividades] RC7 a RC17: Se corrigen los diagramas de actividades reemplazando swimlanes genéricos por particiones específicas (Usuario, Interfaz, Lógica), se ajusta el uso de 'stop' y 'end', se agregan títulos a los archivos `.puml` y se completan los checklist en `spec-arq-diagramas.md`. PR:[#98](https://github.com/martindebenedetti/Planix/pull/98) — @martindebenedetti (Arquitecto de Diagrama de Actividades) Ayudando al rol(Coordinador / DevOps)

- [fix/RC4-RC5-README.md] RC4/RC5: Se agrega en `README.md` la sección "Diagramas de Actividades" con link a `diagramas-doc.md` y descripción de los 4 flujos funcionales cubiertos. (Crear Proyecto, Agregar Tarea, Calcular Avance, Listar y Filtrar Tareas).Se agrega linken PR #85. PR:[#97](https://github.com/martindebenedetti/Planix/pull/97) — @martindebenedetti (Arquitecto de Diagrama de Actividades) Ayudando al rol(Coordinador / DevOps)

- [fix/se_modifica_spec-devops.md] Se corrige spec.devops.md. PR:[#96](https://github.com/martindebenedetti/Planix/pull/96) — @martindebenedetti (Arquitecto de Diagrama de Actividades) Ayudando al rol(Coordinador / DevOps)

- [fix/rc3-cerrar-checklist-spec-tester] RC3: Se cierran los dos ítems del checklist en `docs/03-specs/actividad-obligatoria-3/spec-tester.md`: sin bugs detectados en la ejecución (18/18 specs pasando, 0 fallos) y testabilidad ya garantizada por el código del Dev JS sin necesidad de coordinación adicional. PR:[#95](https://github.com/martindebenedetti/Planix/pull/95) — @martindebenedetti (Arquitecto de Diagrama de Actividades) Ayudando al rol(Coordinador / DevOps)

- [fix/rc1-rc2-corregir-reviews-ia-devops] RC1: Se elimina el Review 4 de `spec-devops.md` que afirmaba falsamente haber realizado una review con IA sobre las PRs #84 y #86 (pertenecen al mismo integrante). RC2: Se eliminan las secciones "Líneas del diff" de los Reviews 1-3 que documentaban inline comments inexistentes en el diff de GitHub. PR:[#94](https://github.com/martindebenedetti/Planix/pull/94)— @martindebenedetti (Arquitecto de Diagrama de Actividades) Ayudando al rol(Coordinador / DevOps)

- [fix/dev-javascript-issue-changelog-spec] Actualización de `changelog.md` y completado del checklist AT CLOSE en `spec-dev-javascript.md`.
  PR: [#93](https://github.com/martindebenedetti/Planix/pull/93) — @leanlex (Desarrollador JavaScript) — Issue: [#92](https://github.com/martindebenedetti/Planix/issues/92)

- [fix/dev-javascript-jsdoc-menu-nombres] Corrección de `js/script.js`: se agrega JSDoc en todas las funciones, se renombran funciones para que el menú se dispare al cargar la página.
  PR: [#91](https://github.com/martindebenedetti/Planix/pull/91) — @leanlex (Desarrollador JavaScript)

- [fix/update-plan-readme-tercer-entrega] Se actualiza el documento plan.md y README.md con los cambios realizados en la tercer entrega. PR[#86](https://github.com/martindebenedetti/Planix/pull/86) — @giann98 (Coordinador / DevOps) — Issue: #83

## [Release Primer Parcial] - 2026-04-22

### Added

- [feature/coord-devops-update-doc-project] Actualización de `spec-devops.md`, `README.md` y del mockup del Primer Parcial (`docs/01-mockup/disenio-bootstrap.png`), además de coordinación de code reviews asistidas por IA sobre las PRs del equipo y seguimiento de issues en GitHub Projects.  
  PR: [#54](https://github.com/martindebenedetti/Planix/pull/54) — @leanlex (Coordinador / DevOps) — Issue: #53

- [feature/esp-com-bootstrap-add-component] Documentación y creación de archivos correspondientes al rol de Especialista en Bootstrap
  PR: [#64](https://github.com/martindebenedetti/Planix/pull/64) — @giann98 (Desarrollador Frontend/Bootstrap) — Issue: #57

- [feature/dev-comp-html-avanzados-add-components] Documentación completa y creación de archivos correspondientes al rol de Desarrollador de Componentes HTML Avanzados
  PR: [#61](https://github.com/martindebenedetti/Planix/pull/61) — @martindebenedetti (Desarrollador de Componentes HTML Avanzado) — Issue: #60

- [feature/dev-frontend-bootstrap-migration] Documentación completa y creación de archivos correspondientes al rol de Desarrollador Frontend/Bootstrap
  PR: [#58](https://github.com/martindebenedetti/Planix/pull/58) — @giann98 (Desarrollador Frontend/Bootstrap) — Issue: #56

### Fixed

- [fix/modificacion-changelog] Se modifica el changelog agregando la entrada de la PR#77 y PR#76, además de la de propia rama fix/modificacion-changelog — PR#78 — @giann98 (Coordinador / DevOps)

- [fix/RCN1-RCN2-correccion-markdown] Se mejora el formato markdown del spec-html-avanzado y se crea subcarpeta evidencias dentro de 03-specs — PR#77 — @giann98 (Coordinador / DevOps)

- [fix/coord-devops-cierre-rc11-bootstrap] Documenta cierre de RC-11 e integración final de TC-7 y TC-8 en la release del Primer Parcial. PR: #76 — @leanlex — Ayudando al rol(Coordinador / DevOps)

- [fix/RC9-RC12-frontend-spec] Se deja evidencia que se utiliza Figma MCP para analizar mockup y se realiza review sobre una PR — PR#75 — @giann98 (Coordinador / DevOps)

- [fix/RC-13-Recrear-feature-hmtl-avanzado] Se documenta que los commits se encuentran dentro del feature de html-avanzado — PR#74 — @giann98 (Coordinador / DevOps)

- [fix/RC11-Agregar-TC7-TC8] Se generan los TC7 y TC8 con evidencia Playwright MCP, además se ajustó el documento testing-doc.md — PR#72 — @giann98 (Coordinador / DevOps)

- [fix/testcase-6-playwright-format] Corrección del formato y evidencia Playwright MCP del TC-6 — PR#71 — @giann98 (Coordinador / DevOps)

- [fix/coord-devops-integracion-correcciones-parcial] Documenta integración parcial de correcciones del Primer Parcial y deja RC-11 pendiente para rama posterior — PR #70 — @leanlex — Ayudando al rol(Coordinador / DevOps)

- [fix/rc17-actualizar-mockup-bootstrap] RC-17: Reemplazo de `docs/01-mockup/disenio-bootstrap.png` por la versión actualizada del diseño, que refleja el estado real del HTML: sección introductoria eliminada, acordeón Información del Proyecto, video tutorial y tabla Gantt como pantalla principal.
  PR: [#69](https://github.com/martindebenedetti/Planix/pull/69) — @martindebenedetti (ARQUITECTO DE DIAGRAMAS DE ACTIVIDADES) Ayudando al rol(Coordinador / DevOps)

- [fix/rc16-eliminar-seccion-descripcion] RC-16: Eliminada la sección `#descripcion` ("¿Qué es este planificador?") de `index.html` por no estar contemplada en el diseño Figma. El Figma muestra la vista Gantt directamente como pantalla principal; la sección fue agregada sin respaldo en el mockup (`docs/01-mockup/disenio-bootstrap.png`).
  PR: [#68](https://github.com/martindebenedetti/Planix/pull/68) — @martindebenedetti (ARQUITECTO DE DIAGRAMAS DE ACTIVIDADES) Ayudando al rol(Coordinador / DevOps)

- [fix/rc14-test-cases-9-10-playwrigth] RC-14: Reescritura completa de test-case-9.md y test-case-10.md utilizando Playwright MCP, con capturas de herramientas en acción mostrando ejecución real de tool calls. Regeneración de todas las capturas en capturas/tc-9/ y capturas/tc-10/. Documentación completa con prompts, pasos ejecutados, resultados por viewport (iPhone 14 Pro, Samsung Galaxy S23, iPad Air). Estado: 12/12 tests PASSED, 0 bugs generados.
  PR: [#67](https://github.com/martindebenedetti/Planix/pull/67) — @martindebenedetti (ARQUITECTO DE DIAGRAMAS DE ACTIVIDADES) Ayudando al rol(Coordinador / DevOps)

- [fix/limpieza-changelog-RC02-RC03] Corrección del changelog, eliminación duplicado y ajuste de trazabilidad RC02 y RC03.
  PR: [#66](https://github.com/martindebenedetti/Planix/pull/66) — @giann98 (Coordinador / DevOps)

- [fix/sidebar-responsive1] Corrección del sidebar en mobile.
  PR: [#62](https://github.com/martindebenedetti/Planix/pull/62) — @giann98 (Frontend/Bootstrap) — Issue: #55

---

## [Release Actividad Obligatoria N°2] - 2026-04-13

### Added

- [feature/doc-qa-tester-add-test-case-1] Documentación completa del proceso QA de la Actividad Obligatoria 2: ejecución de Momento 1 y Momento 2.  
  PR: [#35](https://github.com/martindebenedetti/Planix/pull/35) — @leanlex (QA Tester / Documentador) — Issue: #34

- [feature/responsive-design-add-responsive-styles] Creación del archivo spec.responsive.md y en base a este archivo se creo el archivo css/responsive.css. PR: [#33](https://github.com/martindebenedetti/Planix/pull/33) — @martindebenedetti (Especialista en Responsive Design) — Issue: #29

- [feature/coord-devops-update-spec] Se agrega la especificación técnica del rol DevOps para la Actividad Obligatoria 2.  
  PR: [#32](https://github.com/martindebenedetti/Planix/pull/32) — @giann98 (Coordinador / DevOps) — Issue: #31

- [feature/dev-frontend-css-add-styles] Creación del archivo spec.frontend.md y en base a este archivo se crearon los archivos css/styles.css y css/components.css. PR: [#27](https://github.com/martindebenedetti/Planix/pull/27) — @martindebenedetti (Desarrollador Frontend) — Issue: #21

- [feature/mockup-actividad-2] Mockup actualizado con estilos visuales y actualización de README y plan.md  
  PR: [#26](https://github.com/martindebenedetti/Planix/pull/26) — @giann98 (Coordinador / DevOps) — Issue: #42

### Fixed

- [fix/remove-unused-gitkeep-files] Se eliminaron archivos `.gitkeep` innecesarios en carpetas de capturas que ya contienen archivos reales.  
  PR: [#51](https://github.com/martindebenedetti/Planix/pull/51) — @leanlex (Coordinador / DevOps).

- [fix/rc8-sidebar-icons] Se agregó una sidebar iconográfica en la estructura principal del planificador y sus estilos asociados en `css/styles.css`.  
  PR: [#50](https://github.com/martindebenedetti/Planix/pull/50) — @leanlex (Coordinador / DevOps).

- [fix/rc7-changelog-pr-number] Se corrigió la referencia de la PR en `changelog.md` para el fix RC7.  
  PR: [#49](https://github.com/martindebenedetti/Planix/pull/49) — @leanlex (Coordinador / DevOps).

- [fix/rc7-badge-hoy-s16] Se agregó el badge "HOY" en la columna S16 del encabezado del Gantt.  
  PR: [#48](https://github.com/martindebenedetti/Planix/pull/48) — @leanlex (Coordinador / DevOps).

- [fix/rc6-group-row-color-duplicate-rule] Se diferenció el color de las filas de grupo respecto del hover y se eliminó una regla duplicada en `css/styles.css`.  
  PR: [#47](https://github.com/martindebenedetti/Planix/pull/47) — @leanlex (Coordinador / DevOps).

- [fix/rc5-toolbar-btn-inactive-border] Se agregó borde visible al estado inactivo de `.toolbar-btn` para mejorar la consistencia con el mockup.  
  PR: [#46](https://github.com/martindebenedetti/Planix/pull/46) — @leanlex (Coordinador / DevOps).

- [fix/rc4-gantt-padding-mockup] Se ajustó el padding del área Gantt para alinearlo con el mockup de la Actividad Obligatoria N°2.  
  PR: [#44](https://github.com/martindebenedetti/Planix/pull/44) — @leanlex (Coordinador / DevOps).

- [fix/devops-complete-spec-evidence] Se completó `spec-devops.md` con evidencia, decisiones sobre el mockup y checklist final.  
  PR: [#41](https://github.com/martindebenedetti/Planix/pull/41) — @leanlex- Issue: #38 (Coordinador / DevOps).

- [fix/qa-add-mcp-config] Se agregaron Playwright MCP y GitHub MCP en `.vscode/mcp.json`.  
  PR: [#39](https://github.com/martindebenedetti/Planix/pull/39) — @leanlex — Issue: #37 (Coordinador / DevOps).

---

## [Release Actividad Obligatoria N°1] - 2026-03-26

### Added

- [feature/frontend-add-html-structure] Estructura HTML5 inicial del planificador de Gantt.  
  PR: [#11](https://github.com/martindebenedetti/Planix/pull/11) — @leanlex (Desarrollador Frontend) — Issue: #10

- [feature/doc-ux-add-readme-and-mockup] Agrega `README.md` y `spec-ux.md`.  
  PR: [#6](https://github.com/martindebenedetti/Planix/pull/6) — @leanlex (Documentador / Diseñador UX) — Issue: #5

- [feature/ia-prompts-engineering] Crear archivo template pull_request_template.md.  
  PR: [#2](https://github.com/martindebenedetti/Planix/pull/2) — @giann98 (Especialista en IA)

- [feature/ia-prompts-engineering] IA prompt engineering estructuración carpetas.  
  PR: [#1](https://github.com/martindebenedetti/Planix/pull/1) — @giann98 (Especialista en IA)

### Changed

- [feature/ia-prompts-descripciones] Documentación de prompts utilizados y comparativa de modelos de IA.
  PR: [#12](https://github.com/martindebenedetti/Planix/pull/12) — @giann98 (Especialista en IA) — Issue: #7

- [feature/ia-prompt-documentación] Agregar información en archivo sdd-decisions, spec-ia y spec-rol
  PR: [#9](https://github.com/martindebenedetti/Planix/pull/9) — @giann98 (Especialista en IA) — Issue: #8

- [feature/coordinador-setup-repo-and-pages] Correccion del changelog.md.  
  PR: [#4](https://github.com/martindebenedetti/Planix/pull/4) — @martindebenedetti (Coordinador / DevOps) — Issue: #3

### Fixed

- [fix/include-prompts-in-release] Se incorporan los archivos de prompts y comparativa de modelos de IA en la rama release/actividad-obligatoria-1.
  PR: [#15](https://github.com/martindebenedetti/Planix/pull/15) — @giann98 (Coordinador / DevOps)

- [fix/sdd-instalacion-copilot] Se agregan instrucciones de instalación de herramientas IA (GitHub Copilot y GitHub Pull Requests) en `sdd-decisions.md`.
  PR: [#17](https://github.com/martindebenedetti/Planix/pull/17) — @giann98 (Coordinador / DevOps)

- [fix/corregir-html] Correcciones post-revisión: spec movido a ruta correcta, párrafos y enlaces en index.html, config MCP de Figma.  
  PR: [#18](https://github.com/martindebenedetti/Planix/pull/18) — @leanlex (Desarrollador Frontend) y @giann98 (Coordinador / DevOps)

- [fix/actualizacion-plan] Actualización del archivo `plan.md` con requerimientos funcionales reales del sistema.
  PR: [#20](https://github.com/martindebenedetti/Planix/pull/20) — @giann98 (Coordinador / DevOps)

- [fix/documentar-correcciones-release] Corrección de modelo de IA en prompts-1.md. Commit: [1de6c27](https://github.com/martindebenedetti/Planix/commit/1de6c27) — @giann98 (Especialista en IA)

- [fix/documentar-correcciones-release] Corrección de modelo de IA en prompts-4.md.
  Commit: [ed00ffa](https://github.com/martindebenedetti/Planix/commit/ed00ffa) — @giann98 (Especialista en IA)

- [fix/documentar-correcciones-release] Eliminación de sección "Cómo usar este archivo" en changelog.md.
  Commit: [f09ff0a](https://github.com/martindebenedetti/Planix/commit/f09ff0a) — @giann98 (Especialista en IA)

- [fix/documentar-correcciones-release] Autor en prompts-2.md y prompts-3.md.
  Commits: [75eed4d](https://github.com/martindebenedetti/Planix/commit/75eed4d) / [430c39b](https://github.com/martindebenedetti/Planix/commit/430c39b) — @giann98 (Especialista en IA)

- [fix/documentar-correcciones-release] Correcciones de templates, imágenes y eliminación de index-correcciones.md.
  Commit: [d48f9d4](https://github.com/martindebenedetti/Planix/commit/d48f9d4) — @giann98 (Especialista en IA)

- [fix/documentar-correcciones-release] Documentación retroactiva de correcciones aplicadas directamente sobre release.
  PR: [#22](https://github.com/martindebenedetti/Planix/pull/22) — @martindebenedetti (Coordinador / DevOps)

- [fix/formato-changelog-correcciones] Corrección de formato en entradas [Fixed] del changelog.
  PR: [#24](https://github.com/martindebenedetti/Planix/pull/24) — @martindebenedetti (Coordinador / DevOps)

---
