/**
 * Módulo de utilidades para manejar localStorage y sessionStorage.
 * Centraliza operaciones CRUD, serialización JSON y manejo básico de errores.
 *
 * Actividad Obligatoria N°4 - Programación Web I
 * Proyecto: Planix
 */

/**
 * Valida que la clave sea una cadena no vacía.
 * @param {string} clave - Clave a validar.
 * @returns {boolean} true si la clave es válida, false en caso contrario.
 */
function validarClave(clave) {
  return typeof clave === "string" && clave.trim().length > 0;
}

/**
 * Normaliza el tipo de storage indicado.
 * @param {string} tipo - "local" para localStorage o "session" para sessionStorage.
 * @returns {string|null} "local", "session" o null si el tipo no es válido.
 */
function normalizarTipo(tipo = "local") {
  if (tipo === "local" || tipo === "session") {
    return tipo;
  }

  console.error("Tipo de storage inválido. Usar 'local' o 'session'.");
  return null;
}

/**
 * Obtiene el storage correspondiente según el tipo indicado.
 * @param {string} tipo - "local" para localStorage o "session" para sessionStorage.
 * @returns {Storage|null} Objeto Storage seleccionado o null si el tipo es inválido.
 */
function obtenerStorage(tipo = "local") {
  const tipoNormalizado = normalizarTipo(tipo);

  if (tipoNormalizado === null) {
    return null;
  }

  return tipoNormalizado === "session" ? sessionStorage : localStorage;
}

/**
 * Guarda un valor en localStorage o sessionStorage.
 * @param {string} clave - Clave donde se guardará el dato.
 * @param {*} valor - Valor a guardar.
 * @param {string} tipo - Tipo de storage: "local" o "session".
 * @returns {boolean} true si se guardó correctamente, false si ocurrió un error.
 */
function guardar(clave, valor, tipo = "local") {
  try {
    if (!validarClave(clave)) {
      console.error("Clave inválida para guardar en storage.");
      return false;
    }

    const storage = obtenerStorage(tipo);

    if (storage === null) {
      return false;
    }

    const valorSerializado = JSON.stringify(valor);

    if (valorSerializado === undefined) {
      console.error("No se puede guardar un valor no serializable en JSON.");
      return false;
    }

    storage.setItem(clave, valorSerializado);
    return true;
  } catch (error) {
    console.error("Error al guardar en storage:", error);
    return false;
  }
}

/**
 * Obtiene un valor desde localStorage o sessionStorage.
 * @param {string} clave - Clave del dato a recuperar.
 * @param {string} tipo - Tipo de storage: "local" o "session".
 * @returns {*} Valor recuperado o null si no existe o si ocurre un error.
 */
function obtener(clave, tipo = "local") {
  try {
    if (!validarClave(clave)) {
      console.error("Clave inválida para obtener desde storage.");
      return null;
    }

    const storage = obtenerStorage(tipo);

    if (storage === null) {
      return null;
    }

    const valor = storage.getItem(clave);

    if (valor === null) {
      return null;
    }

    return JSON.parse(valor);
  } catch (error) {
    console.error("Error al obtener desde storage:", error);
    return null;
  }
}

/**
 * Actualiza un valor existente en localStorage o sessionStorage.
 * Si la clave no existe, la crea.
 * @param {string} clave - Clave del dato a actualizar.
 * @param {*} valor - Nuevo valor.
 * @param {string} tipo - Tipo de storage: "local" o "session".
 * @returns {boolean} true si se actualizó correctamente, false si ocurrió un error.
 */
function actualizar(clave, valor, tipo = "local") {
  return guardar(clave, valor, tipo);
}

/**
 * Elimina un valor desde localStorage o sessionStorage.
 * @param {string} clave - Clave del dato a eliminar.
 * @param {string} tipo - Tipo de storage: "local" o "session".
 * @returns {boolean} true si se eliminó correctamente, false si ocurrió un error.
 */
function eliminar(clave, tipo = "local") {
  try {
    if (!validarClave(clave)) {
      console.error("Clave inválida para eliminar desde storage.");
      return false;
    }

    const storage = obtenerStorage(tipo);

    if (storage === null) {
      return false;
    }

    storage.removeItem(clave);
    return true;
  } catch (error) {
    console.error("Error al eliminar desde storage:", error);
    return false;
  }
}

/**
 * Verifica si existe una clave en localStorage o sessionStorage.
 * @param {string} clave - Clave del dato a verificar.
 * @param {string} tipo - Tipo de storage: "local" o "session".
 * @returns {boolean} true si la clave existe, false en caso contrario.
 */
function existe(clave, tipo = "local") {
  try {
    if (!validarClave(clave)) {
      return false;
    }

    const storage = obtenerStorage(tipo);

    if (storage === null) {
      return false;
    }

    return storage.getItem(clave) !== null;
  } catch (error) {
    console.error("Error al verificar existencia en storage:", error);
    return false;
  }
}

/**
 * Lista las claves almacenadas que comienzan con un prefijo determinado.
 * @param {string} prefijo - Prefijo de claves a buscar.
 * @param {string} tipo - Tipo de storage: "local" o "session".
 * @returns {Array<string>} Lista de claves encontradas.
 */
function listar(prefijo = "", tipo = "local") {
  try {
    const storage = obtenerStorage(tipo);

    if (storage === null) {
      return [];
    }

    const prefijoNormalizado = typeof prefijo === "string" ? prefijo : "";
    const claves = [];

    for (let i = 0; i < storage.length; i++) {
      const clave = storage.key(i);

      if (clave && clave.startsWith(prefijoNormalizado)) {
        claves.push(clave);
      }
    }

    return claves;
  } catch (error) {
    console.error("Error al listar claves de storage:", error);
    return [];
  }
}

/**
 * Limpia completamente localStorage o sessionStorage.
 * Usar con precaución porque elimina todas las claves del storage indicado.
 * @param {string} tipo - Tipo de storage: "local" o "session".
 * @returns {boolean} true si se limpió correctamente, false si ocurrió un error.
 */
function limpiar(tipo = "local") {
  try {
    const storage = obtenerStorage(tipo);

    if (storage === null) {
      return false;
    }

    storage.clear();
    return true;
  } catch (error) {
    console.error("Error al limpiar storage:", error);
    return false;
  }
}

/**
 * Elimina únicamente las claves que comienzan con un prefijo determinado.
 * Es una alternativa más segura que limpiar(), porque no borra datos ajenos al proyecto.
 * @param {string} prefijo - Prefijo de claves a eliminar.
 * @param {string} tipo - Tipo de storage: "local" o "session".
 * @returns {boolean} true si se eliminaron correctamente, false si ocurrió un error.
 */
function limpiarPorPrefijo(prefijo, tipo = "local") {
  try {
    if (!validarClave(prefijo)) {
      console.error("Prefijo inválido para limpiar storage.");
      return false;
    }

    const storage = obtenerStorage(tipo);

    if (storage === null) {
      return false;
    }

    const claves = listar(prefijo, tipo);

    claves.forEach((clave) => {
      storage.removeItem(clave);
    });

    return true;
  } catch (error) {
    console.error("Error al limpiar claves por prefijo:", error);
    return false;
  }
}

/**
 * API pública del módulo StorageUtil.
 */
const StorageUtil = {
  guardar,
  obtener,
  actualizar,
  eliminar,
  existe,
  listar,
  limpiar,
  limpiarPorPrefijo
};

/**
 * Exposición global para integración con scripts tradicionales y tests Jasmine.
 * Esto permite usar StorageUtil sin modificar todavía index.html a type="module".
 */
if (typeof window !== "undefined") {
  window.StorageUtil = StorageUtil;
}