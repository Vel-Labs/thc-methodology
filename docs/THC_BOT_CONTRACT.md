# THC-BOT Contract

This document defines the human-readable contract for THC-BOT artifacts.

THC-BOT means THC Benchmark Operating Test.

The contract is methodology-first. It is not tied to TypeScript, JSON Schema, or
any specific implementation language.

## Contract Rule

Every required field must be answered.

An answer may be:

1. a concrete value
2. `null` with an explicit unavailable reason
3. an explicit unknown state with a reason

Silent blanks are not valid answers.

The score should be treated as complete only when every required field has been
answered and the supporting evidence can be inspected for the review scope.

## Validation States

| State | Meaning |
|---|---|
| Complete | All required fields are populated or explicitly unavailable with reasons. |
| Partial Validation | Some required fields are missing, unclear, stale, or not inspectable. |
| Invalid | Required fields are absent, contradictory, doctored, or unverifiable. |

Private and closed-source projects can produce complete local THC-BOT packages.
They cannot convert private evidence into public leaderboard credibility.

## Required Value Object

Use this shape when a required field may be unavailable:

```json
{
  "value": null,
  "status": "unavailable",
  "reason": "Project is private and no public repository URL exists."
}
```

Allowed `status` values:

- `provided`
- `unavailable`
- `unknown`
- `not_applicable`

Use `not_applicable` only when the field truly does not apply to the review
scope. Do not use it to avoid missing evidence.

## Required Run Files

Each THC-BOT run should contain:

```txt
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

## Root History Files

The local artifact folder should contain:

```txt
docs/thc/
  LOCAL_CHECK.md
  THC-BOT.md
  THC-BOT.history.json
  THC-BOT.html
  runs/
```

`LOCAL_CHECK.md` is the executive summary and readiness checklist.

`THC-BOT.md` is the human-readable run ledger.

`THC-BOT.history.json` is the machine-readable run ledger.

`THC-BOT.html` is an optional rendered view. It is not part of the canonical
contract and should be regenerated from the ledger, run contracts, provenance,
and slices.

## THC-BOT.contract.json

`THC-BOT.contract.json` is the canonical machine-readable record for one run.

Minimum required shape:

```json
{
  "artifactKind": "THC-BOT",
  "contractVersion": "0.1.0",
  "rubricVersion": "THC Methodology 0.2.0",
  "validationState": "Complete",
  "project": {
    "name": "Example Project",
    "repositoryUrl": {
      "value": "https://github.com/example/project",
      "status": "provided",
      "reason": ""
    },
    "visibility": "public"
  },
  "reviewedRevision": {
    "commitSha": {
      "value": "abc1234abc1234abc1234abc1234abc1234abc1234",
      "status": "provided",
      "reason": ""
    },
    "generatedAt": "2026-05-05T16:30:00Z",
    "worktreeState": "clean"
  },
  "review": {
    "reviewLabel": "Local THC Check",
    "recommendedLevel": "THC-3 Inspectable",
    "totalScore": 72,
    "confidence": "medium",
    "capsApplied": ["No public evidence for requested level"]
  },
  "evidenceTable": [
    {
      "category": "Truth",
      "score": 20,
      "evidence": ["README.md states source-of-truth files."],
      "missingEvidence": ["No architecture boundary diagram."],
      "notes": "Core claims are visible but not fully mapped."
    }
  ],
  "hiddenTrustFindings": [
    {
      "finding": "Release process depends on maintainer memory.",
      "severity": "medium",
      "evidence": ["No release checklist found."],
      "recommendation": "Add a release checklist with validation commands."
    }
  ],
  "nextActions": [
    {
      "priority": "high",
      "action": "Document the release source of truth.",
      "expectedImpact": "Reduces maintainer-only operational knowledge."
    }
  ],
  "uncertaintyNotes": [
    "CI history was not inspected because public CI logs were unavailable."
  ],
  "provenance": {
    "commandsRun": ["git status --porcelain", "git rev-parse HEAD"],
    "filesInspected": ["README.md", "docs/THC_SCORECARD.md"],
    "evidenceFileHashes": {
      "README.md": "sha256:..."
    },
    "reportHash": "sha256:...",
    "contractHash": "sha256:...",
    "model": {
      "value": "gpt-5",
      "status": "provided",
      "reason": ""
    },
    "promptVersion": {
      "value": "THC_Check 0.1.0",
      "status": "provided",
      "reason": ""
    }
  }
}
```

Required enums:

- `artifactKind`: `THC-BOT`
- `validationState`: `Complete`, `Partial Validation`, `Invalid`
- `project.visibility`: `public`, `private`, `internal`, `unknown`
- `reviewedRevision.worktreeState`: `clean`, `dirty`, `unknown`
- `review.confidence`: `low`, `medium`, `high`
- `evidenceTable.category`: `Truth`, `Hardening`, `Clarity`, `Audit History`
- `hiddenTrustFindings.severity`: `low`, `medium`, `high`, `critical`
- `nextActions.priority`: `high`, `medium`, `low`

## THC-BOT.provenance.json

`THC-BOT.provenance.json` records how the run was produced.

Example:

```json
{
  "artifactKind": "THC-BOT Provenance",
  "contractVersion": "0.1.0",
  "generatedAt": "2026-05-05T16:30:00Z",
  "reviewedRevision": {
    "commitSha": "abc1234abc1234abc1234abc1234abc1234abc1234",
    "worktreeState": "clean"
  },
  "commandsRun": [
    "git status --porcelain",
    "git rev-parse HEAD",
    "npm test"
  ],
  "filesInspected": [
    "README.md",
    "docs/THC_SCORECARD.md",
    "docs/THC_LEVELS.md"
  ],
  "fileHashes": {
    "README.md": "sha256:..."
  },
  "artifactHashes": {
    "THC-BOT.md": "sha256:...",
    "THC-BOT.contract.json": "sha256:...",
    "slices/evidence.json": "sha256:..."
  },
  "unavailableFields": [
    {
      "field": "project.repositoryUrl",
      "reason": "Private internal project."
    }
  ]
}
```

If hashes are not available, the field still needs an unavailable reason.

## THC-BOT.md

Each run report should be readable without parsing JSON.

Required sections:

- Project
- Reviewed Revision
- Visibility
- Rubric Version
- Contract Version
- Recommended THC Level
- Total Score
- Confidence
- Caps Applied
- One-Sentence Assessment
- Evidence Table
- Hidden Trust Findings
- Slice Summaries
- Next Actions
- Uncertainty Notes
- Public Leaderboard Readiness
- Provenance Summary

The report should point to the JSON contract and slice files for inspection.

## slices/overview.json

Example:

```json
{
  "projectName": "Example Project",
  "reviewedRevision": "abc1234",
  "generatedAt": "2026-05-05T16:30:00Z",
  "recommendedLevel": "THC-3 Inspectable",
  "totalScore": 72,
  "confidence": "medium",
  "oneSentenceAssessment": "The project has visible truth boundaries but needs stronger release hardening."
}
```

## slices/evidence.json

Example:

```json
{
  "categories": [
    {
      "category": "Hardening",
      "score": 22,
      "evidence": [
        {
          "claim": "Validation command exists.",
          "artifact": "README.md",
          "locator": "Validation section",
          "hash": "sha256:..."
        }
      ],
      "missingEvidence": [
        "No documented failure-mode test for release rollback."
      ],
      "notes": "Validation exists but does not cover release failure."
    }
  ]
}
```

## slices/local-artifacts.json

Example:

```json
{
  "artifacts": [
    {
      "path": "README.md",
      "kind": "entrypoint",
      "inspected": true,
      "hash": "sha256:...",
      "notes": "Defines start path and validation command."
    },
    {
      "path": ".github/workflows/ci.yml",
      "kind": "validation",
      "inspected": false,
      "hash": null,
      "notes": "File not present."
    }
  ]
}
```

## slices/caps-applied.json

Example:

```json
{
  "capsApplied": [
    {
      "cap": "No visible validation path",
      "maximumLevel": "THC-2",
      "evidence": ["No test or validation command found."],
      "rationale": "A higher level would require inspectable hardening."
    }
  ]
}
```

## slices/hidden-trust.json

Example:

```json
{
  "findings": [
    {
      "finding": "Deployment depends on private operator knowledge.",
      "severity": "high",
      "evidence": ["No deployment guide or runbook found."],
      "recommendation": "Add a deployment runbook with prerequisites, commands, and rollback path.",
      "remainingHiddenTrust": "Access to production credentials remains private."
    }
  ]
}
```

## slices/next-actions.json

Example:

```json
{
  "actions": [
    {
      "priority": "high",
      "action": "Add a reproducible setup check.",
      "expectedImpact": "Reduces setup hidden trust and supports THC-3 or higher review.",
      "verification": "A new contributor can run the command from a clean checkout."
    }
  ]
}
```

## slices/uncertainty.json

Example:

```json
{
  "confidence": "medium",
  "uncertaintyNotes": [
    {
      "note": "CI logs were unavailable.",
      "effect": "Hardening score may be incomplete."
    }
  ],
  "unavailableFields": [
    {
      "field": "provenance.model",
      "status": "unavailable",
      "reason": "Generated manually."
    }
  ]
}
```

## THC-BOT.history.json

The history file should aggregate runs without replacing the run folders.

Example:

```json
{
  "artifactKind": "THC-BOT History",
  "contractVersion": "0.1.0",
  "runs": [
    {
      "runId": "2026-05-05_example_0.1.0_abc1234",
      "generatedAt": "2026-05-05T16:30:00Z",
      "reviewedRevision": "abc1234",
      "contractVersion": "0.1.0",
      "recommendedLevel": "THC-3 Inspectable",
      "totalScore": 72,
      "confidence": "medium",
      "path": "runs/2026-05-05_example_0.1.0_abc1234/"
    }
  ]
}
```

The history file is an index. The run folder remains the evidence source.
