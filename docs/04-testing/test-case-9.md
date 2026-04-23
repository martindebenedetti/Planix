# Test Case 9 — Responsive: Implementación de Componente Avanzado HTML (iframe YouTube)

## Objetivo
Validar que el iframe de YouTube se renderice correctamente, mantenga la proporción 16:9 y sea responsive en los viewports obligatorios sin causar overflow horizontal en la página.

## Herramientas utilizadas
- Playwright MCP con viewport emulation (simulado vía script de automatización)
- GitHub MCP para creación de issues (no fue necesario, zero bugs reportados)

## Viewports probados
1. iPhone 14 Pro: 390×844
2. Samsung Galaxy S23: 412×915
3. iPad Air: 820×1180

## Prompt utilizado con Playwright MCP
```
Ejecutar tests automatizados sobre el Componente 1 (iframe de YouTube) del proyecto Planix en http://localhost:3000.
Para cada viewport (iPhone 14 Pro, Samsung Galaxy S23, iPad Air):
1. Navegar a http://localhost:3000 con viewport emulation.
2. Localizar la sección #video-tutorial y verificar presencia, visibilidad, ratio 16:9, y ausencia de overflow.
3. Medir el ancho real del iframe vs el ancho del viewport.
4. Tomar captura de pantalla de la sección.
5. Verificar document.documentElement.scrollWidth vs clientWidth.
```

## Pasos ejecutados
1. Inicializar servidor web local exponiendo el proyecto en http://localhost:3000.
2. Iniciar instancia automatizada de Playwright Chromium.
3. Iterar sobre la lista de resoluciones objetivo configurando el viewport.
4. Navegar a la página y esperar la carga en estado `networkidle`.
5. Localizar y comprobar la visibilidad del contenedor de video (`#video-tutorial`) y el título del mismo (`h2`).
6. Medir dimensiones del iframe, validar proporción (~1.77 para 16:9) y que su ancho no supere al viewport.
7. Comprobar que no exista desbordamiento evaluando el `scrollWidth` respecto al `clientWidth` del `document`.
8. Guardar capturas de pantalla de la sección de video para cada viewport.

## Resultados por viewport

### iPhone 14 Pro (390×844)
- **[PASS]** Iframe es visible con el título adecuado.
- **[PASS]** Dimensiones: 250x140.625 (Ratio: 1.78, mantiene proporción 16:9).
- **[PASS]** Ancho del iframe está contenido dentro del viewport.
- **[PASS]** No hay scroll horizontal (scrollWidth: 390 == clientWidth: 390).

### Samsung Galaxy S23 (412×915)
- **[PASS]** Iframe es visible con el título adecuado.
- **[PASS]** Dimensiones: 272x153 (Ratio: 1.78, mantiene proporción 16:9).
- **[PASS]** Ancho del iframe está contenido dentro del viewport.
- **[PASS]** No hay scroll horizontal (scrollWidth: 412 == clientWidth: 412).

### iPad Air (820×1180)
- **[PASS]** Iframe es visible con el título adecuado.
- **[PASS]** Dimensiones: 640x360 (Ratio: 1.78, mantiene proporción 16:9).
- **[PASS]** Ancho del iframe está contenido dentro del viewport (topado a 640px).
- **[PASS]** No hay scroll horizontal (scrollWidth: 820 == clientWidth: 820).

## Capturas de pantalla
- [iPhone 14 Pro](./capturas/tc-9/tc9-iphone14pro.png)
- [Samsung Galaxy S23](./capturas/tc-9/tc9-galaxys23.png)
- [iPad Air](./capturas/tc-9/tc9-ipadair.png)

## Issues generados
No se han generado issues. Todos los criterios de aceptación en los distintos viewports han pasado exitosamente.

## Conclusión
El componente de iframe de YouTube fue implementado correctamente. Gracias al uso de la clase `ratio ratio-16x9` de Bootstrap y la limitación de ancho a `max-width: 640px;`, el componente se adapta sin problemas a viewports pequeños (Mobile) sin causar overflow y preservando su ratio, al mismo tiempo que mantiene un tamaño agradable y controlado en vista tipo Tablet (iPad Air) y Desktop.
