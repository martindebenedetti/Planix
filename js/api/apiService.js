const ApiService = {
  baseUrl: "https://jsonplaceholder.typicode.com",

  async fetchData(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`No se pudieron obtener datos de la API: ${error.message}`);
    }
  },

  async obtenerTodos(limite = 10) {
    return this.fetchData(`/todos?_limit=${limite}`);
  },

  async eliminarTodo(id) {
    try {
      const response = await fetch(`${this.baseUrl}/todos/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error(`No se pudo eliminar la tarea. Estado: ${response.status}`);
      }

      return true;
    } catch (error) {
      throw new Error(`Error al eliminar la tarea externa: ${error.message}`);
    }
  },

  validarTodo(todo) {
  return Boolean(
    todo &&
    typeof todo.id === "number" &&
    typeof todo.title === "string" &&
    todo.title.trim().length > 0 &&
    typeof todo.completed === "boolean" &&
    typeof todo.userId === "number"
  );
},

  mapearTodoATarea(todo) {
    return {
      idApi: todo.id,
      nombre: String(todo.title || "").trim(),
      responsable: `Usuario API ${todo.userId}`,
      estado: todo.completed ? "completada" : "pendiente"
    };
  },

  procesarTodos(todos) {
    if (!Array.isArray(todos)) {
      throw new Error("El formato de datos recibido desde la API no es válido.");
    }

    const tareasMapeadas = todos
      .filter(todo => this.validarTodo(todo))
      .map(todo => this.mapearTodoATarea(todo));

    const resumen = tareasMapeadas.reduce(
      function (acc, tarea) {
        acc.total += 1;

        if (tarea.estado === "completada") {
          acc.completadas += 1;
        } else {
          acc.pendientes += 1;
        }

        return acc;
      },
      { total: 0, completadas: 0, pendientes: 0 }
    );

    return {
      tareas: tareasMapeadas,
      resumen: resumen
    };
  }
};

window.ApiService = ApiService;