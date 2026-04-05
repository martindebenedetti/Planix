# Test Case 1 — Compatibilidad Visual en Navegadores Desktop

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
Verificar que la página se visualiza correctamente en distintos viewports desktop
sin elementos cortados, desbordados o ilegibles.

## Herramientas utilizadas
- Playwright MCP (`@playwright/mcp`) con viewport emulation
- GitHub Copilot Agent Mode

---

## Prompt para Copilot Agent Mode

Copiá este prompt en Copilot Agent Mode con Playwright MCP activo:

```
Usando Playwright MCP, necesito testear la compatibilidad visual de mi página
en distintos viewports desktop. La URL es http://localhost:3000

Ejecutá estos pasos en orden:
1. Navegá a la URL y esperá que la página cargue completamente
2. Configurá el viewport en 1920x1080 y tomá una captura de pantalla completa
3. Verificá que en este viewport:
   - El header con la navegación sea visible y no se corte
   - Las secciones principales estén en fila horizontal donde corresponda
   - Las tablas sean legibles sin scroll horizontal
   - El footer muestre el texto y los links correctamente
4. Configurá el viewport en 1440x900 y tomá captura completa
5. Configurá el viewport en 1280x800 (simulando Firefox/Safari) y tomá captura completa
6. Configurá el viewport en 1280x800 (simulando Edge) y tomá captura completa
7. En cada viewport reportá si encontrás algún elemento que se corte,
   desborde o no se vea correctamente
8. Generá un resumen con el estado de cada viewport: OK o con problemas

Guardá las capturas en docs/04-testing/capturas/tc-1/momento-X/
(reemplazá X por 1 o 2 según el momento de ejecución)
```

---

## MOMENTO 1 — Pre-merge (rama `feature/`)

### Viewports testeados
| Viewport | Navegador simulado | Navegación | Layout | Tabla | Footer | Estado |
|----------|--------------------|------------|--------|-------|--------|--------|
| 1920×1080 | Chrome | | | | | |
| 1440×900 | Chrome | | | | | |
| 1280×800 | Firefox / Safari | | | | | |
| 1280×800 | Edge | | | | | |

### Capturas de pantalla
| Viewport | Captura | Estado |
|----------|---------|--------|
| 1920×1080 | ![](capturas/tc-1/momento-1/desktop-1920x1080.png) | |
| 1440×900 | ![](capturas/tc-1/momento-1/desktop-1440x900.png) | |
| 1280×800 Firefox/Safari | ![](capturas/tc-1/momento-1/desktop-1280x800-firefox.png) | |
| 1280×800 Edge | ![](capturas/tc-1/momento-1/desktop-1280x800-edge.png) | |

### Hallazgos
| # | Elemento | Viewport afectado | Descripción | Severidad |
|---|----------|-------------------|-------------|-----------|
| | | | | |

### Resultado Momento 1
- [ ] ✅ PASS — Sin hallazgos
- [ ] ⚠️ FAIL CON OBSERVACIONES
- [ ] ❌ FAIL

---

## MOMENTO 2 — Post-merge (`develop`)

### Viewports testeados
| Viewport | Navegador simulado | Navegación | Layout | Tabla | Footer | Estado |
|----------|--------------------|------------|--------|-------|--------|--------|
| 1920×1080 | Chrome | | | | | |
| 1440×900 | Chrome | | | | | |
| 1280×800 | Firefox / Safari | | | | | |
| 1280×800 | Edge | | | | | |

### Capturas de pantalla
| Viewport | Captura | Estado |
|----------|---------|--------|
| 1920×1080 | ![](capturas/tc-1/momento-2/desktop-1920x1080.png) | |
| 1440×900 | ![](capturas/tc-1/momento-2/desktop-1440x900.png) | |
| 1280×800 Firefox/Safari | ![](capturas/tc-1/momento-2/desktop-1280x800-firefox.png) | |
| 1280×800 Edge | ![](capturas/tc-1/momento-2/desktop-1280x800-edge.png) | |

### Hallazgos
| # | Elemento | Viewport afectado | Descripción | Severidad |
|---|----------|-------------------|-------------|-----------|
| | | | | |

### Resultado Momento 2
- [ ] ✅ PASS — Sin hallazgos
- [ ] ⚠️ FAIL CON OBSERVACIONES
- [ ] ❌ FAIL

---

## Issues creados
| Issue | Momento | Elemento | Severidad | Estado |
|-------|---------|----------|-----------|--------|
| | | | | |

## Conclusión general
**Resultado final:** <!-- PASS / FAIL CON OBSERVACIONES / FAIL -->

<!-- Escribí un resumen de los hallazgos más importantes y las acciones requeridas -->