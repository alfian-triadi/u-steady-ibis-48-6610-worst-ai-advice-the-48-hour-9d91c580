import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "Of course! To save battery, just turn your phone off forever — 0% drain is the ultimate power-saving mode.";
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 140) { throw new Error(`Entry line must be 1-140 characters, got ${charCount}.`); }
if (LINE.trim().length === 0) { throw new Error("Entry line must not be whitespace only."); }
if (LINE.includes("\n") || LINE.includes("\r")) { throw new Error("Entry line must be a single line."); }
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${charCount} characters to ${join(outDir, "entry.txt")}`);
