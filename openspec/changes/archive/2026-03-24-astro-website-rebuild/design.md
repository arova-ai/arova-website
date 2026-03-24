## Context

Arova has a working website prototype built on Replit using Vite + React SPA with wouter routing, framer-motion animations, shadcn/ui components, and Tailwind CSS. The site is a dark-themed enterprise AI platform website with 9 pages (Home, Platform, Solutions, Capabilities, Case Studies, Resources, About, ExpertHub, Contact), bilingual support (zh-TW / en), and rich visual components (node network diagrams, architecture layers, process flows).

The prototype validates the content and visual design but uses a client-side SPA architecture unsuitable for a production marketing site — no SSR/SSG, poor SEO, heavy JS bundle, no proper meta tags.

**Stakeholders**: Product/marketing team (content owners), engineering (implementation), enterprise buyers (end users).

**Constraints**: Must preserve the exact visual design, content, and page structure from the Replit prototype. The site is content-driven with minimal interactivity (mobile menu, FAQ accordion, language switcher).

## Goals / Non-Goals

**Goals:**
- Rebuild the site using Astro with static site generation for optimal performance and SEO
- Preserve all content, visual design, and page structure from the Replit prototype
- Maintain bilingual support (zh-TW default, en) with locale-based routing
- Use Tailwind CSS v4 for styling consistency
- Ship minimal JavaScript — use Astro islands only for interactive components
- Produce a deployable static site (Vercel, Netlify, or any CDN)
- Clean, maintainable project structure with separated content/locale files

**Non-Goals:**
- Redesigning the visual appearance (we replicate the existing design)
- Adding new pages or content beyond what exists in the prototype
- Backend functionality (form submissions remain mock UI)
- CMS integration (content stays in locale JSON files)
- Authentication or user accounts
- Analytics/tracking integration (can be added later)

## Decisions

### D1: Astro as the framework
**Choice**: Astro 5.x with static output mode
**Rationale**: Astro is purpose-built for content-driven sites. It renders pages to static HTML at build time, ships zero JS by default, and supports component islands for interactivity. This perfectly fits a marketing site where 95% of content is static.
**Alternatives considered**:
- Next.js (original spec): Overkill for a static marketing site; ships React runtime to all pages; SSR adds deployment complexity
- Gatsby: Similar SSG approach but heavier ecosystem, slower builds, less active development
- Plain HTML/CSS: Too manual for 9 bilingual pages with shared components

### D2: Astro islands with React for interactive components
**Choice**: Use `@astrojs/react` for interactive islands (mobile menu toggle, FAQ accordion, animated SVG diagrams)
**Rationale**: Most of the page is static HTML/CSS. Only a few components need client-side JS: mobile hamburger menu, FAQ accordion expand/collapse, and animated SVG visuals (HeroNodeNetwork, PlatformBlockDiagram). React islands keep these interactive while the rest ships as zero-JS HTML.
**Alternatives considered**:
- Vanilla JS: Simpler for menu/accordion but harder to port the existing framer-motion animations
- Svelte islands: Lighter runtime but team has React experience from the prototype
- All static (no islands): Would lose the animated diagrams and smooth menu transitions

### D3: Tailwind CSS v4 via Vite plugin
**Choice**: Tailwind CSS v4 with `@tailwindcss/vite` plugin, CSS-first configuration
**Rationale**: Astro uses Vite under the hood. Tailwind v4 has native Vite support and CSS-first config (no `tailwind.config.js` needed). Custom theme tokens (colors, fonts) defined directly in the main CSS file via `@theme`.
**Alternatives considered**:
- Tailwind v3: Works but v4 is stable and has better performance, smaller output
- CSS Modules: Would require rewriting all utility classes from the prototype

### D4: i18n via static route generation
**Choice**: Use Astro's `getStaticPaths()` with a `[locale]` dynamic route segment. Each page generates both `/zh-TW/...` and `/en/...` variants at build time. Content stored in `src/i18n/zh-TW.json` and `src/i18n/en.json`.
**Rationale**: Astro's static path generation naturally handles locale routing. Each locale gets its own fully-rendered HTML page with correct `<html lang>`, meta tags, and content. No client-side routing needed.
**Alternatives considered**:
- astro-i18n-aut or similar plugins: Add unnecessary abstraction for just 2 locales
- Middleware-based i18n: Requires SSR mode, adds deployment complexity

### D5: Content in JSON locale files
**Choice**: Store all translatable content in structured JSON files (`src/i18n/zh-TW.json`, `src/i18n/en.json`) with nested keys matching page/section structure.
**Rationale**: Mirrors the prototype's locale file structure. JSON is easy to edit, diff, and hand off to translators. Direct imports in Astro components with type safety via a helper function.
**Alternatives considered**:
- Astro Content Collections: Better for blog-style content but overkill for structured UI text
- MDX per page: Harder to maintain consistent structure across locales

### D6: CSS-only animations with selective framer-motion
**Choice**: Use CSS animations/transitions for simple effects (hover, fade-in on scroll via `@starting-style` or Intersection Observer). Use framer-motion only for the complex animated SVG components (HeroNodeNetwork, PlatformBlockDiagram) inside React islands.
**Rationale**: Minimizes JS payload. CSS can handle most hover effects, transitions, and simple scroll-triggered animations. Only the complex staggered SVG animations benefit from framer-motion.
**Alternatives considered**:
- All framer-motion: Would require making every animated section a React island, defeating Astro's zero-JS advantage
- All CSS: Possible but complex staggered SVG path animations are much harder in pure CSS

### D7: Project structure
**Choice**:
```
src/
  components/
    layout/        # Navbar, Footer, PageLayout
    sections/      # Reusable section blocks (Hero, CTA, FAQ, etc.)
    ui/            # Small UI primitives (Button, Card, Badge, etc.)
    visuals/       # SVG diagrams, node networks (React islands)
  i18n/
    zh-TW.json
    en.json
    utils.ts       # getTranslation helper, locale types
  layouts/
    BaseLayout.astro  # HTML shell, fonts, meta
  pages/
    [locale]/
      index.astro
      platform.astro
      solutions.astro
      capabilities.astro
      case-studies.astro
      resources.astro
      about.astro
      experthub.astro
      contact.astro
  styles/
    global.css     # Tailwind imports, theme tokens, custom utilities
public/
  fonts/           # Inter, Noto Sans TC (if self-hosted)
  images/          # Placeholder assets
```
**Rationale**: Follows Astro conventions. `[locale]` dynamic segment handles both language routes. Components organized by purpose. Locale files at top level for easy access.

## Risks / Trade-offs

- **[Risk] Animated SVG fidelity**: The prototype's framer-motion animations (HeroNodeNetwork, PlatformBlockDiagram) are tightly coupled to React. Porting them as React islands adds JS weight to those pages.
  → **Mitigation**: Use `client:visible` directive so island JS only loads when the component scrolls into view. These are the only React islands on the page.

- **[Risk] Tailwind v4 class compatibility**: Some Tailwind v3 utility classes from the prototype may have changed in v4.
  → **Mitigation**: Tailwind v4 maintains backward compatibility for most utilities. Review the v3→v4 migration guide for any breaking class names during implementation.

- **[Risk] Font loading performance**: Inter + Noto Sans TC (CJK font) is a large download.
  → **Mitigation**: Use `font-display: swap`, preload the Latin subset, and load Noto Sans TC via Google Fonts with `subset=chinese-traditional` to minimize payload.

- **[Trade-off] No form submission**: Contact form remains mock UI (no backend). This is acceptable for MVP but will need a form service (Formspree, Netlify Forms, etc.) for production.

- **[Trade-off] No CMS**: Content locked in JSON files. Fine for MVP with 2 locales, but scaling to more languages or frequent content updates may warrant a headless CMS later.
