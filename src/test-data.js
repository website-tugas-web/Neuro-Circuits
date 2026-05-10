// Test questions - 28 OSCE Fase 1 MCQs in Bahasa Indonesia (NEUAAA-239)
// Sources: material-1.html (Refleks Fisiologis), material-2.html (Sistem Motorik), kasus-osce-fase-1.html
const TEST_QUESTIONS = [
  {
    "id": 1,
    "topic": "Refleks Fisiologis - Pemeriksaan Refleks Biceps",
    "vignette": "",
    "question": "Saat memeriksa refleks biceps pada pasien yang duduk, di manakah pemeriksa harus meletakkan jempol kirinya?",
    "options": {
      "A": "Di atas olecranon",
      "B": "Di atas tendon biceps di lipat siku",
      "C": "Di atas prosesus radiostyloid",
      "D": "Di tengah lengan atas",
      "E": "Di atas tendon triceps"
    },
    "answer": "B",
    "explanation": "Jempol pemeriksa diletakkan di atas tendon biceps di lipat siku sebagai pemandu lokasi sebelum diketuk dengan palu refleks."
  },
  {
    "id": 2,
    "topic": "Refleks Fisiologis - Pemeriksaan Refleks Patella",
    "vignette": "",
    "question": "Pada pemeriksaan refleks patella posisi berbaring, tangan pemeriksa yang bebas berfungsi untuk memastikan hal apa?",
    "options": {
      "A": "Pasien tidak merasakan nyeri",
      "B": "Kaki pasien dalam posisi lurus sempurna",
      "C": "Otot quadriceps pasien dalam keadaan rileks",
      "D": "Tendon patella mudah diraba",
      "E": "Tungkai bawah pasien menggantung bebas"
    },
    "answer": "C",
    "explanation": "Tangan bebas pemeriksa mengecek bahwa otot quadriceps rileks sebelum pemeriksaan refleks agar hasil akurat."
  },
  {
    "id": 3,
    "topic": "Refleks Fisiologis - Skala Refleks",
    "vignette": "",
    "question": "Berapa nilai refleks yang menunjukkan adanya kontraksi pendek dan ritmik yang menyertai refleks cepat?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "4"
    },
    "answer": "E",
    "explanation": "Nilai 4 menunjukkan refleks cepat dengan klonus, yaitu beberapa kontraksi pendek dan ritmik."
  },
  {
    "id": 4,
    "topic": "Refleks Fisiologis - Refleks Abdominal",
    "vignette": "",
    "question": "Refleks abdominal dinilai positif bila terdapat pergerakan pada struktur apa?",
    "options": {
      "A": "Kontraksi otot rectus abdominis",
      "B": "Pergerakan umbilikus",
      "C": "Elevasi dinding perut",
      "D": "Kontraksi diafragma",
      "E": "Gerakan peristaltik usus"
    },
    "answer": "B",
    "explanation": "Refleks abdominal positif bila terlihat pergerakan umbilikus akibat kontraksi otot abdomen saat digores."
  },
  {
    "id": 5,
    "topic": "Refleks Fisiologis - Pemeriksaan Refleks Achilles",
    "vignette": "",
    "question": "Pada pemeriksaan refleks Achilles posisi berbaring, kaki pasien harus diposisikan bagaimana sebelum tendon diketuk?",
    "options": {
      "A": "Kedua kaki lurus sejajar",
      "B": "Kaki digantung dari tepi meja",
      "C": "Satu kaki di atas kaki lainnya dalam posisi menyilang",
      "D": "Kaki fleksi 90 derajat di lutut",
      "E": "Kaki ekstensi penuh dengan tumit menyentuh meja"
    },
    "answer": "C",
    "explanation": "Kaki diletakkan menyilang, satu kaki di atas kaki lainnya, agar tendon Achilles mudah diakses untuk pemeriksaan."
  },
  {
    "id": 6,
    "topic": "Refleks Fisiologis - Interpretasi Hiporefleksia",
    "vignette": "",
    "question": "Hiporefleksia menunjukkan adanya gangguan pada sistem neuron yang mana?",
    "options": {
      "A": "Upper motor neuron",
      "B": "Lower motor neuron",
      "C": "Central motor neuron",
      "D": "Interneuron",
      "E": "Sensory neuron"
    },
    "answer": "B",
    "explanation": "Hiporefleksia atau refleks menurun terjadi pada kelainan lower motor neuron."
  },
  {
    "id": 7,
    "topic": "Refleks Fisiologis - Snout Refleks",
    "vignette": "",
    "question": "Snout refleks dinilai dengan cara bagaimana?",
    "options": {
      "A": "Menggores telapak kaki dengan ujung lancip",
      "B": "Menggores paha dalam dari distal ke proksimal",
      "C": "Mengetuk jari pemeriksa di antara hidung dan mulut pasien",
      "D": "Menggores sekitar anus dengan gerakan melingkar",
      "E": "Menggores abdomen dari tepi ke umbilikus"
    },
    "answer": "C",
    "explanation": "Snout refleks diperiksa dengan mengetukkan jari pemeriksa di antara hidung dan mulut pasien untuk menilai gerakan mencucu."
  },
  {
    "id": 8,
    "topic": "Refleks Fisiologis - Pemeriksaan Refleks Brachioradialis",
    "vignette": "",
    "question": "Pada pemeriksaan refleks brachioradialis, palu refleks diketukkan pada lokasi mana?",
    "options": {
      "A": "Tendon biceps di lipat siku",
      "B": "Olecranon",
      "C": "1 cm di atas prosesus radiostyloid",
      "D": "Pergelangan tangan bagian dorsal",
      "E": "3 cm di atas siku"
    },
    "answer": "C",
    "explanation": "Refleks brachioradialis diperiksa dengan mengetuk di daerah 1 cm di atas prosesus radiostyloid."
  },
  {
    "id": 9,
    "topic": "Refleks Fisiologis - Pemeriksaan Refleks Triceps",
    "vignette": "",
    "question": "Apa yang dinilai pada pemeriksaan refleks triceps?",
    "options": {
      "A": "Fleksi lengan bawah dan kontraksi biceps",
      "B": "Ekstensi lengan bawah dan kontraksi triceps",
      "C": "Abduksi lengan atas",
      "D": "Pronasi lengan bawah",
      "E": "Fleksi pergelangan tangan"
    },
    "answer": "B",
    "explanation": "Pada refleks triceps, yang dinilai adalah adanya ekstensi lengan bawah dan kontraksi pada otot triceps."
  },
  {
    "id": 10,
    "topic": "Refleks Fisiologis - Arefleksia Kongenital",
    "vignette": "",
    "question": "Arefleksia kongenital paling sering ditemukan pada bagian tubuh mana?",
    "options": {
      "A": "Lengan atas",
      "B": "Wajah",
      "C": "Tungkai",
      "D": "Tangan",
      "E": "Leher"
    },
    "answer": "C",
    "explanation": "Arefleksia kongenital biasanya terjadi pada tungkai."
  },
  {
    "id": 11,
    "topic": "Sistem Motorik - Inspeksi Postur dan Kontur Otot",
    "vignette": "",
    "question": "Pasien diminta berdiri dengan santai untuk menilai postur dan kontur otot. Apa yang harus diamati pemeriksa terkait otot?",
    "options": {
      "A": "Warna kulit di atas otot",
      "B": "Tanda hipertrofi atau atrofi otot",
      "C": "Suhu permukaan otot",
      "D": "Kelembaban kulit",
      "E": "Tekstur permukaan kulit"
    },
    "answer": "B",
    "explanation": "Inspeksi dilakukan untuk menilai tanda-tanda hipertrofi maupun atrofi otot pada kontur otot pasien."
  },
  {
    "id": 12,
    "topic": "Sistem Motorik - Tremor",
    "vignette": "",
    "question": "Tremor yang hilang saat istirahat namun timbul saat aktivitas dan semakin memburuk bila mendekati target disebut tremor jenis apa?",
    "options": {
      "A": "Resting tremor",
      "B": "Postural tremor",
      "C": "Intention tremor",
      "D": "Essential tremor",
      "E": "Physiological tremor"
    },
    "answer": "C",
    "explanation": "Intention tremor hilang saat istirahat, timbul saat aktivitas, dan memburuk saat mendekati target, menunjukkan gangguan cerebellum."
  },
  {
    "id": 13,
    "topic": "Sistem Motorik - Skala Kekuatan Otot",
    "vignette": "",
    "question": "Nilai kekuatan otot berapa yang menunjukkan pasien mampu menggerakkan otot melawan gravitasi tetapi tidak mampu melawan tahanan pemeriksa?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5"
    },
    "answer": "C",
    "explanation": "Skala 3 berarti pasien dapat melawan gravitasi tanpa tahanan dari pemeriksa."
  },
  {
    "id": 14,
    "topic": "Sistem Motorik - Fasikulasi",
    "vignette": "",
    "question": "Gerakan involunter berupa kontraksi otot halus yang terlihat di bawah kulit dan menunjukkan iritasi motor neuron disebut apa?",
    "options": {
      "A": "Tremor",
      "B": "Chorea",
      "C": "Fasikulasi",
      "D": "Tic",
      "E": "Mioklonus"
    },
    "answer": "C",
    "explanation": "Fasikulasi adalah kedutan otot halus yang terlihat di bawah kulit dan menunjukkan iritasi motor neuron."
  },
  {
    "id": 15,
    "topic": "Sistem Motorik - Tonus Otot Rigiditas",
    "vignette": "",
    "question": "Pada pemeriksaan tonus otot, tahanan konstan sepanjang rentang gerak yang tidak bergantung kecepatan disebut apa?",
    "options": {
      "A": "Spastisitas",
      "B": "Rigiditas",
      "C": "Hipotonia",
      "D": "Normotonia",
      "E": "Klonus"
    },
    "answer": "B",
    "explanation": "Rigiditas memberikan tahanan konstan sepanjang rentang gerak dan tidak bergantung pada kecepatan gerakan, khas lesi ekstrapiramidal."
  },
  {
    "id": 16,
    "topic": "Sistem Motorik - Steppage Gait",
    "vignette": "",
    "question": "Gait abnormal dengan kaki yang tidak dapat dorsofleksi sehingga pasien mengangkat lutut tinggi agar jari kaki tidak menyeret disebut apa?",
    "options": {
      "A": "Hemiplegic gait",
      "B": "Spastic gait",
      "C": "Steppage gait",
      "D": "Waddling gait",
      "E": "Ataxic gait"
    },
    "answer": "C",
    "explanation": "Steppage gait terjadi karena foot drop, kaki tidak dapat dorsofleksi sehingga lutut diangkat tinggi."
  },
  {
    "id": 17,
    "topic": "Sistem Motorik - Dysdiadokokinesia",
    "vignette": "",
    "question": "Ketidakmampuan melakukan gerakan bergantian cepat secara teratur disebut apa?",
    "options": {
      "A": "Ataksia",
      "B": "Dysdiadokokinesia",
      "C": "Hipermetria",
      "D": "Disartria",
      "E": "Dismetria"
    },
    "answer": "B",
    "explanation": "Dysdiadokokinesia adalah ketidakmampuan melakukan gerakan bergantian cepat, menunjukkan disfungsi cerebellar."
  },
  {
    "id": 18,
    "topic": "Sistem Motorik - Pemeriksaan Otot Deltoid",
    "vignette": "",
    "question": "Pada pemeriksaan otot deltoid, pasien diminta melakukan gerakan apa?",
    "options": {
      "A": "Fleksi siku",
      "B": "Ekstensi siku",
      "C": "Abduksi bahu",
      "D": "Adduksi bahu",
      "E": "Rotasi bahu"
    },
    "answer": "C",
    "explanation": "Deltoid diperiksa dengan meminta pasien melakukan abduksi lengan melawan tahanan ke bawah dari pemeriksa."
  },
  {
    "id": 19,
    "topic": "Sistem Motorik - Cogwheel Rigidity",
    "vignette": "",
    "question": "Cogwheel rigidity merupakan kombinasi dari rigiditas dan gerakan involunter jenis apa?",
    "options": {
      "A": "Chorea",
      "B": "Tremor",
      "C": "Athetosis",
      "D": "Mioklonus",
      "E": "Tic"
    },
    "answer": "B",
    "explanation": "Cogwheel rigidity adalah kombinasi rigiditas dan tremor, tahanan terpatah-patah seperti roda gigi, khas pada Parkinson."
  },
  {
    "id": 20,
    "topic": "Sistem Motorik - Tes Romberg",
    "vignette": "",
    "question": "Tes Romberg positif menunjukkan gangguan pada sistem apa?",
    "options": {
      "A": "Sistem piramidal",
      "B": "Sistem ekstrapiramidal",
      "C": "Sistem proprioseptif",
      "D": "Sistem auditori",
      "E": "Sistem visual"
    },
    "answer": "C",
    "explanation": "Romberg positif bila pasien dapat mempertahankan keseimbangan dengan mata terbuka tetapi goyang saat mata tertutup, menunjukkan gangguan proprioseptif."
  },
  {
    "id": 21,
    "topic": "Kasus OSCE Fase 1 - Anamnesis Onset",
    "vignette": "Seorang pria berusia 40 tahun datang dengan keluhan sering menjatuhkan barang dari tangan kiri dan terasa lemah saat menaiki tangga.",
    "question": "Hal apa yang harus ditanyakan terkait onset keluhan pasien ini?",
    "options": {
      "A": "Warna kulit yang berubah",
      "B": "Apakah muncul tiba-tiba atau berkembang perlahan",
      "C": "Apakah disertai demam",
      "D": "Pola makan pasien",
      "E": "Kebiasaan olahraga"
    },
    "answer": "B",
    "explanation": "Onset harus ditanyakan apakah keluhan muncul secara tiba-tiba atau berkembang perlahan untuk menilai awitan penyakit."
  },
  {
    "id": 22,
    "topic": "Kasus OSCE Fase 1 - Informed Consent",
    "vignette": "",
    "question": "Informed consent yang tepat sebelum pemeriksaan kekuatan otot dan refleks adalah yang menyebutkan apa?",
    "options": {
      "A": "Pemeriksaan akan memakan waktu lama",
      "B": "Pasien tidak boleh bergerak sama sekali",
      "C": "Pemeriksaan mungkin sedikit kurang nyaman",
      "D": "Pemeriksaan memerlukan anestesi lokal",
      "E": "Pasien harus berpuasa sebelumnya"
    },
    "answer": "C",
    "explanation": "Informed consent harus menyebutkan bahwa pemeriksaan mungkin sedikit kurang nyaman tetapi akan dilakukan sebaik mungkin."
  },
  {
    "id": 23,
    "topic": "Kasus OSCE Fase 1 - Skala Kekuatan Otot",
    "vignette": "",
    "question": "Nilai kekuatan otot berapa yang menunjukkan kontraksi otot teraba tetapi tidak ada pergerakan?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "4"
    },
    "answer": "B",
    "explanation": "Skala 1 berarti kontraksi otot teraba tetapi tidak ada pergerakan yang terjadi."
  },
  {
    "id": 24,
    "topic": "Kasus OSCE Fase 1 - Pemeriksaan Otot Fleksor Siku",
    "vignette": "",
    "question": "Pada pemeriksaan kekuatan otot ekstremitas atas, otot mana yang diperiksa untuk menilai fleksi siku?",
    "options": {
      "A": "Deltoid",
      "B": "Biceps",
      "C": "Triceps",
      "D": "Brachioradialis",
      "E": "Ekstensor carpi"
    },
    "answer": "B",
    "explanation": "Biceps diperiksa dengan meminta pasien fleksi siku melawan tahanan ekstensi dari pemeriksa."
  },
  {
    "id": 25,
    "topic": "Kasus OSCE Fase 1 - Interpretasi Hiperefleksia",
    "vignette": "",
    "question": "Hiperefleksia menunjukkan adanya gangguan yang melibatkan neuron jenis apa?",
    "options": {
      "A": "Lower motor neuron",
      "B": "Upper motor neuron",
      "C": "Sensory neuron",
      "D": "Autonomic neuron",
      "E": "Interneuron"
    },
    "answer": "B",
    "explanation": "Hiperefleksia atau refleks meningkat terjadi pada gangguan yang melibatkan upper motor neuron."
  },
  {
    "id": 26,
    "topic": "Kasus OSCE Fase 1 - Pemeriksaan Tibialis Anterior",
    "vignette": "",
    "question": "Pada pemeriksaan ekstremitas bawah, otot apa yang dinilai saat pasien diminta melakukan dorsofleksi kaki?",
    "options": {
      "A": "Gastrocnemius",
      "B": "Quadriceps",
      "C": "Hamstring",
      "D": "Tibialis anterior",
      "E": "Iliopsoas"
    },
    "answer": "D",
    "explanation": "Tibialis anterior dinilai dengan meminta pasien melakukan dorsofleksi kaki melawan tahanan dari pemeriksa."
  },
  {
    "id": 27,
    "topic": "Kasus OSCE Fase 1 - Edukasi CERDIK",
    "vignette": "",
    "question": "Huruf E pada edukasi CERDIK menunjukkan anjuran untuk melakukan apa?",
    "options": {
      "A": "Edukasi diri sendiri",
      "B": "Enyahkan asap rokok",
      "C": "Eliminasi stres",
      "D": "Evaluasi kesehatan berkala",
      "E": "Efisiensi pola makan"
    },
    "answer": "B",
    "explanation": "Huruf E pada CERDIK adalah Enyahkan asap rokok sebagai bagian dari edukasi kesehatan."
  },
  {
    "id": 28,
    "topic": "Kasus OSCE Fase 1 - Tatalaksana Rujukan",
    "vignette": "Seorang pasien datang dengan temuan penurunan kekuatan otot sisi kanan dan refleks berlebih.",
    "question": "Tindakan yang tepat adalah merujuk ke dokter spesialis apa?",
    "options": {
      "A": "Spesialis penyakit dalam",
      "B": "Spesialis rehabilitasi medik",
      "C": "Spesialis saraf",
      "D": "Spesialis bedah ortopedi",
      "E": "Spesialis jantung"
    },
    "answer": "C",
    "explanation": "Temuan penurunan kekuatan otot dan refleks berlebih menunjukkan gangguan upper motor neuron yang memerlukan rujukan ke spesialis saraf."
  }
];
