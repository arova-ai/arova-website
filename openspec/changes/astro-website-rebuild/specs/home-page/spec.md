## ADDED Requirements

### Requirement: Hero section
The homepage hero SHALL display a 2-column grid layout on desktop (stacked on mobile) with: left column containing a badge pill ("Enterprise AI-First Platform"), H1 headline "Arova Nexus" (gradient text) + tagline, subtitle paragraph, and two CTA buttons ("Explore Platform" / "Book a Demo"); right column containing the animated HeroNodeNetwork visual component.

#### Scenario: Hero renders with correct content
- **WHEN** viewing the homepage in zh-TW
- **THEN** the headline reads "Arova Nexus：讓 AI 成為你的 IT 維運加速器" with both CTA buttons visible

#### Scenario: Hero is responsive
- **WHEN** the viewport is below 1024px
- **THEN** the hero stacks vertically with text above the node network visual

### Requirement: Core value section
The homepage SHALL display 3 value proposition cards in a 3-column grid (single column on mobile): "Faster" (Zap icon, amber accent), "Safer" (Shield icon, emerald accent), "Greater Control" (Sliders icon, cyan accent). Each card SHALL use glass-card styling with colored glow shadow and hover lift effect.

#### Scenario: Three value cards render
- **WHEN** viewing the core value section
- **THEN** three glass-card tiles with icons, titles, and descriptions are visible

### Requirement: Pain points section
The homepage SHALL display a section titled "Are you facing these operational challenges?" with 5 pain point cards in a responsive grid (2-3 columns on desktop, single on mobile). Each card SHALL have an icon, title, and description.

#### Scenario: Five pain point cards render
- **WHEN** viewing the pain points section
- **THEN** five cards with distinct IT operations challenges are displayed

### Requirement: Platform overview section
The homepage SHALL display a 2-column layout with: left column containing section title, description, and "Explore Architecture" link; right column containing the PlatformBlockDiagram visual showing 6 platform layers.

#### Scenario: Platform overview with visual
- **WHEN** viewing the platform overview section
- **THEN** the section shows platform description alongside the layered architecture diagram

### Requirement: How it works section
The homepage SHALL display a 5-step process flow with numbered circles (1-5) connected by a horizontal gradient line on desktop. Each step SHALL have a numbered indicator, title, and description.

#### Scenario: Five steps render with flow visual
- **WHEN** viewing the how-it-works section on desktop
- **THEN** five numbered steps are connected by a horizontal gradient line

### Requirement: Solutions preview section
The homepage SHALL display a section with 5 solution preview items (AI-Driven IT Ops, Smart Deployment, Incident Investigation, Compliance, Workflow Integration).

#### Scenario: Solution items render
- **WHEN** viewing the solutions preview section
- **THEN** five solution items with titles and brief descriptions are visible

### Requirement: Trust / proof section
The homepage SHALL display a section titled "Built for enterprise environments" with 5 trust badge pills, each with a Shield icon. Items: On-prem ready, Governance-first, Audit trail, Enterprise integration, Secure-by-design.

#### Scenario: Trust badges render
- **WHEN** viewing the trust section
- **THEN** five pill-shaped trust badges with shield icons are displayed

### Requirement: FAQ section
The homepage SHALL include an accordion FAQ section with 4 questions and answers, centered with max-width constraint.

#### Scenario: FAQ accordion expands
- **WHEN** a user clicks a FAQ question
- **THEN** the answer expands below the question with animation

### Requirement: Final CTA section
The homepage SHALL display a full-width CTA section with gradient background, headline "Ready to bring AI into your IT operations?", and a "Book a Demo" button.

#### Scenario: CTA section renders
- **WHEN** viewing the bottom of the homepage
- **THEN** a visually prominent CTA section with gradient background and button is displayed
