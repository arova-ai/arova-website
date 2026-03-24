## ADDED Requirements

### Requirement: About hero
The about page SHALL display a hero with headline "About Arova" and a subtitle positioning Arova as the company behind Arova Nexus.

#### Scenario: Hero renders
- **WHEN** viewing `/en/about`
- **THEN** the hero section is displayed with "About Arova"

### Requirement: Brand story section
The about page SHALL include a "Why we built Arova Nexus" section with narrative text explaining the founding motivation.

#### Scenario: Brand story renders
- **WHEN** viewing the about page
- **THEN** the brand story section with founding narrative is visible

### Requirement: Mission and vision
The about page SHALL display mission and vision in two highlighted blocks. Mission: "Help enterprises build IT operations that are faster, safer, and more controllable." Vision: "Become a foundational platform for AI-driven enterprise IT operations transformation."

#### Scenario: Mission and vision render
- **WHEN** viewing the about page
- **THEN** both mission and vision statements are displayed in styled blocks

### Requirement: Security and privacy section
The about page SHALL include a security & privacy section with enterprise-oriented trust copy (Secure-by-design, on-prem support, immutable audit trails).

#### Scenario: Security section renders
- **WHEN** viewing the about page
- **THEN** the security & privacy section is visible

### Requirement: Contact info
The about page SHALL display contact information: business email (business@arova.io), support email (support@arova.io), and office address (Taipei 101).

#### Scenario: Contact info renders
- **WHEN** viewing the about page
- **THEN** email addresses and office address are displayed
