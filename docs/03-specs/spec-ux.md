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

Dentro de la primera entrega, este spec se enfoca particularmente en la parte de documentación y definición visual inicial, dejando como referencia para etapas posteriores:
- la construcción de la estructura HTML,
- la incorporación de estilos CSS y comportamiento con JavaScript,
- y la ampliación funcional de la interfaz.

En esta actividad, mi aporte principal es:
- documentar el proyecto mediante el `README.md`,
- definir una propuesta visual inicial mediante un mockup,
- dejar una base clara para que el rol Frontend pueda implementar la interfaz.

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
- un encabezado con nombre del proyecto;
- una navegación superior simple;
- un panel lateral con datos de tareas;
- un área principal para representar el cronograma y sus barras;
- un espacio para filtros;
- un pie de página con información general.

## Qué descarté y por qué
Al comparar la propuesta inicial de la IA con el mockup final, algunas ideas se incorporaron de forma directa y otras se simplificaron o descartaron.

Se descartaron o transformaron los siguientes elementos:
- la **sección introductoria extensa** fue reducida, para evitar exceso de texto en esta primera versión;
- la **sección de casos de uso** no se incorporó en el mockup final, porque se priorizó una interfaz más simple y centrada en la visualización del planificador;
- la **sección de recursos y enlaces** se dejó fuera en esta etapa inicial, ya que no era prioritaria para el objetivo principal de la maqueta;
- el **formulario de carga de tareas** no se desarrolló como bloque independiente, sino que se reinterpretó de forma más simple mediante panel lateral y espacio para filtros;
- no se incluyeron **múltiples pantallas, interacciones complejas ni detalle visual avanzado**, porque el objetivo de esta entrega era definir una base visual clara y no una versión final navegable.

## Criterios de aceptación
- [x] El archivo `spec-ux.md` fue elaborado como base previa para ordenar el trabajo antes de generar los entregables.
- [x] El spec describe qué se va a hacer, por qué se realiza y cuál es el contexto de la actividad.
- [x] El spec incluye el prompt utilizado para explorar el diseño con IA.
- [x] El spec documenta qué sugirió la IA, qué se incorporó y qué se descartó o transformó.
- [x] El `README.md` incluye título, descripción, objetivos, tecnologías, funcionalidades previstas, enlace al mockup y carátula del equipo.
- [x] El mockup fue diseñado en Figma.
- [x] La imagen exportada fue guardada en `docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png`.