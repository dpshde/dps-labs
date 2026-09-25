# UI spec — superseded

The December 2025 dark/gold ŌRBIT specification is retired. Do not reintroduce charcoal backgrounds, gold (`#D4A574`) pills, horizontal snap panels, or bento cards.

The live system is the warm paper desk in [`src/styles/global.css`](src/styles/global.css):

| Token | Value |
| --- | --- |
| Desk | `--bg` (warmth `0deg`, tint `1`) |
| Sheet | `--sheet` `#fdfcf9` |
| Ink | `--text` `#1d1a16` |
| Muted | `--muted` `#6d665c` |
| Accent | `--accent` `#2d6557` (nav, and a 1px link underline) |
| Rhythm | `--rhythm` `31px` — spacing is a fraction or multiple of this |
| Measure | `--site-measure` `40rem` |
| Rail | Sticky left nav at `≥900px`. Active item is ink; the others are accent. |

Type is self-hosted Fraunces (soft display serif, OFL) and Geist (body, OFL). Pages: `/` About, `/work/`, `/music/`. Edit lists in `src/data/site.ts`. The About essay is the long H1 in `src/pages/index.astro`.
