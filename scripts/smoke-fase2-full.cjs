const { chromium } = require('playwright');

(async () => {
  const errors = [];
  const browser = await chromium.launch();
  const page = await browser.newContext().then(c => c.newPage());
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console.error: ' + m.text()); });

  await page.goto('http://localhost:5180/phase-2-quiz', { waitUntil: 'networkidle' });
  await page.click('button.btn-pill:has-text("Mulai Kasus")');
  await page.waitForTimeout(300);

  for (let iter = 0; iter < 30; iter++) {
    const state = await page.evaluate(() => ({
      phase: osceState.phase,
      stepIdx: osceState.stepIdx,
      stepId: typeof STEPS !== 'undefined' && STEPS[osceState.stepIdx] ? STEPS[osceState.stepIdx].id : null,
      hasDialogue: !!document.querySelector('.vn-dialogue-progress'),
      mcqChoices: document.querySelectorAll('.vn-choices button.vn-choice').length,
      advanceBtn: !!document.querySelector('.vn-advance button.btn-pill'),
    }));
    console.log(JSON.stringify(state));
    if (state.phase === 'result') break;

    if (state.hasDialogue) {
      // advance through one dialogue line
      await page.click('.vn-advance button.btn-pill');
    } else if (state.mcqChoices > 0) {
      const isPicked = await page.evaluate(() => Object.keys(osceState.picks).length > 0 && osceState.picks[STEPS[osceState.stepIdx].id]);
      if (!isPicked) {
        // pick a deliberately wrong option (last) to test mistake tracking
        await page.click(`.vn-choices button.vn-choice >> nth=${state.mcqChoices - 1}`);
      } else if (state.advanceBtn) {
        await page.click('.vn-advance button.btn-pill');
      }
    } else if (state.advanceBtn) {
      await page.click('.vn-advance button.btn-pill');
    } else break;
    await page.waitForTimeout(700);
  }

  // Inspect result card
  const result = await page.evaluate(() => ({
    phase: osceState.phase,
    mistakes: osceState.mistakes.length,
    finished: osceState.finished,
    score: document.querySelector('.osce-eval__score div')?.innerText || null,
    cardVisible: !!document.querySelector('.osce-eval'),
    hasKey: !!document.querySelector('.osce-eval-key'),
    hasMistakes: !!document.querySelector('.osce-eval-penalty'),
  }));
  console.log('RESULT:', JSON.stringify(result));
  console.log('errors:', errors);
  await browser.close();
  process.exit(errors.length ? 1 : 0);
})();
