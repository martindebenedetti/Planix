# SPEC – FRONTEND BOOTSTRAP MIGRATION

## Planificación previa

### Instalación de Bootstrap

Se utilizará Bootstrap v5.3 mediante CDN jsDelivr.

Bootstrap se integrará sin eliminar los estilos existentes en:

- css/styles.css
- css/components.css
- css/responsive.css

Las personalizaciones se centralizarán en:

css/bootstrap-overrides.css

### Secciones a migrar al sistema de columnas

Las siguientes secciones se migrarán al grid de Bootstrap:

- Layout principal
- Sidebar
- Sección descripción
- Formulario nueva tarea
- Sección multimedia

Se utilizarán clases:

- container
- container-fluid
- row
- col-md
- col-lg

### Criterios de aceptación


- [] Bootstrap instalado correctamente
- [] Sitio responsive en mobile
- [] Sistema de columnas implementado
- [] Estilos existentes preservados
- [] Overrides centralizados en bootstrap-overrides.css