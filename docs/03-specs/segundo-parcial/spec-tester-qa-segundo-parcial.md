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
- [ ] api.spec.js completo y funcional.
- [ ] library.spec.js completo y funcional.
- [ ] Test Case 11 (Baseline) documentado.
- [ ] Test Case 12 (Post-fetch) documentado con comparaciones.
- [ ] Test Case 13 (Post-library) documentado con comparaciones.
- [ ] Issues de rendimiento/accesibilidad creadas y asignadas.

---

## ✅ AL CERRAR — Evidencias y Resultados

> *[Esta sección se completará al finalizar las pruebas y revisiones]*

### Prompts utilizados en Copilot Agent
*(Pendiente)*

### Resumen de Resultados
- **Tests ejecutados:** *(Pendiente)*
- **Lighthouse:** *(Pendiente)*

### Issues Reportadas
*(Pendiente)*