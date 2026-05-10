// OSCE Cases Fase 2 — Clinical content for the 9-step OSCE Phase 2 quiz.
// 3 cases: Tetanus (4A), Stroke (3B), TIA (3B). Sourced from
// kasus-osce-fase-2-tetanus.html, kasus-osce-fase-2-stroke.html,
// kasus-osce-fase-2-tia.html. Used by osce.js when window.OSCE_FASE === 2.

const OSCE_CASES_FASE_2 = [
  // ============================================================
  // CASE 1 — TETANUS (4A)
  // ============================================================
  {
    id: 'tetanus',
    material: 'Tetanus (4A)',
    complaint: 'Dok, mulut saya kaku dan otot perut terasa tegang sejak 3 hari ini. Beberapa hari lalu kaki saya tertusuk paku berkarat di sawah.',
    diagnosisPrompt: 'Apa diagnosis kerja yang paling mungkin?',
    minExamsRequired: 4,
    dialogueScript: {
      intro: {
        prompt: 'Bagaimana cara terbaik membuka pertemuan dengan pasien?',
        choices: [
          {
            id: 'tet-intro-warm',
            label: 'Selamat pagi Pak. Perkenalkan, saya dokter yang bertugas hari ini. Boleh saya tahu nama, usia, dan pekerjaan Bapak?',
            good: true,
            key: 'intro-greeting',
            reply: 'Selamat pagi dok. Nama saya Pak Slamet, 42 tahun, petani.',
            patientFace: 'normal'
          },
          {
            id: 'tet-intro-skip',
            label: 'Pak, langsung ya — kenapa mulutnya kaku?',
            good: false,
            reply: 'Eh… iya dok. (terlihat terkejut, mulut sulit terbuka)',
            patientFace: 'worried',
            penalty: 'Tidak ada salam dan perkenalan diri.'
          }
        ]
      },
      anamnesis: {
        minRelevant: 5,
        questions: [
          { id: 'tet-q-onset',     label: 'Sejak kapan keluhan kaku rahang ini muncul?',                       relevant: true,  key: 'anam-onset',     reply: 'Sejak 3 hari yang lalu, dok. Awalnya kaku rahang, lalu otot leher dan perut ikut tegang.' },
          { id: 'tet-q-progress',  label: 'Apakah keluhan menjalar atau bertambah berat?',                     relevant: true,  key: 'anam-progress',  reply: 'Bertambah berat, dok. Sekarang seluruh tubuh sering kejang ketika mendengar suara keras.' },
          { id: 'tet-q-luka',      label: 'Apakah Bapak baru-baru ini mengalami luka, tertusuk benda kotor, atau tergigit hewan?', relevant: true, key: 'anam-luka', reply: 'Iya dok, kaki kanan saya tertusuk paku berkarat di sawah sekitar 8 hari lalu. Tidak saya bersihkan.' },
          { id: 'tet-q-spasme',    label: 'Apakah ada kejang atau kekakuan otot di sekitar luka?',             relevant: true,  key: 'anam-spasme',    reply: 'Iya, otot betis sekitar luka itu kaku dan suka kram, dok.' },
          { id: 'tet-q-imun',      label: 'Bagaimana riwayat imunisasi tetanus Bapak (TT/booster)?',           relevant: true,  key: 'anam-imun',      reply: 'Saya tidak ingat pernah disuntik tetanus, dok. Mungkin sejak SD.' },
          { id: 'tet-q-rpd',       label: 'Riwayat penyakit dahulu — diabetes, hipertensi, alergi obat?',     relevant: true,  key: 'anam-rpd',       reply: 'Tidak ada, dok. Saya jarang sakit.' },
          { id: 'tet-q-pola',      label: 'Bagaimana pola hidup — merokok, alkohol, pekerjaan di sawah?',     relevant: true,  key: 'anam-pola',      reply: 'Saya tidak merokok dan tidak minum, dok. Sehari-hari di sawah.' },
          { id: 'tet-q-irrelevant-pet',  label: 'Apakah Bapak memelihara kucing di rumah?',                   relevant: false, reply: 'Tidak ada hubungan, dok…',  penalty: 'Pertanyaan tidak relevan untuk keluhan tetanus.' },
          { id: 'tet-q-irrelevant-food', label: 'Apakah Bapak alergi makanan laut?',                          relevant: false, reply: 'Tidak, dok. (bingung)',     penalty: 'Pertanyaan tidak relevan.' }
        ]
      },
      consent: {
        prompt: 'Pilih cara terbaik menyampaikan inform consent:',
        doctorIntro: 'Sebelum saya periksa, saya akan jelaskan dulu prosedurnya.',
        options: [
          {
            id: 'tet-consent-good',
            label: '"Pak, saya akan memeriksa tanda vital, otot, dan saraf Bapak. Mungkin sedikit kurang nyaman. Apakah Bapak bersedia saya periksa?"',
            correct: true, key: 'consent-explained',
            reply: 'Iya dok, saya bersedia.',
            patientFace: 'normal'
          },
          {
            id: 'tet-consent-curt',
            label: '"Pak, saya periksa langsung ya."',
            correct: false,
            reply: 'Eh… iya dok. (ragu)',
            patientFace: 'worried',
            penalty: 'Tidak menjelaskan prosedur dengan jelas.'
          },
          {
            id: 'tet-consent-skip',
            label: '(Langsung memeriksa tanpa minta persetujuan)',
            correct: false,
            reply: '(pasien terlihat tegang)',
            patientFace: 'worried',
            penalty: 'Pelanggaran etika — tidak ada inform consent.'
          }
        ]
      },
      persiapan: {
        minRelevant: 3,
        items: [
          { id: 'tet-prep-handwash', label: 'Cuci tangan 6 langkah WHO',                                              correct: true, key: 'prep-handwash', reply: 'Baik, dok.' },
          { id: 'tet-prep-tools',    label: 'Siapkan stetoskop, tensimeter, palu refleks, penlight, kapas, alcuta',  correct: true, key: 'prep-tools',    reply: 'Saya tunggu, dok.' },
          { id: 'tet-prep-position', label: 'Posisikan pasien dengan nyaman, hindari rangsang suara dan cahaya kuat', correct: true, key: 'prep-position', reply: 'Iya dok, terima kasih.' },
          { id: 'tet-prep-skip',     label: 'Mulai pemeriksaan tanpa cuci tangan',                                    correct: false, penalty: 'Tidak cuci tangan — risiko infeksi nosokomial.', patientFace: 'worried', reply: '(pasien terlihat khawatir)' }
        ]
      },
      edukasi: {
        minRelevant: 3,
        items: [
          { id: 'tet-edu-vaks',    label: 'Edukasi pentingnya vaksinasi tetanus (TT booster) untuk pasien dan keluarga', correct: true, key: 'edu-vaks' },
          { id: 'tet-edu-luka',    label: 'Selalu bersihkan luka tusuk, bakar, atau kotor segera; konsultasi ke fasyankes untuk profilaksis tetanus', correct: true, key: 'edu-luka' },
          { id: 'tet-edu-ats',     label: 'Anjurkan keluarga dengan risiko tetanus untuk menerima ATS/HTIG bila terpapar luka kotor', correct: true, key: 'edu-ats' },
          { id: 'tet-edu-followup', label: 'Kontrol rutin selama terapi dan jangan hentikan obat sebelum waktu yang dianjurkan',   correct: true, key: 'edu-followup' },
          { id: 'tet-edu-bad',     label: 'Pasien tidak perlu vaksin tetanus karena luka sudah dibersihkan', correct: false, penalty: 'Edukasi salah — luka berisiko tinggi tetap memerlukan profilaksis.' }
        ]
      }
    },
    exams: [
      { id: 'tet-ex1', name: 'Periksa tanda vital (TTV)',                       correct: true, doctorPrompt: 'Saya periksa tekanan darah, nadi, dan suhu Bapak.', patientSpeech: 'Silakan, dok.', patientFace: 'normal', finding: 'TD 130/80, nadi 96x, suhu 37,8°C — takikardia ringan dengan demam subfebris.' },
      { id: 'tet-ex2', name: 'Periksa keadaan umum & GCS',                      correct: true, doctorPrompt: 'Saya nilai keadaan umum dan kesadaran Bapak.', patientSpeech: 'Iya dok.', patientFace: 'normal', finding: 'Kesadaran kompos mentis, GCS 15. Tampak sakit sedang, otot wajah tegang.' },
      { id: 'tet-ex3', name: 'Periksa luka di kaki kanan',                      correct: true, doctorPrompt: 'Boleh saya lihat luka di kaki Bapak?', patientSpeech: 'Iya, di betis ini, dok.', patientFace: 'pain', finding: 'Luka tusuk di betis kanan, kotor, ada nekrosis lokal, otot sekitarnya kaku dan sulit relaksasi.' },
      { id: 'tet-ex4', name: 'Periksa motorik (kekuatan dan tonus otot)',       correct: true, doctorPrompt: 'Saya periksa kekuatan dan tonus otot Bapak.', patientSpeech: 'Baik dok, otot saya susah relaks.', patientFace: 'pain', finding: 'Tonus meningkat (rigiditas) terutama otot wajah, leher, dan abdomen. Kekuatan motorik 5/5.' },
      { id: 'tet-ex5', name: 'Periksa trismus (rahang) & risus sardonicus',     correct: true, doctorPrompt: 'Saya akan minta Bapak membuka mulut dan tersenyum.', patientSpeech: 'Susah dok, mulut saya kaku.', patientFace: 'pain', finding: 'Trismus (+); risus sardonicus (+) — tampilan wajah khas tetanus.' },
      { id: 'tet-ex6', name: 'Periksa refleks fisiologis & patologis',          correct: true, doctorPrompt: 'Saya periksa refleks Bapak dengan palu.', patientSpeech: 'Iya dok.', patientFace: 'normal', finding: 'Refleks fisiologis normal/meningkat, Babinski (-). Tidak ada lesi UMN murni.' },
      { id: 'tet-ex7', name: 'Auskultasi suara usus',                            correct: false, finding: 'Bising usus normal di semua kuadran.', wrongExplanation: 'Auskultasi usus tidak relevan untuk evaluasi tetanus — fokus pemeriksaan adalah luka, tonus otot, trismus, dan TTV.', doctorPrompt: 'Saya dengarkan perut Bapak.', patientSpeech: 'Iya dok.', patientFace: 'worried' },
      { id: 'tet-ex8', name: 'Inspeksi rambut kepala',                           correct: false, finding: 'Tidak ada kelainan kulit kepala.', wrongExplanation: 'Inspeksi kepala tidak relevan untuk tetanus — keluhan utama adalah kekakuan otot pasca luka.', doctorPrompt: 'Saya periksa kepala Bapak.', patientSpeech: 'Baik dok.', patientFace: 'worried' }
    ],
    penunjang: {
      prompt: 'Pilih pemeriksaan penunjang yang tepat untuk kasus ini:',
      minRelevant: 1,
      items: [
        { id: 'tet-pen-clinical', label: 'Tidak ada pemeriksaan penunjang spesifik — diagnosis tetanus ditegakkan secara klinis (riwayat luka + trismus + spasme)', correct: true, key: 'penunjang-clinical', reply: 'Baik, dok.' },
        { id: 'tet-pen-luka',     label: 'Kultur luka & evaluasi luka tusuk untuk identifikasi sumber infeksi (penunjang terbatas, opsional)', correct: true, key: 'penunjang-luka', reply: 'Iya dok.' },
        { id: 'tet-pen-ct',       label: 'CT Scan kepala segera',                                                            correct: false, penalty: 'CT kepala tidak diperlukan — tetanus adalah diagnosis klinis, bukan stroke.' },
        { id: 'tet-pen-mri',      label: 'MRI otak DWI segera',                                                              correct: false, penalty: 'MRI tidak diindikasikan untuk tetanus.' },
        { id: 'tet-pen-ekg',      label: 'EKG sebagai gold standard',                                                        correct: false, penalty: 'EKG bukan gold standard untuk tetanus — diagnosis ditegakkan klinis.' }
      ]
    },
    diagnoses: [
      { id: 'tet-dx-tetanus',     name: 'Tetanus (akibat luka tusuk + trismus + risus sardonicus + spasme generalisata)', correct: true },
      { id: 'tet-dx-meningo',     name: 'Meningoensefalitis bakterial', correct: false, wrongExplanation: 'Meningoensefalitis biasanya disertai demam tinggi, penurunan kesadaran, dan kaku kuduk meningeal — bukan trismus dan risus sardonicus pasca luka.' },
      { id: 'tet-dx-rabies',      name: 'Rabies', correct: false, wrongExplanation: 'Rabies disertai hidrofobia/aerofobia dan riwayat gigitan hewan; pada kasus ini riwayatnya luka tusuk paku, dan gejala dominan adalah trismus.' },
      { id: 'tet-dx-strychnine',  name: 'Keracunan strychnine', correct: false, wrongExplanation: 'Strychnine bisa menyerupai tetanus tapi tidak ada riwayat paparan; riwayat luka tusuk + masa inkubasi sesuai sangat mendukung tetanus.' }
    ],
    tatalaksana: {
      prompt: 'Pilih langkah tatalaksana dan farmakoterapi yang tepat:',
      minRelevant: 4,
      items: [
        { id: 'tet-tx-luka',       label: 'Manajemen luka — debridement dan pembersihan luka',                          correct: true, key: 'tx-luka', reply: 'Baik, dok.' },
        { id: 'tet-tx-htig',       label: 'Pemberian Human Tetanus Imunoglobulin (HTIG) 250 IU/ml IM',                  correct: true, key: 'tx-htig', reply: 'Iya dok, terima kasih.' },
        { id: 'tet-tx-tt',         label: 'Pemberian vaksin Tetanus Toxoid (TT) 0,5 ml IM',                             correct: true, key: 'tx-tt' },
        { id: 'tet-tx-pen',        label: 'Antibiotik: Procain Penicillin 1,2 juta IU IM tiap 6 jam selama 10 hari',    correct: true, key: 'tx-penicillin' },
        { id: 'tet-tx-diaz',       label: 'Diazepam 5 mg/ml IV/IM untuk mengontrol spasme otot',                        correct: true, key: 'tx-diazepam' },
        { id: 'tet-tx-airway',     label: 'Pertimbangkan proteksi jalan napas dan rujuk ICU bila spasme berat',         correct: true, key: 'tx-airway' },
        { id: 'tet-tx-bad-tpa',    label: 'Berikan alteplase IV (trombolitik)',                                          correct: false, penalty: 'Trombolitik bukan terapi tetanus — itu untuk stroke iskemik akut.' },
        { id: 'tet-tx-bad-aspirin',label: 'Berikan aspirin 80 mg PO',                                                    correct: false, penalty: 'Aspirin bukan tatalaksana tetanus.' }
      ]
    },
    doctorIntro: 'Selamat pagi. Saya dokter yang akan memeriksa Bapak hari ini.',
    doctorDiagnosisCue: 'Berdasarkan luka kotor + trismus + spasme generalisata, apa diagnosis kerja Anda?'
  },

  // ============================================================
  // CASE 2 — STROKE (3B)
  // ============================================================
  {
    id: 'stroke',
    material: 'Stroke (3B)',
    complaint: 'Dok, tiba-tiba tangan dan kaki kanan saya lemah pagi ini saat bangun tidur, mulut saya juga mencong.',
    diagnosisPrompt: 'Apa diagnosis kerja yang paling mungkin?',
    minExamsRequired: 4,
    dialogueScript: {
      intro: {
        prompt: 'Bagaimana cara terbaik membuka pertemuan dengan pasien?',
        choices: [
          {
            id: 'str-intro-warm',
            label: 'Selamat pagi Pak. Perkenalkan, saya dokter jaga IGD hari ini. Boleh saya tahu nama, usia, dan pekerjaan Bapak?',
            good: true,
            key: 'intro-greeting',
            reply: 'Selamat pagi dok. Nama saya Pak Hadi, 60 tahun, pensiunan PNS.',
            patientFace: 'normal'
          },
          {
            id: 'str-intro-skip',
            label: 'Pak, langsung — apa keluhannya?',
            good: false,
            reply: 'Eh… (bicara pelo, tampak ragu)',
            patientFace: 'worried',
            penalty: 'Tidak ada salam dan perkenalan diri — apalagi pada keluhan akut.'
          }
        ]
      },
      anamnesis: {
        minRelevant: 5,
        questions: [
          { id: 'str-q-onset',     label: 'Kapan tepatnya keluhan ini muncul (jam, mendadak/perlahan)?',                relevant: true,  key: 'anam-onset',    reply: 'Pagi tadi, sekitar 2 jam lalu saat bangun tidur, dok. Tiba-tiba.' },
          { id: 'str-q-distrib',   label: 'Bagian tubuh mana yang lemah — wajah, tangan, kaki, satu sisi atau dua?',   relevant: true,  key: 'anam-distrib',  reply: 'Sisi kanan saja, dok — tangan, kaki, dan mulut mencong.' },
          { id: 'str-q-bicara',    label: 'Apakah ada gangguan bicara, menelan, atau penglihatan?',                    relevant: true,  key: 'anam-bicara',   reply: 'Bicara saya jadi pelo, dok. Menelan agak susah.' },
          { id: 'str-q-rpd',       label: 'Riwayat penyakit dahulu — hipertensi, DM, jantung, fibrilasi atrium?',      relevant: true,  key: 'anam-rpd',      reply: 'Hipertensi sudah 10 tahun, tidak rutin minum obat. DM tipe 2 juga, dok.' },
          { id: 'str-q-rpk',       label: 'Riwayat keluarga — apakah ada yang pernah stroke atau serangan jantung?',   relevant: true,  key: 'anam-rpk',      reply: 'Bapak saya meninggal karena stroke, dok.' },
          { id: 'str-q-pola',      label: 'Pola hidup — merokok, alkohol, olahraga?',                                  relevant: true,  key: 'anam-pola',     reply: 'Saya merokok, dok, sudah 30 tahun. Olahraga jarang.' },
          { id: 'str-q-trauma',    label: 'Apakah ada riwayat trauma kepala atau kejang sebelumnya?',                  relevant: true,  key: 'anam-trauma',   reply: 'Tidak ada, dok.' },
          { id: 'str-q-irrelevant-food', label: 'Apakah Bapak alergi makanan laut?',                                    relevant: false, reply: 'Tidak ada hubungannya, dok…', penalty: 'Pertanyaan tidak relevan.' },
          { id: 'str-q-irrelevant-pet',  label: 'Apakah Bapak memelihara kucing?',                                     relevant: false, reply: 'Tidak, dok.', penalty: 'Pertanyaan tidak relevan.' }
        ]
      },
      consent: {
        prompt: 'Pilih cara terbaik menyampaikan inform consent:',
        doctorIntro: 'Sebelum saya periksa, saya jelaskan dulu prosedurnya.',
        options: [
          {
            id: 'str-consent-good',
            label: '"Pak, saya akan memeriksa tanda vital, otot, refleks, dan saraf wajah Bapak. Mungkin sedikit kurang nyaman, tapi penting untuk menentukan tindakan. Apakah Bapak bersedia?"',
            correct: true, key: 'consent-explained',
            reply: 'Iya dok, silakan.',
            patientFace: 'normal'
          },
          {
            id: 'str-consent-curt',
            label: '"Pak, saya periksa ya, sebentar."',
            correct: false,
            reply: 'Eh… iya dok. (ragu)',
            patientFace: 'worried',
            penalty: 'Tidak menjelaskan prosedur dengan jelas.'
          },
          {
            id: 'str-consent-skip',
            label: '(Langsung memeriksa tanpa minta persetujuan)',
            correct: false,
            reply: '(pasien tegang)',
            patientFace: 'worried',
            penalty: 'Pelanggaran etika — tidak ada inform consent.'
          }
        ]
      },
      persiapan: {
        minRelevant: 3,
        items: [
          { id: 'str-prep-handwash', label: 'Cuci tangan 6 langkah WHO',                                                      correct: true, key: 'prep-handwash', reply: 'Baik, dok.' },
          { id: 'str-prep-tools',    label: 'Siapkan stetoskop, tensimeter, palu refleks, penlight, kapas, alcuta',          correct: true, key: 'prep-tools',    reply: 'Saya tunggu, dok.' },
          { id: 'str-prep-position', label: 'Posisikan pasien nyaman di bed pemeriksaan, kepala ditinggikan 30°',            correct: true, key: 'prep-position', reply: 'Iya dok.' },
          { id: 'str-prep-skip',     label: 'Mulai pemeriksaan tanpa cuci tangan',                                            correct: false, penalty: 'Tidak cuci tangan — risiko infeksi nosokomial.', patientFace: 'worried', reply: '(pasien terlihat khawatir)' }
        ]
      },
      edukasi: {
        minRelevant: 3,
        items: [
          { id: 'str-edu-recur',    label: 'Edukasi pasien & keluarga agar tidak terjadi kekambuhan/serangan stroke ulang', correct: true, key: 'edu-recur' },
          { id: 'str-edu-emerg',    label: 'Jika terjadi serangan ulang (FAST: Face/Arm/Speech/Time), segera bawa ke IGD',   correct: true, key: 'edu-emerg' },
          { id: 'str-edu-obat',     label: 'Awasi agar pasien teratur minum obat antihipertensi, antiplatelet, dan kontrol gula',           correct: true, key: 'edu-obat' },
          { id: 'str-edu-risk',     label: 'Bantu pasien menghindari faktor risiko: berhenti merokok, kontrol BP/DM, aktivitas fisik teratur', correct: true, key: 'edu-risk' },
          { id: 'str-edu-bad',      label: 'Pasien tidak perlu kontrol selama tidak ada keluhan',                                              correct: false, penalty: 'Edukasi salah — kontrol tetap diperlukan untuk pencegahan sekunder.' }
        ]
      }
    },
    exams: [
      { id: 'str-ex1', name: 'Periksa tanda vital (TTV)',                       correct: true, doctorPrompt: 'Saya periksa tekanan darah, nadi, dan suhu Bapak.', patientSpeech: 'Silakan, dok.', patientFace: 'normal', finding: 'TD 180/100, nadi 92x ireguler (kecurigaan AF), suhu 36,8°C.' },
      { id: 'str-ex2', name: 'Periksa keadaan umum & GCS',                      correct: true, doctorPrompt: 'Saya nilai keadaan umum dan kesadaran Bapak.', patientSpeech: 'Iya dok.', patientFace: 'normal', finding: 'GCS 14 (E4 V4 M6) — sedikit lambat respons. Wajah asimetris.' },
      { id: 'str-ex3', name: 'Periksa saraf kranialis (terutama N. VII)',       correct: true, doctorPrompt: 'Coba angkat alis dan tunjukkan gigi.', patientSpeech: 'Bibir saya susah ke kanan, dok.', patientFace: 'worried', finding: 'Parese N. VII tipe sentral kanan (sudut mulut tertarik ke kiri, dahi normal).' },
      { id: 'str-ex4', name: 'Periksa motorik (kekuatan dan tonus otot)',       correct: true, doctorPrompt: 'Coba angkat tangan dan kaki kanan Bapak.', patientSpeech: 'Susah dok, lemas.', patientFace: 'pain', finding: 'Hemiparesis kanan: kekuatan 2/5 ekstremitas atas, 3/5 ekstremitas bawah; tonus meningkat (spastisitas).' },
      { id: 'str-ex5', name: 'Periksa sensoris',                                  correct: true, doctorPrompt: 'Apakah Bapak merasakan sentuhan kapas ini di sisi kanan?', patientSpeech: 'Kurang terasa, dok.', patientFace: 'worried', finding: 'Penurunan sensasi raba dan nyeri sisi kanan (hemihipestesia).' },
      { id: 'str-ex6', name: 'Periksa refleks fisiologis & patologis',          correct: true, doctorPrompt: 'Saya periksa refleks dengan palu.', patientSpeech: 'Iya dok.', patientFace: 'normal', finding: 'Hiperrefleksia sisi kanan, klonus (+); Babinski (+) kanan — pola lesi UMN.' },
      { id: 'str-ex7', name: 'Auskultasi suara usus',                            correct: false, finding: 'Bising usus normal.', wrongExplanation: 'Auskultasi usus tidak relevan — keluhan utama defisit neurologis fokal akut.', doctorPrompt: 'Saya dengarkan perut Bapak.', patientSpeech: 'Iya dok.', patientFace: 'worried' },
      { id: 'str-ex8', name: 'Inspeksi rambut kepala',                           correct: false, finding: 'Tidak ada kelainan.', wrongExplanation: 'Inspeksi rambut tidak menambah informasi diagnostik untuk stroke.', doctorPrompt: 'Saya periksa kepala Bapak.', patientSpeech: 'Baik dok.', patientFace: 'worried' }
    ],
    penunjang: {
      prompt: 'Pilih pemeriksaan penunjang yang tepat untuk kasus ini:',
      minRelevant: 2,
      items: [
        { id: 'str-pen-ct',     label: 'CT Scan Kepala non-kontras (membedakan stroke iskemik vs hemoragik)',          correct: true, key: 'penunjang-ct',     reply: 'Baik, dok.' },
        { id: 'str-pen-mri',    label: 'MRI Otak dengan DWI (gold standard untuk infark dini)',                        correct: true, key: 'penunjang-mri',    reply: 'Iya dok.' },
        { id: 'str-pen-ekg',    label: 'EKG (cari fibrilasi atrium / sumber emboli)',                                  correct: true, key: 'penunjang-ekg' },
        { id: 'str-pen-cta',    label: 'CT Angiography arteri karotis dan serebral',                                   correct: true, key: 'penunjang-cta' },
        { id: 'str-pen-bad-usg',label: 'USG abdomen segera',                                                            correct: false, penalty: 'USG abdomen tidak relevan untuk stroke akut.' },
        { id: 'str-pen-bad-rontgen', label: 'Foto rontgen lutut',                                                        correct: false, penalty: 'Tidak relevan dengan keluhan neurologis.' }
      ]
    },
    diagnoses: [
      { id: 'str-dx-stroke',     name: 'Stroke (kemungkinan iskemik berdasarkan onset bangun tidur + AF) — perlu konfirmasi CT/MRI', correct: true },
      { id: 'str-dx-tia',        name: 'TIA — Transient Ischemic Attack', correct: false, wrongExplanation: 'TIA per definisi defisit neurologis sembuh dalam <24 jam tanpa sisa; di kasus ini defisit menetap >2 jam dan masih ada saat diperiksa, lebih konsisten dengan stroke.' },
      { id: 'str-dx-bell',       name: "Bell's palsy", correct: false, wrongExplanation: "Bell's palsy adalah parese N. VII tipe perifer terisolasi (dahi ikut kena); pada kasus ini parese N. VII sentral disertai hemiparesis dan hiperrefleksia — bukan Bell's palsy." },
      { id: 'str-dx-tumor',      name: 'Tumor otak', correct: false, wrongExplanation: 'Tumor otak biasanya progresif dalam minggu/bulan, tidak mendadak dalam hitungan menit/jam seperti pada kasus ini.' }
    ],
    tatalaksana: {
      prompt: 'Pilih langkah tatalaksana akut dan farmakoterapi yang tepat:',
      minRelevant: 4,
      items: [
        { id: 'str-tx-airway',   label: 'Nilai dan jaga jalan napas (Airway), beri oksigen bila perlu (nasal kanul)',  correct: true, key: 'tx-airway',  reply: 'Baik, dok.' },
        { id: 'str-tx-pos',      label: 'Posisikan kepala dan badan lebih tinggi 30°',                                   correct: true, key: 'tx-pos',     reply: 'Iya dok.' },
        { id: 'str-tx-iv',       label: 'Pasang infus salin normal/Ringer Laktat 500 ml/12 jam',                         correct: true, key: 'tx-iv' },
        { id: 'str-tx-glu',      label: 'Cek gula darah; bila hipoglikemia berat berikan dextrose 50% 25 g IV',          correct: true, key: 'tx-glu' },
        { id: 'str-tx-rujuk',    label: 'Rujuk segera ke pusat stroke (target onset-to-needle <4,5 jam untuk trombolitik bila iskemik)', correct: true, key: 'tx-rujuk' },
        { id: 'str-tx-bad-bp',   label: 'Turunkan tekanan darah agresif <140/90 dengan nifedipin sublingual',            correct: false, penalty: 'Tidak boleh menurunkan BP agresif pada stroke akut — risiko menurunkan perfusi serebral.' },
        { id: 'str-tx-bad-asp',  label: 'Berikan aspirin 320 mg langsung tanpa CT',                                       correct: false, penalty: 'Aspirin tidak diberikan sebelum CT menyingkirkan stroke hemoragik.' }
      ]
    },
    doctorIntro: 'Selamat pagi. Saya dokter jaga IGD yang akan memeriksa Bapak.',
    doctorDiagnosisCue: 'Berdasarkan onset mendadak + hemiparesis kanan + parese N.VII sentral + hiperrefleksia, apa diagnosis kerja Anda?'
  },

  // ============================================================
  // CASE 3 — TIA (3B)
  // ============================================================
  {
    id: 'tia',
    material: 'Transient Ischemic Attack / TIA (3B)',
    complaint: 'Dok, tadi pagi tiba-tiba tangan kanan saya lemah dan bicara pelo selama sekitar 30 menit, lalu sembuh sendiri. Sekarang saya merasa baik-baik saja.',
    diagnosisPrompt: 'Apa diagnosis kerja yang paling mungkin?',
    minExamsRequired: 4,
    dialogueScript: {
      intro: {
        prompt: 'Bagaimana cara terbaik membuka pertemuan dengan pasien?',
        choices: [
          {
            id: 'tia-intro-warm',
            label: 'Selamat pagi Bu. Perkenalkan, saya dokter yang bertugas hari ini. Boleh saya tahu nama, usia, dan pekerjaan Ibu?',
            good: true,
            key: 'intro-greeting',
            reply: 'Selamat pagi dok. Nama saya Bu Sri, 58 tahun, pengusaha warung.',
            patientFace: 'normal'
          },
          {
            id: 'tia-intro-skip',
            label: 'Bu, langsung saja — apa keluhannya?',
            good: false,
            reply: 'Eh… iya dok. (ragu, tampak terkejut)',
            patientFace: 'worried',
            penalty: 'Tidak ada salam dan perkenalan diri.'
          }
        ]
      },
      anamnesis: {
        minRelevant: 5,
        questions: [
          { id: 'tia-q-onset',     label: 'Kapan tepatnya keluhan muncul, dan berapa lama berlangsung?',                relevant: true,  key: 'anam-onset',    reply: 'Pagi tadi sekitar jam 7, dok. Berlangsung kira-kira 30 menit lalu sembuh total.' },
          { id: 'tia-q-distrib',   label: 'Bagian tubuh mana yang terkena — wajah, tangan, kaki, satu sisi atau dua?', relevant: true,  key: 'anam-distrib',  reply: 'Tangan kanan dan bicara saya pelo, dok. Sisi kanan.' },
          { id: 'tia-q-recover',   label: 'Apakah keluhan sembuh sendiri tanpa sisa, atau masih tersisa?',             relevant: true,  key: 'anam-recover',  reply: 'Sembuh total, dok. Sekarang sudah seperti biasa.' },
          { id: 'tia-q-prior',     label: 'Apakah pernah mengalami serangan serupa sebelumnya?',                       relevant: true,  key: 'anam-prior',    reply: 'Sekitar 2 minggu lalu pernah, dok. Tangan saya lemah sebentar lalu sembuh.' },
          { id: 'tia-q-rpd',       label: 'Riwayat penyakit dahulu — hipertensi, DM, fibrilasi atrium, dislipidemia?', relevant: true,  key: 'anam-rpd',      reply: 'Hipertensi 8 tahun, dok. Kolesterol juga tinggi.' },
          { id: 'tia-q-rpk',       label: 'Riwayat keluarga — apakah ada yang pernah stroke atau serangan jantung?',   relevant: true,  key: 'anam-rpk',      reply: 'Kakak saya pernah stroke ringan, dok.' },
          { id: 'tia-q-pola',      label: 'Pola hidup — merokok, alkohol, olahraga, diet?',                            relevant: true,  key: 'anam-pola',     reply: 'Saya tidak merokok, dok. Tapi diet saya banyak gorengan dan jarang olahraga.' },
          { id: 'tia-q-irrelevant-food', label: 'Apakah Ibu alergi makanan laut?',                                      relevant: false, reply: 'Tidak ada hubungannya, dok…', penalty: 'Pertanyaan tidak relevan.' },
          { id: 'tia-q-irrelevant-pet',  label: 'Apakah Ibu memelihara kucing?',                                       relevant: false, reply: 'Tidak, dok.', penalty: 'Pertanyaan tidak relevan.' }
        ]
      },
      consent: {
        prompt: 'Pilih cara terbaik menyampaikan inform consent:',
        doctorIntro: 'Sebelum saya periksa, saya jelaskan dulu prosedurnya.',
        options: [
          {
            id: 'tia-consent-good',
            label: '"Bu, saya akan memeriksa tanda vital, otot, refleks, dan saraf Ibu untuk memastikan tidak ada defisit yang tersisa. Apakah Ibu bersedia?"',
            correct: true, key: 'consent-explained',
            reply: 'Iya dok, silakan.',
            patientFace: 'normal'
          },
          {
            id: 'tia-consent-curt',
            label: '"Bu, saya periksa langsung ya."',
            correct: false,
            reply: 'Eh… iya dok. (ragu)',
            patientFace: 'worried',
            penalty: 'Tidak menjelaskan prosedur dengan jelas.'
          },
          {
            id: 'tia-consent-skip',
            label: '(Langsung memeriksa tanpa minta persetujuan)',
            correct: false,
            reply: '(pasien terlihat tegang)',
            patientFace: 'worried',
            penalty: 'Pelanggaran etika — tidak ada inform consent.'
          }
        ]
      },
      persiapan: {
        minRelevant: 3,
        items: [
          { id: 'tia-prep-handwash', label: 'Cuci tangan 6 langkah WHO',                                                      correct: true, key: 'prep-handwash', reply: 'Baik, dok.' },
          { id: 'tia-prep-tools',    label: 'Siapkan stetoskop, tensimeter, palu refleks, penlight, kapas, alcuta',          correct: true, key: 'prep-tools',    reply: 'Saya tunggu, dok.' },
          { id: 'tia-prep-position', label: 'Posisikan pasien dengan nyaman di bed pemeriksaan',                              correct: true, key: 'prep-position', reply: 'Iya dok.' },
          { id: 'tia-prep-skip',     label: 'Mulai pemeriksaan tanpa cuci tangan',                                            correct: false, penalty: 'Tidak cuci tangan — risiko infeksi nosokomial.', patientFace: 'worried', reply: '(pasien terlihat khawatir)' }
        ]
      },
      edukasi: {
        minRelevant: 3,
        items: [
          { id: 'tia-edu-warning',  label: 'Jelaskan bahwa TIA adalah "warning stroke" — risiko stroke berikutnya tinggi terutama 48 jam pertama',  correct: true, key: 'edu-warning' },
          { id: 'tia-edu-emerg',    label: 'Jika terjadi serangan ulang (FAST: Face/Arm/Speech/Time), segera ke IGD',                                correct: true, key: 'edu-emerg' },
          { id: 'tia-edu-obat',     label: 'Awasi agar pasien teratur minum obat antiplatelet, antihipertensi, dan statin',                          correct: true, key: 'edu-obat' },
          { id: 'tia-edu-risk',     label: 'Hindari faktor risiko — kontrol BP, kolesterol, diet rendah lemak, olahraga teratur',                    correct: true, key: 'edu-risk' },
          { id: 'tia-edu-bad',      label: 'Karena keluhan sudah sembuh, pasien tidak perlu kontrol atau obat',                                       correct: false, penalty: 'Edukasi salah — TIA justru indikasi prevensi sekunder agresif.' }
        ]
      }
    },
    exams: [
      { id: 'tia-ex1', name: 'Periksa tanda vital (TTV)',                       correct: true, doctorPrompt: 'Saya periksa tekanan darah, nadi, dan suhu Ibu.', patientSpeech: 'Silakan, dok.', patientFace: 'normal', finding: 'TD 165/95, nadi 88x ireguler ringan (kecurigaan AF paroksismal).' },
      { id: 'tia-ex2', name: 'Periksa keadaan umum & GCS',                      correct: true, doctorPrompt: 'Saya nilai kesadaran dan keadaan umum.', patientSpeech: 'Iya dok.', patientFace: 'normal', finding: 'Compos mentis, GCS 15. Tampak baik-baik saja saat ini.' },
      { id: 'tia-ex3', name: 'Periksa saraf kranialis (I–XII)',                  correct: true, doctorPrompt: 'Coba angkat alis dan tunjukkan gigi.', patientSpeech: 'Iya dok, sekarang sudah normal.', patientFace: 'normal', finding: 'Saraf kranialis I–XII normal — tidak ada parese N.VII saat ini (defisit sudah pulih).' },
      { id: 'tia-ex4', name: 'Periksa motorik (kekuatan dan tonus otot)',       correct: true, doctorPrompt: 'Coba angkat dan tahan tangan dan kaki Ibu.', patientSpeech: 'Bisa dok, sudah normal.', patientFace: 'normal', finding: 'Kekuatan 5/5 keempat ekstremitas, tonus normal. Tidak ada hemiparesis residual.' },
      { id: 'tia-ex5', name: 'Periksa sensoris',                                  correct: true, doctorPrompt: 'Apakah Ibu merasakan sentuhan kapas ini?', patientSpeech: 'Iya, terasa sama, dok.', patientFace: 'normal', finding: 'Sensasi raba, nyeri, dan proprioseptif normal bilateral.' },
      { id: 'tia-ex6', name: 'Periksa refleks fisiologis & patologis',          correct: true, doctorPrompt: 'Saya periksa refleks dengan palu.', patientSpeech: 'Iya dok.', patientFace: 'normal', finding: 'Refleks fisiologis simetris ++; Babinski (-). Tidak ada bukti lesi UMN saat ini.' },
      { id: 'tia-ex7', name: 'Auskultasi suara usus',                            correct: false, finding: 'Bising usus normal.', wrongExplanation: 'Auskultasi usus tidak relevan untuk evaluasi defisit neurologis transien.', doctorPrompt: 'Saya dengarkan perut Ibu.', patientSpeech: 'Iya dok.', patientFace: 'worried' },
      { id: 'tia-ex8', name: 'Inspeksi rambut kepala',                           correct: false, finding: 'Tidak ada kelainan.', wrongExplanation: 'Inspeksi rambut tidak menambah informasi diagnostik untuk TIA.', doctorPrompt: 'Saya periksa kepala Ibu.', patientSpeech: 'Baik dok.', patientFace: 'worried' }
    ],
    penunjang: {
      prompt: 'Pilih pemeriksaan penunjang yang tepat untuk kasus ini:',
      minRelevant: 2,
      items: [
        { id: 'tia-pen-ct',     label: 'CT Scan Kepala non-kontras (menyingkirkan perdarahan/infark establish)',         correct: true, key: 'penunjang-ct',     reply: 'Baik, dok.' },
        { id: 'tia-pen-mri',    label: 'MRI Otak DWI — gold standard untuk infark kecil pada TIA / stroke iskemik dini', correct: true, key: 'penunjang-mri',    reply: 'Iya dok.' },
        { id: 'tia-pen-ekg',    label: 'EKG (cari fibrilasi atrium sebagai sumber emboli)',                              correct: true, key: 'penunjang-ekg' },
        { id: 'tia-pen-cta',    label: 'CT Angiography arteri karotis dan serebral (cari stenosis/aterosklerosis)',     correct: true, key: 'penunjang-cta' },
        { id: 'tia-pen-bad-usg',label: 'USG abdomen segera',                                                              correct: false, penalty: 'USG abdomen tidak relevan untuk TIA.' },
        { id: 'tia-pen-bad-bnp',label: 'NT-proBNP rutin sebagai gold standard',                                           correct: false, penalty: 'NT-proBNP bukan gold standard untuk TIA — gold standard adalah MRI DWI.' }
      ]
    },
    diagnoses: [
      { id: 'tia-dx-tia',         name: 'Transient Ischemic Attack (TIA) — defisit fokal sembuh total dalam <24 jam', correct: true },
      { id: 'tia-dx-stroke',      name: 'Stroke iskemik komplit', correct: false, wrongExplanation: 'Stroke iskemik komplit memiliki defisit menetap; di kasus ini defisit sembuh total dalam ~30 menit, lebih konsisten dengan TIA. Catatan: definisi modern mensyaratkan pencitraan negatif untuk infark.' },
      { id: 'tia-dx-todd',        name: "Todd's paralysis pasca kejang", correct: false, wrongExplanation: "Todd's paralysis muncul setelah serangan kejang fokal; pada kasus ini tidak ada riwayat kejang." },
      { id: 'tia-dx-hipoglikemia',name: 'Hipoglikemia simptomatik', correct: false, wrongExplanation: 'Hipoglikemia bisa menyerupai TIA, tapi biasanya bilateral, disertai keringat dingin, dan membaik dengan glukosa — bukan defisit unilateral murni.' }
    ],
    tatalaksana: {
      prompt: 'Pilih langkah tatalaksana dan farmakoterapi yang tepat (gunakan skor ABCD2):',
      minRelevant: 4,
      items: [
        { id: 'tia-tx-abcd2',    label: 'Hitung skor ABCD2 untuk menilai risiko stroke 2 hari ke depan',                correct: true, key: 'tx-abcd2',    reply: 'Baik, dok.' },
        { id: 'tia-tx-aspirin',  label: 'Berikan Aspirin 80–325 mg PO sebagai antiplatelet (loading dose CITO)',         correct: true, key: 'tx-aspirin',  reply: 'Iya dok.' },
        { id: 'tia-tx-statin',   label: 'Mulai statin (mis. atorvastatin) untuk prevensi sekunder',                       correct: true, key: 'tx-statin' },
        { id: 'tia-tx-bp',       label: 'Optimalisasi tekanan darah dan kontrol DM secara bertahap',                      correct: true, key: 'tx-bp' },
        { id: 'tia-tx-rujuk',    label: 'Bila ABCD2 >5 (risiko tinggi) → tatalaksana seperti stroke iskemik akut, rujuk segera ke pusat stroke', correct: true, key: 'tx-rujuk' },
        { id: 'tia-tx-bad-tpa',  label: 'Berikan alteplase IV langsung tanpa pencitraan',                                  correct: false, penalty: 'Trombolitik tidak diberikan tanpa CT/MRI dan tidak rutin untuk TIA tanpa defisit menetap.' },
        { id: 'tia-tx-bad-anti', label: 'Berikan antibiotik spektrum luas',                                                correct: false, penalty: 'Antibiotik tidak diindikasikan — TIA bukan infeksi.' }
      ]
    },
    doctorIntro: 'Selamat pagi. Saya dokter yang akan memeriksa Ibu hari ini.',
    doctorDiagnosisCue: 'Berdasarkan defisit fokal mendadak yang sembuh total dalam <24 jam, apa diagnosis kerja Anda?'
  }
];

// Expose to window for the OSCE engine.
if (typeof window !== 'undefined') {
  window.OSCE_CASES_FASE_2 = OSCE_CASES_FASE_2;
}
