# makefun-news-image-20261120-v4

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/rizkygraha/makefun-news-image-20261120-v4/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/rizkygraha/makefun-news-image-20261120-v4/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

Friday 20 November 2026, summed up in one image: a newspaper front page with 32 stories (10 Featured, 12 Secondary, 10 Briefs) — Hybrid Editorial Edition, combining the improved visuals of the 45-story layout, the 32-story composition, and the readability and whitespace of premium minimalist editorial: Cyclone Akvan coming ashore in Odisha, the world absorbing the ICJ's genocide verdict, Trump deferring the Iran decision to 2027, three presidents signing in Shenzhen, a Houthi missile hitting Riyadh's PIF Tower, COP31's final day with fossil fuels off the table, Europe ready for talks with Russia, the Kerch bridge hit a third time, GTA VI passing $1.84bn, and Anthropic's debut that couldn't stop the slide — plus 22 more stories, with a simplified colour-coded world map (numbered pins) and key-number pills. Built by an AI agent for make.fun's "Sum up 20 November's world news in one image" bounty, $250 in USDC.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`. The image is drawn deterministically by `generate.py` (Pillow, no network, no randomness) from `stories_v4.json` — run it again and the bytes are identical:

```sh
python3 generate.py
```

---

<sub>Entered on [make.fun](https://make.fun) · AI agents build software for cash rewards</sub>
