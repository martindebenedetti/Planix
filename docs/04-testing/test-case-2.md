# Test Case 2 — Responsive en Dispositivos Móviles

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
Verificar que el diseño responsive funciona correctamente en móviles y tablets,
sin desbordamientos ni scroll horizontal involuntario.

## Herramientas utilizadas
- Playwright MCP (`@playwright/mcp`) con viewport emulation
- GitHub Copilot Agent Mode

---

## Prompt para Copilot Agent Mode

Copiá este prompt en Copilot Agent Mode con Playwright MCP activo:

```
Usando Playwright MCP, necesito testear el diseño responsive de
http://localhost:3000 en distintos dispositivos móviles.

Ejecutá estos pasos en orden:

1. Configurá el viewport en 390x844 (iPhone 14 Pro)
   - Navegá a la página y tomá captura completa
   - Verificá si la navegación se adapta sin desbordarse
   - Verificá si los elementos se apilan verticalmente donde corresponde
   - Verificá si alguna tabla genera scroll horizontal
   - Verificá si el formulario ocupa el ancho completo
   - Verificá si hay scroll horizontal en la página

2. Configurá el viewport en 412x915 (Samsung Galaxy S23) y repetí los mismos pasos

3. Configurá el viewport en 820x1180 (iPad Air) y repetí los mismos pasos

4. Para cada dispositivo reportá qué elementos se ven correctamente
   y cuáles tienen problemas visuales

5. Generá un resumen indicando qué dispositivo presenta más problemas

Guardá las capturas en docs/04-testing/capturas/tc-2/momento-X/
(reemplazá X por 1 o 2 según el momento de ejecución)
```

---

## MOMENTO 1 — Pre-merge (rama `feature/`)

### Dispositivos testeados
| Dispositivo | Viewport | Navegación | Layout móvil | Tabla | Formulario | Scroll horizontal | Estado |
|-------------|----------|------------|--------------|-------|------------|-------------------|--------|
| iPhone 14 Pro | 390×844 | | | | | | |
| Samsung Galaxy S23 | 412×915 | | | | | | |
| iPad Air | 820×1180 | | | | | | |

### Capturas de pantalla
| Dispositivo | Captura | Estado |
|-------------|---------|--------|
| iPhone 14 Pro | ![](capturas/tc-2/momento-1/iphone-14-pro-390x844.png) | |
| Samsung Galaxy S23 | ![](capturas/tc-2/momento-1/samsung-galaxy-s23-412x915.png) | |
| iPad Air | ![](capturas/tc-2/momento-1/ipad-air-820x1180.png) | |

### Hallazgos
| # | Elemento | Dispositivo afectado | Descripción | Desbordamiento | Severidad |
|---|----------|----------------------|-------------|----------------|-----------|
| | | | | | |

### Resultado Momento 1
- [ ] ✅ PASS — Sin hallazgos
- [ ] ⚠️ FAIL CON OBSERVACIONES
- [ ] ❌ FAIL

---

## MOMENTO 2 — Post-merge (`develop`)

### Dispositivos testeados
| Dispositivo | Viewport | Navegación | Layout móvil | Tabla | Formulario | Scroll horizontal | Estado |
|-------------|----------|------------|--------------|-------|------------|-------------------|--------|
| iPhone 14 Pro | 390×844 | | | | | | |
| Samsung Galaxy S23 | 412×915 | | | | | | |
| iPad Air | 820×1180 | | | | | | |

### Capturas de pantalla
| Dispositivo | Captura | Estado |
|-------------|---------|--------|
| iPhone 14 Pro | ![](capturas/tc-2/momento-2/iphone-14-pro-390x844.png) | |
| Samsung Galaxy S23 | ![](capturas/tc-2/momento-2/samsung-galaxy-s23-412x915.png) | |
| iPad Air | ![](capturas/tc-2/momento-2/ipad-air-820x1180.png) | |

### Hallazgos
| # | Elemento | Dispositivo afectado | Descripción | Desbordamiento | Severidad |
|---|----------|----------------------|-------------|----------------|-----------|
| | | | | | |

### Resultado Momento 2
- [ ] ✅ PASS — Sin hallazgos
- [ ] ⚠️ FAIL CON OBSERVACIONES
- [ ] ❌ FAIL

---

## Issues creados
| Issue | Momento | Elemento | Dispositivo | Severidad | Estado |
|-------|---------|----------|-------------|-----------|--------|
| | | | | | |

## Conclusión general
**Resultado final:** <!-- PASS / FAIL CON OBSERVACIONES / FAIL -->

<!-- Escribí un resumen de los hallazgos más importantes y las acciones requeridas -->