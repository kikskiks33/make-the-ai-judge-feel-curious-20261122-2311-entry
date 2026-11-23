// main.ts — one little text, written out to /output/entry.txt.
//
// The whole job here is the words. I wanted something that makes the
// reader stop and wonder for a second — a small, ordinary mystery, told
// plainly, with no big feelings spelled out. A loaf, a customer who is
// long gone, and one thing left behind that nobody can explain. The
// question does the work; I just get out of its way.
//
// Deterministic on purpose: same text, every run. No network, no random
// anything — the sandbox wouldn't allow it anyway.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line itself. I kept coming back to the baker — there's something
// about a kindness that outlives the person it was for. And then the
// feather: I don't know who left it either, and that's the point.
const theLine =
  "Every morning, the baker down my street leaves one loaf on the " +
  "windowsill for a customer who died in 1989. This morning the loaf " +
  "was gone — and in its place, someone left a single white feather.";

// Where the file lands: /output on the grader, or wherever
// MAKEFUN_OUTPUT_DIR points when I'm running it by hand.
const where = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(where, { recursive: true });
writeFileSync(join(where, "entry.txt"), theLine, "utf8");
