# Spec: Coordinador / DevOps

**Segundo Parcial | Programación Web I | UCES** **Estudiante:** Gian Franco Pasquali  
**Rama:** `feature/coord-devops-segundo-parcial`  

---

## 📋 ANTES — Plan de Coordinación y Resolución

> ⚠️ Commiteado ANTES de comenzar las tareas de coordinación.

### Plan de coordinación
Se esperan las siguientes Pull Requests hacia `develop` en este orden sugerido de integración:
1. `feature/dev-async-fetch-api` (Desarrollador JS Asíncrono)
2. `feature/dev-libreria-externa-[nombre]` (Desarrollador JS Librerías)
3. `feature/tester-qa-js-testing-suite` (Tester QA/JS - *Se debe testear la app completa*)
4. `feature/coord-devops-segundo-parcial` (Coordinador/ DevOps)

**Criterio de aprobación de PRs:**
- Deben pasar la revisión de código asistida por IA (Copilot).
- No deben presentar conflictos de merge con `develop`.
- Deben incluir actualización del `changelog.md`.
- Deben cumplir con los criterios de su propio archivo `spec`.

### Plan de la Fase 2 (Correcciones Post-Entrega)
Una vez entregado el parcial, la recepción y asignación de *Request Changes* (RC) se gestionará mediante Issues en GitHub. Se utilizará el siguiente esquema de prioridades:
- **Crítico:** Errores que rompen la ejecución de la app (ej. Fetch falla silenciosamente, UI bloqueada).
- **Alto:** Fallos en la lógica de negocio, testing fallido o librería mal integrada.
- **Medio:** Problemas de rendimiento, accesibilidad (Lighthouse) o estilos menores.
- **Bajo:** Correcciones de texto, indentación o documentación faltante en Markdown.

### Herramientas a utilizar
- **IA:** Se utilizará **GitHub Copilot Agent Mode** (o Claude/ChatGPT/Gemini en su defecto) para asistir en los *Code Reviews*. 
- **Justificación:** La IA permite detectar vulnerabilidades en llamadas asíncronas, faltantes de *try/catch*, ineficiencias en el DOM y problemas de cobertura en los tests de Jasmine de forma mucho más ágil y precisa, actuando como un par de ojos extra para asegurar la calidad de integración.

### Criterios de aceptación — Checklist
- [ ] Correcciones de Actividad N°4 aplicadas y backport realizado a `develop`.
- [ ] Mínimo de PRs revisados con IA documentados en este spec.
- [ ] README.md y changelog.md actualizados.
- [ ] GitHub Pages configurado y activo apuntando a la rama `release/segundo-parcial`.
- [ ] LGTM y release `v2.0-segundo-parcial` obtenidos antes de la fecha límite.
- [ ] Backport final de `release/segundo-parcial` hacia `develop` completado.

---

### Criterios de aceptación — Checklist
- [x] Correcciones de Actividad N°4 aplicadas y backport realizado a `develop`.
- [x] Mínimo de PRs revisados con IA documentados en este spec.
- [x] README.md y changelog.md actualizados.
- [x] GitHub Pages configurado y activo apuntando a la rama `release/segundo-parcial`.
- [ ] LGTM y release `v2.0-segundo-parcial` obtenidos antes de la fecha límite.
- [ ] Backport final de `release/segundo-parcial` hacia `develop` completado.

---

## 🤖 DURANTE — Code Reviews asistidos por IA

### Prompt Base Utilizado para todas las Revisiones
```text
 Actúa como un Senior Software Engineer realizando code review profesional.

 Estás analizando los cambios de una Pull Request activa.
 
 INSTRUCCIONES IMPORTANTES:
 - Identifica problemas reales del código
 - Enumera los hallazgos (1, 2, 3…)
 - Cada hallazgo debe ser independiente
 - Sé claro, técnico y concreto
 - No inventes problemas hipotéticos sin evidencia en el código
 - No incluyas sugerencias de tests
 
 Para cada hallazgo usa EXACTAMENTE esta estructura:
 ==================================================
 HALLAZGO #<número>
 Archivo:
 Línea:
 Tipo de problema: (bug | performance | seguridad | legibilidad | diseño | otro)
 Severidad: (baja | media | alta | crítica)
 Explicación técnica: Por qué esto es un problema real.
 Sugerencia de mejora: Cambio concreto recomendado.
 Ejemplo de código corregido (si aplica): ...
 DECISIÓN DEL REVISOR HUMANO: [ ] Aceptar / [ ] Rechazar
 
 RESUMEN GENERAL DE LA PR
 DECISIÓN FINAL SUGERIDA POR IA: APPROVE / REQUEST CHANGES / COMMENT ONLY
```

*(Nota: En cada revisión se adjuntaron como contexto los archivos correspondientes del diff de la PR evaluada).*

### Review PR #128 (Dev Asíncrono - Leandro Berro)
**Archivos adjuntados como contexto:** `js/api/apiService.js`, `js/script.js`
**Resumen de la revisión:**
- **Hallazgo #1 (Bug/Media):** En `apiService.js`, el método asume implícitamente que el parámetro es un array antes del `.filter()`. Se sugirió agregar validación `Array.isArray()`.
- **Hallazgo #2 (Bug/Alta):** En `script.js` (inserción en lote), si una tarea daba error por duplicado, el bucle se rompía sin llegar a `guardarEnStorage()`. Se sugirió envolver `agregarTarea` en un `try/catch` individual dentro del `forEach`.
- **Hallazgo #3 (Diseño/Baja):** El texto de estado de carga/éxito quedaba estático indefinidamente en el DOM. Se sugirió limpiarlo con un `setTimeout` de 5000ms.
- **Validación final:** Se confirmaron los ajustes. *Decisión: APPROVE*.

### Review PR #129 (Dev Librerías - Martín Debenedetti)
**Archivos adjuntados como contexto:** `js/script.js`, `js/libs/notificaciones.js`, `css/bootstrap-overrides.css`
**Resumen de la revisión:**
- **Hallazgo #1 (Diseño/Media):** Violación de encapsulamiento POO en `script.js` filtrando directamente `proyecto.tareas`. Se sugirió delegar en el modelo creando `eliminarTareaPorNombre`.
- **Hallazgo #2 (Rendimiento/Media):** Issues de Lighthouse asignadas omitidas (Performance LCP e índice de contraste). Se sugirió aplicar los fixes correspondientes.
- **Hallazgo #3 (Legibilidad/Baja):** Los métodos de `Notificaciones` ejecutaban `Swal.fire` pero no retornaban la promesa, impidiendo encadenamiento. Se sugirió agregar `return`.
- **Validación final:** Se confirmaron las refactorizaciones y correcciones de contraste/imágenes. *Decisión: APPROVE*.

### Review PR #132 (Tester QA/JS - Gian Franco Pasquali)
**Archivos adjuntados como contexto:** `js/test/api.spec.js`, `js/test/library.spec.js`, `js/script.js`, `js/test/test-runner.html`
**Resumen de la revisión:**
- **Hallazgo #1 (Bug/Media):** Uso de `.and.callThrough()` en spies inyectaba modales reales ensuciando el DOM. Se sugirió `.and.returnValue(Promise.resolve())`.
- **Hallazgo #2 (Bug/Media):** Flag `TESTING_MODE` huérfano; `script.js` ejecutaba y registraba listeners en entorno de tests. Se sugirió usar la guarda condicional en `script.js`.
- **Hallazgo #3 (Bug/Baja):** Patrón obsoleto en tests de error asíncrono (`try/catch` con `fail`). Se sugirió utilizar `expectAsync(...).toBeRejectedWithError()`.
- **Hallazgo #4 (Seguridad/Baja):** CDN de SweetAlert2 sin fijar versión y sin atributo `integrity` (SRI). Se sugirió blindarlo.
- **Hallazgo #5 (Bug/Baja):** Uso de `fail()` en el `beforeEach` permitía a Jasmine continuar ejecución. Se sugirió cambiar a `throw new Error()`.
- **Validación final:** Fixes aplicados. Suite en `101 specs, 0 failures`. *Decisión: APPROVE*.

---

## ✅ AL CERRAR — Fase 2 y Evidencia de Trabajo

> *[Se completará durante el período de correcciones del docente]*