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

> Nota: completar estas entradas al cerrar la tarea y antes del merge. Mantener registros del prompt usado y del resultado obtenido.

- Prompt exacto utilizado con Figma MCP (pegar aquí el prompt usado):

```


```

- Resultado obtenido (archivo/snipet generado por la IA o export desde MCP):

> (Rellenar con enlace o descripción del artefacto generado)

- Ajustes manuales realizados y discrepancias detectadas tras la generación automática:

> (Rellenar con detalles de correcciones manuales, razones y archivos modificados)

---

Archivo de planificación previa creado para la implementación de estilos en la rama `feature/dev-frontend-css-add-styles`.
