const ApiService = {
  baseUrl: "https://jsonplaceholder.typicode.com",

  async obtenerTodos(limite = 10) {
    const response = await fetch(`${this.baseUrl}/todos?_limit=${limite}`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return response.json();
  },

  async eliminarTodo(id) {
    const response = await fetch(`${this.baseUrl}/todos/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(`No se pudo eliminar la tarea. Estado: ${response.status}`);
    }

    return true;
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
    const tareasMapeadas = todos
      .filter(todo => todo && todo.title)
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