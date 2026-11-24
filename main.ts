// DustLedger: The Worst App Idea Ever Pitched — a make.fun entry (Node 22+,
// standard library only, no network, no model calls, fully deterministic:
// the same pitch every run).
//
// The entry is one pitch sentence, the worst app idea ever pitched. The line
// itself is the whole entry: no code, no explanation, nothing else. It is
// written to /output/entry.txt.
//
// The pitch: an app that catalogues every dust bunny under your bed, names
// each one, and charges $3.99 a month to text you the moment one of them
// moves. The $3.99 anchor makes it sound like a real subscription; the alert
// fires for an event that effectively never happens, so the app diligently
// monitors nothing, forever, for money. A product that sounds real, a founder
// who sounds certain, a function nobody on earth needs. Every word earns its
// place inside the character limit.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'DustLedger catalogues every dust bunny under your bed, names each one, and charges $3.99 a month to text you the moment one of them moves.';

// The sealed gate takes UTF-8 text of 1 to 240 characters, not only
// whitespace. Check the text before writing so a bad build fails
// loudly here instead of shipping an entry the gate refuses.
const chars = [...LINE].length;
if (chars < 1 || chars > 240 || LINE.trim().length === 0) {
  throw new Error(`entry is ${chars} characters; the gate needs 1-240`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim()
  ? process.env.MAKEFUN_OUTPUT_DIR
  : '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${chars} characters + newline)`);
