// Materials data - 7 new Bahasa Indonesia topics (NEUAAA-135)
const MATERIALS_DATA = [
  {
    id: 1,
    titleEn: "Pemeriksaan Refleks Fisiologis",
    titleId: "Pemeriksaan Refleks Fisiologis",
    summary: "Menilai refleks fisiologis serta mengenali kelainannya.",
    content: `<h1>Pemeriksaan Refleks Fisiologis</h1>

<h3>Tingkat Keterampilan</h3>
<p>4A</p>

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

<h3>Tingkat Keterampilan</h3>
<p>4A</p>

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
<p>(tetap sama seperti sebelumnya — tidak diubah)</p>

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

<h4>c. Tics</h4>
<p>Tics merupakan gerakan yang singkat, berulang, stereotip, gerakan terkoordinasi yang terjadi pada interval yang tidak teratur.</p>
<ul>
<li>Contoh: berulang mengedip, meringis, dan mengangkat bahu</li>
<li>Dapat ditekan sementara oleh pasien</li>
<li>Sering disertai dorongan (urge) sebelum gerakan</li>
</ul>
<p>Penyebab termasuk sindrom seperti Tourette, serta obat-obatan seperti fenotiazin dan amfetamin.</p>

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

<h3>Tingkat Keterampilan</h3>
<p>4A</p>

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

<h4>C. Refleks Chaddock</h4>
<p>Rangsangan diberikan dengan cara menggoreskan ujung runcing palu refleks di bagian lateral maleolus.</p>

<h4>D. Refleks Oppenheim</h4>
<p>Rangsangan diberikan dengan mengurut dengan kuat tibia dan otot tibialis anterior dari arah proksimal ke distal.</p>

<h4>E. Refleks Gordon</h4>
<p>Rangsangan diberikan dengan mencubit otot gastroknemius.</p>

<h4>F. Refleks Schaefer</h4>
<p>Rangsangan diberikan dengan mencubit tendon Achilles.</p>

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

<h3>Tingkat Keterampilan</h3>
<p>4A</p>

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

<h3>Tingkat Keterampilan</h3>
<p>4A</p>

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

<h3>Tingkat Keterampilan</h3>
<p>4A</p>

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

<h3>Tingkat Keterampilan</h3>
<p>4A</p>

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
