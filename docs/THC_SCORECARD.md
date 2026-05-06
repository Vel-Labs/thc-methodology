# THC Scorecard

The scorecard converts THC review evidence into a rough level recommendation.

The score is useful, but it is not the truth.

Evidence, severity, and hidden-trust findings matter more than the number.

## Weighting

| Category | Weight | What It Measures |
|---|---:|---|
| Truth | 30% | Are claims, boundaries, assumptions, and sources of truth explicit? |
| Hardening | 35% | Are important claims validated, tested, guarded, reviewed, or fail-closed? |
| Clarity | 25% | Can a new person inspect, use, challenge, and extend the project? |
| Audit History | 10% | Are reviews, gaps, changes, and known risks tracked? |

## Scoring Rule

Each item is scored from 0 to 5.

| Score | Meaning |
|---:|---|
| 0 | Missing or unknown |
| 1 | Implied, private, or ad hoc |
| 2 | Partially documented |
| 3 | Documented and somewhat validated |
| 4 | Validated, visible, and maintained |
| 5 | Reproducible, hardened, and independently inspectable |

## Truth: 30 Points

| Item | Max |
|---|---:|
| Project purpose is explicit | 5 |
| Source-of-truth locations are identified | 5 |
| Core assumptions are documented | 5 |
| Architecture or boundary model is visible | 5 |
| Known unknowns and constraints are documented | 5 |
| Claims are tied to evidence | 5 |

## Hardening: 35 Points

| Item | Max |
|---|---:|
| Validation commands or checks exist | 5 |
| Tests cover meaningful behavior, not only happy paths | 5 |
| Configuration and environment assumptions are checked | 5 |
| Failure modes are documented and tested or reviewed | 5 |
| Dangerous paths fail closed where practical | 5 |
| Drift risks are detected or periodically reviewed | 5 |
| Agentic or automated work has guardrails | 5 |

## Clarity: 25 Points

| Item | Max |
|---|---:|
| Setup path is understandable without private context | 5 |
| Contributor path is clear | 5 |
| Operator or runtime behavior is legible | 5 |
| Recovery and troubleshooting guidance exists | 5 |
| Docs are concise, current, and easy to navigate | 5 |

## Audit History: 10 Points

| Item | Max |
|---|---:|
| Hidden-trust findings are tracked | 5 |
| Review history, changelog, or decision history is visible | 5 |

## Level Mapping

| Total Score | Level |
|---:|---|
| 0-19 | THC-0: Unverified |
| 20-39 | THC-1: Documented |
| 40-59 | THC-2: Hardened |
| 60-74 | THC-3: Inspectable |
| 75-89 | THC-4: Reproducible |
| 90-100 | THC-5: High-THC |

## Caps

The reviewer may cap the level below the numeric score.

| Finding | Maximum Level |
|---|---:|
| Missing setup path | THC-1 |
| No visible validation path | THC-2 |
| Critical hidden-trust finding | THC-2 |
| Core docs known to be stale | THC-2 |
| Required operational knowledge is maintainer-only | THC-3 |
| Reproduction requires private access without explanation | THC-3 |

## Required Evidence Table

Every scored review should include an evidence table.

| Category | Evidence | Score | Notes |
|---|---|---:|---|
| Truth | | | |
| Hardening | | | |
| Clarity | | | |
| Audit History | | | |

## Review Output

A review should produce:

```txt
Recommended Level:
Review Label:
Total Score:
Level Caps Applied:
Top Hidden Trust Findings:
Next Actions:
```

## Local and Public Scores

Local THC checks and public THC scores may differ.

A local score is useful preparation evidence. A public score should be generated
from an independently inspected repository revision or an independently reviewed
evidence package.

When LLMs assist scoring, the review should expose the evidence, missing
evidence, caps, rubric version, and uncertainty. The model's answer is not the
source of truth; the inspected artifacts are.

## THC-BOT Scorecard Use

THC-BOT, the THC Benchmark Operating Test, uses this scorecard as a structured
local benchmark input.

It does not change THC Levels or level meanings.

THC-BOT should expose the slices that support a score:

- evidence
- local artifacts
- caps applied
- hidden-trust findings
- next actions
- uncertainty
- provenance

The score is not truth. It is a recommendation derived from inspected evidence.

Caps and hidden-trust findings matter more than the raw number. A project with a
high score can still be capped if important trust remains hidden.

A THC-4 score in the 80s should represent a strong project, not an easy default
outcome. THC-BOT should make strictness visible by showing what evidence earned
credit, what evidence was missing, which caps were applied, and what uncertainty
still remains.

If required THC-BOT contract fields are missing without explanation, the result
is partial validation rather than a complete local score.

## Scoring Philosophy

Do not reward volume.

A long README with stale assumptions is not high-THC.

A short project with clear truth boundaries, reliable validation, and honest known unknowns can score higher than a polished project that depends on maintainer folklore.
