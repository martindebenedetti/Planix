function Proyecto(nombre, fechaInicio, fechaFin) {
  if (typeof nombre !== "string" || nombre.trim().length === 0) {
    throw new Error("El nombre del proyecto no puede estar vacío.");
  }

  if (!validarFormatoFecha(fechaInicio)) {
    throw new Error("Formato de fecha de inicio inválido. Debe ser DD/MM/AAAA.");
  }

  if (!validarFormatoFecha(fechaFin)) {
    throw new Error("Formato de fecha de fin inválido. Debe ser DD/MM/AAAA.");
  }

  var inicio = parsearFecha(fechaInicio);
  var fin = parsearFecha(fechaFin);

  if (inicio === null || fin === null) {
    throw new Error("Fechas inválidas.");
  }

  if (fin <= inicio) {
    throw new Error("La fecha de fin debe ser posterior a la fecha de inicio.");
  }

  this.nombre = nombre.trim();
  this.fechaInicio = fechaInicio;
  this.fechaFin = fechaFin;
  this.tareas = [];
}

/**
 * Agrega una tarea al proyecto.
 * @param {Tarea} tarea - Instancia de Tarea.
 * @throws {Error} Si el argumento no es una instancia válida de Tarea.
 */
Proyecto.prototype.agregarTarea = function (tarea) {
  if (!(tarea instanceof Tarea)) {
    throw new Error("La tarea debe ser una instancia de Tarea.");
  }

  this.tareas.push(tarea);
};

/**
 * Calcula el avance del proyecto en porcentaje.
 * @returns {number} Porcentaje de tareas completadas entre 0 y 100.
 */
Proyecto.prototype.calcularAvance = function () {
  if (!Array.isArray(this.tareas) || this.tareas.length === 0) {
    return 0;
  }

  var total = this.tareas.length;
  var completadas = 0;

  for (var i = 0; i < total; i++) {
    if (this.tareas[i].estado === "completada") {
      completadas += 1;
    }
  }

  return (completadas / total) * 100;
};

/**
 * Determina el estado del proyecto según avance y fechas.
 * @returns {string} Estado del proyecto.
 */
Proyecto.prototype.determinarEstado = function () {
  var avance = this.calcularAvance();
  var hoy = new Date();
  var fechaFinDate = parsearFecha(this.fechaFin);

  if (fechaFinDate === null) {
    throw new Error("Fecha de fin inválida en el proyecto.");
  }

  if (avance === 100) {
    if (hoy <= fechaFinDate) {
      return "Completado antes del plazo";
    }
    return "Completado";
  }

  if (hoy > fechaFinDate) {
    return "Atrasado";
  }

  return "En curso";
};

/**
 * Serializa el proyecto a JSON.
 * @returns {{nombre: string, fechaInicio: string, fechaFin: string, tareas: Array}} Datos serializados.
 */
Proyecto.prototype.toJSON = function () {
  var tareasJSON = [];

  for (var i = 0; i < this.tareas.length; i++) {
    tareasJSON.push(this.tareas[i].toJSON());
  }

  return {
    nombre: this.nombre,
    fechaInicio: this.fechaInicio,
    fechaFin: this.fechaFin,
    tareas: tareasJSON
  };
};

/**
 * Reconstruye un proyecto a partir de JSON.
 * @param {{nombre: string, fechaInicio: string, fechaFin: string, tareas: Array}} json - Datos del proyecto.
 * @returns {Proyecto} Proyecto reconstruido.
 */
Proyecto.fromJSON = function (json) {
  if (!json || typeof json !== "object") {
    throw new Error("JSON de proyecto inválido.");
  }

  var proyecto = new Proyecto(json.nombre, json.fechaInicio, json.fechaFin);

  if (Array.isArray(json.tareas)) {
    for (var i = 0; i < json.tareas.length; i++) {
      proyecto.agregarTarea(Tarea.fromJSON(json.tareas[i]));
    }
  }

  return proyecto;
};
