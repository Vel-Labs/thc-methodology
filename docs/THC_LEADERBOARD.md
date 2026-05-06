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

## THC-BOT Handshake

THC-BOT means THC Benchmark Operating Test.

It is a structured local benchmark package. It can help a public grader find
evidence faster, but it is not public truth.

Leaderboard tooling should use this intake model:

| Project State | Leaderboard Behavior |
|---|---|
| Public repo with no THC-BOT artifacts | Perform a full public audit. |
| Public repo with valid THC-BOT artifacts | Use the artifacts as a handshake map, then independently verify cited evidence. |
| Public repo with stale or invalid THC-BOT artifacts | Use as hints only, flag the mismatch, and reduce confidence. |
| Private or internal repo | Use THC-BOT locally only unless the evidence needed for the public claim is publicly inspectable. |

Valid THC-BOT artifacts should include:

- reviewed revision
- contract version
- rubric version
- evidence slice
- local-artifacts slice
- caps-applied slice
- hidden-trust slice
- next-actions slice
- uncertainty slice
- provenance file
- root run history or a clear run path

Even when these artifacts are present, the leaderboard should independently
verify:

- cited evidence
- reviewed revision
- caps
- hidden-trust findings
- worktree or repository state
- whether public evidence supports the public score

The public score should come from verified public evidence, not from the local
THC-BOT score.

If a project includes `docs/thc/THC-BOT.html`, treat it as an operator readout.
Leaderboard tooling should verify the canonical JSON and Markdown artifacts
instead of trusting the rendered HTML.

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

Do not accept THC-BOT artifacts as leaderboard proof without independent
verification.

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
