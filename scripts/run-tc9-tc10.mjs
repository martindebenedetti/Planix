import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'http://localhost:3000';
const CAPTURAS_TC9 = path.join(__dirname, '../docs/04-testing/capturas/tc-9');
const CAPTURAS_TC10 = path.join(__dirname, '../docs/04-testing/capturas/tc-10');

// Viewports a testear
const viewports = {
  'iPhone 14 Pro': { width: 390, height: 844, name: 'iphone14pro' },
  'Samsung Galaxy S23': { width: 412, height: 915, name: 'galaxys23' },
  'iPad Air': { width: 820, height: 1180, name: 'ipadair' }
};

// Crear directorios si no existen
[CAPTURAS_TC9, CAPTURAS_TC10].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

async function runTC9() {
  console.log('\n📹 === EJECUTANDO TEST CASE 9: iframe YouTube ===\n');
  
  const browser = await chromium.launch({ headless: false });
  const results = {};

  for (const [deviceName, { width, height, name }] of Object.entries(viewports)) {
    console.log(`\n📱 Probando ${deviceName} (${width}×${height})...`);
    
    const context = await browser.newContext({
      viewport: { width, height },
      deviceScaleFactor: 1
    });

    const page = await context.newPage();

    try {
      await page.goto(BASE_URL, { waitUntil: 'networkidle' });
      
      // Scroll a la sección de video
      await page.locator('#video-tutorial').scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);

      // Verificaciones
      const videoSection = await page.locator('#video-tutorial');
      const isVisible = await videoSection.isVisible();
      const iframe = await page.locator('#video-tutorial iframe');
      const iframeVisible = await iframe.isVisible();
      
      // Obtener dimensiones
      const iframeBox = await iframe.boundingBox();
      const pageBox = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth
      }));

      // Ratio del iframe
      const ratio = iframeBox ? (iframeBox.width / iframeBox.height).toFixed(2) : 'N/A';
      
      const result = {
        deviceName,
        viewport: `${width}×${height}`,
        videoSectionVisible: isVisible,
        iframeVisible: iframeVisible,
        iframeWidth: iframeBox?.width || 'N/A',
        iframeHeight: iframeBox?.height || 'N/A',
        ratio: ratio,
        scrollWidth: pageBox.scrollWidth,
        clientWidth: pageBox.clientWidth,
        hasOverflow: pageBox.scrollWidth > pageBox.clientWidth ? 'SÍ (FALLA)' : 'NO (PASS)',
        status: (isVisible && iframeVisible && pageBox.scrollWidth <= pageBox.clientWidth) ? 'PASS ✅' : 'FAIL ❌'
      };

      results[deviceName] = result;

      console.log(`  ✓ Video Tutorial visible: ${result.videoSectionVisible}`);
      console.log(`  ✓ Iframe visible: ${result.iframeVisible}`);
      console.log(`  ✓ Dimensiones iframe: ${result.iframeWidth}×${result.iframeHeight} (Ratio: ${result.ratio})`);
      console.log(`  ✓ ScrollWidth: ${result.scrollWidth}px, ClientWidth: ${result.clientWidth}px`);
      console.log(`  ✓ Overflow horizontal: ${result.hasOverflow}`);
      console.log(`  ✓ Estado: ${result.status}`);

      // Capturar screenshot
      const screenshotPath = path.join(CAPTURAS_TC9, `tc9-${name}.png`);
      await videoSection.screenshot({ path: screenshotPath });
      console.log(`  📸 Captura guardada: ${screenshotPath}`);

    } catch (error) {
      console.error(`  ❌ Error: ${error.message}`);
    }

    await context.close();
  }

  await browser.close();
  return results;
}

async function runTC10() {
  console.log('\n📋 === EJECUTANDO TEST CASE 10: Details/Summary ===\n');
  
  const browser = await chromium.launch({ headless: false });
  const results = {};

  for (const [deviceName, { width, height, name }] of Object.entries(viewports)) {
    console.log(`\n📱 Probando ${deviceName} (${width}×${height})...`);
    
    const context = await browser.newContext({
      viewport: { width, height },
      deviceScaleFactor: 1
    });

    const page = await context.newPage();

    try {
      await page.goto(BASE_URL, { waitUntil: 'networkidle' });
      
      // Scroll a la sección info-proyecto
      await page.locator('#info-proyecto').scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);

      // Verificaciones
      const infoSection = await page.locator('#info-proyecto');
      const isVisible = await infoSection.isVisible();
      const details = await page.locator('#info-proyecto details');
      const detailsCount = await details.count();
      
      const firstDetails = page.locator('#info-proyecto details').first();
      const isFirstOpen = await firstDetails.evaluate(el => el.hasAttribute('open'));
      
      // Check overflow
      const pageBox = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth
      }));

      const result = {
        deviceName,
        viewport: `${width}×${height}`,
        infoSectionVisible: isVisible,
        detailsCount: detailsCount,
        firstDetailsOpen: isFirstOpen,
        scrollWidth: pageBox.scrollWidth,
        clientWidth: pageBox.clientWidth,
        hasOverflow: pageBox.scrollWidth > pageBox.clientWidth ? 'SÍ (FALLA)' : 'NO (PASS)',
        status: (isVisible && detailsCount === 3 && isFirstOpen && pageBox.scrollWidth <= pageBox.clientWidth) ? 'PASS ✅' : 'FAIL ❌'
      };

      results[deviceName] = result;

      console.log(`  ✓ Info Section visible: ${result.infoSectionVisible}`);
      console.log(`  ✓ Details blocks encontrados: ${result.detailsCount}`);
      console.log(`  ✓ Primer bloque abierto: ${result.firstDetailsOpen}`);
      console.log(`  ✓ ScrollWidth: ${result.scrollWidth}px, ClientWidth: ${result.clientWidth}px`);
      console.log(`  ✓ Overflow horizontal: ${result.hasOverflow}`);
      console.log(`  ✓ Estado: ${result.status}`);

      // Capturar estado inicial
      let screenshotPath = path.join(CAPTURAS_TC10, `tc10-${name}-inicial.png`);
      await infoSection.screenshot({ path: screenshotPath });
      console.log(`  📸 Captura inicial: ${screenshotPath}`);

      // Expandir todos los details
      await page.locator('#info-proyecto details:nth-of-type(2) summary').click();
      await page.waitForTimeout(500);
      await page.locator('#info-proyecto details:nth-of-type(3) summary').click();
      await page.waitForTimeout(500);

      screenshotPath = path.join(CAPTURAS_TC10, `tc10-${name}-todos-expandidos.png`);
      await infoSection.screenshot({ path: screenshotPath });
      console.log(`  📸 Captura expandidos: ${screenshotPath}`);

      // Colapsar todos los details
      await page.locator('#info-proyecto details summary').click();
      await page.waitForTimeout(500);
      await page.locator('#info-proyecto details:nth-of-type(2) summary').click();
      await page.waitForTimeout(500);
      await page.locator('#info-proyecto details:nth-of-type(3) summary').click();
      await page.waitForTimeout(500);

      screenshotPath = path.join(CAPTURAS_TC10, `tc10-${name}-todos-colapsados.png`);
      await infoSection.screenshot({ path: screenshotPath });
      console.log(`  📸 Captura colapsados: ${screenshotPath}`);

    } catch (error) {
      console.error(`  ❌ Error: ${error.message}`);
    }

    await context.close();
  }

  await browser.close();
  return results;
}

async function main() {
  console.log('🚀 Iniciando ejecución de Test Cases TC-9 y TC-10 con Playwright MCP\n');
  console.log(`📍 URL base: ${BASE_URL}`);
  console.log(`📁 Capturas TC-9: ${CAPTURAS_TC9}`);
  console.log(`📁 Capturas TC-10: ${CAPTURAS_TC10}\n`);
  
  try {
    const tc9Results = await runTC9();
    console.log('\n✅ TC-9 completado\n');

    const tc10Results = await runTC10();
    console.log('\n✅ TC-10 completado\n');

    // Mostrar resumen
    console.log('\n📊 === RESUMEN DE RESULTADOS ===\n');
    console.log('TC-9 (iframe YouTube):');
    Object.values(tc9Results).forEach(r => {
      console.log(`  ${r.deviceName}: ${r.status}`);
    });

    console.log('\nTC-10 (Details/Summary):');
    Object.values(tc10Results).forEach(r => {
      console.log(`  ${r.deviceName}: ${r.status}`);
    });

    console.log('\n✨ Test execution completada');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error durante la ejecución:', error);
    process.exit(1);
  }
}

main();
