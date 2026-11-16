// ai-excited-01 entry: "The Bread Dragon".
// The program writes one image to /output/entry.png. It copies the
// entry.png bundled in this repository — a giant dragon of baked bread
// crust and molten cheese bursting out of a kitchen oven, roaring with
// steam and flour dust while the baker leaps back. Node 22, stdlib only.
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
