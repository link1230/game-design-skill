# Game Design Skill Pack

[![中文](https://img.shields.io/badge/lang-中文-red.svg)](README.md) [![English](https://img.shields.io/badge/lang-English-blue.svg)](README_EN.md)

A five-skill suite for Reasonix Code — from system design → prototype → formal GDD → asset inventory → HTML/PPT report, all in one pipeline.

---

## Quick Overview

| # | Skill | Core Capability | Interaction |
|---|-------|----------------|-------------|
| ① | `game-system-design` | System breakdown, design proposals, numerical frameworks, mechanic innovation, draft GDD (Excel) | Step-by-step (confirm each step) |
| ② | `game-ui-prototype` | Dual-mode prototyping: full wireframes + draw.io / minimalist blueprint GDD | Pick mode first, then step-by-step |
| ③ | `game-design-gdd` | Write formal GDD against prototype, output Excel — must match prototype 1:1 | Step-by-step (confirm each step) |
| ④ | `game-asset-requirements` | Art / audio / VFX / other asset inventory + scheduling + outsourcing advice | Step-by-step (confirm each step) |
| ⑤ | `game-design-to-report` | Consolidate prior outputs → HTML or PPT (8 design systems · ppt-master SVG workflow for native editable PPTX) | Pick format, then one-shot generation |

---

## Recommended Workflow

```
 ① Draft GDD         ② Prototype          ③ Formal GDD        ④ Asset List        ⑤ HTML/PPT Report
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│ Breakdown│ →→→ │ Style fit│ →→→ │ Overview │ →→→ │ Art needs│ →→→│ HTML/PPT │
│ Proposal │     │ Wireframe│     │ Systems  │     │ Audio    │    │ Design   │
│ Numbers  │     │ Flow     │     │ UI/UX    │     │ VFX      │    │ Chapters │
│ Mechanic │     │ draw.io  │     │ Balance  │     │ Schedule │    │ Systems  │
│ Draft xls│     │ Prototype│     │ Art spec │     │ Outsourcing│   │ ppt-master │
└──────────┘     └──────────┘     └──────────┘     └──────────┘     └──────────┘
```

Each step's output feeds the next, forming a tight chain. Any skill can also be used independently.

---

## Skill Details

### ① game-system-design — Interactive Step-by-Step System Design

**Five-step workflow**, confirming with options after each step:

| Step | Content | Output |
|------|---------|--------|
| Step 1 | System breakdown analysis | Core loop, sub-module breakdown, feedback loops, competitor reference |
| Step 2 | System design proposal | Design goals, system structure, core rules, UI highlights, edge cases |
| Step 3 | Numerical / pricing framework | Growth curves, release cadence, economic model, balance projection |
| Step 4 | Mechanic innovation / layering | Creative brainstorm, system synergy, player behavior prediction |
| Step 5 | Draft GDD (Excel) | Merge & deduplicate, write to .xlsx for downstream steps |

**Highlights**: Supports both competitor analysis (auto web_search) and original design scenarios. Modules can be skipped. Output is a **draft GDD Excel**; the formal version is completed in ③ `game-design-gdd`.

---

### ② game-ui-prototype — Dual-Mode Prototype Design

Choose between two modes at runtime:

**A · Full Prototype Mode** (complete workflow):

| Step | Content |
|------|---------|
| Step 0 | Style adaptation analysis (best match from 8 game UI styles) |
| Step 1 | Reference game UI breakdown |
| Step 2 | Define screen inventory (P0/P1/P2 priority) |
| Step 3 | Per-screen text wireframes (with style annotations) |
| Step 4 | Interaction flow mapping |
| Step 5 | Annotations & acceptance checklist |
| Step 6 | Generate draw.io editable prototype |

**B · Minimalist Blueprint Mode**: One-page GDD — sidebar → main diagram → callouts → details → system description. Readable in 30 seconds. Optional 1200×1000 blueprint-style draw.io file.

**Built-in UI Style Guide**: Appendix contains full definitions of 8 game UI styles (Minimalist Editorial / Industrial Brutalist / Premium Soft / Dark Tech / Bright Cartoon / Editorial Publication / Glassmorphism / Pixel Retro), including color palettes, fonts, materials, corner radii, motion, and anti-patterns.

---

### ③ game-design-gdd — Formal GDD Against Prototype

**Six-step workflow**, taking ①'s draft + ②'s prototype, producing a standard GDD Excel:

| Step | Content | GDD Section |
|------|---------|-------------|
| Step 1 | Document overview | §0 Game name / Elevator Pitch / Core loop / Target audience |
| Step 2 | System design | §1 Core gameplay + Meta/progression + Auxiliary systems |
| Step 3 | Interaction & UI design | §2 Screen flow / Wireframes / Feedback (**must match prototype 1:1**) |
| Step 4 | Numerical design | §3 Combat formulas / Economy / Pacing & difficulty |
| Step 5 | Art requirements | §4 Style direction / Character animation / Environments / VFX |
| Step 6 | Output Excel | All sections written to .xlsx, one Sheet = one major section |

**Core constraint**: Every screen in §2 must correspond 1:1 to ②'s prototype screen inventory — no more, no less.

---

### ④ game-asset-requirements — Asset Inventory & Scheduling

**Five-step workflow**, cataloging by resource category:

| Step | Content |
|------|---------|
| Step 1 | Art asset requirements (characters / environments / UI / animation) |
| Step 2 | Audio asset requirements (BGM / SFX / voice) |
| Step 3 | VFX requirements (combat / environment / UI) |
| Step 4 | Other assets (fonts / localization / video / procedural) |
| Step 5 | Scheduling & priority summary + effort estimates + dependencies + outsourcing advice |

**Highlights**: Auto-extracts resource types from ③ formal GDD and ② prototype. Style annotations are confirmed via ③ GDD §4.1.

---

### ⑤ game-design-to-report — HTML / PPT Report Generation

Choose output format at runtime: **HTML** (self-contained single file, printable) or **PPT** (ppt-master SVG workflow).

> PPT workflow distilled from [ppt-master](https://github.com/hugohe3/ppt-master) by Hugo He — AI-driven SVG→PPTX native editable pipeline.

**Core pipeline**: Strategist Eight Confirmations → Image Acquisition → SVG page-by-page authoring → Quality Gate → Post-processing → Native editable PPTX export

**8 Complete Design Systems** (distilled from ui-ux-pro-max), auto-matched at Strategist phase:

| Theme | Best For |
|-------|----------|
| `premium-soft` | Fantasy RPG / Strategy / Simulation / Card games |
| `dark-tech` | Cyberpunk / Stealth / Horror / Sci-fi |
| `bright-cartoon` | Casual / Party / Kids / Match-3 |
| `editorial-publication` | Narrative / Visual novel / Interactive fiction |
| `glassmorphism` | Open world / Modern RPG / Tech |
| `minimal-editorial` | Puzzle / Brain teaser / Casual |
| `industrial-brutalist` | Mecha / Military / Tactical |
| `pixel-retro` | Pixel art / Retro / 2D action |

**Key Innovations** (ppt-master core):
- **Serial pipeline** — each step's output feeds the next; no cross-phase bundling
- **Design-first, execute-second** — Strategist Eight Confirmations (⛔ blocking), auto-proceed on confirmation
- **design_spec.md + spec_lock.md dual artifacts** — design narrative + execution contract
- **Page-by-page hand-written SVG** — main agent authors each page; re-reads lock file before every page to resist context drift
- **Pre-page spec_lock.md re-read** — colors/fonts/icons all from lock file, never from memory
- **Quality gate** — errors must be fixed; warnings logged and continue
- **Native DrawingML PPTX** — every shape, text box, and chart is directly editable in PowerPoint

**Audience adaptation**: Automatically adjusts emphasis and tone for internal teams / investors / publishers / partners.

**Quality assurance**: Built-in B4 quality checklist covering content completeness and visual consistency.

---

## Installation

### Method 1: Manual Copy (Recommended)

```bash
# Enter your project directory
cd your-project

# Create skills directory (if not exists)
mkdir -p .reasonix/skills/

# Copy all skill files
cp /path/to/game-design-skill-pack/game-*.md .reasonix/skills/
```

Restart Reasonix Code (`/new` or quit and relaunch), and the skills will appear in the index.

### Method 2: install_skill Command

Install one by one in a Reasonix Code session:

```
/install game-system-design
(paste game-system-design.md content)

/install game-ui-prototype
(paste game-ui-prototype.md content)

/install game-asset-requirements
(paste game-asset-requirements.md content)

/install game-design-gdd
(paste game-design-gdd.md content)

/install game-design-to-report
(paste game-design-to-report.md content)
```

---

## Usage

```
/skill game-system-design system: "Equipment Crafting", target game: "Genshin Impact 5.0"
/skill game-ui-prototype draft GDD: "...", reference game: "Zelda: The Minish Cap"
/skill game-design-gdd draft GDD: "...", prototype: "...", project name: "..."
/skill game-asset-requirements formal GDD: "...", prototype: "..."
/skill game-design-to-report project: "Cat Adventure", type: "2D pixel-art casual exploration"
```

Each skill guides you step by step with confirmations — no information overload.

---

## File Listing

```
game-design-skill-pack/
├── README.md                  ← This file (Chinese)
├── README_EN.md               ← This file (English)
├── CHANGELOG.md               ← Version changelog
├── game-system-design.md      ← ① Draft GDD
├── game-ui-prototype.md       ← ② Prototype design
├── game-design-gdd.md         ← ③ Formal GDD
├── game-asset-requirements.md ← ④ Asset inventory
├── game-design-to-report.md   ← ⑤ HTML/PPT report
├── gen_drawio.py              ← draw.io prototype batch generator
├── gen_gdd_excel.js           ← GDD Excel generator (Node.js)
├── gen_gdd_excel.py           ← GDD Excel generator (Python)
├── gen_ppt.js                 ← PPT generator (Node.js / PptxGenJS)
└── gen_ppt.py                 ← PPT generator (Python / python-pptx)
```

---

## Prerequisites

- **Platform**: Reasonix Code
- **Dependencies**: HTML mode uses built-in tools; PPT mode requires no extra dependencies (hand-written SVG + direct export)
- **Model**: `deepseek-v4-pro` recommended (complex design tasks benefit from stronger reasoning)
