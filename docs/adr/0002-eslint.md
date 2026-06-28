# ADR-0002 - ESLint Configuration

## Date

2026-06-29

---

## Context

Brieg/UI is an Angular component library built with Nx.

The project requires consistent code quality while avoiding unnecessary complexity and developer friction.

---

## Decision

The ESLint configuration is modular.

The configuration is divided into:

- base configuration
- ignored files
- Nx rules
- JavaScript rules
- TypeScript rules
- Angular rules

Rules are introduced only when they provide practical value.

---

## Rule selection criteria

A rule should:

- prevent real bugs
- improve readability
- keep the development experience smooth

Rules that only enforce personal preferences are avoided.

---

## Consequences

### Positive

- Easy to understand.
- Easy to maintain.
- Easy to extend.
- Small configuration files.

### Negative

- Slightly more files than a single configuration.
