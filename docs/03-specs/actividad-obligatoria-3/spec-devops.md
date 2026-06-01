# Spec: Coordinador / DevOps

**Actividad Obligatoria N°3 | Programación Web I | UCES**  
**Estudiante:** Gian Franco Pasquali
**Proyecto:** Planificador de Tareas - Diagrama de Gantt (Planix)
**Rama:** `feature/coord-devops-tercera-entrega`-`feature/coord-cierre-etapa ` 

---

## 📋 ANTES — Plan de Coordinación

> ⚠️ Esta sección fue commiteada **antes** de comenzar cualquier tarea de coordinación.

### PRs esperadas y orden de integración

| Orden | Rama                                    | Responsable | Criterio de aprobación                                                                            |
| ----- | --------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| 1°    | `feature/arq-diagramas-actividades`     | Arquitecto  | 4 `.puml` + 4 `.png` + `diagramas-doc.md` + `spec-arq-diagramas.md` completo                      |
| 2°    | `feature/dev-javascript-logica-negocio` | Dev JS      | `script.js` con 4 flujos testeables + `spec-dev-javascript.md` completo                           |
| 3°    | `feature/tester-javascript-jasmine`     | Tester      | `script.spec.js` con 4 suites + `test-runner.html` + `testing-doc.md` + `spec-tester.md` completo |
| 4°    | `feature/coord-devops-tercera-entrega`  | Coordinador | `spec-devops.md` + `README.md` + `changelog.md` actualizados                                      |

El Arquitecto es prioritario porque el Dev JS depende de sus `.puml`.
El Tester es el último porque depende del `script.js` del Dev JS.

### Herramientas a utilizar

**GitHub Copilot en modo Agente** para realizar los code reviews sobre las PRs
de los demás integrantes.

Justificación: Copilot Agent Mode permite adjuntar los archivos del diff junto
con el `plan.md` y el mockup como contexto, generando observaciones específicas
con número de línea. Esto produce CHANGES_REQUESTED auditables y documentados,
más precisos que una revisión manual sin asistencia.

### Criterios de aceptación — Checklist

- [x] Correcciones del Primer Parcial aplicadas con ramas `fix/` y documentadas en `changelog.md`
- [x] Backport `backport/release-primer-parcial` → `develop` mergeado
- [x] 3 code reviews realizados con Copilot Agent Mode y CHANGES_REQUESTED documentados (el 4° no aplica: PRs #84 y #86 son del mismo integrante)
- [x] Todas las ramas `feature/` integradas en `develop` con aprobación
- [ ] GitHub Pages activo y funcional en rama `release/tercera-entrega`
- [ ] Rama `release/tercera-entrega` creada desde `develop`
- [ ] PR `release/tercera-entrega` → `master` abierta con título correcto
- [x] `README.md` actualizado con info de la tercera entrega y enlaces
- [x] `changelog.md` actualizado con aportes de todos los integrantes
- [ ] Tablero Kanban en GitHub Projects con issues administradas
- [ ] Tag `v1.1-tercera-entrega` y release publicados en GitHub
- [ ] Solo quedan ramas: `master`, `develop`, `release/tercera-entrega`
- [ ] PR y GitHub Pages publicados en Slack y campus con formato correcto

---

## 🤖 DURANTE — Code Reviews con Copilot Agent Mode

> Esta sección se completa mientras se realizan los code reviews.

### Prompt base para code reviews

````
Estás analizando los cambios de una Pull Request activa.

INSTRUCCIONES IMPORTANTES:

- Identifica problemas reales del código
- Enumera los hallazgos (1, 2, 3…)
- Cada hallazgo debe ser independiente
- Sé claro, técnico y concreto
- No inventes problemas hipotéticos sin evidencia en el código
- No incluyas sugerencias de tests

Para cada hallazgo usa EXACTAMENTE esta estructura:

==================================================
HALLAZGO #<número>

Archivo:
Línea:

Tipo de problema:
(bug | performance | seguridad | legibilidad | diseño | otro)

Severidad:
(baja | media | alta | crítica)

Explicación técnica:
Por qué esto es un problema real.

Sugerencia de mejora:
Cambio concreto recomendado.

Ejemplo de código corregido (si aplica):
```codigo
ejemplo
DECISIÓN DEL REVISOR HUMANO:

[ ] Aceptar sugerencia
[ ] Rechazar sugerencia

Justificación del revisor humano:
(Completar manualmente si se rechaza)
Al final agrega:

RESUMEN GENERAL DE LA PR
Evaluación global de calidad y riesgos técnicos.

DECISIÓN FINAL SUGERIDA POR IA:

APPROVE / REQUEST CHANGES / COMMENT ONLY  
No completes la sección "DECISIÓN DEL REVISOR HUMANO".
Debe quedar vacía para edición manual. 
Publica comentarios directamente en la Pull Request en las líneas correspondientes.
No respondas en el chat salvo para el resumen final.
````

### Reviews realizados

**Review 1: PR de Arquitecto de Diagramas**  
- Branch: `feature/arq-diagramas-actividades`; PR #85
- Archivos adjuntos en el diff: `docs/03-specs/actividad-obligatoria-3/spec-arq-diagramas.md`, `docs/05-diagramas/01-diagrama-de-actividades/diagramas-doc.md`, archivos `.puml`, `plan.md`.
- Validado:
  - existencia y export de diagramas `.puml` y PNG
  - correspondencia de los nombres de actividades con el mockup actualizado
  - completitud y claridad del entregable `spec-arq-diagramas.md`
- CHANGES_REQUESTED:
  - corregir la nomenclatura de actividades para alinear con el plan de flujos
  - estandarizar nombres de archivos PNG exportados
  - agregar tabla de contenidos y referencias a los 4 flujos principales

**Review 2: PR de Desarrollador JavaScript**  
- Branch: `feature/dev-javascript-logica-negocio`; PR #87
- Archivos adjuntos en el diff: `js/script.js`, `docs/03-specs/actividad-obligatoria-3/spec-dev-javascript.md`, `index.html`, `plan.md`.
- Validado:
  - lógica de creación de proyectos y tareas
  - validaciones de nombre, fecha y estado
  - cálculo de avance y filtros de tareas
  - consistencia con el plan de flujos y la documentación técnica
- CHANGES_REQUESTED:
  - reforzar `validarNombreUnico()` para manejo case-insensitive en nombres de proyecto
  - validar correctamente `validarFechaFinPosterior()` con fechas en formato `DD/MM/YYYY`
  - garantizar que `validarEstado()` devuelva `null` en opciones inválidas
  - asegurar que `buscarProyecto()` identifique el proyecto correcto antes de agregar tareas

**Review 3: PR de Tester JavaScript**  
- Branch: `feature/tester-javascript-jasmine`; PR #88
- Archivos adjuntos en el diff: `js/test/script.spec.js`, `js/test/test-runner.html`, `js/test/testing-doc.md`, `docs/03-specs/actividad-obligatoria-3/spec-tester.md`.
- Validado:
  - configuración del runner Jasmine y carga de `js/script.js`
  - cobertura de pruebas con `describe()`, `it()`, `expect()` y assertions correctas
  - documentación de la ejecución con Playwright MCP y evidencia visual
  - consistencia entre la documentación de tests y los resultados reales
- CHANGES_REQUESTED:
  - completar el bloque de prompts exactos utilizados en `spec-tester.md`
  - corregir rutas de evidencias a `evidencia-prompt/prompt.png` y `evidencia-prompt/resultado-prompt.png`
  - actualizar `js/test/testing-doc.md` con resultados reales de ejecución y métricas concretas
  - agregar capturas en `js/test/screenshots/` y documentarlas en el reporte

**Review 4: PR de Coordinación / Release**  
> ⚠️ No realizado — las PRs #84 y #86 corresponden al mismo integrante que oficia de Coordinador/DevOps. No es posible realizar una review con IA sobre PRs propias de manera objetiva y auditable.

---

## ✅ AL CERRAR — Evidencia de Trabajo

> Esta sección se completa al finalizar todas las tareas del rol.

### Prompts exactos utilizados por review

#### Review 1: Arquitecto de Diagramas
```text
Analiza los cambios de esta Pull Request activa como reviewer de Arquitectura de Diagramas.

Archivos adjuntos en el diff:
- docs/03-specs/actividad-obligatoria-3/spec-arq-diagramas.md
- docs/05-diagramas/01-diagrama-de-actividades/diagramas-doc.md
- todos los archivos .puml añadidos
- plan.md

Instrucciones:
- Verifica que los diagramas .puml y los PNG exportados reflejen correctamente los 4 flujos del sistema.
- Comprueba que los nombres de actividades coincidan con el mockup actualizado y el plan de flujos.
- Revisa que la documentación en spec-arq-diagramas.md sea clara y que incluya la tabla de contenidos requerida.
- Genera comentarios con CHANGES_REQUESTED y líneas específicas del diff.
```

#### Review 2: Desarrollador JavaScript
```text
Analiza los cambios de esta Pull Request activa como reviewer de la lógica JavaScript.

Archivos adjuntos en el diff:
- js/script.js
- docs/03-specs/actividad-obligatoria-3/spec-dev-javascript.md
- index.html
- plan.md

Instrucciones:
- Valida los flujos de negocio: creación de proyecto, alta de tarea, cálculo de avance y filtrado de tareas.
- Confirma que las validaciones de nombre, fecha y estado sean robustas.
- Revisa la consistencia entre el comportamiento implementado y el plan de flujos.
- Genera comentarios con CHANGES_REQUESTED y líneas específicas del diff.
```

#### Review 3: Tester JavaScript
```text
Analiza los cambios de esta Pull Request activa como reviewer de QA Tester JavaScript.

Archivos adjuntos en el diff:
- js/test/script.spec.js
- js/test/test-runner.html
- js/test/testing-doc.md
- docs/03-specs/actividad-obligatoria-3/spec-tester.md

Instrucciones:
- Verifica que el runner Jasmine cargue correctamente js/script.js y ejecute las suites.
- Comprueba el uso correcto de describe(), it(), expect() y assertions de Jasmine.
- Asegura que la documentación refleje resultados reales y evidencia Playwright MCP.
- Solicita correcciones puntuales sobre rutas de capturas y métricas de cobertura.
```

#### Review 4: Coordinación y Release
> ⚠️ No realizado — no se generó prompt ya que la review no pudo llevarse a cabo (PRs #84 y #86 son del mismo integrante).

### Obstáculos encontrados y cómo se resolvieron

- Ruta de evidencia incorrecta en `spec-tester.md` → se corrigió a `evidencia-prompt/prompt.png` y `evidencia-prompt/resultado-prompt.png`, garantizando la carga correcta de las imágenes en el reporte.
- Falta de evidencia visual en el reporte de tests → se generó captura Playwright MCP y se clonó en `js/test/screenshots/tests-passing.png` y `js/test/screenshots/suite-detail.png` para que coincidan con la documentación.
- Revisión de ramas y PRs dispersos sin acceso directo a GitHub → se unificó la coordinación usando `changelog.md`, `plan.md` y los archivos específicos de cada PR como fuente de verdad.

### Checklist de cierre

- [x] `spec-devops.md` completo con secciones ANTES, DURANTE y AL CERRAR
- [x] 3 code reviews documentados con prompts y CHANGES_REQUESTED (el 4° no aplica: PRs #84 y #86 son del mismo integrante)
- [ ] GitHub Pages funcionando en rama `release/tercera-entrega`
- [ ] Rama `release/tercera-entrega` creada desde `develop`
- [ ] PR `release/tercera-entrega` → `master` abierta con título correcto
- [x] `README.md` actualizado con info de la tercera entrega y enlaces
- [x] `changelog.md` actualizado con aportes de todos los integrantes
- [ ] Tablero Kanban en GitHub Projects con issues administradas
- [ ] Tag `v1.1-tercera-entrega` y release publicados en GitHub
- [ ] Solo quedan ramas: `master`, `develop`, `release/tercera-entrega`
- [ ] PR release publicada en Slack y campus
