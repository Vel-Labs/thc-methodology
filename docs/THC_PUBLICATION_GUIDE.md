# THC Publication Guide

This guide describes how to publish THC Methodology as a standalone Vel Labs project.

## Recommended Repository

```txt
Vel-Labs/thc-methodology
```

## Recommended Status

```txt
Version: 0.2.0
Status: Public Draft
Author: Steven Pajewski / @velcrafting
Maintainer: Vel Labs
```

Do not call this `1.0.0` yet.

The methodology is strong, but the evaluation layer still needs pressure testing against real projects, failed projects, and counterexamples.

## Positioning

Use this sentence:

```txt
THC Methodology is a project-agnostic reliability methodology for reducing hidden trust in software systems, agentic workflows, and open source projects.
```

Use this shorter version when space is tight:

```txt
THC makes hidden trust inspectable.
```

## GitHub Org README Copy

```md
Vel Labs builds practical methodology, scaffolding, and agentic engineering patterns for systems that reduce hidden trust.

Current focus:

- THC Methodology: Truth, Hardening, Clarity
- agentic coding governance
- open source project reliability
- inspectable system design
```

## Launch Post Draft

```txt
I’ve been formalizing a methodology I use for agentic coding and open source project structure.

The core idea:

Most systems do not just fail from bad code.
They fail because trust is hidden.

Hidden assumptions.
Hidden runtime behavior.
Hidden maintainer knowledge.
Hidden deployment rules.
Hidden "everyone just knows" context.

THC Methodology is my attempt to make that trust inspectable:

Truth -> Hardening -> Clarity -> better Truth

Truth without Hardening becomes naive.
Hardening without Clarity becomes opaque.
Clarity without Truth becomes theater.

The goal is not more process.
The goal is fewer systems that require private knowledge to operate safely.
```

## Follow-Up Post Draft

```txt
A useful signal from early feedback:

The Doctrine section seems to be the part people use immediately.

That tracks.

A methodology is not useful because it sounds complete.
It is useful when someone can compare their own project against it and find hidden trust faster.
```

## Release Checklist

Before publishing:

- [ ] Choose a license.
- [ ] Confirm author and maintainer fields.
- [ ] Decide whether public evaluations are accepted immediately.
- [ ] Add initial `project-scaffold` adoption note.
- [ ] Add at least one example review.
- [ ] Add issue template for evaluation submissions.
- [ ] Add PR template.
- [ ] Tag release `v0.2.0`.
- [ ] Publish launch post.
- [ ] Invite one or two trusted people to self-assess their own projects.

## What Not To Do Yet

Do not build a CLI yet.

The scoring model needs real-world review data first.

Do not call levels certification.

Do not overbrand the cultural joke.

Do not claim THC guarantees success.

Do not claim THC replaces engineering judgment.
