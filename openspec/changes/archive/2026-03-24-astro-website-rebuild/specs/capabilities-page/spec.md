## ADDED Requirements

### Requirement: Capabilities hero
The capabilities page SHALL display a dark hero section with headline "Arova Nexus Capabilities" and a subtitle describing the modular platform capabilities.

#### Scenario: Capabilities hero renders
- **WHEN** viewing `/en/capabilities`
- **THEN** the hero displays the headline and subtitle

### Requirement: Capabilities intro
The capabilities page SHALL include an intro section titled "Core capabilities for enterprise IT operations".

#### Scenario: Intro section renders
- **WHEN** viewing the capabilities page
- **THEN** the intro section title is visible

### Requirement: Six capability cards
The capabilities page SHALL display 6 capability cards in a responsive grid: AI Agent, Workflow Automation, Integration Hub, Governance & Guardrails, Observability, Analytics & Reporting. Each card SHALL include: title, description, and 3 highlight tags/chips.

#### Scenario: All capability cards render
- **WHEN** viewing the capabilities page
- **THEN** six glass-card styled capability cards are visible with titles, descriptions, and highlight chips

#### Scenario: Cards have highlight tags
- **WHEN** examining a capability card (e.g., AI Agent)
- **THEN** three highlight tags are shown (e.g., "NLP 語意解析", "動態任務規劃", "上下文記憶")

### Requirement: Capabilities CTA
The capabilities page SHALL end with a CTA section.

#### Scenario: CTA renders
- **WHEN** scrolling to the bottom
- **THEN** a CTA section with demo booking button is displayed
