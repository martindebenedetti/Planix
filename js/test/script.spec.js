describe('Planix - flujo 1: crear proyecto', function () {
  beforeEach(function () {
    Planix.proyectos.splice(0, Planix.proyectos.length);
  });

  it('crea un objeto proyecto valido con nombre normalizado y tareas vacias', function () {
    const proyecto = Planix.crearProyecto(1, ' Proyecto Alpha ', '01/01/2026', '31/12/2026');

    expect(proyecto).toEqual({
      id: 1,
      nombre: 'Proyecto Alpha',
      fechaInicio: '01/01/2026',
      fechaFin: '31/12/2026',
      tareas: []
    });
    expect(Array.isArray(proyecto.tareas)).toBeTruthy();
  });

  it('valida nombre no vacio, formato de fechas y fecha fin posterior', function () {
    expect(Planix.validarNoVacio('Planix')).toBeTruthy();
    expect(Planix.validarNoVacio('   ')).toBeFalsy();
    expect(Planix.validarFormatoFecha('03/06/2026')).toBeTruthy();
    expect(Planix.validarFormatoFecha('2026-06-03')).toBeFalsy();
    expect(Planix.validarFechaFinPosterior('01/06/2026', '03/06/2026')).toBe(true);
  });

  it('detecta proyectos duplicados sin importar mayusculas o espacios', function () {
    const lista = [
      Planix.crearProyecto(1, 'Proyecto Base', '01/01/2026', '31/01/2026')
    ];

    expect(Planix.validarNombreUnico(' proyecto base ', lista)).toBe(false);
    expect(Planix.validarNombreUnico('Proyecto Nuevo', lista)).toBe(true);
    expect(lista.map(function (proyecto) { return proyecto.nombre; })).toContain('Proyecto Base');
  });

  it('agrega proyectos a un array y calcula el siguiente id disponible', function () {
    const proyecto = Planix.crearProyecto(3, 'Lanzamiento', '01/02/2026', '28/02/2026');

    Planix.agregarProyecto(Planix.proyectos, proyecto);

    expect(Planix.proyectos.length).toBe(1);
    expect(Planix.proyectos[0]).toEqual(proyecto);
    expect(Planix.generarSiguienteId([{ id: 1 }, { id: 5 }, { id: 2 }])).toBe(6);
  });

  it('lanza error cuando crearProyecto recibe un nombre que no permite trim', function () {
    expect(function () {
      Planix.crearProyecto(1, null, '01/01/2026', '31/01/2026');
    }).toThrow();
  });
});

describe('Planix - flujo 2: agregar tarea a un proyecto', function () {
  let proyecto;

  beforeEach(function () {
    proyecto = Planix.crearProyecto(1, 'Proyecto Tareas', '01/01/2026', '31/12/2026');
  });

  it('busca proyectos por nombre normalizado', function () {
    const lista = [
      proyecto,
      Planix.crearProyecto(2, 'Proyecto Secundario', '01/02/2026', '28/02/2026')
    ];

    expect(Planix.buscarProyecto(' proyecto tareas ', lista)).toEqual(proyecto);
    expect(Planix.buscarProyecto('No Existe', lista)).toBe(null);
    expect(Planix.buscarProyecto(null, lista)).toBeFalsy();
  });

  it('valida las opciones de estado permitidas', function () {
    expect(Planix.validarEstado('1')).toBe('pendiente');
    expect(Planix.validarEstado('2')).toBe('en curso');
    expect(Planix.validarEstado('3')).toBe('completada');
    expect(Planix.validarEstado('9')).toBe(null);
  });

  it('crea una tarea como objeto normalizado', function () {
    const tarea = Planix.crearTarea(1, '  Definir alcance ', ' Ana ', 'pendiente');

    expect(tarea).toEqual({
      id: 1,
      nombre: 'Definir alcance',
      responsable: 'Ana',
      estado: 'pendiente'
    });
    expect(tarea.estado).toBe('pendiente');
  });

  it('agrega tareas al array interno del proyecto', function () {
    const tarea = Planix.crearTarea(1, 'Analisis', 'Juan', 'en curso');

    const proyectoActualizado = Planix.agregarTarea(proyecto, tarea);

    expect(proyectoActualizado).toEqual(proyecto);
    expect(proyecto.tareas.length).toBe(1);
    expect(proyecto.tareas).toContain(tarea);
  });

  it('construye un listado textual con los proyectos disponibles', function () {
    const texto = Planix.construirListaProyectos([
      proyecto,
      Planix.crearProyecto(2, 'Proyecto Dos', '01/02/2026', '28/02/2026')
    ]);

    expect(texto).toContain('- Proyecto Tareas');
    expect(texto).toContain('- Proyecto Dos');
    expect(texto.length > 0).toBeTruthy();
  });
});

describe('Planix - flujo 3: calcular avance del proyecto', function () {
  it('cuenta solo tareas completadas dentro de un array', function () {
    const tareas = [
      { estado: 'completada' },
      { estado: 'pendiente' },
      { estado: 'completada' },
      { estado: 'en curso' }
    ];

    expect(Planix.contarTareasCompletadas(tareas)).toBe(2);
  });

  it('calcula porcentajes redondeados y maneja arrays vacios', function () {
    expect(Planix.calcularPorcentajeAvance(0, 0)).toBe(0);
    expect(Planix.calcularPorcentajeAvance(1, 3)).toBe(33);
    expect(Planix.calcularPorcentajeAvance(2, 4)).toBe(50);
  });

  it('determina estado completado, atrasado o en curso segun fecha y avance', function () {
    expect(Planix.determinarEstadoProyecto(100, '31/12/2026', new Date(2026, 5, 3))).toBe('Completado antes del plazo');
    expect(Planix.determinarEstadoProyecto(50, '01/01/2026', new Date(2026, 5, 3))).toBe('Atrasado');
    expect(Planix.determinarEstadoProyecto(50, '31/12/2026', new Date(2026, 5, 3))).toBe('En curso');
  });

  it('devuelve un resumen de avance con totales, porcentaje y estado', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto Avance', '01/01/2026', '31/12/2099');
    Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'T1', 'Ana', 'completada'));
    Planix.agregarTarea(proyecto, Planix.crearTarea(2, 'T2', 'Luis', 'pendiente'));

    const avance = Planix.calcularAvanceProyecto(proyecto);

    expect(avance.total).toBe(2);
    expect(avance.completadas).toBe(1);
    expect(avance.porcentaje).toBe(50);
    expect(avance.estadoProyecto).toBe('En curso');
  });

  it('devuelve fecha invalida cuando la fecha de fin no se puede parsear', function () {
    expect(Planix.determinarEstadoProyecto(20, 'fecha', new Date(2026, 5, 3))).toBe('Fecha invalida'.replace('invalida', 'inválida'));
  });
});

describe('Planix - flujo 4: listar y filtrar tareas', function () {
  let tareas;

  beforeEach(function () {
    tareas = [
      { id: 1, nombre: 'Backlog', responsable: 'Ana', estado: 'pendiente' },
      { id: 2, nombre: 'API', responsable: 'Luis', estado: 'en curso' },
      { id: 3, nombre: 'QA', responsable: 'Mora', estado: 'completada' }
    ];
  });

  it('filtra tareas por estado pendiente, en curso y completada', function () {
    expect(Planix.filtrarTareas(tareas, 'pendiente')).toEqual([tareas[0]]);
    expect(Planix.filtrarTareas(tareas, 'en curso')).toEqual([tareas[1]]);
    expect(Planix.filtrarTareas(tareas, 'completada')).toEqual([tareas[2]]);
  });

  it('devuelve todas las tareas cuando el filtro es todas', function () {
    const resultado = Planix.filtrarTareas(tareas, 'todas');

    expect(resultado).toEqual(tareas);
    expect(resultado.length).toBe(3);
    expect(resultado).toContain(tareas[1]);
  });

  it('devuelve un array vacio si no hay coincidencias', function () {
    const resultado = Planix.filtrarTareas(tareas, 'bloqueada');

    expect(resultado).toEqual([]);
    expect(resultado.length).toBe(0);
    expect(resultado.length > 0).toBeFalsy();
  });

  it('valida opciones de filtro numericas', function () {
    expect(Planix.validarFiltro('1')).toBe('pendiente');
    expect(Planix.validarFiltro('2')).toBe('en curso');
    expect(Planix.validarFiltro('3')).toBe('completada');
    expect(Planix.validarFiltro('4')).toBe('todas');
    expect(Planix.validarFiltro('0')).toBe(null);
  });

  it('construye texto legible para un listado de tareas', function () {
    const texto = Planix.construirTextoTarea([tareas[0], tareas[2]]);

    expect(texto).toContain('1 - Backlog - Ana - pendiente');
    expect(texto).toContain('3 - QA - Mora - completada');
    expect(texto).toBe('1 - Backlog - Ana - pendiente\n3 - QA - Mora - completada\n');
  });
});

describe('Planix UI - ejecutarCrearProyecto con spies', function () {
  beforeEach(function () {
    Planix.proyectos.splice(0, Planix.proyectos.length);
    spyOn(window, 'alert');
  });

  it('crea un proyecto desde prompts validos', function () {
    spyOn(window, 'prompt').and.returnValues('Proyecto UI', '01/01/2026', '31/12/2026');

    Planix.ejecutarCrearProyecto();

    expect(Planix.proyectos.length).toBe(1);
    expect(Planix.proyectos[0].nombre).toBe('Proyecto UI');
    expect(window.alert).toHaveBeenCalledWith('Proyecto "Proyecto UI" creado correctamente.');
  });

  it('alerta cuando el nombre esta vacio', function () {
    spyOn(window, 'prompt').and.returnValue('   ');

    Planix.ejecutarCrearProyecto();

    expect(Planix.proyectos.length).toBe(0);
    expect(window.alert).toHaveBeenCalledWith('El nombre del proyecto no puede estar vacío.');
  });

  it('alerta cuando el proyecto esta duplicado', function () {
    Planix.agregarProyecto(Planix.proyectos, Planix.crearProyecto(1, 'Duplicado', '01/01/2026', '31/12/2026'));
    spyOn(window, 'prompt').and.returnValue('duplicado');

    Planix.ejecutarCrearProyecto();

    expect(Planix.proyectos.length).toBe(1);
    expect(window.alert).toHaveBeenCalledWith('Ya existe un proyecto con ese nombre.');
  });

  it('alerta cuando la fecha de inicio tiene formato invalido', function () {
    spyOn(window, 'prompt').and.returnValues('Proyecto', '2026-01-01');

    Planix.ejecutarCrearProyecto();

    expect(window.alert).toHaveBeenCalledWith('Formato de fecha inicio inválido. Usar DD/MM/AAAA.');
  });

  it('alerta cuando la fecha fin no es posterior a la inicial', function () {
    spyOn(window, 'prompt').and.returnValues('Proyecto', '10/01/2026', '01/01/2026');

    Planix.ejecutarCrearProyecto();

    expect(window.alert).toHaveBeenCalledWith('La fecha de fin debe ser posterior a la de inicio.');
  });
});

describe('Planix UI - ejecutarAgregarTarea con spies', function () {
  beforeEach(function () {
    Planix.proyectos.splice(0, Planix.proyectos.length);
    spyOn(window, 'alert');
  });

  it('alerta cuando no hay proyectos disponibles', function () {
    Planix.ejecutarAgregarTarea();

    expect(window.alert).toHaveBeenCalledWith('No hay proyectos');
  });

  it('agrega una tarea a un proyecto existente', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto UI', '01/01/2026', '31/12/2026');
    Planix.agregarProyecto(Planix.proyectos, proyecto);
    spyOn(window, 'prompt').and.returnValues('Proyecto UI', 'Tarea UI', 'Ana', '2');

    Planix.ejecutarAgregarTarea();

    expect(proyecto.tareas.length).toBe(1);
    expect(proyecto.tareas[0].estado).toBe('en curso');
    expect(window.alert).toHaveBeenCalledWith('Tarea agregada correctamente');
  });

  it('alerta cuando el proyecto solicitado no existe', function () {
    Planix.agregarProyecto(Planix.proyectos, Planix.crearProyecto(1, 'Proyecto UI', '01/01/2026', '31/12/2026'));
    spyOn(window, 'prompt').and.returnValue('Inexistente');

    Planix.ejecutarAgregarTarea();

    expect(window.alert).toHaveBeenCalledWith('Proyecto no encontrado');
  });

  it('alerta cuando faltan campos obligatorios de tarea', function () {
    Planix.agregarProyecto(Planix.proyectos, Planix.crearProyecto(1, 'Proyecto UI', '01/01/2026', '31/12/2026'));
    spyOn(window, 'prompt').and.returnValues('Proyecto UI', '', 'Ana', '1');

    Planix.ejecutarAgregarTarea();

    expect(window.alert).toHaveBeenCalledWith('Campos incompletos');
  });

  it('alerta cuando el estado ingresado es invalido', function () {
    Planix.agregarProyecto(Planix.proyectos, Planix.crearProyecto(1, 'Proyecto UI', '01/01/2026', '31/12/2026'));
    spyOn(window, 'prompt').and.returnValues('Proyecto UI', 'Tarea', 'Ana', '9');

    Planix.ejecutarAgregarTarea();

    expect(window.alert).toHaveBeenCalledWith('Estado inválido');
  });
});

describe('Planix UI - ejecutarCalcularAvance con spies', function () {
  beforeEach(function () {
    Planix.proyectos.splice(0, Planix.proyectos.length);
    spyOn(window, 'alert');
  });

  it('alerta cuando no hay proyectos', function () {
    Planix.ejecutarCalcularAvance();

    expect(window.alert).toHaveBeenCalledWith('No hay proyectos');
  });

  it('alerta cuando el proyecto no tiene tareas', function () {
    Planix.agregarProyecto(Planix.proyectos, Planix.crearProyecto(1, 'Proyecto Vacio', '01/01/2026', '31/12/2026'));
    spyOn(window, 'prompt').and.returnValue('Proyecto Vacio');

    Planix.ejecutarCalcularAvance();

    expect(window.alert).toHaveBeenCalledWith('El proyecto no tiene tareas');
  });

  it('muestra informe de avance para un proyecto con tareas', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto Avance', '01/01/2026', '31/12/2099');
    Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'T1', 'Ana', 'completada'));
    Planix.agregarTarea(proyecto, Planix.crearTarea(2, 'T2', 'Luis', 'pendiente'));
    Planix.agregarProyecto(Planix.proyectos, proyecto);
    spyOn(window, 'prompt').and.returnValue('Proyecto Avance');

    Planix.ejecutarCalcularAvance();

    expect(window.alert).toHaveBeenCalledWith('Avance: 50%\n1/2 tareas\nEstado: En curso');
  });
});

describe('Planix UI - ejecutarFiltrarTareas con spies', function () {
  beforeEach(function () {
    Planix.proyectos.splice(0, Planix.proyectos.length);
    spyOn(window, 'alert');
  });

  it('alerta cuando no hay proyectos', function () {
    Planix.ejecutarFiltrarTareas();

    expect(window.alert).toHaveBeenCalledWith('No hay proyectos');
  });

  it('lista tareas filtradas por estado', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto Filtro', '01/01/2026', '31/12/2026');
    Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'Pendiente', 'Ana', 'pendiente'));
    Planix.agregarTarea(proyecto, Planix.crearTarea(2, 'Finalizada', 'Luis', 'completada'));
    Planix.agregarProyecto(Planix.proyectos, proyecto);
    spyOn(window, 'prompt').and.returnValues('Proyecto Filtro', '1');

    Planix.ejecutarFiltrarTareas();

    expect(window.alert).toHaveBeenCalledWith('1 - Pendiente - Ana - pendiente\n');
  });

  it('alerta cuando el filtro es invalido', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto Filtro', '01/01/2026', '31/12/2026');
    Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'Pendiente', 'Ana', 'pendiente'));
    Planix.agregarProyecto(Planix.proyectos, proyecto);
    spyOn(window, 'prompt').and.returnValues('Proyecto Filtro', '9');

    Planix.ejecutarFiltrarTareas();

    expect(window.alert).toHaveBeenCalledWith('Opción de filtro inválida');
  });

  it('alerta cuando no hay coincidencias para el filtro', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto Filtro', '01/01/2026', '31/12/2026');
    Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'Pendiente', 'Ana', 'pendiente'));
    Planix.agregarProyecto(Planix.proyectos, proyecto);
    spyOn(window, 'prompt').and.returnValues('Proyecto Filtro', '3');

    Planix.ejecutarFiltrarTareas();

    expect(window.alert).toHaveBeenCalledWith('No hay tareas para ese filtro');
  });
});

describe('Planix UI - mostrarMenuPrincipal con spies', function () {
  beforeEach(function () {
    Planix.proyectos.splice(0, Planix.proyectos.length);
    spyOn(window, 'alert');
  });

  it('sale del menu cuando el usuario elige 0', function () {
    spyOn(window, 'prompt').and.returnValue('0');

    Planix.mostrarMenuPrincipal();

    expect(window.alert).toHaveBeenCalledWith('Saliendo de Planix.');
  });

  it('alerta opcion invalida y permite salir en la siguiente iteracion', function () {
    spyOn(window, 'prompt').and.returnValues('9', '0');

    Planix.mostrarMenuPrincipal();

    expect(window.alert).toHaveBeenCalledWith('Opción inválida.');
    expect(window.alert).toHaveBeenCalledWith('Saliendo de Planix.');
  });

  it('ejecuta la opcion 1 creando un proyecto y luego sale', function () {
    spyOn(window, 'prompt').and.returnValues('1', 'Proyecto Menu', '01/01/2026', '31/12/2026', '0');

    Planix.mostrarMenuPrincipal();

    expect(Planix.proyectos.length).toBe(1);
    expect(Planix.proyectos[0].nombre).toBe('Proyecto Menu');
    expect(window.alert).toHaveBeenCalledWith('Saliendo de Planix.');
  });

  it('ejecuta la opcion 2 agregando una tarea y luego sale', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto Menu', '01/01/2026', '31/12/2026');
    Planix.agregarProyecto(Planix.proyectos, proyecto);
    spyOn(window, 'prompt').and.returnValues('2', 'Proyecto Menu', 'Tarea Menu', 'Ana', '1', '0');

    Planix.mostrarMenuPrincipal();

    expect(proyecto.tareas.length).toBe(1);
    expect(proyecto.tareas[0].nombre).toBe('Tarea Menu');
    expect(window.alert).toHaveBeenCalledWith('Tarea agregada correctamente');
  });

  it('ejecuta la opcion 3 mostrando avance y luego sale', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto Menu', '01/01/2026', '31/12/2099');
    Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'T1', 'Ana', 'completada'));
    Planix.agregarProyecto(Planix.proyectos, proyecto);
    spyOn(window, 'prompt').and.returnValues('3', 'Proyecto Menu', '0');

    Planix.mostrarMenuPrincipal();

    expect(window.alert).toHaveBeenCalledWith('Avance: 100%\n1/1 tareas\nEstado: Completado antes del plazo');
  });

  it('ejecuta la opcion 4 listando tareas filtradas y luego sale', function () {
    const proyecto = Planix.crearProyecto(1, 'Proyecto Menu', '01/01/2026', '31/12/2026');
    Planix.agregarTarea(proyecto, Planix.crearTarea(1, 'T1', 'Ana', 'completada'));
    Planix.agregarProyecto(Planix.proyectos, proyecto);
    spyOn(window, 'prompt').and.returnValues('4', 'Proyecto Menu', '3', '0');

    Planix.mostrarMenuPrincipal();

    expect(window.alert).toHaveBeenCalledWith('1 - T1 - Ana - completada\n');
  });
});
