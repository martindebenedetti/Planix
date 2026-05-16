# Test Case 6 — Migración Bootstrap responsive

## Metadata
| Campo | Valor |
|-------|-------|
| Responsable | Gian Pasquali |
| Fecha de ejecución | 22/04/2026 |
| Rama testeada | `feature/dev-frontend-bootstrap-migration` |
| URL testeada | `http://localhost:3000` |
| Versión de Bootstrap | 5.3 (CDN jsDelivr) |

---

## Breakpoints testeados

| TC-ID | Descripción | Precondición | Pasos | Resultado esperado | Resultado actual | Estado | Herramienta |
|------|-------------|--------------|------|-------------------|-----------------|--------|-------------|
| TC-6 | Verificar comportamiento responsive mobile (xs) de la migración Bootstrap | Aplicación ejecutándose en `http://localhost:3000` con Bootstrap 5.3 correctamente cargado | 1. Navegar al sitio<br>2. Configurar viewport 390x844<br>3. Validar layout responsive<br>4. Generar captura | El layout debe adaptarse correctamente sin scroll horizontal y manteniendo coherencia visual | Las columnas del formulario se apilan correctamente. Navbar adapta comportamiento responsive. No se detecta scroll horizontal involuntario. Overrides visuales cargados correctamente | PASS | playwright_navigate, playwright_screenshot, playwright_assert |
| TC-6 | Verificar comportamiento responsive tablet (md) | Aplicación ejecutándose correctamente | 1. Navegar al sitio<br>2. Configurar viewport 768x1024<br>3. Validar comportamiento de grilla y estilos | El layout debe responder correctamente en breakpoint tablet | El formulario se adapta a layout de 2 columnas definido por `responsive.css`. No se detecta scroll horizontal y la coherencia visual se mantiene | PASS CON OBSERVACIONES | playwright_navigate, playwright_screenshot, playwright_assert |
| TC-6 | Verificar comportamiento responsive desktop (lg/xl) | Aplicación ejecutándose correctamente | 1. Navegar al sitio<br>2. Configurar viewport 1280x800<br>3. Validar sidebar y contenido principal | El layout desktop debe visualizar sidebar y contenido correctamente alineados | Sidebar visible correctamente y contenido principal alineado. Bootstrap overrides aplicados correctamente | PASS | playwright_navigate, playwright_screenshot, playwright_assert |
| TC-6 | Verificar aplicación de estilos personalizados Bootstrap | Aplicación ejecutándose correctamente | 1. Validar carga de CSS<br>2. Revisar overrides visuales<br>3. Confirmar colores y estilos | Los estilos personalizados deben mantenerse luego de la migración Bootstrap | `styles.css`, `components.css` y `bootstrap-overrides.css` cargan correctamente. `.btn-primary` mantiene identidad visual personalizada | PASS | playwright_assert |
| TC-6 | Registrar observaciones detectadas durante testing responsive | Testing responsive completado | 1. Revisar diferencias de layout<br>2. Registrar comportamiento observado | Las diferencias detectadas deben documentarse | El breakpoint md utiliza layout de 2 columnas definido por `responsive.css` en lugar de `col-md-4` puro de Bootstrap | PASS CON OBSERVACIONES | análisis manual + Playwright MCP |

---

## Evidencia generada

### Capturas Playwright
- ![mobile-390x844](capturas\tc-6\tc-6-mobile-390x844.png)
- ![ipad-768x1024](capturas/tc-6/tc-6-ipad-768x1024.png)
- ![desktop-1280x800](capturas/tc-6/tc-6-desktop-1280x800.png)

### Evidencia de ejecución MCP
- ![Captura del prompt utilizado en Copilot Agent Mode](capturas\tc-6\tc-6-prompt.png)
- ![Captura del output generado por Playwright MCP](capturas\tc-6\tc-6-output.png)


---

## Issues creados
| Issue | Elemento | Breakpoint | Severidad | Estado |
|-------|----------|------------|-----------|--------|
| #55 | Sidebar responsive | xs | Baja | Abierto |

---

## Conclusión general

**Resultado final:** PASS CON OBSERVACIONES

La migración a Bootstrap funciona correctamente en los breakpoints mobile, tablet y desktop.  
No se detectaron errores críticos de responsive ni scroll horizontal involuntario.
Se identificaron mejoras menores en mobile relacionadas a la visualización del sidebar de forma manual, esto fue corregido en el issue 55 y luego se corrio el MCP por eso lo marca como que esta ok.
Se observa como diferencia que el breakpoint tablet conserva reglas específicas de `responsive.css`, generando una distribución de 2 columnas distinta al comportamiento Bootstrap puro basado en `col-md-4`.
