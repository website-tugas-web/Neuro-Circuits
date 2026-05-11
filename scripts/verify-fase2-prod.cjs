const { chromium } = require('playwright');

(async () => {
  const errors = [];
  const browser = await chromium.launch();
  const page = await browser.newContext().then(c => c.newPage());
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console.error: ' + m.text()); });

  await page.goto('https://neuro-pet.vercel.app/phase-2-quiz', { waitUntil: 'networkidle' });
  console.log('title:', await page.title());
  const hasFase1Quiz = await page.evaluate(() => {
    const lis = Array.from(document.querySelectorAll('.sidebar__nav a'));
    return lis.some(a => a.getAttribute('href') === '/quiz');
  });
  console.log('Fase 1 /quiz link present in sidebar:', hasFase1Quiz);
  const fase1Section = await page.evaluate(() => {
    const groups = Array.from(document.querySelectorAll('.sidebar__group-label'));
    const phase1 = groups.find(g => /Phase 1|Fase 1/.test(g.textContent || ''));
    if (!phase1) return null;
    const ul = phase1.nextElementSibling;
    return Array.from(ul.querySelectorAll('a')).map(a => `${a.textContent.trim()} -> ${a.getAttribute('href')}`);
  });
  console.log('Fase 1 nav entries:', JSON.stringify(fase1Section));

  console.log('OSCE_CASES_FASE_2 count:', await page.evaluate(() => window.OSCE_CASES_FASE_2 ? window.OSCE_CASES_FASE_2.length : null));

  await page.click('button.btn-pill:has-text("Mulai Kasus")');
  await page.waitForTimeout(400);

  const onDialogue = await page.evaluate(() => ({
    hasMcq: document.querySelectorAll('.vn-choices button.vn-choice').length > 0,
    hasDialogue: !!document.querySelector('.vn-dialogue-progress'),
    doctorSpeechHas: document.querySelector('.speech-bubble.doctor')?.innerText?.slice(0,80) || null,
  }));
  console.log('After Mulai Kasus:', JSON.stringify(onDialogue));

  // Walk fully through and pick the FIRST choice each MCQ (random correctness)
  for (let i = 0; i < 30; i++) {
    const state = await page.evaluate(() => ({
      phase: osceState.phase,
      stepId: STEPS[osceState.stepIdx]?.id,
      hasDialogue: !!document.querySelector('.vn-dialogue-progress'),
      mcqChoices: document.querySelectorAll('.vn-choices button.vn-choice:not([disabled])').length,
    }));
    if (state.phase === 'result') { console.log('Reached result at iter', i); break; }
    if (state.hasDialogue) {
      await page.click('.vn-advance button.btn-pill');
    } else if (state.mcqChoices > 0) {
      await page.click('.vn-choices button.vn-choice >> nth=0');
    } else {
      const btn = await page.$('.vn-advance button.btn-pill');
      if (btn) await btn.click(); else break;
    }
    await page.waitForTimeout(750);
  }

  const final = await page.evaluate(() => ({
    phase: osceState.phase,
    mistakes: osceState.mistakes.length,
    finished: osceState.finished,
    score: document.querySelector('.osce-eval__score div')?.innerText || null,
    hasKey: !!document.querySelector('.osce-eval-key'),
    headline: document.querySelector('.osce-eval h3')?.innerText || null,
  }));
  console.log('FINAL:', JSON.stringify(final));
  console.log('errors:', errors);
  await browser.close();
  process.exit(errors.length || final.phase !== 'result' ? 1 : 0);
})();
