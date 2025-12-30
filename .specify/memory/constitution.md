<!--
SYNC IMPACT REPORT - Constitution v1.0.0
═══════════════════════════════════════════════════════════════════════════

VERSION CHANGE: NONE → 1.0.0 (Initial ratification)

RATIONALE: First constitution for the MoneyManager project. Establishes core
principles for accessibility, testing, modern tooling, and code quality.

PRINCIPLES ADDED:
- I. Accessibility First (WCAG 2.1 AA compliance, semantic HTML, ARIA)
- II. Responsive Design (Mobile-first, popular breakpoints)
- III. Comprehensive Testing (Unit tests mandatory, behavior testing, Jest/RTL)
- IV. Modern TypeScript (Latest version, strict mode, SOLID/DRY principles)
- V. Component Architecture (shadcn/ui, Tailwind CSS, CSS Modules)
- VI. State Management (Tanstack ecosystem preference)
- VII. CSS Quality (No !important, organized modules)

SECTIONS ADDED:
- Technology Stack (React 19, TypeScript, Vite, Tanstack, shadcn/ui)
- Quality Standards (Code review, test coverage, linting)

TEMPLATE UPDATES:
✅ .specify/templates/plan-template.md - Constitution Check section requires update
✅ .specify/templates/spec-template.md - Aligned with accessibility and testing requirements
✅ .specify/templates/tasks-template.md - Testing task structure verified

DEFERRED ITEMS: None

═══════════════════════════════════════════════════════════════════════════
-->

# MoneyManager Constitution

## Core Principles

### I. Accessibility First

All code MUST be accessible and comply with WCAG 2.1 Level AA standards. This is NON-NEGOTIABLE.

**Requirements**:
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.) instead of generic `<div>` with click handlers
- Provide ARIA labels, roles, and attributes where semantic HTML is insufficient
- Ensure keyboard navigation works for all interactive elements (Tab, Enter, Escape, Arrow keys)
- Maintain color contrast ratios of at least 4.5:1 for normal text and 3:1 for large text
- Support screen readers with meaningful alternative text and announcements
- Test with assistive technologies (screen readers, keyboard-only navigation)

**Rationale**: Accessibility is a fundamental right, not a feature. Excluding users with disabilities is unacceptable, and retrofitting accessibility is far more costly than building it in from the start.

### II. Responsive Design

All interfaces MUST be responsive and work across the most popular device breakpoints using a mobile-first approach.

**Required Breakpoints**:
- Mobile: 320px - 767px (default/mobile-first)
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

**Requirements**:
- Design for mobile first, then progressively enhance for larger screens
- Use fluid layouts and flexible grids (Tailwind's responsive utilities)
- Test on real devices or browser device emulation
- Ensure touch targets are at least 44×44px on mobile
- Avoid horizontal scrolling on any breakpoint

**Rationale**: Mobile traffic often exceeds desktop. A mobile-first approach ensures the core experience works for the largest audience and prevents bloated desktop-centric designs.

### III. Comprehensive Testing (NON-NEGOTIABLE)

All code MUST be unit tested. Testing is mandatory and non-negotiable.

**Testing Requirements**:
- **Test Behavior, Not Implementation**: Focus on what the code does, not how it does it
- **Use Jest and React Testing Library**: Official testing framework for React applications
- **Mock External Dependencies**: Isolate units under test from external services, APIs, and timers
- **Use Descriptive Test Names**: Test names must clearly describe the scenario and expected outcome
- **Test Coverage**: Aim for meaningful coverage of user-facing behavior, not arbitrary percentage goals
- **Test Structure**: Follow Arrange-Act-Assert (AAA) pattern

**Examples**:
```javascript
// GOOD - Tests behavior
test('displays error message when login fails with invalid credentials', async () => {
  // Arrange, Act, Assert
});

// BAD - Tests implementation
test('calls handleLoginError with 401 status code', () => {
  // Testing internal implementation detail
});
```

**Rationale**: Untested code is broken code waiting to happen. Behavior-focused tests ensure code works from the user's perspective and remain stable during refactoring.

### IV. Modern TypeScript

Use the latest stable version of TypeScript with strict mode enabled. Follow SOLID and DRY principles.

**Requirements**:
- Enable `strict: true` in tsconfig.json
- Avoid `any` type; use `unknown` with type guards when type is truly unknown
- Define explicit types for function parameters and return values
- Use TypeScript utility types (Pick, Omit, Partial, etc.) to avoid duplication
- Follow SOLID principles:
  - Single Responsibility: One class/module, one reason to change
  - Open/Closed: Open for extension, closed for modification
  - Liskov Substitution: Subtypes must be substitutable for their base types
  - Interface Segregation: Many specific interfaces over one general interface
  - Dependency Inversion: Depend on abstractions, not concretions
- Follow DRY (Don't Repeat Yourself): Extract repeated logic into reusable functions/components

**Rationale**: TypeScript's type system catches bugs at compile time, documents code intent, and enables confident refactoring. SOLID and DRY principles keep code maintainable and scalable.

### V. Component Architecture

Use shadcn/ui components and Tailwind CSS for all UI components. Use CSS Modules for custom styling.

**Requirements**:
- Prefer shadcn/ui components for common UI patterns (buttons, forms, dialogs, etc.)
- Use Tailwind utility classes for layout and responsive design
- Use CSS Modules (`.module.css`) for component-specific custom styles
- Avoid global CSS except for design tokens and CSS reset/normalize
- Follow shadcn/ui customization patterns for theming and variants
- Keep components small and focused (Single Responsibility Principle)

**File Structure**:
```
src/components/
├── ui/              # shadcn/ui components
│   ├── button.tsx
│   └── card.tsx
├── features/        # Feature-specific components
│   └── TransactionList/
│       ├── TransactionList.tsx
│       ├── TransactionList.module.css
│       └── TransactionList.test.tsx
```

**Rationale**: shadcn/ui provides accessible, customizable components. Tailwind enables rapid development with consistent design. CSS Modules prevent style conflicts and keep styles scoped to components.

### VI. State Management

Prefer the Tanstack ecosystem (TanStack Query, TanStack Router, TanStack Table, etc.) when writing new code or updating existing code.

**Requirements**:
- Use **TanStack Query** (React Query) for server state management (API calls, caching, synchronization)
- Use **TanStack Router** for type-safe routing with built-in data loading
- Use **TanStack Table** for complex data tables with sorting, filtering, pagination
- Use React's built-in state (useState, useReducer, Context) for local UI state
- Avoid Redux unless absolutely necessary for complex global state that Tanstack cannot handle

**Server State vs. UI State**:
- **Server State** (TanStack Query): API data, user profiles, transactions, remote data
- **UI State** (React hooks): Form inputs, modal open/closed, selected tab, local toggles

**Rationale**: TanStack libraries are modern, type-safe, and eliminate common state management pitfalls (stale data, race conditions, manual cache invalidation). They reduce boilerplate and improve developer experience.

### VII. CSS Quality Standards

Avoid using `!important` in CSS. Organize styles using CSS Modules.

**Requirements**:
- NEVER use `!important` except for legitimate overrides of third-party libraries (document why)
- Use CSS Modules (`.module.css`) to scope styles to components
- Follow specificity hierarchy: element < class < ID
- Use Tailwind's utility classes for common patterns
- Define CSS custom properties (variables) for design tokens (colors, spacing, typography)
- Keep selectors shallow (avoid deep nesting like `.parent .child .grandchild .item`)

**Acceptable !important Use** (rare):
```css
/* ONLY when overriding third-party library that uses !important */
.customDropdown {
  z-index: 1000 !important; /* Override library's z-index */
  /* Documented reason: Library uses !important internally */
}
```

**Rationale**: `!important` creates specificity wars and makes CSS unmaintainable. Proper architecture and scoping eliminate the need for it in 99% of cases.

## Technology Stack

**Frontend Framework**: React 19.2+ (latest stable version)
**Language**: TypeScript 5.9+ with strict mode enabled
**Build Tool**: Vite 7.2+
**Styling**: Tailwind CSS + CSS Modules
**Component Library**: shadcn/ui
**State Management**: TanStack Query (React Query), React hooks
**Routing**: TanStack Router
**Testing**: Jest + React Testing Library
**Linting**: ESLint with TypeScript and React plugins

## Quality Standards

### Code Review
- All code MUST be reviewed before merging
- Reviewers MUST verify compliance with this constitution
- PRs must include tests for new functionality
- PRs must pass all linting and type checking

### Test Coverage
- All user-facing features MUST have unit tests
- Focus on behavior coverage, not line coverage percentage
- Tests must be maintainable and test the right things

### Linting and Formatting
- ESLint must pass with zero errors (warnings are acceptable temporarily)
- TypeScript compiler must pass with zero errors in strict mode
- Follow project's ESLint configuration

### Performance
- Monitor bundle size and lazy-load routes/components when appropriate
- Use TanStack Query's caching to minimize unnecessary API calls
- Optimize images and assets for web delivery

## Governance

This constitution supersedes all other development practices and preferences. When in conflict, the constitution takes precedence.

**Amendment Process**:
1. Proposed amendments must be documented with clear rationale
2. Amendments require team approval (or project owner approval for solo projects)
3. Version number must be incremented according to semantic versioning:
   - **MAJOR**: Backward incompatible changes (removing/redefining principles)
   - **MINOR**: New principles or sections added
   - **PATCH**: Clarifications, wording improvements, non-semantic fixes
4. Sync Impact Report must be updated at the top of this file
5. Dependent templates must be updated to reflect changes

**Compliance Review**:
- All pull requests MUST verify compliance with constitutional principles
- Violations must be justified in a Complexity Tracking table (see plan-template.md)
- Unjustified violations block merge

**Runtime Guidance**:
- Developers should consult this constitution when making architectural decisions
- When in doubt about a technical choice, default to constitutional principles
- Template files in `.specify/templates/` must remain aligned with this constitution

---

**Version**: 1.0.0 | **Ratified**: 2025-12-30 | **Last Amended**: 2025-12-30
