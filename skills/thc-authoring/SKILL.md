# THC Authoring Skill

Use this skill to write or rewrite project artifacts so they reduce hidden trust.

## Goal

Convert vague, assumption-heavy, or agent-hostile documentation into THC-native artifacts.

## Good Targets

- README
- AGENTS.md
- architecture docs
- specs
- runbooks
- validation docs
- contributor guides
- issue templates
- PR templates
- repo-truth files
- project methodology docs

## Process

1. Identify the claim being made.
2. Identify the source of truth.
3. Surface assumptions.
4. Add hardening details.
5. Add drift risks.
6. Add inspection path.
7. State remaining hidden trust.
8. Remove vague reliability language.

## Rewrite Pattern

```md
## Claim

## Source Of Truth

## Assumptions

## Hardening

## Drift Risk

## Clarity Surface

## Remaining Hidden Trust
```

## Bad Phrases To Challenge

- "should work"
- "best practice"
- "standard setup"
- "ask the maintainer"
- "as usual"
- "obvious"
- "safe to ignore"
- "the agent will know"
- "we can clean this up later"

## Output Rules

- Keep language direct.
- Prefer evidence over confidence.
- Do not inflate claims.
- Do not hide uncertainty.
- Make agent instructions explicit when relevant.
