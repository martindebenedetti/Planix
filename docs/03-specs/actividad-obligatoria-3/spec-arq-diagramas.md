# Spec: Arquitecto de Diagramas de Actividades

**Actividad Obligatoria N°3 | Programación Web I | UCES**  
**Estudiante:** Martin Debenedetti  
**Proyecto:** Planificador de Tareas - Diagrama de Gantt (Planix)  
**Rama:** `feature/arq-diagramas-actividades`

---

## 📋 Plan de Diseño

> ⚠️ Esta sección fue commiteada **antes** de abrir Copilot o escribir cualquier archivo `.puml`.

### Identificación de los 4 flujos principales

Los flujos fueron identificados a partir de la revisión del `plan.md`, el `index.html`
y el mockup visual del proyecto Planix. Se seleccionaron los 4 casos de uso centrales
de la aplicación Gantt chart, cubriendo el ciclo completo: crear → cargar → medir → consultar.

---

**Flujo 1: Crear Proyecto**

- **Actor principal:** Usuario
- **Entrada:** nombre del proyecto (string), fecha de inicio (DD/MM/AAAA), fecha de fin (DD/MM/AAAA)
- **Procesos clave:**
  1. Validar que el nombre no esté vacío
  2. Verificar que no exista un proyecto duplicado con ese nombre
  3. Validar el formato de la fecha de inicio (DD/MM/AAAA)
  4. Validar el formato de la fecha de fin (DD/MM/AAAA)
  5. Validar que la fecha de fin sea posterior a la de inicio
  6. Crear objeto `Proyecto { nombre, fechaInicio, fechaFin, tareas: [] }`
  7. Agregar el proyecto al array global `proyectos[]`
- **Salida:** confirmación de creación o mensaje de error específico
- **Decisiones clave:** nombre vacío, nombre duplicado, formato de fechas inválido, fechaFin <= fechaInicio
- **¿Tiene ciclos?** No
- **Estructuras de datos:** objeto `Proyecto`, array global `proyectos[]`

---

**Flujo 2: Agregar Tarea a Proyecto**

- **Actor principal:** Usuario
- **Entrada:** nombre del proyecto (string), nombre de tarea (string), responsable (string), estado inicial (1/2/3)
- **Procesos clave:**
  1. Verificar que existan proyectos cargados
  2. Construir y mostrar la lista de proyectos disponibles (for)
  3. Buscar el proyecto seleccionado por nombre
  4. Validar que el nombre de la tarea no esté vacío
  5. Validar que el responsable no esté vacío
  6. Asignar estado según opción elegida (switch: 1=pendiente, 2=en curso, 3=completada)
  7. Crear objeto `Tarea { nombre, responsable, estado }`
  8. Agregar la tarea al array `tareas[]` del proyecto seleccionado
- **Salida:** confirmación con datos de la tarea creada, o mensaje de error
- **Decisiones clave:** proyectos existentes, proyecto encontrado, campos vacíos, estado válido (switch)
- **¿Tiene ciclos?** Sí — `for` para construir la lista de proyectos
- **Estructuras de datos:** objeto `Tarea`, array `proyecto.tareas[]`

---

**Flujo 3: Calcular Avance del Proyecto**

- **Actor principal:** Usuario
- **Entrada:** nombre del proyecto (string)
- **Procesos clave:**
  1. Verificar que existan proyectos cargados
  2. Mostrar lista de proyectos y buscar el seleccionado
  3. Verificar que el proyecto tenga tareas cargadas
  4. Recorrer el array `tareas[]` con `while` contando tareas completadas
  5. Calcular porcentaje: `(completadas / total) * 100`
  6. Comparar fecha de fin del proyecto con la fecha actual (`Date()`)
  7. Determinar estado: "En curso" / "Atrasado" / "Completado" / "Completado antes del plazo"
  8. Mostrar informe completo
- **Salida:** informe con porcentaje de avance, tareas completadas/total y estado del proyecto
- **Decisiones clave:** proyectos existentes, proyecto encontrado, tareas cargadas, fecha vencida, avance = 100%
- **¿Tiene ciclos?** Sí — `while` para recorrer `tareas[]` y contar completadas
- **Estructuras de datos:** array `proyecto.tareas[]`, objeto `Date`

---

**Flujo 4: Listar y Filtrar Tareas**

- **Actor principal:** Usuario
- **Entrada:** nombre del proyecto (string), criterio de filtro (1/2/3/4)
- **Procesos clave:**
  1. Verificar que existan proyectos cargados
  2. Mostrar lista de proyectos y buscar el seleccionado
  3. Verificar que el proyecto tenga tareas cargadas
  4. Validar la opción de filtro elegida (switch: 1=pendiente, 2=en curso, 3=completada, 4=todas)
  5. Recorrer `tareas[]` con `while` y agregar a `tareasFiltradas[]` las que coincidan con el criterio
  6. Verificar que el resultado no esté vacío
  7. Construir texto con los datos de cada tarea filtrada (for)
  8. Mostrar resultado por `alert()` y `console.log()`
- **Salida:** listado de tareas filtradas con nombre, responsable y estado; o mensaje de "sin resultados"
- **Decisiones clave:** proyectos existentes, proyecto encontrado, tareas cargadas, filtro válido, resultado vacío
- **¿Tiene ciclos?** Sí — `while` para filtrar tareas + `for` para construir el texto de salida
- **Estructuras de datos:** array `tareasFiltradas[]`, array `proyecto.tareas[]`

---

### Decisión sobre Swimlanes (Particiones Usuario / Sistema)

Se decidió aplicar swimlanes en los **4 flujos**, ya que en todos existe una
separación clara entre las acciones que ejecuta el usuario (ingresar datos,
elegir opciones) y las que ejecuta el sistema (validar, calcular, almacenar).
Esta separación también alinea el diagrama con la arquitectura del código,
donde las funciones puras de negocio (Sistema) están separadas de las
funciones de UI que usan `prompt()` y `alert()` (Usuario).

| Flujo                     | Swimlanes            | Justificación                                                               |
| ------------------------- | -------------------- | --------------------------------------------------------------------------- |
| Flujo 1 — Crear Proyecto  | ✅ Usuario / Sistema | El usuario ingresa datos; el sistema valida y crea el objeto                |
| Flujo 2 — Agregar Tarea   | ✅ Usuario / Sistema | El usuario elige proyecto y estado; el sistema busca, valida y persiste     |
| Flujo 3 — Calcular Avance | ✅ Usuario / Sistema | El usuario selecciona proyecto; el sistema calcula métricas y evalúa fechas |
| Flujo 4 — Filtrar Tareas  | ✅ Usuario / Sistema | El usuario elige filtro; el sistema recorre y filtra el array de tareas     |

---

### Criterios de aceptación — Checklist

- [ ] 4 diagramas con `start`, `stop`, actividades (`:texto;`), decisiones (`if-then-else`) y ciclos (`while` / `for`)
- [ ] Swimlanes `|Usuario|` y `|Sistema|` presentes en los 4 flujos
- [ ] Flujo lógico coherente con la implementación planificada en `plan.md`
- [ ] Archivos `.puml` (editable) y `.png` (visualización) exportados para cada diagrama
- [ ] `diagramas-doc.md` con índice, descripción, enlaces e instrucciones de edición
- [ ] `spec-arq-diagramas.md` commiteado **antes** que cualquier archivo `.puml`

---

## 🤖 Uso de Copilot Agent Mode

> Esta sección se completa después de generar los diagramas con Copilot.

### Prompt exacto utilizado en Copilot Agent

```

```

### Output generado por Copilot

> [Pegar aquí el output generado — fragmento del .puml del Flujo 1 como mínimo]

### Ajustes manuales realizados

> [Completar al finalizar — errores de sintaxis encontrados y cómo se corrigieron]

---

## ✅ AL CERRAR — Evidencia de Trabajo

> Esta sección se completa al finalizar todas las tareas del rol.

### Fragmento del .puml generado por Copilot (antes de ajustes)

```plantuml
[Pegar aquí el fragmento original generado por Copilot para al menos uno de los diagramas]
```

### Ajustes manuales por diagrama

**Flujo 1:**

- Error encontrado: [descripción]
- Ajuste realizado: [cómo se corrigió]

**Flujo 2:**

- Error encontrado: [descripción]
- Ajuste realizado: [cómo se corrigió]

**Flujo 3:**

- Error encontrado: [descripción]
- Ajuste realizado: [cómo se corrigió]

**Flujo 4:**

- Error encontrado: [descripción]
- Ajuste realizado: [cómo se corrigió]

---

### Checklist de cierre

- [ ] 4 archivos `.puml` commiteados en `docs/05-diagramas/01-diagrama-de-actividades/`
- [ ] 4 archivos `.png` exportados y commiteados en la misma carpeta
- [ ] `diagramas-doc.md` creado con índice, descripciones, imágenes y enlaces
- [ ] `spec-arq-diagramas.md` completado con secciones DURANTE y AL CERRAR
- [ ] PR `feature/arq-diagramas-actividades` → `develop` creada
- [ ] Coordinador notificado para code review
- [ ] `changelog.md` actualizado con el aporte y link a la PR
