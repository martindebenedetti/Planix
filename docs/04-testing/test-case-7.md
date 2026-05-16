# Test Case 7 — Modal compartir enlace Bootstrap

## Metadata
| Campo | Valor |
|-------|-------|
| Responsable | Gian Pasquali  |
| Fecha de ejecución | 14/05/2026 |
| Rama testeada | `fix/RC11-Agregar-TC7-TC8` |
| URL testeada | `http://localhost:3000` |
| Versión de Bootstrap | 5.3 (CDN jsDelivr) |

---

## Breakpoints testeados

| TC-ID | Descripción | Precondición | Pasos | Resultado esperado | Resultado actual | Estado | Herramienta |
|------|-------------|--------------|------|-------------------|-----------------|--------|-------------|
| TC-7 | Verificar apertura y cierre del modal compartir en desktop | Aplicación ejecutándose en `http://localhost:3000` con Bootstrap 5.3 cargado | 1. Navegar al sitio<br>2. Viewport 1280x800<br>3. Localizar `#modalCompartir`<br>4. Click en botón compartir<br>5. Validar overlay y cierre | El modal debe abrirse correctamente con backdrop y cerrarse sin errores | Modal abre y muestra `.modal-backdrop.show`; cierre funciona correctamente | PASS | playwright_navigate, playwright_screenshot, playwright_assert |
| TC-7 | Verificar adaptación del modal en mobile | Aplicación ejecutándose correctamente | 1. Navegar al sitio<br>2. Viewport 390x844<br>3. Repetir interacción de apertura/cierre<br>4. Revisar diseño | El modal debe adaptarse al tamaño móvil conservando funcionalidad y visibilidad | Modal se adapta en mobile, overlay presente y control de cierre funciona | PASS | playwright_navigate, playwright_screenshot, playwright_assert |
| TC-7 | Verificar comportamiento intermedio en tablet | Aplicación ejecutándose correctamente | 1. Navegar al sitio<br>2. Viewport 768x1024<br>3. Abrir modal<br>4. Validar estilo y overlay | El modal debe presentar comportamiento intermedio estable entre mobile y desktop | Modal establece tamaño intermedio adecuado y mantiene visual coherente | PASS | playwright_navigate, playwright_screenshot, playwright_assert |
| TC-7 | Verificar aplicación de `bootstrap-overrides.css` en modal | Aplicación ejecutándose correctamente | 1. Abrir modal<br>2. Revisar estilos CSS cargados<br>3. Confirmar `border-radius` de `.modal-content` | Los overrides deben aplicarse sobre Bootstrap estándar | `bootstrap-overrides.css` está cargado y `.modal-content` presenta `border-radius: 12px` | PASS | playwright_assert |

---

## Evidencia generada

### Capturas Playwright
- ![desktop-initial](capturas/tc-7/tc-7-desktop-initial.png)
- ![desktop-active](capturas/tc-7/tc-7-desktop-active.png)
- ![mobile-initial](capturas/tc-7/tc-7-mobile-initial.png)
- ![mobile-active](capturas/tc-7/tc-7-mobile-active.png)
- ![tablet-initial](capturas/tc-7/tc-7-tablet-initial.png)
- ![tablet-active](capturas/tc-7/tc-7-tablet-active.png)

### Evidencia de ejecución MCP
- ![Captura del prompt utilizado en Copilot Agent Mode](capturas\tc-7\tc-7-prompt.png)
- ![Captura del output generado por Playwright MCP](capturas\tc-7\tc-7-output.png)

---

## Issues creados
| Issue | Elemento | Breakpoint | Severidad | Estado |
|-------|----------|------------|-----------|--------|
| - | - | - | - | - |

---

## Conclusión general

**Resultado final:** PASS

El componente modal de compartir enlace es visible y funcional en desktop, mobile e iPad. Las animaciones/transiciones de Bootstrap se ejecutan correctamente, el overlay/backdrop se muestra y el cierre del modal funciona. La identidad visual se mantiene y `bootstrap-overrides.css` se aplica en `.modal-content` con `border-radius: 12px`. No se detectaron problemas visuales ni de comportamiento significativos durante la ejecución.
