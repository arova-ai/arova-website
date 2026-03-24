## ADDED Requirements

### Requirement: Nexus Intelligence Page Route
The system SHALL serve a page at `/platform/nexus-intelligence`. The page SHALL be generated via `getStaticPaths` for both supported locales (`en` and `de`).

#### Scenario: Visiting Nexus Intelligence page
- **WHEN** a user navigates to `/platform/nexus-intelligence`
- **THEN** the page SHALL render with locale-appropriate content and a valid HTML document title

#### Scenario: Locale generation
- **WHEN** the static site is built
- **THEN** `getStaticPaths` SHALL return paths for both `en` and `de` locales

---

### Requirement: Hero Section
The page SHALL include a hero section that introduces Nexus Intelligence as Arova's core AI engine. The hero SHALL contain a headline, a supporting description paragraph, and a visual element or illustration placeholder.

#### Scenario: Hero renders
- **WHEN** the page loads
- **THEN** a hero section SHALL be visible at the top of the page explaining Nexus Intelligence as the AI engine that powers the Arova platform

---

### Requirement: 5-Step Reasoning Flow
The page SHALL present a 5-step reasoning flow diagram with the steps: Perceive, Understand, Plan, Execute, and Learn. Each step SHALL have a short description. The steps SHALL be connected by a visual flow indicator (arrows or connectors).

#### Scenario: Reasoning flow display
- **WHEN** the user views the reasoning flow section
- **THEN** all 5 steps (Perceive, Understand, Plan, Execute, Learn) SHALL be displayed in sequential order with descriptions and visual connectors between them

#### Scenario: Flow diagram responsiveness
- **WHEN** the page is viewed on a mobile viewport
- **THEN** the flow diagram SHALL reflow to a vertical/stacked layout while preserving step order and connectors

---

### Requirement: Technical Components
The page SHALL list 6 named technical components of Nexus Intelligence: Intent Parser, Context Memory, Task Planner, Governance Validator, Action Orchestrator, and Knowledge Accumulator. Each component SHALL include a name, a short description of its role, and an icon or visual indicator.

#### Scenario: Component display
- **WHEN** the user scrolls to the technical components section
- **THEN** all 6 components (Intent Parser, Context Memory, Task Planner, Governance Validator, Action Orchestrator, Knowledge Accumulator) SHALL be visible with their names and descriptions

---

### Requirement: Governance-First AI Section
The page SHALL include a "Governance-First AI" section explaining that Nexus Intelligence is controllable and auditable. The section SHALL describe how governance guardrails are built into the reasoning process rather than bolted on afterward.

#### Scenario: Governance section renders
- **WHEN** the user views the Governance-First AI section
- **THEN** the section SHALL explain how Arova's AI is controllable, auditable, and governed by design

---

### Requirement: Comparison Table
The page SHALL display a comparison table with 4 columns: Nexus Intelligence, Rule Engines, Generic LLM, and DIY Scripts. The table SHALL compare these approaches across multiple criteria such as adaptability, governance, learning capability, and implementation effort.

#### Scenario: Comparison table display
- **WHEN** the user views the comparison section
- **THEN** a table SHALL render with Nexus Intelligence, Rule Engines, Generic LLM, and DIY Scripts as column headers, with rows comparing relevant criteria

#### Scenario: Mobile comparison view
- **WHEN** the table is viewed on a narrow viewport
- **THEN** the table SHALL be horizontally scrollable or reformatted so all data remains accessible

---

### Requirement: Dual CTA Section
The page SHALL end with a call-to-action section offering two distinct options: request a demo and download a whitepaper.

#### Scenario: CTA display
- **WHEN** the user reaches the bottom of the page
- **THEN** two CTA options SHALL be visible: one for requesting a demo and one for downloading a whitepaper
