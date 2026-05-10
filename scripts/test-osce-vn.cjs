// Smoke test for the rebuilt OSCE Fase 1 visual novel (NEUAAA-238).
// Walks one case end-to-end through all 7 steps and asserts the evaluation card renders.
const { chromium } = require('playwright');

const BASE = process.env.BASE || 'http://localhost:3434';

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push('PAGEERROR: ' + err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push('CONSOLE_ERR: ' + msg.text());
  });

  console.log('→ Loading /quiz');
  await page.goto(BASE + '/quiz', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#osceApp');

  // Pin Math.random so startSimulation deterministically selects case 0
  // (Math.random=0 → Math.floor(0 * len) = 0; shuffle becomes a no-op identity swap).
  await page.evaluate(() => { Math.random = () => 0; });

  console.log('→ Click Mulai Kasus');
  await page.click('text=Mulai Kasus');

  // Verify mascot renders
  const mascotSrc = await page.getAttribute('.doctor-mascot-img', 'src');
  console.log('  doctor mascot src:', mascotSrc);
  if (!mascotSrc || !/brain-mascot-/.test(mascotSrc)) throw new Error('Doctor mascot not rendered as brain-mascot SVG');

  // Verify timer
  const timerText = await page.textContent('#osceTimer');
  console.log('  timer:', timerText);
  if (!/^\d{2}:\d{2}$/.test(timerText)) throw new Error('Timer not rendering MM:SS');

  // Verify 7-step checklist strip
  const stepCount = await page.locator('.osce-checklist__item').count();
  console.log('  checklist steps:', stepCount);
  if (stepCount !== 7) throw new Error('Expected 7 checklist steps, got ' + stepCount);

  // STEP 1 — intro: pick warm choice
  console.log('→ Step 1 (intro): pick warm choice');
  await page.click('text=Selamat pagi Pak. Perkenalkan');
  await page.click('text=Lanjut ke Anamnesis');

  // STEP 2 — anamnesis: ask 4 relevant
  console.log('→ Step 2 (anamnesis): ask 4 relevant questions');
  await page.click('button.vn-mcq:has-text("Sejak kapan keluhan ini muncul?")');
  await page.click('button.vn-mcq:has-text("Di bagian mana keluhan dirasakan?")');
  await page.click('button.vn-mcq:has-text("Apakah keluhan hilang timbul")');
  await page.click('button.vn-mcq:has-text("Bagaimana karakter keluhan")');
  await page.click('text=Lanjut ke Inform Consent');

  // STEP 3 — consent: pick correct
  console.log('→ Step 3 (consent): pick correct option');
  await page.click('text=Mungkin nanti sedikit kurang nyaman');
  await page.click('text=Lanjut ke Persiapan');

  // STEP 4 — persiapan: pick 3 correct items
  console.log('→ Step 4 (persiapan): pick 3 correct items');
  await page.click('button.vn-mcq:has-text("Cuci tangan 6 langkah")');
  await page.click('button.vn-mcq:has-text("Siapkan palu refleks")');
  await page.click('button.vn-mcq:has-text("Atur posisi pasien")');
  await page.click('text=Lanjut ke Pemeriksaan');

  // STEP 5 — pemeriksaan: 4 correct exams
  console.log('→ Step 5 (pemeriksaan): pick 4 correct exams');
  await page.click('button.exam-btn:has-text("refleks bicep")');
  await page.click('button.exam-btn:has-text("refleks tricep")');
  await page.click('button.exam-btn:has-text("refleks patella")');
  await page.click('button.exam-btn:has-text("refleks achilles")');
  await page.waitForTimeout(800); // let setTimeout finding-update settle
  await page.click('text=Lanjut ke Pelaporan Hasil');

  // STEP 6 — pelaporan: pick correct diagnosis + correct report style
  console.log('→ Step 6 (pelaporan): diagnosis + clear report');
  await page.click('button.vn-choice:has-text("Stroke iskemik hemisfer kiri")');
  await page.click('button.vn-choice:has-text("Pak, dari pemeriksaan didapatkan")');
  await page.click('text=Lanjut ke Edukasi');

  // STEP 7 — edukasi: pick 3 correct items
  console.log('→ Step 7 (edukasi): pick 3 correct items');
  await page.click('button.vn-mcq:has-text("CERDIK")');
  await page.click('button.vn-mcq:has-text("Kontrol tekanan darah")');
  await page.click('button.vn-mcq:has-text("Berhenti merokok")');
  await page.screenshot({ path: '/tmp/osce-step7.png', fullPage: true });
  const finishBtnExists = await page.locator('button.btn-pill:has-text("Selesaikan Kasus")').count();
  console.log('  Selesaikan Kasus button count:', finishBtnExists);

  // Diagnostic: dump pre-finish state
  const pre = await page.evaluate(() => ({
    stepIdx: window.osceState && window.osceState.stepIdx,
    eduSelected: window.osceState && window.osceState.eduSelectedIds,
    finished: window.osceState && window.osceState.finished,
    phase: window.osceState && window.osceState.phase
  }));
  console.log('  pre-finish state:', JSON.stringify(pre));

  // Use programmatic click to avoid any selector ambiguity
  const clicked = await page.evaluate(() => {
    var btns = document.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].textContent && btns[i].textContent.indexOf('Selesaikan Kasus') !== -1) {
        btns[i].click();
        return { clicked: true, label: btns[i].textContent.trim() };
      }
    }
    return { clicked: false };
  });
  console.log('  click attempt:', JSON.stringify(clicked));

  const post = await page.evaluate(() => ({
    stepIdx: window.osceState && window.osceState.stepIdx,
    finished: window.osceState && window.osceState.finished,
    phase: window.osceState && window.osceState.phase,
    score: window.osceState && window.osceState.score
  }));
  console.log('  post-finish state:', JSON.stringify(post));

  // Result card
  console.log('→ Verify evaluation card');
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/osce-result.png', fullPage: true });
  await page.waitForSelector('.osce-eval', { timeout: 5000 });
  const score = await page.textContent('.osce-eval__score');
  console.log('  score block:', score.replace(/\s+/g, ' ').trim().slice(0, 200));
  const breakdown = await page.textContent('.osce-eval__breakdown');
  console.log('  breakdown:', breakdown.replace(/\s+/g, ' ').trim());

  if (errors.length > 0) {
    console.error('JS errors during run:');
    errors.forEach(e => console.error('  ' + e));
    process.exit(1);
  }
  console.log('\n✅ OSCE VN smoke test passed.');
  await browser.close();
})().catch(err => {
  console.error('TEST FAILED:', err);
  console.error('Errors observed:');
  // best-effort dump of captured errors
  try { require('fs').writeFileSync('/tmp/osce-test-error.log', String(err.stack || err)); } catch (_) {}
  process.exit(1);
});
