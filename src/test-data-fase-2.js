// Test questions - 30 OSCE Fase 2 MCQs in Bahasa Indonesia (NEUAAA-240)
// Sources: material-3.html (Refleks Patologis), material-7.html (Sensorik),
// material-5.html (Koordinasi), kasus-osce-fase-2-tetanus.html,
// kasus-osce-fase-2-stroke.html, kasus-osce-fase-2-tia.html
const TEST_QUESTIONS = [
  {
    id: 1,
    topic: "Refleks Patologis - Babinski",
    vignette: "Seorang pasien laki-laki 55 tahun datang dengan keluhan kelemahan anggota gerak kanan. Saat dilakukan pemeriksaan refleks Babinski, pemeriksa menggores telapak kaki bagian lateral dari tumit menuju pangkal jempol kaki.",
    question: "Respon apakah yang mengindikasikan hasil positif?",
    options: {
      A: "Jempol kaki fleksi plantar disertai fanning",
      B: "Jempol kaki dorsofleksi disertai fanning jari-jari lain",
      C: "Seluruh jari kaki fleksi plantar",
      D: "Jempol kaki adduksi tanpa gerakan jari lain",
      E: "Tidak ada respon pada jari kaki"
    },
    answer: "B",
    explanation: "Babinski positif ditandai dorsofleksi ibu jari dengan mekarnya jari-jari lain, menunjukkan lesi traktus piramidalis."
  },
  {
    id: 2,
    topic: "Refleks Patologis - Hoffman Tromner",
    vignette: "",
    question: "Pada pemeriksaan refleks Hoffman Tromner, pemeriksa menemukan hasil positif bilateral pada kedua tangan pasien. Apa interpretasi klinis yang paling tepat untuk temuan ini?",
    options: {
      A: "Selalu menunjukkan lesi upper motor neuron bilateral",
      B: "Dapat ditemukan pada 25% orang normal",
      C: "Mengindikasikan lesi lower motor neuron",
      D: "Menunjukkan gangguan sensorik perifer",
      E: "Merupakan tanda pasti penyakit Parkinson"
    },
    answer: "B",
    explanation: "Hoffman Tromner positif bilateral dapat ditemukan pada 25% orang normal, sedangkan unilateral mengindikasikan lesi UMN."
  },
  {
    id: 3,
    topic: "Refleks Patologis - Oppenheim",
    vignette: "",
    question: "Pasien dengan suspek lesi medula spinalis menjalani pemeriksaan refleks patologis. Pemeriksa mengurut dengan kuat tibia dan otot tibialis anterior dari proksimal ke distal. Pemeriksaan apakah yang sedang dilakukan?",
    options: {
      A: "Refleks Chaddock",
      B: "Refleks Oppenheim",
      C: "Refleks Gordon",
      D: "Refleks Schaefer",
      E: "Refleks Gonda"
    },
    answer: "B",
    explanation: "Refleks Oppenheim dilakukan dengan mengurut tibia dan tibialis anterior dari proksimal ke distal."
  },
  {
    id: 4,
    topic: "Refleks Patologis - Lokalisasi Lesi",
    vignette: "",
    question: "Seorang dokter menemukan refleks patologis positif unilateral pada pasien dengan hemiparesis. Temuan ini paling sesuai dengan lesi pada sistem apakah?",
    options: {
      A: "Sistem sensorik perifer",
      B: "Sistem vestibular",
      C: "Traktus piramidalis",
      D: "Sistem cerebellar",
      E: "Lower motor neuron"
    },
    answer: "C",
    explanation: "Refleks patologis positif mengindikasikan lesi traktus piramidalis."
  },
  {
    id: 5,
    topic: "Sensorik - Jalur Spinothalamikus",
    vignette: "",
    question: "Pasien mengeluh tidak dapat merasakan panas atau dingin di tungkai bawah kanan, tetapi masih dapat merasakan sentuhan halus dan posisi jari kaki. Jalur sensorik manakah yang kemungkinan mengalami gangguan?",
    options: {
      A: "Kolumna dorsalis",
      B: "Traktus spinothalamikus",
      C: "Saraf perifer campuran",
      D: "Korteks sensorik primer",
      E: "Thalamus bilateral"
    },
    answer: "B",
    explanation: "Spinothalamikus mengantarkan sensasi nyeri dan suhu, sedangkan kolumna dorsalis untuk raba dan proprioseptif."
  },
  {
    id: 6,
    topic: "Sensorik - Pemeriksaan Raba Halus",
    vignette: "",
    question: "Dalam pemeriksaan sensasi raba halus, pasien diminta menutup mata dan pemeriksa menyentuh kulit dengan cotton bud. Teknik penyentuhan yang benar adalah?",
    options: {
      A: "Sentuhan harus ditekan dengan kuat agar terasa jelas",
      B: "Sentuhan dilakukan dengan ringan tanpa penekanan",
      C: "Sentuhan dilakukan dengan gerakan menggosok",
      D: "Sentuhan dilakukan sambil menggerakkan kapas memutar",
      E: "Sentuhan harus dilakukan lebih dari 5 detik"
    },
    answer: "B",
    explanation: "Pemeriksaan raba halus dilakukan dengan sentuhan ringan tanpa penekanan."
  },
  {
    id: 7,
    topic: "Sensorik - Proprioseptif",
    vignette: "",
    question: "Pasien diabetes dengan neuropati perifer menjalani pemeriksaan proprioseptif. Pemeriksa menggerakkan jempol kaki pasien dengan mata tertutup. Apa yang dinilai pada pemeriksaan ini?",
    options: {
      A: "Kemampuan membedakan tajam dan tumpul",
      B: "Kemampuan merasakan suhu",
      C: "Kemampuan merasakan gerakan dan arahnya",
      D: "Kemampuan merasakan getaran",
      E: "Kemampuan merasakan nyeri"
    },
    answer: "C",
    explanation: "Pemeriksaan rasa posisi menilai kemampuan pasien merasakan gerakan dan arah gerakan sendi."
  },
  {
    id: 8,
    topic: "Sensorik - Lokalisasi Lesi",
    vignette: "",
    question: "Seorang pasien menunjukkan gangguan sensasi nyeri dan suhu yang intak pada satu sisi tubuh, tetapi mengalami defisit sensasi raba dan proprioseptif di sisi yang sama. Lokasi lesi yang paling mungkin adalah?",
    options: {
      A: "Hemisfer serebri kontralateral",
      B: "Korda spinalis",
      C: "Saraf perifer multipel",
      D: "Thalamus bilateral",
      E: "Korteks parietal ipsilateral"
    },
    answer: "B",
    explanation: "Kondisi yang melibatkan korda spinalis dapat menyebabkan gangguan salah satu jalur sensorik saja."
  },
  {
    id: 9,
    topic: "Sensorik - Two Point Discrimination",
    vignette: "",
    question: "Pemeriksaan two point discrimination dilakukan untuk menilai fungsi sensorik. Pemeriksaan ini termasuk dalam kategori sensasi?",
    options: {
      A: "Nyeri superfisial",
      B: "Suhu",
      C: "Proprioseptif kompleks",
      D: "Spinothalamikus",
      E: "Refleks fisiologis"
    },
    answer: "C",
    explanation: "Two point discrimination adalah pemeriksaan proprioseptif kompleks bersama dengan rasa posisi dan getaran."
  },
  {
    id: 10,
    topic: "Koordinasi - Romberg Test",
    vignette: "Pasien diminta berdiri dengan kaki rapat dan mata terbuka, kemudian menutup mata. Pasien stabil dengan mata terbuka tetapi goyang dan hampir jatuh saat mata tertutup.",
    question: "Interpretasi Romberg test ini adalah?",
    options: {
      A: "Romberg negatif, fungsi cerebellar normal",
      B: "Romberg positif, menunjukkan gangguan proprioseptif",
      C: "Romberg positif, menunjukkan gangguan cerebellar",
      D: "Romberg negatif, menunjukkan gangguan vestibular",
      E: "Romberg equivokal, perlu pemeriksaan ulang"
    },
    answer: "B",
    explanation: "Romberg positif bila stabil dengan mata terbuka tetapi tidak stabil dengan mata tertutup, menunjukkan gangguan proprioseptif."
  },
  {
    id: 11,
    topic: "Koordinasi - Tes Telunjuk-Hidung",
    vignette: "",
    question: "Pasien dengan ataksia menjalani tes telunjuk-hidung. Gangguan koordinasi sama beratnya baik dengan mata terbuka maupun tertutup. Sistem apakah yang kemungkinan terganggu?",
    options: {
      A: "Proprioseptif perifer",
      B: "Vestibular",
      C: "Cerebellar",
      D: "Spinothalamikus",
      E: "Piramidal"
    },
    answer: "C",
    explanation: "Bila gangguan koordinasi sama saat mata terbuka dan tertutup, menunjukkan gangguan cerebellar."
  },
  {
    id: 12,
    topic: "Koordinasi - Tes Tumit-Lutut",
    vignette: "",
    question: "Pada pemeriksaan tumit-lutut, pasien diminta meletakkan tumit di atas lutut kontralateral kemudian menurunkannya menyusuri tulang kering. Tumit pasien berkali-kali terjatuh dari jalurnya. Temuan ini menunjukkan?",
    options: {
      A: "Hipermetria atau ataksia",
      B: "Spastisitas ekstremitas bawah",
      C: "Kelemahan motorik murni",
      D: "Gangguan sensorik nyeri",
      E: "Refleks patologis positif"
    },
    answer: "A",
    explanation: "Tumit yang terjatuh dari jalurnya pada tes tumit-lutut menunjukkan hipermetria atau ataksia."
  },
  {
    id: 13,
    topic: "Koordinasi - Dysdiadokokinesia",
    vignette: "",
    question: "Pasien diminta melakukan gerakan pronasi-supinasi tangan secara cepat dan bergantian. Pasien tidak dapat melakukan gerakan ini secara teratur. Kondisi ini disebut?",
    options: {
      A: "Hipertonia",
      B: "Dysdiadokokinesia",
      C: "Hiperrefleksia",
      D: "Fasikulasi",
      E: "Klonus"
    },
    answer: "B",
    explanation: "Ketidakmampuan melakukan gerakan bergantian cepat secara teratur disebut dysdiadokokinesia, menunjukkan disfungsi cerebellar."
  },
  {
    id: 14,
    topic: "Koordinasi - Pola Gait",
    vignette: "",
    question: "Seorang pasien berjalan dengan kaki tidak dapat dorsofleksi, sehingga mengangkat lutut tinggi agar jari kaki tidak menyeret lantai. Pola gait ini disebut?",
    options: {
      A: "Hemiplegic gait",
      B: "Steppage gait",
      C: "Ataxic gait",
      D: "Parkinsonian gait",
      E: "Waddling gait"
    },
    answer: "B",
    explanation: "Steppage gait terjadi karena foot drop, lutut diangkat tinggi agar jari kaki tidak menyeret."
  },
  {
    id: 15,
    topic: "Tetanus - Patofisiologi",
    vignette: "",
    question: "Tetanus adalah penyakit sistem saraf yang disebabkan oleh toksin bakteri. Toksin apakah yang menyebabkan manifestasi klinis tetanus?",
    options: {
      A: "Tetanolysin",
      B: "Botulinum toxin",
      C: "Tetanospasmin",
      D: "Diphtheria toxin",
      E: "Alpha toxin"
    },
    answer: "C",
    explanation: "Tetanus disebabkan oleh tetanospasmin yang menyebabkan spasme tonik persisten."
  },
  {
    id: 16,
    topic: "Tetanus - Pemeriksaan Fisik",
    vignette: "",
    question: "Pada pemeriksaan fisik pasien dengan suspek tetanus, temuan khas yang dapat ditemukan pada pemeriksaan tonus dan kekuatan otot adalah?",
    options: {
      A: "Atrofi otot generalisata",
      B: "Kekakuan dan spasme pada otot di sekitar atau proksimal luka",
      C: "Kelemahan flaksid keempat ekstremitas",
      D: "Hipotonia dengan arefleksia",
      E: "Tremor resting pada ekstremitas"
    },
    answer: "B",
    explanation: "Temuan khas tetanus adalah kekakuan dan spasme pada otot di sekitar atau proksimal luka."
  },
  {
    id: 17,
    topic: "Tetanus - Diagnosis Banding",
    vignette: "",
    question: "Seorang pasien datang dengan kekakuan otot dan riwayat luka tusuk di kaki. Diagnosis banding manakah yang harus disingkirkan?",
    options: {
      A: "Osteoarthritis dan rheumatoid arthritis",
      B: "Meningoensefalitis dan rabies",
      C: "Diabetes mellitus dan hipertensi",
      D: "Asma bronkial dan pneumonia",
      E: "Gastritis dan dispepsia"
    },
    answer: "B",
    explanation: "Diagnosis banding tetanus mencakup meningoensefalitis, poliomielitis, rabies, dan infeksi SSP lainnya."
  },
  {
    id: 18,
    topic: "Tetanus - Manajemen Luka",
    vignette: "",
    question: "Dalam tatalaksana tetanus, manajemen luka sangat penting. Selain antibiotik dan imunisasi, tindakan awal terhadap luka adalah?",
    options: {
      A: "Menutup luka rapat dengan perban steril",
      B: "Membiarkan luka terbuka untuk drainase",
      C: "Debridemen luka",
      D: "Aplikasi salep antibiotik topikal saja",
      E: "Kompres hangat pada area luka"
    },
    answer: "C",
    explanation: "Manajemen luka tetanus meliputi debridemen luka sebagai langkah penting."
  },
  {
    id: 19,
    topic: "Tetanus - Farmakoterapi",
    vignette: "",
    question: "Farmakoterapi tetanus mencakup beberapa obat. Antibiotik yang direkomendasikan untuk tetanus adalah?",
    options: {
      A: "Amoxicillin",
      B: "Ciprofloxacin",
      C: "Procain penicilin",
      D: "Azithromycin",
      E: "Ceftriaxone"
    },
    answer: "C",
    explanation: "Procain penicilin 1.2 MIU tiap 6 jam selama 10 hari adalah terapi antibiotik standar untuk tetanus."
  },
  {
    id: 20,
    topic: "Stroke - Definisi",
    vignette: "",
    question: "Stroke didefinisikan sebagai defisit neurologis yang terjadi mendadak dengan etiologi vaskular. Durasi minimal defisit neurologis untuk diklasifikasikan sebagai stroke adalah?",
    options: {
      A: "Lebih dari 5 menit",
      B: "Lebih dari 1 jam",
      C: "Lebih dari 24 jam",
      D: "Lebih dari 48 jam",
      E: "Lebih dari 72 jam"
    },
    answer: "C",
    explanation: "Stroke berlangsung lebih dari 24 jam, membedakannya dari TIA."
  },
  {
    id: 21,
    topic: "Stroke - Tanda UMN",
    vignette: "",
    question: "Pada pemeriksaan fisik pasien stroke, ditemukan hemiparesis dengan tonus otot meningkat, hiperrefleksia, dan refleks Babinski positif. Temuan ini mengindikasikan lesi pada?",
    options: {
      A: "Lower motor neuron",
      B: "Upper motor neuron",
      C: "Neuromuscular junction",
      D: "Otot primer",
      E: "Saraf perifer"
    },
    answer: "B",
    explanation: "Spastisitas, hiperrefleksia, dan Babinski positif adalah tanda lesi upper motor neuron."
  },
  {
    id: 22,
    topic: "Stroke - Imaging CT Scan",
    vignette: "",
    question: "CT scan kepala pasien stroke menunjukkan gambaran hyperdense. Interpretasi yang tepat adalah?",
    options: {
      A: "Stroke iskemik akut",
      B: "Stroke hemoragik",
      C: "TIA yang sudah resolusi",
      D: "Tumor otak",
      E: "Infeksi otak"
    },
    answer: "B",
    explanation: "Hyperdense pada CT scan menunjukkan stroke hemoragik, sedangkan hypodense menunjukkan stroke iskemik."
  },
  {
    id: 23,
    topic: "Stroke - Imaging MRI",
    vignette: "",
    question: "Pemeriksaan imaging yang merupakan gold standard untuk mendeteksi infark kecil pada stroke iskemik dini adalah?",
    options: {
      A: "CT scan kepala tanpa kontras",
      B: "MRI otak dengan Diffusion-Weighted Imaging",
      C: "Foto rontgen kepala",
      D: "USG Doppler karotis",
      E: "Angiografi konvensional"
    },
    answer: "B",
    explanation: "MRI dengan DWI adalah gold standard, lebih sensitif daripada CT scan untuk mendeteksi infark kecil."
  },
  {
    id: 24,
    topic: "Stroke - Tatalaksana Awal",
    vignette: "",
    question: "Tatalaksana awal stroke di ruang emergensi meliputi beberapa langkah. Posisi kepala dan badan yang direkomendasikan adalah?",
    options: {
      A: "Posisi supine datar tanpa bantal",
      B: "Posisi trendelenburg",
      C: "Posisi kepala lebih tinggi 30 derajat",
      D: "Posisi lateral dekubitus",
      E: "Posisi semi fowler 45 derajat"
    },
    answer: "C",
    explanation: "Posisi badan dan kepala lebih tinggi 30 derajat adalah standar tatalaksana akut stroke."
  },
  {
    id: 25,
    topic: "Stroke - Resusitasi Cairan",
    vignette: "",
    question: "Cairan infus yang direkomendasikan untuk resusitasi awal pasien stroke adalah?",
    options: {
      A: "Dextrose 5% dalam air",
      B: "Salin normal atau ringer laktat",
      C: "Dextrose 10% dalam salin",
      D: "Albumin 5%",
      E: "Manitol 20%"
    },
    answer: "B",
    explanation: "Cairan infus yang direkomendasikan adalah salin normal atau ringer laktat 500 ml per 12 jam."
  },
  {
    id: 26,
    topic: "TIA - Definisi",
    vignette: "",
    question: "Perbedaan utama antara TIA dan stroke iskemik berdasarkan durasi gejala adalah?",
    options: {
      A: "TIA berlangsung kurang dari 5 menit",
      B: "TIA berlangsung beberapa menit hingga 1-2 jam dengan resolusi total tanpa gejala sisa",
      C: "TIA berlangsung lebih dari 24 jam",
      D: "TIA berlangsung lebih dari 6 jam tetapi kurang dari 24 jam",
      E: "TIA dan stroke memiliki durasi yang sama"
    },
    answer: "B",
    explanation: "TIA berlangsung beberapa menit, jarang lebih dari 1-2 jam, dengan kesembuhan total tanpa gejala sisa."
  },
  {
    id: 27,
    topic: "TIA - Skor ABCD2",
    vignette: "",
    question: "Skor ABCD2 digunakan untuk stratifikasi risiko pada pasien TIA. Jika skor ABCD2 lebih dari 5, tindakan yang harus dilakukan adalah?",
    options: {
      A: "Pasien dapat dipulangkan dengan kontrol poliklinik",
      B: "Observasi selama 6 jam kemudian pulang",
      C: "Pasien harus segera mendapat penanganan seperti stroke iskemik akut",
      D: "Pemberian aspirin saja tanpa pemeriksaan lanjutan",
      E: "Rujuk ke rehabilitasi medik"
    },
    answer: "C",
    explanation: "Skor ABCD2 lebih dari 5 mengharuskan pasien mendapat penanganan seperti stroke iskemik akut."
  },
  {
    id: 28,
    topic: "TIA - Atrial Fibrilasi",
    vignette: "",
    question: "Pemeriksaan EKG pada pasien TIA menunjukkan fibrilasi atrium. Temuan nadi yang konsisten dengan kondisi ini adalah?",
    options: {
      A: "Bradikardi regular",
      B: "Takikardi regular",
      C: "Nadi tidak teratur",
      D: "Nadi lemah bilateral",
      E: "Nadi kuat dan bounding"
    },
    answer: "C",
    explanation: "Fibrilasi atrium menyebabkan nadi tidak teratur."
  },
  {
    id: 29,
    topic: "TIA - Antiplatelet",
    vignette: "",
    question: "Terapi antiplatelet yang diberikan sebagai tatalaksana awal TIA adalah?",
    options: {
      A: "Warfarin oral",
      B: "Heparin intravena",
      C: "Aspirin",
      D: "Clopidogrel dan aspirin kombinasi dosis tinggi",
      E: "Rivaroxaban"
    },
    answer: "C",
    explanation: "Aspirin 80 mg diberikan sebagai terapi antiplatelet awal pada TIA."
  },
  {
    id: 30,
    topic: "TIA - Diagnosis Banding",
    vignette: "",
    question: "Diagnosis banding TIA yang harus disingkirkan mencakup kondisi berikut, kecuali?",
    options: {
      A: "Todd's paralysis",
      B: "Gangguan metabolik seperti hipoglikemia",
      C: "Tumor otak",
      D: "Infeksi saluran kemih",
      E: "Hematoma subdural"
    },
    answer: "D",
    explanation: "Diagnosis banding TIA mencakup cedera otak traumatik, tumor, infeksi otak, Todd's paralysis, dan gangguan metabolik — bukan infeksi saluran kemih."
  }
];
