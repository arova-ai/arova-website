## 1. Project Scaffold & Configuration

- [x] 1.1 Initialize Astro project with `npm create astro@latest`, configure `astro.config.mjs` with static output, React integration, and site URL
- [x] 1.2 Install dependencies: `@astrojs/react`, `react`, `react-dom`, `framer-motion`, `lucide-react`, `@tailwindcss/vite`
- [x] 1.3 Create `src/styles/global.css` with Tailwind v4 imports, `@theme` tokens (colors, fonts), and custom utility classes (glass-card, text-glow-cyan, text-glow-purple, gradient-text)
- [x] 1.4 Create folder structure: `src/components/{layout,sections,ui,visuals}`, `src/i18n/`, `src/layouts/`, `src/pages/[locale]/`
- [x] 1.5 Configure TypeScript (`tsconfig.json`) with strict mode and path aliases

## 2. i18n & Locale System

- [x] 2.1 Create `src/i18n/zh-TW.json` with all Traditional Chinese content (nav, home, platform, solutions, capabilities, case-studies, resources, about, experthub, contact, footer, metadata)
- [x] 2.2 Create `src/i18n/en.json` with all English content (matching zh-TW structure)
- [x] 2.3 Create `src/i18n/utils.ts` with type-safe `getTranslation(locale)` helper, locale type definitions, and supported locales list
- [x] 2.4 Create `src/pages/index.astro` with redirect from `/` to `/zh-TW`

## 3. Base Layout & Shell Components

- [x] 3.1 Create `src/layouts/BaseLayout.astro` with HTML shell, `<html lang>`, font loading (Inter + Noto Sans TC via Google Fonts), global CSS import, and meta tag slots
- [x] 3.2 Create `src/components/layout/Navbar.astro` with logo, desktop nav links, language switcher, CTA button — all locale-aware
- [x] 3.3 Create `src/components/layout/MobileMenu.tsx` as React island with hamburger toggle, animated dropdown panel, nav links, and language switcher
- [x] 3.4 Create `src/components/layout/Footer.astro` with multi-column grid, product/company/contact links, social icons, copyright bar
- [x] 3.5 Create `src/components/layout/PageLayout.astro` that wraps content with Navbar + Footer + main with `pt-24`

## 4. Reusable UI Components

- [x] 4.1 Create `src/components/ui/Button.astro` with variants (primary, outline, ghost) and sizes
- [x] 4.2 Create `src/components/ui/SectionTitle.astro` for section headings with optional subtitle
- [x] 4.3 Create `src/components/ui/Card.astro` with glass-card styling variant
- [x] 4.4 Create `src/components/ui/Badge.astro` for pill/chip badges
- [x] 4.5 Create `src/components/ui/Accordion.tsx` as React island for FAQ expand/collapse

## 5. Visual / Diagram Components

- [x] 5.1 Create `src/components/visuals/HeroNodeNetwork.tsx` — animated SVG node network with framer-motion, `client:visible`
- [x] 5.2 Create `src/components/visuals/PlatformBlockDiagram.tsx` — vertical layered architecture diagram with staggered spring animation, `client:visible`
- [x] 5.3 Create `src/components/visuals/ProcessFlow.astro` — horizontal 5-step numbered flow with gradient connecting line (CSS only, responsive)
- [x] 5.4 Create `src/components/visuals/ArchitectureDiagram.astro` — structured platform architecture visual for the platform page
- [x] 5.5 Create `src/components/visuals/SolutionVisual.astro` — contextual mini workflow graphics for solution sections

## 6. Reusable Section Components

- [x] 6.1 Create `src/components/sections/HeroSection.astro` — reusable dark hero with headline, subtitle, optional CTA buttons, and background glow
- [x] 6.2 Create `src/components/sections/CTASection.astro` — full-width gradient CTA with headline and action buttons
- [x] 6.3 Create `src/components/sections/TrustBadges.astro` — row of pill-shaped trust badge items with shield icons

## 7. Home Page

- [x] 7.1 Create `src/pages/[locale]/index.astro` with `getStaticPaths()` for both locales
- [x] 7.2 Implement hero section with badge, headline, subtitle, CTA buttons, and HeroNodeNetwork island
- [x] 7.3 Implement core value section with 3 glass-card tiles (Faster, Safer, Greater Control)
- [x] 7.4 Implement pain points section with 5 challenge cards
- [x] 7.5 Implement platform overview section with PlatformBlockDiagram island
- [x] 7.6 Implement how-it-works section using ProcessFlow component
- [x] 7.7 Implement solutions preview section with 5 items
- [x] 7.8 Implement trust/proof section using TrustBadges component
- [x] 7.9 Implement FAQ section with Accordion island
- [x] 7.10 Implement final CTA section

## 8. Platform Page

- [x] 8.1 Create `src/pages/[locale]/platform.astro` with `getStaticPaths()`
- [x] 8.2 Implement hero, "What is Arova Nexus" section, and "Why it matters" bullets
- [x] 8.3 Implement architecture overview section with ArchitectureDiagram and 6 component cards
- [x] 8.4 Implement deployment & security section
- [x] 8.5 Implement platform CTA

## 9. Solutions Page

- [x] 9.1 Create `src/pages/[locale]/solutions.astro` with `getStaticPaths()`
- [x] 9.2 Implement hero and 5 solution sections with alternating layout, pain points, outcomes, and mini visuals
- [x] 9.3 Implement summary and CTA sections

## 10. Capabilities Page

- [x] 10.1 Create `src/pages/[locale]/capabilities.astro` with `getStaticPaths()`
- [x] 10.2 Implement hero, intro, 6 capability cards with highlight chips, and CTA

## 11. Case Studies Page

- [x] 11.1 Create `src/pages/[locale]/case-studies.astro` with `getStaticPaths()`
- [x] 11.2 Implement hero and 3 case study sections (background, challenge, implementation, outcomes)
- [x] 11.3 Implement CTA section

## 12. Resources Page

- [x] 12.1 Create `src/pages/[locale]/resources.astro` with `getStaticPaths()`
- [x] 12.2 Implement hero, 3 featured insight cards, 4 sub-sections (FAQ, Downloads, Demos, Glossary), and CTA

## 13. About Page

- [x] 13.1 Create `src/pages/[locale]/about.astro` with `getStaticPaths()`
- [x] 13.2 Implement hero, brand story, mission & vision blocks, security section, and contact info

## 14. ExpertHub Page

- [x] 14.1 Create `src/pages/[locale]/experthub.astro` with `getStaticPaths()`
- [x] 14.2 Implement hero, marketplace section, documents section, and CTA

## 15. Contact Page

- [x] 15.1 Create `src/pages/[locale]/contact.astro` with `getStaticPaths()`
- [x] 15.2 Implement hero and 2-column layout with contact form (8 fields, mock submit) and side content panel

## 16. SEO & Metadata

- [x] 16.1 Add localized `<title>`, `<meta description>`, `og:title`, `og:description` to every page via BaseLayout props
- [x] 16.2 Add `<link rel="alternate" hreflang>` tags for language alternates on each page
- [x] 16.3 Verify `<html lang>` is correctly set per locale

## 17. Final QA & Polish

- [x] 17.1 Verify all pages render correctly in both locales
- [x] 17.2 Test responsive layout at mobile, tablet, and desktop breakpoints
- [x] 17.3 Verify all internal links preserve locale prefix
- [x] 17.4 Run `npm run build` and verify all 18 HTML pages are generated
- [x] 17.5 Fix any hardcoded English strings that should be translated
