## ADDED Requirements

### Requirement: Three Industry Pages
The system SHALL serve 3 industry pages at the following routes: `/industries/financial-services`, `/industries/manufacturing`, and `/industries/technology`. Each page SHALL be generated via `getStaticPaths` for both supported locales.

#### Scenario: Visiting an industry page
- **WHEN** a user navigates to any of the 3 industry routes
- **THEN** the page SHALL render with locale-appropriate content specific to that industry

#### Scenario: All industry routes are generated
- **WHEN** the static site is built
- **THEN** `getStaticPaths` SHALL return paths for all 3 industry slugs across both `en` and `de` locales

---

### Requirement: Industry-Specific Hero
Each industry page SHALL include a hero section with a headline and description tailored to the specific industry's context, language, and priorities.

#### Scenario: Hero renders with industry context
- **WHEN** an industry page loads
- **THEN** the hero section SHALL display an industry-specific headline and description relevant to that sector

---

### Requirement: Four Industry Challenges
Each industry page SHALL present exactly 4 challenges that are specific to the industry. Each challenge SHALL have a title and description.

#### Scenario: Challenges display
- **WHEN** the user views the challenges section
- **THEN** exactly 4 industry-specific challenges SHALL be displayed with titles and descriptions

---

### Requirement: Nexus Intelligence Solutions for Each Challenge
Each industry page SHALL explain how Arova Nexus addresses each of the 4 industry challenges. The explanations SHALL be mapped directly to the challenges presented.

#### Scenario: Solutions mapped to challenges
- **WHEN** the user views the solutions section
- **THEN** each of the 4 challenges SHALL have a corresponding explanation of how Arova Nexus addresses it

---

### Requirement: Compliance and Certification Callouts
Each industry page SHALL include callouts for compliance standards and certifications relevant to that industry (e.g., SOX, PCI-DSS for financial services; ISO standards for manufacturing; SOC 2 for technology).

#### Scenario: Compliance callouts display
- **WHEN** the user views the compliance section
- **THEN** industry-relevant compliance standards and certifications SHALL be listed with brief descriptions

---

### Requirement: Related Case Study
Each industry page SHALL include a link or card pointing to a related case study relevant to that industry.

#### Scenario: Case study link
- **WHEN** the user views the case study section
- **THEN** a link or card SHALL direct the user to a case study relevant to the industry

---

### Requirement: Industry-Specific CTA
Each industry page SHALL end with a call-to-action tailored to the industry audience.

#### Scenario: CTA display
- **WHEN** the user reaches the bottom of an industry page
- **THEN** an industry-specific CTA SHALL be visible with appropriate action text and link
