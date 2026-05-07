// Materials data - 7 new Bahasa Indonesia topics (NEUAAA-135)
const MATERIALS_DATA = [
  {
    id: 1,
    titleEn: "Pemeriksaan Refleks Fisiologis",
    titleId: "Pemeriksaan Refleks Fisiologis",
    summary: "Menilai refleks fisiologis serta mengenali kelainannya.",
    content: `<h1>Pemeriksaan Refleks Fisiologis</h1>

<h3>Tujuan</h3>
<p>Menilai refleks fisiologis serta mengenali kelainannya.</p>

<h3>Alat dan Bahan</h3>
<ul>
<li>Palu refleks</li>
</ul>

<h2>A. Teknik Pemeriksaan</h2>

<h3>1. Persiapan</h3>
<ol>
<li>Persiapkan alat yang dibutuhkan.</li>
</ol>

<h3>2. Penilaian Refleks Tendon (Bisep, Trisep, Pergelangan, Patela, Tumit)</h3>

<h4>A. Tendon Biceps (Posisi Pasien Duduk)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Apabila pemeriksa tidak kidal, pegang siku pasien dengan tangan kiri.</li>
<li>Lengan bawah pasien harus rileks berada di atas lengan bawah pemeriksa.</li>
<li>Jempol kiri pemeriksa harus berada di atas tendon biscep di lipat siku pasien.</li>
<li>Ketuk jempol anda dengan palu refleks.</li>
<li>Nilai adanya kontraksi pada otot bisceps dan pergerakan lengan bawah, bandingkan kanan dan kiri.</li>
</ol>

<h4>B. Tendon Biceps (Posisi Pasien Berbaring)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Fleksikan lengan dan letakkan lengan bawah di atas abdomen.</li>
<li>Pastikan otot biscep dalam keadaan rileks dengan menggerakkan siku secara pasif.</li>
<li>Tempatkan jempol atau telunjuk kiri pemeriksa pada tendon bisceps di lipat siku pasien sebagai pemandu lokasi tendon otot biceps.</li>
<li>Ketuk jari pemandu dengan palu refleks.</li>
<li>Nilai adanya fleksi lengan bawah dan kontraksi pada otot bisceps, bandingkan kanan dan kiri.</li>
</ol>

<h4>C. Tendon Triceps (Posisi Pasien Duduk)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Fleksikan lengan bawah pasien secara pasif sehingga sikunya membentuk sudut 90°. Pegang pergelangan tangan pasien sehingga otot pasien benar-benar dalam keadaan rileks.</li>
<li>Letakkan jari telunjuk pada tendon triceps sebagai pemandu.</li>
<li>Ketuk jari telunjuk dengan palu refleks, sekitar 3 cm di atas olecranon.</li>
<li>Nilai adanya ekstensi lengan bawah dan kontraksi pada otot triceps, bandingkan kanan dan kiri.</li>
</ol>

<h4>D. Tendon Triceps (Posisi Pasien Berbaring)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Lengan bawah pasien diposisikan di atas dadanya dalam posisi rileks, dengan siku fleksi 90°.</li>
<li>Dengan menggunakan satu tangan, pemeriksa memegang tangan atau pergelangan tangan pasien memfleksikannya sedikit lebih dari 90°, dengan terlebih dahulu menggerakkan siku pasien fleksi-ekstensi secara pasif.</li>
<li>Letakkan jari telunjuk pada tendon triceps sebagai pemandu.</li>
<li>Ketuk jari telunjuk dengan palu refleks, sekitar 3 cm di atas olecranon.</li>
<li>Ketuk tendon triceps dengan palu refleks, sekitar 3 cm di atas olecranon.</li>
<li>Nilai adanya ekstensi lengan bawah dan kontraksi pada otot triceps, bandingkan kanan dan kiri.</li>
</ol>

<h4>E. Refleks Brachioradialis / Pergelangan Tangan (Posisi Duduk)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Posisi awal memegang lengan pasien seperti saat melakukan pemeriksaan refleks bisceps.</li>
<li>Kemudian ketuk di daerah 1 cm di atas prosesus radiostyloid dengan palu refleks.</li>
<li>Nilai adanya fleksi lengan bawah dan kontraksi otot brachioradialis, bandingkan kanan dan kiri.</li>
</ol>

<h4>F. Refleks Brachioradialis / Pergelangan Tangan (Posisi Berbaring)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Posisi awal memegang lengan pasien seperti saat melakukan pemeriksaan refleks bisceps.</li>
<li>Pegang jari telunjuk pasien dengan satu tangan dan gerakkan lengan bawah dan pergelangan tangan pasien hingga otot rileks.</li>
<li>Kemudian ketuk di daerah 1 cm di atas prosesus radiostyloid dengan palu refleks.</li>
<li>Nilai adanya fleksi lengan bawah dan kontraksi otot brachioradialis, bandingkan kanan dan kiri.</li>
</ol>

<h4>G. KPR Patella (Posisi Duduk)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Tungkai bawah pasien harus dalam keadaan menggantung dan rileks.</li>
<li>Yakinkan otot quadriceps pasien dalam keadaan rileks.</li>
<li>Ketuk tendon quadriceps dengan palu refleks, di antara patella dan tuberositas tibial.</li>
<li>Nilai adanya ekstensi tungkai bawah dan kontraksi otot quadriceps, bandingkan kanan dan kiri.</li>
</ol>

<h4>H. Patella (Posisi Berbaring)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Pemeriksa menempatkan tangannya pada salah satu lutut pasien melewati bawah lutut yang akan diperiksa.</li>
<li>Yakinkan tangan pemeriksa yang bebas mengecek bahwa otot quadriceps pasien dalam keadaan rileks.</li>
<li>Ketuk tendon quadriceps dengan palu refleks, di antara patella dan tuberositas tibial.</li>
<li>Nilai adanya ekstensi tungkai bawah dan kontraksi otot quadriceps, bandingkan kanan dan kiri.</li>
</ol>

<h4>I. Tendon Achilles (Posisi Berbaring)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Letakkan kaki pasien dalam posisi menyilang, satu kaki di atas kaki lainnya.</li>
<li>Pemeriksa memegang ujung kaki pasien dan menggerakkan pergelangan kakinya fleksi-ekstensi hingga otot rileks.</li>
<li>Pemeriksa menekan kaki pasien sehingga kaki pasien sedikit dorsofleksi.</li>
<li>Ketuk tendon Achilles dengan palu refleks.</li>
<li>Nilai adanya fleksi dorsum pedis atau ekstensi plantar pedis, bandingkan kanan dan kiri.</li>
</ol>

<h3>3. Refleks Superfisial</h3>

<h4>A. Refleks Abdominal</h4>
<ol style="list-style-type: lower-alpha;">
<li>Pasien berbaring dalam keadaan rileks.</li>
<li>Goreskan ujung lancip palu refleks dengan arah dari tepi ke umbilikus di enam regio abdomen (epigastrik, mesogastrik, hipogastrik, kanan dan kiri).</li>
<li>Nilai adanya pergerakan umbilikus yang disebabkan oleh adanya kontraksi otot abdomen.</li>
</ol>

<h4>B. Refleks Kremaster</h4>
<ol style="list-style-type: lower-alpha;">
<li>Pasien berbaring di atas meja periksa.</li>
<li>Goreskan ujung lancip palu refleks di daerah paha dalam dengan arah dari distal ke proksimal.</li>
<li>Nilai bila terlihat testis terangkat, bandingkan kanan dan kiri.</li>
</ol>

<h4>C. Refleks Anal</h4>
<ol style="list-style-type: lower-alpha;">
<li>Pasien berbaring dengan posisi litotomi.</li>
<li>Dengan perlahan, goreskan ujung lancip palu refleks di sekitar anus dengan gerakan melingkar.</li>
<li>Nilai adanya kontraksi dari muskulus sfingter ani eksternal.</li>
</ol>

<h4>D. Snout Refleks (Refleks Regresi)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Dengan perlahan ketukkan jari pemeriksa di antara hidung dan mulut pasien.</li>
<li>Nilai respon mulut pasien berupa gerakan mencucu.</li>
</ol>

<h2>B. Analisis Hasil Pemeriksaan</h2>

<h3>1. Penilaian Hasil Pemeriksaan Refleks</h3>
<table style="border-collapse: collapse; width: 100%; margin: 1rem 0;">
<tr><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Nilai</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Interpretasi</th></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">0</td><td style="border: 1px solid #ddd; padding: 8px;">Tidak ada refleks</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">1</td><td style="border: 1px solid #ddd; padding: 8px;">Refleks lemah</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">2</td><td style="border: 1px solid #ddd; padding: 8px;">Refleks normal</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">3</td><td style="border: 1px solid #ddd; padding: 8px;">Refleks cepat</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">4</td><td style="border: 1px solid #ddd; padding: 8px;">Refleks cepat dengan disertai klonus (beberapa kontraksi pendek dan ritmik)</td></tr>
</table>

<h3>2. Kelainan yang Dapat Ditemukan</h3>
<ol style="list-style-type: lower-alpha;">
<li><strong>Hiporefleksia:</strong> refleks menurun pada kelainan lower motor neuron.</li>
<li><strong>Arefleksia.</strong> Dapat disebabkan oleh:
  <ul>
  <li>Lesi yang melibatkan saraf tepi (jalur aferen dan/atau eferen lengkung refleks)</li>
  <li>Lesi pada bagian sentral (spinal root) dari lengkung refleks, seperti syringomalasia</li>
  <li>Fase akut dari cedera spinal</li>
  <li>Koma dalam</li>
  <li>Arefleksia kongenital, biasanya pada tungkai</li>
  </ul>
</li>
<li><strong>Hiperefleksia:</strong> refleks meningkat pada gangguan yang melibatkan upper motor neuron.</li>
<li><strong>Adanya klonus</strong> merupakan tanda patologis dan indikasi adanya lesi pada central motor neuron (CML) di atas refleks cabang spinal. Pada bayi baru lahir atau pasien dengan refleks yang sangat cepat, klonus bertahan selama 3–4 ketukan didapatkan di kedua sisi.</li>
</ol>`,
    references: [
      "Bickley. <em>Bates Guide to Physical Examination and History Taking, 8th Edition</em>. 2002–08.",
      "Duijnhoven, Bele. <em>Skills in Medicine: Neurology Examination</em>. 2009."
    ]
  },
  {
    id: 2,
    titleEn: "Pemeriksaan Sistem Motorik",
    titleId: "Pemeriksaan Sistem Motorik",
    summary: "Menilai postur, gerakan involunter, tonus otot, dan kekuatan otot.",
    content: `<h1>Pemeriksaan Sistem Motorik</h1>

<h3>Tujuan</h3>
<ol>
<li>Menilai postur dan habitus (lihat Bab II General Survey).</li>
<li>Menilai adanya gerakan involunter.</li>
<li>Menilai tonus otot.</li>
<li>Menilai kekuatan otot.</li>
</ol>

<h3>Alat dan Bahan</h3>
<ul>
<li>Tidak ada</li>
</ul>

<h2>A. Teknik Pemeriksaan</h2>

<h3>1. Persiapan</h3>
<ol>
<li>Siapkan alat dan bahan.</li>
<li>Jelaskan kepada pasien jenis dan prosedur pemeriksaan yang dilakukan.</li>
<li>Cuci tangan sebelum melakukan prosedur pemeriksaan.</li>
</ol>

<h3>2. Inspeksi</h3>
<ol>
<li>Minta pasien berdiri dengan santai.</li>
<li>Nilai postur tubuh pasien dan kontur otot. Amati tanda-tanda adanya hipertrofi maupun atrofi otot.</li>
<li>Nilai adanya gerakan involunter seperti tremor, fasikulasi, dan gerakan koreiform.</li>
</ol>

<h3>3. Penilaian Tonus Otot</h3>
<ol style="list-style-type: lower-alpha;">
<li>Persiapkan pasien dalam posisi berbaring, se-rileks mungkin.</li>
<li>Pegang lengan pasien dengan menempatkan tangan pemeriksa di sekitar pergelangan tangan pasien (hanya di sendi siku dan lutut; sendi-sendi besar). Siku dalam keadaan menempel pada meja periksa.</li>
<li>Tempatkan jari-jari pemeriksa pada tendon biceps.</li>
<li>Fleksi dan ekstensikan sendi siku beberapa kali.</li>
<li>Nilai tonus otot-otot lengan atas pasien dan bandingkan kanan dan kiri.</li>
<li>Nilai juga tonus otot-otot tungkai atas dengan fleksi dan ekstensi secara pasif sendi panggul dan lutut.</li>
</ol>

<h3>4. Penilaian Kekuatan Otot</h3>
<ol style="list-style-type: lower-alpha;">
<li>Untuk menilai kekuatan otot, pasien harus mengkontraksikan ototnya secara maksimal.</li>
<li>Coba untuk membuat tahanan terhadap otot yang diperiksa dengan menggunakan tangan pemeriksa.</li>
<li>Saat menilai kekuatan otot pasien, coba untuk membuat perbandingan dengan kekuatan pemeriksa.</li>
<li>Buat penilaian semi kuantitatif berdasarkan skala 0–5.</li>
</ol>

<h2>B. Area Pemeriksaan</h2>

<h3>1. Inspeksi</h3>
<p>Pemeriksaan inspeksi mencakup pengamatan menyeluruh terhadap sistem motorik pasien:</p>

<h4>a. Postur dan Sikap Tubuh</h4>
<ul>
<li>Amati postur tubuh pasien saat berdiri dan duduk (posisi kepala, bahu, tulang belakang, panggul).</li>
<li>Perhatikan simetri tubuh kanan dan kiri.</li>
<li>Identifikasi adanya deformitas atau kelainan bentuk skeletal (skoliosis, kifosis, lordosis).</li>
</ul>

<h4>b. Kontur dan Massa Otot</h4>
<ul>
<li><strong>Atrofi otot:</strong> pengecilan ukuran otot yang dapat menunjukkan denervasi, disuse, atau penyakit otot primer.</li>
<li><strong>Hipertrofi otot:</strong> pembesaran otot yang dapat terjadi akibat latihan fisik intensif atau kondisi patologis tertentu.</li>
<li><strong>Pseudohipertrofi:</strong> pembesaran otot palsu akibat penggantian jaringan otot dengan lemak atau jaringan fibrosa (misal pada distrofi otot Duchenne).</li>
<li>Bandingkan simetri massa otot kedua sisi tubuh.</li>
</ul>

<h4>c. Gerakan Abnormal dan Involunter</h4>
<ul>
<li><strong>Tremor:</strong> gerakan involunter berirama dan osilasi (resting, postural, intention).</li>
<li><strong>Chorea:</strong> gerakan cepat, tidak beraturan, tidak terduga, seperti menari.</li>
<li><strong>Athetosis:</strong> gerakan lambat, menggeliat, dan memutar terutama di ekstremitas distal.</li>
<li><strong>Mioklonus:</strong> kontraksi otot mendadak, singkat, seperti tersentak.</li>
<li><strong>Fasikulasi:</strong> kedutan otot halus yang terlihat di bawah kulit, menunjukkan iritasi motor neuron.</li>
<li><strong>Tic:</strong> gerakan cepat, stereotip, berulang yang dapat ditekan sementara secara volunter.</li>
<li><strong>Distonia:</strong> kontraksi otot involunter yang menyebabkan gerakan memutar dan postur abnormal.</li>
</ul>

<h4>d. Deformitas dan Kontraktur</h4>
<ul>
<li>Amati adanya kontraktur sendi (keterbatasan rentang gerak akibat fibrosis jaringan lunak).</li>
<li>Identifikasi deformitas tulang atau sendi (pes cavus, claw hand, drop foot).</li>
</ul>

<h3>2. Palpasi Otot</h3>
<p>Palpasi dilakukan untuk menilai karakteristik jaringan otot:</p>
<ul>
<li><strong>Tonus otot saat istirahat:</strong> raba otot dalam keadaan rileks untuk menilai konsistensi dan tegangan dasar.</li>
<li><strong>Konsistensi otot:</strong> otot normal teraba kenyal dan elastis; otot yang digantikan lemak/jaringan fibrotik teraba lebih lunak atau keras.</li>
<li><strong>Nyeri tekan:</strong> identifikasi area nyeri yang dapat menunjukkan inflamasi, trauma, atau miopati.</li>
<li><strong>Massa abnormal:</strong> deteksi benjolan, nodul, atau area pengerasan pada otot.</li>
</ul>

<h3>3. Pemeriksaan Tonus Otot</h3>
<p>Tonus otot adalah tahanan yang dirasakan saat menggerakkan ekstremitas pasien secara pasif. Pemeriksaan dilakukan dengan pasien dalam keadaan rileks:</p>

<h4>a. Teknik Pemeriksaan</h4>
<ul>
<li>Posisikan pasien berbaring dengan rileks.</li>
<li>Pegang ekstremitas pasien dan gerakkan sendi secara pasif (fleksi, ekstensi, rotasi) dengan kecepatan bervariasi.</li>
<li>Nilai tahanan yang dirasakan selama gerakan.</li>
<li>Periksa tonus pada sendi besar: siku, pergelangan tangan, lutut, pergelangan kaki.</li>
<li>Bandingkan tonus kanan dan kiri.</li>
</ul>

<h4>b. Kategori Tonus Otot</h4>
<ul>
<li><strong>Normal (Normotonia):</strong> tahanan halus dan konsisten selama rentang gerak.</li>
<li><strong>Hipotonia:</strong> penurunan tahanan, ekstremitas terasa lemas, rentang gerak berlebihan.<br/>
  Penyebab: lesi lower motor neuron, cerebellar disease, fase akut stroke.</li>
<li><strong>Hipertonia:</strong> peningkatan tahanan terhadap gerakan pasif, dapat berupa:
  <ul>
  <li><strong>Spastisitas (lesi upper motor neuron/piramidal):</strong> tahanan meningkat pada awal gerakan cepat kemudian tiba-tiba berkurang (<em>clasp-knife phenomenon</em>); lebih jelas pada otot fleksor lengan dan ekstensor tungkai; bergantung pada kecepatan gerakan.</li>
  <li><strong>Rigiditas (lesi ekstrapiramidal):</strong> tahanan konstan sepanjang rentang gerak, tidak bergantung kecepatan; dapat berupa:
    <ul>
    <li><em>Lead-pipe rigidity:</em> tahanan seragam dan halus seperti menekuk pipa timah.</li>
    <li><em>Cogwheel rigidity:</em> tahanan terpatah-patah seperti roda gigi (kombinasi rigiditas dan tremor), khas pada Parkinson.</li>
    </ul>
  </li>
  </ul>
</li>
</ul>

<h3>4. Pemeriksaan Kekuatan Otot (Motor Power)</h3>
<p>Kekuatan otot dinilai secara sistematis pada kelompok otot utama ekstremitas atas dan bawah menggunakan skala MRC (Medical Research Council) 0–5.</p>

<h4>a. Prinsip Pemeriksaan</h4>
<ul>
<li>Minta pasien melakukan gerakan aktif melawan tahanan pemeriksa.</li>
<li>Isolasi kelompok otot yang diperiksa.</li>
<li>Berikan tahanan yang bertahap meningkat.</li>
<li>Bandingkan kekuatan kanan dan kiri.</li>
<li>Catat hasil menggunakan skala MRC (lihat bagian C untuk interpretasi skala).</li>
</ul>

<h4>b. Area Pemeriksaan Ekstremitas Atas</h4>
<table style="border-collapse: collapse; width: 100%; margin: 1rem 0;">
<tr><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Otot/Gerakan</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Akar Saraf</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Cara Pemeriksaan</th></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Deltoid (abduksi bahu)</td><td style="border: 1px solid #ddd; padding: 8px;">C5, C6</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien abduksi lengan melawan tahanan ke bawah dari pemeriksa</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Biceps (fleksi siku)</td><td style="border: 1px solid #ddd; padding: 8px;">C5, C6</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien fleksi siku melawan tahanan ekstensi dari pemeriksa</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Triceps (ekstensi siku)</td><td style="border: 1px solid #ddd; padding: 8px;">C7, C8</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien ekstensi siku melawan tahanan fleksi dari pemeriksa</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Ekstensor pergelangan tangan</td><td style="border: 1px solid #ddd; padding: 8px;">C6, C7</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien ekstensi pergelangan melawan tahanan fleksi dari pemeriksa</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Fleksor pergelangan tangan</td><td style="border: 1px solid #ddd; padding: 8px;">C7, C8</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien fleksi pergelangan melawan tahanan ekstensi dari pemeriksa</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Otot intrinsik tangan (interossei, lumbricals)</td><td style="border: 1px solid #ddd; padding: 8px;">T1</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien abduksi/adduksi jari melawan tahanan; cengkeraman kuat</td></tr>
</table>

<h4>c. Area Pemeriksaan Ekstremitas Bawah</h4>
<table style="border-collapse: collapse; width: 100%; margin: 1rem 0;">
<tr><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Otot/Gerakan</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Akar Saraf</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Cara Pemeriksaan</th></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Iliopsoas (fleksi panggul)</td><td style="border: 1px solid #ddd; padding: 8px;">L1, L2, L3</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien fleksi panggul (angkat paha) melawan tahanan ke bawah dari pemeriksa</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Quadriceps (ekstensi lutut)</td><td style="border: 1px solid #ddd; padding: 8px;">L3, L4</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien ekstensi lutut melawan tahanan fleksi dari pemeriksa</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Hamstring (fleksi lutut)</td><td style="border: 1px solid #ddd; padding: 8px;">L5, S1</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien fleksi lutut melawan tahanan ekstensi dari pemeriksa</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Tibialis anterior (dorsofleksi kaki)</td><td style="border: 1px solid #ddd; padding: 8px;">L4, L5</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien dorsofleksi kaki melawan tahanan plantarfleksi dari pemeriksa</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Gastrocnemius (plantarfleksi kaki)</td><td style="border: 1px solid #ddd; padding: 8px;">S1, S2</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien plantarfleksi kaki melawan tahanan dorsofleksi; atau berjalan jinjit</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px;">Ekstensor hallucis longus (ekstensi ibu jari kaki)</td><td style="border: 1px solid #ddd; padding: 8px;">L5</td><td style="border: 1px solid #ddd; padding: 8px;">Pasien ekstensi ibu jari kaki melawan tahanan fleksi dari pemeriksa</td></tr>
</table>

<h3>5. Pemeriksaan Koordinasi</h3>
<p>Koordinasi motorik diatur oleh cerebellum dan sistem proprioseptif. Gangguan koordinasi disebut <em>ataksia</em>.</p>

<h4>a. Tes Finger-to-Nose (Jari-ke-Hidung)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Pasien diminta menyentuh hidungnya sendiri dengan ujung jari telunjuk.</li>
<li>Kemudian pasien diminta menyentuh jari pemeriksa yang diletakkan di depan pasien.</li>
<li>Ulangi gerakan bolak-balik dengan kecepatan meningkat.</li>
<li>Amati adanya <em>intention tremor</em> (tremor yang makin jelas saat mendekati target) atau <em>past-pointing</em> (melewati target).</li>
</ol>

<h4>b. Tes Heel-to-Shin (Tumit-ke-Tulang Kering)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Pasien berbaring terlentang.</li>
<li>Minta pasien mengangkat satu kaki dan meletakkan tumitnya di lutut kaki yang lain.</li>
<li>Kemudian tumit digeser menyusuri tulang kering ke arah pergelangan kaki.</li>
<li>Amati ketepatan dan kelancaran gerakan; pada ataksia gerakan menjadi kaku dan tidak teratur.</li>
</ol>

<h4>c. Tes Gerakan Bergantian Cepat (Dysdiadokokinesia)</h4>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien melakukan gerakan pronasi-supinasi tangan secara cepat dan bergantian (seperti membuka-tutup sekrup).</li>
<li>Atau minta pasien menepuk paha dengan telapak tangan dan punggung tangan secara bergantian dengan cepat.</li>
<li>Ketidakmampuan melakukan gerakan bergantian cepat secara teratur disebut <em>dysdiadokokinesia</em>, menunjukkan disfungsi cerebellar.</li>
</ol>

<h4>d. Tes Romberg</h4>
<ol style="list-style-type: lower-alpha;">
<li>Pasien berdiri dengan kaki rapat dan lengan di samping tubuh atau terbuka ke depan.</li>
<li>Minta pasien menutup mata.</li>
<li>Amati stabilitas postur selama 20–30 detik; bersiap menahan pasien jika jatuh.</li>
<li><strong>Romberg positif:</strong> pasien dapat mempertahankan keseimbangan dengan mata terbuka tetapi goyang/jatuh saat mata tertutup → menunjukkan gangguan proprioseptif (kolumna posterior medula spinalis, neuropati perifer).</li>
<li><strong>Ataksia cerebellar:</strong> pasien tidak stabil bahkan dengan mata terbuka; menutup mata memperburuk tetapi gangguan sudah ada sejak awal.</li>
</ol>

<h3>6. Pemeriksaan Gait (Cara Berjalan)</h3>
<p>Cara berjalan mencerminkan integrasi sistem motorik, sensorik, cerebellar, dan vestibular.</p>

<h4>a. Teknik Pemeriksaan</h4>
<ul>
<li>Minta pasien berjalan dengan kecepatan normal di ruang pemeriksaan.</li>
<li>Amati dari samping dan belakang.</li>
<li>Perhatikan: inisiasi berjalan, kecepatan, panjang langkah, simetri kanan-kiri, ayunan lengan, postur tubuh, stabilitas.</li>
<li>Minta pasien berjalan tandem (tumit-ke-jari kaki dalam garis lurus) untuk menilai keseimbangan lebih sensitif.</li>
<li>Minta pasien berjalan dengan tumit saja (heel walking) untuk menguji dorsofleksi kaki (L4-L5).</li>
<li>Minta pasien berjalan jinjit (toe walking) untuk menguji plantarfleksi kaki (S1-S2).</li>
</ul>

<h4>b. Pola Gait Abnormal</h4>
<table style="border-collapse: collapse; width: 100%; margin: 1rem 0;">
<tr><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Jenis Gait</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Karakteristik</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Penyebab</th></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Hemiplegic (Circumduction)</td><td style="border: 1px solid #ddd; padding: 8px;">Kaki di sisi lesi ekstensi kaku, diayunkan melingkar dari pinggul; lengan fleksi dan adduksi ke tubuh</td><td style="border: 1px solid #ddd; padding: 8px;">Stroke, lesi upper motor neuron unilateral</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Spastic (Scissor Gait)</td><td style="border: 1px solid #ddd; padding: 8px;">Kedua tungkai kaku, ekstensi, adduksi; kaki bersilangan saat berjalan; langkah pendek dan kaku</td><td style="border: 1px solid #ddd; padding: 8px;">Cerebral palsy spastic diplegia, myelopathy</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Steppage (Foot Drop)</td><td style="border: 1px solid #ddd; padding: 8px;">Kaki tidak dapat dorsofleksi; pasien mengangkat lutut tinggi agar jari kaki tidak menyeret; kaki jatuh dengan bunyi tampak saat mendarat</td><td style="border: 1px solid #ddd; padding: 8px;">Kelemahan tibialis anterior; lesi saraf peroneal, L5 radiculopathy</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Waddling (Myopathic)</td><td style="border: 1px solid #ddd; padding: 8px;">Panggul turun bergantian (Trendelenburg); badan bergoyang kanan-kiri seperti bebek; lordosis lumbal</td><td style="border: 1px solid #ddd; padding: 8px;">Kelemahan otot gluteus medius/proximal hip; distrofi otot, miopati</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Ataxic (Cerebellar)</td><td style="border: 1px solid #ddd; padding: 8px;">Gaya berjalan tidak stabil, melebar (wide-based); langkah tidak teratur, seperti orang mabuk; sulit berjalan tandem</td><td style="border: 1px solid #ddd; padding: 8px;">Disfungsi cerebellar; alkohol, multiple sclerosis, stroke cerebellar</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Parkinsonian (Festinating)</td><td style="border: 1px solid #ddd; padding: 8px;">Postur membungkuk; langkah kecil dan cepat (festination); kesulitan memulai dan berhenti; berkurangnya ayunan lengan; dapat disertai tremor</td><td style="border: 1px solid #ddd; padding: 8px;">Penyakit Parkinson, parkinsonisme</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Sensory Ataxic</td><td style="border: 1px solid #ddd; padding: 8px;">Gait tidak stabil dengan langkah yang "membanting" kaki ke lantai (stamping); membaik dengan melihat kaki; memburuk dengan mata tertutup (Romberg positif)</td><td style="border: 1px solid #ddd; padding: 8px;">Gangguan proprioseptif; tabes dorsalis, neuropati perifer, gangguan kolumna posterior</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Antalgic</td><td style="border: 1px solid #ddd; padding: 8px;">Fase stance pendek pada sisi yang nyeri; pasien cepat memindahkan berat ke sisi yang sehat</td><td style="border: 1px solid #ddd; padding: 8px;">Nyeri sendi, fraktur, artritis</td></tr>
</table>

<h2>C. Analisis Hasil Pemeriksaan</h2>

<h3>1. Atrofi Otot</h3>
<p>Atrofi otot dapat ditemukan pada:</p>
<ol style="list-style-type: lower-alpha;">
<li>Penyakit kronis dan malnutrisi</li>
<li>Penyakit muskular</li>
<li>Setelah kerusakan saraf perifer</li>
<li>Setelah kerusakan traktus kortikospinal</li>
</ol>
<p>Bentuk atrofi dapat berupa:</p>
<ol style="list-style-type: lower-alpha;">
<li>Atrofi asimetris terjadi pada contohnya mononeuropathy.</li>
<li>Atrofi simetris terjadi pada contohnya penyakit muskular.</li>
</ol>

<h3>2. Gerakan Involunter</h3>

<h4>a. Fasikulasi</h4>
<p>Fasikulasi merupakan kontraksi otot yang tidak beraturan. Keadaan ini dapat mengindikasikan adanya lesi motor neuron (contohnya poliomielitis, amyotrophic lateral sclerosis) namun dapat juga tidak memiliki makna patologis.</p>

<h4>b. Tremor</h4>
<p>Tremor merupakan gerakan involunter yang relatif berirama, yang kurang lebih dapat dibagi menjadi tiga kelompok:</p>
<table style="border-collapse: collapse; width: 100%; margin: 1rem 0;">
<tr><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Jenis Tremor</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Karakteristik</th></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Resting (Static) Tremors</td><td style="border: 1px solid #ddd; padding: 8px;">Tremor ini paling mencolok saat istirahat dan dapat berkurang atau menghilang dengan adanya pergerakan.<br/>→ khas pada Parkinson</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Postural Tremors</td><td style="border: 1px solid #ddd; padding: 8px;">Tremor ini terlihat saat bagian yang terkena aktif menjaga postur.<br/>→ contoh: hipertiroid, kecemasan, kelelahan</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Intention Tremors</td><td style="border: 1px solid #ddd; padding: 8px;">Merupakan tremor yang hilang saat istirahat dan timbul saat aktivitas dan semakin memburuk bila target yang akan disentuh semakin dekat.<br/>→ menunjukkan gangguan cerebellum (misalnya multiple sclerosis)</td></tr>
</table>

<figure style="margin: 1.5rem 0; text-align: center;">
<img src="images/motor/tremor.png" alt="Tremor" style="max-width: 100%; height: auto; max-width: 600px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
<figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666; font-style: italic;">Tremor</figcaption>
</figure>

<h4>c. Tics</h4>
<p>Tics merupakan gerakan yang singkat, berulang, stereotip, gerakan terkoordinasi yang terjadi pada interval yang tidak teratur.</p>
<ul>
<li>Contoh: berulang mengedip, meringis, dan mengangkat bahu</li>
<li>Dapat ditekan sementara oleh pasien</li>
<li>Sering disertai dorongan (urge) sebelum gerakan</li>
</ul>
<p>Penyebab termasuk sindrom seperti Tourette, serta obat-obatan seperti fenotiazin dan amfetamin.</p>

<figure style="margin: 1.5rem 0; text-align: center;">
<img src="images/motor/tic.png" alt="Tics" style="max-width: 100%; height: auto; max-width: 600px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
<figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666; font-style: italic;">Tics</figcaption>
</figure>

<h4>d. Gerakan Choreiform (Chorea)</h4>
<p>Gerakan choreiform merupakan gerakan yang singkat, cepat, tidak teratur, dan tak terduga.</p>
<ul>
<li>Terjadi saat istirahat atau mengganggu gerakan terkoordinasi normal</li>
<li>Tidak seperti tics, chorea jarang berulang</li>
<li>Wajah, kepala, lengan bawah, dan tangan sering terlibat</li>
</ul>
<p>Penyebabnya termasuk:</p>
<ul>
<li>Chorea Sydenham (demam rematik)</li>
<li>Penyakit Huntington</li>
</ul>

<figure style="margin: 1.5rem 0; text-align: center;">
<img src="images/motor/chorea.png" alt="Gerakan Choreiform (Chorea)" style="max-width: 100%; height: auto; max-width: 600px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
<figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666; font-style: italic;">Gerakan Choreiform (Chorea)</figcaption>
</figure>

<h4>e. Athetosis</h4>
<p>Gerakan athetoid lebih lambat dan lebih memutar dan menggeliat dibandingkan gerakan choreiform, dan memiliki amplitudo yang lebih besar.</p>
<ul>
<li>Paling sering melibatkan wajah dan ekstremitas distal</li>
<li>Sering dikaitkan dengan spastisitas</li>
</ul>
<p>Penyebabnya antara lain:</p>
<ul>
<li>Cerebral palsy</li>
</ul>

<figure style="margin: 1.5rem 0; text-align: center;">
<img src="images/motor/athetosis.png" alt="Athetosis" style="max-width: 100%; height: auto; max-width: 600px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
<figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666; font-style: italic;">Athetosis</figcaption>
</figure>

<h3>3. Penilaian Tonus Otot</h3>
<ol style="list-style-type: lower-alpha;">
<li><strong>Rigiditas:</strong> adanya tahanan pada seluruh pergerakan → sistem ekstrapiramidal</li>
<li><strong>Spastisitas:</strong> adanya tahanan pada bagian tertentu → sistem piramidal</li>
<li><strong>Hipotonia:</strong> penurunan tonus otot</li>
</ol>

<h3>4. Penilaian Kekuatan Otot (Skala 0–5)</h3>
<table style="border-collapse: collapse; width: 100%; margin: 1rem 0;">
<tr><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Skala</th><th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Interpretasi</th></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">0</td><td style="border: 1px solid #ddd; padding: 8px;">Tidak ada pergerakan sama sekali, tonus otot tidak teraba</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">1</td><td style="border: 1px solid #ddd; padding: 8px;">Tonus otot teraba namun tidak ada pergerakan</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">2</td><td style="border: 1px solid #ddd; padding: 8px;">Terdapat pergerakan namun tidak dapat melawan gravitasi</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">3</td><td style="border: 1px solid #ddd; padding: 8px;">Melawan gravitasi tanpa tahanan</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">4</td><td style="border: 1px solid #ddd; padding: 8px;">Melawan tahanan ringan</td></tr>
<tr><td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">5</td><td style="border: 1px solid #ddd; padding: 8px;">Melawan tahanan maksimal</td></tr>
</table>`,
    references: [
      "Bickley. <em>Bates Guide to Physical Examination and History Taking 8th Edition</em>. 2002–08.",
      "Duijnhoven, Bele. <em>Skills in Medicine: Neurology Examination</em>. 2009."
    ]
  },
  {
    id: 3,
    titleEn: "Pemeriksaan Refleks Patologis",
    titleId: "Pemeriksaan Refleks Patologis",
    summary: "Melakukan pemeriksaan Hofmann Tromner, Babinski, Oppenheim, Chaddock, Gordon, Schaefer, dan Gonda.",
    content: `<h1>Pemeriksaan Refleks Patologis</h1>

<h3>Tujuan</h3>
<p>Melakukan pemeriksaan:</p>
<ol>
<li>Hofmann Tromner</li>
<li>Babinski</li>
<li>Oppenheim</li>
<li>Chaddock</li>
<li>Gordon</li>
<li>Schaefer</li>
<li>Gonda</li>
</ol>

<h3>Alat dan Bahan</h3>
<ul>
<li>Palu refleks</li>
</ul>

<h2>A. Teknik Pemeriksaan</h2>

<h3>1. Persiapan</h3>
<ol>
<li>Siapkan alat dan bahan.</li>
<li>Jelaskan kepada pasien jenis dan prosedur pemeriksaan yang dilakukan.</li>
<li>Mencuci tangan.</li>
</ol>

<h3>2. Pemeriksaan Refleks</h3>

<h4>A. Refleks Hoffman Tromner</h4>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien untuk melakukan hiperekstensi di pergelangan tangannya, kemudian ujung jari tengah disentil (snapped).</li>
<li>Lihat gerakan jari lainnya, hasil positif adalah bila jari-jari fleksi dan ibu jari adduksi.</li>
</ol>
<p>Kemudian, minta pasien berbaring di meja periksa dengan kedua tungkai diluruskan.</p>

<h4>B. Refleks Babinski</h4>
<ol style="list-style-type: lower-alpha;">
<li>Pemeriksa memegang pergelangan kaki untuk memfiksasi kaki pasien.</li>
<li>Gunakan ujung tajam palu refleks untuk menggores telapak kaki bagian lateral, mulai tumit menuju pangkal jempol kaki.</li>
<li>Goresan dilakukan secara perlahan dan tidak sampai mengakibatkan rasa nyeri.</li>
</ol>
<p>Lakukan prosedur pemeriksaan ini pada kaki lainnya dan bandingkan hasilnya.</p>

<figure style="margin: 1.5rem 0; text-align: center;">
<img src="images/reflex/refleks-babinski.png" alt="Refleks Babinski" style="max-width: 100%; height: auto; max-width: 600px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
<figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666; font-style: italic;">Refleks Babinski</figcaption>
</figure>

<h4>C. Refleks Chaddock</h4>
<p>Rangsangan diberikan dengan cara menggoreskan ujung runcing palu refleks di bagian lateral maleolus.</p>

<figure style="margin: 1.5rem 0; text-align: center;">
<img src="images/reflex/refleks-chaddock.png" alt="Refleks Chaddock" style="max-width: 100%; height: auto; max-width: 600px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
<figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666; font-style: italic;">Refleks Chaddock</figcaption>
</figure>

<h4>D. Refleks Oppenheim</h4>
<p>Rangsangan diberikan dengan mengurut dengan kuat tibia dan otot tibialis anterior dari arah proksimal ke distal.</p>

<figure style="margin: 1.5rem 0; text-align: center;">
<img src="images/reflex/refleks-oppenheim.png" alt="Refleks Oppenheim" style="max-width: 100%; height: auto; max-width: 600px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
<figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666; font-style: italic;">Refleks Oppenheim</figcaption>
</figure>

<h4>E. Refleks Gordon</h4>
<p>Rangsangan diberikan dengan mencubit otot gastroknemius.</p>

<figure style="margin: 1.5rem 0; text-align: center;">
<img src="images/reflex/refleks-gordon.png" alt="Refleks Gordon" style="max-width: 100%; height: auto; max-width: 600px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
<figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666; font-style: italic;">Refleks Gordon</figcaption>
</figure>

<h4>F. Refleks Schaefer</h4>
<p>Rangsangan diberikan dengan mencubit tendon Achilles.</p>

<figure style="margin: 1.5rem 0; text-align: center;">
<img src="images/reflex/refleks-scaeffer.png" alt="Refleks Scaeffer" style="max-width: 100%; height: auto; max-width: 600px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
<figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666; font-style: italic;">Refleks Scaeffer</figcaption>
</figure>

<h4>G. Refleks Gonda</h4>
<p>Rangsangan diberikan dengan menekan salah satu jari kaki dan melepaskannya.</p>

<h2>B. Analisis Hasil Pemeriksaan</h2>
<p>Refleks Hoffman Tromner positif bilateral pada 25% orang normal, sedangkan bila unilateral merupakan indikasi lesi UMN di atas segmen servikal VI.</p>
<p>Refleks dikatakan positif apabila pada saat dilakukan manuver-manuver di atas didapatkan gerakan dorsofleksi ibu jari kaki yang dapat disertai dengan gerak mekarnya jari-jari lainnya. Refleks-refleks ini positif pada lesi traktus piramidalis.</p>`,
    references: [
      "Bickley, LS. Szilagyi PG: <em>Bates' Guide to Physical Examination and History Taking, 10th edition</em>. Lippincott Williams & Wilkins, China, 2009.",
      "Duijnhoven, Belle. <em>Skills in Medicine: The Neurology Examination</em>. 2009.",
      "Lumbantobing. <em>Neurologi Klinik Pemeriksaan Fisik dan Mental</em>. Jakarta: Balai Penerbit FKUI, 2008. p. 46–47."
    ]
  },
  {
    id: 4,
    titleEn: "Pemeriksaan Neurologis Lainnya: Patrick dan Kontra Patrick",
    titleId: "Pemeriksaan Neurologis Lainnya: Patrick dan Kontra Patrick",
    summary: "Melakukan pemeriksaan Patrick dan kontra Patrick.",
    content: `<h1>Pemeriksaan Neurologis Lainnya: Patrick dan Kontra Patrick</h1>

<h3>Tujuan</h3>
<p>Melakukan pemeriksaan Patrick dan kontra Patrick.</p>

<h3>Alat dan Bahan</h3>
<ul>
<li>Tidak ada</li>
</ul>

<h2>A. Teknik Pemeriksaan</h2>

<h3>1. Persiapan</h3>
<ol>
<li>Siapkan alat dan bahan.</li>
<li>Jelaskan kepada pasien jenis dan prosedur pemeriksaan yang dilakukan.</li>
<li>Minta pasien berbaring di meja periksa dengan kedua tungkai diluruskan.</li>
</ol>

<h3>2. Patrick's Sign</h3>
<ol style="list-style-type: lower-alpha;">
<li>Pemeriksa melakukan fleksi sendi lutut, abduksi, dan internal rotasi pada salah satu tungkai pasien.</li>
<li>Salah satu tangan pemeriksa diletakkan pada anterior superior os iliaka untuk menstabilkan panggul, sedangkan tangan lainnya diletakkan pada lutut pasien yang fleksi kemudian ditekan.</li>
<li>Nilai adakah nyeri dan lokasinya, bandingkan tungkai kanan dan kiri.</li>
</ol>

<figure style="margin: 1.5rem 0; text-align: center;">
<img src="images/patrick-sign.png" alt="Patrick's Sign" style="max-width: 100%; height: auto; max-width: 600px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
<figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #666; font-style: italic;">Patrick's Sign</figcaption>
</figure>

<h3>3. Contra-Patrick's Sign</h3>
<ol style="list-style-type: lower-alpha;">
<li>Pemeriksa melakukan fleksi sendi lutut, abduksi, dan eksternal rotasi pada salah satu tungkai pasien.</li>
<li>Salah satu tangan pemeriksa diletakkan pada anterior superior os iliaka untuk menstabilkan panggul, sedangkan tangan lainnya diletakkan pada lutut pasien yang fleksi kemudian ditekan.</li>
<li>Nilai adakah nyeri dan lokasinya, bandingkan tungkai kanan dan kiri.</li>
</ol>

<h2>B. Analisis Hasil Pemeriksaan</h2>

<h3>1. Patrick's Sign</h3>
<p>Pemeriksaan ini dilakukan untuk mengevaluasi kelainan pada sendi panggul atau sendi sakroiliaka.</p>
<p>Jika rasa nyeri timbul pada sisi ipsilateral anterior, maka hal ini menandakan adanya gangguan sendi panggul pada sisi ipsilateral.</p>
<p>Jika nyeri timbul pada sisi kontralateral posterior sekitar sendi panggul, maka hal ini menandakan adanya kelainan pada sendi tersebut.</p>

<h3>2. Contra-Patrick's Sign</h3>
<p>Pemeriksaan ini merupakan kebalikan dari tindakan Patrick's sign.</p>
<p>Bila nyeri timbul pada pemeriksaan ini, maka hal ini menandakan adanya kelainan pada sendi sakroiliaka.</p>`,
    references: [
      "Buckup K. <em>Clinical Test for the Musculoskeletal System: Examinations–Signs–Phenomena. 2nd ed</em>. Stuttgart: Thieme; 2008."
    ]
  },
  {
    id: 5,
    titleEn: "Pemeriksaan Koordinasi",
    titleId: "Pemeriksaan Koordinasi",
    summary: "Menilai fungsi koordinasi.",
    content: `<h1>Pemeriksaan Koordinasi</h1>

<h3>Tujuan</h3>
<p>Menilai fungsi koordinasi.</p>

<h3>Alat dan Bahan</h3>
<ul>
<li>Tidak ada</li>
</ul>

<h2>A. Teknik Pemeriksaan</h2>

<h3>1. Persiapan</h3>
<ol>
<li>Jelaskan kepada pasien jenis pemeriksaan yang akan dilakukan dan prosedurnya.</li>
</ol>

<h3>2. Inspeksi Cara Berjalan (Gait)</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien untuk berjalan melintasi ruangan beberapa kali.</li>
<li>Amati cara berjalan pasien, pola kontak kaki dengan lantai, ayunan tangan, dan lebar langkah.</li>
</ol>

<h3>3. Pemeriksaan Tandem Gait</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien untuk berjalan dalam satu garis lurus dengan cara ujung tumit menyentuh ujung jempol kaki di belakangnya. Bila dibutuhkan, berikan contoh kepada pasien.</li>
<li>Amati cara berjalan pasien. Perhatikan bilamana pasien terlihat kehilangan keseimbangan.</li>
</ol>

<h3>4. Tes Romberg dan Romberg Dipertajam</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien berdiri dengan kedua kaki dirapatkan.</li>
<li>Pemeriksa berdiri di belakang pasien dengan posisi tangan pemeriksa berada di sisi pasien tanpa menyentuhnya.</li>
<li>Minta pasien untuk merentangkan kedua tangannya ke depan sejajar bahu dengan posisi supinasi.</li>
<li>Instruksikan kepada pasien untuk mempertahankan posisi kedua tangannya.</li>
<li>Bila pasien tidak terjatuh saat dilakukan pemeriksaan dengan mata terbuka, minta pasien untuk menutup kedua matanya.</li>
<li>Amati bila pasien kehilangan keseimbangan atau terjatuh. Nilai arah jatuh atau ayunan pasien.</li>
</ol>

<h3>5. Tes Telunjuk–Hidung</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien menutup mata dan merentangkan tangan kanan jauh ke samping.</li>
<li>Minta pasien menyentuh hidungnya dengan jari telunjuk kanan, ulangi beberapa kali. Lakukan prosedur yang sama terhadap tangan kiri.</li>
<li>Nilai tanda-tanda hipermetria atau kecenderungan tremor saat pasien melakukan prosedur di atas.</li>
<li>Nilai apakah dengan mata terbuka pasien lebih mudah melakukan prosedur pemeriksaan.</li>
<li>Bandingkan kanan dan kiri.</li>
</ol>

<h3>6. Tes Tumit–Lutut</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien untuk menutup kedua matanya, kemudian menempatkan tumit kanan di atas lutut kiri.</li>
<li>Minta pasien untuk menurunkan tumitnya menyusuri tungkai bawah kaki kiri ke bawah.</li>
<li>Lakukan prosedur bergantian dengan kaki kiri.</li>
<li>Nilai bila pasien menunjukkan tanda-tanda hipermetria atau ataksia, yaitu bila tumit berkali-kali terjatuh dari jalurnya pada tungkai bawah.</li>
<li>Bila pemeriksa menemukan tanda hipermetria atau ataksia, minta pasien melakukan prosedur pemeriksaan dengan mata terbuka.</li>
<li>Bandingkan kanan dan kiri.</li>
</ol>

<h3>7. Pemeriksaan Disdiadokokinesis</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien melakukan gerakan tangan pronasi dan supinasi. Tangan kanan dimulai dari pronasi, tangan kiri dimulai dari supinasi, lakukan gerakan ini secepat mungkin.</li>
<li>Bila diperlukan pemeriksa boleh memberikan contoh pemeriksaan terhadap pasien.</li>
<li>Bandingkan kanan dan kiri.</li>
</ol>

<h2>B. Analisis Hasil Pemeriksaan</h2>
<ol>
<li>Keseimbangan pasien dipengaruhi oleh fungsi cerebellum dan sistem vestibular, serta proprioseptif ekstremitas bawah, sehingga kelainan pada keseimbangan berhubungan dengan gangguan pada sistem-sistem tersebut.</li>
<li>Pola kontak kaki-lantai. Kondisi yang berhubungan dengan N. peroneal dapat menyebabkan drop foot. Pada keadaan ini, saat berjalan bagian kaki pasien yang lebih dulu menyentuh lantai adalah jempol kaki, diikuti telapak kaki, terakhir tumit.</li>
<li>Jarak antar langkah dapat memendek pada pasien dengan penyakit Parkinson. Pada keadaan ini juga dapat dilihat ayunan tangan berkurang saat pasien berjalan.</li>
<li>Pada pemeriksaan Romberg, dinyatakan positif bila pasien terlihat berayun atau pemeriksa harus memegang pasien untuk mencegah pasien terjatuh.</li>
<li>Apabila pasien terganggu koordinasinya hanya saat pasien menutup mata, maka pasien mengalami gangguan koordinasi karena proprioseptif yang tidak adekuat. Kondisi ini juga dikenal dengan ataksia sensoris.</li>
<li>Bila gangguan koordinasi meningkat saat pasien menutup mata, maka pasien mengalami gangguan koordinasi disebabkan oleh kondisi vestibular.</li>
<li>Bila gangguan koordinasi sama saat pasien menutup maupun membuka mata, maka gangguan koordinasi ini disebabkan oleh kondisi cerebelar.</li>
<li>Tes telunjuk hidung tidak terganggu pada pasien dengan gangguan ekstrapiramidal, namun mungkin terdapat tremor yang hilang bila pasien diminta melakukan gerakan yang bertujuan. Namun saat berdiri dan berjalan, pasien mengalami kesulitan akibat adanya gerakan involunter yang berlebihan, seperti pada pasien Parkinson.</li>
</ol>`,
    references: [
      "Bickley. <em>Bates Guide to Physical Examination and History Taking, 8th Edition</em>. 2002–08.",
      "Duijnhoven, Bele. <em>Skills in Medicine: Neurology Examination</em>. 2009."
    ]
  },
  {
    id: 6,
    titleEn: "Pemeriksaan Fungsi Luhur",
    titleId: "Pemeriksaan Fungsi Luhur",
    summary: "Menilai fungsi koordinasi.",
    content: `<h1>Pemeriksaan Fungsi Luhur</h1>

<h3>Tujuan</h3>
<p>Menilai fungsi koordinasi.</p>

<h3>Alat dan Bahan</h3>
<ul>
<li>Tidak ada</li>
</ul>

<h2>A. Teknik Pemeriksaan</h2>

<h3>1. Persiapan</h3>
<ol>
<li>Jelaskan kepada pasien jenis pemeriksaan yang akan dilakukan dan prosedurnya.</li>
</ol>

<h3>2. Inspeksi Cara Berjalan (Gait)</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien untuk berjalan melintasi ruangan beberapa kali.</li>
<li>Amati cara berjalan pasien, pola kontak kaki dengan lantai, ayunan tangan, dan lebar langkah.</li>
</ol>

<h3>3. Pemeriksaan Tandem Gait</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien untuk berjalan dalam satu garis lurus dengan cara ujung tumit menyentuh ujung jempol kaki di belakangnya. Bila dibutuhkan, berikan contoh kepada pasien.</li>
<li>Amati cara berjalan pasien. Perhatikan bilamana pasien terlihat kehilangan keseimbangan.</li>
</ol>

<h3>4. Tes Romberg dan Romberg Dipertajam</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien berdiri dengan kedua kaki dirapatkan.</li>
<li>Pemeriksa berdiri di belakang pasien dengan posisi tangan pemeriksa berada di sisi pasien tanpa menyentuhnya.</li>
<li>Minta pasien untuk merentangkan kedua tangannya ke depan sejajar bahu dengan posisi supinasi.</li>
<li>Instruksikan kepada pasien untuk mempertahankan posisi kedua tangannya.</li>
<li>Bila pasien tidak terjatuh saat dilakukan pemeriksaan dengan mata terbuka, minta pasien untuk menutup kedua matanya.</li>
<li>Amati bila pasien kehilangan keseimbangan atau terjatuh. Nilai arah jatuh atau ayunan pasien.</li>
</ol>

<h3>5. Tes Telunjuk–Hidung</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien menutup mata dan merentangkan tangan kanan jauh ke samping.</li>
<li>Minta pasien menyentuh hidungnya dengan jari telunjuk kanan, ulangi beberapa kali. Lakukan prosedur yang sama terhadap tangan kiri.</li>
<li>Nilai tanda-tanda hipermetria atau kecenderungan tremor saat pasien melakukan prosedur di atas.</li>
<li>Bila pemeriksa menemukan tanda hipermetria atau tremor, minta pasien melakukan prosedur pemeriksaan dengan mata terbuka.</li>
<li>Nilai apakah dengan mata terbuka pasien lebih mudah melakukan prosedur pemeriksaan. Bandingkan kanan dan kiri.</li>
</ol>

<h3>6. Tes Tumit–Lutut</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien untuk menutup kedua matanya, kemudian menempatkan tumit kanan di atas lutut kiri.</li>
<li>Minta pasien untuk menurunkan tumitnya menyusuri tungkai bawah kaki kiri ke bawah.</li>
<li>Lakukan prosedur bergantian dengan kaki kiri.</li>
<li>Nilai bila pasien menunjukkan tanda-tanda hipermetria atau ataksia, yaitu bila tumit berkali-kali terjatuh dari jalurnya pada tungkai bawah.</li>
<li>Bila pemeriksa menemukan tanda hipermetria atau ataksia, minta pasien melakukan prosedur pemeriksaan dengan mata terbuka.</li>
<li>Bandingkan kanan dan kiri.</li>
</ol>

<h3>7. Pemeriksaan Disdiadokokinesis</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien melakukan perubahan gerakan misalnya gerakan tangan pronasi dan supinasi. Tangan kanan dimulai dari pronasi, tangan kiri dimulai dari supinasi, lakukan gerakan ini secepat mungkin.</li>
<li>Bila diperlukan pemeriksa boleh memberikan contoh pemeriksaan terhadap pasien.</li>
<li>Bandingkan kanan dan kiri.</li>
</ol>

<h2>B. Analisis Hasil Pemeriksaan</h2>
<ol>
<li>Keseimbangan pasien dipengaruhi oleh fungsi cerebellum dan sistem vestibular, serta proprioseptif ekstremitas bawah, sehingga kelainan pada keseimbangan berhubungan dengan gangguan pada sistem-sistem tersebut.</li>
<li>Pola kontak kaki-lantai. Kondisi yang berhubungan dengan n. peroneal dapat menyebabkan drop foot. Pada keadaan ini, saat berjalan bagian kaki pasien yang lebih dulu menyentuh lantai adalah jempol kaki, diikuti telapak kaki, terakhir tumit.</li>
<li>Jarak antar langkah dapat memendek pada pasien dengan penyakit Parkinson. Pada keadaan ini juga dapat dilihat ayunan tangan berkurang saat pasien berjalan.</li>
<li>Pada pemeriksaan Romberg, dinyatakan positif bila pasien terlihat berayun atau pemeriksa harus memegang pasien untuk mencegah pasien terjatuh.</li>
<li>Apabila pasien terganggu koordinasinya hanya saat pasien menutup mata, maka pasien mengalami gangguan koordinasi karena proprioseptif yang tidak adekuat. Kondisi ini juga dikenal dengan ataksia sensoris.</li>
<li>Bila gangguan koordinasi meningkat saat pasien menutup mata, maka pasien mengalami gangguan koordinasi disebabkan oleh kondisi vestibular.</li>
<li>Bila gangguan koordinasi sama saat pasien menutup maupun membuka mata, maka gangguan koordinasi ini disebabkan oleh kondisi cerebelar.</li>
<li>Tes telunjuk hidung tidak terganggu pada pasien dengan gangguan ekstrapiramidal, namun mungkin terdapat tremor yang hilang bila pasien diminta melakukan gerakan yang bertujuan. Namun saat berdiri dan berjalan, pasien mengalami kesulitan akibat adanya gerakan involunter yang berlebihan, seperti pada pasien Parkinson.</li>
</ol>`,
    references: [
      "Bickley. <em>Bates Guide to Physical Examination and History Taking, 8th Edition</em>. 2002–08.",
      "Duijnhoven, Bele. <em>Skills in Medicine: Neurology Examination</em>. 2009."
    ]
  },
  {
    id: 7,
    titleEn: "Pemeriksaan Sistem Sensorik (Eksteroseptif dan Proprioseptif)",
    titleId: "Pemeriksaan Sistem Sensorik (Eksteroseptif dan Proprioseptif)",
    summary: "Menilai fungsi sistem sensorik.",
    content: `<h1>Pemeriksaan Sistem Sensorik (Eksteroseptif dan Proprioseptif)</h1>

<h3>Tujuan</h3>
<p>Menilai fungsi sistem sensorik.</p>

<h3>Alat dan Bahan</h3>
<ol>
<li>Tusuk gigi</li>
<li>Cotton bud</li>
<li>Dua buah tabung reaksi</li>
<li>Air panas</li>
<li>Air dingin</li>
<li>Garpu tala</li>
</ol>

<h2>A. Teknik Pemeriksaan</h2>
<p>Disusun berdasar dermatom, mulai dari C3 untuk rangsang nyeri, raba halus, dan suhu.</p>

<h3>1. Persiapan</h3>
<ol>
<li>Siapkan alat dan bahan.</li>
<li>Jelaskan kepada pasien jenis pemeriksaan yang akan dilakukan dan prosedurnya.</li>
</ol>

<h3>2. Penilaian Sensasi Nyeri</h3>
<ol style="list-style-type: lower-alpha;">
<li>Biarkan pasien merasakan perbedaan rangsangan saat pemeriksa menekan ujung runcing tusuk gigi dan ujung tumpul cotton bud pada area dimana pemeriksa yakin tidak terdapat defisit sensorik.</li>
<li>Minta pasien menutup mata.</li>
<li>Kemudian lakukan prosedur ini di beberapa tempat dengan menekankan ujung tajam tusuk gigi dan ujung tumpul cotton bud secara bergantian dan acak. Tanyakan kepada pasien setiap pemeriksa menekankan salah satu benda di atas, apakah pasien merasakan tajam atau tumpul.</li>
<li>Apabila terdapat gangguan membedakan sensasi tajam dan tumpul, gunakan istilah hipalgesia atau analgesia dan catat bagian tubuh yang mengalami gangguan.</li>
</ol>

<h3>3. Penilaian Sensasi Suhu</h3>
<ol style="list-style-type: lower-alpha;">
<li>Pada pemeriksaan ini, siapkan dua buah tabung reaksi yang berisi air dingin dan air panas.</li>
<li>Biarkan pasien merasakan perbedaan rangsangan suhu yang diberikan pada area dimana pemeriksa yakin tidak terdapat defisit sensorik.</li>
<li>Minta pasien menutup mata.</li>
<li>Sentuhkan rangsangan panas dan dingin di beberapa area pada tubuh pasien, tanyakan apa yang pasien rasakan setiap kali memberikan rangsangan.</li>
<li>Catat bagian tubuh mana saja yang mengalami gangguan dalam membedakan rangsangan suhu.</li>
</ol>

<h3>4. Penilaian Sensasi Raba Halus</h3>
<ol style="list-style-type: lower-alpha;">
<li>Untuk pemeriksaan ini, gunakan ujung cotton bud.</li>
<li>Minta pasien untuk menutup mata.</li>
<li>Selalu sentuh pasien dengan sentuhan ringan, jangan ditekan.</li>
<li>Minta pasien mengatakan "ya" setiap kali pasien merasakan kontak.</li>
<li>Minta pasien untuk menyebutkan bila pasien merasakan sensasi yang berbeda saat disentuh.</li>
<li>Catat bagian tubuh mana saja yang mengalami gangguan dalam membedakan rangsangan suhu.</li>
</ol>

<h3>5. Penilaian Rasa Posisi (Proprioseptif)</h3>
<ol style="list-style-type: lower-alpha;">
<li>Minta pasien menutup mata.</li>
<li>Pegang jempol kaki pasien di antara jempol dan jari telunjuk pemeriksa.</li>
<li>Pastikan bahwa pemeriksa tidak menyentuh jari pasien yang lainnya.</li>
<li>Gerakkan jempol kaki pasien dan tanyakan bila pasien merasakan gerakan tersebut dan menyebutkan arahnya.</li>
<li>Lakukan juga prosedur ini pada ekstremitas atas.</li>
</ol>
<p>Lakukan pula pemeriksaan getar dan posisi dua tempat (two point discrimination).</p>

<h2>B. Analisis Hasil Pemeriksaan</h2>
<ol>
<li>Dengan menandai area yang mengalami defisit neurologis, pemeriksa dapat mengetahui adanya kelainan mononeuropathy, polineuropathy, lesi saraf tepi maupun lesi pada saraf sentral.</li>
<li>Penilaian sensasi nyeri dan suhu merupakan penilaian fungsi sensoris spinothalamikus sehingga kelainan pada pemeriksaan ini merupakan tanda adanya gangguan pada fungsi sensoris spinothalamikus.</li>
<li>Penilaian sensasi raba dan posisi (proprioseptif) merupakan penilaian fungsi sensoris kolumna dorsalis sehingga kelainan pada pemeriksaan ini merupakan tanda adanya gangguan pada fungsi sensoris kolumna dorsalis.</li>
<li>Kondisi yang melibatkan korda spinalis dapat menyebabkan gangguan pada salah satu fungsi tersebut, misalnya fungsi sensoris spinothalamikus yang intak namun ada defisit dari fungsi sensoris kolumna dorsalis.</li>
<li>Berdasarkan lokasi gangguan fungsi sensoris, pemeriksa dapat memperkirakan kemungkinan letak lesi.</li>
</ol>`,
    references: [
      "Bickley. <em>Bates Guide to Physical Examination and History Taking, 8th Edition</em>. 2002–08.",
      "Duijnhoven, Bele. <em>Skills in Medicine: Neurology Examination</em>. 2009."
    ]
  }
];
