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

function validarNoVacio(texto) {
  if (typeof texto !== "string") {
    return false;
  }

  return texto.trim().length > 0;
}

function validarNombreUnico(nombre, listaProyectos) {
  if (typeof nombre !== "string" || !Array.isArray(listaProyectos)) {
    return false;
  }

  const nombreNormalizado = nombre.trim().toLowerCase();

  for (let i = 0; i < listaProyectos.length; i++) {
    const proyectoActual = listaProyectos[i];
    const nombreProyectoActual = proyectoActual.nombre.trim().toLowerCase();

    if (nombreProyectoActual === nombreNormalizado) {
      return false;
    }
  }
  return true;
}


function validarFormatoFecha(fecha) {
  if (typeof fecha !== "string") {
    return false;
  }

  const patronFecha = /^\d{2}\/\d{2}\/\d{4}$/;

  return patronFecha.test(fecha);
}


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


function validarFechaFinPosterior(fechaInicio, fechaFin) {
  const inicio = parsearFecha(fechaInicio);
  const fin = parsearFecha(fechaFin);

  if (inicio === null || fin === null) {
    return false;
  }

  return fin > inicio;
}
  
// ========================================
// Flujo 1 — Crear Proyecto
// ========================================

function crearProyecto(id, nombre, fechaInicio, fechaFin) {
  return {
    id: id,
    nombre: nombre.trim(),
    fechaInicio: fechaInicio,
    fechaFin: fechaFin,
    tareas: []
  };
}

function agregarProyecto(listaProyectos, proyecto) {
  listaProyectos.push(proyecto);
  return listaProyectos;
}


function ejecutarFlujo1() {
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

  const nuevoId = proyectos.length + 1;
  const nuevoProyecto = crearProyecto(nuevoId, nombre, fechaInicio, fechaFin);

  agregarProyecto(proyectos, nuevoProyecto);

  alert(`Proyecto "${nuevoProyecto.nombre}" creado correctamente.`);
  console.log(proyectos);
}

// ========================================
// Flujo 2 — Agregar Tarea
// ========================================

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

function construirListaProyectos(listaProyectos) {
  let listaTexto = "";

  for (let i = 0; i < listaProyectos.length; i++) {
    listaTexto += `- ${listaProyectos[i].nombre}\n`;
  }

  return listaTexto;
}

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

function crearTarea(id, nombre, responsable, estado) {
  return {
    id: id,
    nombre: nombre.trim(),
    responsable: responsable.trim(),
    estado: estado
  };
}

function agregarTarea(proyecto, tarea) {
  proyecto.tareas.push(tarea);
  return proyecto;
}


function ejecutarFlujo2() {
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

  const nuevoId = proyectoEncontrado.tareas.length + 1;
  const nuevaTarea = crearTarea(nuevoId, nombreTarea, responsable, estado);

  agregarTarea(proyectoEncontrado, nuevaTarea);

  alert("Tarea agregada correctamente");
  console.log(proyectoEncontrado);
}


// ========================================
// Flujo 3 — Calcular Avance
// ========================================

function contarTareasCompletadas(tareas) {
  let completadas = 0;

  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].estado === "completada") {
      completadas++;
    }
  }

  return completadas;
}

function calcularPorcentajeAvance(completadas, total) {
  if (total === 0) {
    return 0;
  }

  return Math.round((completadas / total) * 100);
}

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

function ejecutarFlujo3() {
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

function construirTextoTarea(tareas) {
  let listado = "";

  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];
    listado += `${tarea.id} - ${tarea.nombre} - ${tarea.responsable} - ${tarea.estado}\n`;
  }

  return listado;
}

function ejecutarFlujo4() {
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
        ejecutarFlujo1();
        break;

      case "2":
        ejecutarFlujo2();
        break;

      case "3":
        ejecutarFlujo3();
        break;

      case "4":
        ejecutarFlujo4();
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

if (typeof window !== "undefined") {
  window.proyectos = proyectos;
  window.estadosPermitidos = estadosPermitidos;

  window.validarNoVacio = validarNoVacio;
  window.validarNombreUnico = validarNombreUnico;
  window.validarFormatoFecha = validarFormatoFecha;
  window.parsearFecha = parsearFecha;
  window.validarFechaFinPosterior = validarFechaFinPosterior;

  window.crearProyecto = crearProyecto;
  window.agregarProyecto = agregarProyecto;
  window.ejecutarFlujo1 = ejecutarFlujo1;

  window.buscarProyecto = buscarProyecto;
  window.construirListaProyectos = construirListaProyectos;
  window.validarEstado = validarEstado;
  window.crearTarea = crearTarea;
  window.agregarTarea = agregarTarea;
  window.ejecutarFlujo2 = ejecutarFlujo2;

  window.contarTareasCompletadas = contarTareasCompletadas;
  window.calcularPorcentajeAvance = calcularPorcentajeAvance;
  window.determinarEstadoProyecto = determinarEstadoProyecto;
  window.calcularAvanceProyecto = calcularAvanceProyecto;
  window.ejecutarFlujo3 = ejecutarFlujo3;

  window.validarFiltro = validarFiltro;
  window.filtrarTareas = filtrarTareas;
  window.construirTextoTarea = construirTextoTarea;
  window.ejecutarFlujo4 = ejecutarFlujo4;

  window.mostrarMenuPrincipal = mostrarMenuPrincipal;
}
