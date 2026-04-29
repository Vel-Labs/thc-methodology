# Example: Open Source Project Review

This is a fictional example demonstrating a THC spot check.

## Project

Name: ExampleQueue  
Type: Lightweight background job processor  
Review Type: Spot Check

## Summary

ExampleQueue has clear purpose and basic documentation, but its runtime assumptions are only partially hardened.

Recommended level:

```txt
THC-2 Hardened · Self-Assessed
```

## Evidence

| Category | Evidence | Score | Notes |
|---|---|---:|---|
| Truth | README, architecture sketch, env var list | 21/30 | Good purpose and boundary docs, weak known-unknowns section. |
| Hardening | Unit tests, startup config check, CI | 22/35 | Queue ordering and retry failure modes not tested. |
| Clarity | Setup guide, examples | 16/25 | Troubleshooting path is thin. |
| Audit History | Changelog only | 3/10 | No hidden-trust findings tracked. |

Total:

```txt
62/100
```

Numeric score suggests THC-3, but review is capped at THC-2 because retry behavior and operator recovery require maintainer knowledge.

## Hidden Trust Findings

| Finding | Severity | Evidence | Recommendation |
|---|---|---|---|
| Retry behavior is unclear | High | README names retries but does not define backoff, idempotency, or failure handling. | Document retry contract and add tests. |
| Queue startup ordering is implied | Medium | Worker docs assume API service is already initialized. | Add startup dependency checks. |
| Troubleshooting depends on maintainers | Medium | No recovery guide for stuck jobs. | Add operator runbook. |

## Final Assessment

ExampleQueue has meaningful hardening, but it is not yet inspectable enough for THC-3.

The main issue is not missing docs. The main issue is that the docs do not expose enough operational truth for a new operator to recover safely.
