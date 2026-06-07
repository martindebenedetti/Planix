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

```text
Eres un desarrollador JavaScript experto en Programación Orientada a Objetos.

Genera las clases del dominio para "Planix", una app web de Gantt chart.
Basate en los diagramas de actividades adjuntos y en el spec-dev-poo.md.

REGLAS OBLIGATORIAS:
1. Las clases van en js/models/ — un archivo por clase
2. Las clases NO usan prompt(), alert() ni manipulan el DOM
3. Las clases encapsulan TODA la lógica de negocio
4. Cada clase tiene toJSON() y static fromJSON(json)
5. Cada clase valida sus parámetros en el constructor y lanza Error si son inválidos
6. JSDoc completo en constructor y métodos
7. PascalCase para clases, camelCase para métodos y propiedades

ARCHIVO 1 — js/models/Tarea.js:

class Tarea con:
- static ESTADOS_VALIDOS = ["pendiente", "en curso", "completada"]
- constructor(nombre, responsable, estado = "pendiente")
  → lanzar Error si nombre vacío, responsable vacío, o estado inválido
- cambiarEstado(nuevoEstado): valida y actualiza, lanza Error si inválido
- esValida(): retorna boolean
- toJSON(): retorna { nombre, responsable, estado }
- static fromJSON(json): retorna new Tarea(json.nombre, json.responsable, json.estado)

ARCHIVO 2 — js/models/Proyecto.js:

class Proyecto con:
- constructor(nombre, fechaInicio, fechaFin)
  → lanzar Error si nombre vacío, formato de fecha inválido, o fin <= inicio
- agregarTarea(tarea): valida que sea instancia de Tarea, agrega a this.tareas
- calcularAvance(): cuenta tareas con estado "completada" / total * 100, retorna Number
- determinarEstado(): compara fecha actual con fechaFin y avance, retorna String
- toJSON(): retorna { nombre, fechaInicio, fechaFin, tareas: this.tareas.map(t => t.toJSON()) }
- static fromJSON(json): reconstruye el Proyecto con sus Tareas usando Tarea.fromJSON

Reutilizar las funciones de validación de fechas (parsearFecha, validarFormatoFecha)
que ya existen en el script.js anterior.

ARCHIVO 3 — js/models/GestorProyectos.js:

class GestorProyectos con:
- constructor(): this.proyectos = []
- agregar(proyecto): valida nombre único (case-insensitive), lanza Error si duplicado
- buscar(nombre): retorna Proyecto o null (búsqueda case-insensitive)
- listar(): retorna [...this.proyectos] (copia del array)
- filtrarTareas(proyecto, criterio): retorna array de tareas que coincidan con criterio
  ("pendiente" | "en curso" | "completada" | "todas")

Genera los 3 archivos completos listos para usar en browser sin módulos ES6.
```

### Output generado por Copilot

```javascript
/**
 * Representa una tarea dentro de un proyecto.
 */
function Tarea(nombre, responsable, estado = "pendiente") {
  if (typeof nombre !== "string" || nombre.trim().length === 0) {
    throw new Error("El nombre de la tarea no puede estar vacío.");
  }

  if (typeof responsable !== "string" || responsable.trim().length === 0) {
    throw new Error("El responsable de la tarea no puede estar vacío.");
  }

  if (
    typeof estado !== "string" ||
    Tarea.ESTADOS_VALIDOS.indexOf(estado) === -1
  ) {
    throw new Error("Estado de tarea inválido.");
  }

  this.nombre = nombre.trim();
  this.responsable = responsable.trim();
  this.estado = estado;
}

/**
 * Estados permitidos para una tarea.
 * @type {string[]}
 */
Tarea.ESTADOS_VALIDOS = ["pendiente", "en curso", "completada"];

/**
 * Cambia el estado de la tarea tras validar el nuevo estado.
 * @param {string} nuevoEstado - Estado al que se desea cambiar.
 * @throws {Error} Si el estado no es válido.
 */
Tarea.prototype.cambiarEstado = function (nuevoEstado) {
  if (
    typeof nuevoEstado !== "string" ||
    Tarea.ESTADOS_VALIDOS.indexOf(nuevoEstado) === -1
  ) {
    throw new Error("Nuevo estado inválido.");
  }
  this.estado = nuevoEstado;
};
```

### Ajustes manuales realizados

- **Sintaxis ES5 vs ES6**: Aunque el prompt pedía compatibilidad de navegador, se ajustaron minuciosamente las clases generadas para usar funciones constructoras (`function Tarea()`) y `prototype` en vez de la sintaxis `class` de ES6 o sintaxis de módulos (import/export), garantizando así su carga correcta al incluirse mediante tags `<script>` secuenciales sin conflictos ni requerir un bundler de forma anticipada.
- **Ajuste en serialización (`toJSON`)**: Se cambiaron métodos modernos como `map()` y `find()` por bucles `for` nativos en `Proyecto.prototype.toJSON` y validaciones para máxima compatibilidad con el resto del código Legacy de `script.js`.

---

## ✅ AL CERRAR — Evidencia de Trabajo

### Decisiones de diseño finales

- **¿Por qué composición Proyecto→Tarea?**
  Porque en el dominio de nuestra aplicación Gantt, una Tarea no tiene sentido lógico por fuera de su Proyecto. Su ciclo de vida está completamente ligado; si un proyecto se elimina, sus tareas se destruyen con él.

- **¿Por qué agregación GestorProyectos→Proyecto?**
  Porque el Gestor de Proyectos funciona como una colección o repositorio. Un Proyecto tiene identidad propia y podría, conceptualmente, existir por sí mismo (o guardarse individualmente en disco) antes de ser agregado al gestor.

- **¿Cómo facilita el trabajo del Tester QA?**
  Al estar la lógica de negocio completamente aislada en clases sin manipulaciones del DOM ni bloqueos nativos como `alert()` o `prompt()`, el Tester puede instanciar fácilmente las clases (`new Proyecto(...)`) y probar los métodos (ej. `calcularAvance()`) en un entorno automatizado (como Jasmine), validando si retorna el número o error correcto.

- **¿Cómo facilita el trabajo del Dev Storage?**
  La estandarización de los métodos de serialización `toJSON()` en las instancias y los constructores estáticos `fromJSON()` permite que el desarrollador encargado de localStorage no tenga que desglosar cada propiedad. Simplemente llama al JSON al guardar, y al recuperar desde disco utiliza `GestorProyectos.fromJSON(...)` para rehidratar el árbol de dependencias de golpe.

### Checklist de cierre

- [x] spec-dev-poo.md commiteado antes que cualquier archivo .js en models/
- [x] 3 archivos de clases en js/models/
- [x] diagrama-clases.puml y .png en docs/04-diagramas/02-diagrama-de-clases/
- [x] diagrama-clases-doc.md creado
- [x] index.html actualizado con referencias a las clases
- [x] PR creada hacia develop con Coordinador como reviewer
- [x] changelog.md actualizado con link a la PR
