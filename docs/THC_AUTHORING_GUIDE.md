# THC Authoring Guide

The authoring layer explains how to write project files, specs, prompts, docs, and governance artifacts that reduce hidden trust.

This guide is especially useful for agentic coding because agents inherit whatever truth, ambiguity, and drift the repository exposes.

## Purpose

A THC-authored artifact should make clear:

1. what is claimed
2. where the source of truth lives
3. what assumptions are being made
4. what can drift
5. how the claim is validated
6. what fails closed
7. what a future contributor should not have to guess

## Required Authoring Pattern

Use this pattern for serious project artifacts.

```md
## Claim

What are we saying is true?

## Source Of Truth

Where can this be verified?

## Assumptions

What must be true for this to hold?

## Hardening

How is this checked, validated, tested, audited, or guarded?

## Drift Risk

How could this become false over time?

## Clarity Surface

How can another person inspect or reproduce this without private context?

## Remaining Hidden Trust

What still requires judgment, maintainer knowledge, or future work?
```

## Bad Pattern

```txt
This should work.
```

## Better Pattern

```txt
This is expected to work when X, Y, and Z are true.
It is validated by A.
It fails closed under B.
It can be inspected through C.
The known remaining risk is D.
```

## Authoring Rules

### Rule 1: Claims Need Evidence

Weak:

```txt
The project is production-ready.
```

Better:

```txt
The project has been tested against X, Y, and Z.
The remaining production risks are A and B.
The deployment checklist is located at C.
```

### Rule 2: Do Not Hide Operational Reality

Weak:

```txt
Deploy as usual.
```

Better:

```txt
Deployment requires:
1. Run migrations.
2. Validate required environment variables.
3. Start the API service.
4. Start the worker service.
5. Confirm queue health.

If any validation fails, do not deploy.
```

### Rule 3: Make Agents Less Dangerous

Weak:

```txt
Follow best practices.
```

Better:

```txt
Before changing code, inspect the source-of-truth files listed in `repo-truth/`.
After changing code, run the validation commands in `docs/VALIDATION.md`.
Do not modify architecture boundaries without updating `docs/ARCHITECTURE.md`.
```

### Rule 4: Record Known Unknowns

Known unknowns are not weakness.

They are hidden trust made visible.

Weak:

```txt
No known issues.
```

Better:

```txt
Known unknowns:
- Load behavior has not been tested above 1,000 concurrent users.
- Retry behavior for provider outages is not yet validated.
- Recovery docs exist for local failure, not regional failure.
```

### Rule 5: Distinguish Docs From Guarantees

Documentation explains what is believed and how to verify it.

It does not magically harden a system.

If a doc claims safety, the doc should point to the mechanism that makes the claim safer.

## Artifact Types

### README

A THC-native README should answer:

- What does this project do?
- What is the source of truth?
- What are the minimum setup requirements?
- What assumptions does the project make?
- How is the project validated?
- What should a new contributor inspect first?
- What hidden trust remains?

### AGENTS.md

A THC-native `AGENTS.md` should answer:

- Which files govern agent behavior?
- Which claims must agents verify before editing?
- Which commands validate changes?
- Which boundaries are forbidden without review?
- What patterns should agents avoid?
- How should agents report uncertainty?

### Architecture Docs

A THC-native architecture doc should answer:

- What are the system boundaries?
- Which components own which truth?
- What dependencies can drift?
- What failure modes are known?
- What is validated automatically?
- What requires manual review?
- What changed recently?

### Specs

A THC-native spec should answer:

- What problem is being solved?
- What is explicitly out of scope?
- What assumptions must hold?
- What failure modes are expected?
- What acceptance criteria prove the work?
- What artifacts must be updated?

### Audit Reports

A THC-native audit report should answer:

- What was reviewed?
- What evidence was used?
- What hidden trust was found?
- How severe is each finding?
- What level is recommended?
- What would improve the level?

## Authoring Checklist

Before publishing a serious artifact, ask:

- Is the source of truth visible?
- Are assumptions explicit?
- Is the validation path clear?
- Are failure modes named?
- Are unresolved risks admitted?
- Could a stranger inspect this?
- Could an agent follow this without guessing?
- Does this reduce hidden trust or just sound good?
