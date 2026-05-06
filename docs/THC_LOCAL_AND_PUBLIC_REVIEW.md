# THC Local and Public Review

THC review can happen locally or through a public independent process.

These are related, but they are not the same claim.

Local review is a useful baseline. Third-party or public review is preferred
when the score is meant to persuade outsiders, appear on a leaderboard, or
support a public badge.

The reason is simple: local review can be biased, incomplete, selectively
edited, or run against a different project state than the one being shown
publicly. Public or third-party review reduces that hidden trust by tying the
score to an independently inspected revision and a visible report.

## Review Types

| Review Type | Meaning | Trust Boundary |
|---|---|---|
| Local THC Check | A maintainer or agent reviews the project locally. | Depends on the local prompt, model, files, and operator. |
| THC-BOT | A structured local THC Benchmark Operating Test package records one benchmark run. | First-party artifact package. Useful input, not public truth. |
| Self-Assessed | Maintainers publish their own THC evaluation. | Depends on maintainer honesty and visible evidence. |
| Peer Reviewed | Someone outside the project reviews the evidence. | Depends on reviewer independence and scope. |
| Automated Public Review | A public service inspects the repository and generates a report. | Depends on the service rules, model, and captured evidence. |
| Vel Labs Reviewed | Vel Labs reviewed the evidence. | Only valid if Vel Labs actually performed the review. |

## Local THC Check

A local THC check is a preparation artifact and baseline signal.

It helps a project:

- find hidden trust before public review
- collect evidence links
- identify level caps
- prepare a submission
- improve docs, tests, and source-of-truth boundaries

A local check should not be treated as a public score unless the report is
published with enough evidence for another person to inspect.

Even then, the stronger claim is still third-party or public review, because an
independent reviewer can verify that evidence was not cherry-picked, stale, or
doctored.

## Local Artifact Convention

Projects using `THC_Check` should store local review artifacts at:

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

`docs/thc/LOCAL_CHECK.md` is the standard local executive summary path.

It should summarize the latest local posture, point to the latest THC-BOT run,
and list repo readiness items that block a meaningful score or public review.

THC-BOT is the recommended structured local benchmark package.

The root `docs/thc/THC-BOT.md` should act as a run ledger. Each row should
summarize one test run by date, contract version, reviewed revision, slice
status, confidence, and public-readiness status.

Each folder under `docs/thc/runs/` should contain one benchmark run. The run is
the structured scoring source for that reviewed revision.

`THC-BOT.contract.json` should record the required scoring fields. Every
required field must be answered with a value, an explicit unavailable reason,
or an explicit unknown state. Missing fields produce partial validation, not a
complete score.

`THC-BOT.provenance.json` should record the reviewed revision, clean-worktree
precheck, generation time, report hash, evidence file hashes, commands run,
rubric version, contract version, caps applied, score, artifact commit if one
exists, and uncertainty.

`THC-BOT.html` is optional. It may render the ledger, score history, slice
status, caps, hidden-trust trends, and public-readiness status for local
operators. It should be regenerated from canonical THC-BOT artifacts and should
not be treated as scoring truth.

`docs/thc/README.md` should explain that the folder is for THC review artifacts
and should not be hand-edited to improve a score. If the project changes, the
local check should be rerun so the reviewed revision, timestamp, evidence,
level caps, and uncertainty remain inspectable.

This convention lets public reviewers and automated graders discover local THC
evidence quickly. The local report remains input, not truth. Public graders
should independently verify cited files against the reviewed revision.

See `docs/THC_BOT.md` and `docs/THC_BOT_CONTRACT.md` for the canonical
THC-BOT contract.

## Tamper Evidence

Local artifacts cannot be made fully tamper-proof while the repo owner controls
the files, prompts, model, and skill implementation.

Do not rely on hidden markers. Hidden validation creates more hidden trust and
will fail once people learn where to edit.

Use visible provenance instead:

- reviewed commit SHA
- clean-worktree precheck
- generated timestamp
- rubric version
- contract version
- skill source or version
- report hash
- contract hash when practical
- evidence file hashes
- commands run
- caps applied
- artifact commit if generated artifacts were committed
- uncertainty notes

This does not prevent manipulation. It makes manipulation easier to detect.

`THC_Check` should stop if the worktree is dirty before scoring. The reviewed
revision should be the clean `HEAD` before generated THC artifacts are written.
After generation, it should attempt to commit only the THC artifacts using a
message like:

```txt
docs(thc): add local THC check for <reviewed_revision>
```

That commit is useful for discovery, but the score should still be verified
against the recorded reviewed revision.

This gives local THC checks a simple history model: each THC-BOT run creates a
small artifact commit, and later changes to score, caps, evidence, or
uncertainty are visible in normal git history.

If unrelated files change during generation, the artifact commit should fail
closed instead of mixing project changes with review artifacts.

For public claims, the preferred defense is independent review: rerun the grader
against the public repository revision, recompute hashes, and treat the local
THC-BOT package as a map to evidence rather than as the score source.

## Public THC Score

A public THC score should be independently generated or independently reviewed.

This is the preferred review type for public comparison because it reduces
self-reporting bias and ties the result to inspectable evidence.

For a website or hosted grader, the public report should include:

- repository URL
- commit SHA or reviewed revision
- review timestamp
- review label
- recommended level
- total score
- level caps applied
- evidence table
- hidden-trust findings
- files inspected
- scoring rules or rubric version
- uncertainty notes

The score is still a review artifact. It is not certification.

## LLM Scoring Drift

Different models, prompts, and context windows may produce different THC scores.

That is expected.

To reduce hidden trust, any LLM-assisted score should expose:

- the rubric version used
- the exact review label
- the evidence it relied on
- the missing evidence it penalized
- any level caps applied
- confidence or uncertainty

The report should make the reasoning inspectable instead of asking readers to
trust the model.

## Local-to-Public Handoff

A local THC check and THC-BOT package may speed up public scoring if they are
submitted as evidence.

The public grader should treat them as input, not truth.

Good use:

```txt
The project submitted a THC-BOT package. The public grader used it to find
evidence faster, then independently verified the cited files at commit abc123.
```

Weak use:

```txt
The project submitted a THC-BOT package, so the public score reused it.
```

If THC-BOT artifacts are missing, public tooling should perform a full audit.

If THC-BOT artifacts are present and valid, public tooling should use them as a
map and second-opinion target, then independently verify the evidence, caps,
hidden-trust findings, and reviewed revision.

If THC-BOT artifacts are stale, inconsistent, incomplete, or unverifiable,
public tooling should flag the mismatch and lower confidence.

## Leaderboard Rule

A leaderboard should rank public review artifacts, not unverified claims.

Each entry should link to the report that explains:

- what was reviewed
- why the score was assigned
- which caps were applied
- what hidden trust remains

Leaderboard placement should never imply certification, security approval, or
guaranteed project quality.
