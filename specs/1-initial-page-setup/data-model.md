# Data Model: Initial Page Setup

## Entities

### Account
- id: string
- name: string
- type: string (e.g., 'checking', 'savings', 'credit')
- parent_id: string | null (for tree structure)
- balance: number

#### Validation Rules
- id, name, and type are required
- balance is a number (default 0)
- parent_id is null for root accounts

### Transaction
- id: string
- date: string (ISO 8601)
- payee: string
- category: string
- memo: string | null
- amount: number
- account_id: string (FK to Account)
- cleared_status: 'cleared' | 'pending' | 'uncleared'

#### Validation Rules
- id, date, payee, amount, account_id required
- amount is a number (can be negative)
- cleared_status must be one of the allowed values

### MenuItem
- id: string
- icon: string (icon name or path)
- label: string
- route: string

#### Validation Rules
- id, icon, label, and route are required

## Relationships
- Account has many Transactions (1:N)
- Account may have parent/child Accounts (tree)
- MenuItem is independent (UI only)

## State Transitions
- Account: No state transitions (static for v1)
- Transaction: No state transitions (static for v1)
- MenuItem: No state transitions

---

This data model supports the initial UI for transaction tracking, account navigation, and menu rendering.
