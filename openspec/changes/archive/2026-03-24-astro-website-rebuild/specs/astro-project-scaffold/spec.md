## ADDED Requirements

### Requirement: Astro project initialization
The project SHALL use Astro 5.x with static output mode, TypeScript strict mode, and Vite as the build tool.

#### Scenario: Project builds successfully
- **WHEN** running `npm run build`
- **THEN** the project produces a static `dist/` directory with all HTML pages

#### Scenario: Dev server starts
- **WHEN** running `npm run dev`
- **THEN** a local dev server starts with hot reload on port 4321

### Requirement: Required dependencies
The project SHALL include the following dependencies: `astro`, `@astrojs/react`, `@astrojs/tailwind` (or `@tailwindcss/vite`), `react`, `react-dom`, `framer-motion`, `lucide-react`, and `typescript`.

#### Scenario: All dependencies install cleanly
- **WHEN** running `npm install`
- **THEN** all dependencies resolve without conflicts

### Requirement: Tailwind CSS v4 integration
The project SHALL use Tailwind CSS v4 integrated via the Vite plugin, with theme tokens defined in a global CSS file using `@theme`.

#### Scenario: Tailwind utilities are available
- **WHEN** a component uses Tailwind utility classes (e.g., `bg-primary`, `text-foreground`)
- **THEN** the corresponding styles are applied in the rendered output

### Requirement: Folder structure
The project SHALL follow the structure defined in design.md D7, with `src/pages/[locale]/` for route pages, `src/components/` for reusable components, `src/i18n/` for locale files, `src/layouts/` for base layouts, and `src/styles/` for global CSS.

#### Scenario: Pages are in locale-based routes
- **WHEN** examining the `src/pages/` directory
- **THEN** all page files exist under `src/pages/[locale]/` with correct filenames (index.astro, platform.astro, solutions.astro, capabilities.astro, case-studies.astro, resources.astro, about.astro, experthub.astro, contact.astro)

### Requirement: Static output configuration
The Astro config SHALL set `output: 'static'` and configure `site` URL for proper canonical URL generation.

#### Scenario: Build produces static files
- **WHEN** the project is built
- **THEN** the output contains pre-rendered HTML files for every locale/page combination (18 HTML files total: 9 pages x 2 locales)
