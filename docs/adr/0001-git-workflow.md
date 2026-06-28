# ADR-0001 - Git Workflow

## Date

2026-06-29

---

## Context

Brieg/UI is an Angular component library developed as a long-term open-source project.

The project requires a predictable development workflow that:

- keeps the `main` branch stable,
- allows parallel feature development,
- maintains a clean Git history,
- provides traceability between Trello tasks, branches, commits and releases.

---

## Decision

The project follows a Git Flow inspired workflow.

Development is performed on dedicated feature branches created from the `develop` branch.

Completed features are merged into `develop` using **Squash & Merge**.

Stable releases are merged from `develop` into `main` using a Pull Request.

Direct commits to `main` and `develop` are not allowed.

---

## Branch Structure

```text
main
│
└── develop
     │
     ├── feature/14-create-button-component
     ├── feature/15-create-input-component
     └── ...
```

---

## Branch Naming

Branch format:

```text
<type>/<task-number>-<task-title>
```

Examples:

```text

feature/14-create-button-component

fix/28-button-loading

docs/41-update-readme

refactor/52-theme-service
```

Rules:

- lowercase only
- hyphens instead of spaces
- based on the Trello task title

---

## Commit Convention

The project follows Conventional Commits.

Commit format:

```text
#<task-number> <type>(<scope>): <description>
```

Example:

```text
#7 chore(eslint): configure ESLint

#14 feat(button): add loading state

#20 fix(input): prevent invalid value
```

---

## Pull Requests

Every feature branch must be merged into `develop`.

Merge strategy:

- Squash & Merge

A completed release is merged from `develop` into `main` using a Pull Request.

The `main` branch represents stable releases only.

---

## Release Flow

```text
feature/*
        │
        ▼
develop
        │
        ▼
Pull Request
        │
        ▼
main
        │
        ▼
Git Tag
        │
        ▼
Release
```

---

## Traceability

Every change should be traceable through:

- Trello task
- Git branch
- Commit history
- Pull Request
- Git tag (release)

This provides a complete history of every implemented feature.

---

## Consequences

### Positive

- Stable `main` branch.
- Clean Git history through Squash & Merge.
- Easy rollback of releases.
- Clear mapping between tasks and code changes.
- Predictable release process.

### Negative

- Slightly more Pull Requests.
- Requires creating a feature branch for every task.

---

## Alternatives Considered

### GitHub Flow

GitHub Flow was considered but rejected.

The project requires a dedicated integration branch (`develop`) where multiple features can be combined and verified before creating a stable release.

This allows the `main` branch to always represent production-ready versions published to npm.
