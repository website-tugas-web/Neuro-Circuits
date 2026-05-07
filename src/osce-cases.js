// OSCE case data — stub file (will be replaced by NEUAAA-163)
// Each case includes doctor speech, patient speech/face per exam, and diagnosis cues.

const OSCE_CASES = [
  {
    id: 1,
    complaint: "Saya merasa lengan saya lemah, Dok.",
    doctorIntro: "Selamat pagi. Saya akan memeriksa Anda hari ini. Ceritakan keluhan Anda.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis yang paling mungkin?",
    doctorPass: "Diagnosis Anda tepat. Kerja bagus!",
    doctorFail: "Sayangnya diagnosis Anda kurang tepat. Mari kita tinjau kembali temuan pemeriksaan.",
    diagnosisPrompt: "Based on your examination findings, what is the most likely diagnosis?",
    minExamsRequired: 3,
    exams: [
      {
        id: "exam-1",
        name: "Periksa Kekuatan Lengan",
        correct: true,
        doctorPrompt: "Saya akan menguji kekuatan lengan pasien.",
        patientSpeech: "Lengan kanan saya terasa lemah, Dok.",
        patientFace: "worried",
        feedback: "Good - I notice weakness on the right side.",
        finding: "Kelemahan lengan kanan, grade 4/5"
      },
      {
        id: "exam-2",
        name: "Tes Refleks",
        correct: true,
        doctorPrompt: "Sekarang saya periksa refleks tendon dalam.",
        patientSpeech: "Rasanya lebih sensitif di sisi kanan.",
        patientFace: "normal",
        feedback: "The reflexes are hyperactive on the right.",
        finding: "Hiperrefleksia sisi kanan, respons cepat"
      },
      {
        id: "exam-3",
        name: "Periksa Tanda Babinski",
        correct: true,
        doctorPrompt: "Saya akan memeriksa refleks patologis kaki.",
        patientSpeech: "Aduh, agak tidak nyaman.",
        patientFace: "pain",
        feedback: "The Babinski sign is present - upgoing toe on the right.",
        finding: "Tanda Babinski positif sisi kanan"
      },
      {
        id: "exam-4",
        name: "Periksa Sensasi",
        correct: false,
        doctorPrompt: "Mari kita periksa sensasi raba dan nyeri.",
        patientSpeech: "Saya bisa merasakan sentuhan dengan normal.",
        patientFace: "normal",
        feedback: "Sensation is normal - this doesn't help narrow it down.",
        finding: "Sensasi intak bilateral"
      },
      {
        id: "exam-5",
        name: "Periksa Saraf Kranial",
        correct: true,
        doctorPrompt: "Saya akan memeriksa fungsi saraf kranial.",
        patientSpeech: "Wajah saya terasa sedikit lemah di sisi kanan.",
        patientFace: "worried",
        feedback: "Slight facial droop on the right, consistent with upper motor neuron lesion.",
        finding: "Paresis fasial sentral kanan"
      },
      {
        id: "exam-6",
        name: "Tes Koordinasi",
        correct: false,
        doctorPrompt: "Coba sentuh hidung Anda lalu jari saya bergantian.",
        patientSpeech: "Baik, Dok. Saya bisa melakukannya.",
        patientFace: "normal",
        feedback: "Coordination is intact — not helpful for this presentation.",
        finding: "Koordinasi baik, tidak ada dismetria"
      }
    ],
    diagnoses: [
      { id: "dx-1", name: "Stroke Iskemik Akut — hemisfer kiri", correct: true },
      { id: "dx-2", name: "Neuropati perifer", correct: false },
      { id: "dx-3", name: "Miastenia gravis", correct: false },
      { id: "dx-4", name: "Radikulopati servikal", correct: false }
    ]
  },
  {
    id: 2,
    complaint: "Saya kesulitan berjalan akhir-akhir ini, Dok.",
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda. Silakan ceritakan keluhan Anda.",
    doctorDiagnosisCue: "Apa diagnosis Anda berdasarkan temuan pemeriksaan tadi?",
    doctorPass: "Benar sekali! Diagnosis Anda sesuai dengan temuan klinis.",
    doctorFail: "Diagnosis tersebut kurang tepat. Perhatikan kembali pola temuan pemeriksaan.",
    diagnosisPrompt: "What is your diagnosis based on the findings?",
    minExamsRequired: 3,
    exams: [
      {
        id: "exam-7",
        name: "Tes Cara Berjalan",
        correct: true,
        doctorPrompt: "Silakan berjalan ke ujung ruangan dan kembali.",
        patientSpeech: "Saya merasa tidak stabil saat berjalan.",
        patientFace: "worried",
        feedback: "I see an ataxic gait pattern.",
        finding: "Gaya jalan lebar, ataksik"
      },
      {
        id: "exam-8",
        name: "Tes Romberg",
        correct: true,
        doctorPrompt: "Berdiri tegak dengan kaki rapat, lalu tutup mata.",
        patientSpeech: "Saya merasa sangat tidak seimbang!",
        patientFace: "pain",
        feedback: "Unable to maintain balance with eyes closed.",
        finding: "Tanda Romberg positif"
      },
      {
        id: "exam-9",
        name: "Tes Tunjuk Hidung-Jari",
        correct: true,
        doctorPrompt: "Sentuh hidung Anda, lalu sentuh jari saya bergantian.",
        patientSpeech: "Sulit sekali mengenai target dengan tepat.",
        patientFace: "worried",
        feedback: "There's clear intention tremor.",
        finding: "Tremor intensi, dismetria"
      },
      {
        id: "exam-10",
        name: "Periksa Refleks",
        correct: false,
        doctorPrompt: "Saya akan memeriksa refleks tendon dalam.",
        patientSpeech: "Rasanya normal, Dok.",
        patientFace: "normal",
        feedback: "Reflexes are normal — not helpful here.",
        finding: "Refleks normal"
      },
      {
        id: "exam-11",
        name: "Tes Disdiadokokinesis",
        correct: true,
        doctorPrompt: "Coba putar telapak tangan Anda bolak-balik secepat mungkin.",
        patientSpeech: "Tangan saya terasa kaku dan lambat.",
        patientFace: "worried",
        feedback: "Rapid alternating movements are impaired — disdiadochokinesia present.",
        finding: "Disdiadokokinesis positif"
      },
      {
        id: "exam-12",
        name: "Periksa Nistagmus",
        correct: true,
        doctorPrompt: "Ikuti jari saya dengan mata Anda tanpa menggerakkan kepala.",
        patientSpeech: "Mata saya terasa bergetar.",
        patientFace: "normal",
        feedback: "Horizontal nystagmus is visible on lateral gaze — cerebellar sign.",
        finding: "Nistagmus horizontal pada pandangan lateral"
      }
    ],
    diagnoses: [
      { id: "dx-5", name: "Ataksia serebelar", correct: true },
      { id: "dx-6", name: "Neuropati perifer", correct: false },
      { id: "dx-7", name: "Paraplegia spastik", correct: false },
      { id: "dx-8", name: "Disfungsi vestibular", correct: false }
    ]
  }
];
