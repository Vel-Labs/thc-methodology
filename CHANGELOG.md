# Changelog

## Unreleased

Added:

- THC-BOT, the THC Benchmark Operating Test, as the canonical structured local
  benchmark artifact package.
- `docs/THC_BOT.md` and `docs/THC_BOT_CONTRACT.md` for the THC-BOT trust
  boundary, run history model, slice layout, and required contract fields.
- `templates/thc-bot-report.md` as the human-readable report template for a
  THC-BOT run.
- `skills/THC_BOT_Visualizer/` as an optional local HTML readout skill for
  existing THC-BOT artifacts.
- leaderboard handshake validation guidance for treating THC-BOT artifacts as
  input, not public truth.
- MIT license and attribution notice.
- local THC check vs public THC score guidance.
- leaderboard concept and anti-abuse rules.
- `THC_Check` local preparation audit skill.
- standard local artifact path at `docs/thc/` with `LOCAL_CHECK.md`,
  `THC-BOT.md`, `THC-BOT.history.json`, and immutable run folders by convention.
- THC-BOT provenance convention for visible tamper-evidence through hashes,
  reviewed revisions, clean-worktree prechecks, contract version, and rubric
  metadata.
- clean-worktree precheck requirement for `THC_Check`, plus an attempted
  artifact-only commit for generated `docs/thc/*` files.
- submission and audit template fields for local checks, reviewed revisions,
  rubric versions, confidence, and public-review handoff notes.

Changed:

- clarified licensing as low-friction reuse with credit appreciated where
  practical.

## 0.2.0 - Public Draft Scaffold

Initial standalone repository scaffold for THC Methodology.

Added:

- canonical methodology document
- standalone doctrine document
- authoring guide
- evaluation lens
- scorecard
- THC Level breakdown
- submission templates
- case study template
- audit report template
- repo self-check template
- agent operating instructions
- skill definitions for agentic review
- evaluation submission area
- publication guide
- feedback and pressure-testing notes

This version intentionally remains a public draft. The evaluation model needs pressure testing against real projects, counterexamples, and failed projects before any 1.0 claim.
