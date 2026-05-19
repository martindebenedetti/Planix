describe('Planix script functions', function () {
  beforeEach(function () {
    if (window.Planix && Array.isArray(Planix.proyectos)) {
      Planix.proyectos.splice(0, Planix.proyectos.length);
    }
  });

  it('validarNoVacio returns false for empty or non-string values', function () {
    expect(Planix.validarNoVacio('')).toBe(false);
    expect(Planix.validarNoVacio('   ')).toBe(false);
    expect(Planix.validarNoVacio(null)).toBe(false);
    expect(Planix.validarNoVacio('Proyecto')).toBe(true);
  });

  it('validarNombreUnico detects duplicate names case-insensitively', function () {
    const proyectos = [{ nombre: 'Plan A' }, { nombre: 'Plan B' }];
    expect(Planix.validarNombreUnico('Plan A', proyectos)).toBe(false);
    expect(Planix.validarNombreUnico('plan a', proyectos)).toBe(false);
    expect(Planix.validarNombreUnico('Plan C', proyectos)).toBe(true);
  });

  it('validarFormatoFecha accepts valid DD/MM/YYYY strings only', function () {
    expect(Planix.validarFormatoFecha('01/01/2024')).toBe(true);
    expect(Planix.validarFormatoFecha('1/1/2024')).toBe(false);
    expect(Planix.validarFormatoFecha('2024/01/01')).toBe(false);
  });

  it('parsearFecha returns a Date for valid dates and null otherwise', function () {
    const fechaValida = Planix.parsearFecha('15/08/2024');
    expect(fechaValida instanceof Date).toBe(true);
    expect(fechaValida.getFullYear()).toBe(2024);
    expect(Planix.parsearFecha('31/02/2024')).toBeNull();
    expect(Planix.parsearFecha('invalid')).toBeNull();
  });

  it('validarFechaFinPosterior returns true only when end date is after start date', function () {
    expect(Planix.validarFechaFinPosterior('01/01/2024', '02/01/2024')).toBe(true);
    expect(Planix.validarFechaFinPosterior('02/01/2024', '01/01/2024')).toBe(false);
    expect(Planix.validarFechaFinPosterior('01/01/2024', 'invalid')).toBe(false);
  });

  it('generarSiguienteId returns next available numeric id', function () {
    expect(Planix.generarSiguienteId([])).toBe(1);
    expect(Planix.generarSiguienteId([{ id: 1 }, { id: 5 }, { id: 3 }])).toBe(6);
    expect(Planix.generarSiguienteId(null)).toBe(1);
  });

  it('crearProyecto returns a normalized project object', function () {
    const proyecto = Planix.crearProyecto(1, ' Proyecto ', '01/01/2024', '15/01/2024');
    expect(proyecto.id).toBe(1);
    expect(proyecto.nombre).toBe('Proyecto');
    expect(proyecto.fechaInicio).toBe('01/01/2024');
    expect(proyecto.fechaFin).toBe('15/01/2024');
    expect(Array.isArray(proyecto.tareas)).toBe(true);
  });

  it('agregarProyecto appends a project to the list', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto', '01/01/2024', '15/01/2024');
    const lista = [];
    Planix.agregarProyecto(lista, proyecto);
    expect(lista.length).toBe(1);
    expect(lista[0].nombre).toBe('Proyecto');
  });

  it('buscarProyecto finds the correct project by name', function () {
    const lista = [Planix.crearProyecto(1, 'Alpha', '01/01/2024', '10/01/2024')];
    expect(Planix.buscarProyecto('alpha', lista).nombre).toBe('Alpha');
    expect(Planix.buscarProyecto('beta', lista)).toBeNull();
  });

  it('validarEstado maps numeric options to allowed states', function () {
    expect(Planix.validarEstado('1')).toBe('pendiente');
    expect(Planix.validarEstado('2')).toBe('en curso');
    expect(Planix.validarEstado('3')).toBe('completada');
    expect(Planix.validarEstado('4')).toBeNull();
  });

  it('crearTarea returns a normalized task object', function () {
    const tarea = Planix.crearTarea(1, ' Tarea ', 'Juan', 'pendiente');
    expect(tarea.id).toBe(1);
    expect(tarea.nombre).toBe('Tarea');
    expect(tarea.responsable).toBe('Juan');
    expect(tarea.estado).toBe('pendiente');
  });

  it('agregarTarea adds a task to the project', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto', '01/01/2024', '15/01/2024');
    const tarea = Planix.crearTarea(1, 'Tarea', 'Juan', 'pendiente');
    Planix.agregarTarea(proyecto, tarea);
    expect(proyecto.tareas.length).toBe(1);
    expect(proyecto.tareas[0].nombre).toBe('Tarea');
  });

  it('contarTareasCompletadas counts only completed tasks', function () {
    const tareas = [
      { estado: 'completada' },
      { estado: 'pendiente' },
      { estado: 'completada' }
    ];
    expect(Planix.contarTareasCompletadas(tareas)).toBe(2);
  });

  it('calcularPorcentajeAvance returns rounded percentage and zero for no tasks', function () {
    expect(Planix.calcularPorcentajeAvance(0, 0)).toBe(0);
    expect(Planix.calcularPorcentajeAvance(2, 5)).toBe(40);
  });

  it('determinarEstadoProyecto returns correct project state based on progress and deadline', function () {
    expect(Planix.determinarEstadoProyecto(100, '31/12/2099', new Date(2099, 11, 1))).toBe('Completado antes del plazo');
    expect(Planix.determinarEstadoProyecto(100, '01/01/2020', new Date(2020, 0, 2))).toBe('Completado');
    expect(Planix.determinarEstadoProyecto(50, '01/01/2020', new Date(2020, 0, 2))).toBe('Atrasado');
    expect(Planix.determinarEstadoProyecto(50, '31/12/2099', new Date(2024, 0, 1))).toBe('En curso');
  });

  it('calcularAvanceProyecto returns correct advancement report structure', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto', '01/01/2024', '31/12/2099');
    Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'T1', 'Juan', 'completada'));
    Planix.agregarTarea(proyecto, Planix.crearTarea(2, 'T2', 'Ana', 'pendiente'));
    const avance = Planix.calcularAvanceProyecto(proyecto);
    expect(avance.total).toBe(2);
    expect(avance.completadas).toBe(1);
    expect(avance.porcentaje).toBe(50);
    expect(avance.estadoProyecto).toBe('En curso');
  });

  it('filtrarTareas returns only tasks matching the filter or all tasks if filter is todas', function () {
    const tareas = [
      { id: 1, nombre: 'T1', responsable: 'Juan', estado: 'pendiente' },
      { id: 2, nombre: 'T2', responsable: 'Ana', estado: 'en curso' },
      { id: 3, nombre: 'T3', responsable: 'Sofía', estado: 'completada' }
    ];
    expect(Planix.filtrarTareas(tareas, 'pendiente').length).toBe(1);
    expect(Planix.filtrarTareas(tareas, 'todas').length).toBe(3);
  });

  it('construirTextoTarea returns formatted text for each task', function () {
    const tareas = [
      { id: 1, nombre: 'T1', responsable: 'Juan', estado: 'pendiente' }
    ];
    expect(Planix.construirTextoTarea(tareas)).toBe('1 - T1 - Juan - pendiente\n');
  });
});
