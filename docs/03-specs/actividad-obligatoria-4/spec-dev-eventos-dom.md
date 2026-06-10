# Spec: Desarrollador JS Eventos + DOM

**Actividad Obligatoria N°4 | Programación Web I | UCES**  
**Estudiante:** Gian Franco Pasquali  
**Rama:** `feature/dev-eventos-dom`  
**Proyecto:** Planificador de Tareas - Diagrama de Gantt (Planix)

---

## 📋 ANTES — Plan de Integración DOM y Eventos

> ⚠️ Commiteado ANTES de abrir Copilot o modificar `js/script.js`.

### Descripción de eventos y controles por flujo

### Flujo 1 — Crear Proyecto

**Controles**

- Contenedor o formulario de proyecto a incorporar en `index.html`, ya que actualmente no existe un formulario específico para crear proyectos.
- Campo nombre del proyecto.
- Campo fecha inicio.
- Campo fecha fin.
- Botón crear proyecto.
- Selector/listado de proyectos para sincronizar los demás flujos.

**Eventos**

- `submit`
- `input`

**Manipulación del DOM**

- Mostrar errores de validación en tiempo real usando elementos de feedback del formulario.
- Mostrar mensaje de éxito sin `alert()`.
- Crear una instancia de `Proyecto` y agregarla mediante `GestorProyectos.prototype.agregar()`.
- Actualizar selectores/listados de proyectos desde `gestor.listar()`.
- Persistir el estado con `StorageUtil.guardar("planix:proyectos", ...)` cuando `StorageUtil` esté cargado.
- Aplicar clases CSS/Bootstrap de validación (`is-invalid`, `is-valid`) o clases propias equivalentes.

---

### Flujo 2 — Agregar Tarea

**Controles**

- Selector de proyecto a crear o reutilizar cuando exista el flujo de proyectos.
- Formulario existente `#form-nueva-tarea`.
- Campo `#nombre-tarea`.
- Campo `#responsable`.
- Campos existentes `#fecha-inicio`, `#fecha-fin`, `#predecesora` y `#avance` para la fila visual de Gantt.
- Selector de estado a incorporar si se desea mapear directamente a `Tarea.ESTADOS_VALIDOS`.
- Botón submit del formulario.

**Eventos**

- `submit`
- `input`
- `change`

**Manipulación del DOM**

- Crear una instancia de `Tarea(nombre, responsable, estado)` usando los campos soportados por el modelo.
- Agregar la tarea mediante `proyecto.agregarTarea(tarea)`.
- Actualizar el `tbody#cuerpo-tabla` de la tabla Gantt.
- Mostrar mensajes de error en el DOM capturando los `Error` lanzados por `Tarea` y `Proyecto`.
- Actualizar información del proyecto seleccionado.
- Aplicar feedback visual sobre campos inválidos.
- Persistir cambios con `StorageUtil.actualizar("planix:proyectos", ...)`.

---

### Flujo 3 — Calcular Avance

**Controles**

- Selector de proyecto.
- Botón calcular avance o actualización automática al cambiar proyecto/tareas.
- Elementos existentes del header para progreso general (`.progress`, `.progress-bar`, texto `65%`) a reemplazar por valores dinámicos.

**Eventos**

- `click`
- `change`

**Manipulación del DOM**

- Calcular avance con `Proyecto.prototype.calcularAvance()`.
- Determinar estado con `Proyecto.prototype.determinarEstado()`.
- Mostrar porcentaje de avance en texto y barra de progreso.
- Actualizar atributos ARIA de `role="progressbar"`.
- Mostrar resultados dinámicamente sin `alert()`.

---

### Flujo 4 — Filtrar Tareas

**Controles**

- Selector de proyecto.
- Selector de filtro con valores compatibles con `GestorProyectos.prototype.filtrarTareas()`:
  - `pendiente`
  - `en curso`
  - `completada`
  - `todas`
- Botón filtrar o filtrado automático con evento `change`.
- Botón existente "Filtros" de la toolbar como disparador del panel/controles de filtro si se reutiliza.

**Eventos**

- `click`
- `change`

**Manipulación del DOM**

- Obtener tareas filtradas mediante `gestor.filtrarTareas(proyecto, criterio)`.
- Renderizar el resultado en `tbody#cuerpo-tabla`.
- Mostrar cantidad de resultados obtenidos.
- Ocultar o no renderizar tareas que no coincidan con el criterio.
- Guardar filtro activo en `sessionStorage` mediante `StorageUtil.guardar("planix:sesion:filtros", ...)`.

---

### Patrón homogéneo para manejo de eventos

Se utilizará el siguiente patrón en todos los flujos de la aplicación:

1. Capturar evento mediante `addEventListener()`
2. Obtener información desde el DOM
3. Validar entradas del usuario
4. Invocar métodos de las clases del dominio
5. Actualizar la interfaz mediante manipulación del DOM
6. Persistir estado con `StorageUtil` cuando corresponda
7. Mostrar feedback visual al usuario

No se utilizarán atributos HTML como:

```html
onclick=""
onchange=""
onsubmit=""
```

Toda la gestión de eventos estará centralizada en `js/script.js`, reemplazando progresivamente las funciones legacy basadas en `prompt()` y `alert()`.

---

### Decisiones de arquitectura

- `js/script.js` funcionará como controlador principal de DOM y eventos.
- Las funciones legacy expuestas en `window.Planix` deberán reemplazarse o aislarse para que la interfaz final no dependa de `prompt()` ni `alert()`.
- Toda la lógica de negocio permanecerá encapsulada en las funciones constructoras de `js/models/`.
- El controlador no realizará cálculos ni validaciones complejas.
- El controlador se encargará únicamente de:
  - Capturar eventos.
  - Obtener datos desde la interfaz.
  - Invocar métodos del dominio.
  - Actualizar el DOM.
  - Coordinar persistencia con `StorageUtil`.
- Se reutilizarán funciones comunes para:
  - Mostrar errores.
  - Mostrar mensajes de éxito.
  - Limpiar formularios.
  - Actualizar listados.
  - Habilitar y deshabilitar controles.
- Se eliminarán completamente todas las llamadas a `prompt()` y `alert()`.
- `index.html` deberá cargar `js/utils/storage.js` antes de `js/script.js` para que `window.StorageUtil` esté disponible.

---

### Funciones de DOM reutilizables identificadas

- `inicializarAplicacion()`
- `inicializarEventos()`
- `cargarEstadoInicial()`
- `guardarEstado()`
- `mostrarMensaje(mensaje, tipo)`
- `mostrarError(mensaje)`
- `mostrarExito(mensaje)`
- `actualizarSelectorProyectos()`
- `renderizarTablaGantt(tareas)`
- `crearFilaTarea(tarea, indice)`
- `mostrarResultadoAvance(proyecto)`
- `limpiarFormulario(formulario)`
- `setCampoValido(campo, esValido, mensaje)`
- `habilitarControles()`
- `deshabilitarControles()`
- `mostrarSeccion()`
- `ocultarSeccion()`

---

### Integración con otros roles

#### Desarrollador JS POO

Consumir:

- `Proyecto`
- `Tarea`
- `GestorProyectos`

Toda la lógica de negocio será ejecutada mediante métodos de estas funciones constructoras globales:

- `new GestorProyectos()`
- `new Proyecto(nombre, fechaInicio, fechaFin)`
- `new Tarea(nombre, responsable, estado)`
- `gestor.agregar(proyecto)`
- `gestor.buscar(nombre)`
- `gestor.listar()`
- `gestor.filtrarTareas(proyecto, criterio)`
- `proyecto.agregarTarea(tarea)`
- `proyecto.calcularAvance()`
- `proyecto.determinarEstado()`

#### Desarrollador JS Storage

Consumir:

- `StorageUtil.guardar(clave, valor, tipo)`
- `StorageUtil.obtener(clave, tipo)`
- `StorageUtil.actualizar(clave, valor, tipo)`
- `StorageUtil.eliminar(clave, tipo)`
- `StorageUtil.existe(clave, tipo)`
- `StorageUtil.listar(prefijo, tipo)`
- `StorageUtil.limpiarPorPrefijo(prefijo, tipo)`
- Carga automática de datos al iniciar la aplicación.
- Reconstrucción de instancias con `Proyecto.fromJSON()` y `Tarea.fromJSON()`.

Claves previstas:

- `planix:proyectos` en `localStorage`
- `planix:sesion:filtros` en `sessionStorage`
- `planix:sesion:vista-activa` en `sessionStorage`

#### Tester QA

Facilitar testing mediante:

- Separación clara entre lógica de negocio y UI.
- Eventos fácilmente simulables.
- Eliminación de dependencias de `prompt()` y `alert()`.
- Funciones de render y handlers invocables desde tests sin depender de atributos inline.

---

### Criterios de aceptación — Checklist

- [ ] Todos los `prompt()` eliminados.
- [ ] Todos los `alert()` eliminados.
- [ ] Event listeners implementados para todos los controles relevantes.
- [ ] Uso consistente de `addEventListener()`.
- [ ] Validación en tiempo real implementada.
- [ ] Feedback visual mediante clases CSS o Bootstrap.
- [ ] Creación dinámica de elementos DOM.
- [ ] Actualización dinámica de elementos DOM.
- [ ] Eliminación dinámica de elementos DOM.
- [ ] Mostrar y ocultar secciones según contexto.
- [ ] Resultados de los cuatro flujos visibles en la interfaz.
- [ ] `js/script.js` contiene manejo de eventos, DOM y coordinación con modelos/storage.
- [ ] Integración con `Tarea`, `Proyecto` y `GestorProyectos` completada.
- [ ] Integración con `StorageUtil` completada.
- [ ] `index.html` carga `js/utils/storage.js` antes de `js/script.js`.
- [ ] Código documentado con comentarios y JSDoc.

---

## 🤖 DURANTE — Uso de Copilot Agent Mode

> Completar después de utilizar Copilot.

### Archivos adjuntados como contexto

- `js/models/Tarea.js`
- `js/models/Proyecto.js`
- `js/models/GestorProyectos.js`
- `js/utils/storage.js`
- `js/script.js`
- `index.html`
- `spec-dev-eventos-dom.md`

### Prompt exacto utilizado

```text
[PENDIENTE DE COMPLETAR]
```

### Output generado por Copilot

```javascript
// Fragmento generado por Copilot
// Pendiente de completar
```

### Ajustes manuales realizados

- Pendiente de completar.

---

## ✅ AL CERRAR — Evidencia de Trabajo

### Decisiones finales de diseño

#### ¿Cómo se separó el controlador de la lógica de negocio?

El archivo `js/script.js` actúa como controlador de eventos y DOM, delegando la lógica de negocio a las funciones constructoras del dominio ubicadas en `js/models/`: `Tarea`, `Proyecto` y `GestorProyectos`.

#### ¿Qué ventajas aporta esta estructura?

- Mayor mantenibilidad.
- Menor acoplamiento.
- Mejor testabilidad.
- Reutilización de la lógica de negocio.
- Persistencia centralizada mediante `StorageUtil`.

#### ¿Cómo facilita la integración con las clases del dominio?

Cada evento captura datos desde la interfaz e invoca directamente los métodos correspondientes de `Proyecto`, `Tarea` o `GestorProyectos`, evitando duplicar lógica en la capa de presentación.

#### ¿Cómo facilita el trabajo del Tester QA?

La lógica de negocio puede testearse independientemente del DOM y los eventos pueden ser simulados mediante herramientas de testing automatizado.

---

### Checklist de cierre

- [ ] spec-dev-eventos-dom.md commiteado antes de modificar js/script.js
- [ ] js/script.js refactorizado como controlador
- [ ] Prompt utilizado documentado
- [ ] Fragmento de código generado documentado
- [ ] Ajustes manuales documentados
- [ ] prompt() eliminados
- [ ] alert() eliminados
- [ ] Eventos implementados
- [ ] DOM actualizado dinámicamente
- [ ] index.html actualizado si fue necesario
- [ ] `js/utils/storage.js` cargado en `index.html` antes de `js/script.js`
- [ ] Persistencia integrada con `StorageUtil`
- [ ] PR creada hacia develop
- [ ] Reviewer asignado
- [ ] changelog.md actualizado

> **Nota de trazabilidad:** El objetivo principal de esta actividad es transformar la aplicación basada en `prompt()` y `alert()` en una aplicación web interactiva basada en eventos y manipulación dinámica del DOM, manteniendo toda la lógica de negocio encapsulada en las clases del dominio y la persistencia centralizada en `StorageUtil`.
