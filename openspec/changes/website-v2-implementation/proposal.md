## Why

Based on deep competitive analysis of PagerDuty, Dynatrace, Resolve, Moveworks, and BigPanda, the current Arova website has critical gaps: the AI engine lacks a dedicated page (all competitors have one), solutions are compressed into a single page (competitors have 5-12 independent pages), the conversion funnel only has one CTA type ("Book a Demo"), and there's no blog, developer docs, or industry-specific content. Enterprise buyers evaluating Arova against competitors will find insufficient depth to make a procurement decision.

## What Changes

**New pages (16 pages):**
- Nexus Intelligence dedicated page — AI engine deep dive with 5-step reasoning process and named technical components
- 5 independent solution pages (split from current single solutions page)
- 4 independent platform module pages (Automation Engine, Integration Hub, Governance, Observability)
- 3 industry pages (Financial Services, Manufacturing, Technology)
- Blog index page
- AI Operations Glossary page
- Interactive IT Operations Assessment page
- Docs/API reference landing page

**Restructured existing pages:**
- Homepage: add logo wall, Nexus Intelligence overview section, customer metrics wall, multi-path CTAs
- Solutions page: convert to index/overview linking to individual solution pages
- Platform page: convert to overview linking to module sub-pages
- Navigation: restructure to mega-menu style with Platform, Solutions, Customers, Resources, Company groups
- Case Studies: add filterable tags (industry, challenge type)
- Resources: add blog integration, content type filters

**Content & conversion improvements:**
- Multi-path CTAs across all pages (assessment, whitepaper download, demo, contact)
- Locale content expansion in both zh-TW.json and en.json for all new pages
- SEO metadata for all new pages

## Capabilities

### New Capabilities
- `nexus-intelligence-page`: Dedicated AI engine page with 5-step reasoning flow, 6 named technical components, governance-first AI explanation, and comparison table
- `independent-solution-pages`: 5 standalone solution pages with detailed scenarios, flow diagrams, metrics, and per-solution CTAs
- `platform-module-pages`: 4 independent platform module pages (automation, integration-hub, governance, observability) with deep feature descriptions
- `industry-pages`: 3 industry-specific pages (financial-services, manufacturing, technology) with tailored challenges, solutions, and compliance callouts
- `blog-system`: Blog index page with category filtering and article card layout
- `glossary-page`: AI/IT operations glossary with term definitions for SEO
- `assessment-page`: Interactive IT operations maturity assessment with 5-8 questions and personalized results
- `homepage-v2`: Homepage restructure with logo wall, Nexus Intelligence section, metrics wall, multi-path CTAs
- `mega-navigation`: Restructured navigation with grouped mega-menu (Platform, Solutions, Customers, Resources, Company)
- `docs-landing`: Documentation center landing page for API references and integration guides

### Modified Capabilities
(none — all changes are additive to existing pages or new pages)

## Impact

- **Pages**: 15 current → 31 total (16 new pages × 2 locales = 32 new HTML files)
- **Navigation**: Navbar restructured from flat links to grouped mega-menu
- **Locale files**: Both zh-TW.json and en.json need significant content additions
- **Components**: New components needed for mega-menu, logo wall, metrics wall, assessment form, blog cards, glossary layout
- **Routing**: New nested routes under `/platform/`, `/solutions/`, `/industries/`
- **Build output**: ~62 HTML files (31 pages × 2 locales)
