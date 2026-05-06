# THC-BOT

THC-BOT means THC Benchmark Operating Test.

It is a structured local audit artifact package for benchmarking a project
against THC Methodology.

THC-BOT is not certification. It is not endorsement. It is not public truth.

It is a way to make local review evidence inspectable.

## Purpose

THC-BOT gives a project a repeatable local benchmark package.

It helps a project:

- record what was reviewed
- expose the evidence behind a THC score
- identify caps and hidden-trust findings
- track audit history over time
- prepare for public or third-party review
- preserve useful evidence for private, internal, and closed-source projects

The package should make a local review easier to inspect without asking anyone
to trust the project owner blindly.

## Non-Goals

THC-BOT does not provide:

- certification
- public leaderboard acceptance
- Vel Labs endorsement
- security approval by default
- production readiness guarantees
- proof that the project owner did not edit artifacts

Local artifacts can be useful and still be first-party claims.

## Trust Boundary

THC-BOT artifacts are first-party local benchmark artifacts.

They can reduce hidden trust inside a project, but they do not remove the need
for independent verification when a score is used publicly.

The public rule is:

```txt
Do not trust. Verify.
```

A public reviewer or leaderboard may use THC-BOT artifacts as a map to evidence.
The reviewer should still verify the cited files, reviewed revision, caps,
hidden-trust findings, and provenance independently.

## Who It Is For

THC-BOT is useful for:

- public open source projects preparing for public review
- private repositories that need internal audit history
- internal platforms that cannot publish source code
- closed-source projects that still want stricter local evidence discipline
- agents that need a stable artifact contract to inspect
- leaderboard tooling that needs a structured handoff from local artifacts

A private or closed-source project can produce a valid local THC-BOT package.
That does not make it eligible for a public leaderboard unless the evidence
needed for the public claim is publicly inspectable.

## Relationship To Local THC Check

Local THC Check is the human-facing local review posture.

THC-BOT is the structured benchmark package behind that posture.

Recommended layout:

```txt
docs/thc/
  README.md
  LOCAL_CHECK.md
  THC-BOT.md
  THC-BOT.history.json
  THC-BOT.html
  runs/
    2026-05-05_project_0.1.0_abc1234/
      THC-BOT.md
      THC-BOT.contract.json
      THC-BOT.provenance.json
      slices/
        overview.json
        evidence.json
        local-artifacts.json
        caps-applied.json
        hidden-trust.json
        next-actions.json
        uncertainty.json
```

`LOCAL_CHECK.md` should be an executive summary and repo readiness checklist.
It should point to the latest THC-BOT run instead of duplicating the full
structured contract.

`THC-BOT.md` at the root should aggregate run history. Each row should point to
one run and summarize the status of each slice.

`THC-BOT.html` is an optional rendered view for operators. It should be
generated from existing THC-BOT artifacts and should not become a source of
truth.

Each run folder should be treated as immutable by convention. New assessments
create new run folders. Corrections should create a new run or a clearly
recorded supersession note.

## Relationship To Public Leaderboard

THC-BOT improves the leaderboard handoff. It does not replace public review.

For a public repository:

- no THC-BOT artifacts means the public tooling performs a full audit
- valid THC-BOT artifacts may be used as a handshake map
- stale or invalid THC-BOT artifacts may be used as hints only
- contradictory artifacts should lower confidence
- cited evidence should be verified against the reviewed revision

For a private or internal repository:

- THC-BOT may be used locally forever
- the package can track internal improvements over time
- public leaderboard submission requires publicly inspectable evidence

## Structured Artifact Layout

Each THC-BOT run should include:

- `THC-BOT.md` for the human-readable run report
- `THC-BOT.contract.json` for the machine-readable audit contract
- `THC-BOT.provenance.json` for commands, files, hashes, and generation context
- `slices/overview.json` for project and score summary
- `slices/evidence.json` for scored evidence and missing evidence
- `slices/local-artifacts.json` for local docs, tests, CI, and repo artifacts
- `slices/caps-applied.json` for level caps and cap rationale
- `slices/hidden-trust.json` for hidden-trust findings
- `slices/next-actions.json` for concrete next actions
- `slices/uncertainty.json` for confidence limits and unavailable fields

The root `docs/thc/THC-BOT.md` should aggregate the runs:

| Date | Test Version | Reviewed Revision | Overview | Evidence | Local Artifacts | Caps | Hidden Trust | Next Actions | Confidence | Public Readiness |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-05-05 | 0.1.0 | `abc1234` | complete | partial | complete | applied | high | 3 open | medium | needs public verification |

The table is a navigation layer. The run folder is the source for that run.

## Optional Visualizer

A project may render THC-BOT artifacts into:

```txt
docs/thc/THC-BOT.html
```

The visualizer should show:

- latest level, score, confidence, and validation state
- score history over time
- slice status matrix
- recurring caps
- hidden-trust trend
- next-action counts
- public-readiness status
- links to the latest report, contract, provenance, and slices

The visualizer is a local operator readout. It is not required for a complete
THC-BOT score, and it does not replace the contract, provenance, slices, or run
reports.

Public tooling may ignore the HTML and read the canonical JSON and Markdown
artifacts directly.

## Required Report Fields

Each run report should state:

- project name
- repository URL or explicit unavailable reason
- project visibility
- reviewed revision
- generated timestamp
- rubric version
- contract version
- review label
- recommended THC level
- total score
- confidence
- caps applied
- one-sentence assessment
- evidence table
- hidden-trust findings
- slice summaries
- next actions
- uncertainty notes
- public leaderboard readiness
- provenance summary

If a field cannot be filled, the report should say why. Silent blanks make the
score weaker.

## Required Provenance Fields

Provenance should record:

- reviewed revision
- worktree state
- generated timestamp
- commands run
- files inspected
- evidence file hashes
- report hash
- contract hash when practical
- rubric version
- contract version
- skill or tool source when used
- model and prompt version when applicable
- unavailable fields and reasons

Provenance is tamper-evidence, not tamper-proof security.

## Slice Expectations

Each slice should answer one question.

| Slice | Question |
|---|---|
| Overview | What was reviewed and what was recommended? |
| Evidence | Which Truth, Hardening, Clarity, and Audit History evidence supports the score? |
| Local Artifacts | Which local files, commands, tests, docs, and repo contracts were inspected? |
| Caps Applied | Which caps limited the level, and why? |
| Hidden Trust | What still requires private context, operator memory, or unverifiable claims? |
| Next Actions | What concrete changes would improve the THC posture? |
| Uncertainty | What could not be verified, and how does that affect confidence? |

Slices should be specific enough for a public reviewer to challenge.

## Audit History

THC-BOT history should show changes over time.

A strong history model uses:

- one run folder per reviewed revision
- stable run IDs that include date, contract version, and short revision
- root aggregator rows for quick comparison
- artifact-only commits when practical
- explicit supersession notes when a run is replaced

Do not silently overwrite old runs to improve the apparent trend.

## Strong Results

A strong THC-BOT result has:

- a clean reviewed revision
- complete required fields or explicit unavailable reasons
- cited evidence that exists at the reviewed revision
- meaningful missing-evidence notes
- caps applied even when the score is high
- hidden-trust findings that are specific and actionable
- reproducible commands where practical
- visible audit history
- clear public-readiness limits

High scores should feel strict because the evidence is strict.

## Weak Or Invalid Results

A THC-BOT result is weak when:

- evidence is vague
- files are cited without reviewed revision context
- private context is required but not named
- caps are omitted or softened
- hidden-trust findings are missing despite obvious gaps
- generated artifacts overwrite prior history
- confidence is high without provenance

A THC-BOT result is invalid when:

- required fields are absent without explanation
- provenance contradicts the report
- reviewed revision cannot be identified
- the report claims certification or endorsement
- public credibility is implied from private evidence
- the artifact package has been doctored without a new run or supersession note

## Leaderboard Handshake Validation

Leaderboard tooling should treat THC-BOT as a handshake input.

The public audit should:

1. Locate the latest THC-BOT run.
2. Check contract and provenance completeness.
3. Verify the reviewed revision.
4. Recompute hashes when possible.
5. Independently inspect cited evidence.
6. Re-evaluate caps and hidden-trust findings.
7. Compare public findings against local claims.
8. Flag stale, missing, contradictory, or unverifiable artifacts.
9. Generate a public score from verified evidence, not from the local score.

THC-BOT makes public review easier. It should never make public review blind.
