# Test Case 10 — Responsive: Implementación de Componente Avanzado HTML (details/summary)

## Objetivo
Validar que los elementos `<details>` y `<summary>` funcionen como acordeón nativo, se expandan y colapsen correctamente, y sean responsive en los viewports obligatorios.

## Herramientas utilizadas
- Playwright MCP con viewport emulation
- GitHub MCP para creación de issues (no fue necesario reportar bugs)

## Viewports probados
1. iPhone 14 Pro: 390×844
2. Samsung Galaxy S23: 412×915
3. iPad Air: 820×1180

## Prompt utilizado con Playwright MCP
```
Ejecutar tests automatizados sobre el Componente 2 (details y summary) del proyecto Planix.
Para cada viewport (iPhone 14 Pro, Samsung Galaxy S23, iPad Air):
1. Navegar a http://localhost:3000 con viewport emulation.
2. Localizar la sección #info-proyecto y verificar que los 3 bloques <details> estén presentes y visibles, el primero expandido por defecto y los demás colapsados.
3. Hacer clic en el <summary> de cada bloque y verificar que se contraigan y expandan correctamente.
4. Verificar accesibilidad: cursor pointer en summary y control mediante teclado (tecla Enter).
5. Medir el ancho de los bloques y verificar que no haya overflow horizontal.
6. Tomar capturas de los estados: inicial, todos expandidos, todos colapsados.
```

## Pasos ejecutados
1. Iniciar el servidor web local (`http://localhost:3000`).
2. Configurar Playwright para iterar a través de las diferentes resoluciones objetivo.
3. Navegar a la sección `#info-proyecto` y esperar a que el estado visual esté listo (`networkidle`).
4. Verificar el número de bloques `<details>` y el estado inicial (sólo el primer bloque con atributo `open`).
5. Tomar la captura de pantalla inicial.
6. Interactuar con los elementos `<summary>` haciendo click en el segundo y tercer bloque, confirmando el estado abierto de los tres bloques y tomando la captura de todos expandidos.
7. Comprobar el manejo por teclado iterando con `Focus` y pulsando `Enter` para colapsar todos los bloques y tomando la captura del estado final.
8. Validar los estilos CSS (existencia de `cursor: pointer`).
9. Verificar que el componente esté contenido en el body sin generar desbordamientos (`scrollWidth` vs `clientWidth`).

## Resultados por viewport

### iPhone 14 Pro (390×844)
- **[PASS]** Presencia inicial correcta (1 abierto, 2 y 3 cerrados).
- **[PASS]** Interacción táctil (Click): Expandir bloque colapsado funciona correctamente.
- **[PASS]** Interacción teclado (Enter): Colapsar bloque expandido funciona correctamente.
- **[PASS]** Accesibilidad: `cursor: pointer` aplicado a los summaries.
- **[PASS]** Overflow: No hay scroll horizontal (scrollWidth 390px == clientWidth 390px).

### Samsung Galaxy S23 (412×915)
- **[PASS]** Presencia inicial correcta (1 abierto, 2 y 3 cerrados).
- **[PASS]** Interacción táctil (Click): Expandir bloque colapsado funciona correctamente.
- **[PASS]** Interacción teclado (Enter): Colapsar bloque expandido funciona correctamente.
- **[PASS]** Accesibilidad: `cursor: pointer` aplicado a los summaries.
- **[PASS]** Overflow: No hay scroll horizontal (scrollWidth 412px == clientWidth 412px).

### iPad Air (820×1180)
- **[PASS]** Presencia inicial correcta (1 abierto, 2 y 3 cerrados).
- **[PASS]** Interacción táctil (Click): Expandir bloque colapsado funciona correctamente.
- **[PASS]** Interacción teclado (Enter): Colapsar bloque expandido funciona correctamente.
- **[PASS]** Accesibilidad: `cursor: pointer` aplicado a los summaries.
- **[PASS]** Overflow: No hay scroll horizontal (scrollWidth 820px == clientWidth 820px).

## Capturas de pantalla
- **Estado Inicial:**
  - [iPhone 14 Pro](./capturas/tc-10/tc10-iphone14pro-inicial.png)
  - [Samsung Galaxy S23](./capturas/tc-10/tc10-galaxys23-inicial.png)
  - [iPad Air](./capturas/tc-10/tc10-ipadair-inicial.png)
- **Todos Expandidos:**
  - [iPhone 14 Pro](./capturas/tc-10/tc10-iphone14pro-todos-expandidos.png)
  - [Samsung Galaxy S23](./capturas/tc-10/tc10-galaxys23-todos-expandidos.png)
  - [iPad Air](./capturas/tc-10/tc10-ipadair-todos-expandidos.png)
- **Todos Colapsados:**
  - [iPhone 14 Pro](./capturas/tc-10/tc10-iphone14pro-todos-colapsados.png)
  - [Samsung Galaxy S23](./capturas/tc-10/tc10-galaxys23-todos-colapsados.png)
  - [iPad Air](./capturas/tc-10/tc10-ipadair-todos-colapsados.png)

## Issues generados
No se han generado issues. Todos los criterios de aceptación y las pruebas de comportamiento dinámico pasaron de forma exitosa en los viewports solicitados.

## Conclusión
El componente de acordeón basado en `<details>` y `<summary>` funciona nativamente y de manera confiable. El comportamiento esperado de expansión y contracción mediante clics e inputs del teclado (tecla Enter) es consistente, y los estilos de cursor e indicadores de estado cumplen con los requisitos de UI/UX sin comprometer la vista con overflows no deseados.
