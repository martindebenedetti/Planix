# Especificación Técnica - Rol Coordinador / DevOps (Primer Parcial)

## Descripción

Esta especificación técnica documenta las tareas del rol **Coordinador / DevOps** para el **Primer Parcial** de Programación Web I.

Se aplica la metodología **Spec-Driven Development (SDD)**, por lo que este archivo se redacta y se versiona **antes de comenzar** con cualquier otro cambio del rol. Su objetivo es dejar establecida la planificación inicial, los criterios de aceptación y, al cierre, la evidencia de las decisiones tomadas y del trabajo de coordinación realizado.

---

## Contexto de partida

El Primer Parcial se construye sobre la base corregida de las Actividades Obligatorias 1 y 2. Para esta entrega, el rol Coordinador / DevOps debe trabajar sobre la rama `develop`, una vez realizado el backport de `release/actividad-obligatoria-2` luego de su aprobación y merge a `master`. Además, debe coordinar la integración de las nuevas ramas `feature/`, actualizar el mockup en Figma para reflejar la migración a Bootstrap y administrar la release final del parcial.

---

## ¿Qué se hará?

Como responsable del rol **Coordinador / DevOps**, se planifican las siguientes tareas:

1. **Validación de base técnica**
   - Verificar que las correcciones de la Actividad Obligatoria N°2 hayan sido resueltas.
   - Confirmar que el backport de `release/actividad-obligatoria-2` hacia `develop` ya fue realizado y mergeado correctamente.
   - Tomar `develop` como base estable para iniciar el Primer Parcial.

2. **Actualización del mockup en Figma**
   - Actualizar el mockup del proyecto para reflejar la migración a Bootstrap.
   - Incorporar en el diseño la grilla de Bootstrap y los componentes avanzados seleccionados por el equipo.
   - Revisar paleta de colores, tipografías y estados de interacción para mantener coherencia visual.
   - Exportar una imagen del mockup actualizado en:
     `docs/01-mockup/disenio-bootstrap.png`
   - Actualizar el `README.md` con el enlace al archivo Figma actualizado.

3. **Coordinación de ramas y Pull Requests**
   - Coordinar la creación de ramas `feature/` de todos los integrantes.
   - Supervisar que cada PR hacia `develop` tenga revisión aprobada antes del merge.
   - Realizar revisiones de código asistidas con Copilot Agent sobre las PRs del equipo.
   - Cargar Request Changes cuando sea necesario, directamente sobre el diff correspondiente.
   - Verificar que `changelog.md` registre correctamente el aporte de cada integrante con link a su PR.

4. **Gestión de issues y seguimiento**
   - Verificar que cada integrante cree al menos una issue asociada a su tarea.
   - Organizar y mantener actualizado un tablero Kanban en GitHub Projects para seguimiento del avance.
   - Controlar que los bugs detectados mediante testing se documenten y se resuelvan mediante ramas `fix/` hacia `develop`.

5. **Preparación de release y publicación**
   - Crear `release/primer-parcial` a partir de `develop` una vez integradas todas las features.
   - Habilitar GitHub Pages para la versión entregable.
   - Crear la PR de entrega:
     `release/primer-parcial` → `master`
   - Publicar la PR en Slack y subir al campus los enlaces requeridos.
   - Al finalizar el merge en `master`, gestionar el tag:
     `v1.1-primer-parcial`
   - Crear el Release en GitHub con extracto del `changelog.md`.

6. **Limpieza del repositorio**
   - Eliminar ramas que ya no sean necesarias.
   - Verificar que al momento de la entrega queden únicamente:
     - `master`
     - `develop`
     - `release/primer-parcial`

---

## ¿Por qué?

La planificación previa de este rol permite ordenar el trabajo del equipo, evitar errores en la integración de ramas y asegurar que la entrega final mantenga trazabilidad técnica y documental.

Además, el rol Coordinador / DevOps es clave para:
- garantizar que el mockup actualizado en Figma sirva como referencia válida para la migración a Bootstrap,
- asegurar revisiones consistentes de las PRs del equipo,
- centralizar la organización de issues, release, changelog y publicación final.

---

## Correcciones previas de la Actividad Obligatoria N°2 que se toman como base

Se parte de una base corregida de la Actividad Obligatoria N°2, incluyendo:

- resolución de Request Changes sobre la release anterior mediante ramas `fix/`
- merge de la `release/actividad-obligatoria-2` a `master`
- backport de `release/actividad-obligatoria-2` hacia `develop`
- actualización del `changelog.md` con las correcciones aplicadas
- cierre de hilos de revisión y validación final del docente

Estas tareas ya fueron realizadas antes de comenzar el trabajo específico del Primer Parcial, y constituyen la base técnica desde la cual se inicia esta entrega.

---

## Cambios previstos en el mockup de Figma

Antes de que el rol Desarrollador Frontend / Bootstrap comience su implementación, se prevé actualizar el mockup con los siguientes cambios:

- incorporación de una **grilla basada en Bootstrap**
- definición visual de los componentes Bootstrap avanzados que se implementarán en el parcial
- revisión de la navegación principal y distribución de secciones para mejorar responsividad
- adecuación de espaciados, márgenes y jerarquías visuales
- validación de paleta de colores y tipografías coherentes con la identidad del proyecto
- definición de estados visuales para botones, navegación y componentes interactivos

---

## Criterios de Aceptación

- [X] El archivo `docs/03-specs/primer-parcial/spec-devops.md` fue creado y commiteado antes que cualquier otro cambio del rol.
- [ ] El mockup en Figma fue actualizado para reflejar la migración a Bootstrap.
- [ ] El mockup actualizado fue exportado como `docs/01-mockup/disenio-bootstrap.png`.
- [ ] El `README.md` contiene el enlace al archivo Figma actualizado.
- [ ] Todas las ramas `feature/` del equipo fueron integradas en `develop` con revisión aprobada.
- [ ] Se realizaron al menos 4 code reviews asistidos con Copilot Agent.
- [ ] Las issues del equipo fueron administradas mediante un tablero Kanban en GitHub Projects.
- [ ] `changelog.md` registra correctamente los aportes del equipo con links a las PRs.
- [ ] La rama `release/primer-parcial` fue creada desde `develop` luego de mergear todas las features.
- [ ] GitHub Pages quedó habilitado y accesible para la versión de entrega.
- [ ] La PR `release/primer-parcial` → `master` fue creada con template correcto.
- [ ] El tag `v1.1-primer-parcial` fue creado luego del merge a `master`.
- [ ] El Release en GitHub fue publicado con extracto del changelog.
- [ ] Al cierre del proceso, solo permanecen `master`, `develop` y `release/primer-parcial`.

---

## Riesgos y Mitigaciones

- **Riesgo:** El spec no queda registrado antes que otros cambios del rol.  
  **Mitigación:** Commitear este archivo como primer cambio de la rama `feature/coord-devops-update-doc-project`.

- **Riesgo:** El mockup de Figma no se actualiza a tiempo y bloquea al rol Frontend / Bootstrap.  
  **Mitigación:** Priorizar la actualización del mockup y el enlace en `README.md` al inicio del trabajo.

- **Riesgo:** Las PRs del equipo se mergean sin revisión suficiente.  
  **Mitigación:** Controlar que todas las PRs tengan al menos una aprobación antes del merge.

- **Riesgo:** El changelog no refleje correctamente la participación del equipo.  
  **Mitigación:** Revisar `changelog.md` en cada PR antes de aprobar.

- **Riesgo:** La release se cree sin haber integrado todas las features.  
  **Mitigación:** Verificar en `develop` que todas las PRs del parcial estén mergeadas antes de crear `release/primer-parcial`.

- **Riesgo:** Se acumulen ramas innecesarias y genere confusión de flujo.  
  **Mitigación:** Limpiar ramas obsoletas antes de la entrega final.

---

## Archivos principales involucrados

- `docs/03-specs/primer-parcial/spec-devops.md`
- `docs/01-mockup/disenio-bootstrap.png`
- `README.md`
- `changelog.md`
- `.github/PULL_REQUEST_TEMPLATE/feature-template.md`
- `.github/PULL_REQUEST_TEMPLATE/release-template.md`

---

## PRs previstas del rol

- **PR principal del rol:**  
  `feature/coord-devops-update-doc-project` → `develop`

- **PR de release del parcial:**  
  `release/primer-parcial` → `master`

---

## Evidencia a completar al cierre de la tarea

### Prompts utilizados en Code Reviews con Copilot Agent

> Completar al cierre con los prompts reales utilizados.

```text
[Aca poner los prompts usados para revisar las PRs del equipo]