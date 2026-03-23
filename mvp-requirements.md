Build a complete, production-style, multi-page bilingual website MVP for an enterprise AI platform company named "Arova" and its flagship product "Arova Nexus".

IMPORTANT BRAND RULES
- Company name: Arova
- Product name: Arova Nexus
- "Arova" refers to the company/brand
- "Arova Nexus" refers to the product platform
- The website should present Arova Nexus as the flagship AI-First IT Operations Platform developed by Arova

==================================================
1. PRIMARY GOAL
==================================================

Create a polished, premium, enterprise-grade website that:
- clearly explains what Arova Nexus is
- positions it as an AI-First IT Operations Platform
- builds trust with enterprise buyers
- shows platform capabilities and solution scenarios
- includes stronger technology visuals and a graphical presentation
- supports Traditional Chinese by default with a full English version
- drives users to book a demo or contact the team

This should NOT feel like a generic startup landing page.
It should feel like a credible enterprise AI platform website with strong product structure, visual storytelling, and premium design quality.

==================================================
2. TECH STACK
==================================================

Use:
- Next.js 14+ with App Router
- React
- TypeScript
- Tailwind CSS

Recommended libraries:
- shadcn/ui
- lucide-react
- framer-motion

Please generate a runnable Replit-friendly project.

Requirements:
- clean project structure
- reusable components
- responsive design
- accessible design
- sticky navbar
- mobile menu
- subtle animations
- no backend required
- contact form can be mock submit UI only
- locale-based routing
- organized content files
- production-style code organization

==================================================
3. REPLIT-SPECIFIC EXPECTATIONS
==================================================

Please generate:
- a complete Next.js project structure
- all necessary files
- reusable components
- locale files
- page files
- layout files
- styles
- metadata setup

Assume this will be run directly inside Replit.
Make the output implementation-oriented, not just conceptual UI suggestions.

If needed, create:
- package.json
- app directory
- components directory
- locales directory
- lib directory
- public assets placeholders
- tailwind config or equivalent setup if needed
- utility helpers for translations and locale routing

The result should be ready to run with minimal additional setup.

==================================================
4. LANGUAGE / INTERNATIONALIZATION
==================================================

This website must support full bilingual content.

Language rules:
- Default language must be Traditional Chinese
- Secondary language must be English
- Default rendered language should be zh-TW
- Use locale-based routing:
  - /zh-TW
  - /en
- Add a language switcher in the top-right area of the header
- Display the language switcher as: 繁中 / EN
- When switching language, preserve the current page path instead of redirecting to homepage
- All visible content must support both Traditional Chinese and English:
  - navbar
  - hero content
  - section titles
  - body content
  - feature cards
  - FAQ
  - case study content
  - form labels
  - placeholders
  - buttons
  - footer
  - metadata
  - SEO titles and descriptions
- Store translation content in structured locale files, not hardcoded directly inside page components
- Layout must remain balanced in both Traditional Chinese and English

Suggested structure:
- locales/zh-TW.json
- locales/en.json

==================================================
5. TARGET AUDIENCE
==================================================

Target audience includes:
- IT Managers
- CIO / CTO
- Infrastructure teams
- DevOps teams
- SRE teams
- IT Operations leaders
- enterprise technical decision-makers

==================================================
6. VISUAL STYLE DIRECTION
==================================================

The overall design should feel:
- enterprise
- high-tech
- premium
- secure
- modern AI platform
- visually structured
- trustworthy
- executive-friendly
- more graphical
- more technological
- more AI-native
- more futuristic, but still credible

Increase the use of graphical presentation across the website.
Use stronger visual storytelling, not just text cards.

The website should include more:
- architecture diagrams
- workflow diagrams
- connected node graphics
- layered platform illustrations
- system integration graphics
- data flow visuals
- glowing line-based visuals
- modular platform blocks
- dashboard-style visuals
- trust/security badges
- subtle futuristic UI panels

Avoid:
- noisy cyberpunk aesthetics
- too much neon overload
- gimmicky 3D art
- playful startup visuals
- anything that reduces readability or enterprise trust

Preferred look:
- dark navy + cyan + purple highlights
- clean gradients
- structured diagrams
- elegant glow accents
- layered platform visuals
- premium sci-tech enterprise atmosphere
- strong visual hierarchy
- generous whitespace
- soft shadows
- subtle borders
- modular cards

==================================================
7. DESIGN SYSTEM
==================================================

Color palette:
- Primary: #0F172A
- Secondary: #1E293B
- Accent Cyan: #06B6D4
- Accent Purple: #8B5CF6
- Background Light: #F8FAFC
- Border: #E2E8F0
- Text Dark: #0F172A

Typography:
- Inter
- Noto Sans TC fallback for Traditional Chinese

UI style:
- rounded cards
- soft shadows
- subtle borders
- large section spacing
- premium layout rhythm
- elegant motion only
- layered sections
- occasional dark sections mixed with light sections
- strong section headers
- card-based information grouping
- high readability

==================================================
8. REQUIRED PAGES
==================================================

Build the following pages:

1. Home
2. Platform
3. Solutions
4. Capabilities
5. Case Studies
6. Resources
7. About
8. ASUS ExpertHub
9. Contact / Book a Demo

==================================================
9. GLOBAL NAVIGATION
==================================================

Navbar items:
- Home
- Platform
- Solutions
- Capabilities
- Case Studies
- Resources
- About
- ASUS ExpertHub
- Book a Demo

Requirements:
- sticky navbar
- mobile menu
- top-right language switcher
- primary CTA in header
- preserve locale in all links

Footer should include:
- Platform
- Solutions
- Capabilities
- Case Studies
- Resources
- FAQ
- About
- ASUS ExpertHub
- Contact
- Privacy / Security
- company info placeholder
- LinkedIn / Email placeholder

==================================================
10. SITEMAP
==================================================

Website structure:

- Home
  - Hero
  - Core Value
  - Pain Points
  - Platform Overview
  - How It Works
  - Solutions Preview
  - Trust / Proof
  - FAQ
  - Final CTA

- Platform
  - Hero
  - What is Arova Nexus
  - Why It Matters
  - Architecture Overview
  - Core Components
  - Deployment & Security
  - CTA

- Solutions
  - Hero
  - AI-Driven IT Operations
  - Smart Deployment & Change Governance
  - Incident Investigation & Root Cause Analysis
  - Compliance & Access Control
  - Enterprise Workflow Integration
  - Summary
  - CTA

- Capabilities
  - Hero
  - Intro
  - AI Agent
  - Workflow Automation
  - Integration Hub
  - Governance & Guardrails
  - Observability
  - Analytics & Reporting
  - CTA

- Case Studies
  - Hero
  - Case Study 1
  - Case Study 2
  - Case Study 3
  - CTA

- Resources
  - Hero
  - Featured Insights
  - FAQ
  - Downloads
  - Demo Content
  - Glossary & Perspectives
  - CTA

- About
  - Hero
  - Brand Story
  - Mission & Vision
  - Security & Privacy
  - Contact Info

- ASUS ExpertHub
  - Marketplace
  - Documents

- Contact / Book a Demo
  - Hero
  - Form Intro
  - Contact Form
  - Side Content / Trust
  - Submission CTA

==================================================
11. REUSABLE COMPONENTS
==================================================

Create reusable components for:
- sticky navbar
- footer
- language switcher
- section title block
- CTA buttons
- hero section
- icon card
- feature card
- trust badge
- process step / timeline
- FAQ accordion
- case study card
- resource card
- contact form fields
- CTA banner
- architecture-style visual block
- workflow diagram block
- connected nodes graphic block
- content section wrapper

==================================================
12. FILE / FOLDER STRUCTURE
==================================================

Please organize the project clearly.

Suggested structure:

- app/
  - [locale]/
    - layout.tsx
    - page.tsx
    - platform/page.tsx
    - solutions/page.tsx
    - capabilities/page.tsx
    - case-studies/page.tsx
    - resources/page.tsx
    - about/page.tsx
    - experthub/page.tsx
    - contact/page.tsx
- components/
  - layout/
  - sections/
  - ui/
  - diagrams/
- locales/
  - zh-TW.json
  - en.json
- lib/
  - i18n.ts
  - routes.ts
  - utils.ts
- public/
  - placeholder visuals if needed

You may refine the structure if a better App Router organization is appropriate, but keep it clean and maintainable.

==================================================
13. HOMEPAGE CONTENT
==================================================

The homepage should present the product as Arova Nexus, while making clear that Arova is the company behind it.

Home Hero

Headline (zh-TW):
Arova Nexus：讓 AI 成為你的 IT 維運加速器

Headline (en):
Arova Nexus: Let AI accelerate your IT operations

Subheadline (zh-TW):
Arova Nexus 是由 Arova 打造的 AI-First IT Operations Platform，協助企業將 IT 維運從人工處理推進到 AI 驅動的自動化、自主化與治理控管。

Subheadline (en):
Arova Nexus, developed by Arova, is an AI-First IT Operations Platform that helps enterprises transform IT operations from manual workflows into AI-driven automation, governed execution, and semi-autonomous operations.

Buttons:
- 預約 Demo / Book a Demo
- 了解平台 / Explore Platform

Supporting tagline:
Built by Arova for enterprise deployment, governance, automation, and observability.

IMPORTANT HERO VISUAL REQUIREMENT:
Do NOT use a generic SaaS hero.
Create a stronger visual such as:
- AI workflow graphic
- platform command center mockup
- connected systems diagram
- orchestration node network
- futuristic operations control panel style visual

Home Core Value

Section title (zh-TW):
打造更快、更穩、更可控的 IT 維運模式

Section title (en):
Built for faster, safer, and more controllable IT operations

Cards:
1. 更快 / Faster
2. 更穩 / Safer
3. 更可控 / Greater Control

Home Pain Points

Section title (zh-TW):
傳統 IT 維運，常卡在重複、分散與高風險流程

Section title (en):
Traditional IT operations are often slowed by complexity, fragmentation, and risk

Pain points:
- 部署流程繁瑣 / complex deployment and change workflows
- 工具與資訊分散 / fragmented tools and disconnected context
- 異常追查耗時 / slow incident investigation and root cause analysis
- 變更風險高 / high risk during operational changes
- IT 人力有限 / limited IT manpower and rising response expectations

Home Platform Overview

Section title (zh-TW):
一個平台，串起 AI、自動化、治理與營運可視性

Section title (en):
One platform for AI, automation, governance, and operational visibility

Modules:
- AI Agent
- Automation Engine
- Integration Hub
- Governance & Guardrails
- Observability
- Analytics & Reporting

IMPORTANT VISUAL REQUIREMENT:
Present this section not only as cards, but also with a graphical platform diagram or visual block map.

Home How It Works

Section title:
- zh-TW: Arova Nexus 如何運作
- en: How Arova Nexus works

Steps:
1. 使用者輸入需求 / Capture the request
2. AI 解析意圖與上下文 / Understand intent and context
3. 套用審核與安全檢查 / Apply review and safety checks
4. 自動執行或送審後執行 / Execute with control
5. 監控、記錄並持續優化 / Monitor, record, and improve

IMPORTANT VISUAL REQUIREMENT:
Make this a premium flow diagram or process visualization, not only plain text steps.

Home Solutions Preview

Section title:
- zh-TW: 針對真實企業 IT 場景設計
- en: Designed for real enterprise IT scenarios

Cards:
- AI-Driven IT Operations
- Smart Deployment & Change Governance
- Incident Investigation & Root Cause Analysis
- Compliance & Access Control
- Enterprise Workflow Integration

Home Trust / Proof

Section title:
- zh-TW: 為企業環境而設計
- en: Built for enterprise environments

Trust items:
- On-prem ready
- Governance-first operational design
- Audit trail and execution transparency
- Enterprise integration flexibility
- Secure-by-design architecture

IMPORTANT VISUAL REQUIREMENT:
Use strong trust/security styled graphical badges or structured visual cards.

Home FAQ

Include FAQ accordion in both languages:
1. What is Arova Nexus?
2. Who is it for?
3. Does it support on-prem deployment?
4. What systems can it integrate with?

Home Final CTA

Headline:
- zh-TW: 準備好讓 AI 參與你的 IT 維運了嗎？
- en: Ready to bring AI into your IT operations?

Buttons:
- Book a Demo
- Contact Sales

==================================================
14. PLATFORM PAGE CONTENT
==================================================

Platform Hero

Headline:
- zh-TW: 為 AI 驅動企業 IT 維運而設計的平台
- en: A platform built for AI-driven enterprise IT operations

Subheadline:
- zh-TW: Arova Nexus 將 AI Agent、流程自動化、系統整合、治理控管與營運可視性整合成一個統一平台。
- en: Arova Nexus combines AI agents, workflow automation, system integration, governance controls, and operational visibility into one unified platform for modern IT teams.

What is Arova Nexus

Section title:
- zh-TW: Arova Nexus 是什麼？
- en: What is Arova Nexus?

Explain that Arova Nexus is an AI-First IT Operations Platform, not a single-purpose automation tool.

Why It Matters

Section title:
- zh-TW: 為什麼企業 IT 需要新的營運模式
- en: Why enterprise IT needs a new operational model

Key points:
- Reduce operational friction
- Improve execution consistency
- Strengthen governance and review
- Increase visibility across actions and outcomes
- Support scale without unnecessary manual overhead

Architecture Overview

Section title:
- zh-TW: 平台架構總覽
- en: Platform architecture overview

Architecture layers:
- Experience Layer
- AI Agent Layer
- Automation Engine
- Integration Hub
- Governance & Guardrails
- Observability & Data Intelligence

IMPORTANT:
This section must include a strong diagram-driven architecture visualization.
It should feel premium, structured, modern, and technological.

Core Components

Section title:
- zh-TW: 核心平台組成
- en: Core platform components

Components:
- AI Agent Layer
- Automation Engine
- Integration Hub
- Governance & Guardrails
- Observability & Data Intelligence

Deployment & Security

Section title:
- zh-TW: 為控制、彈性與企業級需求而設計
- en: Designed for control, flexibility, and enterprise readiness

Items:
- On-prem ready architecture
- Role-based operational control
- Approval-aware workflow design
- Audit logging and traceability
- Integration-ready enterprise model

Platform CTA

Headline:
- zh-TW: 看看 Arova Nexus 如何融入你的營運環境
- en: See how Arova Nexus fits your operational environment

Buttons:
- 預約 Demo / Book a Demo
- 聯絡團隊 / Talk to Our Team

==================================================
15. SOLUTIONS PAGE CONTENT
==================================================

Solutions Hero

Headline:
- zh-TW: 現代企業 IT 維運的解決方案
- en: Solutions for modern enterprise IT operations

Subheadline:
Use bilingual supporting copy describing how Arova Nexus improves operational speed, consistency, governance, and integration.

Solution Sections

Create 5 premium solution sections or cards:

1. AI-Driven IT Operations
2. Smart Deployment & Change Governance
3. Incident Investigation & Root Cause Analysis
4. Compliance & Access Control
5. Enterprise Workflow Integration

For each solution include:
- pain point
- how Arova Nexus helps
- outcomes

IMPORTANT VISUAL REQUIREMENT:
Each solution should have more than a text block.
Add mini workflow visuals, icons, structured diagrams, or contextual graphical sections.

Solutions Summary

Headline:
- zh-TW: Arova Nexus 協助團隊以更快、更一致、更可控的方式運作
- en: Arova Nexus helps teams operate with more speed, more consistency, and more control

Solutions CTA

Headline:
- zh-TW: 了解 Arova Nexus 如何支援你的營運重點
- en: Explore how Arova Nexus supports your operational priorities

Buttons:
- Book a Demo
- Contact Sales

==================================================
16. CAPABILITIES PAGE CONTENT
==================================================

Capabilities Hero

Headline:
- zh-TW: Arova Nexus 平台能力
- en: Arova Nexus Capabilities

Subheadline:
- zh-TW: 從 AI Agent、流程自動化、整合中樞，到治理、可觀測性與分析報表，Arova Nexus 以模組化能力支撐企業級 IT 維運升級。
- en: From AI agents and workflow automation to integration, governance, observability, and analytics, Arova Nexus provides the core platform capabilities needed for modern enterprise IT operations.

Capabilities Intro

Section title:
- zh-TW: 支撐企業 IT 維運的核心能力
- en: Core capabilities for enterprise IT operations

Create sections or cards for:
1. AI Agent
2. Workflow Automation
3. Integration Hub
4. Governance & Guardrails
5. Observability
6. Analytics & Reporting

Each capability should include:
- title
- description
- highlights

==================================================
17. CASE STUDIES PAGE CONTENT
==================================================

Case Studies Hero

Headline:
- zh-TW: 成功案例與應用情境
- en: Case Studies & Use Scenarios

Subheadline in both languages.

Create 3 realistic mock enterprise-style case studies:

1. 大型企業導入部署治理流程
   / Deployment governance for a large enterprise IT team

2. 加速異常調查與根因分析
   / Faster incident investigation and root cause analysis

3. 整合既有工具，提升 IT 流程自動化程度
   / Extending automation value across existing enterprise tools

Each case study should include:
- customer background
- challenge
- implementation
- outcomes

Make them feel credible and enterprise-oriented.

==================================================
18. RESOURCES PAGE CONTENT
==================================================

Resources Hero

Headline:
- zh-TW: 資源中心
- en: Resources

Subheadline in both languages.

Sections:
- Featured Insights
- FAQ
- Downloads
- Demo Content
- Glossary & Perspectives

Suggested insight cards:
1. 什麼是 AI-First IT Operations？
2. AI Agent 如何改變 IT 維運流程
3. 為什麼企業需要可治理的自動化平台

Add resource cards with subtle metadata styling.

==================================================
19. ABOUT PAGE CONTENT
==================================================

About Hero

Headline:
- zh-TW: 關於 Arova
- en: About Arova

Subheadline:
Use bilingual copy that positions Arova as the company behind Arova Nexus.

Brand Story

Section title:
- zh-TW: 我們為什麼做 Arova Nexus
- en: Why we built Arova Nexus

Explain that Arova created Arova Nexus to help enterprises balance speed, intelligence, governance, and trust in IT operations.

Mission & Vision

Section title:
- zh-TW: 願景與使命
- en: Mission & Vision

Mission:
- zh-TW: 協助企業打造更快、更穩、更可控的 IT 維運模式。
- en: Help enterprises build IT operations that are faster, safer, and more controllable.

Vision:
- zh-TW: 成為企業 AI 驅動 IT 維運轉型的重要平台基礎。
- en: Become a foundational platform for AI-driven enterprise IT operations transformation.

Security & Privacy

Section title:
- zh-TW: 安全與隱私
- en: Security & Privacy

Use enterprise-oriented trust copy.

Contact Info

Section title:
- zh-TW: 聯絡我們
- en: Get in Touch

Include placeholders for:
- business inquiries
- product consultation
- demo requests
- email
- LinkedIn
- company info

==================================================
20. ASUS ExpertHub PAGE CONTENT
==================================================

About Hero

Headline:
- zh-TW: 關於 ASUS ExpertHub
- en: About ASUS ExpertHub

Subheadline:
Use bilingual copy that positions Arova as the company behind Arova Nexus.

Brand Story

Section title:
- zh-TW: 我們為什麼做 Arova Nexus
- en: Why we built Arova Nexus

Explain that Arova created Arova Nexus to help enterprises balance speed, intelligence, governance, and trust in IT operations.

Mission & Vision

Section title:
- zh-TW: 願景與使命
- en: Mission & Vision

Mission:
- zh-TW: 協助企業打造更快、更穩、更可控的 IT 維運模式。
- en: Help enterprises build IT operations that are faster, safer, and more controllable.

Vision:
- zh-TW: 成為企業 AI 驅動 IT 維運轉型的重要平台基礎。
- en: Become a foundational platform for AI-driven enterprise IT operations transformation.

Security & Privacy

Section title:
- zh-TW: 安全與隱私
- en: Security & Privacy

Use enterprise-oriented trust copy.

Contact Info

Section title:
- zh-TW: 聯絡我們
- en: Get in Touch

Include placeholders for:
- business inquiries
- product consultation
- demo requests
- email
- LinkedIn
- company info

==================================================
21. CONTACT / BOOK A DEMO PAGE CONTENT
==================================================

Contact Hero

Headline:
- zh-TW: 預約 Demo / 聯絡我們
- en: Book a Demo / Contact Us

Subheadline:
Use bilingual supporting text inviting users to share their IT environment, deployment needs, and challenges.

Form Intro

Section title:
- zh-TW: 讓我們更了解你的需求
- en: Help us understand your needs

Contact Form Fields

All bilingual:
- Name / 姓名
- Company / 公司名稱
- Title / 職稱
- Email
- Phone / 電話
- Challenge / 想解決的問題
- Deployment Type / 部署型態
- Timeline / 預計時程

Include placeholders in both languages.

Buttons:
- 送出需求 / Submit Inquiry
- 預約 Demo / Book a Demo

Supporting text:
- 提交後，我們將盡快與你聯繫。
- Our team will get back to you as soon as possible after submission.

Contact Side Content

Suggested side content:
- 為什麼聯絡 Arova / Why talk to Arova
- 適合討論的主題 / What we can discuss
- 預期可獲得什麼 / What you can expect

==================================================
22. SEO / METADATA
==================================================

Support localized SEO metadata for both zh-TW and English routes:
- page title
- meta description
- Open Graph title
- Open Graph description

Use localized metadata per page.

==================================================
23. FINAL IMPLEMENTATION INSTRUCTIONS
==================================================

Please implement the actual project structure and code, not just a static mockup description.

Important:
- generate all pages in the site structure, not just the homepage
- use Traditional Chinese as the default rendered language
- make homepage, platform page, and solutions page visually stronger with more diagrams and technology graphics
- keep content organized and maintainable
- use reusable components
- make the site feel like a real enterprise AI platform website
- ensure the result is runnable in Replit with minimal extra setup

FINAL QUALITY BAR

The final result must feel like:
- a real enterprise AI platform website
- visually stronger than a normal SaaS landing page
- premium and trustworthy
- technologically advanced
- graphical and structured
- suitable for executive audiences and technical stakeholders
- polished enough to present as an MVP to customers

It should NOT feel like:
- a generic startup template
- a one-page landing page only
- a random AI site clone
- a text-heavy wireframe
- a plain UI with too few visuals

Please create the full runnable codebase and file structure.
Start by scaffolding the Next.js app with locale-based routes, shared components, and translation files.
Then implement all pages with polished UI and reusable sections.

Focus on implementation.
Generate actual code files, reusable components, locale JSON files, route structure, and working page layouts.
Do not stop at a visual concept or homepage-only output.

Refine the website visual design to feel more advanced and technological.
Increase platform diagrams, workflow graphics, connected node visuals, layered architecture sections, dashboard-like blocks, and subtle glow accents while keeping it enterprise-grade and readable.
