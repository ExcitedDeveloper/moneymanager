---
description: "Tasks for initial-page-setup feature"
---

# Tasks: Initial Page Setup

**Input**: Design documents in `specs/1-initial-page-setup/`

## Phase 1: Setup (Shared Infrastructure)

- [ ] T001 Update `package.json` to include React, TypeScript, Tailwind, shadcn, TanStack and testing deps (package.json)
- [ ] T002 [P] Create Tailwind configuration and PostCSS files (`tailwind.config.cjs`, `postcss.config.cjs`) and add base styles in `src/index.css`
- [ ] T003 [P] Add basic Vite/TS/React type config if missing (`tsconfig.json`, `vite.config.ts`) and ensure `src/main.tsx` exists
- [ ] T004 [P] Add jest and React Testing Library configuration files (`jest.config.ts`, `setupTests.ts`)

---

## Phase 2: Foundational (Blocking Prerequisites)

- [ ] T005 Create seed fixture `src/data/seed.ts` with accounts and transactions sample data
- [ ] T006 [P] Implement localStorage wrapper `src/lib/storage.ts` with `getAccounts()`, `getTransactions()`, `ensureSeed()`
- [ ] T007 Ensure `ensureSeed()` is invoked at app startup in `src/main.tsx` (modify `src/main.tsx`)
- [ ] T008 [P] Add Tailwind + shadcn basic UI scaffolding files `src/components/ui/README.md` and `src/styles/tailwind.css`

---

## Phase 3: User Story 1 - View transactions (Priority: P1) 🎯 MVP

**Goal**: Render transactions list showing all transactions when no account is selected.

**Independent Test**: Start app, ensure transactions from `localStorage` seed are rendered in the table.

- [ ] T009 [US1] Create `TransactionsList` component at `src/features/transactions/TransactionsList.tsx` (uses TanStack Table)
- [ ] T010 [P] [US1] Add TanStack Table helper and column definitions at `src/features/transactions/table.ts`
- [ ] T011 [US1] Add styles or Tailwind classes for transaction rows at `src/features/transactions/transactions.css`
- [ ] T012 [US1] Connect `TransactionsList` to `storage.ts` via `getTransactions()` (modify `src/features/transactions/TransactionsList.tsx`)

---

## Phase 4: User Story 2 - Account filtering (Priority: P2)

**Goal**: Selecting an account filters the transactions list to that account.

**Independent Test**: Click/select an account and verify `TransactionsList` only shows transactions for that account.

- [ ] T013 [US2] Create `AccountsTree` component at `src/features/transactions/AccountsTree.tsx` (collapsible tree with balances)
- [ ] T014 [US2] Implement selection state (React Context) at `src/context/SelectionContext.tsx` to share selected account across components
- [ ] T015 [US2] Wire `AccountsTree` selection to filter `TransactionsList` (modify `src/features/transactions/AccountsTree.tsx` and `TransactionsList.tsx`)

---

## Phase 5: User Story 3 - Left menu behavior (Priority: P3)

**Goal**: Left menu collapsed by default (icons only); expands on hover or focus to reveal labels.

**Independent Test**: Hover/focus the left menu and verify expansion; blur/mouseleave collapses it.

- [ ] T016 [US3] Create `LeftMenu` component at `src/components/LeftMenu.tsx` (collapsed icons, expands on hover/focus)
- [ ] T017 [P] [US3] Add menu icon set and tooltip helper at `src/components/MenuIcons.tsx`
- [ ] T018 [US3] Ensure keyboard accessibility (focus expands) and ARIA attributes in `src/components/LeftMenu.tsx`

---

## Phase 6: Integration & Shell

- [ ] T019 [US1] Create `Shell` component at `src/components/Shell.tsx` composing `LeftMenu` and the transactions content area
- [ ] T020 [US1] Update `src/App.tsx` or `src/main.tsx` to render `Shell` and ensure app bootstraps `ensureSeed()`

---

## Phase 7: Tests

- [ ] T021 [P] [US1] Add unit tests for `src/lib/storage.ts` at `tests/unit/storage.test.ts`
- [ ] T022 [P] [US2] Add integration test verifying account selection filters transactions at `tests/integration/account-filter.test.tsx`
- [ ] T023 [P] [US3] Add accessibility test for `LeftMenu` keyboard interactions at `tests/integration/leftmenu-a11y.test.tsx`

---

## Phase 8: Polish & Cross-Cutting Concerns

- [ ] T024 [P] Add developer quickstart `specs/1-initial-page-setup/README.md` with setup and test commands
- [ ] T025 [P] Update repository `README.md` with a short note about the feature and how to run the seed
- [ ] T026 [P] Add lint/format tasks (ESLint/Prettier) configuration files (`.eslintrc`, `.prettierrc`)

---

## Dependencies & Execution Order

- Phase 1 (Setup) must complete before Phase 2 (Foundational) tasks that require configs.
- Phase 2 (Foundational) must complete before any User Story implementation (Phase 3+).
- After Foundational tasks complete, User Story phases can proceed in parallel where tasks are marked `[P]`.

## Parallel Examples

- `T002`, `T003`, `T004` can run in parallel (Tailwind/jest/configs).
- `T010` (table helper) can be developed in parallel with `T009` (component) since they are separate files (`src/features/transactions/table.ts` vs `TransactionsList.tsx`).

## Implementation Strategy

- MVP-first: implement Phase 1 → Phase 2 → Phase 3 (US1) and validate before adding account filtering and menu polish.
- Deliver US1 as the minimal demo: seeded transactions visible and sortable.

---

**Task counts**

- Total tasks: 26
- Tasks by story: US1=6, US2=3, US3=3, Setup/Foundation/Integration/Tests/Polish=14

**MVP suggestion**: Complete User Story 1 (T009–T012) as MVP.
