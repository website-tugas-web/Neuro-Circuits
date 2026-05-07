// OSCE Simulator — SVG figures + interactive engine
// Renders into #osceApp, reads global OSCE_CASES array

// ============================================================================
// PART 1: SVG FIGURES
// ============================================================================

function patientSVG(face, speech) {
  face = face || 'normal';
  var brows, mouth, sweat = '';

  switch (face) {
    case 'pain':
      brows = '<path d="M-12-3 Q-7-8 -2-3" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round"/>'
            + '<path d="M 2-3 Q 7-8 12-3" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round"/>';
      mouth = '<path d="M-8 8 Q 0 4 8 8" stroke="#7B1224" stroke-width="1.5" fill="none" stroke-linecap="round"/>';
      sweat = '<circle cx="16" cy="10" r="2.5" fill="#87ceeb" opacity="0.8"/>';
      break;
    case 'worried':
      brows = '<path d="M-12-5 Q-7-9 -2-5" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round"/>'
            + '<path d="M 2-5 Q 7-9 12-5" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round"/>';
      mouth = '<path d="M-6 7 Q 0 6 6 7" stroke="#7B1224" stroke-width="1.5" fill="none" stroke-linecap="round"/>';
      break;
    case 'happy':
      brows = '<path d="M-12-3 Q-7-5 -2-3" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round"/>'
            + '<path d="M 2-3 Q 7-5 12-3" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round"/>';
      mouth = '<path d="M-8 6 Q 0 12 8 6" stroke="#7B1224" stroke-width="1.5" fill="none" stroke-linecap="round"/>';
      break;
    default: // normal
      brows = '<path d="M-12-3 Q-7-6 -2-3" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round"/>'
            + '<path d="M 2-3 Q 7-6 12-3" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round"/>';
      mouth = '<path d="M-7 7 Q 0 10 7 7" stroke="#7B1224" stroke-width="1.5" fill="none" stroke-linecap="round"/>';
  }

  var svg = '<svg viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg" width="120">'
    // Hair (behind head)
    + '<ellipse cx="60" cy="28" rx="24" ry="18" fill="#3d2817"/>'
    // Head
    + '<circle cx="60" cy="35" r="22" fill="#f4c8c8" stroke="#7B1224" stroke-width="1.2"/>'
    // Face group — single transform so features stay aligned
    + '<g transform="translate(60,35)">'
    +   '<circle cx="-8" cy="-3" r="2.8" fill="#1a1a1a"/>'
    +   '<circle cx="8" cy="-3" r="2.8" fill="#1a1a1a"/>'
    +   brows + mouth + sweat
    + '</g>'
    // Neck
    + '<rect x="52" y="56" width="16" height="10" rx="3" fill="#f4c8c8"/>'
    // Shirt / coat
    + '<path d="M38 66 L38 120 Q38 128 48 130 L72 130 Q82 128 82 120 L82 66 Z" fill="#f5f5f5" stroke="#7B1224" stroke-width="1.2"/>'
    + '<circle cx="60" cy="82" r="1.5" fill="#7B1224"/>'
    + '<circle cx="60" cy="94" r="1.5" fill="#7B1224"/>'
    // Arms
    + '<line x1="38" y1="74" x2="22" y2="102" stroke="#f4c8c8" stroke-width="6" stroke-linecap="round"/>'
    + '<line x1="82" y1="74" x2="98" y2="102" stroke="#f4c8c8" stroke-width="6" stroke-linecap="round"/>'
    // Hands
    + '<circle cx="22" cy="102" r="4" fill="#f4c8c8"/>'
    + '<circle cx="98" cy="102" r="4" fill="#f4c8c8"/>'
    // Legs
    + '<line x1="48" y1="130" x2="45" y2="175" stroke="#444" stroke-width="6" stroke-linecap="round"/>'
    + '<line x1="72" y1="130" x2="75" y2="175" stroke="#444" stroke-width="6" stroke-linecap="round"/>'
    // Shoes
    + '<ellipse cx="44" cy="180" rx="7" ry="5" fill="#1a1a1a"/>'
    + '<ellipse cx="76" cy="180" rx="7" ry="5" fill="#1a1a1a"/>'
    + '</svg>';

  var bubble = '';
  if (speech) {
    bubble = '<div class="speech-bubble" style="position:relative;background:#fff;border:2px solid #7B1224;border-radius:12px;padding:12px 16px;max-width:280px;margin:0 auto 12px;font-size:14px;color:#333;text-align:center;">'
      + speech
      + '<div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #7B1224;"></div>'
      + '</div>';
  }

  return '<div class="patient-wrapper" style="display:inline-block;text-align:center;">'
    + bubble + svg + '</div>';
}

function doctorSVG(speech) {
  var svg = '<svg viewBox="0 0 100 180" xmlns="http://www.w3.org/2000/svg" width="100">'
    // Hair
    + '<ellipse cx="50" cy="22" rx="20" ry="14" fill="#3d2817"/>'
    // Head
    + '<circle cx="50" cy="30" r="18" fill="#f4c8c8" stroke="#7B1224" stroke-width="1.2"/>'
    // Face group
    + '<g transform="translate(50,30)">'
    // Glasses
    +   '<circle cx="-10" cy="-2" r="6" fill="none" stroke="#333" stroke-width="1.2"/>'
    +   '<circle cx="10" cy="-2" r="6" fill="none" stroke="#333" stroke-width="1.2"/>'
    +   '<line x1="-4" y1="-2" x2="4" y2="-2" stroke="#333" stroke-width="1"/>'
    // Eyes
    +   '<circle cx="-10" cy="-2" r="2.2" fill="#1a1a1a"/>'
    +   '<circle cx="10" cy="-2" r="2.2" fill="#1a1a1a"/>'
    // Mouth
    +   '<path d="M-6 8 Q 0 11 6 8" stroke="#7B1224" stroke-width="1.2" fill="none" stroke-linecap="round"/>'
    + '</g>'
    // Neck
    + '<rect x="46" y="48" width="8" height="10" rx="2" fill="#f4c8c8"/>'
    // White coat
    + '<path d="M28 58 L26 142 Q26 150 36 152 L64 152 Q74 150 74 142 L72 58 Z" fill="#f5f5f5" stroke="#7B1224" stroke-width="1.2"/>'
    // Shirt + tie
    + '<rect x="38" y="58" width="24" height="30" rx="2" fill="#fff" stroke="#ddd" stroke-width="0.5"/>'
    + '<line x1="50" y1="58" x2="50" y2="82" stroke="#7B1224" stroke-width="2.5" stroke-linecap="round"/>'
    // Stethoscope
    + '<path d="M34 65 Q44 72 50 68 Q56 72 66 65" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round"/>'
    + '<circle cx="50" cy="72" r="3" fill="#888"/>'
    // Arms
    + '<line x1="32" y1="68" x2="16" y2="98" stroke="#f4c8c8" stroke-width="5" stroke-linecap="round"/>'
    + '<line x1="68" y1="68" x2="84" y2="98" stroke="#f4c8c8" stroke-width="5" stroke-linecap="round"/>'
    // Hands
    + '<circle cx="16" cy="98" r="3.5" fill="#f4c8c8"/>'
    + '<circle cx="84" cy="98" r="3.5" fill="#f4c8c8"/>'
    // Legs
    + '<line x1="40" y1="152" x2="38" y2="172" stroke="#444" stroke-width="5" stroke-linecap="round"/>'
    + '<line x1="60" y1="152" x2="62" y2="172" stroke="#444" stroke-width="5" stroke-linecap="round"/>'
    // Shoes
    + '<ellipse cx="37" cy="175" rx="5" ry="4" fill="#1a1a1a"/>'
    + '<ellipse cx="63" cy="175" rx="5" ry="4" fill="#1a1a1a"/>'
    + '</svg>';

  var bubble = '';
  if (speech) {
    bubble = '<div class="speech-bubble" style="position:relative;background:#fff;border:2px solid #7B1224;border-radius:12px;padding:12px 16px;max-width:260px;margin:0 auto 12px;font-size:14px;color:#333;text-align:center;">'
      + speech
      + '<div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #7B1224;"></div>'
      + '</div>';
  }

  return '<div class="doctor-wrapper" style="display:inline-block;text-align:center;">'
    + bubble + svg
    + '<div style="text-align:center;margin-top:6px;font-size:13px;color:#555;font-weight:500;">Dokter Anda</div>'
    + '</div>';
}

// ============================================================================
// PART 2: OSCE ENGINE
// ============================================================================

var osceState = {
  phase: 'intro',
  examinedIds: [],
  score: 0,
  lastFace: 'normal',
  lastSpeech: '',
  lastFinding: '',
  _selectedDx: [],
  _lastDoctorSpeech: ''
};

var currentCase = 0;

function getCurrentCase() {
  if (typeof OSCE_CASES === 'undefined' || !OSCE_CASES[currentCase]) return null;
  return OSCE_CASES[currentCase];
}

function renderScene(patientFace, patientSpeech, doctorSpeech) {
  return '<div class="osce-scene" style="display:flex;justify-content:space-around;align-items:flex-end;padding:2rem 1rem;background:#f9f7f5;border-radius:12px;margin:1.5rem 0;min-height:320px;gap:1rem;">'
    + '<div style="flex:1;text-align:center;">' + patientSVG(patientFace, patientSpeech) + '</div>'
    + '<div style="flex:1;text-align:center;">' + doctorSVG(doctorSpeech) + '</div>'
    + '</div>';
}

function progressDots() {
  if (typeof OSCE_CASES === 'undefined') return '';
  var dots = '';
  for (var i = 0; i < OSCE_CASES.length; i++) {
    var cls = i < currentCase ? 'osce-step-dot done' : (i === currentCase ? 'osce-step-dot active' : 'osce-step-dot');
    dots += '<span class="' + cls + '" style="display:inline-block;width:12px;height:12px;border-radius:50%;margin:0 4px;'
      + (i < currentCase ? 'background:#7B1224;' : (i === currentCase ? 'background:#C9A84C;border:2px solid #7B1224;' : 'background:#ddd;'))
      + '"></span>';
  }
  return '<div class="osce-progress" style="text-align:center;margin-bottom:1rem;">'
    + '<span style="font-size:13px;color:#666;">Case ' + (currentCase + 1) + ' / ' + OSCE_CASES.length + '</span><br>'
    + dots + '</div>';
}

function renderOSCE() {
  var el = document.getElementById('osceApp');
  if (!el) return;

  var c = getCurrentCase();
  if (!c) {
    el.innerHTML = '<p style="color:#7B1224;text-align:center;font-size:1.1rem;">No OSCE cases loaded.</p>';
    return;
  }

  var html = progressDots();

  switch (osceState.phase) {

    case 'intro':
      html += renderScene('normal', c.complaint,
        c.doctorIntro || 'Selamat datang! Saya dokter Anda. Mari kita mulai pemeriksaan pasien ini.');
      html += '<div style="text-align:center;margin:1.5rem 0;">'
        + '<button class="btn-maroon" onclick="startExam()" style="padding:12px 32px;font-size:1rem;">Mulai Pemeriksaan</button>'
        + '</div>';
      break;

    case 'exam':
      var minReq = c.minExamsRequired || 3;
      var done = osceState.examinedIds.length;
      var canAdvance = done >= minReq;

      var doctorExamSpeech = osceState._lastDoctorSpeech
        || 'Silakan pilih pemeriksaan yang ingin dilakukan.';

      html += renderScene(osceState.lastFace, osceState.lastSpeech || c.complaint, doctorExamSpeech);

      // Finding box
      if (osceState.lastFinding) {
        html += '<div class="finding-box" style="margin:1rem auto;max-width:600px;padding:1rem 1.5rem;background:#fffbf7;border-left:4px solid #7B1224;border-radius:4px;">'
          + '<strong style="color:#7B1224;">Temuan Terakhir:</strong>'
          + '<p style="margin:0.4rem 0 0;color:#555;">' + osceState.lastFinding + '</p></div>';
      }

      // Exam buttons — renders N from data
      html += '<div style="text-align:center;margin:1.5rem 0;">'
        + '<h3 style="color:#7B1224;margin-bottom:1rem;">Pilih Pemeriksaan</h3>'
        + '<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:0.5rem;">';
      for (var i = 0; i < c.exams.length; i++) {
        var ex = c.exams[i];
        var already = osceState.examinedIds.indexOf(ex.id) !== -1;
        html += '<button class="exam-btn' + (already ? ' already' : '') + '" '
          + 'onclick="doExam(\'' + ex.id + '\')" '
          + (already ? 'disabled ' : '')
          + 'style="padding:10px 16px;margin:4px;cursor:' + (already ? 'not-allowed' : 'pointer')
          + ';opacity:' + (already ? '0.55' : '1') + ';">'
          + (already ? '&#10003; ' : '') + ex.name + '</button>';
      }
      html += '</div>';
      html += '<div style="color:#666;font-size:0.95rem;margin:1rem 0;">Pemeriksaan: <strong>' + done + '/' + minReq + '</strong></div>';

      if (canAdvance) {
        html += '<button class="btn-maroon" onclick="goToDiagnosis()" style="padding:12px 32px;font-size:1rem;">Lanjut ke Diagnosis</button>';
      } else {
        html += '<p style="color:#999;font-size:0.9rem;">Lakukan ' + (minReq - done) + ' pemeriksaan lagi untuk melanjutkan</p>';
      }
      html += '</div>';
      break;

    case 'diagnosis':
      html += renderScene('worried',
        c.diagnosisPrompt || 'Apa diagnosis saya, Dokter?',
        c.doctorDiagnosisCue || 'Berdasarkan temuan, tentukan diagnosis yang paling tepat.');

      html += '<div style="max-width:600px;margin:1.5rem auto;">'
        + '<div class="diagnosis-section"><h3 style="color:#7B1224;margin-bottom:1rem;">Pilih Diagnosis</h3>';
      for (var j = 0; j < c.diagnoses.length; j++) {
        var dx = c.diagnoses[j];
        var sel = osceState._selectedDx.indexOf(j) !== -1;
        html += '<button class="dx-btn' + (sel ? ' selected' : '') + '" onclick="pickDx(' + j + ')" '
          + 'style="display:block;width:100%;margin:0.6rem 0;padding:12px 16px;text-align:left;border:2px solid '
          + (sel ? '#7B1224' : '#ddd') + ';background:' + (sel ? '#ffe8e8' : '#fff')
          + ';border-radius:6px;cursor:pointer;font-size:1rem;">' + dx.name + '</button>';
      }
      html += '</div>'
        + '<div style="text-align:center;margin:1.5rem 0;">'
        + '<button class="btn-maroon" onclick="submitDiagnosis()" style="padding:12px 32px;font-size:1rem;">Kirim Diagnosis</button>'
        + '</div></div>';
      break;

    case 'result':
      var pass = osceState.score >= 50;
      var rFace = pass ? 'happy' : 'worried';
      var patientMsg = pass ? 'Terima kasih, Dokter!' : 'Saya harap bisa lebih baik...';
      var doctorMsg = pass
        ? (c.doctorPass || 'Bagus sekali! Diagnosis Anda tepat.') + ' Skor: ' + osceState.score + '%'
        : (c.doctorFail || 'Perlu perbaikan. Tinjau kembali temuan pemeriksaan.') + ' Skor: ' + osceState.score + '%';

      html += renderScene(rFace, patientMsg, doctorMsg);

      html += '<div class="' + (pass ? 'osce-result pass' : 'osce-result fail')
        + '" style="text-align:center;margin:1.5rem 0;padding:2rem;background:' + (pass ? '#e8f5e9' : '#ffebee') + ';border-radius:12px;">'
        + '<div style="font-size:3rem;font-weight:bold;color:' + (pass ? '#4caf50' : '#f44336') + ';margin-bottom:0.5rem;">' + osceState.score + '%</div>'
        + '<p style="font-size:1.1rem;color:#333;margin-bottom:1.5rem;">' + doctorMsg + '</p>'
        + '<div style="display:flex;justify-content:center;gap:1rem;">'
        + '<button class="btn-maroon" onclick="restartCase()" style="padding:10px 24px;">Ulangi Kasus</button>';

      if (typeof OSCE_CASES !== 'undefined' && currentCase < OSCE_CASES.length - 1) {
        html += '<button class="btn-outline-maroon" onclick="nextCase()" style="padding:10px 24px;border:2px solid #7B1224;background:transparent;color:#7B1224;cursor:pointer;border-radius:6px;">Kasus Berikutnya</button>';
      }
      html += '</div></div>';
      break;

    default:
      html += '<p style="color:#7B1224;">Unknown phase.</p>';
  }

  el.innerHTML = html;
}

function doExam(examId) {
  var c = getCurrentCase();
  if (!c) return;
  if (osceState.examinedIds.indexOf(examId) !== -1) return;

  osceState.examinedIds.push(examId);

  var exam = null;
  for (var i = 0; i < c.exams.length; i++) {
    if (c.exams[i].id === examId) { exam = c.exams[i]; break; }
  }
  if (!exam) return;

  osceState.lastSpeech = exam.patientSpeech || exam.feedback || 'Temuan dicatat.';
  osceState.lastFinding = exam.finding || '';
  osceState._lastDoctorSpeech = exam.doctorPrompt
    ? exam.doctorPrompt + (osceState.lastFinding ? ' — Hasil: ' + osceState.lastFinding : '')
    : 'Hasil: ' + (osceState.lastFinding || 'Temuan dicatat.');
  osceState.lastFace = exam.patientFace || 'normal';

  if (exam.correct) {
    osceState.score += 10;
  } else {
    if (!exam.patientFace) osceState.lastFace = 'pain';
    setTimeout(function() {
      osceState.lastFace = 'normal';
      osceState.lastSpeech = 'Mari lanjutkan pemeriksaan.';
      osceState._lastDoctorSpeech = 'Silakan pilih pemeriksaan berikutnya.';
      renderOSCE();
    }, 2500);
  }

  renderOSCE();
}

function submitDiagnosis() {
  var c = getCurrentCase();
  if (!c || osceState._selectedDx.length === 0) return;

  var container = document.getElementById('osceApp');
  var buttons = container ? container.querySelectorAll('.dx-btn') : [];

  for (var i = 0; i < c.diagnoses.length; i++) {
    var dx = c.diagnoses[i];
    var btn = buttons[i];
    if (!btn) continue;
    if (dx.correct) {
      btn.className = 'dx-btn correct';
      btn.style.borderColor = '#4caf50';
      btn.style.background = '#e8f5e9';
    } else if (osceState._selectedDx.indexOf(i) !== -1) {
      btn.className = 'dx-btn wrong';
      btn.style.borderColor = '#f44336';
      btn.style.background = '#ffebee';
    }
  }

  for (var k = 0; k < osceState._selectedDx.length; k++) {
    var idx = osceState._selectedDx[k];
    var selDx = c.diagnoses[idx];
    if (selDx && selDx.correct) {
      osceState.score += 20;
    } else {
      osceState.score -= 10;
    }
  }
  osceState.score = Math.max(0, Math.min(100, osceState.score));

  setTimeout(function() {
    osceState.phase = 'result';
    renderOSCE();
  }, 1800);
}

function startExam() {
  osceState.phase = 'exam';
  renderOSCE();
}

function goToDiagnosis() {
  osceState.phase = 'diagnosis';
  osceState._selectedDx = [];
  renderOSCE();
}

function restartCase() {
  osceState = {
    phase: 'intro',
    examinedIds: [],
    score: 0,
    lastFace: 'normal',
    lastSpeech: '',
    lastFinding: '',
    _selectedDx: [],
    _lastDoctorSpeech: ''
  };
  renderOSCE();
}

function nextCase() {
  if (typeof OSCE_CASES !== 'undefined' && currentCase < OSCE_CASES.length - 1) {
    currentCase += 1;
    restartCase();
  }
}

function pickDx(index) {
  var pos = osceState._selectedDx.indexOf(index);
  if (pos !== -1) {
    osceState._selectedDx.splice(pos, 1);
  } else {
    osceState._selectedDx = [index];
  }
  renderOSCE();
}

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('osceApp')) renderOSCE();
});
