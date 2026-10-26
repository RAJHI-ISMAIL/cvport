# design.md: Rajhi Ismail Portfolio

Visual and UX spec. Follow it exactly. If something is not covered, choose what is most consistent with the neo-brutalist rules below.

## 1. Style in one sentence

Neo-brutalist, playful, high-contrast: thick black outlines, hard offset shadows (no blur), flat saturated colour blocks, a bento-style grid, mono-spaced body text and chunky uppercase headings. It should feel like a sticker sheet or a printed zine, not a glossy SaaS page.

Reference traits taken from the inspiration images:
- Cream page background with a faint grid or dot pattern.
- Every card, button and input has a 2-3px black border and a solid black offset shadow.
- Sections are boxes in a grid, separated by the same black border (shared borders, no gaps in the main bento).
- Bright colour blocks: lime, hot pink, violet, sunshine yellow.
- Small decorative doodles: sparkles, stars, a spiky burst, a heart, squiggles, geometric shapes.
- Buttons "press" on hover/active by translating into their shadow.

## 2. Design tokens

### Colours
| Token | Hex | Use |
|---|---|---|
| `--cream` | `#F4F2EC` | Page background, light cards |
| `--paper` | `#FFFFFF` | Cards, inputs |
| `--ink` | `#0A0A0A` | Text, borders, shadows |
| `--lime` | `#C6F24E` | Primary accent: nav logo, primary buttons, certifications panel |
| `--pink` | `#FF7C9C` | Hero photo block, project frame, experience label |
| `--violet` | `#7B4DFF` | Skills label, CTA panel, code card |
| `--yellow` | `#FFD21F` | Highlights, badges, FAB-style buttons |
| `--sky` | `#6EC6E8` | Rare tertiary accent for tags/illustrations |
| `--coral` | `#FF5A5F` | Tiny accents only (dots, underline marks) |

Rules:
- Max 3 bright colours visible per viewport section.
- Text on lime, pink, yellow and cream is always `--ink`. Text on violet is white.
- No gradients, no blur, no transparency on shadows.

### Typography
- Headings: `Archivo Black` (or `Archivo` weight 800-900). Uppercase, tight leading (0.95-1.0), slight negative tracking.
- Body, labels, buttons, nav: `Space Mono` (fallback `JetBrains Mono`, `monospace`).
- Optional friendly accent for one-off playful lines: `Outfit` or `Lexend`.
- Load fonts with `next/font` (no layout shift).

Scale (desktop / mobile):
| Role | Desktop | Mobile |
|---|---|---|
| Hero title | 88-96px | 44-52px |
| Section title | 28-32px | 22-24px |
| Card title | 18-20px | 16-18px |
| Body | 16px | 15px |
| Label / button / nav | 12-13px uppercase, letter-spacing 0.04em | 12px |

### Borders, shadows, radius
- Border: `3px solid var(--ink)` for large containers, `2px` for small elements (chips, icon buttons).
- Shadow: `6px 6px 0 var(--ink)` for cards, `4px 4px 0` for buttons, `3px 3px 0` for chips and icon buttons.
- Radius: `0` for the main layout and cards. Max `4px` on small chips. Phone-style mockups may use large radii. Circles only for avatars and dots.
- Hover (buttons, cards, links with boxes): `translate(2px, 2px)` and shadow shrinks to `2px 2px 0`. Active: `translate(4px, 4px)` and shadow `0 0 0`.
- Transition: `120ms ease-out`, and only `transform` and `box-shadow`.

### Spacing
- 8px base unit. Section padding 32-48px desktop, 20-24px mobile.
- Max content width 1280px, centred, with the outer 3px border framing the whole page like the reference.

### Background texture
- Page behind the frame: cream.
- Hero left panel and CTA panel: a CSS grid pattern (1px lines, 24px cells, `rgba(0,0,0,0.12)`; on violet use `rgba(255,255,255,0.15)`).
- Optional dotted pattern (radial-gradient dots) for the outer background.

## 3. Layout (desktop, ≥1024px)

The page is one framed bento board. Rows share borders.

1. **Top nav bar**: `[</> RAJHI ISMAIL]` lime logo box (left) | links centred | `CONTACT ME →` violet box (right).
2. **Hero row (two columns)**
   - Left (cream + grid): small violet tag "HEY, I'M ISMAIL 👋", giant title, short intro, two buttons, social icon row.
   - Right (pink): photo in a lime offset frame, plus a violet "code card" overlapping the bottom-right with a TypeScript object.
3. **Skills strip**: violet label box "SKILLS →" on the left, then a row of 6-8 icon + label cells separated by borders.
4. **Middle row (two columns, ~70/30)**
   - Left (white): "FEATURED PROJECTS" with view-all button, prev/next arrow buttons, a project card carousel with pink frame, title, description, tech chips, details button, pagination dots.
   - Right (lime): "CERTIFICATIONS" stack of 3 boxed items and a "VIEW ALL" button.
5. **Bottom row (three columns)**
   - Left (pink): "EXPERIENCE →" label.
   - Centre (white): vertical timeline with dots, role titles, dates, bullets, "VIEW FULL RESUME" button.
   - Right (violet + grid): "LET'S BUILD SOMETHING AMAZING TOGETHER." with a "GET IN TOUCH" button and a spiky yellow/pink burst doodle cropped in the corner.
6. **Footer bar**: lime logo box | copyright centred | social icon boxes.

I also want an **Education** and **About** treatment. Add them as extra bento rows (see section 5) so the CV is fully represented.

### Responsive
- 1024px and up: layout above.
- 640-1023px: hero stacks (photo first or second, never cropped), skills strip becomes a 3×2 grid, middle and bottom rows become single column, certifications sit below projects.
- Below 640px: everything single column, nav collapses to a logo box and a "MENU" box that opens a full-width bordered dropdown. Buttons go full width. Hero title 44px. Shadows reduce to 4px.
- Never allow horizontal scroll. Touch targets at least 44px.

## 4. Components

### Button
- Variants: `primary` (lime), `secondary` (white), `accent` (violet, white text), `yellow`.
- Padding `12px 20px`, mono uppercase 12-13px, 2.5px border, 4px hard shadow, trailing arrow icon (↗, →, ↓) from Lucide.
- Focus-visible: 3px outline in `--violet` with 2px offset (accessibility, keep it).

### Icon button (social)
- 40×40 white box, 2px border, 3px shadow, Lucide or simple-icons glyph. Hover turns it lime.

### Chip / tag
- Mono 11-12px, white fill, 2px border, 3px shadow or none inside cards. Used for tech stack.

### Card
- White or colour fill, 3px border, 6px shadow. Optional header label box that sits on the top-left edge.

### Section label box
- Solid colour block with uppercase Archivo Black text and an arrow, used as the "tab" at the start of a row (SKILLS, EXPERIENCE).

### Project card (carousel slide)
- Pink outer frame containing a bordered image area (project screenshot/mockup, 16:7 on desktop), then a white body with title, one-line description, chips, "VIEW DETAILS →".
- Carousel: arrow buttons plus dots, keyboard accessible (`←` `→`), swipe on touch. No autoplay.

### Code card (hero)
- Violet box, white border, mono text, lime for keys, pink for values.
- Content:

```
> const developer = {
    focus: 'AI & Deep Learning',
    build: 'Full-Stack + Mobile',
    stack: 'Next.js, Angular, Flutter',
    passion: 'Solving real problems'
  }
```

### Timeline
- Vertical 3px line, filled black dots, role in Archivo Black uppercase, company after a coloured dot, date right-aligned in mono, bullets in mono 13-14px.

### Doodles (decorative, `aria-hidden`)
- Inline SVG: 4-point sparkle, asterisk star, heart, squiggle line, spiky burst, small plus signs, triangle, half circle.
- Black 2.5px strokes, flat fills from the palette. Place 4-6 across the page, never over text.

## 5. Section content (from the CV)

Use `src/data/content.ts` as the single source of truth (see agent.md). Do not hardcode copy in components.

### Nav
`SKILLS · PROJECTS · EXPERIENCE · EDUCATION · CERTIFICATIONS · CONTACT`
Logo box: `</> RAJHI ISMAIL`. Right button: `CONTACT ME →`.

### Hero
- Tag: `HEY, I'M ISMAIL 👋`
- Title: `AI & SOFTWARE ENGINEER` (two lines: "AI & SOFTWARE" / "ENGINEER"). Alternative: `FULL-STACK DEVELOPER`.
- Intro: "Master's student in Computer Science at Henan University of Technology. I build intelligent, full-stack and mobile applications, with a growing focus on deep learning."
- Buttons: `VIEW MY WORK ↗` (lime, scrolls to projects) and `DOWNLOAD RESUME ↓` (white, links to `/resume.pdf`).
- Connect with me: GitHub, LinkedIn, Email icons (add Twitter/X only if the owner provides one).
- Location chip: `📍 ZHENGZHOU, CHINA`.

### Skills strip (icon + label)
Next.js, React, TypeScript, Angular, Node.js, Tailwind CSS, Flutter, Python, MongoDB, Git. Show 6-8 on the strip and reveal the full grouped list in a "ALL SKILLS" expandable bento card below with these groups:
- Languages: Python, JavaScript, TypeScript, Dart, Java, SQL
- Frontend: Next.js, React, Angular 17, Tailwind CSS, HTML5, CSS3, Three.js, React Three Fiber, GSAP, Framer Motion, Recharts
- Backend & APIs: Node.js, Express.js, REST, SOAP, Open-Meteo, OpenWeatherMap
- Mobile: Flutter, Dart
- Databases: MongoDB, MySQL, Firebase
- Data & ML: Scikit-learn, Pandas, NumPy, Matplotlib
- Cloud & Tools: AWS EC2, Git, GitHub
- Soft skills as small chips: Problem-solving, Teamwork, Time management, Adaptability, Creativity, Self-learning

### Featured projects (carousel order)
1. **TEMPORA: Immersive 3D Weather**: textured 3D Earth with clouds and lighting, global city search, smooth camera transitions, hourly trends dashboard. Chips: Next.js, TypeScript, Three.js, R3F.
2. **AI E-Commerce Platform & Chatbot**: full-stack store with real-time AI chatbot, automatic product content generation, orders, returns, analytics dashboard. Chips: Angular 17, Node.js, MongoDB, Socket.IO.
3. **Olympic Medal Prediction**: regression models predicting medals per country, full ML pipeline with hyperparameter tuning. Chips: Python, Scikit-learn, Pandas.
4. **Cross-Platform Weather App**: real-time weather and 7-day forecast, geolocation. Chips: Flutter, Dart, REST.
5. **Gym Management System**: desktop app for members, trainers and subscriptions with auth and CRUD. Chips: Java, MySQL, JDBC.
6. **Personal Portfolio (v1)**: responsive portfolio with dark theme and glassmorphism. Chips: HTML, CSS, Bootstrap, JS.

Each project needs a screenshot placeholder at `public/projects/<slug>.png` (16:7). Until real images exist, render a colour block with a large doodle and the project initials.

### Certifications (lime panel)
1. Amazon Web Services: EC2 Cloud Computing
2. Cisco Networking Academy: NDG Linux Unhatched
3. Duolingo English Test: B2 (Upper Intermediate)

### Experience (timeline)
- **SOFTWARE ENGINEERING INTERN • CNM (Campus Numérique de Métier)**, Feb 2026 – Jun 2026, Tunis, Tunisia
  - Built an AI-powered e-commerce platform with chatbot using Angular 17, Node.js and MongoDB.
  - Implemented product management, orders, returns, analytics and AI-assisted customer service.
  - Integrated Socket.IO real-time messaging and Puter.js AI content generation; worked in a Git/GitHub team.

### Education (new bento row, yellow label box "EDUCATION →")
Three stacked cards with year badges:
- Henan University of Technology: Master's in Computer Science, 2026 – Present, Zhengzhou, China. Interests: AI, deep learning, intelligent software systems.
- Faculty of Science of Monastir: Licence in Computer Science (Software Engineering), Sep 2023 – Jun 2026, grade 15.20/20.
- Lycée Ibn-El-Haithem, Béja: Baccalaureate in Computer Science (Honors), 2023, **TOP 1 graduate**, 15.15/20. Show a yellow "TOP 1" sticker badge.

### Languages (small card)
Arabic: Native · French: Fluent · English: B2 · Chinese: Beginner (learning). Use four bordered pills with a 5-segment level bar.

### CTA panel (violet)
"LET'S BUILD SOMETHING AMAZING TOGETHER." plus `GET IN TOUCH →` (mailto: ismailrajhi07@gmail.com). Phone and website shown in the Contact section only.

### Contact section
Bordered card with email, phone `+216 26922955`, website `ismailraj.netlify.app`, location. Optional simple form (name, email, message) styled as brutalist inputs (white, 3px border, 4px shadow). If no backend is available, make it a `mailto:` link instead of a form.

### Footer
`© 2026 Rajhi Ismail. All rights reserved.` plus social icon boxes.

## 6. Motion

- Subtle only. On load, blocks fade/slide up 12px with a 60ms stagger (Framer Motion).
- Hover: button press effect, cards lift by moving up-left 2px.
- Doodles: slow 6-8s float/rotate (±6°).
- Hero code card: typed-text effect once, on first view.
- Respect `prefers-reduced-motion`: disable all of the above except colour/press feedback.

## 7. Accessibility and quality bars

- Contrast: all text meets WCAG AA (ink on lime, pink, yellow, cream passes; white on violet `#7B4DFF` is large-text only, so use 14px bold or larger and darken to `#6A3CF0` if needed).
- Semantic landmarks: `header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`.
- All interactive elements keyboard reachable with a visible focus ring.
- Images need meaningful `alt`; decorative doodles use `aria-hidden="true"`.
- Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- Open Graph and Twitter meta with a generated `og-image.png` in the same style.

## 8. Do and don't

Do:
- Keep borders and shadows identical across components.
- Use big, confident type and generous empty cream space inside cards.
- Mix one hero colour per section.

Don't:
- No soft shadows, glassmorphism, gradients or rounded-everything.
- No stock-photo hero. Use the owner's photo (or an illustrated avatar placeholder).
- No more than two fonts plus one optional accent font.
- No autoplaying carousels or auto-scrolling marquees (a static skills strip is fine).
