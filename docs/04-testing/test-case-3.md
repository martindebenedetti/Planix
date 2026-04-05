# Test Case 3 — Performance y Carga

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
Medir los tiempos de carga y el tamaño de los recursos principales de la página
para detectar problemas de performance antes del merge a develop.

## Herramientas utilizadas
- Playwright MCP (`@playwright/mcp`) con evaluación de la Performance API del navegador
- GitHub Copilot Agent Mode

---

## Prompt para Copilot Agent Mode

Copiá este prompt en Copilot Agent Mode con Playwright MCP activo:

```
Usando Playwright MCP, necesito analizar la performance de http://localhost:3000

Ejecutá estos pasos en orden:

1. Navegá a la URL esperando Network idle
2. Usá evaluate() para ejecutar:
   window.performance.getEntriesByType("navigation")[0]
   y extraé: domContentLoadedEventEnd, loadEventEnd, domInteractive
3. Usá evaluate() para obtener window.performance.getEntriesByType("resource")
   y listá cada recurso con su name, transferSize y duration
4. Tomá una captura de pantalla del estado final cargado
5. Reportá:
   - Tiempo hasta DOMContentLoaded (ms)
   - Tiempo hasta Load completo (ms)
   - Tiempo hasta DOM Interactive (ms)
   - Listado de recursos: nombre, tipo, tamaño (KB) y tiempo de descarga (ms)
   - Total de recursos y tamaño total acumulado
   - ¿Hay recursos que superen 500KB?
   - ¿Hay recursos que tarden más de 500ms en descargar?
6. Generá un resumen con estado OK o con problemas por cada métrica

Guardá las capturas en docs/04-testing/capturas/tc-3/momento-X/
(reemplazá X por 1 o 2 según el momento de ejecución)
```

---

## MOMENTO 1 — Pre-merge (rama `feature/`)

### Métricas de performance
| Métrica | Valor medido | Umbral recomendado | Estado |
|---------|-------------|-------------------|--------|
| DOMContentLoaded | ms | < 800 ms | |
| DOM Interactive | ms | < 600 ms | |
| Load completo | ms | < 2000 ms | |
| Total de recursos | | — | |
| Tamaño total | KB | < 1 MB | |

### Recursos analizados
| Recurso | Tipo | Tamaño (KB) | Tiempo descarga (ms) | Estado |
|---------|------|-------------|----------------------|--------|
| | | | | |
| | | | | |
| | | | | |

### Capturas de pantalla
| Descripción | Captura |
|-------------|---------|
| Estado final cargado | ![](capturas/tc-3/momento-1/performance-estado-final.png) |

### Hallazgos
| # | Métrica / Recurso | Valor | Descripción | Severidad |
|---|-------------------|-------|-------------|-----------|
| | | | | |

### Resultado Momento 1
- [ ] ✅ PASS — Sin hallazgos
- [ ] ⚠️ FAIL CON OBSERVACIONES
- [ ] ❌ FAIL

---

## MOMENTO 2 — Post-merge (`develop`)

### Métricas de performance
| Métrica | Valor medido | Umbral recomendado | Estado |
|---------|-------------|-------------------|--------|
| DOMContentLoaded | ms | < 800 ms | |
| DOM Interactive | ms | < 600 ms | |
| Load completo | ms | < 2000 ms | |
| Total de recursos | | — | |
| Tamaño total | KB | < 1 MB | |

### Recursos analizados
| Recurso | Tipo | Tamaño (KB) | Tiempo descarga (ms) | Estado |
|---------|------|-------------|----------------------|--------|
| | | | | |
| | | | | |
| | | | | |

### Capturas de pantalla
| Descripción | Captura |
|-------------|---------|
| Estado final cargado | ![](capturas/tc-3/momento-2/performance-estado-final.png) |

### Hallazgos
| # | Métrica / Recurso | Valor | Descripción | Severidad |
|---|-------------------|-------|-------------|-----------|
| | | | | |

### Resultado Momento 2
- [ ] ✅ PASS — Sin hallazgos
- [ ] ⚠️ FAIL CON OBSERVACIONES
- [ ] ❌ FAIL

---

## Issues creados
| Issue | Momento | Métrica / Recurso | Severidad | Estado |
|-------|---------|-------------------|-----------|--------|
| | | | | |

## Conclusión general
**Resultado final:** <!-- PASS / FAIL CON OBSERVACIONES / FAIL -->

<!-- Escribí un resumen de los hallazgos más importantes y las acciones requeridas -->