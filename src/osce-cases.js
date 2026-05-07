// OSCE Cases - Clinical content for animated neurological examination quiz
// 14 cases: 2 per material × 7 materials
// Schema: matches osce.js engine requirements

const OSCE_CASES = [
  // ========== PEMERIKSAAN REFLEKS FISIOLOGIS (2 cases) ==========
  {
    id: 1,
    material: "Pemeriksaan Refleks Fisiologis",
    complaint: "Saya merasa lemah pada lengan dan kaki kanan sejak 2 hari yang lalu, dokter.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case1-exam1",
        name: "Periksa refleks bicep",
        correct: true,
        doctorPrompt: "Saya akan memeriksa refleks bicep Anda.",
        patientSpeech: "Baik, dokter.",
        patientFace: "normal",
        finding: "Refleks bicep kanan meningkat (+++), kiri normal (++)"
      },
      {
        id: "case1-exam2",
        name: "Periksa refleks tricep",
        correct: true,
        doctorPrompt: "Sekarang saya periksa refleks tricep.",
        patientSpeech: "Silakan, dokter.",
        patientFace: "normal",
        finding: "Refleks tricep kanan meningkat (+++), kiri normal (++)"
      },
      {
        id: "case1-exam3",
        name: "Periksa refleks patella",
        correct: true,
        doctorPrompt: "Saya akan memeriksa refleks lutut Anda.",
        patientSpeech: "Iya, dokter.",
        patientFace: "normal",
        finding: "Refleks patella kanan meningkat (+++), kiri normal (++)"
      },
      {
        id: "case1-exam4",
        name: "Periksa refleks achilles",
        correct: true,
        doctorPrompt: "Sekarang refleks tumit Anda.",
        patientSpeech: "Baik.",
        patientFace: "normal",
        finding: "Refleks achilles kanan meningkat (+++), kiri normal (++)"
      },
      {
        id: "case1-exam5",
        name: "Periksa kekuatan otot",
        correct: false,
        doctorPrompt: "Coba lawan dorongan saya pada lengan Anda.",
        patientSpeech: "Iya dokter, tapi agak sulit...",
        patientFace: "worried",
        finding: "Kekuatan motorik menurun (4/5) pada sisi kanan"
      },
      {
        id: "case1-exam6",
        name: "Periksa sensibilitas",
        correct: false,
        doctorPrompt: "Apakah Anda merasakan sentuhan ini sama di kedua sisi?",
        patientSpeech: "Sepertinya berbeda, dokter.",
        patientFace: "worried",
        finding: "Sensibilitas menurun pada hemibody kanan"
      }
    ],
    diagnoses: [
      { id: "case1-dx1", name: "Stroke iskemik hemisfer kiri (lesi UMN)", correct: true },
      { id: "case1-dx2", name: "Polineuropati perifer", correct: false },
      { id: "case1-dx3", name: "Miastenia gravis", correct: false },
      { id: "case1-dx4", name: "Radikulopati servikal", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Baik. Diagnosis Anda tepat. Hiperrefleksia unilateral mengarah ke lesi upper motor neuron.",
    doctorFail: "Coba pikirkan kembali — refleks yang meningkat menunjukkan lesi upper motor neuron, bukan lower."
  },
  {
    id: 2,
    material: "Pemeriksaan Refleks Fisiologis",
    complaint: "Kedua tangan dan kaki saya terasa lemah dan kebas sejak beberapa minggu, dokter.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case2-exam1",
        name: "Periksa refleks bicep",
        correct: true,
        doctorPrompt: "Saya akan memeriksa refleks bicep Anda.",
        patientSpeech: "Silakan, dokter.",
        patientFace: "normal",
        finding: "Refleks bicep menurun bilateral (+)"
      },
      {
        id: "case2-exam2",
        name: "Periksa refleks tricep",
        correct: true,
        doctorPrompt: "Sekarang refleks tricep.",
        patientSpeech: "Baik.",
        patientFace: "normal",
        finding: "Refleks tricep menurun bilateral (+)"
      },
      {
        id: "case2-exam3",
        name: "Periksa refleks patella",
        correct: true,
        doctorPrompt: "Saya periksa refleks lutut Anda.",
        patientSpeech: "Iya, dokter.",
        patientFace: "normal",
        finding: "Refleks patella menurun bilateral (+)"
      },
      {
        id: "case2-exam4",
        name: "Periksa refleks achilles",
        correct: true,
        doctorPrompt: "Dan refleks tumit.",
        patientSpeech: "Silakan.",
        patientFace: "normal",
        finding: "Refleks achilles menurun bilateral (+)"
      },
      {
        id: "case2-exam5",
        name: "Periksa sensibilitas kaki",
        correct: true,
        doctorPrompt: "Apakah Anda merasakan sentuhan ini di kaki?",
        patientSpeech: "Kurang jelas, dokter.",
        patientFace: "worried",
        finding: "Sensibilitas menurun pola stocking-glove"
      },
      {
        id: "case2-exam6",
        name: "Periksa koordinasi",
        correct: false,
        doctorPrompt: "Coba sentuh hidung Anda lalu jari saya.",
        patientSpeech: "Baik, dokter.",
        patientFace: "normal",
        finding: "Koordinasi baik, tidak ada dismetria"
      }
    ],
    diagnoses: [
      { id: "case2-dx1", name: "Polineuropati perifer (Guillain-Barré syndrome atau neuropati diabetik)", correct: true },
      { id: "case2-dx2", name: "Mielitis transversa", correct: false },
      { id: "case2-dx3", name: "Stroke batang otak", correct: false },
      { id: "case2-dx4", name: "Sklerosis multipel", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Tepat. Hiporefleksia simetris dengan gangguan sensorik mengarah ke polineuropati perifer.",
    doctorFail: "Coba pikirkan kembali — refleks menurun bilateral menunjukkan lesi lower motor neuron atau perifer."
  },

  // ========== PEMERIKSAAN SISTEM MOTORIK (2 cases) ==========
  {
    id: 3,
    material: "Pemeriksaan Sistem Motorik",
    complaint: "Tangan kanan saya semakin lemah, dokter. Sulit mengangkat barang.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case3-exam1",
        name: "Inspeksi otot lengan",
        correct: true,
        doctorPrompt: "Saya akan melihat otot lengan Anda.",
        patientSpeech: "Iya, dokter.",
        patientFace: "normal",
        finding: "Atrofi otot deltoid dan bicep kanan, fasikulasi (+)"
      },
      {
        id: "case3-exam2",
        name: "Palpasi tonus otot",
        correct: true,
        doctorPrompt: "Saya raba otot lengan Anda, rileks saja.",
        patientSpeech: "Baik, dokter.",
        patientFace: "normal",
        finding: "Tonus otot menurun (hipotoni) pada lengan kanan"
      },
      {
        id: "case3-exam3",
        name: "Tes kekuatan fleksi siku",
        correct: true,
        doctorPrompt: "Tekuk siku Anda dan tahan saat saya dorong.",
        patientSpeech: "Lemah sekali, dokter...",
        patientFace: "worried",
        finding: "Kekuatan fleksi siku kanan 2/5 (kontraksi ada, tidak dapat melawan gravitasi)"
      },
      {
        id: "case3-exam4",
        name: "Tes kekuatan ekstensi siku",
        correct: true,
        doctorPrompt: "Sekarang luruskan siku, lawan dorongan saya.",
        patientSpeech: "Sulit, dokter.",
        patientFace: "worried",
        finding: "Kekuatan ekstensi siku kanan 2/5"
      },
      {
        id: "case3-exam5",
        name: "Periksa refleks bicep",
        correct: true,
        doctorPrompt: "Saya periksa refleks bicep Anda.",
        patientSpeech: "Silakan.",
        patientFace: "normal",
        finding: "Refleks bicep kanan menurun (+), kiri normal (++)"
      },
      {
        id: "case3-exam6",
        name: "Periksa sensibilitas",
        correct: false,
        doctorPrompt: "Apakah Anda merasakan sentuhan ini?",
        patientSpeech: "Ya, terasa normal dokter.",
        patientFace: "normal",
        finding: "Sensibilitas utuh, tidak ada gangguan"
      }
    ],
    diagnoses: [
      { id: "case3-dx1", name: "Amyotrophic lateral sclerosis (ALS) atau penyakit motor neuron", correct: true },
      { id: "case3-dx2", name: "Stroke hemisfer kanan", correct: false },
      { id: "case3-dx3", name: "Miastenia gravis", correct: false },
      { id: "case3-dx4", name: "Distrofi otot", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Benar. Atrofi, fasikulasi, dan kelemahan tanpa gangguan sensorik khas penyakit motor neuron.",
    doctorFail: "Coba pikirkan kembali — atrofi dan fasikulasi menunjukkan degenerasi motor neuron, bukan lesi sentral atau neuromuskular."
  },
  {
    id: 4,
    material: "Pemeriksaan Sistem Motorik",
    complaint: "Saya mudah lelah, terutama saat mengunyah dan mata sering turun, dokter.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case4-exam1",
        name: "Inspeksi wajah",
        correct: true,
        doctorPrompt: "Saya akan melihat wajah dan mata Anda.",
        patientSpeech: "Baik, dokter.",
        patientFace: "worried",
        finding: "Ptosis bilateral, lebih jelas pada mata kanan"
      },
      {
        id: "case4-exam2",
        name: "Tes kekuatan mata menutup",
        correct: true,
        doctorPrompt: "Pejamkan mata kuat-kuat, saya akan coba buka.",
        patientSpeech: "Iya, dokter.",
        patientFace: "normal",
        finding: "Kelemahan otot orbicularis oculi bilateral"
      },
      {
        id: "case4-exam3",
        name: "Tes kekuatan mengangkat lengan",
        correct: true,
        doctorPrompt: "Angkat kedua lengan ke atas dan tahan.",
        patientSpeech: "Baik... tapi terasa makin berat, dokter.",
        patientFace: "worried",
        finding: "Kelemahan progresif saat aktivitas berulang (fatigability)"
      },
      {
        id: "case4-exam4",
        name: "Tes kekuatan genggam tangan",
        correct: true,
        doctorPrompt: "Genggam jari saya sekuat-kuatnya.",
        patientSpeech: "Baik, dokter.",
        patientFace: "normal",
        finding: "Kekuatan genggam 4/5 bilateral, melemah saat diulang"
      },
      {
        id: "case4-exam5",
        name: "Periksa tonus otot",
        correct: false,
        doctorPrompt: "Saya raba tonus otot lengan Anda.",
        patientSpeech: "Silakan.",
        patientFace: "normal",
        finding: "Tonus otot normal"
      },
      {
        id: "case4-exam6",
        name: "Periksa refleks tendon",
        correct: false,
        doctorPrompt: "Saya periksa refleks Anda.",
        patientSpeech: "Baik.",
        patientFace: "normal",
        finding: "Refleks fisiologis normal (++)"
      }
    ],
    diagnoses: [
      { id: "case4-dx1", name: "Miastenia gravis", correct: true },
      { id: "case4-dx2", name: "Stroke batang otak", correct: false },
      { id: "case4-dx3", name: "Penyakit motor neuron", correct: false },
      { id: "case4-dx4", name: "Poliomielitis", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Tepat sekali. Ptosis, kelemahan yang memburuk saat aktivitas berulang khas miastenia gravis.",
    doctorFail: "Coba pikirkan kembali — fatigability (kelemahan progresif saat aktivitas) adalah tanda khas gangguan neuromuskular junction."
  },

  // ========== PEMERIKSAAN REFLEKS PATOLOGIS (2 cases) ==========
  {
    id: 5,
    material: "Pemeriksaan Refleks Patologis",
    complaint: "Setelah kecelakaan, kaki saya kaku dan sulit berjalan, dokter.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case5-exam1",
        name: "Tes Babinski kaki kanan",
        correct: true,
        doctorPrompt: "Saya akan menggores telapak kaki Anda.",
        patientSpeech: "Baik, dokter.",
        patientFace: "normal",
        finding: "Babinski positif kanan (dorsofleksi ibu jari, pengembangan jari lain)"
      },
      {
        id: "case5-exam2",
        name: "Tes Babinski kaki kiri",
        correct: true,
        doctorPrompt: "Sekarang kaki yang kiri.",
        patientSpeech: "Silakan.",
        patientFace: "normal",
        finding: "Babinski positif kiri (dorsofleksi ibu jari, pengembangan jari lain)"
      },
      {
        id: "case5-exam3",
        name: "Tes Hoffman kanan",
        correct: true,
        doctorPrompt: "Saya akan menjentik jari tengah Anda.",
        patientSpeech: "Iya, dokter.",
        patientFace: "normal",
        finding: "Hoffman positif bilateral (fleksi ibu jari dan telunjuk)"
      },
      {
        id: "case5-exam4",
        name: "Periksa tonus tungkai",
        correct: true,
        doctorPrompt: "Rileks, saya gerakkan kaki Anda.",
        patientSpeech: "Kaki saya terasa kaku, dokter.",
        patientFace: "worried",
        finding: "Spastisitas bilateral, tonus meningkat"
      },
      {
        id: "case5-exam5",
        name: "Periksa klonus ankle",
        correct: true,
        doctorPrompt: "Saya dorong kaki Anda ke atas.",
        patientSpeech: "Iya.",
        patientFace: "normal",
        finding: "Klonus ankle positif bilateral (gerakan involunter berulang)"
      },
      {
        id: "case5-exam6",
        name: "Periksa sensibilitas",
        correct: false,
        doctorPrompt: "Apakah Anda merasakan sentuhan ini?",
        patientSpeech: "Kurang jelas di bawah pusar, dokter.",
        patientFace: "worried",
        finding: "Level sensorik setinggi T10"
      }
    ],
    diagnoses: [
      { id: "case5-dx1", name: "Cedera medula spinalis (paraplegia spastik)", correct: true },
      { id: "case5-dx2", name: "Stroke hemisfer bilateral", correct: false },
      { id: "case5-dx3", name: "Polineuropati perifer", correct: false },
      { id: "case5-dx4", name: "Mielitis transversa akut", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Benar. Babinski bilateral, spastisitas, dan klonus menunjukkan lesi UMN pada medula spinalis.",
    doctorFail: "Coba pikirkan kembali — refleks patologis bilateral mengarah ke lesi medula spinalis, bukan hemisfer atau perifer."
  },
  {
    id: 6,
    material: "Pemeriksaan Refleks Patologis",
    complaint: "Lengan dan kaki kiri saya lemas sejak stroke 3 bulan lalu, dokter.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case6-exam1",
        name: "Tes Babinski kaki kiri",
        correct: true,
        doctorPrompt: "Saya gores telapak kaki kiri Anda.",
        patientSpeech: "Baik, dokter.",
        patientFace: "normal",
        finding: "Babinski positif kiri (dorsofleksi ibu jari)"
      },
      {
        id: "case6-exam2",
        name: "Tes Babinski kaki kanan",
        correct: true,
        doctorPrompt: "Sekarang kaki kanan.",
        patientSpeech: "Silakan.",
        patientFace: "normal",
        finding: "Babinski negatif kanan (plantar fleksi normal)"
      },
      {
        id: "case6-exam3",
        name: "Tes Hoffman kiri",
        correct: true,
        doctorPrompt: "Saya jentik jari tengah Anda.",
        patientSpeech: "Iya.",
        patientFace: "normal",
        finding: "Hoffman positif kiri"
      },
      {
        id: "case6-exam4",
        name: "Periksa tonus lengan kiri",
        correct: true,
        doctorPrompt: "Rileks, saya gerakkan lengan Anda.",
        patientSpeech: "Lengan saya terasa kaku, dokter.",
        patientFace: "worried",
        finding: "Spastisitas lengan kiri, tonus meningkat"
      },
      {
        id: "case6-exam5",
        name: "Periksa kekuatan tungkai kiri",
        correct: false,
        doctorPrompt: "Angkat kaki kiri Anda, lawan dorongan saya.",
        patientSpeech: "Sulit, dokter.",
        patientFace: "worried",
        finding: "Kekuatan tungkai kiri 3/5 (dapat melawan gravitasi)"
      },
      {
        id: "case6-exam6",
        name: "Tes koordinasi kanan",
        correct: false,
        doctorPrompt: "Sentuh hidung lalu jari saya dengan tangan kanan.",
        patientSpeech: "Baik, dokter.",
        patientFace: "normal",
        finding: "Koordinasi tangan kanan baik"
      }
    ],
    diagnoses: [
      { id: "case6-dx1", name: "Stroke hemisfer kanan dengan hemiparesis spastik kiri", correct: true },
      { id: "case6-dx2", name: "Tumor medula spinalis servikal", correct: false },
      { id: "case6-dx3", name: "Sklerosis multipel", correct: false },
      { id: "case6-dx4", name: "Ensefalitis", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Tepat. Babinski unilateral dengan spastisitas hemibody menunjukkan lesi hemisfer kontralateral.",
    doctorFail: "Coba pikirkan kembali — refleks patologis unilateral mengarah ke lesi kortikospinal hemisfer, bukan medula atau multipel."
  },

  // ========== PEMERIKSAAN NEUROLOGIS LAINNYA - Patrick/Kontra Patrick (2 cases) ==========
  {
    id: 7,
    material: "Pemeriksaan Neurologis Lainnya (Patrick / Kontra Patrick)",
    complaint: "Pinggang dan pantat saya sakit, dokter. Nyeri menjalar ke kaki.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case7-exam1",
        name: "Tes Patrick kanan",
        correct: true,
        doctorPrompt: "Saya posisikan kaki Anda seperti angka 4, lalu tekan lutut.",
        patientSpeech: "Aduh sakit, dokter!",
        patientFace: "pain",
        finding: "Patrick test positif kanan (nyeri pada regio sakroiliaka/gluteal kanan)"
      },
      {
        id: "case7-exam2",
        name: "Tes Kontra Patrick kanan",
        correct: true,
        doctorPrompt: "Sekarang saya putar paha ke dalam.",
        patientSpeech: "Tidak sakit, dokter.",
        patientFace: "normal",
        finding: "Kontra Patrick test negatif kanan"
      },
      {
        id: "case7-exam3",
        name: "Palpasi sendi sakroiliaka",
        correct: true,
        doctorPrompt: "Saya tekan area tulang panggul belakang Anda.",
        patientSpeech: "Sakit di sini, dokter.",
        patientFace: "pain",
        finding: "Nyeri tekan pada sendi sakroiliaka kanan"
      },
      {
        id: "case7-exam4",
        name: "Tes lurus angkat tungkai (SLR)",
        correct: true,
        doctorPrompt: "Saya angkat kaki Anda lurus ke atas.",
        patientSpeech: "Agak sakit tapi tidak hebat, dokter.",
        patientFace: "worried",
        finding: "SLR positif ringan 60° (nyeri punggung, bukan radikuler)"
      },
      {
        id: "case7-exam5",
        name: "Periksa refleks patella",
        correct: false,
        doctorPrompt: "Saya periksa refleks lutut Anda.",
        patientSpeech: "Baik.",
        patientFace: "normal",
        finding: "Refleks patella normal bilateral (++)"
      },
      {
        id: "case7-exam6",
        name: "Periksa kekuatan tungkai",
        correct: false,
        doctorPrompt: "Angkat kaki, lawan dorongan saya.",
        patientSpeech: "Bisa, dokter.",
        patientFace: "normal",
        finding: "Kekuatan motorik tungkai normal (5/5)"
      }
    ],
    diagnoses: [
      { id: "case7-dx1", name: "Sakroiliitis atau disfungsi sendi sakroiliaka", correct: true },
      { id: "case7-dx2", name: "Hernia nukleus pulposus (HNP) lumbal", correct: false },
      { id: "case7-dx3", name: "Osteoartritis panggul", correct: false },
      { id: "case7-dx4", name: "Spondilitis ankilosa", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Benar. Patrick positif dengan Kontra Patrick negatif mengarah ke patologi sendi sakroiliaka.",
    doctorFail: "Coba pikirkan kembali — Patrick positif menunjukkan masalah sakroiliaka atau panggul, bukan radikulopati lumbal."
  },
  {
    id: 8,
    material: "Pemeriksaan Neurologis Lainnya (Patrick / Kontra Patrick)",
    complaint: "Pangkal paha dan lutut saya sakit saat berjalan, dokter.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case8-exam1",
        name: "Tes Patrick kanan",
        correct: true,
        doctorPrompt: "Kaki seperti angka 4, saya tekan lutut Anda.",
        patientSpeech: "Aduh, sakit di pangkal paha dokter!",
        patientFace: "pain",
        finding: "Patrick test positif kanan (nyeri inguinal/anterior hip kanan)"
      },
      {
        id: "case8-exam2",
        name: "Tes Kontra Patrick kanan",
        correct: true,
        doctorPrompt: "Sekarang saya putar paha ke dalam.",
        patientSpeech: "Aduh sakit juga, dokter!",
        patientFace: "pain",
        finding: "Kontra Patrick test positif kanan (nyeri pada rotasi internal hip)"
      },
      {
        id: "case8-exam3",
        name: "Palpasi sendi panggul",
        correct: true,
        doctorPrompt: "Saya tekan area pangkal paha Anda.",
        patientSpeech: "Sakit saat ditekan, dokter.",
        patientFace: "pain",
        finding: "Nyeri tekan regio inguinal, area sendi coxae kanan"
      },
      {
        id: "case8-exam4",
        name: "Tes range of motion hip",
        correct: true,
        doctorPrompt: "Saya gerakkan sendi panggul Anda ke berbagai arah.",
        patientSpeech: "Sakit saat digerakkan, dokter.",
        patientFace: "pain",
        finding: "Keterbatasan ROM hip kanan, nyeri pada fleksi dan rotasi internal"
      },
      {
        id: "case8-exam5",
        name: "Periksa gait (cara berjalan)",
        correct: false,
        doctorPrompt: "Coba berjalan beberapa langkah.",
        patientSpeech: "Agak pincang, dokter.",
        patientFace: "worried",
        finding: "Antalgic gait (pincang untuk mengurangi beban pada hip kanan)"
      },
      {
        id: "case8-exam6",
        name: "Tes lurus angkat tungkai",
        correct: false,
        doctorPrompt: "Saya angkat kaki Anda lurus.",
        patientSpeech: "Tidak sakit, dokter.",
        patientFace: "normal",
        finding: "SLR negatif, tidak ada nyeri radikuler"
      }
    ],
    diagnoses: [
      { id: "case8-dx1", name: "Osteoartritis sendi panggul (coxarthrosis)", correct: true },
      { id: "case8-dx2", name: "Sakroiliitis", correct: false },
      { id: "case8-dx3", name: "Radikulopati L2-L3", correct: false },
      { id: "case8-dx4", name: "Bursitis trokanter", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Tepat. Patrick DAN Kontra Patrick keduanya positif menunjukkan patologi intra-artikular sendi panggul.",
    doctorFail: "Coba pikirkan kembali — kedua tes positif mengarah ke masalah sendi panggul itu sendiri, bukan sakroiliaka atau radikuler."
  },

  // ========== PEMERIKSAAN KOORDINASI (2 cases) ==========
  {
    id: 9,
    material: "Pemeriksaan Koordinasi",
    complaint: "Gerakan tangan saya tidak stabil, dokter. Sering meleset saat mengambil barang.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case9-exam1",
        name: "Tes jari-hidung kanan",
        correct: true,
        doctorPrompt: "Sentuh hidung Anda lalu jari saya, ulangi dengan cepat.",
        patientSpeech: "Baik, dokter... waduh meleset.",
        patientFace: "worried",
        finding: "Dismetria kanan (+), jari melampaui target (past-pointing)"
      },
      {
        id: "case9-exam2",
        name: "Tes gerakan bergantian cepat tangan",
        correct: true,
        doctorPrompt: "Balik telapak tangan bolak-balik secepat mungkin.",
        patientSpeech: "Susah, dokter.",
        patientFace: "worried",
        finding: "Disdiadokokinesia kanan (+), gerakan lambat dan tidak teratur"
      },
      {
        id: "case9-exam3",
        name: "Tes tumit-lutut kanan",
        correct: true,
        doctorPrompt: "Geser tumit kanan dari lutut ke pergelangan kaki kiri.",
        patientSpeech: "Iya, dokter.",
        patientFace: "normal",
        finding: "Tumit-lutut: gerakan tidak stabil, sedikit tremor"
      },
      {
        id: "case9-exam4",
        name: "Observasi tremor saat postur",
        correct: true,
        doctorPrompt: "Rentangkan kedua tangan ke depan.",
        patientSpeech: "Baik.",
        patientFace: "normal",
        finding: "Tremor intensi pada tangan kanan saat mendekati target"
      },
      {
        id: "case9-exam5",
        name: "Periksa kekuatan tangan",
        correct: false,
        doctorPrompt: "Genggam jari saya sekuat mungkin.",
        patientSpeech: "Kekuatannya baik, dokter.",
        patientFace: "normal",
        finding: "Kekuatan genggam normal (5/5)"
      },
      {
        id: "case9-exam6",
        name: "Periksa sensibilitas posisi",
        correct: false,
        doctorPrompt: "Saya gerakkan jari Anda, ke atas atau bawah?",
        patientSpeech: "Ke atas, dokter.",
        patientFace: "normal",
        finding: "Propriosepsi normal, dapat mendeteksi posisi jari"
      }
    ],
    diagnoses: [
      { id: "case9-dx1", name: "Lesi serebelum kanan (stroke serebelar, tumor, atau sklerosis multipel)", correct: true },
      { id: "case9-dx2", name: "Penyakit Parkinson", correct: false },
      { id: "case9-dx3", name: "Neuropati perifer", correct: false },
      { id: "case9-dx4", name: "Stroke hemisfer kiri", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Benar. Dismetria, disdiadokokinesia, dan tremor intensi adalah tanda klasik disfungsi serebelum.",
    doctorFail: "Coba pikirkan kembali — gangguan koordinasi halus dengan tremor intensi menunjukkan lesi serebelum, bukan ganglia basalis atau perifer."
  },
  {
    id: 10,
    material: "Pemeriksaan Koordinasi",
    complaint: "Saya sering jatuh dan berjalan tidak stabil, dokter.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case10-exam1",
        name: "Tes Romberg",
        correct: true,
        doctorPrompt: "Berdiri tegak, kaki rapat, tutup mata Anda.",
        patientSpeech: "Wah goyah sekali, dokter!",
        patientFace: "worried",
        finding: "Romberg test positif (tidak stabil saat mata ditutup, cenderung jatuh)"
      },
      {
        id: "case10-exam2",
        name: "Tes tandem gait",
        correct: true,
        doctorPrompt: "Berjalan dengan tumit menyentuh jari kaki, seperti di garis lurus.",
        patientSpeech: "Susah sekali, dokter.",
        patientFace: "worried",
        finding: "Tandem gait terganggu, tidak dapat berjalan lurus, melebar"
      },
      {
        id: "case10-exam3",
        name: "Periksa propriosepsi jari kaki",
        correct: true,
        doctorPrompt: "Saya gerakkan jari kaki Anda, ke atas atau bawah?",
        patientSpeech: "Tidak tahu, dokter.",
        patientFace: "worried",
        finding: "Propriosepsi terganggu bilateral, tidak dapat deteksi posisi jari kaki"
      },
      {
        id: "case10-exam4",
        name: "Periksa sensibilitas vibration",
        correct: true,
        doctorPrompt: "Apakah Anda merasakan getaran garpu tala ini?",
        patientSpeech: "Sangat lemah, dokter.",
        patientFace: "normal",
        finding: "Sensasi vibration menurun pada kaki bilateral"
      },
      {
        id: "case10-exam5",
        name: "Tes jari-hidung",
        correct: false,
        doctorPrompt: "Sentuh hidung lalu jari saya.",
        patientSpeech: "Bisa, dokter.",
        patientFace: "normal",
        finding: "Koordinasi jari-hidung normal, tidak ada dismetria"
      },
      {
        id: "case10-exam6",
        name: "Periksa kekuatan tungkai",
        correct: false,
        doctorPrompt: "Angkat kaki, lawan dorongan saya.",
        patientSpeech: "Kuat, dokter.",
        patientFace: "normal",
        finding: "Kekuatan tungkai normal (5/5)"
      }
    ],
    diagnoses: [
      { id: "case10-dx1", name: "Ataksia sensorik (akibat neuropati perifer atau defisiensi B12)", correct: true },
      { id: "case10-dx2", name: "Ataksia serebelar", correct: false },
      { id: "case10-dx3", name: "Penyakit Parkinson", correct: false },
      { id: "case10-dx4", name: "Labirinitis atau gangguan vestibular", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Tepat. Romberg positif dengan gangguan propriosepsi menunjukkan ataksia sensorik, bukan serebelar.",
    doctorFail: "Coba pikirkan kembali — Romberg positif (memburuk saat mata ditutup) menunjukkan masalah proprioseptif, bukan serebelum."
  },

  // ========== PEMERIKSAAN FUNGSI LUHUR (2 cases) ==========
  {
    id: 11,
    material: "Pemeriksaan Fungsi Luhur",
    complaint: "Saya sering lupa, dokter. Kemarin taruh kunci di mana saja lupa.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case11-exam1",
        name: "Tes orientasi waktu",
        correct: true,
        doctorPrompt: "Sekarang tanggal berapa, bulan apa, tahun berapa?",
        patientSpeech: "Waduh... lupa dokter. Bulan apa ya?",
        patientFace: "worried",
        finding: "Disorientasi waktu: tidak dapat menyebutkan tanggal dan bulan"
      },
      {
        id: "case11-exam2",
        name: "Tes memori recall (3 kata)",
        correct: true,
        doctorPrompt: "Ingat 3 kata ini: apel, meja, biru. Sebutkan kembali setelah 5 menit.",
        patientSpeech: "Baik... apel... apa lagi ya dokter? Lupa.",
        patientFace: "worried",
        finding: "Gangguan recent memory: hanya recall 1/3 kata setelah 5 menit"
      },
      {
        id: "case11-exam3",
        name: "Tes atensi (hitung mundur)",
        correct: true,
        doctorPrompt: "Hitung mundur dari 100, kurangi 7 setiap kali.",
        patientSpeech: "100... 93... eh berapa ya dokter?",
        patientFace: "worried",
        finding: "Atensi dan kalkulasi terganggu, tidak dapat serial 7s"
      },
      {
        id: "case11-exam4",
        name: "Tes visuospasial (gambar jam)",
        correct: true,
        doctorPrompt: "Gambar jam bundar, isi angka, jarum jam 11:10.",
        patientSpeech: "Saya coba, dokter.",
        patientFace: "worried",
        finding: "Clock drawing test abnormal: angka tidak teratur, jarum salah posisi"
      },
      {
        id: "case11-exam5",
        name: "Tes bahasa (naming)",
        correct: false,
        doctorPrompt: "Benda ini namanya apa? (tunjuk pulpen)",
        patientSpeech: "Pulpen, dokter.",
        patientFace: "normal",
        finding: "Kemampuan naming baik, tidak ada anomia"
      },
      {
        id: "case11-exam6",
        name: "Periksa kekuatan motorik",
        correct: false,
        doctorPrompt: "Angkat tangan, lawan dorongan saya.",
        patientSpeech: "Bisa, dokter.",
        patientFace: "normal",
        finding: "Kekuatan motorik normal (5/5)"
      }
    ],
    diagnoses: [
      { id: "case11-dx1", name: "Demensia (kemungkinan Alzheimer disease)", correct: true },
      { id: "case11-dx2", name: "Delirium akut", correct: false },
      { id: "case11-dx3", name: "Depresi dengan pseudodemensia", correct: false },
      { id: "case11-dx4", name: "Stroke lakunar", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Benar. Gangguan memori, orientasi, atensi, dan visuospasial progresif mengarah ke demensia.",
    doctorFail: "Coba pikirkan kembali — gangguan kognitif multipel domain yang progresif adalah ciri demensia, bukan delirium atau depresi."
  },
  {
    id: 12,
    material: "Pemeriksaan Fungsi Luhur",
    complaint: "Setelah stroke, saya sulit bicara dan tidak mengerti omongan orang, dokter.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case12-exam1",
        name: "Tes pemahaman bahasa",
        correct: true,
        doctorPrompt: "Tutup mata Anda. Angkat tangan kanan.",
        patientSpeech: "Apa dokter? Tidak mengerti.",
        patientFace: "worried",
        finding: "Gangguan comprehension: tidak dapat mengikuti perintah sederhana"
      },
      {
        id: "case12-exam2",
        name: "Tes produksi bahasa (naming)",
        correct: true,
        doctorPrompt: "Ini benda apa? (tunjuk jam tangan)",
        patientSpeech: "Itu... itu... untuk... eh... lupa namanya dokter.",
        patientFace: "worried",
        finding: "Anomia berat: tidak dapat naming objek familiar"
      },
      {
        id: "case12-exam3",
        name: "Tes repetisi kalimat",
        correct: true,
        doctorPrompt: "Ulangi kalimat ini: 'Tidak ada jika, dan, atau tetapi.'",
        patientSpeech: "Tidak... tidak... susah dokter.",
        patientFace: "worried",
        finding: "Gangguan repetisi: tidak dapat mengulang kalimat"
      },
      {
        id: "case12-exam4",
        name: "Tes spontaneous speech",
        correct: true,
        doctorPrompt: "Ceritakan apa yang Anda lakukan pagi ini.",
        patientSpeech: "Saya... eh... bangun... makan... eh... susah bicara dokter.",
        patientFace: "worried",
        finding: "Speech fluency terganggu: output sedikit, penuh jeda, parafasia"
      },
      {
        id: "case12-exam5",
        name: "Periksa kekuatan wajah",
        correct: false,
        doctorPrompt: "Senyum lebar, tunjukkan gigi.",
        patientSpeech: "Baik.",
        patientFace: "normal",
        finding: "Kelemahan wajah kanan bawah (UMN facial palsy)"
      },
      {
        id: "case12-exam6",
        name: "Periksa lapang pandang",
        correct: false,
        doctorPrompt: "Lihat hidung saya, bilang jika Anda lihat jari saya bergerak.",
        patientSpeech: "Tidak lihat di kanan, dokter.",
        patientFace: "worried",
        finding: "Hemianopsia homonim kanan"
      }
    ],
    diagnoses: [
      { id: "case12-dx1", name: "Afasia Wernicke (stroke hemisfer kiri - area temporal posterior)", correct: true },
      { id: "case12-dx2", name: "Afasia Broca", correct: false },
      { id: "case12-dx3", name: "Afasia global", correct: false },
      { id: "case12-dx4", name: "Disartria", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Tepat. Gangguan comprehension DAN produksi bahasa dengan output fluent tapi tidak bermakna adalah ciri afasia Wernicke.",
    doctorFail: "Coba pikirkan kembali — gangguan pemahaman bahasa yang dominan mengarah ke afasia Wernicke (reseptif), bukan Broca (ekspresif)."
  },

  // ========== PEMERIKSAAN SISTEM SENSORIK (2 cases) ==========
  {
    id: 13,
    material: "Pemeriksaan Sistem Sensorik",
    complaint: "Tangan dan kaki saya terasa baal dan seperti tertusuk-tusuk, dokter.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case13-exam1",
        name: "Tes sensasi nyeri (pinprick)",
        correct: true,
        doctorPrompt: "Apakah Anda merasakan tusukan ini sama di kedua sisi?",
        patientSpeech: "Kurang terasa di ujung kaki dan tangan, dokter.",
        patientFace: "worried",
        finding: "Hipoestesia pola stocking-glove, sensasi nyeri menurun distal"
      },
      {
        id: "case13-exam2",
        name: "Tes sensasi suhu",
        correct: true,
        doctorPrompt: "Ini dingin atau hangat? (aplikasikan garpu tala dingin)",
        patientSpeech: "Kurang jelas bedanya, dokter.",
        patientFace: "worried",
        finding: "Sensasi suhu menurun pada kaki dan tangan bilateral distal"
      },
      {
        id: "case13-exam3",
        name: "Tes sensasi raba halus",
        correct: true,
        doctorPrompt: "Tutup mata, bilang jika Anda merasakan sentuhan kapas ini.",
        patientSpeech: "Di ujung kaki hampir tidak terasa, dokter.",
        patientFace: "worried",
        finding: "Light touch menurun pada ekstremitas distal bilateral"
      },
      {
        id: "case13-exam4",
        name: "Tes propriosepsi jari kaki",
        correct: true,
        doctorPrompt: "Saya gerakkan jari kaki Anda, ke atas atau bawah?",
        patientSpeech: "Tidak tahu, dokter.",
        patientFace: "worried",
        finding: "Propriosepsi terganggu pada jari kaki bilateral"
      },
      {
        id: "case13-exam5",
        name: "Periksa refleks ankle",
        correct: true,
        doctorPrompt: "Saya ketuk tendon tumit Anda.",
        patientSpeech: "Baik.",
        patientFace: "normal",
        finding: "Refleks achilles menurun bilateral (+)"
      },
      {
        id: "case13-exam6",
        name: "Periksa kekuatan tungkai",
        correct: false,
        doctorPrompt: "Angkat kaki, lawan dorongan saya.",
        patientSpeech: "Agak lemah, dokter.",
        patientFace: "worried",
        finding: "Kekuatan motorik tungkai distal 4/5"
      }
    ],
    diagnoses: [
      { id: "case13-dx1", name: "Polineuropati perifer (diabetik atau defisiensi B12)", correct: true },
      { id: "case13-dx2", name: "Mielitis transversa", correct: false },
      { id: "case13-dx3", name: "Guillain-Barré syndrome fase awal", correct: false },
      { id: "case13-dx4", name: "Stroke lakunar multipel", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Benar. Gangguan sensorik pola stocking-glove dengan hiporefleksia adalah tanda klasik polineuropati perifer.",
    doctorFail: "Coba pikirkan kembali — gangguan sensorik simetris distal pola sarung tangan-kaus kaki menunjukkan neuropati perifer, bukan lesi sentral."
  },
  {
    id: 14,
    material: "Pemeriksaan Sistem Sensorik",
    complaint: "Saya tidak merasakan nyeri dan suhu di tubuh sebelah kanan, tapi raba masih terasa, dokter.",
    diagnosisPrompt: "Apa diagnosis yang paling mungkin?",
    minExamsRequired: 4,
    exams: [
      {
        id: "case14-exam1",
        name: "Tes sensasi nyeri wajah",
        correct: true,
        doctorPrompt: "Apakah tusukan ini terasa sama di kedua sisi wajah?",
        patientSpeech: "Kiri terasa, kanan tidak dokter.",
        patientFace: "worried",
        finding: "Sensasi nyeri wajah kanan menurun (distribusi V1-V2-V3 trigeminal)"
      },
      {
        id: "case14-exam2",
        name: "Tes sensasi nyeri tubuh",
        correct: true,
        doctorPrompt: "Bandingkan tusukan di lengan kanan dan kiri.",
        patientSpeech: "Kanan tidak terasa, kiri terasa dokter.",
        patientFace: "worried",
        finding: "Hemianestesia nyeri sisi kanan tubuh (dari leher ke bawah)"
      },
      {
        id: "case14-exam3",
        name: "Tes sensasi suhu",
        correct: true,
        doctorPrompt: "Ini dingin atau hangat di sisi kanan?",
        patientSpeech: "Tidak tahu dokter, tidak terasa bedanya.",
        patientFace: "worried",
        finding: "Sensasi suhu hilang pada hemibody kanan"
      },
      {
        id: "case14-exam4",
        name: "Tes sensasi raba dan posisi",
        correct: true,
        doctorPrompt: "Tutup mata, apakah Anda merasakan sentuhan kapas ini?",
        patientSpeech: "Ya terasa dokter, baik kanan maupun kiri.",
        patientFace: "normal",
        finding: "Light touch dan propriosepsi NORMAL bilateral (kolumna dorsalis utuh)"
      },
      {
        id: "case14-exam5",
        name: "Periksa koordinasi",
        correct: false,
        doctorPrompt: "Sentuh hidung lalu jari saya.",
        patientSpeech: "Agak meleset, dokter.",
        patientFace: "worried",
        finding: "Ataksia ringan sisi kanan"
      },
      {
        id: "case14-exam6",
        name: "Periksa nistagmus",
        correct: false,
        doctorPrompt: "Ikuti jari saya dengan mata, jangan gerakkan kepala.",
        patientSpeech: "Baik.",
        patientFace: "normal",
        finding: "Nistagmus horizontal saat lateral gaze"
      }
    ],
    diagnoses: [
      { id: "case14-dx1", name: "Sindrom Wallenberg (lateral medullary syndrome - stroke batang otak)", correct: true },
      { id: "case14-dx2", name: "Stroke hemisfer kiri", correct: false },
      { id: "case14-dx3", name: "Siringomielia", correct: false },
      { id: "case14-dx4", name: "Tumor thalamus", correct: false }
    ],
    doctorIntro: "Selamat pagi. Saya dokter yang akan memeriksa Anda hari ini.",
    doctorDiagnosisCue: "Berdasarkan temuan pemeriksaan, apa diagnosis Anda?",
    doctorPass: "Sangat tepat. Disosiasi sensorik (nyeri/suhu hilang, tapi raba/posisi utuh) ipsilateral wajah dan kontralateral tubuh adalah tanda khas sindrom Wallenberg.",
    doctorFail: "Coba pikirkan kembali — disosiasi sensorik dengan pola 'crossed' (wajah ipsilateral, tubuh kontralateral) menunjukkan lesi batang otak lateral, bukan hemisfer atau medula spinalis."
  }
];

// Export for use in osce.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { OSCE_CASES };
}
