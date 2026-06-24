# Spec: Desarrollador JS Librerías Externas

**Segundo Parcial | Programación Web I | UCES**
**Estudiante:** Martin Debenedetti
**Rama:** `feature/dev-libreria-externa-sweetalert2`
**Proyecto:** Planix — Planificador de Proyectos con Diagrama de Gantt

---

## 📋 ANTES — Plan de Integración de Librería Externa

### Necesidad específica del proyecto

En la Actividad Obligatoria N°4, Planix fue refactorizado para eliminar
completamente el uso de `prompt()` y `alert()` nativos del navegador.
Sin embargo, la aplicación requiere confirmación del usuario en
operaciones críticas como eliminar una tarea del diagrama, y también
necesita comunicar estados al usuario (éxito al guardar, errores al
cargar datos de forma asíncrona). Estas interacciones no tienen
actualmente una implementación visual consistente ni accesible.

### Por qué no se resuelve con código propio

Implementar modales accesibles desde cero requiere manejo de focus
trap, roles ARIA, cierre con Escape y overlay, lo cual excede el
alcance de este rol. SweetAlert2 provee todo esto de forma probada y
compatible con navegadores modernos. Además, no duplica ninguna
funcionalidad existente: Planix no tiene ningún sistema de
notificaciones ni modales de confirmación en `script.js`, `models/`
ni `utils/`.

### Librería seleccionada

| Campo                     | Detalle                                    |
| ------------------------- | ------------------------------------------ |
| **Nombre**                | SweetAlert2                                |
| **Versión**               | 11.x                                       |
| **Repositorio**           | https://github.com/sweetalert2/sweetalert2 |
| **Documentación oficial** | https://sweetalert2.github.io/             |
| **Licencia**              | MIT                                        |

### Método de integración previsto

Integración vía **CDN** en `index.html`:

```html
<!-- En el <head> -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"
/>

<!-- Antes del cierre de </body> -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js"></script>
```

### Puntos de integración previstos

**Punto 1 — Confirmación al eliminar una tarea del diagrama**  
Cuando el usuario intente eliminar una tarea del Gantt, se mostrará
un modal de confirmación antes de ejecutar la acción. Esto reemplaza
el comportamiento anterior que dependía de `confirm()` nativo.

**Punto 2 — Notificación de éxito y error en operaciones de guardado**  
Al guardar o editar una tarea exitosamente se mostrará una
notificación de éxito. Si la operación falla (datos inválidos o error
en el fetch asíncrono), se mostrará un mensaje de error descriptivo,
coordinado con el módulo `apiService.js`.

### Decisiones de arquitectura

**¿Se crea un módulo wrapper?** ✅ Sí  
**Ruta:** `js/libs/notificaciones.js`

**Justificación:** centralizar la configuración de SweetAlert2 en un
único archivo evita repetir opciones en cada punto de la app y
facilita el mantenimiento. Si en el futuro se cambia la librería,
solo hay que modificar ese archivo.

Los colores de los botones se ajustarán para que coincidan con la
paleta de Planix definida en `css/styles.css`.

### Criterios de aceptación

- [x] Librería integrada vía CDN en `index.html` y funcionando sin errores en consola
- [x] Módulo wrapper creado en `js/libs/notificaciones.js`
- [x] Implementada en al menos 2 puntos distintos de la aplicación
- [x] No duplica ninguna funcionalidad implementada con código propio
- [x] Consistencia visual mantenida con el diseño existente de Planix
- [x] Documentación en `docs/07-librerias/libreria-doc.md` completa con capturas
- [x] Comentarios JSDoc en todas las funciones del wrapper
- [x] Issue creada en GitHub y linkeada en `changelog.md`

---

## ✅ AL CERRAR — Resultado de la Integración

### Lo que se implementó

Se integró SweetAlert2 v11.x vía CDN exactamente como fue planificado. El orden de carga de scripts en `index.html` fue un punto crítico: SweetAlert2 debe cargarse antes que `notificaciones.js`, y este antes que `script.js`, para que el objeto global `Swal` esté disponible cuando se define el wrapper y cuando se invoca desde el controlador.

Se creó el módulo wrapper `js/libs/notificaciones.js` con cuatro métodos:

```javascript
const Notificaciones = {
  async confirmar(titulo, texto) { ... },  // retorna Promise<boolean>
  exito(mensaje)                 { ... },  // toast de éxito, cierre automático 2s
  error(mensaje)                 { ... },  // modal de error con detalle
  info(titulo, mensaje)          { ... }   // modal informativo
};
```

La integración se realizó en dos puntos de `js/script.js`:

**Punto 1 — `manejarAccionesTabla()`:** la función se convirtió en `async` para poder esperar la respuesta del modal de confirmación. La eliminación de la tarea se realiza filtrando el array `proyecto.tareas` directamente, ya que el modelo `Tarea` no expone un método `eliminar()`.

```javascript
async function manejarAccionesTabla(event) {
  const elemento = event.target;
  if (elemento.classList.contains("btn-eliminar-tarea")) {
    const nombreTarea = elemento.getAttribute("data-tarea");
    const confirmo = await Notificaciones.confirmar(
      "¿Eliminar tarea?",
      "Esta acción no se puede deshacer."
    );
    if (confirmo) {
      const proyecto = gestor.buscar(selectProyecto.value);
      proyecto.tareas = proyecto.tareas.filter(function(t) {
        return t.nombre !== nombreTarea;
      });
      guardarEnStorage();
      actualizarVistaProyecto(proyecto);
      Notificaciones.exito("Tarea eliminada correctamente");
    }
  }
}
```

**Punto 2 — `manejarAgregarTarea()`:** se reemplazaron las llamadas a `mostrarExito()` y `mostrarError()` por `Notificaciones.exito()` y `Notificaciones.error()`.

Adicionalmente, se agregó un botón "Eliminar" a cada fila de `renderizarTablaGantt()` en una columna dedicada fuera del área de semanas, con el atributo `data-tarea` que el handler de delegación necesita para identificar la tarea a eliminar.

### Prompt utilizado con el asistente de IA

> En `js/script.js`, buscá donde se maneja el evento de eliminar una tarea y reemplazalo así:
> ```
> botonEliminar.addEventListener('click', async () => {
>   const confirmo = await Notificaciones.confirmar('¿Eliminar tarea?', 'Esta acción no se puede deshacer.');
>   if (confirmo) {
>     tarea.eliminar();
>     Notificaciones.exito('Tarea eliminada correctamente');
>   }
> });
> ```
>
> Integrar en Punto 2 — Notificaciones al guardar: en `manejarAgregarTarea()`, reemplazar las alertas inline por `Notificaciones.exito('Tarea guardada correctamente')` en el bloque `try` y `Notificaciones.error('No se pudo guardar la tarea')` en el bloque `catch`.

### Diferencias entre lo planeado y lo implementado

| Aspecto | Planificado | Implementado |
| --- | --- | --- |
| Eliminación de tarea | `tarea.eliminar()` | `proyecto.tareas.filter(...)` — el modelo no expone ese método |
| Botón de eliminar | Ya existía en la UI | Se tuvo que agregar en `renderizarTablaGantt()` con `data-tarea` |
| Orden de scripts | No especificado | Crítico: SweetAlert2 → notificaciones.js → script.js |

### Coordinación con el equipo

La integración de `Notificaciones.error()` en `manejarAgregarTarea()` fue coordinada con el **Desarrollador JS Propio**, ya que esa función fue implementada por ese rol. La modificación se limitó a reemplazar las llamadas a `mostrarError()` y `mostrarExito()` por las equivalentes del wrapper, sin alterar la lógica de validación ni el flujo de guardado.

No se modificaron archivos de `js/models/` ni `js/utils/`, respetando el límite de responsabilidad del rol.
