// One-shot rebrand: "Neuro Circuits" -> "Neuro Pets" + swap header logo to baby-brain mascot.
// NEUAAA-215. Idempotent — safe to re-run.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const SERVED_HTML = [
  'index.html',
  'materials.html',
  'quiz.html',
  'test.html',
  'timer.html',
  'references.html',
  'material-1.html',
  'material-2.html',
  'material-3.html',
  'material-4.html',
  'material-5.html',
  'material-6.html',
  'material-7.html',
];

// design/ pages are reference-only but we update them too so the demo set stays consistent.
const DESIGN_HTML = [
  'design/index.html',
  'design/materials.html',
  'design/quiz.html',
  'design/test.html',
  'design/timer.html',
  'design/references.html',
];

const SIDEBAR_IMG = '<img src="/images/brain-mascot-0.svg" alt="Neuro Pets baby brain mascot" width="56" height="56" class="sidebar__crest-img" />';
const HERO_IMG = '<img src="/images/brain-mascot-0.svg" alt="Neuro Pets baby brain mascot" width="140" height="140" class="hero__logo-img" />';

function rebrandText(s) {
  return s
    .replace(/Neuro&nbsp;Circuits/g, 'Neuro&nbsp;Pets')
    .replace(/Neuro Circuits/g, 'Neuro Pets');
}

// Replace any <div class="sidebar__crest" ...>...</div> inline-svg block with an <img>.
function replaceSidebarCrest(html) {
  return html.replace(
    /<div class="sidebar__crest"([^>]*)>[\s\S]*?<\/div>/,
    (_m, attrs) => `<div class="sidebar__crest"${attrs}>${SIDEBAR_IMG}</div>`,
  );
}

// Replace any <div class="hero__logo" ...>...</div> inline-svg block with an <img>.
function replaceHeroLogo(html) {
  return html.replace(
    /<div class="hero__logo"([^>]*)>[\s\S]*?<\/div>/,
    (_m, attrs) => `<div class="hero__logo"${attrs}>${HERO_IMG}</div>`,
  );
}

function processHtml(filePath) {
  const abs = path.join(ROOT, filePath);
  if (!fs.existsSync(abs)) return { filePath, skipped: true };
  let html = fs.readFileSync(abs, 'utf8');
  const before = html;
  html = replaceSidebarCrest(html);
  html = replaceHeroLogo(html);
  html = rebrandText(html);
  if (html !== before) {
    fs.writeFileSync(abs, html);
    return { filePath, changed: true };
  }
  return { filePath, changed: false };
}

function processPlain(filePath) {
  const abs = path.join(ROOT, filePath);
  if (!fs.existsSync(abs)) return { filePath, skipped: true };
  const before = fs.readFileSync(abs, 'utf8');
  const after = rebrandText(before);
  if (after !== before) {
    fs.writeFileSync(abs, after);
    return { filePath, changed: true };
  }
  return { filePath, changed: false };
}

const results = [];
for (const f of [...SERVED_HTML, ...DESIGN_HTML]) results.push(processHtml(f));

// Code/data files that ship strings in API responses or the served bundle.
for (const f of ['app.js', 'src/index.js', 'frontend/app/layout.tsx', 'package.json']) {
  results.push(processPlain(f));
}

for (const r of results) {
  console.log(`${r.changed ? 'CHANGED' : r.skipped ? 'SKIPPED' : 'noop'}\t${r.filePath}`);
}
