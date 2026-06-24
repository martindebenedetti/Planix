# Spec: Tester QA/JS

**Segundo Parcial | Programación Web I | UCES**
**Estudiante:** Gian Franco Pasquali (asumiendo rol por ser 3 integrantes)
**Rama:** feature/tester-qa-js-testing-suite

---

## 📋 ANTES — Plan de Testing y Auditorías

> ⚠️ Commiteado ANTES de escribir cualquier test o correr Lighthouse.

### Plan de Testing Funcional (Jasmine)
Se desarrollarán dos nuevas suites de pruebas:
1. **api.spec.js:** - Casos de éxito (Fetch resuelve correctamente con datos).
   - Errores HTTP (ej. 404, 500).
   - Errores de red (rechazo de la promesa).
   - Procesamiento de colecciones usando map, filter y reduce.
2. **library.spec.js:**
   - Inicialización correcta de SweetAlert2.
   - Configuración de parámetros (títulos, íconos).
   - Funcionalidad principal (ej. renderizado del modal).
   - Manejo de errores de la librería.

### Plan de Auditorías Lighthouse
Se ejecutarán auditorías en tres momentos clave para trackear la evolución del proyecto:
1. **Baseline Inicial:** Antes de integrar nuevos features (Test Case 11).
2. **Post-Fetch:** Tras integrar JSONPlaceholder (Test Case 12).
3. **Post-Librería:** Tras integrar SweetAlert2 (Test Case 13).

**Umbrales mínimos definidos:**
- Performance: >= 80
- Accessibility: >= 90
- Best Practices: >= 85
- SEO: >= 80

### Herramientas a utilizar
- **IA:** Se utilizará GitHub Copilot Agent o Agente similar para la generación asistida de los tests asíncronos en Jasmine.
- **Justificación:** La generación de mocks para la función fetch global y el manejo de promesas en tests (async/await) puede ser propensa a errores sintácticos. Copilot agilizará el armado del esqueleto del test (arrange, act, assert), permitiendo al Tester enfocarse en la validación de la lógica de negocio.

### Criterios de Aceptación — Checklist
- [x] api.spec.js completo y funcional.
- [x] library.spec.js completo y funcional.
- [x] Test Case 11 (Baseline) documentado.
- [x] Test Case 12 (Post-fetch) documentado con comparaciones.
- [x] Test Case 13 (Post-library) documentado con comparaciones.
- [x] Issues de rendimiento/accesibilidad creadas y asignadas.

---

## ✅ AL CERRAR — Evidencias y Resultados

### Archivos de testing implementados

- `js/test/api.spec.js`
- `js/test/library.spec.js`

### Archivos de testing modificados

- `js/test/script.spec.js`
- `js/test/test-runner.html`
- `js/test/testing-doc.md`

### Prompts utilizados en Copilot Agent
```text
Actuá como un Tester QA/JS especializado en Jasmine. Necesito generar una suite de pruebas automatizadas para validar ApiService. Debe cubrir llamadas asíncronas con promesas mockeadas mediante spyOn(window, "fetch"), control de estados de respuestas HTTP erróneas, fallas de conectividad de red y la correcta ejecución lógica de transformaciones de arreglos utilizando filter, map y reduce dentro del método procesarTodos(todos). Proporcionalo en sintaxis ES5/ES6 compatible con navegadores de pruebas.
```

### Resumen de Resultados
- **Tests ejecutados:** Se integraron exitosamente las suites `api.spec.js` y `library.spec.js` al archivo unificado `test-runner.html`.
- **Resultado final Jasmine:** 101 specs ejecutadas exitosamente, 0 failures.
- **Evolución de Auditorías Lighthouse:**
  - **Baseline Inicial (TC11):** Performance: 76 | Accesibilidad: 96 | Best Practices: 77 | SEO: 100
  - **Post-Fetch API (TC12):** Performance: 98 | Accesibilidad: 97 | Best Practices: 77 | SEO: 100
  - **Post-SweetAlert2 (TC13):** Performance: 98 | Accesibilidad: 97 | Best Practices: 77 | SEO: 100

![Ejecución Jasmine](/js/test/screenshots/jasmine-segundo-parcial.png)

### Issues Reportadas y Gestionadas
1. **Issue #130:** [QA/Performance] Optimizar redimensionamiento de imagen `diseño-inicial.png` para mejorar LCP. Asignada a Martín Debenedetti. *Estado: Resuelta/Cerrada*.
2. **Issue #131:** [QA/Accessibility] Corregir ratio de contraste en elementos de texto vs fondo (`.text-muted`). Asignada a Martín Debenedetti. *Estado: Resuelta/Cerrada*.

### Ajustes manuales realizados sobre los tests
Se incorporaron null-checks defensivos en `library.spec.js` para asegurar la disponibilidad de la variable global `Swal` antes de ejecutar las aserciones, previniendo falsos negativos por orden de carga de scripts.

