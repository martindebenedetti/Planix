# Spec - Tester QA

## Actividad Obligatoria N°4 - Programación Web I

## Rol

Tester QA.

Este documento registra el plan, ejecución y resultados del testing automatizado de la arquitectura POO, Storage y Eventos + DOM del proyecto Planix.

---

## BEFORE - Plan inicial de testing

### Objetivo

Verificar mediante Jasmine que las clases del dominio, la capa Storage y el controlador de Eventos + DOM funcionen correctamente y mantengan la separación de responsabilidades definida para la Actividad Obligatoria N°4.

### Alcance

Se prevé probar los siguientes módulos:

* `js/models/Tarea.js`
* `js/models/Proyecto.js`
* `js/models/GestorProyectos.js`
* `js/utils/storage.js`
* `js/script.js`

### Archivos de testing previstos

* `js/test/models.spec.js`
* `js/test/storage.spec.js`
* `js/test/script.spec.js`
* `js/test/test-runner.html`
* `js/test/testing-doc.md`

---

## Plan de testing de modelos POO

### Clase Tarea

Se probarán:

* creación de una tarea con datos válidos;
* validación de nombre vacío;
* validación de fechas;
* validación de porcentaje de avance;
* cambio de estado;
* serialización mediante `toJSON()`;
* reconstrucción mediante `fromJSON()`.

### Clase Proyecto

Se probarán:

* creación de un proyecto válido;
* validación del nombre;
* validación de fechas;
* agregado de tareas;
* cálculo de avance;
* determinación del estado;
* serialización mediante `toJSON()`;
* reconstrucción mediante `fromJSON()`.

### Clase GestorProyectos

Se probarán:

* agregado de proyectos;
* búsqueda de proyectos;
* rechazo de nombres duplicados;
* filtrado de tareas;
* serialización y reconstrucción del gestor.

---

## Plan de testing de Storage

Se probarán:

* `guardar(clave, valor, tipo)`;
* `obtener(clave, tipo)`;
* `actualizar(clave, valor, tipo)`;
* `eliminar(clave, tipo)`;
* `existe(clave, tipo)`;
* `listar(prefijo, tipo)`;
* `limpiar(tipo)`;
* `limpiarPorPrefijo(prefijo, tipo)`.

También se probarán:

* claves vacías o inválidas;
* tipos de Storage inválidos;
* datos JSON corruptos;
* valores no serializables;
* comportamiento de `localStorage`;
* comportamiento de `sessionStorage`.

---

## Plan de testing de Eventos + DOM

Esta parte se completará cuando la PR `feature/dev-eventos-dom` se encuentre corregida y mergeada en `develop`.

Se prevé probar:

* registro de event listeners;
* envío del formulario de proyecto;
* envío del formulario de tarea;
* validación en tiempo real;
* feedback visual por campo;
* actualización del selector de proyectos;
* actualización de la tabla de tareas;
* cálculo y visualización del avance;
* filtrado de tareas;
* persistencia y recuperación desde Storage;
* ausencia de llamadas activas a `prompt()` y `alert()`.

---

## Tipos de casos a cubrir

### Happy path

Casos con datos válidos que deben completar correctamente cada operación.

### Edge cases

Casos límite, por ejemplo:

* listas vacías;
* proyectos sin tareas;
* avance igual a 0 o 100;
* filtros sin resultados;
* claves inexistentes en Storage.

### Casos de error

Casos que deben generar un error controlado o retornar un valor seguro:

* nombres vacíos;
* fechas inválidas;
* proyectos duplicados;
* valores no serializables;
* JSON corrupto;
* tipo de Storage inválido.

---

## Herramientas

### GitHub Copilot Agent Mode

Se utilizará para asistir en la generación y revisión de:

* `models.spec.js`;
* `storage.spec.js`;
* actualización de `script.spec.js`.

Los prompts, outputs y ajustes manuales se documentarán en la sección AT CLOSE.

### Jasmine

Se utilizará como framework de testing automatizado.

### Playwright MCP

Se utilizará para:

* abrir `js/test/test-runner.html`;
* ejecutar las suites en un navegador real;
* verificar resultados PASS/FAIL;
* capturar screenshots como evidencia.

---

## Criterios de aceptación

* [x] Rama `feature/tester-qa-specs` creada desde `develop`.
* [ ] `spec-tester-qa.md` creado y commiteado antes de modificar tests.
* [ ] `models.spec.js` creado con tests de las clases POO.
* [ ] `storage.spec.js` creado con tests de Storage.
* [ ] `script.spec.js` actualizado para la arquitectura Eventos + DOM.
* [ ] Tests ejecutados desde `test-runner.html`.
* [ ] Ejecución realizada mediante Playwright MCP.
* [ ] Screenshots PASS/FAIL guardados.
* [ ] Bugs detectados registrados como issues.
* [ ] `testing-doc.md` actualizado.
* [ ] Resultados finales documentados en AT CLOSE.

---

## Bugs conocidos antes del testing

### Issue #114

La clase `Proyecto` utiliza `validarFormatoFecha()` y `parsearFecha()`, pero estas funciones no están definidas actualmente.

Este problema bloquea la creación de proyectos y deberá verificarse nuevamente cuando se resuelva el Issue #114.

## DURANTE - Implementación y ejecución de pruebas

### Archivos de testing implementados

* `js/test/models.spec.js`
* `js/test/storage.spec.js`
* `js/test/script.spec.js`
* `js/test/test-runner.html`

El runner fue actualizado con un DOM mínimo para permitir la ejecución de `js/script.js` dentro de Jasmine sin depender de la interfaz completa de `index.html`.

### Tests de modelos POO

Se implementaron pruebas para:

* `Tarea`;
* `Proyecto`;
* `GestorProyectos`;
* validaciones de constructores;
* métodos de negocio;
* serialización mediante `toJSON()`;
* reconstrucción mediante `fromJSON()`.

Durante la ejecución se detectó que `GestorProyectos` no implementa:

* `GestorProyectos.prototype.toJSON()`;
* `GestorProyectos.fromJSON()`.

El hallazgo fue registrado en el Issue #115.

### Tests de Storage

Se implementaron 20 tests para:

* operaciones CRUD;
* `localStorage`;
* `sessionStorage`;
* independencia entre ambos storages;
* listado y limpieza por prefijo;
* claves inválidas;
* JSON corrupto;
* valores no serializables;
* referencias circulares.

Resultado:

```text
20 specs, 0 failures
```

Evidencia:

```text
js/test/screenshots/jasmine-storage-pass-2026-06-13.png
```

### Tests de Eventos + DOM

El antiguo `script.spec.js`, basado en el objeto global `Planix`, fue reemplazado por pruebas de la arquitectura actual.

Se probaron:

* validación en tiempo real;
* clases `is-valid` e `is-invalid`;
* atributo `aria-invalid`;
* formularios de proyecto y tarea;
* handlers de eventos;
* selector de proyectos;
* filtro de tareas;
* persistencia del filtro en `sessionStorage`;
* renderizado de la tabla;
* barra de avance;
* mensajes de éxito y error;
* persistencia y recuperación del estado.

La PR #113 fue revisada, corregida, aprobada y mergeada en `develop`.

### Resultado de la suite completa

La ejecución conjunta de modelos, Storage y Eventos + DOM produjo:

```text
75 specs, 2 failures
```

Resumen:

* 73 tests aprobados;
* 2 tests fallidos;
* ambos fallos corresponden al Issue #115.

Fallos detectados:

```text
GestorProyectos > expone un metodo toJSON() para serializar el gestor
Expected 'undefined' to be 'function'.

GestorProyectos > expone un metodo estatico fromJSON() para reconstruir el gestor
Expected 'undefined' to be 'function'.
```

Evidencia:

```text
js/test/screenshots/jasmine-full-suite-issue-115-2026-06-13.png
```

### Bugs registrados

#### Issue #114

`Proyecto.js` depende de las funciones globales:

* `validarFormatoFecha()`;
* `parsearFecha()`.

Actualmente `script.js` contiene un parche temporal que permite ejecutar la aplicación, pero la dependencia continúa siendo un problema de arquitectura de la capa POO.

#### Issue #115

`GestorProyectos` no implementa los métodos requeridos de serialización y reconstrucción:

* `toJSON()`;
* `fromJSON()`.

Los tests permanecerán en estado FAIL hasta que el desarrollador POO implemente ambos métodos.

### Estado actual

* [x] `models.spec.js` implementado.
* [x] `storage.spec.js` implementado.
* [x] `script.spec.js` actualizado.
* [x] Runner Jasmine actualizado.
* [x] Storage validado con 20 tests aprobados.
* [x] Eventos + DOM probado con la arquitectura actual.
* [x] Bugs encontrados registrados como Issues #114 y #115.
* [x] Correcciones POO verificadas.
* [x] Suite completa ejecutada sin fallos.
* [x] Evidencia final PASS generada.



---

## AT CLOSE - Evidencia final

### Correcciones verificadas

Se verificaron las correcciones incorporadas mediante la PR #116:

* El Issue #114 quedó resuelto al incorporar `validarFormatoFecha()` y `parsearFecha()` dentro de `Proyecto.js`.
* El Issue #115 quedó resuelto mediante la implementación de `GestorProyectos.prototype.toJSON()` y `GestorProyectos.fromJSON()`.
* La refactorización de `script.js` mantiene operativos los flujos de Eventos + DOM.
* La persistencia de proyectos y tareas mediante `localStorage` funciona correctamente.
* El filtro activo continúa persistiendo mediante `sessionStorage`.
* No se detectaron usos activos de `prompt()` ni `alert()`.

### Resultado final de Jasmine

```text
88 specs, 0 failures
```

Resumen:

* 88 tests ejecutados.
* 88 tests aprobados.
* 0 tests fallidos.
* Sin errores de carga.
* Sin regresiones detectadas en POO, Storage ni Eventos + DOM.

### Evidencia final

* `js/test/screenshots/jasmine-pr-116-pass-2026-06-14 1.png`
* `js/test/screenshots/jasmine-pr-116-pass-2026-06-14 2.png`
* `js/test/screenshots/jasmine-pr-116-pass-2026-06-14 3.png`

### Checklist final

* [x] Tests de modelos POO implementados.
* [x] Tests de Storage implementados.
* [x] Tests de Eventos + DOM actualizados.
* [x] Runner Jasmine configurado con DOM de prueba.
* [x] Issues #114 y #115 verificados.
* [x] PR #116 verificada mediante testing.
* [x] Suite completa ejecutada.
* [x] Resultado final de 88 specs y 0 failures.
* [x] Evidencia visual incorporada.
* [x] Rama lista para Pull Request hacia `develop`.

