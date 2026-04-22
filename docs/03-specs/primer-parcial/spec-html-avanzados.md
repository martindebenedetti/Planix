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
Eres un desarrollador Frontend especializado en componentes HTML avanzados.

Necesito implementar dos componentes HTML avanzados en el archivo index.html
del proyecto Planificador de Tareas (Planix), integrados con Bootstrap.

## Contexto

- El spec de planificación está en:
  docs/03-specs/primer-parcial/spec-html-avanzados.md
- Los estilos base están en: css/styles.css
- Los componentes están en: css/components.css
- Bootstrap ya está instalado vía CDN en el proyecto
- Los overrides de Bootstrap están en: css/bootstrap-overrides.css

## Componente 1: iframe de YouTube

Agregar una sección <section id="video-tutorial"> dentro del <main>,
antes de la sección #nueva-tarea.

Requisitos:
- Incluir un iframe con un video de YouTube sobre qué es un diagrama de Gantt
  (usar este URL de embed: https://www.youtube.com/watch?v=7dXAFrxBOCY)
- Usar el helper ratio de Bootstrap para que sea responsive:
  <div class="ratio ratio-16x9">
- Envolver en un contenedor con clases Bootstrap: container-fluid, py-3, px-4
- Agregar un título h2 encima del video con texto "¿Qué es un Diagrama de Gantt?"
  estilizado con clases Bootstrap (fs-6, fw-semibold, text-secondary, text-uppercase,
  mb-2) para que sea coherente con el estilo del título "Nueva tarea"
- Agregar un borde inferior (border-bottom) para separar visualmente de la
  siguiente sección
- El iframe debe tener los atributos: title (accesibilidad), allowfullscreen,
  loading="lazy", y frameborder="0"
- Limitar el ancho máximo del video a 640px con una clase o estilo para que
  no ocupe todo el ancho en desktop

## Componente 2: details y summary

Agregar una sección <section id="info-proyecto"> dentro del <main>,
antes de la sección #video-tutorial (es decir, será lo primero después
del toolbar).

Requisitos:
- Incluir 3 bloques <details> con <summary> que funcionen como acordeón
  nativo HTML sin JavaScript
- Los 3 bloques deben contener:
  1. "Acerca del Proyecto" — Descripción breve de Planix: qué es, para qué
     sirve, quién lo desarrolla (Prog. Web I - UCES 2026)
  2. "Cómo usar el Planificador" — Instrucciones paso a paso: agregar tarea,
     ver progreso, interpretar las barras del Gantt
  3. "Leyenda del Diagrama" — Explicación de los colores y símbolos:
     barra azul = progreso, barra gris oscura = grupo, fondo celeste = columnas
     de semanas
- Estilizar cada <details> con clases Bootstrap: card, mb-2
- Estilizar cada <summary> con clases Bootstrap: card-header, fw-medium,
  cursor-pointer
- El contenido expandido debe ir dentro de un <div class="card-body">
  con texto en font-size pequeño (fs-6 o Bootstrap text utilities)
- Envolver toda la sección en un contenedor con clases: container-fluid,
  py-2, px-4, border-bottom
- Agregar un título h2 encima con texto "Información del Proyecto"
  con el mismo estilo que los otros h2 (fs-6, fw-semibold, text-secondary,
  text-uppercase, mb-2)
- El primer <details> debe tener el atributo "open" para que aparezca
  expandido por defecto

## Estilos adicionales en bootstrap-overrides.css

Si es necesario, agregar en css/bootstrap-overrides.css:
- Cursor pointer para el elemento summary
- Transición suave para la apertura de details
- Eliminar el triángulo nativo de summary y reemplazarlo con un ícono
  de Bootstrap (chevron) o mantener el nativo pero estilizado
- Asegurar que los card con details no tengan conflicto visual con
  los estilos existentes de .card en components.css

## Restricciones

- No modificar los estilos existentes en styles.css ni components.css
  a menos que sea estrictamente necesario para evitar conflictos
- Usar clases de Bootstrap siempre que sea posible, minimizar CSS custom
- Asegurar que no haya overflow horizontal en ningún viewport
- Mantener la accesibilidad: aria-labels donde corresponda, title en el iframe
- Los componentes deben verse bien en 390px (mobile), 820px (tablet)
  y 1920px (desktop)

## Output esperado

1. Modificar index.html agregando las dos secciones nuevas dentro del <main>
2. Agregar estilos necesarios en css/bootstrap-overrides.css
3. No crear archivos nuevos de CSS
```

**Prompt para test-case-9.md (iframe YouTube)**

```
Eres un QA Tester especializado en testing responsive con Playwright MCP.

Necesito ejecutar tests automatizados sobre el Componente 1 (iframe de YouTube)
del proyecto Planix y documentar los resultados en test-case-9.md.

## Contexto

- URL del proyecto: http://localhost:3000 (asegurarse de que Live Preview
  está corriendo antes de ejecutar los tests)
- Componente a testear: <section id="video-tutorial"> con iframe de YouTube
  dentro de <div class="ratio ratio-16x9">
- Spec de referencia: docs/03-specs/primer-parcial/spec-html-avanzados.md
- Template a seguir para el test case (estructura: Objetivo, Herramientas,
  Viewports probados, Pasos ejecutados, Resultados, Capturas, Issues generados)

## Viewports obligatorios a probar

1. iPhone 14 Pro: 390×844
2. Samsung Galaxy S23: 412×915
3. iPad Air: 820×1180

## Tareas a ejecutar con Playwright MCP

Para cada viewport:

1. Navegar a http://localhost:3000 con viewport emulation del dispositivo.
2. Localizar la sección #video-tutorial y verificar:
   - Que el iframe esté presente y visible.
   - Que mantenga la proporción 16:9 (ratio de Bootstrap).
   - Que el ancho del iframe no cause overflow horizontal en la página.
   - Que el título "¿Qué es un Diagrama de Gantt?" se muestre correctamente
     encima del video.
3. Medir el ancho real del iframe y compararlo con el ancho del viewport.
4. Tomar captura de pantalla de la sección completa del video.
5. Verificar con document.documentElement.scrollWidth que no haya scroll
   horizontal en el body.

## Hallazgos a registrar como bugs

Por cada problema detectado, crear un issue en GitHub usando GitHub MCP con:
- Título descriptivo (ej: "[BUG] Video tutorial desborda en viewport móvil 390px")
- Descripción con el viewport afectado, comportamiento esperado vs observado,
  severidad sugerida (Baja/Media/Alta).
- Labels: "bug", "responsive", "html-avanzados"
- Asignar al autor (Martin Debenedetti).

NO crear issues por:
- Retrasos de carga del video (depende de YouTube, no del proyecto).
- Comportamiento del player de YouTube (no forma parte del scope).

## Documentación en test-case-9.md

Crear/actualizar docs/04-testing/test-case-9.md con:

### Estructura obligatoria:

1. **Título**: Test Case 9 — Responsive: Implementación de Componente
   Avanzado HTML (iframe YouTube)

2. **Objetivo**: Validar que el iframe de YouTube se renderice correctamente,
   mantenga proporción 16:9 y sea responsive en los viewports obligatorios.

3. **Herramientas utilizadas**:
   - Playwright MCP con viewport emulation
   - GitHub MCP para creación de issues

4. **Viewports probados**: listado con los 3 dispositivos.

5. **Prompt utilizado con Playwright MCP**: pegar el prompt exacto usado
   en bloque de código.

6. **Pasos ejecutados**: listado numerado de las acciones realizadas.

7. **Resultados por viewport**: tabla o secciones con:
   - iPhone 14 Pro (390×844): [PASS/FAIL] + observaciones
   - Samsung Galaxy S23 (412×915): [PASS/FAIL] + observaciones
   - iPad Air (820×1180): [PASS/FAIL] + observaciones

8. **Capturas de pantalla**: guardar en docs/04-testing/capturas/tc-9/
   con nombres descriptivos (ej: tc9-iphone14pro.png).

9. **Issues generados**: listado con link a cada issue creado en GitHub.

10. **Conclusión**: resumen de si el componente pasa los criterios de
    aceptación o requiere ajustes.

## Output esperado

1. Ejecutar los tests con Playwright MCP contra los 3 viewports.
2. Crear issues en GitHub por cada hallazgo relevante.
3. Guardar capturas en docs/04-testing/capturas/tc-9/.
4. Generar el archivo docs/04-testing/test-case-9.md con toda la evidencia.
```

**Prompt para test-case-10.md (details/summary)**

```
Eres un QA Tester especializado en testing responsive con Playwright MCP.

Necesito ejecutar tests automatizados sobre el Componente 2 (details y summary)
del proyecto Planix y documentar los resultados en test-case-10.md.

## Contexto

- URL del proyecto: http://localhost:3000 (asegurarse de que Live Preview
  está corriendo antes de ejecutar los tests)
- Componente a testear: <section id="info-proyecto"> con 3 bloques
  <details><summary>...</summary>...</details>
- Spec de referencia: docs/03-specs/primer-parcial/spec-html-avanzados.md
- Template a seguir para el test case (estructura: Objetivo, Herramientas,
  Viewports probados, Pasos ejecutados, Resultados, Capturas, Issues generados)

## Viewports obligatorios a probar

1. iPhone 14 Pro: 390×844
2. Samsung Galaxy S23: 412×915
3. iPad Air: 820×1180

## Tareas a ejecutar con Playwright MCP

Para cada viewport:

1. Navegar a http://localhost:3000 con viewport emulation del dispositivo.
2. Localizar la sección #info-proyecto y verificar:
   - Que los 3 bloques <details> estén presentes y visibles.
   - Que el primer bloque esté expandido por defecto (atributo "open").
   - Que los otros dos bloques estén colapsados.
3. Hacer clic en el <summary> de cada bloque y verificar:
   - Que el bloque expandido se contraiga correctamente.
   - Que el bloque colapsado se expanda correctamente.
   - Que el contenido dentro de <div class="card-body"> sea legible.
4. Medir el ancho de los bloques y verificar que no haya overflow horizontal.
5. Tomar captura de pantalla con:
   - Estado inicial (solo primer bloque expandido).
   - Estado con todos los bloques expandidos.
   - Estado con todos los bloques colapsados.
6. Verificar accesibilidad: que el summary tenga cursor pointer y responda
   al teclado (tecla Enter).

## Hallazgos a registrar como bugs

Por cada problema detectado, crear un issue en GitHub usando GitHub MCP con:
- Título descriptivo (ej: "[BUG] Details no responde al teclado en viewport
  móvil").
- Descripción con el viewport afectado, comportamiento esperado vs observado,
  severidad sugerida (Baja/Media/Alta).
- Labels: "bug", "responsive", "html-avanzados", "accesibilidad".
- Asignar al autor (Martin Debenedetti).

NO crear issues por:
- Diferencias visuales mínimas entre browsers (depende del UA stylesheet).
- Comportamiento nativo del triángulo del summary en distintos browsers.

## Documentación en test-case-10.md

Crear/actualizar docs/04-testing/test-case-10.md con:

### Estructura obligatoria:

1. **Título**: Test Case 10 — Responsive: Implementación de Componente
   Avanzado HTML (details/summary).

2. **Objetivo**: Validar que los elementos <details> y <summary> funcionen
   como acordeón nativo, se expandan y colapsen correctamente, y sean
   responsive en los viewports obligatorios.

3. **Herramientas utilizadas**:
   - Playwright MCP con viewport emulation
   - GitHub MCP para creación de issues

4. **Viewports probados**: listado con los 3 dispositivos.

5. **Prompt utilizado con Playwright MCP**: pegar el prompt exacto usado
   en bloque de código.

6. **Pasos ejecutados**: listado numerado de las acciones realizadas.

7. **Resultados por viewport**: tabla o secciones con:
   - iPhone 14 Pro (390×844): [PASS/FAIL] + observaciones
   - Samsung Galaxy S23 (412×915): [PASS/FAIL] + observaciones
   - iPad Air (820×1180): [PASS/FAIL] + observaciones

8. **Capturas de pantalla**: guardar en docs/04-testing/capturas/tc-10/
   con nombres descriptivos (ej: tc10-iphone14pro-expandido.png).

9. **Issues generados**: listado con link a cada issue creado en GitHub.

10. **Conclusión**: resumen de si el componente pasa los criterios de
    aceptación o requiere ajustes.

## Output esperado

1. Ejecutar los tests con Playwright MCP contra los 3 viewports.
2. Crear issues en GitHub por cada hallazgo relevante.
3. Guardar capturas en docs/04-testing/capturas/tc-10/.
4. Generar el archivo docs/04-testing/test-case-10.md con toda la evidencia.
```

### 6.2 Resultado obtenido

Se implementaron exitosamente los dos componentes requeridos en el archivo `index.html`. El **Componente 1 (`<iframe>` de YouTube)** se integró utilizando la clase `ratio ratio-16x9` de Bootstrap, envuelto en un contenedor con `max-width: 640px;` para evitar su desbordamiento en vistas amplias. El **Componente 2 (Acordeón nativo con `<details>` y `<summary>`)** fue implementado empleando tarjetas de Bootstrap (`card`) y una configuración en CSS para reemplazar el marcador de lista predeterminado por un icono tipo *chevron* con animaciones ligeras para un tacto pulido. Ambas integraciones mantuvieron plena fidelidad al diseño base sin romper los estilos previos.

### 6.3 Ajustes manuales realizados

No se requirieron ajustes manuales considerables ni correcciones por fuera del prompt especificado. Todos los estilos añadidos (como el ocultamiento del triángulo nativo y la inserción del *chevron*) se hicieron inyectando variables CSS en `bootstrap-overrides.css` de manera modular para preservar la estructura CSS existente.

### 6.4 Resumen de hallazgos con Playwright MCP

Se ejecutaron un total de **6 tests** divididos en los dos componentes principales evaluando 3 viewports obligatorios (*iPhone 14 Pro*, *Samsung Galaxy S23*, y *iPad Air*):

- **Componente 1 (Iframe):** Todos los tests **pasaron** sin errores. El iframe mantuvo su proporción y contención sin causar overflow horizontal.
- **Componente 2 (Acordeón Details):** Todos los tests **pasaron**. Los elementos se expanden y colapsan adecuadamente tanto táctilmente como a través del teclado (accesibilidad usando `Enter` y tabulaciones con focus). No hubo overflow de contenido en los devices testeados.
- **Bugs generados:** **0**. No se reportó ningún bug en GitHub, dado que el comportamiento y la adaptación a todos los viewports fueron perfectos desde la primera implementación.
