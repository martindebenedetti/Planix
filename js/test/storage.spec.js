describe('StorageUtil - localStorage', function () {
  var claveObjeto = 'planix:test:objeto';
  var claveActualizar = 'planix:test:actualizar';
  var clavePrefijo = 'planix:test:prefijo';
  var claveAjena = 'otra:test:clave';

  function limpiarClavesDePrueba() {
    var claves = [];

    for (var i = 0; i < localStorage.length; i++) {
      var clave = localStorage.key(i);
      if (clave && clave.indexOf('planix:test:') === 0) {
        claves.push(clave);
      }
    }

    claves.forEach(function (clave) {
      localStorage.removeItem(clave);
    });
  }

  beforeEach(function () {
    limpiarClavesDePrueba();
    localStorage.removeItem(claveAjena);
  });

  afterEach(function () {
    limpiarClavesDePrueba();
    localStorage.removeItem(claveAjena);
  });

  it('guarda y recupera un objeto', function () {
    var valor = { nombre: 'Planix', activo: true };

    expect(StorageUtil.guardar(claveObjeto, valor, 'local')).toBe(true);
    expect(StorageUtil.obtener(claveObjeto, 'local')).toEqual(valor);
  });

  it('actualiza un valor existente', function () {
    StorageUtil.guardar(claveActualizar, { version: 1 }, 'local');
    expect(StorageUtil.actualizar(claveActualizar, { version: 2 }, 'local')).toBe(true);
    expect(StorageUtil.obtener(claveActualizar, 'local')).toEqual({ version: 2 });
  });

  it('verifica la existencia de una clave', function () {
    StorageUtil.guardar(claveObjeto, { prueba: true }, 'local');
    expect(StorageUtil.existe(claveObjeto, 'local')).toBe(true);
    expect(StorageUtil.existe('planix:test:no-existe', 'local')).toBe(false);
  });

  it('elimina una clave', function () {
    StorageUtil.guardar(claveObjeto, { prueba: true }, 'local');
    expect(StorageUtil.eliminar(claveObjeto, 'local')).toBe(true);
    expect(StorageUtil.existe(claveObjeto, 'local')).toBe(false);
    expect(StorageUtil.obtener(claveObjeto, 'local')).toBeNull();
  });

  it('lista claves por prefijo', function () {
    StorageUtil.guardar(clavePrefijo + ':uno', { a: 1 }, 'local');
    StorageUtil.guardar(clavePrefijo + ':dos', { a: 2 }, 'local');
    StorageUtil.guardar(claveObjeto, { a: 3 }, 'local');

    var resultado = StorageUtil.listar('planix:test:', 'local');

    expect(resultado.length).toBeGreaterThan(0);
    expect(resultado).toContain(clavePrefijo + ':uno');
    expect(resultado).toContain(clavePrefijo + ':dos');
  });

  it('limpia claves por prefijo sin eliminar claves ajenas a planix:', function () {
    StorageUtil.guardar(clavePrefijo + ':uno', { a: 1 }, 'local');
    StorageUtil.guardar(claveAjena, { b: 2 }, 'local');

    expect(StorageUtil.limpiarPorPrefijo('planix:test:', 'local')).toBe(true);
    expect(StorageUtil.existe(clavePrefijo + ':uno', 'local')).toBe(false);
    expect(StorageUtil.existe(claveAjena, 'local')).toBe(true);

    localStorage.removeItem(claveAjena);
  });

  it('limpia completamente el storage', function () {
    var respaldo = {};
    var clavesOriginales = [];

    for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);

        if (clave !== null) {
        clavesOriginales.push(clave);
        respaldo[clave] = localStorage.getItem(clave);
        }
    }

    try {
        StorageUtil.guardar(
        claveObjeto,
        { prueba: true },
        'local'
        );

        StorageUtil.guardar(
        clavePrefijo + ':otro',
        { prueba: true },
        'local'
        );

        expect(StorageUtil.limpiar('local')).toBe(true);
        expect(localStorage.length).toBe(0);
    } finally {
        for (var j = 0; j < clavesOriginales.length; j++) {
        var claveOriginal = clavesOriginales[j];

        localStorage.setItem(
            claveOriginal,
            respaldo[claveOriginal]
        );
        }
    }
    });
});

describe('StorageUtil - sessionStorage', function () {
  var claveFiltro = 'planix:test:filtro';

  function limpiarClavesDePrueba() {
    var claves = [];

    for (var i = 0; i < sessionStorage.length; i++) {
      var clave = sessionStorage.key(i);
      if (clave && clave.indexOf('planix:test:') === 0) {
        claves.push(clave);
      }
    }

    claves.forEach(function (clave) {
      sessionStorage.removeItem(clave);
    });
  }

  beforeEach(function () {
    limpiarClavesDePrueba();
    localStorage.removeItem(claveFiltro);
   });

  afterEach(function () {
    limpiarClavesDePrueba();
    localStorage.removeItem(claveFiltro);
  });

  it('guarda y recupera un filtro activo', function () {
    var filtro = { estado: 'en curso', responsable: 'Ana' };

    expect(StorageUtil.guardar(claveFiltro, filtro, 'session')).toBe(true);
    expect(StorageUtil.obtener(claveFiltro, 'session')).toEqual(filtro);
  });

  it('actualiza el filtro', function () {
    StorageUtil.guardar(claveFiltro, { estado: 'pendiente' }, 'session');
    expect(StorageUtil.actualizar(claveFiltro, { estado: 'completada' }, 'session')).toBe(true);
    expect(StorageUtil.obtener(claveFiltro, 'session')).toEqual({ estado: 'completada' });
  });

  it('elimina el filtro', function () {
    StorageUtil.guardar(claveFiltro, { estado: 'pendiente' }, 'session');
    expect(StorageUtil.eliminar(claveFiltro, 'session')).toBe(true);
    expect(StorageUtil.obtener(claveFiltro, 'session')).toBeNull();
  });

  it('verifica que localStorage y sessionStorage sean independientes', function () {
    StorageUtil.guardar(claveFiltro, { tipo: 'session' }, 'session');
    StorageUtil.guardar(claveFiltro, { tipo: 'local' }, 'local');

    expect(StorageUtil.obtener(claveFiltro, 'session')).toEqual({ tipo: 'session' });
    expect(StorageUtil.obtener(claveFiltro, 'local')).toEqual({ tipo: 'local' });
  });
});

describe('StorageUtil - validaciones y errores', function () {
  var clavePrueba = 'planix:test:validacion';

  function limpiarClavesDePrueba() {
    var claves = [];

    for (var i = 0; i < localStorage.length; i++) {
      var clave = localStorage.key(i);
      if (clave && clave.indexOf('planix:test:') === 0) {
        claves.push(clave);
      }
    }

    claves.forEach(function (clave) {
      localStorage.removeItem(clave);
    });
  }

  beforeEach(function () {
    limpiarClavesDePrueba();
    sessionStorage.removeItem(clavePrueba);
  });

  afterEach(function () {
    limpiarClavesDePrueba();
    sessionStorage.removeItem(clavePrueba);
  });

  it('rechaza una clave vacia', function () {
    expect(StorageUtil.guardar('', { a: 1 }, 'local')).toBe(false);
    expect(StorageUtil.obtener('', 'local')).toBeNull();
  });

  it('rechaza una clave formada solamente por espacios', function () {
    expect(StorageUtil.guardar('   ', { a: 1 }, 'local')).toBe(false);
    expect(StorageUtil.obtener('   ', 'local')).toBeNull();
  });

  it('rechaza un tipo de storage invalido', function () {
    expect(StorageUtil.guardar(clavePrueba, { a: 1 }, 'invalid')).toBe(false);
    expect(StorageUtil.obtener(clavePrueba, 'invalid')).toBeNull();
    expect(StorageUtil.eliminar(clavePrueba, 'invalid')).toBe(false);
  });

  it('retorna null para una clave inexistente', function () {
    expect(StorageUtil.obtener('planix:test:sin-existencia', 'local')).toBeNull();
  });

  it('retorna null ante JSON corrupto', function () {
    localStorage.setItem(clavePrueba, '{ invalid JSON');
    expect(StorageUtil.obtener(clavePrueba, 'local')).toBeNull();
  });

  it('retorna false al intentar guardar undefined', function () {
    expect(StorageUtil.guardar(clavePrueba, undefined, 'local')).toBe(false);
  });

  it('retorna false al intentar guardar una funcion', function () {
    expect(StorageUtil.guardar(clavePrueba, function () {}, 'local')).toBe(false);
  });

  it('retorna false al intentar guardar un objeto con referencia circular', function () {
    var circular = {};
    circular.self = circular;

    expect(StorageUtil.guardar(clavePrueba, circular, 'local')).toBe(false);
  });

  it('rechaza un prefijo vacio en limpiarPorPrefijo()', function () {
    expect(StorageUtil.limpiarPorPrefijo('', 'local')).toBe(false);
  });
});