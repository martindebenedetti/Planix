# Spec - Coordinador / DevOps

## Actividad Obligatoria N°4 - Programación Web I

## Rol

Coordinador / DevOps + Tester QA.

Este documento corresponde a la parte de coordinación, integración, revisión técnica, control de ramas, documentación y preparación de la entrega final de la Actividad Obligatoria N°4.

---

## BEFORE - Plan inicial de coordinación

### Objetivo del rol

Coordinar la integración de los aportes de cada integrante del equipo en la rama `develop`, asegurando que cada PR cumpla con la consigna, mantenga trazabilidad mediante issue, changelog y documentación, y respete la arquitectura definida para la Actividad Obligatoria N°4.

La entrega debe integrar los siguientes ejes técnicos:

- manipulación del DOM y eventos del usuario;
- Programación Orientada a Objetos con clases en `js/models/`;
- almacenamiento persistente mediante `localStorage` y `sessionStorage`;
- testing automatizado con Jasmine;
- documentación técnica por rol;
- flujo Git con ramas `feature/`, PRs hacia `develop` y release final hacia `master`.

---

## PRs esperadas

### PR de Storage

- Rama: `feature/dev-storage`
- Base: `develop`
- Estado: mergeada a `develop`
- Issue asociado: `#105`
- PR asociado: `#106`
- Archivos principales:
  - `docs/03-specs/actividad-obligatoria-4/spec-dev-storage.md`
  - `js/utils/storage.js`
  - `docs/06-storage/storage-doc.md`

### PR de POO

- Rama: `feature/dev-poo-logica-negocio`
- Base: `develop`
- Estado: pendiente de revisión
- Archivos esperados:
  - `docs/03-specs/actividad-obligatoria-4/spec-dev-poo.md`
  - `js/models/*.js`
  - `docs/05-diagramas/02-diagrama-de-clases/diagrama-clases.puml`
  - `docs/05-diagramas/02-diagrama-de-clases/diagrama-clases.png`
  - `docs/05-diagramas/02-diagrama-de-clases/diagrama-clases-doc.md`

### PR de Eventos + DOM

- Rama esperada: `feature/dev-eventos-dom`
- Base: `develop`
- Estado: pendiente
- Archivos esperados:
  - `docs/03-specs/actividad-obligatoria-4/spec-dev-eventos-dom.md`
  - `js/script.js`
  - posibles ajustes en `index.html`

### PR de Tester QA

- Rama esperada: `feature/tester-qa-specs`
- Base: `develop`
- Estado: pendiente
- Archivos esperados:
  - `docs/03-specs/actividad-obligatoria-4/spec-tester-qa.md`
  - `js/test/models.spec.js`
  - `js/test/storage.spec.js`
  - `js/test/script.spec.js`
  - `js/test/testing-doc.md`

### PR de Coordinación / DevOps

- Rama: `feature/coord-devops-cuarta-entrega`
- Base: `develop`
- Estado: en desarrollo
- Archivos previstos:
  - `docs/03-specs/actividad-obligatoria-4/spec-devops.md`
  - `README.md`
  - `changelog.md`

---

## Orden de integración propuesto

1. Integrar Storage.
2. Revisar e integrar POO.
3. Revisar e integrar Eventos + DOM.
4. Ejecutar y documentar QA sobre la arquitectura integrada.
5. Actualizar README y changelog.
6. Crear rama `release/cuarta-entrega`.
7. Configurar/verificar GitHub Pages sobre la release.
8. Abrir PR final `release/cuarta-entrega` hacia `master`.
9. Crear tag y release `v1.2-cuarta-entrega` luego de aprobación.

---

## Criterios de aprobación de PRs

Para aprobar una PR hacia `develop`, se verificará:

- que la rama tenga formato `feature/`;
- que exista issue asociado;
- que exista entrada correspondiente en `changelog.md`;
- que el spec del rol esté creado antes del código principal;
- que la PR incluya solo archivos relacionados con el rol;
- que no se incorporen cambios fuera de alcance;
- que no existan llamadas nuevas a `prompt()` o `alert()`;
- que el código respete la separación de responsabilidades;
- que la documentación sea coherente con el código;
- que se haya usado GitHub Copilot Agent Mode y se documente el proceso;
- que exista revisión de otro integrante antes del merge.

---

## Herramientas a utilizar

### GitHub Copilot Agent Mode

Se utilizará para asistir en los code reviews de las PRs del equipo, especialmente para revisar:

- cumplimiento de la consigna;
- separación de responsabilidades;
- coherencia entre código y documentación;
- consistencia entre POO, Storage y DOM/Eventos;
- posibles errores de arquitectura;
- calidad de JSDoc y comentarios;
- trazabilidad con issues y changelog.

### GitHub

Se utilizará para:

- gestionar ramas;
- crear y revisar Pull Requests;
- verificar issues;
- controlar historial de commits;
- revisar archivos modificados;
- administrar la integración hacia `develop`.

### GitHub Projects / Kanban

Se utilizará para verificar el seguimiento de tareas, issues y estado de avance por rol.

---

## Checklist de aceptación inicial

- [x] `develop` actualizado con lo último del repositorio remoto.
- [x] Rama `feature/coord-devops-cuarta-entrega` creada o actualizada desde `develop`.
- [ ] `spec-devops.md` creado y commiteado antes de otras tareas de coordinación.
- [ ] PR de Storage mergeada a `develop`.
- [ ] PR de POO revisada con Copilot Agent Mode.
- [ ] PR de Eventos + DOM revisada con Copilot Agent Mode.
- [ ] PR de Tester QA revisada con Copilot Agent Mode.
- [ ] Reviews documentadas con prompts y resultados.
- [ ] Changelog actualizado con las contribuciones de la Actividad 4.
- [ ] README actualizado con la información de la Actividad 4.
- [ ] Rama `release/cuarta-entrega` creada desde `develop`.
- [ ] GitHub Pages verificado sobre la release.
- [ ] PR final de release publicada.
- [ ] Tag `v1.2-cuarta-entrega` preparado luego de aprobación.

---

---

---

## DURANTE - Reviews de Pull Requests

### Review PR #108 - Desarrollador JS POO

- **PR:** [#108](https://github.com/martindebenedetti/Planix/pull/108)
- **Issue asociado:** [#107](https://github.com/martindebenedetti/Planix/issues/107)
- **Rama origen:** `feature/dev-poo-logica-negocio`
- **Rama destino:** `develop`
- **Rol revisado:** Desarrollador JS POO
- **Estado de la review:** Changes requested
- **Reviewer:** @leanlex

#### Archivos revisados

- `docs/03-specs/actividad-obligatoria-4/spec-dev-poo.md`
- `js/models/Tarea.js`
- `js/models/Proyecto.js`
- `js/models/GestorProyectos.js`
- `docs/05-diagramas/02-diagrama-de-clases/diagrama-clases.puml`
- `docs/05-diagramas/02-diagrama-de-clases/diagrama-clases-doc.md`
- `index.html`
- `changelog.md`

#### Prompt utilizado en Copilot Agent Mode

```text
Actuá como Coordinador / DevOps de la Actividad Obligatoria N°4 de Programación Web I.

Necesito revisar la PR #108 correspondiente al rol Desarrollador JS POO, rama feature/dev-poo-logica-negocio hacia develop, asociada al Issue #107.

Verificá si la PR cumple con la consigna del rol POO:

- spec-dev-poo.md debe estar en docs/03-specs/actividad-obligatoria-4/
- el spec debe tener sección BEFORE y AT CLOSE
- debe haber clases del dominio en js/models/
- debe haber al menos 3 clases
- cada clase debe tener constructor, propiedades, métodos de negocio, validaciones internas, JSDoc, toJSON() y fromJSON()
- las clases no deben manipular DOM
- las clases no deben usar prompt(), alert(), innerHTML ni document.querySelector()
- debe existir diagrama de clases en PlantUML y documentación
- el changelog debe registrar la PR #108 y el Issue #107 sin duplicados
- index.html solo debe referenciar archivos necesarios sin romper la carga actual

Devolveme hallazgos con este formato:

HALLAZGO #
Archivo:
Línea aproximada:
Tipo de problema:
Severidad:
Explicación técnica:
Sugerencia de mejora:
Decisión sugerida: Comment / Changes requested / Approve
```

#### Resumen del output generado por Copilot Agent

Copilot Agent indicó que la implementación POO cumple con la mayoría de los requisitos de la consigna:

- se implementan 3 clases del dominio: `Tarea`, `Proyecto` y `GestorProyectos`;
- las clases tienen constructores, validaciones internas, métodos de negocio y JSDoc;
- las clases implementan `toJSON()` y `fromJSON()`;
- no se detectó manipulación del DOM dentro de las clases;
- no se detectaron usos de `prompt()` ni `alert()`;
- se incluye diagrama de clases en PlantUML y documentación asociada;
- `changelog.md` registra la PR #108 y el Issue #107.

#### Hallazgos cargados en la review

##### Hallazgo 1

- **Archivo:** `js/models/Tarea.js`
- **Tipo de problema:** compatibilidad / arquitectura
- **Severidad:** media
- **Descripción:** el constructor utiliza parámetro por defecto `estado = "pendiente"`, que corresponde a sintaxis ES6. Esto contradice el criterio documentado en el spec de mantener compatibilidad con ES5 puro.
- **Acción tomada:** se solicitó reemplazar el parámetro por defecto por una asignación interna.
- **Decisión:** Changes requested.

##### Hallazgo 2

- **Archivo:** `js/models/Tarea.js`
- **Tipo de problema:** legibilidad
- **Severidad:** baja
- **Descripción:** se observó un salto de línea innecesario en el método `cambiarEstado()`.
- **Acción tomada:** se dejó comentario menor de mejora.
- **Decisión:** Comment.

##### Hallazgo 3

- **Archivo:** `docs/03-specs/actividad-obligatoria-4/spec-dev-poo.md`
- **Tipo de problema:** trazabilidad
- **Severidad:** baja
- **Descripción:** se sugirió verificar que el checklist final del spec se corresponda con la configuración real de la PR, especialmente reviewer asignado y base `develop`.
- **Acción tomada:** se dejó comentario de trazabilidad.
- **Decisión:** Comment.

#### Comentario general de la review

Se solicitó corregir antes del merge el uso de parámetro por defecto ES6 en `Tarea.js`.

La decisión final de la review fue **Request changes**, manteniendo como observaciones menores el formateo del método `cambiarEstado()` y la verificación de trazabilidad en el checklist final del spec.

---
## AT CLOSE - Evidencia final

Pendiente de completar al cerrar la tarea de coordinación.

En esta sección se documentarán:

- prompts exactos utilizados en Copilot Agent para cada code review;
- archivos adjuntados como contexto;
- resumen de cada revisión;
- hallazgos identificados;
- decisiones tomadas: aprobación, comentario o cambios solicitados;
- obstáculos encontrados durante la coordinación;
- resolución de conflictos o ajustes de integración;
- estado final de README, changelog, release y GitHub Pages.