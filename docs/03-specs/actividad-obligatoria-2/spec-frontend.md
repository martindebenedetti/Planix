# Especificación previa — Frontend/CSS (Actividad Obligatoria N°2)

**Título:** Especificación Frontend — Actividad Obligatoria N°2
**Rol:** Desarrollador Frontend/CSS
**Autor:** Martin Debenedetti
**Fecha:** 30-03-2026
**Rama:** feature/dev-frontend-css-add-styles

## ¿Qué se va a hacer?

Se generarán los archivos CSS necesarios para implementar los estilos definidos en el mockup de Figma, antes de commitear cualquier CSS final. Los archivos a crear son:

- `css/styles.css`: contendrá variables CSS en `:root` (paleta de colores, tipografías, tamaños y espaciados), un reset/normalización base, declaraciones de tipografías y reglas globales de layout (tipografías base, line-height, tamaños de texto, contenedores principales y utilidades de display).
- `css/components.css`: contendrá estilos modulados para los componentes reutilizables del proyecto: botones (variantes y tamaños), cards, navegación (barra y enlaces), formularios (inputs, labels, selects, validaciones visuales) y estados interactivos (`:hover`, `:focus`, `:active`).

## ¿Por qué?

Separar estilos por responsabilidad mejora la mantenibilidad y la colaboración: `styles.css` centraliza tokens y layout global, mientras que `components.css` agrupa piezas reutilizables con menor riesgo de dependencias implícitas. Esto facilita revisiones, theming, y la integración con el flujo MCP de Figma y las pruebas de Responsive.

## Herramientas

- Figma MCP (servidor MCP de Figma) para extraer tokens y generar bases de estilo automáticas.
- Copilot Agent Mode para asistir en la generación de snippets y en la creación del scaffold CSS inicial.
- Editor local (VS Code) y control de versiones en la rama `feature/dev-frontend-css-add-styles`.

## Criterios de aceptación (checklist verificable)

- [ ] `css/styles.css` creado e incluido en el proyecto con: variables en `:root` para colores, tipografías y espaciados.
- [ ] Reset CSS o normalize aplicado y documentado en `css/styles.css`.
- [ ] Tipografías declaradas y jerarquía tipográfica implementada: `h1`–`h6`, `body`, `label` conforme al mockup (familia, peso, tamaños y line-height).
- [ ] Layout base coherente con Figma: contenedores principales, grid/flex utilities y reglas de responsividad iniciales.
- [ ] `css/components.css` creado con implementación de los siguientes componentes:
  - [ ] Botones: variantes primaria/secundaria, estados deshabilitado, tamaños (small/medium/large).
  - [ ] Cards: estructura interna, sombra, borde y espaciado interno (padding).
  - [ ] Navegación: barra superior, enlaces, estado activo y versiones responsive.
  - [ ] Formularios: inputs, labels, textarea, select; estilos de validación visual (error/success).
- [ ] Estados interactivos implementados y accesibles: `:hover`, `:focus`, `:active` y `:disabled` cuando aplique.
- [ ] Uso correcto de selectores, herencia y especificidad: predominar clases y utilidades; evitar `!important` salvo justificación documentada.
- [ ] Box model controlado explícitamente: `box-sizing`, márgenes, paddings y bordes definidos y documentados.
- [ ] Diferenciación entre elementos en línea y en bloque (utilidades o notas en el reset para `display` cuando sea necesario).
- [ ] Comentarios explicativos en los archivos CSS para tokens, secciones y decisiones relevantes.
- [ ] Pruebas de integración con el Especialista en Responsive realizadas y aprobadas (checklist de viewport mínimos: mobile, tablet, desktop).
- [ ] Todos los issues/bugs reportados por QA resueltos y cerrados antes del merge a la rama de integración.

## Evidencia del proceso (placeholders — completar al cerrar la tarea)

- Prompt exacto utilizado con Figma MCP (pegar aquí el prompt usado):

Prompt para generar css/styles.css

```
Eres un desarrollador Frontend/CSS experto. Voy a usar el servidor MCP
de Figma conectado a mi archivo de diseño para generar el archivo
css/styles.css de mi proyecto web.

## Contexto
- Tenés acceso al servidor MCP de Figma con el siguiente enlace al archivo:
https://www.figma.com/design/v1QKUD77dcsM0WDRMHapz6/Mockup-UX---Planificador-Gantt?node-id=43-2&p=f&t=APhYfaVtgSRz8F3g-0
- El spec de planificación está en:
  docs/03-specs/actividad-obligatoria-2/spec-frontend.md
- El archivo HTML base está en: index.html

## Tarea
Usando el MCP de Figma, extraé todos los tokens de diseño del mockup
y generá el archivo css/styles.css con la siguiente estructura y contenido:

### 1. Variables CSS en :root
- Colores primarios, secundarios y neutros definidos en el mockup
- Tipografías: familia de fuente, tamaños por jerarquía (h1, h2, h3,
  h4, h5, h6, body, labels)
- Espaciados: padding y margin base (sm, md, lg, xl)
- Border-radius definidos en el mockup
- Sombras si existen en el diseño

### 2. Reset CSS
- Aplicar un reset moderno que incluya:
  - box-sizing: border-box en todos los elementos
  - margin y padding en 0 por defecto
  - Reset de listas
  - Reset de links
  - Imágenes responsive por defecto

### 3. Tipografías
- Aplicar la familia tipográfica definida en :root
- Definir tamaños, pesos y alturas de línea para cada nivel
  de jerarquía (h1-h6, p, label, small)
- Coherente con el mockup de Figma

### 4. Colores base
- Aplicar colores de fondo y texto base al body
- Definir clases utilitarias de color si el mockup las requiere

### 5. Layout base
- Definir el contenedor principal con max-width coherente al mockup
- Aplicar display flex o grid al layout general según el diseño
- Definir el header, main y footer con sus dimensiones base

## Requisitos técnicos obligatorios
- Usar variables CSS definidas en :root en todo el archivo,
  nunca valores hardcodeados
- Aplicar selectores de forma correcta aprovechando herencia
  y especificidad
- Implementar box model con control explícito de padding,
  margin y border
- Diferenciación de elementos en línea y en bloque
  mediante CSS apropiado
- Agregar comentarios explicativos en cada sección del código
  indicando las decisiones de estilo tomadas

## Formato del archivo
El archivo debe seguir esta estructura de secciones comentadas:

/* ============================================
   1. VARIABLES CSS
   ============================================ */

/* ============================================
   2. RESET
   ============================================ */

/* ============================================
   3. TIPOGRAFÍAS
   ============================================ */

/* ============================================
   4. COLORES BASE
   ============================================ */

/* ============================================
   5. LAYOUT BASE
   ============================================ */

## Output esperado
Crea el archivo css/styles.css en la raíz del proyecto con
todo el contenido descripto arriba, extrayendo los valores
reales del mockup de Figma mediante el MCP.

```

Prompt para generar css/components.css

```
Eres un desarrollador Frontend/CSS experto. Voy a usar el servidor MCP
de Figma conectado a mi archivo de diseño para generar el archivo
css/components.css de mi proyecto web.

## Contexto
- Tenés acceso al servidor MCP de Figma con el siguiente enlace al archivo:
https://www.figma.com/design/v1QKUD77dcsM0WDRMHapz6/Mockup-UX---Planificador-Gantt?node-id=54-518&p=f&t=0d28Kesq4cAlU8O5-0
- El spec de planificación está en:
  docs/03-specs/actividad-obligatoria-2/spec-frontend.md
- Las variables CSS base ya están definidas en: css/styles.css
- El archivo HTML base está en: index.html

## Tarea
Usando el MCP de Figma y tomando como base las variables ya definidas
en css/styles.css, generá el archivo css/components.css con todos los
componentes reutilizables del proyecto.

## Componentes a generar

### 1. Navegación
- Estilos del nav principal
- Links de navegación con estados hover y focus
- Menú activo con clase .active
- Coherente con el diseño del mockup de Figma

### 2. Botones
- Botón primario (.btn-primary)
- Botón secundario (.btn-secondary)
- Botón deshabilitado (.btn:disabled)
- Estados hover, focus y active para cada variante
- Tamaños y border-radius según el mockup

### 3. Cards
- Contenedor de card (.card)
- Header de card (.card-header)
- Body de card (.card-body)
- Footer de card (.card-footer)
- Estado hover de la card si el mockup lo define
- Sombras y bordes según el diseño

### 4. Formularios
- Estilos de inputs (.form-input)
- Estilos de labels (.form-label)
- Área de texto (.form-textarea)
- Select (.form-select)
- Grupo de formulario (.form-group)
- Estados focus de cada campo
- Estado de error (.form-input--error) si aplica
- Mensajes de validación

### 5. Header
- Estilos del header principal
- Logo y título
- Coherente con el mockup

### 6. Footer
- Estilos del footer principal
- Coherente con el mockup

## Requisitos técnicos obligatorios
- Usar SIEMPRE las variables CSS definidas en :root de styles.css,
  nunca valores hardcodeados
- Todos los estados interactivos deben estar definidos:
  hover, focus, active y disabled donde corresponda
- Aplicar selectores de forma correcta aprovechando herencia
  y especificidad sin sobreescribir estilos base de styles.css
- Implementar box model con control explícito de padding,
  margin y border en cada componente
- Diferenciar elementos en línea y en bloque mediante CSS apropiado
- Agregar comentarios explicativos en cada sección indicando
  las decisiones de estilo tomadas

## Formato del archivo
El archivo debe seguir esta estructura de secciones comentadas:

/* ============================================
   1. NAVEGACIÓN
   ============================================ */

/* ============================================
   2. BOTONES
   ============================================ */

/* ============================================
   3. CARDS
   ============================================ */

/* ============================================
   4. FORMULARIOS
   ============================================ */

/* ============================================
   5. HEADER
   ============================================ */

/* ============================================
   6. FOOTER
   ============================================ */

## Restricciones importantes
- No redefinir variables que ya están en styles.css
- No duplicar estilos que ya existen en styles.css
- Cada componente debe ser reutilizable e independiente
- Los estilos deben ser coherentes con el mockup de Figma

## Output esperado
Crea el archivo css/components.css en la carpeta css/ del proyecto
con todo el contenido descripto arriba, extrayendo los valores
reales del mockup de Figma mediante el MCP y respetando las
variables ya definidas en css/styles.css.
```

- Resultado obtenido (archivo/snipet generado por la IA o export desde MCP):

```
/* ============================================
   css/styles.css — Planificador de Tareas (Gantt)
   Autora: Martin Debenedetti
   Rama: feature/dev-frontend-css-add-styles
   Tokens extraídos del mockup de Figma:
   https://www.figma.com/design/v1QKUD77dcsM0WDRMHapz6/
   ============================================ */

/* ============================================
   1. VARIABLES CSS
   Todos los tokens de diseño centralizados aquí.
   Ningún valor de color, tipografía o espaciado
   debe escribirse hardcodeado fuera de esta sección.
   ============================================ */

:root {

  /* ── Colores primarios ── */
  /* Azul principal extraído del mockup (#0f49bd) */
  --color-primary:         #0f49bd;
  --color-primary-dark:    #0b3a96;   /* hover / pressed */
  --color-primary-light:   #d6e3fa;   /* fondo sutil de elementos activos */
  --color-primary-10:      rgba(15, 73, 189, 0.10); /* badge activo toolbar */

  /* ── Colores de estado ── */
  --color-success:         #16a34a;   /* badge "En Ejecución" */
  --color-success-bg:      #dcfce7;
  --color-warning:         #d97706;
  --color-danger:          #dc2626;   /* ruta crítica */
  --color-danger-bg:       #fee2e2;

  /* ── Neutros (escala slate del mockup) ── */
  /* slate-50 → fondo toolbar y footer */
  --color-slate-50:        #f8fafc;
  /* slate-100 → fondo cabecera de tabla */
  --color-slate-100:       #f1f5f9;
  /* slate-200 → fondo barra de progreso vacía */
  --color-slate-200:       #e2e8f0;
  --color-slate-300:       #cbd5e1;
  --color-slate-400:       #94a3b8;
  --color-slate-500:       #64748b;   /* texto secundario */
  --color-slate-600:       #475569;
  --color-slate-700:       #334155;   /* filas de grupo Gantt */
  --color-slate-800:       #1e293b;
  --color-slate-900:       #0f172a;

  /* ── Colores base ── */
  /* Fondo general de la app extraído del mockup */
  --color-bg:              #f6f6f8;
  --color-bg-white:        #ffffff;
  --color-text:            var(--color-slate-800);
  --color-text-muted:      var(--color-slate-500);
  --color-border:          var(--color-slate-200);

  /* ── Tipografía ── */
  /* Familia principal: Inter / Public Sans (diseño Figma usa ambas).
     Se importa Inter como primer opción; Public Sans como alternativa.
     Ambas son sans-serif de alta legibilidad para interfaces de datos. */
  --font-family-base:      'Inter', 'Public Sans', system-ui, -apple-system, sans-serif;
  --font-family-mono:      'JetBrains Mono', 'Fira Code', monospace;

  /* Escala tipográfica (rem, base = 16px) */
  --font-size-xs:          0.75rem;   /* 12px — labels, badges */
  --font-size-sm:          0.875rem;  /* 14px — texto secundario, tabla */
  --font-size-base:        1rem;      /* 16px — body */
  --font-size-lg:          1.125rem;  /* 18px — h6 */
  --font-size-xl:          1.25rem;   /* 20px — h5 */
  --font-size-2xl:         1.5rem;    /* 24px — h4 */
  --font-size-3xl:         1.875rem;  /* 30px — h3 */
  --font-size-4xl:         2.25rem;   /* 36px — h2 */
  --font-size-5xl:         3rem;      /* 48px — h1 */

  /* Pesos tipográficos */
  --font-weight-normal:    400;
  --font-weight-medium:    500;
  --font-weight-semibold:  600;
  --font-weight-bold:      700;

  /* Alturas de línea */
  --line-height-tight:     1.25;
  --line-height-snug:      1.375;
  --line-height-base:      1.5;
  --line-height-relaxed:   1.625;

  /* ── Espaciados ── */
  /* Sistema de 4 px multiplicado: permite alineación consistente */
  --space-1:    0.25rem;  /* 4px */
  --space-2:    0.5rem;   /* 8px */
  --space-3:    0.75rem;  /* 12px */
  --space-4:    1rem;     /* 16px — base */
  --space-5:    1.25rem;  /* 20px */
  --space-6:    1.5rem;   /* 24px */
  --space-8:    2rem;     /* 32px */
  --space-10:   2.5rem;   /* 40px */
  --space-12:   3rem;     /* 48px */
  --space-16:   4rem;     /* 64px */

  /* Aliases semánticos */
  --space-sm:   var(--space-2);
  --space-md:   var(--space-4);
  --space-lg:   var(--space-6);
  --space-xl:   var(--space-8);

  /* ── Border-radius ── */
  /* El mockup usa bordes sutiles redondeados en botones y cards */
  --radius-sm:    0.25rem;  /* 4px — badges, inputs */
  --radius-md:    0.375rem; /* 6px — botones, tarjetas */
  --radius-lg:    0.5rem;   /* 8px — paneles, modales */
  --radius-xl:    0.75rem;  /* 12px — cards grandes */
  --radius-full:  9999px;   /* pill — chips, indicadores circulares */

  /* ── Sombras ── */
  /* El mockup define sombras suaves para elementos flotantes */
  --shadow-sm:  0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.10),
                0 2px 4px -2px rgba(0, 0, 0, 0.10);
  --shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.10),
                0 4px 6px -4px rgba(0, 0, 0, 0.10);

  /* ── Dimensiones de layout ── */
  /* Alturas fijas de las barras estructurales (shrink-0 en flex-col) */
  --header-height:  64px;
  --toolbar-height: 48px;
  --footer-height:  40px;

  /* Ancho de columnas del Gantt (ancho fijo por semana, ajustable con JS) */
  --gantt-col-width: 80px;

  /* Anchos fijos de columnas de datos en la tabla */
  --col-id:           48px;
  --col-duracion:     72px;
  --col-fecha:        104px;
  --col-predecesora:  96px;
  --col-responsable:  140px;

  /* Transiciones */
  --transition-fast:   150ms ease;
  --transition-base:   200ms ease;
  --transition-slow:   300ms ease;
}

/* ============================================
   2. RESET
   Reset moderno que asegura un punto de partida
   homogéneo en todos los navegadores, con
   control explícito del box model.
   ============================================ */

/* Box-sizing universal: border-box garantiza que padding
   y border no amplíen el tamaño declarado del elemento */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Previene overflow horizontal no deseado */
html {
  overflow-x: hidden;
  /* Suaviza el scroll ante anclas o focus programático */
  scroll-behavior: smooth;
  /* Tamaño base coherente con la escala de rem definida */
  font-size: 16px;
  /* Mejora el renderizado de texto en WebKit */
  -webkit-text-size-adjust: 100%;
}

/* Reset de listas: elimina bullets y sangría por defecto.
   Las listas semánticas recuperarán estilos a nivel de componente. */
ul,
ol {
  list-style: none;
}

/* Reset de links: hereda color y elimina subrayado por defecto.
   Cada componente declarará sus propios estilos de enlace. */
a {
  color: inherit;
  text-decoration: none;
}

/* Imágenes responsive: evita overflow y preserva aspect ratio */
img,
svg,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Botones: heredan tipografía del padre y se comportan
   como elemento de bloque en línea para facilitar el layout */
button,
input,
select,
textarea {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}

/* Tabla: elimina el espacio entre celdas */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Texto de ayuda invisible solo para lectores de pantalla */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ============================================
   3. TIPOGRAFÍAS
   Jerarquía tipográfica coherente con el mockup.
   Se aplica la familia definida en :root;
   los tamaños siguen la escala modular declarada.
   ============================================ */

/* Importación de fuentes (Google Fonts).
   Inter tiene excelente legibilidad para interfaces
   de datos densas como el diagrama de Gantt. */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family:   var(--font-family-base);
  font-size:     var(--font-size-base);
  font-weight:   var(--font-weight-normal);
  line-height:   var(--line-height-base);
  color:         var(--color-text);
}

/* Encabezados: pesos y tamaños decrecientes.
   Los h1-h6 usan line-height ajustado para titulares. */
h1 {
  font-size:    var(--font-size-5xl);
  font-weight:  var(--font-weight-bold);
  line-height:  var(--line-height-tight);
}

h2 {
  font-size:    var(--font-size-4xl);
  font-weight:  var(--font-weight-bold);
  line-height:  var(--line-height-tight);
}

h3 {
  font-size:    var(--font-size-3xl);
  font-weight:  var(--font-weight-semibold);
  line-height:  var(--line-height-snug);
}

h4 {
  font-size:    var(--font-size-2xl);
  font-weight:  var(--font-weight-semibold);
  line-height:  var(--line-height-snug);
}

h5 {
  font-size:    var(--font-size-xl);
  font-weight:  var(--font-weight-medium);
  line-height:  var(--line-height-base);
}

h6 {
  font-size:    var(--font-size-lg);
  font-weight:  var(--font-weight-medium);
  line-height:  var(--line-height-base);
}

/* Párrafo: hereda tamaño del body; margen inferior para
   separación visual entre bloques de texto consecutivos */
p {
  line-height:  var(--line-height-relaxed);
}

/* Labels: elemento en línea, tamaño levemente reducido
   para no competir visualmente con el input asociado */
label {
  display:       inline-block;
  font-size:     var(--font-size-sm);
  font-weight:   var(--font-weight-medium);
  color:         var(--color-slate-700);
  line-height:   var(--line-height-snug);
}

/* Texto pequeño y captions: auxiliares, badges, metadatos */
small,
caption {
  font-size:    var(--font-size-xs);
  line-height:  var(--line-height-base);
  color:        var(--color-text-muted);
}

/* Texto en negrita semántico */
strong {
  font-weight:  var(--font-weight-semibold);
}

/* Código en línea */
code {
  font-family:  var(--font-family-mono);
  font-size:    var(--font-size-sm);
  background:   var(--color-slate-100);
  padding:      var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
}

/* address: hereda tipografía normal (no italic por defecto del UA) */
address {
  font-style: normal;
  font-size:  var(--font-size-sm);
  color:      var(--color-text-muted);
}

/* ============================================
   4. COLORES BASE
   Fondo y color de texto base aplicados al body.
   Clases utilitarias de color mapeadas al sistema
   de variables definido en :root.
   ============================================ */

body {
  background-color: var(--color-bg);
  color:            var(--color-text);
}

/* ── Utilidades de color de texto ── */
/* Permiten aplicar el sistema de colores sin inline styles */
.text-primary   { color: var(--color-primary); }
.text-muted     { color: var(--color-text-muted); }
.text-success   { color: var(--color-success); }
.text-danger    { color: var(--color-danger); }
.text-warning   { color: var(--color-warning); }

/* ── Utilidades de color de fondo ── */
.bg-primary     { background-color: var(--color-primary); color: var(--color-bg-white); }
.bg-white       { background-color: var(--color-bg-white); }
.bg-slate-50    { background-color: var(--color-slate-50); }
.bg-slate-100   { background-color: var(--color-slate-100); }
.bg-success     { background-color: var(--color-success-bg); color: var(--color-success); }
.bg-danger      { background-color: var(--color-danger-bg); color: var(--color-danger); }

/* ── Badge de estado "En Ejecución" ── */
/* Elemento en línea con fondo verde y punto indicador */
.badge-status {
  display:        inline-flex;
  align-items:    center;
  gap:            var(--space-1);
  font-size:      var(--font-size-xs);
  font-weight:    var(--font-weight-medium);
  padding:        var(--space-1) var(--space-2);
  border-radius:  var(--radius-full);
  background:     var(--color-success-bg);
  color:          var(--color-success);
}

/* ── Separador visual ── */
.separator {
  color:        var(--color-slate-300);
  user-select:  none;
}

/* ── Indicador de ruta crítica ── */
.ruta-critica {
  color:       var(--color-danger);
  font-weight: var(--font-weight-medium);
}

/* ============================================
   5. LAYOUT BASE
   El planificador ocupa 100% del viewport en
   altura (h-screen) y organiza sus secciones
   en una columna flex sin overflow externo.
   Estructura: header → nav → main → footer
   ============================================ */

/* Raíz del layout: columna flex que llena la pantalla.
   overflow:hidden en html+body evita doble scrollbar. */
html,
body {
  height:     100%;
  overflow:   hidden;
}

body {
  display:        flex;
  flex-direction: column;
  min-height:     100vh;
  overflow:       hidden;
}

/* ── HEADER ──
   Barra superior con información del proyecto y progreso.
   shrink-0 impide que se comprima al flexionar el main. */
header[role="banner"] {
  display:          flex;
  align-items:      center;
  justify-content:  space-between;
  gap:              var(--space-4);
  padding:          0 var(--space-6);
  height:           var(--header-height);
  min-height:       var(--header-height);
  flex-shrink:      0;                      /* no se reduce con flex */
  background-color: var(--color-bg-white);
  border-bottom:    1px solid var(--color-border);
  box-shadow:       var(--shadow-sm);
}

/* Grupo izquierdo del header: logo + nombre + estado */
header[role="banner"] > div:first-child {
  display:     flex;
  align-items: center;
  gap:         var(--space-3);
  overflow:    hidden; /* recorta texto si el viewport es angosto */
}

/* Logo del proyecto: elemento de bloque (reset de img ya lo hace block) */
header[role="banner"] img {
  flex-shrink: 0;
  border-radius: var(--radius-sm);
}

/* Título h1 dentro del header: tamaño reducido acorde al mockup.
   El h1 tiene tamaño page-level; en el header actúa como título de app. */
header[role="banner"] h1 {
  font-size:   var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  white-space: nowrap;
  overflow:    hidden;
  text-overflow: ellipsis;
  color:       var(--color-slate-800);
}

/* Fila de estado del proyecto: badge + ID */
header[role="banner"] h1 + div {
  display:     flex;
  align-items: center;
  gap:         var(--space-3);
  margin-top:  var(--space-1);
  font-size:   var(--font-size-xs);
  color:       var(--color-text-muted);
}

/* Grupo derecho del header: progreso + botones de acción */
header[role="banner"] > div:last-child {
  display:     flex;
  align-items: center;
  gap:         var(--space-3);
  flex-shrink: 0;
}

/* Contenedor del bloque de progreso general */
header[role="banner"] [aria-label="Progreso general"] {
  display:     flex;
  align-items: center;
  gap:         var(--space-2);
  font-size:   var(--font-size-sm);
}

/* Barra de progreso general en el header.
   Bloque display para ocupar ancho completo de su contenedor. */
header[role="banner"] [role="progressbar"] {
  display:          block;
  width:            120px;
  height:           8px;
  background:       var(--color-slate-200);
  border-radius:    var(--radius-full);
  overflow:         hidden;
}

/* Relleno interno de la barra de progreso.
   Su ancho se controla mediante style="width: X%" en el HTML. */
header[role="banner"] [role="progressbar"] > div {
  height:           100%;
  background:       var(--color-primary);
  border-radius:    var(--radius-full);
  transition:       width var(--transition-slow);
}

/* ── TOOLBAR / NAV ──
   Barra de herramientas con acciones y controles de vista.
   Fondo slate-50 del mockup, borde inferior, shrink-0. */
nav[role="navigation"] {
  display:          flex;
  align-items:      center;
  justify-content:  space-between;
  gap:              var(--space-4);
  padding:          0 var(--space-6);
  height:           var(--toolbar-height);
  min-height:       var(--toolbar-height);
  flex-shrink:      0;
  background-color: var(--color-slate-50);
  border-bottom:    1px solid var(--color-border);
}

/* Grupos de botones dentro del toolbar: flex inline */
nav[role="navigation"] > div {
  display:     flex;
  align-items: center;
  gap:         var(--space-2);
}

/* Separador visual de pipe en el toolbar: elemento en línea */
nav[role="navigation"] [role="separator"] {
  display:      inline;
  color:        var(--color-slate-300);
  user-select:  none;
  padding:      0 var(--space-1);
}

/* Grupo de escala de tiempo (Días/Semanas/Meses): botones contiguos */
nav[role="navigation"] [role="group"] {
  display:        flex;
  border:         1px solid var(--color-border);
  border-radius:  var(--radius-md);
  overflow:       hidden;
}

/* ── MAIN ──
   Área principal: ocupa todo el espacio restante del flex-col.
   Se establece como columna flex interna para apilar
   el formulario arriba y la tabla abajo. */
main[role="main"] {
  display:        flex;
  flex-direction: column;
  flex:           1;
  overflow:       hidden; /* el scroll interno lo maneja el contenedor de la tabla */
  min-height:     0;      /* necesario en Firefox para que flex-1 funcione correctamente */
}

/* ── SECCIÓN NUEVA TAREA ──
   Formulario en la parte superior del main.
   shrink-0 garantiza altura fija; overflow no deseado se recorta. */
#nueva-tarea {
  flex-shrink:      0;
  background-color: var(--color-bg-white);
  border-bottom:    1px solid var(--color-border);
  padding:          var(--space-3) var(--space-6);
}

/* Título de la sección: tamaño moderado, no h2 full-page */
#nueva-tarea h2 {
  font-size:   var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color:       var(--color-slate-600);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-2);
}

/* Formulario: fila horizontal con gap.
   Los campos se disponen en línea (flex), contenidos en su sección. */
#form-nueva-tarea {
  display:     flex;
  align-items: flex-end;
  flex-wrap:   wrap;        /* colapsa en pantallas pequeñas */
  gap:         var(--space-3);
}

/* Cada grupo label+input en el formulario */
#form-nueva-tarea > div {
  display:        flex;
  flex-direction: column;
  gap:            var(--space-1);
}

/* Inputs del formulario nueva tarea */
#form-nueva-tarea input {
  display:          block;       /* elemento de bloque para control total */
  height:           32px;
  padding:          0 var(--space-3);
  font-size:        var(--font-size-sm);
  color:            var(--color-text);
  background:       var(--color-bg-white);
  border:           1px solid var(--color-border);
  border-radius:    var(--radius-md);
  outline:          none;
  transition:       border-color var(--transition-fast),
                    box-shadow var(--transition-fast);
}

#form-nueva-tarea input:focus {
  border-color: var(--color-primary);
  box-shadow:   0 0 0 3px var(--color-primary-light);
}

/* ── CONTENEDOR DE LA TABLA GANTT ──
   Región con scroll completo (horizontal + vertical).
   flex-1 absorbe el espacio restante del main. */
main[role="main"] > [role="region"] {
  flex:       1;
  overflow:   auto;           /* habilita ambos ejes de scroll */
  min-height: 0;
  position:   relative;       /* contexto para el marcador HOY (SVG overlay) */
}

/* ── TABLA GANTT ──
   table-layout: fixed permite anchos explícitos por columna.
   min-width fuerza el scroll horizontal cuando el viewport es angosto. */
#tabla-gantt {
  table-layout: fixed;
  min-width:    max-content;  /* la tabla no se comprime debajo de su contenido */
  width:        100%;
  border-collapse: collapse;
  font-size:    var(--font-size-sm);
  color:        var(--color-text);
}

/* Cabecera de la tabla: sticky en el top para que permanezca visible al scrollar */
#tabla-gantt thead {
  position:         sticky;
  top:              0;
  z-index:          10;
  background-color: var(--color-slate-100);
}

/* Celdas de encabezado: fondo slate-100, texto negrita, alineación central */
#tabla-gantt th {
  background-color: var(--color-slate-100);
  font-weight:      var(--font-weight-semibold);
  text-align:       center;
  padding:          var(--space-2) var(--space-3);
  border:           1px solid var(--color-border);
  white-space:      nowrap;
  color:            var(--color-slate-700);
}

/* Anchos fijos de columnas de datos (columns de izquierda) */
#tabla-gantt th:nth-child(1),
#tabla-gantt td:nth-child(1) { width: var(--col-id); }

#tabla-gantt th:nth-child(3),
#tabla-gantt td:nth-child(3) { width: var(--col-duracion); }

#tabla-gantt th:nth-child(4),
#tabla-gantt td:nth-child(4),
#tabla-gantt th:nth-child(5),
#tabla-gantt td:nth-child(5) { width: var(--col-fecha); }

#tabla-gantt th:nth-child(6),
#tabla-gantt td:nth-child(6) { width: var(--col-predecesora); }

#tabla-gantt th:nth-child(7),
#tabla-gantt td:nth-child(7) { width: var(--col-responsable); }

/* Columnas de semanas del Gantt: ancho fijo configurable via variable */
#tabla-gantt th:nth-child(n+8),
#tabla-gantt td:nth-child(n+8) {
  width: var(--gantt-col-width);
}

/* Celdas del cuerpo */
#tabla-gantt td {
  padding:          var(--space-2) var(--space-3);
  border:           1px solid var(--color-border);
  vertical-align:   middle;
  white-space:      nowrap;
}

/* Filas normales de tarea: hover sutil para orientación visual */
#tabla-gantt tbody tr:hover td {
  background-color: var(--color-primary-light);
  transition:       background-color var(--transition-fast);
}

/* Filas de grupo (PLANIFICACIÓN, DISEÑO, etc.):
   fondo oscuro, texto bold, sin efecto hover para distinguirlas */
#tabla-gantt tbody tr[aria-label*="Grupo"] td {
  background-color: var(--color-slate-700);
  color:            var(--color-bg-white);
  font-weight:      var(--font-weight-bold);
}

#tabla-gantt tbody tr[aria-label*="Grupo"]:hover td {
  background-color: var(--color-slate-700); /* anula el hover de filas normales */
}

/* ── FOOTER / STATUS BAR ──
   Barra de estado en la parte inferior.
   Fondo slate-50 del mockup, borde superior, shrink-0. */
footer[role="contentinfo"] {
  display:          flex;
  align-items:      center;
  justify-content:  space-between;
  gap:              var(--space-4);
  padding:          0 var(--space-6);
  height:           var(--footer-height);
  min-height:       var(--footer-height);
  flex-shrink:      0;
  background-color: var(--color-slate-50);
  border-top:       1px solid var(--color-border);
  font-size:        var(--font-size-xs);
  color:            var(--color-text-muted);
}

/* Grupos dentro del footer: flex inline */
footer[role="contentinfo"] > div {
  display:     flex;
  align-items: center;
  gap:         var(--space-4);
}

/* Leyenda del footer: lista horizontal */
footer[role="contentinfo"] ul {
  display:     flex;
  align-items: center;
  gap:         var(--space-3);
}

footer[role="contentinfo"] li {
  display:     flex;
  align-items: center;
  gap:         var(--space-1);
}

/* Indicador de ruta crítica en el footer */
footer[role="contentinfo"] [aria-label="Ruta crítica activa"] {
  color:       var(--color-danger);
  font-weight: var(--font-weight-medium);
}

```

```
/* ============================================
   css/components.css — Planificador de Tareas (Gantt)
   Componentes reutilizables del proyecto.
   Autor: Martin Debenedetti
   Rama: feature/dev-frontend-css-add-styles

   IMPORTANTE: Este archivo depende de las variables
   CSS definidas en css/styles.css. Siempre debe
   cargarse después de styles.css en el HTML.

   Tokens Figma: node-id=54-518
   https://www.figma.com/design/v1QKUD77dcsM0WDRMHapz6/
   ============================================ */

/* ============================================
   1. NAVEGACIÓN
   Estilos de los botones de la barra de herramientas
   (nav[role="navigation"]). La estructura del nav ya
   está definida en styles.css; aquí se definen los
   componentes reutilizables de botones de toolbar,
   grupos segmentados y estados activos.
   ============================================ */

/* ── Botón de toolbar (botón genérico del nav) ──
   Elemento en línea-bloque dentro de un contenedor flex.
   Fondo transparente por defecto; adquiere fondo en hover/active. */
.toolbar-btn {
  display:         inline-flex;
  align-items:     center;
  gap:             var(--space-1);
  padding:         var(--space-1) var(--space-3);
  height:          32px;
  font-size:       var(--font-size-sm);
  font-weight:     var(--font-weight-medium);
  color:           var(--color-slate-600);
  background:      transparent;
  border:          1px solid transparent;
  border-radius:   var(--radius-md);
  cursor:          pointer;
  white-space:     nowrap;
  transition:      background-color var(--transition-fast),
                   color            var(--transition-fast),
                   border-color     var(--transition-fast);
}

.toolbar-btn:hover {
  background:   var(--color-slate-100);
  color:        var(--color-slate-800);
}

.toolbar-btn:focus-visible {
  outline:      2px solid var(--color-primary);
  outline-offset: 2px;
}

.toolbar-btn:active {
  background:   var(--color-slate-200);
}

/* Estado activo del botón de toolbar (Vista Gantt activo, aria-pressed="true").
   Fondo primary/10, texto primary: refleja el mockup donde el botón
   "Vista Gantt" aparece destacado con azul suave. */
.toolbar-btn[aria-pressed="true"],
.toolbar-btn.active {
  background:   var(--color-primary-10);
  color:        var(--color-primary);
  border-color: var(--color-primary-light);
  font-weight:  var(--font-weight-semibold);
}

.toolbar-btn[aria-pressed="true"]:hover,
.toolbar-btn.active:hover {
  background:   var(--color-primary-light);
}

/* ── Grupo segmentado (Días / Semanas / Meses) ──
   Botones contiguos sin separación; el grupo ya tiene
   border y overflow:hidden definidos en styles.css.
   Aquí se estilizan los botones individuales dentro del grupo. */
.seg-btn {
  display:       inline-flex;
  align-items:   center;
  justify-content: center;
  padding:       0 var(--space-3);
  height:        30px;
  font-size:     var(--font-size-sm);
  font-weight:   var(--font-weight-medium);
  color:         var(--color-slate-600);
  background:    transparent;
  border:        none;
  border-right:  1px solid var(--color-border);
  cursor:        pointer;
  transition:    background-color var(--transition-fast),
                 color            var(--transition-fast);
}

/* Último botón del segmento no necesita borde derecho */
.seg-btn:last-child {
  border-right: none;
}

.seg-btn:hover {
  background: var(--color-slate-100);
  color:      var(--color-slate-800);
}

.seg-btn:focus-visible {
  outline:        2px solid var(--color-primary);
  outline-offset: -2px; /* inset para no romper el borde del grupo */
}

/* Estado activo de la escala de tiempo (Semanas activo en el mockup).
   Fondo primary, texto blanco: contraste fuerte para el estado seleccionado. */
.seg-btn[aria-pressed="true"],
.seg-btn.active {
  background:  var(--color-primary);
  color:       var(--color-bg-white);
  font-weight: var(--font-weight-semibold);
}

.seg-btn[aria-pressed="true"]:hover,
.seg-btn.active:hover {
  background: var(--color-primary-dark);
}

/* ── Link de navegación (si se usa nav con anchors) ──
   Elemento en línea; recupera el underline en hover para indicar interactividad. */
.nav-link {
  display:       inline-flex;
  align-items:   center;
  gap:           var(--space-1);
  padding:       var(--space-1) var(--space-2);
  font-size:     var(--font-size-sm);
  font-weight:   var(--font-weight-medium);
  color:         var(--color-slate-600);
  border-radius: var(--radius-md);
  transition:    color            var(--transition-fast),
                 background-color var(--transition-fast);
}

.nav-link:hover {
  color:      var(--color-slate-900);
  background: var(--color-slate-100);
}

.nav-link:focus-visible {
  outline:        2px solid var(--color-primary);
  outline-offset: 2px;
}

.nav-link.active {
  color:      var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

/* ============================================
   2. BOTONES
   Sistema de botones con clase base .btn y modificadores.
   Todos los valores usan variables de :root.
   El reset de <button> ya se aplicó en styles.css;
   aquí se construye encima de ese reset.

   Variantes: .btn-primary, .btn-secondary, .btn-ghost, .btn-danger
   Tamaños:   .btn-sm, .btn-md (default), .btn-lg
   Estados:   :hover, :focus-visible, :active, :disabled / .btn--disabled
   ============================================ */

/* ── Base .btn ──
   display inline-flex permite alinear íconos junto al texto
   sin necesidad de wrapper adicional (elemento en línea-bloque). */
.btn {
  display:        inline-flex;
  align-items:    center;
  justify-content: center;
  gap:            var(--space-2);
  padding:        var(--space-2) var(--space-4);
  height:         36px;
  font-size:      var(--font-size-sm);
  font-weight:    var(--font-weight-medium);
  line-height:    1;
  white-space:    nowrap;
  border:         1px solid transparent;
  border-radius:  var(--radius-md);
  cursor:         pointer;
  text-decoration: none;          /* por si se usa <a class="btn"> */
  transition:     background-color var(--transition-fast),
                  border-color     var(--transition-fast),
                  color            var(--transition-fast),
                  box-shadow       var(--transition-fast);
  /* Asegura que el box model cuente border dentro del height declarado */
  box-sizing:     border-box;
}

/* Focus accesible: anillo visible en todos los botones */
.btn:focus-visible {
  outline:        2px solid var(--color-primary);
  outline-offset: 2px;
}

/* ── Tamaño pequeño ── */
.btn-sm {
  height:        28px;
  padding:       var(--space-1) var(--space-3);
  font-size:     var(--font-size-xs);
  border-radius: var(--radius-sm);
}

/* ── Tamaño grande ── */
.btn-lg {
  height:        44px;
  padding:       var(--space-3) var(--space-6);
  font-size:     var(--font-size-base);
  border-radius: var(--radius-lg);
}

/* ── Botón primario ──
   Relleno sólido con color primary del mockup (#0f49bd).
   Se usa para acciones principales: "Agregar tarea", "Guardar". */
.btn-primary {
  background:   var(--color-primary);
  color:        var(--color-bg-white);
  border-color: var(--color-primary);
}

.btn-primary:hover {
  background:   var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

.btn-primary:active {
  /* Ligero escalado para retroalimentación táctil */
  background:   var(--color-primary-dark);
  box-shadow:   inset 0 2px 4px rgba(0, 0, 0, 0.15);
}

.btn-primary:focus-visible {
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

/* ── Botón secundario ──
   Borde con color primary, fondo transparente.
   Se usa para acciones secundarias: "Baseline", "Compartir". */
.btn-secondary {
  background:   transparent;
  color:        var(--color-primary);
  border-color: var(--color-primary);
}

.btn-secondary:hover {
  background:   var(--color-primary-light);
}

.btn-secondary:active {
  background:   var(--color-primary-light);
  box-shadow:   inset 0 1px 3px rgba(15, 73, 189, 0.15);
}

.btn-secondary:focus-visible {
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

/* ── Botón ghost ──
   Sin borde ni fondo; aparece solo en hover.
   Útil para acciones de icono dentro de tablas o barras. */
.btn-ghost {
  background:   transparent;
  color:        var(--color-slate-600);
  border-color: transparent;
}

.btn-ghost:hover {
  background:   var(--color-slate-100);
  color:        var(--color-slate-800);
}

.btn-ghost:active {
  background:   var(--color-slate-200);
}

/* ── Botón de peligro ──
   Para acciones destructivas (eliminar tarea, etc.) */
.btn-danger {
  background:   var(--color-danger);
  color:        var(--color-bg-white);
  border-color: var(--color-danger);
}

.btn-danger:hover {
  background:   #b91c1c; /* danger-dark — no existe variable, se define aquí */
  border-color: #b91c1c;
}

.btn-danger:focus-visible {
  box-shadow: 0 0 0 3px var(--color-danger-bg);
}

/* ── Estado deshabilitado (todas las variantes) ──
   :disabled aplica a <button>; .btn--disabled aplica a <a> o <span>.
   Se reduce la opacidad y se bloquea la interacción. */
.btn:disabled,
.btn[aria-disabled="true"],
.btn--disabled {
  opacity:        0.45;
  cursor:         not-allowed;
  pointer-events: none;   /* evita hover/focus en el elemento visual */
}

/* Para <a> y <span> con .btn--disabled, pointer-events bloquea el click */
a.btn--disabled {
  pointer-events: none;
}

/* ============================================
   3. CARDS
   Contenedor de tarjeta con header, body y footer.
   Se usa para paneles flotantes, modales o secciones
   de información agrupada dentro del planificador.
   ============================================ */

/* ── Contenedor base ──
   Elemento de bloque; fondo blanco, borde sutil y sombra sm
   según el sistema de sombras del mockup. */
.card {
  display:          flex;
  flex-direction:   column;
  background:       var(--color-bg-white);
  border:           1px solid var(--color-border);
  border-radius:    var(--radius-xl);
  box-shadow:       var(--shadow-sm);
  overflow:         hidden;   /* recorta contenido que sobresalga del radius */
  transition:       box-shadow var(--transition-base);
}

/* Estado hover: sombra elevada para indicar interactividad
   (aplica cuando la card es clickable, con tabindex o role="button") */
.card:hover,
.card[tabindex]:hover {
  box-shadow: var(--shadow-md);
}

/* ── Card header ──
   Franja superior de la card: título y acciones secundarias.
   border-bottom separa del body; padding simétrico horizontal. */
.card-header {
  display:          flex;
  align-items:      center;
  justify-content:  space-between;
  gap:              var(--space-3);
  padding:          var(--space-4) var(--space-5);
  border-bottom:    1px solid var(--color-border);
  background:       var(--color-slate-50);
  flex-shrink:      0;
}

/* Título dentro del card-header: hereda h-level del markup;
   se limita el tamaño para no competir con el contenido del body. */
.card-header__title {
  font-size:    var(--font-size-base);
  font-weight:  var(--font-weight-semibold);
  color:        var(--color-slate-800);
  line-height:  var(--line-height-tight);
}

/* Acciones del header (botones icon o links secundarios) */
.card-header__actions {
  display:     flex;
  align-items: center;
  gap:         var(--space-2);
  flex-shrink: 0;
}

/* ── Card body ──
   Zona principal de contenido; flex-1 absorbe el espacio libre
   cuando la card tiene altura fija o está en un contenedor flex. */
.card-body {
  flex:       1;
  padding:    var(--space-5);
  overflow-y: auto;   /* scroll interno si el contenido supera la altura */
}

/* ── Card footer ──
   Franja inferior para acciones o resumen.
   Simétrico al header pero sin fondo slate-50. */
.card-footer {
  display:         flex;
  align-items:     center;
  justify-content: flex-end;
  gap:             var(--space-3);
  padding:         var(--space-3) var(--space-5);
  border-top:      1px solid var(--color-border);
  flex-shrink:     0;
  background:      var(--color-slate-50);
}

/* Modificador: card sin padding (para tablas o imágenes que ocupan el body) */
.card--flush .card-body {
  padding: 0;
}

/* Modificador: card compacta */
.card--compact .card-header,
.card--compact .card-body,
.card--compact .card-footer {
  padding: var(--space-3) var(--space-4);
}

/* Modificador: card con sombra elevada por defecto (paneles flotantes) */
.card--elevated {
  box-shadow: var(--shadow-md);
}

.card--elevated:hover {
  box-shadow: var(--shadow-lg);
}

/* ============================================
   4. FORMULARIOS
   Sistema de componentes de formulario reutilizables.
   Los inputs del #form-nueva-tarea tienen estilos contextuales
   en styles.css; aquí se definen clases portables que pueden
   usarse en cualquier formulario del proyecto.
   ============================================ */

/* ── Grupo de formulario ──
   Envuelve label + input (+ mensaje de error).
   Elemento de bloque; establece columna flex para
   apilar label sobre el campo. */
.form-group {
  display:        flex;
  flex-direction: column;
  gap:            var(--space-1);
}

/* ── Label ──
   Redefine la clase portable sobre el elemento <label>.
   (styles.css ya estiliza el selector label global;
   esta clase permite sobreescribir en contextos específicos.) */
.form-label {
  display:      block;           /* bloque para ocupar su propia línea */
  font-size:    var(--font-size-sm);
  font-weight:  var(--font-weight-medium);
  color:        var(--color-slate-700);
  line-height:  var(--line-height-snug);
}

/* Indicador de campo requerido (asterisco decorativo, oculto para AT) */
.form-label__required::after {
  content:     ' *';
  color:       var(--color-danger);
  font-weight: var(--font-weight-bold);
  aria-hidden: true;
}

/* ── Input base ──
   Elemento de bloque: ocupa el 100% del .form-group.
   Box model explícito: padding interno + border + border-radius. */
.form-input {
  display:          block;
  width:            100%;
  height:           40px;
  padding:          0 var(--space-3);
  font-size:        var(--font-size-sm);
  font-weight:      var(--font-weight-normal);
  color:            var(--color-text);
  background:       var(--color-bg-white);
  border:           1px solid var(--color-border);
  border-radius:    var(--radius-md);
  outline:          none;
  box-sizing:       border-box;
  transition:       border-color var(--transition-fast),
                    box-shadow   var(--transition-fast);
}

.form-input::placeholder {
  color: var(--color-slate-400);
}

/* Estado focus: anillo azul del color primary */
.form-input:focus {
  border-color: var(--color-primary);
  box-shadow:   0 0 0 3px var(--color-primary-light);
}

/* Estado hover (antes de focus): borde ligeramente más oscuro */
.form-input:hover:not(:focus):not(:disabled) {
  border-color: var(--color-slate-400);
}

/* Estado deshabilitado */
.form-input:disabled {
  background:  var(--color-slate-100);
  color:       var(--color-text-muted);
  cursor:      not-allowed;
  border-color: var(--color-slate-200);
}

/* ── Input de error ──
   Modificador BEM: .form-input--error. Borde rojo,
   anillo de error en focus para retroalimentación visual. */
.form-input--error {
  border-color: var(--color-danger);
}

.form-input--error:focus {
  border-color: var(--color-danger);
  box-shadow:   0 0 0 3px var(--color-danger-bg);
}

/* ── Input de éxito ──
   Confirmación visual tras validación correcta. */
.form-input--success {
  border-color: var(--color-success);
}

.form-input--success:focus {
  border-color: var(--color-success);
  box-shadow:   0 0 0 3px var(--color-success-bg);
}

/* ── Textarea ──
   Elemento de bloque; min-height permite edición cómoda.
   resize:vertical evita que el usuario rompa el layout horizontal. */
.form-textarea {
  display:        block;
  width:          100%;
  min-height:     96px;
  padding:        var(--space-2) var(--space-3);
  font-size:      var(--font-size-sm);
  font-weight:    var(--font-weight-normal);
  color:          var(--color-text);
  background:     var(--color-bg-white);
  border:         1px solid var(--color-border);
  border-radius:  var(--radius-md);
  outline:        none;
  resize:         vertical;
  line-height:    var(--line-height-relaxed);
  transition:     border-color var(--transition-fast),
                  box-shadow   var(--transition-fast);
}

.form-textarea::placeholder {
  color: var(--color-slate-400);
}

.form-textarea:focus {
  border-color: var(--color-primary);
  box-shadow:   0 0 0 3px var(--color-primary-light);
}

.form-textarea:disabled {
  background:   var(--color-slate-100);
  color:        var(--color-text-muted);
  cursor:       not-allowed;
  resize:       none;
}

/* ── Select ──
   Apariencia nativa desactivada para aplicar estilos custom.
   Flecha personalizada mediante background SVG inline. */
.form-select {
  display:            block;
  width:              100%;
  height:             40px;
  padding:            0 var(--space-8) 0 var(--space-3);
  font-size:          var(--font-size-sm);
  color:              var(--color-text);
  background-color:   var(--color-bg-white);
  /* Flecha SVG como fondo: chevron-down en slate-500 */
  background-image:   url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat:  no-repeat;
  background-position: right var(--space-3) center;
  background-size:    16px;
  border:             1px solid var(--color-border);
  border-radius:      var(--radius-md);
  outline:            none;
  appearance:         none;       /* elimina la flecha nativa del UA */
  -webkit-appearance: none;
  cursor:             pointer;
  transition:         border-color var(--transition-fast),
                      box-shadow   var(--transition-fast);
}

.form-select:focus {
  border-color: var(--color-primary);
  box-shadow:   0 0 0 3px var(--color-primary-light);
}

.form-select:hover:not(:focus):not(:disabled) {
  border-color: var(--color-slate-400);
}

.form-select:disabled {
  background-color: var(--color-slate-100);
  color:            var(--color-text-muted);
  cursor:           not-allowed;
}

/* ── Mensajes de validación ──
   Texto de ayuda o error debajo del campo.
   Elemento de bloque en línea (inline-flex) con ícono opcional. */
.form-message {
  display:     flex;
  align-items: center;
  gap:         var(--space-1);
  font-size:   var(--font-size-xs);
  line-height: var(--line-height-base);
  margin-top:  var(--space-1);
}

.form-message--hint {
  color: var(--color-text-muted);
}

.form-message--error {
  color: var(--color-danger);
  font-weight: var(--font-weight-medium);
}

.form-message--success {
  color: var(--color-success);
  font-weight: var(--font-weight-medium);
}

/* ── Checkbox y radio ──
   Tamaño explícito y alineación con el label usando flex. */
.form-check {
  display:     flex;
  align-items: center;
  gap:         var(--space-2);
  cursor:      pointer;
}

.form-check input[type="checkbox"],
.form-check input[type="radio"] {
  width:          16px;
  height:         16px;
  flex-shrink:    0;
  accent-color:   var(--color-primary);  /* colorea el check nativo */
  cursor:         pointer;
}

.form-check input:disabled {
  cursor: not-allowed;
}

.form-check input:disabled + .form-check__label {
  color:  var(--color-text-muted);
  cursor: not-allowed;
}

.form-check__label {
  font-size:   var(--font-size-sm);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-base);
}

/* ============================================
   5. HEADER
   Estilos de componentes internos del header que
   complementan el layout estructural ya definido
   en styles.css. No se redefine header[role="banner"].
   ============================================ */

/* ── Bloque logo+título ──
   Unidad visual reutilizable: icono + texto apilado.
   Ya aparece en el header pero se define como componente
   portable (podría usarse en otros contextos). */
.brand {
  display:     flex;
  align-items: center;
  gap:         var(--space-3);
  text-decoration: none;
  color:       inherit;
  overflow:    hidden;
}

.brand__icon {
  flex-shrink:   0;
  width:         32px;
  height:        32px;
  border-radius: var(--radius-sm);
  object-fit:    cover;
}

.brand__text {
  display:        flex;
  flex-direction: column;
  overflow:       hidden;
}

.brand__title {
  font-size:     var(--font-size-base);
  font-weight:   var(--font-weight-semibold);
  color:         var(--color-slate-800);
  white-space:   nowrap;
  overflow:      hidden;
  text-overflow: ellipsis;
  line-height:   var(--line-height-tight);
}

.brand__meta {
  display:     flex;
  align-items: center;
  gap:         var(--space-2);
  font-size:   var(--font-size-xs);
  color:       var(--color-text-muted);
  margin-top:  var(--space-1);
}

/* ── Badge de estado de proyecto ──
   Componente en línea (inline-flex) con color configurable.
   El .badge-status global del body está en styles.css;
   aquí se amplía con modificadores de color. */
.badge {
  display:        inline-flex;
  align-items:    center;
  gap:            var(--space-1);
  padding:        2px var(--space-2);
  font-size:      var(--font-size-xs);
  font-weight:    var(--font-weight-medium);
  line-height:    var(--line-height-base);
  border-radius:  var(--radius-full);
  white-space:    nowrap;
}

.badge--success {
  background: var(--color-success-bg);
  color:      var(--color-success);
}

.badge--warning {
  background: #fef3c7;   /* amber-100 sin variable, se aproxima al token warning */
  color:      var(--color-warning);
}

.badge--danger {
  background: var(--color-danger-bg);
  color:      var(--color-danger);
}

.badge--primary {
  background: var(--color-primary-light);
  color:      var(--color-primary);
}

.badge--neutral {
  background: var(--color-slate-100);
  color:      var(--color-slate-600);
}

/* ── Barra de progreso componente ──
   Versión portable de la barra de progreso del header.
   Contenedor de bloque + relleno interno absoluto. */
.progress-bar {
  display:       flex;
  align-items:   center;
  gap:           var(--space-2);
  font-size:     var(--font-size-sm);
  color:         var(--color-slate-600);
}

.progress-bar__track {
  display:       block;
  width:         120px;
  height:        8px;
  background:    var(--color-slate-200);
  border-radius: var(--radius-full);
  overflow:      hidden;
  flex-shrink:   0;
}

.progress-bar__fill {
  display:       block;
  height:        100%;
  background:    var(--color-primary);
  border-radius: var(--radius-full);
  transition:    width var(--transition-slow);
  /* min-width: 0 — permite el 0% sin artefactos de borde */
  min-width:     0;
}

/* Modificador de tamaño: barra gruesa para dashboards */
.progress-bar--lg .progress-bar__track {
  height: 12px;
  width:  180px;
}

/* Modificador: estado de éxito (100% completado) */
.progress-bar__fill--success {
  background: var(--color-success);
}

/* ── Barra de progreso de Gantt (dentro de celdas td) ──
   Más compacta; sin texto porcentual externo (el texto va inline). */
.gantt-bar {
  position:      relative;
  display:       block;
  width:         100%;
  height:        20px;
  background:    var(--color-slate-200);
  border-radius: var(--radius-sm);
  overflow:      hidden;
}

.gantt-bar__fill {
  position:      absolute;
  top:           0;
  left:          0;
  height:        100%;
  background:    var(--color-primary);
  border-radius: var(--radius-sm);
  transition:    width var(--transition-slow);
}

/* Barra de grupo de Gantt: más alta, fondo slate semitransparente */
.gantt-bar--group {
  height:     24px;
  background: rgba(51, 65, 85, 0.15);  /* slate-700 al 15% */
}

.gantt-bar--group .gantt-bar__fill {
  background: var(--color-slate-600);
}

/* Texto de porcentaje dentro de la barra (posición absoluta) */
.gantt-bar__label {
  position:    absolute;
  top:         50%;
  left:        var(--space-2);
  transform:   translateY(-50%);
  font-size:   var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color:       var(--color-bg-white);
  line-height: 1;
  white-space: nowrap;
  /* Asegura visibilidad sobre el relleno de la barra */
  mix-blend-mode: normal;
}

/* ============================================
   6. FOOTER
   Componentes internos del footer que complementan
   los estilos estructurales de styles.css.
   No se redefine footer[role="contentinfo"].
   ============================================ */

/* ── Ítem de leyenda ──
   Cada ítem de la leyenda del footer tiene un
   indicador visual (círculo, rombo) + texto. */
.legend-item {
  display:     inline-flex;
  align-items: center;
  gap:         var(--space-1);
  font-size:   var(--font-size-xs);
  color:       var(--color-text-muted);
}

/* Indicador circular (Progreso) */
.legend-item__dot {
  display:       inline-block;
  width:         8px;
  height:        8px;
  border-radius: var(--radius-full);
  background:    var(--color-primary);
  flex-shrink:   0;
}

/* Indicador de hito (rombo ◆) */
.legend-item__diamond {
  display:       inline-block;
  width:         8px;
  height:        8px;
  background:    var(--color-slate-500);
  transform:     rotate(45deg);
  flex-shrink:   0;
}

/* ── Chip de versión ──
   Badge discreto para mostrar la versión del proyecto. */
.version-chip {
  display:       inline-flex;
  align-items:   center;
  padding:       1px var(--space-2);
  font-size:     var(--font-size-xs);
  font-weight:   var(--font-weight-medium);
  color:         var(--color-slate-500);
  background:    var(--color-slate-100);
  border:        1px solid var(--color-border);
  border-radius: var(--radius-full);
}

/* ── Link del footer ──
   Elemento en línea; hover con underline para distinguir del texto plano. */
.footer-link {
  display:         inline;
  color:           var(--color-slate-500);
  font-size:       var(--font-size-xs);
  text-decoration: none;
  transition:      color var(--transition-fast);
}

.footer-link:hover {
  color:           var(--color-primary);
  text-decoration: underline;
}

.footer-link:focus-visible {
  outline:        2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius:  var(--radius-sm);
}

/* ── Separador del footer ──
   Línea vertical entre grupos de información. */
.footer-divider {
  display:       inline-block;
  width:         1px;
  height:        12px;
  background:    var(--color-border);
  vertical-align: middle;
  flex-shrink:   0;
}

```

- Ajustes manuales realizados y discrepancias detectadas tras la generación automática:

Archivo style.css

```

Linea 22 se modifica  --color-primary-light:   #e0f0ff;
Linea 623 se elimina   color:        var(--color-text);
Linea 686 se modifica  background-color: var(--color-slate-700);
Linea 687 se modifica color:            var(--color-bg-white);
Linea 688 se modifica font-weight:      var(--font-weight-bold);
Liena 692 se modifica background-color: var(--color-slate-700);
Se agrega linea 695-735

```

Archivo components.css  

```
Redefino los botones de toolbar linea 63-74
Redefino los boton primario linea 218-227
Redefino los botones de toolbar linea 241-249
Redefino la clase .gantt-bar

```
Archivo index.html  

```
Se agrega clase a la sección de nav donde se encuentra la "barra de herramientas".
Se agrega clase a la sección del div de "Controles de escala y zoom".
Se agrega clase a la secciones del div de "progressbar"

```

---

Archivo de planificación previa creado para la implementación de estilos en la rama `feature/dev-frontend-css-add-styles`.
