/**
 * Controlador Principal - Planix
 * Encargado EXCLUSIVAMENTE de manejar eventos, manipular el DOM 
 * e invocar métodos de la lógica de negocio y persistencia.
 */

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
}

function configurarEventos() {
  // Flujo 1: Crear Proyecto
  document.getElementById("form-crear-proyecto").addEventListener("submit", manejarCrearProyecto);
  
  // Flujo 2: Agregar Tarea
  document.getElementById("form-nueva-tarea").addEventListener("submit", manejarAgregarTarea);
  
  // Interacciones UI y Flujos 3 y 4
  document.getElementById("select-proyecto").addEventListener("change", manejarCambioProyecto);
  document.getElementById("filtro-tareas").addEventListener("change", manejarFiltrarTareas);
}

// ========================================
// 3. Persistencia (Interacción con StorageUtil)
// ========================================
function cargarEstadoInicial() {
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
  event.preventDefault(); // Evitar recarga de página
  
  const nombre = document.getElementById("p-nombre").value;
  const fechaInicio = document.getElementById("p-inicio").value;
  const fechaFin = document.getElementById("p-fin").value;

  try {
    // 1. Invocar lógica de negocio
    const nuevoProyecto = new Proyecto(nombre, fechaInicio, fechaFin);
    gestor.agregar(nuevoProyecto);
    
    // 2. Persistir
    guardarEstado();
    
    // 3. Actualizar DOM
    mostrarExito(`Proyecto "${nombre}" creado correctamente.`);
    event.target.reset();
    actualizarSelectorProyectos();
    
    // Auto-seleccionar el proyecto recién creado
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
  if (!nombreProyecto) {
    mostrarError("Debe seleccionar un proyecto destino.");
    return;
  }

  const nombreTarea = document.getElementById("t-nombre").value;
  const responsable = document.getElementById("t-responsable").value;
  const estado = document.getElementById("t-estado").value;

  try {
    const proyecto = gestor.buscar(nombreProyecto);
    if (!proyecto) throw new Error("Proyecto no encontrado.");

    // 1. Invocar lógica de negocio
    const nuevaTarea = new Tarea(nombreTarea, responsable, estado);
    proyecto.agregarTarea(nuevaTarea);
    
    // 2. Persistir
    guardarEstado();

    // 3. Actualizar DOM
    mostrarExito("Tarea agregada exitosamente.");
    
    // Limpiar solo los inputs de la tarea, dejar el proyecto seleccionado
    document.getElementById("t-nombre").value = "";
    document.getElementById("t-responsable").value = "";
    
    actualizarVistaProyecto(proyecto);
  } catch (error) {
    mostrarError(error.message);
  }
}

// Flujos 3 y 4 Combinados (Al cambiar de proyecto)
function manejarCambioProyecto(event) {
  const nombreProyecto = event.target.value;
  
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
// 5. Funciones Auxiliares de Manipulación DOM
// ========================================

function actualizarSelectorProyectos() {
  const select = document.getElementById("select-proyecto");
  const seleccionActual = select.value;
  
  select.innerHTML = '<option value="">Seleccione un proyecto...</option>';
  
  const proyectos = gestor.listar();
  proyectos.forEach(p => {
    const option = document.createElement("option");
    option.value = p.nombre;
    option.textContent = p.nombre;
    select.appendChild(option);
  });

  // Restaurar selección si existe
  if (seleccionActual && gestor.buscar(seleccionActual)) {
    select.value = seleccionActual;
  }
}

function actualizarVistaProyecto(proyecto) {
  // Aplicar filtro actual
  const criterio = document.getElementById("filtro-tareas").value;
  const tareasFiltradas = gestor.filtrarTareas(proyecto, criterio);
  
  // Actualizar tabla (Flujo 4/Gantt)
  renderizarTablaGantt(tareasFiltradas);
  
  // Actualizar barra de progreso (Flujo 3)
  const porcentaje = proyecto.calcularAvance();
  const estadoTexto = proyecto.determinarEstado();
  actualizarAvanceDOM(porcentaje, `Estado: ${estadoTexto}`);
}

function renderizarTablaGantt(tareas) {
  const tbody = document.getElementById("cuerpo-tabla");
  tbody.innerHTML = ""; // Limpiar

  if (tareas.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="text-center text-muted">No se encontraron tareas.</td></tr>`;
    return;
  }

  tareas.forEach(tarea => {
    const tr = document.createElement("tr");
    
    // Determinar color del badge (píldora) según estado
    let badgeClass = "bg-secondary";
    if (tarea.estado === "pendiente") badgeClass = "bg-warning text-dark";
    if (tarea.estado === "en curso") badgeClass = "bg-primary";
    if (tarea.estado === "completada") badgeClass = "bg-success";

    tr.innerHTML = `
      <td class="fw-bold">${tarea.nombre}</td>
      <td>${tarea.responsable}</td>
      <td><span class="badge ${badgeClass}">${tarea.estado.toUpperCase()}</span></td>
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
  
  // Cambiar color de barra según progreso
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

// Sistema de alertas visuales reemplazando a alert()
function mostrarMensaje(mensaje, tipoColor) {
  const contenedor = document.getElementById("contenedor-alertas");
  const alerta = document.createElement("div");
  alerta.className = `alert alert-${tipoColor} alert-dismissible fade show`;
  alerta.innerHTML = `
    <strong>${tipoColor === 'danger' ? 'Error' : 'Éxito'}:</strong> ${mensaje}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  contenedor.appendChild(alerta);

  // Auto-eliminar después de 4 segundos
  setTimeout(() => {
    if (contenedor.contains(alerta)) {
      alerta.remove();
    }
  }, 4000);
}

function mostrarError(mensaje) {
  mostrarMensaje(mensaje, "danger");
}

function mostrarExito(mensaje) {
  mostrarMensaje(mensaje, "success");
}