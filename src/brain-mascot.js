/* Floating Brain Mascot — 6-section OSCE evolution (NEUAAA-260)
   Self-contained, vanilla JS. Injects its own styles + DOM.
   Pet evolves one stage per section completion (6 sections → 6 evolutions).
*/
(function () {
  if (window.__neuroMascotLoaded) return;
  window.__neuroMascotLoaded = true;

  // v4 — section set updated (NEUAAA-260): drop quiz-fase-1, add composite study-timer.
  var SECTIONS_KEY = 'neuro-pet:sections-completed:v4';
  var MATERIALS_KEY = 'neuro-pet:materials-visited:v4';
  var TIMERS_KEY = 'neuro-pet:timers-completed:v4';
  var POS_KEY = 'neuro-circuits:mascot-position';
  var DRAG_THRESHOLD = 5;

  // Six OSCE learning sections; completing one advances the pet by exactly one stage.
  var SECTIONS = [
    { id: 'materi-fase-1', name: 'Materi OSCE Fase 1' },
    { id: 'test-fase-1', name: 'Test Terstruktur OSCE Fase 1' },
    { id: 'materi-fase-2', name: 'Materi OSCE Fase 2' },
    { id: 'quiz-fase-2', name: 'Quiz Interaktif OSCE Fase 2' },
    { id: 'test-fase-2', name: 'Test Terstruktur OSCE Fase 2' },
    { id: 'study-timer', name: 'Study Timer (Fase 1 + Fase 2)' }
  ];
  var SECTION_COUNT = SECTIONS.length;

  // Materials whose visit counts toward each Materi section.
  var MATERI_REQUIREMENTS = {
    'materi-fase-1': ['material-1', 'material-2'],
    'materi-fase-2': ['material-3', 'material-5', 'material-7']
  };

  // Study-timer phases that must BOTH complete before the study-timer section fires.
  var TIMER_PHASES = ['fase-1', 'fase-2'];

  // 7 visible stages: stage 0 (no completions) through stage 6 (all six sections done).
  // brain-mascot-4.svg (UGM freshman) is skipped to keep the same 7-step roadmap as v2.
  var STAGE_SVG_INDEX = [0, 1, 2, 3, 5, 6, 7];

  var STAGE_LABELS = [
    'Baby Brain',
    'Kid Brain',
    'Schoolkid Brain',
    'Teen Brain',
    'Confident Med Student',
    'Junior Doctor / Intern',
    'Doctor'
  ];

  var STAGE_ENCOURAGEMENTS = [
    'Selesaikan bagian pertama untuk mulai bertumbuh!',
    'Awal yang bagus! Lanjutkan eksplorasi.',
    'Momentum sedang terbangun.',
    'Setengah jalan menuju white coat!',
    'Tahap percaya diri. Lanjutkan!',
    'Satu bagian lagi sebelum lulus.',
    'Selamat — kamu sudah jadi Doctor!'
  ];

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- state helpers ----
  function readSet(key) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return new Set();
      var arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return new Set();
      return new Set(arr.filter(function (v) { return typeof v === 'string'; }));
    } catch (e) { return new Set(); }
  }
  function writeSet(key, set) {
    try { localStorage.setItem(key, JSON.stringify(Array.from(set).sort())); } catch (e) {}
  }
  function readPosition() {
    try {
      var raw = localStorage.getItem(POS_KEY);
      if (!raw) return null;
      var p = JSON.parse(raw);
      if (typeof p.x !== 'number' || typeof p.y !== 'number') return null;
      return p;
    } catch (e) { return null; }
  }
  function writePosition(p) {
    try { localStorage.setItem(POS_KEY, JSON.stringify(p)); } catch (e) {}
  }

  function isValidSectionId(id) {
    for (var i = 0; i < SECTIONS.length; i++) if (SECTIONS[i].id === id) return true;
    return false;
  }

  // ---- mount ----
  var mounted = false;
  var els = {};
  var state = {
    completed: readSet(SECTIONS_KEY),
    materialsVisited: readSet(MATERIALS_KEY),
    timersCompleted: readSet(TIMERS_KEY),
    pos: null,
    dragging: false,
    moved: false,
    panelOpen: false,
    lastStage: 0
  };

  function stage() { return Math.min(state.completed.size, SECTION_COUNT); }

  function ensureStyles() {
    if (document.getElementById('neuro-mascot-styles')) return;
    var css = '' +
      '#neuro-mascot-root{position:fixed;inset:0;pointer-events:none;z-index:50;}' +
      '#neuro-mascot{position:absolute;width:96px;height:auto;pointer-events:auto;cursor:grab;user-select:none;-webkit-user-select:none;touch-action:none;outline:none;filter:drop-shadow(0 6px 14px rgba(0,0,0,.18));transition:transform .18s ease;}' +
      '#neuro-mascot:focus-visible{outline:2px solid #7B1224;outline-offset:4px;border-radius:8px;}' +
      '#neuro-mascot.dragging{cursor:grabbing;transition:none;}' +
      '#neuro-mascot.bob{animation:nm-bob 2.4s ease-in-out infinite;}' +
      '#neuro-mascot .nm-img{display:block;width:100%;height:auto;pointer-events:none;}' +
      '#neuro-mascot.grow{animation:nm-grow .6s cubic-bezier(.34,1.56,.64,1);}' +
      '#neuro-mascot .nm-sparkle{position:absolute;top:-4px;left:-4px;right:-4px;bottom:-4px;pointer-events:none;opacity:0;}' +
      '#neuro-mascot.grow .nm-sparkle{animation:nm-sparkle .65s ease-out;}' +
      '#neuro-mascot .nm-sparkle span{position:absolute;width:6px;height:6px;border-radius:50%;background:#C9A84C;box-shadow:0 0 6px #fff7d8;}' +
      '#neuro-mascot .nm-sparkle span:nth-child(1){top:8%;left:14%;}' +
      '#neuro-mascot .nm-sparkle span:nth-child(2){top:0%;left:60%;background:#7B1224;}' +
      '#neuro-mascot .nm-sparkle span:nth-child(3){top:30%;left:96%;}' +
      '#neuro-mascot .nm-sparkle span:nth-child(4){top:70%;left:-4%;background:#7B1224;}' +
      '#neuro-mascot .nm-sparkle span:nth-child(5){top:96%;left:32%;}' +
      '#neuro-mascot .nm-sparkle span:nth-child(6){top:84%;left:80%;}' +
      '#nm-tooltip{position:absolute;background:#fff;color:#3a0010;font-family:Inter,system-ui,sans-serif;font-size:12px;line-height:1.35;padding:8px 10px;border-radius:8px;border:1px solid #e8d6dc;box-shadow:0 4px 14px rgba(0,0,0,.12);pointer-events:none;max-width:220px;opacity:0;transform:translateY(4px);transition:opacity .15s ease,transform .15s ease;}' +
      '#nm-tooltip.show{opacity:1;transform:translateY(0);}' +
      '#nm-tooltip strong{color:#7B1224;}' +
      '#nm-panel{position:absolute;background:#fff;border:1px solid #e8d6dc;border-radius:14px;padding:14px 14px 10px;width:260px;box-shadow:0 12px 28px rgba(0,0,0,.18);pointer-events:auto;font-family:Inter,system-ui,sans-serif;color:#3a0010;}' +
      '#nm-panel h4{margin:0 0 8px;font-size:13px;font-weight:600;color:#7B1224;letter-spacing:.02em;text-transform:uppercase;}' +
      '#nm-panel .nm-progress{font-size:12px;margin:0 0 10px;color:#5b3a44;}' +
      '#nm-panel .nm-stage-label{font-size:12px;margin:0 0 10px;color:#5b3a44;font-style:italic;}' +
      '#nm-panel ul{list-style:none;padding:0;margin:0 0 10px;}' +
      '#nm-panel li{margin:0;}' +
      '#nm-panel li .nm-row{display:flex;align-items:center;gap:8px;padding:6px 6px;border-radius:6px;color:#3a0010;font-size:13px;line-height:1.3;}' +
      '#nm-panel li .nm-mark{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;border:1.5px solid #c9a8b1;color:#7B1224;font-size:12px;flex:0 0 auto;}' +
      '#nm-panel li .nm-row.done .nm-mark{background:#7B1224;border-color:#7B1224;color:#fff;}' +
      '#nm-panel li .nm-row.done{color:#7B1224;font-weight:500;}' +
      '#nm-panel .nm-foot{display:flex;justify-content:space-between;align-items:center;margin-top:6px;padding-top:8px;border-top:1px solid #f1e2e7;}' +
      '#nm-panel .nm-foot button{background:none;border:1px solid #d6b3bd;color:#7B1224;border-radius:6px;padding:4px 10px;font-size:11px;cursor:pointer;font-family:inherit;}' +
      '#nm-panel .nm-foot button:hover{background:#fbeef1;}' +
      '#nm-panel .nm-foot .nm-close{border:none;color:#7B1224;font-size:18px;line-height:1;padding:2px 8px;cursor:pointer;background:none;}' +
      '@media (max-width:640px){#neuro-mascot{width:60px;}#nm-panel{width:240px;}}' +
      '@keyframes nm-bob{0%,100%{transform:translateY(0);}50%{transform:translateY(-3px);}}' +
      '@keyframes nm-grow{0%{transform:scale(1);}30%{transform:scale(1.18);}55%{transform:scale(.95);}100%{transform:scale(1);}}' +
      '@keyframes nm-sparkle{0%{opacity:0;transform:scale(.5);}40%{opacity:1;}100%{opacity:0;transform:scale(1.4);}}' +
      '@media (prefers-reduced-motion: reduce){#neuro-mascot,#neuro-mascot.bob,#neuro-mascot.grow{animation:none !important;transition:none !important;}#neuro-mascot.grow .nm-sparkle{animation:none !important;}}';
    var style = document.createElement('style');
    style.id = 'neuro-mascot-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function build() {
    ensureStyles();

    var root = document.createElement('div');
    root.id = 'neuro-mascot-root';

    var mascot = document.createElement('div');
    mascot.id = 'neuro-mascot';
    mascot.setAttribute('role', 'button');
    mascot.setAttribute('tabindex', '0');
    if (!prefersReducedMotion) mascot.classList.add('bob');

    var img = document.createElement('img');
    img.className = 'nm-img';
    img.alt = '';
    img.draggable = false;
    mascot.appendChild(img);

    var sparkle = document.createElement('div');
    sparkle.className = 'nm-sparkle';
    for (var i = 0; i < 6; i++) sparkle.appendChild(document.createElement('span'));
    mascot.appendChild(sparkle);

    var tooltip = document.createElement('div');
    tooltip.id = 'nm-tooltip';
    tooltip.setAttribute('role', 'tooltip');

    root.appendChild(mascot);
    root.appendChild(tooltip);

    document.body.appendChild(root);

    els.root = root;
    els.mascot = mascot;
    els.img = img;
    els.tooltip = tooltip;
  }

  function clampPosition(p) {
    var w = els.mascot.offsetWidth || 96;
    var h = els.mascot.offsetHeight || 120;
    var maxX = Math.max(0, window.innerWidth - w - 8);
    var maxY = Math.max(0, window.innerHeight - h - 8);
    return {
      x: Math.min(Math.max(8, p.x), maxX),
      y: Math.min(Math.max(8, p.y), maxY)
    };
  }

  function defaultPosition() {
    var w = els.mascot.offsetWidth || 96;
    var h = els.mascot.offsetHeight || 120;
    return { x: window.innerWidth - w - 24, y: window.innerHeight - h - 24 };
  }

  function applyPosition() {
    if (!state.pos) state.pos = readPosition() || defaultPosition();
    state.pos = clampPosition(state.pos);
    els.mascot.style.left = state.pos.x + 'px';
    els.mascot.style.top = state.pos.y + 'px';
  }

  function updateAria() {
    var s = stage();
    var label = 'Mascot Neuro Pet, tahap ' + s + ' dari ' + SECTION_COUNT + ' — ' + STAGE_LABELS[s] + '. ' + state.completed.size + ' dari ' + SECTION_COUNT + ' bagian selesai. Klik untuk membuka panel progres; geser untuk memindahkan; gunakan tombol panah untuk menggeser.';
    els.mascot.setAttribute('aria-label', label);
  }

  function currentSpriteIndex() {
    var s = stage();
    return STAGE_SVG_INDEX[Math.min(s, STAGE_SVG_INDEX.length - 1)];
  }

  function spriteUrl(svgIdx, abs) {
    // Floating mascot pages live at /something.html so a relative path works,
    // but the sidebar crest is used with an absolute /images/... reference too.
    return (abs ? '/' : '') + 'images/brain-mascot-' + svgIdx + '.svg';
  }

  // Paint the floating mascot AND any in-page surfaces that show the pet
  // (sidebar crest, home hero) so the user's current evolution shows everywhere.
  function paintEvolvedSprites() {
    var svgIdx = currentSpriteIndex();
    var crests = document.querySelectorAll('.sidebar__crest-img, .hero__logo-img');
    for (var i = 0; i < crests.length; i++) {
      var el = crests[i];
      el.setAttribute('src', spriteUrl(svgIdx, true));
      el.setAttribute('data-neuro-stage', String(stage()));
    }
  }

  function applyStage(animate) {
    var svgIdx = currentSpriteIndex();
    var s = stage();
    els.img.src = spriteUrl(svgIdx, false);
    paintEvolvedSprites();
    if (animate && !prefersReducedMotion && s > state.lastStage) {
      els.mascot.classList.remove('grow');
      // force reflow so animation re-triggers
      void els.mascot.offsetWidth;
      els.mascot.classList.add('grow');
      setTimeout(function () { els.mascot.classList.remove('grow'); }, 700);
    }
    state.lastStage = s;
    updateAria();
  }

  // ---- tooltip ----
  function showTooltip() {
    if (state.panelOpen || state.dragging) return;
    var s = stage();
    var msg = '<strong>' + state.completed.size + '/' + SECTION_COUNT + ' bagian</strong> — ' + STAGE_ENCOURAGEMENTS[s];
    els.tooltip.innerHTML = msg;
    var r = els.mascot.getBoundingClientRect();
    els.tooltip.style.visibility = 'hidden';
    els.tooltip.classList.add('show');
    var tw = els.tooltip.offsetWidth, th = els.tooltip.offsetHeight;
    var top = r.top - th - 8;
    var left = r.left + (r.width - tw) / 2;
    if (top < 8) top = r.bottom + 8;
    if (left < 8) left = 8;
    if (left + tw > window.innerWidth - 8) left = window.innerWidth - tw - 8;
    els.tooltip.style.left = left + 'px';
    els.tooltip.style.top = top + 'px';
    els.tooltip.style.visibility = '';
  }
  function hideTooltip() { els.tooltip.classList.remove('show'); }

  // ---- panel ----
  function openPanel() {
    if (state.panelOpen) return;
    state.panelOpen = true;
    hideTooltip();

    var panel = document.createElement('div');
    panel.id = 'nm-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Progres OSCE');

    var s = stage();
    var header = '<h4>Progres Neuro Pet</h4>' +
      '<p class="nm-progress">' + state.completed.size + ' dari ' + SECTION_COUNT + ' bagian selesai — ' + STAGE_ENCOURAGEMENTS[s] + '</p>' +
      '<p class="nm-stage-label">Tahap ' + s + ': ' + STAGE_LABELS[s] + '</p>';

    var ulHtml = '<ul>';
    for (var i = 0; i < SECTIONS.length; i++) {
      var sec = SECTIONS[i];
      var done = state.completed.has(sec.id);
      ulHtml += '<li><div class="nm-row ' + (done ? 'done' : '') + '">' +
        '<span class="nm-mark" aria-hidden="true">' + (done ? '✓' : (i + 1)) + '</span>' +
        '<span>' + sec.name + '</span></div></li>';
    }
    ulHtml += '</ul>';

    var foot = '<div class="nm-foot"><button type="button" class="nm-reset" title="Atur ulang progres">↻ Atur Ulang</button><button type="button" class="nm-close" aria-label="Tutup">×</button></div>';

    panel.innerHTML = header + ulHtml + foot;
    els.root.appendChild(panel);
    els.panel = panel;

    // position near mascot
    var r = els.mascot.getBoundingClientRect();
    var pw = panel.offsetWidth, ph = panel.offsetHeight;
    var left = r.left + r.width + 12;
    if (left + pw > window.innerWidth - 8) left = r.left - pw - 12;
    if (left < 8) left = Math.max(8, Math.min(r.left, window.innerWidth - pw - 8));
    var top = r.top;
    if (top + ph > window.innerHeight - 8) top = window.innerHeight - ph - 8;
    if (top < 8) top = 8;
    panel.style.left = left + 'px';
    panel.style.top = top + 'px';

    panel.querySelector('.nm-close').addEventListener('click', closePanel);
    panel.querySelector('.nm-reset').addEventListener('click', function () {
      if (window.confirm('Atur ulang Neuro Pet ke tahap awal? Progres bagian yang sudah selesai akan dihapus.')) {
        resetProgress();
        closePanel();
      }
    });

    setTimeout(function () { document.addEventListener('mousedown', outsideClose, true); document.addEventListener('touchstart', outsideClose, true); }, 0);
  }
  function outsideClose(e) {
    if (!state.panelOpen) return;
    if (els.panel && (els.panel.contains(e.target) || els.mascot.contains(e.target))) return;
    closePanel();
  }
  function closePanel() {
    state.panelOpen = false;
    document.removeEventListener('mousedown', outsideClose, true);
    document.removeEventListener('touchstart', outsideClose, true);
    if (els.panel && els.panel.parentNode) els.panel.parentNode.removeChild(els.panel);
    els.panel = null;
  }

  // ---- drag handling (mouse + touch) ----
  function getPoint(e) {
    if (e.touches && e.touches[0]) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    if (e.changedTouches && e.changedTouches[0]) return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  }

  var drag = { startX: 0, startY: 0, baseX: 0, baseY: 0 };

  function onPointerDown(e) {
    if (e.button !== undefined && e.button !== 0) return;
    var p = getPoint(e);
    drag.startX = p.x; drag.startY = p.y;
    drag.baseX = state.pos.x; drag.baseY = state.pos.y;
    state.dragging = true;
    state.moved = false;
    els.mascot.classList.add('dragging');
    els.mascot.classList.remove('bob');
    hideTooltip();
    document.addEventListener('mousemove', onPointerMove);
    document.addEventListener('mouseup', onPointerUp);
    document.addEventListener('touchmove', onPointerMove, { passive: false });
    document.addEventListener('touchend', onPointerUp);
    document.addEventListener('touchcancel', onPointerUp);
    if (e.cancelable) e.preventDefault();
  }
  function onPointerMove(e) {
    if (!state.dragging) return;
    var p = getPoint(e);
    var dx = p.x - drag.startX, dy = p.y - drag.startY;
    if (!state.moved && Math.abs(dx) + Math.abs(dy) > DRAG_THRESHOLD) state.moved = true;
    state.pos = clampPosition({ x: drag.baseX + dx, y: drag.baseY + dy });
    els.mascot.style.left = state.pos.x + 'px';
    els.mascot.style.top = state.pos.y + 'px';
    if (e.cancelable && e.touches) e.preventDefault();
  }
  function onPointerUp(e) {
    if (!state.dragging) return;
    state.dragging = false;
    els.mascot.classList.remove('dragging');
    if (!prefersReducedMotion) els.mascot.classList.add('bob');
    document.removeEventListener('mousemove', onPointerMove);
    document.removeEventListener('mouseup', onPointerUp);
    document.removeEventListener('touchmove', onPointerMove);
    document.removeEventListener('touchend', onPointerUp);
    document.removeEventListener('touchcancel', onPointerUp);
    if (state.moved) {
      writePosition(state.pos);
    } else {
      // treat as click → toggle panel
      if (state.panelOpen) closePanel(); else openPanel();
    }
  }

  function onKeyDown(e) {
    if (document.activeElement !== els.mascot) return;
    var step = 10;
    var nudged = false;
    if (e.key === 'ArrowLeft') { state.pos.x -= step; nudged = true; }
    else if (e.key === 'ArrowRight') { state.pos.x += step; nudged = true; }
    else if (e.key === 'ArrowUp') { state.pos.y -= step; nudged = true; }
    else if (e.key === 'ArrowDown') { state.pos.y += step; nudged = true; }
    else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (state.panelOpen) closePanel(); else openPanel();
      return;
    } else if (e.key === 'Escape' && state.panelOpen) {
      e.preventDefault();
      closePanel();
      return;
    }
    if (nudged) {
      e.preventDefault();
      state.pos = clampPosition(state.pos);
      els.mascot.style.left = state.pos.x + 'px';
      els.mascot.style.top = state.pos.y + 'px';
      writePosition(state.pos);
    }
  }

  function onResize() {
    if (!state.pos) return;
    state.pos = clampPosition(state.pos);
    els.mascot.style.left = state.pos.x + 'px';
    els.mascot.style.top = state.pos.y + 'px';
    if (state.panelOpen) {
      closePanel(); openPanel();
    }
  }

  // ---- public API ----
  function markSectionComplete(sectionId) {
    if (!isValidSectionId(sectionId)) return false;
    if (state.completed.has(sectionId)) return false;
    state.completed.add(sectionId);
    writeSet(SECTIONS_KEY, state.completed);
    if (mounted) applyStage(true);
    if (state.panelOpen) { closePanel(); openPanel(); }
    return true;
  }

  function markMaterialVisited(materialId) {
    if (typeof materialId !== 'string' || !materialId) return;
    if (!state.materialsVisited.has(materialId)) {
      state.materialsVisited.add(materialId);
      writeSet(MATERIALS_KEY, state.materialsVisited);
    }
    // After a visit, check whether any Materi section is now complete.
    Object.keys(MATERI_REQUIREMENTS).forEach(function (sectionId) {
      var required = MATERI_REQUIREMENTS[sectionId];
      var allVisited = required.every(function (m) { return state.materialsVisited.has(m); });
      if (allVisited) markSectionComplete(sectionId);
    });
  }

  // Fired when the user finishes a study-timer session for a given phase.
  // The study-timer SECTION only completes once BOTH phases ('fase-1' AND
  // 'fase-2') have completed at least once.
  function markTimerCompleted(phase) {
    if (TIMER_PHASES.indexOf(phase) === -1) return false;
    if (state.timersCompleted.has(phase)) return false;
    state.timersCompleted.add(phase);
    writeSet(TIMERS_KEY, state.timersCompleted);
    var allDone = TIMER_PHASES.every(function (p) { return state.timersCompleted.has(p); });
    if (allDone) markSectionComplete('study-timer');
    return true;
  }

  function getStage() { return stage(); }

  function resetProgress() {
    state.completed = new Set();
    state.materialsVisited = new Set();
    state.timersCompleted = new Set();
    writeSet(SECTIONS_KEY, state.completed);
    writeSet(MATERIALS_KEY, state.materialsVisited);
    writeSet(TIMERS_KEY, state.timersCompleted);
    state.lastStage = 0;
    if (mounted) applyStage(false);
  }

  // Path → material id (e.g. /material-1.html → 'material-1')
  function detectMaterialFromPath() {
    var p = location.pathname;
    var m = p.match(/\/(material-\d+)(?:\.html)?$/);
    return m ? m[1] : null;
  }

  // Returns the section auto-fired by simply visiting the page (pages with no
  // richer interaction model: phase-2 case docs and the placeholder phase-2 test).
  function detectAutoSectionFromPath() {
    var p = location.pathname;
    if (/\/kasus-osce-fase-2-(tetanus|stroke|tia)(?:\.html)?$/.test(p)) {
      return { section: 'quiz-fase-2', requireBottom: true };
    }
    return null;
  }

  // Watch for the user to scroll the page footer into view; only then mark
  // the "end of case" / "test placeholder" section complete.
  function armBottomTrigger(sectionId) {
    var footer = document.querySelector('.site-footer') || document.querySelector('footer');
    if (!footer || typeof IntersectionObserver === 'undefined') {
      // Fallback: still mark complete so the trigger never silently drops.
      setTimeout(function () { markSectionComplete(sectionId); }, 1500);
      return;
    }
    var observed = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !observed) {
          observed = true;
          io.disconnect();
          markSectionComplete(sectionId);
        }
      });
    }, { threshold: 0.4 });
    io.observe(footer);
  }

  window.NeuroPet = {
    markSectionComplete: markSectionComplete,
    markMaterialVisited: markMaterialVisited,
    markTimerCompleted: markTimerCompleted,
    getStage: getStage,
    getCompletedSections: function () { return Array.from(state.completed); },
    getCompletedTimers: function () { return Array.from(state.timersCompleted); },
    reset: resetProgress,
    SECTIONS: SECTIONS.slice()
  };
  // Backwards compatibility for any older callers (NEUAAA-203 tests etc.).
  window.NeuroMascot = {
    markTopicOpened: function () { /* deprecated — replaced by NeuroPet API */ },
    getOpenedTopics: function () { return []; },
    getStage: getStage
  };

  // ---- init ----
  function init() {
    if (mounted) return;
    mounted = true;
    build();
    state.pos = readPosition() || defaultPosition();
    applyPosition();
    state.lastStage = stage();
    applyStage(false);
    updateAria();

    els.mascot.addEventListener('mousedown', onPointerDown);
    els.mascot.addEventListener('touchstart', onPointerDown, { passive: false });
    els.mascot.addEventListener('mouseenter', showTooltip);
    els.mascot.addEventListener('mouseleave', hideTooltip);
    els.mascot.addEventListener('focus', showTooltip);
    els.mascot.addEventListener('blur', hideTooltip);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    // Auto-detect material visit toward Materi section completion.
    var materialId = detectMaterialFromPath();
    if (materialId) {
      setTimeout(function () { markMaterialVisited(materialId); }, 400);
    }

    // Auto-detect bottom-of-page sections (phase-2 case docs).
    var auto = detectAutoSectionFromPath();
    if (auto && auto.requireBottom) {
      armBottomTrigger(auto.section);
    }

    // Cross-tab sync
    window.addEventListener('storage', function (ev) {
      if (ev.key === SECTIONS_KEY) {
        state.completed = readSet(SECTIONS_KEY);
        applyStage(false);
        if (state.panelOpen) { closePanel(); openPanel(); }
      } else if (ev.key === MATERIALS_KEY) {
        state.materialsVisited = readSet(MATERIALS_KEY);
      } else if (ev.key === TIMERS_KEY) {
        state.timersCompleted = readSet(TIMERS_KEY);
      } else if (ev.key === POS_KEY) {
        state.pos = readPosition() || defaultPosition();
        applyPosition();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
