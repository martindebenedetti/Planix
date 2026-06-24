# Spec - Desarrollador JS Asíncrono - Fetch & APIs

## Datos del rol

- Rol: Desarrollador JS Asíncrono - Fetch & APIs
- Rama: `feature/dev-async-fetch-api`
- Issue asociado: [#127](https://github.com/martindebenedetti/Planix/issues)
- PR asociada: pendiente
- API seleccionada: JSONPlaceholder
- Endpoint principal: `https://jsonplaceholder.typicode.com/todos`

## Justificación de la API seleccionada

Se selecciona JSONPlaceholder porque permite consumir tareas mediante el endpoint `/todos`, cuyos datos pueden mapearse directamente al modelo de tareas de Planix.

Cada objeto recibido incluye `title`, `completed`, `id` y `userId`, lo que permite transformar la información en tareas del sistema y asociarlas al proyecto activo.

Además, no requiere API key, permite simular operaciones `GET`, `POST` y `DELETE`, y facilita la coordinación con la librería externa SweetAlert2 utilizada para notificaciones de éxito, error y confirmación.

## Estados de carga previstos

- Loading: mostrar estado visual mientras se consultan datos.
- Success: informar que las tareas fueron cargadas correctamente.
- Error HTTP: informar que la API respondió con error.
- Error de red: informar que no se pudo completar la solicitud.
- Fallback: evitar romper la app si la API no responde.

## Funciones de orden superior previstas

- `map()`: transformar objetos `todo` de la API en objetos compatibles con `Tarea`.
- `filter()`: filtrar tareas válidas o tareas completadas/pendientes.
- `reduce()`: calcular resumen de tareas importadas, completadas y pendientes.

## Integración con Planix

- El usuario selecciona un proyecto existente.
- Se consulta JSONPlaceholder mediante `fetch`.
- Los datos se transforman en tareas.
- Las tareas se agregan al proyecto seleccionado.
- Se actualiza la tabla Gantt.
- Se persisten los cambios en `localStorage`.
- Se informa el resultado mediante `Notificaciones.js` / SweetAlert2 si está disponible.

## Coordinación con Desarrollador JS Librerías Externas

La integración usará el módulo de notificaciones definido por el rol de Librerías Externas.

Estados coordinados:

- Carga exitosa: `Notificaciones.exito(...)`
- Error de carga: `Notificaciones.error(...)`
- Confirmación de eliminación: `Notificaciones.confirmar(...)`

Si `Notificaciones` no está disponible, se usará un fallback con mensajes visuales existentes del sistema.

## Coordinación con Tester QA/JS

Se coordinarán casos de prueba para:

- fetch exitoso;
- error HTTP;
- error de red;
- transformación con `map`;
- filtrado con `filter`;
- resumen con `reduce`;
- integración con DOM;
- persistencia posterior a la importación.

## Criterios de aceptación

- [x] `js/api/apiService.js` creado.
- [x] Endpoint `/todos` consumido mediante `fetch`.
- [x] Manejo de estados loading/success/error implementado.
- [x] Datos integrados al DOM.
- [x] Datos convertidos a tareas compatibles con Planix.
- [x] Uso de `map`, `filter` y `reduce`.
- [x] Datos persistidos mediante Storage.
- [x] Integración coordinada con `Notificaciones.js`.
- [x] Tests coordinados con Tester QA/JS.
- [x] Documentación final completada.


## Evidencia de cierre

### Prompt utilizado

```text
Actuá como asistente técnico para Programación Web I. Necesito implementar mi rol de Desarrollador JS Asíncrono - Fetch & APIs para Planix. La funcionalidad debe consumir datos desde JSONPlaceholder usando fetch, procesarlos con funciones de orden superior, integrarlos al DOM, guardarlos mediante Storage y coordinarse con el módulo de notificaciones basado en SweetAlert2 que implementará otro integrante. Dame un paso a paso respetando la consigna, separando el momento previo de documentación del momento de implementación.
```

### Ajustes manuales realizados

* Se creó el módulo `js/api/apiService.js` para centralizar el consumo de datos externos.
* Se incorporó el método `fetchData(endpoint)` para reutilizar la lógica de consumo asíncrono.
* Se implementó `obtenerTodos(limite)` para consultar tareas desde JSONPlaceholder.
* Se implementó `eliminarTodo(id)` para simular eliminación mediante `DELETE`.
* Se implementó `mapearTodoATarea(todo)` para transformar datos externos a una estructura compatible con Planix.
* Se implementó `procesarTodos(todos)` aplicando `filter`, `map` y `reduce`.
* Se agregó una sección mínima en `index.html` para importar tareas externas.
* Se integró el botón `Importar tareas desde API` con `script.js`.
* Se incorporó el estado visual de carga, éxito y error mediante el contenedor `estado-api`.
* Se corrigieron regresiones detectadas por Jasmine en la selección de proyecto y carga desde Storage.
* Se actualizó `js/test/test-runner.html` para cargar `apiService.js` y `api.spec.js`.

### Integración con clases POO

Los datos recibidos desde JSONPlaceholder se transforman a tareas compatibles con el modelo `Tarea`.

El campo `title` se utiliza como nombre de la tarea, `userId` se transforma en responsable y `completed` se interpreta como estado de la tarea:

* `completed: true` → `completada`
* `completed: false` → `pendiente`

Luego, las tareas importadas se agregan al proyecto seleccionado mediante los métodos existentes del modelo de dominio.

### Integración con Storage

Después de importar las tareas externas, se ejecuta `guardarEnStorage()` para persistir el estado actualizado del gestor en `localStorage`.

Esto permite que las tareas importadas permanezcan disponibles luego de recargar la página.

### Integración con DOM

Se agregó una sección visual para importar tareas externas desde la API.

El flujo implementado es:

1. El usuario selecciona un proyecto.
2. Presiona el botón `Importar tareas desde API`.
3. El sistema muestra el estado `Cargando tareas desde API...`.
4. Se obtienen tareas desde JSONPlaceholder.
5. Se transforman y agregan al proyecto seleccionado.
6. Se actualiza la tabla Gantt.
7. Se informa el resultado de la importación.

### Coordinación con Desarrollador JS Librerías Externas

La integración quedó preparada para utilizar el módulo `Notificaciones.js`, asociado a SweetAlert2.

Si el módulo `Notificaciones` está disponible, se utilizan sus métodos:

* `Notificaciones.exito(...)`
* `Notificaciones.error(...)`

Si todavía no está disponible, el sistema utiliza como fallback las funciones existentes:

* `mostrarExito(...)`
* `mostrarError(...)`

Esto permite que la funcionalidad asíncrona funcione de manera independiente y luego se integre sin romper la aplicación.

### Coordinación con Tester QA/JS

Se incorporó la suite `js/test/api.spec.js`, cubriendo los siguientes casos:

* consumo exitoso con `fetchData()`;
* error HTTP;
* error de red;
* consulta mediante `obtenerTodos()`;
* transformación de datos con `mapearTodoATarea()`;
* procesamiento de colecciones con `filter`, `map` y `reduce`;
* simulación de eliminación mediante `DELETE`;
* error en eliminación externa.

### Resultado de testing

Resultado final de Jasmine:

```text
97 specs, 0 failures
```

### Issue asociado

* Issue #127 — Implementación de consumo asíncrono de tareas con JSONPlaceholder.

### Archivos modificados

* `docs/03-specs/segundo-parcial/spec-dev-async-fetch.md`
* `js/api/apiService.js`
* `index.html`
* `js/script.js`
* `js/test/test-runner.html`
* `js/test/api.spec.js`
