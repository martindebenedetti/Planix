# Test Case 4 — Accesibilidad Web (axe-core)

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
Detectar violaciones de accesibilidad WCAG 2.1 mediante análisis automatizado
con axe-core, identificando elementos que impidan el acceso a usuarios con discapacidades.

## Herramientas utilizadas
- Playwright MCP (`@playwright/mcp`) con inyección de axe-core
- GitHub Copilot Agent Mode

---

## Prompt para Copilot Agent Mode

Copiá este prompt en Copilot Agent Mode con Playwright MCP activo:

```
Usando Playwright MCP, necesito hacer un análisis de accesibilidad de
http://localhost:3000 usando axe-core.

Ejecutá estos pasos en orden:

1. Navegá a la URL y esperá que cargue completamente
2. Inyectá axe-core desde CDN:
   await page.addScriptTag({
     url: 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.7.2/axe.min.js'
   })
3. Ejecutá el análisis completo:
   const results = await page.evaluate(() => axe.run())
4. Tomá una captura de pantalla de la página
5. Reportá TODAS las violaciones encontradas con:
   - ID de la regla violada
   - Descripción del problema
   - Impacto (critical / serious / moderate / minor)
   - Selector del elemento HTML afectado
   - Sugerencia de corrección
6. Reportá también los incomplete (necesitan revisión manual)
7. Generá un resumen: total de violaciones agrupadas por nivel de impacto

Guardá las capturas en docs/04-testing/capturas/tc-4/momento-X/
(reemplazá X por 1 o 2 según el momento de ejecución)
```

---

## MOMENTO 1 — Pre-merge (rama `feature/`)

### Violaciones encontradas
| # | Regla axe | Impacto | Elemento afectado | Descripción |
|---|-----------|---------|-------------------|-------------|
| | | | | |
| | | | | |
| | | | | |

### Needs Review (incomplete)
| # | Regla axe | Elemento | Descripción |
|---|-----------|----------|-------------|
| | | | |

### Capturas de pantalla
| Descripción | Captura |
|-------------|---------|
| Estado general de la página | ![](capturas/tc-4/momento-1/accessibility-overview.png) |

### Resumen por nivel de impacto
| Nivel | Cantidad | Reglas |
|-------|----------|--------|
| 🔴 critical | | |
| 🟠 serious | | |
| 🟡 moderate | | |
| 🔵 minor | | |
| **Total** | | |

### Resultado Momento 1
- [ ] ✅ PASS — Sin violaciones
- [ ] ⚠️ FAIL CON OBSERVACIONES — Solo violaciones moderate/minor
- [ ] ❌ FAIL — Violaciones critical o serious presentes

---

## MOMENTO 2 — Post-merge (`develop`)

### Violaciones encontradas
| # | Regla axe | Impacto | Elemento afectado | Descripción |
|---|-----------|---------|-------------------|-------------|
| | | | | |
| | | | | |
| | | | | |

### Needs Review (incomplete)
| # | Regla axe | Elemento | Descripción |
|---|-----------|----------|-------------|
| | | | |

### Capturas de pantalla
| Descripción | Captura |
|-------------|---------|
| Estado general de la página | ![](capturas/tc-4/momento-2/accessibility-overview.png) |

### Resumen por nivel de impacto
| Nivel | Cantidad | Reglas |
|-------|----------|--------|
| 🔴 critical | | |
| 🟠 serious | | |
| 🟡 moderate | | |
| 🔵 minor | | |
| **Total** | | |

### Resultado Momento 2
- [ ] ✅ PASS — Sin violaciones
- [ ] ⚠️ FAIL CON OBSERVACIONES — Solo violaciones moderate/minor
- [ ] ❌ FAIL — Violaciones critical o serious presentes

---

## Issues creados
| Issue | Momento | Regla axe | Elemento | Impacto | Estado |
|-------|---------|-----------|----------|---------|--------|
| | | | | | |

## Decisiones tomadas
<!-- Explicá qué hallazgos registraste como bugs y cuáles descartaste, con justificación -->

## Conclusión general
**Resultado final:** <!-- PASS / FAIL CON OBSERVACIONES / FAIL -->

<!-- Escribí un resumen de los hallazgos más importantes y las acciones requeridas -->