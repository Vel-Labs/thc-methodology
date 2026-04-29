# THC Levels

THC Level is a qualitative maturity band that estimates how much hidden trust has been surfaced, hardened, and clarified in a project.

The name is a mnemonic for Truth, Hardening, and Clarity.

THC Level is not a certification.  
THC Level is not a guarantee of quality.  
THC Level is not a security audit.  
THC Level is not a replacement for engineering judgment.

It is a structured review artifact.

## Level Summary

| Level | Name | Meaning |
|---:|---|---|
| THC-0 | Unverified | Hidden trust is dominant. |
| THC-1 | Documented | Important truths are partially surfaced. |
| THC-2 | Hardened | Key assumptions are tested or guarded. |
| THC-3 | Inspectable | Outsiders can reason about the project from artifacts. |
| THC-4 | Reproducible | A new contributor or operator can validate the project without private context. |
| THC-5 | High-THC | Hidden trust is aggressively minimized and audit history is visible. |

## Level Details

### THC-0: Unverified

The project works only if people already know how it works.

Common signs:

- setup depends on private context
- docs are missing or stale
- source-of-truth boundaries are unclear
- tests do not cover important assumptions
- maintainers must explain routine work manually
- agents would have to guess

### THC-1: Documented

Important truth has been written down, but it is not yet strongly hardened.

Common signs:

- README exists
- core assumptions are named
- setup path is described
- major boundaries are documented
- known unknowns may be listed
- validation is partial or manual

### THC-2: Hardened

Important assumptions are checked, tested, guarded, or reviewed.

Common signs:

- validation commands exist
- failure modes are documented
- CI catches basic drift
- environment assumptions are checked
- dangerous paths begin to fail closed
- generated or automated work has review rules

### THC-3: Inspectable

A new contributor can reason about the project from artifacts.

Common signs:

- source-of-truth files are easy to find
- architecture and runtime behavior are legible
- operator workflows are documented
- recovery paths are visible
- agent instructions are explicit
- hidden trust findings are tracked

### THC-4: Reproducible

A new contributor or operator can validate the project without private context.

Common signs:

- setup is reproducible
- core workflows are deterministic
- validation is automated where practical
- docs and behavior are checked against drift
- failure handling is tested or clearly reviewed
- audit history is visible

### THC-5: High-THC

The project aggressively minimizes hidden trust.

Common signs:

- truth boundaries are explicit and maintained
- hardening is continuous
- clarity improves after each hardening pass
- audits are part of project hygiene
- counterexamples and known failures are tracked
- contributors, operators, and agents can work safely with minimal private context

## Review Labels

Use one of these labels when publishing a level:

| Label | Meaning |
|---|---|
| Self-Assessed | Maintainers scored their own project. |
| Local THC Check | A maintainer or agent reviewed the project locally. Not independently verified. |
| Automated Public Review | A public grader independently inspected the repository and generated a report. |
| Peer Reviewed | Someone outside the project reviewed the evidence. |
| Maintainer Reviewed | Project maintainers reviewed or accepted the findings. |
| Vel Labs Reviewed | Vel Labs reviewed the evidence. Only use if true. |

## Recommended Public Format

```txt
THC-3 Inspectable · Self-Assessed
```

or:

```txt
THC-4 Reproducible · Peer Reviewed
```

## Score Mapping

The scorecard maps to levels like this:

| Score | Level |
|---:|---|
| 0-19 | THC-0: Unverified |
| 20-39 | THC-1: Documented |
| 40-59 | THC-2: Hardened |
| 60-74 | THC-3: Inspectable |
| 75-89 | THC-4: Reproducible |
| 90-100 | THC-5: High-THC |

Scores are guidance, not mathematical truth.

A project with a high numerical score can still be capped at a lower level if it has a severe hidden-trust finding.

## Level Caps

Apply caps when necessary.

| Condition | Maximum Level |
|---|---:|
| No working setup path | THC-1 |
| No visible validation path | THC-2 |
| Critical hidden trust finding unresolved | THC-2 |
| No source-of-truth boundary for core behavior | THC-2 |
| Docs and behavior known to diverge | THC-2 |
| No public evidence for the requested level | THC-1 |
| Maintainer-only operational knowledge required | THC-3 |
| Reproducibility depends on private access | THC-3 |

## Anti-Abuse Rules

Do not use THC Level to imply:

- certification
- security approval
- legal compliance
- production readiness
- maintainer endorsement
- guaranteed reliability

THC Level measures hidden-trust posture.
