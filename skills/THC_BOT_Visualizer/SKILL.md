---
name: "THC_BOT_Visualizer"
description: "Use when rendering existing THC-BOT artifacts into a local HTML readout for operator review."
---

# THC-BOT Visualizer

Use this skill when a user wants a visual readout of existing THC-BOT artifacts.

The visualizer is a rendering layer. It does not score, certify, validate, or
replace the THC-BOT contract.

## Inputs

Read:

```txt
docs/thc/THC-BOT.history.json
docs/thc/runs/<run-id>/THC-BOT.contract.json
docs/thc/runs/<run-id>/THC-BOT.provenance.json
docs/thc/runs/<run-id>/slices/*.json
```

If `THC-BOT.history.json` is missing, build a run list from
`docs/thc/runs/*/THC-BOT.contract.json` and record the uncertainty in the
generated HTML.

## Output

Write:

```txt
docs/thc/THC-BOT.html
```

Use `templates/thc-bot-visualizer.html` as the source template.

Prefer the renderer script:

```txt
skills/THC_BOT_Visualizer/scripts/render-thc-bot.js
```

Run it from the methodology repository or call it with the target repository
root:

```txt
node skills/THC_BOT_Visualizer/scripts/render-thc-bot.js /path/to/project
```

Embed the collected run data into the template as JSON inside:

```html
<script id="thc-bot-data" type="application/json">
```

Do not make the HTML depend on a local web server, package manager, CDN, or
external JavaScript library.

## Required Data Shape

Embed this shape:

```json
{
  "generatedAt": "2026-05-05T16:30:00Z",
  "source": {
    "historyPath": "docs/thc/THC-BOT.history.json",
    "runRoot": "docs/thc/runs"
  },
  "runs": [
    {
      "runId": "2026-05-05_project_0.1.0_abc1234",
      "generatedAt": "2026-05-05T16:30:00Z",
      "reviewedRevision": "abc1234",
      "contractVersion": "0.1.0",
      "rubricVersion": "THC Methodology 0.2.0",
      "recommendedLevel": "THC-3 Inspectable",
      "totalScore": 72,
      "confidence": "medium",
      "validationState": "Complete",
      "publicReadiness": "needs public verification",
      "paths": {
        "report": "runs/2026-05-05_project_0.1.0_abc1234/THC-BOT.md",
        "contract": "runs/2026-05-05_project_0.1.0_abc1234/THC-BOT.contract.json",
        "provenance": "runs/2026-05-05_project_0.1.0_abc1234/THC-BOT.provenance.json"
      },
      "slices": {
        "overview": "complete",
        "evidence": "partial",
        "localArtifacts": "complete",
        "capsApplied": "complete",
        "hiddenTrust": "complete",
        "nextActions": "complete",
        "uncertainty": "partial"
      },
      "capsApplied": ["No public evidence for requested level"],
      "hiddenTrustCounts": {
        "low": 0,
        "medium": 2,
        "high": 1,
        "critical": 0
      },
      "nextActionCounts": {
        "high": 2,
        "medium": 1,
        "low": 0
      },
      "uncertaintyNotes": [
        "Public CI logs were unavailable."
      ]
    }
  ],
  "uncertainty": []
}
```

If a field cannot be read, include the field with an explicit unknown or
unavailable value and add an uncertainty note.

## Required Sections

The HTML readout should show:

- latest posture
- score history
- level history
- slice status matrix
- recurring caps
- hidden-trust trend
- next-action counts
- public readiness
- latest run links
- source and uncertainty notes

## Rules

- Treat JSON and Markdown THC-BOT artifacts as canonical.
- Do not modify existing run folders.
- Do not create or change scores while rendering.
- Do not imply certification, endorsement, leaderboard acceptance, or public
  verification.
- Preserve private and internal utility: the HTML must work from `file://`.
- If data is stale, missing, contradictory, or partial, render that state
  visibly instead of hiding it.
- If multiple runs exist, sort by `generatedAt` ascending for charts and show
  the latest run as the current posture.
