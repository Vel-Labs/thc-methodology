# Repo Truth

This directory contains the project’s durable source-of-truth documents.

It exists to reduce hidden trust.

## Purpose

Repo Truth documents should help a new contributor, operator, or agent understand:

- what is true
- where that truth lives
- what assumptions matter
- what is validated
- what can drift
- what still requires human judgment

## Suggested Files

```txt
repo-truth/
  README.md
  ARCHITECTURE.md
  VALIDATION.md
  RUNTIME_ASSUMPTIONS.md
  FAILURE_MODES.md
  AGENT_RULES.md
  KNOWN_UNKNOWNS.md
```

## Rules

1. Do not bury critical assumptions in scattered comments.
2. Do not require maintainers to explain routine setup manually.
3. Do not claim reliability without validation.
4. Do not let docs pretend uncertainty does not exist.
5. Do not let agents infer project truth from stale context.

## THC Questions

- What is the source of truth?
- How is it hardened?
- Can someone inspect it without hidden trust?
