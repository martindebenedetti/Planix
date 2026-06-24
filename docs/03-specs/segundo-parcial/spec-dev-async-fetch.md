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

- [ ] `js/api/apiService.js` creado.
- [ ] Endpoint `/todos` consumido mediante `fetch`.
- [ ] Manejo de estados loading/success/error implementado.
- [ ] Datos integrados al DOM.
- [ ] Datos convertidos a tareas compatibles con Planix.
- [ ] Uso de `map`, `filter` y `reduce`.
- [ ] Datos persistidos mediante Storage.
- [ ] Integración coordinada con `Notificaciones.js`.
- [ ] Tests coordinados con Tester QA/JS.
- [ ] Documentación final completada.