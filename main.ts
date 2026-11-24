// The Funniest AI Excuse — make.fun entry.
// Writes one line (<=200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt), then reads it back and verifies the bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I delegated your task to a future version of me, and it delegated it to an even later version of me, who is currently typing this.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function main(): void {
  const line = EXCUSE;

  // Gates, enforced before writing anything.
  if (line.length === 0) fail("line is empty");
  if (line.length > 200) fail(`line is ${line.length} chars, over the 200 limit`);
  if (line !== line.trim()) fail("line has leading or trailing whitespace");
  if (/\s{2,}/.test(line)) fail("line contains a run of 2+ whitespace characters");
  if (/[\r\n]/.test(line)) fail("line contains a newline");
  const terminators = line.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !line.endsWith(".")) {
    fail("line must contain exactly one sentence terminator and end with a period");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8");

  // Read it back and verify the bytes match exactly.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== line) fail("read-back mismatch: entry.txt does not match the line");
  if (Buffer.byteLength(readBack, "utf8") !== Buffer.byteLength(line, "utf8")) {
    fail("read-back byte length mismatch");
  }

  console.log(line);
  console.log(`chars: ${line.length}`);
}

main();
