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

---

## AT CLOSE - Evidencia final

Pendiente de completar después de implementar y ejecutar las suites de testing.

Esta sección incluirá:

* prompts exactos utilizados con Copilot Agent;
* archivos adjuntados como contexto;
* output generado;
* ajustes manuales;
* cantidad de tests ejecutados;
* cantidad de tests aprobados y fallidos;
* bugs reportados;
* screenshots de Jasmine;
* conclusiones del proceso QA.
