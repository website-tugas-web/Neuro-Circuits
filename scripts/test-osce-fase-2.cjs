// Smoke test for the OSCE Fase 2 visual novel (NEUAAA-241).
// Walks each of the 3 cases (Tetanus / Stroke / TIA) end-to-end through all
// 9 steps and asserts the evaluation card renders + the score reflects a
// competent run. Pins Math.random() so case selection is deterministic.

const { chromium } = require('playwright');

const BASE = process.env.BASE || 'http://localhost:3434';

const CASES = [
  { id: 'tetanus', label: 'Tetanus', randomValue: 0.0 },
  { id: 'stroke',  label: 'Stroke',  randomValue: 0.4 },
  { id: 'tia',     label: 'TIA',     randomValue: 0.8 }
];

async function runCase(browser, caseSpec) {
  console.log('\n=========================================');
  console.log('▶ Running case: ' + caseSpec.label + ' (Math.random=' + caseSpec.randomValue + ')');
  console.log('=========================================');

  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push('PAGEERROR: ' + err.message));
  page.on('console', msg => { if (msg.type() === 'error') errors.push('CONSOLE_ERR: ' + msg.text()); });

  // Pin Math.random BEFORE the page scripts run so startSimulation picks the
  // intended case index (Math.floor(rv * 3)).
  await page.addInitScript((rv) => {
    Math.random = () => rv;
  }, caseSpec.randomValue);

  await page.goto(BASE + '/phase-2-quiz', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#osceApp');

  // Sanity: dataset, fase, expected step count.
  const meta = await page.evaluate(() => ({
    fase: window.OSCE_FASE,
    cases: (window.OSCE_CASES_FASE_2 || []).map(c => c.id),
    stepCount: STEPS.length,
    duration: DEFAULT_DURATION_SECONDS
  }));
  console.log('  meta:', JSON.stringify(meta));
  if (meta.fase !== 2) throw new Error('Expected window.OSCE_FASE=2, got ' + meta.fase);
  if (meta.cases.length !== 3) throw new Error('Expected 3 cases, got ' + meta.cases.length);
  if (meta.stepCount !== 9) throw new Error('Expected 9 steps for Fase 2, got ' + meta.stepCount);
  if (meta.duration !== 14 * 60) throw new Error('Expected 14-min duration (840s), got ' + meta.duration);

  await page.click('text=Mulai Kasus');

  // Confirm the right case got selected by checking currentCase + complaint snippet.
  const selected = await page.evaluate(() => {
    const c = window.OSCE_CASES_FASE_2[window.currentCase];
    return { idx: window.currentCase, id: c && c.id, complaint: c && c.complaint && c.complaint.slice(0, 60) };
  });
  console.log('  selected case:', JSON.stringify(selected));
  if (selected.id !== caseSpec.id) throw new Error('Expected case ' + caseSpec.id + ', got ' + selected.id);

  // Verify mascot, timer, 9-step strip.
  const mascotSrc = await page.getAttribute('.doctor-mascot-img', 'src');
  if (!/brain-mascot-/.test(mascotSrc || '')) throw new Error('Doctor mascot not rendered');
  const timerText = await page.textContent('#osceTimer');
  if (!/^\d{2}:\d{2}$/.test(timerText)) throw new Error('Timer not MM:SS');
  console.log('  timer:', timerText);
  const stepCount = await page.locator('.osce-checklist__item').count();
  if (stepCount !== 9) throw new Error('Expected 9 checklist steps, got ' + stepCount);

  // Helper: click first MCQ button containing substring.
  async function clickContains(substr) {
    const ok = await page.evaluate((s) => {
      const btns = document.querySelectorAll('button');
      for (const b of btns) {
        if (!b.disabled && b.textContent && b.textContent.indexOf(s) !== -1) { b.click(); return true; }
      }
      return false;
    }, substr);
    if (!ok) throw new Error('No clickable button containing: ' + substr);
  }

  // Helper: pick the first N data items from a case section that pass a predicate.
  async function pickFromCaseSection(sectionPath, predicate, n) {
    // sectionPath e.g. ['penunjang','items'] or ['exams']. predicate: 'correct' or 'relevant' (boolean field name)
    const ids = await page.evaluate((args) => {
      const c = window.OSCE_CASES_FASE_2[window.currentCase];
      let arr = c;
      for (const k of args.path) arr = arr && arr[k];
      if (!Array.isArray(arr)) return [];
      const out = [];
      for (const it of arr) { if (it[args.pred]) out.push(it.id); if (out.length >= args.n) break; }
      return out;
    }, { path: sectionPath, pred: predicate, n });
    if (ids.length < n) throw new Error('Could not find ' + n + ' items in ' + sectionPath.join('.') + ' matching ' + predicate);
    for (const id of ids) {
      await page.evaluate((targetId) => {
        const btns = document.querySelectorAll('button');
        for (const b of btns) {
          if (b.getAttribute('onclick') && b.getAttribute('onclick').indexOf("'" + targetId + "'") !== -1) {
            b.click();
            return;
          }
        }
      }, id);
      await page.waitForTimeout(50);
    }
  }

  async function clickAdvance() {
    const clicked = await page.evaluate(() => {
      const btns = document.querySelectorAll('.vn-advance button.btn-pill');
      if (btns.length > 0) { btns[0].click(); return true; }
      return false;
    });
    if (!clicked) throw new Error('No advance button visible');
    await page.waitForTimeout(120);
  }

  // STEP 1 — intro: pick warm choice (good=true).
  console.log('  step 1 (intro): warm choice');
  await pickFromCaseSection(['dialogueScript','intro','choices'], 'good', 1);
  await clickAdvance();

  // STEP 2 — anamnesis: ask 5 relevant.
  console.log('  step 2 (anamnesis): 5 relevant');
  await pickFromCaseSection(['dialogueScript','anamnesis','questions'], 'relevant', 5);
  await clickAdvance();

  // STEP 3 — consent: pick correct.
  console.log('  step 3 (consent): correct option');
  await pickFromCaseSection(['dialogueScript','consent','options'], 'correct', 1);
  await clickAdvance();

  // STEP 4 — persiapan: pick 3 correct.
  console.log('  step 4 (persiapan): 3 correct');
  await pickFromCaseSection(['dialogueScript','persiapan','items'], 'correct', 3);
  await clickAdvance();

  // STEP 5 — pemeriksaan: pick 4 correct exams (need to wait for setTimeout settle).
  console.log('  step 5 (pemeriksaan): 4 correct exams');
  const examIds = await page.evaluate(() => {
    const c = window.OSCE_CASES_FASE_2[window.currentCase];
    return c.exams.filter(e => e.correct).slice(0, 4).map(e => e.id);
  });
  if (examIds.length < 4) throw new Error('Need 4 correct exams in case data');
  for (const id of examIds) {
    await page.evaluate((eid) => { window.doExam(eid); }, id);
    await page.waitForTimeout(700);
  }
  await clickAdvance();

  // STEP 6 — penunjang: pick relevant correct items meeting minRelevant.
  console.log('  step 6 (penunjang): correct investigations');
  const penMin = await page.evaluate(() => {
    const c = window.OSCE_CASES_FASE_2[window.currentCase];
    return (c.penunjang && c.penunjang.minRelevant) || 1;
  });
  await pickFromCaseSection(['penunjang','items'], 'correct', penMin);
  await clickAdvance();

  // STEP 7 — ddx: pick correct diagnosis.
  console.log('  step 7 (ddx): correct diagnosis');
  const correctDxId = await page.evaluate(() => {
    const c = window.OSCE_CASES_FASE_2[window.currentCase];
    const dx = c.diagnoses.find(d => d.correct);
    return dx && dx.id;
  });
  if (!correctDxId) throw new Error('No correct diagnosis in case');
  await page.evaluate((id) => { window.pickDiagnosis(id); }, correctDxId);
  await page.waitForTimeout(120);
  await clickAdvance();

  // STEP 8 — tatalaksana: pick minRelevant correct items.
  console.log('  step 8 (tatalaksana): correct management');
  const txMin = await page.evaluate(() => {
    const c = window.OSCE_CASES_FASE_2[window.currentCase];
    return (c.tatalaksana && c.tatalaksana.minRelevant) || 3;
  });
  await pickFromCaseSection(['tatalaksana','items'], 'correct', txMin);
  await clickAdvance();

  // STEP 9 — edukasi: pick 3 correct items, then finish.
  console.log('  step 9 (edukasi): 3 correct');
  await pickFromCaseSection(['dialogueScript','edukasi','items'], 'correct', 3);
  // Finish.
  const finishClicked = await page.evaluate(() => {
    const btns = document.querySelectorAll('button');
    for (const b of btns) {
      if (b.textContent && b.textContent.indexOf('Selesaikan Kasus') !== -1) { b.click(); return true; }
    }
    return false;
  });
  if (!finishClicked) throw new Error('No "Selesaikan Kasus" finish button found');
  await page.waitForTimeout(500);

  // Result card.
  await page.waitForSelector('.osce-eval', { timeout: 5000 });
  const score = await page.textContent('.osce-eval__score');
  const breakdown = await page.textContent('.osce-eval__breakdown');
  const headline = await page.textContent('.osce-eval h3');
  console.log('  headline:', (headline || '').trim());
  console.log('  score block:', score.replace(/\s+/g, ' ').trim().slice(0, 200));
  console.log('  breakdown:', breakdown.replace(/\s+/g, ' ').trim());

  const finalState = await page.evaluate(() => ({
    finished: window.osceState && window.osceState.finished,
    score: window.osceState && window.osceState.score,
    diagnosisCorrect: window.osceState && window.osceState.diagnosisCorrect,
    timeUp: window.osceState && window.osceState.timeUp,
    checklistDone: window.osceState && window.osceState._checklistDoneCount,
    checklistTotal: window.osceState && window.osceState._checklistTotal,
    penalties: (window.osceState && window.osceState.penalties || []).length
  }));
  console.log('  final state:', JSON.stringify(finalState));

  if (!finalState.finished) throw new Error('Case did not reach finished state');
  if (!finalState.diagnosisCorrect) throw new Error('Diagnosis not registered as correct');
  if (finalState.score < 70) throw new Error('Expected score >=70 for a competent run, got ' + finalState.score);

  await page.screenshot({ path: '/tmp/osce-fase2-' + caseSpec.id + '-result.png', fullPage: true });

  if (errors.length > 0) {
    console.error('JS errors during ' + caseSpec.label + ':');
    errors.forEach(e => console.error('  ' + e));
    await ctx.close();
    throw new Error('JS errors observed for case ' + caseSpec.label);
  }

  await ctx.close();
  return finalState;
}

(async () => {
  const browser = await chromium.launch();
  try {
    for (const c of CASES) {
      await runCase(browser, c);
    }
    console.log('\n✅ All 3 Fase 2 cases (Tetanus / Stroke / TIA) passed end-to-end.');
  } finally {
    await browser.close();
  }
})().catch(err => {
  console.error('TEST FAILED:', err.message);
  console.error(err.stack);
  process.exit(1);
});
