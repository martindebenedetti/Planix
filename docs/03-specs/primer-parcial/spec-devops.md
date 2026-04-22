# Especificación Técnica - Rol Coordinador / DevOps (Primer Parcial)

## Descripción

Esta especificación técnica documenta las tareas del rol **Coordinador / DevOps** para el **Primer Parcial** de Programación Web I.

Se aplica la metodología **Spec-Driven Development (SDD)**, por lo que este archivo fue creado y versionado **antes de comenzar con cualquier otro cambio del rol**. Su finalidad es dejar registrada la planificación inicial, los criterios de aceptación y, al cierre, la evidencia de las decisiones tomadas y del trabajo de coordinación realizado.

---

## Contexto de partida

El Primer Parcial se construye sobre la base corregida de las Actividades Obligatorias 1 y 2.

Antes de comenzar el trabajo específico de esta entrega, se verificó que:

- la `release/actividad-obligatoria-2` fue corregida según los Request Changes del docente
- la rama `release/actividad-obligatoria-2` fue mergeada a `master`
- el backport `release/actividad-obligatoria-2` → `develop` fue realizado para dejar establecida la base técnica del Primer Parcial
- `develop` quedó como rama de partida para las nuevas `feature/` del parcial

A partir de esa base, el rol Coordinador / DevOps debe coordinar la actualización del mockup en Figma, la integración de ramas del equipo, las revisiones de Pull Requests, la administración de issues y la preparación de la release final.

---

## ¿Qué se hará?

Como responsable del rol **Coordinador / DevOps**, se planifican las siguientes tareas:

1. **Validación de base técnica**
   - Confirmar que las correcciones de la Actividad Obligatoria N°2 quedaron resueltas y tomadas como base.
   - Verificar que `develop` ya contiene el backport de la release anterior.
   - Asegurar que el equipo inicie el parcial sobre una base estable.

2. **Actualización del mockup en Figma**
   - Actualizar el mockup visual del proyecto para reflejar la migración a Bootstrap.
   - Incorporar en el diseño una **navbar**, una **grilla Bootstrap** y una representación coherente de los componentes seleccionados.
   - Mantener la identidad visual del proyecto, respetando paleta, tipografías y jerarquías visuales ya consolidadas en la Actividad Obligatoria N°2.
   - Exportar el mockup actualizado como:
     `docs/01-mockup/disenio-bootstrap.png`
   - Actualizar el `README.md` con el enlace al archivo Figma actualizado.

3. **Coordinación de ramas y Pull Requests**
   - Coordinar la creación de ramas `feature/` del equipo con naming correcto.
   - Supervisar que cada PR hacia `develop` tenga revisión aprobada antes del merge.
   - Realizar revisiones asistidas con IA sobre las PRs del equipo.
   - Cargar Request Changes en el diff cuando sea necesario.
   - Verificar que `changelog.md` documente correctamente la participación de cada integrante.

4. **Gestión de issues y seguimiento**
   - Verificar que cada integrante cree al menos una issue asociada a su tarea.
   - Organizar y mantener actualizado el tablero Kanban del proyecto en GitHub Projects.
   - Controlar que los bugs detectados por testing se documenten y se resuelvan mediante ramas `fix/` contra `develop`.

5. **Preparación de release y publicación**
   - Crear `release/primer-parcial` a partir de `develop` una vez integradas todas las features.
   - Habilitar GitHub Pages para la versión entregable.
   - Crear la PR de entrega:
     `release/primer-parcial` → `master`
   - Publicar la PR en Slack y subir al campus los enlaces requeridos.
   - Gestionar el tag:
     `v1.1-primer-parcial`
   - Crear el Release en GitHub con extracto del `changelog.md`.

6. **Limpieza del repositorio**
   - Eliminar ramas que ya no sean necesarias.
   - Verificar que, al momento de la entrega, queden únicamente:
     - `master`
     - `develop`
     - `release/primer-parcial`

---

## ¿Por qué?

La planificación previa de este rol permite ordenar el trabajo del equipo, reducir errores de integración y asegurar que la entrega final mantenga coherencia técnica, visual y documental.

Además, el rol Coordinador / DevOps es clave para:

- garantizar que el mockup actualizado sirva como referencia válida para la migración a Bootstrap
- asegurar revisiones consistentes de las PRs del equipo
- centralizar la organización de issues, changelog, release y publicación final
- dejar trazabilidad clara del trabajo de cada integrante

---

## Correcciones previas de la Actividad Obligatoria N°2 que se toman como base

Se toma como base técnica corregida la Actividad Obligatoria N°2, incluyendo:

- resolución de Request Changes sobre `release/actividad-obligatoria-2`
- merge de `release/actividad-obligatoria-2` a `master`
- backport de `release/actividad-obligatoria-2` hacia `develop`
- actualización del `changelog.md` con las correcciones realizadas
- cierre de los hilos de revisión y aprobación final del docente

Estas tareas fueron resueltas antes del inicio del trabajo específico del Primer Parcial.

---

## Cambios incorporados en el mockup de Figma

Tomando como base el mockup mejorado de la Actividad Obligatoria N°2, se planificó e incorporó una nueva versión visual del proyecto orientada a la migración a Bootstrap.

Los cambios incorporados en el mockup fueron:

- incorporación de una **navbar** superior con marca "Planix", buscador, botón de acción principal y notificación
- reorganización del layout con lógica de **grilla Bootstrap**, separando visualmente la lista de tareas y el timeline Gantt
- mantenimiento de la **sidebar vertical** del proyecto como elemento de navegación lateral
- preservación del encabezado de proyecto con estado, título y barra de progreso
- representación visual de tareas, épicas, fechas y badges de estado dentro de una estructura más compatible con Bootstrap
- mantenimiento de la identidad visual del proyecto, conservando fondo claro, azules predominantes y jerarquía tipográfica consistente

El mockup actualizado fue exportado como:

`docs/01-mockup/disenio-bootstrap.png`

---

## Implementación del mockup actualizado

Para generar la nueva versión del mockup del Primer Parcial se siguió este proceso:

1. Se tomó como base el mockup mejorado de la Actividad Obligatoria N°2.
2. Se intentó utilizar el MCP de Figma como herramienta de apoyo para el trabajo sobre el diseño.
3. Como alternativa operativa, se realizó una lectura estructural del archivo de Figma para analizar:
   - dimensiones del frame principal
   - jerarquía de capas
   - distribución general del layout
   - colores y tipografías
4. A partir de ese análisis, se construyó una nueva versión visual del mockup incorporando criterios compatibles con Bootstrap.
5. Se generó la imagen final del mockup actualizado y se guardó en:
   `docs/01-mockup/disenio-bootstrap.png`

El diseño original de la Actividad Obligatoria N°2 no fue reemplazado, sino tomado como referencia para producir una nueva versión visual del proyecto orientada al Primer Parcial.

---

## Criterios de Aceptación

- [x] El archivo `docs/03-specs/primer-parcial/spec-devops.md` fue creado y commiteado antes que cualquier otro cambio del rol.
- [x] El mockup en Figma fue actualizado para reflejar la migración a Bootstrap.
- [x] El mockup actualizado incorpora una navbar.
- [x] El mockup actualizado reorganiza el layout con lógica de grilla Bootstrap.
- [x] El mockup actualizado fue exportado como `docs/01-mockup/disenio-bootstrap.png`.
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
  **Mitigación:** Mantener este archivo como primer commit de la rama `feature/coord-devops-update-doc-project`.

- **Riesgo:** El mockup actualizado no quede disponible a tiempo para el rol Frontend / Bootstrap.  
  **Mitigación:** Priorizar la actualización del diseño, la exportación de la imagen y la incorporación del enlace en `README.md`.

- **Riesgo:** Las PRs del equipo se mergeen sin revisión suficiente.  
  **Mitigación:** Verificar que todas las PRs tengan al menos una aprobación antes del merge en `develop`.

- **Riesgo:** El changelog no refleje correctamente la participación del equipo.  
  **Mitigación:** Revisar `changelog.md` en cada PR antes de aprobar.

- **Riesgo:** La release se cree sin haber integrado todas las features.  
  **Mitigación:** Confirmar en `develop` que todas las PRs del parcial estén mergeadas antes de crear `release/primer-parcial`.

- **Riesgo:** Se acumulen ramas innecesarias y se complique la lectura del repositorio.  
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

> Completar al cierre con los prompts reales utilizados para revisar las PRs del equipo.

```text
[Pegar aquí los prompts reales usados en los code reviews]