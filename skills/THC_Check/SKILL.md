---
name: "THC_Check"
description: "Run a local THC preparation audit for a repository and produce an evidence-backed local score, caps, hidden-trust findings, and public-review handoff notes."
---

# THC Check

Use this skill when a user wants to locally evaluate a project against THC
Methodology before publishing, submitting, or requesting an independent review.

## Goal

Produce a local THC check that helps a project prepare for public review.

The output is a preparation artifact, not certification and not an independent
public score.

## Required Artifact Path

When run inside a repository, create or update:

```txt
docs/thc/
  README.md
  LOCAL_CHECK.md
  LOCAL_CHECK.provenance.json
```

If `docs/thc/README.md` does not exist, create it with this notice:

```md
# THC Review Artifacts

This folder stores THC Methodology review artifacts.

Public reviewers and automated graders may inspect this folder first.

Do not hand-edit generated THC check reports to improve the score. If the
project changes, rerun the THC check and preserve the reviewed revision,
timestamp, evidence, caps, and uncertainty.

Local THC checks are baseline preparation artifacts. Third-party or public
review is preferred for public badges, leaderboard placement, and outside trust.
```

The stable path reduces discovery friction for future public review. A public
grader may use it to find evidence faster, but it should still verify the cited
files independently.

## Provenance File

Also write `docs/thc/LOCAL_CHECK.provenance.json`.

This file is tamper-evidence, not tamper-proof security. A repo owner can still
edit local artifacts. The purpose is to make manual changes easier for public
reviewers and automated graders to notice.

Recommended fields:

```json
{
  "artifact_version": "1",
  "review_label": "Local THC Check",
  "generated_at": "",
  "repository": "",
  "reviewed_revision": "",
  "precheck_worktree_clean": true,
  "artifact_commit": "",
  "rubric_version": "",
  "skill_name": "THC_Check",
  "skill_source": "",
  "report_path": "docs/thc/LOCAL_CHECK.md",
  "report_sha256": "",
  "evidence": [
    {
      "path": "",
      "sha256": "",
      "notes": ""
    }
  ],
  "commands_run": [],
  "caps_applied": [],
  "score": null,
  "recommended_level": "",
  "uncertainty": ""
}
```

A public grader should recompute the report hash, inspect the listed evidence
files, and compare the reviewed revision against the public repository state.
If the provenance file is missing, stale, inconsistent, or lacks a clean
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

Generating `docs/thc/LOCAL_CHECK.md`,
`docs/thc/LOCAL_CHECK.provenance.json`, and `docs/thc/README.md` will make the
worktree dirty after the review. That is expected.

After generation, attempt to commit only the THC artifacts:

```txt
docs/thc/README.md
docs/thc/LOCAL_CHECK.md
docs/thc/LOCAL_CHECK.provenance.json
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
12. Write the report to `docs/thc/LOCAL_CHECK.md`.
13. Write `docs/thc/LOCAL_CHECK.provenance.json` with hashes and review metadata.
14. Ensure `docs/thc/README.md` explains the artifact contract and disclaimer.
15. Verify the only changed paths are under `docs/thc/`.
16. Commit only `docs/thc/README.md`, `docs/thc/LOCAL_CHECK.md`, and
    `docs/thc/LOCAL_CHECK.provenance.json` with the standard message.
17. Record the artifact commit SHA in the provenance file and report, or record
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
Provenance: docs/thc/LOCAL_CHECK.provenance.json
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

## Evidence Table

| Category | Evidence | Score | Notes |
|---|---|---:|---|
| Truth | | | |
| Hardening | | | |
| Clarity | | | |
| Audit History | | | |

## Top Hidden Trust Findings

| Finding | Severity | Evidence | Recommendation |
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
- Write the local report to `docs/thc/LOCAL_CHECK.md`.
- Write provenance to `docs/thc/LOCAL_CHECK.provenance.json`.
- Preserve `docs/thc/README.md` as the discovery and disclaimer file.
- Attempt an artifact-only commit for `docs/thc/*` after generation.
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
