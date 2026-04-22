# Planificador de Tareas - Diagrama de Gantt

## Datos Académicos
- **Carrera:** Tecnicatura Universitaria en Programación de Sistemas
- **Materia:** Programación Web I - 1º Cuat. 2026
- **Docente:** Matias Velasquez

## Integrantes del equipo

| Nombre y Apellido | Matrícula | Usuario Git | Rol |
|:---|:---:|:---:|:---:|
| Martín Debenedetti | 151579 | martindebenedetti | DESARROLLADOR DE COMPONENTES HTML AVANZADOS |
| Leandro Berro | 155667 | leanlex | Coordinador / DevOps |
| Gian Franco Pasquali | 148159 | giann98 | Desarrollador Frontend/Bootstrap / Especialista en Componentes 
Bootstrap |


---

## Descripción del proyecto

Este proyecto propone el desarrollo de una página web orientada a la visualización y planificación de tareas mediante un esquema tipo **diagrama de Gantt**.

El sistema busca representar de forma clara la organización de tareas, sus fechas, duración, relaciones, responsables y nivel de avance. A partir de las bases construidas en las Actividades Obligatorias 1 y 2, el **Primer Parcial** incorpora una nueva etapa de evolución del proyecto, centrada en:

- la **migración visual y estructural a Bootstrap**;
- la mejora de la **responsividad** del sitio;
- la incorporación de **componentes avanzados de Bootstrap**;
- la incorporación de **componentes HTML avanzados**;
- la continuidad del trabajo colaborativo mediante GitHub, issues, Pull Requests, changelog y documentación técnica.

---

## Objetivos

- Consolidar una base visual y funcional para un planificador de tareas tipo diagrama de Gantt.
- Mantener coherencia entre diseño, estructura HTML, estilos CSS y futura integración con Bootstrap.
- Mejorar la experiencia responsive del proyecto en distintos dispositivos.
- Incorporar componentes visuales y estructurales más avanzados para enriquecer la interfaz.
- Documentar técnica y metodológicamente el trabajo del equipo mediante specs, testing y changelog.
- Dejar preparada una base sólida para próximas etapas de desarrollo con JavaScript e interactividad.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- Bootstrap 5
- Markdown
- Git y GitHub
- GitHub Copilot
- Figma
- Playwright MCP
- GitHub MCP
- Claude Code MCP

---

## Funcionalidades previstas

- Visualización de tareas en formato tabla.
- Representación gráfica de tareas en una línea de tiempo tipo Gantt.
- Visualización de duración, fechas de inicio y fin.
- Visualización de relaciones entre tareas.
- Visualización del porcentaje de avance.
- Mejora de la navegación principal mediante componentes reutilizables.
- Mejora de la experiencia responsive utilizando Bootstrap.
- Incorporación de componentes avanzados de Bootstrap.
- Incorporación de componentes HTML avanzados.
- Posibilidad de ampliar el detalle de cada tarea mediante una ventana modal o vista ampliada.
- Evolución futura con JavaScript e interactividad adicional.

---

## Estructura general prevista de la página

La página contempla una organización visual compuesta por:

- barra de navegación superior;
- panel lateral o área de navegación contextual;
- encabezado de proyecto con estado y progreso;
- sector de carga o edición de tareas;
- área principal destinada a la visualización del cronograma;
- componentes complementarios para interacción y visualización;
- pie de página con referencias e información general.

---

## Documentación

### Mockup del proyecto en Figma
- **Enlace al archivo de Figma:** [Ver mockup en Figma](https://www.figma.com/design/v1QKUD77dcsM0WDRMHapz6/Mockup-UX---Planificador-Gantt?node-id=54-283&t=Ww4homzl6jfJxrQm-0)

### Mockup inicial (Actividad Obligatoria 1)

![Imagen exportada del mockup inicial](docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png)

### Mockup con estilos (Actividad Obligatoria 2)

En esta etapa se incorporaron al diseño:

- paleta de colores definitiva;
- tipografías del sistema;
- espaciados y dimensiones de componentes;
- estados de interacción de los elementos de interfaz.

![Mockup con estilos](docs/01-mockup/actividad-obligatoria-2/diseño-con-estilos.png)

### Mockup actualizado para Bootstrap (Primer Parcial)

Para el Primer Parcial se generó una nueva versión del mockup tomando como base el diseño mejorado de la Actividad Obligatoria 2 e incorporando criterios visuales compatibles con Bootstrap, incluyendo:

- una **navbar** superior;
- reorganización del layout con lógica de **grilla Bootstrap**;
- mantenimiento de la identidad visual del proyecto;
- una estructura visual preparada para integrar componentes avanzados.

![Mockup Bootstrap](docs/01-mockup/disenio-bootstrap.png)

### Índice de testing y casos de prueba
[Ver documentación de testing](docs/04-testing/testing-doc.md)

---

## Estado del proyecto

El proyecto se encuentra actualmente en desarrollo del **Primer Parcial**, tomando como base corregida las Actividades Obligatorias 1 y 2.

### Avances alcanzados hasta el momento

- integración de la base corregida de las Actividades Obligatorias 1 y 2;
- backport de la release anterior hacia `develop`;
- creación de la especificación técnica inicial del rol Coordinador / DevOps;
- actualización del mockup visual del proyecto para reflejar la migración a Bootstrap;
- exportación del mockup actualizado como `docs/01-mockup/disenio-bootstrap.png`.

### Pendiente para esta etapa

- instalación e integración de Bootstrap en la interfaz;
- implementación de componentes avanzados de Bootstrap;
- incorporación de componentes HTML avanzados;
- testing responsive con Playwright MCP;
- cierre de specs por rol con evidencia final;
- integración final en release del Primer Parcial.

---

## Organización del repositorio

- `plan.md`: archivo base con los requerimientos funcionales y el contexto general del proyecto.
- `README.md`: presentación general del proyecto, objetivos, tecnologías, referencias visuales y estado de avance.
- `index.html`: estructura base del frontend.
- `css/styles.css`: variables, reset, tipografías y layout general del proyecto.
- `css/components.css`: estilos de componentes visuales específicos del sistema.
- `css/responsive.css`: media queries y ajustes responsivos.
- `css/bootstrap-overrides.css`: personalizaciones visuales sobre Bootstrap para mantener la identidad del proyecto.
- `docs/01-mockup/`: imágenes y recursos visuales del mockup organizados por actividad o entrega.
- `docs/03-specs/`: especificaciones técnicas organizadas por etapa y por rol.
- `docs/03-specs/primer-parcial/`: especificaciones técnicas correspondientes al Primer Parcial.
- `docs/04-testing/`: documentación de testing y casos de prueba.
- `docs/04-testing/test-case-1.md` a `test-case-5.md`: testing de la Actividad Obligatoria 2.
- `docs/04-testing/test-case-6.md` a `test-case-10.md`: testing previsto para el Primer Parcial.
- `changelog.md`: registro de contribuciones, PRs, fixes y participación del equipo.
- `.github/PULL_REQUEST_TEMPLATE/`: plantillas de Pull Requests para ramas feature y release.

---

## Observaciones de trabajo colaborativo

El desarrollo del proyecto se organiza mediante:

- ramas `feature/` individuales por rol;
- Pull Requests hacia `develop`;
- revisión previa antes de cada merge;
- documentación obligatoria en `changelog.md`;
- uso de issues para seguimiento de tareas y bugs;
- coordinación de integración y release por parte del rol Coordinador / DevOps.

---