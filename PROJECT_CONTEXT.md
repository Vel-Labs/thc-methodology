# Project Context — THC Methodology

Reviewed: 2026-10-12. This is a source-backed interpretation, not a live status or new acceptance record.

Project identity: `github:vel-labs/thc-methodology`

Topics: `truth`, `hardening`, `clarity`, `reliability-methodology`, `evaluation`, `public-review`, `publication`

## At a glance

| Question | Answer | Evidence |
| --- | --- | --- |
| Why does this project exist? | Define a project-agnostic reliability methodology that makes hidden trust inspectable across software systems, agentic workflows, and open source projects. | [README.md](README.md) |
| What maturity does the repository claim? | The repository identifies itself as Public Draft, version 0.2.0. Its changelog says the evaluation model needs pressure testing before a 1.0 claim; these are documented source statements, not external acceptance. | [README.md](README.md), [CHANGELOG.md](CHANGELOG.md) |
| How does the project distinguish review from certification? | THC levels and public scores are review artifacts, not certification or guarantees. The review guidance reserves the Vel Labs Reviewed label for cases where Vel Labs actually performed the review. | [README.md](README.md), [THC_LOCAL_AND_PUBLIC_REVIEW.md](docs/THC_LOCAL_AND_PUBLIC_REVIEW.md) |
| How are methodology source, product implementation, and validation distinguished? | This repository owns the rubric, labels, templates, and local skills; its README assigns repository intake, scanning, report generation, and leaderboard storage to a separate product repository. The documented evaluation model remains a draft requiring pressure testing, so these sources do not establish validated effectiveness. | [README.md](README.md), [CHANGELOG.md](CHANGELOG.md) |
| What acceptance scope or owner is recorded? | The package README identifies a Public Draft, and the evaluation README gives submission rules; the cited package docs establish no project-specific score, THC-BOT run, formal methodology acceptance, or acceptance owner. This context adds no acceptance. | [README.md](README.md), [README.md](evaluations/README.md) |
| What relationship to Project Scaffold is documented? | The README explicitly describes Project Scaffold as the reference implementation / applied scaffold, and says it can follow THC while this repository defines THC. This supports a related-project link, not a claim of current implementation conformance. | [README.md](README.md), [README.md](README.md) |
| How fresh is this evidence, and what does it not establish? | This context review is dated 2026-10-12 and is limited to repository Markdown. It does not establish operational effectiveness, adoption, publication state, a current public score, or independent acceptance. | [THC_LOCAL_AND_PUBLIC_REVIEW.md](docs/THC_LOCAL_AND_PUBLIC_REVIEW.md), [README.md](README.md) |
| What is the smallest follow-up recommended by the repository docs? | Pressure-test the evaluation model against real projects, failed projects, and counterexamples before making a 1.0 claim. This is a documentation-based recommendation, not an assigned or accepted work item. | [THC_PUBLICATION_GUIDE.md](docs/THC_PUBLICATION_GUIDE.md), [CHANGELOG.md](CHANGELOG.md) |

## Related projects

| Project | Relationship | Connection | Review when | Evidence |
| --- | --- | --- | --- | --- |
| `github:vel-labs/project-scaffold` | reference-implementation | The methodology README identifies Project Scaffold as its reference implementation / applied scaffold and says the scaffold can follow the methodology. | Review this connection if either repository changes its documented ownership or application boundary. | [README.md](README.md) |

Topics aid discovery; they do not establish dependencies or classify AI sessions. Relationships identify review candidates only. No automatic downstream updates or runtime migration.

## Agent-readable source

This block owns the tables above. After editing it, regenerate this page with `python3 scripts/project_context.py /absolute/PROJECT_CONTEXT.md` from this repo. Evidence paths are relative to this repository; keep other projects referenced by their stable identities. Validation checks table agreement and source pins, not acceptance or live state. Do not publish private context merely because a repo has publication intent.

```json
{
  "schema": "project-context-v1",
  "identity": "github:vel-labs/thc-methodology",
  "name": "THC Methodology",
  "reviewed_on": "2026-10-12",
  "path_basis": "repository",
  "topics": [
    "truth",
    "hardening",
    "clarity",
    "reliability-methodology",
    "evaluation",
    "public-review",
    "publication"
  ],
  "summary": [
    {
      "question": "Why does this project exist?",
      "answer": "Define a project-agnostic reliability methodology that makes hidden trust inspectable across software systems, agentic workflows, and open source projects.",
      "evidence": [
        {
          "path": "README.md",
          "sha256": "f179245c1b6465d3fad03cfcdba8c9c2b244c282bedb0129a656fc69b9f303aa",
          "excerpt": "THC Methodology is a project-agnostic reliability methodology for reducing hidden trust in software systems, agentic workflows, and open source projects."
        }
      ]
    },
    {
      "question": "What maturity does the repository claim?",
      "answer": "The repository identifies itself as Public Draft, version 0.2.0. Its changelog says the evaluation model needs pressure testing before a 1.0 claim; these are documented source statements, not external acceptance.",
      "evidence": [
        {
          "path": "README.md",
          "sha256": "f179245c1b6465d3fad03cfcdba8c9c2b244c282bedb0129a656fc69b9f303aa",
          "excerpt": "Status:** Public Draft **Version:** 0.2.0"
        },
        {
          "path": "CHANGELOG.md",
          "sha256": "2e8c6ebf4a45af21e7c867590e747655f20a6a9b6f463e1c4083762010cdaed6",
          "excerpt": "This version intentionally remains a public draft. The evaluation model needs pressure testing against real projects, counterexamples, and failed projects before any 1.0 claim."
        }
      ]
    },
    {
      "question": "How does the project distinguish review from certification?",
      "answer": "THC levels and public scores are review artifacts, not certification or guarantees. The review guidance reserves the Vel Labs Reviewed label for cases where Vel Labs actually performed the review.",
      "evidence": [
        {
          "path": "README.md",
          "sha256": "f179245c1b6465d3fad03cfcdba8c9c2b244c282bedb0129a656fc69b9f303aa",
          "excerpt": "It is not a certification. It is not a guarantee of quality. It is not a security audit."
        },
        {
          "path": "docs/THC_LOCAL_AND_PUBLIC_REVIEW.md",
          "sha256": "f362a5da01958625eba67a1d198f997381be3c1171a02fe60ec1135dbbfb19c9",
          "excerpt": "Vel Labs Reviewed | Vel Labs reviewed the evidence. | Only valid if Vel Labs actually performed the review."
        }
      ]
    },
    {
      "question": "How are methodology source, product implementation, and validation distinguished?",
      "answer": "This repository owns the rubric, labels, templates, and local skills; its README assigns repository intake, scanning, report generation, and leaderboard storage to a separate product repository. The documented evaluation model remains a draft requiring pressure testing, so these sources do not establish validated effectiveness.",
      "evidence": [
        {
          "path": "README.md",
          "sha256": "f179245c1b6465d3fad03cfcdba8c9c2b244c282bedb0129a656fc69b9f303aa",
          "excerpt": "This repository defines the rubric, labels, templates, and local skills. A website or app that accepts repository URLs, generates reports, and publishes leaderboard entries should live in a separate product repository."
        },
        {
          "path": "CHANGELOG.md",
          "sha256": "2e8c6ebf4a45af21e7c867590e747655f20a6a9b6f463e1c4083762010cdaed6",
          "excerpt": "The evaluation model needs pressure testing against real projects, counterexamples, and failed projects before any 1.0 claim."
        }
      ]
    },
    {
      "question": "What acceptance scope or owner is recorded?",
      "answer": "The package README identifies a Public Draft, and the evaluation README gives submission rules; the cited package docs establish no project-specific score, THC-BOT run, formal methodology acceptance, or acceptance owner. This context adds no acceptance.",
      "evidence": [
        {
          "path": "README.md",
          "sha256": "f179245c1b6465d3fad03cfcdba8c9c2b244c282bedb0129a656fc69b9f303aa",
          "excerpt": "Status:** Public Draft **Version:** 0.2.0"
        },
        {
          "path": "evaluations/README.md",
          "sha256": "291729a14b7b5fc85d37d11c06df0cb329849f382990c24536eb65011ebdf78d",
          "excerpt": "A THC Level claim should link to its evaluation."
        }
      ]
    },
    {
      "question": "What relationship to Project Scaffold is documented?",
      "answer": "The README explicitly describes Project Scaffold as the reference implementation / applied scaffold, and says it can follow THC while this repository defines THC. This supports a related-project link, not a claim of current implementation conformance.",
      "evidence": [
        {
          "path": "README.md",
          "sha256": "f179245c1b6465d3fad03cfcdba8c9c2b244c282bedb0129a656fc69b9f303aa",
          "excerpt": "Vel-Labs/project-scaffold reference implementation / applied scaffold"
        },
        {
          "path": "README.md",
          "sha256": "f179245c1b6465d3fad03cfcdba8c9c2b244c282bedb0129a656fc69b9f303aa",
          "excerpt": "`project-scaffold` can follow THC. `thc-methodology` should define THC."
        }
      ]
    },
    {
      "question": "How fresh is this evidence, and what does it not establish?",
      "answer": "This context review is dated 2026-10-12 and is limited to repository Markdown. It does not establish operational effectiveness, adoption, publication state, a current public score, or independent acceptance.",
      "evidence": [
        {
          "path": "docs/THC_LOCAL_AND_PUBLIC_REVIEW.md",
          "sha256": "f362a5da01958625eba67a1d198f997381be3c1171a02fe60ec1135dbbfb19c9",
          "excerpt": "That commit is useful for discovery, but the score should still be verified against the recorded reviewed revision."
        },
        {
          "path": "README.md",
          "sha256": "f179245c1b6465d3fad03cfcdba8c9c2b244c282bedb0129a656fc69b9f303aa",
          "excerpt": "Status:** Public Draft **Version:** 0.2.0"
        }
      ]
    },
    {
      "question": "What is the smallest follow-up recommended by the repository docs?",
      "answer": "Pressure-test the evaluation model against real projects, failed projects, and counterexamples before making a 1.0 claim. This is a documentation-based recommendation, not an assigned or accepted work item.",
      "evidence": [
        {
          "path": "docs/THC_PUBLICATION_GUIDE.md",
          "sha256": "062a5ee07b054c693e1a09fea25b2bd24dbf491331c5b307b70b029052ee4227",
          "excerpt": "The methodology is strong, but the evaluation layer still needs pressure testing against real projects, failed projects, and counterexamples."
        },
        {
          "path": "CHANGELOG.md",
          "sha256": "2e8c6ebf4a45af21e7c867590e747655f20a6a9b6f463e1c4083762010cdaed6",
          "excerpt": "The evaluation model needs pressure testing against real projects, counterexamples, and failed projects before any 1.0 claim."
        }
      ]
    }
  ],
  "related_projects": [
    {
      "identity": "github:vel-labs/project-scaffold",
      "relationship": "reference-implementation",
      "description": "The methodology README identifies Project Scaffold as its reference implementation / applied scaffold and says the scaffold can follow the methodology.",
      "review_when": "Review this connection if either repository changes its documented ownership or application boundary.",
      "evidence": [
        {
          "path": "README.md",
          "sha256": "f179245c1b6465d3fad03cfcdba8c9c2b244c282bedb0129a656fc69b9f303aa",
          "excerpt": "Vel-Labs/project-scaffold reference implementation / applied scaffold"
        }
      ]
    }
  ]
}
```
