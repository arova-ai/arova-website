## ADDED Requirements

### Requirement: Color palette
The design system SHALL define the following CSS custom properties as theme tokens: background (#0F172A), foreground (near-white #F8FAFC), card (#1E293B), border (#334155), primary/cyan (#06B6D4), accent/purple (#8B5CF6), destructive (red #EF4444), muted (#334155). Additional surface colors: `#161f30` for panel sections, `#0a0f18` for dark sections.

#### Scenario: Theme colors are applied
- **WHEN** a component uses `bg-background` or `text-primary`
- **THEN** the correct dark navy or cyan color is rendered

### Requirement: Typography
The design system SHALL use Inter as the primary font family and Noto Sans TC as the fallback for Traditional Chinese characters. Font weights 300–700 SHALL be available.

#### Scenario: Chinese text renders correctly
- **WHEN** viewing a zh-TW page with Chinese characters
- **THEN** text renders in Noto Sans TC with correct weight

### Requirement: Glass card effect
The design system SHALL provide a glass-card CSS utility class that applies: semi-transparent background (`bg-white/5`), subtle border (`border border-white/10`), backdrop blur (`backdrop-blur-md`), and rounded corners (`rounded-xl` or `rounded-2xl`).

#### Scenario: Glass card renders correctly
- **WHEN** a component applies the glass-card class
- **THEN** it displays a semi-transparent card with blur effect and subtle border

### Requirement: Glow shadow effects
The design system SHALL provide glow shadow utilities for cyan (`shadow-[0_0_20px_rgba(6,182,212,0.3)]`) and purple accents.

#### Scenario: Cyan glow is visible
- **WHEN** a CTA button has the cyan glow shadow
- **THEN** a subtle cyan glow appears around the button

### Requirement: Gradient text
The design system SHALL provide a gradient text utility that applies `bg-clip-text text-transparent` with a gradient from primary via cyan-300 to accent.

#### Scenario: Brand name uses gradient text
- **WHEN** "Arova Nexus" appears in a hero heading
- **THEN** the text displays a cyan-to-purple gradient

### Requirement: Text glow effects
The design system SHALL provide `.text-glow-cyan` and `.text-glow-purple` CSS classes that add subtle text shadow glow effects.

#### Scenario: CTA headline has glow
- **WHEN** a CTA section headline uses text-glow-cyan
- **THEN** the text has a subtle cyan glow shadow

### Requirement: Dark mode only
The design system SHALL render exclusively in dark mode. There SHALL be no light mode toggle or light theme variant.

#### Scenario: Site is always dark
- **WHEN** viewing any page regardless of OS color scheme preference
- **THEN** the dark navy background and light text are always used

### Requirement: Responsive breakpoints
The design system SHALL support responsive layouts using Tailwind's default breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px).

#### Scenario: Mobile layout
- **WHEN** the viewport is below 768px
- **THEN** multi-column grids collapse to single column and the mobile menu is shown
