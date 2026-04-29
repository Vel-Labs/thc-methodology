# THC Badges

Badges can make THC Level visible in GitHub culture.

Use them carefully.

A badge should communicate a review posture, not imply certification.

## Recommended Badge Language

Use:

```txt
THC-3 Inspectable · Self-Assessed
THC-4 Reproducible · Peer Reviewed
THC-2 Hardened · Maintainer Reviewed
THC-2 Hardened · Local THC Check
THC-3 Inspectable · Automated Public Review
```

Avoid:

```txt
THC Certified
Officially Approved
Guaranteed Reliable
Security Verified
Production Ready
```

## Badge Examples

### THC-0 Unverified

```md
![THC Level](https://img.shields.io/badge/THC--0-Unverified-lightgrey)
```

### THC-1 Documented

```md
![THC Level](https://img.shields.io/badge/THC--1-Documented-informational)
```

### THC-2 Hardened

```md
![THC Level](https://img.shields.io/badge/THC--2-Hardened-blue)
```

### THC-3 Inspectable

```md
![THC Level](https://img.shields.io/badge/THC--3-Inspectable-blueviolet)
```

### THC-4 Reproducible

```md
![THC Level](https://img.shields.io/badge/THC--4-Reproducible-success)
```

### THC-5 High-THC

```md
![THC Level](https://img.shields.io/badge/THC--5-High--THC-brightgreen)
```

## Review Label Badges

### Self-Assessed

```md
![THC Review](https://img.shields.io/badge/Review-Self--Assessed-lightgrey)
```

### Peer Reviewed

```md
![THC Review](https://img.shields.io/badge/Review-Peer--Reviewed-blue)
```

### Maintainer Reviewed

```md
![THC Review](https://img.shields.io/badge/Review-Maintainer--Reviewed-blueviolet)
```

### Vel Labs Reviewed

Only use this if Vel Labs actually reviewed the project.

```md
![THC Review](https://img.shields.io/badge/Review-Vel_Labs_Reviewed-success)
```

### Local THC Check

Use this for a local preparation audit. It is not independently verified.

```md
![THC Review](https://img.shields.io/badge/Review-Local_THC_Check-lightgrey)
```

### Automated Public Review

Use this when a public grader independently inspected the repository and linked
to the generated report.

```md
![THC Review](https://img.shields.io/badge/Review-Automated_Public_Review-blue)
```

## Badge Rules

A project using a THC badge should link to its evaluation.

Good:

```md
[![THC Level](https://img.shields.io/badge/THC--3-Inspectable-blueviolet)](docs/thc-evaluation.md)
```

Weak:

```md
![THC Level](https://img.shields.io/badge/THC--3-Inspectable-blueviolet)
```

A visible claim without a visible evaluation creates hidden trust.

Local checks should link to the local report. Public scores should link to the
public report and include the reviewed commit.
