# Contributing to Brieg/UI

Thank you for contributing to **Brieg/UI**.

This document describes the development workflow, coding standards and contribution process used throughout the project.

---

# Development Workflow

The project follows a Git Flow inspired workflow.

```
feature/*
      │
      ▼
develop
      │
      ▼
main
      │
      ▼
Release
```

Rules:

- Never push directly to `main`.
- Never push directly to `develop`.
- Every change must be developed on its own feature branch.
- Every merge is performed using **Squash & Merge**.

---

# Branch Naming

Branches are created from the related Trello task.

Format:

```
<type>/<task-number>-<task-title>
```

Examples:

```
feature/7-setup-development-environment

feature/14-create-button-component

feature/15-create-input-component

fix/32-button-loading

docs/40-update-readme

refactor/51-theme-service
```

Branch names should:

- use lowercase letters
- use hyphens (`-`) instead of spaces
- match the Trello task title

---

# Commit Convention

The project follows **Conventional Commits**.

Format:

```
#<task-number> <type>(<scope>): <description>
```

Examples:

```
#7 chore(eslint): configure ESLint

#14 feat(button): add loading variant

#18 fix(input): prevent invalid value
```

Available commit types:

- feat
- fix
- docs
- style
- refactor
- test
- chore
- ci
- build

---

## Git Hooks

The project uses Husky to automate quality checks.

### pre-commit

Runs `lint-staged` to lint and format staged files.

### commit-msg

Validates commit messages using Conventional Commits.

Example:

```text
feat(button): add loading state [#14]
```

### pre-push

Runs the full verification pipeline before pushing changes.

---

# Pull Requests

Every feature branch must be merged into **develop** using a Pull Request.

Merge strategy:

- ✅ Squash & Merge

Pull Request title:

```
#14 Create Button component
```

The resulting squash commit should follow Conventional Commits.

Example:

```
#14 feat(button): create Button component
```

---

# Releases

Stable releases are created only from the **develop** branch.

Release flow:

```
feature/*
        ↓
develop
        ↓
Pull Request
        ↓
main
        ↓
Git Tag
        ↓
Release
```

---

# Code Quality

Every contribution must satisfy the following requirements:

- Project builds successfully.
- ESLint passes without errors.
- Prettier formatting is applied.
- No unused imports.
- Conventional Commits are used.

---

# Definition of Done

A task is considered complete when:

- [ ] Implementation is finished.
- [ ] ESLint passes.
- [ ] Project builds successfully.
- [ ] Commit follows Conventional Commits.
- [ ] Pull Request has been created.
- [ ] Pull Request has been merged using Squash & Merge.
- [ ] Trello task has been moved to **Done**.

---

# Documentation

Important architectural decisions are documented using Architecture Decision Records (ADR).

```
docs/adr/
```

Before introducing significant architectural changes, consider whether a new ADR should be created.

---

Thank you for helping keep Brieg/UI clean, consistent and maintainable.
