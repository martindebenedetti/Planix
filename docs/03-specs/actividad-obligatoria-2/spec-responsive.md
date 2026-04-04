# spec-responsive.md — Especialista en Responsive Design

**Proyecto:** Planificador de Tareas - Diagrama de Gantt (Planix)  
**Actividad:** Obligatoria N°2  
**Rol:** Especialista en Responsive Design  
**Autor:** Martin Debenedetti  
**Rama:** `feature/responsive-design-add-responsive-styles`  
**Archivo a generar:** `css/responsive.css`

---

## 1. Objetivo

Implementar un diseño responsive para el Planificador Gantt que se adapte correctamente a dispositivos móviles, tablets y desktop, garantizando una experiencia de uso óptima sin overflow horizontal en ningún breakpoint.

---

## 2. Breakpoints a implementar

Se definen tres breakpoints basados en los dispositivos objetivo del proyecto y los viewports que el QA Tester validará con Playwright MCP:

| Breakpoint  | Rango              | Dispositivos objetivo                                          | Justificación                                                                                           |
| ----------- | ------------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Mobile**  | hasta 767px        | iPhone 14 Pro (390×844), Samsung Galaxy S23 (412×915)          | Cubre la mayoría de smartphones actuales. El layout se reorganiza en columna única.                     |
| **Tablet**  | 768px a 1023px     | iPad Air (820×1180)                                            | Permite un layout intermedio con elementos reorganizados pero sin llegar al diseño completo de desktop. |
| **Desktop** | 1024px en adelante | Chrome (1920×1080), Firefox (1440×900), Safari/Edge (1280×800) | Layout completo tal como muestra el mockup de Figma.                                                    |

**Enfoque:** Mobile-first. Los estilos base en `styles.css` y `components.css` aplican al mobile, y `responsive.css` usa `min-width` en las media queries para escalar hacia tablet y desktop.

---

## 3. Enfoque de layout

| Sección de la página       | Enfoque             | Justificación                                                                                                                                             |
| -------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Header** (banner)        | Flexbox             | El header tiene dos grupos (info proyecto + progreso/acciones) que se apilan en mobile y se alinean en fila en desktop. Flexbox con `flex-wrap` es ideal. |
| **Toolbar** (nav)          | Flexbox             | Los botones de acción y los controles de escala se reorganizan en columna para mobile. Flexbox con `flex-wrap` permite colapsar los grupos.               |
| **Formulario nueva tarea** | Flexbox + Grid      | Los campos se disponen en grid de 2 columnas en tablet y fila horizontal en desktop. En mobile se apilan en columna única.                                |
| **Tabla Gantt**            | Overflow horizontal | La tabla mantiene su estructura con scroll horizontal en mobile/tablet. No se puede colapsar sin perder la relación visual datos-barras.                  |
| **Footer**                 | Flexbox             | Los grupos de estadísticas y leyenda se apilan en mobile y se alinean en fila en desktop.                                                                 |

---

## 4. Criterios de aceptación (checklist)

- [ ] Breakpoints definidos y documentados (mobile ≤767px, tablet 768-1023px, desktop ≥1024px).
- [ ] Layout mobile-first implementado (estilos base para mobile, media queries con `min-width`).
- [ ] **Header:** se reorganiza en columna en mobile, fila en desktop.
- [ ] **Toolbar:** botones se agrupan con wrap en mobile, fila completa en desktop.
- [ ] **Formulario:** campos en columna (mobile), grid 2 col (tablet), fila horizontal (desktop).
- [ ] **Tabla Gantt:** scroll horizontal habilitado en mobile/tablet sin overflow del body.
- [ ] **Footer:** se apila en mobile, fila en desktop.
- [ ] Tipografías escaladas: títulos reducidos en mobile para evitar desbordamiento.
- [ ] No hay overflow horizontal en ningún dispositivo (verificado en 390px, 820px, 1920px).
- [ ] Pruebas de integración realizadas con el Desarrollador Frontend en GitHub Pages y localhost.
- [ ] `responsive.css` cargado después de `styles.css` y `components.css` en el HTML.

---

## 5. Herramientas

- **GitHub Copilot en modo Agente:** se usará para generar `responsive.css` adjuntando como contexto este spec, `css/styles.css`, `css/components.css` y la imagen del mockup actualizado.
- **Chrome DevTools:** para verificar los breakpoints con viewport emulation (390px, 820px, 1920px).
- **Live Preview (VS Code):** para probar en localhost:3000.
- **GitHub Pages:** para verificar el despliegue en la rama feature.

---

## 6. Evidencia del proceso (completar al cierre)

> _Esta sección se completa una vez finalizada la implementación._

### 6.1 Prompt utilizado en Copilot Agent

```
(pendiente — pegar aquí el prompt exacto usado, incluyendo qué archivos se adjuntaron como contexto)
```

### 6.2 Resultado obtenido

(pendiente — describir qué generó Copilot y qué tan fiel fue al mockup)

### 6.3 Ajustes manuales realizados

(pendiente — qué tuvo que corregirse manualmente y por qué)

### 6.4 Decisiones finales de breakpoints

(pendiente — confirmar o ajustar los breakpoints definidos en la sección 2, con justificación de cualquier cambio)
