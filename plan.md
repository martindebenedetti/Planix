# Spec Maestro - Planificador de Tareas (Diagrama de Gantt)

## Contexto del Proyecto

Se desarrollará una página web básica que sirva de base para un planificador de tareas estilo diagrama de Gantt. Esta primera entrega está enfocada en establecer la estructura HTML inicial, documentar el proyecto y preparar el terreno para futuras etapas de diseño, estilos e interactividad.

## Objetivos del Proyecto

- Crear una estructura HTML5 semántica que funcione como plantilla inicial.
- Incluir contenido informativo sobre el tema elegido y los diagramas de Gantt.
- Preparar el código para futuras mejoras de CSS y JavaScript mediante comentarios/markadores.
- Cumplir con los requerimientos de entrega establecidos (documentación, specs y organización).
- Antes de realizar la implementación, redactar la especificación técnica (spec) y agregarla al PR correspondiente.
- Cada rol debe tener su archivo `spec-<rol>.md` eb `docs/03-specs/` con el detalle del trabajo a realizar.

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

# Tercera Entrega — Programación Web con JavaScript

## Objetivo General

Implementar la lógica de negocio principal del proyecto utilizando JavaScript, incorporando algoritmos, estructuras de control, funciones, arrays, objetos y testing automatizado, manteniendo coherencia con el mockup, la documentación previa y la arquitectura definida en el Primer Parcial.

---

## Objetivos Específicos

- Implementar 4 flujos funcionales principales del sistema.
- Incorporar lógica de validación mediante estructuras condicionales.
- Utilizar ciclos para procesamiento de colecciones de datos.
- Implementar funciones reutilizables y modulares.
- Modelar datos mediante arrays y objetos.
- Incorporar testing automatizado con Jasmine.
- Generar diagramas de actividades utilizando PlantUML.
- Mantener trazabilidad Git/GitHub mediante branch model y Pull Requests.

---

## Arquitectura de la Entrega

La tercera entrega se organiza en los siguientes módulos:

| Módulo | Responsable | Objetivo |
|---|---|---|
| JavaScript Core | Dev JavaScript | Implementación de lógica y flujos |
| Diagramas UML | Arquitecto de Diagramas | Modelado de flujos de actividades |
| Testing Jasmine | Tester / QA | Validación automatizada |
| Coordinación DevOps | Coordinador | Integración, reviews y releases |

---

## Flujos Funcionales Planificados

Los flujos principales del sistema serán:

1. Creación de proyecto
2. Agregación de tareas a proyecto
3. Cálculo de avance del proyecto
4. Listado y filtrado de tareas

---

## Estrategia de Branching

El repositorio mantendrá el siguiente esquema de ramas:

- `master`
- `develop`
- `release/tercera-entrega`

Ramas feature previstas:

- `feature/dev-javascript`
- `feature/tester-javascript-jasmine`
- `feature/arquitecto-diagramas`
- `feature/coord-devops-tercera-entrega`

---

## Herramientas Utilizadas

| Herramienta | Uso |
|---|---|
| GitHub Copilot Agent | Generación asistida de código y testing |
| Playwright MCP | Ejecución automatizada en browser |
| Jasmine | Testing automatizado |
| PlantUML | Diagramas de actividades |
| Bootstrap 5 | Base responsive del frontend |
| GitHub Projects | Gestión Kanban de tareas |

---

## Estrategia de Testing

La validación del sistema incluirá:

- Happy paths
- Casos borde
- Validaciones de errores
- Testing de arrays y objetos
- Verificación de algoritmos

Los tests serán ejecutados mediante Jasmine en navegador real utilizando Playwright MCP.

---

## Integración Continua y Coordinación

La integración de cambios seguirá el siguiente flujo:

1. Desarrollo en ramas feature
2. Pull Request hacia `develop`
3. Code Review asistido por IA
4. Correcciones y aprobación
5. Merge controlado
6. Release final hacia `master`

---

## Versionado

La entrega finalizará con:

- Tag:
  `v1.1-tercera-entrega`

- Release GitHub documentada con:
  - changelog
  - enlaces relevantes
  - evidencias de testing
  - documentación técnica

