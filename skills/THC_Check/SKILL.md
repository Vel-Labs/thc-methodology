---
name: "THC_Check"
description: "Run a local THC preparation audit and produce a Local THC Check summary plus structured THC-BOT benchmark artifacts."
---

# THC Check

Use this skill when a user wants to locally evaluate a project against THC
Methodology before publishing, submitting, or requesting an independent review.

## Goal

Produce a local THC check that helps a project prepare for public review, plus
a structured THC-BOT benchmark package for the reviewed revision.

The output is a preparation artifact, not certification and not an independent
public score.

## Required Artifact Path

When run inside a repository, create or update:

```txt
docs/thc/
  README.md
  LOCAL_CHECK.md
  THC-BOT.md
  THC-BOT.history.json
  runs/
    <run-id>/
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

If `docs/thc/README.md` does not exist, create it with this notice:

```md
# THC Review Artifacts

This folder stores THC Methodology review artifacts.

Public reviewers and automated graders may inspect this folder first.

Do not hand-edit generated THC check or THC-BOT reports to improve the score.
If the project changes, rerun the THC check and preserve the reviewed revision,
timestamp, evidence, caps, uncertainty, and run history.

Local THC checks are baseline preparation artifacts. Third-party or public
review is preferred for public badges, leaderboard placement, and outside trust.

THC-BOT artifacts are first-party local benchmark artifacts. Public reviewers
may use them as a map to evidence, then independently verify the cited files.
```

`docs/thc/LOCAL_CHECK.md` is the executive summary and readiness checklist.

`docs/thc/THC-BOT.md` is the run ledger.

Each `docs/thc/runs/<run-id>/` folder is one structured THC Benchmark Operating
Test run for one reviewed revision.

The stable path reduces discovery friction for future public review. A public
grader may use it to find evidence faster, but it should still verify the cited
files independently.

## THC-BOT Contract And Provenance

For each run, write `THC-BOT.contract.json` and `THC-BOT.provenance.json`.

These files are tamper-evidence, not tamper-proof security. A repo owner can
still edit local artifacts. The purpose is to make manual changes easier for
public reviewers and automated graders to notice.

Every required contract field must be answered with a concrete value, an
explicit unavailable reason, or an explicit unknown state. Silent blanks produce
partial validation, not a complete local score.

Minimum contract shape:

The empty strings below are placeholders for generated values. Do not leave
them blank in a complete run.

```json
{
  "artifactKind": "THC-BOT",
  "contractVersion": "0.1.0",
  "rubricVersion": "",
  "validationState": "Complete",
  "project": {
    "name": "",
    "repositoryUrl": {
      "value": null,
      "status": "unknown",
      "reason": "Not inspected yet."
    },
    "visibility": "unknown"
  },
  "reviewedRevision": {
    "commitSha": {
      "value": "",
      "status": "provided",
      "reason": ""
    },
    "generatedAt": "",
    "worktreeState": "clean"
  },
  "review": {
    "reviewLabel": "Local THC Check",
    "recommendedLevel": "",
    "totalScore": null,
    "confidence": "low",
    "capsApplied": []
  },
  "evidenceTable": [],
  "hiddenTrustFindings": [],
  "nextActions": [],
  "uncertaintyNotes": [],
  "provenance": {
    "commandsRun": [],
    "filesInspected": [],
    "evidenceFileHashes": {},
    "reportHash": "",
    "contractHash": "",
    "model": {
      "value": null,
      "status": "unavailable",
      "reason": "Generated manually or model was not recorded."
    },
    "promptVersion": {
      "value": "THC_Check",
      "status": "provided",
      "reason": ""
    }
  }
}
```

Minimum provenance shape:

```json
{
  "artifactKind": "THC-BOT Provenance",
  "contractVersion": "0.1.0",
  "generatedAt": "",
  "reviewedRevision": {
    "commitSha": "",
    "worktreeState": "clean"
  },
  "commandsRun": [],
  "filesInspected": [],
  "fileHashes": {},
  "artifactHashes": {},
  "unavailableFields": [
    {
      "field": "",
      "reason": ""
    }
  ]
}
```

A public grader should recompute hashes, inspect the listed evidence files, and
compare the reviewed revision against the public repository state. If the
contract or provenance file is missing, stale, inconsistent, or lacks a clean
worktree precheck, the local check should receive lower confidence.

## Clean Worktree and Artifact Commit

`THC_Check` should run against a clean git worktree.

Before scoring, check:

```txt
git status --porcelain
git rev-parse HEAD
```

If the worktree is dirty, stop and report that the project must commit, stash,
or discard unrelated changes before generating a local THC check.

This matters because the report needs a stable reviewed revision. If the review
runs against uncommitted files, a public grader cannot cleanly verify what was
actually reviewed.

Generating `docs/thc/LOCAL_CHECK.md`, `docs/thc/THC-BOT.md`,
`docs/thc/THC-BOT.history.json`, and a new `docs/thc/runs/<run-id>/` folder
will make the worktree dirty after the review. That is expected.

After generation, attempt to commit only the THC artifacts:

```txt
docs/thc/README.md
docs/thc/LOCAL_CHECK.md
docs/thc/THC-BOT.md
docs/thc/THC-BOT.history.json
docs/thc/runs/<run-id>/
```

Use a message like:

```txt
docs(thc): add local THC check for <reviewed_revision>
```

The artifact-only commit creates useful history. If a later local check changes
the score, caps, evidence, or uncertainty, the diff becomes reviewable instead
of being overwritten silently.

Fail closed if unrelated files changed during generation. Do not include
non-THC files in the artifact commit.

If the commit cannot be created because git identity, hooks, permissions, or
repository policy blocks it, leave the generated artifacts unstaged, report the
reason, and set `artifact_commit` to empty with an uncertainty note.

## Inputs

Accept any of:

- repository path
- repository URL already cloned locally
- README
- docs
- tests
- CI configuration
- agent instructions
- prior audit reports
- user-provided project summary

## Process

1. Verify the repository is a git worktree.
2. Require `git status --porcelain` to be empty before scoring.
3. Record `git rev-parse HEAD` as the reviewed revision.
4. Identify the project purpose.
5. Identify source-of-truth artifacts.
6. Inspect Truth, Hardening, Clarity, and Audit History evidence.
7. Score each category using `docs/THC_SCORECARD.md`.
8. Apply caps from `docs/THC_LEVELS.md`.
9. Identify hidden-trust findings.
10. Produce a local THC score and confidence.
11. List what evidence would be useful for a public review.
12. Create a run ID using date, project slug, contract version, and short revision.
13. Write the executive summary to `docs/thc/LOCAL_CHECK.md`.
14. Write or update the run ledger at `docs/thc/THC-BOT.md`.
15. Write or update `docs/thc/THC-BOT.history.json`.
16. Write the run report to `docs/thc/runs/<run-id>/THC-BOT.md`.
17. Write `docs/thc/runs/<run-id>/THC-BOT.contract.json`.
18. Write `docs/thc/runs/<run-id>/THC-BOT.provenance.json`.
19. Write the required `docs/thc/runs/<run-id>/slices/*.json` files.
20. Ensure `docs/thc/README.md` explains the artifact contract and disclaimer.
21. Verify the only changed paths are under `docs/thc/`.
22. Commit only `docs/thc/README.md`, `docs/thc/LOCAL_CHECK.md`,
    `docs/thc/THC-BOT.md`, `docs/thc/THC-BOT.history.json`, and
    `docs/thc/runs/<run-id>/` with the standard message.
23. Record the artifact commit SHA in the provenance file and report, or record
    why the commit could not be created.

## Output Format

```md
# Local THC Check

Project:
Repository:
Reviewed Revision:
Precheck Worktree Clean: Yes
Generated At:
Review Label: Local THC Check
Rubric Version:
Latest THC-BOT Run:
THC-BOT Ledger: docs/thc/THC-BOT.md
Contract:
Provenance:
Artifact Commit:
Confidence:

> This is a local preparation artifact. Do not hand-edit this report to improve
> the score. If project evidence changes, rerun the THC check. Public or
> third-party review is preferred for public claims because it reduces
> self-reporting bias and doctored-artifact risk.

## Summary

Recommended Level:
Total Score:
Caps Applied:
Validation State:

## Repo Readiness Checklist

- [ ] Source-of-truth files are explicit.
- [ ] Setup path is inspectable.
- [ ] Validation commands are visible.
- [ ] Caps and hidden-trust findings are recorded.
- [ ] Required THC-BOT fields are answered or explicitly unavailable.
- [ ] Public evidence limits are stated.

## Latest THC-BOT Slices

| Slice | File | Status | Summary |
|---|---|---|---|
| | | | |

## Public Review Handoff

- Files a public grader should inspect first:
- Evidence links that should be verified independently:
- Claims that should not be trusted without fresh inspection:
- Known score uncertainty:

## Next Actions
```

## Rules

- Evaluate evidence, not vibes.
- Do not treat local LLM output as public truth.
- Stop before scoring if the worktree is dirty.
- Record the clean pre-generation `HEAD` as the reviewed revision.
- Write the executive summary to `docs/thc/LOCAL_CHECK.md`.
- Write the structured THC-BOT package under `docs/thc/runs/<run-id>/`.
- Write the run ledger to `docs/thc/THC-BOT.md`.
- Write the history index to `docs/thc/THC-BOT.history.json`.
- Write contract and provenance to the run folder.
- Preserve `docs/thc/README.md` as the discovery and disclaimer file.
- Attempt an artifact-only commit for `docs/thc/*` after generation.
- Treat each run folder as immutable by convention.
- Do not include unrelated paths in the artifact commit.
- If the artifact commit cannot be created, report why and leave the artifacts
  for the operator to review.
- Do not hand-edit generated reports to improve the apparent score; rerun the
  check after project changes.
- Do not hide anti-tamper markers or rely on security through obscurity.
- Do not score missing evidence generously.
- Do not infer setup, validation, or ownership from private context.
- Apply level caps even when the numeric score is high.
- If a score depends on a model judgment, explain the evidence and uncertainty.
- Do not imply certification, endorsement, security approval, or production
  readiness.
