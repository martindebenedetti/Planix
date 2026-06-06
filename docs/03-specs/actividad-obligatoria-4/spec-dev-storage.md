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

Pendiente de completar luego de implementar y revisar la funcionalidad.

### Prompt utilizado en Copilot Agent Mode

```text
Pendiente de completar.
```

### Archivos adjuntados como contexto

- Pendiente de completar.

### Fragmento de código generado por Copilot

```js
// Pendiente de completar.
```

### Ajustes manuales realizados

Pendiente de completar.

### Decisiones finales de Storage

Pendiente de completar.

### Coordinación con Desarrollador JS POO

Pendiente de completar.

### Resultado final

- [ ] `storage.js` implementado.
- [ ] `storage-doc.md` documentado.
- [ ] Funciones CRUD probadas.
- [ ] Integración prevista con modelos POO.
