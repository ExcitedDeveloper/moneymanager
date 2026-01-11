# Initial Page Setup

**Summary**

Create the initial page and layout for MoneyManager focused on transaction tracking. This feature builds the base UI shell (left menu + right content) and the transactions content view (accounts tree + transactions list) to support subsequent feature work.

**Background & Goals**

MoneyManager is a personal finance app inspired by Quicken Simplifi. Initially we implement only the transaction tracking experience so users can view and browse transactions by account. The goal of this feature is to provide an accessible, responsive layout and clear account/transaction navigation so later features (filters, editing, import) can be added.

## Clarifications

### Session 2026-01-10

- Q: Data source for initial UI fixtures? → A: C — Seed and read from browser `localStorage` (persists between runs).

**Actors**

- Primary: End user (single-user mode)
- Secondary: Product/admin (for configuration later)

**User Flows / Scenarios**

1. First visit: user sees the app shell with a left menu collapsed showing icons and a content area with all transactions (no account selected).
2. Hover menu: user moves pointer over left menu; the menu expands to show submenu names beside icons.
3. Select account: user clicks an account in the left accounts tree; the right content updates to show transactions for that account.
4. No selection: when no account is selected the transactions list shows all accounts’ transactions.

Each scenario includes keyboard-accessible equivalents (focus to menu expands, arrow/tab navigation, enter to select account).

**Functional Requirements**

1. Layout: Provide a persistent left navigation and a right content pane.
   - Acceptance: On desktop widths, the left column is fixed width and the content column fills remaining space.
2. Left menu collapsed state: When not hovered, menu shows only icons for each submenu item.
   - Acceptance: Only icons are visible and tooltips are available for each icon.
3. Left menu expanded on hover: Hovering or keyboard focusing the menu expands it to reveal submenu names to the right of icons.
   - Acceptance: Expansion occurs on mouse hover or focus and collapses on mouse leave or blur.
4. Transactions content: The right pane is split into two columns: left column shows an accounts tree, right column shows transactions list for the selected account (or all transactions if none selected).
   - Acceptance: Clicking an account filters the transactions list; when no account is selected, list shows all transactions.
5. Accounts tree: Display accounts in a collapsible tree with account names and balances.
   - Acceptance: Tree supports expand/collapse and selection; selection highlights the account and updates transactions.
6. Transactions list: Show date, payee, category, memo, amount, and running balance columns.
   - Acceptance: Columns are sortable and responsive; default sort by date descending.
7. Accessibility: All interactive elements must be reachable and operable via keyboard and have appropriate ARIA roles/labels.

**Non-Functional Requirements / Constraints**

- UI should be responsive to common desktop and tablet widths. Mobile layout may be addressed later.
- Performance: Initial load should render the shell and the first page of transactions within 1 second on a typical dev machine (implementation-agnostic objective).

**Success Criteria**

- Users can open the app and view transactions within 1s (measured on a standard dev environment).
- Menu expands on hover/focus and collapses on leave/blur consistently across major browsers.
- Selecting an account updates the transactions list and shows only that account’s transactions.
- Keyboard-only users can navigate menu and accounts tree and view transactions without a mouse.

**Key Entities**

- Account: id, name, type, parent_id, balance
- Transaction: id, date, payee, category, memo, amount, account_id, cleared_status
- MenuItem: id, icon, label, route

**Assumptions**

- Single-user (no authentication) for initial iteration.
- Backend/data layer will provide transactions and accounts endpoints later; for initial UI, seed browser `localStorage` with a fixture dataset (persisted between runs).
- Menu collapse/expand is instantaneous with a short transition; no persistent collapsed state is required for v1.

**Out of Scope**

- Editing, creating, or importing transactions.
- Reconciliation, budgeting, or investment tracking.
- Mobile-first layout adjustments (can be planned later).

**Acceptance Criteria (high-level)**

- Shell renders with left menu and right content.
- Hovering/focusing the menu expands it and reveals submenu labels.
- Accounts tree filters transactions on selection; default shows all transactions.
- Transactions list displays required columns and is keyboard accessible.

**Next Steps / Implementation Notes**

- Add mock data fixtures for accounts and transactions to validate UI.
- Build components: `Shell`, `LeftMenu`, `AccountsTree`, `TransactionsList`.
- Wire selection state (global or context) so account selection updates the transactions list.
