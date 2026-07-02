/**
 * @fileoverview Módulo wrapper para SweetAlert2
 * Centraliza la configuración de notificaciones y confirmaciones de Planix
 * @module Notificaciones
 */

const Notificaciones = {
  /**
   * Muestra un modal de confirmación antes de ejecutar una acción crítica
   * @param {string} titulo - Título del modal
   * @param {string} texto - Texto descriptivo de la acción
   * @returns {Promise<boolean>} true si el usuario confirmó, false si canceló
   */
  async confirmar(titulo, texto) {
    const result = await Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: 'var(--color-danger)',
      cancelButtonColor: 'var(--color-slate-500)'
    });
    return result.isConfirmed;
  },

  /**
   * Muestra una notificación de éxito
   * @param {string} mensaje - Mensaje a mostrar al usuario
   */
  exito(mensaje) {
    return Swal.fire({
      icon: 'success',
      title: mensaje,
      timer: 2000,
      showConfirmButton: false
    });
  },

  /**
   * Muestra una notificación de error
   * @param {string} titulo - Título del error a mostrar al usuario
   * @param {string} [texto] - Detalle opcional del error
   */
  error(titulo, texto) {
    return Swal.fire({
      icon: 'error',
      title: titulo,
      text: texto
    });
  },

  /**
   * Muestra una notificación informativa
   * @param {string} titulo - Título del mensaje
   * @param {string} mensaje - Cuerpo del mensaje
   */
  info(titulo, mensaje) {
    return Swal.fire({
      icon: 'info',
      title: titulo,
      text: mensaje
    });
  }
};