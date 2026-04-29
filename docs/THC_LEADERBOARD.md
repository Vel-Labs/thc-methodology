# THC Leaderboard

A THC leaderboard can make high-THC projects visible.

It should rank inspectable review artifacts, not reputation.

## Purpose

The leaderboard exists to help people find projects that reduce hidden trust.

It should show:

- project name
- repository URL
- reviewed commit
- THC Level
- review label
- score
- key strengths
- top hidden-trust findings
- report link
- review timestamp

## Labels

Leaderboard entries should use explicit labels.

| Label | Meaning |
|---|---|
| Local THC Check | A local maintainer or agent generated the report. Not independently verified. |
| Self-Assessed | Maintainers published their own evidence-backed evaluation. |
| Automated Public Review | A public grader independently inspected the repository. |
| Peer Reviewed | Someone outside the project reviewed the evidence. |
| Maintainer Reviewed | Project maintainers reviewed or accepted the findings. |
| Vel Labs Reviewed | Vel Labs reviewed the evidence. Only use if true. |

## Entry Requirements

A leaderboard entry should include:

- public repository URL
- reviewed commit SHA
- rubric version
- generated or reviewed timestamp
- review label
- recommended level
- total score
- evidence table
- caps applied
- hidden-trust findings
- provenance file or public grader run metadata
- report URL

If these are missing, the entry should be treated as a claim, not a leaderboard
score.

## Automated Grading

An automated grader may inspect:

- README and setup path
- docs index or manifest
- source-of-truth files
- tests and validation commands
- CI configuration
- changelog or decision history
- agent instructions
- known unknowns
- hidden-trust findings
- prior THC reports

The grader should penalize missing evidence. It should not infer credit from
polish, popularity, package size, or maintainer reputation.

## Anti-Abuse Rules

Do not let a leaderboard entry imply:

- certification
- security approval
- legal compliance
- production readiness
- Vel Labs endorsement
- guaranteed reliability

Do not accept a project-supplied score as public truth without independent
inspection.

Do not rely on hidden anti-tamper markers. Leaderboard trust should come from
public provenance, reviewed commits, recomputed evidence, and independent
grader runs.

## Recommended Separation

Keep this methodology repository as the source of truth for:

- rubric
- levels
- review labels
- templates
- local skills

Build a separate website or app repository for:

- repository intake
- automated scanning
- public report generation
- leaderboard storage
- shareable pages

That separation keeps the methodology inspectable and lets the product evolve
without changing the rubric every time the app changes.
