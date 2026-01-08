---
description: "Write a commit message in conventional commit format for the given code changes."
mode: "agent"
---

# 🧩 Commit Message Instruction (Conventional Commits)

When generating a commit message, follow the **Conventional Commits** specification.

Write the commit message in markdown format.

Make it easy to copy to the clipboard.

Don't mention that the commit closes anything like a Jira bug or story.

## Format

`<type>(<scope>): <short summary>`

`<detailed description>`

`<footer>`

### Rules

1. **Type** must be one of:  
   `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, or `revert`.
2. **Scope** is optional but should describe the area of the codebase (e.g., `api`, `ui`, `auth`).
3. **Summary** should be concise — **no more than 72 characters**.
4. **Description** (optional) should explain _why_ the change was made and any relevant details; keep it to 1–3 short paragraphs.

### Examples

#### Example 1 — Feature

feat(ui): add dark mode toggle

Adds a dark mode toggle to the navbar and saves the preference in localStorage.
Improves accessibility and user experience for users who prefer dark themes.

#### Example 2 — Bug Fix

fix(auth): resolve token refresh bug

Fixes an issue where expired tokens were not being refreshed automatically.
Ensures smoother user sessions without unnecessary logouts.

#### Example 3 — Refactor

refactor(api): simplify data fetching logic

Replaces nested callbacks with async/await to improve readability and maintainability.

#### Example 4 — Docs

docs(readme): update setup instructions

Adds missing environment variable configuration details for local development.
