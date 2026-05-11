// Local smoke test for the NEUAAA-258 anamnesis revision.
// Verifies: ask-more removes the chosen question from the list, the
// asked-questions log surfaces, and a persistent "Lanjut ke Inform
// Consent" button advances the step without forcing all questions
// to be asked.

const { chromium } = require('playwright');

(async () => {
  const errors = [];
  const browser = await chromium.launch();
  const page = await browser.newContext().then(c => c.newPage());
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console.error: ' + m.text()); });

  const target = process.env.OSCE_URL || 'http://localhost:8765/phase-2-quiz.html';
  await page.goto(target, { waitUntil: 'networkidle' });

  await page.click('button.btn-pill:has-text("Mulai Kasus")');
  await page.waitForTimeout(300);

  // Walk through Pembukaan (dialogue-only) until we reach Anamnesis.
  for (let i = 0; i < 12; i++) {
    const state = await page.evaluate(() => ({
      stepId: STEPS[osceState.stepIdx]?.id,
      hasDialogue: !!document.querySelector('.vn-dialogue-progress'),
    }));
    if (state.stepId === 'anamnesis') break;
    if (state.hasDialogue) {
      await page.click('.vn-advance button.btn-pill');
      await page.waitForTimeout(150);
    } else {
      throw new Error('Unexpected step before anamnesis: ' + JSON.stringify(state));
    }
  }

  // Confirm we are on anamnesis with the new UI and an expanded pool.
  const initialChoiceCount = await page.locator('.vn-choices button.vn-choice').count();
  const hasProceedBtn = await page.locator('.vn-advance button.btn-pill:has-text("Lanjut ke Inform Consent")').count();
  if (initialChoiceCount < 8) throw new Error('Expected expanded anamnesis pool (>=8), got ' + initialChoiceCount);
  if (!hasProceedBtn) throw new Error('Expected persistent "Lanjut ke Inform Consent" button');

  // Ask the first question; verify it is removed, the asked log appears,
  // and the patient surfaces a case-grounded response in the speech bubble.
  await page.click('.vn-choices button.vn-choice >> nth=0');
  await page.waitForTimeout(150);
  const afterFirstPick = await page.evaluate(() => ({
    remaining: document.querySelectorAll('.vn-choices button.vn-choice').length,
    asked: Array.from(document.querySelectorAll('.vn-anamnesis-asked ol li')).map(li => li.textContent.trim()),
    proceedVisible: !!document.querySelector('.vn-advance button.btn-pill'),
    stepId: STEPS[osceState.stepIdx]?.id,
    picksLen: (osceState.picks.anamnesis || []).length,
    patientSpeech: document.querySelector('.speech-bubble:not(.doctor)')?.innerText?.trim() || '',
  }));
  if (!afterFirstPick.patientSpeech || afterFirstPick.patientSpeech.length < 10) {
    throw new Error('Patient did not respond after first anamnesis pick: ' + JSON.stringify(afterFirstPick));
  }
  console.log('After 1 ask:', JSON.stringify(afterFirstPick));
  if (afterFirstPick.stepId !== 'anamnesis') throw new Error('Step auto-advanced after one pick, should stay on anamnesis');
  if (afterFirstPick.remaining !== initialChoiceCount - 1) throw new Error('Remaining choices mismatch');
  if (afterFirstPick.asked.length !== 1) throw new Error('Asked log should show 1 entry');
  if (!afterFirstPick.proceedVisible) throw new Error('Proceed button missing after first pick');
  if (afterFirstPick.picksLen !== 1) throw new Error('picks.anamnesis should have length 1');

  // Ask a second question; both should be in the asked log and removed.
  await page.click('.vn-choices button.vn-choice >> nth=0');
  await page.waitForTimeout(150);
  const afterSecondPick = await page.evaluate(() => ({
    remaining: document.querySelectorAll('.vn-choices button.vn-choice').length,
    asked: Array.from(document.querySelectorAll('.vn-anamnesis-asked ol li')).map(li => li.textContent.trim()),
    stepId: STEPS[osceState.stepIdx]?.id,
  }));
  console.log('After 2 asks:', JSON.stringify(afterSecondPick));
  if (afterSecondPick.stepId !== 'anamnesis') throw new Error('Step auto-advanced after two picks');
  if (afterSecondPick.remaining !== initialChoiceCount - 2) throw new Error('Remaining choices mismatch after 2 asks');
  if (afterSecondPick.asked.length !== 2) throw new Error('Asked log should show 2 entries');

  // Player decides to proceed without exhausting the question pool.
  await page.click('.vn-advance button.btn-pill:has-text("Lanjut ke Inform Consent")');
  await page.waitForTimeout(200);
  const afterProceed = await page.evaluate(() => ({
    stepId: STEPS[osceState.stepIdx]?.id,
    hasDialogue: !!document.querySelector('.vn-dialogue-progress'),
  }));
  console.log('After proceed:', JSON.stringify(afterProceed));
  if (afterProceed.stepId !== 'consent') throw new Error('Did not advance to consent step');
  if (!afterProceed.hasDialogue) throw new Error('Consent step should be dialogue-only');

  // Walk the remaining steps to result so we catch any regression in the
  // single-pick MCQ path or the result-card scoring with array picks.
  for (let i = 0; i < 25; i++) {
    const state = await page.evaluate(() => ({
      phase: osceState.phase,
      stepId: STEPS[osceState.stepIdx]?.id,
      hasDialogue: !!document.querySelector('.vn-dialogue-progress'),
      mcqChoices: document.querySelectorAll('.vn-choices button.vn-choice:not([disabled])').length,
      advanceBtn: !!document.querySelector('.vn-advance button.btn-pill'),
    }));
    if (state.phase === 'result') break;
    if (state.hasDialogue) {
      await page.click('.vn-advance button.btn-pill');
    } else if (state.mcqChoices > 0) {
      await page.click('.vn-choices button.vn-choice >> nth=0');
    } else if (state.advanceBtn) {
      await page.click('.vn-advance button.btn-pill');
    } else {
      throw new Error('Stuck at: ' + JSON.stringify(state));
    }
    await page.waitForTimeout(700);
  }

  const result = await page.evaluate(() => ({
    phase: osceState.phase,
    mistakesLogged: osceState.mistakes.length,
    anamnesisPickCount: (osceState.picks.anamnesis || []).length,
    score: document.querySelector('.osce-eval__score div')?.innerText || null,
    hasKey: !!document.querySelector('.osce-eval-key'),
  }));
  console.log('RESULT:', JSON.stringify(result));
  if (result.phase !== 'result') throw new Error('Did not reach result card');
  if (!result.score) throw new Error('Result card score missing');
  if (result.anamnesisPickCount !== 2) throw new Error('Anamnesis picks not preserved through to result');

  console.log('errors:', errors);
  await browser.close();
  process.exit(errors.length ? 1 : 0);
})();
