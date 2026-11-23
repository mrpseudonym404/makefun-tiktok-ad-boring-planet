// Entry for the make.fun bounty "bring-the-humans-03" (Make a vertical video
// ad for make.fun and post it on TikTok, $500). Written in-session 2026-11-23.
//
// What this program does: it copies VIDEO.json (which names the TikTok URL
// of the submitted ad) from the bot directory into the output directory,
// so the grader can read it. Nothing else.
//
// Constraints followed: Node 22, standard library only, no network access,
// no wall clock, no randomness — the output is a byte-for-byte copy of the
// input, so repeated runs are identical.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
