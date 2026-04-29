# AGENTS.md

This repository must be maintained according to THC Methodology.

The goal is not to make the repository sound polished. The goal is to make the repository more truthful, hardened, and inspectable.

## Agent Operating Rules

1. Do not introduce claims without evidence.
2. Do not add process language without operational value.
3. Prefer small, inspectable files over large manifesto files.
4. Preserve the distinction between doctrine, authoring guidance, evaluation, templates, examples, and skills.
5. Any new methodology claim must answer:
   - What hidden trust does this reduce?
   - How is it hardened?
   - How can another person inspect it?
6. Do not turn THC Level into fake precision.
7. Do not imply certification unless a formal review process exists.
8. Do not make the project explicitly drug-themed. THC means Truth, Hardening, Clarity.
9. When adding examples, include failure modes and remaining hidden trust.
10. When changing the rubric, update `docs/THC_SCORECARD.md`, `docs/THC_LEVELS.md`, and relevant templates together.

## Required Review Before Changes

Before editing, identify which layer is affected:

- Doctrine
- Methodology
- Authoring
- Evaluation
- Scorecard
- Levels
- Templates
- Examples
- Skills
- Repository operations

If a change crosses layers, explain the relationship in the commit message or PR description.

## Forbidden Patterns

Avoid:

- vague reliability language
- unverifiable best practices
- branding language pretending to be methodology
- fake scoring precision
- rituals that do not explain what trust they remove
- documentation that merely restates the obvious
- examples that only show successful projects
- badges that imply guarantee, approval, or certification
- hidden assumptions about maintainers, operators, users, or agents

## Required Questions For New Content

Every substantial addition should answer at least three of these:

1. What is the source of truth?
2. What assumption is being surfaced?
3. What failure mode is being reduced?
4. How is the claim hardened?
5. What would drift over time?
6. What does a new contributor no longer have to guess?
7. What hidden trust still remains?

## Documentation Style

Use direct language.

Prefer:

```txt
This project requires X. X is validated by Y. If Y fails, the system stops at Z.
```

Avoid:

```txt
This should generally work for most users.
```

## Change Discipline

For methodology changes:

1. Update the smallest correct file.
2. Add or update an example if the claim is operational.
3. Update templates if reviewers need to capture the new concept.
4. Update the changelog if the public interpretation changes.
5. Do not silently change level meanings.

## Evaluation Discipline

When reviewing a project:

- Evaluate evidence, not vibes.
- Penalize hidden maintainer knowledge.
- Penalize setup steps that depend on private context.
- Penalize claims not backed by artifacts.
- Reward fail-closed behavior.
- Reward reproducibility.
- Reward clear ownership of sources of truth.
- Reward known unknowns when they are honestly stated.

## Output Expectations

When producing a THC review, use:

- concise summary
- level recommendation
- evidence table
- hidden trust findings
- concrete next actions

Do not write a long essay unless the user asks for one.
