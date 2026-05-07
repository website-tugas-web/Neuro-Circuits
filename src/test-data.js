// Test questions - 33 OSCE-style MCQs in Bahasa Indonesia (25 from NEUAAA-106 + 8 additional)
const TEST_QUESTIONS = [
  {
    "id": 1,
    "topic": "Refleks Fisiologis - Refleks Biceps",
    "vignette": "Seorang laki-laki berusia 45 tahun datang dengan keluhan lemah pada lengan kanan sejak 2 minggu yang lalu. Pada pemeriksaan refleks biceps, pemeriksa meletakkan ibu jari di atas tendon biceps di lipatan siku pasien dan mengetuknya dengan palu refleks.",
    "question": "Respon normal yang diharapkan pada pemeriksaan refleks biceps adalah?",
    "options": {
      "A": "Ekstensi lengan bawah dan kontraksi otot biceps",
      "B": "Fleksi lengan bawah dan kontraksi otot biceps",
      "C": "Fleksi lengan atas dan kontraksi otot triceps",
      "D": "Ekstensi lengan atas dan kontraksi otot deltoid",
      "E": "Tidak ada pergerakan sama sekali"
    },
    "answer": "B",
    "explanation": "Refleks biceps normal menghasilkan fleksi lengan bawah disertai kontraksi otot biceps yang teraba. Pemeriksaan ini menilai integritas lengkung refleks pada level C5-C6."
  },
  {
    "id": 2,
    "topic": "Refleks Fisiologis - Refleks Patella",
    "vignette": "Seorang perempuan berusia 35 tahun mengeluh kesemutan pada kedua tungkai bawah. Dokter melakukan pemeriksaan refleks patella dengan pasien dalam posisi duduk, tungkai bawah menggantung rileks. Tendon quadriceps diketuk dengan palu refleks di antara patella dan tuberositas tibial.",
    "question": "Apa yang dinilai pada pemeriksaan refleks patella?",
    "options": {
      "A": "Fleksi tungkai bawah dan kontraksi otot hamstring",
      "B": "Ekstensi tungkai bawah dan kontraksi otot quadriceps",
      "C": "Dorsofleksi kaki dan kontraksi otot tibialis anterior",
      "D": "Plantarfleksi kaki dan kontraksi otot gastrocnemius",
      "E": "Adduksi tungkai dan kontraksi otot adductor femoral"
    },
    "answer": "B",
    "explanation": "Refleks patella (knee jerk reflex) normal menghasilkan ekstensi tungkai bawah disertai kontraksi otot quadriceps. Refleks ini menilai integritas lengkung refleks pada level L2-L4."
  },
  {
    "id": 3,
    "topic": "Refleks Fisiologis - Interpretasi Hasil",
    "vignette": "Seorang laki-laki berusia 60 tahun dengan riwayat stroke 3 bulan lalu datang untuk evaluasi. Pada pemeriksaan refleks tendon, didapatkan refleks yang sangat cepat dengan beberapa kontraksi pendek dan ritmik (klonus) pada sisi yang lemah.",
    "question": "Bagaimana interpretasi temuan refleks pada pasien ini?",
    "options": {
      "A": "Hiporefleksia, menandakan lesi lower motor neuron",
      "B": "Arefleksia, menandakan fase akut cedera spinal",
      "C": "Refleks normal, tidak ada kelainan",
      "D": "Hiperefleksia dengan klonus, menandakan lesi upper motor neuron",
      "E": "Refleks lemah, menandakan gangguan saraf perifer"
    },
    "answer": "D",
    "explanation": "Hiperefleksia dengan klonus merupakan tanda lesi upper motor neuron (UMN). Adanya klonus (kontraksi pendek dan ritmik) adalah tanda patologis yang mengindikasikan lesi pada central motor neuron di atas cabang refleks spinal, sesuai dengan riwayat stroke pasien."
  },
  {
    "id": 4,
    "topic": "Refleks Patologis - Babinski",
    "vignette": "Seorang laki-laki berusia 50 tahun dengan keluhan kelemahan tungkai kanan setelah stroke. Pemeriksaan refleks Babinski dilakukan dengan menggores telapak kaki bagian lateral dari tumit menuju pangkal jempol kaki. Didapatkan dorsofleksi ibu jari kaki disertai gerak mekarnya jari-jari lainnya.",
    "question": "Bagaimana interpretasi hasil pemeriksaan refleks Babinski pada pasien ini?",
    "options": {
      "A": "Babinski negatif, menandakan tidak ada kelainan neurologis",
      "B": "Babinski positif, menandakan lesi traktus piramidalis",
      "C": "Babinski negatif, menandakan kelainan saraf perifer",
      "D": "Babinski positif, menandakan kelainan lower motor neuron",
      "E": "Babinski negatif, merupakan respon normal pada dewasa"
    },
    "answer": "B",
    "explanation": "Refleks Babinski dikatakan positif apabila didapatkan gerakan dorsofleksi ibu jari kaki yang dapat disertai dengan gerak mekarnya jari-jari lainnya. Refleks Babinski positif menandakan adanya lesi traktus piramidalis (upper motor neuron), sesuai dengan riwayat stroke pada pasien.",
    "figureRef": {
      "page": 7,
      "description": "Diagram teknik pemeriksaan refleks Babinski"
    }
  },
  {
    "id": 5,
    "topic": "Refleks Patologis - Hoffman Tromner",
    "vignette": "Seorang perempuan berusia 40 tahun mengeluh kesemutan dan kelemahan pada tangan kanan. Pada pemeriksaan, pasien diminta melakukan hiperekstensi di pergelangan tangan, kemudian ujung jari tengah disentil. Didapatkan fleksi jari-jari dan adduksi ibu jari hanya pada tangan kanan.",
    "question": "Apa interpretasi hasil pemeriksaan Hoffman Tromner pada pasien ini?",
    "options": {
      "A": "Positif bilateral, merupakan varian normal",
      "B": "Positif unilateral, mengindikasikan lesi UMN di atas segmen servikal VIII",
      "C": "Negatif, tidak ada kelainan neurologis",
      "D": "Positif bilateral, mengindikasikan lesi lower motor neuron",
      "E": "Positif unilateral, merupakan varian normal"
    },
    "answer": "B",
    "explanation": "Refleks Hoffman Tromner positif bilateral ditemukan pada 25% orang normal. Namun, bila unilateral (hanya satu sisi), hal ini merupakan indikasi lesi upper motor neuron (UMN) di atas segmen servikal VIII. Pada kasus ini, temuan unilateral pada tangan kanan menandakan adanya kelainan UMN."
  },
  {
    "id": 6,
    "topic": "Refleks Patologis - Oppenheim",
    "vignette": "Seorang laki-laki berusia 55 tahun dengan hemiparesis kiri pasca stroke. Dokter melakukan pemeriksaan dengan mengurut kuat tibia dan otot tibialis anterior dari arah proksimal ke distal. Didapatkan dorsofleksi ibu jari kaki pada sisi kiri.",
    "question": "Refleks patologis apa yang sedang diperiksa dan bagaimana interpretasinya?",
    "options": {
      "A": "Refleks Gordon, negatif karena tidak ada respon",
      "B": "Refleks Chaddock, positif menandakan lesi piramidal",
      "C": "Refleks Oppenheim, positif menandakan lesi traktus piramidalis",
      "D": "Refleks Schaefer, negatif merupakan respon normal",
      "E": "Refleks Gonda, positif menandakan kelainan lower motor neuron"
    },
    "answer": "C",
    "explanation": "Refleks Oppenheim dilakukan dengan mengurut kuat tibia dan otot tibialis anterior dari proksimal ke distal. Refleks ini positif bila didapatkan dorsofleksi ibu jari kaki. Bersama dengan refleks Babinski, Chaddock, Gordon, Schaefer, dan Gonda, refleks Oppenheim positif menandakan lesi traktus piramidalis.",
    "figureRef": {
      "page": 8,
      "description": "Diagram teknik pemeriksaan refleks Oppenheim"
    }
  },
  {
    "id": 7,
    "topic": "Pemeriksaan Sensorik - Sensasi Nyeri",
    "vignette": "Seorang perempuan berusia 50 tahun dengan diabetes melitus mengeluh sering tidak merasakan luka di kaki. Dokter melakukan pemeriksaan sensasi nyeri dengan menekan ujung tajam tusuk gigi dan ujung tumpul cotton bud secara bergantian pada beberapa area kaki dengan mata pasien tertutup. Pasien tidak dapat membedakan rangsangan tajam dan tumpul pada kedua kaki.",
    "question": "Bagaimana istilah yang tepat untuk menggambarkan temuan pada pasien ini?",
    "options": {
      "A": "Hiperalgesia pada distribusi polineuropati",
      "B": "Hipalgesia atau analgesia pada distribusi polineuropati",
      "C": "Alodinia pada distribusi mononeuropati",
      "D": "Parestesia pada distribusi dermatom L5-S1",
      "E": "Hiperpatia pada distribusi saraf perifer"
    },
    "answer": "B",
    "explanation": "Ketidakmampuan membedakan sensasi tajam dan tumpul menandakan gangguan sensasi nyeri. Istilah yang digunakan adalah hipalgesia (penurunan sensasi nyeri) atau analgesia (hilangnya sensasi nyeri). Pola distribusi bilateral pada kaki sesuai dengan polineuropati, yang sering terjadi pada pasien diabetes (neuropati diabetik)."
  },
  {
    "id": 8,
    "topic": "Pemeriksaan Sensorik - Jalur Sensoris",
    "vignette": "Seorang laki-laki berusia 45 tahun mengalami cedera medula spinalis. Pada pemeriksaan, didapatkan gangguan sensasi nyeri dan suhu, namun sensasi raba halus dan posisi (proprioseptif) tetap intak.",
    "question": "Jalur sensoris mana yang mengalami gangguan pada pasien ini?",
    "options": {
      "A": "Jalur kolumna dorsalis",
      "B": "Jalur spinothalamikus",
      "C": "Jalur kortikospinal",
      "D": "Jalur ekstrapiramidal",
      "E": "Jalur serebelar"
    },
    "answer": "B",
    "explanation": "Penilaian sensasi nyeri dan suhu merupakan penilaian fungsi jalur sensoris spinothalamikus. Penilaian sensasi raba dan posisi (proprioseptif) merupakan penilaian fungsi jalur kolumna dorsalis. Pada kasus ini, gangguan terbatas pada sensasi nyeri dan suhu dengan proprioseptif yang intak menandakan lesi selektif pada jalur spinothalamikus."
  },
  {
    "id": 9,
    "topic": "Pemeriksaan Sensorik - Proprioseptif",
    "vignette": "Seorang perempuan berusia 65 tahun dengan gangguan keseimbangan. Pada pemeriksaan rasa posisi, pemeriksa memegang jempol kaki pasien di antara jempol dan telunjuk, memastikan tidak menyentuh jari lain, kemudian menggerakkan jempol kaki. Pasien dengan mata tertutup tidak dapat menyebutkan arah gerakan jempol kakinya.",
    "question": "Apa interpretasi dari temuan pemeriksaan ini?",
    "options": {
      "A": "Gangguan jalur spinothalamikus",
      "B": "Gangguan sensasi nyeri superfisial",
      "C": "Gangguan jalur kolumna dorsalis (proprioseptif)",
      "D": "Gangguan jalur kortikospinal",
      "E": "Gangguan sensasi suhu"
    },
    "answer": "C",
    "explanation": "Pemeriksaan rasa posisi menilai fungsi proprioseptif yang merupakan bagian dari jalur kolumna dorsalis. Ketidakmampuan pasien mengenali arah gerakan jempol kaki menandakan gangguan pada jalur kolumna dorsalis. Gangguan proprioseptif ini dapat menjelaskan keluhan gangguan keseimbangan pada pasien."
  },
  {
    "id": 10,
    "topic": "Pemeriksaan Motorik - Inspeksi Atrofi Otot",
    "vignette": "Seorang laki-laki berusia 60 tahun datang dengan keluhan kelemahan tangan kanan sejak 6 bulan lalu. Pada inspeksi, didapatkan atrofi otot yang jelas pada tangan kanan, namun tangan kiri normal. Tidak ada riwayat trauma.",
    "question": "Pola atrofi otot pada pasien ini paling sesuai dengan kondisi apa?",
    "options": {
      "A": "Penyakit muskular sistemik",
      "B": "Malnutrisi dan penyakit kronis",
      "C": "Mononeuropati atau kerusakan saraf perifer unilateral",
      "D": "Polineuropati simetris",
      "E": "Atrofi fisiologis akibat penuaan"
    },
    "answer": "C",
    "explanation": "Atrofi otot asimetris (hanya pada satu sisi) menandakan kondisi lokal seperti mononeuropati atau kerusakan saraf perifer/traktus kortikospinal pada satu sisi. Sebaliknya, atrofi simetris bilateral lebih mengarah pada penyakit muskular sistemik atau polineuropati. Pada kasus ini, atrofi unilateral tangan kanan mengarah pada mononeuropati."
  },
  {
    "id": 11,
    "topic": "Pemeriksaan Motorik - Tremor",
    "vignette": "Seorang laki-laki berusia 70 tahun menunjukkan tremor pada tangan yang paling mencolok saat istirahat dan berkurang saat melakukan gerakan. Pasien juga berjalan dengan langkah pendek dan ayunan tangan yang berkurang.",
    "question": "Jenis tremor apa yang dialami pasien ini dan apa diagnosis yang paling mungkin?",
    "options": {
      "A": "Intention tremor, kemungkinan multiple sclerosis",
      "B": "Postural tremor, kemungkinan hipertiroid",
      "C": "Resting tremor, kemungkinan penyakit Parkinson",
      "D": "Postural tremor, kemungkinan kecemasan",
      "E": "Intention tremor, kemungkinan gangguan serebelar"
    },
    "answer": "C",
    "explanation": "Resting (static) tremor paling mencolok saat istirahat dan berkurang atau menghilang saat bergerak, merupakan ciri khas penyakit Parkinson. Temuan tambahan berupa jarak langkah yang memendek dan ayunan tangan yang berkurang saat berjalan juga merupakan karakteristik penyakit Parkinson."
  },
  {
    "id": 12,
    "topic": "Pemeriksaan Motorik - Tonus Otot",
    "vignette": "Seorang perempuan berusia 55 tahun pasca stroke. Pada pemeriksaan tonus otot dengan menggerakkan siku secara pasif, didapatkan tahanan hanya pada bagian tertentu dari gerakan, bukan pada seluruh pergerakan.",
    "question": "Bagaimana interpretasi temuan tonus otot pada pasien ini?",
    "options": {
      "A": "Rigiditas, menandakan keterlibatan sistem ekstrapiramidal",
      "B": "Spastisitas, menandakan keterlibatan jalur kortikospinal (piramidal)",
      "C": "Hipotonia, menandakan kerusakan saraf tepi berat",
      "D": "Tonus normal, tidak ada kelainan",
      "E": "Hipotonia, menandakan kerusakan akut jalur kortikospinal"
    },
    "answer": "B",
    "explanation": "Spastisitas ditandai dengan adanya tahanan pada bagian tertentu dari suatu gerakan (tidak pada seluruh pergerakan), menandakan keterlibatan jalur kortikospinal (sistem piramidal). Ini sesuai dengan riwayat stroke pada pasien. Berbeda dengan rigiditas yang menunjukkan tahanan pada seluruh pergerakan dan menandakan keterlibatan sistem ekstrapiramidal."
  },
  {
    "id": 13,
    "topic": "Pemeriksaan Motorik - Kekuatan Otot",
    "vignette": "Seorang laki-laki berusia 40 tahun mengalami kelemahan lengan kanan setelah kecelakaan motor. Pada pemeriksaan kekuatan otot biceps, pasien dapat memfleksikan siku dan dapat menahan tahanan ringan namun tidak dapat melawan tahanan maksimal pemeriksa.",
    "question": "Berapa nilai kekuatan otot biceps pada pasien ini berdasarkan skala 0-5?",
    "options": {
      "A": "2 - Gerakan menggeser tanpa melawan gravitasi",
      "B": "3 - Hanya dapat melawan gravitasi",
      "C": "4 - Dapat menahan tahanan ringan namun tidak maksimal",
      "D": "5 - Dapat menahan tahanan maksimal",
      "E": "1 - Hanya tonus otot teraba tanpa pergerakan"
    },
    "answer": "C",
    "explanation": "Skala kekuatan otot 4 menunjukkan kekuatan otot yang dapat menahan tahanan ringan namun tidak dapat melawan tahanan maksimal. Ini sesuai dengan temuan pada pasien yang dapat memfleksikan siku dan menahan tahanan ringan tetapi tidak dapat melawan tahanan maksimal pemeriksa."
  },
  {
    "id": 14,
    "topic": "Pemeriksaan Motorik - Gerakan Involunter",
    "vignette": "Seorang anak berusia 12 tahun dengan riwayat demam rematik menunjukkan gerakan yang singkat, cepat, tidak teratur, dan tak terduga yang melibatkan wajah, kepala, dan lengan. Gerakan ini terjadi saat istirahat dan mengganggu gerakan terkoordinasi normal. Gerakan tidak berulang dengan pola yang sama.",
    "question": "Jenis gerakan involunter apa yang dialami pasien ini?",
    "options": {
      "A": "Tics, kemungkinan sindrom Tourette",
      "B": "Athetosis, kemungkinan cerebral palsy",
      "C": "Chorea, kemungkinan chorea Sydenham",
      "D": "Tremor intention, kemungkinan lesi serebelar",
      "E": "Fasikulasi, kemungkinan lesi motor neuron"
    },
    "answer": "C",
    "explanation": "Gerakan choreiform adalah gerakan yang singkat, cepat, tidak teratur, dan tak terduga. Terjadi saat istirahat atau mengganggu gerakan normal. Tidak seperti tics, chorea jarang berulang dengan pola sama. Dengan riwayat demam rematik, diagnosis yang paling mungkin adalah chorea Sydenham (St. Vitus dance)."
  },
  {
    "id": 15,
    "topic": "Pemeriksaan Koordinasi - Gait",
    "vignette": "Seorang laki-laki berusia 55 tahun dengan keluhan kesulitan berjalan. Pada pemeriksaan cara berjalan, didapatkan bagian kaki yang lebih dahulu menyentuh lantai adalah jempol kaki, diikuti telapak kaki, dan terakhir tumit (drop foot).",
    "question": "Kelainan pada saraf mana yang paling mungkin menyebabkan temuan ini?",
    "options": {
      "A": "Nervus tibialis",
      "B": "Nervus femoralis",
      "C": "Nervus peroneus",
      "D": "Nervus ischiadicus",
      "E": "Nervus obturatorius"
    },
    "answer": "C",
    "explanation": "Drop foot (kaki jatuh) ditandai dengan pola kontak kaki-lantai yang abnormal: jempol kaki menyentuh lantai lebih dulu, diikuti telapak kaki, terakhir tumit. Kondisi ini berhubungan dengan kelainan nervus peroneus yang menyebabkan kelemahan otot dorsofleksor kaki (tibialis anterior dan ekstensor digitorum)."
  },
  {
    "id": 16,
    "topic": "Pemeriksaan Koordinasi - Tes Romberg",
    "vignette": "Seorang perempuan berusia 60 tahun dengan diabetes melitus mengeluh sering terjatuh terutama di malam hari atau saat menutup mata. Pada tes Romberg, pasien stabil dengan mata terbuka namun mulai berayun dan hampir terjatuh saat diminta menutup mata.",
    "question": "Apa interpretasi dari hasil tes Romberg pada pasien ini?",
    "options": {
      "A": "Romberg negatif, tidak ada gangguan keseimbangan",
      "B": "Romberg positif akibat gangguan vestibular",
      "C": "Romberg positif akibat gangguan cerebelar",
      "D": "Romberg positif akibat gangguan proprioseptif (ataksia sensoris)",
      "E": "Romberg negatif, gangguan ekstrapiramidal"
    },
    "answer": "D",
    "explanation": "Tes Romberg dinyatakan positif bila pasien berayun atau terjatuh. Jika gangguan koordinasi hanya terjadi saat mata tertutup, ini menandakan gangguan proprioseptif yang tidak adekuat (ataksia sensoris). Pada pasien diabetes, ini sesuai dengan neuropati diabetik yang mempengaruhi proprioseptif. Pasien bergantung pada input visual untuk kompensasi, sehingga memburuk saat mata ditutup."
  },
  {
    "id": 17,
    "topic": "Pemeriksaan Koordinasi - Tes Telunjuk-Hidung",
    "vignette": "Seorang laki-laki berusia 50 tahun dengan tumor fossa posterior. Pada tes telunjuk-hidung dengan mata tertutup, jari pasien melewati target (hidung) dan menunjukkan tremor yang meningkat saat mendekati target. Gangguan sama beratnya baik mata terbuka maupun tertutup.",
    "question": "Apa interpretasi dari temuan tes telunjuk-hidung ini?",
    "options": {
      "A": "Gangguan proprioseptif (ataksia sensoris)",
      "B": "Gangguan vestibular",
      "C": "Gangguan cerebelar dengan hipermetria dan intention tremor",
      "D": "Gangguan ekstrapiramidal dengan resting tremor",
      "E": "Gangguan kortikospinal dengan spastisitas"
    },
    "answer": "C",
    "explanation": "Hipermetria (gerakan melewati target) dan tremor yang meningkat saat mendekati target (intention tremor) adalah tanda gangguan cerebelar. Jika gangguan koordinasi sama berat baik mata terbuka maupun tertutup, ini menandakan gangguan cerebelar. Lokasi tumor di fossa posterior (tempat cerebellum) mendukung diagnosis ini."
  },
  {
    "id": 18,
    "topic": "Pemeriksaan Koordinasi - Disdiadokokinesis",
    "vignette": "Seorang perempuan berusia 45 tahun diminta melakukan gerakan pronasi-supinasi tangan secara bergantian dengan cepat. Pasien mengalami kesulitan melakukan gerakan cepat bergantian ini, gerakannya lambat dan tidak terkoordinasi dengan baik.",
    "question": "Temuan ini menunjukkan adanya gangguan pada sistem apa?",
    "options": {
      "A": "Sistem piramidal (kortikospinal)",
      "B": "Sistem ekstrapiramidal",
      "C": "Sistem cerebelar",
      "D": "Sistem sensoris kolumna dorsalis",
      "E": "Sistem vestibular"
    },
    "answer": "C",
    "explanation": "Disdiadokokinesis adalah ketidakmampuan melakukan gerakan bergantian yang cepat dan terkoordinasi (rapid alternating movements). Temuan ini merupakan tanda gangguan fungsi cerebelar. Pemeriksaan ini menilai koordinasi halus yang memerlukan fungsi cerebelar yang intak."
  },
  {
    "id": 19,
    "topic": "Pemeriksaan Patrick - Interpretasi",
    "vignette": "Seorang laki-laki berusia 50 tahun mengeluh nyeri panggul. Pada pemeriksaan Patrick sign (fleksi, abduksi, dan internal rotasi tungkai), pasien merasakan nyeri pada sisi ipsilateral anterior saat lutut yang fleksi ditekan ke bawah.",
    "question": "Apa interpretasi dari hasil pemeriksaan Patrick sign ini?",
    "options": {
      "A": "Gangguan sendi sakroiliaka ipsilateral",
      "B": "Gangguan sendi panggul ipsilateral",
      "C": "Gangguan sendi sakroiliaka kontralateral",
      "D": "Gangguan sendi panggul kontralateral",
      "E": "Tidak ada kelainan, pemeriksaan normal"
    },
    "answer": "B",
    "explanation": "Pemeriksaan Patrick sign mengevaluasi kelainan pada sendi panggul atau sendi sakroiliaka. Jika nyeri timbul pada sisi ipsilateral anterior, ini menandakan gangguan sendi panggul pada sisi ipsilateral. Jika nyeri timbul pada sisi kontralateral posterior sekitar sendi panggul, ini menandakan kelainan sendi sakroiliaka.",
    "figureRef": {
      "page": 35,
      "description": "Diagram teknik pemeriksaan Patrick sign"
    }
  },
  {
    "id": 20,
    "topic": "Pemeriksaan Contra-Patrick",
    "vignette": "Seorang perempuan berusia 40 tahun dengan nyeri punggung bawah. Pada pemeriksaan contra-patrick sign (fleksi, abduksi, dan eksternal rotasi tungkai), pasien merasakan nyeri saat lutut yang fleksi ditekan ke bawah.",
    "question": "Apa interpretasi dari hasil pemeriksaan contra-patrick sign yang positif?",
    "options": {
      "A": "Kelainan pada sendi panggul",
      "B": "Kelainan pada sendi sakroiliaka",
      "C": "Kelainan pada vertebra lumbalis",
      "D": "Kelainan pada nervus ischiadicus",
      "E": "Tidak ada kelainan struktural"
    },
    "answer": "B",
    "explanation": "Pemeriksaan contra-patrick sign merupakan kebalikan dari tindakan Patrick sign. Bila nyeri timbul pada pemeriksaan ini, hal ini menandakan adanya kelainan pada sendi sakroiliaka. Pemeriksaan ini berguna untuk membedakan nyeri punggung bawah yang berasal dari sendi sakroiliaka."
  },
  {
    "id": 21,
    "topic": "Refleks Fisiologis - Refleks Achilles",
    "vignette": "Seorang laki-laki berusia 55 tahun dengan neuropati perifer menjalani pemeriksaan refleks Achilles. Pasien berbaring dengan kaki menyilang, pemeriksa memegang ujung kaki dan mengetuk tendon Achilles. Tidak didapatkan respon sama sekali pada kedua kaki.",
    "question": "Bagaimana interpretasi temuan arefleksia Achilles bilateral pada pasien ini?",
    "options": {
      "A": "Varian normal pada orang tua",
      "B": "Lesi upper motor neuron bilateral",
      "C": "Lesi saraf tepi yang melibatkan jalur aferen dan/atau eferen lengkung refleks",
      "D": "Fase kronik cedera spinal",
      "E": "Arefleksia kongenital"
    },
    "answer": "C",
    "explanation": "Arefleksia (tidak ada refleks sama sekali) dapat disebabkan oleh lesi yang melibatkan saraf tepi (jalur aferen dan/atau eferen lengkung refleks). Pada pasien dengan neuropati perifer, kerusakan saraf menyebabkan hilangnya refleks Achilles bilateral karena gangguan pada jalur lengkung refleks."
  },
  {
    "id": 22,
    "topic": "Refleks Patologis - Gordon dan Schaefer",
    "vignette": "Seorang perempuan berusia 48 tahun dengan suspek lesi traktus piramidalis. Dokter melakukan pemeriksaan dengan mencubit otot gastroknemius (Gordon) dan mencubit tendon Achilles (Schaefer). Kedua pemeriksaan menghasilkan dorsofleksi ibu jari kaki.",
    "question": "Apa makna klinis dari temuan positif pada refleks Gordon dan Schaefer?",
    "options": {
      "A": "Varian normal, tidak ada makna patologis",
      "B": "Menandakan lesi lower motor neuron",
      "C": "Menandakan lesi traktus piramidalis (upper motor neuron)",
      "D": "Menandakan gangguan saraf perifer",
      "E": "Menandakan kelainan sendi dan ligamen"
    },
    "answer": "C",
    "explanation": "Refleks Gordon (cubit otot gastroknemius) dan refleks Schaefer (cubit tendon Achilles) merupakan refleks patologis yang positif bila didapatkan dorsofleksi ibu jari kaki. Sama seperti refleks Babinski, Oppenheim, Chaddock, dan Gonda, temuan positif menandakan lesi traktus piramidalis (upper motor neuron)."
  },
  {
    "id": 23,
    "topic": "Pemeriksaan Sensorik - Sensasi Suhu",
    "vignette": "Seorang laki-laki berusia 50 tahun dengan syringomyelia (kavitas di medula spinalis). Pada pemeriksaan sensasi suhu menggunakan tabung berisi air panas dan dingin, pasien tidak dapat membedakan rangsangan panas dan dingin pada kedua lengan, namun sensasi raba halus dan proprioseptif tetap baik.",
    "question": "Pola gangguan sensoris ini paling sesuai dengan kelainan pada struktur apa?",
    "options": {
      "A": "Kolumna dorsalis medula spinalis",
      "B": "Jalur spinothalamikus yang menyilang di medula spinalis",
      "C": "Korteks sensoris primer",
      "D": "Saraf perifer bilateral",
      "E": "Thalamus bilateral"
    },
    "answer": "B",
    "explanation": "Gangguan sensasi suhu dengan sensasi raba dan proprioseptif yang intak menunjukkan lesi selektif pada jalur spinothalamikus (yang membawa sensasi nyeri dan suhu), sementara kolumna dorsalis (yang membawa sensasi raba dan proprioseptif) tetap utuh. Pada syringomyelia, kavitas di medula spinalis merusak serabut spinothalamikus yang menyilang di komisura anterior."
  },
  {
    "id": 24,
    "topic": "Pemeriksaan Motorik - Kekuatan Otot Tungkai",
    "vignette": "Seorang laki-laki berusia 35 tahun dengan cedera saraf perifer tungkai. Pada pemeriksaan kekuatan otot quadriceps, pasien dapat mengekstensikan lutut melawan gravitasi namun tidak dapat menahan tahanan ringan dari pemeriksa.",
    "question": "Berapa nilai kekuatan otot quadriceps pada pasien ini?",
    "options": {
      "A": "1 - Hanya tonus otot teraba",
      "B": "2 - Gerakan tanpa melawan gravitasi",
      "C": "3 - Dapat melawan gravitasi saja",
      "D": "4 - Dapat menahan tahanan ringan",
      "E": "5 - Kekuatan normal penuh"
    },
    "answer": "C",
    "explanation": "Skala kekuatan otot 3 menunjukkan kekuatan otot yang hanya cukup untuk melawan gravitasi namun tidak dapat melawan tahanan ringan. Ini sesuai dengan temuan pada pasien yang dapat mengekstensikan lutut (melawan gravitasi) tetapi tidak dapat menahan saat pemeriksa memberikan tahanan ringan."
  },
  {
    "id": 25,
    "topic": "Pemeriksaan Koordinasi - Tes Tumit-Lutut",
    "vignette": "Seorang perempuan berusia 55 tahun dengan multiple sclerosis diminta menutup mata dan menempatkan tumit kanan di atas lutut kiri, kemudian menurunkan tumit menyusuri tungkai bawah kiri. Tumit pasien berkali-kali terjatuh dari jalurnya (ataksia). Gangguan tidak membaik saat mata dibuka.",
    "question": "Apa interpretasi dari temuan tes tumit-lutut ini?",
    "options": {
      "A": "Ataksia sensoris akibat gangguan proprioseptif",
      "B": "Ataksia vestibular",
      "C": "Ataksia cerebelar dengan hipermetria",
      "D": "Gangguan ekstrapiramidal",
      "E": "Kelemahan otot (paresis) tungkai"
    },
    "answer": "C",
    "explanation": "Tes tumit-lutut menilai koordinasi tungkai bawah. Hipermetria atau ataksia (tumit berkali-kali terjatuh dari jalur) menandakan gangguan koordinasi cerebelar. Karena gangguan sama berat baik mata tertutup maupun terbuka, ini menandakan gangguan cerebelar (bukan proprioseptif). Pada multiple sclerosis, lesi plak di jalur serebelar dapat menyebabkan ataksia."
  },
  {
    "id": 26,
    "topic": "Refleks Fisiologis - Refleks Triceps",
    "vignette": "Seorang laki-laki berusia 52 tahun dengan keluhan kelemahan tangan kiri. Dokter memegang lengan pasien dengan siku fleksi 90 derajat, kemudian mengetuk tendon triceps tepat di atas olekranon dengan palu refleks. Didapatkan ekstensi lengan bawah yang lemah dibandingkan sisi kanan.",
    "question": "Level segmen spinal mana yang dinilai pada pemeriksaan refleks triceps?",
    "options": {
      "A": "C5-C6",
      "B": "C6-C7",
      "C": "C7-C8",
      "D": "C8-T1",
      "E": "T1-T2"
    },
    "answer": "C",
    "explanation": "Refleks triceps menilai integritas lengkung refleks pada level C7-C8. Respon normal adalah ekstensi lengan bawah dengan kontraksi otot triceps. Refleks triceps yang lemah unilateral dapat menandakan lesi pada segmen C7-C8 atau nervus radialis pada sisi yang terkena."
  },
  {
    "id": 27,
    "topic": "Refleks Patologis - Chaddock",
    "vignette": "Seorang perempuan berusia 62 tahun pasca stroke 2 minggu lalu dengan hemiparesis kanan. Pada pemeriksaan, pemeriksa menggores kulit di bawah maleolus lateralis dari posterior ke anterior. Didapatkan dorsofleksi ibu jari kaki kanan.",
    "question": "Apa makna klinis dari temuan refleks Chaddock positif pada pasien ini?",
    "options": {
      "A": "Menandakan lesi lower motor neuron",
      "B": "Varian normal pada orang dewasa",
      "C": "Menandakan lesi traktus piramidalis (upper motor neuron)",
      "D": "Menandakan gangguan saraf perifer",
      "E": "Menandakan kelainan sendi pergelangan kaki"
    },
    "answer": "C",
    "explanation": "Refleks Chaddock merupakan salah satu refleks patologis yang menilai integritas traktus piramidalis, sama seperti refleks Babinski. Refleks ini positif bila didapatkan dorsofleksi ibu jari kaki setelah menggores kulit di bawah maleolus lateralis. Temuan positif menandakan lesi upper motor neuron, sesuai dengan riwayat stroke pada pasien.",
    "figureRef": {
      "page": 22,
      "description": "Diagram teknik pemeriksaan refleks Chaddock"
    }
  },
  {
    "id": 28,
    "topic": "Refleks Patologis - Gonda",
    "vignette": "Seorang laki-laki berusia 58 tahun dengan suspek lesi UMN. Dokter melakukan pemeriksaan dengan menekan dan melepaskan jari kaki ke-4 atau ke-5 secara tiba-tiba ke arah plantar. Didapatkan dorsofleksi ibu jari kaki.",
    "question": "Refleks patologis apa yang sedang diperiksa dan bagaimana interpretasinya?",
    "options": {
      "A": "Refleks Babinski, negatif menandakan tidak ada kelainan",
      "B": "Refleks Gonda, positif menandakan lesi traktus piramidalis",
      "C": "Refleks Schaefer, negatif merupakan respon normal",
      "D": "Refleks Gordon, positif menandakan kelainan lower motor neuron",
      "E": "Refleks Oppenheim, negatif tidak ada makna klinis"
    },
    "answer": "B",
    "explanation": "Refleks Gonda dilakukan dengan menekan dan melepaskan jari kaki ke-4 atau ke-5 secara tiba-tiba ke arah plantar. Refleks positif bila didapatkan dorsofleksi ibu jari kaki. Bersama refleks Babinski, Oppenheim, Chaddock, Gordon, dan Schaefer, refleks Gonda positif menandakan lesi traktus piramidalis (upper motor neuron)."
  },
  {
    "id": 29,
    "topic": "Pemeriksaan Sensorik - Sensasi Raba",
    "vignette": "Seorang perempuan berusia 48 tahun dengan keluhan baal di tangan kanan. Pada pemeriksaan sensasi raba halus menggunakan kapas, pasien dapat merasakan sentuhan kapas tetapi tidak dapat membedakan apakah disentuh dengan 1 atau 2 titik pada jarak 5mm (two-point discrimination menurun).",
    "question": "Gangguan two-point discrimination menandakan kelainan pada struktur apa?",
    "options": {
      "A": "Jalur spinothalamikus",
      "B": "Korteks sensoris primer atau jalur kolumna dorsalis",
      "C": "Jalur kortikospinal",
      "D": "Jalur ekstrapiramidal",
      "E": "Saraf motorik perifer"
    },
    "answer": "B",
    "explanation": "Two-point discrimination adalah kemampuan membedakan dua titik sentuhan yang berdekatan. Pemeriksaan ini menilai fungsi korteks sensoris primer dan integritas jalur kolumna dorsalis. Gangguan two-point discrimination dengan sensasi raba kasar yang masih intak menandakan kelainan pada korteks sensoris atau jalur diskriminasi halus (kolumna dorsalis)."
  },
  {
    "id": 30,
    "topic": "Pemeriksaan Motorik - Pola Kelemahan",
    "vignette": "Seorang laki-laki berusia 38 tahun mengalami kecelakaan dengan fraktur humerus. Setelah cedera, pasien tidak dapat melakukan ekstensi pergelangan tangan dan jari-jari, namun fleksi pergelangan tangan dan jari masih baik. Sensasi terganggu pada dorsum manus antara ibu jari dan telunjuk.",
    "question": "Saraf perifer mana yang kemungkinan mengalami cedera?",
    "options": {
      "A": "Nervus medianus",
      "B": "Nervus ulnaris",
      "C": "Nervus radialis",
      "D": "Nervus muskulokutaneus",
      "E": "Nervus axillaris"
    },
    "answer": "C",
    "explanation": "Pola kelemahan dengan hilangnya ekstensi pergelangan tangan dan jari (wrist drop, finger drop) disertai gangguan sensasi pada dorsum manus antara ibu jari dan telunjuk adalah karakteristik cedera nervus radialis. Nervus radialis sering terlibat pada fraktur humerus karena letaknya yang dekat dengan tulang humerus di sulcus spiralis."
  },
  {
    "id": 31,
    "topic": "Pemeriksaan Motorik - Upper Motor Neuron vs Lower Motor Neuron",
    "vignette": "Seorang perempuan berusia 65 tahun dengan kelemahan tungkai bilateral. Pada pemeriksaan didapatkan hiperefleksia bilateral, Babinski positif bilateral, spastisitas, namun tidak ada atrofi otot. Pasien juga mengeluh kesulitan buang air kecil.",
    "question": "Lokasi lesi yang paling mungkin pada pasien ini?",
    "options": {
      "A": "Lesi bilateral saraf perifer tungkai",
      "B": "Lesi medula spinalis torakal (myelopati)",
      "C": "Lesi bilateral korteks motorik",
      "D": "Lesi bilateral cauda equina",
      "E": "Lesi bilateral nervus femoralis"
    },
    "answer": "B",
    "explanation": "Kombinasi hiperefleksia bilateral, Babinski positif bilateral, spastisitas tanpa atrofi otot, dan gangguan fungsi kandung kemih menunjukkan lesi upper motor neuron pada medula spinalis (myelopati). Lesi bilateral pada level torakal dapat menyebabkan paraparesis spastik dengan hiperefleksia dan gangguan fungsi otonom (kandung kemih). Tidak ada atrofi karena lower motor neuron masih intak."
  },
  {
    "id": 32,
    "topic": "Refleks Fisiologis - Refleks Brachioradialis",
    "vignette": "Seorang laki-laki berusia 44 tahun dengan keluhan nyeri leher menjalar ke lengan. Pada pemeriksaan refleks brachioradialis, pemeriksa meletakkan lengan bawah pasien dalam posisi semi-pronasi dan mengetuk processus styloideus radii dengan palu refleks. Didapatkan refleks yang lemah dibanding sisi kontralateral.",
    "question": "Level segmen spinal mana yang dinilai pada pemeriksaan refleks brachioradialis?",
    "options": {
      "A": "C4-C5",
      "B": "C5-C6",
      "C": "C6-C7",
      "D": "C7-C8",
      "E": "C8-T1"
    },
    "answer": "B",
    "explanation": "Refleks brachioradialis menilai integritas lengkung refleks pada level C5-C6, sama seperti refleks biceps. Respon normal adalah fleksi dan supinasi lengan bawah. Refleks yang lemah unilateral dapat menandakan radikulopati C6 atau lesi pada level C5-C6, yang sesuai dengan keluhan nyeri leher menjalar ke lengan pada pasien."
  },
  {
    "id": 33,
    "topic": "Pemeriksaan Koordinasi - Dysdiadochokinesia",
    "vignette": "Seorang laki-laki berusia 56 tahun dengan tumor cerebelar. Pasien diminta melakukan gerakan pronasi-supinasi tangan secara cepat dan bergantian. Gerakan pasien menjadi lambat, tidak teratur, dan kehilangan ritme setelah beberapa repetisi.",
    "question": "Bagaimana istilah yang tepat untuk menggambarkan temuan ini dan apa maknanya?",
    "options": {
      "A": "Disdiadokokinesis, menandakan gangguan fungsi cerebelar",
      "B": "Athetosis, menandakan gangguan ganglia basalis",
      "C": "Bradykinesia, menandakan penyakit Parkinson",
      "D": "Chorea, menandakan gangguan ekstrapiramidal",
      "E": "Ataksia sensoris, menandakan gangguan proprioseptif"
    },
    "answer": "A",
    "explanation": "Disdiadokokinesis (dysdiadochokinesia) adalah ketidakmampuan melakukan gerakan bergantian yang cepat, teratur, dan terkoordinasi dengan baik. Temuan ini merupakan tanda khas gangguan fungsi cerebelar. Pada tumor cerebelar, kerusakan struktur cerebelar mengganggu koordinasi gerakan halus yang memerlukan perubahan arah cepat."
  }
];
