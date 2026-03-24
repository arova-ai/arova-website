## Why

The Arova website prototype was built on Replit using Vite + React SPA (wouter routing). This architecture is suboptimal for an enterprise marketing website — it lacks SSR/SSG, has poor SEO characteristics, and ships unnecessary JavaScript. We need to rebuild using Astro, which provides static-first rendering, excellent SEO, faster page loads, and a more maintainable content-driven architecture. The existing Replit prototype defines the content, visual design, and page structure — this rebuild preserves those while upgrading the tech foundation.

## What Changes

- **BREAKING**: Replace the entire Vite + React SPA codebase with an Astro project
- Implement all 9 pages (Home, Platform, Solutions, Capabilities, Case Studies, Resources, About, ExpertHub, Contact) as Astro pages with static rendering
- Replicate the existing dark-theme enterprise design system (dark navy #0F172A, cyan #06B6D4, purple #8B5CF6, glass-card effects, glow accents)
- Implement bilingual i18n (zh-TW default, en) with locale-based routing (`/zh-TW/...`, `/en/...`)
- Recreate all visual components: HeroNodeNetwork, PlatformBlockDiagram, architecture diagrams, process flow, FAQ accordion
- Implement sticky navbar with mobile menu, language switcher, and footer
- Use Tailwind CSS for styling, with optional React islands for interactive components (animations, mobile menu, accordion)
- Produce a fully static, deployable site with no backend dependency

## Capabilities

### New Capabilities
- `astro-project-scaffold`: Project setup — Astro config, Tailwind, TypeScript, folder structure, build pipeline
- `i18n-routing`: Bilingual locale-based routing with zh-TW default, language switcher, path preservation
- `design-system`: Dark enterprise theme — color tokens, typography (Inter + Noto Sans TC), glass-card effects, glow accents, responsive layout primitives
- `layout-shell`: Sticky navbar, mobile menu, footer, page layout wrapper
- `home-page`: Homepage with hero, core values, pain points, platform overview, how-it-works flow, solutions preview, trust badges, FAQ, CTA
- `platform-page`: Platform page with architecture diagram, core components, deployment & security
- `solutions-page`: Solutions page with 5 solution sections (pain/help/outcomes), workflow visuals
- `capabilities-page`: Capabilities page with 6 capability cards and highlights
- `case-studies-page`: Case studies page with 3 enterprise mock case studies
- `resources-page`: Resources page with featured insights, FAQ, downloads, glossary sections
- `about-page`: About page with brand story, mission/vision, security, contact info
- `experthub-page`: ASUS ExpertHub page (marketplace & documents)
- `contact-page`: Contact/Book a Demo page with form UI and side content
- `visual-components`: SVG/CSS diagram components — node network, platform block diagram, architecture layers, process flow

### Modified Capabilities
(none — greenfield project)

## Impact

- **Code**: Entire frontend codebase replaced (Vite+React SPA -> Astro static site)
- **Dependencies**: New — astro, @astrojs/tailwind, @astrojs/react (for islands), framer-motion (optional), lucide icons
- **Build**: Static output, deployable to any CDN/static host (Vercel, Netlify, Cloudflare Pages)
- **SEO**: Significant improvement — server-rendered HTML, proper meta tags, localized metadata per page
- **Performance**: Minimal client JS shipped; interactive islands only where needed
