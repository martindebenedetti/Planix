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

- [ ] Librería integrada vía CDN en `index.html` y funcionando sin errores en consola
- [ ] Módulo wrapper creado en `js/libs/notificaciones.js`
- [ ] Implementada en al menos 2 puntos distintos de la aplicación
- [ ] No duplica ninguna funcionalidad implementada con código propio
- [ ] Consistencia visual mantenida con el diseño existente de Planix
- [ ] Documentación en `docs/07-librerias/libreria-doc.md` completa con capturas
- [ ] Comentarios JSDoc en todas las funciones del wrapper
- [ ] Issue creada en GitHub y linkeada en `changelog.md`
