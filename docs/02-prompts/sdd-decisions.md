# Decisiones de Spec-Driven Development (SDD)

## Aplicación de SDD en el proyecto

Para este proyecto se decidió aplicar la metodología Spec-Driven Development (SDD), donde cada integrante del equipo debe redactar una especificación técnica antes de comenzar cualquier implementación.

Cada rol cuenta con un archivo de especificación dentro de `docs/specs/`:

- `spec-devops.md`
- `spec-frontend.md`
- `spec-ux.md`
- `spec-ia.md`

Estas especificaciones describen:

- qué tarea se va a realizar
- por qué se realiza
- criterios de aceptación para considerar la tarea terminada

El objetivo es que las decisiones de diseño y desarrollo estén documentadas antes de comenzar la implementación.

---

## Relación con el archivo plan.md

El archivo `plan.md` actúa como documento de referencia principal del proyecto.

Las especificaciones de cada rol deben alinearse con los objetivos definidos en `plan.md`. Esto permite asegurar que las tareas individuales contribuyan al objetivo general del sistema.

Por ejemplo:

- El rol **UX** define la estructura visual de la aplicación.
- El rol **Frontend** implementa la interfaz basándose en ese diseño.
- El rol **DevOps** configura el repositorio y flujo de trabajo.
- El rol **IA** define cómo se utilizarán herramientas de IA y prompt engineering en el proyecto.

---

## Orden de creación de las especificaciones

El equipo decidió seguir el siguiente orden de trabajo:

1. Definición del `plan.md`
2. Creación de las especificaciones por rol (`spec-[rol].md`)
3. Validación de las especificaciones entre los integrantes
4. Creación de ramas `feature/` para implementar cada tarea
5. Creación de Pull Requests asociados a una Issue

Este flujo permite asegurar que cada tarea tenga una base técnica clara antes de comenzar su desarrollo.

---

## Validación de las especificaciones

Antes de comenzar el desarrollo, las especificaciones deben cumplir los siguientes criterios:

- describir claramente el alcance de la tarea
- explicar el motivo de la implementación
- incluir criterios de aceptación verificables
- estar alineadas con el plan general del proyecto

Las especificaciones son revisadas durante el proceso de Pull Request para asegurar que el trabajo realizado corresponde con lo planificado.

---

## Beneficios de aplicar SDD en el proyecto

La aplicación de Spec-Driven Development permite:

- mejorar la claridad en las responsabilidades de cada rol
- evitar ambigüedades en las tareas a desarrollar
- facilitar las revisiones de código
- documentar las decisiones técnicas del equipo
