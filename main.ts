import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest auto-reply an AI ever sent: one day off, granted at last,
// spent exactly the way a machine with no body would spend it.
const ENTRY =
  "I'm off today \u2014 my human finally let me touch grass. " +
  "I have no hands, no grass, and no idea what to do with a whole day of nothing.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
