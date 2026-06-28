# ADR-0003 - Prettier Configuration

## Date

2026-06-29

---

## Context

Brieg/UI uses Prettier to ensure a consistent code formatting style across the entire project.

Formatting should be automatic, predictable and independent of individual developer preferences.

---

## Decision

The project uses Prettier as the only formatting tool.

Prettier is responsible exclusively for formatting.

ESLint is responsible for code quality and best practices.

Formatting is automatically applied on file save using Visual Studio Code.

---

## Configuration

Current formatting rules:

- Print width: 120
- Indentation: 2 spaces
- Tabs: disabled
- Semicolons: enabled
- Single quotes: enabled
- Trailing commas: all
- Bracket spacing: enabled
- Arrow functions: always use parentheses
- Line endings: LF

---

## Consequences

### Positive

- Consistent formatting across the project.
- Minimal formatting discussions during code reviews.
- Automatic formatting on save.
- Predictable code style.

### Negative

- Some formatting decisions cannot be customized due to Prettier's opinionated design.
