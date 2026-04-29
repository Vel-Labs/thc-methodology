# Evaluations

This directory stores THC project evaluations.

## Directories

```txt
evaluations/
  submitted/
    project-name.md

  reviewed/
    project-name.md
```

## Submission Types

| Type | Meaning |
|---|---|
| Local THC Check | A maintainer or agent generated a local preparation report. Not independently verified. |
| Self-Assessed | Maintainers scored their own project. |
| Automated Public Review | A public grader independently inspected the repository and generated a report. |
| Peer Reviewed | Someone outside the project reviewed the evidence. |
| Maintainer Reviewed | Project maintainers reviewed or accepted the findings. |
| Vel Labs Reviewed | Vel Labs reviewed the evidence. Only use if true. |

## Submission Rules

A submission must include:

- project name
- repository link
- requested THC Level
- Truth evidence
- Hardening evidence
- Clarity evidence
- hidden trust still present
- reviewer notes

Use:

```txt
templates/thc-evaluation-submission.md
```

## Review Rule

A THC Level claim should link to its evaluation.

A badge without evidence creates hidden trust.

Local checks may help reviewers find evidence faster, but public scores should
verify the cited files independently.
