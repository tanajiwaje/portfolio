# Portfolio App

**Overview**
This is a modern, animated portfolio site built with React, Vite, Tailwind CSS, and Framer Motion. It showcases professional experience, achievements, skills, education, and contact details in a clean single‑page layout.

**User Guide**
1. Open the site and use the top navigation to jump to sections.
2. Use the mobile menu icon on small screens to access the same sections.
3. Use the contact buttons to email, call, or open LinkedIn.

**Local Run**
1. Install dependencies: `npm install`
2. (Optional) Create `.env` from `.env.example` if you plan to use Gemini API features later.
3. Start the dev server: `npm run dev`
4. Open `http://localhost:3000/`

**Build And Preview**
1. Build: `npm run build`
2. Preview: `npm run preview`

**Tech Stack**
- React 19
- Vite 6
- Tailwind CSS 4
- Framer Motion
- Lucide Icons

**Configuration**
- Environment variables live in `.env`. See `.env.example` for available keys.
- The dev server runs on port `3000` as configured in `package.json`.

**Project Structure**
- `src/App.tsx` main page content and sections
- `src/components/` reusable UI and animation components
- `src/lib/` helper utilities
- `src/main.tsx` app entry point
- `src/index.css` global styles
- `vite.config.ts` Vite and Tailwind config

**Customization Guide**
1. Edit profile content in `src/App.tsx` under the `RESUME_DATA` object.
2. Adjust colors, spacing, and layout in `src/App.tsx` and `src/index.css`.
3. Update social links in `RESUME_DATA.basics.links`.

**Notes**
- The `.env.example` includes Gemini AI keys for future integrations, but this app currently runs without them.
