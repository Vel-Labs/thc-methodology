# THC Evaluation Lens

The THC Evaluation Lens is a project-agnostic way to find hidden trust.

It can be used for:

- open source repositories
- internal tools
- agentic coding systems
- documentation sets
- production services
- scaffolds and templates
- knowledge bases
- workflow automation

## Evaluation Principle

Evaluate evidence, not vibes.

A project should not score high because it looks polished.

A project scores high when it requires less private knowledge to understand, operate, extend, or verify.

## Review Modes

### Spot Check

Use when you want a fast read.

Timebox: 15 to 30 minutes.

Output:

- hidden trust level
- 3 to 7 findings
- level estimate
- next actions

### Full Review

Use when you want a defensible project evaluation.

Output:

- evidence table
- scorecard
- level recommendation
- severity-ranked findings
- remediation plan
- reviewer notes

### Self-Assessment

Use when maintainers want to understand their current posture.

Output:

- requested THC Level
- evidence by pillar
- known gaps
- planned hardening work

## Evaluation Questions

### Truth

- What claims does the project make?
- Which claims are directly verifiable?
- Where is the source of truth?
- Are assumptions documented?
- Are known unknowns documented?
- Do docs match current behavior?
- Are ownership boundaries explicit?
- Are architecture boundaries visible?

### Hardening

- Are critical assumptions validated?
- What happens when inputs are malformed?
- What happens when dependencies drift?
- What happens when an operator makes a mistake?
- Which boundaries fail closed?
- Which claims are tested, audited, or reviewed?
- Are startup and configuration checks present?
- Are compatibility constraints enforced?
- Are generated outputs reproducible?

### Clarity

- Can a new contributor understand the system from artifacts alone?
- Can a new operator run the system without private context?
- Can failure states be diagnosed from visible outputs?
- Are setup, operation, and recovery paths clear?
- Are examples tied to real workflows?
- Are agent instructions current and specific?
- Are known risks easy to find?

### Agentic Coding

- Are agent instructions centralized?
- Are forbidden changes documented?
- Are validation commands explicit?
- Are source-of-truth files listed?
- Are ambiguity and uncertainty handled?
- Are generated changes reviewed against repo truth?
- Can an agent identify what not to touch?

## Severity Scale

| Severity | Meaning |
|---|---|
| Critical | Hidden trust can cause unsafe operation, data loss, security exposure, or unrecoverable failure. |
| High | Hidden trust can block maintainers, operators, contributors, or agents from safe work. |
| Medium | Hidden trust causes avoidable confusion, brittle workflows, or repeated maintainer intervention. |
| Low | Hidden trust exists, but impact is limited or easy to fix. |
| Note | Observation that may improve clarity or future hardening. |

## Finding Format

Use this format:

```md
### Finding: <short title>

Severity:
THC Pillar:
Evidence:
Hidden Trust:
Impact:
Recommendation:
```

## Final Assessment Question

At the end of every review, ask:

```txt
How much hidden trust is still required?
```

The answer determines the level more than polish, popularity, or maintainer confidence.
