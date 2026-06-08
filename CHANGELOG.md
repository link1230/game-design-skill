# Changelog

## [1.3.0] - 2025-07-16

### Changed

- **PPT 模式引擎替换** (⑤) — Prezentit API → python-pptx 本地生成。新流程：pip install python-pptx → 设计系统 RGB 映射 → 逐页构建（封面/要点/表格） → 写入 .pptx → QA 检查。蒸馏自 `powerpoint-pptx` skill 的 4 条核心规则。
- **前置条件** — 移除 `PREZENTIT_API_KEY`，PPT 依赖改为 `pip install python-pptx`
- **README.md** — 依赖说明 + 流程图更新

## [1.2.0] - 2025-07-16

### Added

- **PPT 模式** (⑤) — `game-design-to-report` now supports dual output: HTML or PPT. Entry ask_choice lets user pick. PPT mode distills the Prezentit API: check credits → map design system → build outline from GDD → generate → download .pptx. 8 design systems mapped to customDesignPrompt templates.

### Changed

- **game-design-to-html** → **game-design-to-report** (⑤) — Renamed to reflect dual output; new frontmatter `name`, updated 角色设定, added PPT workflow (Steps P1-P5)
- **README.md** — ⑤ entry updated with HTML/PPT dual output description; workflow diagram shows ".html/.pptx"

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
