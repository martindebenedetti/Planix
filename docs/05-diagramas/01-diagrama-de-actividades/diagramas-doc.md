# Diagramas de Actividades - Planix

Documentación de los diagramas de actividades correspondientes a los flujos principales
de **Planix**, aplicación web de gestión de proyectos con vista tipo Gantt.

---

## Índice

- [Flujo 1: Crear Proyecto](#flujo-1-crear-proyecto)
- [Flujo 2: Agregar Tarea a Proyecto](#flujo-2-agregar-tarea-a-proyecto)
- [Flujo 3: Calcular Avance del Proyecto](#flujo-3-calcular-avance-del-proyecto)
- [Flujo 4: Listar y Filtrar Tareas](#flujo-4-listar-y-filtrar-tareas)
- [Instrucciones de edición](#instrucciones-de-edición)

---

## Flujo 1: Crear Proyecto

**Descripción:** El usuario ingresa nombre, fecha de inicio y fecha de fin del nuevo proyecto.
El sistema valida que el nombre no esté vacío ni duplicado en `proyectos[]`, que ambas fechas
respeten el formato `DD/MM/AAAA` y que la fecha de fin sea posterior a la de inicio.
Si todas las validaciones pasan, se crea el objeto `Proyecto` y se agrega al array `proyectos[]`.
Ante cualquier error se muestra un `alert()` específico y el flujo se detiene.

**Swimlanes:** `Usuario` · `Sistema`
**Estructuras de control:** `if/else/endif` (4 validaciones en cascada)
**Artefactos:** `proyectos[]`, objeto `{ nombre, fechaInicio, fechaFin, tareas: [] }`

[Flujo 1: Crear Proyecto](./actividad-flujo-1-crear-proyecto.png)

[Ver fuente editable](./actividad-flujo-1-crear-proyecto.puml)

---

## Flujo 2: Agregar Tarea a Proyecto

**Descripción:** El sistema verifica que existan proyectos y los lista con un bucle `for`.
El usuario elige un proyecto por nombre; el sistema lo busca en el array. Luego el usuario
ingresa nombre de tarea, responsable y estado (mediante un `switch` representado como
`if/else` anidados: `1=pendiente`, `2=en curso`, `3=completada`). Cada campo se valida
antes de continuar. Si todo es válido, se crea el objeto `Tarea` y se agrega a
`proyecto.tareas[]`.

**Swimlanes:** `Usuario` · `Sistema`
**Estructuras de control:** `if/else/endif` (validaciones + switch de 3 opciones)
**Artefactos:** `proyectos[]`, `proyecto.tareas[]`, objeto `{ nombre, responsable, estado }`

[Flujo 2: Agregar Tarea a Proyecto](./actividad-flujo-2-agregar-tarea.png)

[Ver fuente editable](./actividad-flujo-2-agregar-tarea.puml)

---

## Flujo 3: Calcular Avance del Proyecto

**Descripción:** El sistema lista los proyectos existentes; el usuario elige uno. Se verifica
que el proyecto tenga tareas. Se recorre `tareas[]` con un bucle `while` contando las tareas
con estado `"completada"`. Se calcula el porcentaje de avance y se compara la fecha actual
(`new Date()`) con la fecha de fin para determinar el estado del proyecto entre cuatro
posibilidades: `"En curso"`, `"Atrasado"`, `"Completado"` o `"Completado antes del plazo"`.
Se muestra un informe completo mediante `alert()`.

**Swimlanes:** `Usuario` · `Sistema`
**Estructuras de control:** `while/endwhile` (recorrido de tareas) + `if/else/endif` anidados (estado)
**Artefactos:** `proyectos[]`, `proyecto.tareas[]`, `new Date()`

[Flujo 3: Calcular Avance del Proyecto](./actividad-flujo-3-calcular-avance.png)

[Ver fuente editable](./actividad-flujo-3-calcular-avance.puml)

---

## Flujo 4: Listar y Filtrar Tareas

**Descripción:** El sistema verifica que existan proyectos con tareas. Se lista los proyectos
y el usuario elige uno. Luego elige un filtro de estado mediante un `switch` de 4 opciones
(`1=pendiente`, `2=en curso`, `3=completada`, `4=todas`). Se recorre `tareas[]` con un bucle
`while` acumulando coincidencias en `tareasFiltradas[]`. Si el resultado está vacío se informa
mediante `alert()`; si tiene datos se muestra el listado tanto en `alert()` como en
`console.log()`.

**Swimlanes:** `Usuario` · `Sistema`
**Estructuras de control:** `while/endwhile` (filtrado) + `if/else/endif` (switch de 4 opciones + resultado vacío)
**Artefactos:** `proyectos[]`, `proyecto.tareas[]`, `tareasFiltradas[]`

[Flujo 4: Listar y Filtrar Tareas](./actividad-flujo-4-filtrar-tareas.png)

[Ver fuente editable](./actividad-flujo-4-filtrar-tareas.puml)

---

## Instrucciones de edición

### VS Code — extensión PlantUML

1. Instalar la extensión **PlantUML** de `jebbs` desde el Marketplace.
2. Instalar el prerequisito **Java** (JRE 8 o superior) y agregar el jar de PlantUML,
   o alternativamente configurar la extensión con el servidor remoto:
   ```json
   // .vscode/settings.json
   "plantuml.render": "PlantUMLServer",
   "plantuml.server": "https://www.plantuml.com/plantuml"
   ```
3. Abrir cualquier archivo `.puml` de esta carpeta.
4. Presionar `Alt+D` para previsualizar el diagrama en tiempo real en el panel lateral.
5. Para exportar a PNG: `Ctrl+Shift+P` → `PlantUML: Export Current Diagram` → elegir formato `png`.
   El archivo se genera en la misma carpeta con el mismo nombre de archivo.

### plantumleditor.com (sin instalación)

1. Ingresar a [https://www.plantuml.com/plantuml/uml/](https://www.plantuml.com/plantuml/uml/).
2. Copiar el contenido completo de cualquier archivo `.puml` (incluyendo `@startuml` y `@enduml`).
3. Pegarlo en el editor de texto de la página.
4. El diagrama se renderiza automáticamente en el panel derecho.
5. Para descargar como PNG: hacer clic en el botón **PNG** debajo del diagrama generado.
   Renombrar el archivo descargado con el nombre correspondiente (ej. `actividad-flujo-1-crear-proyecto.png`)
   y moverlo a esta carpeta para que las imágenes embebidas en este documento funcionen correctamente.
