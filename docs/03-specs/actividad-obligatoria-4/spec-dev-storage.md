# Spec - Desarrollador JS Storage

## Actividad Obligatoria N°4 - Programación Web I

## Rol

Desarrollador JS Local y Session Storage.

---

## BEFORE - Plan inicial

### Objetivo del rol

Implementar una capa de abstracción para el uso de `localStorage` y `sessionStorage`, separando la lógica de persistencia del resto de la aplicación.

El módulo de Storage deberá permitir guardar, obtener, actualizar, eliminar, listar y limpiar datos de manera reutilizable, sin manipular el DOM ni contener lógica visual.

---

### Archivos previstos

- `docs/03-specs/actividad-obligatoria-4/spec-dev-storage.md`
- `js/utils/storage.js`
- `docs/06-storage/storage-doc.md`

---

### Estrategia inicial de almacenamiento

#### localStorage

Se utilizará para datos que deben persistir entre sesiones del navegador, por ejemplo:

- proyectos creados;
- tareas asociadas a proyectos;
- responsables o datos vinculados a la planificación;
- preferencias persistentes de la aplicación.

Justificación: estos datos forman parte del estado principal del proyecto y deberían conservarse aunque el usuario cierre o recargue el navegador.

#### sessionStorage

Se utilizará para datos temporales de la sesión actual, por ejemplo:

- filtros activos;
- vista o sección activa;
- flujo seleccionado por el usuario;
- mensajes o estados temporales de uso.

Justificación: estos datos ayudan a mantener la experiencia durante la sesión, pero no necesariamente deben persistir cuando el usuario cierra el navegador.

---

### Convención preliminar de claves

Se utilizará una convención de claves con prefijo del proyecto para evitar colisiones con otras aplicaciones:

```text
planix:proyectos
planix:tareas
planix:responsables
planix:preferencias
planix:sesion:filtros
planix:sesion:vista-activa
planix:sesion:flujo-activo
```

Criterio general:

```text
planix:<modulo>:<dato>
planix:sesion:<dato-temporal>
```

---

### Estructura preliminar de datos JSON

#### Proyecto

```json
{
  "id": "proyecto-1",
  "nombre": "Proyecto ejemplo",
  "fechaInicio": "2026-06-01",
  "fechaFin": "2026-06-30",
  "tareas": []
}
```

#### Tarea

```json
{
  "id": "tarea-1",
  "nombre": "Diseñar interfaz",
  "fechaInicio": "2026-06-01",
  "fechaFin": "2026-06-05",
  "avance": 50,
  "responsable": "Leandro"
}
```

#### Preferencias

```json
{
  "vistaActiva": "gantt",
  "mostrarCompletadas": true
}
```

---

### Funciones previstas en `js/utils/storage.js`

- `guardar(clave, valor, tipo)`
- `obtener(clave, tipo)`
- `actualizar(clave, valor, tipo)`
- `eliminar(clave, tipo)`
- `listar(prefijo, tipo)`
- `limpiar(tipo)`

Donde `tipo` podrá recibir:

- `local`: para utilizar `localStorage`;
- `session`: para utilizar `sessionStorage`.

---

### Criterios de aceptación

- [ ] El archivo `spec-dev-storage.md` fue creado y commiteado antes de `js/utils/storage.js`.
- [ ] Existe el archivo `js/utils/storage.js`.
- [ ] Se implementan funciones CRUD completas.
- [ ] Todas las operaciones tienen manejo de errores con `try-catch`.
- [ ] Se implementa serialización y deserialización automática con JSON.
- [ ] Se documenta la estrategia en `docs/06-storage/storage-doc.md`.
- [ ] El código no manipula DOM ni contiene lógica visual.
- [ ] El módulo puede ser probado desde Jasmine.
- [ ] La implementación puede integrarse con clases del dominio mediante `toJSON()` y `fromJSON()`.

---

## Uso de Copilot Agent Mode

Pendiente de completar al cerrar la tarea.

Al finalizar la implementación se deberá documentar:

- prompt exacto utilizado;
- archivos adjuntados como contexto;
- output o fragmento generado por Copilot;
- ajustes manuales realizados;
- justificación técnica de los cambios.

---

## AT CLOSE - Evidencia final

### Prompt utilizado en Copilot Agent Mode

Archivos adjuntados como contexto:

- `docs/03-specs/actividad-obligatoria-4/spec-dev-storage.md`
- `js/utils/storage.js`
- `docs/06-storage/storage-doc.md`

Prompt utilizado:

```text
Revisá la implementación de la capa de Storage para la Actividad Obligatoria N°4 del proyecto Planix.

Contexto:
- El archivo js/utils/storage.js debe funcionar como capa de abstracción para localStorage y sessionStorage.
- Debe implementar operaciones CRUD completas: guardar, obtener, actualizar, eliminar, listar y limpiar.
- Debe usar serialización/deserialización JSON.
- Debe manejar errores con try-catch.
- No debe manipular DOM ni contener lógica visual.
- El proyecto actualmente carga scripts tradicionales desde index.html, por eso StorageUtil se expone en window para facilitar integración con script.js y tests Jasmine.

Tareas:
1. Verificar si js/utils/storage.js cumple con la consigna.
2. Indicar si falta alguna validación o mejora.
3. Revisar si la documentación docs/06-storage/storage-doc.md es coherente con el código.
4. Sugerir ajustes mínimos sin modificar la arquitectura actual.
5. Devolver un resumen breve para documentar en spec-dev-storage.md.
```

### Output generado por Copilot Agent

Copilot Agent revisó `storage.js`, `storage-doc.md` y `spec-dev-storage.md`.

Indicó que la implementación cumple con los criterios principales del rol Storage:

- implementa operaciones CRUD mediante `guardar`, `obtener`, `actualizar`, `eliminar`, `listar` y `limpiar`;
- utiliza `JSON.stringify()` y `JSON.parse()` para serialización y deserialización;
- incluye manejo de errores con `try-catch`;
- no manipula DOM ni contiene lógica visual;
- expone `StorageUtil` en `window` para compatibilidad con scripts tradicionales y tests Jasmine.

También recomendó mejoras mínimas sin modificar la arquitectura:

- validar que la clave sea una cadena no vacía;
- normalizar el parámetro `tipo`, aceptando solo `local` o `session`;
- agregar una función `existe(clave, tipo)` para facilitar validaciones y tests;
- agregar una función `limpiarPorPrefijo(prefijo, tipo)` para eliminar solo claves del proyecto y evitar el uso destructivo de `clear()`;
- documentar que `guardar()` puede fallar ante valores no serializables en JSON.

### Fragmento de código revisado y ajustado

```js
const StorageUtil = {
  guardar,
  obtener,
  actualizar,
  eliminar,
  existe,
  listar,
  limpiar,
  limpiarPorPrefijo
};

if (typeof window !== "undefined") {
  window.StorageUtil = StorageUtil;
}
```

### Ajustes manuales realizados

A partir de la revisión de Copilot Agent se aplicaron los siguientes ajustes manuales en `js/utils/storage.js`:

- se agregó `validarClave(clave)` para evitar operaciones con claves vacías, indefinidas o inválidas;
- se agregó `normalizarTipo(tipo)` para aceptar únicamente `local` o `session`;
- se ajustó `obtenerStorage(tipo)` para devolver `null` si el tipo de storage no es válido;
- se agregó `existe(clave, tipo)` para verificar la existencia de claves;
- se agregó `limpiarPorPrefijo(prefijo, tipo)` para eliminar únicamente claves asociadas al prefijo del proyecto;
- se mantuvo `limpiar(tipo)` como operación general, documentando que debe usarse con precaución;
- se mantuvo la exposición global `window.StorageUtil` para no modificar todavía `index.html` a `type="module"`.

### Decisiones finales sobre la estrategia de Storage

- `localStorage` se reserva para datos persistentes del proyecto, como proyectos, tareas y preferencias.
- `sessionStorage` se reserva para datos temporales, como filtros, vista activa o estado de navegación.
- Las claves del proyecto usan el prefijo `planix:`.
- El módulo no depende del DOM ni de la interfaz.
- La capa de Storage queda preparada para integrarse con futuras clases del dominio mediante objetos serializables.
- La integración final con clases POO se realizará cuando existan los modelos en `js/models/`.

### Coordinación con Desarrollador JS POO

La capa Storage queda preparada para persistir objetos planos generados por futuras clases del dominio. Cuando se implementen clases como `Proyecto` o `Tarea`, se podrán guardar objetos mediante `toJSON()` y reconstruir instancias mediante métodos estáticos como `fromJSON()`.

### Checklist de cierre

- [x] El archivo `spec-dev-storage.md` fue creado y commiteado antes de `js/utils/storage.js`.
- [x] Existe el archivo `js/utils/storage.js`.
- [x] Se implementan funciones CRUD completas.
- [x] Todas las operaciones tienen manejo de errores con `try-catch`.
- [x] Se implementa serialización y deserialización automática con JSON.
- [x] Se documenta la estrategia en `docs/06-storage/storage-doc.md`.
- [x] El código no manipula DOM ni contiene lógica visual.
- [x] El módulo queda preparado para ser probado desde Jasmine.
- [x] Se aplicaron mejoras mínimas sugeridas por Copilot Agent.
- [x] Se incorporaron `existe()` y `limpiarPorPrefijo()`.