# Contributing

THC Methodology welcomes practical refinements, counterexamples, project evaluations, and examples that reduce hidden trust.

## Good Contributions

Good contributions usually do one of these:

- make a hidden assumption visible
- improve the audit process
- clarify a level boundary
- add a concrete example
- identify a failure mode
- pressure-test the framework with a counterexample
- improve templates so reviews become more reproducible

## Weak Contributions

Weak contributions usually do one of these:

- add new terminology without operational value
- make the methodology sound more impressive without making it more useful
- increase scoring precision without better evidence
- add a process ritual without explaining what hidden trust it removes
- overfit the methodology to one project

## Before Opening A PR

Ask:

1. What hidden trust does this change reduce?
2. What file owns the source of truth for this concept?
3. Does this require an update to the scorecard or templates?
4. Does this create a claim that needs evidence?
5. Does this make the project easier for a stranger to inspect?

## Evaluation Submissions

Project evaluations belong in:

```txt
evaluations/submitted/<project-name>.md
```

Use:

```txt
templates/thc-evaluation-submission.md
```

A submission may be:

- self-assessed
- peer-reviewed
- maintainer-reviewed
- Vel Labs reviewed

Do not claim certification unless the review process has been explicitly defined.
