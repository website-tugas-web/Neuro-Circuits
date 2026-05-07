// Neuro Circuits - Application State Machine
const app = {
  // State
  state: {
    currentSection: 'intro',
    quizStarted: false,
    quizMode: 'questions',
    currentCaseIndex: 0,
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 25,
    answers: [],
    completedExams: new Set(),
    selectedAnswer: null,
    quizTimeRemaining: 60,
    quizTimerRunning: false,
    patientFaceState: 'normal',
    pomodoroMode: 'focus',
    pomodoroDurations: {
      focus: 25 * 60,
      shortBreak: 5 * 60,
      longBreak: 10 * 60,
      deep: 50 * 60
    },
    pomodoroTimeRemaining: 25 * 60,
    pomodoroRunning: false,
    pomodoroSession: 1
  },

  // Shuffle helper using Fisher-Yates algorithm
  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  // Quiz Questions - use TEST_QUESTIONS from test-data.js if available, otherwise fall back to default
  get questions() {
    if (typeof TEST_QUESTIONS !== 'undefined') {
      // Convert NEUAAA-106 format to app format
      const converted = TEST_QUESTIONS.map(q => {
        // Create array of options with their original indices
        const optionsWithIndices = [
          { text: q.options.A, originalIndex: 0 },
          { text: q.options.B, originalIndex: 1 },
          { text: q.options.C, originalIndex: 2 },
          { text: q.options.D, originalIndex: 3 },
          { text: q.options.E, originalIndex: 4 }
        ];

        // Shuffle the options
        const shuffledOptions = this.shuffleArray(optionsWithIndices);

        // Find the new index of the correct answer
        const correctAnswerOriginalIndex = ['A', 'B', 'C', 'D', 'E'].indexOf(q.answer);
        const newCorrectIndex = shuffledOptions.findIndex(opt => opt.originalIndex === correctAnswerOriginalIndex);

        return {
          id: q.id,
          text: q.vignette + '\n\n' + q.question,
          examType: 'mcq',
          options: shuffledOptions.map(opt => opt.text),
          correctAnswer: newCorrectIndex,
          explanation: q.explanation,
          topic: q.topic,
          figureRef: q.figureRef
        };
      });

      // Return shuffled questions if this is a fresh start
      if (!this._shuffledQuestions) {
        this._shuffledQuestions = this.shuffleArray(converted);
      }
      return this._shuffledQuestions;
    }
    // Fallback to original questions
    return this._defaultQuestions;
  },
  _defaultQuestions: [
    {id:1,text:'Which nerve roots are tested by the patellar (knee jerk) reflex?',examType:'patellar',options:['L2-L4','L5-S2','S1-S2','C5-C6'],correctAnswer:0},
    {id:2,text:'Which nerve roots are tested by the Achilles (ankle jerk) reflex?',examType:'achilles',options:['L2-L4','S1-S2','L5-S1','C7-C8'],correctAnswer:1},
    {id:3,text:"What does a grading of '4' in the reflex scale indicate according to PPK?",examType:'assessment',options:['Normal reflex response','Brisk reflex with clonus','Weak/diminished reflex','Absent reflex'],correctAnswer:1},
    {id:4,text:'Which of the following findings is characteristic of Upper Motor Neuron (UMN) lesions?',examType:'umn',options:['Hyporeflexia and flaccidity','Areflexia and muscle atrophy','Hyperreflexia and spasticity','Normal reflexes with weakness'],correctAnswer:2},
    {id:5,text:'What is the clinical significance of clonus in reflex examination?',examType:'umn',options:['It indicates normal reflex response','It is a sign of pathological UMN lesion affecting central motor neurons','It is always present in healthy individuals','It indicates peripheral nerve damage'],correctAnswer:1},
    {id:6,text:'Which of the following is characteristic of Lower Motor Neuron (LMN) lesions?',examType:'lmn',options:['Hyperreflexia with clonus','Hyporeflexia or areflexia','Positive Babinski sign','Increased muscle tone'],correctAnswer:1},
    {id:7,text:'The biceps reflex tests which nerve root levels?',examType:'biceps',options:['C5-C6','C7-C8','T1','L2-L4'],correctAnswer:0},
    {id:8,text:'What does the Babinski sign test for?',examType:'babinski',options:['Peripheral nerve function','Dorsal root ganglion integrity','Upper Motor Neuron pathway integrity','Spinal cord segmental function'],correctAnswer:2},
    {id:9,text:'How is the Babinski reflex elicited according to PPK material?',examType:'babinski',options:['By tapping the Achilles tendon with a reflex hammer','By firmly stroking the lateral sole of the foot from heel to big toe base','By gently pinching the gastrocnemius muscle','By tapping the patella tendon'],correctAnswer:1},
    {id:10,text:'Which pathological reflex is tested by stroking along the anterior tibialis from proximal to distal?',examType:'pathological',options:['Chaddock reflex','Gordon reflex','Oppenheim reflex','Hofmann-Tromner reflex'],correctAnswer:2},
    {id:11,text:'What is tested by the Chaddock reflex?',examType:'pathological',options:['Gastrocnemius muscle response','Dorsal foot response (similar to Babinski)','Finger flexion response','Abdominal wall contraction'],correctAnswer:1},
    {id:12,text:'Which reflex is elicited by pinching the gastrocnemius muscle?',examType:'pathological',options:['Schaefer reflex','Gordon reflex','Gonda reflex','Hofmann-Tromner reflex'],correctAnswer:1},
    {id:13,text:'In a patient with a positive Babinski sign on the right and negative on the left, what does this suggest?',examType:'umn',options:['Bilateral lower motor neuron lesion','Right-sided upper motor neuron lesion','Normal neurological exam','Bilateral peripheral neuropathy'],correctAnswer:1},
    {id:14,text:'A patient has normal patellar reflexes but absent Achilles reflexes. Which spinal levels are likely affected?',examType:'lmn',options:['L2-L4 (lumbar)','S1-S2 (sacral)','C5-C6 (cervical)','T1-T6 (thoracic)'],correctAnswer:1},
    {id:15,text:'A 52-year-old patient presents with unilateral leg weakness and hyperreflexia with sustained clonus. What does this suggest?',examType:'umn',options:['Guillain-Barré Syndrome','Peripheral neuropathy','Upper motor neuron lesion (stroke or spinal cord injury)','Nerve root compression'],correctAnswer:2},
    {id:16,text:'A patient has bilateral leg weakness, grade 1+ reflexes, absent Achilles reflexes, with negative Babinski signs. What pattern is this?',examType:'lmn',options:['Central pontine myelinolysis','Lower motor neuron lesion','Upper motor neuron stroke','Cerebellar ataxia'],correctAnswer:1},
    {id:17,text:'Which of the following best describes the difference between grade 2 and grade 4 reflexes in PPK?',examType:'assessment',options:['Grade 2 is weak, grade 4 is normal','Grade 2 is brisk, grade 4 is brisk with clonus','Grade 2 is normal, grade 4 is absent','Grade 2 involves only upper extremities, grade 4 lower'],correctAnswer:1},
    {id:18,text:'In newborns, clonus lasting how many beats is considered normal according to PPK?',examType:'assessment',options:['1-2 beats','3-4 beats','5-6 beats','More than 7 beats is always pathological'],correctAnswer:1},
    {id:19,text:'Which of the following conditions can cause areflexia according to PPK?',examType:'lmn',options:['Spinal cord compression','Brainstem lesion','Spinal root lesion (syringomyelia)','Cerebellar ataxia'],correctAnswer:2},
    {id:20,text:'A patient in acute coma has absent reflexes bilaterally with negative Babinski signs. What does this suggest?',examType:'assessment',options:['UMN lesion','Acute spinal cord injury','Acute severe CNS depression (acute phase may show areflexia)','Chronic peripheral neuropathy'],correctAnswer:2},
    {id:21,text:'How would you clinically differentiate LMN radiculopathy from peripheral neuropathy based on reflexes?',examType:'assessment',options:['Both present with identical reflex patterns','Radiculopathy shows areflexia in specific dermatome, neuropathy shows diffuse hyporeflexia','Neuropathy causes hyperreflexia, radiculopathy causes areflexia','Radiculopathy always affects cervical reflexes only'],correctAnswer:1},
    {id:22,text:'A 3-year-old child has reflexes graded +3 with brief clonus (2-3 beats). Is this concerning?',examType:'assessment',options:['Yes, always indicates pathological UMN lesion','No, children normally have brisk reflexes with brief clonus','Only concerning if bilateral and asymmetric','Requires imaging studies regardless'],correctAnswer:1},
    {id:23,text:'What is the primary purpose of testing pathological reflexes in clinical examination?',examType:'pathological',options:['To assess peripheral nerve function','To detect upper motor neuron pathway involvement/lesions','To evaluate cerebellar function','To assess proprioceptive sensation'],correctAnswer:1},
    {id:24,text:'A patient presents with right-sided leg weakness, hyperreflexia with clonus, positive Babinski on right, but normal arm reflexes. What is most likely?',examType:'umn',options:['Right-sided brain lesion affecting motor cortex','Right lumbar spinal cord lesion','Right L5 nerve root compression','Right-sided peripheral neuropathy'],correctAnswer:0},
    {id:25,text:"According to PPK references, which is the most authoritative source for reflex examination?",examType:'assessment',options:["Gray's Anatomy","Bickley's Bates Guide to Physical Examination","Harrison's Internal Medicine","Campbell's Operative Orthopaedics"],correctAnswer:1}
  ],

  // OSCE Cases
  cases: [
    {
      id: 'case_umn_001',
      title: 'Case 1: Upper Motor Neuron Lesion',
      indonesianOpening: 'Selamat pagi. Saya adalah Budi, 58 tahun. Tiga hari lalu saya mengalami kelemahan kaki kanan mendadak setelah merasa pusing.',
      englishSummary: 'Good morning. I am Budi, 58 years old. Three days ago I suddenly developed right leg weakness after dizziness.',
      symptoms: ['Acute onset right leg weakness (3 days)', 'Right arm weakness', 'Difficulty with ambulation'],
      examinations: [
        {name: 'Refleks Patella', nerveRoot: 'L2-L4', result: '+4 hyperactive', correct: true},
        {name: 'Refleks Achilles', nerveRoot: 'S1-S2', result: '+4 with clonus', correct: true},
        {name: 'Refleks Biceps', nerveRoot: 'C5-C6', result: '+4', correct: true},
        {name: 'Babinski Sign', pathological: true, result: 'Positive right', correct: true}
      ],
      correctDiagnosis: 'Upper Motor Neuron Lesion - Cerebrovascular Accident (CVA/Stroke)',
      keyFindings: ['Hyperreflexia (3+ to 4+ grade)', 'Sustained clonus (5 beats)', 'Positive Babinski sign', 'Increased muscle tone (spasticity)']
    },
    {
      id: 'case_lmn_001',
      title: 'Case 2: Lower Motor Neuron Lesion',
      indonesianOpening: 'Selamat pagi. Nama saya Siti, 45 tahun. Seminggu lalu saya mulai merasakan kelemahan di kedua kaki saya yang semakin memburuk.',
      englishSummary: 'Good morning. My name is Siti, 45 years old. A week ago I started feeling weakness in both legs that has gotten progressively worse.',
      symptoms: ['Progressive bilateral leg weakness (1 week)', 'Bilateral paresthesias (tingling)', 'Difficulty walking'],
      examinations: [
        {name: 'Refleks Patella', nerveRoot: 'L2-L4', result: '+1 diminished', correct: true},
        {name: 'Refleks Achilles', nerveRoot: 'S1-S2', result: 'Absent (0)', correct: true},
        {name: 'Refleks Biceps', nerveRoot: 'C5-C6', result: '+2 normal', correct: true},
        {name: 'Babinski Sign', pathological: true, result: 'Negative bilaterally', correct: true}
      ],
      correctDiagnosis: 'Lower Motor Neuron Lesion - Guillain-Barré Syndrome or Cauda Equina Syndrome',
      keyFindings: ['Hyporeflexia to areflexia in lower extremities', 'Flaccid muscle tone', 'Negative Babinski signs', 'Normal upper extremity reflexes']
    }
  ],

  // Initialize
  init() {
    this.setupEventListeners();
    this.renderPomodoroModes();
    this.loadPomodoroState();
  },

  setupEventListeners() {
    // Mobile nav toggle
    const toggle = document.getElementById('nav-toggle');
    if (toggle) {
      toggle.addEventListener('change', () => {
        const scrim = document.querySelector('.nav-scrim');
        if (scrim) scrim.style.display = toggle.checked ? 'block' : 'none';
      });
    }

    // Close nav on link click
    document.querySelectorAll('.sidebar__nav a').forEach(link => {
      link.addEventListener('click', () => {
        const toggle = document.getElementById('nav-toggle');
        if (toggle) toggle.checked = false;
      });
    });

    // Option selection for quiz
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('option')) {
        if (!this.state.quizTimerRunning) return;
        this.selectAnswer(Array.from(document.querySelectorAll('.option')).indexOf(e.target));
      }
    });
  },

  // Quiz Logic
  startQuiz() {
    this.state.quizStarted = true;
    this.state.currentQuestionIndex = 0;
    this.state.score = 0;
    this.state.answers = [];
    this.state.selectedAnswer = null;
    this.state.completedExams.clear();
    // Reset shuffled questions to get a fresh random order
    this._shuffledQuestions = null;
    // Update total questions dynamically
    this.state.totalQuestions = this.questions.length;
    this.loadQuestion();
    this.startQuizTimer();
  },

  loadQuestion() {
    if (this.state.currentQuestionIndex >= this.questions.length) {
      this.endQuiz();
      return;
    }

    const question = this.questions[this.state.currentQuestionIndex];
    const qNum = document.getElementById('current-question');
    const qTotal = document.getElementById('total-questions');
    const qText = document.getElementById('question-text');
    const pBar = document.getElementById('progress-bar');

    if (qNum) qNum.textContent = this.state.currentQuestionIndex + 1;
    if (qTotal) qTotal.textContent = this.state.totalQuestions;
    if (qText) {
      qText.textContent = question.text;

      // Add figure if question has figureRef
      if (question.figureRef && typeof REFLEX_DIAGRAMS !== 'undefined') {
        const figureContainer = document.createElement('div');
        figureContainer.style.marginTop = '1.5rem';

        const pageNum = question.figureRef.page;
        // Map known figures to SVG diagram keys
        const diagramMap = {
          7: 'babinski',
          8: 'oppenheim',
          21: 'babinski',
          22: 'chaddock',
          23: 'oppenheim',
          24: 'gordon',
          25: 'schaefer'
        };
        const diagramKey = diagramMap[pageNum];

        if (diagramKey && REFLEX_DIAGRAMS[diagramKey]) {
          figureContainer.innerHTML = REFLEX_DIAGRAMS[diagramKey];

          const caption = document.createElement('p');
          caption.textContent = question.figureRef.description;
          caption.style.marginTop = '0.75rem';
          caption.style.fontSize = '0.9rem';
          caption.style.color = '#666';
          caption.style.fontStyle = 'italic';
          caption.style.textAlign = 'center';

          figureContainer.appendChild(caption);
          qText.appendChild(figureContainer);
        }
      }
    }
    if (pBar) pBar.style.width = ((this.state.currentQuestionIndex / this.state.totalQuestions) * 100) + '%';

    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = option;
        btn.addEventListener('click', () => this.selectAnswer(index));
        optionsContainer.appendChild(btn);
      });
    }

    this.state.selectedAnswer = null;
    this.state.quizTimeRemaining = 60;
    this.stopQuizTimer();
    this.startQuizTimer();
  },

  selectAnswer(optionIndex) {
    if (this.state.selectedAnswer !== null) return;

    const question = this.questions[this.state.currentQuestionIndex];
    const isCorrect = optionIndex === question.correctAnswer;

    this.state.selectedAnswer = optionIndex;
    this.state.answers.push({
      questionIndex: this.state.currentQuestionIndex,
      selected: optionIndex,
      correct: isCorrect
    });

    if (isCorrect) {
      this.state.score++;
    }

    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
      opt.disabled = true;
      if (idx === question.correctAnswer) {
        opt.classList.add('correct');
      } else if (idx === optionIndex && !isCorrect) {
        opt.classList.add('incorrect');
      }
    });

    // Stop the timer when answer is selected
    this.stopQuizTimer();

    // Show explanation
    this.showExplanation(isCorrect, question.explanation);

    // Show next button
    this.showNextButton();
  },

  showExplanation(isCorrect, explanation) {
    const optionsContainer = document.getElementById('options-container');
    if (!optionsContainer) return;

    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'explanation-box';
    explanationDiv.style.marginTop = '1.5rem';
    explanationDiv.style.padding = '1rem';
    explanationDiv.style.borderRadius = '8px';
    explanationDiv.style.backgroundColor = isCorrect ? '#e8f5e9' : '#ffebee';
    explanationDiv.style.border = isCorrect ? '2px solid #4caf50' : '2px solid #f44336';

    const title = document.createElement('h4');
    title.style.margin = '0 0 0.5rem 0';
    title.style.color = isCorrect ? '#2e7d32' : '#c62828';
    title.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
    explanationDiv.appendChild(title);

    const text = document.createElement('p');
    text.style.margin = '0';
    text.style.lineHeight = '1.6';
    text.textContent = explanation;
    explanationDiv.appendChild(text);

    optionsContainer.appendChild(explanationDiv);
  },

  showNextButton() {
    const optionsContainer = document.getElementById('options-container');
    if (!optionsContainer) return;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn-pill';
    nextBtn.textContent = 'Next Question';
    nextBtn.style.marginTop = '1.5rem';
    nextBtn.style.width = '100%';
    nextBtn.style.padding = '12px 24px';
    nextBtn.onclick = () => this.nextQuestion();

    optionsContainer.appendChild(nextBtn);
  },

  nextQuestion() {
    this.state.currentQuestionIndex++;
    this.stopQuizTimer();
    this.loadQuestion();
  },

  startQuizTimer() {
    if (this.state.quizTimerRunning) return;
    this.state.quizTimerRunning = true;

    this.quizTimerId = setInterval(() => {
      this.state.quizTimeRemaining--;
      this.updateTimerDisplay();

      if (this.state.quizTimeRemaining <= 0) {
        this.stopQuizTimer();
        this.nextQuestion();
      }
    }, 1000);
  },

  stopQuizTimer() {
    clearInterval(this.quizTimerId);
    this.state.quizTimerRunning = false;
  },

  updateTimerDisplay() {
    const timerElement = document.getElementById('timer-seconds');
    const timerContainer = document.getElementById('timer-display');

    if (timerElement) timerElement.textContent = this.state.quizTimeRemaining;

    if (timerContainer) {
      timerContainer.classList.remove('warning', 'critical');
      if (this.state.quizTimeRemaining <= 10) {
        timerContainer.classList.add('critical');
      } else if (this.state.quizTimeRemaining <= 20) {
        timerContainer.classList.add('warning');
      }
    }
  },

  endQuiz() {
    this.stopQuizTimer();
    const pBar = document.getElementById('progress-bar');
    if (pBar) pBar.style.width = '100%';
    this.displayResults();
  },

  renderReflexButtons() {
    const container = document.getElementById('reflex-buttons-container');
    if (!container) return;

    const exams = ['Patellar', 'Babinski', 'Corneal', 'Biceps', 'Achilles', 'Gag'];
    container.innerHTML = '';
    exams.forEach((exam, idx) => {
      const btn = document.createElement('button');
      btn.className = 'reflex-btn';
      btn.textContent = `${idx + 1}. ${exam}`;
      btn.disabled = true;
      container.appendChild(btn);
    });
  },

  updateExamTracking() {
    const completed = this.state.completedExams.size;
    const requirement = document.getElementById('exam-status');
    const exams = Array.from(this.state.completedExams);

    if (requirement) {
      if (completed >= 3) {
        requirement.classList.add('met');
        requirement.classList.remove('not-met');
        requirement.innerHTML = `
          <strong>✓ Unlocked!</strong> You've completed ${completed} exams and unlocked diagnosis.
          <br><em>${exams.join(', ')}</em>
        `;
      } else {
        requirement.classList.add('not-met');
        requirement.classList.remove('met');
        requirement.innerHTML = `
          <strong>${completed}/3</strong> exams completed. ${3 - completed} more needed for diagnosis.
          <br><em>${exams.length > 0 ? 'Completed: ' + exams.join(', ') : 'No exams completed yet'}</em>
        `;
      }
    }

    const diagnosisMsg = document.getElementById('diagnosis-message');
    if (diagnosisMsg) {
      if (completed >= 3) {
        diagnosisMsg.classList.remove('locked');
        diagnosisMsg.classList.add('unlocked');
        diagnosisMsg.innerHTML = `
          <strong>✓ Diagnosis Unlocked!</strong> You've completed enough reflex exams.
          <br>Review your results below for detailed diagnosis information.
        `;
      }
    }
  },

  displayResults() {
    const percentage = Math.round((this.state.score / this.state.totalQuestions) * 100);
    const scoreEl = document.getElementById('final-score');
    const answeredEl = document.getElementById('result-answered');
    const correctEl = document.getElementById('result-correct');
    const messageEl = document.getElementById('result-message');

    if (scoreEl) scoreEl.textContent = `${percentage}%`;
    if (answeredEl) answeredEl.textContent = this.state.answers.length;
    if (correctEl) correctEl.textContent = this.state.score;

    if (messageEl) {
      if (percentage >= 80) {
        messageEl.textContent = 'Excellent! You have a strong understanding of medical reflexes.';
      } else if (percentage >= 60) {
        messageEl.textContent = 'Good job! Review the areas where you need improvement.';
      } else {
        messageEl.textContent = 'Keep practicing to improve your reflex knowledge!';
      }
    }
  },

  // Pomodoro Timer
  renderPomodoroModes() {
    const container = document.getElementById('modes-container');
    if (!container) return;

    const modes = [
      { id: 'focus', label: 'Focus', duration: 25 },
      { id: 'shortBreak', label: 'Short Break', duration: 5 },
      { id: 'longBreak', label: 'Long Break', duration: 10 },
      { id: 'deep', label: 'Deep Focus', duration: 50 }
    ];

    container.innerHTML = '';
    modes.forEach(mode => {
      const btn = document.createElement('button');
      btn.className = `mode-btn ${mode.id === 'focus' ? 'active' : ''}`;
      btn.setAttribute('data-mode', mode.id);
      btn.textContent = `${mode.label}\n${mode.duration}m`;
      btn.onclick = () => this.selectPomodoroMode(mode.id);
      container.appendChild(btn);
    });
  },

  selectPomodoroMode(modeId) {
    this.state.pomodoroMode = modeId;
    this.state.pomodoroTimeRemaining = this.state.pomodoroDurations[modeId];
    this.state.pomodoroRunning = false;

    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-mode="${modeId}"]`).classList.add('active');

    this.updatePomodoroDisplay();
  },

  pomodoroStart() {
    if (this.state.pomodoroRunning) return;
    this.state.pomodoroRunning = true;
    this.state.pomodoroStartTime = Date.now();
    this.state.pomodoroInitialTime = this.state.pomodoroTimeRemaining;
    this.savePomodoroState();

    this.pomodoroTimerId = setInterval(() => {
      this.state.pomodoroTimeRemaining--;
      this.updatePomodoroDisplay();
      this.savePomodoroState();

      if (this.state.pomodoroTimeRemaining <= 0) {
        this.pomodoroComplete();
      }
    }, 1000);
  },

  pomodoroPause() {
    this.state.pomodoroRunning = false;
    clearInterval(this.pomodoroTimerId);
    this.savePomodoroState();
  },

  pomodoroReset() {
    this.state.pomodoroRunning = false;
    clearInterval(this.pomodoroTimerId);
    this.state.pomodoroTimeRemaining = this.state.pomodoroDurations[this.state.pomodoroMode];
    this.updatePomodoroDisplay();
    this.savePomodoroState();
  },

  updatePomodoroDisplay() {
    const mins = Math.floor(this.state.pomodoroTimeRemaining / 60);
    const secs = this.state.pomodoroTimeRemaining % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const timerEl = document.getElementById('pomodoro-timer');
    const labelEl = document.getElementById('session-label');

    if (timerEl) timerEl.textContent = timeStr;
    if (labelEl) {
      labelEl.textContent =
        this.state.pomodoroMode === 'focus' ? 'Focus' :
        this.state.pomodoroMode === 'shortBreak' ? 'Short Break' :
        this.state.pomodoroMode === 'longBreak' ? 'Long Break' : 'Deep Focus';
    }

    const totalDuration = this.state.pomodoroDurations[this.state.pomodoroMode];
    const elapsedPercent = (totalDuration - this.state.pomodoroTimeRemaining) / totalDuration;
    const circumference = 816.81;
    const dashOffset = circumference * elapsedPercent;
    const ring = document.getElementById('progress-ring');
    if (ring) {
      ring.style.strokeDashoffset = dashOffset;
    }
  },

  pomodoroComplete() {
    this.state.pomodoroRunning = false;
    if (this.state.pomodoroMode === 'focus') {
      this.state.pomodoroSession++;
    }
    this.savePomodoroState();
    alert(`${this.state.pomodoroMode} session complete!`);
  },

  savePomodoroState() {
    const state = {
      mode: this.state.pomodoroMode,
      timeRemaining: this.state.pomodoroTimeRemaining,
      running: this.state.pomodoroRunning,
      startTime: this.state.pomodoroStartTime,
      initialTime: this.state.pomodoroInitialTime,
      session: this.state.pomodoroSession
    };
    localStorage.setItem('pomodoroState', JSON.stringify(state));
  },

  loadPomodoroState() {
    const saved = localStorage.getItem('pomodoroState');
    if (!saved) return;

    try {
      const state = JSON.parse(saved);
      this.state.pomodoroMode = state.mode;
      this.state.pomodoroSession = state.session || 1;

      if (state.running && state.startTime && state.initialTime) {
        const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
        const remaining = state.initialTime - elapsed;

        if (remaining > 0) {
          this.state.pomodoroTimeRemaining = remaining;
          this.state.pomodoroRunning = true;
          this.state.pomodoroStartTime = state.startTime;
          this.state.pomodoroInitialTime = state.initialTime;

          this.pomodoroTimerId = setInterval(() => {
            this.state.pomodoroTimeRemaining--;
            this.updatePomodoroDisplay();
            this.savePomodoroState();

            if (this.state.pomodoroTimeRemaining <= 0) {
              this.pomodoroComplete();
            }
          }, 1000);
        } else {
          this.state.pomodoroTimeRemaining = this.state.pomodoroDurations[this.state.pomodoroMode];
          this.state.pomodoroRunning = false;
        }
      } else {
        this.state.pomodoroTimeRemaining = state.timeRemaining;
        this.state.pomodoroRunning = false;
      }

      this.updatePomodoroDisplay();
      if (document.querySelector('.mode-btn')) {
        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-mode="${this.state.pomodoroMode}"]`);
        if (activeBtn) activeBtn.classList.add('active');
      }
    } catch (e) {
      console.error('Failed to load pomodoro state:', e);
    }
  },

  restart() {
    this.state = {
      currentSection: 'intro',
      quizStarted: false,
      quizMode: 'questions',
      currentCaseIndex: 0,
      currentQuestionIndex: 0,
      score: 0,
      totalQuestions: 25,
      answers: [],
      completedExams: new Set(),
      selectedAnswer: null,
      quizTimeRemaining: 60,
      quizTimerRunning: false,
      patientFaceState: 'normal',
      pomodoroMode: 'focus',
      pomodoroDurations: {
        focus: 25 * 60,
        shortBreak: 5 * 60,
        longBreak: 10 * 60,
        deep: 50 * 60
      },
      pomodoroTimeRemaining: 25 * 60,
      pomodoroRunning: false,
      pomodoroSession: 1
    };
  }
};

// Expose app to window for inline scripts
window.app = app;

// Auto-init when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
