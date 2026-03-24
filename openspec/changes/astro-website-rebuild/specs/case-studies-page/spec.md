## ADDED Requirements

### Requirement: Case studies hero
The case studies page SHALL display a hero section with headline "Case Studies & Use Scenarios" and a subtitle.

#### Scenario: Hero renders
- **WHEN** viewing `/en/case-studies`
- **THEN** the hero section is displayed with headline and subtitle

### Requirement: Three case study sections
The case studies page SHALL present 3 enterprise mock case studies: (1) Deployment governance for a large enterprise IT team, (2) Faster incident investigation and root cause analysis, (3) Extending automation value across existing enterprise tools. Each case study SHALL include: customer background, challenge, implementation, and outcomes (bulleted with check marks).

#### Scenario: All case studies render
- **WHEN** viewing the case studies page
- **THEN** three detailed case study sections are visible

#### Scenario: Case study structure
- **WHEN** examining any case study
- **THEN** it contains background, challenge, implementation, and outcomes subsections

### Requirement: Case studies CTA
The page SHALL end with a CTA section.

#### Scenario: CTA renders
- **WHEN** scrolling to the bottom
- **THEN** a CTA section is displayed
