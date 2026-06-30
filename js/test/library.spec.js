describe("Notificaciones - Pruebas de Integración de Librería Externa (SweetAlert2)", function () {
  beforeEach(function () {
    if (typeof Swal === "undefined") {
      throw new Error("SweetAlert2 no está cargada en el entorno de pruebas.");
    }
  });

  describe("Inicialización y Configuración", function () {
    it("debe disparar la configuración adecuada de SweetAlert al invocar una notificación de éxito", function () {
      spyOn(Swal, "fire").and.returnValue(Promise.resolve());

      Notificaciones.exito("Operación realizada de forma correcta");

      expect(Swal.fire).toHaveBeenCalledWith(jasmine.objectContaining({
        icon: "success",
        title: "Operación realizada de forma correcta",
        timer: 2000,
        showConfirmButton: false
      }));
    });

    it("debe configurar adecuadamente la estructura del modal ante eventos de error", function () {
      spyOn(Swal, "fire");

      Notificaciones.error("Fallo de validación de campos");

      expect(Swal.fire).toHaveBeenCalledWith(jasmine.objectContaining({
        icon: "error",
        title: "Ocurrió un error",
        text: "Fallo de validación de campos"
      }));
    });
  });

  describe("Funcionalidad Principal e Interacción Asíncrona", function () {
    it("debe retornar true cuando el usuario hace clic en el botón de confirmación del modal destructivo", async function () {
      spyOn(Swal, "fire").and.returnValue(Promise.resolve({ isConfirmed: true }));

      const respuestaUsuario = await Notificaciones.confirmar("¿Eliminar?", "Esta acción es irreversible");

      expect(Swal.fire).toHaveBeenCalledWith(jasmine.objectContaining({
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirmar"
      }));
      expect(respuestaUsuario).toBe(true);
    });

    it("debe retornar false cuando el usuario cancela o cierra el modal destructivo", async function () {
      spyOn(Swal, "fire").and.returnValue(Promise.resolve({ isConfirmed: false }));

      const respuestaUsuario = await Notificaciones.confirmar("¿Eliminar?", "Esta acción es irreversible");

      expect(respuestaUsuario).toBe(false);
    });

    //RC6: Test de manejo de error si la librería falla internamente
    it("debe propagar errores si SweetAlert2 rechaza la promesa internamente", async function () {
      spyOn(Swal, "fire").and.returnValue(Promise.reject(new Error("Fallo interno del modal")));

      await expectAsync(
        Notificaciones.confirmar("¿Eliminar?", "Acción irreversible")
      ).toBeRejectedWithError("Fallo interno del modal");
    });
  });
});