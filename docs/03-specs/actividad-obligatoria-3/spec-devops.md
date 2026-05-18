# Spec: Coordinador / DevOps

**Actividad Obligatoria N°3 | Programación Web I | UCES**  
**Estudiante:** Gian Franco Pasquali
**Proyecto:** Planificador de Tareas - Diagrama de Gantt (Planix)
**Rama:** `feature/coord-devops-tercera-entrega`

---

## 📋 ANTES — Plan de Coordinación

> ⚠️ Esta sección fue commiteada **antes** de comenzar cualquier tarea de coordinación.

### PRs esperadas y orden de integración

| Orden | Rama                                    | Responsable | Criterio de aprobación                                                                            |
| ----- | --------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| 1°    | `feature/arq-diagramas-actividades`     | Arquitecto  | 4 `.puml` + 4 `.png` + `diagramas-doc.md` + `spec-arq-diagramas.md` completo                      |
| 2°    | `feature/dev-javascript-logica-negocio` | Dev JS      | `script.js` con 4 flujos testeables + `spec-dev-javascript.md` completo                           |
| 3°    | `feature/tester-javascript-jasmine`     | Tester      | `script.spec.js` con 4 suites + `test-runner.html` + `testing-doc.md` + `spec-tester.md` completo |
| 4°    | `feature/coord-devops-tercera-entrega`  | Coordinador | `spec-devops.md` + `README.md` + `changelog.md` actualizados                                      |

El Arquitecto es prioritario porque el Dev JS depende de sus `.puml`.
El Tester es el último porque depende del `script.js` del Dev JS.

### Herramientas a utilizar

**GitHub Copilot en modo Agente** para realizar los code reviews sobre las PRs
de los demás integrantes.

Justificación: Copilot Agent Mode permite adjuntar los archivos del diff junto
con el `plan.md` y el mockup como contexto, generando observaciones específicas
con número de línea. Esto produce CHANGES_REQUESTED auditables y documentados,
más precisos que una revisión manual sin asistencia.

### Criterios de aceptación — Checklist

- [x] Correcciones del Primer Parcial aplicadas con ramas `fix/` y documentadas en `changelog.md`
- [x] Backport `backport/release-primer-parcial` → `develop` mergeado
- [ ] ≥ 4 code reviews realizados con Copilot Agent Mode y CHANGES_REQUESTED documentados
- [ ] Todas las ramas `feature/` integradas en `develop` con aprobación
- [ ] GitHub Pages activo y funcional en rama `release/tercera-entrega`
- [ ] Rama `release/tercera-entrega` creada desde `develop`
- [ ] PR `release/tercera-entrega` → `master` abierta con título correcto
- [ ] `README.md` actualizado con info de la tercera entrega y enlaces
- [ ] `changelog.md` actualizado con aportes de todos los integrantes
- [ ] Tablero Kanban en GitHub Projects con issues administradas
- [ ] Tag `v1.1-tercera-entrega` y release publicados en GitHub
- [ ] Solo quedan ramas: `master`, `develop`, `release/tercera-entrega`
- [ ] PR y GitHub Pages publicados en Slack y campus con formato correcto

---

## 🤖 DURANTE — Code Reviews con Copilot Agent Mode

> Esta sección se completa mientras se realizan los code reviews.

### Prompt base para code reviews

````
Estás analizando los cambios de una Pull Request activa.

INSTRUCCIONES IMPORTANTES:

- Identifica problemas reales del código
- Enumera los hallazgos (1, 2, 3…)
- Cada hallazgo debe ser independiente
- Sé claro, técnico y concreto
- No inventes problemas hipotéticos sin evidencia en el código
- No incluyas sugerencias de tests

Para cada hallazgo usa EXACTAMENTE esta estructura:

==================================================
HALLAZGO #<número>

Archivo:
Línea:

Tipo de problema:
(bug | performance | seguridad | legibilidad | diseño | otro)

Severidad:
(baja | media | alta | crítica)

Explicación técnica:
Por qué esto es un problema real.

Sugerencia de mejora:
Cambio concreto recomendado.

Ejemplo de código corregido (si aplica):
```codigo
ejemplo
DECISIÓN DEL REVISOR HUMANO:

[ ] Aceptar sugerencia
[ ] Rechazar sugerencia

Justificación del revisor humano:
(Completar manualmente si se rechaza)
Al final agrega:

RESUMEN GENERAL DE LA PR
Evaluación global de calidad y riesgos técnicos.

DECISIÓN FINAL SUGERIDA POR IA:

APPROVE / REQUEST CHANGES / COMMENT ONLY  
No completes la sección "DECISIÓN DEL REVISOR HUMANO".
Debe quedar vacía para edición manual. 
Publica comentarios directamente en la Pull Request en las líneas correspondientes.
No respondas en el chat salvo para el resumen final.
````

### Reviews realizados

**Review 1: PR de Arquitecto de Diagramas**  
 [completar]

**Review 2: PR de Desarrollador JavaScript**  
 [completar]

**Review 3: PR de Tester JavaScript**  
 [completar]

**Review 4: PR de [integrante adicional o segunda ronda]**  
 [completar]

---

## ✅ AL CERRAR — Evidencia de Trabajo

> Esta sección se completa al finalizar todas las tareas del rol.

### Prompts exactos utilizados por review

> [Pegar aquí el prompt completo usado en cada code review, uno por sección]

### Obstáculos encontrados y cómo se resolvieron

- [Obstáculo 1] → [Resolución]
- [Obstáculo 2] → [Resolución]

### Checklist de cierre

- [ ] `spec-devops.md` completo con secciones ANTES, DURANTE y AL CERRAR
- [ ] ≥ 4 code reviews documentados con prompts y CHANGES_REQUESTED
- [ ] `README.md` actualizado
- [ ] `changelog.md` con todos los aportes del equipo
- [ ] GitHub Pages funcionando en `release/tercera-entrega`
- [ ] Tag `v1.1-tercera-entrega` publicado
- [ ] Ramas innecesarias eliminadas
- [ ] PR release publicada en Slack y campus
