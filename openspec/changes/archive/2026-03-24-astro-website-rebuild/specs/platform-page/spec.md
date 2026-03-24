## ADDED Requirements

### Requirement: Platform hero
The platform page SHALL display a centered hero section on a dark background with headline, subtitle, and a large blurred primary glow accent.

#### Scenario: Platform hero renders
- **WHEN** viewing `/zh-TW/platform`
- **THEN** the hero displays "為 AI 驅動企業 IT 維運而設計的平台" with subtitle

### Requirement: What is Arova Nexus section
The platform page SHALL display a 2-column section: left column with a cyan bar accent and description explaining Arova Nexus as an AI-First platform; right column with "Why enterprise IT needs a new operational model" and 5 bullet points with CheckCircle icons.

#### Scenario: What is section renders with bullets
- **WHEN** viewing the "What is" section
- **THEN** left column shows platform description and right column shows 5 key points with check icons

### Requirement: Architecture overview section
The platform page SHALL display the architecture overview on a dark background (`#0a0f18`) with the ArchitectureDiagram component on one side and 6 component cards on the other side, showing the 6 platform layers: Experience Layer, AI Agent Layer, Automation Engine, Integration Hub, Governance & Guardrails, Observability & Data Intelligence.

#### Scenario: Architecture diagram renders
- **WHEN** viewing the architecture section
- **THEN** a visual architecture diagram and 6 component cards are displayed in a 2-column layout

### Requirement: Deployment and security section
The platform page SHALL display 5 deployment/security items with ShieldCheck icons: On-prem ready, Role-based control, Approval-aware workflow, Audit logging, Integration-ready.

#### Scenario: Security items render
- **WHEN** viewing the deployment section
- **THEN** five items with shield-check icons and descriptions are visible

### Requirement: Platform CTA
The platform page SHALL end with a gradient CTA section with headline and two buttons: "Book a Demo" and "Talk to Our Team".

#### Scenario: Platform CTA renders
- **WHEN** scrolling to the bottom of the platform page
- **THEN** a CTA section with two action buttons is displayed
