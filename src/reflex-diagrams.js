// Reflex examination diagrams - using extracted PDF figures for clear anatomical representation
const REFLEX_DIAGRAMS = {
  // Reflex Arc Anatomy - Topic 1
  reflexArc: `
    <div style="margin: 2rem 0; text-align: center;">
      <img src="assets/figures/reflex-arc-page-13.png" alt="Diagram lengkung refleks (halaman 13)" style="max-width: 100%; height: auto; border: 1px solid #e0e0e0; border-radius: 4px; margin-bottom: 1rem;" />
      <img src="assets/figures/reflex-arc-page-14.png" alt="Diagram lengkung refleks (halaman 14)" style="max-width: 100%; height: auto; border: 1px solid #e0e0e0; border-radius: 4px;" />
    </div>
  `,

  // Babinski Reflex
  babinski: `
    <div style="margin: 2rem 0; text-align: center;">
      <img src="assets/figures/babinski-page-7.png" alt="Refleks Babinski" style="max-width: 100%; height: auto; border: 1px solid #e0e0e0; border-radius: 4px;" />
    </div>
  `,

  // Chaddock Reflex
  chaddock: `
    <div style="margin: 2rem 0; text-align: center;">
      <img src="assets/figures/reflexes-page-22.png" alt="Refleks Chaddock" style="max-width: 100%; height: auto; border: 1px solid #e0e0e0; border-radius: 4px;" />
    </div>
  `,

  // Oppenheim Reflex
  oppenheim: `
    <div style="margin: 2rem 0; text-align: center;">
      <img src="assets/figures/oppenheim-page-8.png" alt="Refleks Oppenheim" style="max-width: 100%; height: auto; border: 1px solid #e0e0e0; border-radius: 4px;" />
    </div>
  `,

  // Gordon Reflex
  gordon: `
    <div style="margin: 2rem 0; text-align: center;">
      <img src="assets/figures/reflexes-page-24.png" alt="Refleks Gordon" style="max-width: 100%; height: auto; border: 1px solid #e0e0e0; border-radius: 4px;" />
    </div>
  `,

  // Schaefer Reflex
  schaefer: `
    <div style="margin: 2rem 0; text-align: center;">
      <img src="assets/figures/reflexes-page-25.png" alt="Refleks Schaefer" style="max-width: 100%; height: auto; border: 1px solid #e0e0e0; border-radius: 4px;" />
    </div>
  `,

  // Patrick's Sign (FABER Test) - Topic 8
  // Keep as SVG since we don't have a PDF figure for this
  patrick: `
    <svg viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; margin: 2rem 0;">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#7B1224" />
        </marker>
      </defs>

      <!-- Examination table -->
      <rect x="50" y="280" width="400" height="20" rx="5" fill="#E0E0E0" stroke="#666" stroke-width="2"/>

      <!-- Patient lying supine - pelvis -->
      <ellipse cx="250" cy="220" rx="60" ry="35" fill="#FFE5CC" stroke="#7B1224" stroke-width="2"/>

      <!-- Left leg extended (normal) -->
      <rect x="220" y="240" width="20" height="120" rx="5" fill="#FFD4C4" stroke="#7B1224" stroke-width="2"/>
      <text x="195" y="310" font-size="12" fill="#666">Kaki Kiri</text>
      <text x="195" y="325" font-size="12" fill="#666">(Ekstensi)</text>

      <!-- Right leg in FABER position -->
      <!-- Thigh -->
      <ellipse cx="280" cy="200" rx="80" ry="15" fill="#FFD4C4" stroke="#7B1224" stroke-width="2" transform="rotate(-45 280 200)"/>

      <!-- Lower leg -->
      <ellipse cx="320" cy="150" rx="70" ry="12" fill="#FFD4C4" stroke="#7B1224" stroke-width="2" transform="rotate(-70 320 150)"/>

      <!-- Foot -->
      <ellipse cx="350" cy="110" rx="30" ry="10" fill="#FFD4C4" stroke="#7B1224" stroke-width="2" transform="rotate(-80 350 110)"/>

      <!-- Examiner's hands applying pressure -->
      <!-- Hand on knee -->
      <ellipse cx="305" cy="175" rx="25" ry="15" fill="#B3E5FC" stroke="#0288D1" stroke-width="2" transform="rotate(-45 305 175)"/>

      <!-- Downward pressure arrow -->
      <path d="M 305 175 L 305 220" fill="none" stroke="#E74C3C" stroke-width="4" marker-end="url(#arrowhead)"/>
      <text x="310" y="200" font-size="14" fill="#E74C3C" font-weight="bold">Tekanan</text>

      <!-- Hand stabilizing pelvis -->
      <ellipse cx="210" cy="210" rx="20" ry="30" fill="#B3E5FC" stroke="#0288D1" stroke-width="2"/>
      <text x="150" y="215" font-size="12" fill="#0288D1" font-weight="bold">Stabilisasi</text>
      <text x="155" y="230" font-size="12" fill="#0288D1">Pelvis</text>

      <!-- Position labels with arrows -->
      <text x="340" y="50" font-size="14" fill="#7B1224" font-weight="bold">Posisi FABER:</text>

      <!-- Flexion indicator -->
      <path d="M 265 220 Q 275 195 280 180" fill="none" stroke="#4A90E2" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="250" y="190" font-size="12" fill="#4A90E2" font-weight="bold">Fleksi</text>

      <!-- Abduction indicator -->
      <path d="M 280 210 Q 300 200 320 180" fill="none" stroke="#4A90E2" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="310" y="205" font-size="12" fill="#4A90E2" font-weight="bold">Abduksi</text>

      <!-- External rotation indicator -->
      <path d="M 320 170 Q 335 150 345 130" fill="none" stroke="#4A90E2" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="330" y="145" font-size="12" fill="#4A90E2" font-weight="bold">Rotasi</text>
      <text x="330" y="160" font-size="12" fill="#4A90E2" font-weight="bold">Eksternal</text>

      <!-- Ankle placement annotation -->
      <circle cx="350" cy="110" r="5" fill="#E74C3C"/>
      <text x="285" y="100" font-size="12" fill="#666">Pergelangan kaki</text>
      <text x="285" y="115" font-size="12" fill="#666">di lutut kontralateral</text>

      <!-- Title -->
      <text x="120" y="30" font-size="20" fill="#7B1224" font-weight="bold">Patrick's Sign (Tes FABER)</text>
      <text x="90" y="55" font-size="14" fill="#666">Fleksi, Abduksi, Rotasi Eksternal pinggul</text>

      <!-- Interpretation box -->
      <rect x="30" y="330" width="440" height="65" rx="5" fill="#FFE5E5" stroke="#E74C3C" stroke-width="2"/>
      <text x="40" y="350" font-size="13" fill="#E74C3C" font-weight="bold">Positif = Nyeri di:</text>
      <text x="50" y="370" font-size="12" fill="#666">• Anterior: Patologi sendi panggul (hip joint)</text>
      <text x="50" y="385" font-size="12" fill="#666">• Posterior: Patologi sakroiliaka atau lumbar</text>

      <!-- Test steps annotation -->
      <text x="40" y="415" font-size="12" fill="#7B1224" font-weight="bold">Teknik:</text>
      <text x="50" y="430" font-size="11" fill="#666">1. Pasien terlentang  2. Fleksi, abduksi, rotasi eksternal  3. Tekan lutut ke bawah</text>
    </svg>
  `
};
