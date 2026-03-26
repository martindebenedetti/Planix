# Spec Frontend - Actividad Obligatoria 1

## ¿Qué voy a hacer?
- Tomar el mockup diseñado en Figma por el rol UX como referencia visual.
- Construir la estructura HTML5 inicial del planificador de tareas
  estilo diagrama de Gantt en el archivo `index.html`.
- Usar etiquetas semánticas, elementos requeridos por la consigna
  y comentarios que preparen el código para futuras entregas de CSS y JS.
- Utilizo el servidor MCP de Figma junto con GitHub Copilot en modo Agente.

## ¿Por qué?
- El `index.html` es la base sobre la que se construirán los estilos
  e interactividad en entregas posteriores.
- Una estructura semántica sólida mejora la accesibilidad, el SEO y
  facilita la evolución del proyecto a lo largo del cuatrimestre.
- Seguir el mockup del rol UX asegura coherencia entre el diseño
  planificado y la implementación.

## Contexto
El proyecto es un planificador de tareas estilo diagrama de Gantt, basado en el `plan.md` y el mockup diseñado en el rol UX. La página se organiza en:
- encabezado con nombre del proyecto, estado y barra de progreso general;
- barra de herramientas con acciones de edición y controles de vista;
- formulario de nueva tarea en la parte superior del contenido;
- tabla unificada con datos de tareas (izquierda) y diagrama de Gantt
  (derecha), con escala de meses y semanas en el encabezado de la tabla;
- pie de página tipo status bar con estadísticas del proyecto y leyenda.

El mockup de referencia está disponible en:
`docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png`
y en: https://www.figma.com/design/v1QKUD77dcsM0WDRMHapz6/

## Archivos involucrados

| Archivo | Acción |
|---|---|
| `index.html` | edita — estructura HTML5 principal |
| `docs/03-specs/spec-frontend.md` | Crear — este documento |

## Criterios de aceptación
- [x] El archivo usa `<!DOCTYPE html>` y estructura HTML5 válida
- [x] Incluye etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`
- [x] Contiene: título, párrafos, al menos una imagen, enlaces, una lista, un formulario y una tabla
- [x] Todos los elementos tienen atributos de accesibilidad (`alt`, `aria-label`, etc.)
- [x] El código tiene comentarios `<!-- TODO: CSS -->` indicando dónde se aplicarán estilos
- [x] El código tiene comentarios `<!-- TODO: JS -->` indicando dónde irá la interactividad
- [x] La estructura refleja el layout del mockup de Figma
- [x] El spec fue redactado antes de escribir cualquier línea de código

## Uso de IA
Se utilizó GitHub Copilot en modo Agente con el servidor MCP de Figma conectado para generar la estructura HTML inicial a partir del mockup. El resultado fue revisado y ajustado manualmente para alinear la estructura con el layout real del mockup y los requisitos de la consigna.