---
title: Correcciones de index.html (desde develop)
author: Automatizado por asistente
---

Este archivo contiene una versión corregida y anotada de `index.html` tomada
de la rama `develop`. El código CSS y la interactividad JavaScript han sido
dejados comentados para que puedas revisarlos y activarlos cuando prefieras.

Uso: copia el bloque HTML abajo a `index.html` si quieres que la página quede
activa; por ahora los estilos y scripts están en comentarios.

---

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Planificador de Tareas - Diagrama de Gantt para gestión de proyectos">
    <meta name="author" content="Leandro Berro - Programación Web I - UCES 2026">
    <title>Planificador de Tareas - Diagrama de Gantt</title>

        <!-- CSS comentado: activa cuando quieras aplicar estilos -->
        <!--
        <style>
        :root {
            --primary: #0f49bd;
            --bg: #f6f6f8;
            --muted: #6b7280;
        }
        html,body {
            height:100%;
            margin:0;
            font-family:Inter, system-ui, sans-serif;
            background:var(--bg);
            color:#111;
        }
        header {
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:12px 16px;
            background:#fff;
            border-bottom:1px solid #e5e7eb;
        }
        nav {
            display:flex;
            justify-content:space-between;
            padding:8px 16px;
            background:#fbfbfd;
            border-bottom:1px solid #eee;
        }
        main {
            display:flex;
            flex-direction:column;
            gap:12px;
            min-height:60vh;
            padding:16px;
        }
        #tabla-gantt {
            width:100%;
            border-collapse:collapse;
        }
        thead th {
            background:#f3f4f6;
            position:sticky;
            top:0;
        }
        .sr-only {
            position:absolute;
            width:1px;
            height:1px;
            padding:0;
            margin:-1px;
            overflow:hidden;
            clip:rect(0,0,0,0);
            white-space:nowrap;
            border:0;
        }
        /* Corrección: se recomienda agregar focus-visible para accesibilidad */
        /*
        :focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
        }
        */
        /* Corrección: se recomienda usar box-sizing:border-box en todos los elementos */
        /*
        *, *::before, *::after {
            box-sizing: border-box;
        }
        */
        </style>
        -->

        <!-- Corrección: se recomienda importar la fuente Inter desde Google Fonts para mayor compatibilidad -->
        <!--
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
        -->
</head>
<body>

    <header role="banner" aria-label="Encabezado del planificador">
        <div aria-label="Información del proyecto" style="display:flex;align-items:center;gap:12px">
            <img src="docs/01-mockup/actividad-obligatoria-1/diseño-inicial.png" alt="Ícono del planificador de tareas tipo diagrama de Gantt" width="32" height="32">
            <div>
                <h1>Planificador de Tareas - Diagrama de Gantt</h1>
                <div>
                    <span aria-label="Estado: En Ejecución">● En Ejecución</span>
                    <span aria-label="ID del proyecto">ID: PRJ-2026-001</span>
                </div>
            </div>
        </div>

        <div aria-label="Progreso y acciones" style="display:flex;align-items:center;gap:12px">
            <div aria-label="Progreso general">
                <span>Progreso General</span>
                <strong>65%</strong>
                <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" aria-label="65% completado">
                    <div style="width:65%;background:var(--primary);height:8px;border-radius:4px" aria-hidden="true"></div>
                </div>
            </div>
            <div>
                <button type="button" aria-label="Ver baseline del proyecto">Baseline</button>
                <button type="button" aria-label="Compartir proyecto">Compartir</button>
            </div>
        </div>
    </header>

    <nav role="navigation" aria-label="Barra de herramientas">
        <div aria-label="Acciones de edición">
            <button type="button" aria-label="Guardar cambios">Guardar</button>
            <button type="button" aria-label="Deshacer">Deshacer</button>
            <button type="button" aria-label="Rehacer">Rehacer</button>
            <span role="separator" aria-hidden="true"> | </span>
            <button type="button" aria-label="Ver ruta crítica">Ruta Crítica</button>
            <button type="button" aria-label="Vista Gantt activa" aria-pressed="true">Vista Gantt</button>
        </div>

        <div aria-label="Controles de escala y zoom">
            <div role="group" aria-label="Escala de tiempo">
                <button type="button" aria-label="Ver por días">Días</button>
                <button type="button" aria-label="Ver por semanas (activo)" aria-pressed="true">Semanas</button>
                <button type="button" aria-label="Ver por meses">Meses</button>
            </div>
            <button type="button" aria-label="Ampliar zoom">Zoom +</button>
            <button type="button" aria-label="Reducir zoom">Zoom -</button>
            <button type="button" aria-label="Filtros">Filtros</button>
        </div>
    </nav>

    <main role="main" aria-label="Contenido principal del planificador">

        <section id="nueva-tarea" aria-labelledby="titulo-nueva-tarea">
            <h2 id="titulo-nueva-tarea">Nueva tarea</h2>
            <form id="form-nueva-tarea" aria-labelledby="titulo-nueva-tarea">
                <div>
                    <label for="nombre-tarea">Nombre:</label>
                    <input type="text" id="nombre-tarea" name="nombre-tarea" placeholder="Ej: Revisión de código" aria-required="true" required>
                </div>
                <div>
                    <label for="responsable">Responsable:</label>
                    <input type="text" id="responsable" name="responsable" placeholder="Ej: Leandro B." aria-required="true" required>
                </div>
                <div>
                    <label for="fecha-inicio">f_inicio:</label>
                    <input type="date" id="fecha-inicio" name="fecha-inicio" aria-required="true" required>
                </div>
                <div>
                    <label for="fecha-fin">f_fin:</label>
                    <input type="date" id="fecha-fin" name="fecha-fin" aria-required="true" required>
                </div>
                <div>
                    <label for="predecesora">Predecesora:</label>
                    <input type="text" id="predecesora" name="predecesora" placeholder="Ej: 2.2" aria-label="ID de tarea predecesora (opcional)">
                </div>
                <div>
                    <label for="avance">% Avance:</label>
                    <input type="number" id="avance" name="avance" min="0" max="100" value="0" aria-label="Porcentaje de avance entre 0 y 100">
                </div>
                <button type="submit" aria-label="Agregar nueva tarea">+ Agregar tarea</button>
            </form>
        </section>

        <div role="region" aria-label="Tabla unificada de tareas y diagrama de Gantt" tabindex="0">
            <table id="tabla-gantt" aria-label="Tabla de tareas con diagrama de Gantt integrado">
                <caption class="sr-only">Planificador de tareas con columnas de datos y diagrama de Gantt</caption>
                <thead>
                    <tr>
                        <th scope="col" rowspan="2" aria-label="Identificador">ID</th>
                        <th scope="col" rowspan="2" aria-label="Nombre de la tarea">Nombre Tarea</th>
                        <th scope="col" rowspan="2" aria-label="Duración">Duración</th>
                        <th scope="col" rowspan="2" aria-label="Fecha de inicio">f_inicio</th>
                        <th scope="col" rowspan="2" aria-label="Fecha de fin">f_fin</th>
                        <th scope="col" rowspan="2" aria-label="Predecesora">Predecesora</th>
                        <th scope="col" rowspan="2" aria-label="Responsable">Responsable</th>
                        <th scope="colgroup" colspan="4" aria-label="Mes Marzo 2026">MARZO 2026</th>
                        <th scope="colgroup" colspan="4" aria-label="Mes Abril 2026">ABRIL 2026</th>
                        <th scope="colgroup" colspan="2" aria-label="Mes Mayo 2026">MAYO 2026</th>
                    </tr>
                    <tr>
                        <th scope="col" aria-label="Semana 9">S9</th>
                        <th scope="col" aria-label="Semana 10">S10</th>
                        <th scope="col" aria-label="Semana 11">S11</th>
                        <th scope="col" aria-label="Semana 12">S12</th>
                        <th scope="col" aria-label="Semana 13">S13</th>
                        <th scope="col" aria-label="Semana 14">S14</th>
                        <th scope="col" aria-label="Semana 15">S15</th>
                        <th scope="col" aria-label="Semana 16">S16</th>
                        <th scope="col" aria-label="Semana 17">S17</th>
                        <th scope="col" aria-label="Semana 18">S18</th>
                    </tr>
                </thead>
                <tbody id="cuerpo-tabla">
                    <tr aria-label="Grupo 1: Planificación del proyecto">
                        <td>1</td>
                        <td colspan="6"><strong>1. PLANIFICACIÓN</strong></td>
                        <td colspan="3" aria-label="Duración del grupo Planificación: semanas 9 a 11">
                            <div role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="Planificación 100% completada">████████████ 100%</div>
                        </td>
                        <td colspan="7" aria-hidden="true"></td>
                    </tr>
                    <tr aria-label="Tarea 1.1: Relevamiento de requisitos, 10 días, 100% completado">
                        <td>1.1</td>
                        <td>Relevamiento de requisitos</td>
                        <td>10d</td>
                        <td>01/03/2026</td>
                        <td>10/03/2026</td>
                        <td>—</td>
                        <td>Leandro B.</td>
                        <td colspan="2" aria-label="Barra tarea 1.1: semanas 9 y 10, 100% completado">
                            <div role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="100% completado">████████ 100%</div>
                        </td>
                        <td colspan="8" aria-hidden="true"></td>
                    </tr>
                    <!-- Más filas: conservar la lógica del develop pero generar dinámicamente con JS en el futuro -->
                </tbody>
            </table>
        </div>

    </main>

    <footer role="contentinfo" aria-label="Barra de estado del proyecto">
        <div aria-label="Estadísticas del proyecto">
            <span><strong>Duración Total:</strong> 65 días</span>
            <span><strong>Tareas:</strong> 6 total, 2 críticas</span>
            <span><strong>Ruta Crítica:</strong> <span aria-label="Ruta crítica activa">⚠ Activa</span></span>
        </div>
        <div aria-label="Leyenda y versión">
            <ul aria-label="Leyenda del diagrama">
                <li><span aria-hidden="true">●</span> Progreso</li>
                <li><span aria-hidden="true">◆</span> Hito</li>
            </ul>
            <address><a href="mailto:leanlex@gmail.com">Equipo Planix</a> — Prog. Web I · UCES 2026</address>
            <span aria-label="Versión">v.1.0.0</span>
        </div>
    </footer>

    <!-- JS comentado: activa cuando quieras la interactividad -->
    <!--
    <script>
        // Corrección: usar addEventListener de forma segura y validar existencia del formulario
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('form-nueva-tarea');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    // TODO: validar campos y agregar fila a la tabla dinámicamente
                    // Corrección: aquí se recomienda validar que todos los campos requeridos estén completos
                    // y mostrar mensajes de error accesibles si falta algún dato
                    console.log('Agregar nueva tarea (pendiente implementar)');
                });
            }
        });
        // Corrección: se recomienda modularizar la lógica JS en funciones separadas para escalabilidad
    </script>
    -->

</body>
</html>
```

---

Observaciones:
- He mantenido la estructura semántica que había en `develop` y limpié comentarios y marcadores incompletos.
- El CSS y JS están provistos como ejemplos y están comentados para evitar que el archivo quede visualmente roto si se pega tal cual.
- Todas las correcciones y sugerencias están agregadas como comentarios para facilitar su revisión y activación progresiva.
