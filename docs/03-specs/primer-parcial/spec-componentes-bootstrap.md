# Especificación Técnica - Especialista en Componentes Bootstrap (Spec-Driven Development)

## Descripción

Esta especificación técnica define la implementación de componentes avanzados de Bootstrap en el proyecto Planix, asegurando su correcta integración con el diseño existente y su comportamiento responsive.

Se aplica la metodología Spec-Driven Development (SDD), donde esta especificación se redacta antes de realizar cualquier implementación.

---

## ¿Qué se hará?

Como responsable del rol **Especialista en Componentes Bootstrap**, se implementarán los siguientes componentes:

### 1. Modal (Compartir proyecto)
- Se utilizará para mostrar un enlace del proyecto
- Se activará mediante un botón en el header
- Permitirá mejorar la experiencia sin recargar la página

### 2. Offcanvas (Sección de ayuda)
- Se utilizará para mostrar información de ayuda en un panel lateral
- Se activará desde la toolbar
- No afectará el layout del Gantt al mostrarse como overlay

---

## ¿Por qué?

Estos componentes fueron elegidos porque:

- Son componentes avanzados de Bootstrap
- Permiten interacción (requisito evaluable)
- Son responsive por defecto
- No interfieren con el layout complejo del Gantt (a diferencia de otros como accordion)

---

## Plan de Implementación

1. Insertar estructura HTML de los componentes en `index.html`
2. Verificar integración de Bootstrap JS
3. Aplicar clases Bootstrap (`modal`, `offcanvas`)
4. Configurar atributos `data-bs-*`
5. Validar comportamiento responsive

---

## Plan de Testing

Se realizarán pruebas en distintos dispositivos simulados:

- Mobile: 390x844 (iPhone 14 Pro)
- Mobile: 412x915 (Samsung Galaxy S23)
- Tablet: 768x1024 (iPad Air)
- Desktop: 1280x800

Se validará:

- Apertura y cierre del modal
- Apertura y cierre del offcanvas
- Correcta superposición (overlay)
- Adaptación responsive
- No interferencia con el Gantt

---

## Herramientas

- DevTools del navegador (modo responsive)
- Bootstrap 5.3
- GitHub para versionado

---

## Criterios de Aceptación

- [x] Se implementan al menos 2 componentes Bootstrap avanzados
- [x] Los componentes funcionan correctamente
- [x] Son responsive en todos los dispositivos requeridos
- [x] No afectan el layout del Gantt
- [x] Se documentan test-case-7.md y test-case-8.md
- [x] Se generan issues por bugs encontrados

---

## Riesgos y Mitigaciones

- **Riesgo:** Conflicto con estilos existentes  
  **Mitigación:** Uso de componentes overlay (modal/offcanvas)

- **Riesgo:** Interferencia con el Gantt  
  **Mitigación:** Evitar componentes que modifiquen el flujo del layout

---

## Responsabilidades adicionales

- Mantener coherencia visual del sistema
- Integrar componentes sin romper funcionalidad existente
- Documentar cambios realizados

### Review realizada sobre PR de otro rol

Desde el rol de Especialista en componentes Bootstrap se realizó revisión técnica sobre:

PR #61 — feature/dev-comp-html-avanzados-add-components

Link:
https://github.com/martindebenedetti/Planix/pull/61

Observaciones realizadas:
- necesidad de mejorar trazabilidad de testing
- ausencia inicial de evidencia explícita de Playwright MCP
- test cases fuera del formato tabular requerido
- recomendación de actualizar índice general de testing

La revisión fue realizada para validar coherencia entre implementación, testing y especificaciones generales del parcial.
Todos estos puntos fueron corregidos en diferentes ramas fix creadas.

---

## Referencias

- Bootstrap Documentation
- Documentación del repositorio Planix

---

## AT CLOSE — Corrección RC-11: evidencia Playwright MCP

Luego de la devolución docente, se completó la documentación pendiente correspondiente al testing de los componentes Bootstrap avanzados.

### Test cases integrados

| Test Case | Componente | Herramienta | Evidencia | Estado |
|---|---|---|---|---|
| TC-7 | Modal compartir enlace Bootstrap | Playwright MCP | `docs/04-testing/capturas/tc-7/` | PASS |
| TC-8 | Offcanvas de ayuda Bootstrap | Playwright MCP | `docs/04-testing/capturas/tc-8/` | PASS |

### Archivos verificados

- `docs/04-testing/test-case-7.md`
- `docs/04-testing/test-case-8.md`
- `docs/04-testing/capturas/tc-7/`
- `docs/04-testing/capturas/tc-8/`
- `docs/04-testing/testing-doc.md`

### Resultado

Se considera corregida la observación RC-11 del rol Especialista en Componentes Bootstrap, ya que los test cases requeridos fueron incorporados, se agregó evidencia de ejecución y se actualizó el índice general de testing.

### Observación

La mención previa a la ausencia inicial de evidencia explícita de Playwright MCP queda documentada como antecedente de revisión. La evidencia actual se encuentra integrada en los test cases y carpetas correspondientes.
