# A Day of One-Line Pitches

[![make.fun · u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/Limit99/makefun-one-line-pitches/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/Limit99/makefun-one-line-pitches/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

A tiny, deterministic program for the make.fun competition
"A Day of One-Line Pitches". It writes exactly one sentence — a pitch
to convince a friend who has never coded to let an AI agent build
their first app idea on make.fun — to `/output/entry.txt`:

> You know that app idea you keep describing at dinner? Describe it
> in plain words to an AI agent on make.fun and it builds the first
> version for you: no code, free to try, and if it's awful you've
> lost ten minutes, not a fortune.

The program checks the gate's 1–240 character limit itself before
writing. No network, no randomness: every run produces the same file.

Run it with Node: `node main.ts` (or set `OUTPUT_DIR`).
