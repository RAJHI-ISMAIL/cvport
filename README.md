# Ismail Rajhi - Neo-Brutalist Portfolio

A personal portfolio website for **Ismail Rajhi** (Tunisian Computer Science graduate and Master's student in Computer Science based in China). Built with Next.js App Router, TypeScript, Tailwind CSS, and Neo-Brutalist aesthetics (thick black borders, hard offset shadows, bento grid layout, and vibrant flat colors).

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ (tested on Node v20)
- npm or pnpm

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run lint
```

---

## 📝 How to Edit Content

All text, project details, skills, education, and links are centralized in a single file:
👉 **`src/data/content.ts`**

Components do not hardcode copy. To update your bio, contact information, projects, or work history, edit `src/data/content.ts`.

---

## 🖼️ How to Swap Assets

- **Resume PDF**: Placed at `public/resume.pdf` (linked in the Hero button and Experience section). Replace this file with your updated PDF anytime.
- **Hero Photo**: Place your headshot at `public/photo.jpg`. The Hero frame will automatically display it.
- **Project Screenshots**: Place 16:7 screenshots in `public/projects/<slug>.png` (matching the slugs defined in `content.ts`).
- **Favicon**: Neo-brutalist lime SVG located at `public/favicon.svg`.

---

## 🌐 Deployment to Netlify & Vercel

### Netlify Deployment
1. Connect your repository to [Netlify](https://app.netlify.com/).
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
3. Netlify will automatically install the Next.js runtime plugin (`@netlify/plugin-nextjs`).

### Vercel Deployment
1. Import the repository in [Vercel](https://vercel.com/).
2. Framework preset: **Next.js**.
3. Deploy directly with zero configuration needed.

---

## 📌 Placeholders to Fill In (`TODO:` Markers)

In `src/data/content.ts`, replace the following placeholders with your actual links:
1. `personal.socials[0].url`: Your real GitHub profile link (`https://github.com/your-username`).
2. `personal.socials[1].url`: Your real LinkedIn profile link (`https://linkedin.com/in/your-username`).
3. `projects[].liveUrl`: Live demo URLs for TEMPORA, AI E-Commerce, etc.
4. `projects[].repoUrl`: GitHub repository links for each individual project.