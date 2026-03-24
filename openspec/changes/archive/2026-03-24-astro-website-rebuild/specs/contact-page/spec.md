## ADDED Requirements

### Requirement: Contact hero
The contact page SHALL display a hero with headline "Book a Demo / Contact Us" and a subtitle inviting users to share their IT environment and challenges.

#### Scenario: Hero renders
- **WHEN** viewing `/en/contact`
- **THEN** the hero section is displayed

### Requirement: Contact form
The contact page SHALL display a 2-column layout on desktop: left column with a contact form, right column with supporting side content. The form SHALL include fields for: Name, Company, Job Title, Work Email, Phone, Challenge (textarea), Deployment Type (dropdown: SaaS, VPC, On-Prem, Undecided), Timeline (dropdown: Immediate, Short-term, Long-term, Research only). All labels and placeholders SHALL be bilingual.

#### Scenario: Form fields render
- **WHEN** viewing the contact form
- **THEN** all 8 form fields with correct labels and placeholders are visible

#### Scenario: Form submission is mock
- **WHEN** a user clicks "Submit Inquiry"
- **THEN** the form performs a mock submission (no actual backend call)

### Requirement: Side content
The right column SHALL display 3 informational sections: "Why talk to Arova", "What we can discuss", "What you can expect".

#### Scenario: Side content renders
- **WHEN** viewing the contact page on desktop
- **THEN** three side content sections are visible alongside the form

### Requirement: Responsive form layout
On mobile, the form and side content SHALL stack vertically (form first, side content below).

#### Scenario: Mobile layout stacks
- **WHEN** viewing the contact page on mobile
- **THEN** the form appears above the side content in a single column
