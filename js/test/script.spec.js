describe('Planix script functions', function () {
  beforeEach(function () {
    if (window.Planix && Array.isArray(Planix.proyectos)) {
      Planix.proyectos.splice(0, Planix.proyectos.length);
    }
  });

  // ========================================
  // Funciones de validación
  // ========================================

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

  // ========================================
  // Flujo 1 — Crear Proyecto
  // ========================================

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

  // ========================================
  // Flujo 2 — Agregar Tarea
  // ========================================

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

  // ========================================
  // Flujo 3 — Calcular Avance
  // ========================================

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
    Planix.agregarProyecto(Planix.proyectos, proyecto);
    Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'T1', 'Juan', 'completada'));
    Planix.agregarTarea(proyecto, Planix.crearTarea(2, 'T2', 'Ana', 'pendiente'));
    const avance = Planix.calcularAvanceProyecto(proyecto);
    expect(avance.total).toBe(2);
    expect(avance.completadas).toBe(1);
    expect(avance.porcentaje).toBe(50);
    expect(avance.estadoProyecto).toBe('En curso');
  });

  // ========================================
  // Flujo 4 — Filtrar Tareas
  // ========================================

  it('filtrarTareas returns only tasks matching the filter or all tasks if filter is todas', function () {
    const tareas = [
      { id: 1, nombre: 'T1', responsable: 'Juan', estado: 'pendiente' },
      { id: 2, nombre: 'T2', responsable: 'Ana', estado: 'en curso' },
      { id: 3, nombre: 'T3', responsable: 'Sofia', estado: 'completada' }
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

  it('validarFiltro maps numeric options to filter values', function () {
    expect(Planix.validarFiltro('1')).toBe('pendiente');
    expect(Planix.validarFiltro('2')).toBe('en curso');
    expect(Planix.validarFiltro('3')).toBe('completada');
    expect(Planix.validarFiltro('4')).toBe('todas');
    expect(Planix.validarFiltro('5')).toBeNull();
  });

  // ========================================
  // Tests de UI — ejecutarCrearProyecto
  // ========================================

  describe('ejecutarCrearProyecto - UI con spies', function () {
    beforeEach(function () {
      Planix.proyectos.splice(0, Planix.proyectos.length);
    });

    it('crea un proyecto correctamente cuando todos los datos son válidos', function () {
      spyOn(window, 'prompt').and.returnValues(
        'Proyecto Test',
        '01/01/2025',
        '31/12/2025'
      );
      spyOn(window, 'alert');

      Planix.ejecutarCrearProyecto();

      expect(Planix.proyectos.length).toBe(1);
      expect(Planix.proyectos[0].nombre).toBe('Proyecto Test');
      expect(window.alert).toHaveBeenCalledWith('Proyecto "Proyecto Test" creado correctamente.');
    });

    it('muestra error si el nombre está vacío', function () {
      spyOn(window, 'prompt').and.returnValue('');
      spyOn(window, 'alert');

      Planix.ejecutarCrearProyecto();

      expect(Planix.proyectos.length).toBe(0);
      expect(window.alert).toHaveBeenCalledWith('El nombre del proyecto no puede estar vacío.');
    });

    it('muestra error si el nombre ya existe', function () {
      Planix.agregarProyecto(Planix.proyectos, Planix.crearProyecto(1, 'Duplicado', '01/01/2025', '31/12/2025'));
      spyOn(window, 'prompt').and.returnValue('Duplicado');
      spyOn(window, 'alert');

      Planix.ejecutarCrearProyecto();

      expect(Planix.proyectos.length).toBe(1);
      expect(window.alert).toHaveBeenCalledWith('Ya existe un proyecto con ese nombre.');
    });

    it('muestra error si el formato de fecha inicio es inválido', function () {
      spyOn(window, 'prompt').and.returnValues('Proyecto', 'fecha-invalida');
      spyOn(window, 'alert');

      Planix.ejecutarCrearProyecto();

      expect(window.alert).toHaveBeenCalledWith('Formato de fecha inicio inválido. Usar DD/MM/AAAA.');
    });

    it('muestra error si la fecha fin es anterior a la de inicio', function () {
      spyOn(window, 'prompt').and.returnValues('Proyecto', '01/06/2025', '01/01/2025');
      spyOn(window, 'alert');

      Planix.ejecutarCrearProyecto();

      expect(window.alert).toHaveBeenCalledWith('La fecha de fin debe ser posterior a la de inicio.');
    });
  });

  // ========================================
  // Tests de UI — ejecutarAgregarTarea
  // ========================================

  describe('ejecutarAgregarTarea - UI con spies', function () {
    beforeEach(function () {
      Planix.proyectos.splice(0, Planix.proyectos.length);
    });

    it('muestra error si no hay proyectos', function () {
      spyOn(window, 'alert');

      Planix.ejecutarAgregarTarea();

      expect(window.alert).toHaveBeenCalledWith('No hay proyectos');
    });

    it('agrega una tarea correctamente a un proyecto existente', function () {
      Planix.agregarProyecto(Planix.proyectos, Planix.crearProyecto(1, 'Proyecto Test', '01/01/2025', '31/12/2025'));
      spyOn(window, 'alert');
      spyOn(window, 'prompt').and.returnValues(
        'Proyecto Test',
        'Tarea nueva',
        'Juan',
        '1'
      );

      Planix.ejecutarAgregarTarea();

      expect(Planix.proyectos[0].tareas.length).toBe(1);
      expect(window.alert).toHaveBeenCalledWith('Tarea agregada correctamente');
    });

    it('muestra error si el proyecto no existe', function () {
      Planix.agregarProyecto(Planix.proyectos, Planix.crearProyecto(1, 'Proyecto Test', '01/01/2025', '31/12/2025'));
      spyOn(window, 'alert');
      spyOn(window, 'prompt').and.returnValues('Proyecto Inexistente');

      Planix.ejecutarAgregarTarea();

      expect(window.alert).toHaveBeenCalledWith('Proyecto no encontrado');
    });

    it('muestra error si el estado ingresado es inválido', function () {
      Planix.agregarProyecto(Planix.proyectos, Planix.crearProyecto(1, 'Proyecto Test', '01/01/2025', '31/12/2025'));
      spyOn(window, 'alert');
      spyOn(window, 'prompt').and.returnValues(
        'Proyecto Test',
        'Tarea',
        'Juan',
        '9'
      );

      Planix.ejecutarAgregarTarea();

      expect(window.alert).toHaveBeenCalledWith('Estado inválido');
    });
  });

  // ========================================
  // Tests de UI — ejecutarCalcularAvance
  // ========================================

  describe('ejecutarCalcularAvance - UI con spies', function () {
    beforeEach(function () {
      Planix.proyectos.splice(0, Planix.proyectos.length);
    });

    it('muestra error si no hay proyectos', function () {
      spyOn(window, 'alert');

      Planix.ejecutarCalcularAvance();

      expect(window.alert).toHaveBeenCalledWith('No hay proyectos');
    });

    it('muestra error si el proyecto no tiene tareas', function () {
      Planix.agregarProyecto(Planix.proyectos, Planix.crearProyecto(1, 'Proyecto Test', '01/01/2025', '31/12/2025'));
      spyOn(window, 'alert');
      spyOn(window, 'prompt').and.returnValue('Proyecto Test');

      Planix.ejecutarCalcularAvance();

      expect(window.alert).toHaveBeenCalledWith('El proyecto no tiene tareas');
    });

    it('muestra el informe de avance correctamente', function () {
      const proyecto = Planix.crearProyecto(1, 'Proyecto Test', '01/01/2025', '31/12/2099');
      Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'T1', 'Juan', 'completada'));
      Planix.agregarTarea(proyecto, Planix.crearTarea(2, 'T2', 'Ana', 'pendiente'));
      Planix.agregarProyecto(Planix.proyectos, proyecto);
      spyOn(window, 'alert');
      spyOn(window, 'prompt').and.returnValue('Proyecto Test');

      Planix.ejecutarCalcularAvance();

      expect(window.alert).toHaveBeenCalledWith(
        'Avance: 50%\n1/2 tareas\nEstado: En curso'
      );
    });
  });

  // ========================================
  // Tests de UI — ejecutarFiltrarTareas
  // ========================================

  describe('ejecutarFiltrarTareas - UI con spies', function () {
    beforeEach(function () {
      Planix.proyectos.splice(0, Planix.proyectos.length);
    });

    it('muestra error si no hay proyectos', function () {
      spyOn(window, 'alert');

      Planix.ejecutarFiltrarTareas();

      expect(window.alert).toHaveBeenCalledWith('No hay proyectos');
    });

    it('filtra tareas por estado correctamente', function () {
      const proyecto = Planix.crearProyecto(1, 'Proyecto Test', '01/01/2025', '31/12/2025');
      Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'T1', 'Juan', 'pendiente'));
      Planix.agregarTarea(proyecto, Planix.crearTarea(2, 'T2', 'Ana', 'completada'));
      Planix.agregarProyecto(Planix.proyectos, proyecto);
      spyOn(window, 'alert');
      spyOn(window, 'prompt').and.returnValues('Proyecto Test', '1');

      Planix.ejecutarFiltrarTareas();

      expect(window.alert).toHaveBeenCalledWith('1 - T1 - Juan - pendiente\n');
    });

    it('muestra error si el filtro es inválido', function () {
      const proyecto = Planix.crearProyecto(1, 'Proyecto Test', '01/01/2025', '31/12/2025');
      Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'T1', 'Juan', 'pendiente'));
      Planix.agregarProyecto(Planix.proyectos, proyecto);
      spyOn(window, 'alert');
      spyOn(window, 'prompt').and.returnValues('Proyecto Test', '9');

      Planix.ejecutarFiltrarTareas();

      expect(window.alert).toHaveBeenCalledWith('Opción de filtro inválida');
    });
  });

  // ========================================
  // Tests de UI — mostrarMenuPrincipal
  // ========================================

  describe('mostrarMenuPrincipal - UI con spies', function () {
    beforeEach(function () {
      Planix.proyectos.splice(0, Planix.proyectos.length);
    });

    it('sale del menú cuando se elige opción 0', function () {
      spyOn(window, 'prompt').and.returnValue('0');
      spyOn(window, 'alert');

      Planix.mostrarMenuPrincipal();

      expect(window.alert).toHaveBeenCalledWith('Saliendo de Planix.');
    });

    it('muestra alerta de opción inválida cuando se ingresa opción desconocida luego sale', function () {
      spyOn(window, 'prompt').and.returnValues('9', '0');
      spyOn(window, 'alert');

      Planix.mostrarMenuPrincipal();

      expect(window.alert).toHaveBeenCalledWith('Opción inválida.');
    });

    it('reconoce opción 1 para crear proyecto (sin ejecutar)', function () {
      let llamado = false;
      spyOn(Planix, 'ejecutarCrearProyecto').and.callFake(() => {
        llamado = true;
      });
      spyOn(window, 'prompt').and.returnValues('1', '0');
      spyOn(window, 'alert');

      Planix.mostrarMenuPrincipal();

      expect(llamado).toBe(true);
    });

    it('reconoce opción 2 para agregar tarea (sin ejecutar)', function () {
      let llamado = false;
      spyOn(Planix, 'ejecutarAgregarTarea').and.callFake(() => {
        llamado = true;
      });
      spyOn(window, 'prompt').and.returnValues('2', '0');
      spyOn(window, 'alert');

      Planix.mostrarMenuPrincipal();

      expect(llamado).toBe(true);
    });
  });

});
