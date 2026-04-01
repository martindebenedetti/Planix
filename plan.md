# Spec Maestro - Planificador de Tareas (Diagrama de Gantt)

## Contexto del Proyecto

Se desarrollará una página web básica que sirva de base para un planificador de tareas estilo diagrama de Gantt. Esta primera entrega está enfocada en establecer la estructura HTML inicial, documentar el proyecto y preparar el terreno para futuras etapas de diseño, estilos e interactividad.

## Objetivos del Proyecto

- Crear una estructura HTML5 semántica que funcione como plantilla inicial.
- Incluir contenido informativo sobre el tema elegido y los diagramas de Gantt.
- Preparar el código para futuras mejoras de CSS y JavaScript mediante comentarios/markadores.
- Cumplir con los requerimientos de entrega establecidos (documentación, specs y organización).
- Antes de realizar la implementación, redactar la especificación técnica (spec) y agregarla al PR correspondiente.
- Cada rol debe tener su archivo `docs/03-specs/actividad-obligatoria-1/spec-<rol>.md` con el detalle del trabajo a realizar.

## Requerimientos Funcionales (Extraídos de la consigna)

RF1 – Visualización de tareas  
El sistema debe permitir visualizar una lista de tareas dentro de la página principal.

RF2 – Información de cada tarea  
Cada tarea debe mostrar al menos la siguiente información:
- ID
- nombre de la tarea
- responsable
- fecha de inicio
- fecha de finalización
- tarea previa
- tarea siguiente

RF3 – Representación temporal  
El sistema debe representar visualmente la duración de las tareas en una línea de tiempo similar a un diagrama de Gantt.

RF4 – Organización de tareas  
Las tareas deben mostrarse organizadas dentro de la interfaz de forma clara para facilitar la comprensión del flujo del proyecto.

RF5 – Navegación dentro del sitio  
El usuario debe poder navegar entre las diferentes secciones del sitio mediante enlaces o menú de navegación.

RF6 – Visualización de información explicativa  
El sistema debe mostrar contenido descriptivo sobre qué es un diagrama de Gantt y su utilidad en la planificación de proyectos.

---

## Requerimientos No Funcionales

RNF1 – Usabilidad  
La interfaz debe ser simple, clara y fácil de navegar.

RNF2 – Compatibilidad  
La página web debe funcionar correctamente en navegadores modernos.

RNF3 – Estructura del código  
El código HTML, CSS y JavaScript debe mantenerse organizado y documentado para facilitar futuras mejoras.

---

## Evolución del diseño – Actividad Obligatoria 2

En esta etapa del proyecto se incorpora una actualización del mockup inicial
para definir los lineamientos visuales del sistema.

El diseño actualizado incluye:

- definición de una **paleta de colores** para la interfaz (colores primarios,
  secundarios y neutros);
- definición de **tipografías** y jerarquías visuales (títulos, texto, etiquetas);
- especificación de **espaciados y dimensiones de componentes** (padding,
  margin, border-radius);
- definición de **estados de interacción** para los elementos de la interfaz
  (hover, focus y disabled).

El mockup actualizado se encuentra en:

`docs/01-mockup/actividad-obligatoria-2/diseño-con-estilos.png`

Este diseño servirá como referencia para la próxima etapa de desarrollo
frontend, donde se implementará la estructura HTML, los estilos CSS y la interactividad con JavaScript.

## Criterios de Aceptación

- ✅ El repositorio contiene `plan.md` con los requerimientos funcionales, objetivos y criterios de aceptación.
- ✅ Existe un `README.md` con descripción y estructura del proyecto.
- ✅ `docs/03-specs/` incluye los 4 archivos de spec (`spec-devops.md`, `spec-frontend.md`, `spec-ux.md`, `spec-ia.md`).
- ✅ `docs/02-prompts/` contiene al menos 5 archivos `prompts-*.md` con prompts reales y su aporte.
- ✅ La página principal (`index.html`) incluye:
  - Header, main y footer semánticos.
  - Formulario básico, lista y tabla relacionados con la planificación.
  - Comentarios indicando futuras implementaciones de CSS y JS.
- ✅ El contenido técnico está redactado en español y sigue el formato Markdown.
