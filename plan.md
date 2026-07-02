# Spec Maestro - Planificador de Tareas (Diagrama de Gantt)

## Contexto del Proyecto

Se desarrollará una página web básica que sirva de base para un planificador de tareas estilo diagrama de Gantt. Esta primera entrega está enfocada en establecer la estructura HTML inicial, documentar el proyecto y preparar el terreno para futuras etapas de diseño, estilos e interactividad. A medida que avanza el cuatrimestre, el proyecto evolucionará hacia una aplicación web dinámica con arquitectura MVC, persistencia local y consumo de datos asíncronos.

## Objetivos del Proyecto

- Crear una estructura HTML5 semántica que funcione como plantilla inicial.
- Incluir contenido informativo sobre el tema elegido y los diagramas de Gantt.
- Preparar el código para futuras mejoras de CSS y JavaScript mediante comentarios/markadores.
- Cumplir con los requerimientos de entrega establecidos (documentación, specs y organización).
- Antes de realizar la implementación, redactar la especificación técnica (spec) y agregarla al PR correspondiente.
- Cada rol debe tener su archivo `spec-<rol>.md` en `docs/03-specs/` con el detalle del trabajo a realizar.

## Requerimientos Funcionales (Extraídos de la consigna)

RF1 – Visualización de tareas  
El sistema debe permitir visualizar una lista de tareas dentro de la página principal.

RF2 – Información de cada tarea  
Cada tarea debe mostrar al menos la siguiente información:
- ID
- nombre de la tarea
- responsable
- fecha de inicio
- fecha de finalización
- tarea previa
- tarea siguiente

RF3 – Representación temporal  
El sistema debe representar visualmente la duración de las tareas en una línea de tiempo similar a un diagrama de Gantt.

RF4 – Organización de tareas  
Las tareas deben mostrarse organizadas dentro de la interfaz de forma clara para facilitar la comprensión del flujo del proyecto.

RF5 – Navegación dentro del sitio  
El usuario debe poder navegar entre las diferentes secciones del sitio mediante enlaces o menú de navegación.

RF6 – Visualización de información explicativa  
El sistema debe mostrar contenido descriptivo sobre qué es un diagrama de Gantt y su utilidad en la planificación de proyectos.

---

## Requerimientos No Funcionales

RNF1 – Usabilidad  
La interfaz debe ser simple, clara y fácil de navegar.

RNF2 – Compatibilidad  
La página web debe funcionar correctamente en navegadores modernos.

RNF3 – Estructura del código  
El código HTML, CSS y JavaScript debe mantenerse organizado y documentado para facilitar futuras mejoras.

---

## Evolución del diseño – Actividad Obligatoria 2 y Primer Parcial

En esta etapa del proyecto se incorpora una actualización del mockup inicial
para definir los lineamientos visuales del sistema y su adaptación a Bootstrap 5.

El diseño actualizado incluye:
- definición de una **paleta de colores** para la interfaz;
- definición de **tipografías** y jerarquías visuales;
- especificación de **espaciados y dimensiones de componentes**;
- definición de **estados de interacción** (hover, focus y disabled);
- integración de la **grilla y componentes de Bootstrap 5** (Navbar, Modales, Cards).

---

## Tercera Entrega — Programación Web con JavaScript (Completada)

### Objetivo General
Implementar la lógica de negocio principal del proyecto utilizando JavaScript, incorporando algoritmos, estructuras de control, funciones, arrays, objetos y testing automatizado. Se establecieron los 4 flujos funcionales core (Crear Proyecto, Agregar Tarea, Calcular Avance, Filtrar Tareas) bajo un entorno de ejecución procedimental validado por Jasmine.

---

## Cuarta Entrega — Arquitectura y Persistencia (Completada)

### Objetivo General
Refactorizar la aplicación hacia una arquitectura basada en responsabilidades claras, eliminando los flujos bloqueantes y garantizando la persistencia de datos del usuario en el navegador.

### Decisiones de Arquitectura
1.  **Lógica de Dominio (POO):** Encapsulamiento de la lógica de negocio en clases constructoras ES5 (`Tarea`, `Proyecto`, `GestorProyectos`).
2.  **Capa de Presentación (Controlador Puro):** Transformación de `js/script.js` en un orquestador exclusivo de eventos (`addEventListener`) y manipulación dinámica del DOM, eliminando `prompt()` y `alert()`.
3.  **Capa de Persistencia:** Módulo `StorageUtil` para guardar el estado general en `localStorage` y preferencias de sesión en `sessionStorage`.

---

## Segundo Parcial — Aplicación Dinámica y Auditorías de Calidad (Actual)

### Objetivo General
Evolucionar el proyecto mediante la integración de programación asíncrona, bibliotecas de terceros para la mejora de UI/UX, y un estricto control de calidad del software mediante pruebas funcionales y auditorías de rendimiento.

### Especificaciones de Integración
| Módulo | Responsable | Tecnología / Herramienta |
| :--- | :--- | :--- |
| Consumo Asíncrono | Dev JS Asíncrono | Fetch API / JSONPlaceholder (`/todos`) |
| UI/UX Extendida | Dev JS Librerías | SweetAlert2 (Notificaciones no bloqueantes) |
| QA & Performance | Tester QA/JS | Jasmine (Tests Asíncronos) / Google Lighthouse |
| Coordinación & CI/CD | DevOps | Copilot Agent Mode / GitHub Actions (Pages) |

### Requisitos Funcionales Adicionales (Segundo Parcial)
1.  **Carga inicial asíncrona:** La aplicación debe nutrirse de datos provenientes de una API REST utilizando promesas, gestionando correctamente los estados de carga (`loading`, `success`, `error`).
2.  **Transformación de datos:** Aplicación de funciones de orden superior (`map`, `filter`, `reduce`) para el mapeo de los datos remotos a las clases del dominio local.
3.  **Feedback enriquecido:** Utilización de SweetAlert2 para la confirmación de acciones destructivas o notificaciones de éxito/error.

### Estrategia de Calidad y Auditoría
La evolución del sistema será medida y auditada obligatoriamente en tres etapas utilizando **Google Lighthouse**:
- **Test Case 11:** Baseline Inicial (Previo al consumo de API).
- **Test Case 12:** Post-Integración de Fetch (Medición de impacto de red).
- **Test Case 13:** Post-Integración de Librería (Medición de impacto en LCP y TBT).
*Umbrales mínimos requeridos: Performance $\ge80$, Accessibility $\ge90$.*

---

## Estrategia de Branching y Versionado

El repositorio mantiene el esquema Git Flow adaptado:
- `master` (Código en producción, protegido)
- `develop` (Base de integración, protegida)
- `release/segundo-parcial` (Rama de preparación de entrega y *Request Changes*)
- `feature/*` (Desarrollo por rol)
- `fix/*` (Correcciones durante *Code Review*)
- `backport/*` (Sincronización `master` $\rightarrow$ `develop`)

**Tag de Cierre Previsto:** `v2.0-segundo-parcial`