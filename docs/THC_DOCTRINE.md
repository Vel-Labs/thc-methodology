# THC Doctrine

The doctrine is the shortest useful expression of THC Methodology.

It exists so a project can compare itself against THC without reading the full methodology first.

## Doctrine

### 1. Anchor To Truth

Prefer observable evidence, explicit contracts, and real system behavior over assumptions, folklore, or implied intent.

A claim is weak until the source of truth is visible.

### 2. Harden What Is True

Treat validation, audit, adversarial review, deterministic workflows, and fail-closed boundaries as core build work.

Hardening is not cleanup.

Hardening is how truth survives drift, misuse, time, and contact with reality.

### 3. Produce Clarity From Hardening

A hardened system should become easier to inspect, explain, and operate.

If hardening makes the system more opaque, the hardening is incomplete.

### 4. Remove Hidden Trust

Do not require operators, contributors, users, or agents to rely on undocumented state, invisible reasoning, private maintainer memory, or personality-driven system knowledge.

### 5. Keep The Loop Alive

Clarity must improve future truth capture.

A system that becomes clearer should also become easier to verify, challenge, and extend safely.

### 6. Reliability Before Rhetoric

The methodology is proven by reproducible outcomes, not process language.

If a THC artifact sounds good but does not reduce hidden trust, it is theater.

## Failure Modes

| Imbalance | Failure Mode | Diagnosis |
|---|---|---|
| Truth without Hardening | Naive | Claims are documented but not pressure-tested. |
| Hardening without Clarity | Opaque | The system may be robust, but others cannot inspect why. |
| Clarity without Truth | Theater | The docs look good, but the claims are not grounded. |

## Project Comparison Checklist

Use this when comparing a project structure to THC.

### Truth

- Does the project identify durable sources of truth?
- Are runtime assumptions explicit?
- Are important claims backed by artifacts?
- Are known unknowns documented?
- Are architectural boundaries visible?

### Hardening

- Are claims validated by tests, checks, review, or deterministic workflows?
- Does the project fail closed where failure would be dangerous?
- Are dependency, configuration, and environment assumptions checked?
- Are drift and compatibility risks addressed?
- Can maintainers detect when documentation stops matching behavior?

### Clarity

- Can a new contributor set up the project without private context?
- Can an operator recover from common failures without asking a maintainer?
- Are agent instructions explicit and current?
- Are examples tied to real workflows?
- Is the project easier to inspect after each hardening pass?

## Doctrine-Level Warning Signs

A project is likely low-THC if it depends on phrases like:

- "Everyone knows..."
- "Ask the maintainer..."
- "This is obvious once you understand the system..."
- "The docs are outdated, but..."
- "The test is flaky, but safe to ignore..."
- "Run the usual script..."
- "The agent should infer..."
- "We will clean that up later..."

These are not always fatal. They are signals that trust is hidden.
