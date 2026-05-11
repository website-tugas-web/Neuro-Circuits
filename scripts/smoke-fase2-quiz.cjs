const { chromium } = require('playwright');

(async () => {
  const errors = [];
  const browser = await chromium.launch();
  const page = await browser.newContext().then(c => c.newPage());
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console.error: ' + m.text()); });

  await page.goto('http://localhost:5180/phase-2-quiz', { waitUntil: 'networkidle' });
  console.log('title:', await page.title());
  // sidebar Fase 1 nav should NOT include quiz link
  const hasFase1Quiz = await page.evaluate(() => {
    const lis = Array.from(document.querySelectorAll('.sidebar__nav a'));
    return lis.some(a => a.getAttribute('href') === '/quiz');
  });
  console.log('Fase 1 quiz link present:', hasFase1Quiz);

  // OSCE_CASES_FASE_2 should be 3 cases
  const caseCount = await page.evaluate(() => window.OSCE_CASES_FASE_2 ? window.OSCE_CASES_FASE_2.length : null);
  console.log('OSCE_CASES_FASE_2 count:', caseCount);

  // Click Mulai Kasus
  await page.click('button.btn-pill:has-text("Mulai Kasus")');
  await page.waitForTimeout(500);

  // Check we are on Pembukaan dialogue (no MCQ choices)
  const introHas = await page.evaluate(() => {
    const has = document.body.innerText.includes('Pembukaan') || document.querySelector('.vn-dialogue-progress');
    return !!has;
  });
  console.log('On Pembukaan dialogue:', introHas);

  // Walk through pembukaan dialogue (assume ~4 lines)
  for (let i = 0; i < 6; i++) {
    const btn = await page.$('.vn-advance button.btn-pill');
    if (!btn) break;
    const txt = await btn.textContent();
    if (!txt.includes('Lanjut') && !txt.includes('→')) break;
    await btn.click();
    await page.waitForTimeout(300);
    if (txt.includes('Anamnesis')) break;
  }

  // Should now be on Anamnesis MCQ
  const anamSnap = await page.evaluate(() => ({
    promptText: document.querySelector('.vn-prompt')?.innerText || null,
    choiceCount: document.querySelectorAll('.vn-choices button.vn-choice').length,
  }));
  console.log('After intro:', JSON.stringify(anamSnap));

  // Pick the first choice and confirm it locks + advances
  const beforeMistakes = await page.evaluate(() => osceState.mistakes.length);
  await page.click('.vn-choices button.vn-choice >> nth=0');
  await page.waitForTimeout(900);
  const afterStep = await page.evaluate(() => ({ stepIdx: osceState.stepIdx, picks: osceState.picks }));
  console.log('After pick (auto-advance):', JSON.stringify(afterStep));

  console.log('errors:', errors);
  await browser.close();
  process.exit(errors.length ? 1 : 0);
})();
