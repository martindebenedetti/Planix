# Documentación de Storage - Planix

## Actividad Obligatoria N°4

## Objetivo

Implementar una capa de abstracción para manejar `localStorage` y `sessionStorage` desde un único módulo reutilizable.

El archivo principal es:

```text
js/utils/storage.js
```

## Estrategia de almacenamiento

### localStorage

Se utilizará para datos que deben persistir entre sesiones del navegador.

Ejemplos previstos:

- proyectos creados por el usuario;
- tareas asociadas a un proyecto;
- preferencias persistentes de la aplicación.

### sessionStorage

Se utilizará para datos temporales de la sesión actual.

Ejemplos previstos:

- filtros activos;
- vista seleccionada;
- estado temporal de la interfaz.

## Convención de claves

Se adopta el prefijo general:

```text
planix:
```

Ejemplos de claves:

```text
planix:proyectos
planix:tareas
planix:preferencias
planix:sesion:filtros
planix:sesion:vista-activa
```

## Estructura de datos prevista

### Proyecto

```json
{
  "id": 1,
  "nombre": "Planificador Gantt",
  "fechaInicio": "2026-03-01",
  "fechaFin": "2026-05-05",
  "tareas": []
}
```

### Tarea

```json
{
  "id": "1.1",
  "nombre": "Relevamiento de requisitos",
  "fechaInicio": "2026-03-01",
  "fechaFin": "2026-03-10",
  "responsable": "Leandro B.",
  "predecesora": null,
  "avance": 100,
  "estado": "completada"
}
```

### Filtros de sesión

```json
{
  "responsable": "Leandro B.",
  "estado": "en curso",
  "vistaActiva": "gantt"
}
```

## Funciones implementadas

### guardar(clave, valor, tipo)

Guarda un dato en `localStorage` o `sessionStorage`.

```js
StorageUtil.guardar("planix:proyectos", proyectos, "local");
```

### obtener(clave, tipo)

Recupera un dato desde `localStorage` o `sessionStorage`.

```js
const proyectos = StorageUtil.obtener("planix:proyectos", "local");
```

### actualizar(clave, valor, tipo)

Actualiza un dato existente. Si la clave no existe, la crea.

```js
StorageUtil.actualizar("planix:proyectos", proyectosActualizados, "local");
```

### eliminar(clave, tipo)

Elimina una clave específica.

```js
StorageUtil.eliminar("planix:sesion:filtros", "session");
```

### existe(clave, tipo)

Verifica si una clave existe en `localStorage` o `sessionStorage`.

```js
const existeProyecto = StorageUtil.existe("planix:proyectos", "local");
```

### listar(prefijo, tipo)

Lista todas las claves que empiezan con un prefijo determinado.

```js
const claves = StorageUtil.listar("planix:", "local");
```

### limpiar(tipo)

Limpia completamente el storage indicado.

```js
StorageUtil.limpiar("session");
```

### limpiarPorPrefijo(prefijo, tipo)

Elimina solamente las claves que comienzan con un prefijo determinado. Es una alternativa más segura que `limpiar()`, porque evita borrar información ajena al proyecto.

Por seguridad, esta función rechaza prefijos vacíos. Para limpiar completamente el storage indicado, se debe usar `limpiar(tipo)`.

```js
StorageUtil.limpiarPorPrefijo("planix:", "local");
```

## Serialización JSON

El módulo utiliza:

- `JSON.stringify()` para guardar objetos y arrays;
- `JSON.parse()` para recuperar datos complejos.

Esto permite almacenar estructuras como proyectos, tareas, filtros y configuraciones.

## Limitaciones de serialización

El módulo utiliza JSON para persistir datos. Por ese motivo, no puede persistir correctamente ciertos valores.

No se pueden guardar como valor principal:

- valores `undefined`;
- funciones;
- símbolos (`Symbol`);
- objetos con referencias circulares;
- métodos de instancia.

Para persistir instancias de clases, se recomienda convertirlas previamente a objetos planos mediante métodos como `toJSON()`.

Ejemplo incorrecto:

```js
StorageUtil.guardar("planix:datos", {
  id: 1,
  handler: () => {}
}, "local");
```

Ejemplo correcto:

```js
StorageUtil.guardar("planix:datos", {
  id: 1,
  nombre: "Proyecto"
}, "local");
```

Si el valor no puede serializarse correctamente, la función `guardar()` retorna `false`.

## Manejo de errores

Todas las operaciones principales utilizan `try-catch`.

Se contemplan errores como:

- storage no disponible;
- datos corruptos;
- JSON mal formado;
- problemas al guardar o recuperar información;
- claves inexistentes.

## Diferencia entre localStorage y sessionStorage en el proyecto

| Tipo de storage | Uso previsto | Persistencia |
|---|---|---|
| `localStorage` | Proyectos, tareas y preferencias generales | Permanece entre sesiones |
| `sessionStorage` | Filtros, vista activa y datos temporales de navegación | Se borra al cerrar la pestaña o navegador |

## Integración prevista

Este módulo no manipula el DOM ni contiene lógica visual.

La integración final será realizada desde el controlador principal `js/script.js` o desde los módulos que correspondan en la arquitectura de la Actividad Obligatoria N°4.

## Relación con POO

Cuando estén implementadas las clases del dominio en `js/models/`, el módulo de storage podrá persistir objetos serializados mediante métodos como:

```js
const proyectoPlano = proyecto.toJSON();
StorageUtil.guardar("planix:proyectos", [proyectoPlano], "local");
```

Y luego reconstruir instancias mediante métodos estáticos como:

```js
const proyectosGuardados = StorageUtil.obtener("planix:proyectos", "local");
const proyectos = proyectosGuardados.map((item) => Proyecto.fromJSON(item));
```

## Estado

- [x] Capa de abstracción creada.
- [x] CRUD básico implementado.
- [x] Serialización JSON implementada.
- [x] Manejo de errores implementado.
- [x] Documentación inicial de estrategia de storage creada.
- [ ] Integración final con clases POO.
- [ ] Tests automatizados desde Jasmine.
- [x] Validación de claves implementada.
- [x] Normalización del tipo de storage implementada.
- [x] Funciones auxiliares `existe()` y `limpiarPorPrefijo()` implementadas.
