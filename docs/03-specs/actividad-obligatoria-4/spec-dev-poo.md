# Spec: Desarrollador JS POO

**Actividad Obligatoria N°3 | Programación Web I | UCES**
**Estudiante:** Martin Debenedetti
**Rama:** `feature/dev-poo-logica-negocio`
**Proyecto:** Planificador de Tareas - Diagrama de Gantt (Planix)

---

## 📋 ANTES — Plan de Arquitectura POO

> ⚠️ Commiteado ANTES de abrir Copilot o escribir cualquier clase.

### Entidades del dominio identificadas

**Clase Tarea**

- Responsabilidad: representar una unidad de trabajo dentro de un proyecto
- Propiedades: nombre (string), responsable (string), estado (string)
- Estados válidos: "pendiente" | "en curso" | "completada"
- Métodos de negocio:
  - cambiarEstado(nuevoEstado): valida y actualiza el estado
  - esValida(): verifica que todos los campos sean correctos
- Serialización: toJSON() / static fromJSON(json)
- Validaciones internas: nombre no vacío, responsable no vacío, estado válido

**Clase Proyecto**

- Responsabilidad: gestionar un proyecto Gantt con sus tareas y fechas
- Propiedades: nombre (string), fechaInicio (string), fechaFin (string), tareas (Tarea[])
- Métodos de negocio:
  - agregarTarea(tarea): valida instancia de Tarea y agrega al array
  - calcularAvance(): retorna porcentaje de tareas completadas (0-100)
  - determinarEstado(): evalúa fecha y avance → "En curso" | "Atrasado" | "Completado" | "Completado antes del plazo"
- Serialización: toJSON() / static fromJSON(json)
- Validaciones internas: nombre no vacío, fechas en formato DD/MM/AAAA, fechaFin > fechaInicio

**Clase GestorProyectos**

- Responsabilidad: colección de proyectos con operaciones de búsqueda y filtrado
- Propiedades: proyectos (Proyecto[])
- Métodos:
  - agregar(proyecto): valida nombre único antes de agregar
  - buscar(nombre): retorna Proyecto o null (case-insensitive)
  - listar(): retorna copia del array de proyectos
  - filtrarTareas(proyecto, criterio): retorna tareas filtradas por estado

### Relaciones entre clases

- GestorProyectos → Proyecto: AGREGACIÓN (el gestor puede existir sin proyectos)
- Proyecto → Tarea: COMPOSICIÓN (las tareas no existen fuera de un proyecto)

### Decisiones de arquitectura

- Las clases NO manipulan el DOM ni usan eventos del browser
- Las clases NO usan prompt() ni alert()
- Toda la lógica de negocio de la Actividad Obligatoria N°3 se migra a estos métodos
- toJSON/fromJSON permiten serializar para localStorage (StorageUtil)
- Cada clase en su propio archivo para facilitar testing individual

### Criterios de aceptación — Checklist

- [ ] 3 clases implementadas en js/models/ (Tarea, Proyecto, GestorProyectos)
- [ ] Constructores con validaciones internas que lanzan errores descriptivos
- [ ] Métodos documentados con JSDoc completo
- [ ] toJSON() y static fromJSON(json) en cada clase
- [ ] Diagrama de clases PlantUML exportado en .puml y .png
- [ ] diagrama-clases-doc.md con descripción y justificación

---

## 🤖 DURANTE — Uso de Copilot Agent Mode

> Completar después de usar Copilot.

### Archivos adjuntados como contexto

- docs/05-diagramas/01-diagrama-de-actividades/ (los 4 .puml de la AO3) ✓
- index.html ✓
- spec-dev-poo.md (este archivo) ✓

### Prompt exacto utilizado

> Completar después

### Output generado por Copilot

[Pegar fragmento del código generado para al menos una clase]

### Ajustes manuales realizados

- [Clase X, método Y]: [descripción del ajuste y justificación]

---

## ✅ AL CERRAR — Evidencia de Trabajo

> Completar al finalizar todas las tareas.

### Decisiones de diseño finales

- ¿Por qué composición Proyecto→Tarea? [justificación]
- ¿Por qué agregación GestorProyectos→Proyecto? [justificación]
- ¿Cómo facilita el trabajo del Tester QA? [explicación]
- ¿Cómo facilita el trabajo del Dev Storage? [explicación]

### Checklist de cierre

- [ ] spec-dev-poo.md commiteado antes que cualquier archivo .js en models/
- [ ] 3 archivos de clases en js/models/
- [ ] diagrama-clases.puml y .png en docs/04-diagramas/02-diagrama-de-clases/
- [ ] diagrama-clases-doc.md creado
- [ ] index.html actualizado con referencias a las clases
- [ ] PR creada hacia develop con Coordinador como reviewer
- [ ] changelog.md actualizado con link a la PR
