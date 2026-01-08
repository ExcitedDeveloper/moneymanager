<!--
Sync Impact Report
- Version change: unspecified -> 0.1.0
- Modified principles:
	- [PRINCIPLE_1_NAME] -> Accessibility & Responsive Design (NON-NEGOTIABLE)
	- [PRINCIPLE_2_NAME] -> Testing & Quality (NON-NEGOTIABLE)
	- [PRINCIPLE_3_NAME] -> Type Safety & Modern Tooling
	- [PRINCIPLE_4_NAME] -> Component Library & Styling
	- [PRINCIPLE_5_NAME] -> Versioning, Observability & Simplicity
- Added sections: Additional Constraints, Development Workflow
- Removed sections: none
- Templates reviewed:
	- .specify/templates/plan-template.md: ✅ updated (aligned)
	- .specify/templates/spec-template.md: ✅ updated (aligned)
	- .specify/templates/tasks-template.md: ✅ updated (aligned)
	- .specify/templates/checklist-template.md: ✅ updated (aligned)
	- .specify/templates/agent-file-template.md: ✅ updated (aligned)
- Follow-up TODOs:
	- RATIFICATION_DATE: TODO(RATIFICATION_DATE): original adoption date unknown
	- Confirm CI checks include Jest + React Testing Library and Tailwind build steps
-->

# moneymanager Constitution

## Core Principles

### Accessibility & Responsive Design (NON-NEGOTIABLE)
All user-facing code MUST follow accessibility best practices (WCAG 2.1 AA as a baseline). All UI components and pages MUST be responsive across common breakpoints (mobile, tablet, desktop). Accessibility considerations (labels, roles, keyboard navigation, focus management, contrast) MUST be validated in automated and manual tests.

### Testing & Quality (NON-NEGOTIABLE)
All production code MUST be covered by automated tests. Unit tests, integration tests, and behavior tests are required where appropriate. Tests MUST follow these rules: write tests for behavior (not implementation), use descriptive test names, mock external dependencies, and prefer Jest with React Testing Library for UI. Tests MUST be run in CI and fail the pipeline on regressions.

### Type Safety & Modern Tooling
The project MUST use modern TypeScript and React versions (repository targets TypeScript ~5.9+ and React 19+). Type-safety is required: prefer strict compiler options and avoid unsafe casts. Follow SOLID and DRY principles in architecture and code organization. Prefer the TanStack ecosystem (Query, Router, Table, etc.) for new features.

### Component Library & Styling
Use shadcn/ui components and Tailwind CSS for new UI work. Styles SHOULD be organized using CSS Modules to provide encapsulation. Avoid use of `!important` in CSS. All components MUST be accessible, documented, and unit-tested. Favor composition and small, reusable components.

### Versioning, Observability & Simplicity
Follow semantic versioning for releases (MAJOR.MINOR.PATCH). Instrument critical flows with structured logs and observability primitives. Prefer simple solutions: avoid premature optimization and YAGNI; justify complexity with a documented rationale.

## Additional Constraints
Technology and code rules that all contributors MUST follow:
- Use latest stable TypeScript compatible with the repository (upgrade only with documented migration notes).
- Use latest stable React for UI work.
- Prefer TanStack libraries for data fetching, routing, and tables.
- Use shadcn/ui components and Tailwind CSS; styles implemented with CSS Modules.
- Avoid `!important` in styles; refactor for specificity or component-scoped classes instead.
- Ensure code is responsive across common breakpoints (mobile, tablet, desktop) and accessible.
- All new code MUST include unit tests (Jest + React Testing Library for frontend). Mock external services in tests.

## Development Workflow
- Pull Requests MUST include: description, linked spec/plan, screenshots (if UI), and test coverage notes.
- All PRs MUST have at least one approving reviewer and pass CI (lint, type-check, tests).
- Tests MUST be written to demonstrate behavior (acceptance scenarios) and added to CI.
- Linting and formatting (ESLint, Prettier or equivalent) MUST run in CI and be fixed before merge.
- Major architectural changes MUST include a migration plan and an explicit approval (maintainers + stakeholders).

## Governance
The constitution is the source of truth for development constraints and governance. Amendments to this constitution require a documented rationale and one of the following:
- Minor amendment (PATCH): Editorial clarifications, typos, and non-behavioral wording changes — may be merged by a maintainer with a short changelog.
- Minor feature/expansion (MINOR): Adding non-breaking principles or materially expanding guidance — requires review by at least two maintainers and a short migration note.
- Breaking/semantic change (MAJOR): Removing or redefining existing principles or governance that could change developer workflows — requires maintainer consensus and explicit communication to the team with a migration plan.

All PRs touching critical areas (security, testing, release tooling, infrastructure) MUST include a compliance review checklist referencing this constitution.

**Version**: 0.1.0 | **Ratified**: TODO(RATIFICATION_DATE): original adoption date unknown | **Last Amended**: 2026-01-07
