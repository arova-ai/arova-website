## ADDED Requirements

### Requirement: Glossary Page
The system SHALL serve a glossary page at `/glossary`. The page SHALL be generated via `getStaticPaths` for both supported locales.

#### Scenario: Visiting glossary page
- **WHEN** a user navigates to `/glossary`
- **THEN** the page SHALL render with locale-appropriate glossary terms and definitions

---

### Requirement: Searchable and Browsable Format
The glossary page SHALL display terms with their definitions in a format that supports both searching and browsing. A search input SHALL allow users to filter terms by keyword.

#### Scenario: Search functionality
- **WHEN** the user types a keyword into the search input
- **THEN** the displayed terms SHALL be filtered to show only terms whose name or definition matches the keyword

#### Scenario: Browse without search
- **WHEN** the glossary page loads without any search input
- **THEN** all glossary terms SHALL be displayed

---

### Requirement: Alphabetical or Category Grouping
The glossary page SHALL organize terms using alphabetical grouping or category grouping so users can navigate to specific sections.

#### Scenario: Grouped display
- **WHEN** the user views the glossary
- **THEN** terms SHALL be organized into visible groups (alphabetical letters or categories) with group headings

#### Scenario: Navigation within groups
- **WHEN** the user clicks a group heading or navigation link
- **THEN** the page SHALL scroll to or display the corresponding group of terms

---

### Requirement: Minimum Term Count and Coverage
The glossary SHALL contain at least 15 terms. The terms MUST include: AIOps, MTTR, MTTA, Runbook, SRE, Observability, ChatOps, JIT Access, and Governance Guardrails, along with additional relevant terms.

#### Scenario: Term count
- **WHEN** the glossary page loads
- **THEN** at least 15 terms SHALL be displayed

#### Scenario: Required terms present
- **WHEN** the glossary page loads
- **THEN** the terms AIOps, MTTR, MTTA, Runbook, SRE, Observability, ChatOps, JIT Access, and Governance Guardrails SHALL all be present with definitions

#### Scenario: Locale data
- **WHEN** the site is built
- **THEN** both `en` and `de` locale files SHALL contain all glossary terms with translated definitions
