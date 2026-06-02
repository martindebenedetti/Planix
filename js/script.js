// ========================================
// Datos base
// ========================================
const proyectos = [];
 
const estadosPermitidos = [
  "pendiente",
  "en curso",
  "completada"
];
 
// ========================================
// Funciones de validación
// ========================================
 
/**
 * Valida que un texto no esté vacío ni sea solo espacios.
 * @param {string} texto - El texto a validar.
 * @returns {boolean} true si el texto tiene contenido, false si está vacío.
 */
function validarNoVacio(texto) {
  if (typeof texto !== "string") {
    return false;
  }
  return texto.trim().length > 0;
}
 
/**
 * Valida que el nombre de un proyecto sea único dentro de la lista.
 * @param {string} nombre - El nombre a verificar.
 * @param {Array} listaProyectos - Array de proyectos existentes.
 * @returns {boolean} true si el nombre no existe, false si ya está en uso.
 */
function validarNombreUnico(nombre, listaProyectos) {
  if (typeof nombre !== "string" || !Array.isArray(listaProyectos)) {
    return false;
  }
 
  const nombreNormalizado = nombre.trim().toLowerCase();
 
  for (let i = 0; i < listaProyectos.length; i++) {
    const proyectoActual = listaProyectos[i];
 
    if (!proyectoActual || typeof proyectoActual.nombre !== "string") {
      continue;
    }
 
    const nombreProyectoActual = proyectoActual.nombre.trim().toLowerCase();
 
    if (nombreProyectoActual === nombreNormalizado) {
      return false;
    }
  }
 
  return true;
}
 
/**
 * Valida que una cadena tenga formato de fecha DD/MM/AAAA.
 * @param {string} fecha - La cadena de fecha a validar.
 * @returns {boolean} true si el formato es correcto, false en caso contrario.
 */
function validarFormatoFecha(fecha) {
  if (typeof fecha !== "string") {
    return false;
  }
 
  const patronFecha = /^\d{2}\/\d{2}\/\d{4}$/;
  return patronFecha.test(fecha);
}
 
/**
 * Convierte una fecha en formato DD/MM/AAAA a un objeto Date.
 * @param {string} fecha - La fecha en formato DD/MM/AAAA.
 * @returns {Date|null} El objeto Date correspondiente, o null si la fecha es inválida.
 */
function parsearFecha(fecha) {
  if (!validarFormatoFecha(fecha)) {
    return null;
  }
 
  const partes = fecha.split("/");
  const dia = Number(partes[0]);
  const mes = Number(partes[1]);
  const anio = Number(partes[2]);
 
  const fechaParseada = new Date(anio, mes - 1, dia);
 
  const diaValido = fechaParseada.getDate() === dia;
  const mesValido = fechaParseada.getMonth() === mes - 1;
  const anioValido = fechaParseada.getFullYear() === anio;
 
  if (!diaValido || !mesValido || !anioValido) {
    return null;
  }
 
  return fechaParseada;
}
 
/**
 * Valida que la fecha de fin sea posterior a la fecha de inicio.
 * @param {string} fechaInicio - Fecha de inicio en formato DD/MM/AAAA.
 * @param {string} fechaFin - Fecha de fin en formato DD/MM/AAAA.
 * @returns {boolean} true si la fecha de fin es posterior, false en caso contrario.
 */
function validarFechaFinPosterior(fechaInicio, fechaFin) {
  const inicio = parsearFecha(fechaInicio);
  const fin = parsearFecha(fechaFin);
 
  if (inicio === null || fin === null) {
    return false;
  }
 
  return fin > inicio;
}
 
/**
 * Genera el siguiente ID correlativo para una lista de items.
 * @param {Array} listaItems - Array de items con propiedad id numérica.
 * @returns {number} El siguiente ID disponible.
 */
function generarSiguienteId(listaItems) {
  if (!Array.isArray(listaItems)) {
    return 1;
  }
 
  let maxId = 0;
 
  for (let i = 0; i < listaItems.length; i++) {
    const item = listaItems[i];
 
    if (item && typeof item.id === "number" && item.id > maxId) {
      maxId = item.id;
    }
  }
 
  return maxId + 1;
}
 
// ========================================
// Flujo 1 — Crear Proyecto
// ========================================
 
/**
 * Crea un nuevo objeto proyecto con los datos proporcionados.
 * @param {number} id - Identificador único del proyecto.
 * @param {string} nombre - Nombre del proyecto.
 * @param {string} fechaInicio - Fecha de inicio en formato DD/MM/AAAA.
 * @param {string} fechaFin - Fecha de fin en formato DD/MM/AAAA.
 * @returns {Object} El objeto proyecto creado con array de tareas vacío.
 */
function crearProyecto(id, nombre, fechaInicio, fechaFin) {
  return {
    id: id,
    nombre: nombre.trim(),
    fechaInicio: fechaInicio,
    fechaFin: fechaFin,
    tareas: []
  };
}
 
/**
 * Agrega un proyecto a la lista de proyectos.
 * @param {Array} listaProyectos - Array de proyectos existentes.
 * @param {Object} proyecto - El proyecto a agregar.
 * @returns {Array} La lista de proyectos actualizada.
 */
function agregarProyecto(listaProyectos, proyecto) {
  listaProyectos.push(proyecto);
  return listaProyectos;
}
 
/**
 * Ejecuta el flujo de creación de un nuevo proyecto.
 * Solicita nombre y fechas mediante prompt, valida los datos y agrega el proyecto.
 */
function ejecutarCrearProyecto() {
  const nombre = prompt("Ingrese el nombre del proyecto:");
 
  if (!validarNoVacio(nombre)) {
    alert("El nombre del proyecto no puede estar vacío.");
    return;
  }
 
  if (!validarNombreUnico(nombre, proyectos)) {
    alert("Ya existe un proyecto con ese nombre.");
    return;
  }
 
  const fechaInicio = prompt("Ingrese la fecha de inicio (DD/MM/AAAA):");
 
  if (!validarFormatoFecha(fechaInicio)) {
    alert("Formato de fecha inicio inválido. Usar DD/MM/AAAA.");
    return;
  }
 
  const fechaFin = prompt("Ingrese la fecha de fin (DD/MM/AAAA):");
 
  if (!validarFormatoFecha(fechaFin)) {
    alert("Formato de fecha fin inválido. Usar DD/MM/AAAA.");
    return;
  }
 
  if (!validarFechaFinPosterior(fechaInicio, fechaFin)) {
    alert("La fecha de fin debe ser posterior a la de inicio.");
    return;
  }
 
  const nuevoId = generarSiguienteId(proyectos);
  const nuevoProyecto = crearProyecto(nuevoId, nombre, fechaInicio, fechaFin);
 
  agregarProyecto(proyectos, nuevoProyecto);
 
  alert(`Proyecto "${nuevoProyecto.nombre}" creado correctamente.`);
  console.log(proyectos);
}
 
// ========================================
// Flujo 2 — Agregar Tarea
// ========================================
 
/**
 * Busca un proyecto por nombre dentro de la lista.
 * @param {string} nombreProyecto - El nombre del proyecto a buscar.
 * @param {Array} listaProyectos - Array de proyectos donde buscar.
 * @returns {Object|null} El proyecto encontrado, o null si no existe.
 */
function buscarProyecto(nombreProyecto, listaProyectos) {
  if (typeof nombreProyecto !== "string") {
    return null;
  }
 
  const nombreNormalizado = nombreProyecto.trim().toLowerCase();
 
  for (let i = 0; i < listaProyectos.length; i++) {
    const proyectoActual = listaProyectos[i];
    const nombreActual = proyectoActual.nombre.trim().toLowerCase();
 
    if (nombreActual === nombreNormalizado) {
      return proyectoActual;
    }
  }
 
  return null;
}
 
/**
 * Construye un texto con la lista de nombres de proyectos.
 * @param {Array} listaProyectos - Array de proyectos.
 * @returns {string} Texto con los nombres de proyectos separados por saltos de línea.
 */
function construirListaProyectos(listaProyectos) {
  let listaTexto = "";
 
  for (let i = 0; i < listaProyectos.length; i++) {
    listaTexto += `- ${listaProyectos[i].nombre}\n`;
  }
 
  return listaTexto;
}
 
/**
 * Convierte una opción numérica (1/2/3) al estado de tarea correspondiente.
 * @param {string} opcionEstado - La opción ingresada por el usuario ("1", "2" o "3").
 * @returns {string|null} El nombre del estado, o null si la opción es inválida.
 */
function validarEstado(opcionEstado) {
  if (opcionEstado === "1") {
    return "pendiente";
  }
 
  if (opcionEstado === "2") {
    return "en curso";
  }
 
  if (opcionEstado === "3") {
    return "completada";
  }
 
  return null;
}
 
/**
 * Crea un nuevo objeto tarea con los datos proporcionados.
 * @param {number} id - Identificador único de la tarea.
 * @param {string} nombre - Nombre de la tarea.
 * @param {string} responsable - Nombre del responsable de la tarea.
 * @param {string} estado - Estado de la tarea (pendiente, en curso, completada).
 * @returns {Object} El objeto tarea creado.
 */
function crearTarea(id, nombre, responsable, estado) {
  return {
    id: id,
    nombre: nombre.trim(),
    responsable: responsable.trim(),
    estado: estado
  };
}
 
/**
 * Agrega una tarea a un proyecto existente.
 * @param {Object} proyecto - El proyecto al que se agrega la tarea.
 * @param {Object} tarea - La tarea a agregar.
 * @returns {Object} El proyecto actualizado con la nueva tarea.
 */
function agregarTarea(proyecto, tarea) {
  proyecto.tareas.push(tarea);
  return proyecto;
}
 
/**
 * Ejecuta el flujo de agregar una tarea a un proyecto existente.
 * Solicita el proyecto, nombre, responsable y estado mediante prompts.
 */
function ejecutarAgregarTarea() {
  if (proyectos.length === 0) {
    alert("No hay proyectos");
    return;
  }
 
  const listaTexto = construirListaProyectos(proyectos);
  alert(listaTexto);
 
  const nombreProyecto = prompt("Ingrese el nombre del proyecto:");
  const proyectoEncontrado = buscarProyecto(nombreProyecto, proyectos);
 
  if (proyectoEncontrado === null) {
    alert("Proyecto no encontrado");
    return;
  }
 
  const nombreTarea = prompt("Ingrese el nombre de la tarea:");
  const responsable = prompt("Ingrese el responsable de la tarea:");
  const opcionEstado = prompt("Ingrese el estado: 1=pendiente, 2=en curso, 3=completada");
 
  if (!validarNoVacio(nombreTarea) || !validarNoVacio(responsable) || !validarNoVacio(opcionEstado)) {
    alert("Campos incompletos");
    return;
  }
 
  const estado = validarEstado(opcionEstado);
 
  if (estado === null) {
    alert("Estado inválido");
    return;
  }
 
  const nuevoId = generarSiguienteId(proyectoEncontrado.tareas);
  const nuevaTarea = crearTarea(nuevoId, nombreTarea, responsable, estado);
 
  agregarTarea(proyectoEncontrado, nuevaTarea);
 
  alert("Tarea agregada correctamente");
  console.log(proyectoEncontrado);
}
 
// ========================================
// Flujo 3 — Calcular Avance
// ========================================
 
/**
 * Cuenta cuántas tareas tienen estado "completada" en un array.
 * @param {Array} tareas - Array de tareas a evaluar.
 * @returns {number} Cantidad de tareas completadas.
 */
function contarTareasCompletadas(tareas) {
  let completadas = 0;
 
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].estado === "completada") {
      completadas++;
    }
  }
 
  return completadas;
}
 
/**
 * Calcula el porcentaje de avance en base a tareas completadas sobre el total.
 * @param {number} completadas - Cantidad de tareas completadas.
 * @param {number} total - Total de tareas.
 * @returns {number} Porcentaje de avance redondeado (0-100).
 */
function calcularPorcentajeAvance(completadas, total) {
  if (total === 0) {
    return 0;
  }
 
  return Math.round((completadas / total) * 100);
}
 
/**
 * Determina el estado general de un proyecto según su porcentaje y fecha de fin.
 * @param {number} porcentaje - Porcentaje de avance del proyecto (0-100).
 * @param {string} fechaFin - Fecha de fin del proyecto en formato DD/MM/AAAA.
 * @param {Date} [hoy=new Date()] - Fecha actual (inyectable para testing).
 * @returns {string} Estado del proyecto: "Completado antes del plazo", "Completado", "Atrasado" o "En curso".
 */
function determinarEstadoProyecto(porcentaje, fechaFin, hoy = new Date()) {
  const fechaFinDate = parsearFecha(fechaFin);
 
  if (fechaFinDate === null) {
    return "Fecha inválida";
  }
 
  const hoyNormalizado = new Date(
    hoy.getFullYear(),
    hoy.getMonth(),
    hoy.getDate()
  );
 
  if (porcentaje === 100) {
    if (hoyNormalizado <= fechaFinDate) {
      return "Completado antes del plazo";
    }
    return "Completado";
  }
 
  if (hoyNormalizado > fechaFinDate) {
    return "Atrasado";
  }
 
  return "En curso";
}
 
/**
 * Calcula el resumen de avance de un proyecto.
 * @param {Object} proyecto - El proyecto a evaluar.
 * @returns {Object} Objeto con total, completadas, porcentaje y estadoProyecto.
 */
function calcularAvanceProyecto(proyecto) {
  const total = proyecto.tareas.length;
  const completadas = contarTareasCompletadas(proyecto.tareas);
  const porcentaje = calcularPorcentajeAvance(completadas, total);
  const estadoProyecto = determinarEstadoProyecto(porcentaje, proyecto.fechaFin);
 
  return {
    total: total,
    completadas: completadas,
    porcentaje: porcentaje,
    estadoProyecto: estadoProyecto
  };
}
 
/**
 * Ejecuta el flujo de cálculo de avance de un proyecto.
 * Muestra un informe con porcentaje, tareas completadas y estado del proyecto.
 */
function ejecutarCalcularAvance() {
  if (proyectos.length === 0) {
    alert("No hay proyectos");
    return;
  }
 
  const listaProyectos = construirListaProyectos(proyectos);
  alert(listaProyectos);
 
  const nombreProyecto = prompt("Ingrese el nombre del proyecto:");
  const proyectoEncontrado = buscarProyecto(nombreProyecto, proyectos);
 
  if (proyectoEncontrado === null) {
    alert("Proyecto no encontrado");
    return;
  }
 
  if (proyectoEncontrado.tareas.length === 0) {
    alert("El proyecto no tiene tareas");
    return;
  }
 
  const avance = calcularAvanceProyecto(proyectoEncontrado);
 
  const informe =
    `Avance: ${avance.porcentaje}%\n` +
    `${avance.completadas}/${avance.total} tareas\n` +
    `Estado: ${avance.estadoProyecto}`;
 
  alert(informe);
  console.log(avance);
}
 
// ========================================
// Flujo 4 — Filtrar Tareas
// ========================================
 
/**
 * Convierte una opción numérica (1/2/3/4) al filtro de estado correspondiente.
 * @param {string} opcionFiltro - La opción ingresada por el usuario.
 * @returns {string|null} El nombre del filtro ("pendiente", "en curso", "completada", "todas"), o null si es inválida.
 */
function validarFiltro(opcionFiltro) {
  if (opcionFiltro === "1") {
    return "pendiente";
  }
 
  if (opcionFiltro === "2") {
    return "en curso";
  }
 
  if (opcionFiltro === "3") {
    return "completada";
  }
 
  if (opcionFiltro === "4") {
    return "todas";
  }
 
  return null;
}
 
/**
 * Filtra un array de tareas por estado.
 * @param {Array} tareas - Array de tareas a filtrar.
 * @param {string} filtro - Estado por el que filtrar, o "todas" para no filtrar.
 * @returns {Array} Array de tareas que coinciden con el filtro.
 */
function filtrarTareas(tareas, filtro) {
  const tareasFiltradas = [];
 
  for (let i = 0; i < tareas.length; i++) {
    const tareaActual = tareas[i];
 
    if (filtro === "todas" || tareaActual.estado === filtro) {
      tareasFiltradas.push(tareaActual);
    }
  }
 
  return tareasFiltradas;
}
 
/**
 * Construye un texto con el listado de tareas formateado.
 * @param {Array} tareas - Array de tareas a listar.
 * @returns {string} Texto con id, nombre, responsable y estado de cada tarea.
 */
function construirTextoTarea(tareas) {
  let listado = "";
 
  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];
    listado += `${tarea.id} - ${tarea.nombre} - ${tarea.responsable} - ${tarea.estado}\n`;
  }
 
  return listado;
}
 
/**
 * Ejecuta el flujo de filtrado de tareas de un proyecto por estado.
 * Permite filtrar por pendiente, en curso, completada o ver todas.
 */
function ejecutarFiltrarTareas() {
  if (proyectos.length === 0) {
    alert("No hay proyectos");
    return;
  }
 
  const listaProyectos = construirListaProyectos(proyectos);
  alert(listaProyectos);
 
  const nombreProyecto = prompt("Ingrese el nombre del proyecto:");
  const proyectoEncontrado = buscarProyecto(nombreProyecto, proyectos);
 
  if (proyectoEncontrado === null) {
    alert("Proyecto no encontrado");
    return;
  }
 
  if (proyectoEncontrado.tareas.length === 0) {
    alert("El proyecto no tiene tareas");
    return;
  }
 
  const opcionFiltro = prompt("Ingrese filtro: 1=pendiente, 2=en curso, 3=completada, 4=todas");
  const filtro = validarFiltro(opcionFiltro);
 
  if (filtro === null) {
    alert("Opción de filtro inválida");
    return;
  }
 
  const tareasFiltradas = filtrarTareas(proyectoEncontrado.tareas, filtro);
 
  if (tareasFiltradas.length === 0) {
    alert("No hay tareas para ese filtro");
    return;
  }
 
  const listado = construirTextoTarea(tareasFiltradas);
 
  alert(listado);
  console.log(listado);
}
 
// ========================================
// Menú principal
// ========================================
 
/**
 * Muestra el menú principal de Planix en un bucle hasta que el usuario elija salir.
 * Permite navegar entre los 4 flujos principales mediante prompt().
 */
function mostrarMenuPrincipal() {
  let opcion = "";
 
  while (opcion !== "0") {
    opcion = prompt(
      "Planix - Menú principal\n\n" +
      "1. Crear Proyecto\n" +
      "2. Agregar Tarea\n" +
      "3. Calcular Avance\n" +
      "4. Filtrar Tareas\n" +
      "0. Salir"
    );
 
    switch (opcion) {
      case "1":
        ejecutarCrearProyecto();
        break;
 
      case "2":
        ejecutarAgregarTarea();
        break;
 
      case "3":
        ejecutarCalcularAvance();
        break;
 
      case "4":
        ejecutarFiltrarTareas();
        break;
 
      case "0":
        alert("Saliendo de Planix.");
        break;
 
      default:
        alert("Opción inválida.");
        break;
    }
  }
}
 
// ========================================
// Exposición global y arranque
// ========================================
 
if (typeof window !== "undefined") {
  window.Planix = {
    proyectos: proyectos,
    estadosPermitidos: estadosPermitidos,
 
    validarNoVacio: validarNoVacio,
    validarNombreUnico: validarNombreUnico,
    validarFormatoFecha: validarFormatoFecha,
    parsearFecha: parsearFecha,
    validarFechaFinPosterior: validarFechaFinPosterior,
    generarSiguienteId: generarSiguienteId,
 
    crearProyecto: crearProyecto,
    agregarProyecto: agregarProyecto,
    ejecutarCrearProyecto: ejecutarCrearProyecto,
 
    buscarProyecto: buscarProyecto,
    construirListaProyectos: construirListaProyectos,
    validarEstado: validarEstado,
    crearTarea: crearTarea,
    agregarTarea: agregarTarea,
    ejecutarAgregarTarea: ejecutarAgregarTarea,
 
    contarTareasCompletadas: contarTareasCompletadas,
    calcularPorcentajeAvance: calcularPorcentajeAvance,
    determinarEstadoProyecto: determinarEstadoProyecto,
    calcularAvanceProyecto: calcularAvanceProyecto,
    ejecutarCalcularAvance: ejecutarCalcularAvance,
 
    validarFiltro: validarFiltro,
    filtrarTareas: filtrarTareas,
    construirTextoTarea: construirTextoTarea,
    ejecutarFiltrarTareas: ejecutarFiltrarTareas,
 
    mostrarMenuPrincipal: mostrarMenuPrincipal
  };
 
  // Inicia el menú principal al cargar el documento
  window.addEventListener("DOMContentLoaded", function () {
    // Lógica del modal compartir
    const btnCopiar = document.querySelector("#modalCompartir .btn-primary");
    if (btnCopiar) {
      btnCopiar.addEventListener("click", function () {
        const input = document.querySelector("#modalCompartir input");
        input.select();
        input.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(input.value);
        this.innerText = "Copiado!";
        setTimeout(() => this.innerText = "Copiar enlace", 2000);
      });
    }

    mostrarMenuPrincipal();
  });
}