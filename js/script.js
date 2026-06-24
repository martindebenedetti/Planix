/**
 * Controlador Principal - Planix
 * Responsable exclusivamente de manejar eventos, manipular el DOM
 * e invocar métodos de la lógica de negocio y persistencia.
 */

// ========================================
// 1. Instancia global del gestor
// ========================================
function verificarDependencias() {
  const faltantes = [];

  if (typeof StorageUtil === "undefined") faltantes.push("StorageUtil");
  if (typeof Tarea === "undefined") faltantes.push("Tarea");
  if (typeof Proyecto === "undefined") faltantes.push("Proyecto");
  if (typeof GestorProyectos === "undefined") faltantes.push("GestorProyectos");

  if (faltantes.length > 0) {
    const mensaje = `No se puede iniciar Planix. Dependencias faltantes: ${faltantes.join(", ")}.`;
    console.error(mensaje);
    throw new Error(mensaje);
  }
}

verificarDependencias();

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
    // Validación visual en tiempo real
    formCrearProyecto.querySelectorAll("input").forEach(input => {
      input.addEventListener("input", validarFormularioProyecto);
    });
  }

  // Flujo 2: Agregar Tarea
  const formNuevaTarea = document.getElementById("form-nueva-tarea");
  if (formNuevaTarea) {
    formNuevaTarea.addEventListener("submit", manejarAgregarTarea);
    // Validación visual en tiempo real
    formNuevaTarea.querySelectorAll("input, select").forEach(input => {
      input.addEventListener("input", validarFormularioTarea);
      input.addEventListener("change", validarFormularioTarea);
    });
  }

  // Flujo 3: Calcular Avance (cambio de proyecto seleccionado)
  const selectProyecto = document.getElementById("select-proyecto");
  if (selectProyecto) {
    selectProyecto.addEventListener("change", manejarCambioProyecto);
  }

  // Flujo 4: Filtrar Tareas
  const filtroTareas = document.getElementById("filtro-tareas");
  if (filtroTareas) {
    filtroTareas.addEventListener("change", manejarFiltrarTareas);
  }

  // RC11: Delegación de Eventos en la tabla Gantt
  const cuerpoTabla = document.getElementById("cuerpo-tabla");
  if (cuerpoTabla) {
    cuerpoTabla.addEventListener("click", manejarAccionesTabla);
  }

  // Inicializar estado de los botones
  validarFormularioProyecto();
  validarFormularioTarea();
}

/** * RC13: Nombre más idiomático (reemplaza a advertirElementosFaltantes) 
 * y validación de nulidad para evitar quiebres.
 */
function validarDependenciasDOM(contexto, elementos) {
  const faltantes = elementos
    .filter(item => !item.elemento)
    .map(item => item.id);

  if (faltantes.length === 0) {
    return false;
  }

  console.warn(`${contexto}: faltan elementos requeridos del DOM: ${faltantes.join(", ")}.`);
  return true;
}

function actualizarUI() {
  actualizarListaProyectos();
  gestionarVisibilidadSecciones(); // RC12: Mostrar/ocultar según contexto
}

// ========================================
// 3. Manejadores de Eventos (Flujos)
// ========================================

/** Flujo 1: crea un nuevo proyecto y lo agrega al gestor. */
function manejarCrearProyecto(event) {
  event.preventDefault();

  const inputNombre = document.getElementById("p-nombre");
  const inputInicio = document.getElementById("p-inicio");
  const inputFin = document.getElementById("p-fin");

  if (!inputNombre || !inputInicio || !inputFin) {
    mostrarError("contenedor-alertas", "Formulario incompleto: faltan campos en el DOM.");
    return;
  }

  const nombre = inputNombre.value;

  try {
    const nuevoProyecto = new Proyecto(nombre, inputInicio.value, inputFin.value);
    gestor.agregar(nuevoProyecto);

    guardarEnStorage();

    mostrarExito("contenedor-alertas", `Proyecto "${nombre}" creado correctamente.`);
    limpiarFormulario("form-crear-proyecto");
    actualizarUI();

    // RC5 y RC11: Null-check en el select y llamada directa en lugar de dispatchEvent
    const selectProyecto = document.getElementById("select-proyecto");
    if (selectProyecto) {
      selectProyecto.value = nombre;
      // Invocamos la lógica directamente sin simular el evento 'change'
      actualizarVistaProyecto(nuevoProyecto);
    }
  } catch (error) {
    mostrarError("contenedor-alertas", error.message);
  }
}

/** Flujo 2: agrega una tarea al proyecto actualmente seleccionado. */
function manejarAgregarTarea(event) {
  event.preventDefault();

  const selectProyecto = document.getElementById("select-proyecto");
  const inputNombreT = document.getElementById("t-nombre");
  const inputResp = document.getElementById("t-responsable");
  const inputEstado = document.getElementById("t-estado");

  // RC6: Null-checks para evitar que explote si no existen en el DOM
  if (!selectProyecto || !inputNombreT || !inputResp || !inputEstado) {
    mostrarError("contenedor-alertas", "Error: Elementos del formulario no encontrados.");
    return;
  }

  const nombreProyecto = selectProyecto.value;
  if (!nombreProyecto) {
    mostrarError("contenedor-alertas", "Debe seleccionar un proyecto válido.");
    return;
  }

  try {
    const proyecto = gestor.buscar(nombreProyecto);
    if (!proyecto) throw new Error("Proyecto no encontrado en el sistema.");

    const nuevaTarea = new Tarea(inputNombreT.value, inputResp.value, inputEstado.value);
    proyecto.agregarTarea(nuevaTarea);

    guardarEnStorage();

    mostrarExito("contenedor-alertas", "Tarea agregada exitosamente.");

    inputNombreT.value = "";
    inputResp.value = "";
    inputNombreT.classList.remove("is-valid");
    inputResp.classList.remove("is-valid");
    
    validarFormularioTarea();
    actualizarVistaProyecto(proyecto);
  } catch (error) {
    mostrarError("contenedor-alertas", error.message);
  }
}

/** Flujo 3: Muestra avance y tareas al cambiar de proyecto en el select. */
function manejarCambioProyecto(event) {
  const nombreProyecto = event.target.value;
  validarFormularioTarea();

  if (!nombreProyecto) {
    const tbody = document.getElementById("cuerpo-tabla");
    if (tbody) tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted">Aún no hay tareas para mostrar.</td></tr>`;
    actualizarAvanceDOM(0, "Seleccione un proyecto para ver su estado.");
    return;
  }

  const proyecto = gestor.buscar(nombreProyecto);
  if (proyecto) actualizarVistaProyecto(proyecto);
}

/** Flujo 4: filtra las tareas del proyecto según el criterio seleccionado. */
function manejarFiltrarTareas(event) {
  const criterio = event.target.value;
  const selectProyecto = document.getElementById("select-proyecto");
  
  if (!selectProyecto) return;
  
  const nombreProyecto = selectProyecto.value;
  if (!nombreProyecto) return; // Si no hay proyecto, no hacemos nada.

  const proyecto = gestor.buscar(nombreProyecto);
  if (proyecto) {
    try {
      const tareasFiltradas = gestor.filtrarTareas(proyecto, criterio);
      renderizarTablaGantt(tareasFiltradas);
      
      // RC7: Se persiste el filtro SOLO si la validación y el filtrado fueron exitosos
      StorageUtil.guardar("planix:sesion:filtros", criterio, "session");
    } catch (error) {
      mostrarError("contenedor-alertas", error.message);
      const tbody = document.getElementById("cuerpo-tabla");
      if (tbody) tbody.innerHTML = `<tr><td colspan="4" class="text-center text-danger">Error al aplicar filtro.</td></tr>`;
    }
  }
}

/** RC11: Delegación de eventos para botones dinámicos en la tabla Gantt. */
async function manejarAccionesTabla(event) {
  const elemento = event.target;
  if (elemento.classList.contains("btn-eliminar-tarea")) {
    const nombreTarea = elemento.getAttribute("data-tarea");
    const confirmo = await Notificaciones.confirmar(
      "¿Eliminar tarea?",
      "Esta acción no se puede deshacer."
    );
    if (confirmo) {
      const selectProyecto = document.getElementById("select-proyecto");
      if (!selectProyecto || !selectProyecto.value) return;
      const proyecto = gestor.buscar(selectProyecto.value);
      if (!proyecto) return;
      proyecto.tareas = proyecto.tareas.filter(function(t) { return t.nombre !== nombreTarea; });
      guardarEnStorage();
      actualizarVistaProyecto(proyecto);
      Notificaciones.exito("Tarea eliminada correctamente");
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

  if (validarDependenciasDOM("validarFormularioProyecto", [
      { id: "p-nombre", elemento: pNombre },
      { id: "p-inicio", elemento: pInicio },
      { id: "p-fin", elemento: pFin },
      { id: "botón submit", elemento: btnSubmit }
    ])) return;

  const nombreValido = pNombre.value.trim().length > 0;
  const inicioValido = /^\d{2}\/\d{2}\/\d{4}$/.test(pInicio.value);
  const finValido = /^\d{2}\/\d{2}\/\d{4}$/.test(pFin.value);

  marcarCampo(pNombre, nombreValido);
  marcarCampo(pInicio, inicioValido);
  marcarCampo(pFin, finValido);

  if (nombreValido && inicioValido && finValido) btnSubmit.removeAttribute("disabled");
  else btnSubmit.setAttribute("disabled", "true");
}

function validarFormularioTarea() {
  const selectP = document.getElementById("select-proyecto");
  const tNombre = document.getElementById("t-nombre");
  const tResp = document.getElementById("t-responsable");
  const btnSubmit = document.querySelector("#form-nueva-tarea button[type='submit']");

  if (validarDependenciasDOM("validarFormularioTarea", [
      { id: "select-proyecto", elemento: selectP },
      { id: "t-nombre", elemento: tNombre },
      { id: "t-responsable", elemento: tResp },
      { id: "botón submit", elemento: btnSubmit }
    ])) return;

  const proyectoValido = selectP.value.trim().length > 0;
  const nombreValido = tNombre.value.trim().length > 0;
  const respValido = tResp.value.trim().length > 0;

  marcarCampo(selectP, proyectoValido);
  marcarCampo(tNombre, nombreValido);
  marcarCampo(tResp, respValido);

  if (proyectoValido && nombreValido && respValido) btnSubmit.removeAttribute("disabled");
  else btnSubmit.setAttribute("disabled", "true");
}

// ========================================
// 5. Manipulación del DOM y Visibilidad
// ========================================

/** RC12: Muestra u oculta secciones dependiendo de si existen proyectos. */
function gestionarVisibilidadSecciones() {
  const seccionTareas = document.getElementById("nueva-tarea");
  const barraHerramientas = document.querySelector("nav[role='navigation']");
  const totalProyectos = gestor.listar().length;

  if (totalProyectos === 0) {
    if (seccionTareas) seccionTareas.style.display = "none";
    if (barraHerramientas) barraHerramientas.style.display = "none";
  } else {
    if (seccionTareas) seccionTareas.style.display = "block";
    if (barraHerramientas) barraHerramientas.style.display = "flex";
  }
}

function actualizarListaProyectos() {
  const select = document.getElementById("select-proyecto");
  if (!select) return;

  const seleccionActual = select.value;
  select.innerHTML = '<option value="">Seleccione un proyecto...</option>';

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

function actualizarVistaProyecto(proyecto) {
  // RC8: Null-check en el select de filtro
  const filtroEl = document.getElementById("filtro-tareas");
  const criterio = filtroEl ? filtroEl.value : "todas";
  
  const tareasFiltradas = gestor.filtrarTareas(proyecto, criterio);
  renderizarTablaGantt(tareasFiltradas);

  const porcentaje = proyecto.calcularAvance();
  const estadoTexto = proyecto.determinarEstado();
  actualizarAvanceDOM(porcentaje, `Estado: ${estadoTexto}`);
}

function renderizarTablaGantt(tareas) {
  const tbody = document.getElementById("cuerpo-tabla");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (tareas.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted py-4">No se encontraron tareas.</td></tr>`;
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
    tdGantt.textContent = "Renderizado de Gantt pendiente";

    tr.appendChild(tdNombre);
    tr.appendChild(tdResponsable);
    tr.appendChild(tdEstado);
    tr.appendChild(tdGantt);
    tbody.appendChild(tr);
  });
}

function actualizarAvanceDOM(porcentaje, textoEstado) {
  const barra = document.getElementById("barra-avance");
  const textoElemento = document.getElementById("texto-estado-proyecto");
  const pRedondeado = Math.round(porcentaje);

  if (barra) {
    barra.style.width = `${pRedondeado}%`;
    barra.textContent = `${pRedondeado}%`;
    barra.setAttribute("aria-valuenow", pRedondeado);
    barra.className = "progress-bar progress-bar-striped progress-bar-animated";
    if (pRedondeado === 100) barra.classList.add("bg-success");
    else if (pRedondeado > 0) barra.classList.add("bg-primary");
    else barra.classList.add("bg-info");
  }

  if (textoElemento) textoElemento.textContent = textoEstado;
}

// ========================================
// 6. Alertas y Persistencia
// ========================================

function cargarDatosDesdeStorage() {
  const datosGuardados = StorageUtil.obtener("planix:proyectos", "local");
  let erroresRecuperacion = 0;

  if (datosGuardados && Array.isArray(datosGuardados)) {
    datosGuardados.forEach(jsonObj => {
      try {
        const proyecto = GestorProyectos.fromJSON({ proyectos: [jsonObj] }).listar()[0];
        
        // RC9: Try-catch específico para aislar errores de inserción en el gestor
        if (!gestor.buscar(proyecto.nombre)) {
          try {
            gestor.agregar(proyecto);
          } catch (errorInsercion) {
            console.error(`Error de lógica al insertar proyecto ${proyecto.nombre}:`, errorInsercion);
            erroresRecuperacion++;
          }
        }
      } catch (errorParseo) {
        erroresRecuperacion++;
        console.error("Error estructural al reconstruir proyecto JSON:", jsonObj, errorParseo);
      }
    });
  }

  if (erroresRecuperacion > 0) {
    mostrarError("contenedor-alertas", `Advertencia: ${erroresRecuperacion} proyecto(s) no pudieron recuperarse.`);
  }

  const filtroGuardado = StorageUtil.obtener("planix:sesion:filtros", "session");
  const filtroEl = document.getElementById("filtro-tareas");
  if (filtroGuardado && filtroEl) {
    filtroEl.value = filtroGuardado;
  }
}

/** RC10: Se implementó Try/Catch para notificar fallos en toJSON */
function guardarEnStorage() {
  try {
    const dataSerializada = gestor.toJSON().proyectos;
    StorageUtil.guardar("planix:proyectos", dataSerializada, "local");
  } catch (error) {
    console.error("Error al serializar y guardar el Gestor:", error);
    mostrarError("contenedor-alertas", "Fallo crítico al guardar los datos en el sistema local.");
  }
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

  setTimeout(() => { if (contenedor.contains(alerta)) alerta.remove(); }, 4000);
}

function mostrarExito(contenedorId, mensaje) { mostrarMensaje(contenedorId, mensaje, "success"); }
function mostrarError(contenedorId, mensaje) { mostrarMensaje(contenedorId, mensaje, "danger"); }

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