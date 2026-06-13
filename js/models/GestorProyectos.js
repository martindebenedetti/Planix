/**
 * Gestiona una colección de proyectos.
 */
function GestorProyectos() {
  this.proyectos = [];
}

/**
 * Agrega un proyecto a la colección.
 * @param {Proyecto} proyecto - El proyecto a agregar.
 * @throws {Error} Si el proyecto no es una instancia válida o si el nombre ya existe.
 */
GestorProyectos.prototype.agregar = function (proyecto) {
  if (!(proyecto instanceof Proyecto)) {
    throw new Error("El proyecto debe ser una instancia de Proyecto.");
  }

  var nombreNormalizado = proyecto.nombre.trim().toLowerCase();

  for (var i = 0; i < this.proyectos.length; i++) {
    var proyectoActual = this.proyectos[i];
    if (typeof proyectoActual.nombre === "string" && proyectoActual.nombre.trim().toLowerCase() === nombreNormalizado) {
      throw new Error("Ya existe un proyecto con ese nombre.");
    }
  }

  this.proyectos.push(proyecto);
};

/**
 * Busca un proyecto por nombre.
 * @param {string} nombre - Nombre del proyecto a buscar.
 * @returns {Proyecto|null} Proyecto encontrado o null.
 */
GestorProyectos.prototype.buscar = function (nombre) {
  if (typeof nombre !== "string") {
    return null;
  }

  var nombreNormalizado = nombre.trim().toLowerCase();

  for (var i = 0; i < this.proyectos.length; i++) {
    var proyectoActual = this.proyectos[i];
    if (typeof proyectoActual.nombre === "string" && proyectoActual.nombre.trim().toLowerCase() === nombreNormalizado) {
      return proyectoActual;
    }
  }

  return null;
};

/**
 * Retorna una copia superficial de la lista de proyectos.
 * @returns {Proyecto[]} Array de proyectos.
 */
GestorProyectos.prototype.listar = function () {
  return this.proyectos.slice();
};

/**
 * Filtra tareas de un proyecto según un criterio.
 * @param {Proyecto} proyecto - Proyecto donde filtrar tareas.
 * @param {string} criterio - "pendiente" | "en curso" | "completada" | "todas".
 * @returns {Tarea[]} Tareas que coinciden con el criterio.
 * @throws {Error} Si el proyecto no es válido o el criterio es inválido.
 */
GestorProyectos.prototype.filtrarTareas = function (proyecto, criterio) {
  if (!(proyecto instanceof Proyecto)) {
    throw new Error("El proyecto debe ser una instancia de Proyecto.");
  }

  if (typeof criterio !== "string") {
    throw new Error("El criterio debe ser una cadena.");
  }

  var criterioNormalizado = criterio.trim().toLowerCase();
  var estadosValidos = ["pendiente", "en curso", "completada", "todas"];

  if (estadosValidos.indexOf(criterioNormalizado) === -1) {
    throw new Error("Criterio inválido para filtrar tareas.");
  }

  if (criterioNormalizado === "todas") {
    return proyecto.tareas.slice();
  }

  var tareasFiltradas = [];

  for (var i = 0; i < proyecto.tareas.length; i++) {
    if (proyecto.tareas[i].estado === criterioNormalizado) {
      tareasFiltradas.push(proyecto.tareas[i]);
    }
  }

  return tareasFiltradas;
};
