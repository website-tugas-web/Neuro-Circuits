// OSCE (Objective Structured Clinical Examination) Simulator
// SVG figures and interactive engine for neuro-circuits medical education platform

// ============================================================================
// PART 1: SVG FIGURES AS JAVASCRIPT TEMPLATE LITERAL FUNCTIONS
// ============================================================================

function patientSVG(face = 'normal', speech = '') {
  const faceConfig = {
    normal: {
      leftBrow: 'M 30 18 Q 35 15 40 18',
      rightBrow: 'M 60 18 Q 65 15 70 18',
      leftEye: { cx: 35, cy: 22 },
      rightEye: { cx: 65, cy: 22 },
      mouth: 'M 40 32 Q 50 35 60 32',
      sweat: false,
    },
    pain: {
      leftBrow: 'M 30 20 Q 35 15 40 20',
      rightBrow: 'M 60 20 Q 65 15 70 20',
      leftEye: { cx: 35, cy: 22 },
      rightEye: { cx: 65, cy: 22 },
      mouth: 'M 40 35 Q 50 30 60 35',
      sweat: true,
    },
    worried: {
      leftBrow: 'M 30 16 Q 35 12 40 16',
      rightBrow: 'M 60 16 Q 65 12 70 16',
      leftEye: { cx: 35, cy: 22 },
      rightEye: { cx: 65, cy: 22 },
      mouth: 'M 40 33 Q 50 32 60 33',
      sweat: false,
    },
    happy: {
      leftBrow: 'M 30 18 Q 35 16 40 18',
      rightBrow: 'M 60 18 Q 65 16 70 18',
      leftEye: { cx: 35, cy: 22 },
      rightEye: { cx: 65, cy: 22 },
      mouth: 'M 40 32 Q 50 38 60 32',
      sweat: false,
    },
  };

  const cfg = faceConfig[face] || faceConfig.normal;

  const svgContent = `
    <svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg" style="width: 120px; height: auto;">
      <!-- Head -->
      <circle cx="60" cy="35" r="22" fill="#f4c8c8" stroke="#7B1224" stroke-width="1.5" />

      <!-- Hair -->
      <path d="M 38 20 Q 35 8 60 5 Q 85 8 82 20" fill="#3d2817" />

      <!-- Eyes -->
      <circle cx="${cfg.leftEye.cx}" cy="${cfg.leftEye.cy}" r="3" fill="#1a1a1a" />
      <circle cx="${cfg.rightEye.cx}" cy="${cfg.rightEye.cy}" r="3" fill="#1a1a1a" />

      <!-- Eyebrows -->
      <path d="${cfg.leftBrow}" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round" />
      <path d="${cfg.rightBrow}" stroke="#3d2817" stroke-width="1.5" fill="none" stroke-linecap="round" />

      <!-- Mouth -->
      <path d="${cfg.mouth}" stroke="#7B1224" stroke-width="1.5" fill="none" stroke-linecap="round" />

      ${cfg.sweat ? '<circle cx="75" cy="42" r="2.5" fill="#87ceeb" />' : ''}

      <!-- Neck -->
      <rect x="52" y="55" width="16" height="12" fill="#f4c8c8" />

      <!-- White coat / shirt -->
      <path d="M 40 68 L 40 95 Q 40 105 50 110 L 70 110 Q 80 105 80 95 L 80 68 Z" fill="#f5f5f5" stroke="#7B1224" stroke-width="1.5" />

      <!-- Coat buttons -->
      <circle cx="60" cy="78" r="1.5" fill="#7B1224" />
      <circle cx="60" cy="88" r="1.5" fill="#7B1224" />

      <!-- Left arm -->
      <line x1="40" y1="75" x2="25" y2="100" stroke="#f4c8c8" stroke-width="5" stroke-linecap="round" />

      <!-- Right arm -->
      <line x1="80" y1="75" x2="95" y2="100" stroke="#f4c8c8" stroke-width="5" stroke-linecap="round" />

      <!-- Left hand -->
      <circle cx="25" cy="100" r="4" fill="#f4c8c8" />

      <!-- Right hand -->
      <circle cx="95" cy="100" r="4" fill="#f4c8c8" />

      <!-- Left leg -->
      <line x1="48" y1="110" x2="45" y2="160" stroke="#333" stroke-width="5" stroke-linecap="round" />

      <!-- Right leg -->
      <line x1="72" y1="110" x2="75" y2="160" stroke="#333" stroke-width="5" stroke-linecap="round" />

      <!-- Left shoe -->
      <ellipse cx="45" cy="168" rx="6" ry="4" fill="#1a1a1a" />

      <!-- Right shoe -->
      <ellipse cx="75" cy="168" rx="6" ry="4" fill="#1a1a1a" />
    </svg>
  `;

  const speechBubble = speech
    ? `
      <div class="speech-bubble" style="
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 12px;
        background: white;
        border: 2px solid #7B1224;
        border-radius: 12px;
        padding: 12px 16px;
        max-width: 280px;
        font-size: 14px;
        color: #333;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        white-space: normal;
        z-index: 10;
      ">
        ${speech}
        <div style="
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #7B1224;
        "></div>
      </div>
    `
    : '';

  return `
    <div class="patient-wrapper" style="position: relative; display: inline-block;">
      ${speechBubble}
      <div class="patient-figure">
        ${svgContent}
      </div>
    </div>
  `;
}

function doctorSVG() {
  return `
    <div class="doctor-wrapper" style="display: inline-block;">
      <svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style="width: 100px; height: auto;">
        <!-- Head -->
        <circle cx="50" cy="30" r="18" fill="#f4c8c8" stroke="#7B1224" stroke-width="1.5" />

        <!-- Hair -->
        <path d="M 32 18 Q 30 8 50 5 Q 70 8 68 18" fill="#3d2817" />

        <!-- Glasses -->
        <circle cx="40" cy="28" r="6" fill="none" stroke="#333" stroke-width="1.2" />
        <circle cx="60" cy="28" r="6" fill="none" stroke="#333" stroke-width="1.2" />
        <line x1="46" y1="28" x2="54" y2="28" stroke="#333" stroke-width="1.2" />

        <!-- Eyes -->
        <circle cx="40" cy="28" r="2.5" fill="#1a1a1a" />
        <circle cx="60" cy="28" r="2.5" fill="#1a1a1a" />

        <!-- Mouth -->
        <path d="M 42 38 Q 50 40 58 38" stroke="#7B1224" stroke-width="1.2" fill="none" stroke-linecap="round" />

        <!-- Neck -->
        <rect x="46" y="48" width="8" height="10" fill="#f4c8c8" />

        <!-- White coat -->
        <path d="M 30 60 L 28 130 Q 28 140 38 142 L 62 142 Q 72 140 72 130 L 70 60 Z" fill="#f5f5f5" stroke="#7B1224" stroke-width="1.5" />

        <!-- Shirt under coat -->
        <path d="M 35 60 L 34 90 L 66 90 L 65 60 Z" fill="#fff" stroke="#ccc" stroke-width="0.5" />

        <!-- Tie -->
        <path d="M 50 55 L 48 75" stroke="#7B1224" stroke-width="2.5" stroke-linecap="round" />

        <!-- Stethoscope hint -->
        <path d="M 35 65 Q 45 70 55 65" fill="none" stroke="#999" stroke-width="2" stroke-linecap="round" />
        <circle cx="38" cy="62" r="2" fill="#999" />
        <circle cx="62" cy="62" r="2" fill="#999" />

        <!-- Left arm -->
        <line x1="35" y1="70" x2="20" y2="95" stroke="#f4c8c8" stroke-width="4" stroke-linecap="round" />

        <!-- Right arm -->
        <line x1="65" y1="70" x2="80" y2="95" stroke="#f4c8c8" stroke-width="4" stroke-linecap="round" />

        <!-- Left hand -->
        <circle cx="20" cy="95" r="3.5" fill="#f4c8c8" />

        <!-- Right hand -->
        <circle cx="80" cy="95" r="3.5" fill="#f4c8c8" />

        <!-- Left leg -->
        <line x1="40" y1="142" x2="38" y2="158" stroke="#333" stroke-width="4" stroke-linecap="round" />

        <!-- Right leg -->
        <line x1="60" y1="142" x2="62" y2="158" stroke="#333" stroke-width="4" stroke-linecap="round" />

        <!-- Left shoe -->
        <ellipse cx="38" cy="160" rx="4" ry="3" fill="#1a1a1a" />

        <!-- Right shoe -->
        <ellipse cx="62" cy="160" rx="4" ry="3" fill="#1a1a1a" />
      </svg>
      <div style="text-align: center; margin-top: 8px; font-size: 13px; color: #555; font-weight: 500;">
        Dokter Anda
      </div>
    </div>
  `;
}

// ============================================================================
// PART 2: OSCE JAVASCRIPT ENGINE
// ============================================================================

// State initialization
let osceState = {
  phase: 'intro',
  examinedIds: [],
  score: 0,
  lastFace: 'normal',
  lastSpeech: '',
  lastFinding: '',
  _selectedDx: [],
};

let currentCase = 0;

// Helper function to get the minimum exams required for current case
function getMinExamsRequired() {
  if (typeof OSCE_CASES === 'undefined' || !OSCE_CASES[currentCase]) {
    return 3;
  }
  return OSCE_CASES[currentCase].minExamsRequired || 3;
}

// Helper function to get current case data
function getCurrentCase() {
  if (typeof OSCE_CASES === 'undefined' || !OSCE_CASES[currentCase]) {
    return null;
  }
  return OSCE_CASES[currentCase];
}

// SVG scene rendering helper
function renderScene(faceState, speechText) {
  const caseData = getCurrentCase();
  if (!caseData) return '';

  return `
    <div class="osce-scene" style="display: flex; justify-content: space-around; align-items: center; margin: 2rem 0; min-height: 300px; padding: 2rem; background: #f9f7f5; border-radius: 12px;">
      <div style="flex: 1; text-align: center;">
        ${patientSVG(faceState, speechText)}
      </div>
      <div style="flex: 1; text-align: center;">
        ${doctorSVG()}
      </div>
    </div>
  `;
}

// Main render function
function renderOSCE() {
  const container = document.getElementById('osceApp');
  if (!container) {
    console.error('osceApp container not found');
    return;
  }

  const caseData = getCurrentCase();
  if (!caseData) {
    container.innerHTML = '<p style="color: #7B1224; font-size: 1.2rem; text-align: center;">No cases available.</p>';
    return;
  }

  let content = '';

  switch (osceState.phase) {
    case 'intro':
      content = `
        ${renderScene('normal', caseData.complaint)}
        <div style="text-align: center; margin: 2rem 0;">
          <button class="btn-maroon" onclick="startExam()" style="padding: 12px 32px; font-size: 1rem;">
            Mulai Pemeriksaan
          </button>
        </div>
      `;
      break;

    case 'exam':
      const minExams = getMinExamsRequired();
      const examsCompleted = osceState.examinedIds.length;
      const canAdvance = examsCompleted >= minExams;

      let findingBox = '';
      if (osceState.lastFinding) {
        findingBox = `
          <div class="finding-box" style="margin: 1.5rem 0; padding: 1.5rem; background: #fffbf7; border-left: 4px solid #7B1224; border-radius: 4px;">
            <strong style="color: #7B1224;">Latest Finding:</strong>
            <p style="margin: 0.5rem 0 0; color: #555;">${osceState.lastFinding}</p>
          </div>
        `;
      }

      const examButtons = (caseData.exams || [])
        .map(
          (exam) => {
            const isAlreadyExamined = osceState.examinedIds.includes(exam.id);
            const btnClass = isAlreadyExamined ? 'exam-btn already' : 'exam-btn';
            const btnText = isAlreadyExamined ? `✓ ${exam.name}` : exam.name;
            return `
              <button
                class="${btnClass}"
                onclick="doExam('${exam.id}')"
                ${isAlreadyExamined ? 'disabled' : ''}
                style="margin: 0.5rem; padding: 10px 16px; cursor: ${isAlreadyExamined ? 'not-allowed' : 'pointer'}; opacity: ${isAlreadyExamined ? 0.6 : 1};"
              >
                ${btnText}
              </button>
            `;
          }
        )
        .join('');

      const advanceButton = canAdvance
        ? `
          <div style="text-align: center; margin: 2rem 0;">
            <button class="btn-maroon" onclick="goToDiagnosis()" style="padding: 12px 32px; font-size: 1rem;">
              Lanjut ke Diagnosis
            </button>
          </div>
        `
        : `
          <div style="text-align: center; color: #999; margin: 1.5rem 0; font-size: 0.95rem;">
            Complete ${minExams - examsCompleted} more exam(s) to advance
          </div>
        `;

      content = `
        ${renderScene(osceState.lastFace, osceState.lastSpeech)}
        <div style="margin: 2rem 0;">
          <div class="exam-section" style="text-align: center;">
            <h3 style="color: #7B1224; margin-bottom: 1rem;">Select Examination</h3>
            <div style="display: flex; flex-wrap: wrap; justify-content: center;">
              ${examButtons}
            </div>
          </div>
          ${findingBox}
          <div style="text-align: center; color: #666; font-size: 0.95rem; margin: 1rem 0;">
            Exams completed: <strong>${examsCompleted}/${minExams}</strong>
          </div>
          ${advanceButton}
        </div>
      `;
      break;

    case 'diagnosis':
      const dxButtons = (caseData.diagnoses || [])
        .map(
          (dx, idx) => `
          <button
            class="dx-btn ${osceState._selectedDx.includes(idx) ? 'selected' : ''}"
            onclick="pickDx(${idx})"
            style="
              display: block;
              width: 100%;
              margin: 0.75rem 0;
              padding: 12px 16px;
              text-align: left;
              border: 2px solid #ddd;
              background: ${osceState._selectedDx.includes(idx) ? '#ffe8e8' : '#fff'};
              border-color: ${osceState._selectedDx.includes(idx) ? '#7B1224' : '#ddd'};
              border-radius: 6px;
              cursor: pointer;
              font-size: 1rem;
              transition: all 0.2s;
            "
          >
            ${dx.name}
          </button>
        `
        )
        .join('');

      content = `
        ${renderScene('worried', caseData.diagnosisPrompt || 'What is your diagnosis?')}
        <div style="margin: 2rem 0; max-width: 600px; margin-left: auto; margin-right: auto;">
          <div class="diagnosis-section">
            <h3 style="color: #7B1224; margin-bottom: 1.5rem;">Select Diagnosis</h3>
            ${dxButtons}
          </div>
          <div style="text-align: center; margin: 2rem 0;">
            <button class="btn-maroon" onclick="submitDiagnosis()" style="padding: 12px 32px; font-size: 1rem;">
              Submit Diagnosis
            </button>
          </div>
        </div>
      `;
      break;

    case 'result':
      const passScore = osceState.score >= 50;
      const resultFace = passScore ? 'happy' : 'worried';
      const resultClass = passScore ? 'osce-result pass' : 'osce-result fail';
      const resultMessage = passScore ? 'Well done! You identified the correct diagnosis.' : 'Review the findings and try again.';

      content = `
        ${renderScene(resultFace, resultMessage)}
        <div class="${resultClass}" style="text-align: center; margin: 2rem 0; padding: 2rem; background: ${passScore ? '#e8f5e9' : '#ffebee'}; border-radius: 12px;">
          <div class="score-display" style="font-size: 3rem; font-weight: bold; color: ${passScore ? '#4caf50' : '#f44336'}; margin-bottom: 1rem;">
            ${osceState.score}%
          </div>
          <p style="font-size: 1.1rem; color: #333; margin-bottom: 2rem;">
            ${resultMessage}
          </p>
          <div style="display: flex; justify-content: center; gap: 1rem;">
            <button class="btn-maroon" onclick="restartCase()" style="padding: 10px 24px;">
              Retry Case
            </button>
            <button class="btn-outline-maroon" onclick="nextCase()" style="padding: 10px 24px; border: 2px solid #7B1224; background: transparent; color: #7B1224; cursor: pointer;">
              Next Case
            </button>
          </div>
        </div>
      `;
      break;

    default:
      content = '<p style="color: #7B1224;">Unknown phase.</p>';
  }

  container.innerHTML = content;
}

// Exam handler
function doExam(examId) {
  const caseData = getCurrentCase();
  if (!caseData) return;

  if (osceState.examinedIds.includes(examId)) {
    return;
  }

  osceState.examinedIds.push(examId);

  const exam = caseData.exams.find((e) => e.id === examId);
  if (!exam) return;

  osceState.lastSpeech = exam.feedback || 'Finding noted.';
  osceState.lastFinding = exam.finding || 'No finding recorded.';

  if (exam.correct) {
    osceState.score += 10;
    osceState.lastFace = 'normal';
  } else {
    osceState.lastFace = 'pain';
    setTimeout(() => {
      osceState.lastFace = 'normal';
      osceState.lastSpeech = 'Let me continue the examination.';
      renderOSCE();
    }, 2500);
  }

  renderOSCE();
}

// Diagnosis submission handler
function submitDiagnosis() {
  const caseData = getCurrentCase();
  if (!caseData || osceState._selectedDx.length === 0) {
    alert('Please select a diagnosis.');
    return;
  }

  // Assuming the first selected diagnosis is the one being submitted
  const selectedIdx = osceState._selectedDx[0];
  const selectedDx = caseData.diagnoses[selectedIdx];

  if (selectedDx && selectedDx.correct) {
    osceState.score += 20;
    osceState.score = Math.min(osceState.score, 100);
  } else {
    osceState.score -= 10;
    osceState.score = Math.max(osceState.score, 0);
  }

  setTimeout(() => {
    osceState.phase = 'result';
    renderOSCE();
  }, 1800);
}

// Helper functions
function startExam() {
  osceState.phase = 'exam';
  renderOSCE();
}

function goToDiagnosis() {
  osceState.phase = 'diagnosis';
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
  };
  renderOSCE();
}

function nextCase() {
  if (typeof OSCE_CASES !== 'undefined' && currentCase < OSCE_CASES.length - 1) {
    currentCase += 1;
    restartCase();
  } else {
    alert('No more cases available.');
  }
}

function pickDx(index) {
  if (osceState._selectedDx.includes(index)) {
    osceState._selectedDx = osceState._selectedDx.filter((i) => i !== index);
  } else {
    osceState._selectedDx = [index];
  }
  renderOSCE();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('osceApp');
  if (container) {
    renderOSCE();
  }
});
