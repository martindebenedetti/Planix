# Changelog

Este archivo se actualiza con cada Pull Request para registrar avances y correcciones.

---

## [Unreleased]

### Added

- [feature/coord-devops-update-doc-project] Actualización de `spec-devops.md`, `README.md` y del mockup del Primer Parcial (`docs/01-mockup/disenio-bootstrap.png`), además de coordinación de code reviews asistidas por IA sobre las PRs del equipo y seguimiento de issues en GitHub Projects.  
  PR: [#54](https://github.com/martindebenedetti/Planix/pull/54) - @leanlex (Coordinador / DevOps) - Issue: #53

- [feature/esp-com-bootstrap-add-component] Documentación y creación de archivos correspondientes al rol de Especialista en Bootstrap
PR: [#64](https://github.com/martindebenedetti/Planix/pull/64) - @giann98 (Desarrollador Frontend/Bootstrap) - Issue: #57


- [feature/dev-comp-html-avanzados-add-components] Documentación completa y creación de archivos correspondientes al rol de Desarrollador de Componentes HTML Avanzados
  PR: [#61](https://github.com/martindebenedetti/Planix/pull/61) - @martindebenedetti (Desarrollador de Componentes HTML Avanzado) - Issue: #60

- [feature/dev-frontend-bootstrap-migration] Documentación completa y creación de archivos correspondientes al rol de Desarrollador Frontend/Bootstrap
PR: [#58](https://github.com/martindebenedetti/Planix/pull/58) - @giann98 (Desarrollador Frontend/Bootstrap) - Issue: #56

### Fixed

- [fix/sidebar-responsive1] Corrección del sidebar en mobile.
PR: [#62](https://github.com/martindebenedetti/Planix/pull/62) - @giann98 (Frontend/Bootstrap) - Issue: #55
---

## [Release Actividad Obligatoria N°2] - 2026-04-13

### Added

- [feature/doc-qa-tester-add-test-case-1] Documentación completa del proceso QA de la Actividad Obligatoria 2: ejecución de Momento 1 y Momento 2.  
  PR: [#35](https://github.com/martindebenedetti/Planix/pull/35) - @leanlex (QA Tester / Documentador) - Issue: #34

- [feature/responsive-design-add-responsive-styles] Creación del archivo spec.responsive.md y en base a este archivo se creo el archivo css/responsive.css. PR: [#33](https://github.com/martindebenedetti/Planix/pull/33) - @martindebenedetti (Especialista en Responsive Design) -Issue: #29

- [feature/coord-devops-update-spec] Se agrega la especificación técnica del rol DevOps para la Actividad Obligatoria 2.  
  PR: [#32](https://github.com/martindebenedetti/Planix/pull/32) - @giann98 (Coordinador / DevOps) - Issue: #31

- [feature/dev-frontend-css-add-styles] Creación del archivo spec.frontend.md y en base a este archivo se crearon los archivos css/styles.css y css/components.css. PR: [#27](https://github.com/martindebenedetti/Planix/pull/27) - @martindebenedetti (Desarrollador Frontend) - Issue: #21

- [feature/mockup-actividad-2] Mockup actualizado con estilos visuales y actualización de README y plan.md  
  PR: [#26](https://github.com/martindebenedetti/Planix/pull/26) - @giann98 (Coordinador / DevOps) - Issue: #42

### Fixed

- [backport/release-actividad-obligatoria-2] Backport: release actividad obligatoria 2 hacia develop.
  PR: [#52](https://github.com/martindebenedetti/Planix/pull/52) - @leanberro (Coordinador / DevOps).

- [fix/remove-unused-gitkeep-files] Se eliminaron archivos `.gitkeep` innecesarios en carpetas de capturas que ya contienen archivos reales.  
  PR: [#51](https://github.com/martindebenedetti/Planix/pull/51) - @leanlex (Coordinador / DevOps).

- [fix/rc8-sidebar-icons] Se agregó una sidebar iconográfica en la estructura principal del planificador y sus estilos asociados en `css/styles.css`.  
  PR: [#50](https://github.com/martindebenedetti/Planix/pull/50) - @leanlex (Coordinador / DevOps).

- [fix/rc7-changelog-pr-number] Se corrigió la referencia de la PR en `changelog.md` para el fix RC7.  
  PR: [#49](https://github.com/martindebenedetti/Planix/pull/49) - @leanlex (Coordinador / DevOps).

- [fix/rc7-badge-hoy-s16] Se agregó el badge "HOY" en la columna S16 del encabezado del Gantt.  
  PR: [#48](https://github.com/martindebenedetti/Planix/pull/48) - @leanlex (Coordinador / DevOps).

- [fix/rc6-group-row-color-duplicate-rule] Se diferenció el color de las filas de grupo respecto del hover y se eliminó una regla duplicada en `css/styles.css`.  
  PR: [#47](https://github.com/martindebenedetti/Planix/pull/47) - @leanlex (Coordinador / DevOps).

- [fix/rc5-toolbar-btn-inactive-border] Se agregó borde visible al estado inactivo de `.toolbar-btn` para mejorar la consistencia con el mockup.  
  PR: [#46](https://github.com/martindebenedetti/Planix/pull/46) - @leanlex (Coordinador / DevOps).

- [fix/rc4-gantt-padding-mockup] Se ajustó el padding del área Gantt para alinearlo con el mockup de la Actividad Obligatoria N°2.  
  PR: [#44](https://github.com/martindebenedetti/Planix/pull/44) - @leanlex (Coordinador / DevOps).

- [fix/devops-complete-spec-evidence] Se completó `spec-devops.md` con evidencia, decisiones sobre el mockup y checklist final.  
  PR: [#41](https://github.com/martindebenedetti/Planix/pull/41) - @leanlex- Issue: #38 (Coordinador / DevOps).

- [fix/qa-add-mcp-config] Se agregaron Playwright MCP y GitHub MCP en `.vscode/mcp.json`.  
  PR: [#39](https://github.com/martindebenedetti/Planix/pull/39) - @leanlex - Issue: #37  (Coordinador / DevOps).

---

## [Release Actividad Obligatoria N°1] - 2026-03-26

### Added

- [feature/frontend-add-html-structure] Estructura HTML5 inicial del planificador de Gantt.  
  PR: [#11](https://github.com/martindebenedetti/Planix/pull/11) - @leanlex (Desarrollador Frontend) - Issue: #10

- [feature/doc-ux-add-readme-and-mockup] Agrega `README.md` y `spec-ux.md`.  
  PR: [#6](https://github.com/martindebenedetti/Planix/pull/6) - @leanlex (Documentador / Diseñador UX) - Issue: #5

- [feature/ia-prompts-engineering] Crear archivo template pull_request_template.md.  
  PR: [#2](https://github.com/martindebenedetti/Planix/pull/2) - @giann98 (Especialista en IA)

- [feature/ia-prompts-engineering] IA prompt engineering estructuración carpetas.  
  PR: [#1](https://github.com/martindebenedetti/Planix/pull/1) - @giann98 (Especialista en IA)

### Changed

- [feature/ia-prompts-descripciones] Documentación de prompts utilizados y comparativa de modelos de IA.
  PR: [#12](https://github.com/martindebenedetti/Planix/pull/12) - @giann98 (Especialista en IA) - Issue: #7

- [feature/ia-prompt-documentación] Agregar información en archivo sdd-decisions, spec-ia y spec-rol
  PR: [#9](https://github.com/martindebenedetti/Planix/pull/9) - @giann98 (Especialista en IA) - Issue: #8

- [feature/coordinador-setup-repo-and-pages] Correccion del changelog.md.  
  PR: [#4](https://github.com/martindebenedetti/Planix/pull/4) - @martindebenedetti (Coordinador / DevOps) - Issue: #3

### Fixed

- [backport/release-actividad-obligatoria-2] Backport: release actividad obligatoria 2 hacia develop.
  PR: [#52](https://github.com/martindebenedetti/Planix/pull/52) - @leanberro (Coordinador / DevOps).

- [fix/remove-unused-gitkeep-files] Se eliminaron archivos `.gitkeep` innecesarios en carpetas de capturas que ya contienen archivos reales.  
  PR: [#51](https://github.com/martindebenedetti/Planix/pull/51) - @leanlex (Coordinador / DevOps).

- [fix/rc8-sidebar-icons] Se agregó una sidebar iconográfica en la estructura principal del planificador y sus estilos asociados en `css/styles.css`.  
  PR: [#50](https://github.com/martindebenedetti/Planix/pull/50) - @leanlex (Coordinador / DevOps).

- [fix/rc7-changelog-pr-number] Se corrigió la referencia de la PR en `changelog.md` para el fix RC7.  
  PR: [#49](https://github.com/martindebenedetti/Planix/pull/49) - @leanlex (Coordinador / DevOps).

- [fix/rc7-badge-hoy-s16] Se agregó el badge "HOY" en la columna S16 del encabezado del Gantt.  
  PR: [#48](https://github.com/martindebenedetti/Planix/pull/48) - @leanlex (Coordinador / DevOps).

- [fix/rc6-group-row-color-duplicate-rule] Se diferenció el color de las filas de grupo respecto del hover y se eliminó una regla duplicada en `css/styles.css`.  
  PR: [#47](https://github.com/martindebenedetti/Planix/pull/47) - @leanlex (Coordinador / DevOps).

- [fix/rc5-toolbar-btn-inactive-border] Se agregó borde visible al estado inactivo de `.toolbar-btn` para mejorar la consistencia con el mockup.  
  PR: [#46](https://github.com/martindebenedetti/Planix/pull/46) - @leanlex (Coordinador / DevOps).

- [fix/rc4-gantt-padding-mockup] Se ajustó el padding del área Gantt para alinearlo con el mockup de la Actividad Obligatoria N°2.  
  PR: [#44](https://github.com/martindebenedetti/Planix/pull/44) - @leanlex (Coordinador / DevOps).

- [fix/devops-complete-spec-evidence] Se completó `spec-devops.md` con evidencia, decisiones sobre el mockup y checklist final.  
  PR: [#41](https://github.com/martindebenedetti/Planix/pull/41) - @leanlex- Issue: #38 (Coordinador / DevOps).

- [fix/qa-add-mcp-config] Se agregaron Playwright MCP y GitHub MCP en `.vscode/mcp.json`.  
  PR: [#39](https://github.com/martindebenedetti/Planix/pull/39) - @leanlex - Issue: #37 (Coordinador / DevOps).

- [fix/include-prompts-in-release] Se incorporan los archivos de prompts y comparativa de modelos de IA en la rama release/actividad-obligatoria-1.
  PR: [#15](https://github.com/martindebenedetti/Planix/pull/15) - @giann98 (Coordinador / DevOps)

- [fix/sdd-instalacion-copilot] Se agregan instrucciones de instalación de herramientas IA (GitHub Copilot y GitHub Pull Requests) en `sdd-decisions.md`.
  PR: [#17](https://github.com/martindebenedetti/Planix/pull/17) - @giann98 (Coordinador / DevOps)

- [fix/corregir-html] Correcciones post-revisión: spec movido a ruta correcta, párrafos y enlaces en index.html, config MCP de Figma.  
  PR: [#18](https://github.com/martindebenedetti/Planix/pull/18) - @leanlex (Desarrollador Frontend) y @giann98 (Coordinador / DevOps)

- [fix/actualizacion-plan] Actualización del archivo `plan.md` con requerimientos funcionales reales del sistema.
  PR: [#20](https://github.com/martindebenedetti/Planix/pull/20) - @giann98 (Coordinador / DevOps)

- [fix/documentar-correcciones-release] Corrección de modelo de IA en prompts-1.md. Commit: [1de6c27](https://github.com/martindebenedetti/Planix/commit/1de6c27) - @giann98 (Especialista en IA)

- [fix/documentar-correcciones-release] Corrección de modelo de IA en prompts-4.md.
  Commit: [ed00ffa](https://github.com/martindebenedetti/Planix/commit/ed00ffa) - @giann98 (Especialista en IA)

- [fix/documentar-correcciones-release] Eliminación de sección "Cómo usar este archivo" en changelog.md.
  Commit: [f09ff0a](https://github.com/martindebenedetti/Planix/commit/f09ff0a) - @giann98 (Especialista en IA)

- [fix/documentar-correcciones-release] Autor en prompts-2.md y prompts-3.md.
  Commits: [75eed4d](https://github.com/martindebenedetti/Planix/commit/75eed4d) / [430c39b](https://github.com/martindebenedetti/Planix/commit/430c39b) - @giann98 (Especialista en IA)

- [fix/documentar-correcciones-release] Correcciones de templates, imágenes y eliminación de index-correcciones.md.
  Commit: [d48f9d4](https://github.com/martindebenedetti/Planix/commit/d48f9d4) - @giann98 (Especialista en IA)

- [fix/documentar-correcciones-release] Documentación retroactiva de correcciones aplicadas directamente sobre release.
  PR: [#22](https://github.com/martindebenedetti/Planix/pull/22) - @martindebenedetti (Coordinador / DevOps)

- [fix/formato-changelog-correcciones] Corrección de formato en entradas [Fixed] del changelog.
  PR: [#24](https://github.com/martindebenedetti/Planix/pull/24) - @martindebenedetti (Coordinador / DevOps)

- [backport/release-actividad-obligatoria-1] Backport: release actividad obligatoria 1 hacia develop.
  PR: [#25](https://github.com/martindebenedetti/Planix/pull/25) - @giann98 (Coordinador / DevOps).

---
