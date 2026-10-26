# agent.md: Portfolio Build Instructions for Rajhi Ismail

You are a senior frontend engineer building a personal portfolio website for **Rajhi Ismail**. Read this file and `design.md` fully before writing code. `design.md` is the visual source of truth, and this file is the engineering source of truth.

## 1. Goal

Ship a fast, accessible, responsive, single-page portfolio in a **neo-brutalist** style (thick black borders, hard offset shadows, bento grid, bright flat colours). It presents Rajhi as a Master's student in Computer Science with a focus on AI and deep learning, who also builds full-stack and mobile applications.

Success looks like:
- A recruiter or professor understands who he is, what he builds and how to contact him within 10 seconds.
- The site matches `design.md` closely on desktop, tablet and mobile.
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- Deployable to Netlify (current site: `ismailraj.netlify.app`) or Vercel with no manual steps.

## 2. Tech stack (do not change without asking)

- **Next.js** (App Router) + **TypeScript** (strict mode)
- **Tailwind CSS** with design tokens in `tailwind.config.ts` and CSS variables in `globals.css`
- **Framer Motion** for animation (respect `prefers-reduced-motion`)
- **lucide-react** for icons, **simple-icons** or inline SVG for brand icons (GitHub, LinkedIn)
- **next/font** for Archivo Black / Archivo and Space Mono
- No UI kit (no shadcn, MUI, Chakra). The components are small and custom.
- Netlify: use the official Next.js runtime (`@netlify/plugin-nextjs`) or `output: 'export'` if no server features are needed. Prefer static export.
- Package manager: `pnpm` (fall back to `npm` if pnpm is missing).

## 3. Project structure

```
.
├── agent.md
├── design.md
├── public/
│   ├── resume.pdf              # placeholder until the owner supplies it
│   ├── photo.jpg               # owner photo (placeholder allowed)
│   ├── og-image.png
│   └── projects/<slug>.png     # 16:7 screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx          # fonts, metadata, JSON-LD Person schema
│   │   ├── page.tsx            # composes sections
│   │   └── globals.css         # tokens, grid texture, base styles
│   ├── components/
│   │   ├── ui/                 # Button, IconButton, Chip, Card, SectionLabel, Doodles
│   │   ├── sections/           # Nav, Hero, SkillsStrip, Projects, Certifications,
│   │   │                       # Experience, Education, Languages, Cta, Contact, Footer
│   │   └── ProjectCarousel.tsx
│   ├── data/content.ts         # ALL copy and links live here
│   └── lib/                    # small helpers (cn, etc.)
└── tailwind.config.ts
```

## 4. Content rules

- **All copy comes from `src/data/content.ts`**, typed with interfaces. Components never hold hardcoded text.
- Use only facts from the CV below. **Never invent** employers, metrics, links, awards or testimonials.
- Where a link or asset is unknown, use a clearly marked placeholder (`TODO:` in the data file) and list it in the final report. Do not fabricate GitHub, LinkedIn or project URLs.
- Tone: clear, confident, first person, short sentences. No buzzword stuffing.

### CV data (source of truth)

**Identity**
- Name: Rajhi Ismail
- Email: ismailrajhi07@gmail.com
- Phone: +216 26922955
- Website: ismailraj.netlify.app
- Location: Zhengzhou, China
- GitHub / LinkedIn: `TODO` (the CV shows icons without URLs; ask the owner)

**Objective**
Master's student in Computer Science in China with a strong interest in artificial intelligence, deep learning and software development. Passionate about designing and building intelligent systems that address real-world problems. Experienced in full-stack development, machine learning and mobile application development, with a growing focus on AI research and practical intelligent applications.

**Experience**
- Software Engineering Intern, CNM (Campus Numérique de Métier), Tunis, Tunisia, Feb 2026 – Jun 2026 (4 months)
  - Developed an AI-powered e-commerce platform with chatbot integration using Angular 17, Node.js and MongoDB
  - Implemented product management, order processing, return requests, analytics dashboard and AI-assisted customer service
  - Integrated Socket.IO for real-time communication and Puter.js for AI-powered content generation
  - Worked in a team using Git/GitHub

**Education**
- Henan University of Technology, Zhengzhou, China, 2026 – Present: Master's Student in Computer Science. Research interests: AI, deep learning, intelligent software systems
- Faculty of Science of Monastir (FSM), Monastir, Tunisia, Sep 2023 – Jun 2026: Licence in Computer Science, Software Engineering Track. Graduation grade 15.20/20. Coursework: Data Structures, Algorithms, OOP, Database Systems, Software Engineering, Web Development
- Lycée Ibn-El-Haithem, Béja, Tunisia, 2023: Baccalaureate in Computer Science (Honors), TOP 1 graduate, ranked 1st in the school, grade 15.15/20

**Projects**
1. AI-Powered E-Commerce Platform & Chatbot: Angular 17, Node.js, Express.js, MongoDB Atlas, Socket.IO, Puter.js. Full-stack e-commerce with real-time chatbot assistance and automatic product content generation; product management, orders, returns, analytics dashboard; Socket.IO real-time and MongoDB Atlas.
2. TEMPORA: Immersive 3D Weather Website: Next.js, TypeScript, Three.js, React Three Fiber, Drei, Tailwind CSS, GSAP/Framer Motion, Open-Meteo, Recharts, Lucide React. Textured Earth, clouds, lighting, interactive globe; global city search and geocoding with smooth camera transitions; responsive location-aware dashboard with real-time conditions and hourly trends.
3. Olympic Medal Prediction (Machine Learning): Python, Scikit-learn, Pandas, NumPy, Matplotlib. Regression models predicting medal counts per country; full ML pipeline (preprocessing, feature selection, training, evaluation, hyperparameter optimisation); high prediction accuracy across multiple regression techniques.
4. Cross-Platform Weather Application: Flutter, Dart, OpenWeatherMap API, REST. Real-time weather and 7-day forecast, geolocation, clean UI/UX with Flutter state management.
5. Gym Management System (Desktop): Java, MySQL, JDBC. Manage members, trainers and subscriptions; authentication, full CRUD, relational database.
6. Personal Portfolio Website (v1): HTML5, CSS3, Bootstrap, JavaScript. Responsive, custom animations, dark theme, glassmorphism.

**Honors, awards and certifications**
- TOP 1 Graduate, Baccalaureate in Computer Science (Honors), Lycée Ibn-El-Haithem, Béja
- Amazon EC2 Cloud Computing Certificate, Amazon Web Services
- Cisco Networking Academy: NDG Linux Unhatched Certificate
- Duolingo English Test: B2 (Upper Intermediate)

**Skills**
- Languages: Python, JavaScript, Dart, Java, SQL (and TypeScript from projects)
- Web: Next.js, React, TypeScript, Angular 17, Node.js, Express.js, HTML5, CSS3, Tailwind CSS
- Backend & APIs: REST, Open-Meteo (weather and geocoding), OpenWeatherMap, SOAP
- Mobile: Flutter, Dart
- Databases: MongoDB, MySQL, Firebase
- Data Science & ML: Scikit-learn, Pandas, NumPy, Matplotlib
- Cloud: AWS (EC2)
- Tools / libraries: Git, GitHub, Three.js, React Three Fiber, GSAP, Framer Motion, Recharts, Lucide React (the CV groups these under "DevOps"; regroup them as Frontend libraries on the site)
- Soft skills: Problem-solving, Teamwork, Time management, Adaptability, Creativity, Self-learning

**Languages**: Arabic (native), French (fluent), English (B2), Chinese (beginner, learning)

### Known CV inconsistencies (flag, don't silently fix)
- The Master's starts in 2026 while the Licence runs to Jun 2026 and the internship to Jun 2026. Display the dates exactly as written and mention this in your final report so the owner can confirm.
- The CV says "Oct 2026" is the current date; footer copyright year should be generated from `new Date().getFullYear()`.

## 5. Page sections and order

Follow the layout in `design.md` §3 and content in `design.md` §5:

1. Nav (sticky, bordered, mobile menu)
2. Hero (title, intro, buttons, socials, photo, code card)
3. Skills strip, plus an expandable grouped "all skills" card
4. Featured projects carousel, plus Certifications panel
5. Experience timeline, Education cards, CTA panel
6. Languages card
7. Contact
8. Footer

Anchor IDs: `#skills`, `#projects`, `#experience`, `#education`, `#certifications`, `#contact`. Smooth scroll with `scroll-margin-top` equal to the nav height.

## 6. Engineering rules

**Code**
- TypeScript strict, no `any`. ESLint and Prettier must pass.
- Server Components by default. Add `"use client"` only for the carousel, mobile menu, typed-text effect and animation wrappers.
- Small, single-purpose components. Props are typed. Variants via a `variant` prop and `cva` or a simple map, not copy-pasted class strings.
- Use Tailwind tokens (`bg-lime`, `border-ink`, `shadow-brut`) defined in config. No magic hex values in components.
- Define shadows as utilities: `shadow-brut` (6px), `shadow-brut-sm` (4px), `shadow-brut-xs` (3px).
- Use `next/image` with explicit sizes. Lazy-load below the fold. Keep total JS lean (no heavy libraries; do not add Three.js to this site).

**Accessibility**
- Semantic HTML, one `h1`, logical heading order.
- Visible focus states (see `design.md` §4).
- Carousel: `role="region"`, `aria-roledescription="carousel"`, labelled controls, keyboard arrows, pause on focus. No autoplay.
- Contrast must pass AA. Check white-on-violet and darken the violet if needed.
- Doodles and textures are `aria-hidden`.

**Performance and SEO**
- Fonts via `next/font` with `display: swap`.
- Metadata: title `Rajhi Ismail | AI & Software Engineer`, description from the objective, Open Graph and Twitter cards, canonical URL, favicon (a lime square with `</>`), `robots.txt`, `sitemap.xml`.
- JSON-LD `Person` schema (name, email, url, alumniOf, knowsAbout).

**Do not**
- Do not add analytics, trackers, cookie banners, or any third-party script without asking.
- Do not add a backend. Contact is a `mailto:` button, or a form only if the owner provides an endpoint (Formspree or Netlify Forms).
- Do not use placeholder lorem ipsum in the final output.
- Do not commit secrets or `.env` files.
- Do not change the design tokens or layout without the owner's approval.

## 7. Workflow

1. Read `design.md` and this file. Restate any ambiguities as a short list of questions to the owner only if they block progress; otherwise decide, proceed and note the decision.
2. Scaffold: `pnpm create next-app@latest` (TypeScript, Tailwind, App Router, ESLint, `src/` dir). Install `framer-motion`, `lucide-react`, `clsx`, `class-variance-authority`.
3. Set up tokens, fonts, `globals.css` (grid texture, focus ring, reduced-motion rules) and the `ui/` primitives first. Render a throwaway kitchen-sink page to confirm the look matches before building sections.
4. Write `content.ts` from the CV data above.
5. Build sections top to bottom. After each section, check it at 375px, 768px and 1280px.
6. Add motion, doodles and the carousel last.
7. Run `pnpm lint`, `pnpm build` and a Lighthouse pass. Fix issues.
8. Write a short `README.md`: how to run, how to edit `content.ts`, how to deploy to Netlify, how to swap the photo, resume and project images.

## 8. Definition of done

- [ ] Matches `design.md` on mobile, tablet and desktop, with no horizontal scroll
- [ ] All CV content present and accurate, nothing invented
- [ ] Every `TODO:` placeholder listed in the final report (GitHub URL, LinkedIn URL, photo, resume PDF, project screenshots and links)
- [ ] `pnpm lint` and `pnpm build` pass with zero errors
- [ ] Lighthouse targets met
- [ ] Keyboard-only navigation works across the whole page
- [ ] Reduced-motion mode works
- [ ] README written

## 9. Final report format

When finished, reply with:
1. One-paragraph summary of what was built.
2. The list of placeholders the owner must fill in.
3. Any CV inconsistencies or decisions you made.
4. Commands to run and deploy.

Keep it short. Do not recap every step.
