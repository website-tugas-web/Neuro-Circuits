const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('=== Gap A: Patrick\'s Sign Diagram (Topic 8) ===');
  await page.goto('http://localhost:8000/materials.html', { waitUntil: 'networkidle' });

  // Open Topic 8
  const topic8Btn = await page.locator('button:has-text("Read")').nth(7);
  await topic8Btn.click();
  await page.waitForTimeout(1000);

  const patrickSVG = await page.locator('#modal-content svg:has-text("Patrick")').count();
  console.log(`Topic 8 Patrick's Sign SVG: ${patrickSVG > 0 ? '✓ FOUND' : '✗ NOT FOUND'}`);

  if (patrickSVG > 0) {
    const titleText = await page.locator('#modal-content text:has-text("Patrick")').first().textContent();
    console.log(`  SVG Title: ${titleText}`);
  }

  // Close modal
  await page.locator('button:has-text("×")').click();
  await page.waitForTimeout(500);

  console.log('\n=== Gap B: Table Audit (All 8 Topics) ===');

  const topics = [
    { id: 1, name: 'Reflex Arc Anatomy' },
    { id: 2, name: 'Upper Motor Neuron' },
    { id: 3, name: 'Lower Motor Neuron' },
    { id: 4, name: 'Deep Tendon Reflexes' },
    { id: 5, name: 'Pathological Reflexes' },
    { id: 6, name: 'Reflex Grading Scale' },
    { id: 7, name: 'Lesion Localisation' },
    { id: 8, name: 'Clinical Examination' }
  ];

  for (const topic of topics) {
    const topicBtn = await page.locator('button:has-text("Read")').nth(topic.id - 1);
    await topicBtn.click();
    await page.waitForTimeout(800);

    const tableCount = await page.locator('#modal-content table').count();
    const svgCount = await page.locator('#modal-content svg').count();

    let status = 'No table';
    if (tableCount > 0) {
      const hasBorders = await page.locator('#modal-content table').first().evaluate(el => {
        const tdStyle = window.getComputedStyle(el.querySelector('td, th') || el);
        return tdStyle.borderWidth !== '0px' && tdStyle.borderStyle !== 'none';
      });
      status = hasBorders ? `✓ ${tableCount} table(s) with borders` : `✗ ${tableCount} table(s) WITHOUT borders`;
    } else if (svgCount > 0) {
      status = `No table (${svgCount} SVG diagram(s))`;
    }

    console.log(`Topic ${topic.id} (${topic.name}): ${status}`);

    // Close modal
    await page.locator('button:has-text("×")').click();
    await page.waitForTimeout(400);
  }

  console.log('\n=== Summary ===');
  console.log('Gap A: Patrick\'s Sign diagram verification complete');
  console.log('Gap B: All 8 topics audited for tables');

  await browser.close();
})();
