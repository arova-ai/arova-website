## ADDED Requirements

### Requirement: Assessment Page
The system SHALL serve an assessment page at `/assessment`. The page SHALL be generated via `getStaticPaths` for both supported locales.

#### Scenario: Visiting assessment page
- **WHEN** a user navigates to `/assessment`
- **THEN** the page SHALL render with locale-appropriate content and an interactive questionnaire

---

### Requirement: React Island with Interactive Questionnaire
The assessment page SHALL include a React island component that presents a 6-question interactive questionnaire. The questionnaire SHALL handle all logic client-side.

#### Scenario: Questionnaire renders
- **WHEN** the assessment page loads
- **THEN** a React island component SHALL hydrate and display the first question of the questionnaire

#### Scenario: Client-side interactivity
- **WHEN** the user interacts with the questionnaire
- **THEN** all question navigation, answer storage, and scoring SHALL happen client-side without server requests

---

### Requirement: Six Assessment Questions
The questionnaire SHALL present exactly 6 questions covering: team size, ticket volume, tool count, current MTTR, compliance needs, and deployment preference. Each question SHALL offer predefined answer options.

#### Scenario: Question topics
- **WHEN** the user progresses through the questionnaire
- **THEN** questions SHALL cover team size, ticket volume, tool count, MTTR, compliance needs, and deployment preference in sequence

#### Scenario: Answer options
- **WHEN** a question is displayed
- **THEN** predefined answer options (e.g., radio buttons, selectable cards) SHALL be available for the user to choose from

---

### Requirement: Client-Side Scoring
The questionnaire SHALL calculate an automation potential score client-side based on the user's answers. The scoring algorithm SHALL weight answers to produce a numerical score.

#### Scenario: Score calculation
- **WHEN** the user completes all 6 questions
- **THEN** the system SHALL calculate an automation potential score based on the selected answers without making any server requests

---

### Requirement: Personalized Results Display
After completing the questionnaire, the page SHALL display personalized results including: the automation potential score, estimated savings, 3 recommended scenarios tailored to the user's answers, and a CTA to discuss results with the Arova team.

#### Scenario: Results display
- **WHEN** the scoring is complete
- **THEN** the results section SHALL show the automation potential score, estimated savings, and 3 recommended scenarios

#### Scenario: Results CTA
- **WHEN** the results are displayed
- **THEN** a CTA SHALL be visible encouraging the user to discuss results with the Arova team

#### Scenario: Retake assessment
- **WHEN** the user views the results
- **THEN** an option to retake the assessment SHALL be available
