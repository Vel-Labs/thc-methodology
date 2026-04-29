# Example: Hidden Trust In A Production System

This is a generic example, not a review of a specific project.

## Scenario

An open source service appears mature.

It has:

- tests
- documentation
- CI
- a Dockerfile
- active maintainers

From the outside, it looks reliable.

## Hidden Trust Found

A new operator discovers:

- a required environment variable is missing from `.env.example`
- one migration must be run manually before deploy
- a background worker silently fails unless queues are started in a specific order
- the README describes the happy path, but not recovery behavior
- maintainers know which errors are safe to ignore, but the system does not encode that knowledge anywhere

The code is public, but the trust is hidden.

## THC Review

| Layer | Finding | Intervention |
|---|---|---|
| Truth | Runtime assumptions are not fully visible. | Document required variables, worker dependencies, and deployment sequence. |
| Hardening | The system can start in invalid states. | Add startup checks, migration guards, and CI verification. |
| Clarity | Operators need private context. | Add runbook, troubleshooting guide, and explicit error messages. |

## Recommended Level

Initial estimate:

```txt
THC-1 Documented
```

Potential after fixes:

```txt
THC-3 Inspectable
```

Potential after reproducible setup, validation, and recovery testing:

```txt
THC-4 Reproducible
```

## Practical Takeaway

A project can look mature while still depending on hidden trust.

THC does not ask whether the project looks professional.

It asks how much private knowledge is required to operate it safely.
