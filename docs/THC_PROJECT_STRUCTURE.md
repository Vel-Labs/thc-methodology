# THC Project Structure

This document describes the recommended standalone repository structure for THC Methodology.

## Recommended Repository Name

```txt
Vel-Labs/thc-methodology
```

Avoid `thc-framework` for now.

"Framework" implies a heavier, more formal system. "Methodology" is accurate and leaves room to grow.

## Recommended Layout

```txt
thc-methodology/
  README.md
  AGENTS.md
  CONTRIBUTING.md
  CHANGELOG.md
  LICENSE
  LICENSE_GUIDE.md
  NOTICE
  MANIFEST.md

  docs/
    THC_METHODOLOGY.md
    THC_DOCTRINE.md
    THC_AUTHORING_GUIDE.md
    THC_EVALUATION_LENS.md
    THC_LEVELS.md
    THC_SCORECARD.md
    THC_CASE_STUDY_DISCIPLINE.md
    THC_BADGES.md
    THC_PROJECT_STRUCTURE.md
    THC_PUBLICATION_GUIDE.md
    THC_FEEDBACK_AND_PRESSURE_TESTING.md
    THC_LOCAL_AND_PUBLIC_REVIEW.md
    THC_LEADERBOARD.md

  templates/
    thc-audit-report.md
    thc-project-self-check.md
    thc-evaluation-submission.md
    thc-case-study.md
    repo-truth-readme.md

  examples/
    hidden-trust-production-example.md
    open-source-project-review-example.md
    project-scaffold-adoption-note.md

  evaluations/
    README.md
    submitted/
    reviewed/

  skills/
    thc-audit/
      SKILL.md
    thc-authoring/
      SKILL.md
    thc-repo-review/
      SKILL.md
    thc-level-review/
      SKILL.md
    THC_Check/
      SKILL.md
```

## Recommended Adopting-Project Artifact Path

Projects that run `THC_Check` should keep local THC review artifacts in:

```txt
docs/thc/
  README.md
  LOCAL_CHECK.md
  THC-BOT.md
  THC-BOT.history.json
  runs/
```

This path is meant for public-review discovery.

`LOCAL_CHECK.md` is the local executive summary and readiness checklist.

`THC-BOT.md`, `THC-BOT.history.json`, and `runs/` are the structured THC
Benchmark Operating Test ledger and run artifacts.

`README.md` should warn maintainers not to hand-edit generated reports to
improve a score; rerun the check after project changes instead.

## Layer Responsibilities

| Layer | Responsibility |
|---|---|
| Methodology | Defines THC. |
| Doctrine | Gives the shortest comparison lens. |
| Authoring | Teaches people and agents how to write THC-native artifacts. |
| Evaluation | Helps reviewers find hidden trust. |
| Levels | Communicates maturity bands. |
| Scorecard | Gives a rubric for reviews. |
| Templates | Makes reviews repeatable. |
| Skills | Makes the method usable by agents. |
| Examples | Demonstrates the lens without pretending success is guaranteed. |
| Evaluations | Stores project submissions and reviews. |

## Relationship To Project Scaffold

Recommended relationship:

```txt
Vel-Labs/thc-methodology
  canonical methodology

Vel-Labs/project-scaffold
  reference implementation / applied scaffold
```

`project-scaffold` should not be the canonical source of THC.

It should be an implementation of THC.

## Implementation Repo Pointer

In implementation repos, use a short pointer like:

```md
# THC Methodology

This project follows THC Methodology.

Canonical source:
https://github.com/Vel-Labs/thc-methodology

Local implementation notes live in:
docs/repo-truth/
```

## Why Standalone

A standalone repo changes the meaning from:

```txt
Here is how this repo thinks.
```

to:

```txt
Here is a methodology you can apply to any repo.
```

That shift matters.

It allows:

- independent adoption
- project-agnostic evaluations
- reusable templates
- agent skills
- public submissions
- scorecard iteration
- future tooling
