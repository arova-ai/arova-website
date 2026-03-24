## ADDED Requirements

### Requirement: Base layout
A `BaseLayout.astro` component SHALL wrap all pages, providing the HTML document shell with `<!DOCTYPE html>`, `<html lang>`, `<head>` (fonts, meta, CSS), and `<body>`.

#### Scenario: Every page uses BaseLayout
- **WHEN** any page is rendered
- **THEN** it includes proper HTML5 doctype, charset, viewport meta, and font loading

### Requirement: Sticky navbar
The navbar SHALL be fixed at the top of the viewport (`position: fixed`, `z-50`), spanning full width. On scroll past 20px, it SHALL transition to a blurred glass background (`bg-background/80 backdrop-blur-md`) with a subtle bottom border.

#### Scenario: Navbar scrolls with glass effect
- **WHEN** the user scrolls down past 20px
- **THEN** the navbar background transitions from transparent to blurred glass with reduced padding

#### Scenario: Navbar returns to transparent
- **WHEN** the user scrolls back to the top
- **THEN** the navbar background returns to transparent with larger padding

### Requirement: Navbar logo
The navbar SHALL display the Arova logo (gradient square badge with "A" + "Arova" text) linking to the locale homepage.

#### Scenario: Logo links to homepage
- **WHEN** a user clicks the logo on `/en/platform`
- **THEN** the user navigates to `/en`

### Requirement: Desktop navigation links
On viewports >= `lg` breakpoint, the navbar SHALL display horizontal navigation links: Platform, Solutions, Capabilities, Case Studies, Resources, About. All labels SHALL be translated per current locale.

#### Scenario: Desktop nav shows all links
- **WHEN** viewport is 1024px or wider
- **THEN** all 6 nav links are visible in a horizontal row

### Requirement: Primary CTA in navbar
The navbar SHALL include a "Book a Demo" / "預約 Demo" button as a primary CTA, styled with rounded-full, primary background, and cyan glow shadow, linking to the contact page.

#### Scenario: CTA navigates to contact
- **WHEN** a user clicks "Book a Demo" in the navbar
- **THEN** the user navigates to `/{locale}/contact`

### Requirement: Mobile hamburger menu
On viewports below `lg` breakpoint, the navbar SHALL display a hamburger menu icon. Clicking it SHALL open an animated dropdown panel containing all navigation links, the language switcher, and the CTA button.

#### Scenario: Mobile menu opens
- **WHEN** a user taps the hamburger icon on mobile
- **THEN** an animated panel slides down showing all nav links, language switcher, and CTA

#### Scenario: Mobile menu closes
- **WHEN** the mobile menu is open and the user taps the X icon or a nav link
- **THEN** the menu panel closes with animation

### Requirement: Footer
The footer SHALL display in a multi-column grid layout on a dark background (`#0a0f18`), containing: Arova logo + vision text + social icons (LinkedIn, email), Product links (Platform, Capabilities, Solutions), Company links (About, Case Studies, Book a Demo), Contact info (email, address). A bottom bar SHALL show copyright and Privacy Policy / Terms of Service links.

#### Scenario: Footer renders on all pages
- **WHEN** any page is loaded
- **THEN** the footer is visible at the bottom with all columns and links

### Requirement: Page content padding
The main content area SHALL have `pt-24` (96px top padding) to clear the fixed navbar.

#### Scenario: Content does not overlap navbar
- **WHEN** any page loads
- **THEN** the first section's content starts below the fixed navbar without overlap
