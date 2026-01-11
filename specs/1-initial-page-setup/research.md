# Phase 0 Research Findings: Initial Page Setup

## 1. localStorage Fixture Seeding
- **Decision:** Use a React context/provider to seed and read fixture data from localStorage on first load.
- **Rationale:** Ensures data persists between runs and is accessible app-wide. Context/provider pattern is idiomatic in React for state/data management.
- **Alternatives considered:** Direct use of localStorage in components (less maintainable), Redux (overkill for initial scope).

## 2. Accounts Tree UI (Accessibility & Keyboard Navigation)
- **Decision:** Use a custom tree component built with shadcn/ui primitives and Tailwind, following WAI-ARIA Authoring Practices for tree views.
- **Rationale:** shadcn/ui does not provide a tree out of the box, but its primitives (Button, List, etc.) are composable. WAI-ARIA practices ensure accessibility and keyboard navigation.
- **Alternatives considered:** TanStack Table (not ideal for tree structure), third-party tree libraries (less control, may not match styling).

## 3. Menu Expand/Collapse (Accessibility & UX)
- **Decision:** Implement menu expand/collapse using mouse hover and keyboard focus/blur, with ARIA attributes and short CSS transitions.
- **Rationale:** Ensures both pointer and keyboard users can access expanded menu. ARIA attributes improve screen reader support.
- **Alternatives considered:** Persistent collapsed state (not required for v1), click-to-expand (less fluid UX).

## 4. Responsive Split-Pane Layout
- **Decision:** Use Tailwind CSS flexbox/grid utilities to create a responsive layout with fixed left menu, accounts tree, and flexible transactions list.
- **Rationale:** Tailwind utilities are performant and idiomatic for responsive layouts in React. Flexbox/grid adapts well to desktop/tablet.
- **Alternatives considered:** CSS-in-JS (less consistent with project), custom media queries (more verbose).

## 5. Accessibility Testing (Jest + React Testing Library)
- **Decision:** Use @testing-library/jest-dom and @testing-library/user-event for keyboard/ARIA tests. Validate roles, labels, and keyboard navigation in tests.
- **Rationale:** These tools are standard for React accessibility testing and integrate with CI.
- **Alternatives considered:** Cypress (for E2E, but not required for initial unit/integration tests).

## 6. TanStack, shadcn/ui, Tailwind Best Practices
- **Decision:** Use TanStack Query for data fetching (if/when backend is added), TanStack Table for transactions list, shadcn/ui for UI primitives, Tailwind for styling.
- **Rationale:** Aligns with project constitution and modern React best practices.
- **Alternatives considered:** MUI/Chakra (not project standard), Redux (not needed for initial scope).

---

All clarifications are now resolved. Proceed to Phase 1: Design & Contracts.
