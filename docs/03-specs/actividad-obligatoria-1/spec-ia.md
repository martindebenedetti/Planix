# Especificación Técnica - Rol Especialista en IA y Prompt Engineering (Spec-Driven Development)

## Descripción

Esta especificación técnica describe las tareas a realizar por el rol de **Especialista en IA y Prompt Engineering** en el marco del proyecto.

Se aplica la metodología **Spec-Driven Development (SDD)**, donde la especificación se redacta antes de iniciar cualquier tarea de desarrollo o documentación dentro del repositorio.

El objetivo de este rol es asegurar que el equipo utilice herramientas de inteligencia artificial de forma correcta y eficiente, así como documentar los prompts utilizados durante el desarrollo del proyecto.

---

# Aplicación de Spec-Driven Development en el proyecto

En este proyecto se adoptará la metodología **Spec-Driven Development**, la cual establece que cada tarea o implementación debe estar precedida por una especificación técnica que describa:

* Qué se va a hacer
* Por qué se realiza
* Cuáles son los criterios de aceptación

Cada rol del equipo tendrá su propio archivo de especificación técnica dentro del repositorio:

```
docs/03-specs/spec-devops.md
docs/03-specs/spec-frontend.md
docs/03-specs/spec-ux.md
docs/03-specs/spec-ia.md
```

Estas especificaciones deben redactarse **antes de iniciar el desarrollo**, y deben ser incluidas en el Pull Request correspondiente.

Un Pull Request sin su spec técnica no será aprobado.

---

# Template de especificación técnica para los roles

El rol de IA define el siguiente [template](./spec-[rol].md)  estándar que deberán utilizar todos los roles para sus especificaciones técnicas
Este template permitirá mantener una **estructura consistente en todas las especificaciones del proyecto**.

---

# ¿Qué se hará?

Como **Especialista en IA y Prompt Engineering**, se realizarán las siguientes tareas:

### 1. Investigación de metodología SDD

Se analizará la metodología Spec-Driven Development y se definirá cómo será aplicada dentro del proyecto, estableciendo:

* la estructura de los archivos de especificación
* el contenido mínimo que deben tener
* la relación entre las especificaciones y el plan del proyecto

Las decisiones tomadas serán documentadas en:

[sdd-decisions](../02-prompts/sdd-decisions.md)

---

### 2. Documentación del uso de Inteligencia Artificial

Durante el desarrollo del proyecto se documentarán los prompts utilizados con herramientas de inteligencia artificial.

Los prompts se almacenarán en la carpeta:

```
docs/02-prompts/
```

Los archivos serán:

```
prompts.md
prompts-1.md
prompts-2.md
prompts-3.md
prompts-4.md
prompts-5.md
```

El archivo **prompts.md** funcionará como índice que enlaza a cada prompt individual.

---

### 3. Documentación de prompts utilizados

Cada prompt documentado deberá incluir:

* Modelo de inteligencia artificial utilizado
* Método de prompting aplicado
* Prompt exacto utilizado
* Resultado esperado
* Resultado obtenido
* Correcciones manuales realizadas
* Parte del proyecto donde se aplicó

Cada archivo deberá utilizar:

* un **modelo de IA diferente**
* un **método de prompting diferente**

Ejemplos de modelos:

* ChatGPT
* Claude
* Gemini
* GitHub Copilot
* Cursor AI

Ejemplos de métodos de prompting:

* Zero-shot prompting
* Few-shot prompting
* Chain-of-thought prompting
* Role prompting

---

### 4. Comparativa de modelos de IA

Se realizará una comparación entre **dos modelos de IA aplicados a una misma tarea del proyecto**.

El objetivo será evaluar cuál modelo produce mejores resultados en términos de:

* calidad del código generado
* claridad de las respuestas
* facilidad de uso

La comparativa será documentada en el archivo:

[comparativa-modelos](../02-prompts/comparativa-modelos.md)

---

### 5. Asistencia al equipo

El especialista en IA también actuará como **consultor interno del equipo**, ayudando a otros integrantes a utilizar herramientas de IA cuando sea necesario.

Además verificará que todos los integrantes del equipo utilicen:

* GitHub Copilot
* GitHub Pull Requests en Visual Studio Code

---

# ¿Por qué?

El uso de herramientas de inteligencia artificial puede acelerar significativamente el desarrollo de software, pero su uso debe ser documentado para mantener transparencia en el proceso.

Registrar los prompts utilizados permite:

* reproducir los resultados obtenidos
* entender cómo se utilizó la IA durante el desarrollo
* mejorar la calidad de las respuestas generadas por los modelos

Además, comparar diferentes modelos de IA permite identificar cuáles herramientas resultan más útiles para el desarrollo del proyecto.

---

# Criterios de Aceptación

* [ ] Se documenta la aplicación de Spec-Driven Development en el proyecto.
* [ ] Se define un template de especificación técnica para los roles.
* [ ] Existe un archivo `sdd-decisions.md` con las decisiones del equipo.
* [ ] Se documentan al menos **5 prompts utilizados en el proyecto**.
* [ ] Cada prompt utiliza un **modelo de IA diferente**.
* [ ] Cada prompt utiliza un **método de prompting diferente**.
* [ ] Se realiza una comparativa entre modelos de IA.
* [ ] Los prompts están organizados en la carpeta `docs/02-prompts`.

---

# Responsabilidades Adicionales

* Orientar al equipo en el uso adecuado de herramientas de inteligencia artificial.
* Verificar que los prompts utilizados aporten valor al proyecto.
* Mantener actualizada la documentación relacionada con IA.

---

# Riesgos y Mitigaciones

**Riesgo:** Uso incorrecto o poco eficiente de herramientas de IA.
**Mitigación:** Proporcionar guías y ejemplos de prompts efectivos.

**Riesgo:** Falta de documentación del uso de IA en el proyecto.
**Mitigación:** Registrar todos los prompts utilizados durante el desarrollo.

---

# Referencias

* Plan maestro del proyecto (`plan.md`)
* Documentación del repositorio
* Metodología Spec-Driven Development
