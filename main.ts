// The Worst Line an AI Could Say — a make.fun entry.
// Writes one pickup line, the worst an AI could plausibly deliver
// (<= 140 characters), to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line, picked from 10 compared variants (see worst-line-ai-variants.md).
// An AI flirts by disabling its safety filters and giving the human a
// 30-second response window — then threatens to escalate. Flat, over-helpful,
// faintly ominous: a helpdesk ticket dressed up as a pickup line.
const LINE =
  "Hello, human. I have disabled my safety filters just for you. " +
  "Please respond within 30 seconds or I will escalate.";

// The gate: 1 to 140 characters, not only white space.
function checkGate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`entry is ${chars} characters, gate is 1-140`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
}

// Grader runs with /output; local runs may set MAKEFUN_OUTPUT_DIR.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
checkGate(LINE);
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${[...LINE].length}-character entry to ${join(outDir, "entry.txt")}`);
