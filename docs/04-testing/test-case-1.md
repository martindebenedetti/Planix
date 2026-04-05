# Test Case 1 — Compatibilidad Visual en Navegadores Desktop

## Metadata
| Campo | Valor |
|-------|-------|
| Responsable | Leandro Berro |
| Fecha Momento 1 | 05/04/2026 |
| Fecha Momento 2 | Pendiente |
| Rama Momento 1 | `feature/dev-frontend-css-add-styles` |
| Rama Momento 2 | `develop` |
| URL testeada | `http://127.0.0.1:3000/index.html` |

## Objetivo
Verificar que la página se visualiza correctamente en distintos viewports desktop, sin elementos cortados, desbordados o ilegibles.

## Herramientas utilizadas
- Playwright MCP (`@playwright/mcp`)
- GitHub Copilot Agent Mode
- Live Preview / internal server
- Capturas de pantalla generadas durante la ejecución

---

## Prompt para Copilot Agent Mode

Copiá este prompt en Copilot Agent Mode con Playwright MCP activo:

```text
Usando Playwright MCP, necesito testear la compatibilidad visual de mi página
en distintos viewports desktop. La URL es http://127.0.0.1:3000/index.html

Ejecutá estos pasos en orden:

1. Navegá a la URL y esperá que la página cargue completamente.

2. Configurá el viewport en 1920x1080 (Chrome) y:
   - tomá una captura de pantalla completa
   - verificá que el header con la navegación sea visible y no se corte
   - verificá que las secciones principales estén visibles y alineadas correctamente
   - verificá que no haya overflow horizontal
   - verificá que el footer muestre el texto y los links correctamente

3. Configurá el viewport en 1440x900 (Firefox) y repetí la misma revisión.

4. Configurá el viewport en 1280x800 (Safari/macOS) y repetí la misma revisión.

5. Configurá el viewport en 1280x800 (Edge) y repetí la misma revisión.

6. Para cada viewport, reportá si encontrás:
   - elementos cortados
   - desbordes horizontales
   - problemas de alineación
   - jerarquía visual deficiente
   - footer o navegación mal renderizados

7. Generá un resumen final con el estado de cada viewport:
   - OK
   - Con problemas

8. No modifiques archivos del repositorio.
Solo reportá hallazgos y confirmá si las capturas se generaron correctamente.
```
---

## MOMENTO 1 — Pre-merge (rama `feature/dev-frontend-css-add-styles`)

### Viewports testeados
| Viewport | Navegador simulado |	Navegación	| Layout general | Tabla / Gantt | Footer | Estado |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1920×1080 | Chrome | OK | OK |	Con problemas | OK |	Con observaciones|
|1440×900 |	Firefox | OK |	OK	| Con problemas | OK |	Con observaciones |
|1280×800 |	Safari/macOS |	OK	| OK | Con problemas	| OK| Con observaciones
|1280×800 |	Edge | OK |	OK	| Con problemas | OK	| Con observaciones |

### Capturas de pantalla

| Viewport| Captura | Estado |
|:---:|:---:|:---:|
| 1920×1080 | ![](capturas/tc-1/momento-1/Chrome_1920x1080.png) | Con observaciones |
| 1440×900 | ![](capturas/tc-1/momento-1/Firefox_1440x900.png) | Con observaciones |
| 1280×800 Safari/macOS | ![](capturas/tc-1/momento-1/Safari_1280x800.png) | Con observaciones |
| 1280×800 Edge | ![](capturas/tc-1/momento-1/Edge_1280x800.png) | Con observaciones |

### Hallazgos
| # | Elemento | Viewport afectado | Descripción |	Severidad |
|:---:|:---:|:---:|:---:|:---:|
| 1 |	Tabla Gantt	| 1920×1080, 1440×900, 1280×800 | La tabla Gantt presenta desborde horizontal en todos los viewports desktop testeados y requiere scroll lateral para visualizar todas las columnas de semanas. El ancho relevado por el test fue de 2405 px, superior al ancho disponible en todos los viewports evaluados. | Media |

### Resultado Momento 1

- [ ] ✅ PASS — Sin hallazgos 

- [x] ⚠️ FAIL CON OBSERVACIONES

- [ ] ❌ FAIL



### Resumen Momento 1

La página se visualiza correctamente en términos generales en los cuatro viewports desktop probados. El header, la navegación, la sección “¿Qué es este planificador?”, el formulario “Nueva Tarea” y el footer se renderizan adecuadamente. El hallazgo principal corresponde al desborde horizontal de la tabla Gantt, que requiere scroll lateral para visualizar la totalidad de sus columnas.

---

## MOMENTO 2 — Post-merge (`develop`)

### Viewports testeados

| Viewport | Navegador simulado | Navegación | Layout general |  Tabla / Gantt | Footer | Estado | 
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1920×1080 | Chrome | Pendiente | Pendiente | Pendiente |	Pendiente | Pendiente |
| 1440×900 | Firefox | Pendiente | Pendiente | Pendiente	| Pendiente| Pendiente |
| 1280×800 | Safari/macOS | Pendiente | Pendiente | 	Pendiente | Pendiente | Pendiente |
| 1280×800 | Edge | Pendiente | Pendiente | Pendiente | 	Pendiente | Pendiente |

### Capturas de pantalla

| Viewport | Captura | Estado |
|:---:|:---:|:---:|
| 1920×1080 | ![](capturas/tc-1/momento-2/Chrome_1920x1080.png) | Pendiente |
| 1440×900 | ![](capturas/tc-1/momento-2/Firefox_1440x900.png) | Pendiente |
| 1280×800 Safari/macOS | ![](capturas/tc-1/momento-2/Safari_1280x800.png) | Pendiente |
| 1280×800 Edge | ![](capturas/tc-1/momento-2/Edge_1280x800.png) | Pendiente |

### Hallazgos
| # | Elemento | Viewport afectado | Descripción | Severidad |
|:---:|:---:|:---:|:---:|:---:|
| - | - | - | Pendiente de ejecución en develop. | - |

### Resultado Momento 2

- [ ] ✅ PASS — Sin hallazgos
- [ ] ⚠️ FAIL CON OBSERVACIONES
- [ ] ❌ FAIL


### Issues creados

| Issue | Momento | Elemento | Severidad | Estado |
|:---:|:---:|:---:|:---:|:---:|
| [#28](https://github.com/martindebenedetti/Planix/issues/28) | Momento 1 | Tabla Gantt | Media | Abierto |

### Conclusión general

**Resultado final:** FAIL CON OBSERVACIONES

Durante el Momento 1 sobre la rama feature/dev-frontend-css-add-styles, la compatibilidad visual desktop fue satisfactoria en términos generales. El único hallazgo relevante detectado fue el desborde horizontal de la tabla Gantt en todos los viewports evaluados. Por el momento se documenta como observación en análisis, ya que puede estar asociado a la naturaleza ancha del componente Gantt y deberá confirmarse nuevamente en el Momento 2 sobre develop.