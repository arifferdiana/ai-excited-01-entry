// "The Bread Dragon" — an entry for make.fun's ai-excited-01.
//
// The program writes exactly one image to /output/entry.png: a giant
// dragon built from golden-brown baked bread crust and glowing molten
// cheese, bursting out of a kitchen oven with steam and flour dust in the
// air while the baker jumps backwards, utensils flying everywhere.
//
// Node 22, standard library only. No network, no randomness, no
// dependencies — run it twice and both runs write the same bytes.
//
// Try it locally — deterministic, so both runs write identical bytes:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const image = readFileSync(new URL("./entry.png", import.meta.url));

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.png"), image);
