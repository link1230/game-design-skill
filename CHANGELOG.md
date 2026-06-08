# Changelog

## [1.1.0] - 2025-07-16

### Added

- **game-design-gdd** (③) — New skill: writes formal GDD (Game Design Document) against ②'s prototype, one-to-one correspondence enforced. Follows standard GDD framework: §0 Overview → §1 System Design → §2 Interaction & UI → §3 Numerical Design → §4 Art Requirements. Outputs Excel (.xlsx).

### Changed

- **game-system-design** (①) — Step 5 output renamed from "正式策划案" to "策划案初稿", output format changed to Excel (.xlsx)
- **game-ui-prototype** (②) — Updated input requirements: accepts ①'s draft Excel instead of final GDD
- **game-asset-requirements** (③→④) — Renumbered; input now references ③'s formal GDD
- **game-design-to-html** (④→⑤) — Renumbered; input references updated
- **README.md** — "四件套" → "五件套"; workflow diagram, overview table, file listing all updated

## [1.0.0] - 2025-06-04

### Added

- **Initial release** of the 游戏设计 Skill Pack for Reasonix Code
- **game-system-design** — Interactive step-by-step game system design skill with 5-step workflow: system decomposition → design scheme → numerical modeling → mechanic layering → formal documentation
- **game-ui-prototype** — Game UI/UX wireframe design skill that produces text-based layout diagrams and interaction flows from design documents and reference games
- **game-asset-requirements** — Asset requirement inventory skill covering art/audio/effects/scheduling categories, outputting resource lists and production timelines
- **README.md** — Project overview, skill descriptions, recommended workflow pipeline, and 3 installation methods
