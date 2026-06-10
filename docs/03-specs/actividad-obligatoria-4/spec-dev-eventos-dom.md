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

- [x] Todos los `prompt()` eliminados.
- [x] Todos los `alert()` eliminados.
- [x] Event listeners implementados para todos los controles relevantes.
- [x] Uso consistente de `addEventListener()`.
- [x] Validación en tiempo real implementada.
- [x] Feedback visual mediante clases CSS o Bootstrap.
- [x] Creación dinámica de elementos DOM.
- [x] Actualización dinámica de elementos DOM.
- [x] Eliminación dinámica de elementos DOM.
- [x] Mostrar y ocultar secciones según contexto.
- [x] Resultados de los cuatro flujos visibles en la interfaz.
- [x] `js/script.js` contiene manejo de eventos, DOM y coordinación con modelos/storage.
- [x] Integración con `Tarea`, `Proyecto` y `GestorProyectos` completada.
- [x] Integración con `StorageUtil` completada.
- [x] `index.html` carga `js/utils/storage.js` antes de `js/script.js`.
- [x] Código documentado con comentarios y JSDoc.

---

## 🤖 DURANTE — Uso de Copilot Agent Mode

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
Actúa como experto en JavaScript moderno. 
Necesito refactorizar `js/script.js` para transformarlo en un controlador de UI puro, eliminando completamente `prompt()` y `alert()`, así como toda la lógica de validación que ya está en los archivos de `/models`.
El controlador debe escuchar los eventos del DOM (submit en formularios, change en selects), recolectar datos de la interfaz, instanciar los modelos `Tarea` y `Proyecto`, guardarlos a través de `StorageUtil`, y actualizar el HTML dinámicamente mediante funciones modulares (feedback de éxito/error, renderizado de tablas y barras de progreso).
### Prompt exacto utilizado

### Output generado por Copilot

```javascript
// Fragmento generado por Copilot (Manejador de creación de proyecto)
function manejarCrearProyecto(event) {
  event.preventDefault(); 
  
  const nombre = document.getElementById("p-nombre").value;
  const fechaInicio = document.getElementById("p-inicio").value;
  const fechaFin = document.getElementById("p-fin").value;

  try {
    const nuevoProyecto = new Proyecto(nombre, fechaInicio, fechaFin);
    gestor.agregar(nuevoProyecto);
    guardarEstado();
    
    mostrarExito(`Proyecto "${nombre}" creado correctamente.`);
    event.target.reset();
    actualizarSelectorProyectos();
  } catch (error) {
    mostrarError(error.message);
  }
}
```

### Ajustes manuales realizados

- Se vinculó el ID de los formularios en `index.html` para que coincidan con los `getElementById()` en los selectores del script.
- Se implementaron elementos de UI de Bootstrap 5 en las funciones `mostrarError` y `mostrarExito` para reemplazar los `alert()` bloqueantes.
- Se incorporó la lógica de parseo en `cargarEstadoInicial()` mapeando cada JSON con el factory method `Proyecto.fromJSON()` provisto por el rol de POO, encapsulándolo dentro de un `try/catch` para prevenir que un JSON malformado frene la renderización de la app.

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

- [x] spec-dev-eventos-dom.md commiteado antes de modificar js/script.js
- [x] js/script.js refactorizado como controlador
- [x] Prompt utilizado documentado
- [x] Fragmento de código generado documentado
- [x] Ajustes manuales documentados
- [x] prompt() eliminados
- [x] alert() eliminados
- [x] Eventos implementados
- [x] DOM actualizado dinámicamente
- [x] index.html actualizado si fue necesario
- [x] `js/utils/storage.js` cargado en `index.html` antes de `js/script.js`
- [x] Persistencia integrada con `StorageUtil`
- [x] PR creada hacia develop
- [x] Reviewer asignado
- [x] changelog.md actualizado

> **Nota de trazabilidad:** El objetivo principal de esta actividad es transformar la aplicación basada en `prompt()` y `alert()` en una aplicación web interactiva basada en eventos y manipulación dinámica del DOM, manteniendo toda la lógica de negocio encapsulada en las clases del dominio y la persistencia centralizada en `StorageUtil`.
