# THC Repo Review Skill

Use this skill to compare a project structure against THC Methodology.

## Goal

Determine whether the repository structure makes truth, hardening, and clarity easy to find.

## Review Areas

### Root Files

Check for:

- README
- AGENTS.md
- CONTRIBUTING
- CHANGELOG
- LICENSE
- validation or test entry points

### Docs

Check for:

- architecture
- setup
- runtime assumptions
- validation
- failure modes
- troubleshooting
- known unknowns
- repo truth

### Automation

Check for:

- CI
- test commands
- lint commands
- release checks
- dependency checks
- reproducibility checks

### Agentic Coding

Check for:

- centralized agent instructions
- forbidden patterns
- validation commands
- source-of-truth list
- change discipline
- uncertainty handling

## Output Format

```md
# THC Repo Review

## Summary

## Structure Strengths

## Hidden Trust In Structure

## Missing Artifacts

## Suggested Layout

## Recommended Next Three Changes
```

## Rules

- Do not demand heavy structure for small projects.
- Recommend the smallest structure that reduces hidden trust.
- Distinguish missing files from missing truth.
- Do not reward file count.
