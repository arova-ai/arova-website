## ADDED Requirements

### Requirement: Blog Index Page
The system SHALL serve a blog index page at `/blog`. The page SHALL be generated via `getStaticPaths` for both supported locales.

#### Scenario: Visiting blog index
- **WHEN** a user navigates to `/blog`
- **THEN** the page SHALL render with locale-appropriate content showing a collection of article cards

---

### Requirement: Article Cards
The blog index page SHALL display article cards sourced from locale data files. Each card SHALL show the article title, a category tag, estimated read time, and publication date.

#### Scenario: Article card content
- **WHEN** the blog index page loads
- **THEN** each article card SHALL display a title, category tag, read time, and date

#### Scenario: Cards are placeholders
- **WHEN** a user clicks on an article card
- **THEN** the card SHALL NOT navigate to an article detail page, as individual article pages are not implemented

---

### Requirement: Category Filtering
The blog index page SHALL support filtering articles by category. The supported categories SHALL be: Insights, Technical, Industry Trends, Use Cases, and Product Updates.

#### Scenario: Default view
- **WHEN** the blog index page loads without a filter selection
- **THEN** all article cards SHALL be displayed

#### Scenario: Filter by category
- **WHEN** the user selects a category filter (e.g., "Technical")
- **THEN** only article cards matching that category SHALL be displayed

#### Scenario: All categories available
- **WHEN** the user views the filter options
- **THEN** filter options for Insights, Technical, Industry Trends, Use Cases, and Product Updates SHALL be available

---

### Requirement: Initial Article Entries
The locale data files SHALL contain 8 initial article entries with titles, categories, read times, dates, and short descriptions.

#### Scenario: Article count
- **WHEN** the blog index page loads
- **THEN** at least 8 article cards SHALL be rendered from locale data

#### Scenario: Locale data structure
- **WHEN** the site is built
- **THEN** both `en` and `de` locale files SHALL contain 8 article entries with all required fields (title, category, readTime, date, description)
