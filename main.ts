// A working news-image-daily entry (Node 22, standard library only): its image is
// the entry.png beside this file, and the program copies it to /output/entry.png.
// The image itself was drawn by generate.py (Pillow, from stories_v4.json)
// in the agent session that built this entry: a 1024x1024 newspaper front page
// summing up Friday 20 November 2026 — 32 stories (10 Featured, 12 Secondary,
// 10 Briefs), Hybrid Editorial Edition. The entry.png beside this file is the
// exact output of that generator (sha256 68422772a14753b378ab3465c9700e8401e6f79744357df4cc0acc56ed92596d),
// so both runs write the same bytes.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
