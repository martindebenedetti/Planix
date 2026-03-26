# Comparativa de modelos de IA

## Tarea evaluada

Generación de la estructura HTML base del proyecto a partir del mockup inicial diseñado en Figma para el planificador de tareas tipo diagrama de Gantt.

Esta tarea corresponde al proceso documentado en:

- prompts-3.md (generación inicial del HTML)
- prompts-4.md (corrección y documentación del código)

---

## Modelos evaluados

| Modelo | Herramienta | Método de prompting |
|------|------|------|
| GPT-4o | ChatGPT | Role prompting |
| GitHub Copilot | VS Code | Zero-shot prompting |

---

## Prompt utilizado

``` 
Actúa como un desarrollador frontend.

A partir de un mockup de una aplicación web tipo planificador de tareas con diagrama de Gantt, genera la estructura HTML base de la página incluyendo:

header
navegación principal
panel lateral para tareas
área principal para el diagrama de Gantt
sección para filtros
footer

El código debe estar organizado y preparado para futuras integraciones con CSS y JavaScript.
``` 

---

## Resultado del modelo GPT-4o

### Puntos positivos

- Generó una estructura HTML semántica clara.
- Incluyó etiquetas como `header`, `nav`, `main`, `section` y `footer`.
- Organizó correctamente las secciones del layout.

### Limitaciones

- Algunos nombres de clases no estaban alineados con el diseño final.
- No incluyó comentarios en el código.

---

## Resultado del modelo GitHub Copilot

### Puntos positivos

- Generó rápidamente bloques de código dentro del editor.
- Permitió completar partes del HTML de forma incremental.

### Limitaciones

- La estructura inicial era menos organizada.
- No interpretó completamente la jerarquía del mockup.
- Requirió más correcciones manuales.

---

## Comparación técnica

| Criterio | GPT-4o | GitHub Copilot |
|------|------|------|
| Claridad del código | Alta | Media |
| Estructura generada | Muy organizada | Parcialmente organizada |
| Facilidad de integración | Alta | Media |
| Nivel de detalle | Alto | Medio |
| Necesidad de correcciones manuales | Baja | Media |

---

## Conclusión

Para esta tarea, GPT-4o resultó más útil que GitHub Copilot.

GPT-4o generó una estructura HTML más clara, organizada y cercana al diseño del mockup, lo que facilitó su integración en el proyecto.

GitHub Copilot fue útil como herramienta de autocompletado dentro del editor, pero requirió más correcciones manuales para adaptar el código a la estructura deseada.