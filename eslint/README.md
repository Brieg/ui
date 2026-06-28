# ESLint Configuration

This directory contains the ESLint configuration for the Brieg/UI project.

The configuration is split into small, focused modules to improve readability and maintainability.

## Directory structure

```text
eslint/
├── config/
│   ├── base.mjs
│   ├── ignores.mjs
│   └── nx.mjs
│
├── rules/
│   ├── angular.mjs
│   ├── quality.mjs
│   └── typescript.mjs
│
├── index.mjs
└── README.md
```

## Configuration modules

### config/base.mjs

Provides the base ESLint configuration from Nx.

Includes:

- ESLint Flat Config
- TypeScript configuration
- JavaScript configuration

---

### config/ignores.mjs

Contains ignored files and directories.

Examples:

- `dist`
- `out-tsc`

---

### config/nx.mjs

Contains Nx-specific rules.

Currently includes:

- `@nx/enforce-module-boundaries`

---

## Rule modules

### rules/quality.mjs

General JavaScript code quality rules.

Examples:

- no-console
- prefer-const
- no-var
- eqeqeq
- simple-import-sort
- unused-imports

---

### rules/typescript.mjs

TypeScript-specific rules.

Examples:

- no-unused-vars
- no-empty-function
- no-explicit-any

---

### rules/angular.mjs

Angular-specific rules.

Currently empty.

This module will contain rules for:

- component selectors
- directive selectors
- standalone components
- change detection
- signals
- Angular best practices

---

## Design principles

Rules are added only if they satisfy all of the following:

1. Prevent real bugs.
2. Improve readability.
3. Do not negatively impact daily development.

Rules that only enforce subjective style without providing measurable value are intentionally avoided.
