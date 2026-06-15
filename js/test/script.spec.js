describe('Planix - Evento y DOM Controller', function () {
  const formProyecto = () => document.getElementById('form-crear-proyecto');
  const formTarea = () => document.getElementById('form-nueva-tarea');
  const pNombre = () => document.getElementById('p-nombre');
  const pInicio = () => document.getElementById('p-inicio');
  const pFin = () => document.getElementById('p-fin');
  const tNombre = () => document.getElementById('t-nombre');
  const tResponsable = () => document.getElementById('t-responsable');
  const tEstado = () => document.getElementById('t-estado');
  const selectProyecto = () => document.getElementById('select-proyecto');
  const filtroTareas = () => document.getElementById('filtro-tareas');
  const cuerpoTabla = () => document.getElementById('cuerpo-tabla');
  const barraAvance = () => document.getElementById('barra-avance');
  const textoEstado = () => document.getElementById('texto-estado-proyecto');
  const contenedorAlertas = () => document.getElementById('contenedor-alertas');

  function resetFixture() {
    [pNombre(), pInicio(), pFin(), tNombre(), tResponsable()].forEach(input => {
      input.value = '';
      input.classList.remove('is-valid', 'is-invalid');
      input.removeAttribute('aria-invalid');
    });

    selectProyecto().innerHTML = '<option value="">Seleccionar proyecto</option>';
    selectProyecto().value = '';
    filtroTareas().value = 'todas';
    cuerpoTabla().innerHTML = '';
    barraAvance().style.width = '0%';
    barraAvance().textContent = '';
    barraAvance().setAttribute('aria-valuenow', '0');
    textoEstado().textContent = '';
    contenedorAlertas().innerHTML = '';
    formProyecto().querySelector('button[type="submit"]').setAttribute('disabled', 'true');
    formTarea().querySelector('button[type="submit"]').setAttribute('disabled', 'true');
  }

  function createProject(name = 'Proyecto Prueba', inicio = '01/01/2026', fin = '31/12/2026') {
    const proyecto = new Proyecto(name, inicio, fin);
    gestor.agregar(proyecto);
    return proyecto;
  }

  beforeEach(function () {
    gestor.proyectos.splice(0, gestor.proyectos.length);
    localStorage.removeItem('planix:proyectos');
    sessionStorage.removeItem('planix:sesion:filtros');
    resetFixture();
  });

  afterEach(function () {
    localStorage.removeItem('planix:proyectos');
    sessionStorage.removeItem('planix:sesion:filtros');
    contenedorAlertas().innerHTML = '';
  });

  describe('Validación en tiempo real', function () {
    it('no marca un campo vacío como inválido', function () {
      pNombre().value = '';
      marcarCampo(pNombre(), false);

      expect(pNombre().classList.contains('is-invalid')).toBeFalse();
      expect(pNombre().classList.contains('is-valid')).toBeFalse();
      expect(pNombre().hasAttribute('aria-invalid')).toBeFalse();
    });

    it('marca campos válidos e inválidos según su contenido', function () {
      pNombre().value = 'Proyecto X';
      marcarCampo(pNombre(), true);

      expect(pNombre().classList.contains('is-valid')).toBeTrue();
      expect(pNombre().getAttribute('aria-invalid')).toBe('false');

      tNombre().value = 'Tarea inválida';
      marcarCampo(tNombre(), false);

      expect(tNombre().classList.contains('is-invalid')).toBeTrue();
      expect(tNombre().getAttribute('aria-invalid')).toBe('true');
    });

    it('habilita y deshabilita el botón de crear proyecto correctamente', function () {
      pNombre().value = 'Planix';
      pInicio().value = '01/01/2026';
      pFin().value = '31/12/2026';

      validarFormularioProyecto();
      expect(formProyecto().querySelector('button[type="submit"]').hasAttribute('disabled')).toBeFalse();

      pInicio().value = '2026-01-01';
      validarFormularioProyecto();
      expect(formProyecto().querySelector('button[type="submit"]').hasAttribute('disabled')).toBeTrue();
    });

    it('habilita y deshabilita el botón de agregar tarea correctamente', function () {
      selectProyecto().innerHTML = '<option value="">Seleccionar proyecto</option><option value="Proyecto X">Proyecto X</option>';
      selectProyecto().value = 'Proyecto X';
      tNombre().value = 'Tarea 1';
      tResponsable().value = 'Ana';

      validarFormularioTarea();
      expect(formTarea().querySelector('button[type="submit"]').hasAttribute('disabled')).toBeFalse();

      tResponsable().value = '';
      validarFormularioTarea();
      expect(formTarea().querySelector('button[type="submit"]').hasAttribute('disabled')).toBeTrue();
    });

    it('no falla validarFormularioProyecto si faltan campos o botón', function () {
      const fixture = document.getElementById('test-fixture');
      const formEl = formProyecto();

      fixture.removeChild(formEl);

      try {
        expect(function () {
      validarFormularioProyecto();
    }).not.toThrow();
  } finally {
    fixture.appendChild(formEl);
  }
});

    it('no falla validarFormularioTarea si faltan campos o botón', function () {
      const fixture = document.getElementById('test-fixture');
      const formEl = formTarea();
      const selectEl = selectProyecto();

      fixture.removeChild(formEl);
      fixture.removeChild(selectEl);

      try {
        expect(function () {
          validarFormularioTarea();
        }).not.toThrow();
      } finally {
        fixture.appendChild(formEl);
        fixture.appendChild(selectEl);
      }
    });
  });

  describe('Manejadores de formulario', function () {
    it('crea un proyecto y actualiza el selector de proyectos', function () {
      pNombre().value = 'Nuevo Proyecto';
      pInicio().value = '01/01/2026';
      pFin().value = '31/12/2026';

      const event = {
        preventDefault: jasmine.createSpy('preventDefault'),
        target: formProyecto()
      };

      manejarCrearProyecto(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(gestor.listar().length).toBe(1);
      expect(selectProyecto().value).toBe('Nuevo Proyecto');
      expect(StorageUtil.obtener('planix:proyectos', 'local').length).toBe(1);
      expect(contenedorAlertas().querySelector('.alert-success')).toBeTruthy();
    });

    it('muestra error al intentar crear un proyecto duplicado', function () {
      pNombre().value = 'Proyecto Uno';
      pInicio().value = '01/01/2026';
      pFin().value = '31/12/2026';

      manejarCrearProyecto({ preventDefault: function () {}, target: formProyecto() });
      pNombre().value = 'Proyecto Uno';
      pInicio().value = '01/01/2026';
      pFin().value = '31/12/2026';

      manejarCrearProyecto({ preventDefault: function () {}, target: formProyecto() });

      expect(gestor.listar().length).toBe(1);
      expect(contenedorAlertas().querySelector('.alert-danger')).toBeTruthy();
    });

    it('agrega una tarea a un proyecto existente', function () {
      const proyecto = createProject('Proyecto Dos');
      actualizarListaProyectos();
      selectProyecto().value = 'Proyecto Dos';
      tNombre().value = 'Tarea Uno';
      tResponsable().value = 'Mora';
      tEstado().value = 'pendiente';

      const event = {
        preventDefault: jasmine.createSpy('preventDefault'),
        target: formTarea()
      };

      manejarAgregarTarea(event);

      expect(event.preventDefault).toHaveBeenCalled();
      expect(proyecto.tareas.length).toBe(1);
      expect(proyecto.tareas[0].nombre).toBe('Tarea Uno');
      expect(StorageUtil.obtener('planix:proyectos', 'local')[0].tareas.length).toBe(1);
      expect(tNombre().value).toBe('');
      expect(tResponsable().value).toBe('');
      expect(formTarea().querySelector('button[type="submit"]').hasAttribute('disabled')).toBeTrue();
      expect(contenedorAlertas().querySelector('.alert-success')).toBeTruthy();
    });

    it('muestra error al agregar una tarea si el proyecto no existe', function () {
      selectProyecto().value = 'Proyecto No Existe';
      tNombre().value = 'Tarea X';
      tResponsable().value = 'Ana';
      tEstado().value = 'pendiente';

      manejarAgregarTarea({ preventDefault: function () {}, target: formTarea() });

      expect(contenedorAlertas().querySelector('.alert-danger')).toBeTruthy();
      expect(gestor.listar().length).toBe(0);
    });
  });

  describe('Manipulación de selectores y vistas', function () {
    it('actualiza el selector de proyectos manteniendo la selección actual', function () {
      expect(selectProyecto().options.length).toBe(1);

      createProject('Proyecto Tres');

      // Primera actualización: crea la opción en el select.
      actualizarListaProyectos();

      expect(selectProyecto().options.length).toBeGreaterThan(1);

      // Se selecciona una opción que ahora sí existe.
      selectProyecto().value = 'Proyecto Tres';

      // Segunda actualización: debe conservar la selección.
      actualizarListaProyectos();

      expect(selectProyecto().value).toBe('Proyecto Tres');
    });

    it('muestra un mensaje cuando no hay proyecto seleccionado', function () {
      selectProyecto().value = '';
      manejarCalcularAvance({ target: selectProyecto() });

      expect(textoEstado().textContent).toBe('Seleccione un proyecto para ver su estado.');
      expect(cuerpoTabla().textContent).toContain('Aún no hay tareas para mostrar.');
    });

    it('configurarEventListeners no falla con DOM parcial', function () {
      const fixture = document.getElementById('test-fixture');
      const elementos = [formProyecto(), formTarea(), selectProyecto(), filtroTareas()];
      elementos.forEach(el => fixture.removeChild(el));

      expect(function () {
        configurarEventListeners();
      }).not.toThrow();

      elementos.forEach(el => fixture.appendChild(el));
    });

    it('actualiza la vista del proyecto cuando se selecciona un proyecto', function () {
      const proyecto = createProject('Proyecto Cuatro');
      proyecto.agregarTarea(new Tarea('Tarea A', 'Luis', 'pendiente'));
      actualizarListaProyectos();
      selectProyecto().value = 'Proyecto Cuatro';

      manejarCalcularAvance({ target: selectProyecto() });

      expect(cuerpoTabla().querySelectorAll('tr').length).toBe(1);
      expect(barraAvance().style.width).toContain('%');
      expect(textoEstado().textContent).toContain('Estado:');
    });

    it('guarda y aplica el filtro de tareas en sessionStorage', function () {
      const proyecto = createProject('Proyecto Cinco');
      proyecto.agregarTarea(new Tarea('A', 'Ana', 'pendiente'));
      proyecto.agregarTarea(new Tarea('B', 'Luis', 'completada'));
      actualizarListaProyectos();
      selectProyecto().value = 'Proyecto Cinco';
      filtroTareas().value = 'pendiente';

      manejarFiltrarTareas({ target: filtroTareas() });

      expect(StorageUtil.obtener('planix:sesion:filtros', 'session')).toBe('pendiente');
      expect(cuerpoTabla().querySelectorAll('tr').length).toBe(1);
      expect(cuerpoTabla().textContent).toContain('pendiente');
    });

    it('no falla cuando no hay proyecto seleccionado y se filtra tareas', function () {
      selectProyecto().value = '';
      filtroTareas().value = 'completada';

      expect(function () {
        manejarFiltrarTareas({ target: filtroTareas() });
      }).not.toThrow();
    });
  });

  describe('Renderización y avance', function () {
    it('muestra un mensaje cuando no hay tareas para la tabla', function () {
      renderizarTablaGantt([]);

      expect(cuerpoTabla().querySelectorAll('tr').length).toBe(1);
      expect(cuerpoTabla().textContent).toContain('No se encontraron tareas.');
    });

    it('renderiza tareas con la clase de badge correcta según el estado', function () {
      const tareas = [
        new Tarea('T1', 'Ana', 'pendiente'),
        new Tarea('T2', 'Luis', 'en curso'),
        new Tarea('T3', 'Mora', 'completada')
      ];

      renderizarTablaGantt(tareas);

      const filas = cuerpoTabla().querySelectorAll('tr');
      expect(filas.length).toBe(3);
      expect(filas[0].querySelector('span.badge').className).toContain('bg-warning');
      expect(filas[1].querySelector('span.badge').className).toContain('bg-primary');
      expect(filas[2].querySelector('span.badge').className).toContain('bg-success');
    });

    it('renderiza texto literalmente y no crea elementos img o script para valores de tarea maliciosos', function () {
      const payload = '<img src=x onerror=alert(1)><script>alert(1)</script>';
      const tareas = [new Tarea(payload, payload, 'pendiente')];

      renderizarTablaGantt(tareas);

      const filas = cuerpoTabla().querySelectorAll('tr');
      expect(filas.length).toBe(1);
      expect(cuerpoTabla().textContent).toContain(payload);
      expect(filas[0].querySelector('img')).toBeNull();
      expect(filas[0].querySelector('script')).toBeNull();
      expect(filas[0].querySelector('span.badge').textContent).toBe('PENDIENTE');
    });

    it('no falla actualizarAvanceDOM si falta la barra de avance', function () {
      const barra = barraAvance();
      const wrapper = barra.parentNode;
      wrapper.removeChild(barra);

      expect(function () {
        actualizarAvanceDOM(25, 'Estado parcial');
      }).not.toThrow();
      expect(textoEstado().textContent).toBe('Estado parcial');

      wrapper.appendChild(barra);
    });

    it('no falla actualizarAvanceDOM si falta el texto de estado', function () {
      const texto = textoEstado();
      const wrapper = texto.parentNode;
      wrapper.removeChild(texto);

      expect(function () {
        actualizarAvanceDOM(50, 'Mitad');
      }).not.toThrow();
      expect(barraAvance().style.width).toBe('50%');

      wrapper.appendChild(texto);
    });

    it('actualiza la barra de avance y el texto de estado correctamente', function () {
      actualizarAvanceDOM(0, 'Estado: Ninguno');
      expect(barraAvance().style.width).toBe('0%');
      expect(barraAvance().className).toContain('bg-info');
      expect(textoEstado().textContent).toBe('Estado: Ninguno');

      actualizarAvanceDOM(50, 'Estado: Parcial');
      expect(barraAvance().style.width).toBe('50%');
      expect(barraAvance().className).toContain('bg-primary');

      actualizarAvanceDOM(100, 'Estado: Completado');
      expect(barraAvance().style.width).toBe('100%');
      expect(barraAvance().className).toContain('bg-success');
    });
  });

  describe('Persistencia de estado', function () {
    it('guarda el estado del gestor en localStorage', function () {
      createProject('Proyecto Seis');
      guardarEnStorage();

      const datos = StorageUtil.obtener('planix:proyectos', 'local');
      expect(datos.length).toBe(1);
      expect(datos[0].nombre).toBe('Proyecto Seis');
    });

    it('omite proyectos duplicados durante la carga desde storage y emite console.warn', function () {
      const proyectoJSON = {
        nombre: 'Proyecto Duplicado',
        fechaInicio: '01/01/2026',
        fechaFin: '31/12/2026',
        tareas: []
      };

      StorageUtil.guardar('planix:proyectos', [proyectoJSON, proyectoJSON], 'local');
      spyOn(console, 'warn');

      gestor.proyectos.splice(0, gestor.proyectos.length);
      cargarDatosDesdeStorage();

      expect(gestor.listar().length).toBe(1);
      expect(console.warn).toHaveBeenCalledWith('Proyecto omitido al restaurar desde storage: Proyecto Duplicado');
    });

    it('carga el estado inicial desde localStorage y sessionStorage', function () {
      createProject('Proyecto Siete');
      StorageUtil.guardar('planix:sesion:filtros', 'pendiente', 'session');
      guardarEnStorage();

      gestor.proyectos.splice(0, gestor.proyectos.length);
      cargarDatosDesdeStorage();

      expect(gestor.listar().length).toBe(1);
      expect(filtroTareas().value).toBe('pendiente');
    });
  });

  describe('Mensajes de usuario', function () {
    beforeEach(function () {
      jasmine.clock().install();
    });

    afterEach(function () {
      jasmine.clock().uninstall();
      contenedorAlertas().innerHTML = '';
    });

    it('muestra y remueve error después del timeout', function () {
      mostrarError('contenedor-alertas', 'Error de prueba');

      expect(contenedorAlertas().querySelector('.alert-danger')).toBeTruthy();
      jasmine.clock().tick(4000);
      expect(contenedorAlertas().querySelector('.alert-danger')).toBeNull();
    });

    it('muestra y remueve mensaje de éxito después del timeout', function () {
      mostrarExito('contenedor-alertas', 'Éxito de prueba');

      expect(contenedorAlertas().querySelector('.alert-success')).toBeTruthy();
      jasmine.clock().tick(4000);
      expect(contenedorAlertas().querySelector('.alert-success')).toBeNull();
    });

    it('no interpreta como HTML el contenido de mensajes y no crea nodos img o script', function () {
      const payload = '<img src=x onerror=alert(1)><script>alert(1)</script>';
      mostrarError('contenedor-alertas', payload);

      expect(contenedorAlertas().querySelector('img')).toBeNull();
      expect(contenedorAlertas().querySelector('script')).toBeNull();
      expect(contenedorAlertas().textContent).toContain(payload);
    });
  });
});
