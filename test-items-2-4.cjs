const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('=== Item 2: Custom Reflex Graphics (SVG) ===');
  await page.goto('http://localhost:8000/materials.html', { waitUntil: 'networkidle' });

  // Check topics 1 and 5 which should have SVG diagrams
  const topics = [1, 5];
  for (const topicId of topics) {
    const topicBtn = await page.locator(`button:has-text("Read")`).nth(topicId - 1);
    if (await topicBtn.count() > 0) {
      await topicBtn.click();
      await page.waitForTimeout(1000);

      const svgCount = await page.locator('#modal-content svg').count();
      const pngCount = await page.locator('#modal-content img[src*=".png"]').count();

      console.log(`Topic ${topicId}: ${svgCount} SVG diagrams, ${pngCount} PNG images`);

      if (svgCount > 0) {
        console.log(`✓ Topic ${topicId} has inline SVG graphics`);
      } else if (pngCount > 0) {
        console.log(`✗ Topic ${topicId} still has PNG images (should be SVG)`);
      }

      // Close modal
      const closeBtn = await page.locator('button:has-text("×")');
      if (await closeBtn.count() > 0) {
        await closeBtn.click();
        await page.waitForTimeout(500);
      }
    }
  }

  console.log('\n=== Item 3: Tables with Borders (Topic 7) ===');
  const topic7Btn = await page.locator(`button:has-text("Read")`).nth(6);
  if (await topic7Btn.count() > 0) {
    await topic7Btn.click();
    await page.waitForTimeout(1000);

    const tableCount = await page.locator('#modal-content table').count();
    console.log(`Topic 7: ${tableCount} table(s) found`);

    if (tableCount > 0) {
      const hasBorder = await page.locator('#modal-content table').first().evaluate(el => {
        const style = window.getComputedStyle(el);
        const tdStyle = window.getComputedStyle(el.querySelector('td') || el);
        return style.borderCollapse === 'collapse' || tdStyle.borderWidth !== '0px';
      });

      if (hasBorder) {
        console.log('✓ Topic 7 table has borders');
      } else {
        console.log('✗ Topic 7 table missing borders');
      }
    }

    const closeBtn = await page.locator('button:has-text("×")');
    if (await closeBtn.count() > 0) {
      await closeBtn.click();
      await page.waitForTimeout(500);
    }
  }

  console.log('\n=== Item 4: References Page Copy Deletion ===');
  await page.goto('http://localhost:8000/references.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const deletedTextPresent = await page.locator('text="Referensi Cambridge yang disusun berdasarkan topik pembelajaran"').count();

  if (deletedTextPresent === 0) {
    console.log('✓ Deleted reference paragraph is gone');
  } else {
    console.log('✗ Deleted reference paragraph still present');
  }

  console.log('\n=== Item 5: Footer Check ===');
  const footer = await page.locator('footer.site-footer p').textContent();
  const hasOriginal = footer.includes('MMXXVI Neuro Circuits');
  const hasCredit = footer.includes('Made by Estrella Kyara Pangkahila Febian');
  const hasMiddleDot = footer.includes('·');

  console.log(`Footer text: ${footer.substring(0, 100)}...`);
  console.log(`✓ Has original text: ${hasOriginal}`);
  console.log(`✓ Has credit: ${hasCredit}`);
  console.log(`✓ Has middle-dot separator: ${hasMiddleDot}`);

  await browser.close();
  console.log('\n=== Browser Sanity Check Complete ===');
})();
