# spec-html-avanzados.md — Desarrollador de Componentes HTML Avanzados

**Proyecto:** Planificador de Tareas - Diagrama de Gantt (Planix)  
**Actividad:** Primer Parcial  
**Rol:** Desarrollador de Componentes HTML Avanzados  
**Autor:** Martin Debenedetti  
**Rama:** `feature/dev-comp-html-avanzados-add-components`  
**Archivos a modificar:** `index.html`, `css/bootstrap-overrides.css`

---

## 1. Objetivo

Incorporar al menos dos componentes HTML avanzados al proyecto Planix, integrados coherentemente con el diseño existente y la migración a Bootstrap, asegurando que funcionen correctamente en dispositivos móviles, tablets y desktop.

---

## 2. Componentes a implementar

### Componente 1: `<iframe>` — Video de YouTube

**Descripción:** Se incorporará un iframe con un video explicativo sobre qué es un diagrama de Gantt y cómo se utiliza para la gestión de proyectos. El video se ubicará en una sección informativa debajo del header o antes de la tabla Gantt, proporcionando contexto al usuario sobre la herramienta.

**Justificación:** Un video introductorio mejora la experiencia de usuario, especialmente para usuarios nuevos que no están familiarizados con diagramas de Gantt. El iframe es un componente HTML avanzado que permite embeber contenido externo de forma nativa.

**Integración con Bootstrap:** Se utilizará el helper `ratio` de Bootstrap (`<div class="ratio ratio-16x9">`) para que el video sea responsive y mantenga la proporción 16:9 en todos los dispositivos. Se envolverá en un contenedor `container` con clases de espaciado de Bootstrap (`my-3`, `px-3`).

**Ubicación en el HTML:** Nueva sección `<section id="video-tutorial">` ubicada dentro del `<main>`, antes de la sección `#nueva-tarea` o después del formulario, según la coherencia visual con el mockup.

### Componente 2: `<details>` y `<summary>` — Acordeón nativo HTML

**Descripción:** Se implementará un bloque con elementos `<details>` y `<summary>` que permita al usuario mostrar/ocultar información del proyecto como: descripción general, instrucciones de uso del planificador, y leyenda de la tabla Gantt. Funciona como un acordeón nativo sin necesidad de JavaScript.

**Justificación:** El elemento `<details>` es un componente HTML semántico y accesible que permite organizar información secundaria sin saturar la vista principal. Es útil en un planificador Gantt donde la pantalla debe priorizar la tabla de tareas, pero el usuario puede necesitar consultar instrucciones o información del proyecto.

**Integración con Bootstrap:** Se estilizará con clases de Bootstrap para mantener coherencia visual: `card`, `card-body`, `p-3`, `mb-2`, `border`, `rounded`. Los estilos personalizados se agregarán en `bootstrap-overrides.css` si es necesario para ajustar el `<summary>` (cursor, tipografía, iconografía).

**Ubicación en el HTML:** Nueva sección `<section id="info-proyecto">` ubicada dentro del `<main>`, antes del formulario de nueva tarea, agrupando 2-3 bloques `<details>` con información relevante.

---

## 3. Plan de testing con Playwright MCP

### test-case-9.md — Componente 1: iframe YouTube

| Aspecto                | Detalle                                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Qué se prueba**      | Que el iframe de YouTube se renderice correctamente, mantenga proporción 16:9 y sea responsive                   |
| **Viewports**          | iPhone 14 Pro (390×844), Samsung Galaxy S23 (412×915), iPad Air (820×1180)                                       |
| **Criterios de éxito** | El video se muestra sin overflow horizontal, mantiene ratio 16:9, no rompe el layout de las secciones adyacentes |
| **Herramientas**       | Playwright MCP con viewport emulation + GitHub MCP para issues                                                   |

### test-case-10.md — Componente 2: details/summary

| Aspecto                | Detalle                                                                                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Qué se prueba**      | Que los elementos `<details>` se expandan y colapsen correctamente, con estilo coherente en todos los viewports                                           |
| **Viewports**          | iPhone 14 Pro (390×844), Samsung Galaxy S23 (412×915), iPad Air (820×1180)                                                                                |
| **Criterios de éxito** | Los bloques details se abren/cierran al hacer clic en summary, el texto es legible, no hay overflow, la tipografía es coherente con el resto del proyecto |
| **Herramientas**       | Playwright MCP con viewport emulation + GitHub MCP para issues                                                                                            |

---

## 4. Criterios de aceptación (checklist)

- [ ] Componente 1 (`<iframe>` YouTube) implementado con helper `ratio` de Bootstrap.
- [ ] Componente 2 (`<details>` y `<summary>`) implementado con al menos 2 bloques expandibles.
- [ ] Ambos componentes integrados coherentemente con el diseño existente y Bootstrap.
- [ ] Ambos componentes funcionan correctamente en mobile (390px), tablet (820px) y desktop (1280px+).
- [ ] No hay overflow horizontal en ningún dispositivo con los componentes agregados.
- [ ] Estilos personalizados agregados en `bootstrap-overrides.css` si fue necesario.
- [ ] test-case-9.md documentado con prompt, resultados, capturas e issues.
- [ ] test-case-10.md documentado con prompt, resultados, capturas e issues.
- [ ] Issues creados con GitHub MCP por cada hallazgo relevante.
- [ ] Issues resueltos mediante ramas `fix/` contra `develop`, documentadas en `[Fixed]` en changelog.
- [ ] `changelog.md` actualizado con la contribución y links a PRs.
- [ ] PR abierta hacia `develop` con el template correspondiente.

---

## 5. Herramientas

- **Playwright MCP (@playwright/mcp):** para ejecutar tests automatizados sobre los componentes contra `http://localhost:3000`.
- **GitHub MCP (@modelcontextprotocol/server-github):** para crear issues de tipo bug directamente desde Copilot Agent Mode.
- **Live Preview (VS Code):** para probar en localhost.
- **Chrome DevTools:** para verificar los componentes en distintos viewports.

---

## 6. Evidencia del proceso (completar al cierre)

> _Esta sección se completa una vez finalizada la implementación._

### 6.1 Prompt utilizado en Copilot Agent

```
(pendiente — pegar aquí el prompt exacto usado, incluyendo qué archivos se adjuntaron como contexto)
```

### 6.2 Resultado obtenido

(pendiente — describir qué generó Copilot y qué tan fiel fue al diseño esperado)

### 6.3 Ajustes manuales realizados

(pendiente — qué tuvo que corregirse manualmente y por qué)

### 6.4 Resumen de hallazgos con Playwright MCP

(pendiente — cuántos tests pasaron, cuántos fallaron, cuántos bugs se crearon, decisiones sobre qué hallazgos se registraron como bugs y cuáles no)
