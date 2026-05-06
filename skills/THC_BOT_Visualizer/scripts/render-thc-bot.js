#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function usage() {
  console.error("Usage: render-thc-bot.js [repo-root] [--template path]");
}

function parseArgs(argv) {
  const args = { root: process.cwd(), template: null };
  const rest = [...argv];
  if (rest[0] && !rest[0].startsWith("--")) args.root = rest.shift();
  while (rest.length) {
    const key = rest.shift();
    const value = rest.shift();
    if (!value) {
      usage();
      process.exit(2);
    }
    if (key === "--template") args.template = value;
    else {
      usage();
      process.exit(2);
    }
  }
  return args;
}

function readJson(file, uncertainty) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    uncertainty.push(`${file}: ${error.message}`);
    return null;
  }
}

function readOptionalJson(file, uncertainty) {
  if (!fs.existsSync(file)) {
    uncertainty.push(`${file}: file not found`);
    return null;
  }
  return readJson(file, uncertainty);
}

function latestKnown(valueObject, fallback = "unknown") {
  if (valueObject && typeof valueObject === "object" && "value" in valueObject) {
    return valueObject.value === null || valueObject.value === undefined ? fallback : valueObject.value;
  }
  return valueObject === null || valueObject === undefined ? fallback : valueObject;
}

function countBy(items, key) {
  const counts = {};
  for (const item of Array.isArray(items) ? items : []) {
    const value = item && item[key] ? item[key] : "unknown";
    counts[value] = (counts[value] || 0) + 1;
  }
  return counts;
}

function sliceStatus(slice) {
  if (!slice) return "missing";
  if (slice.validationState) return slice.validationState;
  const text = JSON.stringify(slice).toLowerCase();
  if (text.includes("unknown") || text.includes("unavailable")) return "partial";
  return "complete";
}

function buildRuns(root, history, uncertainty) {
  const thcDir = path.join(root, "docs", "thc");
  const runsDir = path.join(thcDir, "runs");
  const historyRuns = history && Array.isArray(history.runs) ? history.runs : null;
  const candidates = historyRuns || (fs.existsSync(runsDir)
    ? fs.readdirSync(runsDir).map((name) => ({ runId: name, path: `runs/${name}/` }))
    : []);

  if (!historyRuns) uncertainty.push("THC-BOT.history.json missing or invalid; run list was built from docs/thc/runs.");

  return candidates.map((entry) => {
    const runPath = entry.path || `runs/${entry.runId}/`;
    const runDir = path.join(thcDir, runPath);
    const contractPath = path.join(runDir, "THC-BOT.contract.json");
    const provenancePath = path.join(runDir, "THC-BOT.provenance.json");
    const contract = readOptionalJson(contractPath, uncertainty) || {};
    readOptionalJson(provenancePath, uncertainty);
    const slicesDir = path.join(runDir, "slices");
    const slices = {
      overview: readOptionalJson(path.join(slicesDir, "overview.json"), uncertainty),
      evidence: readOptionalJson(path.join(slicesDir, "evidence.json"), uncertainty),
      localArtifacts: readOptionalJson(path.join(slicesDir, "local-artifacts.json"), uncertainty),
      capsApplied: readOptionalJson(path.join(slicesDir, "caps-applied.json"), uncertainty),
      hiddenTrust: readOptionalJson(path.join(slicesDir, "hidden-trust.json"), uncertainty),
      nextActions: readOptionalJson(path.join(slicesDir, "next-actions.json"), uncertainty),
      uncertainty: readOptionalJson(path.join(slicesDir, "uncertainty.json"), uncertainty),
    };
    const hiddenCounts = countBy(slices.hiddenTrust && slices.hiddenTrust.findings, "severity");
    const nextCounts = countBy(slices.nextActions && slices.nextActions.actions, "priority");
    const reviewedRevision = contract.reviewedRevision && contract.reviewedRevision.commitSha;
    const reviewedValue = latestKnown(reviewedRevision, entry.reviewedRevision || "unknown");
    const shortRevision = String(reviewedValue || "unknown").slice(0, 7);
    const review = contract.review || {};
    return {
      runId: entry.runId || path.basename(path.resolve(runDir)),
      generatedAt: contract.reviewedRevision && contract.reviewedRevision.generatedAt || entry.generatedAt || "",
      reviewedRevision: shortRevision,
      contractVersion: contract.contractVersion || entry.contractVersion || "unknown",
      rubricVersion: contract.rubricVersion || "unknown",
      recommendedLevel: latestKnown(review.recommendedLevel, entry.recommendedLevel || "unknown"),
      totalScore: latestKnown(review.totalScore, entry.totalScore === undefined ? null : entry.totalScore),
      confidence: review.confidence || entry.confidence || "unknown",
      validationState: contract.validationState || entry.validationState || "unknown",
      publicReadiness: (slices.uncertainty && slices.uncertainty.publicReadiness) || entry.publicReadiness || "unknown",
      paths: {
        report: `${runPath}THC-BOT.md`,
        contract: `${runPath}THC-BOT.contract.json`,
        provenance: `${runPath}THC-BOT.provenance.json`,
      },
      slices: {
        overview: sliceStatus(slices.overview),
        evidence: sliceStatus(slices.evidence),
        localArtifacts: sliceStatus(slices.localArtifacts),
        capsApplied: sliceStatus(slices.capsApplied),
        hiddenTrust: sliceStatus(slices.hiddenTrust),
        nextActions: sliceStatus(slices.nextActions),
        uncertainty: sliceStatus(slices.uncertainty),
      },
      capsApplied: (review.capsApplied || []).concat((slices.capsApplied && slices.capsApplied.capsApplied || []).map((cap) => cap.cap || cap)),
      hiddenTrustCounts: {
        low: hiddenCounts.low || 0,
        medium: hiddenCounts.medium || 0,
        high: hiddenCounts.high || 0,
        critical: hiddenCounts.critical || 0,
      },
      nextActionCounts: {
        high: nextCounts.high || 0,
        medium: nextCounts.medium || 0,
        low: nextCounts.low || 0,
      },
      uncertaintyNotes: [
        ...(contract.uncertaintyNotes || []),
        ...((slices.uncertainty && slices.uncertainty.uncertaintyNotes || []).map((note) => note.note || note)),
      ],
    };
  });
}

function render(root, templatePath) {
  const absRoot = path.resolve(root);
  const skillRoot = path.resolve(__dirname, "..");
  const resolvedTemplate = templatePath
    ? path.resolve(templatePath)
    : path.join(skillRoot, "templates", "thc-bot-visualizer.html");
  const outputPath = path.join(absRoot, "docs", "thc", "THC-BOT.html");
  const historyPath = path.join(absRoot, "docs", "thc", "THC-BOT.history.json");
  const uncertainty = [];
  const history = readOptionalJson(historyPath, uncertainty);
  const runs = buildRuns(absRoot, history, uncertainty);
  const data = {
    generatedAt: new Date().toISOString(),
    source: {
      historyPath: "docs/thc/THC-BOT.history.json",
      runRoot: "docs/thc/runs",
    },
    runs,
    uncertainty,
  };
  const template = fs.readFileSync(resolvedTemplate, "utf8");
  if (!template.includes("__THC_BOT_DATA__")) {
    console.error(`${resolvedTemplate}: missing __THC_BOT_DATA__ placeholder`);
    process.exit(1);
  }
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, template.replace("__THC_BOT_DATA__", JSON.stringify(data, null, 2)));
  console.log(`Rendered ${path.relative(absRoot, outputPath)} from ${runs.length} run(s)`);
}

const args = parseArgs(process.argv.slice(2));
render(args.root, args.template);
