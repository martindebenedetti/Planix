/**
 * Representa una tarea dentro de un proyecto.
 */
function Tarea(nombre, responsable, estado = "pendiente") {
  if (typeof nombre !== "string" || nombre.trim().length === 0) {
    throw new Error("El nombre de la tarea no puede estar vacío.");
  }

  if (typeof responsable !== "string" || responsable.trim().length === 0) {
    throw new Error("El responsable de la tarea no puede estar vacío.");
  }

  if (typeof estado !== "string" || Tarea.ESTADOS_VALIDOS.indexOf(estado) === -1) {
    throw new Error("Estado de tarea inválido.");
  }

  this.nombre = nombre.trim();
  this.responsable = responsable.trim();
  this.estado = estado;
}

/**
 * Estados permitidos para una tarea.
 * @type {string[]}
 */
Tarea.ESTADOS_VALIDOS = ["pendiente", "en curso", "completada"];

/**
 * Cambia el estado de la tarea tras validar el nuevo estado.
 * @param {string} nuevoEstado - Estado al que se desea cambiar.
 * @throws {Error} Si el estado no es válido.
 */
Tarea.prototype.cambiarEstado = function (nuevoEstado) {
  if (typeof nuevoEstado !== "string" || Tarea.ESTADOS_VALIDOS.indexOf(nuevoEstado) === -1) {
    throw new Error("Nuevo estado inválido.");

  }

  this.estado = nuevoEstado;
};

/**
 * Verifica si la tarea actual es válida.
 * @returns {boolean} true si la tarea tiene datos válidos.
 */
Tarea.prototype.esValida = function () {
  return (
    typeof this.nombre === "string" && this.nombre.trim().length > 0 &&
    typeof this.responsable === "string" && this.responsable.trim().length > 0 &&
    typeof this.estado === "string" && Tarea.ESTADOS_VALIDOS.indexOf(this.estado) !== -1
  );
};

/**
 * Serializa la tarea a JSON.
 * @returns {{nombre: string, responsable: string, estado: string}}
 */
Tarea.prototype.toJSON = function () {
  return {
    nombre: this.nombre,
    responsable: this.responsable,
    estado: this.estado
  };
};

/**
 * Crea una tarea a partir de un objeto JSON.
 * @param {{nombre: string, responsable: string, estado: string}} json - Datos de la tarea.
 * @returns {Tarea} La tarea reconstruida.
 */
Tarea.fromJSON = function (json) {
  if (!json || typeof json !== "object") {
    throw new Error("JSON de tarea inválido.");
  }

  return new Tarea(json.nombre, json.responsable, json.estado);
};
