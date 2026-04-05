# Test Case 5 — Estructura HTML Semántica y Validación CSS/HTML

## Metadata
| Campo | Valor |
|-------|-------|
| Responsable | |
| Fecha Momento 1 | |
| Fecha Momento 2 | |
| Rama Momento 1 | `feature/` |
| Rama Momento 2 | `develop` |
| URL testeada | `http://localhost:3000` |

## Objetivo
Verificar que la página utilice HTML5 semántico correctamente y que el código
HTML y CSS sea válido según los estándares del W3C.

## Herramientas utilizadas
- Playwright MCP (`@playwright/mcp`) con snapshot de accesibilidad
- W3C HTML Validator API (`validator.w3.org`) vía curl
- W3C CSS Validator API (`jigsaw.w3.org/css-validator`) vía curl
- GitHub Copilot Agent Mode

---

## Prompt para Copilot Agent Mode

Copiá este prompt en Copilot Agent Mode con Playwright MCP activo:

```
Usando Playwright MCP y herramientas disponibles, necesito analizar la
estructura semántica y validar el código de http://localhost:3000

PARTE 1 — Estructura HTML semántica

1. Navegá a http://localhost:3000 con Playwright MCP y tomá un snapshot
   de accesibilidad completo
2. Del snapshot extraé y listá:
   - Todos los headings (h1-h6) con nivel y texto
   - Todos los landmarks (header, nav, main, footer, section, article)
   - Cualquier <div> donde debería ir un elemento semántico
3. Verificá:
   - ¿Hay un solo h1?
   - ¿La jerarquía de headings no tiene saltos (h1→h2→h3)?
   - ¿Todos los campos del formulario tienen <label> asociado?
   - ¿Las tablas tienen <caption>?
4. Tomá captura de pantalla de la página

PARTE 2 — Validación HTML con W3C

Usá este comando para validar el archivo index.html:

cat index.html | curl -s -F 'uploaded_file=@-' -F 'output=json' \
  https://validator.w3.org/check | jq '.'

Reportá:
- Total de errores y warnings
- Por cada error: número de línea, descripción y fragmento de código afectado

PARTE 3 — Validación CSS con W3C

Para cada archivo CSS ejecutá:

cat css/styles.css | curl -s \
  -F 'file=@-;type=text/css' \
  -F 'output=json' \
  'https://jigsaw.w3.org/css-validator/validator' | jq '.'

Repetí para css/components.css y css/responsive.css

Reportá por cada archivo:
- Total de errores y warnings
- Por cada error: número de línea, propiedad afectada y descripción

RESUMEN FINAL

Generá una tabla consolidada con:
- Estado de estructura semántica
- Total errores HTML
- Total errores CSS por archivo
- Lista de issues a crear

Guardá las capturas en docs/04-testing/capturas/tc-5/momento-X/
(reemplazá X por 1 o 2 según el momento de ejecución)
```

---

## MOMENTO 1 — Pre-merge (rama `feature/`)

### Estructura de headings
| Nivel | Texto | ¿Correcto? | Observación |
|-------|-------|-----------|-------------|
| | | | |
| | | | |

### Landmarks detectados
| Landmark | Elemento HTML | ¿Correcto? | Observación |
|----------|---------------|-----------|-------------|
| | | | |
| | | | |

### Verificaciones semánticas
| Verificación | Estado | Detalle |
|--------------|--------|---------|
| Un solo H1 | | |
| Jerarquía de headings sin saltos | | |
| Secciones con elementos semánticos | | |
| Campos de formulario con label | | |
| Tabla/s con caption | | |

### Validación W3C HTML
| Tipo | Cantidad | Detalle |
|------|----------|---------|
| Errores | | |
| Warnings | | |

### Validación W3C CSS
| Archivo | Errores | Warnings |
|---------|---------|----------|
| styles.css | | |
| components.css | | |
| responsive.css | | |

### Capturas de pantalla
| Descripción | Captura |
|-------------|---------|
| Snapshot accesibilidad | ![](capturas/tc-5/momento-1/semantic-snapshot.png) |
| W3C HTML Validator | ![](capturas/tc-5/momento-1/w3c-html.png) |
| W3C CSS — styles.css | ![](capturas/tc-5/momento-1/w3c-css-styles.png) |
| W3C CSS — components.css | ![](capturas/tc-5/momento-1/w3c-css-components.png) |
| W3C CSS — responsive.css | ![](capturas/tc-5/momento-1/w3c-css-responsive.png) |

### Hallazgos
| # | Tipo | Elemento / Archivo | Descripción | Severidad |
|---|------|--------------------|-------------|-----------|
| | | | | |

### Resultado Momento 1
- [ ] ✅ PASS — Sin hallazgos
- [ ] ⚠️ FAIL CON OBSERVACIONES
- [ ] ❌ FAIL

---

## MOMENTO 2 — Post-merge (`develop`)

### Estructura de headings
| Nivel | Texto | ¿Correcto? | Observación |
|-------|-------|-----------|-------------|
| | | | |
| | | | |

### Landmarks detectados
| Landmark | Elemento HTML | ¿Correcto? | Observación |
|----------|---------------|-----------|-------------|
| | | | |
| | | | |

### Verificaciones semánticas
| Verificación | Estado | Detalle |
|--------------|--------|---------|
| Un solo H1 | | |
| Jerarquía de headings sin saltos | | |
| Secciones con elementos semánticos | | |
| Campos de formulario con label | | |
| Tabla/s con caption | | |

### Validación W3C HTML
| Tipo | Cantidad | Detalle |
|------|----------|---------|
| Errores | | |
| Warnings | | |

### Validación W3C CSS
| Archivo | Errores | Warnings |
|---------|---------|----------|
| styles.css | | |
| components.css | | |
| responsive.css | | |

### Capturas de pantalla
| Descripción | Captura |
|-------------|---------|
| Snapshot accesibilidad | ![](capturas/tc-5/momento-2/semantic-snapshot.png) |
| W3C HTML Validator | ![](capturas/tc-5/momento-2/w3c-html.png) |
| W3C CSS — styles.css | ![](capturas/tc-5/momento-2/w3c-css-styles.png) |
| W3C CSS — components.css | ![](capturas/tc-5/momento-2/w3c-css-components.png) |
| W3C CSS — responsive.css | ![](capturas/tc-5/momento-2/w3c-css-responsive.png) |

### Hallazgos
| # | Tipo | Elemento / Archivo | Descripción | Severidad |
|---|------|--------------------|-------------|-----------|
| | | | | |

### Resultado Momento 2
- [ ] ✅ PASS — Sin hallazgos
- [ ] ⚠️ FAIL CON OBSERVACIONES
- [ ] ❌ FAIL

---

## Issues creados
| Issue | Momento | Tipo | Elemento / Archivo | Severidad | Estado |
|-------|---------|------|--------------------|-----------|--------|
| | | | | | |

## Decisiones tomadas
<!-- Explicá qué hallazgos registraste como bugs y cuáles descartaste, con justificación -->

## Conclusión general
**Resultado final:** <!-- PASS / FAIL CON OBSERVACIONES / FAIL -->

<!-- Escribí un resumen de los hallazgos más importantes y las acciones requeridas -->