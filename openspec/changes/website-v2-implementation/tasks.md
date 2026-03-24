## 1. Navigation Restructure

- [ ] 1.1 Create `src/components/layout/MegaMenu.astro` with grouped dropdown panels (Platform, Solutions, Customers, Resources, Company) for desktop, using CSS hover triggers
- [ ] 1.2 Rewrite `Navbar.astro` to use MegaMenu on desktop (lg:) and keep MobileMenu island for mobile
- [ ] 1.3 Update `MobileMenu.tsx` with grouped accordion sections matching mega-menu structure
- [ ] 1.4 Add all new page links to nav and footer locale content

## 2. Locale Content — New Pages

- [ ] 2.1 Add Nexus Intelligence page content to both locale files (hero, 5-step reasoning flow, 6 technical components, governance-first AI, comparison table, CTA)
- [ ] 2.2 Add 5 independent solution page content (aiDrivenOps, deploymentGovernance, incidentInvestigation, compliance, workflowIntegration) with scenarios, workflows, metrics, CTAs
- [ ] 2.3 Add 4 platform module page content (automation, integrationHub, governance, observability) with features, architecture context, use cases
- [ ] 2.4 Add 3 industry page content (financialServices, manufacturing, technology) with challenges, solutions, compliance
- [ ] 2.5 Add blog index content (8 article entries with titles, categories, read times, dates, descriptions)
- [ ] 2.6 Add glossary content (15+ terms with definitions)
- [ ] 2.7 Add assessment page content (6 questions, options, result templates, scoring labels)
- [ ] 2.8 Add docs landing page content (hero, 4 resource cards)
- [ ] 2.9 Add meta tags (title + description) for all new pages in both locale files

## 3. Nexus Intelligence Page

- [ ] 3.1 Create `src/pages/[locale]/platform/nexus-intelligence.astro` with getStaticPaths
- [ ] 3.2 Create `src/components/visuals/ReasoningFlow.astro` — 5-step horizontal flow component (Perceive → Understand → Plan → Execute → Learn)
- [ ] 3.3 Create `src/components/visuals/TechComponents.astro` — 6-component grid (Intent Parser, Context Memory, Task Planner, Governance Validator, Action Orchestrator, Knowledge Accumulator)
- [ ] 3.4 Implement governance-first AI section and comparison table

## 4. Independent Solution Pages

- [ ] 4.1 Create `src/pages/[locale]/solutions/ai-driven-ops.astro`
- [ ] 4.2 Create `src/pages/[locale]/solutions/deployment-governance.astro`
- [ ] 4.3 Create `src/pages/[locale]/solutions/incident-investigation.astro`
- [ ] 4.4 Create `src/pages/[locale]/solutions/compliance.astro`
- [ ] 4.5 Create `src/pages/[locale]/solutions/workflow-integration.astro`
- [ ] 4.6 Refactor `src/pages/[locale]/solutions.astro` into an index/overview page linking to individual solution pages

## 5. Platform Module Pages

- [ ] 5.1 Create `src/pages/[locale]/platform/automation.astro`
- [ ] 5.2 Create `src/pages/[locale]/platform/integration-hub.astro`
- [ ] 5.3 Create `src/pages/[locale]/platform/governance.astro`
- [ ] 5.4 Create `src/pages/[locale]/platform/observability.astro`
- [ ] 5.5 Update `src/pages/[locale]/platform.astro` to link to module sub-pages

## 6. Industry Pages

- [ ] 6.1 Create `src/pages/[locale]/industries/financial-services.astro`
- [ ] 6.2 Create `src/pages/[locale]/industries/manufacturing.astro`
- [ ] 6.3 Create `src/pages/[locale]/industries/technology.astro`

## 7. Blog & Content Pages

- [ ] 7.1 Create `src/components/ui/BlogCard.astro` — article card with category tag, read time, date, title, description
- [ ] 7.2 Create `src/pages/[locale]/blog.astro` — blog index with category filter and card grid
- [ ] 7.3 Create `src/pages/[locale]/glossary.astro` — terms with definitions, alphabetical grouping
- [ ] 7.4 Create `src/pages/[locale]/docs.astro` — docs landing with 4 resource cards

## 8. Assessment Page

- [ ] 8.1 Create `src/components/visuals/AssessmentQuiz.tsx` — React island with multi-step questionnaire, client-side scoring, and result display
- [ ] 8.2 Create `src/pages/[locale]/assessment.astro` wrapping the quiz component

## 9. Homepage Restructure

- [ ] 9.1 Create `src/components/sections/LogoWall.astro` — partner/integration logo display
- [ ] 9.2 Create `src/components/sections/MetricsWall.astro` — large stat cards grid
- [ ] 9.3 Create `src/components/sections/MultiPathCTA.astro` — 3-option CTA (demo + assessment + whitepaper)
- [ ] 9.4 Update `src/pages/[locale]/index.astro` with new sections: logo wall, Nexus Intelligence overview, metrics wall, multi-path CTA; reorder per plan

## 10. Existing Page Updates

- [ ] 10.1 Update `src/pages/[locale]/case-studies.astro` with filterable tag UI (by industry, challenge type)
- [ ] 10.2 Update Footer with new page links (platform modules, industries, blog, glossary, docs, assessment)

## 11. Build & Verify

- [ ] 11.1 Run `npm run build` and verify all ~62 HTML files generate successfully
- [ ] 11.2 Verify all new pages render in both locales
- [ ] 11.3 Verify navigation links work correctly with locale prefix and base path
- [ ] 11.4 Verify no broken links between new and existing pages
- [ ] 11.5 Commit and push to GitHub, verify deployment
