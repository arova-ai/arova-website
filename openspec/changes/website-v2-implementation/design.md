## Context

The Arova website is an Astro 5.x static site with Tailwind CSS v4, React islands, and bilingual i18n (zh-TW/en). It currently has 15 pages generating 31 HTML files. The website plan v2 (at `openspec/website-plan-v2.md`) defines a comprehensive expansion based on competitive analysis of PagerDuty, Dynatrace, Resolve, Moveworks, and BigPanda.

The existing architecture uses `src/pages/[locale]/` for flat routing, `src/i18n/` for JSON locale files, and reusable components in `src/components/`. This design must maintain all existing patterns while adding nested routing and new component types.

## Goals / Non-Goals

**Goals:**
- Add 16 new pages with full bilingual content
- Restructure navigation to mega-menu format
- Add nested routes (`/platform/nexus-intelligence`, `/solutions/ai-driven-ops`, `/industries/financial-services`)
- Create new reusable components (logo wall, metrics wall, mega-menu, assessment form, blog cards)
- Maintain the existing design system, component library, and build pipeline
- Keep the site fully static (no SSR)

**Non-Goals:**
- CMS integration (content stays in JSON locale files)
- Actual blog article pages with markdown content (blog index only, articles are placeholder cards)
- Real assessment backend (assessment is UI-only with client-side result calculation)
- API documentation site (docs landing page only, links to external docs when available)
- Search functionality

## Decisions

### D1: Nested routing via Astro's file-based routing
**Choice**: Create nested folders in `src/pages/[locale]/` for sub-pages: `platform/nexus-intelligence.astro`, `solutions/ai-driven-ops.astro`, `industries/financial-services.astro`.
**Rationale**: Astro's file-based routing naturally handles this. Each sub-page still uses `getStaticPaths()` for locale generation. No middleware or dynamic routing needed.
**Alternative**: Flat routing with path segments in filenames — rejected because it doesn't produce clean URL hierarchies.

### D2: Mega-menu as Astro component with CSS-only dropdown
**Choice**: Replace the current flat Navbar links with a CSS-powered mega-menu (`Navbar.astro` with hover-triggered dropdown panels). Keep the React MobileMenu island for mobile.
**Rationale**: A mega-menu with hover dropdowns can be pure CSS (`:hover` + `group-hover` in Tailwind), avoiding additional JS. The mobile menu already handles the collapsible case via React.
**Alternative**: React island for the full navbar — rejected because it adds unnecessary JS for a hover interaction.

### D3: Locale file organization for new pages
**Choice**: Add new page content as top-level keys in the existing `zh-TW.json` / `en.json` files. For nested pages, use dot-notation keys: `platformModules.automation`, `solutionPages.aiDrivenOps`, `industries.financialServices`.
**Rationale**: Keeps all content in two files for easy diffing and translation management. The files are already large but manageable for a site this size.
**Alternative**: Split into per-page JSON files — more modular but adds import complexity and breaks the current `getTranslation()` pattern.

### D4: Assessment page with client-side logic
**Choice**: Build the assessment as an Astro page with a React island for the interactive questionnaire. Use client-side state to track answers and calculate a score/recommendation. No backend needed.
**Rationale**: This is a lead-gen tool, not a diagnostic service. A simple scoring algorithm (weighted answers → maturity score → recommended scenarios) works client-side. Form submission to capture leads can use the same mock pattern as the contact form.
**Alternative**: External tool (Typeform, etc.) — rejected to keep the experience on-site and maintain design consistency.

### D5: Blog index as static page with card grid
**Choice**: Create a blog index page that displays article cards from locale JSON data. No actual article pages — cards link to `#` or are marked as "coming soon." The structure is ready for future MDX/Content Collections integration.
**Rationale**: The immediate need is to show content authority and SEO structure, not to have a full CMS-backed blog. The blog index serves as a content hub placeholder.
**Alternative**: Astro Content Collections with MDX — correct long-term solution but out of scope for this change.

### D6: Logo wall component
**Choice**: Create a `LogoWall.astro` component that displays partner/client logos from an array. Use SVG placeholders for logos not yet available, with a "Trusted by enterprise teams" or "ASUS ExpertHub Certified" framing.
**Rationale**: Even without named customer logos, the component structure and social proof positioning should exist. Can use technology partner logos (AWS, Azure, ServiceNow, Jira, etc.) as integration trust signals.

## Risks / Trade-offs

- **[Risk] Locale file size**: Adding 16 pages of content to each JSON file will make them 2000+ lines each.
  → **Mitigation**: This is manageable. Consider splitting to per-page files in a future refactor if it becomes unwieldy.

- **[Risk] Mega-menu complexity on mobile**: CSS-only mega-menu needs careful mobile handling.
  → **Mitigation**: Mega-menu is desktop-only (hidden below `lg:`). Mobile continues to use the existing React MobileMenu island, updated with the new link structure.

- **[Risk] Content quality for 16 new pages**: Generating this much bilingual content risks shallow/repetitive copy.
  → **Mitigation**: Follow the content guidelines in website-plan-v2.md. Each page must have unique, specific content — not rephrased versions of the same generic messaging.

- **[Trade-off] Blog without articles**: The blog index exists but has no clickable articles.
  → **Acceptable**: The index page establishes content structure and SEO foundation. Articles can be added incrementally via Content Collections later.
