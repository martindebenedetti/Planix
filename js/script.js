/**
 * Controlador Principal - Planix
 * Responsable exclusivamente de manejar eventos, manipular el DOM
 * e invocar métodos de la lógica de negocio y persistencia.
 */

// ========================================
// 1. Instancia global del gestor
// ========================================
const gestor = new GestorProyectos();

// ========================================
// 2. Inicialización
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  cargarDatosDesdeStorage();
  configurarEventListeners();
  actualizarUI();
});

function configurarEventListeners() {
  // Flujo 1: Crear Proyecto
  const formCrearProyecto = document.getElementById("form-crear-proyecto");
  if (formCrearProyecto) {
    formCrearProyecto.addEventListener("submit", manejarCrearProyecto);
  }

  // Flujo 2: Agregar Tarea
  const formNuevaTarea = document.getElementById("form-nueva-tarea");
  if (formNuevaTarea) {
    formNuevaTarea.addEventListener("submit", manejarAgregarTarea);
  }

  // Flujo 3: Calcular Avance (cambio de proyecto seleccionado)
  const selectProyecto = document.getElementById("select-proyecto");
  if (selectProyecto) {
    selectProyecto.addEventListener("change", manejarCalcularAvance);
  }

  // Flujo 4: Filtrar Tareas
  const filtroTareas = document.getElementById("filtro-tareas");
  if (filtroTareas) {
    filtroTareas.addEventListener("change", manejarFiltrarTareas);
  }

  // Validación visual en tiempo real — Formulario Proyecto
  if (formCrearProyecto) {
    formCrearProyecto.querySelectorAll("input").forEach(input => {
      input.addEventListener("input", validarFormularioProyecto);
    });
  }

  // Validación visual en tiempo real — Formulario Tarea
  if (formNuevaTarea) {
    formNuevaTarea.querySelectorAll("input, select").forEach(input => {
      input.addEventListener("input", validarFormularioTarea);
      input.addEventListener("change", validarFormularioTarea);
    });
  }

  // Inicializar estado de los botones
  validarFormularioProyecto();
  validarFormularioTarea();
}

function actualizarUI() {
  actualizarListaProyectos();
}

// ========================================
// 3. Manejadores de Eventos (Flujos)
// ========================================

/** Flujo 1: crea un nuevo proyecto y lo agrega al gestor. */
function manejarCrearProyecto(event) {
  event.preventDefault();

  const nombre = document.getElementById("p-nombre").value;
  const fechaInicio = document.getElementById("p-inicio").value;
  const fechaFin = document.getElementById("p-fin").value;

  try {
    const nuevoProyecto = new Proyecto(nombre, fechaInicio, fechaFin);
    gestor.agregar(nuevoProyecto);

    guardarEnStorage();

    mostrarExito("contenedor-alertas", `Proyecto "${nombre}" creado correctamente.`);
    limpiarFormulario("form-crear-proyecto");
    actualizarListaProyectos();

    document.getElementById("select-proyecto").value = nombre;
    document.getElementById("select-proyecto").dispatchEvent(new Event("change"));
  } catch (error) {
    mostrarError("contenedor-alertas", error.message);
  }
}

/** Flujo 2: agrega una tarea al proyecto actualmente seleccionado. */
function manejarAgregarTarea(event) {
  event.preventDefault();

  const nombreProyecto = document.getElementById("select-proyecto").value;
  const nombreTarea = document.getElementById("t-nombre").value;
  const responsable = document.getElementById("t-responsable").value;
  const estado = document.getElementById("t-estado").value;

  try {
    const proyecto = gestor.buscar(nombreProyecto);
    if (!proyecto) throw new Error("Proyecto no encontrado.");

    const nuevaTarea = new Tarea(nombreTarea, responsable, estado);
    proyecto.agregarTarea(nuevaTarea);

    guardarEnStorage();

    mostrarExito("contenedor-alertas", "Tarea agregada exitosamente.");

    document.getElementById("t-nombre").value = "";
    document.getElementById("t-responsable").value = "";
    document.getElementById("t-nombre").classList.remove("is-valid");
    document.getElementById("t-responsable").classList.remove("is-valid");
    validarFormularioTarea();

    actualizarVistaProyecto(proyecto);
  } catch (error) {
    mostrarError("contenedor-alertas", error.message);
  }
}

/** Flujo 3: muestra el avance y las tareas del proyecto seleccionado. */
function manejarCalcularAvance(event) {
  const nombreProyecto = event.target.value;
  validarFormularioTarea();

  if (!nombreProyecto) {
    document.getElementById("cuerpo-tabla").innerHTML =
      `<tr><td colspan="3" class="text-center text-muted">Aún no hay tareas para mostrar.</td></tr>`;
    actualizarAvanceDOM(0, "Seleccione un proyecto para ver su estado.");
    return;
  }

  const proyecto = gestor.buscar(nombreProyecto);
  if (proyecto) {
    actualizarVistaProyecto(proyecto);
  }
}

/** Flujo 4: filtra las tareas del proyecto según el criterio seleccionado. */
function manejarFiltrarTareas(event) {
  const criterio = event.target.value;
  const nombreProyecto = document.getElementById("select-proyecto").value;

  StorageUtil.guardar("planix:sesion:filtros", criterio, "session");

  if (!nombreProyecto) return;

  const proyecto = gestor.buscar(nombreProyecto);
  if (proyecto) {
    try {
      const tareasFiltradas = gestor.filtrarTareas(proyecto, criterio);
      renderizarTablaGantt(tareasFiltradas);
    } catch (error) {
      mostrarError("contenedor-alertas", error.message);
    }
  }
}

// ========================================
// 4. Validación Visual en Tiempo Real
// ========================================

function marcarCampo(input, esValido) {
  if (!input) return;

  if (input.value.trim() === "" && !esValido) {
    input.classList.remove("is-valid", "is-invalid");
    input.removeAttribute("aria-invalid");
    return;
  }

  if (esValido) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    input.setAttribute("aria-invalid", "false");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    input.setAttribute("aria-invalid", "true");
  }
}

function validarFormularioProyecto() {
  const pNombre = document.getElementById("p-nombre");
  const pInicio = document.getElementById("p-inicio");
  const pFin = document.getElementById("p-fin");
  const btnSubmit = document.querySelector("#form-crear-proyecto button[type='submit']");

  if (!pNombre || !pInicio || !pFin) {
    return;
  }

  const nombreValido = pNombre.value.trim().length > 0;
  const inicioValido = /^\d{2}\/\d{2}\/\d{4}$/.test(pInicio.value);
  const finValido = /^\d{2}\/\d{2}\/\d{4}$/.test(pFin.value);

  marcarCampo(pNombre, nombreValido);
  marcarCampo(pInicio, inicioValido);
  marcarCampo(pFin, finValido);

  if (!btnSubmit) {
    return;
  }

  if (nombreValido && inicioValido && finValido) {
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", "true");
  }
}

function validarFormularioTarea() {
  const selectP = document.getElementById("select-proyecto");
  const tNombre = document.getElementById("t-nombre");
  const tResp = document.getElementById("t-responsable");
  const btnSubmit = document.querySelector("#form-nueva-tarea button[type='submit']");

  if (!selectP || !tNombre || !tResp) {
    return;
  }

  const proyectoValido = selectP.value.trim().length > 0;
  const nombreValido = tNombre.value.trim().length > 0;
  const respValido = tResp.value.trim().length > 0;

  marcarCampo(selectP, proyectoValido);
  marcarCampo(tNombre, nombreValido);
  marcarCampo(tResp, respValido);

  if (!btnSubmit) {
    return;
  }

  if (proyectoValido && nombreValido && respValido) {
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", "true");
  }
}

// ========================================
// 5. Manipulación del DOM
// ========================================

/**
 * Actualiza el selector de proyectos con la lista actual del gestor.
 */
function actualizarListaProyectos() {
  const select = document.getElementById("select-proyecto");
  const seleccionActual = select.value;

  select.innerHTML = '<option value="">Seleccione...</option>';

  gestor.listar().forEach(p => {
    const option = document.createElement("option");
    option.value = p.nombre;
    option.textContent = p.nombre;
    select.appendChild(option);
  });

  if (seleccionActual && gestor.buscar(seleccionActual)) {
    select.value = seleccionActual;
  }
}

/**
 * Renderiza las tareas del proyecto activo aplicando el filtro vigente.
 * @param {Proyecto} proyecto - Proyecto cuyas tareas se mostrarán.
 */
function actualizarVistaProyecto(proyecto) {
  const criterio = document.getElementById("filtro-tareas").value;
  const tareasFiltradas = gestor.filtrarTareas(proyecto, criterio);

  renderizarTablaGantt(tareasFiltradas);

  const porcentaje = proyecto.calcularAvance();
  const estadoTexto = proyecto.determinarEstado();
  actualizarAvanceDOM(porcentaje, `Estado: ${estadoTexto}`);
}

/**
 * Renderiza el array de tareas en la tabla Gantt del DOM.
 * @param {Tarea[]} tareas - Tareas a mostrar.
 */
function renderizarTablaGantt(tareas) {
  const tbody = document.getElementById("cuerpo-tabla");
  tbody.innerHTML = "";

  if (tareas.length === 0) {
    tbody.innerHTML = `<tr><td colspan="13" class="text-center text-muted py-4">No se encontraron tareas.</td></tr>`;
    return;
  }

  tareas.forEach(tarea => {
    const tr = document.createElement("tr");

    let badgeClass = "bg-secondary";
    if (tarea.estado === "pendiente") badgeClass = "bg-warning text-dark";
    if (tarea.estado === "en curso") badgeClass = "bg-primary";
    if (tarea.estado === "completada") badgeClass = "bg-success";

    const tdNombre = document.createElement("td");
    tdNombre.className = "fw-bold";
    tdNombre.textContent = tarea.nombre;

    const tdResponsable = document.createElement("td");
    tdResponsable.textContent = tarea.responsable;

    const tdEstado = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = `badge ${badgeClass}`;
    badge.textContent = tarea.estado.toUpperCase();
    tdEstado.appendChild(badge);

    const tdGantt = document.createElement("td");
    tdGantt.setAttribute("colspan", "10");
    tdGantt.className = "text-muted text-center small align-middle";
    tdGantt.textContent = "Renderizado de Gantt pendiente (Módulo Canvas/CSS)";

    tr.appendChild(tdNombre);
    tr.appendChild(tdResponsable);
    tr.appendChild(tdEstado);
    tr.appendChild(tdGantt);
    tbody.appendChild(tr);
  });
}

/**
 * Actualiza la barra de avance y el texto de estado en el DOM.
 * @param {number} porcentaje - Valor entre 0 y 100.
 * @param {string} textoEstado - Texto descriptivo del estado.
 */
function actualizarAvanceDOM(porcentaje, textoEstado) {
  const barra = document.getElementById("barra-avance");
  const textoElemento = document.getElementById("texto-estado-proyecto");
  const pRedondeado = Math.round(porcentaje);

  if (barra) {
    barra.style.width = `${pRedondeado}%`;
    barra.textContent = `${pRedondeado}%`;
    barra.setAttribute("aria-valuenow", pRedondeado);
    barra.className = "progress-bar progress-bar-striped progress-bar-animated";
    if (pRedondeado === 100) {
      barra.classList.add("bg-success");
    } else if (pRedondeado > 0) {
      barra.classList.add("bg-primary");
    } else {
      barra.classList.add("bg-info");
    }
  }

  if (textoElemento) {
    textoElemento.textContent = textoEstado;
  }
}

/**
 * Muestra un mensaje de éxito en el contenedor indicado, con auto-cierre a los 4 segundos.
 * @param {string} contenedorId - ID del elemento contenedor de alertas.
 * @param {string} mensaje - Texto a mostrar.
 */
function mostrarExito(contenedorId, mensaje) {
  mostrarMensaje(contenedorId, mensaje, "success");
}

/**
 * Muestra un mensaje de error en el contenedor indicado, con auto-cierre a los 4 segundos.
 * @param {string} contenedorId - ID del elemento contenedor de alertas.
 * @param {string} mensaje - Texto a mostrar.
 */
function mostrarError(contenedorId, mensaje) {
  mostrarMensaje(contenedorId, mensaje, "danger");
}

/**
 * Resetea un formulario y limpia sus clases de validación visual.
 * @param {string} formId - ID del formulario a limpiar.
 */
function limpiarFormulario(formId) {
  const form = document.getElementById(formId);
  if (form) form.reset();
  const inputs = document.querySelectorAll(`#${formId} input, #${formId} select`);
  inputs.forEach(input => {
    input.classList.remove("is-valid", "is-invalid");
    input.removeAttribute("aria-invalid");
  });
  const btnSubmit = document.querySelector(`#${formId} button[type='submit']`);
  if (btnSubmit) btnSubmit.setAttribute("disabled", "true");
}

function mostrarMensaje(contenedorId, mensaje, tipoColor) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;
  const alerta = document.createElement("div");
  alerta.className = `alert alert-${tipoColor} alert-dismissible fade show`;

  const prefijo = document.createElement("strong");
  prefijo.textContent = tipoColor === "danger" ? "Error:" : "Éxito:";
  alerta.appendChild(prefijo);

  const texto = document.createTextNode(" " + mensaje);
  alerta.appendChild(texto);

  const botonCerrar = document.createElement("button");
  botonCerrar.type = "button";
  botonCerrar.className = "btn-close";
  botonCerrar.setAttribute("data-bs-dismiss", "alert");
  botonCerrar.setAttribute("aria-label", "Close");
  alerta.appendChild(botonCerrar);

  contenedor.appendChild(alerta);

  setTimeout(() => {
    if (contenedor.contains(alerta)) alerta.remove();
  }, 4000);
}

// ========================================
// 6. Persistencia
// ========================================

/**
 * Carga los proyectos desde localStorage y restaura el filtro de sesión.
 */
function cargarDatosDesdeStorage() {
  const datosGuardados = StorageUtil.obtener("planix:proyectos", "local");

  if (datosGuardados && Array.isArray(datosGuardados)) {
    datosGuardados.forEach(jsonObj => {
      try {
        const proyectoReconstruido = Proyecto.fromJSON(jsonObj);
        const existente = gestor.buscar(proyectoReconstruido.nombre);
        if (!existente) {
          gestor.agregar(proyectoReconstruido);
        } else {
          console.warn(`Proyecto omitido al restaurar desde storage: ${proyectoReconstruido.nombre}`);
        }
      } catch (error) {
        console.error("Error al reconstruir proyecto desde storage:", error);
      }
    });
  }

  const filtroGuardado = StorageUtil.obtener("planix:sesion:filtros", "session");
  const filtroElemento = document.getElementById("filtro-tareas");
  if (filtroGuardado && filtroElemento) {
    filtroElemento.value = filtroGuardado;
  }
}

/**
 * Persiste el estado actual de todos los proyectos en localStorage.
 */
function guardarEnStorage() {
  const dataSerializada = gestor.listar().map(p => p.toJSON());
  StorageUtil.guardar("planix:proyectos", dataSerializada, "local");
}
