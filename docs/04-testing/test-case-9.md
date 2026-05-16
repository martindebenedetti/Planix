# Test Case 9 — Responsive: Implementación de Componente Avanzado HTML (iframe YouTube)

## Objetivo

Validar que el iframe de YouTube se renderice correctamente, mantenga proporción 16:9 y sea responsive en los viewports obligatorios (iPhone 14 Pro 390×844, Samsung Galaxy S23 412×915, iPad Air 820×1180).

## Herramientas utilizadas

- **Playwright MCP** con viewport emulation
- **GitHub MCP** para creación de issues (si aplica)

## Viewports probados

1. iPhone 14 Pro: **390×844**
2. Samsung Galaxy S23: **412×915**
3. iPad Air: **820×1180**

## Prompt utilizado con Playwright MCP

```
Eres un QA Tester especializado en testing responsive con Playwright MCP.

Necesito ejecutar tests automatizados sobre el Componente 1 (iframe de YouTube)
del proyecto Planix y documentar los resultados en test-case-9.md.

## Contexto

- URL del proyecto: http://localhost:3000 (asegurarse de que Live Preview
  está corriendo antes de ejecutar los tests)
- Componente a testear: <section id="video-tutorial"> con iframe de YouTube
  dentro de <div class="ratio ratio-16x9">
- Spec de referencia: docs/03-specs/primer-parcial/spec-html-avanzados.md
- Template a seguir para el test case (estructura: Objetivo, Herramientas,
  Viewports probados, Pasos ejecutados, Resultados, Capturas, Issues generados)

## Viewports obligatorios a probar

1. iPhone 14 Pro: 390×844
2. Samsung Galaxy S23: 412×915
3. iPad Air: 820×1180

## Tareas a ejecutar con Playwright MCP

Para cada viewport:

1. Navegar a http://localhost:3000 con viewport emulation del dispositivo.
2. Localizar la sección #video-tutorial y verificar:
   - Que el iframe esté presente y visible.
   - Que mantenga la proporción 16:9 (ratio de Bootstrap).
   - Que el ancho del iframe no cause overflow horizontal en la página.
   - Que el título "¿Qué es un Diagrama de Gantt?" se muestre correctamente
     encima del video.
3. Medir el ancho real del iframe y compararlo con el ancho del viewport.
4. Tomar captura de pantalla de la sección completa del video.
5. Verificar con document.documentElement.scrollWidth que no haya scroll
   horizontal en el body.

## Hallazgos a registrar como bugs

Por cada problema detectado, crear un issue en GitHub usando GitHub MCP con:
- Título descriptivo (ej: "[BUG] Video tutorial desborda en viewport móvil 390px")
- Descripción con el viewport afectado, comportamiento esperado vs observado,
  severidad sugerida (Baja/Media/Alta).
- Labels: "bug", "responsive", "html-avanzados"
- Asignar al autor (Martin Debenedetti).

NO crear issues por:
- Retrasos de carga del video (depende de YouTube, no del proyecto).
- Comportamiento del player de YouTube (no forma parte del scope).

## Documentación en test-case-9.md

Crear/actualizar docs/04-testing/test-case-9.md con:

### Estructura obligatoria:

1. **Título**: Test Case 9 — Responsive: Implementación de Componente
   Avanzado HTML (iframe YouTube)

2. **Objetivo**: Validar que el iframe de YouTube se renderice correctamente,
   mantenga proporción 16:9 y sea responsive en los viewports obligatorios.

3. **Herramientas utilizadas**:
   - Playwright MCP con viewport emulation
   - GitHub MCP para creación de issues

4. **Viewports probados**: listado con los 3 dispositivos.

5. **Prompt utilizado con Playwright MCP**: pegar el prompt exacto usado
   en bloque de código.

6. **Pasos ejecutados**: listado numerado de las acciones realizadas.

7. **Resultados por viewport**: tabla o secciones con:
   - iPhone 14 Pro (390×844): [PASS/FAIL] + observaciones
   - Samsung Galaxy S23 (412×915): [PASS/FAIL] + observaciones
   - iPad Air (820×1180): [PASS/FAIL] + observaciones

8. **Capturas de pantalla**: guardar en docs/04-testing/capturas/tc-9/
   con nombres descriptivos (ej: tc9-iphone14pro.png).

9. **Issues generados**: listado con link a cada issue creado en GitHub.

10. **Conclusión**: resumen de si el componente pasa los criterios de
    aceptación o requiere ajustes.

## Output esperado

1. Ejecutar los tests con Playwright MCP contra los 3 viewports.
2. Crear issues en GitHub por cada hallazgo relevante.
3. Guardar capturas en docs/04-testing/capturas/tc-9/.
4. Generar el archivo docs/04-testing/test-case-9.md con toda la evidencia.
```

## Pasos ejecutados

1. ✓ Navegué a `http://localhost:3000` con viewport emulation para iPhone 14 Pro (390×844)
2. ✓ Localizé la sección `#video-tutorial` con el iframe de YouTube
3. ✓ Verifiqué la presencia y visibilidad del iframe
4. ✓ Medí dimensiones reales del iframe para validar ratio 16:9
5. ✓ Verificación de scroll horizontal con `document.documentElement.scrollWidth` vs `clientWidth`
6. ✓ Tomé screenshot de la sección #video-tutorial
7. ✓ Repetí pasos 1-6 para Samsung Galaxy S23 (412×915)
8. ✓ Repetí pasos 1-6 para iPad Air (820×1180)

## Resultados por viewport

### iPhone 14 Pro (390×844)
| Aspecto | Resultado |
|---------|-----------|
| **Video Tutorial visible** | ✅ SÍ |
| **Iframe visible** | ✅ SÍ |
| **Dimensiones iframe** | 291×163.6875 px |
| **Ratio (ancho/alto)** | 1.78 (16:9) ✅ |
| **ScrollWidth** | 390 px |
| **ClientWidth** | 390 px |
| **Overflow horizontal** | ❌ NO (PASS) |
| **Estado** | **PASS ✅** |

### Samsung Galaxy S23 (412×915)
| Aspecto | Resultado |
|---------|-----------|
| **Video Tutorial visible** | ✅ SÍ |
| **Iframe visible** | ✅ SÍ |
| **Dimensiones iframe** | 313×176.0625 px |
| **Ratio (ancho/alto)** | 1.78 (16:9) ✅ |
| **ScrollWidth** | 412 px |
| **ClientWidth** | 412 px |
| **Overflow horizontal** | ❌ NO (PASS) |
| **Estado** | **PASS ✅** |

### iPad Air (820×1180)
| Aspecto | Resultado |
|---------|-----------|
| **Video Tutorial visible** | ✅ SÍ |
| **Iframe visible** | ✅ SÍ |
| **Dimensiones iframe** | 640×360 px |
| **Ratio (ancho/alto)** | 1.78 (16:9) ✅ |
| **ScrollWidth** | 820 px |
| **ClientWidth** | 820 px |
| **Overflow horizontal** | ❌ NO (PASS) |
| **Estado** | **PASS ✅** |

## Capturas de pantalla

Se han generado capturas que muestran la sección #video-tutorial en cada viewport:

- [iPhone 14 Pro](./capturas/tc-9/tc9-iphone14pro.png)
- [Samsung Galaxy S23](./capturas/tc-9/tc9-galaxys23.png)
- [iPad Air](./capturas/tc-9/tc9-ipadair.png)

## Observaciones técnicas

### Validaciones con Playwright MCP

Todas las pruebas se ejecutaron con Playwright MCP utilizando:

- `playwright_navigate(url="http://localhost:3000", viewport={width:390,height:844})`
- `playwright_evaluate(script="document.querySelector('#video-tutorial') !== null")`
- `playwright_evaluate(script="iframe.getBoundingClientRect() para obtener dimensiones")`
- `playwright_evaluate(script="document.documentElement.scrollWidth vs clientWidth")`
- `playwright_screenshot(selector="#video-tutorial")`

### Comportamiento del componente

El componente iframe de YouTube implementa correctamente:

1. **Bootstrap ratio helper**: La clase `ratio ratio-16x9` mantiene la proporción 16:9 en todos los viewports
2. **Contención de ancho**: El max-width: 640px evita desbordamientos en desktop
3. **Responsividad**: El iframe se adapta proporcionalmente a cada viewport sin causar overflow
4. **Accesibilidad**: El iframe cuenta con atributos `title` y `allowfullscreen` correctamente configurados

## Issues generados

**No se han generado issues.** Todos los criterios de aceptación pasaron exitosamente en los tres viewports sin hallazgos de bugs o problemas de compatibilidad.

## Conclusión

✅ **El Componente 1 (iframe de YouTube) PASA todos los criterios de aceptación.**

El iframe de YouTube se renderiza correctamente en todos los viewports obligatorios:
- Mantiene la proporción 16:9 en todos los dispositivos
- No causa overflow horizontal en ningún caso
- El título y contenido adyacente se visualizan correctamente
- La implementación con Bootstrap `ratio` y `max-width` es efectiva y responsive

**Estado Final: APROBADO PARA PRODUCCIÓN** ✅
