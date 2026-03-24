## ADDED Requirements

### Requirement: Grouped Mega-Menu Structure
The Navbar SHALL be restructured from flat navigation links to a grouped mega-menu structure. The top-level navigation groups SHALL be: Platform, Solutions, Customers, Resources, and Company.

#### Scenario: Top-level groups visible
- **WHEN** the Navbar renders on desktop
- **THEN** the top-level navigation SHALL display group labels for Platform, Solutions, Customers, Resources, and Company

#### Scenario: Flat links replaced
- **WHEN** the Navbar renders
- **THEN** the previous flat navigation link structure SHALL no longer be present

---

### Requirement: Desktop Hover-Triggered Dropdown Panels
On desktop viewports, each top-level navigation group SHALL display a hover-triggered dropdown panel. Each dropdown panel SHALL show grouped links with short descriptions.

#### Scenario: Hover to open dropdown
- **WHEN** the user hovers over a top-level navigation group on desktop
- **THEN** a dropdown panel SHALL appear showing grouped links with descriptions for that category

#### Scenario: Dropdown closes on mouse leave
- **WHEN** the user moves the mouse away from the dropdown panel and its trigger
- **THEN** the dropdown panel SHALL close

#### Scenario: Grouped links with descriptions
- **WHEN** a dropdown panel is open
- **THEN** each link within the panel SHALL display a label and a short description of the destination

---

### Requirement: Mobile Grouped Accordion Sections
The MobileMenu component SHALL be updated to use grouped accordion sections matching the mega-menu structure. Each group (Platform, Solutions, Customers, Resources, Company) SHALL expand to reveal its child links.

#### Scenario: Mobile menu accordion groups
- **WHEN** the MobileMenu is open on a mobile viewport
- **THEN** the menu SHALL display accordion sections for Platform, Solutions, Customers, Resources, and Company

#### Scenario: Expand accordion section
- **WHEN** the user taps a group heading in the MobileMenu
- **THEN** the accordion section SHALL expand to reveal the child links for that group

#### Scenario: Collapse accordion section
- **WHEN** the user taps an already-expanded group heading
- **THEN** the accordion section SHALL collapse to hide its child links

---

### Requirement: Locale Prefix Preservation
All navigation links within the mega-menu and mobile menu SHALL preserve the current locale prefix in their href attributes.

#### Scenario: Locale prefix in links
- **WHEN** the user is browsing in the `de` locale
- **THEN** all mega-menu and mobile menu links SHALL include the `/de` prefix in their paths

#### Scenario: Locale prefix for default locale
- **WHEN** the user is browsing in the `en` locale
- **THEN** all mega-menu and mobile menu links SHALL use the appropriate path format for the default locale
