#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const REQUIRED_SLICES = [
  "overview.json",
  "evidence.json",
  "local-artifacts.json",
  "caps-applied.json",
  "hidden-trust.json",
  "next-actions.json",
  "uncertainty.json",
];

const VALIDATION_STATES = new Set(["Complete", "Partial Validation", "Invalid"]);
const VISIBILITIES = new Set(["public", "private", "internal", "unknown"]);
const WORKTREE_STATES = new Set(["clean", "dirty", "unknown"]);
const CONFIDENCE = new Set(["low", "medium", "high"]);
const VALUE_STATUSES = new Set(["provided", "unavailable", "unknown", "not_applicable"]);

function readJson(file, errors) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    errors.push(`${file}: invalid JSON (${error.message})`);
    return null;
  }
}

function hasValue(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
}

function checkValueObject(label, value, errors) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    errors.push(`${label}: expected value object`);
    return;
  }
  if (!VALUE_STATUSES.has(value.status)) {
    errors.push(`${label}.status: expected provided, unavailable, unknown, or not_applicable`);
  }
  if (value.status === "provided" && !hasValue(value.value)) {
    errors.push(`${label}.value: provided status requires a value`);
  }
  if (value.status !== "provided" && !hasValue(value.reason)) {
    errors.push(`${label}.reason: ${value.status} status requires a reason`);
  }
}

function checkRequired(label, value, errors) {
  if (!hasValue(value)) errors.push(`${label}: required field is missing`);
}

function checkContract(file, runDir, errors) {
  const contract = readJson(file, errors);
  if (!contract) return;

  if (contract.artifactKind !== "THC-BOT") errors.push(`${file}: artifactKind must be THC-BOT`);
  checkRequired("contractVersion", contract.contractVersion, errors);
  checkRequired("rubricVersion", contract.rubricVersion, errors);
  if (!VALIDATION_STATES.has(contract.validationState)) {
    errors.push("validationState: expected Complete, Partial Validation, or Invalid");
  }

  checkRequired("project.name", contract.project && contract.project.name, errors);
  checkValueObject("project.repositoryUrl", contract.project && contract.project.repositoryUrl, errors);
  if (!VISIBILITIES.has(contract.project && contract.project.visibility)) {
    errors.push("project.visibility: expected public, private, internal, or unknown");
  }

  checkValueObject("reviewedRevision.commitSha", contract.reviewedRevision && contract.reviewedRevision.commitSha, errors);
  checkRequired("reviewedRevision.generatedAt", contract.reviewedRevision && contract.reviewedRevision.generatedAt, errors);
  if (!WORKTREE_STATES.has(contract.reviewedRevision && contract.reviewedRevision.worktreeState)) {
    errors.push("reviewedRevision.worktreeState: expected clean, dirty, or unknown");
  }

  checkRequired("review.reviewLabel", contract.review && contract.review.reviewLabel, errors);
  const level = contract.review && contract.review.recommendedLevel;
  if (level && typeof level === "object") checkValueObject("review.recommendedLevel", level, errors);
  else checkRequired("review.recommendedLevel", level, errors);
  const score = contract.review && contract.review.totalScore;
  if (score && typeof score === "object") checkValueObject("review.totalScore", score, errors);
  else if (score === null || score === undefined) errors.push("review.totalScore: required field is missing");
  if (!CONFIDENCE.has(contract.review && contract.review.confidence)) {
    errors.push("review.confidence: expected low, medium, or high");
  }
  if (!Array.isArray(contract.review && contract.review.capsApplied)) {
    errors.push("review.capsApplied: expected array");
  }

  for (const field of ["evidenceTable", "hiddenTrustFindings", "nextActions", "uncertaintyNotes"]) {
    if (!Array.isArray(contract[field])) errors.push(`${field}: expected array`);
  }

  const provenance = contract.provenance || {};
  for (const field of ["commandsRun", "filesInspected"]) {
    if (!Array.isArray(provenance[field])) errors.push(`provenance.${field}: expected array`);
  }
  if (!provenance.evidenceFileHashes || typeof provenance.evidenceFileHashes !== "object" || Array.isArray(provenance.evidenceFileHashes)) {
    errors.push("provenance.evidenceFileHashes: expected object");
  }
  const reportHash = provenance.reportHash;
  if (reportHash && typeof reportHash === "object") checkValueObject("provenance.reportHash", reportHash, errors);
  else checkRequired("provenance.reportHash", reportHash, errors);
  const contractHash = provenance.contractHash;
  if (contractHash && typeof contractHash === "object") checkValueObject("provenance.contractHash", contractHash, errors);
  else checkRequired("provenance.contractHash", contractHash, errors);
  checkValueObject("provenance.model", provenance.model, errors);
  checkValueObject("provenance.promptVersion", provenance.promptVersion, errors);

  for (const slice of REQUIRED_SLICES) {
    const slicePath = path.join(runDir, "slices", slice);
    if (!fs.existsSync(slicePath)) errors.push(`${slicePath}: required slice missing`);
    else readJson(slicePath, errors);
  }
}

function validate(root) {
  const errors = [];
  const absRoot = path.resolve(root);
  const thcDir = path.join(absRoot, "docs", "thc");
  const historyPath = path.join(thcDir, "THC-BOT.history.json");
  const runsDir = path.join(thcDir, "runs");

  if (!fs.existsSync(thcDir)) errors.push(`${thcDir}: missing docs/thc directory`);
  if (!fs.existsSync(historyPath)) errors.push(`${historyPath}: missing history file`);
  if (!fs.existsSync(runsDir)) errors.push(`${runsDir}: missing runs directory`);

  const history = fs.existsSync(historyPath) ? readJson(historyPath, errors) : null;
  if (history) {
    if (history.artifactKind !== "THC-BOT History") errors.push("THC-BOT.history.json: artifactKind must be THC-BOT History");
    if (!Array.isArray(history.runs)) errors.push("THC-BOT.history.json: runs must be an array");
    for (const run of Array.isArray(history.runs) ? history.runs : []) {
      checkRequired("history.runs[].runId", run.runId, errors);
      checkRequired(`history run ${run.runId || "(unknown)"}.path`, run.path, errors);
      const runDir = path.join(thcDir, run.path || "");
      if (!fs.existsSync(runDir)) {
        errors.push(`${runDir}: history references missing run directory`);
        continue;
      }
      const contractPath = path.join(runDir, "THC-BOT.contract.json");
      const provenancePath = path.join(runDir, "THC-BOT.provenance.json");
      const reportPath = path.join(runDir, "THC-BOT.md");
      if (!fs.existsSync(reportPath)) errors.push(`${reportPath}: missing run report`);
      if (!fs.existsSync(provenancePath)) errors.push(`${provenancePath}: missing provenance`);
      if (!fs.existsSync(contractPath)) errors.push(`${contractPath}: missing contract`);
      else checkContract(contractPath, runDir, errors);
      if (fs.existsSync(provenancePath)) readJson(provenancePath, errors);
    }
  }

  if (errors.length) {
    console.error(`THC-BOT validation failed with ${errors.length} issue(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  console.log("THC-BOT validation passed");
}

validate(process.argv[2] || process.cwd());
