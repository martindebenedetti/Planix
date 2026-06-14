/**
 * Controlador Principal - Planix
 * Encargado EXCLUSIVAMENTE de manejar eventos, manipular el DOM 
 * e invocar métodos de la lógica de negocio y persistencia.
 */

// ========================================
// 0. Utilidades de Fecha (Parche para Proyecto.js)
// TODO: El QA debe reportar que el modelo Proyecto 
// depende de funciones globales. El dev de POO debe 
// mover esto adentro de Proyecto.js o a un DateUtil.
// ========================================
function validarFormatoFecha(fecha) {
  if (typeof fecha !== "string") return false;
  return /^\d{2}\/\d{2}\/\d{4}$/.test(fecha);
}

function parsearFecha(fecha) {
  if (!validarFormatoFecha(fecha)) return null;
  const partes = fecha.split("/");
  const dia = Number(partes[0]);
  const mes = Number(partes[1]);
  const anio = Number(partes[2]);
  const fechaParseada = new Date(anio, mes - 1, dia);
  if (fechaParseada.getDate() !== dia || fechaParseada.getMonth() !== mes - 1 || fechaParseada.getFullYear() !== anio) return null;
  return fechaParseada;
}

// ========================================
// 1. Variables Globales de Estado
// ========================================
let gestor = null; // Instancia de GestorProyectos

// ========================================
// 2. Inicialización y Configuración de Eventos
// ========================================
document.addEventListener("DOMContentLoaded", inicializarApp);

function inicializarApp() {
  gestor = new GestorProyectos();
  cargarEstadoInicial();
  configurarEventos();
  actualizarSelectorProyectos();
  
  // Ejecutar validación inicial para deshabilitar botones
  validarFormularioProyecto();
  validarFormularioTarea();
}

function configurarEventos() {
  // Flujo 1: Crear Proyecto
  const formCrearProyecto = document.getElementById("form-crear-proyecto");
  formCrearProyecto.addEventListener("submit", manejarCrearProyecto);
  
  // Flujo 2: Agregar Tarea
  const formNuevaTarea = document.getElementById("form-nueva-tarea");
  formNuevaTarea.addEventListener("submit", manejarAgregarTarea);
  
  // Interacciones UI y Flujos 3 y 4
  document.getElementById("select-proyecto").addEventListener("change", manejarCambioProyecto);
  document.getElementById("filtro-tareas").addEventListener("change", manejarFiltrarTareas);

  // NUEVO: Validación en tiempo real (Eventos input/change)
  const inputsProyecto = formCrearProyecto.querySelectorAll("input");
  inputsProyecto.forEach(input => {
    input.addEventListener("input", validarFormularioProyecto);
  });

  const inputsTarea = formNuevaTarea.querySelectorAll("input, select");
  inputsTarea.forEach(input => {
    input.addEventListener("input", validarFormularioTarea);
    input.addEventListener("change", validarFormularioTarea);
  });
}

// ========================================
// 3. Persistencia (Interacción con StorageUtil)
// ========================================
function cargarEstadoInicial() {
  // Cargar Proyectos (Local)
  const datosGuardados = StorageUtil.obtener("planix:proyectos", "local");
  
  if (datosGuardados && Array.isArray(datosGuardados)) {
    datosGuardados.forEach(jsonObj => {
      try {
        const proyectoReconstruido = Proyecto.fromJSON(jsonObj);
        gestor.agregar(proyectoReconstruido);
      } catch (error) {
        console.error("Error al reconstruir proyecto desde JSON:", error);
      }
    });
  }

  // NUEVO: Cargar Filtro Activo (Session)
  const filtroGuardado = StorageUtil.obtener("planix:sesion:filtros", "session");
  if (filtroGuardado) {
    document.getElementById("filtro-tareas").value = filtroGuardado;
  }
}

function guardarEstado() {
  const dataSerializada = gestor.listar().map(p => p.toJSON());
  StorageUtil.guardar("planix:proyectos", dataSerializada, "local");
}

// ========================================
// 4. Handlers (Manejadores de Eventos)
// ========================================

// FLujo 1
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
    limpiarValidacionesVisuales("form-crear-proyecto"); // Limpiar bordes verdes
    actualizarSelectorProyectos();
    
    document.getElementById("select-proyecto").value = nombre;
    document.getElementById("select-proyecto").dispatchEvent(new Event('change'));

  } catch (error) {
    mostrarError(error.message);
  }
}

// Flujo 2
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
    
    guardarEstado();

    mostrarExito("Tarea agregada exitosamente.");
    
    // Limpiar solo los inputs de texto, manteniendo el proyecto
    document.getElementById("t-nombre").value = "";
    document.getElementById("t-responsable").value = "";
    
    // Forzar re-validación para bloquear el botón de nuevo
    validarFormularioTarea(); 
    
    // Quitar bordes verdes de los campos limpiados
    document.getElementById("t-nombre").classList.remove("is-valid");
    document.getElementById("t-responsable").classList.remove("is-valid");

    actualizarVistaProyecto(proyecto);
  } catch (error) {
    mostrarError(error.message);
  }
}

// Flujos 3 y 4 Combinados
function manejarCambioProyecto(event) {
  const nombreProyecto = event.target.value;
  validarFormularioTarea(); // Revalidar botón de nueva tarea
  
  if (!nombreProyecto) {
    document.getElementById("cuerpo-tabla").innerHTML = `<tr><td colspan="3" class="text-center text-muted">Aún no hay tareas para mostrar.</td></tr>`;
    actualizarAvanceDOM(0, "Seleccione un proyecto para ver su estado.");
    return;
  }

  const proyecto = gestor.buscar(nombreProyecto);
  if (proyecto) {
    actualizarVistaProyecto(proyecto);
  }
}

// Flujo 4
function manejarFiltrarTareas(event) {
  const criterio = event.target.value;
  const nombreProyecto = document.getElementById("select-proyecto").value;
  
  // NUEVO: Guardar en sessionStorage
  StorageUtil.guardar("planix:sesion:filtros", criterio, "session");
  
  if (!nombreProyecto) return;

  const proyecto = gestor.buscar(nombreProyecto);
  if (proyecto) {
    try {
      const tareasFiltradas = gestor.filtrarTareas(proyecto, criterio);
      renderizarTablaGantt(tareasFiltradas);
    } catch (error) {
      mostrarError(error.message);
    }
  }
}

// ========================================
// 5. NUEVO: Lógica de Validación en Tiempo Real
// ========================================

function marcarCampo(input, esValido) {
  // Evitar marcar como inválido si el campo está vacío y el usuario aún no escribió
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

  const nombreValido = pNombre.value.trim().length > 0;
  const inicioValido = validarFormatoFecha(pInicio.value);
  const finValido = validarFormatoFecha(pFin.value);

  marcarCampo(pNombre, nombreValido);
  marcarCampo(pInicio, inicioValido);
  marcarCampo(pFin, finValido);

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

  const proyectoValido = selectP.value.trim().length > 0;
  const nombreValido = tNombre.value.trim().length > 0;
  const respValido = tResp.value.trim().length > 0;

  marcarCampo(selectP, proyectoValido);
  marcarCampo(tNombre, nombreValido);
  marcarCampo(tResp, respValido);

  if (proyectoValido && nombreValido && respValido) {
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", "true");
  }
}

function limpiarValidacionesVisuales(formularioId) {
  const inputs = document.querySelectorAll(`#${formularioId} input, #${formularioId} select`);
  inputs.forEach(input => {
    input.classList.remove("is-valid", "is-invalid");
    input.removeAttribute("aria-invalid");
  });
  document.querySelector(`#${formularioId} button[type='submit']`).setAttribute("disabled", "true");
}

// ========================================
// 6. Funciones Auxiliares de Manipulación DOM
// ========================================

function actualizarSelectorProyectos() {
  const select = document.getElementById("select-proyecto");
  const seleccionActual = select.value;
  
  select.innerHTML = '<option value="">Seleccione...</option>';
  
  const proyectos = gestor.listar();
  proyectos.forEach(p => {
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
  const criterio = document.getElementById("filtro-tareas").value;
  const tareasFiltradas = gestor.filtrarTareas(proyecto, criterio);
  
  renderizarTablaGantt(tareasFiltradas);
  
  const porcentaje = proyecto.calcularAvance();
  const estadoTexto = proyecto.determinarEstado();
  actualizarAvanceDOM(porcentaje, `Estado: ${estadoTexto}`);
}

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

    tr.innerHTML = `
      <td class="fw-bold">${tarea.nombre}</td>
      <td>${tarea.responsable}</td>
      <td><span class="badge ${badgeClass}">${tarea.estado.toUpperCase()}</span></td>
      <td colspan="10" class="text-muted text-center small align-middle">Renderizado de Gantt pendiente (Módulo Canvas/CSS)</td>
    `;
    tbody.appendChild(tr);
  });
}

function actualizarAvanceDOM(porcentaje, textoEstado) {
  const barra = document.getElementById("barra-avance");
  const pRedondeado = Math.round(porcentaje);
  
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

  document.getElementById("texto-estado-proyecto").textContent = textoEstado;
}

function mostrarMensaje(mensaje, tipoColor) {
  const contenedor = document.getElementById("contenedor-alertas");
  const alerta = document.createElement("div");
  alerta.className = `alert alert-${tipoColor} alert-dismissible fade show`;
  alerta.innerHTML = `
    <strong>${tipoColor === 'danger' ? 'Error' : 'Éxito'}:</strong> ${mensaje}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  contenedor.appendChild(alerta);

  setTimeout(() => {
    if (contenedor.contains(alerta)) {
      alerta.remove();
    }
  }, 4000);
}

function mostrarError(mensaje) { mostrarMensaje(mensaje, "danger"); }
function mostrarExito(mensaje) { mostrarMensaje(mensaje, "success"); }