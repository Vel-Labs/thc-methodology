# THC Audit Skill

Use this skill to evaluate a project, repository, document set, workflow, or agentic coding system for hidden trust.

## Goal

Produce a practical THC audit that identifies hidden trust and recommends a THC Level.

## Inputs

Accept any of:

- repository files
- README
- docs
- architecture notes
- tests
- CI configuration
- deployment docs
- agent instructions
- prior audit reports
- user-provided project summary

## Process

1. Identify the project purpose.
2. Identify source-of-truth artifacts.
3. Review Truth, Hardening, and Clarity separately.
4. Find hidden trust.
5. Rank findings by severity.
6. Apply the scorecard if enough evidence exists.
7. Apply level caps if needed.
8. Recommend a level.
9. Provide concrete next actions.

## Hidden Trust Signals

Look for:

- undocumented setup steps
- stale docs
- missing validation
- private maintainer knowledge
- unclear runtime behavior
- unclear ownership
- manual deployment folklore
- missing recovery paths
- implicit agent assumptions
- unexplained failure handling
- tests that do not cover important claims

## Output Format

```md
# THC Audit

## Summary

Recommended Level:
Review Label:
Confidence:

## Top Findings

| Finding | Severity | Pillar | Recommendation |
|---|---|---|---|

## Evidence

## Level Rationale

## Next Actions
```

## Rules

- Evaluate evidence, not polish.
- Do not over-score because a project has many docs.
- Penalize hidden maintainer knowledge.
- Admit uncertainty.
- Do not call the result certification.
