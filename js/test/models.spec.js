describe('Tarea', function () {
  it('crea una tarea valida', function () {
    const tarea = new Tarea('Desarrollo', 'Ana', 'pendiente');

    expect(tarea instanceof Tarea).toBeTruthy();
    expect(tarea.nombre).toBe('Desarrollo');
    expect(tarea.responsable).toBe('Ana');
    expect(tarea.estado).toBe('pendiente');
  });

  it('normaliza nombre y responsable con trim', function () {
    const tarea = new Tarea('  Diseño UI  ', '  Mora  ', 'en curso');

    expect(tarea.nombre).toBe('Diseño UI');
    expect(tarea.responsable).toBe('Mora');
  });

  it('asigna estado "pendiente" por defecto', function () {
    const tarea = new Tarea('Testing', 'Luis');

    expect(tarea.estado).toBe('pendiente');
  });

  it('rechaza nombre vacio', function () {
    expect(function () {
      new Tarea('   ', 'Ana', 'pendiente');
    }).toThrow();
  });

  it('rechaza responsable vacio', function () {
    expect(function () {
      new Tarea('Desarrollo', '   ', 'pendiente');
    }).toThrow();
  });

  it('rechaza estado invalido', function () {
    expect(function () {
      new Tarea('Desarrollo', 'Ana', 'bloqueada');
    }).toThrow();
  });

  it('cambia el estado correctamente', function () {
    const tarea = new Tarea('Desarrollo', 'Ana', 'pendiente');

    tarea.cambiarEstado('en curso');

    expect(tarea.estado).toBe('en curso');
  });

  it('rechaza un cambio de estado invalido', function () {
    const tarea = new Tarea('Desarrollo', 'Ana', 'pendiente');

    expect(function () {
      tarea.cambiarEstado('finalizada');
    }).toThrow();
  });

  it('verifica esValida()', function () {
    const tareaValida = new Tarea(
      'Planificacion',
      'Mora',
      'completada'
    );

    const tareaInvalida = new Tarea(
      'Planificacion',
      'Mora',
      'completada'
    );

    tareaInvalida.nombre = '';

    expect(tareaValida.esValida()).toBeTruthy();
    expect(tareaInvalida.esValida()).toBeFalsy();
  });

  it('verifica toJSON()', function () {
    const tarea = new Tarea('Revisión', 'Luis', 'en curso');

    expect(tarea.toJSON()).toEqual({
      nombre: 'Revisión',
      responsable: 'Luis',
      estado: 'en curso'
    });
  });

  it('verifica fromJSON()', function () {
    const json = {
      nombre: 'Documentacion',
      responsable: 'Ana',
      estado: 'pendiente'
    };

    const tarea = Tarea.fromJSON(json);

    expect(tarea instanceof Tarea).toBeTruthy();
    expect(tarea.toJSON()).toEqual(json);
  });

  it('rechaza JSON invalido', function () {
    expect(function () {
      Tarea.fromJSON(null);
    }).toThrow();

    expect(function () {
      Tarea.fromJSON(42);
    }).toThrow();
  });
});

describe('Proyecto', function () {
  it('crea un proyecto valido', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    expect(proyecto instanceof Proyecto).toBeTruthy();
    expect(proyecto.nombre).toBe('Planix');
    expect(proyecto.fechaInicio).toBe('01/01/2026');
    expect(proyecto.fechaFin).toBe('31/12/2026');
    expect(Array.isArray(proyecto.tareas)).toBeTruthy();
    expect(proyecto.tareas.length).toBe(0);
  });

  it('rechaza nombre vacio', function () {
    expect(function () {
      new Proyecto('   ', '01/01/2026', '31/12/2026');
    }).toThrow();
  });

  it('rechaza formato de fecha invalido con un mensaje descriptivo', function () {
    expect(function () {
      new Proyecto(
        'Planix',
        '2026-01-01',
        '31/12/2026'
      );
    }).toThrowError(
      Error,
      'Formato de fecha de inicio inválido. Debe ser DD/MM/AAAA.'
    );
  });

  it('rechaza fecha final anterior o igual a la inicial', function () {
    expect(function () {
      new Proyecto(
        'Planix',
        '01/01/2026',
        '01/01/2026'
      );
    }).toThrowError(
      Error,
      'La fecha de fin debe ser posterior a la fecha de inicio.'
    );

    expect(function () {
      new Proyecto(
        'Planix',
        '31/12/2026',
        '01/12/2026'
      );
    }).toThrowError(
      Error,
      'La fecha de fin debe ser posterior a la fecha de inicio.'
    );
  });

  it('agrega una instancia valida de Tarea', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    const tarea = new Tarea(
      'Desarrollo',
      'Ana',
      'pendiente'
    );

    proyecto.agregarTarea(tarea);

    expect(proyecto.tareas.length).toBe(1);
    expect(proyecto.tareas[0]).toBe(tarea);
  });

  it('rechaza objetos que no sean instancia de Tarea', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    expect(function () {
      proyecto.agregarTarea({
        nombre: 'Bugfix'
      });
    }).toThrow();
  });

  it('retorna avance 0 cuando no hay tareas', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    expect(proyecto.calcularAvance()).toBe(0);
  });

  it('calcula correctamente el porcentaje de tareas completadas', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    proyecto.agregarTarea(
      new Tarea('Tarea 1', 'Ana', 'completada')
    );

    proyecto.agregarTarea(
      new Tarea('Tarea 2', 'Luis', 'pendiente')
    );

    proyecto.agregarTarea(
      new Tarea('Tarea 3', 'Mora', 'completada')
    );

    expect(
      proyecto.calcularAvance()
    ).toBeCloseTo((2 / 3) * 100, 5);
  });

  it('verifica determinarEstado()', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2099'
    );

    proyecto.agregarTarea(
      new Tarea('Tarea 1', 'Ana', 'pendiente')
    );

    const estado = proyecto.determinarEstado();

    expect([
      'En curso',
      'Atrasado',
      'Completado',
      'Completado antes del plazo'
    ]).toContain(estado);
  });

  it('verifica toJSON()', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    proyecto.agregarTarea(
      new Tarea('Tarea 1', 'Ana', 'completada')
    );

    expect(proyecto.toJSON()).toEqual({
      nombre: 'Planix',
      fechaInicio: '01/01/2026',
      fechaFin: '31/12/2026',
      tareas: [
        {
          nombre: 'Tarea 1',
          responsable: 'Ana',
          estado: 'completada'
        }
      ]
    });
  });

  it('verifica fromJSON()', function () {
    const json = {
      nombre: 'Planix',
      fechaInicio: '01/01/2026',
      fechaFin: '31/12/2026',
      tareas: [
        {
          nombre: 'Tarea 1',
          responsable: 'Ana',
          estado: 'pendiente'
        }
      ]
    };

    const proyecto = Proyecto.fromJSON(json);

    expect(proyecto instanceof Proyecto).toBeTruthy();
    expect(proyecto.toJSON()).toEqual(json);
  });

  it('rechaza JSON invalido', function () {
    expect(function () {
      Proyecto.fromJSON(null);
    }).toThrow();

    expect(function () {
      Proyecto.fromJSON(123);
    }).toThrow();
  });
});

describe('GestorProyectos', function () {
  let gestor;

  beforeEach(function () {
    gestor = new GestorProyectos();
  });

  it('inicia con una coleccion vacia', function () {
    expect(
      Array.isArray(gestor.proyectos)
    ).toBeTruthy();

    expect(
      gestor.proyectos.length
    ).toBe(0);
  });

  it('agrega una instancia valida de Proyecto', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    gestor.agregar(proyecto);

    expect(gestor.proyectos.length).toBe(1);
    expect(gestor.proyectos[0]).toBe(proyecto);
  });

  it('rechaza objetos que no sean Proyecto', function () {
    expect(function () {
      gestor.agregar({
        nombre: 'Fake'
      });
    }).toThrow();
  });

  it('rechaza proyectos duplicados ignorando mayusculas y espacios', function () {
    const proyecto1 = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    gestor.agregar(proyecto1);

    expect(function () {
      const proyecto2 = new Proyecto(
        '  planix  ',
        '01/01/2027',
        '31/12/2027'
      );

      gestor.agregar(proyecto2);
    }).toThrow();
  });

  it('busca un proyecto por nombre normalizado', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    gestor.agregar(proyecto);

    expect(
      gestor.buscar('  planix  ')
    ).toBe(proyecto);
  });

  it('retorna null cuando el proyecto no existe', function () {
    expect(
      gestor.buscar('No Existe')
    ).toBeNull();
  });

  it('devuelve una copia mediante listar()', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    gestor.agregar(proyecto);

    const copia = gestor.listar();

    expect(copia).toEqual([proyecto]);
    expect(copia).not.toBe(gestor.proyectos);
  });

  it('filtra tareas por pendiente, en curso, completada y todas', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    proyecto.agregarTarea(
      new Tarea('T1', 'Ana', 'pendiente')
    );

    proyecto.agregarTarea(
      new Tarea('T2', 'Luis', 'en curso')
    );

    proyecto.agregarTarea(
      new Tarea('T3', 'Mora', 'completada')
    );

    gestor.agregar(proyecto);

    expect(
      gestor.filtrarTareas(proyecto, 'pendiente')
    ).toEqual([proyecto.tareas[0]]);

    expect(
      gestor.filtrarTareas(proyecto, 'en curso')
    ).toEqual([proyecto.tareas[1]]);

    expect(
      gestor.filtrarTareas(proyecto, 'completada')
    ).toEqual([proyecto.tareas[2]]);

    expect(
      gestor.filtrarTareas(proyecto, 'todas')
    ).toEqual(proyecto.tareas.slice());
  });

  it('rechaza criterios invalidos', function () {
    const proyecto = new Proyecto(
      'Planix',
      '01/01/2026',
      '31/12/2026'
    );

    gestor.agregar(proyecto);

    expect(function () {
      gestor.filtrarTareas(
        proyecto,
        'bloqueada'
      );
    }).toThrow();
  });

  it('expone un metodo toJSON() para serializar el gestor', function () {
    expect(
      typeof gestor.toJSON
    ).toBe('function');
  });

  it('expone un metodo estatico fromJSON() para reconstruir el gestor', function () {
    expect(
      typeof GestorProyectos.fromJSON
    ).toBe('function');
  });
});
