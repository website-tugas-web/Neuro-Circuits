// OSCE Simulator Engine — Fase 2 only, single-pick redesign (NEUAAA-258).
// 9-step OSCE Phase 2 visual novel with 3 randomised cases (Tetanus, TIA,
// Stroke). Pembukaan and Inform Consent are dialogue-only (Doctor Brain
// speaks, player presses Continue). All MCQ steps follow distractor-parity
// rules: player picks ONE option, the choice locks immediately, the next
// step renders, and the wrong/right verdict is held back until the final
// feedback card. No mid-quiz highlighting, no hints, no parentheses, no
// dashes in option copy.
//
// Anamnesis is the deliberate exception: the player can ask multiple
// questions, each picked question is removed from the choice list, and a
// persistent "Lanjut ke Inform Consent" button is offered alongside the
// remaining questions so the player decides when to proceed. Each wrong
// question still records a mistake; correctness for the step is judged on
// whether at least one of the picked questions was the key anamnesis Q.

// ============================================================
// 1. CONSTANTS
// ============================================================

var STEPS = [
  { id: 'intro',       label: '1. Pembukaan' },
  { id: 'anamnesis',   label: '2. Anamnesis' },
  { id: 'consent',     label: '3. Inform Consent' },
  { id: 'persiapan',   label: '4. Persiapan' },
  { id: 'pemeriksaan', label: '5. Pemeriksaan' },
  { id: 'penunjang',   label: '6. Pemeriksaan Penunjang' },
  { id: 'ddx',         label: '7. Diagnosis Banding' },
  { id: 'tatalaksana', label: '8. Tatalaksana & Farmakoterapi' },
  { id: 'edukasi',     label: '9. Edukasi' }
];

// Mascot frame mapping for Doctor Brain (0..7). Higher numbers tend toward
// "more mature/professional" frames; used for dialogue emotion only.
var MASCOT = {
  intro:        6,
  anamnesis:    7,
  consent:      5,
  persiapan:    6,
  pemeriksaan:  7,
  penunjang:    7,
  ddx:          5,
  tatalaksana:  6,
  edukasi:      5,
  pass:         7,
  fail:         3,
  thinking:     5
};

var DURATION_SECONDS = 14 * 60;

// ============================================================
// 2. STATE
// ============================================================

var osceState = null;
var currentCase = 0;
var timerInterval = null;

function initialState() {
  return {
    phase: 'start',
    stepIdx: 0,
    introLineIdx: 0,
    consentLineIdx: 0,
    picks: {},          // { stepId: choiceId } single-pick per step
    mistakes: [],       // [{ step, choice, consequence }]
    patientFace: 'normal',
    patientSpeech: '',
    doctorSpeech: '',
    doctorMascot: MASCOT.intro,
    timeLeft: DURATION_SECONDS,
    timeUp: false,
    finished: false,
    // Per-case shuffled option pools (computed at startCase()).
    shuffled: {}
  };
}

// ============================================================
// 3. HELPERS
// ============================================================

function activeCases() {
  if (typeof window !== 'undefined' && window.OSCE_CASES_FASE_2) {
    return window.OSCE_CASES_FASE_2;
  }
  return [];
}

function getCurrentCase() {
  var cases = activeCases();
  if (!cases || !cases[currentCase]) return null;
  return cases[currentCase];
}

function shuffle(arr) {
  var copy = (arr || []).slice();
  for (var i = copy.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = copy[i]; copy[i] = copy[j]; copy[j] = t;
  }
  return copy;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function fmtTime(seconds) {
  var m = Math.floor(seconds / 60);
  var s = seconds % 60;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

function nextStepLabel(currentIdx) {
  if (currentIdx + 1 >= STEPS.length) return 'Selesaikan Kasus →';
  return 'Lanjut ke ' + STEPS[currentIdx + 1].label.replace(/^\d+\.\s/, '') + ' →';
}

function recordMistake(stepLabel, choiceLabel, consequence) {
  osceState.mistakes.push({
    step: stepLabel || '',
    choice: choiceLabel || '',
    consequence: consequence || ''
  });
}

function stepLabel(idx) {
  if (idx < 0 || idx >= STEPS.length) return '';
  return STEPS[idx].label.replace(/^\d+\.\s/, '');
}

// ============================================================
// 4. SCENE RENDERING (patient + Doctor Brain)
// ============================================================

function patientSVG(face, speech) {
  face = face || 'normal';
  speech = speech || '';

  var faces = {
    normal: {
      leftBrow:  'M -12 -8 Q -7 -11 -2 -8',
      rightBrow: 'M 2 -8 Q 7 -11 12 -8',
      leftEye:  { cx: -7, cy: -4, r: 2.5 },
      rightEye: { cx: 7, cy: -4, r: 2.5 },
      mouth: 'M -8 6 Q 0 9 8 6',
      sweat: false
    },
    pain: {
      leftBrow:  'M -12 -6 Q -7 -11 -2 -6',
      rightBrow: 'M 2 -6 Q 7 -11 12 -6',
      leftEye:  { cx: -7, cy: -3, r: 1.8 },
      rightEye: { cx: 7, cy: -3, r: 1.8 },
      mouth: 'M -6 8 Q 0 5 6 8',
      sweat: true
    },
    worried: {
      leftBrow:  'M -12 -10 Q -7 -13 -2 -10',
      rightBrow: 'M 2 -10 Q 7 -13 12 -10',
      leftEye:  { cx: -7, cy: -4, r: 2.8 },
      rightEye: { cx: 7, cy: -4, r: 2.8 },
      mouth: 'M -5 7 Q 0 6 5 7',
      sweat: false
    },
    happy: {
      leftBrow:  'M -12 -9 Q -7 -11 -2 -9',
      rightBrow: 'M 2 -9 Q 7 -11 12 -9',
      leftEye:  { cx: -7, cy: -4, r: 2.5 },
      rightEye: { cx: 7, cy: -4, r: 2.5 },
      mouth: 'M -8 5 Q 0 12 8 5',
      sweat: false
    }
  };
  var f = faces[face] || faces.normal;

  var svg = '<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:120px;height:auto;">' +
    '<circle cx="60" cy="35" r="22" fill="#f4c8c8" stroke="#7B1224" stroke-width="1.5"/>' +
    '<path d="M 38 20 Q 35 8 60 5 Q 85 8 82 20" fill="#3d2817"/>' +
    '<g transform="translate(60,35)">' +
      '<path d="' + f.leftBrow + '" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
      '<path d="' + f.rightBrow + '" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
      '<circle cx="' + f.leftEye.cx + '" cy="' + f.leftEye.cy + '" r="' + f.leftEye.r + '" fill="#1a1a1a"/>' +
      '<circle cx="' + f.rightEye.cx + '" cy="' + f.rightEye.cy + '" r="' + f.rightEye.r + '" fill="#1a1a1a"/>' +
      '<path d="' + f.mouth + '" stroke="#7B1224" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
      (f.sweat ? '<circle cx="16" cy="4" r="2" fill="#87ceeb"/>' : '') +
    '</g>' +
    '<rect x="52" y="55" width="16" height="12" fill="#f4c8c8"/>' +
    '<path d="M 40 68 L 40 95 Q 40 105 50 110 L 70 110 Q 80 105 80 95 L 80 68 Z" fill="#f5f5f5" stroke="#7B1224" stroke-width="1.5"/>' +
    '<circle cx="60" cy="78" r="1.5" fill="#7B1224"/>' +
    '<circle cx="60" cy="88" r="1.5" fill="#7B1224"/>' +
    '<line x1="40" y1="75" x2="25" y2="100" stroke="#f4c8c8" stroke-width="5" stroke-linecap="round"/>' +
    '<line x1="80" y1="75" x2="95" y2="100" stroke="#f4c8c8" stroke-width="5" stroke-linecap="round"/>' +
    '<circle cx="25" cy="100" r="4" fill="#f4c8c8"/>' +
    '<circle cx="95" cy="100" r="4" fill="#f4c8c8"/>' +
    '<line x1="48" y1="110" x2="45" y2="160" stroke="#333" stroke-width="5" stroke-linecap="round"/>' +
    '<line x1="72" y1="110" x2="75" y2="160" stroke="#333" stroke-width="5" stroke-linecap="round"/>' +
    '<ellipse cx="45" cy="168" rx="6" ry="4" fill="#1a1a1a"/>' +
    '<ellipse cx="75" cy="168" rx="6" ry="4" fill="#1a1a1a"/>' +
  '</svg>';

  var bubble = '';
  if (speech) {
    bubble = '<div class="speech-bubble">' + escapeHtml(speech) + '<div class="speech-bubble__pointer"></div></div>';
  }

  return '<div class="patient-wrapper">' + bubble +
    '<div class="patient-figure">' + svg + '</div>' +
    '<div class="actor-label">Pasien</div></div>';
}

function doctorMascotEl(mascotIdx, speech) {
  var idx = (typeof mascotIdx === 'number' && mascotIdx >= 0 && mascotIdx <= 7) ? mascotIdx : MASCOT.intro;
  var bubble = '';
  if (speech) {
    bubble = '<div class="speech-bubble doctor">' + escapeHtml(speech) + '<div class="speech-bubble__pointer"></div></div>';
  }
  return '<div class="doctor-wrapper">' + bubble +
    '<div class="doctor-figure">' +
      '<img src="/images/brain-mascot-' + idx + '.svg" alt="Doctor Brain mascot" class="doctor-mascot-img"/>' +
    '</div>' +
    '<div class="actor-label">Dokter (Anda)</div></div>';
}

function renderScene() {
  return '<div class="osce-scene">' +
    '<div class="osce-scene__actor">' + patientSVG(osceState.patientFace, osceState.patientSpeech) + '</div>' +
    '<div class="osce-scene__actor">' + doctorMascotEl(osceState.doctorMascot, osceState.doctorSpeech) + '</div>' +
  '</div>';
}

// ============================================================
// 5. TIMER
// ============================================================

function startTimer() {
  stopTimer();
  timerInterval = setInterval(function () {
    if (!osceState || osceState.finished) { stopTimer(); return; }
    osceState.timeLeft = Math.max(0, osceState.timeLeft - 1);
    var el = document.getElementById('osceTimer');
    if (el) {
      el.textContent = fmtTime(osceState.timeLeft);
      if (osceState.timeLeft <= 60) el.classList.add('osce-timer--low');
    }
    if (osceState.timeLeft <= 0) {
      osceState.timeUp = true;
      stopTimer();
      finishCase();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

// ============================================================
// 6. HEADER (timer + step tracker, no per-stage verdict)
// ============================================================

function renderHeader() {
  var html = '<div class="osce-header">' +
    '<div class="osce-timer-box">' +
      '<span class="osce-timer-label">Sisa waktu</span>' +
      '<span class="osce-timer' + (osceState.timeLeft <= 60 ? ' osce-timer--low' : '') + '" id="osceTimer">' + fmtTime(osceState.timeLeft) + '</span>' +
    '</div>' +
    '<ol class="osce-checklist">';
  for (var i = 0; i < STEPS.length; i++) {
    var cls = '';
    if (osceState.phase === 'result' || i < osceState.stepIdx) cls = 'is-done';
    else if (i === osceState.stepIdx) cls = 'is-active';
    var done = (osceState.phase === 'result' || i < osceState.stepIdx);
    html += '<li class="osce-checklist__item ' + cls + '">' +
      '<span class="osce-checklist__dot">' + (done ? '✓' : (i + 1)) + '</span>' +
      '<span class="osce-checklist__label">' + STEPS[i].label.replace(/^\d+\.\s/, '') + '</span>' +
    '</li>';
  }
  html += '</ol></div>';
  return html;
}

// ============================================================
// 7. DIALOGUE-ONLY STEPS (Pembukaan + Inform Consent)
// ============================================================

function renderDialogueStep(stepId, lineIdxKey) {
  var c = getCurrentCase();
  var script = (c && c.dialogueScript && c.dialogueScript[stepId]) || {};
  var lines = script.lines || [];
  if (lines.length === 0) {
    // Defensive default if a case forgets to supply dialogue lines.
    lines = [{ doctor: 'Selamat pagi. Saya dokter yang bertugas hari ini.', patient: '' }];
  }

  var idx = Math.min(osceState[lineIdxKey] || 0, lines.length - 1);
  var line = lines[idx];

  osceState.doctorSpeech = line.doctor || '';
  osceState.patientSpeech = line.patient || '';
  osceState.patientFace = line.patientFace || 'normal';
  osceState.doctorMascot = (stepId === 'intro') ? MASCOT.intro : MASCOT.consent;

  var isLast = idx >= lines.length - 1;
  var buttonLabel = isLast ? nextStepLabel(osceState.stepIdx) : 'Lanjut →';
  var buttonHandler = isLast
    ? 'advanceStep()'
    : 'advanceDialogue(\'' + lineIdxKey + '\')';

  return renderScene() +
    '<div class="vn-dialogue-progress">Dialog ' + (idx + 1) + ' dari ' + lines.length + '</div>' +
    '<div class="vn-advance"><button class="btn-pill" onclick="' + buttonHandler + '">' + buttonLabel + '</button></div>';
}

window.advanceDialogue = function (lineIdxKey) {
  osceState[lineIdxKey] = (osceState[lineIdxKey] || 0) + 1;
  renderOSCE();
};

// ============================================================
// 8. SINGLE-PICK MCQ STEP (anamnesis, persiapan, pemeriksaan,
//     penunjang, ddx, tatalaksana, edukasi)
// ============================================================

function getStepConfig(stepId) {
  var c = getCurrentCase();
  if (!c || !c.dialogueScript) return null;
  return c.dialogueScript[stepId] || null;
}

function getStepChoices(stepId) {
  // Shuffled pool is computed at startCase() so the same order is shown
  // across renders within a case.
  if (osceState.shuffled && osceState.shuffled[stepId]) {
    return osceState.shuffled[stepId];
  }
  var cfg = getStepConfig(stepId);
  return (cfg && cfg.choices) ? cfg.choices : [];
}

function renderMcqStep(stepId) {
  var cfg = getStepConfig(stepId) || {};
  var choices = getStepChoices(stepId);
  var prompt = cfg.prompt || '';
  var picked = osceState.picks[stepId] || null;

  // Set doctor framing (the question), patient quiet.
  osceState.doctorSpeech = cfg.doctorPrompt || prompt;
  osceState.doctorMascot = MASCOT[stepId] || MASCOT.thinking;
  if (!picked) {
    osceState.patientFace = 'normal';
    osceState.patientSpeech = '';
  }

  // Render options — neutral styling, no verdict markers, no highlighting.
  var btns = '';
  for (var i = 0; i < choices.length; i++) {
    var ch = choices[i];
    var disabled = picked !== null ? ' disabled' : '';
    btns += '<button class="vn-choice' + (picked === ch.id ? ' is-selected' : '') + '"' +
      ' onclick="pickChoice(\'' + stepId + '\', \'' + ch.id + '\')"' + disabled + '>' +
      escapeHtml(ch.label) +
    '</button>';
  }

  // No mid-quiz feedback. After a pick, an Auto Continue button advances
  // (the pick handler also auto-advances via setTimeout so the player has
  // a beat to see their selection).
  var advanceBtn = '';
  if (picked !== null) {
    advanceBtn = '<div class="vn-advance"><button class="btn-pill" onclick="advanceStep()">' +
      nextStepLabel(osceState.stepIdx) + '</button></div>';
  }

  return renderScene() +
    '<div class="vn-prompt"><strong>' + escapeHtml(prompt) + '</strong></div>' +
    '<div class="vn-choices">' + btns + '</div>' +
    advanceBtn;
}

window.pickChoice = function (stepId, choiceId) {
  if (osceState.picks[stepId]) return; // lock — no retry, no changing
  var cfg = getStepConfig(stepId);
  if (!cfg) return;
  var choices = getStepChoices(stepId);
  var ch = null;
  for (var i = 0; i < choices.length; i++) if (choices[i].id === choiceId) { ch = choices[i]; break; }
  if (!ch) return;

  osceState.picks[stepId] = choiceId;

  // Patient reaction is muted — keep their face/speech neutral so the
  // verdict is not visually telegraphed. Only the final feedback card
  // reveals what was correct.
  osceState.patientSpeech = '';
  osceState.patientFace = 'normal';

  if (!ch.correct) {
    recordMistake(stepLabel(osceState.stepIdx), ch.label, ch.consequence || cfg.wrongConsequence || '');
  }

  renderOSCE();

  // Auto-advance after a brief pause so the lock visual reads as feedback.
  setTimeout(function () {
    if (osceState && !osceState.finished && osceState.picks[stepId] === choiceId) {
      advanceStep();
    }
  }, 650);
};

// ============================================================
// 8b. ANAMNESIS STEP (multi-pick: ask more or proceed)
// ============================================================

function renderAnamnesisStep() {
  var cfg = getStepConfig('anamnesis') || {};
  var allChoices = getStepChoices('anamnesis');
  var asked = osceState.picks.anamnesis || [];

  var askedSet = {};
  for (var i = 0; i < asked.length; i++) askedSet[asked[i]] = true;

  // Build "remaining" choices in shuffled order, minus what's been asked.
  var remaining = [];
  for (var j = 0; j < allChoices.length; j++) {
    if (!askedSet[allChoices[j].id]) remaining.push(allChoices[j]);
  }

  // Doctor framing: if the player has already asked at least one question,
  // surface the most recent one as the doctor's speech bubble so the player
  // can see "I just asked this". Otherwise show the framing prompt.
  if (asked.length > 0) {
    var lastId = asked[asked.length - 1];
    var lastLabel = '';
    for (var k = 0; k < allChoices.length; k++) {
      if (allChoices[k].id === lastId) { lastLabel = allChoices[k].label; break; }
    }
    osceState.doctorSpeech = lastLabel || cfg.doctorPrompt || cfg.prompt || '';
  } else {
    osceState.doctorSpeech = cfg.doctorPrompt || cfg.prompt || '';
  }
  osceState.doctorMascot = MASCOT.anamnesis;
  osceState.patientFace = 'normal';
  osceState.patientSpeech = '';

  var prompt = cfg.prompt || '';

  var askedHtml = '';
  if (asked.length > 0) {
    askedHtml = '<div class="vn-anamnesis-asked"><div class="vn-anamnesis-asked__label">Sudah ditanyakan</div><ol>';
    for (var a = 0; a < asked.length; a++) {
      var aid = asked[a];
      var alabel = '';
      for (var x = 0; x < allChoices.length; x++) {
        if (allChoices[x].id === aid) { alabel = allChoices[x].label; break; }
      }
      askedHtml += '<li>' + escapeHtml(alabel) + '</li>';
    }
    askedHtml += '</ol></div>';
  }

  var btns = '';
  for (var r = 0; r < remaining.length; r++) {
    var ch = remaining[r];
    btns += '<button class="vn-choice" onclick="pickAnamnesis(\'' + ch.id + '\')">' +
      escapeHtml(ch.label) +
    '</button>';
  }

  // Persistent "proceed" button — the player chooses when to move on.
  var proceedBtn = '<div class="vn-advance"><button class="btn-pill" onclick="advanceStep()">' +
    nextStepLabel(osceState.stepIdx) + '</button></div>';

  return renderScene() +
    '<div class="vn-prompt"><strong>' + escapeHtml(prompt) + '</strong></div>' +
    askedHtml +
    '<div class="vn-choices">' + btns + '</div>' +
    proceedBtn;
}

window.pickAnamnesis = function (choiceId) {
  if (!osceState.picks.anamnesis) osceState.picks.anamnesis = [];
  // Idempotent — can't re-pick the same question.
  for (var i = 0; i < osceState.picks.anamnesis.length; i++) {
    if (osceState.picks.anamnesis[i] === choiceId) return;
  }
  var cfg = getStepConfig('anamnesis');
  if (!cfg) return;
  var choices = getStepChoices('anamnesis');
  var ch = null;
  for (var j = 0; j < choices.length; j++) if (choices[j].id === choiceId) { ch = choices[j]; break; }
  if (!ch) return;

  osceState.picks.anamnesis.push(choiceId);

  if (!ch.correct) {
    recordMistake(stepLabel(osceState.stepIdx), ch.label, ch.consequence || cfg.wrongConsequence || '');
  }

  renderOSCE();
};

// ============================================================
// 9. ADVANCE / FINISH
// ============================================================

window.advanceStep = function () {
  if (osceState.stepIdx >= STEPS.length - 1) { finishCase(); return; }
  osceState.stepIdx++;
  osceState.doctorSpeech = '';
  osceState.patientSpeech = '';
  osceState.patientFace = 'normal';
  renderOSCE();
};

function finishCase() {
  if (osceState.finished) return;
  osceState.finished = true;
  stopTimer();

  osceState.phase = 'result';
  renderOSCE();

  if (window.NeuroPet && typeof window.NeuroPet.markSectionComplete === 'function') {
    window.NeuroPet.markSectionComplete('quiz-fase-2');
  }
}

// ============================================================
// 10. RESULT CARD (single place where verdicts surface)
// ============================================================

function renderResult() {
  var c = getCurrentCase();
  var totalSteps = 0;
  var correctSteps = 0;

  // Count correctness per MCQ step (skip dialogue-only intro/consent).
  for (var i = 0; i < STEPS.length; i++) {
    var s = STEPS[i];
    if (s.id === 'intro' || s.id === 'consent') continue;
    totalSteps++;
    var choices = (c && c.dialogueScript && c.dialogueScript[s.id] && c.dialogueScript[s.id].choices) || [];
    if (s.id === 'anamnesis') {
      var aPicks = osceState.picks.anamnesis || [];
      var hit = false;
      for (var p = 0; p < aPicks.length && !hit; p++) {
        for (var q = 0; q < choices.length; q++) {
          if (choices[q].id === aPicks[p] && choices[q].correct) { hit = true; break; }
        }
      }
      if (hit) correctSteps++;
      continue;
    }
    var pickId = osceState.picks[s.id];
    if (!pickId) continue;
    for (var j = 0; j < choices.length; j++) {
      if (choices[j].id === pickId && choices[j].correct) { correctSteps++; break; }
    }
  }

  var pct = totalSteps > 0 ? Math.round((correctSteps / totalSteps) * 100) : 0;
  if (osceState.timeUp) pct = Math.max(0, pct - 10);
  var pass = pct >= 70 && osceState.mistakes.length === 0
    ? true
    : (pct >= 70 && osceState.mistakes.length <= 1);

  var bg = pass ? '#e8f5e9' : '#ffebee';
  var col = pass ? '#4caf50' : '#f44336';
  var headline = osceState.timeUp ? 'Waktu Habis' : (pass ? 'Kasus Selesai — Kompeten' : 'Kasus Selesai — Perlu Perbaikan');

  osceState.patientFace = pass ? 'happy' : 'worried';
  osceState.doctorMascot = pass ? MASCOT.pass : MASCOT.fail;
  osceState.doctorSpeech = pass ? 'Kerja yang baik!' : 'Mari kita tinjau kembali bersama.';
  osceState.patientSpeech = '';

  var mistakesHtml = '';
  if (osceState.mistakes.length > 0) {
    mistakesHtml += '<h4 style="margin:1.25rem 0 .5rem;color:#7B1224;">Catatan Pilihan yang Kurang Tepat</h4>' +
      '<ul class="osce-eval-penalty">';
    for (var k = 0; k < osceState.mistakes.length; k++) {
      var m = osceState.mistakes[k];
      mistakesHtml += '<li>' +
        '<strong>' + escapeHtml(m.step) + ':</strong> ' + escapeHtml(m.choice) +
        (m.consequence ? '<div class="finding-explanation">' + escapeHtml(m.consequence) + '</div>' : '') +
      '</li>';
    }
    mistakesHtml += '</ul>';
  } else {
    mistakesHtml = '<p style="color:#2e7d32;margin:1rem 0;text-align:center;">Tidak ada kesalahan tercatat. Semua pilihan tepat.</p>';
  }

  // Always show the correct answer per step so the player learns the key.
  var keyHtml = '<h4 style="margin:1.25rem 0 .5rem;color:#7B1224;">Kunci Jawaban</h4><ul class="osce-eval-key">';
  for (var s2 = 0; s2 < STEPS.length; s2++) {
    var stp = STEPS[s2];
    if (stp.id === 'intro' || stp.id === 'consent') continue;
    var ccfg = (c && c.dialogueScript && c.dialogueScript[stp.id]) || {};
    var clist = ccfg.choices || [];
    var correctLabel = '';
    for (var cc = 0; cc < clist.length; cc++) {
      if (clist[cc].correct) { correctLabel = clist[cc].label; break; }
    }
    if (correctLabel) {
      keyHtml += '<li><strong>' + escapeHtml(stp.label.replace(/^\d+\.\s/, '')) + ':</strong> ' + escapeHtml(correctLabel) + '</li>';
    }
  }
  keyHtml += '</ul>';

  return renderScene() +
    '<div class="osce-eval">' +
      '<h3 style="color:#7B1224;text-align:center;margin:0 0 .5rem;">' + escapeHtml(headline) + '</h3>' +
      '<p style="text-align:center;margin:.25rem 0 1rem;color:#555;">Kasus: <strong>' + escapeHtml(c.material || c.id || '') + '</strong></p>' +
      '<div class="osce-eval__score" style="background:' + bg + ';">' +
        '<div style="font-size:3rem;font-weight:bold;color:' + col + ';margin-bottom:.5rem;">' + pct + '%</div>' +
        '<div class="osce-eval__breakdown">' +
          '<span>Pilihan tepat: ' + correctSteps + '/' + totalSteps + '</span>' +
          '<span>Sisa waktu: ' + fmtTime(osceState.timeLeft) + '</span>' +
          '<span>Catatan: ' + osceState.mistakes.length + '</span>' +
        '</div>' +
      '</div>' +
      mistakesHtml +
      keyHtml +
      '<div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-top:1.5rem;">' +
        '<button class="btn-pill" onclick="restartCase()">Coba Lagi</button>' +
        '<button class="btn-pill" onclick="nextCase()" style="background:transparent;color:#7B1224;border:2px solid #7B1224;">Kasus Berikutnya</button>' +
      '</div>' +
    '</div>';
}

// ============================================================
// 11. MAIN RENDER
// ============================================================

function renderOSCE() {
  var el = document.getElementById('osceApp');
  if (!el) return;

  if (!osceState) osceState = initialState();

  if (osceState.phase === 'start') {
    var stepList = 'Pembukaan, Anamnesis, Inform Consent, Persiapan, Pemeriksaan, Pemeriksaan Penunjang, Diagnosis Banding, Tatalaksana &amp; Farmakoterapi, dan Edukasi';
    var minutes = Math.round(DURATION_SECONDS / 60);
    el.innerHTML = '<div class="osce-start">' +
      '<h2 class="osce-start__title">Simulasi OSCE Fase 2</h2>' +
      '<p class="osce-start__lead">Visual novel interaktif: 9 langkah OSCE (' + stepList + '). Kasus dipilih acak dari Tetanus, TIA, atau Stroke. Waktu ' + minutes + ' menit per kasus.</p>' +
      '<button class="btn-pill" onclick="startSimulation()">Mulai Kasus</button>' +
    '</div>';
    return;
  }

  var c = getCurrentCase();
  if (!c) { el.innerHTML = '<p style="color:#7B1224;text-align:center;font-size:1.2rem;">Belum ada kasus tersedia.</p>'; return; }

  var body = '';
  if (osceState.phase === 'result') {
    body = renderResult();
  } else {
    var stepId = STEPS[osceState.stepIdx].id;
    if (stepId === 'intro')          body = renderDialogueStep('intro', 'introLineIdx');
    else if (stepId === 'consent')   body = renderDialogueStep('consent', 'consentLineIdx');
    else if (stepId === 'anamnesis') body = renderAnamnesisStep();
    else                             body = renderMcqStep(stepId);
  }

  el.innerHTML = renderHeader() + '<div class="osce-step-body">' + body + '</div>';
}

// ============================================================
// 12. LIFECYCLE
// ============================================================

function startCase() {
  osceState = initialState();
  osceState.phase = 'playing';
  var c = getCurrentCase();
  if (!c) return;

  // Pre-shuffle every MCQ pool so option order varies per attempt but is
  // stable within a render cycle.
  var mcqSteps = ['anamnesis', 'persiapan', 'pemeriksaan', 'penunjang', 'ddx', 'tatalaksana', 'edukasi'];
  for (var i = 0; i < mcqSteps.length; i++) {
    var sid = mcqSteps[i];
    var cfg = c.dialogueScript && c.dialogueScript[sid];
    if (cfg && cfg.choices) osceState.shuffled[sid] = shuffle(cfg.choices);
  }
  startTimer();
  renderOSCE();
}

window.startSimulation = function () {
  var cases = activeCases();
  if (cases && cases.length > 0) {
    currentCase = Math.floor(Math.random() * cases.length);
  }
  startCase();
};

window.restartCase = function () {
  stopTimer();
  startCase();
};

window.nextCase = function () {
  var cases = activeCases();
  if (!cases || cases.length <= 1) { alert('Tidak ada kasus lagi.'); return; }
  var prev = currentCase;
  while (currentCase === prev) {
    currentCase = Math.floor(Math.random() * cases.length);
  }
  stopTimer();
  startCase();
};

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('osceApp')) renderOSCE();
});
