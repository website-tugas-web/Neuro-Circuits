// OSCE Simulator Engine — Visual Novel rebuild (NEUAAA-238)
// 7-step canonical OSCE flow with Doctor Brain mascot, branching dialogue,
// MCQ + multi-select interactions, timer, checklist tracker, evaluation card.

// ============================================================
// 1. CONSTANTS
// ============================================================

var STEPS = [
  { id: 'intro',       label: '1. Pembukaan' },
  { id: 'anamnesis',   label: '2. Anamnesis' },
  { id: 'consent',     label: '3. Inform Consent' },
  { id: 'persiapan',   label: '4. Persiapan' },
  { id: 'pemeriksaan', label: '5. Pemeriksaan' },
  { id: 'pelaporan',   label: '6. Pelaporan Hasil' },
  { id: 'edukasi',     label: '7. Edukasi' }
];

// Mascot frame mapping for Doctor Brain — 8 frames available (0..7).
// Higher numbers = more mature/professional. Used for emotion/dialogue states.
var MASCOT = {
  intro:        6, // Junior Doctor — friendly greeting
  anamnesis:    7, // Doctor — focused listening
  consent:      5, // Confident med student — explanatory
  persiapan:    6, // Junior Doctor — preparing
  pemeriksaan:  7, // Doctor — actively examining
  pelaporan:    6, // Junior Doctor — reporting back
  edukasi:      5, // Confident med student — teaching
  pass:         7, // proud Doctor
  fail:         3, // Teen — uncertain / learning
  thinking:     5
};

var DEFAULT_DURATION_SECONDS = 600; // 10-minute timer

// Default anamnesis question pool (case-agnostic OPQRST + RPD/RPK + lifestyle).
var DEFAULT_ANAMNESIS_QUESTIONS = [
  { id: 'q-onset',     label: 'Sejak kapan keluhan ini muncul?',                                relevant: true,  key: 'anam-onset',     reply: 'Beberapa hari terakhir, dok.' },
  { id: 'q-location',  label: 'Di bagian tubuh mana keluhan dirasakan?',                        relevant: true,  key: 'anam-location',  reply: 'Seperti yang saya sampaikan tadi, dok.' },
  { id: 'q-duration',  label: 'Apakah keluhan hilang timbul atau terus-menerus?',               relevant: true,  key: 'anam-duration',  reply: 'Terus-menerus, semakin lama semakin terasa.' },
  { id: 'q-character', label: 'Bagaimana karakter keluhan — lemah, kebas, atau nyeri?',         relevant: true,  key: 'anam-character', reply: 'Lebih ke arah lemah dan sulit digerakkan, dok.' },
  { id: 'q-aggrav',    label: 'Adakah faktor yang memperparah atau memperingan keluhan?',       relevant: true,  key: 'anam-aggrav',    reply: 'Lebih berat saat saya beraktivitas berat.' },
  { id: 'q-rpd',       label: 'Riwayat penyakit dahulu — hipertensi, diabetes, stroke, trauma?', relevant: true, key: 'anam-rpd',       reply: 'Saya darah tinggi, dok. Tidak rutin minum obat.' },
  { id: 'q-rpk',       label: 'Riwayat keluarga — apakah ada yang pernah mengalami serupa?',     relevant: true, key: 'anam-rpk',       reply: 'Bapak saya pernah stroke ringan.' },
  { id: 'q-pola',      label: 'Bagaimana pola hidup — merokok, alkohol, olahraga?',              relevant: true, key: 'anam-pola',      reply: 'Saya merokok, dok. Olahraga jarang.' },
  { id: 'q-irrelevant-food',   label: 'Apakah Bapak/Ibu alergi makanan laut?',                   relevant: false, reply: 'Tidak, dok... (pasien tampak bingung)',  penalty: 'Pertanyaan tidak relevan untuk keluhan neurologis.' },
  { id: 'q-irrelevant-pet',    label: 'Apakah Bapak/Ibu memelihara hewan di rumah?',             relevant: false, reply: 'Tidak ada hubungannya, dok.',           penalty: 'Pertanyaan tidak relevan.' }
];

var DEFAULT_INTRO_CHOICES = [
  {
    id: 'intro-warm',
    label: 'Selamat pagi Pak/Bu. Perkenalkan, saya dokter yang bertugas hari ini. Boleh saya tahu nama, usia, dan pekerjaan Anda?',
    good: true,
    key: 'intro-greeting',
    reply: 'Selamat pagi dok. Nama saya Pak Joko, 55 tahun, sopir taksi.',
    patientFace: 'normal'
  },
  {
    id: 'intro-skip',
    label: 'Pak/Bu, langsung saja — ada keluhan apa hari ini?',
    good: false,
    reply: 'Eh... iya dok. (pasien tampak agak terkejut karena tidak diperkenalkan)',
    patientFace: 'worried',
    penalty: 'Tidak ada salam dan perkenalan diri.'
  }
];

var DEFAULT_CONSENT_OPTIONS = [
  {
    id: 'consent-good',
    label: '"Selanjutnya saya akan melakukan pemeriksaan pergerakan otot dan refleks. Mungkin nanti sedikit kurang nyaman, tapi akan saya lakukan sebaik mungkin. Apakah Bapak/Ibu bersedia?"',
    correct: true,
    key: 'consent-explained',
    reply: 'Iya dok, saya bersedia. Silakan.',
    patientFace: 'normal'
  },
  {
    id: 'consent-curt',
    label: '"Pak/Bu, saya periksa sekarang ya."',
    correct: false,
    reply: 'Eh... iya dok. (pasien terlihat ragu)',
    patientFace: 'worried',
    penalty: 'Tidak menjelaskan prosedur dengan jelas.'
  },
  {
    id: 'consent-skip',
    label: '(Langsung memeriksa tanpa meminta persetujuan)',
    correct: false,
    reply: '(pasien terlihat tidak nyaman)',
    patientFace: 'worried',
    penalty: 'Pelanggaran etika — tidak ada inform consent.'
  }
];

var DEFAULT_PREP_ITEMS = [
  { id: 'prep-handwash', label: 'Cuci tangan 6 langkah WHO',                       correct: true, key: 'prep-handwash', reply: 'Baik, dok.' },
  { id: 'prep-tools',    label: 'Siapkan palu refleks dan alcuta',                 correct: true, key: 'prep-tools',    reply: 'Saya tunggu, dok.' },
  { id: 'prep-position', label: 'Atur posisi pasien (berbaring di bed pemeriksaan)', correct: true, key: 'prep-position', reply: 'Iya dok. (berbaring)' },
  { id: 'prep-skip',     label: 'Mulai pemeriksaan tanpa cuci tangan',             correct: false, penalty: 'Tidak cuci tangan — risiko infeksi nosokomial.', patientFace: 'worried', reply: '(pasien terlihat khawatir)' }
];

var DEFAULT_REPORT_PATIENT = [
  { id: 'rep-clear',  label: 'Sampaikan hasil pemeriksaan kepada pasien dengan bahasa awam dan rencana rujukan jika perlu', correct: true, key: 'rep-patient', reply: 'Baik dok, terima kasih atas penjelasannya.', patientFace: 'normal' },
  { id: 'rep-tech',   label: 'Sampaikan istilah medis penuh (UMN/LMN/etc) tanpa penjelasan',                                correct: false, reply: 'Dok, saya tidak mengerti...',          patientFace: 'worried', penalty: 'Bahasa terlalu teknis untuk pasien.' },
  { id: 'rep-vague',  label: 'Bilang "Bapak/Ibu sehat saja" walaupun ada hasil abnormal',                                   correct: false, reply: '(pasien lega tetapi tidak mendapat tindak lanjut)', patientFace: 'normal', penalty: 'Hasil abnormal tidak dilaporkan — pasien terlewat rujukan.' }
];

var DEFAULT_EDU_ITEMS = [
  { id: 'edu-cerdik',   label: 'Edukasi CERDIK (Cek kesehatan, Enyahkan rokok, Rajin aktivitas, Diet seimbang, Istirahat, Kelola stres)', correct: true, key: 'edu-cerdik' },
  { id: 'edu-control',  label: 'Anjurkan kontrol rutin ke dokter spesialis saraf',     correct: true, key: 'edu-control' },
  { id: 'edu-trauma',   label: 'Hindari trauma kepala dan tulang belakang',            correct: true, key: 'edu-trauma' },
  { id: 'edu-bp',       label: 'Kontrol tekanan darah secara rutin',                   correct: true, key: 'edu-bp' },
  { id: 'edu-bad-noctrl',label: 'Pasien tidak perlu kontrol selama tidak ada keluhan', correct: false, penalty: 'Edukasi salah — kontrol tetap dibutuhkan.' }
];

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
    introChosenId: null,
    anamnesisAskedIds: [],
    consentChosenId: null,
    prepSelectedIds: [],
    examinedIds: [],
    examLastFinding: '',
    examLastWrong: '',
    diagnosisChosenId: null,
    reportChosenId: null,
    eduSelectedIds: [],
    patientFace: 'normal',
    patientSpeech: '',
    doctorSpeech: '',
    doctorMascot: MASCOT.intro,
    checklistDone: {},
    checklistMissed: [],
    penalties: [],
    score: 0,
    timeLeft: DEFAULT_DURATION_SECONDS,
    timeUp: false,
    finished: false,
    diagnosisCorrect: false,
    _checklistTotal: 0,
    _checklistDoneCount: 0,
    shuffledExams: [],
    shuffledDiagnoses: []
  };
}

// ============================================================
// 3. HELPERS
// ============================================================

function getCurrentCase() {
  if (typeof OSCE_CASES === 'undefined' || !OSCE_CASES[currentCase]) return null;
  return OSCE_CASES[currentCase];
}

function getScript(stepKey) {
  var c = getCurrentCase();
  if (!c || !c.dialogueScript) return null;
  return c.dialogueScript[stepKey] || null;
}

function shuffle(arr) {
  var copy = arr.slice();
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

function addPenalty(label, points) {
  osceState.penalties.push({ step: STEPS[osceState.stepIdx].label, label: label, points: points });
}

function tickChecklist(key) {
  if (!key) return;
  osceState.checklistDone[key] = true;
}

// ============================================================
// 4. MASCOT + SCENE RENDERING
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
// 6. HEADER (timer + checklist)
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
// 7. STEP RENDERERS
// ============================================================

function renderIntroStep() {
  var c = getCurrentCase();
  var script = getScript('intro');
  var choices = (script && script.choices) ? script.choices : DEFAULT_INTRO_CHOICES;
  var prompt = (script && script.prompt) ? script.prompt : 'Bagaimana Anda akan membuka pertemuan dengan pasien?';

  if (osceState.introChosenId === null && !osceState.patientSpeech) {
    osceState.patientSpeech = c.complaint || '';
    osceState.patientFace = 'normal';
    osceState.doctorMascot = MASCOT.intro;
    osceState.doctorSpeech = (script && script.doctorOpening) || '';
  }

  var btns = '';
  for (var i = 0; i < choices.length; i++) {
    var ch = choices[i];
    var sel = osceState.introChosenId === ch.id;
    btns += '<button class="vn-choice' + (sel ? ' is-selected' : '') + '" onclick="chooseIntro(\'' + ch.id + '\')"' +
      (osceState.introChosenId !== null ? ' disabled' : '') + '>' + escapeHtml(ch.label) + '</button>';
  }

  var advanceBtn = (osceState.introChosenId !== null)
    ? '<div class="vn-advance"><button class="btn-pill" onclick="advanceStep()">Lanjut ke Anamnesis →</button></div>'
    : '';

  return renderScene() +
    '<div class="vn-prompt"><strong>' + escapeHtml(prompt) + '</strong></div>' +
    '<div class="vn-choices">' + btns + '</div>' +
    advanceBtn;
}

window.chooseIntro = function (id) {
  if (osceState.introChosenId !== null) return;
  var script = getScript('intro');
  var choices = (script && script.choices) ? script.choices : DEFAULT_INTRO_CHOICES;
  var ch = null;
  for (var i = 0; i < choices.length; i++) if (choices[i].id === id) { ch = choices[i]; break; }
  if (!ch) return;

  osceState.introChosenId = id;
  osceState.doctorSpeech = ch.label;
  osceState.patientSpeech = ch.reply || '';
  osceState.patientFace = ch.patientFace || 'normal';
  osceState.doctorMascot = ch.good ? MASCOT.intro : MASCOT.fail;
  if (ch.good) tickChecklist(ch.key || 'intro-greeting');
  if (!ch.good && ch.penalty) addPenalty(ch.penalty, 5);
  renderOSCE();
};

function renderAnamnesisStep() {
  var script = getScript('anamnesis');
  var pool = (script && script.questions) ? script.questions : DEFAULT_ANAMNESIS_QUESTIONS;
  var minRelevant = (script && script.minRelevant) || 4;

  var relevantAsked = 0;
  for (var i = 0; i < osceState.anamnesisAskedIds.length; i++) {
    for (var j = 0; j < pool.length; j++) {
      if (pool[j].id === osceState.anamnesisAskedIds[i] && pool[j].relevant) { relevantAsked++; break; }
    }
  }
  var canAdvance = relevantAsked >= minRelevant;

  var btns = '';
  for (var k = 0; k < pool.length; k++) {
    var q = pool[k];
    var asked = osceState.anamnesisAskedIds.indexOf(q.id) !== -1;
    var cls = 'vn-mcq';
    if (asked) cls += q.relevant ? ' is-correct' : ' is-wrong';
    btns += '<button class="' + cls + '" onclick="askAnamnesis(\'' + q.id + '\')"' + (asked ? ' disabled' : '') + '>' +
      (asked ? (q.relevant ? '✓ ' : '✗ ') : '') + escapeHtml(q.label) + '</button>';
  }

  var hint = canAdvance
    ? '<div class="vn-advance"><button class="btn-pill" onclick="advanceStep()">Lanjut ke Inform Consent →</button></div>'
    : '<div class="vn-helper">Tanyakan minimal <strong>' + minRelevant + '</strong> pertanyaan yang relevan untuk melanjutkan (saat ini ' + relevantAsked + '/' + minRelevant + ').</div>';

  return renderScene() +
    '<div class="vn-prompt"><strong>Pilih pertanyaan anamnesis:</strong></div>' +
    '<div class="vn-mcq-grid">' + btns + '</div>' +
    hint;
}

window.askAnamnesis = function (id) {
  var script = getScript('anamnesis');
  var pool = (script && script.questions) ? script.questions : DEFAULT_ANAMNESIS_QUESTIONS;
  var q = null;
  for (var i = 0; i < pool.length; i++) if (pool[i].id === id) { q = pool[i]; break; }
  if (!q || osceState.anamnesisAskedIds.indexOf(id) !== -1) return;

  osceState.anamnesisAskedIds.push(id);
  osceState.doctorSpeech = q.label;
  osceState.patientSpeech = q.reply || '...';
  osceState.patientFace = q.patientFace || (q.relevant ? 'normal' : 'worried');
  osceState.doctorMascot = q.relevant ? MASCOT.anamnesis : MASCOT.thinking;
  if (q.relevant && q.key) tickChecklist(q.key);
  if (!q.relevant && q.penalty) addPenalty(q.penalty, 3);
  renderOSCE();
};

function renderConsentStep() {
  var script = getScript('consent');
  var options = (script && script.options) ? script.options : DEFAULT_CONSENT_OPTIONS;
  var prompt = (script && script.prompt) || 'Pilih cara terbaik menyampaikan inform consent:';

  if (osceState.consentChosenId === null && !osceState.doctorSpeech) {
    osceState.doctorSpeech = (script && script.doctorIntro) || 'Saya perlu menjelaskan prosedur dan meminta persetujuan terlebih dahulu.';
    osceState.patientFace = 'normal';
    osceState.patientSpeech = '';
    osceState.doctorMascot = MASCOT.consent;
  }

  var btns = '';
  for (var i = 0; i < options.length; i++) {
    var op = options[i];
    var sel = osceState.consentChosenId === op.id;
    btns += '<button class="vn-choice' + (sel ? ' is-selected' : '') + '" onclick="chooseConsent(\'' + op.id + '\')"' +
      (osceState.consentChosenId !== null ? ' disabled' : '') + '>' + escapeHtml(op.label) + '</button>';
  }

  var advance = (osceState.consentChosenId !== null)
    ? '<div class="vn-advance"><button class="btn-pill" onclick="advanceStep()">Lanjut ke Persiapan →</button></div>'
    : '';

  return renderScene() +
    '<div class="vn-prompt"><strong>' + escapeHtml(prompt) + '</strong></div>' +
    '<div class="vn-choices">' + btns + '</div>' +
    advance;
}

window.chooseConsent = function (id) {
  if (osceState.consentChosenId !== null) return;
  var script = getScript('consent');
  var options = (script && script.options) ? script.options : DEFAULT_CONSENT_OPTIONS;
  var op = null;
  for (var i = 0; i < options.length; i++) if (options[i].id === id) { op = options[i]; break; }
  if (!op) return;

  osceState.consentChosenId = id;
  osceState.doctorSpeech = op.label;
  osceState.patientSpeech = op.reply || '';
  osceState.patientFace = op.patientFace || (op.correct ? 'normal' : 'worried');
  osceState.doctorMascot = op.correct ? MASCOT.consent : MASCOT.fail;
  if (op.correct && op.key) tickChecklist(op.key);
  if (!op.correct && op.penalty) addPenalty(op.penalty, 5);
  renderOSCE();
};

function renderPrepStep() {
  var script = getScript('persiapan');
  var items = (script && script.items) ? script.items : DEFAULT_PREP_ITEMS;
  var minRelevant = (script && script.minRelevant) || 3;

  var relevantPicked = 0;
  for (var i = 0; i < osceState.prepSelectedIds.length; i++) {
    for (var j = 0; j < items.length; j++) {
      if (items[j].id === osceState.prepSelectedIds[i] && items[j].correct) { relevantPicked++; break; }
    }
  }
  var canAdvance = relevantPicked >= minRelevant;

  var btns = '';
  for (var k = 0; k < items.length; k++) {
    var it = items[k];
    var picked = osceState.prepSelectedIds.indexOf(it.id) !== -1;
    var cls = 'vn-mcq';
    if (picked) cls += it.correct ? ' is-correct' : ' is-wrong';
    btns += '<button class="' + cls + '" onclick="pickPrep(\'' + it.id + '\')"' + (picked ? ' disabled' : '') + '>' +
      (picked ? (it.correct ? '✓ ' : '✗ ') : '') + escapeHtml(it.label) + '</button>';
  }

  var hint = canAdvance
    ? '<div class="vn-advance"><button class="btn-pill" onclick="advanceStep()">Lanjut ke Pemeriksaan →</button></div>'
    : '<div class="vn-helper">Lakukan minimal <strong>' + minRelevant + '</strong> persiapan yang benar (saat ini ' + relevantPicked + '/' + minRelevant + ').</div>';

  return renderScene() +
    '<div class="vn-prompt"><strong>Pilih langkah persiapan:</strong></div>' +
    '<div class="vn-mcq-grid">' + btns + '</div>' +
    hint;
}

window.pickPrep = function (id) {
  var script = getScript('persiapan');
  var items = (script && script.items) ? script.items : DEFAULT_PREP_ITEMS;
  var it = null;
  for (var i = 0; i < items.length; i++) if (items[i].id === id) { it = items[i]; break; }
  if (!it || osceState.prepSelectedIds.indexOf(id) !== -1) return;

  osceState.prepSelectedIds.push(id);
  osceState.doctorSpeech = it.label;
  osceState.patientSpeech = it.reply || '';
  osceState.patientFace = it.patientFace || (it.correct ? 'normal' : 'worried');
  osceState.doctorMascot = it.correct ? MASCOT.persiapan : MASCOT.fail;
  if (it.correct && it.key) tickChecklist(it.key);
  if (!it.correct && it.penalty) addPenalty(it.penalty, 5);
  renderOSCE();
};

function renderExamStep() {
  var c = getCurrentCase();
  var min = c.minExamsRequired || 3;
  var done = osceState.examinedIds.length;
  var canAdvance = done >= min;
  var exams = osceState.shuffledExams.length > 0 ? osceState.shuffledExams : (c.exams || []);

  if (!osceState.doctorSpeech && osceState.examinedIds.length === 0) {
    osceState.doctorSpeech = 'Saya akan melakukan pemeriksaan fisik sekarang.';
    osceState.doctorMascot = MASCOT.pemeriksaan;
  }

  var finding = '';
  if (osceState.examLastFinding) {
    finding = '<div class="finding-box">' +
      '<strong style="color:#7B1224;">Hasil Temuan:</strong>' +
      '<p style="margin:.5rem 0 0;color:#555;">' + escapeHtml(osceState.examLastFinding) + '</p>' +
      (osceState.examLastWrong ? '<p class="finding-explanation">' + escapeHtml(osceState.examLastWrong) + '</p>' : '') +
    '</div>';
  }

  var btns = '';
  for (var i = 0; i < exams.length; i++) {
    var ex = exams[i];
    var used = osceState.examinedIds.indexOf(ex.id) !== -1;
    var mark = '', wrongClass = '';
    if (used) {
      if (ex.correct) mark = '✓ ';
      else { mark = '✗ '; wrongClass = ' wrong'; }
    }
    btns += '<button class="exam-btn' + (used ? ' already' : '') + wrongClass + '" onclick="doExam(\'' + ex.id + '\')"' +
      (used ? ' disabled' : '') + '>' + mark + escapeHtml(ex.name) + '</button>';
  }

  var advance = canAdvance
    ? '<div class="vn-advance"><button class="btn-pill" onclick="advanceStep()">Lanjut ke Pelaporan Hasil →</button></div>'
    : '<div class="vn-helper">Selesaikan <strong>' + (min - done) + '</strong> pemeriksaan lagi untuk melanjutkan.</div>';

  return renderScene() +
    '<div class="vn-prompt"><strong>Pilih pemeriksaan yang akan dilakukan:</strong></div>' +
    '<div class="vn-exam-grid">' + btns + '</div>' +
    finding +
    '<div class="vn-progress-line">Pemeriksaan selesai: <strong>' + done + '/' + min + '</strong></div>' +
    advance;
}

window.doExam = function (examId) {
  var c = getCurrentCase();
  if (!c) return;
  if (osceState.examinedIds.indexOf(examId) !== -1) return;

  var exam = null;
  for (var i = 0; i < c.exams.length; i++) if (c.exams[i].id === examId) { exam = c.exams[i]; break; }
  if (!exam) return;

  osceState.examinedIds.push(examId);
  osceState.doctorSpeech = exam.doctorPrompt || 'Saya periksa sekarang.';
  osceState.patientSpeech = exam.patientSpeech || '';
  osceState.patientFace = exam.patientFace || 'normal';
  osceState.examLastFinding = exam.finding || '';
  osceState.examLastWrong = '';
  osceState.doctorMascot = exam.correct ? MASCOT.pemeriksaan : MASCOT.fail;

  if (exam.correct) tickChecklist('exam-' + exam.id);
  else if (exam.wrongExplanation) addPenalty(exam.wrongExplanation, 4);

  renderOSCE();

  setTimeout(function () {
    if (!exam.correct && exam.wrongExplanation) {
      osceState.doctorSpeech = 'Hasil pemeriksaan sudah dicatat.';
      osceState.examLastFinding = exam.finding || '-';
      osceState.examLastWrong = exam.wrongExplanation;
    } else {
      osceState.doctorSpeech = 'Saya temukan: ' + (exam.finding || '-');
      osceState.examLastWrong = '';
    }
    if (exam.patientFace === 'pain') {
      osceState.patientFace = 'normal';
      osceState.patientSpeech = '';
    }
    renderOSCE();
  }, 600);
};

function renderReportStep() {
  var c = getCurrentCase();
  var script = getScript('pelaporan');
  var options = (script && script.reportOptions) ? script.reportOptions : DEFAULT_REPORT_PATIENT;
  var diagnoses = osceState.shuffledDiagnoses.length > 0 ? osceState.shuffledDiagnoses : (c.diagnoses || []);

  if (!osceState.doctorSpeech) {
    osceState.doctorSpeech = c.doctorDiagnosisCue || 'Sekarang saya akan melaporkan hasil pemeriksaan.';
    osceState.doctorMascot = MASCOT.pelaporan;
    osceState.patientFace = 'normal';
    osceState.patientSpeech = '';
  }

  var dxBtns = '';
  for (var i = 0; i < diagnoses.length; i++) {
    var dx = diagnoses[i];
    var sel = osceState.diagnosisChosenId === dx.id;
    dxBtns += '<button class="vn-choice dx-choice' + (sel ? ' is-selected' : '') + '" onclick="pickDiagnosis(\'' + dx.id + '\')">' +
      escapeHtml(dx.name) + '</button>';
  }

  var repBtns = '';
  for (var j = 0; j < options.length; j++) {
    var op = options[j];
    var rsel = osceState.reportChosenId === op.id;
    repBtns += '<button class="vn-choice' + (rsel ? ' is-selected' : '') + '" onclick="pickReport(\'' + op.id + '\')"' +
      (osceState.reportChosenId !== null ? ' disabled' : '') + '>' + escapeHtml(op.label) + '</button>';
  }

  var canAdvance = (osceState.diagnosisChosenId !== null) && (osceState.reportChosenId !== null);
  var advance = canAdvance
    ? '<div class="vn-advance"><button class="btn-pill" onclick="advanceStep()">Lanjut ke Edukasi →</button></div>'
    : '<div class="vn-helper">Pilih diagnosis dan cara melaporkan ke pasien untuk melanjutkan.</div>';

  return renderScene() +
    '<div class="vn-prompt"><strong>A. Apa diagnosis kerja Anda?</strong></div>' +
    '<div class="vn-choices">' + dxBtns + '</div>' +
    '<div class="vn-prompt" style="margin-top:1.5rem;"><strong>B. Bagaimana Anda menyampaikan hasil ke pasien?</strong></div>' +
    '<div class="vn-choices">' + repBtns + '</div>' +
    advance;
}

window.pickDiagnosis = function (id) {
  if (osceState.diagnosisChosenId === id) {
    osceState.diagnosisChosenId = null;
  } else {
    osceState.diagnosisChosenId = id;
  }
  renderOSCE();
};

window.pickReport = function (id) {
  if (osceState.reportChosenId !== null) return;
  var script = getScript('pelaporan');
  var options = (script && script.reportOptions) ? script.reportOptions : DEFAULT_REPORT_PATIENT;
  var op = null;
  for (var i = 0; i < options.length; i++) if (options[i].id === id) { op = options[i]; break; }
  if (!op) return;

  osceState.reportChosenId = id;
  osceState.doctorSpeech = op.label;
  osceState.patientSpeech = op.reply || '';
  osceState.patientFace = op.patientFace || (op.correct ? 'normal' : 'worried');
  osceState.doctorMascot = op.correct ? MASCOT.pelaporan : MASCOT.fail;
  if (op.correct && op.key) tickChecklist(op.key);
  if (!op.correct && op.penalty) addPenalty(op.penalty, 4);
  renderOSCE();
};

function renderEduStep() {
  var script = getScript('edukasi');
  var items = (script && script.items) ? script.items : DEFAULT_EDU_ITEMS;
  var minRelevant = (script && script.minRelevant) || 3;

  if (!osceState.doctorSpeech) {
    osceState.doctorSpeech = 'Sebelum pulang, saya berikan edukasi singkat.';
    osceState.doctorMascot = MASCOT.edukasi;
    osceState.patientFace = 'normal';
    osceState.patientSpeech = '';
  }

  var relevantPicked = 0;
  for (var i = 0; i < osceState.eduSelectedIds.length; i++) {
    for (var j = 0; j < items.length; j++) {
      if (items[j].id === osceState.eduSelectedIds[i] && items[j].correct) { relevantPicked++; break; }
    }
  }
  var canFinish = relevantPicked >= minRelevant;

  var btns = '';
  for (var k = 0; k < items.length; k++) {
    var it = items[k];
    var picked = osceState.eduSelectedIds.indexOf(it.id) !== -1;
    var cls = 'vn-mcq';
    if (picked) cls += it.correct ? ' is-correct' : ' is-wrong';
    btns += '<button class="' + cls + '" onclick="pickEdu(\'' + it.id + '\')"' + (picked ? ' disabled' : '') + '>' +
      (picked ? (it.correct ? '✓ ' : '✗ ') : '') + escapeHtml(it.label) + '</button>';
  }

  var finishBtn = canFinish
    ? '<div class="vn-advance"><button class="btn-pill" onclick="finishCase()">Selesaikan Kasus →</button></div>'
    : '<div class="vn-helper">Berikan minimal <strong>' + minRelevant + '</strong> edukasi yang tepat (saat ini ' + relevantPicked + '/' + minRelevant + ').</div>';

  return renderScene() +
    '<div class="vn-prompt"><strong>Pilih poin edukasi yang relevan:</strong></div>' +
    '<div class="vn-mcq-grid">' + btns + '</div>' +
    finishBtn;
}

window.pickEdu = function (id) {
  var script = getScript('edukasi');
  var items = (script && script.items) ? script.items : DEFAULT_EDU_ITEMS;
  var it = null;
  for (var i = 0; i < items.length; i++) if (items[i].id === id) { it = items[i]; break; }
  if (!it || osceState.eduSelectedIds.indexOf(id) !== -1) return;

  osceState.eduSelectedIds.push(id);
  osceState.doctorSpeech = it.label;
  osceState.patientFace = it.patientFace || (it.correct ? 'normal' : 'worried');
  osceState.patientSpeech = it.reply || '';
  osceState.doctorMascot = it.correct ? MASCOT.edukasi : MASCOT.fail;
  if (it.correct && it.key) tickChecklist(it.key);
  if (!it.correct && it.penalty) addPenalty(it.penalty, 3);
  renderOSCE();
};

// ============================================================
// 8. ADVANCE / FINISH
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

  var c = getCurrentCase();
  if (!c) { renderOSCE(); return; }

  // Build the master expected-checklist for the case.
  var expected = [];
  expected.push({ key: 'intro-greeting', label: 'Salam, perkenalan diri' });

  var anamPool = (function () { var s = getScript('anamnesis'); return (s && s.questions) ? s.questions : DEFAULT_ANAMNESIS_QUESTIONS; })();
  var anamMin = (function () { var s = getScript('anamnesis'); return (s && s.minRelevant) || 4; })();
  var anamCnt = 0;
  for (var i = 0; i < anamPool.length && anamCnt < anamMin; i++) {
    if (anamPool[i].relevant && anamPool[i].key) {
      expected.push({ key: anamPool[i].key, label: 'Anamnesis: ' + anamPool[i].label });
      anamCnt++;
    }
  }
  expected.push({ key: 'consent-explained', label: 'Inform consent dijelaskan dan disetujui' });
  expected.push({ key: 'prep-handwash', label: 'Cuci tangan' });
  expected.push({ key: 'prep-tools', label: 'Siapkan alat' });
  expected.push({ key: 'prep-position', label: 'Atur posisi pasien' });

  var exams = c.exams || [];
  for (var k = 0; k < exams.length; k++) {
    if (exams[k].correct) expected.push({ key: 'exam-' + exams[k].id, label: 'Pemeriksaan: ' + exams[k].name });
  }
  expected.push({ key: 'rep-patient', label: 'Pelaporan ke pasien dengan bahasa awam' });

  var eduPool = (function () { var s = getScript('edukasi'); return (s && s.items) ? s.items : DEFAULT_EDU_ITEMS; })();
  var eduMin = (function () { var s = getScript('edukasi'); return (s && s.minRelevant) || 3; })();
  var eduCnt = 0;
  for (var m = 0; m < eduPool.length && eduCnt < eduMin; m++) {
    if (eduPool[m].correct && eduPool[m].key) {
      expected.push({ key: eduPool[m].key, label: 'Edukasi: ' + eduPool[m].label });
      eduCnt++;
    }
  }

  var doneCount = 0;
  var missed = [];
  for (var n = 0; n < expected.length; n++) {
    if (osceState.checklistDone[expected[n].key]) doneCount++;
    else missed.push(expected[n]);
  }
  osceState.checklistMissed = missed;
  osceState._checklistTotal = expected.length;
  osceState._checklistDoneCount = doneCount;

  var diagCorrect = false;
  if (osceState.diagnosisChosenId) {
    var diags = c.diagnoses || [];
    for (var d = 0; d < diags.length; d++) {
      if (diags[d].id === osceState.diagnosisChosenId) { diagCorrect = !!diags[d].correct; break; }
    }
  }
  osceState.diagnosisCorrect = diagCorrect;

  var checklistPct = expected.length > 0 ? (doneCount / expected.length) : 0;
  var diagPct = diagCorrect ? 1 : 0;
  var timeBonus = osceState.timeUp ? 0 : Math.min(1, osceState.timeLeft / DEFAULT_DURATION_SECONDS);
  var raw = checklistPct * 60 + diagPct * 30 + timeBonus * 10;
  var penaltySum = 0;
  for (var p = 0; p < osceState.penalties.length; p++) penaltySum += osceState.penalties[p].points;
  raw = Math.max(0, raw - penaltySum);
  osceState.score = Math.round(raw);

  osceState.phase = 'result';
  renderOSCE();

  if (window.NeuroPet && typeof window.NeuroPet.markSectionComplete === 'function') {
    window.NeuroPet.markSectionComplete('quiz-fase-1');
  }
}

// ============================================================
// 9. RESULT CARD
// ============================================================

function renderResult() {
  var pass = osceState.score >= 70 && osceState.diagnosisCorrect;
  var bg = pass ? '#e8f5e9' : '#ffebee';
  var col = pass ? '#4caf50' : '#f44336';
  var headline = osceState.timeUp ? 'Waktu Habis' : (pass ? 'Kasus Selesai — Kompeten' : 'Kasus Selesai — Perlu Perbaikan');

  // Set scene face based on result for evaluation card.
  osceState.patientFace = pass ? 'happy' : (osceState.timeUp ? 'worried' : 'worried');
  osceState.doctorMascot = pass ? MASCOT.pass : MASCOT.fail;
  osceState.doctorSpeech = pass ? 'Kerja yang baik!' : 'Mari kita tinjau kembali bersama.';
  osceState.patientSpeech = '';

  var dxLine = osceState.diagnosisChosenId
    ? (osceState.diagnosisCorrect
        ? '<p style="color:#2e7d32;margin:.25rem 0;">✓ Diagnosis tepat.</p>'
        : '<p style="color:#c62828;margin:.25rem 0;">✗ Diagnosis kurang tepat.</p>')
    : '<p style="color:#c62828;margin:.25rem 0;">✗ Tidak ada diagnosis dipilih.</p>';

  var missedHtml = '';
  if (osceState.checklistMissed && osceState.checklistMissed.length > 0) {
    missedHtml += '<h4 style="margin:1.25rem 0 .5rem;color:#7B1224;">Item Checklist yang Terlewat</h4><ul class="osce-eval-missed">';
    for (var i = 0; i < osceState.checklistMissed.length; i++) {
      missedHtml += '<li>' + escapeHtml(osceState.checklistMissed[i].label) + '</li>';
    }
    missedHtml += '</ul>';
  } else {
    missedHtml = '<p style="color:#2e7d32;margin:1rem 0;">Semua item checklist OSCE diselesaikan!</p>';
  }

  var penHtml = '';
  if (osceState.penalties.length > 0) {
    penHtml += '<h4 style="margin:1.25rem 0 .5rem;color:#7B1224;">Catatan Kesalahan</h4><ul class="osce-eval-penalty">';
    for (var j = 0; j < osceState.penalties.length; j++) {
      var pn = osceState.penalties[j];
      penHtml += '<li><strong>' + escapeHtml(pn.step) + ':</strong> ' + escapeHtml(pn.label) + ' <em>(-' + pn.points + ')</em></li>';
    }
    penHtml += '</ul>';
  }

  var penaltySum = 0;
  for (var x = 0; x < osceState.penalties.length; x++) penaltySum += osceState.penalties[x].points;

  return renderScene() +
    '<div class="osce-eval">' +
      '<h3 style="color:#7B1224;text-align:center;margin:0 0 .5rem;">' + headline + '</h3>' +
      '<div class="osce-eval__score" style="background:' + bg + ';">' +
        '<div style="font-size:3rem;font-weight:bold;color:' + col + ';margin-bottom:.5rem;">' + osceState.score + '%</div>' +
        '<div class="osce-eval__breakdown">' +
          '<span>Checklist: ' + osceState._checklistDoneCount + '/' + osceState._checklistTotal + '</span>' +
          '<span>Diagnosis: ' + (osceState.diagnosisCorrect ? 'Benar' : 'Salah') + '</span>' +
          '<span>Sisa waktu: ' + fmtTime(osceState.timeLeft) + '</span>' +
          '<span>Penalti: -' + penaltySum + '</span>' +
        '</div>' +
        dxLine +
      '</div>' +
      missedHtml +
      penHtml +
      '<div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;margin-top:1.5rem;">' +
        '<button class="btn-pill" onclick="restartCase()">Coba Lagi</button>' +
        '<button class="btn-pill" onclick="nextCase()" style="background:transparent;color:#7B1224;border:2px solid #7B1224;">Kasus Berikutnya</button>' +
      '</div>' +
    '</div>';
}

// ============================================================
// 10. MAIN RENDER
// ============================================================

function renderOSCE() {
  var el = document.getElementById('osceApp');
  if (!el) return;

  if (!osceState) osceState = initialState();

  if (osceState.phase === 'start') {
    el.innerHTML = '<div class="osce-start">' +
      '<h2 class="osce-start__title">Simulasi OSCE Fase 1</h2>' +
      '<p class="osce-start__lead">Visual novel interaktif — 7 langkah OSCE: Pembukaan, Anamnesis, Inform Consent, Persiapan, Pemeriksaan, Pelaporan Hasil, dan Edukasi. Anda berperan sebagai dokter (Doctor Brain) dengan waktu 10 menit per kasus.</p>' +
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
    if      (stepId === 'intro')       body = renderIntroStep();
    else if (stepId === 'anamnesis')   body = renderAnamnesisStep();
    else if (stepId === 'consent')     body = renderConsentStep();
    else if (stepId === 'persiapan')   body = renderPrepStep();
    else if (stepId === 'pemeriksaan') body = renderExamStep();
    else if (stepId === 'pelaporan')   body = renderReportStep();
    else if (stepId === 'edukasi')     body = renderEduStep();
  }

  el.innerHTML = renderHeader() + '<div class="osce-step-body">' + body + '</div>';
}

// ============================================================
// 11. LIFECYCLE
// ============================================================

window.startSimulation = function () {
  if (typeof OSCE_CASES !== 'undefined' && OSCE_CASES.length > 0) {
    currentCase = Math.floor(Math.random() * OSCE_CASES.length);
  }
  osceState = initialState();
  osceState.phase = 'playing';
  var c = getCurrentCase();
  if (c) {
    osceState.shuffledExams = shuffle(c.exams || []);
    osceState.shuffledDiagnoses = shuffle(c.diagnoses || []);
  }
  startTimer();
  renderOSCE();
};

window.restartCase = function () {
  stopTimer();
  osceState = initialState();
  osceState.phase = 'playing';
  var c = getCurrentCase();
  if (c) {
    osceState.shuffledExams = shuffle(c.exams || []);
    osceState.shuffledDiagnoses = shuffle(c.diagnoses || []);
  }
  startTimer();
  renderOSCE();
};

window.nextCase = function () {
  if (typeof OSCE_CASES === 'undefined' || OSCE_CASES.length <= 1) {
    alert('Tidak ada kasus lagi.');
    return;
  }
  var prev = currentCase;
  while (currentCase === prev) {
    currentCase = Math.floor(Math.random() * OSCE_CASES.length);
  }
  stopTimer();
  osceState = initialState();
  osceState.phase = 'playing';
  var c = getCurrentCase();
  if (c) {
    osceState.shuffledExams = shuffle(c.exams || []);
    osceState.shuffledDiagnoses = shuffle(c.diagnoses || []);
  }
  startTimer();
  renderOSCE();
};

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('osceApp')) renderOSCE();
});
