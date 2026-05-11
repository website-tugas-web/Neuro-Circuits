// Smoke test for the 6-section Neuro Pet evolution (NEUAAA-260).
// Section order:
//   1. materi-fase-1   (visit material-1 + material-2)
//   2. test-fase-1     (finish Test Terstruktur Fase 1)
//   3. materi-fase-2   (visit material-3 + material-5 + material-7)
//   4. quiz-fase-2     (scroll bottom of a kasus-osce-fase-2-* page)
//   5. test-fase-2     (finish Test Terstruktur Fase 2)
//   6. study-timer     (BOTH the Fase 1 timer AND the Fase 2 timer)
const { chromium } = require('playwright');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:8765';

function expect(cond, msg) {
  if (!cond) throw new Error('FAIL: ' + msg);
  console.log('  ok — ' + msg);
}

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();

  page.on('pageerror', e => { throw new Error('pageerror: ' + e.message); });
  page.on('console', m => { if (m.type() === 'error') console.error('console.error:', m.text()); });

  async function getStage() {
    await page.waitForSelector('#neuro-mascot');
    return page.$eval('#neuro-mascot .nm-img', el => el.getAttribute('src'));
  }
  async function getStageNum() {
    return page.evaluate(() => window.NeuroPet ? window.NeuroPet.getStage() : -1);
  }
  async function getCompleted() {
    return page.evaluate(() => window.NeuroPet ? window.NeuroPet.getCompletedSections() : []);
  }

  // --- Reset state to start fresh ---
  console.log('=== reset state ===');
  await page.goto(BASE + '/materials.html');
  await page.waitForFunction(() => window.NeuroPet);
  await page.evaluate(() => window.NeuroPet.reset());
  await page.waitForTimeout(200);
  expect(await getStageNum() === 0, 'initial stage 0 after reset');
  let img = await getStage();
  expect(img.endsWith('brain-mascot-0.svg'), 'sprite is brain-mascot-0.svg');

  // --- 1: Materi Fase 1 (visit material-1 + material-2) ---
  console.log('=== visit material-1 ===');
  await page.goto(BASE + '/material-1.html');
  await page.waitForTimeout(800);
  expect(await getStageNum() === 0, 'stage still 0 after only material-1');

  console.log('=== visit material-2 → completes Materi Fase 1 ===');
  await page.goto(BASE + '/material-2.html');
  await page.waitForTimeout(800);
  expect(await getStageNum() === 1, 'stage 1 after Materi Fase 1');
  let completed = await getCompleted();
  expect(completed.indexOf('materi-fase-1') !== -1, 'materi-fase-1 marked complete');

  // --- Re-visit shouldn't double-count ---
  console.log('=== re-visit material-1 (no double-count) ===');
  await page.goto(BASE + '/material-1.html');
  await page.waitForTimeout(800);
  expect(await getStageNum() === 1, 'stage still 1 on re-visit');

  // --- Persistence check: reload page on material-1 ---
  console.log('=== reload preserves stage 1 ===');
  await page.reload();
  await page.waitForTimeout(800);
  expect(await getStageNum() === 1, 'stage 1 persists across reload');
  img = await getStage();
  expect(img.endsWith('brain-mascot-1.svg'), 'sprite is brain-mascot-1.svg');

  // --- 2: Test Terstruktur Fase 1 (mark via API) ---
  console.log('=== test Fase 1: simulate submission ===');
  await page.goto(BASE + '/test.html');
  await page.waitForFunction(() => window.NeuroPet);
  await page.evaluate(() => window.NeuroPet.markSectionComplete('test-fase-1'));
  await page.waitForTimeout(500);
  expect(await getStageNum() === 2, 'stage 2 after Test Fase 1');

  // --- 3: Materi Fase 2 (visit 3, 5, 7) ---
  console.log('=== materi Fase 2: visit material-3, 5, 7 ===');
  await page.goto(BASE + '/material-3.html');
  await page.waitForTimeout(800);
  expect(await getStageNum() === 2, 'stage 2 with only material-3');
  await page.goto(BASE + '/material-5.html');
  await page.waitForTimeout(800);
  expect(await getStageNum() === 2, 'stage 2 with material-3 + 5');
  await page.goto(BASE + '/material-7.html');
  await page.waitForTimeout(800);
  expect(await getStageNum() === 3, 'stage 3 after Materi Fase 2');

  // --- 4: Quiz Fase 2 (auto-fires on kasus-osce-fase-2-* page bottom) ---
  console.log('=== quiz Fase 2: scroll bottom of kasus-osce-fase-2-tetanus ===');
  await page.goto(BASE + '/kasus-osce-fase-2-tetanus.html');
  await page.waitForFunction(() => window.NeuroPet);
  await page.evaluate(() => {
    document.querySelector('.site-footer').scrollIntoView();
  });
  await page.waitForTimeout(1500);
  expect(await getStageNum() === 4, 'stage 4 after Quiz Fase 2');

  // --- 5: Test Fase 2 (click submit on phase-2-test by marking via API) ---
  console.log('=== test Fase 2: mark complete via API ===');
  await page.goto(BASE + '/phase-2-test.html');
  await page.waitForFunction(() => window.NeuroPet);
  await page.evaluate(() => window.NeuroPet.markSectionComplete('test-fase-2'));
  await page.waitForTimeout(500);
  expect(await getStageNum() === 5, 'stage 5 after Test Fase 2');

  // --- 6: Study Timer requires BOTH Fase 1 + Fase 2 timers ---
  console.log('=== study timer: only Fase 1 done → no evolution ===');
  await page.goto(BASE + '/timer.html');
  await page.waitForFunction(() => window.NeuroPet);
  await page.evaluate(() => window.NeuroPet.markTimerCompleted('fase-1'));
  await page.waitForTimeout(400);
  expect(await getStageNum() === 5, 'stage stays at 5 with only Fase 1 timer');

  console.log('=== study timer: Fase 2 completes too → stage 6 ===');
  await page.evaluate(() => window.NeuroPet.markTimerCompleted('fase-2'));
  await page.waitForTimeout(400);
  expect(await getStageNum() === 6, 'stage 6 after BOTH timers complete');
  img = await getStage();
  expect(img.endsWith('brain-mascot-7.svg'), 'final sprite is brain-mascot-7.svg');

  // --- Persistence: reload preserves final stage ---
  console.log('=== reload preserves final stage ===');
  await page.reload();
  await page.waitForTimeout(500);
  expect(await getStageNum() === 6, 'stage 6 persists across reload');

  // --- Reset clears everything ---
  console.log('=== reset via panel API ===');
  await page.evaluate(() => window.NeuroPet.reset());
  await page.waitForTimeout(500);
  expect(await getStageNum() === 0, 'stage 0 after reset');
  img = await getStage();
  expect(img.endsWith('brain-mascot-0.svg'), 'sprite back to brain-mascot-0.svg');
  completed = await getCompleted();
  expect(completed.length === 0, 'completed sections cleared');
  const timersAfterReset = await page.evaluate(() => window.NeuroPet.getCompletedTimers());
  expect(timersAfterReset.length === 0, 'completed timers cleared');

  // --- Persistence: reload after reset stays at 0 ---
  await page.reload();
  await page.waitForTimeout(500);
  expect(await getStageNum() === 0, 'stage 0 persists after reset+reload');

  console.log('\n✅ all checks passed');
  await browser.close();
})().catch(e => {
  console.error(e);
  process.exit(1);
});
