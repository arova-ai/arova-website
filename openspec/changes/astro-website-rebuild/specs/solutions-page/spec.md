## ADDED Requirements

### Requirement: Solutions hero
The solutions page SHALL display a centered hero with headline "Solutions for modern enterprise IT operations" and a descriptive subtitle.

#### Scenario: Solutions hero renders
- **WHEN** viewing `/en/solutions`
- **THEN** the hero section displays the headline and subtitle

### Requirement: Five solution sections
The solutions page SHALL present 5 solution sections in alternating layout (text/visual sides swap): AI-Driven IT Operations, Smart Deployment & Change Governance, Incident Investigation & Root Cause Analysis, Compliance & Access Control, Enterprise Workflow Integration. Each solution SHALL include: a pain point (red/destructive text), how Arova Nexus helps (description), and 3 outcomes (green-accented check items).

#### Scenario: All solutions render with structure
- **WHEN** viewing the solutions page
- **THEN** five solution sections are visible, each with pain point, description, and outcomes

#### Scenario: Solutions alternate layout
- **WHEN** viewing solutions on desktop
- **THEN** odd-numbered solutions show text on left/visual on right, even-numbered solutions swap sides

### Requirement: Solutions summary
The solutions page SHALL include a centered summary section with headline "Arova Nexus helps teams operate with more speed, more consistency, and more control".

#### Scenario: Summary renders
- **WHEN** scrolling past the solutions
- **THEN** a summary section with the value proposition headline is displayed

### Requirement: Solutions CTA
The solutions page SHALL end with a CTA section containing "Book a Demo" and "Contact Sales" buttons.

#### Scenario: Solutions CTA renders
- **WHEN** scrolling to the bottom of the solutions page
- **THEN** a CTA section with two buttons is displayed
