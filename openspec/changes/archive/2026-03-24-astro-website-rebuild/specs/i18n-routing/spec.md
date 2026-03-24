## ADDED Requirements

### Requirement: Locale-based routing
The site SHALL support two locales via URL path prefix: `/zh-TW/` (Traditional Chinese, default) and `/en/` (English).

#### Scenario: Accessing zh-TW homepage
- **WHEN** a user navigates to `/zh-TW`
- **THEN** the homepage renders with Traditional Chinese content

#### Scenario: Accessing en homepage
- **WHEN** a user navigates to `/en`
- **THEN** the homepage renders with English content

### Requirement: Root redirect
The root path `/` SHALL redirect to `/zh-TW` (the default locale).

#### Scenario: Root URL redirects
- **WHEN** a user navigates to `/`
- **THEN** the user is redirected to `/zh-TW`

### Requirement: Static path generation
Each page SHALL use `getStaticPaths()` to generate both `/zh-TW/...` and `/en/...` variants at build time.

#### Scenario: All locale variants are generated
- **WHEN** the site is built
- **THEN** every page exists in both `/zh-TW/` and `/en/` route prefixes

### Requirement: Language switcher
The site SHALL display a language switcher in the navbar showing "繁中 / EN" that toggles between locales while preserving the current page path.

#### Scenario: Switching from zh-TW to en
- **WHEN** a user is on `/zh-TW/platform` and clicks the EN language toggle
- **THEN** the user navigates to `/en/platform`

#### Scenario: Switching from en to zh-TW
- **WHEN** a user is on `/en/solutions` and clicks the 繁中 language toggle
- **THEN** the user navigates to `/zh-TW/solutions`

### Requirement: Translation content files
All translatable content SHALL be stored in structured JSON files at `src/i18n/zh-TW.json` and `src/i18n/en.json`, with nested keys matching page/section structure.

#### Scenario: Content is externalized
- **WHEN** examining any page component
- **THEN** no user-visible text is hardcoded; all text comes from the locale JSON files

### Requirement: HTML lang attribute
Each rendered page SHALL set the correct `<html lang>` attribute (`zh-TW` or `en`) based on the current locale.

#### Scenario: Chinese page has correct lang
- **WHEN** viewing the HTML source of a `/zh-TW/` page
- **THEN** the `<html>` tag has `lang="zh-TW"`

### Requirement: Localized metadata
Each page SHALL have locale-specific `<title>`, `<meta name="description">`, and Open Graph tags.

#### Scenario: zh-TW page metadata
- **WHEN** viewing a zh-TW page's HTML head
- **THEN** the title, description, og:title, and og:description are in Traditional Chinese

#### Scenario: en page metadata
- **WHEN** viewing an en page's HTML head
- **THEN** the title, description, og:title, and og:description are in English

### Requirement: Navigation links preserve locale
All internal navigation links SHALL include the current locale prefix in their href.

#### Scenario: Nav links on zh-TW pages
- **WHEN** viewing the navbar on a `/zh-TW/` page
- **THEN** all nav links point to `/zh-TW/...` paths
