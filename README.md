# THC Methodology

**Status:** Public Draft  
**Version:** 0.2.0  
**Author:** [@velcrafting](https://github.com/velcrafting) / Vel Labs  
**Maintainer:** Vel Labs / [@Velcrafting on X](https://x.com/Velcrafting)  
**License:** MIT. Credit appreciated where practical.

THC Methodology is a project-agnostic reliability methodology for reducing hidden trust in software systems, agentic workflows, and open source projects.

THC stands for:

- **Truth**
- **Hardening**
- **Clarity**

The loop:

```txt
Truth -> Hardening -> Clarity -> better Truth
```

## Core Claim

Most systems do not only fail because the code is bad.

They fail because trust is hidden in undocumented assumptions, fragile conventions, unclear source-of-truth boundaries, unverifiable claims, and operator folklore.

THC exists to make that trust inspectable.

## Core Failure Modes

| Imbalance | Failure Mode | What It Looks Like |
|---|---|---|
| Truth without Hardening | Naive | The system documents what it believes, but does not prove it survives reality. |
| Hardening without Clarity | Opaque | The system may be robust, but only insiders can understand or operate it. |
| Clarity without Truth | Theater | The system looks polished, but its claims are not grounded in evidence. |

## Use Cases

THC can be used for:

- open source project structure
- agentic coding governance
- repo truth documentation
- contributor onboarding
- architecture review
- AI-generated code review
- project audit spot checks
- documentation authoring
- reliability review
- hidden-trust discovery

## Start Here

| File | Purpose |
|---|---|
| [`docs/THC_METHODOLOGY.md`](docs/THC_METHODOLOGY.md) | Canonical methodology. |
| [`docs/THC_DOCTRINE.md`](docs/THC_DOCTRINE.md) | Short doctrine for comparing a project against THC. |
| [`docs/THC_AUTHORING_GUIDE.md`](docs/THC_AUTHORING_GUIDE.md) | How to write docs, specs, prompts, and repo files that reduce hidden trust. |
| [`docs/THC_EVALUATION_LENS.md`](docs/THC_EVALUATION_LENS.md) | Project-agnostic audit lens. |
| [`docs/THC_LEVELS.md`](docs/THC_LEVELS.md) | Qualitative THC level breakdown. |
| [`docs/THC_SCORECARD.md`](docs/THC_SCORECARD.md) | Scoring rubric for self-assessment and peer review. |
| [`docs/THC_BOT.md`](docs/THC_BOT.md) | Structured local benchmark artifact package. |
| [`docs/THC_BOT_CONTRACT.md`](docs/THC_BOT_CONTRACT.md) | Human-readable THC-BOT artifact contract. |
| [`templates/thc-audit-report.md`](templates/thc-audit-report.md) | Lightweight audit report template. |
| [`templates/thc-bot-report.md`](templates/thc-bot-report.md) | THC-BOT run report template. |
| [`templates/thc-evaluation-submission.md`](templates/thc-evaluation-submission.md) | Submission template for project evaluations. |
| [`docs/THC_LOCAL_AND_PUBLIC_REVIEW.md`](docs/THC_LOCAL_AND_PUBLIC_REVIEW.md) | Local checks, public scores, and LLM scoring drift. |
| [`docs/THC_LEADERBOARD.md`](docs/THC_LEADERBOARD.md) | Leaderboard concept and anti-abuse rules. |

## THC Level

THC Level is a qualitative maturity band that estimates how much hidden trust has been surfaced, hardened, and clarified in a project.

It is not a certification.  
It is not a guarantee of quality.  
It is not a security audit.

It is a structured review artifact.

| Level | Name | Meaning |
|---:|---|---|
| THC-0 | Unverified | Hidden trust is dominant. |
| THC-1 | Documented | Important truths are partially surfaced. |
| THC-2 | Hardened | Key assumptions are tested or guarded. |
| THC-3 | Inspectable | Outsiders can reason about the project from artifacts. |
| THC-4 | Reproducible | A new contributor or operator can validate the project without private context. |
| THC-5 | High-THC | Hidden trust is aggressively minimized and audit history is visible. |

## Submitting Evaluations

Projects can submit THC evaluations under `evaluations/submitted/`.

A valid submission should include:

- project name and repository
- requested THC Level
- evidence for Truth, Hardening, and Clarity
- hidden trust that still remains
- reviewer notes or self-assessment notes

Use [`templates/thc-evaluation-submission.md`](templates/thc-evaluation-submission.md).

## Local THC Checks

Projects can run a local THC check before requesting a public review.

Use [`skills/THC_Check/SKILL.md`](skills/THC_Check/SKILL.md) as the local audit
skill. A local check can help gather evidence and identify level caps, but it is
not the same as an independent public score.

The recommended structured local benchmark path is THC-BOT, the THC Benchmark
Operating Test. THC-BOT stores one run per reviewed revision and exposes the
evidence, caps, hidden-trust findings, next actions, uncertainty, and provenance
behind the local recommendation.

`docs/thc/LOCAL_CHECK.md` should summarize the latest local posture and point to
the latest THC-BOT run. The THC-BOT run is the structured scoring package.

THC-BOT works for public, private, internal, and closed-source projects as a
local benchmark. Public leaderboard validation is the stronger external trust
path for public repositories because cited evidence still needs independent
verification.

Use [`skills/THC_BOT_Visualizer/SKILL.md`](skills/THC_BOT_Visualizer/SKILL.md)
when an operator wants a local HTML readout of existing THC-BOT artifacts. The
HTML view is optional and should not replace the contract, provenance, slices,
or public verification.

See [`docs/THC_LOCAL_AND_PUBLIC_REVIEW.md`](docs/THC_LOCAL_AND_PUBLIC_REVIEW.md).
See [`docs/THC_BOT.md`](docs/THC_BOT.md).

## Public Leaderboard

A public leaderboard should rank evidence-backed review artifacts, not
unverified claims.

This repository defines the rubric, labels, templates, and local skills. A
website or app that accepts repository URLs, generates reports, and publishes
leaderboard entries should live in a separate product repository.

See [`docs/THC_LEADERBOARD.md`](docs/THC_LEADERBOARD.md).

## License and Attribution

THC Methodology is licensed under the MIT License.

Credit is appreciated where practical.

Suggested credit: Uses THC Methodology, created by
[@velcrafting](https://github.com/velcrafting) / Vel Labs.

Credit should not imply endorsement, certification, approval, or review unless
that review actually happened.

## Repository Relationship

Recommended structure:

```txt
Vel-Labs/thc-methodology
  canonical methodology

Vel-Labs/project-scaffold
  reference implementation / applied scaffold
```

`project-scaffold` can follow THC. `thc-methodology` should define THC.

## Non-Goals

THC is not:

- a sprint framework
- a replacement for Agile or Scrum
- a certification scheme
- a security audit by default
- a badge factory
- a substitute for engineering judgment

THC is a lens for finding and reducing hidden trust.
