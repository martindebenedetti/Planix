# Changelog

Este archivo se actualiza con cada Pull Request para registrar avances y correcciones.

---

## [Unreleased]

### Added

### Changed

### Fixed

---

## [Release Segundo Parcial] - 2026-06-24

### Added

- [feature/coord-devops-segundo-parcial] Actualización general de la estructura del proyecto para la entrega del Segundo Parcial. Redacción de README.md con detalles de la v2.0, ejecución de Code Reviews asistidos por IA a los módulos asíncronos y de pruebas, y preparación del entorno para despliegue en GitHub Pages.
  PR: [#133](https://github.com/martindebenedetti/Planix/pull/133) — @giann98 (Coordinador / DevOps) — Issue: [#126](https://github.com/martindebenedetti/Planix/issues/126)

- [feature/tester-qa-js-testing-suite] Implementación de suite de testing avanzada (101 specs) integrando `api.spec.js` y `library.spec.js`. Incorporación de auditorías de rendimiento y accesibilidad (Lighthouse) para monitoreo de métricas de calidad.
  PR: [#132](https://github.com/martindebenedetti/Planix/pull/132) — @giann98 (Tester QA/JS) — Issue: [#125](https://github.com/martindebenedetti/Planix/issues/125)

- [feature/dev-libreria-externa-sweetalert2] Creación de `docs/03-specs/segundo-parcial/spec-dev-libreria-externa.md` con plan de integración de SweetAlert2 vía CDN. Integración de `Notificaciones.confirmar()` y `Notificaciones.exito()` en `manejarAccionesTabla()` de `js/script.js` para confirmación previa a eliminación de tareas. Reemplazo de alertas inline por `Notificaciones.exito()` y `Notificaciones.error()` en `manejarAgregarTarea()` al guardar una tarea. PR: [#129](https://github.com/martindebenedetti/Planix/pull/129) — @martindebenedetti (Desarrollador JS librerías externas) — Issue: [#124](https://github.com/martindebenedetti/Planix/issues/124) — [#130](https://github.com/martindebenedetti/Planix/issues/130) — [#131](https://github.com/martindebenedetti/Planix/issues/131)

- [feature/dev-async-fetch-api] Implementación de consumo asíncrono de tareas externas mediante JSONPlaceholder, incorporando fetch, manejo de errores HTTP/red, estados de carga en la UI, procesamiento de colecciones con filter, map y reduce, integración con DOM, persistencia mediante Storage y suite Jasmine para ApiService con 97 specs aprobados y 0 failures.
  PR: [#128](https://github.com/martindebenedetti/Planix/pull/128) — @leanlex (Desarrollador JS Asíncrono - Fetch & APIs) — Issue: [#127](https://github.com/martindebenedetti/Planix/issues/127)

### Fixed

- [fix/rc14-changelog-release] Resolución de RC14: reorganización final de `changelog.md`, manteniendo `## [Unreleased]` preparado para futuras integraciones y registrando las correcciones del Segundo Parcial bajo la sección de release correspondiente.  
  PR: [#154](https://github.com/martindebenedetti/Planix/pull/154) — @leanlex (Coordinación Fase 2) — Issue: [#148](https://github.com/martindebenedetti/Planix/issues/148)

- [fix/library-spec-error-validacion] Se resolvió un problema en un test dentro de library.spec.js.
 PR: [#153](https://github.com/martindebenedetti/Planix/pull/153) — @giann98 (Tester QA/JS)

- [fix/RC6-a-RC13-auditoria-y-fixes] Resolución integral de observaciones (RC6-RC13): implementación de casos de prueba asíncronos en Jasmine (error 500 y rechazo de promesas), normalización semántica de la tabla Gantt mediante aria-labels y visually-hidden, optimización de métricas Lighthouse (Mobile Performance y Accessibility 100/100), y refactorización de lógica de visibilidad en script.js Se reemplazaron estilos inline evitables por clases utilitarias de Bootstrap, manteniendo únicamente la mutación de ancho porcentual necesaria para la barra de progreso dinámica.
  PR: [#135](https://github.com/martindebenedetti/Planix/pull/135) — @giann98 (Tester QA/JS) — Issue: [#141](https://github.com/martindebenedetti/Planix/issues/141) — Issue: [#142](https://github.com/martindebenedetti/Planix/issues/142) — Issue: [#143](https://github.com/martindebenedetti/Planix/issues/143) — Issue: [#144](https://github.com/martindebenedetti/Planix/issues/144) — Issue: [#145](https://github.com/martindebenedetti/Planix/issues/145) — Issue: [#146](https://github.com/martindebenedetti/Planix/issues/146) — Issue: [#147](https://github.com/martindebenedetti/Planix/issues/147)

- [fix/rc1-api-service-errors] Corrección del manejo interno de errores en `ApiService`: se agregaron bloques `try-catch` en `fetchData()` y `eliminarTodo()` para capturar errores de red, DNS, conexión o respuestas HTTP inválidas, relanzando mensajes controlados para la interfaz.  
  PR: [#149](https://github.com/martindebenedetti/Planix/pull/149) — @leanlex (Coordinación Fase 2 / Dev Async) — Issue: [#136](https://github.com/martindebenedetti/Planix/issues/136)

- [fix/rc2] Reemplazo de colores hardcodeados `#d33` y `#6c757d` en `js/libs/notificaciones.js` por variables CSS del sistema de diseño del proyecto (`var(--color-danger)` y `var(--color-slate-500)`), alineando los modales de confirmación de SweetAlert2 con el tema visual de Planix.  
  PR: [#151](https://github.com/martindebenedetti/Planix/pull/151) — @martindebenedetti (Desarrollador JS librerías externas) — Issue: [#137](https://github.com/martindebenedetti/Planix/issues/137)

- [fix/rc3-rc4-rc5] RC3: `Notificaciones.error()` reemplaza título hardcodeado "Ocurrió un error" por parámetro `titulo`, manteniendo consistencia con `exito()` e `info()`. RC4: versión de SweetAlert2 fijada a `11.14.5` en `index.html` y `libreria-doc.md`. RC5: Caso de Uso 1 en `libreria-doc.md` actualizado para reflejar el uso real de `proyecto.eliminarTareaPorNombre(nombreTarea)`.  
  PR: [#152](https://github.com/martindebenedetti/Planix/pull/152) — @martindebenedetti (Desarrollador JS librerías externas) — Issue: [#138](https://github.com/martindebenedetti/Planix/issues/138) — [#139](https://github.com/martindebenedetti/Planix/issues/139) — [#140](https://github.com/martindebenedetti/Planix/issues/140)

--- 

## [Release Actividad Obligatoria N° 4] 2026-06-15

### Added

- [feature/coord-devops-cuarta-entrega] Se completaron las tareas de Coordinación, DevOps y Tester QA de la Actividad Obligatoria N.º 4, incluyendo revisión de entregas, gestión de hallazgos, correcciones de robustez y seguridad, pruebas Jasmine y evidencias finales con 88 specs aprobados y 0 failures.
  PR: [#110](https://github.com/martindebenedetti/Planix/pull/110) - @leanlex (Coordinador / DevOps + Tester QA) - Issue: [#109](https://github.com/martindebenedetti/Planix/issues/109)

* [feature/dev-eventos-dom] Refactorización de `js/script.js` a controlador puro, eliminación de `prompt()`/`alert()`, implementación de eventos del DOM para captura de datos, renderizado dinámico de la interfaz (tabla Gantt, barra de progreso, alertas visuales) e integración con persistencia y modelos. Actualización de `index.html` y documentación técnica en `spec-dev-eventos-dom.md`.  
  PR: [#113](https://github.com/martindebenedetti/Planix/pull/113) — @giann98 (Desarrollador JS Eventos + DOM) — Issue: [#111](https://github.com/martindebenedetti/Planix/issues/111)

* [feature/dev-poo-logica-negocio] Implementación de clases del dominio (Tarea, Proyecto, GestorProyectos) en `js/models/` aplicando POO en ES5. Creación de diagrama de clases PlantUML, actualización de `index.html` y documentación técnica en `spec-dev-poo.md`.  
  PR: [#108](https://github.com/martindebenedetti/Planix/pull/108) — @martindebenedetti (Desarrollador JS POO) — Issue: [#107](https://github.com/martindebenedetti/Planix/issues/107)

* [feature/dev-storage] Se agrega la capa de abstracción para `localStorage` y `sessionStorage` mediante `js/utils/storage.js`, y documentación de estrategia en `docs/06-storage/storage-doc.md`.  
  PR: [#106](https://github.com/martindebenedetti/Planix/pull/106) — @leanlex (Desarrollador JS Storage) — Issue: [#105](https://github.com/martindebenedetti/Planix/issues/105)

### Fixed

- [fix/rc16-rc17] RC16: Se completa checklist de criterios de aceptación en `docs/03-specs/actividad-obligatoria-4/spec-dev-storage.md`. RC17: Se agrega manejo específico de `QuotaExceededError` en `js/utils/storage.js`, distinguiendo el caso de storage lleno con un mensaje diferenciado del error genérico.  
  PR: [#121](https://github.com/martindebenedetti/Planix/pull/121) — @martindebenedetti (Desarrollador JS POO)

- [fix/rc1-a-rc3] RC1: Se completa checklist de criterios de aceptación en `docs/03-specs/actividad-obligatoria-4/spec-tester-qa.md`, marcando el ítem `spec-tester-qa.md creado y commiteado antes de modificar tests`. RC2: Se elimina sección "Pendiente para la publicación final" de `README.md` por contener información no relevante. RC3: Se actualizan los roles en la tabla de integrantes del `README.md`.  
  PR: [#120](https://github.com/martindebenedetti/Planix/pull/120) — @martindebenedetti (Desarrollador JS POO)

- [fix/RC5-a-RC13-corrección-script.js] Refactorización defensiva del controlador resolviendo observaciones RC5 a RC13: implementación de null-checks en accesos al DOM, delegación de eventos, manejo estricto de excepciones (try/catch) en serialización/recuperación del Storage, corrección en persistencia de sesión y actualización dinámica de visibilidad de secciones.  
  PR: [#119](https://github.com/martindebenedetti/Planix/pull/119) — @giann98 (Desarrollador JS Eventos + DOM)

- [fix/rc14-rc15]RC14: Se completa "Criterios de aceptación — Checklist". RC15: Se reemplaza el uso directo de `Proyecto.fromJSON()` en `cargarDatosDesdeStorage()` por una delegación a `GestorProyectos.fromJSON()`, eliminando la duplicación de lógica de reconstrucción en el controlador.
  PR: [#118](https://github.com/martindebenedetti/Planix/pull/118) — @martindebenedetti (Desarrollador JS POO)

- [fix/resolucion_issue] Resolución de issues #112 #114 y #115: se definen `validarFormatoFecha()` y `parsearFecha()` como funciones privadas en `js/models/Proyecto.js` (resuelve `ReferenceError`); se implementan `toJSON()` y `fromJSON()` en `GestorProyectos` (resuelve 2 tests fallidos de Jasmine); y se refactoriza `js/script.js` a controlador puro eliminando funciones de validación y datos globales.  
  PR: [#116](https://github.com/martindebenedetti/Planix/pull/116) — @martindebenedetti (Desarrollador JS POO) — Issue:[#112](https://github.com/martindebenedetti/Planix/issues/112) [#114](https://github.com/martindebenedetti/Planix/issues/114), [#115](https://github.com/martindebenedetti/Planix/issues/115)

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
