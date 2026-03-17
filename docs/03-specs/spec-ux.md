# Spec UX - Actividad Obligatoria 1

## ¿Qué voy a hacer?
- Analizar `plan.md` como contexto general del proyecto.
- Generar el archivo `README.md` con ayuda de GitHub Copilot y revisarlo.
- Diseñar el mockup inicial en Figma para una página web sobre un planificador de tareas estilo diagrama de Gantt.
- Exportar una imagen del mockup y guardarla en `docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png`.

## ¿Por qué?
- El `README.md` será la presentación pública del proyecto para cualquier persona que ingrese al repositorio.
- El mockup en Figma servirá como referencia visual para el rol de Desarrollador Frontend, que luego deberá construir la estructura HTML inicial a partir de esa maqueta.
- La especificación previa permite ordenar el trabajo antes de producir los entregables, siguiendo el enfoque de Spec-Driven Development pedido en la actividad.

## Contexto
Según el archivo `plan.md`, el proyecto consiste en desarrollar una página web básica que funcione como base para un planificador de tareas estilo diagrama de Gantt.  
La primera entrega se enfoca en:
- establecer la estructura HTML inicial,
- documentar el proyecto,
- preparar la base para futuras mejoras de CSS y JavaScript,
- incluir contenido informativo sobre diagramas de Gantt y su uso en la planificación de tareas.

## Uso de IA
Se utilizará GitHub Copilot para:
- obtener sugerencias de layout, estructura de secciones y jerarquía visual antes de abrir Figma;
- generar una primera versión del `README.md`, que luego será revisada, corregida y completada manualmente.

## Prompt utilizado para explorar el diseño
"Tomando como base el archivo `plan.md` de este proyecto, proponé una estructura visual inicial para una página web básica sobre un planificador de tareas estilo diagrama de Gantt. Necesito sugerencias de layout general, secciones principales, navegación y jerarquía visual para luego diseñar un mockup simple en Figma."

## Qué sugirió la IA
La IA propuso una página con:
- un `header` con título del proyecto y navegación principal;
- una sección introductoria que explique qué es un diagrama de Gantt;
- una sección con casos de uso;
- una sección con formulario para carga de tareas;
- una sección con una tabla simulando un diagrama de Gantt;
- una sección de recursos y enlaces;
- un `footer` con información general.

## Qué incorporé
Se decidió incorporar:
- encabezado con identidad del proyecto;
- navegación principal;
- sección introductoria e informativa;
- lista de casos de uso;
- formulario de tareas;
- tabla representando un ejemplo de planificación;
- sección de enlaces útiles;
- pie de página.

## Qué descarté y por qué
Se descartaron en esta etapa:
- detalles visuales avanzados;
- definición fina de colores, espaciados y estilos;
- comportamientos interactivos complejos;
- una interfaz demasiado parecida a una aplicación profesional completa.

## Criterios de aceptación
- [ ] El archivo `spec-ux.md` fue creado antes del `README.md` y antes del mockup.
- [ ] El spec describe el que y porque, criterios de aceptación y promt utilizados
- [ ] El spec documenta qué sugirió la IA, que se incorporó y que se descartó.
- [ ] El `README.md` incluye título, descripción, objetivos, tecnologías, funcionalidades previstas, enlace al mockup y carátula del equipo.
- [ ] El mockup fue diseñado en Figma.
- [ ] La imagen exportada fue guardada en `docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png`.