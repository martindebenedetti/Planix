describe("ApiService - Fetch & APIs", function () {
  describe("fetchData()", function () {
    it("obtiene datos exitosamente desde un endpoint", async function () {
      const mockData = [
        { id: 1, title: "Tarea API 1", completed: false, userId: 1 },
        { id: 2, title: "Tarea API 2", completed: true, userId: 1 }
      ];

      spyOn(window, "fetch").and.returnValue(Promise.resolve({
        ok: true,
        json: function () {
          return Promise.resolve(mockData);
        }
      }));

      const resultado = await ApiService.fetchData("/todos?_limit=2");

      expect(window.fetch).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/todos?_limit=2"
      );
      expect(resultado).toEqual(mockData);
    });

    it("lanza error cuando la respuesta HTTP no es correcta", async function () {
      spyOn(window, "fetch").and.returnValue(Promise.resolve({
      ok: false,
      status: 404
      }));

      await expectAsync(
     ApiService.fetchData("/todos/999999")
      ).toBeRejectedWithError(/Error HTTP: 404/);
    });
    
// RC13: Caso de prueba explícito simulando caída del servidor (Error 500)
    it("debe lanzar una excepción formateada cuando la API responde con un Error 500 del servidor", async function () {
      spyOn(window, "fetch").and.returnValue(Promise.resolve({
        ok: false,
        status: 500,
        statusText: "Internal Server Error"
      }));

      await expectAsync(
        ApiService.fetchData("/todos")
      ).toBeRejectedWithError(/Error HTTP: 500/);
    });

    it("maneja errores de red al fallar fetch", async function () {
      spyOn(window, "fetch").and.returnValue(
        Promise.reject(new Error("Error de red"))
      );

      await expectAsync(ApiService.fetchData("/todos"))
        .toBeRejectedWithError(
          Error,
          "No se pudieron obtener datos de la API: Error de red"
        );
    });
  });

  describe("obtenerTodos()", function () {
    it("consulta el endpoint /todos aplicando el límite indicado", async function () {
      spyOn(ApiService, "fetchData").and.returnValue(Promise.resolve([]));

      await ApiService.obtenerTodos(5);

      expect(ApiService.fetchData).toHaveBeenCalledWith("/todos?_limit=5");
    });
  });

  describe("mapearTodoATarea()", function () {
    it("transforma un todo de la API en una tarea compatible con Planix", function () {
      const todo = {
        id: 10,
        title: "Diseñar mockup inicial",
        completed: false,
        userId: 3
      };

      const tarea = ApiService.mapearTodoATarea(todo);

      expect(tarea.idApi).toBe(10);
      expect(tarea.nombre).toBe("Diseñar mockup inicial");
      expect(tarea.responsable).toBe("Usuario API 3");
      expect(tarea.estado).toBe("pendiente");
    });

    it("asigna estado completada cuando completed es true", function () {
      const todo = {
        id: 11,
        title: "Revisar documentación",
        completed: true,
        userId: 2
      };

      const tarea = ApiService.mapearTodoATarea(todo);

      expect(tarea.estado).toBe("completada");
    });
  });

  describe("procesarTodos()", function () {
    it("filtra datos inválidos, transforma con map y resume con reduce", function () {
      const todos = [
        { id: 1, title: "Tarea pendiente", completed: false, userId: 1 },
        { id: 2, title: "Tarea completada", completed: true, userId: 1 },
        { id: 3, title: "", completed: false, userId: 2 },
        { id: "4", title: "ID inválido", completed: false, userId: 2 },
        { id: 5, title: "Completed inválido", completed: "false", userId: 2 },
        null
      ];

      const resultado = ApiService.procesarTodos(todos);

      expect(resultado.tareas.length).toBe(2);
      expect(resultado.tareas[0].nombre).toBe("Tarea pendiente");
      expect(resultado.tareas[1].estado).toBe("completada");

      expect(resultado.resumen.total).toBe(2);
      expect(resultado.resumen.completadas).toBe(1);
      expect(resultado.resumen.pendientes).toBe(1);
    });
  });

  describe("eliminarTodo()", function () {
    it("simula la eliminación de una tarea externa correctamente", async function () {
      spyOn(window, "fetch").and.returnValue(Promise.resolve({
        ok: true
      }));

      const resultado = await ApiService.eliminarTodo(1);

      expect(window.fetch).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/todos/1",
        { method: "DELETE" }
      );
      expect(resultado).toBeTrue();
    });

    it("lanza error cuando falla la eliminación externa", async function () {
      spyOn(window, "fetch").and.returnValue(Promise.resolve({
        ok: false,
        status: 500
      }));

      await expectAsync(
        ApiService.eliminarTodo(1)
      ).toBeRejectedWithError(/No se pudo eliminar la tarea.*500/);
    });
  });
});