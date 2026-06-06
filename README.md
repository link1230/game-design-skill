# 游戏设计 Skill Pack

Reasonix Code 游戏设计四件套——从系统策划 → 原型图 → 资源清单 → HTML 汇报文档，一站式输出。

---

## 快速概览

| # | Skill | 核心能力 | 交互方式 |
|---|-------|---------|---------|
| ① | `game-system-design` | 系统拆解、方案设计、数值框架、机制创新、正式策划案 | 分步交互（每步确认） |
| ② | `game-ui-prototype` | 双模式原型设计：完整线框图 + draw.io / 极简蓝图版 GDD | 先选模式，再分步确认 |
| ③ | `game-asset-requirements` | 美术/音频/特效/其他资源清单 + 工时排期 + 外包建议 | 分步交互（每步确认） |
| ④ | `game-design-to-html` | 整合前三步产出 → 自包含精美 HTML 汇报文档（8 套设计系统可选） | 一次性生成 |

---

## 推荐工作流

```
 ① 系统策划         ② 原型设计          ③ 资源清单          ④ HTML 汇报
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│ 系统拆解  │ ──→ │ 风格适配  │ ──→ │ 美术需求  │ ──→ │ 设计系统  │
│ 方案设计  │     │ UI 线框图 │     │ 音频需求  │     │ 章节编排  │
│ 数值框架  │     │ 交互流程  │     │ 特效需求  │     │ 排版渲染  │
│ 机制创新  │     │ draw.io   │     │ 排期汇总  │     │ 打印优化  │
│ 策划案    │     │ 原型图    │     │ 外包建议  │     │ 单文件输出 │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
```

每一步的输出是下一步的输入，环环相扣。也可以独立使用任意一个 Skill。

---

## 各 Skill 详情

### ① game-system-design — 交互式分步系统策划

**五步流程**，每步结束用选项确认后再继续：

| 步骤 | 内容 | 产出 |
|------|------|------|
| Step 1 | 系统拆解分析 | 核心循环、子模块拆解、反馈闭环、竞品参照 |
| Step 2 | 系统设计方案 | 设计目标、系统结构、核心规则、UI 要点、边界情况 |
| Step 3 | 数值定价框架 | 成长曲线、投放节奏、经济模型、平衡性推演 |
| Step 4 | 机制创新/组合 | 创意 brainstorm、系统联动、玩家行为预测 |
| Step 5 | 正式策划案 | 合并去重，按正式格式输出完整文档 |

**特色**：支持竞品分析（自动 web_search）和自研设计两种场景，可跳过不需要的模块。

---

### ② game-ui-prototype — 双模式原型设计

运行时可选择两种模式：

**A · 普通原型模式**（完整流程）：

| 步骤 | 内容 |
|------|------|
| Step 0 | 风格适配分析（从 8 种游戏 UI 风格中匹配最佳） |
| Step 1 | 参考游戏 UI 拆解 |
| Step 2 | 确定界面清单（按 P0/P1/P2 优先级） |
| Step 3 | 逐界面产出文字线框图（含风格标注） |
| Step 4 | 交互流程串联 |
| Step 5 | 标注与验收 |
| Step 6 | 生成 draw.io 可编辑原型图 |

**B · 极简策划案模式**（蓝图版）：一页式 GDD，侧栏 → 主体图 → 标注 → 细节 → 系统描述，30 秒读懂。可选生成 1200×1000 蓝图式 draw.io 文件。

**内置 UI 风格指南**：附录包含 8 种游戏 UI 风格完整定义（极简编辑 / 工业粗野 / 高奢柔软 / 黑暗科技 / 明亮卡通 / 编辑出版 / 玻璃质感 / 像素复古），含配色、字体、材质、圆角、动效、反模式。

---

### ③ game-asset-requirements — 资源需求与排期

**五步流程**，按资源类别逐一梳理：

| 步骤 | 内容 |
|------|------|
| Step 1 | 美术资源需求（角色 / 场景 / UI / 动画） |
| Step 2 | 音频资源需求（BGM / SFX / 语音） |
| Step 3 | 特效资源需求（战斗 / 环境 / UI） |
| Step 4 | 其他资源（字体 / 本地化 / 视频 / 程序化） |
| Step 5 | 排期与优先级汇总 + 工时估算 + 依赖关系 + 外包建议 |

**特色**：自动从策划案和原型图中提取对应资源类型，风格标注继承自 `game-ui-prototype` 的 Step 0 选择。

---

### ④ game-design-to-html — HTML 汇报文档生成

整合策划案 + 原型图 + 资源清单 → **自包含单文件 HTML**，可直接打印或浏览器展示。

**8 套完整设计系统**（蒸馏自 ui-ux-pro-max）：

| 主题 | 适合游戏类型 |
|------|------------|
| `premium-soft` 高奢柔软 | 奇幻 RPG / 策略 / 模拟经营 / 卡牌 |
| `dark-tech` 黑暗科技 | 赛博朋克 / 潜行 / 恐怖 / 科幻 |
| `bright-cartoon` 明亮卡通 | 休闲 / 派对 / 儿童 / 三消 |
| `editorial-publication` 编辑出版 | 叙事 / 视觉小说 / 互动剧情 |
| `glassmorphism` 玻璃质感 | 开放世界 / 现代 RPG / 科技 |
| `minimal-editorial` 极简编辑 | 解谜 / 益智 / 休闲 |
| `industrial-brutalist` 工业粗野 | 机甲 / 军事 / 战术 |
| `pixel-retro` 像素复古 | 像素艺术 / 复古 / 2D 动作 |

**汇报对象适配**：根据内部团队 / 投资人 / 发行商 / 合作方自动调整侧重点和语气。

**质量保障**：内置预交付检查清单（14 项），覆盖排版、可访问性、响应式、打印样式等。

---

## 安装

### 方式一：手动复制（推荐）

```bash
# 进入你的项目目录
cd your-project

# 创建 skills 目录（如不存在）
mkdir -p .reasonix/skills/

# 复制所有 skill 文件
cp /path/to/game-design-skill-pack/game-*.md .reasonix/skills/
```

重启 Reasonix Code（`/new` 或退出重进），Skill 即出现在索引中。

### 方式二：install_skill 命令

在 Reasonix Code 会话中逐个安装：

```
/install game-system-design
（粘贴 game-system-design.md 内容）

/install game-ui-prototype
（粘贴 game-ui-prototype.md 内容）

/install game-asset-requirements
（粘贴 game-asset-requirements.md 内容）

/install game-design-to-html
（粘贴 game-design-to-html.md 内容）
```

---

## 使用

```
/skill game-system-design 系统名称: "装备合成系统", 目标游戏: "原神 5.0"
/skill game-ui-prototype 系统策划案: "...", 目标游戏参考: "塞尔达传说 缩小帽"
/skill game-asset-requirements 策划案: "...", 原型图: "..."
/skill game-design-to-html 项目名称: "猫咪探索世界", 项目类型: "2D像素风休闲探索"
```

每个 Skill 运行后会引导你逐步确认，不用担心一次输出太多内容。

---

## 文件清单

```
game-design-skill-pack/
├── README.md                  ← 本文件
├── CHANGELOG.md               ← 版本更新记录
├── game-system-design.md      ← ① 系统策划
├── game-ui-prototype.md       ← ② 原型设计
├── game-asset-requirements.md ← ③ 资源需求
└── game-design-to-html.md     ← ④ HTML 汇报
```

---

## 前置要求

- **平台**：Reasonix Code
- **依赖**：无需额外安装，全部使用内置工具（web_search、write_file、ask_choice 等）
- **模型**：推荐 `deepseek-v4-pro`（复杂设计任务受益于更强推理能力）
