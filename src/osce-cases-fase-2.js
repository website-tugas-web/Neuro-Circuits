// OSCE Cases Fase 2 — Clinical content for the 9-step Phase 2 quiz.
// Single-pick redesign for NEUAAA-258: each MCQ stage has one correct
// option and several balanced distractors. Pembukaan and Inform Consent
// are dialogue-only (no choices). Three cases ship in production:
// Tetanus (4A), TIA (3B), and Stroke (3B). Source material lives in
// kasus-osce-fase-2-tetanus.html / -tia.html / -stroke.html.
//
// Authoring rules (do not violate):
//   - No parentheses or hyphen-dashes inside choice labels.
//   - All options within a question share length and verb pattern.
//   - Correct answers are not more detailed than distractors.
//   - Only use clinical content drawn from the Phase 2 case material.

const OSCE_CASES_FASE_2 = [

  // ============================================================
  // CASE 1 — TETANUS (4A)
  // ============================================================
  {
    id: 'tetanus',
    material: 'Tetanus 4A',
    dialogueScript: {

      intro: {
        lines: [
          { doctor: 'Selamat pagi. Saya dokter yang bertugas di poli saraf hari ini.', patient: '', patientFace: 'normal' },
          { doctor: 'Boleh saya tahu nama, usia, dan pekerjaan Bapak?', patient: 'Selamat pagi dok. Nama saya Pak Slamet, 42 tahun, sehari-hari saya petani.', patientFace: 'normal' },
          { doctor: 'Apa yang membuat Bapak datang ke poli hari ini?', patient: 'Mulut saya kaku sejak 3 hari yang lalu, dok. Otot perut dan leher juga ikut tegang.', patientFace: 'pain' },
          { doctor: 'Terima kasih sudah menyampaikan keluhannya. Saya akan tanyakan beberapa hal sebelum memeriksa.', patient: 'Baik dok, silakan.', patientFace: 'normal' }
        ]
      },

      anamnesis: {
        prompt: 'Pertanyaan anamnesis apa yang paling mengarahkan diagnosis untuk keluhan kekakuan otot ini?',
        doctorPrompt: 'Saya akan tanyakan riwayat penyakit dan faktor risiko Bapak.',
        choices: [
          { id: 'tet-anam-luka',   label: 'Apakah Bapak baru saja mengalami luka tusuk atau luka kotor di kaki?',  correct: true,  consequence: '' },
          { id: 'tet-anam-makan',  label: 'Apakah Bapak baru saja mengonsumsi makanan laut atau jamur liar?',       correct: false, consequence: 'Keluhan utama kekakuan otot mengarah ke tetanus, bukan keracunan makanan.' },
          { id: 'tet-anam-batuk',  label: 'Apakah Bapak sedang batuk berdahak dan demam tinggi sejak seminggu ini?', correct: false, consequence: 'Anamnesis ini lebih relevan untuk infeksi saluran napas, bukan kekakuan otot.' },
          { id: 'tet-anam-kepala', label: 'Apakah Bapak pernah jatuh dan mengalami benturan kepala bulan ini?',      correct: false, consequence: 'Trauma kepala dapat menyebabkan defisit neurologis lain, tetapi tidak memberi kekakuan tonik khas.' },
          { id: 'tet-anam-buang',  label: 'Bagaimana pola buang air besar Bapak dalam satu minggu terakhir?',         correct: false, consequence: 'Pola defekasi tidak menjelaskan kekakuan tonik yang dialami pasien.' },
          { id: 'tet-anam-hewan',  label: 'Apakah Bapak memelihara kucing atau anjing di rumah?',                     correct: false, consequence: 'Riwayat hewan peliharaan tidak relevan dengan keluhan kekakuan otot pasca luka.' }
        ]
      },

      consent: {
        lines: [
          { doctor: 'Setelah mendengar keluhan Bapak, saya perlu melakukan beberapa pemeriksaan fisik dan saraf.', patient: 'Baik dok.', patientFace: 'normal' },
          { doctor: 'Saya akan memeriksa tanda vital, otot wajah, refleks, serta luka di kaki Bapak. Mungkin sedikit kurang nyaman, tapi tidak menyakitkan.', patient: 'Iya dok, saya mengerti.', patientFace: 'normal' },
          { doctor: 'Apakah Bapak bersedia saya periksa sekarang?', patient: 'Saya bersedia dok, silakan.', patientFace: 'normal' }
        ]
      },

      persiapan: {
        prompt: 'Set alat apa yang paling tepat Anda siapkan untuk pemeriksaan neurologis kasus ini?',
        doctorPrompt: 'Saya cuci tangan dulu lalu menyiapkan alat pemeriksaan.',
        choices: [
          { id: 'tet-prep-neuro',   label: 'Stetoskop, tensimeter, palu refleks, penlight, kapas dan jarum sensorik, alcuta', correct: true,  consequence: '' },
          { id: 'tet-prep-obgyn',   label: 'Lampu ginekologi, spekulum, stetoskop janin, kapas dan jarum sensorik, alcuta',   correct: false, consequence: 'Alat tersebut adalah set obstetri ginekologi dan tidak digunakan untuk pemeriksaan neurologis.' },
          { id: 'tet-prep-bedah',   label: 'Needle holder, alat jahit luka, lup, pinset anatomis, penlight, alcuta',           correct: false, consequence: 'Set bedah minor digunakan untuk hecting, bukan untuk menilai status neurologis.' },
          { id: 'tet-prep-tht',     label: 'Otoscope, garputala, tongue spatel, lampu kepala, kapas dan jarum sensorik, alcuta', correct: false, consequence: 'Set THT digunakan untuk pemeriksaan telinga hidung tenggorok, tidak menilai motorik atau refleks.' },
          { id: 'tet-prep-mata',    label: 'Lup, oftalmoskop, snellen chart, tonometer, kapas dan jarum sensorik, alcuta',     correct: false, consequence: 'Set mata digunakan untuk pemeriksaan visus dan tekanan intraokular, bukan saraf perifer.' },
          { id: 'tet-prep-anak',    label: 'Stetoskop janin, pita ukur, penlight, kapas dan jarum sensorik, palu refleks, alcuta', correct: false, consequence: 'Stetoskop janin adalah alat obstetri dan tidak sesuai untuk pemeriksaan pasien dewasa dengan tetanus.' }
        ]
      },

      pemeriksaan: {
        prompt: 'Pemeriksaan apa yang paling mengarahkan diagnosis pada kasus ini?',
        doctorPrompt: 'Saya akan lakukan pemeriksaan fisik dan neurologis sekarang.',
        choices: [
          { id: 'tet-ex-motorik', label: 'Pemeriksaan motorik kekuatan dan tonus otot ekstremitas',         correct: true,  consequence: '' },
          { id: 'tet-ex-visus',   label: 'Pemeriksaan visus mata dengan snellen chart bilateral',           correct: false, consequence: 'Visus mata tidak relevan untuk menilai kekakuan tonik dan trismus pada tetanus.' },
          { id: 'tet-ex-ascites', label: 'Pemeriksaan ascites dengan shifting dullness dan undulasi',      correct: false, consequence: 'Pemeriksaan ascites untuk asesmen penyakit hati, bukan kelainan tonus otot.' },
          { id: 'tet-ex-payudara',label: 'Pemeriksaan payudara lengkap dengan KGB aksila',                 correct: false, consequence: 'Pemeriksaan payudara tidak berhubungan dengan keluhan kekakuan otot pasca luka.' },
          { id: 'tet-ex-leopold', label: 'Pemeriksaan Leopold I sampai IV pada ibu hamil',                 correct: false, consequence: 'Manuver Leopold untuk menilai posisi janin, tidak digunakan pada kasus tetanus.' },
          { id: 'tet-ex-hernia',  label: 'Pemeriksaan hernia inguinalis dengan manuver valsava',           correct: false, consequence: 'Pemeriksaan hernia untuk menilai protrusi visera, tidak menjawab keluhan trismus dan rigiditas.' },
          { id: 'tet-ex-abdomen', label: 'Pemeriksaan abdomen umum termasuk hepar dan limpa',              correct: false, consequence: 'Pemeriksaan abdomen umum bukan inti diagnosis tetanus walau abdomen dapat rigid akibat spasme.' }
        ]
      },

      penunjang: {
        prompt: 'Apa pendekatan pemeriksaan penunjang yang paling tepat pada kasus ini?',
        doctorPrompt: 'Saya pertimbangkan pemeriksaan penunjang yang relevan.',
        choices: [
          { id: 'tet-pen-clinical', label: 'Tidak ada pemeriksaan penunjang spesifik karena diagnosis ditegakkan secara klinis',     correct: true,  consequence: '' },
          { id: 'tet-pen-ct',       label: 'CT Scan kepala tanpa kontras segera untuk konfirmasi diagnosis sebagai modalitas utama', correct: false, consequence: 'CT kepala tidak menegakkan tetanus karena lesi bukan struktural intrakranial.' },
          { id: 'tet-pen-mri',      label: 'MRI otak dengan Diffusion Weighted Imaging sebagai gold standard diagnosis',             correct: false, consequence: 'MRI DWI adalah gold standard untuk stroke iskemik, bukan tetanus.' },
          { id: 'tet-pen-ekg',      label: 'EKG 12 sadapan sebagai modalitas utama untuk menegakkan diagnosis primer',              correct: false, consequence: 'EKG menilai irama jantung dan tidak menegakkan diagnosis tetanus.' },
          { id: 'tet-pen-cta',      label: 'CT Angiography otak untuk menilai stenosis pembuluh darah serebral primer',             correct: false, consequence: 'CT Angiography untuk evaluasi vaskular serebral, tidak relevan pada tetanus.' },
          { id: 'tet-pen-darah',    label: 'Panel darah lengkap, elektrolit, dan kultur darah sebagai standar diagnosis utama',     correct: false, consequence: 'Pemeriksaan darah dapat menunjang asesmen umum, namun tidak menegakkan diagnosis tetanus.' }
        ]
      },

      ddx: {
        prompt: 'Apa diagnosis kerja yang paling mungkin untuk kasus ini?',
        doctorPrompt: 'Saya tegakkan diagnosis kerja berdasarkan temuan klinis.',
        choices: [
          { id: 'tet-dx-tetanus',     label: 'Tetanus',                  correct: true,  consequence: '' },
          { id: 'tet-dx-rabies',      label: 'Rabies',                   correct: false, consequence: 'Rabies juga memberi spasme otot, namun diawali gigitan hewan dan disertai hidrofobia, tidak cocok dengan riwayat ini.' },
          { id: 'tet-dx-meningitis',  label: 'Meningoensefalitis',       correct: false, consequence: 'Meningoensefalitis biasanya disertai demam tinggi, penurunan kesadaran, dan kaku kuduk dominan, bukan trismus.' },
          { id: 'tet-dx-strychnine',  label: 'Keracunan strychnine',     correct: false, consequence: 'Keracunan strychnine memberi spasme menyeluruh akut, namun riwayat paparan racun tidak ditemukan.' },
          { id: 'tet-dx-poliomyelit', label: 'Poliomielitis',            correct: false, consequence: 'Poliomielitis memberi paralisis flaksid asimetris, bukan rigiditas dan trismus.' },
          { id: 'tet-dx-tetani',      label: 'Tetani',                   correct: false, consequence: 'Tetani akibat hipokalsemia memberi spasme karpopedal, bukan trismus dengan riwayat luka kotor.' }
        ]
      },

      tatalaksana: {
        prompt: 'Apa langkah tatalaksana awal yang paling tepat untuk kasus ini?',
        doctorPrompt: 'Saya susun rencana tatalaksana awal.',
        choices: [
          { id: 'tet-tx-tet',     label: 'Bersihkan luka, berikan TT dan HTIG, serta antibiotik dan diazepam untuk spasme',          correct: true,  consequence: '' },
          { id: 'tet-tx-aspirin', label: 'Berikan aspirin 80 mg, alteplase intravena, dan rujuk untuk terapi trombolitik segera',    correct: false, consequence: 'Aspirin dan trombolitik adalah tatalaksana stroke iskemik, bukan tetanus.' },
          { id: 'tet-tx-rl',      label: 'Pasang infus ringer laktat, posisikan kepala 30 derajat, dan beri oksigen suplemen',       correct: false, consequence: 'Posisi 30 derajat dan resusitasi cairan adalah tatalaksana stroke akut, bukan tetanus.' },
          { id: 'tet-tx-otb',     label: 'Berikan obat anti tuberkulosis kombinasi kategori satu rutin selama 6 bulan penuh',         correct: false, consequence: 'Terapi tuberkulosis tidak digunakan pada tetanus.' },
          { id: 'tet-tx-jantung', label: 'Berikan nitrat sublingual, aspirin, dan rujuk untuk kateterisasi jantung primer',           correct: false, consequence: 'Nitrat dan kateterisasi adalah tatalaksana sindrom koroner akut, tidak relevan pada tetanus.' },
          { id: 'tet-tx-dextro',  label: 'Berikan dekstrose 50 persen 25 gram intravena rutin dan rujuk untuk hemodialisis',          correct: false, consequence: 'Dekstrose 50 persen untuk hipoglikemia berat, bukan tatalaksana tetanus.' }
        ]
      },

      edukasi: {
        prompt: 'Edukasi apa yang paling penting Anda sampaikan kepada pasien dan keluarga?',
        doctorPrompt: 'Sebelum pulang, saya berikan edukasi.',
        choices: [
          { id: 'tet-edu-vaks',     label: 'Lengkapi vaksinasi tetanus dan segera ke fasyankes bila ada luka kotor di kemudian hari',     correct: true,  consequence: '' },
          { id: 'tet-edu-merokok',  label: 'Berhenti merokok dan kontrol tekanan darah untuk menurunkan risiko stroke berulang',          correct: false, consequence: 'Edukasi berhenti merokok lebih relevan untuk stroke atau TIA, bukan tetanus.' },
          { id: 'tet-edu-aspirin',  label: 'Minum aspirin setiap hari seumur hidup untuk mencegah serangan iskemia ulang',                correct: false, consequence: 'Aspirin tidak digunakan untuk pencegahan tetanus.' },
          { id: 'tet-edu-air',      label: 'Hindari minum air mentah dan makanan tidak matang untuk mencegah infeksi pencernaan ulang',    correct: false, consequence: 'Edukasi sanitasi air tidak menjawab risiko tetanus pasca luka tusuk.' },
          { id: 'tet-edu-tekanan',  label: 'Pantau tekanan darah harian di rumah dan minum obat antihipertensi rutin tiap hari',          correct: false, consequence: 'Pemantauan tekanan darah adalah edukasi untuk hipertensi atau stroke, bukan tetanus.' },
          { id: 'tet-edu-kontrol',  label: 'Tidak perlu kontrol kembali ke fasyankes selama tidak ada keluhan baru yang muncul',          correct: false, consequence: 'Pasien tetanus tetap memerlukan kontrol dan booster vaksin sesuai jadwal.' }
        ]
      }
    }
  },

  // ============================================================
  // CASE 2 — TIA (3B)
  // ============================================================
  {
    id: 'tia',
    material: 'Transient Ischemic Attack 3B',
    dialogueScript: {

      intro: {
        lines: [
          { doctor: 'Selamat pagi. Saya dokter yang bertugas di IGD hari ini.', patient: '', patientFace: 'normal' },
          { doctor: 'Boleh saya tahu nama, usia, dan pekerjaan Bapak?', patient: 'Selamat pagi dok. Saya Pak Hendra, 60 tahun, pensiunan guru.', patientFace: 'normal' },
          { doctor: 'Apa yang membuat Bapak datang ke IGD hari ini?', patient: 'Tadi pagi tangan kanan saya tiba tiba lemas dan bicara saya pelo, dok. Sekitar 30 menit kemudian sudah pulih sendiri.', patientFace: 'worried' },
          { doctor: 'Terima kasih sudah menjelaskan. Saya akan tanyakan beberapa hal sebelum memeriksa.', patient: 'Baik dok, silakan.', patientFace: 'normal' }
        ]
      },

      anamnesis: {
        prompt: 'Pertanyaan anamnesis apa yang paling mengarahkan diagnosis untuk keluhan kelemahan singkat ini?',
        doctorPrompt: 'Saya akan tanyakan perjalanan keluhan dan faktor risiko Bapak.',
        choices: [
          { id: 'tia-anam-risk',  label: 'Apakah Bapak punya riwayat hipertensi, diabetes, atau penyakit jantung sebelumnya?',     correct: true,  consequence: '' },
          { id: 'tia-anam-luka',  label: 'Apakah Bapak baru saja mengalami luka tusuk kotor yang tidak dibersihkan minggu ini?',  correct: false, consequence: 'Luka tusuk merupakan faktor risiko tetanus, bukan kelemahan singkat akibat gangguan aliran darah otak.' },
          { id: 'tia-anam-makan', label: 'Apakah Bapak baru saja mengonsumsi makanan laut atau jamur liar dalam beberapa hari?',  correct: false, consequence: 'Riwayat makanan tidak menjelaskan kelemahan unilateral mendadak yang pulih sendiri.' },
          { id: 'tia-anam-batuk', label: 'Apakah Bapak sedang batuk berdahak dan demam tinggi sejak satu minggu terakhir?',       correct: false, consequence: 'Infeksi saluran napas tidak menyebabkan kelemahan unilateral transien.' },
          { id: 'tia-anam-buang', label: 'Bagaimana pola buang air besar Bapak dalam satu minggu terakhir ini?',                  correct: false, consequence: 'Pola defekasi tidak relevan dengan defisit neurologis fokal yang transien.' },
          { id: 'tia-anam-hewan', label: 'Apakah Bapak memelihara kucing atau anjing peliharaan di rumah saat ini?',              correct: false, consequence: 'Riwayat hewan peliharaan tidak terkait dengan iskemia serebral.' }
        ]
      },

      consent: {
        lines: [
          { doctor: 'Saya perlu memeriksa kondisi Bapak lebih lanjut karena keluhan tadi bisa menjadi tanda gangguan aliran darah ke otak.', patient: 'Baik dok.', patientFace: 'normal' },
          { doctor: 'Saya akan periksa tekanan darah, saraf, kekuatan otot, refleks, dan beberapa pemeriksaan penunjang. Mungkin akan ada CT Scan kepala.', patient: 'Iya dok, saya siap diperiksa.', patientFace: 'normal' },
          { doctor: 'Apakah Bapak bersedia saya periksa sekarang?', patient: 'Saya bersedia dok, silakan.', patientFace: 'normal' }
        ]
      },

      persiapan: {
        prompt: 'Set alat apa yang paling tepat Anda siapkan untuk pemeriksaan neurologis kasus ini?',
        doctorPrompt: 'Saya cuci tangan dulu lalu menyiapkan alat pemeriksaan.',
        choices: [
          { id: 'tia-prep-neuro',  label: 'Stetoskop, tensimeter, palu refleks, penlight, kapas dan jarum sensorik, alcuta',     correct: true,  consequence: '' },
          { id: 'tia-prep-obgyn',  label: 'Lampu ginekologi, spekulum, stetoskop janin, kapas dan jarum sensorik, alcuta',       correct: false, consequence: 'Set obstetri ginekologi tidak menilai status neurologis.' },
          { id: 'tia-prep-bedah',  label: 'Needle holder, alat jahit luka, lup, pinset anatomis, penlight, alcuta',               correct: false, consequence: 'Set bedah minor digunakan untuk hecting luka, bukan pemeriksaan saraf.' },
          { id: 'tia-prep-tht',    label: 'Otoscope, garputala, tongue spatel, lampu kepala, kapas dan jarum sensorik, alcuta',  correct: false, consequence: 'Set THT digunakan untuk telinga hidung tenggorok, tidak menilai motorik dan refleks.' },
          { id: 'tia-prep-mata',   label: 'Lup, oftalmoskop, snellen chart, tonometer, kapas dan jarum sensorik, alcuta',         correct: false, consequence: 'Set mata digunakan untuk pemeriksaan visus dan tekanan intraokular, bukan defisit fokal.' },
          { id: 'tia-prep-anak',   label: 'Stetoskop janin, pita ukur, penlight, kapas dan jarum sensorik, palu refleks, alcuta', correct: false, consequence: 'Stetoskop janin adalah alat obstetri, tidak relevan pada pasien dewasa dengan TIA.' }
        ]
      },

      pemeriksaan: {
        prompt: 'Pemeriksaan apa yang paling mengarahkan diagnosis pada kasus ini?',
        doctorPrompt: 'Saya akan lakukan pemeriksaan fisik dan neurologis sekarang.',
        choices: [
          { id: 'tia-ex-kranialis', label: 'Pemeriksaan saraf kranialis I sampai XII secara berurutan',         correct: true,  consequence: '' },
          { id: 'tia-ex-visus',     label: 'Pemeriksaan visus mata dengan snellen chart bilateral',             correct: false, consequence: 'Visus mata tidak menilai defisit fokal hemisfer otak akibat iskemia.' },
          { id: 'tia-ex-ascites',   label: 'Pemeriksaan ascites dengan shifting dullness dan undulasi',        correct: false, consequence: 'Pemeriksaan ascites menilai cairan abdomen, tidak menjawab kelemahan unilateral.' },
          { id: 'tia-ex-payudara',  label: 'Pemeriksaan payudara lengkap dengan KGB aksila',                   correct: false, consequence: 'Pemeriksaan payudara tidak terkait dengan defisit neurologis transien.' },
          { id: 'tia-ex-leopold',   label: 'Pemeriksaan Leopold I sampai IV pada ibu hamil',                   correct: false, consequence: 'Manuver Leopold untuk menilai posisi janin, tidak digunakan pada kasus TIA.' },
          { id: 'tia-ex-hernia',    label: 'Pemeriksaan hernia inguinalis dengan manuver valsava',             correct: false, consequence: 'Pemeriksaan hernia untuk protrusi visera, tidak menjelaskan iskemia otak.' },
          { id: 'tia-ex-abdomen',   label: 'Pemeriksaan abdomen umum termasuk hepar dan limpa',                correct: false, consequence: 'Pemeriksaan abdomen umum bukan inti diagnosis pada TIA.' }
        ]
      },

      penunjang: {
        prompt: 'Apa pemeriksaan penunjang gold standard untuk kasus ini?',
        doctorPrompt: 'Saya pertimbangkan pemeriksaan penunjang yang paling relevan.',
        choices: [
          { id: 'tia-pen-mri',   label: 'MRI otak dengan Diffusion Weighted Imaging sebagai gold standard diagnosis',  correct: true,  consequence: '' },
          { id: 'tia-pen-tidak', label: 'Tidak ada pemeriksaan penunjang spesifik karena diagnosis ditegakkan klinis',  correct: false, consequence: 'TIA memerlukan pencitraan untuk menyingkirkan stroke iskemik dini, tidak cukup klinis saja.' },
          { id: 'tia-pen-ekg',   label: 'EKG 12 sadapan sebagai modalitas utama untuk menegakkan diagnosis primer',     correct: false, consequence: 'EKG dapat menemukan fibrilasi atrium, namun bukan gold standard untuk TIA.' },
          { id: 'tia-pen-darah', label: 'Panel darah lengkap, elektrolit, dan kultur darah sebagai gold standard',      correct: false, consequence: 'Pemeriksaan darah menunjang asesmen umum, tidak menegakkan TIA.' },
          { id: 'tia-pen-foto',  label: 'Foto rontgen toraks dua proyeksi sebagai modalitas pencitraan utama primer',   correct: false, consequence: 'Rontgen toraks tidak menilai iskemia serebral.' },
          { id: 'tia-pen-usg',   label: 'USG abdomen untuk menilai sumber emboli sistemik dan parenkim hati',           correct: false, consequence: 'USG abdomen tidak menilai vaskular serebral atau infark otak.' }
        ]
      },

      ddx: {
        prompt: 'Apa diagnosis kerja yang paling mungkin untuk kasus ini?',
        doctorPrompt: 'Saya tegakkan diagnosis kerja berdasarkan temuan klinis.',
        choices: [
          { id: 'tia-dx-tia',     label: 'Transient Ischemic Attack',     correct: true,  consequence: '' },
          { id: 'tia-dx-stroke',  label: 'Stroke iskemik akut',           correct: false, consequence: 'Stroke iskemik akut memberi defisit menetap lebih dari 24 jam, tidak pulih dalam 30 menit.' },
          { id: 'tia-dx-tumor',   label: 'Tumor otak',                    correct: false, consequence: 'Tumor otak memberi defisit progresif, bukan defisit fokal singkat yang pulih sendiri.' },
          { id: 'tia-dx-todd',    label: 'Todd paralysis pasca kejang',   correct: false, consequence: 'Todd paralysis didahului bangkitan kejang, sedangkan pasien tidak memiliki riwayat kejang.' },
          { id: 'tia-dx-hipo',    label: 'Hipoglikemia berat',            correct: false, consequence: 'Hipoglikemia memberi defisit neurologis, namun biasanya disertai keringat dingin dan kadar glukosa rendah.' },
          { id: 'tia-dx-tetanus', label: 'Tetanus',                       correct: false, consequence: 'Tetanus memberi rigiditas dan trismus pasca luka kotor, bukan kelemahan unilateral transien.' }
        ]
      },

      tatalaksana: {
        prompt: 'Apa langkah tatalaksana awal yang paling tepat untuk kasus ini?',
        doctorPrompt: 'Saya susun rencana tatalaksana awal.',
        choices: [
          { id: 'tia-tx-abcd2',   label: 'Menilai skor ABCD2 dan memberi aspirin serta tata laksana stroke bila skor lebih dari 5', correct: true,  consequence: '' },
          { id: 'tia-tx-tet',     label: 'Bersihkan luka, berikan TT dan HTIG, lalu antibiotik dan diazepam untuk spasme',          correct: false, consequence: 'Tatalaksana ini ditujukan untuk tetanus, bukan defisit iskemik serebral.' },
          { id: 'tia-tx-otb',     label: 'Berikan obat anti tuberkulosis kategori satu selama 6 bulan',                              correct: false, consequence: 'Terapi tuberkulosis tidak digunakan pada TIA.' },
          { id: 'tia-tx-jantung', label: 'Berikan nitrat sublingual dan rujuk untuk kateterisasi jantung',                           correct: false, consequence: 'Nitrat dan kateterisasi adalah tatalaksana sindrom koroner akut, bukan TIA.' },
          { id: 'tia-tx-rl',      label: 'Pasang infus ringer laktat dan posisikan kepala lebih tinggi 30 derajat tanpa terapi lain', correct: false, consequence: 'Posisi dan cairan saja tidak cukup, perlu skor ABCD2 dan terapi antitrombotik.' },
          { id: 'tia-tx-dextro',  label: 'Berikan dekstrose 50 persen 25 gram intravena rutin dan rujuk untuk hemodialisis',         correct: false, consequence: 'Dekstrose 50 persen untuk hipoglikemia berat, bukan tatalaksana TIA.' }
        ]
      },

      edukasi: {
        prompt: 'Edukasi apa yang paling penting Anda sampaikan kepada pasien dan keluarga?',
        doctorPrompt: 'Sebelum pulang, saya berikan edukasi.',
        choices: [
          { id: 'tia-edu-risk',   label: 'Kontrol faktor risiko, minum obat rutin, dan segera ke IGD bila gejala kembali muncul',         correct: true,  consequence: '' },
          { id: 'tia-edu-vaks',   label: 'Lengkapi vaksinasi tetanus dan segera ke fasyankes bila ada luka tusuk kotor di kemudian hari', correct: false, consequence: 'Edukasi tetanus tidak menjawab risiko serangan iskemik berulang.' },
          { id: 'tia-edu-air',    label: 'Hindari minum air mentah dan makanan tidak matang untuk mencegah infeksi pencernaan berulang',  correct: false, consequence: 'Edukasi sanitasi air tidak terkait dengan pencegahan TIA berulang.' },
          { id: 'tia-edu-tb',     label: 'Minum obat anti tuberkulosis lengkap selama 6 bulan tanpa terputus dan kontrol bulanan',         correct: false, consequence: 'Terapi tuberkulosis tidak digunakan untuk pencegahan TIA.' },
          { id: 'tia-edu-jantung',label: 'Pantau gula darah harian dan suntik insulin sesuai jadwal pada semua pasien dewasa',             correct: false, consequence: 'Pemantauan gula darah dan insulin relevan untuk diabetes, bukan inti edukasi TIA.' },
          { id: 'tia-edu-kontrol',label: 'Tidak perlu kontrol kembali ke poli saraf selama tidak ada keluhan baru yang muncul',            correct: false, consequence: 'Pasien TIA berisiko tinggi stroke ulang dan tetap memerlukan kontrol rutin.' }
        ]
      }
    }
  },

  // ============================================================
  // CASE 3 — STROKE (3B)
  // ============================================================
  {
    id: 'stroke',
    material: 'Stroke 3B',
    dialogueScript: {

      intro: {
        lines: [
          { doctor: 'Selamat pagi. Saya dokter yang bertugas di IGD hari ini.', patient: '', patientFace: 'normal' },
          { doctor: 'Boleh saya tahu nama, usia, dan pekerjaan Bapak?', patient: 'Selamat pagi dok. Nama saya Pak Joko, 65 tahun, pensiunan sopir.', patientFace: 'normal' },
          { doctor: 'Apa yang membuat Bapak dibawa ke IGD?', patient: 'Sejak 2 jam lalu sisi kanan tubuh saya lemas, dok. Saya juga sulit bicara dan mulut saya mencong.', patientFace: 'pain' },
          { doctor: 'Terima kasih sudah menyampaikan keluhannya. Saya akan tanyakan beberapa hal sebelum memeriksa.', patient: 'Baik dok, silakan.', patientFace: 'normal' }
        ]
      },

      anamnesis: {
        prompt: 'Pertanyaan anamnesis apa yang paling mengarahkan diagnosis untuk keluhan kelemahan menetap ini?',
        doctorPrompt: 'Saya akan tanyakan perjalanan keluhan dan faktor risiko Bapak.',
        choices: [
          { id: 'str-anam-risk',  label: 'Apakah Bapak memiliki riwayat hipertensi, diabetes, atau penyakit jantung sebelumnya?', correct: true,  consequence: '' },
          { id: 'str-anam-luka',  label: 'Apakah Bapak baru saja mengalami luka tusuk kotor yang tidak dibersihkan minggu ini?',  correct: false, consequence: 'Luka tusuk relevan untuk tetanus, bukan defisit fokal mendadak akibat iskemia atau perdarahan otak.' },
          { id: 'str-anam-makan', label: 'Apakah Bapak baru saja mengonsumsi makanan laut atau jamur liar dalam beberapa hari?',  correct: false, consequence: 'Riwayat makanan tidak relevan untuk defisit fokal mendadak yang menetap.' },
          { id: 'str-anam-batuk', label: 'Apakah Bapak sedang batuk berdahak dan demam tinggi sejak satu minggu terakhir?',       correct: false, consequence: 'Infeksi saluran napas tidak menjelaskan kelemahan unilateral mendadak.' },
          { id: 'str-anam-buang', label: 'Bagaimana pola buang air besar Bapak dalam satu minggu terakhir ini?',                  correct: false, consequence: 'Pola defekasi tidak relevan dengan defisit fokal akut.' },
          { id: 'str-anam-hewan', label: 'Apakah Bapak memelihara kucing atau anjing peliharaan di rumah saat ini?',              correct: false, consequence: 'Riwayat hewan peliharaan tidak terkait dengan defisit neurologis fokal.' }
        ]
      },

      consent: {
        lines: [
          { doctor: 'Saya perlu memeriksa Bapak secara menyeluruh karena keluhan ini bisa menjadi tanda stroke.', patient: 'Baik dok.', patientFace: 'normal' },
          { doctor: 'Saya akan periksa tekanan darah, saraf, kekuatan otot, refleks, dan kemungkinan akan dilakukan CT Scan kepala.', patient: 'Iya dok, silakan saja.', patientFace: 'normal' },
          { doctor: 'Apakah Bapak bersedia saya periksa sekarang?', patient: 'Saya bersedia dok.', patientFace: 'normal' }
        ]
      },

      persiapan: {
        prompt: 'Set alat apa yang paling tepat Anda siapkan untuk pemeriksaan neurologis kasus ini?',
        doctorPrompt: 'Saya cuci tangan dulu lalu menyiapkan alat pemeriksaan.',
        choices: [
          { id: 'str-prep-neuro', label: 'Stetoskop, tensimeter, palu refleks, penlight, kapas dan jarum sensorik, alcuta',     correct: true,  consequence: '' },
          { id: 'str-prep-obgyn', label: 'Lampu ginekologi, spekulum, stetoskop janin, kapas dan jarum sensorik, alcuta',       correct: false, consequence: 'Set obstetri ginekologi tidak menilai status neurologis pasien stroke.' },
          { id: 'str-prep-bedah', label: 'Needle holder, alat jahit luka, lup, pinset anatomis, penlight, alcuta',               correct: false, consequence: 'Set bedah minor digunakan untuk hecting luka, bukan menilai defisit neurologis.' },
          { id: 'str-prep-tht',   label: 'Otoscope, garputala, tongue spatel, lampu kepala, kapas dan jarum sensorik, alcuta',  correct: false, consequence: 'Set THT untuk telinga hidung tenggorok, bukan untuk motorik dan refleks.' },
          { id: 'str-prep-mata',  label: 'Lup, oftalmoskop, snellen chart, tonometer, kapas dan jarum sensorik, alcuta',         correct: false, consequence: 'Set mata untuk visus dan tekanan intraokular, bukan defisit fokal hemisfer.' },
          { id: 'str-prep-anak',  label: 'Stetoskop janin, pita ukur, penlight, kapas dan jarum sensorik, palu refleks, alcuta', correct: false, consequence: 'Stetoskop janin adalah alat obstetri, tidak relevan pada pasien stroke.' }
        ]
      },

      pemeriksaan: {
        prompt: 'Pemeriksaan apa yang paling mengarahkan diagnosis pada kasus ini?',
        doctorPrompt: 'Saya akan lakukan pemeriksaan fisik dan neurologis sekarang.',
        choices: [
          { id: 'str-ex-refleks', label: 'Pemeriksaan refleks fisiologis dan patologis ekstremitas',      correct: true,  consequence: '' },
          { id: 'str-ex-visus',   label: 'Pemeriksaan visus mata dengan snellen chart bilateral',          correct: false, consequence: 'Visus mata tidak menilai lesi upper motor neuron yang dicari pada stroke.' },
          { id: 'str-ex-ascites', label: 'Pemeriksaan ascites dengan shifting dullness dan undulasi',     correct: false, consequence: 'Pemeriksaan ascites menilai cairan abdomen, tidak menjawab defisit fokal akut.' },
          { id: 'str-ex-payudara',label: 'Pemeriksaan payudara lengkap dengan KGB aksila',                correct: false, consequence: 'Pemeriksaan payudara tidak terkait dengan stroke akut.' },
          { id: 'str-ex-leopold', label: 'Pemeriksaan Leopold I sampai IV pada ibu hamil',                correct: false, consequence: 'Manuver Leopold untuk menilai posisi janin, tidak digunakan pada stroke.' },
          { id: 'str-ex-hernia',  label: 'Pemeriksaan hernia inguinalis dengan manuver valsava',          correct: false, consequence: 'Pemeriksaan hernia untuk protrusi visera, tidak relevan pada stroke.' },
          { id: 'str-ex-abdomen', label: 'Pemeriksaan abdomen umum termasuk hepar dan limpa',             correct: false, consequence: 'Pemeriksaan abdomen umum bukan inti diagnosis stroke.' }
        ]
      },

      penunjang: {
        prompt: 'Apa pemeriksaan penunjang awal yang paling tepat untuk membedakan jenis stroke?',
        doctorPrompt: 'Saya pertimbangkan pemeriksaan penunjang yang paling relevan.',
        choices: [
          { id: 'str-pen-ct',    label: 'CT Scan kepala tanpa kontras untuk membedakan stroke iskemik dan hemoragik',      correct: true,  consequence: '' },
          { id: 'str-pen-tidak', label: 'Tidak ada pemeriksaan penunjang spesifik karena diagnosis ditegakkan klinis',      correct: false, consequence: 'Stroke memerlukan pencitraan untuk membedakan iskemik dan hemoragik karena tatalaksana berbeda.' },
          { id: 'str-pen-ekg',   label: 'EKG 12 sadapan sebagai modalitas utama untuk menegakkan diagnosis stroke primer',  correct: false, consequence: 'EKG dapat menemukan fibrilasi atrium namun bukan pencitraan otak.' },
          { id: 'str-pen-darah', label: 'Panel darah lengkap, elektrolit, dan kultur darah sebagai modalitas utama awal',   correct: false, consequence: 'Pemeriksaan darah menunjang asesmen umum tetapi tidak menggantikan pencitraan otak.' },
          { id: 'str-pen-foto',  label: 'Foto rontgen toraks dua proyeksi sebagai modalitas pencitraan utama awal',         correct: false, consequence: 'Rontgen toraks tidak menilai parenkim otak.' },
          { id: 'str-pen-usg',   label: 'USG abdomen untuk menilai sumber emboli sistemik dan parenkim hati pasien',        correct: false, consequence: 'USG abdomen tidak menilai parenkim atau vaskular serebral.' }
        ]
      },

      ddx: {
        prompt: 'Apa diagnosis kerja yang paling mungkin untuk kasus ini?',
        doctorPrompt: 'Saya tegakkan diagnosis kerja berdasarkan temuan klinis.',
        choices: [
          { id: 'str-dx-stroke',  label: 'Stroke',                       correct: true,  consequence: '' },
          { id: 'str-dx-tia',     label: 'Transient Ischemic Attack',    correct: false, consequence: 'TIA pulih dalam waktu kurang dari 24 jam tanpa gejala sisa, sedangkan defisit pasien menetap lebih dari 2 jam dan masih ada.' },
          { id: 'str-dx-tumor',   label: 'Tumor otak',                   correct: false, consequence: 'Tumor otak memberi defisit progresif, bukan defisit fokal mendadak dalam hitungan jam.' },
          { id: 'str-dx-todd',    label: 'Todd paralysis pasca kejang',  correct: false, consequence: 'Todd paralysis didahului bangkitan kejang yang tidak ditemukan pada pasien ini.' },
          { id: 'str-dx-tetanus', label: 'Tetanus',                      correct: false, consequence: 'Tetanus memberi rigiditas tonik pasca luka kotor, bukan kelemahan unilateral dengan bicara pelo.' },
          { id: 'str-dx-hipo',    label: 'Hipoglikemia berat',           correct: false, consequence: 'Hipoglikemia dapat memberi defisit neurologis, namun biasanya disertai keringat dingin dan kadar glukosa rendah.' }
        ]
      },

      tatalaksana: {
        prompt: 'Apa langkah tatalaksana awal yang paling tepat untuk kasus ini?',
        doctorPrompt: 'Saya susun rencana tatalaksana awal.',
        choices: [
          { id: 'str-tx-akut',    label: 'Jaga jalan napas, posisikan kepala 30 derajat, pasang infus ringer laktat, dan cek gula darah',         correct: true,  consequence: '' },
          { id: 'str-tx-tet',     label: 'Bersihkan luka, berikan TT dan HTIG, lalu antibiotik dan diazepam untuk spasme otot',                    correct: false, consequence: 'Tatalaksana ini ditujukan untuk tetanus, bukan stroke akut.' },
          { id: 'str-tx-otb',     label: 'Berikan kombinasi obat anti tuberkulosis kategori satu rutin selama 6 bulan penuh',                       correct: false, consequence: 'Terapi tuberkulosis tidak digunakan pada stroke akut.' },
          { id: 'str-tx-jantung', label: 'Berikan nitrat sublingual, aspirin, dan rujuk segera untuk kateterisasi jantung primer',                  correct: false, consequence: 'Nitrat dan kateterisasi adalah tatalaksana sindrom koroner akut, bukan stroke.' },
          { id: 'str-tx-dextro',  label: 'Berikan dekstrose 50 persen 25 gram intravena rutin pada semua pasien tanpa cek gula',                    correct: false, consequence: 'Dekstrose 50 persen hanya diberikan bila terbukti hipoglikemia berat, tidak rutin pada stroke.' },
          { id: 'str-tx-tunggu',  label: 'Observasi pasien tanpa intervensi sampai keluhan pulih sendiri dalam beberapa jam ke depan',              correct: false, consequence: 'Stroke akut adalah kegawatdaruratan waktu, observasi pasif berisiko memperburuk defisit.' }
        ]
      },

      edukasi: {
        prompt: 'Edukasi apa yang paling penting Anda sampaikan kepada pasien dan keluarga?',
        doctorPrompt: 'Sebelum pulang, saya berikan edukasi.',
        choices: [
          { id: 'str-edu-risk',    label: 'Kontrol faktor risiko, minum obat rutin, dan segera ke IGD bila gejala serupa muncul',          correct: true,  consequence: '' },
          { id: 'str-edu-vaks',    label: 'Lengkapi vaksinasi tetanus dan segera ke fasyankes bila ada luka tusuk kotor di kemudian hari',   correct: false, consequence: 'Edukasi tetanus tidak menjawab risiko stroke berulang.' },
          { id: 'str-edu-air',     label: 'Hindari minum air mentah dan makanan tidak matang untuk mencegah infeksi pencernaan berulang',    correct: false, consequence: 'Edukasi sanitasi air tidak terkait dengan pencegahan stroke ulang.' },
          { id: 'str-edu-tb',      label: 'Minum obat anti tuberkulosis lengkap selama 6 bulan tanpa terputus dan kontrol bulanan',          correct: false, consequence: 'Terapi tuberkulosis tidak digunakan untuk pencegahan stroke.' },
          { id: 'str-edu-jantung', label: 'Pantau gula darah harian dan suntik insulin sesuai jadwal pada semua pasien dewasa',              correct: false, consequence: 'Pemantauan gula darah relevan untuk diabetes, bukan inti edukasi pencegahan stroke.' },
          { id: 'str-edu-kontrol', label: 'Tidak perlu kontrol kembali ke poli saraf selama tidak ada keluhan baru yang muncul',             correct: false, consequence: 'Pasien stroke tetap memerlukan kontrol rutin dan pemantauan faktor risiko.' }
        ]
      }
    }
  }
];

if (typeof window !== 'undefined') {
  window.OSCE_CASES_FASE_2 = OSCE_CASES_FASE_2;
}
