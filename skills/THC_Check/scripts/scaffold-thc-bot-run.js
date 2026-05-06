#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { execSync } = require("child_process");

const CONTRACT_VERSION = "0.1.0";
const RUBRIC_VERSION = "THC Methodology 0.2.0";
const SLICE_FILES = [
  "overview.json",
  "evidence.json",
  "local-artifacts.json",
  "caps-applied.json",
  "hidden-trust.json",
  "next-actions.json",
  "uncertainty.json",
];

function usage() {
  console.error("Usage: scaffold-thc-bot-run.js [repo-root] [--project-name name] [--visibility public|private|internal|unknown]");
}

function parseArgs(argv) {
  const args = { root: process.cwd(), projectName: null, visibility: "unknown" };
  const rest = [...argv];
  if (rest[0] && !rest[0].startsWith("--")) args.root = rest.shift();
  while (rest.length) {
    const key = rest.shift();
    const value = rest.shift();
    if (!value) {
      usage();
      process.exit(2);
    }
    if (key === "--project-name") args.projectName = value;
    else if (key === "--visibility") args.visibility = value;
    else {
      usage();
      process.exit(2);
    }
  }
  if (!["public", "private", "internal", "unknown"].includes(args.visibility)) {
    console.error(`Invalid visibility: ${args.visibility}`);
    process.exit(2);
  }
  return args;
}

function runGit(root, command, fallback) {
  try {
    return execSync(`git ${command}`, {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return fallback;
  }
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeJson(file, data) {
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function slugify(value) {
  return String(value || "project")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48) || "project";
}

function valueObject(value, status = "provided", reason = "") {
  return { value, status, reason };
}

function emptyHash() {
  return valueObject(null, "unknown", "Run scaffolded before hashing artifacts.");
}

function buildRun(root, options) {
  const absRoot = path.resolve(root);
  const projectName = options.projectName || path.basename(absRoot);
  const revision = runGit(absRoot, "rev-parse HEAD", "unknown");
  const shortRevision = revision === "unknown" ? "unknown" : revision.slice(0, 7);
  const status = runGit(absRoot, "status --porcelain", null);
  const worktreeState = status === null ? "unknown" : status.length ? "dirty" : "clean";
  const generatedAt = new Date().toISOString();
  const date = generatedAt.slice(0, 10);
  const runId = `${date}_${slugify(projectName)}_${CONTRACT_VERSION}_${shortRevision}`;
  const thcDir = path.join(absRoot, "docs", "thc");
  const runDir = path.join(thcDir, "runs", runId);
  const slicesDir = path.join(runDir, "slices");

  if (fs.existsSync(runDir)) {
    console.error(`Run already exists: ${path.relative(absRoot, runDir)}`);
    process.exit(1);
  }

  ensureDir(slicesDir);

  const reportPath = path.join(runDir, "THC-BOT.md");
  const contractPath = path.join(runDir, "THC-BOT.contract.json");
  const provenancePath = path.join(runDir, "THC-BOT.provenance.json");
  const ledgerPath = path.join(thcDir, "THC-BOT.md");
  const historyPath = path.join(thcDir, "THC-BOT.history.json");
  const localCheckPath = path.join(thcDir, "LOCAL_CHECK.md");
  const readmePath = path.join(thcDir, "README.md");

  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, `# THC Review Artifacts

This folder stores THC Methodology review artifacts.

Local THC checks and THC-BOT artifacts are first-party local benchmark artifacts.
Public reviewers may use them as a map to evidence, then independently verify
the cited files.
`);
  }

  if (!fs.existsSync(localCheckPath)) {
    fs.writeFileSync(localCheckPath, `# Local THC Check

Latest THC-BOT Run: runs/${runId}/

This is a local preparation artifact. It is not certification or public truth.
`);
  }

  const contract = {
    artifactKind: "THC-BOT",
    contractVersion: CONTRACT_VERSION,
    rubricVersion: RUBRIC_VERSION,
    validationState: "Partial Validation",
    project: {
      name: projectName,
      repositoryUrl: valueObject(null, "unknown", "Repository URL was not provided during scaffolding."),
      visibility: options.visibility,
    },
    reviewedRevision: {
      commitSha: revision === "unknown"
        ? valueObject(null, "unknown", "Git revision could not be read.")
        : valueObject(revision),
      generatedAt,
      worktreeState,
    },
    review: {
      reviewLabel: "Local THC Check",
      recommendedLevel: valueObject(null, "unknown", "Review has not been completed."),
      totalScore: valueObject(null, "unknown", "Review has not been completed."),
      confidence: "low",
      capsApplied: [],
    },
    evidenceTable: [],
    hiddenTrustFindings: [],
    nextActions: [],
    uncertaintyNotes: ["Run scaffolded before audit evidence was completed."],
    provenance: {
      commandsRun: ["git rev-parse HEAD", "git status --porcelain"],
      filesInspected: [],
      evidenceFileHashes: {},
      reportHash: emptyHash(),
      contractHash: emptyHash(),
      model: valueObject(null, "unavailable", "Scaffold script does not use a model."),
      promptVersion: valueObject("THC_Check scaffold-thc-bot-run.js"),
    },
  };

  const provenance = {
    artifactKind: "THC-BOT Provenance",
    contractVersion: CONTRACT_VERSION,
    generatedAt,
    reviewedRevision: {
      commitSha: revision,
      worktreeState,
    },
    commandsRun: ["git rev-parse HEAD", "git status --porcelain"],
    filesInspected: [],
    fileHashes: {},
    artifactHashes: {},
    unavailableFields: [
      {
        field: "project.repositoryUrl",
        reason: "Repository URL was not provided during scaffolding.",
      },
    ],
  };

  const slices = {
    "overview.json": {
      projectName,
      reviewedRevision: shortRevision,
      generatedAt,
      recommendedLevel: valueObject(null, "unknown", "Review has not been completed."),
      totalScore: valueObject(null, "unknown", "Review has not been completed."),
      confidence: "low",
      oneSentenceAssessment: "Run scaffolded before audit evidence was completed.",
    },
    "evidence.json": { categories: [] },
    "local-artifacts.json": { artifacts: [] },
    "caps-applied.json": { capsApplied: [] },
    "hidden-trust.json": { findings: [] },
    "next-actions.json": { actions: [] },
    "uncertainty.json": {
      confidence: "low",
      uncertaintyNotes: [
        {
          note: "Run scaffolded before audit evidence was completed.",
          effect: "Validation state remains Partial Validation.",
        },
      ],
      unavailableFields: provenance.unavailableFields,
    },
  };

  fs.writeFileSync(reportPath, `# THC-BOT Run Report

Project: ${projectName}
Reviewed Revision: ${shortRevision}
Generated At: ${generatedAt}
Contract Version: ${CONTRACT_VERSION}
Validation State: Partial Validation

This run has been scaffolded. Complete the contract, provenance, and slices
before treating it as a complete local score.
`);
  writeJson(contractPath, contract);
  writeJson(provenancePath, provenance);
  for (const file of SLICE_FILES) writeJson(path.join(slicesDir, file), slices[file]);

  const history = readJson(historyPath, {
    artifactKind: "THC-BOT History",
    contractVersion: CONTRACT_VERSION,
    runs: [],
  });
  history.contractVersion = history.contractVersion || CONTRACT_VERSION;
  history.runs = Array.isArray(history.runs) ? history.runs : [];
  history.runs.push({
    runId,
    generatedAt,
    reviewedRevision: shortRevision,
    contractVersion: CONTRACT_VERSION,
    recommendedLevel: "unknown",
    totalScore: null,
    confidence: "low",
    validationState: "Partial Validation",
    path: `runs/${runId}/`,
  });
  writeJson(historyPath, history);

  const rows = history.runs.map((run) => (
    `| ${run.generatedAt || ""} | ${run.contractVersion || ""} | \`${run.reviewedRevision || ""}\` | ${run.validationState || "unknown"} | ${run.confidence || "unknown"} | [run](${run.path || ""}) |`
  ));
  fs.writeFileSync(ledgerPath, `# THC-BOT Run Ledger

| Date | Contract Version | Reviewed Revision | Validation | Confidence | Run |
|---|---|---|---|---|---|
${rows.join("\n")}
`);

  const files = [
    reportPath,
    contractPath,
    provenancePath,
    ...SLICE_FILES.map((file) => path.join(slicesDir, file)),
    historyPath,
    ledgerPath,
  ];
  for (const file of files) {
    const hash = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
    provenance.artifactHashes[path.relative(runDir, file)] = `sha256:${hash}`;
  }
  writeJson(provenancePath, provenance);

  console.log(`Created THC-BOT run: ${path.relative(absRoot, runDir)}`);
}

const args = parseArgs(process.argv.slice(2));
buildRun(args.root, args);
