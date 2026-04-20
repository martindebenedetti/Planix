# Especificación Técnica - Rol DevOps (Spec-Driven Development)

## Descripción

Esta especificación técnica describe las tareas realizadas por el rol de **Coordinador / DevOps** en el marco de la **Actividad Obligatoria N°2**.

Se aplica la metodología **Spec-Driven Development (SDD)**, donde esta especificación se define como guía del trabajo del rol y se completa al cierre con la evidencia de las decisiones tomadas, revisiones realizadas y resultados obtenidos.

---

## ¿Qué se hará?

Como responsable del rol **DevOps**, se definieron e implementaron las siguientes tareas:

1. **Definición del alcance del rol**
   - Coordinar el flujo de trabajo del repositorio utilizando Git y GitHub.
   - Supervisar la creación y revisión de Pull Requests del equipo.
   - Garantizar que los cambios estuvieran alineados con el `plan.md` y el mockup actualizado.
   - Coordinar la creación de ramas `feature/`, `develop` y `release/`.

2. **Implementación de las tareas del rol**
   - Crear y gestionar ramas de trabajo para las funcionalidades de la Actividad 2.
   - Supervisar el proceso de revisión de código (Code Review) en las Pull Requests.
   - Verificar que cada Pull Request tuviera al menos una revisión antes del merge.
   - Coordinar la integración de los cambios en la rama `develop`.
   - Crear la rama de `release` correspondiente a la Actividad Obligatoria N°2.
   - Configurar y verificar la publicación del sitio mediante GitHub Pages.

3. **Documentación**
   - Registrar los cambios realizados en el archivo `changelog.md`.
   - Documentar las decisiones técnicas relacionadas con el flujo de trabajo del repositorio.
   - Mantener actualizados los archivos `README.md` y `plan.md` cuando fue necesario.

---

## ¿Por qué?

La definición de esta especificación permitió establecer con claridad las tareas del rol DevOps dentro del proyecto, evitando ambigüedades y facilitando el trabajo colaborativo del equipo.

Aplicar **Spec-Driven Development** permitió documentar decisiones técnicas antes y durante la implementación, mejorando la organización del repositorio, la trazabilidad de las Pull Requests y la validación final de la release.

---

## Criterios de Aceptación

- [x] Las tareas del rol DevOps están claramente definidas.
- [x] Las decisiones técnicas se encuentran documentadas.
- [x] La implementación cumple con los objetivos establecidos en el plan del proyecto.
- [x] El trabajo se encuentra documentado y versionado en el repositorio.
- [x] Las Pull Requests del equipo fueron revisadas antes de ser mergeadas.

---

## Responsabilidades Adicionales

- Coordinar la integración de cambios entre las diferentes ramas del repositorio.
- Verificar que el flujo de trabajo del proyecto se mantuviera ordenado.
- Colaborar con los demás roles para asegurar que los cambios fueran consistentes con el mockup y el plan del proyecto.
- Validar que la rama de `release` se generara a partir de una base estable en `develop`.
- Verificar que la publicación final en GitHub Pages reflejara el estado aprobado del proyecto.

---

## Riesgos y Mitigaciones

- **Riesgo**: Desorganización en el flujo de ramas del repositorio.  
  **Mitigación**: Utilizar una estructura clara de ramas (`feature/`, `develop`, `release/`).

- **Riesgo**: Pull Requests sin revisión previa.  
  **Mitigación**: Verificar que cada PR tuviera al menos una revisión aprobada antes del merge.

- **Riesgo**: Inconsistencias entre el mockup, el plan del proyecto y la implementación.  
  **Mitigación**: Realizar revisiones verificando coherencia con `plan.md`, `README.md` y el mockup del proyecto.

- **Riesgo**: Publicar una release sin validación final del estado del repositorio.  
  **Mitigación**: Confirmar que todas las features estuvieran integradas en `develop`, que QA hubiera finalizado las validaciones y que la release se generara luego de esa revisión.

---

## Decisiones Técnicas Tomadas

Durante la Actividad Obligatoria N°2 se tomaron las siguientes decisiones técnicas desde el rol DevOps:

1. **Mantener el flujo de trabajo basado en ramas**
   - Cada integrante trabajó en su propia rama `feature/`.
   - Los cambios fueron integrados en `develop` mediante Pull Requests revisadas.
   - La rama `release/actividad-obligatoria-2` se creó una vez consolidadas las features y validado el trabajo en `develop`.

2. **Exigir revisión previa antes del merge**
   - Se verificó que todas las Pull Requests del proyecto tuvieran al menos una revisión antes de ser mergeadas.
   - Se utilizó el proceso de code review para detectar observaciones y solicitar ajustes antes de aprobar.

3. **Mantener trazabilidad documental**
   - Se registraron las contribuciones en `changelog.md`.
   - Se mantuvo consistencia entre `README.md`, `plan.md`, specs técnicas y evidencias del proyecto.

4. **Publicación de la release**
   - Se resolvió publicar el sitio mediante GitHub Pages sobre la rama de release para exponer una versión estable y revisable del proyecto.

---

## Decisiones sobre el Mockup

Desde la coordinación del repositorio, se verificó que la evolución visual definida en el mockup de la Actividad 2 quedara reflejada en la documentación y en la implementación.

Las decisiones validadas fueron:

- incorporación de una **paleta de colores** consistente con la nueva versión del diseño
- uso de **tipografías** definidas en el mockup actualizado
- ajuste de **espaciados, jerarquías visuales y estados de interacción**
- actualización del `README.md` con enlace al mockup de A1 y A2
- validación de que `plan.md` incluyera la sección **"Evolución del diseño (A2)"**

También se verificó la existencia de la imagen exportada del mockup en:

`docs/01-mockup/actividad-obligatoria-2/diseño-con-estilos.png`

---

## Prompts utilizados en Code Reviews con Copilot Agent

A continuación se documenta el uso de Copilot Agent como asistencia para revisiones de Pull Requests del equipo.

### Prompt base utilizado

```text
Revisá esta Pull Request teniendo en cuenta:
1. consistencia con plan.md
2. consistencia con el mockup actualizado de la Actividad 2
3. cumplimiento del rol asignado
4. claridad de la documentación técnica
5. presencia de criterios de aceptación verificables
6. estructura correcta de ramas, commits y changelog
7. detección de errores, omisiones o mejoras necesarias

Indicá hallazgos concretos, priorizados, y señalá si corresponde aprobar, comentar o pedir cambios.