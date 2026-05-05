// Materials data from NEUAAA-105 - Bahasa Indonesia content
const MATERIALS_DATA = [
  {
    id: 1,
    titleEn: "Reflex Arc Anatomy",
    titleId: "Anatomi Lengkung Refleks",
    summary: "Lima komponen lengkung refleks: reseptor sensorik, saraf aferen, sinaps medula spinalis, saraf eferen, dan respons otot.",
    content: `<h2>Anatomi Lengkung Refleks</h2>

<p>Refleks adalah respons motorik involunter terhadap stimulus sensorik tertentu. Lengkung refleks terdiri dari lima komponen utama yang bekerja secara terintegrasi:</p>

<h3>Komponen Lengkung Refleks:</h3>
<ol>
<li><strong>Reseptor Sensorik</strong> - Menerima stimulus dari lingkungan (proprioseptor pada tendon dan otot)</li>
<li><strong>Saraf Aferen</strong> - Membawa impuls sensorik dari reseptor menuju medula spinalis melalui radiks dorsalis</li>
<li><strong>Pusat Integrasi di Medula Spinalis</strong> - Sinaps antara neuron sensorik dan neuron motorik terjadi di kornu anterior medula spinalis</li>
<li><strong>Saraf Eferen</strong> - Neuron motorik bawah (lower motor neuron) yang membawa impuls dari medula spinalis melalui radiks ventralis menuju efektor</li>
<li><strong>Efektor</strong> - Otot yang berkontraksi sebagai respons terhadap stimulus</li>
</ol>

<h3>Jenis Refleks:</h3>
<ul>
<li><strong>Refleks Fisiologis</strong> - Refleks normal yang dapat diperiksa dengan palu refleks (refleks tendon dalam)</li>
<li><strong>Refleks Patologis</strong> - Refleks yang muncul pada kondisi patologis, terutama lesi traktus piramidalis (Upper Motor Neuron)</li>
<li><strong>Refleks Superfisial</strong> - Refleks yang ditimbulkan dengan rangsangan pada kulit (refleks abdominal, refleks kremaster, refleks anal)</li>
</ul>

<h3>Jalur Refleks Tendon:</h3>
<p>Ketika tendon diketuk dengan palu refleks, reseptor regang (muscle spindle) teraktivasi dan mengirim sinyal melalui serabut saraf aferen Ia ke medula spinalis. Di kornu anterior, terjadi sinaps monosinaptik langsung dengan neuron motorik alfa yang kemudian mengirim impuls melalui saraf eferen ke otot yang sama, menyebabkan kontraksi refleks.</p>`,
    references: [
      "Bickley, L.S. & Szilagyi, P.G. 2009. <em>Bates' Guide to Physical Examination and History Taking</em>, 10th edition. China: Lippincott Williams & Wilkins.",
      "Duijnhoven, B. 2009. <em>Skills in Medicine: The Neurology Examination</em>.",
      "Lumbantobing. 2008. <em>Neurologi Klinik Pemeriksaan Fisik dan Mental</em>. Jakarta: Balai Penerbit FKUI, pp. 46-47."
    ]
  },
  {
    id: 2,
    titleEn: "Upper Motor Neurons",
    titleId: "Neuron Motorik Atas",
    summary: "Traktus piramidalis dan ekstrapiramidalis: asal, jalur, dan tanda klinis lesi UMN.",
    content: `<h2>Neuron Motorik Atas</h2>

<p>Upper Motor Neuron (UMN) atau neuron motorik atas adalah neuron yang membawa impuls motorik dari korteks serebri dan batang otak menuju medula spinalis. UMN terdiri dari dua traktus utama:</p>

<h3>Traktus Piramidalis:</h3>
<ul>
<li>Traktus kortikospinalis yang berasal dari korteks motorik primer (area 4 Brodmann)</li>
<li>Menyilang di dekusasio piramidalis di medula oblongata</li>
<li>Mengontrol gerakan volunter halus dan terampil</li>
</ul>

<h3>Traktus Ekstrapiramidalis:</h3>
<ul>
<li>Meliputi jalur motorik yang tidak melalui piramis medula oblongata</li>
<li>Terlibat dalam kontrol postural, tonus otot, dan gerakan involunter</li>
</ul>

<h3>Tanda dan Gejala Lesi UMN:</h3>
<ol>
<li><strong>Hiperefleksia</strong> - Refleks tendon meningkat pada pemeriksaan refleks fisiologis. Refleks dapat dinilai sebagai 3+ (refleks cepat/brisk) atau 4+ (refleks sangat cepat dengan klonus)</li>
<li><strong>Spastisitas</strong> - Peningkatan tonus otot yang bergantung pada kecepatan peregangan (velocity-dependent)</li>
<li><strong>Klonus</strong> - Kontraksi otot ritmik yang berulang, merupakan tanda patologis lesi pada central motor neuron di atas cabang refleks spinal</li>
<li><strong>Refleks Patologis Positif</strong> - Munculnya refleks Babinski, Oppenheim, Chaddock, Gordon, dan refleks patologis lainnya</li>
<li><strong>Kelemahan Pola Piramidal</strong> - Kelemahan lebih menonjol pada otot ekstensor lengan atas dan fleksor tungkai bawah</li>
<li><strong>Tidak Ada Atrofi Otot Signifikan</strong> - Berbeda dengan lesi LMN, atrofi otot minimal atau hanya terjadi akibat disuse</li>
</ol>

<h3>Penyebab Lesi UMN:</h3>
<ul>
<li>Stroke iskemik atau hemoragik</li>
<li>Cedera medula spinalis</li>
<li>Sklerosis multipel</li>
<li>Tumor otak atau medula spinalis</li>
<li>Cerebral palsy</li>
</ul>`,
    references: [
      "Bickley, L.S. 2002. <em>Bates Guide to Physical Examination and History Taking</em>, 8th Edition.",
      "Duijnhoven, B. 2009. <em>Skills in Medicine: Neurology Examination</em>.",
      "Lumbantobing. 2008. <em>Neurologi Klinik Pemeriksaan Fisik dan Mental</em>. Jakarta: Balai Penerbit FKUI, pp. 46-47."
    ]
  },
  {
    id: 3,
    titleEn: "Lower Motor Neurons",
    titleId: "Neuron Motorik Bawah",
    summary: "Unit motorik: sel kornu anterior, saraf perifer, sambungan neuromuskular. Tanda disfungsi LMN.",
    content: `<h2>Neuron Motorik Bawah</h2>

<p>Lower Motor Neuron (LMN) atau neuron motorik bawah adalah neuron yang membawa impuls langsung dari medula spinalis atau batang otak ke otot rangka.</p>

<h3>Komponen LMN:</h3>
<ol>
<li><strong>Sel Kornu Anterior</strong> - Badan sel neuron motorik di substansia grisea medula spinalis</li>
<li><strong>Radiks Ventralis</strong> - Akson neuron motorik yang keluar dari medula spinalis</li>
<li><strong>Saraf Perifer</strong> - Nervus yang membawa impuls motorik</li>
<li><strong>Sambungan Neuromuskular</strong> - Tempat transmisi sinyal dari saraf ke otot melalui asetilkolin</li>
<li><strong>Otot Rangka</strong> - Efektor akhir</li>
</ol>

<h3>Tanda dan Gejala Lesi LMN:</h3>
<ol>
<li><strong>Hiporefleksia atau Arefleksia</strong> - Refleks tendon menurun (1+) atau bahkan hilang sama sekali (0)</li>
<li><strong>Flaksiditas</strong> - Penurunan atau hilangnya tonus otot</li>
<li><strong>Atrofi Otot</strong> - Pengecilan massa otot yang signifikan dan progresif akibat denervasi</li>
<li><strong>Fasikulasi</strong> - Kontraksi otot tidak beraturan yang terlihat sebagai kedutan pada permukaan kulit</li>
<li><strong>Kelemahan Otot</strong> - Distribusi kelemahan sesuai dengan saraf yang terkena</li>
<li><strong>Refleks Patologis Negatif</strong> - Tidak ditemukan refleks Babinski atau refleks patologis lainnya</li>
</ol>

<h3>Kondisi yang Menyebabkan Lesi LMN:</h3>
<ul>
<li>Poliomielitis</li>
<li>Guillain-Barré Syndrome</li>
<li>Kompresi radiks saraf (herniated disc)</li>
<li>Neuropati perifer (diabetes, alkohol, defisiensi vitamin B12)</li>
<li>Amyotrophic Lateral Sclerosis (ALS)</li>
<li>Trauma saraf perifer</li>
</ul>`,
    references: [
      "Bickley, L.S. 2002. <em>Bates Guide to Physical Examination and History Taking</em>, 8th Edition.",
      "Duijnhoven, B. 2009. <em>Skills in Medicine: Neurology Examination</em>."
    ]
  },
  {
    id: 4,
    titleEn: "Deep Tendon Reflexes",
    titleId: "Refleks Tendon Dalam",
    summary: "Patella, Achilles, biseps, triseps, brakioradialis: grading, varian normal, dan patologi.",
    content: `<h2>Refleks Tendon Dalam</h2>

<p>Refleks tendon dalam (deep tendon reflexes) adalah refleks fisiologis yang diperiksa dengan mengetuk tendon menggunakan palu refleks.</p>

<h3>Refleks Ekstremitas Atas:</h3>
<h4>1. Refleks Biseps (C5-C6)</h4>
<p>Posisi: Lengan bawah rileks di atas lengan bawah pemeriksa. Jempol pemeriksa di atas tendon biseps di lipat siku. Nilai: kontraksi otot biseps dan fleksi lengan bawah.</p>

<h4>2. Refleks Triseps (C7-C8)</h4>
<p>Posisi: Lengan bawah fleksi 90°. Ketuk tendon triseps 3 cm di atas olekranon. Nilai: ekstensi lengan bawah dan kontraksi otot triseps.</p>

<h4>3. Refleks Brakioradialis (C5-C6)</h4>
<p>Posisi: Seperti refleks biseps. Ketuk 1 cm di atas prosesus stiloid radial. Nilai: fleksi lengan bawah dan kontraksi otot brakioradialis.</p>

<h3>Refleks Ekstremitas Bawah:</h3>
<h4>4. Refleks Patella (L2-L4)</h4>
<p>Posisi: Tungkai bawah menggantung rileks atau lutut fleksi di atas tangan pemeriksa. Ketuk tendon kuadriseps di antara patella dan tuberositas tibialis. Nilai: ekstensi tungkai bawah dan kontraksi otot kuadriseps.</p>

<h4>5. Refleks Achilles (S1-S2)</h4>
<p>Posisi: Kaki menyilang atau pergelangan kaki sedikit dorsofleksi. Ketuk tendon Achilles. Nilai: fleksi dorsum pedis atau ekstensi plantar pedis.</p>

<h3>Refleks Superfisial:</h3>
<ul>
<li><strong>Refleks Abdominal</strong> - Gores tepi ke umbilikus, nilai pergerakan umbilikus</li>
<li><strong>Refleks Kremaster</strong> - Gores paha dalam dari distal ke proksimal, nilai testis terangkat</li>
<li><strong>Refleks Anal</strong> - Gores sekitar anus melingkar, nilai kontraksi sfingter</li>
</ul>`,
    references: [
      "Bickley, L.S. 2002. <em>Bates Guide to Physical Examination and History Taking</em>, 8th Edition.",
      "Duijnhoven, B. 2009. <em>Skills in Medicine: Neurology Examination</em>."
    ]
  },
  {
    id: 5,
    titleEn: "Pathological Reflexes",
    titleId: "Refleks Patologis",
    summary: "Babinski, Chaddock, Gordon, Oppenheim. Cara dan kapan memunculkannya; apa yang mereka tunjukkan.",
    content: `<h2>Refleks Patologis</h2>

<p>Refleks patologis adalah refleks yang tidak ditemukan pada individu dewasa sehat, tetapi muncul pada kondisi lesi Upper Motor Neuron (UMN), khususnya lesi traktus piramidalis.</p>

<table style="border-collapse: collapse; width: 100%; margin: 1.5rem 0;">
<tr><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Refleks</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Teknik</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Positif</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Makna</th></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Hoffman-Tromner</td><td style="border: 1px solid #ddd; padding: 8px;">Hiperekstensi pergelangan tangan, sentil ujung jari tengah</td><td style="border: 1px solid #ddd; padding: 8px;">Jari-jari fleksi dan ibu jari adduksi</td><td style="border: 1px solid #ddd; padding: 8px;">Unilateral = lesi UMN di atas C8. Bilateral pada 25% orang normal</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Babinski</td><td style="border: 1px solid #ddd; padding: 8px;">Gores telapak kaki lateral dari tumit ke pangkal jempol kaki</td><td style="border: 1px solid #ddd; padding: 8px;">Dorsofleksi ibu jari kaki dengan atau tanpa fanning jari lainnya</td><td style="border: 1px solid #ddd; padding: 8px;">Lesi traktus piramidalis (UMN)</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Chaddock</td><td style="border: 1px solid #ddd; padding: 8px;">Gores lateral maleolus (sekitar mata kaki lateral)</td><td style="border: 1px solid #ddd; padding: 8px;">Dorsofleksi ibu jari dengan atau tanpa fanning</td><td style="border: 1px solid #ddd; padding: 8px;">Alternatif Babinski untuk lesi traktus piramidalis</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Oppenheim</td><td style="border: 1px solid #ddd; padding: 8px;">Urut kuat tibia dan otot tibialis anterior dari proksimal ke distal</td><td style="border: 1px solid #ddd; padding: 8px;">Dorsofleksi ibu jari kaki dengan atau tanpa fanning</td><td style="border: 1px solid #ddd; padding: 8px;">Lesi traktus piramidalis</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Gordon</td><td style="border: 1px solid #ddd; padding: 8px;">Cubit otot gastroknemius (betis)</td><td style="border: 1px solid #ddd; padding: 8px;">Dorsofleksi ibu jari kaki dengan atau tanpa fanning</td><td style="border: 1px solid #ddd; padding: 8px;">Lesi traktus piramidalis</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Schaefer</td><td style="border: 1px solid #ddd; padding: 8px;">Cubit tendon Achilles</td><td style="border: 1px solid #ddd; padding: 8px;">Dorsofleksi ibu jari kaki dengan atau tanpa fanning</td><td style="border: 1px solid #ddd; padding: 8px;">Lesi traktus piramidalis</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Gonda</td><td style="border: 1px solid #ddd; padding: 8px;">Tekan salah satu jari kaki dan lepaskan dengan cepat</td><td style="border: 1px solid #ddd; padding: 8px;">Dorsofleksi ibu jari kaki dengan atau tanpa fanning</td><td style="border: 1px solid #ddd; padding: 8px;">Lesi traktus piramidalis</td></tr>
</table>`,
    references: [
      "Bickley, L.S. & Szilagyi, P.G. 2009. <em>Bates' Guide to Physical Examination and History Taking</em>, 10th edition. China: Lippincott Williams & Wilkins.",
      "Duijnhoven, B. 2009. <em>Skills in Medicine: The Neurology Examination</em>.",
      "Lumbantobing. 2008. <em>Neurologi Klinik Pemeriksaan Fisik dan Mental</em>. Jakarta: Balai Penerbit FKUI, pp. 46-47."
    ]
  },
  {
    id: 6,
    titleEn: "Reflex Grading Scale",
    titleId: "Skala Penilaian Refleks",
    summary: "0 = tidak ada, 1+ = menurun, 2+ = normal, 3+ = cepat, 4+ = hiperaktif dengan klonus. Interpretasi klinis.",
    content: `<h2>Skala Penilaian Refleks</h2>

<h3>Skala Penilaian Refleks (0 hingga 4+):</h3>
<table style="border-collapse: collapse; width: 100%; margin: 1rem 0;">
<tr><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Grade</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Deskripsi</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Interpretasi</th></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">0</td><td style="border: 1px solid #ddd; padding: 8px;">Tidak ada refleks</td><td style="border: 1px solid #ddd; padding: 8px;">Arefleksia</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">1+</td><td style="border: 1px solid #ddd; padding: 8px;">Refleks lemah/diminished</td><td style="border: 1px solid #ddd; padding: 8px;">Hiporefleksia</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">2+</td><td style="border: 1px solid #ddd; padding: 8px;">Refleks normal</td><td style="border: 1px solid #ddd; padding: 8px;">Normal</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">3+</td><td style="border: 1px solid #ddd; padding: 8px;">Refleks cepat/brisk</td><td style="border: 1px solid #ddd; padding: 8px;">Lebih cepat dari normal, tidak tentu patologis</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">4+</td><td style="border: 1px solid #ddd; padding: 8px;">Refleks sangat cepat dengan klonus</td><td style="border: 1px solid #ddd; padding: 8px;">Selalu patologis pada dewasa</td></tr>
</table>

<h3>Hiporefleksia (Refleks 0 atau 1+)</h3>
<p><strong>Penyebab:</strong> Kelainan Lower Motor Neuron (LMN), lesi saraf perifer, lesi radiks saraf, fase akut cedera medula spinalis, penyakit neuromuskular, hipotiroidisme berat.</p>

<h3>Arefleksia (Refleks 0)</h3>
<p><strong>Penyebab:</strong> Lesi saraf tepi, lesi spinal root (syringomyelia), fase syok spinal, koma dalam, arefleksia kongenital, Guillain-Barré Syndrome, neuropati perifer berat.</p>

<h3>Refleks Normal (Refleks 2+)</h3>
<p>Kontraksi otot yang jelas terlihat, pergerakan sendi yang dapat diamati, simetris bilateral, tidak ada klonus.</p>

<h3>Hiperefleksia (Refleks 3+ atau 4+)</h3>
<p><strong>Penyebab:</strong> Gangguan Upper Motor Neuron (UMN), lesi traktus kortikospinalis, hipertiroidisme, ansietas.</p>

<h3>Klonus</h3>
<p><strong>Definisi:</strong> Serangkaian kontraksi otot ritmik dan involunter sebagai respons terhadap peregangan otot yang cepat dan dipertahankan.</p>
<p><strong>Cara Menguji:</strong></p>
<ul>
<li>Klonus pergelangan kaki: Dorsofleksikan kaki dengan cepat dan pertahankan posisi</li>
<li>Klonus patella: Dorong patella ke kaudal dengan cepat dan pertahankan tekanan</li>
</ul>
<p><strong>Interpretasi:</strong> Klonus berkelanjutan (sustained) = patologis, indikasi lesi central motor neuron. Pada bayi atau refleks sangat cepat, 3-4 ketukan bilateral dapat normal. Pada dewasa, >3-4 ketukan selalu patologis (lesi UMN).</p>`,
    references: [
      "Bickley, L.S. 2002. <em>Bates Guide to Physical Examination and History Taking</em>, 8th Edition.",
      "Duijnhoven, B. 2009. <em>Skills in Medicine: Neurology Examination</em>."
    ]
  },
  {
    id: 7,
    titleEn: "Lesion Localisation",
    titleId: "Lokalisasi Lesi",
    summary: "Menggunakan pola refleks, tonus, dan kekuatan untuk menentukan level spinal dan membedakan patologi CNS dari PNS.",
    content: `<h2>Lokalisasi Lesi</h2>

<p>Lokalisasi lesi neurologis menggunakan pola refleks, tonus, kekuatan, dan pemeriksaan sensorik untuk menentukan level dan lokasi kerusakan pada sistem saraf.</p>

<h3>A. Membedakan Lesi UMN dan LMN</h3>
<table style="border-collapse: collapse; width: 100%; margin: 1rem 0;">
<tr><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Karakteristik</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">UMN</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">LMN</th></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Refleks</td><td style="border: 1px solid #ddd; padding: 8px;">Hiperefleksia (3-4+)</td><td style="border: 1px solid #ddd; padding: 8px;">Hiporefleksia/Arefleksia (0-1+)</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Tonus</td><td style="border: 1px solid #ddd; padding: 8px;">Spastisitas</td><td style="border: 1px solid #ddd; padding: 8px;">Flaksiditas</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Klonus</td><td style="border: 1px solid #ddd; padding: 8px;">Sustained</td><td style="border: 1px solid #ddd; padding: 8px;">Tidak ada</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Refleks Patologis</td><td style="border: 1px solid #ddd; padding: 8px;">Positif (Babinski, dll)</td><td style="border: 1px solid #ddd; padding: 8px;">Negatif</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Atrofi</td><td style="border: 1px solid #ddd; padding: 8px;">Minimal (disuse)</td><td style="border: 1px solid #ddd; padding: 8px;">Signifikan</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Fasikulasi</td><td style="border: 1px solid #ddd; padding: 8px;">Tidak ada</td><td style="border: 1px solid #ddd; padding: 8px;">Dapat terlihat</td></tr>
</table>

<h3>B. Lokalisasi Berdasarkan Level Spinal</h3>
<ul>
<li><strong>Refleks Biseps</strong> - C5-C6</li>
<li><strong>Refleks Triseps</strong> - C7-C8</li>
<li><strong>Refleks Brakioradialis</strong> - C5-C6</li>
<li><strong>Refleks Patella</strong> - L2-L4 (terutama L3-L4)</li>
<li><strong>Refleks Achilles</strong> - S1-S2</li>
</ul>

<h3>C. Pola Klinis Lokalisasi</h3>
<h4>1. Lesi Korteks Motorik/Kapsula Interna (Stroke)</h4>
<p>Hemiparesis kontralateral, hiperefleksia kontralateral, Babinski positif kontralateral, defisit sensorik kontralateral.</p>

<h4>2. Lesi Medula Spinalis (Mielopati)</h4>
<p>Level sensorik (sensory level), UMN sign di bawah level lesi, LMN sign pada level lesi, disfungsi kandung kemih dan bowel.</p>

<h4>3. Lesi Radiks Saraf (Radikulopati)</h4>
<p>Nyeri radikuler, kelemahan pada otot yang dipersarafi radiks tersebut, refleks menurun/absent pada level terkena, defisit sensorik sesuai dermatom.</p>

<h4>4. Lesi Saraf Perifer (Neuropati)</h4>
<p>Distribusi sesuai saraf (mononeuropati) atau pola sarung tangan-kaus kaki (polineuropati), LMN signs, refleks menurun/absent, atrofi otot.</p>

<h3>D. Contoh Kasus Lokalisasi</h3>
<p><strong>Kasus 1:</strong> Kelemahan tungkai unilateral, hiperefleksia dengan klonus sustained, Babinski positif → Lesi UMN (stroke, cedera medula spinalis, tumor).</p>
<p><strong>Kasus 2:</strong> Kelemahan kedua tungkai, refleks patella normal, refleks Achilles absent bilateral, Babinski negatif, atrofi betis → Lesi LMN pada S1-S2 (radikulopati S1 bilateral, neuropati perifer).</p>`,
    references: [
      "Bickley, L.S. 2002. <em>Bates Guide to Physical Examination and History Taking</em>, 8th Edition.",
      "Duijnhoven, B. 2009. <em>Skills in Medicine: Neurology Examination</em>.",
      "Lumbantobing. 2008. <em>Neurologi Klinik Pemeriksaan Fisik dan Mental</em>. Jakarta: Balai Penerbit FKUI, pp. 46-47."
    ]
  },
  {
    id: 8,
    titleEn: "Clinical Examination Technique",
    titleId: "Teknik Pemeriksaan Klinis",
    summary: "Posisi pasien, teknik palu, manuver reinforcement, dan cara menghindari kesalahan umum.",
    content: `<h2>Teknik Pemeriksaan Klinis</h2>

<h3>A. Prinsip Umum Pemeriksaan Neurologis</h3>
<h4>Persiapan Alat:</h4>
<ul>
<li>Palu refleks dengan ujung lancip dan tumpul</li>
<li>Cotton bud untuk pemeriksaan sensorik</li>
<li>Tusuk gigi untuk pemeriksaan nyeri</li>
<li>Tabung reaksi berisi air panas dan dingin untuk pemeriksaan suhu</li>
<li>Garpu tala untuk pemeriksaan vibrasi</li>
</ul>

<h4>Persiapan Pasien:</h4>
<ul>
<li>Jelaskan prosedur yang akan dilakukan</li>
<li>Pastikan pasien memahami instruksi</li>
<li>Posisikan pasien dengan nyaman (duduk/berbaring)</li>
<li>Pastikan privasi yang cukup</li>
<li>Cuci tangan sebelum prosedur</li>
</ul>

<h3>B. Teknik Pemeriksaan Refleks yang Benar</h3>
<h4>Prinsip Dasar:</h4>
<ol>
<li><strong>Relaksasi Otot Pasien</strong> - Kunci utama. Otot tegang = hasil false positive/negative. Gunakan percakapan ringan.</li>
<li><strong>Posisi yang Tepat</strong> - Ekstremitas dalam posisi yang memungkinkan kontraksi terlihat jelas. Sendi semi-fleksi (90° untuk siku/lutut).</li>
<li><strong>Teknik Ketukan</strong> - Gunakan pergelangan tangan, bukan lengan. Ketukan cepat dan tajam (brisk tap). Kekuatan konsisten. Arah tegak lurus terhadap tendon.</li>
<li><strong>Lokasi Ketukan yang Tepat</strong> - Ketuk pada tendon, bukan otot/tulang. Gunakan jari sebagai pemandu.</li>
<li><strong>Teknik Reinforcement (Jendrassik)</strong> - Untuk refleks tungkai yang sulit didapat. Pasien mengaitkan jari kedua tangan dan menarik berlawanan arah sekuat-kuatnya sambil pemeriksa mengetuk.</li>
</ol>

<h3>C. Teknik Pemeriksaan Tonus Otot</h3>
<p>Pegang lengan pasien di pergelangan tangan, siku menempel meja. Jari pemeriksa pada tendon biseps. Fleksikan dan ekstensikan siku beberapa kali dengan berbagai kecepatan. Nilai tonus otot-otot lengan atas dan bandingkan kanan-kiri.</p>

<h4>Interpretasi:</h4>
<ul>
<li><strong>Flaksiditas:</strong> Tidak ada tahanan (lesi LMN)</li>
<li><strong>Normal:</strong> Tahanan ringan yang halus</li>
<li><strong>Spastisitas:</strong> Peningkatan tahanan velocity-dependent, fenomena "clasp-knife" (lesi UMN)</li>
<li><strong>Rigiditas:</strong> Peningkatan tahanan konstan, fenomena "lead-pipe" atau "cogwheel" (gangguan ekstrapiramidal)</li>
</ul>

<h3>D. Kesalahan Umum yang Harus Dihindari</h3>
<ul>
<li>Otot pasien tidak rileks → refleks palsu menurun/meningkat</li>
<li>Ketukan terlalu lemah/kuat → tidak terpicu atau nyeri</li>
<li>Posisi tidak tepat → kontraksi tidak terlihat</li>
<li>Tidak membandingkan sisi kanan-kiri → asimetri tidak terdeteksi</li>
<li>Mengetuk otot/tulang, bukan tendon → tidak ada respons spesifik</li>
</ul>

<h3>E. Dokumentasi Hasil Pemeriksaan</h3>
<p>Gunakan diagram stick figure dengan notasi refleks di setiap lokasi. Cantumkan grading (0, 1+, 2+, 3+, 4+). Tandai bila ada klonus.</p>
<p>Contoh: "Biseps 2+/2+, Triseps 2+/2+, Brakioradialis 2+/2+, Patella 3+/3+, Achilles 2+/2+"</p>`,
    references: [
      "Bickley, L.S. 2002. <em>Bates Guide to Physical Examination and History Taking</em>, 8th Edition.",
      "Bickley, L.S. & Szilagyi, P.G. 2009. <em>Bates' Guide to Physical Examination and History Taking</em>, 10th edition. China: Lippincott Williams & Wilkins.",
      "Duijnhoven, B. 2009. <em>Skills in Medicine: The Neurology Examination</em>.",
      "Duijnhoven, B. 2009. <em>Skills in Medicine: The Pulmonary Examination</em>.",
      "Lumbantobing. 2008. <em>Neurologi Klinik Pemeriksaan Fisik dan Mental</em>. Jakarta: Balai Penerbit FKUI, pp. 46-47.",
      "Buckup, K. 2008. <em>Clinical test for the musculoskeletal system: examinations-signs-phenomena</em>, 2nd ed. Stuttgart: Thieme."
    ]
  }
];
