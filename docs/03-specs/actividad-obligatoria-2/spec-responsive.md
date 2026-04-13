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

**Nota mobile:** El contenedor Gantt (`#contenedor-gantt`) usa altura fija de `420px` para garantizar visibilidad de 5-6 filas de tareas sin scroll excesivo en viewport de 390px. Este valor fue calibrado manualmente durante la implementación (ver sección 6.3) y está definido en `css/responsive.css` línea 188.

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

### 6.1 Prompt utilizado en Copilot Agent

```
Eres un desarrollador Frontend especializado en Responsive Design experto.
Voy a usar el servidor MCP de Figma conectado a mi archivo de diseño para
generar el archivo css/responsive.css de mi proyecto web.

## Contexto
- Tenés acceso al servidor MCP de Figma con el siguiente enlace al archivo:
https://www.figma.com/design/v1QKUD77dcsM0WDRMHapz6/Mockup-UX---Planificador-Gantt?node-id=43-2&p=f
- El spec de planificación está en:
  docs/03-specs/actividad-obligatoria-2/spec-responsive.md
- Los estilos base ya están definidos en: css/styles.css
- Los componentes ya están definidos en: css/components.css
- La imagen del mockup actualizado está en:
  docs/01-mockup/actividad-obligatoria-2/diseño-con-estilos.png

## Enfoque obligatorio
- Mobile-First: escribir primero los estilos para mobile y luego
  sobreescribir con media queries para tablet y desktop.
- Nunca usar max-width en las media queries, siempre min-width.
- No redefinir variables ni estilos base que ya existen en
  styles.css o components.css.

## Breakpoints a implementar
Usá exactamente estos breakpoints documentados:

/* Mobile: base (sin media query) → hasta 767px */
/* Tablet: min-width: 768px → hasta 1279px      */
/* Desktop: min-width: 1280px → en adelante     */

## Tarea
Analizá el mockup de Figma y los archivos CSS existentes, luego generá
el archivo css/responsive.css con la siguiente estructura y contenido:

### 1. Estilos Mobile (base, sin media query)
- Layout general en una sola columna
- Navegación adaptada a mobile (menú apilado o hamburguesa si el
  mockup lo define)
- Cards apiladas verticalmente
- Formularios a ancho completo
- Tipografías reducidas coherentes con el mockup
- Imágenes responsive (max-width: 100%)
- Sin overflow horizontal

### 2. Media Query Tablet (min-width: 768px)
- Layout de dos columnas donde el mockup lo indique
- Navegación adaptada a tablet
- Cards en grilla de 2 columnas con CSS Grid o Flexbox
- Formularios con layout de dos columnas si el mockup lo define
- Tipografías intermedias
- Ajustes de padding y margin para tablet

### 3. Media Query Desktop (min-width: 1280px)
- Layout completo según el mockup de Figma
- Navegación horizontal completa
- Cards en grilla de 3 o más columnas según el diseño
- Formularios con layout completo
- Tipografías en tamaño desktop
- Espaciados y márgenes completos según el mockup

## Requisitos técnicos obligatorios
- Usar SIEMPRE las variables CSS definidas en :root de styles.css,
  nunca valores hardcodeados
- Implementar layouts con Flexbox y/o CSS Grid según la sección:
  * Flexbox para navegación, headers y elementos en fila
  * CSS Grid para grillas de cards y layouts de dos o más columnas
- Garantizar que no haya overflow horizontal en ningún breakpoint
- Agregar comentarios explicativos en cada sección indicando
  las decisiones de layout tomadas
- Cada media query debe estar claramente separada y comentada

## Formato del archivo
El archivo debe seguir esta estructura de secciones comentadas:

/* ============================================
   RESPONSIVE.CSS — Mobile First Approach
   Breakpoints:
   - Mobile:  base (hasta 767px)
   - Tablet:  min-width: 768px
   - Desktop: min-width: 1280px
   ============================================ */

/* ============================================
   1. ESTILOS BASE — MOBILE
   ============================================ */

/* ============================================
   2. TABLET — min-width: 768px
   ============================================ */

@media (min-width: 768px) {

  /* 2.1 Navegación tablet */

  /* 2.2 Layout general tablet */

  /* 2.3 Cards tablet */

  /* 2.4 Formularios tablet */

  /* 2.5 Tipografías tablet */

}

/* ============================================
   3. DESKTOP — min-width: 1280px
   ============================================ */

@media (min-width: 1280px) {

  /* 3.1 Navegación desktop */

  /* 3.2 Layout general desktop */

  /* 3.3 Cards desktop */

  /* 3.4 Formularios desktop */

  /* 3.5 Tipografías desktop */

}

## Restricciones importantes
- No redefinir variables que ya están en styles.css
- No duplicar estilos que ya existen en styles.css o components.css
- Respetar el enfoque mobile-first en todo momento
- Usar siempre min-width en las media queries, nunca max-width
- Todos los elementos deben adaptarse sin generar scroll horizontal

## Output esperado
Crea el archivo css/responsive.css en la carpeta css/ del proyecto
con todo el contenido descripto arriba, extrayendo los valores
reales del mockup de Figma mediante el MCP y respetando los
estilos ya definidos en styles.css y components.css.
```

### 6.2 Resultado obtenido

Copilot Agent generó un archivo `responsive.css` con la estructura mobile-first solicitada, incluyendo los tres breakpoints (mobile base, tablet 768px, desktop 1280px) y las secciones comentadas según el formato del prompt.

**Lo que generó correctamente:**

- Estructura general mobile-first con estilos base para mobile y media queries con `min-width`.
- Header y footer apilados en columna para mobile, restaurados a fila en tablet/desktop.
- Toolbar con `flex-wrap` para mobile y fila completa en desktop.
- Formulario nueva tarea en columna (mobile), grid 2 columnas (tablet) y flex row (desktop).
- Uso consistente de variables CSS de `:root` sin valores hardcodeados.
- Comentarios explicativos en cada sección.

**Discrepancias detectadas respecto al mockup:**

- El contenedor Gantt no mostraba scroll horizontal en ningún viewport. La tabla se comprimía o desbordaba la página sin scrollbar visible.
- La sección `#descripcion` fue generada con estilos para un elemento que no existe en el HTML actual (navegación interna con links tipo chip).
- Las tipografías mobile no se redujeron lo suficiente en el header, causando desbordamiento del título del proyecto en viewports de 390px.

### 6.3 Ajustes manuales realizados

- Archivo styles.css: Cambio de width a max-content en la tabla Gantt para evitar compresión de columnas de 80px en viewports pequeños

- Archivo responsive.css
  se agrego linea 59-61

```
header[role="banner"] h1 {
  font-size: var(--font-size-sm);
}
```

se agrego linea 262-264

```
header[role="banner"] h1 {
    font-size: var(--font-size-base);
}
```

### 6.4 Decisiones finales de breakpoints

Se confirman los breakpoints definidos en la sección 2 (Mobile ≤767px, Tablet 768px-1023px, Desktop ≥1024px) como efectivos para reorganizar el layout del planificador según el espacio disponible, pasando de apilado vertical (mobile) a dashboard completo (desktop).

Adicionalmente, durante la implementación se detectó un desbordamiento del título principal de la aplicación (`h1` en el header) en viewports de 390px (como iPhone 14 Pro). Para solucionarlo, se agregó una regla que reduce el tamaño de la fuente a `var(--font-size-sm)` en el breakpoint mobile (mobile-first), restaurándolo a `var(--font-size-base)` a partir de tablet.
