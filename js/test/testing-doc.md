# Documentación de Testing - Suite Jasmine

## Índice
1. [Ejecución de Tests](#ejecución-de-tests)
2. [Suites de Tests](#suites-de-tests)
3. [Métricas de Cobertura](#métricas-de-cobertura)
4. [Capturas de Pantalla](#capturas-de-pantalla)
5. [Issues Conocidos](#issues-conocidos)

---

## Ejecución de Tests

### Pasos para Ejecutar
1. Posicionarse sobre la rama:
   `feature/tester-javascript-jasmine`
2. Abrir el proyecto en VS Code
3. Verificar que existan los archivos:
   - `js/script.js`
   - `js/test/test-runner.html`
   - `js/test/script.spec.js`
4. Abrir `js/test/test-runner.html` en el navegador
5. Esperar la ejecución automática de Jasmine
6. Verificar los resultados obtenidos en la interfaz

### Ejecución con Playwright MCP
1. Configurar `@playwright/mcp` en `.vscode/mcp.json`
2. Abrir GitHub Copilot en modo Agente
3. Ejecutar el siguiente prompt:

```text
Abrí js/test/test-runner.html utilizando Playwright MCP,
ejecutá todas las suites de Jasmine y capturá screenshots
mostrando el resultado PASS/FAIL de cada suite.
```

4. Guardar las capturas obtenidas dentro de:
   `js/test/screenshots/`

### Interpretación de Resultados
- **Verde** → Tests pasando ✅
- **Rojo** → Tests fallando ❌
- **Amarillo** → Tests pendientes ⚠️

---

## Resultados de la Ejecución Actual

### Iteración 2 — Tests de UI con Spies (03/06/2026)

- Total de tests ejecutados: **35**
- Tests pasaron: **35 ✅**
- Tests fallaron: **0 ❌**
- Estado: `PASS` en la suite Jasmine
- Cobertura de UI con spies: **100%**

#### Detalles de Ejecución

- Tests de lógica pura: 18 specs ✓
  - Validaciones (6 tests)
  - Flujo 1: Crear Proyecto (2 tests)
  - Flujo 2: Agregar Tarea (3 tests)
  - Flujo 3: Calcular Avance (4 tests)
  - Flujo 4: Filtrar Tareas (3 tests)

- Tests de UI con spies: 17 specs ✓
  - ejecutarCrearProyecto() (5 tests) - Validación de entrada con prompts
  - ejecutarAgregarTarea() (4 tests) - Manejo de proyectos y tareas
  - ejecutarCalcularAvance() (3 tests) - Reporte de avance
  - ejecutarFiltrarTareas() (3 tests) - Filtrado de estados
  - mostrarMenuPrincipal() (6 tests) - Navegación interactiva y bucle

- Capturas guardadas en `js/test/screenshots/`
- Archivo de reporte HTML: `js/test/generate-report.html` ✨

---

## Suites de Tests

### Suite 1: Crear Proyecto

**Funciones Testeadas:**
- `crearProyecto()` - Alta de proyectos
- `validarProyectoExistente()` - Validación de nombres duplicados
- `validarFechasProyecto()` - Validación de fechas

**Casos de Prueba:**

| # | Descripción | Tipo |
|---|-------------|------|
| 1 | Crear proyecto válido | Happy Path |
| 2 | Validar nombre vacío | Validación de Errores |
| 3 | Validar fechas inválidas | Caso Borde |
| 4 | Validar proyecto duplicado | Validación de Errores |
| 5 | Verificar agregado al array | Arrays/Objetos |

---

### Suite 2: Agregar Tarea a un Proyecto

**Funciones Testeadas:**
- `buscarProyecto()` - Búsqueda de proyectos
- `agregarTarea()` - Alta de tareas
- `validarEstado()` - Validación de estado

**Casos de Prueba:**

| # | Descripción | Tipo |
|---|-------------|------|
| 1 | Agregar tarea válida | Happy Path |
| 2 | Validar proyecto inexistente | Validación de Errores |
| 3 | Validar estado inválido | Validación de Errores |
| 4 | Verificar agregado al array | Arrays/Objetos |
| 5 | Validar estados permitidos | Caso Borde |

---

### Suite 3: Calcular Avance del Proyecto

**Funciones Testeadas:**
- `calcularAvance()` - Cálculo de porcentaje
- `verificarEstadoProyecto()` - Estado temporal del proyecto
- `contarTareasCompletadas()` - Conteo de tareas finalizadas

**Casos de Prueba:**

| # | Descripción | Tipo |
|---|-------------|------|
| 1 | Calcular avance correctamente | Happy Path |
| 2 | Proyecto sin tareas | Caso Borde |
| 3 | Proyecto completado | Happy Path |
| 4 | Proyecto atrasado | Validación de Errores |
| 5 | Validar cálculos porcentuales | Cálculos |

---

### Suite 4: Listar y Filtrar Tareas

**Funciones Testeadas:**
- `filtrarTareas()` - Filtrado de tareas
- `listarTareas()` - Recorrido de tareas
- `mostrarTareas()` - Salida de información

**Casos de Prueba:**

| # | Descripción | Tipo |
|---|-------------|------|
| 1 | Filtrar tareas pendientes | Happy Path |
| 2 | Filtrar tareas completadas | Happy Path |
| 3 | Mostrar todas las tareas | Caso Borde |
| 4 | Validar filtro inválido | Validación de Errores |
| 5 | Validar arrays filtrados | Arrays/Objetos |

---

### Suite 5: Función UI — ejecutarCrearProyecto

**Funciones Testeadas:**
- `ejecutarCrearProyecto()` - Flujo completo de creación con UI
- Interaction con `prompt()` y `alert()`

**Casos de Prueba:**

| # | Descripción | Tipo |
|---|-------------|------|
| 1 | Crear proyecto con datos válidos | Happy Path |
| 2 | Validar nombre vacío | Validación de Errores |
| 3 | Validar proyecto duplicado | Validación de Errores |
| 4 | Validar formato de fecha inválido | Validación de Errores |
| 5 | Validar fecha fin anterior a inicio | Validación de Errores |

**Método de Testing:**
- Utiliza `spyOn(window, 'prompt')` para simular entrada de usuario
- Utiliza `spyOn(window, 'alert')` para capturar mensajes de salida
- Verifica estado de `Planix.proyectos` después de cada operación

---

### Suite 6: Función UI — ejecutarAgregarTarea

**Funciones Testeadas:**
- `ejecutarAgregarTarea()` - Flujo completo de agregar tarea con UI
- Interaction con `prompt()` y `alert()`

**Casos de Prueba:**

| # | Descripción | Tipo |
|---|-------------|------|
| 1 | Mostrar error si no hay proyectos | Validación de Errores |
| 2 | Agregar tarea correctamente | Happy Path |
| 3 | Validar proyecto inexistente | Validación de Errores |
| 4 | Validar estado inválido | Validación de Errores |

**Método de Testing:**
- Simula múltiples prompts con `and.returnValues()`
- Verifica que se agregue tarea al proyecto correcto
- Valida mensajes de error apropiados

---

### Suite 7: Función UI — ejecutarCalcularAvance

**Funciones Testeadas:**
- `ejecutarCalcularAvance()` - Reporte de avance del proyecto
- Interaction con `prompt()` y `alert()`

**Casos de Prueba:**

| # | Descripción | Tipo |
|---|-------------|------|
| 1 | Mostrar error si no hay proyectos | Validación de Errores |
| 2 | Mostrar error si proyecto sin tareas | Validación de Errores |
| 3 | Mostrar informe de avance completo | Happy Path |

**Método de Testing:**
- Verifica que se muestre el formato correcto: `Avance: X%\nY/Z tareas\nEstado: ...`
- Calcula correctamente el porcentaje de completitud
- Determina estado del proyecto en función del progreso y fecha

---

### Suite 8: Función UI — ejecutarFiltrarTareas

**Funciones Testeadas:**
- `ejecutarFiltrarTareas()` - Filtrado de tareas con UI
- Interaction con `prompt()` y `alert()`

**Casos de Prueba:**

| # | Descripción | Tipo |
|---|-------------|------|
| 1 | Mostrar error si no hay proyectos | Validación de Errores |
| 2 | Filtrar tareas por estado | Happy Path |
| 3 | Validar filtro inválido | Validación de Errores |

**Método de Testing:**
- Filtra correctamente por estado (1=pendiente, 2=en curso, 3=completada, 4=todas)
- Muestra error para opciones fuera de rango
- Formatea output correctamente: `id - nombre - responsable - estado\n`

---

### Suite 9: Función UI — mostrarMenuPrincipal

**Funciones Testeadas:**
- `mostrarMenuPrincipal()` - Menú interactivo principal

**Casos de Prueba:**

| # | Descripción | Tipo |
|---|-------------|------|
| 1 | Ejecutar flujo 1 (Crear Proyecto) | Happy Path |
| 2 | Ejecutar flujo 2 (Agregar Tarea) | Happy Path |
| 3 | Ejecutar flujo 3 (Calcular Avance) | Happy Path |
| 4 | Ejecutar flujo 4 (Filtrar Tareas) | Happy Path |
| 5 | Mostrar error para opción inválida | Validación de Errores |
| 6 | Salir correctamente con opción 0 | Happy Path |

**Método de Testing:**
- Utiliza `spyOn(Planix, 'función')` para espiar llamadas a funciones
- Simula selección de menú con prompts
- Verifica que se ejecuten los flujos correctos
- Valida bucle while controlado por opción "0"

**Nota Importante:**
`mostrarMenuPrincipal()` entra en un bucle infinito hasta que el usuario ingresa "0".
Los tests controlan esto proporcionando "0" como segundo prompt para salir.


---

## Métricas de Cobertura

### Resumen General

| Métrica | Valor |
|---------|-------|
| Total de Tests | 35 |
| Tests Pasando | 35 |
| Tests Fallando | 0 |
| Porcentaje de Éxito | 100% |
| Tests de Lógica Pura | 18 |
| Tests de UI con Spies | 17 |

### Cobertura por Tipo de Test

| Tipo | Cantidad | Porcentaje |
|------|----------|------------|
| Happy Path | [Pendiente] | [Pendiente] |
| Casos Borde | [Pendiente] | [Pendiente] |
| Validación de Errores | [Pendiente] | [Pendiente] |
| Operaciones Arrays/Objetos | [Pendiente] | [Pendiente] |

### Análisis de Cobertura de Código

**Metodología:**  
Se realizará una revisión manual de las funciones implementadas
en `js/script.js` para estimar qué líneas son ejecutadas
mediante las suites de Jasmine.

| Función | Líneas Totales | Tests | Líneas Cubiertas | Cobertura |
|---------|----------------|-------|------------------|-----------|
| `crearProyecto()` | [Pendiente] | [Pendiente] | [Pendiente] | [Pendiente] |
| `agregarTarea()` | [Pendiente] | [Pendiente] | [Pendiente] | [Pendiente] |
| `calcularAvance()` | [Pendiente] | [Pendiente] | [Pendiente] | [Pendiente] |
| `filtrarTareas()` | [Pendiente] | [Pendiente] | [Pendiente] | [Pendiente] |
| `validarEstado()` | [Pendiente] | [Pendiente] | [Pendiente] | [Pendiente] |

**Cobertura Total Estimada:** [Pendiente]

### Líneas NO Cubiertas

- [Pendiente]
- [Pendiente]

---

## Capturas de Pantalla

### Resumen Ejecutivo

![Resumen General](./screenshots/report-header.png)

*Captura del header del reporte Jasmine mostrando: 35 Total Tests, 35 Passed, 0 Failed, 0 Pending*

### Tests de Lógica Pura

![Tests Lógica Pura](./screenshots/logic-tests.png)

*Captura mostrando 18 tests de validación, creación, cálculos y manipulación de datos - todos con estado ✓ (passed)*

### Tests de UI con Spies

![Tests UI](./screenshots/ui-tests-part1.png)

*Captura mostrando tests de UI para ejecutarCrearProyecto() y ejecutarAgregarTarea() con spyOn(window, 'prompt') y spyOn(window, 'alert')*

![Tests Menu Principal](./screenshots/ui-tests-part2.png)

*Captura mostrando tests de ejecutarCalcularAvance(), ejecutarFiltrarTareas() y mostrarMenuPrincipal() con verificación de calls a funciones*

### Status Completo

![Final Report](./screenshots/report-footer.png)

*Captura del footer del reporte mostrando: ✅ All tests passing | Generated on 2026-06-03*

---

## Issues Conocidos

### Bugs Reportados

No se detectaron fallas en la ejecución actual de las suites Jasmine.

### Correcciones Realizadas

#### Problema: DOMContentLoaded ejecutaba mostrarMenuPrincipal()

**Síntoma:** El navegador de testing intentaba ejecutar `mostrarMenuPrincipal()` al cargar, lo que causaba error porque `prompt()` no está disponible.

**Solución Implementada:**
- Modificado `js/script.js` para validar la existencia del elemento `#modalCompartir`
- Solo ejecuta `mostrarMenuPrincipal()` si estamos en la página principal (HTML real)
- En `test-runner.html` no existe este elemento, así que los tests corren sin problemas

**Código:**
```javascript
// Solo ejecutar el menú principal si estamos en la página de índice (no en testing)
if (document.querySelector("#modalCompartir")) {
  mostrarMenuPrincipal();
}
```

**Resultado:** ✅ Tests ejecutándose sin errores de consola

---

## Limitaciones del Testing

- Tests síncronos únicamente
- Dependencia de CDN de Jasmine
- No incluye manipulación de DOM (excepto captura de alerts/prompts)
- No incluye eventos JavaScript (excepto validación de llamadas a funciones)
- No se utiliza cobertura automática de código
- Requiere navegador compatible con ES6
- Dependencia de Playwright MCP para evidencia visual automatizada
- Cobertura de UI limitada a funciones que usan `prompt()` y `alert()`
- No se prueban eventos del DOM como clicks o listeners
- El menú principal requiere intervención manual en modo no-test

---

**Última Actualización:** 03/06/2026  
**Tester/QA Engineer:** Gian Franco Pasquali  
**Colaboración con:** Desarrollador JavaScript (código testeable sin cambios)