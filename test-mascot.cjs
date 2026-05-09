// Smoke test for floating brain mascot
const { chromium } = require('playwright');

const BASE = 'http://127.0.0.1:8765';

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();

  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console.error: ' + m.text()); });

  console.log('=== load /materials ===');
  await page.goto(BASE + '/materials.html');
  await page.waitForSelector('#neuro-mascot');
  let img = await page.getAttribute('#neuro-mascot .nm-img', 'src');
  let aria = await page.getAttribute('#neuro-mascot', 'aria-label');
  console.log('initial img:', img, 'stage 0 expected');
  console.log('aria:', aria);
  if (!img.endsWith('brain-mascot-0.svg')) throw new Error('expected stage 0 on first visit');

  console.log('=== open /material-3 (first time → topic 3) ===');
  await page.goto(BASE + '/material-3.html');
  await page.waitForSelector('#neuro-mascot');
  await page.waitForTimeout(900); // wait past growth animation timeout
  img = await page.getAttribute('#neuro-mascot .nm-img', 'src');
  console.log('after material-3 img:', img);
  if (!img.endsWith('brain-mascot-1.svg')) throw new Error('expected stage 1 after opening 1 unique topic');

  let opened = await page.evaluate(() => window.NeuroMascot.getOpenedTopics());
  console.log('opened topics:', opened);
  if (opened.length !== 1 || opened[0] !== 3) throw new Error('expected only topic 3 opened');

  console.log('=== reload /material-3 (re-open same topic → no advance) ===');
  await page.reload();
  await page.waitForSelector('#neuro-mascot');
  await page.waitForTimeout(900);
  img = await page.getAttribute('#neuro-mascot .nm-img', 'src');
  if (!img.endsWith('brain-mascot-1.svg')) throw new Error('expected stage to stay at 1 on re-open');

  console.log('=== open /material-1 (second unique topic → stage 2) ===');
  await page.goto(BASE + '/material-1.html');
  await page.waitForSelector('#neuro-mascot');
  await page.waitForTimeout(900);
  img = await page.getAttribute('#neuro-mascot .nm-img', 'src');
  console.log('after material-1 img:', img);
  if (!img.endsWith('brain-mascot-2.svg')) throw new Error('expected stage 2 after 2 unique topics');

  console.log('=== verify position persists across navigation ===');
  // Move mascot via API-style direct DOM manipulation (simulate drag)
  await page.evaluate(() => {
    const m = document.getElementById('neuro-mascot');
    const rect = m.getBoundingClientRect();
    const startX = rect.left + 5, startY = rect.top + 5;
    const ev = (type, x, y) => new MouseEvent(type, { bubbles: true, clientX: x, clientY: y, button: 0 });
    m.dispatchEvent(ev('mousedown', startX, startY));
    document.dispatchEvent(ev('mousemove', startX - 200, startY - 100));
    document.dispatchEvent(ev('mouseup', startX - 200, startY - 100));
  });
  await page.waitForTimeout(120);
  let pos1 = await page.evaluate(() => {
    const m = document.getElementById('neuro-mascot');
    return { left: m.style.left, top: m.style.top };
  });
  console.log('post-drag position:', pos1);

  await page.goto(BASE + '/');
  await page.waitForSelector('#neuro-mascot');
  let pos2 = await page.evaluate(() => {
    const m = document.getElementById('neuro-mascot');
    return { left: m.style.left, top: m.style.top };
  });
  console.log('after navigation position:', pos2);
  if (pos1.left !== pos2.left || pos1.top !== pos2.top) throw new Error('position did not persist');

  console.log('=== click (no drag) opens panel ===');
  await page.evaluate(() => {
    const m = document.getElementById('neuro-mascot');
    const rect = m.getBoundingClientRect();
    const x = rect.left + 5, y = rect.top + 5;
    const ev = (type, x, y) => new MouseEvent(type, { bubbles: true, clientX: x, clientY: y, button: 0 });
    m.dispatchEvent(ev('mousedown', x, y));
    document.dispatchEvent(ev('mouseup', x, y));
  });
  await page.waitForTimeout(50);
  const panelExists = await page.$('#nm-panel');
  if (!panelExists) throw new Error('panel did not open on click');
  const panelTopics = await page.$$eval('#nm-panel li a', as => as.length);
  if (panelTopics !== 7) throw new Error('expected 7 topics in panel, got ' + panelTopics);
  const doneCount = await page.$$eval('#nm-panel li a.done', as => as.length);
  console.log('panel: 7 topics shown,', doneCount, 'marked done');
  if (doneCount !== 2) throw new Error('expected 2 done topics, got ' + doneCount);

  console.log('=== verify mascot does not block clicks ===');
  // The container has pointer-events:none; only the mascot inside has pointer-events:auto.
  const containerPE = await page.$eval('#neuro-mascot-root', el => getComputedStyle(el).pointerEvents);
  if (containerPE !== 'none') throw new Error('container should be pointer-events:none, got ' + containerPE);
  console.log('container pointer-events:', containerPE);

  if (errors.length) {
    console.error('ERRORS:', errors);
    process.exit(1);
  }
  console.log('\nAll smoke tests PASSED');
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
