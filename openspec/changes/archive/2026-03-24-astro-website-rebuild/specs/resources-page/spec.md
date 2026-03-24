## ADDED Requirements

### Requirement: Resources hero
The resources page SHALL display a hero with headline "Resources" and a subtitle about whitepapers, guides, and insights.

#### Scenario: Hero renders
- **WHEN** viewing `/en/resources`
- **THEN** the hero section is displayed

### Requirement: Featured insights section
The resources page SHALL display 3 featured insight article cards: "What is AI-First IT Operations?", "How AI Agents are changing IT operations", "Why enterprises need a governable automation platform".

#### Scenario: Three insight cards render
- **WHEN** viewing the featured insights section
- **THEN** three article cards with titles and metadata styling are visible

### Requirement: Resource sub-sections
The resources page SHALL include placeholder sections for: FAQ & Answers, Catalogs & Whitepapers, Product Demos, Glossary & Perspectives.

#### Scenario: Sub-sections render
- **WHEN** viewing the resources page
- **THEN** four categorized resource sections are visible with placeholder content

### Requirement: Resources CTA
The page SHALL end with a CTA section.

#### Scenario: CTA renders
- **WHEN** scrolling to the bottom
- **THEN** a CTA section is displayed
