const sharp = require("sharp");

const W = 1200;
const H = 630;

const CREAM = "#F4F2EC";
const PAPER = "#FFFFFF";
const INK = "#0A0A0A";
const LIME = "#C6F24E";
const PINK = "#FF7C9C";
const VIOLET = "#7B4DFF";
const YELLOW = "#FFD21F";

// Dot pattern tile
const dotPattern = `<pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
  <circle cx="2" cy="2" r="1.5" fill="${INK}" opacity="0.12"/>
</pattern>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    ${dotPattern}
  </defs>

  <!-- Outer cream background with dot pattern -->
  <rect width="${W}" height="${H}" fill="${CREAM}"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>

  <!-- Thick black frame -->
  <rect x="12" y="12" width="${W - 24}" height="${H - 24}" fill="none" stroke="${INK}" stroke-width="6"/>

  <!-- Top lime logo bar -->
  <rect x="24" y="24" width="340" height="72" fill="${LIME}" stroke="${INK}" stroke-width="4"/>
  <text x="44" y="69" font-family="'Archivo Black', 'Arial Black', sans-serif" font-weight="900" font-size="34" fill="${INK}">&lt;/&gt; RAJHI ISMAIL</text>

  <!-- Right pink photo block -->
  <rect x="${W - 320}" y="24" width="280" height="280" fill="${PINK}" stroke="${INK}" stroke-width="4"/>
  <!-- inner lime offset frame -->
  <rect x="${W - 300}" y="44" width="240" height="240" fill="${LIME}" stroke="${INK}" stroke-width="4"/>
  <!-- avatar glyph placeholder -->
  <circle cx="${W - 180}" cy="164" r="56" fill="${PAPER}" stroke="${INK}" stroke-width="4"/>
  <text x="${W - 180}" y="178" font-family="'Archivo Black', 'Arial Black', sans-serif" font-weight="900" font-size="40" fill="${INK}" text-anchor="middle">ISMAIL</text>

  <!-- Violet code card overlapping bottom-right of photo -->
  <rect x="${W - 340}" y="260" width="320" height="150" fill="${VIOLET}" stroke="${INK}" stroke-width="4"/>
  <text x="${W - 320}" y="300" font-family="'Space Mono', 'Courier New', monospace" font-weight="700" font-size="18" fill="${LIME}">const developer = {</text>
  <text x="${W - 320}" y="330" font-family="'Space Mono', 'Courier New', monospace" font-weight="700" font-size="18" fill="${PINK}">  focus: 'AI &amp; Deep Learning',</text>
  <text x="${W - 320}" y="358" font-family="'Space Mono', 'Courier New', monospace" font-weight="700" font-size="18" fill="${PINK}">  build: 'Full-Stack + Mobile',</text>
  <text x="${W - 320}" y="386" font-family="'Space Mono', 'Courier New', monospace" font-weight="700" font-size="18" fill="${PINK}">  passion: 'Solving real problems'</text>
  <text x="${W - 320}" y="400" font-family="'Space Mono', 'Courier New', monospace" font-weight="700" font-size="18" fill="${PAPER}">}</text>

  <!-- Giant title bottom-left -->
  <text x="44" y="470" font-family="'Archivo Black', 'Arial Black', sans-serif" font-weight="900" font-size="96" fill="${INK}" letter-spacing="-2">AI &amp; SOFTWARE</text>
  <text x="44" y="568" font-family="'Archivo Black', 'Arial Black', sans-serif" font-weight="900" font-size="96" fill="${INK}" letter-spacing="-2">ENGINEER</text>

  <!-- Spiky burst doodle top-right -->
  <polygon points="1150,60 1168,122 1228,108 1200,168 1260,188 1200,208 1228,268 1168,254 1150,316 1132,254 1072,268 1100,208 1040,188 1100,168 1072,108 1132,122"
    fill="${PINK}" stroke="${INK}" stroke-width="3" stroke-linejoin="round" transform="rotate(8 1150 188)"/>

  <!-- Yellow location chip -->
  <rect x="44" y="576" width="230" height="38" fill="${YELLOW}" stroke="${INK}" stroke-width="4"/>
  <text x="62" y="602" font-family="'Space Mono', 'Courier New', monospace" font-weight="700" font-size="18" fill="${INK}">📍 ZHENGZHOU, CHINA</text>
</svg>`;

sharp(Buffer.from(svg)).png().toFile("public/og-image.png").then(() => {
  console.log("public/og-image.png written");
}).catch((err) => {
  console.error(err);
  process.exit(1);
});