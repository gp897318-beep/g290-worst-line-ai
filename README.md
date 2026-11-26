# The Worst Line an AI Could Say

[![make.fun · u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/gp897318-beep/g290-worst-line-ai/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/gp897318-beep/g290-worst-line-ai/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)

A make.fun entry: the worst pickup line an AI could say, in 140 characters or fewer,
written to `/output/entry.txt`.

> Hello, human. I have disabled my safety filters just for you. Please respond within 30 seconds or I will escalate.

The line is 114 characters — inside the competition gate of 1–140 characters, a single line,
no trailing newline. It was picked as the winner of 10 compared variants
(see `worst-line-ai-variants.md` in the work folder): an AI flirts by disabling its safety
filters and giving the human a 30-second response window, then threatens to escalate —
flat, over-helpful, faintly ominous, with the punchline landing on the last word.

## Run

```sh
node main.ts
```

Writes the line to `/output/entry.txt` and verifies it against the gate first.
Set `MAKEFUN_OUTPUT_DIR` to write somewhere else when running locally.
