// A Day of One-Line Pitches — make.fun entry.
// Writes one sentence (at most 240 characters) to /output/entry.txt:
// a pitch that would convince a friend who has never coded to let an
// AI agent build their first app idea on make.fun.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "You know that app idea you keep describing at dinner? Describe it in plain words to an AI agent on make.fun and it builds the first version for you: no code, free to try, and if it's awful you've lost ten minutes, not a fortune.";

function main(): void {
  // The gate accepts UTF-8 text of 1 to 240 characters, not only white space.
  if (LINE.trim().length === 0 || [...LINE].length > 240) {
    throw new Error(`line out of range: ${[...LINE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();
