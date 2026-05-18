# Spec — Desarrollador JavaScript — Actividad Obligatoria N°3

## Rol

Desarrollador JavaScript

## Rama de trabajo

`feature/dev-javascript-logica-negocio`

## Objetivo del rol

Implementar la lógica de negocio principal del proyecto Planix utilizando JavaScript puro, sin manipulación del DOM ni eventos.

La implementación deberá simular el funcionamiento básico de un planificador de proyectos mediante `prompt()`, `alert()` y/o `console.log()`, incorporando algoritmos, funciones, arrays, objetos, validaciones y estructuras de control.

---

## BEFORE — Planificación antes de escribir código

### Contexto

Planix es un planificador de tareas tipo Gantt. En esta entrega se incorporará lógica JavaScript para simular operaciones principales del sistema.

La lógica se organizará en cuatro flujos principales:

1. Crear Proyecto.
2. Agregar Tarea.
3. Calcular Avance.
4. Filtrar Tareas.

Cada flujo seguirá el patrón:

```text
entrada → proceso → salida
```

---

## Restricciones técnicas

- Todo el código JavaScript se implementará en `js/script.js`.
- El archivo JavaScript será referenciado desde `index.html`.
- No se utilizará manipulación del DOM.
- No se utilizarán eventos.
- La interacción con el usuario será mediante `prompt()`, `alert()` y/o `console.log()`.
- La lógica de negocio se separará de la interacción con el usuario.
- Las funciones puras deberán recibir parámetros y retornar valores.
- Las funciones de UI serán las únicas encargadas de usar `prompt()` y `alert()`.
- Las funciones principales deberán quedar disponibles para testing con Jasmine.

---

## Flujos principales a implementar

### Flujo 1 — Crear Proyecto

Este flujo permite simular la creación de un nuevo proyecto dentro de Planix.

#### Entrada

- Nombre del proyecto.
- Fecha de inicio.
- Fecha de fin.

#### Proceso

- Validar que el nombre no esté vacío.
- Validar que el nombre del proyecto sea único.
- Validar formato de fecha.
- Validar que la fecha de fin sea posterior o igual a la fecha de inicio.
- Crear un objeto proyecto.
- Agregar el proyecto al array de proyectos.

#### Salida

- Mensaje de confirmación si el proyecto fue creado.
- Mensaje de error si algún dato no es válido.

#### Funciones puras previstas

- `validarNoVacio()`
- `validarNombreUnico()`
- `validarFormatoFecha()`
- `validarFechaFinPosterior()`
- `parsearFecha()`
- `crearProyecto()`
- `agregarProyecto()`

#### Función de UI

- `ejecutarFlujo1()`

---

### Flujo 2 — Agregar Tarea

Este flujo permite agregar una tarea a un proyecto existente.

#### Entrada

- Proyecto seleccionado.
- Nombre de la tarea.
- Estado inicial de la tarea.

#### Proceso

- Buscar el proyecto seleccionado.
- Construir una lista de proyectos disponibles.
- Validar que el proyecto exista.
- Validar que el estado ingresado sea permitido.
- Crear un objeto tarea.
- Agregar la tarea al proyecto.

#### Salida

- Mensaje de confirmación si la tarea fue agregada.
- Mensaje de error si el proyecto no existe o el estado no es válido.

#### Funciones puras previstas

- `buscarProyecto()`
- `construirListaProyectos()`
- `validarEstado()`
- `crearTarea()`
- `agregarTarea()`

#### Función de UI

- `ejecutarFlujo2()`

---

### Flujo 3 — Calcular Avance

Este flujo permite calcular el avance de un proyecto en función de sus tareas completadas.

#### Entrada

- Proyecto seleccionado.

#### Proceso

- Buscar el proyecto.
- Contar la cantidad total de tareas.
- Contar tareas completadas.
- Calcular porcentaje de avance.
- Determinar estado general del proyecto.

#### Salida

- Porcentaje de avance.
- Estado general del proyecto.
- Resumen del avance.

#### Funciones puras previstas

- `contarTareasCompletadas()`
- `calcularPorcentajeAvance()`
- `determinarEstadoProyecto()`
- `calcularAvanceProyecto()`

#### Función de UI

- `ejecutarFlujo3()`

---

### Flujo 4 — Filtrar Tareas

Este flujo permite filtrar tareas según un criterio determinado, por ejemplo estado de la tarea.

#### Entrada

- Proyecto seleccionado.
- Filtro de estado.

#### Proceso

- Validar que el filtro sea permitido.
- Buscar las tareas del proyecto.
- Filtrar las tareas según el criterio ingresado.
- Construir texto legible para mostrar las tareas encontradas.

#### Salida

- Listado de tareas filtradas.
- Mensaje si no hay tareas que coincidan con el filtro.

#### Funciones puras previstas

- `validarFiltro()`
- `filtrarTareas()`
- `construirTextoTarea()`

#### Función de UI

- `ejecutarFlujo4()`

---

## Estructuras de datos previstas

### Array principal de proyectos

```text
proyectos = []
```

### Objeto proyecto

```text
{
  id,
  nombre,
  fechaInicio,
  fechaFin,
  tareas
}
```

### Objeto tarea

```text
{
  id,
  nombre,
  estado
}
```

### Estados permitidos para tareas

```text
programada
en_proceso
completada
cancelada
```

---

## Menú principal previsto

El sistema tendrá una función de menú principal que permitirá elegir entre los cuatro flujos mediante `prompt()`.

Opciones previstas:

```text
1. Crear Proyecto
2. Agregar Tarea
3. Calcular Avance
4. Filtrar Tareas
0. Salir
```

La función de menú será una función de interacción, no una función pura.

---

## Decisiones de arquitectura

### Separación entre lógica de negocio e interacción

Se dividirá el código en dos tipos de funciones:

#### Funciones puras

- Reciben parámetros.
- Retornan valores.
- No llaman a `prompt()`.
- No llaman a `alert()`.
- No dependen de interacción directa con el usuario.
- Serán utilizadas por Jasmine para testing.

#### Funciones de UI

- Usan `prompt()`.
- Usan `alert()` y/o `console.log()`.
- Llaman a las funciones puras.
- Coordinan la interacción con el usuario.

---

## Criterios de aceptación

- [ ] Existe `docs/03-specs/actividad-obligatoria-3/spec-dev-javascript.md`.
- [ ] El spec fue commiteado antes que `js/script.js`.
- [ ] Existe `js/script.js`.
- [ ] `index.html` referencia correctamente `js/script.js`.
- [ ] Se implementan 4 flujos principales.
- [ ] Se implementa un menú principal con `prompt()`.
- [ ] Se utilizan condicionales `if`, `else if` y/o `switch`.
- [ ] Se utilizan ciclos `for` o `while`.
- [ ] Se utilizan arrays.
- [ ] Se utilizan objetos.
- [ ] Las funciones tienen nombres descriptivos.
- [ ] Las funciones puras están separadas de las funciones de UI.
- [ ] Las funciones principales son testeables con Jasmine.
- [ ] No se manipula el DOM.
- [ ] No se utilizan eventos.
- [ ] Se documentan funciones relevantes con comentarios JSDoc.

---

## Prompt planificado para Copilot Agent Mode

```text
Actuá como asistente de desarrollo JavaScript para el proyecto Planix.

Contexto:
Planix es un planificador de proyectos y tareas tipo Gantt.

Necesito implementar la lógica de negocio correspondiente a la Actividad Obligatoria N°3 de Programación Web I.

Archivos de contexto:
- docs/03-specs/actividad-obligatoria-3/spec-dev-javascript.md
- docs/05-diagramas/01-diagrama-de-actividades/*.puml

Flujos a implementar:
1. Crear Proyecto.
2. Agregar Tarea.
3. Calcular Avance.
4. Filtrar Tareas.

Restricciones:
- Usar JavaScript puro.
- Implementar todo en js/script.js.
- No manipular el DOM.
- No usar eventos.
- Usar prompt(), alert() y/o console.log() solo en funciones de interacción.
- Separar lógica de negocio de entrada/salida.
- Crear funciones puras testeables con Jasmine.
- Usar arrays y objetos.
- Usar condicionales y ciclos.
- Exponer funciones necesarias para testing.
- Usar nombres camelCase.
- Agregar JSDoc donde corresponda.

Antes de generar código definitivo, devolvé una propuesta de estructura general para js/script.js, indicando funciones puras, funciones de UI y responsabilidades.
```

---

## AT CLOSE — Evidencia de cierre

> Esta sección se completará al finalizar la implementación.

Pendiente de documentar:

- prompt exacto utilizado con Copilot Agent Mode;
- fragmento del código generado o asistido;
- ajustes manuales realizados;
- decisiones finales sobre testabilidad;
- coordinación con Arquitecto de Diagramas y Tester JavaScript.