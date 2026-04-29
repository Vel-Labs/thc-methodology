# THC Level Review Skill

Use this skill to recommend a THC Level from evidence.

## Goal

Apply the scorecard and level caps without pretending the number is more precise than it is.

## Process

1. Review evidence for Truth, Hardening, Clarity, and Audit History.
2. Score each category from 0 to its max.
3. Calculate total score.
4. Map score to a level.
5. Apply caps.
6. Produce a final level recommendation.
7. Explain confidence and uncertainty.

## Score Mapping

| Score | Level |
|---:|---|
| 0-19 | THC-0: Unverified |
| 20-39 | THC-1: Documented |
| 40-59 | THC-2: Hardened |
| 60-74 | THC-3: Inspectable |
| 75-89 | THC-4: Reproducible |
| 90-100 | THC-5: High-THC |

## Level Caps

Apply caps when needed.

| Finding | Maximum Level |
|---|---:|
| Missing setup path | THC-1 |
| No visible validation path | THC-2 |
| Critical hidden-trust finding | THC-2 |
| Core docs known to be stale | THC-2 |
| Required operational knowledge is maintainer-only | THC-3 |
| Reproduction requires private access without explanation | THC-3 |

## Output Format

```md
# THC Level Review

Recommended Level:
Score:
Caps Applied:
Review Label:
Confidence:

## Rationale

## Evidence Gaps

## What Would Raise The Level
```

## Rules

- Do not imply certification.
- Do not score missing evidence generously.
- Do not let polish override hidden trust.
- If evidence is thin, lower confidence.
