# Planificador de Tareas - Diagrama de Gantt

## Datos Académicos

- **Carrera:** Tecnicatura Universitaria en Programación de Sistemas
- **Materia:** Programación Web I - 1º Cuat. 2026
- **Docente:** Matias Velasquez

## Integrantes del equipo

| Nombre y Apellido    | Matrícula |   Usuario Git   |                Rol                 |
| :------------------- | :-------: | :-------------: | :--------------------------------: |
| Martín Debenedetti   |  151579   | martindebenedetti | Desarrollador JS Librerías Externas |
| Leandro Berro        |  155667   |      leanlex      | Desarrollador JS Asíncrono (Fetch) |
| Gian Franco Pasquali |  148159   |      giann98      | Coordinador - DevOps / Tester QA |
  

---

## Descripción del proyecto

Este proyecto propone el desarrollo de una página web orientada a la visualización y planificación de tareas mediante un esquema tipo **diagrama de Gantt**.

El sistema busca representar de forma clara la organización de tareas, sus fechas, duración, relaciones, responsables y nivel de avance. A partir de las sólidas bases funcionales y de arquitectura MVC construidas durante las Actividades Obligatorias (1 a 4) y el Primer Parcial, el **Segundo Parcial** incorpora una nueva evolución del proyecto centrada en:

- la **programación asíncrona** para el consumo de datos externos mediante Fetch API y Promises;
- la mejora de la UI/UX a través de la integración de **librerías externas**;
- la ampliación de la **suite de testing automatizado** con Jasmine para flujos asíncronos;
- la ejecución de **auditorías de rendimiento y accesibilidad** utilizando Lighthouse.

---

## Objetivos

**Objetivos Consolidados (Etapas anteriores):**
- Base visual y funcional para un planificador de tareas tipo diagrama de Gantt.
- Mejora de la experiencia responsive utilizando Bootstrap 5.
- Documentación técnica y metodológica mediante specs, testing y changelog.
- Arquitectura MVC con manipulación dinámica del DOM, eventos y persistencia (Web Storage).

**Nuevos Objetivos (Segundo Parcial):**
- Transformar la aplicación estática en una plataforma dinámica capaz de consumir datos asíncronos.
- Enriquecer la interfaz de usuario con notificaciones visuales modernas y accesibles mediante librerías de terceros.
- Aplicar funciones de orden superior (`map`, `filter`, `reduce`) para el procesamiento de colecciones de datos.
- Garantizar la calidad del software mediante pruebas automatizadas de integración y consumo de APIs.
- Mantener estrictos estándares de rendimiento (Performance $\ge80$) y accesibilidad (Accessibility $\ge90$) auditados con Lighthouse.
- Consolidar la gestión DevOps mediante flujos de Code Review asistidos por Inteligencia Artificial.

---

## Tecnologías utilizadas

- HTML5 & CSS3
- Bootstrap 5
- JavaScript (ES6+, Programación Orientada a Objetos)
- Fetch API & Promises
- JSONPlaceholder API
- SweetAlert2 (Librería externa)
- Web Storage API (`localStorage`, `sessionStorage`)
- Jasmine (Testing Automatizado)
- Google Lighthouse (Auditorías de QA)
- Git y GitHub (GitHub Projects / Kanban)
- GitHub Copilot Agent Mode (Code Reviews)
- Markdown & PlantUML
- Figma
- PlayWright MCP
- GitHub MCP

---

## Funcionalidades principales

- **Creación dinámica de proyectos y tareas:** Gestión completa en el DOM sin recargas de página.
- **Visualización Gantt:** Representación de tareas en formato tabla con estados y métricas de avance.
- **Feedback visual moderno:** Alertas, confirmaciones y notificaciones manejadas mediante SweetAlert2.
- **Consumo asíncrono de datos:** Carga inicial de datos desde un endpoint REST (`/todos`) integrado a los modelos POO.
- **Persistencia local:** Almacenamiento y recuperación automática del estado a través de un módulo Storage encapsulado.
- **Filtrado avanzado:** Procesamiento en tiempo real de colecciones de tareas por estado utilizando funciones de orden superior.

---

## Documentación y Evolución Gráfica

### Mockups y Diseño UX/UI
- **Enlace al archivo de Figma:** [Ver mockup en Figma](https://www.figma.com/design/v1QKUD77dcsM0WDRMHapz6/Mockup-UX---Planificador-Gantt?node-id=54-283&t=Ww4homzl6jfJxrQm-0)
- **Mockup inicial (AO1):** ![Mockup inicial](docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png)
- **Mockup con estilos (AO2):** ![Mockup con estilos](docs/01-mockup/actividad-obligatoria-2/diseño-con-estilos.png)
- **Mockup Bootstrap (Primer Parcial):** ![Mockup Bootstrap](docs/01-mockup/disenio-bootstrap.png)

### Diagramas de Arquitectura
- [Ver documentación de diagramas de actividades (4 Flujos)](docs/05-diagramas/01-diagrama-de-actividades/diagramas-doc.md)
- [Ver diagrama de clases POO](docs/05-diagramas/02-diagrama-de-clases/diagrama-clases-doc.md)

### QA, Testing y Librerías
- [Ver índice de testing funcional (Jasmine) y auditorías (Lighthouse)](docs/04-testing/testing-doc.md)
- [Ver documentación e integración de SweetAlert2](docs/07-librerias/libreria-doc.md)

---

## Estado del proyecto

### ✅ Actividad Obligatoria N.º 4 (Completada)
Se consolidó la lógica de negocio mediante POO, se integró el almacenamiento local (`localStorage` y `sessionStorage`) y se refactorizó la app hacia una arquitectura de Eventos y manipulación dinámica del DOM, eliminando funciones bloqueantes.
- **Resultado final de testing:** 88 specs, 0 failures.
- **Release:** `v1.2-cuarta-entrega` mergeada exitosamente en `master`.

El proyecto se encuentra en la etapa de cierre y publicación del **Segundo Parcial**, incorporando consumo asíncrono de datos (Fetch API), integración de librerías externas (SweetAlert2) y suite de testing avanzada (Jasmine + Lighthouse).

### Avances Segundo Parcial

- Implementación de consumo asíncrono (Fetch API) desde JSONPlaceholder
- Integración de SweetAlert2 para notificaciones modales
- Suite de testing con Jasmine (101 specs, 0 failures)
- Auditorías de rendimiento y accesibilidad con Lighthouse
- Optimización de recursos (imágenes, contraste WCAG)
- Gestión de issues QA con priorización

### Resultado final de testing

```text
101 specs, 0 failures
Performance: 98 | Accessibility: 97
```

---

## Organización del repositorio

- `plan.md`: Requerimientos funcionales y contexto general del proyecto.
- `README.md`: Presentación, objetivos, tecnologías y estado del proyecto.
- `changelog.md`: Registro de contribuciones, releases, PRs y participación de los integrantes.
- `index.html`: Estructura principal de la interfaz.
- `css/`: Hojas de estilo (`styles.css`, `components.css`, `responsive.css`, `bootstrap-overrides.css`).
- `docs/01-mockup/`: Imágenes y recursos visuales de la evolución del diseño.
- `docs/03-specs/`: Especificaciones técnicas organizadas por actividad y rol (AO1 a Segundo Parcial).
- `docs/04-testing/`: Casos de prueba (Jasmine) y auditorías Lighthouse (`test-case-11`, `12` y `13`).
- `docs/05-diagramas/`: Diagramas UML y archivos PlantUML.
- `docs/06-storage/`: Documentación de operaciones de persistencia.
- `docs/07-librerias/`: Documentación de integración y capturas de SweetAlert2.
- `.github/PULL_REQUEST_TEMPLATE/`: Plantillas para Pull Requests.
- `js/models/`: Clases de dominio POO (`Tarea.js`, `Proyecto.js`, `GestorProyectos.js`).
- `js/utils/`: Utilidades transversales (`storage.js`).
- `js/api/`: Módulos de consumo asíncrono (`apiService.js`).
- `js/script.js`: Controlador de Eventos + DOM.
- `js/test/`: Runner de Jasmine (`test-runner.html`) y suites de prueba (`models.spec.js`, `script.spec.js`, `storage.spec.js`, `api.spec.js`, `library.spec.js`).