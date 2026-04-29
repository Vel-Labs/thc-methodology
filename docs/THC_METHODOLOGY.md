# THC Methodology

**Status:** Public Draft  
**Version:** 0.2.0  
**Author:** @velcrafting / Vel Labs  
**Maintainer:** Vel Labs

## One-Sentence Thesis

THC Methodology is a reliability methodology for removing hidden trust from software systems, agentic workflows, and open source projects.

THC stands for:

- **Truth**
- **Hardening**
- **Clarity**

The loop is:

```txt
Truth -> Hardening -> Clarity -> better Truth
```

## TL;DR

Most software does not fail only because the code is bad.

It fails because critical trust is hidden in undocumented assumptions, fragile conventions, unclear ownership, unverifiable claims, runtime folklore, and private maintainer knowledge.

THC turns that hidden trust into visible truth, hardened validation, and inspectable clarity.

## The Core Failure Modes

THC exists because reliability breaks when one pillar is missing.

| Missing Balance | Failure Mode | What It Looks Like |
|---|---|---|
| Truth without Hardening | Naive | The system documents what it believes, but does not prove it survives reality. |
| Hardening without Clarity | Opaque | The system may be robust, but only insiders can understand or operate it. |
| Clarity without Truth | Theater | The system looks polished, but the claims are not grounded in evidence. |

The goal is not more process.

The goal is to make trust inspectable.

## What THC Is

THC Methodology is a reliability methodology.

It is not a scheduling framework, sprint ritual, ceremony replacement, or team management system.

It governs how truth moves through a system until that system becomes reliable, understandable, and worthy of trust.

A system can be open and still be opaque.  
A system can ship quickly and still depend on undocumented assumptions.  
A system can appear polished while asking operators and contributors to trust invisible reasoning, fragile conventions, or personality-driven knowledge.

Visible code alone is not enough if the surrounding assumptions, boundaries, and operating reality remain implicit.

THC exists to remove that gap.

## Hidden Trust

Hidden trust is any reliance on knowledge, behavior, assumptions, or judgment that is required for safe operation but is not visible, verifiable, or inspectable.

Hidden trust often appears as:

- undocumented deployment steps
- missing source-of-truth boundaries
- unclear ownership
- tribal debugging knowledge
- implicit maintainer judgment
- stale docs that no longer match behavior
- configuration that only works because someone remembers the right value
- tests that pass while critical runtime assumptions remain unchecked
- agent instructions scattered across prompts, docs, and code comments
- operational recovery paths that depend on private context

THC treats hidden trust as a reliability failure.

## The Three Pillars

### Truth

Truth is reality anchored in evidence.

Truth includes:

- actual system behavior
- explicit contracts
- provenance
- known failures
- constraints
- observable outputs
- source-of-truth locations
- known unknowns
- current assumptions

The question of the Truth phase is:

```txt
What can we prove right now?
```

### Hardening

Hardening is the process of pressure-testing truth until weak assumptions are exposed.

Hardening includes:

- validation
- audit
- adversarial review
- integrity checks
- compatibility checks
- deterministic workflows
- startup checks
- failure-mode tests
- fail-closed boundaries
- reproducibility checks

The question of the Hardening phase is:

```txt
Does this truth survive contact with reality?
```

### Clarity

Clarity is the act of making hardened truth legible.

Clarity includes:

- concise documentation
- explicit contracts
- understandable operator surfaces
- deterministic artifacts
- clear explanations of behavior
- reproducible state
- contributor guidance
- recovery paths
- visible ownership boundaries

The question of the Clarity phase is:

```txt
Can another person inspect this without relying on hidden trust?
```

## Doctrine

The full doctrine lives in [`THC_DOCTRINE.md`](THC_DOCTRINE.md).

The short form:

1. Anchor to truth.
2. Harden what is true.
3. Produce clarity from hardening.
4. Remove hidden trust.
5. Keep the loop alive.
6. Reliability before rhetoric.

## How The Loop Works

THC is continuous, not linear.

1. **Truth:** Capture what is actually true about the system.
2. **Hardening:** Stress that truth until contradictions, drift, and weak assumptions are exposed.
3. **Clarity:** Turn hardened truth into contracts, docs, outputs, and explanations that others can inspect quickly.
4. **Feedback:** Use the improved clarity to sharpen the next round of truth capture.

Each pass through the loop should reduce hidden trust.

## Is This Just Good Engineering With New Labels?

Partly, yes.

THC intentionally overlaps with good engineering practices.

TDD, SRE, DDD, threat modeling, architecture decision records, runbooks, postmortems, and CI all contain pieces of the same instinct: make systems more reliable by making claims testable, boundaries explicit, and failures visible.

The difference is that THC names the shared failure underneath those practices:

```txt
hidden trust
```

A project can have tests and still hide trust in undocumented deployment steps.  
A project can have runbooks and still hide trust in tribal operator knowledge.  
A project can have clean architecture and still hide trust in unclear source-of-truth boundaries.  
A project can be open source and still hide trust in maintainer intuition.  
A project can use agents and still hide trust in stale prompts, missing constraints, and unverifiable generated code.

THC is not trying to replace established practices.

It gives them a common reliability lens:

- What is true?
- How has it been hardened?
- Can someone else inspect it without trusting us?

## THC Compared To Agile And Scrum

THC is complementary to Agile and Scrum, not a replacement.

- Agile helps teams adapt.
- Scrum helps teams organize work cadence.
- THC helps teams determine whether the system is grounded, hardened, and legible enough to deserve trust.

A simple distinction:

```txt
Agile and Scrum describe how work moves.
THC describes how truth moves through a system until it becomes reliable and clear.
```

## Why THC Matters In Open Source

Open source does not automatically mean understandable.

Public codebases often still rely on:

- undocumented conventions
- unclear source-of-truth boundaries
- weakly verified claims
- fragile runtime assumptions
- contributor folklore
- maintainer intuition
- scattered instructions
- unclear recovery behavior

THC treats those as reliability failures, not communication accidents.

Its value in open source is that it pushes projects toward:

- explicit truth boundaries
- verifiable claims
- reproducible artifacts
- legible reasoning
- lower hidden-trust requirements for new contributors and operators

The first output is system reliability.

The visible consequence is user and operator trust.

Better collaboration quality follows downstream.

## Why THC Matters In Agentic Coding

Agentic coding intensifies hidden trust.

Agents can move quickly, but they also amplify unclear instructions, stale assumptions, missing constraints, and undocumented project conventions.

A repo that is easy for a human maintainer to understand privately may still be hostile to agents because the actual source of truth is distributed across:

- previous conversations
- implicit maintainer preferences
- TODO comments
- outdated README files
- incomplete tests
- invisible architectural intent
- assumptions about how commands should be run
- unwritten quality bars

THC makes the repository more agent-legible by forcing instructions, truth boundaries, validation steps, and review expectations into explicit artifacts.

For agentic coding, THC is not just documentation.

It is governance for generated work.

## Example: Hidden Trust In A Production System

Imagine an open source service that appears mature:

- it has tests
- it has documentation
- it has CI
- it has a Dockerfile
- it has active maintainers

From the outside, it looks reliable.

A new operator then discovers that production behavior depends on undocumented assumptions:

- a required environment variable is missing from `.env.example`
- one migration must be run manually before deploy
- a background worker silently fails unless queues are started in a specific order
- the README describes the happy path, but not recovery behavior
- maintainers know which errors are safe to ignore, but the system does not encode that knowledge anywhere

The code is public, but the trust is hidden.

A THC pass would surface that trust:

| THC Layer | Intervention |
|---|---|
| Truth | Document actual runtime assumptions, required variables, worker dependencies, and deployment sequence. |
| Hardening | Add validation, startup checks, CI verification, migration guards, and fail-closed behavior. |
| Clarity | Update README, runbooks, operator checklist, and error messages so a new contributor can understand the system without private context. |

The result is not just better documentation.

The system itself becomes safer to inspect, operate, and extend.

## Initial Evaluation Lens

Projects can be evaluated through a THC lens with questions like:

- Where is the durable source of truth?
- Which claims are directly verifiable?
- How is truth hardened against drift, misuse, and contradiction?
- Which boundaries fail closed instead of relying on best effort?
- How quickly can a new operator explain system behavior from artifacts alone?
- How much hidden trust is still required to operate or extend the system safely?

These questions are intentionally qualitative in the first pass.

They are meant to expose posture before they are turned into a score.

## Case Study Discipline

THC should not be validated only by studying successful projects.

That creates survivorship bias.

A serious evaluation lens should include:

- high-THC projects that still failed
- low-THC projects that succeeded
- mature projects with strong code but weak operator clarity
- popular projects that depend heavily on maintainer folklore
- small projects that are unusually reliable because their trust boundaries are explicit

The purpose of a THC case study is not to prove that THC guarantees success.

It does not.

The purpose is to evaluate how much hidden trust a project requires from users, contributors, operators, maintainers, and agents.

## Formal Definition

THC Methodology is a continuous engineering methodology for building systems that do not require hidden trust.

Its primary output is system reliability.

Its visible consequence is operator and user trust.

Its downstream effect is improved collaboration quality in open systems.
