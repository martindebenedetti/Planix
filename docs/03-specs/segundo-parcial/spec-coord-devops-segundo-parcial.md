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

## 🤖 DURANTE — Code Reviews asistidos por IA

> *[Se completará a medida que los desarrolladores envíen sus PRs]*

---

## ✅ AL CERRAR — Fase 2 y Evidencia de Trabajo

> *[Se completará durante el período de correcciones del docente]*