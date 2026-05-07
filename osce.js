// OSCE Simulator Engine — SVG figures + interactive state machine

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
    bubble = '<div class="speech-bubble">' + speech +
      '<div class="speech-bubble__pointer"></div></div>';
  }

  return '<div class="patient-wrapper">' + bubble +
    '<div class="patient-figure">' + svg + '</div></div>';
}

function doctorSVG(speech) {
  speech = speech || '';

  var svg = '<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:100px;height:auto;">' +
    '<circle cx="50" cy="30" r="18" fill="#f4c8c8" stroke="#7B1224" stroke-width="1.5"/>' +
    '<path d="M 32 18 Q 30 8 50 5 Q 70 8 68 18" fill="#3d2817"/>' +
    '<circle cx="40" cy="28" r="6" fill="none" stroke="#333" stroke-width="1.2"/>' +
    '<circle cx="60" cy="28" r="6" fill="none" stroke="#333" stroke-width="1.2"/>' +
    '<line x1="46" y1="28" x2="54" y2="28" stroke="#333" stroke-width="1.2"/>' +
    '<circle cx="40" cy="28" r="2.5" fill="#1a1a1a"/>' +
    '<circle cx="60" cy="28" r="2.5" fill="#1a1a1a"/>' +
    '<path d="M 42 38 Q 50 40 58 38" stroke="#7B1224" stroke-width="1.2" fill="none" stroke-linecap="round"/>' +
    '<rect x="46" y="48" width="8" height="10" fill="#f4c8c8"/>' +
    '<path d="M 30 60 L 28 130 Q 28 140 38 142 L 62 142 Q 72 140 72 130 L 70 60 Z" fill="#f5f5f5" stroke="#7B1224" stroke-width="1.5"/>' +
    '<path d="M 35 60 L 34 90 L 66 90 L 65 60 Z" fill="#fff" stroke="#ccc" stroke-width="0.5"/>' +
    '<path d="M 50 55 L 48 75" stroke="#7B1224" stroke-width="2.5" stroke-linecap="round"/>' +
    '<path d="M 35 65 Q 45 70 55 65" fill="none" stroke="#999" stroke-width="2" stroke-linecap="round"/>' +
    '<circle cx="38" cy="62" r="2" fill="#999"/>' +
    '<circle cx="62" cy="62" r="2" fill="#999"/>' +
    '<line x1="35" y1="70" x2="20" y2="95" stroke="#f4c8c8" stroke-width="4" stroke-linecap="round"/>' +
    '<line x1="65" y1="70" x2="80" y2="95" stroke="#f4c8c8" stroke-width="4" stroke-linecap="round"/>' +
    '<circle cx="20" cy="95" r="3.5" fill="#f4c8c8"/>' +
    '<circle cx="80" cy="95" r="3.5" fill="#f4c8c8"/>' +
    '<line x1="40" y1="142" x2="38" y2="158" stroke="#333" stroke-width="4" stroke-linecap="round"/>' +
    '<line x1="60" y1="142" x2="62" y2="158" stroke="#333" stroke-width="4" stroke-linecap="round"/>' +
    '<ellipse cx="38" cy="160" rx="4" ry="3" fill="#1a1a1a"/>' +
    '<ellipse cx="62" cy="160" rx="4" ry="3" fill="#1a1a1a"/>' +
  '</svg>';

  var bubble = '';
  if (speech) {
    bubble = '<div class="speech-bubble doctor">' + speech +
      '<div class="speech-bubble__pointer"></div></div>';
  }

  return '<div class="doctor-wrapper">' + bubble +
    '<div class="doctor-figure">' + svg + '</div>' +
    '<div style="text-align:center;margin-top:8px;font-size:13px;color:#555;font-weight:500;">Dokter(Anda)</div>' +
  '</div>';
}

// ---- State ----

var osceState = {
  phase: 'start',
  examinedIds: [],
  score: 0,
  diagnosisCorrect: false,
  lastFace: 'normal',
  lastSpeech: '',
  lastFinding: '',
  lastWrongExplanation: '',
  lastDoctorSpeech: '',
  _selectedDxId: null,
  shuffledExams: [],
  shuffledDiagnoses: []
};

var currentCase = 0;

function getCurrentCase() {
  if (typeof OSCE_CASES === 'undefined' || !OSCE_CASES[currentCase]) return null;
  return OSCE_CASES[currentCase];
}

// Fisher-Yates shuffle — returns shuffled copy
function shuffle(arr) {
  var copy = arr.slice();
  for (var i = copy.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

function getMinExams() {
  var c = getCurrentCase();
  return c ? (c.minExamsRequired || 3) : 3;
}

// ---- Scene ----

function renderScene(faceState, patientText, doctorText) {
  return '<div class="osce-scene">' +
    '<div class="osce-scene__actor">' + patientSVG(faceState, patientText) + '</div>' +
    '<div class="osce-scene__actor">' + doctorSVG(doctorText) + '</div>' +
  '</div>';
}

// ---- Main render ----

function renderOSCE() {
  var el = document.getElementById('osceApp');
  if (!el) return;

  var html = '';

  if (osceState.phase === 'start') {
    html = '<div style="text-align:center;padding:4rem 2rem;">' +
      '<h2 style="color:#7B1224;font-family:Fraunces,serif;font-size:2rem;margin-bottom:1rem;">Simulasi OSCE</h2>' +
      '<p style="color:#555;font-size:1.1rem;margin-bottom:2rem;">Apakah Anda siap untuk simulasi kuis OSCE ini?</p>' +
      '<button class="btn-pill" onclick="startSimulation()">Mulai</button>' +
    '</div>';
    el.innerHTML = html;
    return;
  }

  var c = getCurrentCase();
  if (!c) { el.innerHTML = '<p style="color:#7B1224;text-align:center;font-size:1.2rem;">No cases available.</p>'; return; }

  if (osceState.phase === 'intro') {
    html = renderScene('normal', c.complaint, c.doctorIntro || '') +
      '<div style="text-align:center;margin:2rem 0;">' +
        '<button class="btn-pill" onclick="startExam()">Mulai Pemeriksaan</button>' +
      '</div>';

  } else if (osceState.phase === 'exam') {
    var min = getMinExams();
    var done = osceState.examinedIds.length;
    var canAdv = done >= min;

    var finding = '';
    if (osceState.lastFinding) {
      finding = '<div class="finding-box">' +
        '<strong style="color:#7B1224;">Hasil Temuan:</strong>' +
        '<p style="margin:.5rem 0 0;color:#555;">' + osceState.lastFinding + '</p>' +
        (osceState.lastWrongExplanation ? '<p class="finding-explanation">' + osceState.lastWrongExplanation + '</p>' : '') +
        '</div>';
    }

    var btns = '';
    var exams = osceState.shuffledExams.length > 0 ? osceState.shuffledExams : (c.exams || []);
    for (var i = 0; i < exams.length; i++) {
      var ex = exams[i];
      var used = osceState.examinedIds.indexOf(ex.id) !== -1;
      var mark = '';
      var wrongClass = '';
      if (used) {
        if (ex.correct) { mark = '✓ '; } else { mark = '✗ '; wrongClass = ' wrong'; }
      }
      btns += '<button class="exam-btn' + (used ? ' already' : '') + wrongClass + '" onclick="doExam(\'' + ex.id + '\')"' +
        (used ? ' disabled' : '') + '>' + mark + ex.name + '</button>';
    }

    var adv = canAdv
      ? '<div style="text-align:center;margin:2rem 0;"><button class="btn-pill" onclick="goToDiagnosis()">Lanjut ke Diagnosis</button></div>'
      : '<div style="text-align:center;color:#999;margin:1.5rem 0;font-size:.95rem;">Selesaikan ' + (min - done) + ' pemeriksaan lagi untuk melanjutkan</div>';

    html = renderScene(osceState.lastFace, osceState.lastSpeech, osceState.lastDoctorSpeech) +
      '<div style="margin:2rem 0;">' +
        '<div class="exam-section"><h3 style="color:#7B1224;margin-bottom:1rem;">Pilih Pemeriksaan</h3>' +
          '<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem;">' + btns + '</div></div>' +
        finding +
        '<div style="text-align:center;color:#666;font-size:.95rem;margin:1rem 0;">Pemeriksaan selesai: <strong>' + done + '/' + min + '</strong></div>' +
        adv +
      '</div>';

  } else if (osceState.phase === 'diagnosis') {
    var dxBtns = '';
    var dxList = osceState.shuffledDiagnoses.length > 0 ? osceState.shuffledDiagnoses : (c.diagnoses || []);
    for (var j = 0; j < dxList.length; j++) {
      var dx = dxList[j];
      var sel = osceState._selectedDxId === dx.id;
      dxBtns += '<button class="dx-btn' + (sel ? ' selected' : '') + '" onclick="pickDx(\'' + dx.id + '\')">' + dx.name + '</button>';
    }

    html = renderScene('worried', '', c.doctorDiagnosisCue || 'Apa diagnosis Anda?') +
      '<div style="margin:2rem auto;max-width:600px;">' +
        '<h3 style="color:#7B1224;margin-bottom:1.5rem;">Pilih Diagnosis</h3>' +
        dxBtns +
        '<div style="text-align:center;margin:2rem 0;"><button class="btn-pill" onclick="submitDiagnosis()">Kirim Diagnosis</button></div>' +
      '</div>';

  } else if (osceState.phase === 'result') {
    var pass = osceState.diagnosisCorrect;
    var rFace = pass ? 'happy' : 'worried';
    var rMsg = pass ? 'Selamat! Diagnosis Anda tepat.' : 'Silakan tinjau kembali temuan dan coba lagi.';
    var drMsg = pass ? (c.doctorPass || rMsg) : (c.doctorFail || rMsg);
    var bg = pass ? '#e8f5e9' : '#ffebee';
    var col = pass ? '#4caf50' : '#f44336';

    html = renderScene(rFace, rMsg, drMsg) +
      '<div style="text-align:center;margin:2rem 0;padding:2rem;background:' + bg + ';border-radius:12px;">' +
        '<div style="font-size:3rem;font-weight:bold;color:' + col + ';margin-bottom:1rem;">' + osceState.score + '%</div>' +
        '<p style="font-size:1.1rem;color:#333;margin-bottom:2rem;">' + rMsg + '</p>' +
        '<div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">' +
          '<button class="btn-pill" onclick="restartCase()">Coba Lagi</button>' +
          '<button class="btn-pill" onclick="nextCase()" style="background:transparent;color:#7B1224;border:2px solid #7B1224;">Kasus Berikutnya</button>' +
        '</div>' +
      '</div>';
  }

  el.innerHTML = html;
}

// ---- Actions ----

function startExam() {
  osceState.phase = 'exam';
  osceState.lastDoctorSpeech = '';
  osceState.lastSpeech = '';
  renderOSCE();
}

function doExam(examId) {
  var c = getCurrentCase();
  if (!c) return;
  if (osceState.examinedIds.indexOf(examId) !== -1) return;

  var exam = null;
  for (var i = 0; i < c.exams.length; i++) {
    if (c.exams[i].id === examId) { exam = c.exams[i]; break; }
  }
  if (!exam) return;

  osceState.examinedIds.push(examId);
  osceState.lastDoctorSpeech = exam.doctorPrompt || '';
  osceState.lastSpeech = exam.patientSpeech || exam.feedback || '';
  osceState.lastFace = exam.patientFace || 'normal';
  osceState.lastFinding = exam.finding || '';
  osceState.lastWrongExplanation = '';

  renderOSCE();

  setTimeout(function () {
    if (!exam.correct && exam.wrongExplanation) {
      osceState.lastDoctorSpeech = 'Hasil pemeriksaan sudah dicatat.';
      osceState.lastFinding = exam.finding || '-';
      osceState.lastWrongExplanation = exam.wrongExplanation;
    } else {
      osceState.lastDoctorSpeech = 'Saya temukan: ' + (exam.finding || '-');
      osceState.lastWrongExplanation = '';
    }
    if (exam.patientFace === 'pain') {
      osceState.lastFace = 'normal';
      osceState.lastSpeech = '';
    }
    renderOSCE();
  }, 600);

  if (exam.patientFace === 'pain') {
    setTimeout(function () {
      osceState.lastFace = 'normal';
      osceState.lastSpeech = '';
      renderOSCE();
    }, 2500);
  }
}

function goToDiagnosis() {
  osceState.phase = 'diagnosis';
  osceState.lastDoctorSpeech = '';
  osceState.lastSpeech = '';
  renderOSCE();
}

function pickDx(dxId) {
  if (osceState._selectedDxId === dxId) {
    osceState._selectedDxId = null;
  } else {
    osceState._selectedDxId = dxId;
  }
  renderOSCE();
}

function submitDiagnosis() {
  var c = getCurrentCase();
  if (!c || !osceState._selectedDxId) { alert('Pilih diagnosis terlebih dahulu.'); return; }

  // Build sets of correct exam IDs and selected exam IDs
  var exams = c.exams || [];
  var requiredExamIds = [];
  for (var i = 0; i < exams.length; i++) {
    if (exams[i].correct) requiredExamIds.push(exams[i].id);
  }
  var selectedExamIds = osceState.examinedIds.slice();

  // Count correct exams (intersection of selected and required)
  var correctExams = 0;
  for (var j = 0; j < requiredExamIds.length; j++) {
    if (selectedExamIds.indexOf(requiredExamIds[j]) !== -1) correctExams++;
  }
  var totalRequired = requiredExamIds.length;
  var examScore = totalRequired > 0 ? (correctExams / totalRequired) : 0;

  // Check diagnosis by ID
  var selectedDx = null;
  var diagnoses = c.diagnoses || [];
  for (var k = 0; k < diagnoses.length; k++) {
    if (diagnoses[k].id === osceState._selectedDxId) { selectedDx = diagnoses[k]; break; }
  }
  var diagnosisScore = (selectedDx && selectedDx.correct) ? 1 : 0;

  // Weight per existing rubric: 70% exams, 30% diagnosis
  var total = Math.round((examScore * 70 + diagnosisScore * 30));
  osceState.score = total;

  var pass = (selectedDx && selectedDx.correct);
  osceState.diagnosisCorrect = pass;
  var failMsg = (selectedDx && selectedDx.wrongExplanation) ? selectedDx.wrongExplanation : (c.doctorFail || '');
  osceState.lastDoctorSpeech = pass ? (c.doctorPass || '') : failMsg;
  osceState.phase = 'result';
  renderOSCE();
}

function startSimulation() {
  if (typeof OSCE_CASES !== 'undefined' && OSCE_CASES.length > 0) {
    currentCase = Math.floor(Math.random() * OSCE_CASES.length);
  }
  var c = getCurrentCase();
  if (c) {
    osceState.shuffledExams = shuffle(c.exams || []);
    osceState.shuffledDiagnoses = shuffle(c.diagnoses || []);
  }
  osceState.phase = 'intro';
  renderOSCE();
}

function restartCase() {
  var c = getCurrentCase();
  osceState = {
    phase: 'intro', examinedIds: [], score: 0, diagnosisCorrect: false,
    lastFace: 'normal', lastSpeech: '', lastFinding: '',
    lastWrongExplanation: '', lastDoctorSpeech: '', _selectedDxId: null,
    shuffledExams: c ? shuffle(c.exams || []) : [],
    shuffledDiagnoses: c ? shuffle(c.diagnoses || []) : []
  };
  renderOSCE();
}

function nextCase() {
  if (typeof OSCE_CASES === 'undefined' || OSCE_CASES.length <= 1) {
    alert('Tidak ada kasus lagi.');
    return;
  }
  var prev = currentCase;
  while (currentCase === prev) {
    currentCase = Math.floor(Math.random() * OSCE_CASES.length);
  }
  var c = getCurrentCase();
  osceState = {
    phase: 'intro', examinedIds: [], score: 0, diagnosisCorrect: false,
    lastFace: 'normal', lastSpeech: '', lastFinding: '',
    lastWrongExplanation: '', lastDoctorSpeech: '', _selectedDxId: null,
    shuffledExams: c ? shuffle(c.exams || []) : [],
    shuffledDiagnoses: c ? shuffle(c.diagnoses || []) : []
  };
  renderOSCE();
}

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('osceApp')) renderOSCE();
});
