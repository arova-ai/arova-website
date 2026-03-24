## ADDED Requirements

### Requirement: HeroNodeNetwork component
A React island component SHALL render an animated SVG node network with 7 nodes connected to a central hub by animated lines, with glow filter effects, pulsing background blur circles, and staggered path animations via framer-motion.

#### Scenario: Node network animates on load
- **WHEN** the homepage hero is visible
- **THEN** the SVG nodes and connecting lines animate in with staggered timing

#### Scenario: Node network uses client:visible
- **WHEN** the hero section scrolls into view
- **THEN** the React island JavaScript loads and the animation begins

### Requirement: PlatformBlockDiagram component
A React island component SHALL render a vertical stack of 6 platform architecture layers (Experience Layer, AI Agent Layer, Automation Engine, Integration Hub, Governance & Guardrails, Observability), each as a card with icon and label, connected by a vertical gradient line, with staggered spring animations triggered on scroll.

#### Scenario: Block diagram renders layers
- **WHEN** the platform overview section is visible
- **THEN** six layered blocks are displayed vertically with a connecting gradient line

### Requirement: Architecture diagram
The platform page SHALL include a structured architecture visualization showing the 6 platform layers in a diagram format, distinct from plain cards.

#### Scenario: Architecture diagram renders
- **WHEN** viewing the platform page architecture section
- **THEN** a visual architecture diagram with layered structure is displayed

### Requirement: Process flow visualization
The homepage "How it Works" section SHALL display a horizontal process flow with numbered circles connected by a gradient line on desktop, collapsing to vertical on mobile.

#### Scenario: Desktop flow renders horizontally
- **WHEN** viewing on desktop
- **THEN** five numbered steps are arranged horizontally with connecting line

#### Scenario: Mobile flow renders vertically
- **WHEN** viewing on mobile
- **THEN** five numbered steps are arranged vertically

### Requirement: Solution workflow mini-visuals
Each solution section on the solutions page SHALL include a contextual mini workflow visual (icon-based diagram or structured graphic) alongside the text content.

#### Scenario: Solution visual renders
- **WHEN** viewing a solution section
- **THEN** a visual element accompanies the text content on the alternating side
