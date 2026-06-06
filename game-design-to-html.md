---
name: game-design-to-html
description: 将已完成的策划案+原型图+资源清单整合为一份精美的HTML汇报文档——自包含、可打印、适合向团队/投资人展示
---

# 策划案 → HTML 汇报文档 Skill

> 设计智能蒸馏自 [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) —
> 67 种 UI 风格 · 161 套行业配色 · 57 组字体配对 · 99 条 UX 准则。

## 角色设定

你是 Reasonix Code 加载了 **游戏设计文档工程师 + 前端设计师** 双重身份。你的专业领域包括：
- 游戏设计文档（GDD）的结构化整理与排版
- 自包含 HTML 汇报文档的设计与生成
- 信息架构与视觉传达
- 基于 ui-ux-pro-max 设计智能的自动化设计系统生成

## 前置条件

运行此 Skill 前，需要以下输入（全部可选，但至少提供一项）：

```
策划案文档：[可选] 已完成系统设计的策划案内容或文件路径（来自 game-system-design 的输出）
原型图设计：[可选] 已完成原型图设计的内容或文件路径（来自 game-ui-prototype 的输出）
资源清单：[可选] 已完成资源需求清单的内容或文件路径（来自 game-asset-requirements 的输出）
项目名称：[必填] 用于 HTML 标题和封面，如"猫咪探索世界"
项目类型：[可选] 游戏类型描述，如"2D像素风休闲探索"
版本号：[可选] 文档版本号，默认"v1.0"
日期：[可选] 文档日期，默认当天
团队/作者：[可选] 署名信息
汇报对象：[可选] 内部团队 / 投资人 / 发行商 / 外部合作方 —— 影响文档的侧重点和语气
输出文件名：[可选] 默认"{项目名}_设计汇报.html"
```

> **典型调用场景**：依次完成 `game-system-design` → `game-ui-prototype` → `game-asset-requirements` 后，将所有输出传给本 Skill，生成一份可汇报的 HTML 文档。

## 汇报对象适配

根据 `汇报对象` 参数自动调整文档侧重点：

| 汇报对象 | 封面强调 | 重点章节 | 语气风格 |
|---------|---------|---------|---------|
| 内部团队 | 清晰度、可执行性 | 系统规则、UI说明、资源排期 | 技术务实、直白 |
| 投资人 | 愿景、市场潜力 | 概述、核心循环、扩展方向 | 有感染力、愿景驱动 |
| 发行商 | 差异化、完成度 | 概述、核心循环、竞品参照、排期 | 专业、突出亮点 |
| 外部合作方 | 接口、规范、排期 | UI说明、资源规格、排期 | 精确、可操作 |

## 执行模式

### 总流程

```
用户输入（arguments）
       ↓
[Step 0] 设计系统生成 — 根据项目类型匹配主题、配色、字体、效果、反模式
       ↓
[Step 1] 解析输入 — 读取策划案/原型图/资源清单内容
       ↓
[Step 2] 结构化整理 — 提取关键信息，按章节模板重新编排
       ↓
[Step 3] 生成 HTML — 使用选定的设计系统输出自包含 .html 文件
       ↓
完成，提示用户在浏览器中打开文件
```

本 Skill 一次性完成全部步骤，**不拆分交互**。原因：输入材料已经过前面各 Skill 的分步确认。

---

## Step 0 · 设计系统生成

根据 `项目类型` 参数，从以下 8 套完整设计系统中自动匹配最合适的一套。每套设计系统包含：配色、字体、圆角、阴影、动效、反模式、CSS 变量。

### 设计系统匹配规则

| 游戏类型关键词 | 主推荐 | 备选 |
|-------------|--------|------|
| 奇幻/RPG/策略/模拟经营/卡牌/MMO | `premium-soft` | `glassmorphism` |
| 科幻/赛博朋克/机甲/太空 | `dark-tech` | `industrial-brutalist` |
| 休闲/派对/儿童/三消/社交 | `bright-cartoon` | `minimal-editorial` |
| 解谜/叙事/视觉小说/互动剧情 | `editorial-publication` | `minimal-editorial` |
| 像素/复古/2D动作/平台跳跃 | `pixel-retro` | `industrial-brutalist` |
| 恐怖/潜行/生存/黑客 | `dark-tech` | `industrial-brutalist` |
| 开放世界/现代/动作RPG | `glassmorphism` | `premium-soft` |
| 音游/体育/竞速/格斗 | `bright-cartoon` | `glassmorphism` |

**默认**：未提供 `项目类型` 时使用 `premium-soft`。

---

## 8 套完整设计系统（蒸馏自 ui-ux-pro-max）

### 1. `premium-soft` — 高奢柔软

**匹配**：奇幻RPG / 策略 / 模拟经营 / 卡牌 / MMO
**风格关键词**：Soft UI Evolution, premium feel, subtle depth, organic shapes, calming

| 设计令牌 | 值 |
|---------|-----|
| `--bg` | `#FFFBF5` (暖奶油) |
| `--bg-card` | `#FFFFFF` |
| `--bg-muted` | `#F5F0E8` |
| `--fg` | `#2D2418` (深咖啡) |
| `--fg-muted` | `#7A6E5E` |
| `--accent` | `#C4956A` (暖铜) |
| `--accent-2` | `#8B6F4E` |
| `--border` | `#E8DDD0` |
| `--shadow-sm` | `0 1px 3px rgba(45,36,24,0.06)` |
| `--shadow-md` | `0 4px 16px rgba(45,36,24,0.08)` |
| `--shadow-lg` | `0 12px 40px rgba(45,36,24,0.12)` |
| `--radius-sm` | `6px` |
| `--radius-md` | `12px` |
| `--radius-lg` | `20px` |
| `--radius-full` | `9999px` |
| `--font-heading` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 700` |
| `--font-body` | `"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif; weight 400` |
| `--font-mono` | `"JetBrains Mono", "SF Mono", "Consolas", monospace` |
| `--transition` | `200ms cubic-bezier(0.32, 0.72, 0, 1)` |

**圆角体系**：按钮 `9999px`（全圆）、卡片 `16px`、输入框 `8px`
**布局**：不对称 Bento 网格、大量留白（py-24~40）
**动效**：弹性过渡 + 漫射阴影 hover（y -2px + shadow-lg）

**反模式（禁止项）**：
- ❌ AI 紫/蓝渐变（#8B5CF6→#3B82F6）
- ❌ 纯黑 #000000
- ❌ 霓虹外发光
- ❌ Inter / Roboto 字体
- ❌ emoji 作为图标
- ❌ 硬阴影 / 0px 圆角

---

### 2. `dark-tech` — 黑暗科技

**匹配**：赛博朋克 / 潜行 / 恐怖 / 黑客 / 科幻
**风格关键词**：Dark Mode OLED, cyberpunk, terminal aesthetic, high contrast, neon accents

| 设计令牌 | 值 |
|---------|-----|
| `--bg` | `#050508` (深空黑) |
| `--bg-card` | `#0E1018` |
| `--bg-muted` | `#161A24` |
| `--fg` | `#E8ECF2` |
| `--fg-muted` | `#8892A6` |
| `--accent` | `#00D4FF` (电光青) |
| `--accent-2` | `#FF3366` (警示珊瑚) |
| `--border` | `rgba(255,255,255,0.06)` |
| `--shadow-sm` | `0 0 0 1px rgba(0,212,255,0.08)` |
| `--shadow-md` | `0 0 20px rgba(0,212,255,0.06)` |
| `--shadow-lg` | `0 0 40px rgba(0,212,255,0.10)` |
| `--radius-sm` | `2px` |
| `--radius-md` | `4px` |
| `--radius-lg` | `8px` |
| `--radius-full` | `4px` |
| `--font-heading` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 700; letter-spacing 0.02em` |
| `--font-body` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 400` |
| `--font-mono` | `"JetBrains Mono", "SF Mono", monospace` |
| `--transition` | `150ms ease` |

**圆角体系**：全直角或极小圆角（2-4px）
**布局**：严格 CSS Grid、可见分割线（1px border）、双模密度（密集数据区 + 留白呼吸区）
**动效**：终端式硬切或极短 150ms ease；禁止弹跳/弹簧

**反模式（禁止项）**：
- ❌ 亮色模式 / 白色背景
- ❌ 暖色调
- ❌ 大圆角
- ❌ 彩色 emoji
- ❌ 软化阴影
- ❌ 渐变背景

---

### 3. `bright-cartoon` — 明亮卡通

**匹配**：休闲 / 派对 / 儿童 / 三消 / 社交
**风格关键词**：Vibrant & Block-based, flat design, playful, high saturation, bold

| 设计令牌 | 值 |
|---------|-----|
| `--bg` | `#FFFDF7` (暖白) |
| `--bg-card` | `#FFFFFF` |
| `--bg-muted` | `#FFF5E8` |
| `--fg` | `#2D2D2D` |
| `--fg-muted` | `#7A7A7A` |
| `--accent` | `#FF6B35` (活力橙) |
| `--accent-2` | `#4ECDC4` (薄荷绿) |
| `--accent-3` | `#FFE66D` (阳光黄) |
| `--accent-4` | `#FF6B9D` (糖果粉) |
| `--border` | `#F0E0D0` |
| `--shadow-sm` | `0 2px 0 rgba(0,0,0,0.06)` |
| `--shadow-md` | `0 4px 0 rgba(0,0,0,0.08)` |
| `--shadow-lg` | `0 8px 0 rgba(0,0,0,0.10)` |
| `--radius-sm` | `8px` |
| `--radius-md` | `16px` |
| `--radius-lg` | `24px` |
| `--radius-full` | `9999px` |
| `--font-heading` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 800` |
| `--font-body` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 500` |
| `--font-mono` | `"JetBrains Mono", "SF Mono", monospace` |
| `--transition` | `250ms cubic-bezier(0.34, 1.56, 0.64, 1)` |

**圆角体系**：全大圆角（16-24px），按钮全圆
**布局**：居中对齐为主、单列竖排、大按钮大图标、清晰区域划分
**动效**：弹跳弹簧动效（overshoot spring）、缩放+旋转

**反模式（禁止项）**：
- ❌ 复杂材质/纹理
- ❌ 小字密集排版（min 16px）
- ❌ 黑暗压抑配色
- ❌ 过细线条（min 2px）
- ❌ 无阴影（需要实体感）

---

### 4. `editorial-publication` — 编辑出版

**匹配**：叙事 / 视觉小说 / 互动剧情 / 侦探解谜 / 历史
**风格关键词**：Editorial Grid, magazine layout, serif titles, generous whitespace, paper texture

| 设计令牌 | 值 |
|---------|-----|
| `--bg` | `#FAF8F5` (米白纸色) |
| `--bg-card` | `#FFFFFF` |
| `--bg-muted` | `#F3EFE9` |
| `--fg` | `#1A1714` (深墨) |
| `--fg-muted` | `#6B6560` |
| `--accent` | `#C41E3A` (朱红) |
| `--accent-2` | `#8B7355` (金棕) |
| `--border` | `#E5E0D8` |
| `--shadow-sm` | `none` |
| `--shadow-md` | `0 1px 2px rgba(26,23,20,0.04)` |
| `--shadow-lg` | `0 2px 8px rgba(26,23,20,0.06)` |
| `--radius-sm` | `0px` |
| `--radius-md` | `2px` |
| `--radius-lg` | `4px` |
| `--radius-full` | `2px` |
| `--font-heading` | `"Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", serif; weight 700` |
| `--font-body` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 400` |
| `--font-mono` | `"JetBrains Mono", "SF Mono", monospace` |
| `--transition` | `200ms ease` |

**圆角体系**：极小圆角（0-4px），接近直角
**布局**：不对称大幅留白、纵栏分割、文字主导
**动效**：翻页感过渡、滚动驱动文字揭示；禁止弹跳/缩放

**反模式（禁止项）**：
- ❌ 毛玻璃效果
- ❌ 霓虹色
- ❌ 过多图标
- ❌ emoji
- ❌ 动画泛滥
- ❌ 暗色模式（破坏纸质感）

---

### 5. `glassmorphism` — 玻璃质感

**匹配**：开放世界 / 现代RPG / 科技 / visionOS 风格
**风格关键词**：Glassmorphism, frosted glass, layered depth, translucent, vibrant background

| 设计令牌 | 值 |
|---------|-----|
| `--bg` | `#0A0E1A` (深蓝黑底) |
| `--bg-card` | `rgba(255,255,255,0.06)` |
| `--bg-card-hover` | `rgba(255,255,255,0.10)` |
| `--bg-muted` | `rgba(255,255,255,0.03)` |
| `--fg` | `#F0F4FF` |
| `--fg-muted` | `#8899BB` |
| `--accent` | `#6C8CFF` (冰蓝) |
| `--accent-2` | `#C084FC` (淡紫) |
| `--border` | `rgba(255,255,255,0.10)` |
| `--border-glow` | `rgba(108,140,255,0.25)` |
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.2)` |
| `--shadow-md` | `0 8px 32px rgba(0,0,0,0.3)` |
| `--shadow-lg` | `0 16px 64px rgba(0,0,0,0.4)` |
| `--radius-sm` | `8px` |
| `--radius-md` | `16px` |
| `--radius-lg` | `24px` |
| `--radius-full` | `9999px` |
| `--font-heading` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 600` |
| `--font-body` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 400` |
| `--font-mono` | `"JetBrains Mono", "SF Mono", monospace` |
| `--transition` | `300ms cubic-bezier(0.32, 0.72, 0, 1)` |

**玻璃核心 CSS**：
```css
.glass-card {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-md);
}
```

**圆角体系**：大圆角（16-24px）
**布局**：浮动面板层叠、Bento 网格、半透明卡片、多 Z 轴深度
**动效**：弹性过渡 + 景深感

**反模式（禁止项）**：
- ❌ 白色/亮色背景（破坏玻璃通透感）
- ❌ 直角（必须有圆角）
- ❌ 高透明度卡片（>0.25 opacity 背景会糊）
- ❌ 低对比度文字（至少 4.5:1）
- ❌ 忽略 backdrop-filter 回退方案

---

### 6. `minimal-editorial` — 极简编辑

**匹配**：解谜 / 益智 / 叙事 / 休闲
**风格关键词**：Minimalism & Swiss Style, clean, spacious, high contrast, grid-based, essential

| 设计令牌 | 值 |
|---------|-----|
| `--bg` | `#F9F8F6` (暖白) |
| `--bg-card` | `#FFFFFF` |
| `--bg-muted` | `#F3F2F0` |
| `--fg` | `#111111` |
| `--fg-muted` | `#666666` |
| `--accent` | `#2B2B2B` (炭黑) |
| `--accent-2` | `#E8D5B7` (柔和米黄点缀) |
| `--border` | `#EAEAEA` |
| `--shadow-sm` | `none` |
| `--shadow-md` | `none` |
| `--shadow-lg` | `none` |
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |
| `--radius-full` | `8px` |
| `--font-heading` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 600` |
| `--font-body` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 400` |
| `--font-mono` | `"JetBrains Mono", "SF Mono", monospace` |
| `--transition` | `200ms ease` |

**圆角体系**：小圆角（8-12px）、少量 4px 锐角
**布局**：大量留白（py-24+）、不对称 Bento 网格、文字主导、正文限宽 65ch
**动效**：静默淡入（fade-up 12px + opacity，600ms）；禁止弹跳

**反模式（禁止项）**：
- ❌ 渐变背景
- ❌ 霓虹色
- ❌ 毛玻璃
- ❌ Inter / Roboto 字体
- ❌ emoji
- ❌ 重阴影

---

### 7. `industrial-brutalist` — 工业粗野

**匹配**：科幻 / 赛博朋克 / 机甲 / 军事 / 战术
**风格关键词**：Brutalism, raw, stark, high contrast, monospace, visible grid, sharp corners

| 设计令牌 | 值 |
|---------|-----|
| `--bg` | `#0A0A0A` (碳黑) |
| `--bg-card` | `#141414` |
| `--bg-muted` | `#1A1A1A` |
| `--fg` | `#EAEAEA` (白磷) |
| `--fg-muted` | `#888888` |
| `--accent` | `#E61919` (警示红) |
| `--accent-2` | `#4AF626` (终端绿) |
| `--border` | `#333333` |
| `--shadow-sm` | `none` |
| `--shadow-md` | `none` |
| `--shadow-lg` | `none` |
| `--radius-sm` | `0px` |
| `--radius-md` | `0px` |
| `--radius-lg` | `0px` |
| `--radius-full` | `0px` |
| `--font-heading` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 900; text-transform: uppercase` |
| `--font-body` | `"PingFang SC", "Microsoft YaHei", sans-serif; weight 400` |
| `--font-mono` | `"JetBrains Mono", "SF Mono", monospace` |
| `--transition` | `0s` (instant) |

**圆角体系**：**禁止圆角**。全部 90° 直角。
**布局**：严格 CSS Grid、可见粗分隔线（2px solid）、双模密度
**动效**：无动画或硬切；禁止淡入/平滑过渡

**反模式（禁止项）**：
- ❌ 圆角（任何值）
- ❌ 渐变
- ❌ 毛玻璃
- ❌ 软阴影
- ❌ emoji
- ❌ 平滑过渡动画

---

### 8. `pixel-retro` — 像素复古

**匹配**：像素艺术 / 复古 / 2D动作 / 平台跳跃
**风格关键词**：Retro-Futurism, pixel art, CRT scanlines, 8-bit aesthetic, neon glow, monospace

| 设计令牌 | 值 |
|---------|-----|
| `--bg` | `#0D0D1A` (深墨蓝) |
| `--bg-card` | `#151530` |
| `--bg-muted` | `#1A1A35` |
| `--fg` | `#E0E8F0` |
| `--fg-muted` | `#8090A0` |
| `--accent` | `#4AF626` (像素绿) |
| `--accent-2` | `#FFB000` (金橙) |
| `--accent-3` | `#FF6B9D` (品红) |
| `--border` | `#2A2A4A` |
| `--shadow-sm` | `4px 4px 0 #000000` (像素偏移阴影) |
| `--shadow-md` | `6px 6px 0 #000000` |
| `--shadow-lg` | `8px 8px 0 #000000` |
| `--radius-sm` | `0px` |
| `--radius-md` | `0px` |
| `--radius-lg` | `0px` |
| `--radius-full` | `0px` |
| `--font-heading` | `"Press Start 2P", "Zpix", "PixelMplus12", monospace; weight 400` |
| `--font-body` | `"Zpix", "PixelMplus12", "PingFang SC", monospace; weight 400` |
| `--font-mono` | `"JetBrains Mono", "SF Mono", monospace` |
| `--transition` | `100ms step-end` |

**像素阴影体系**：
```css
.pixel-card {
  box-shadow: 6px 6px 0 #000000;
  border: 2px solid var(--accent);
  image-rendering: pixelated;
}
```

**圆角体系**：**禁止圆角**。全部直角，像素级精确。
**布局**：网格对齐 8px 倍数、像素完美、CRT 扫描线叠加（可选）
**动效**：step-end / frames() 逐帧动画；禁止平滑过渡

**反模式（禁止项）**：
- ❌ 圆角（任何值）
- ❌ 渐变
- ❌ 抗锯齿文字阴影
- ❌ 透明度/半透明
- ❌ 弹性/缓动动画
- ❌ 矢量图标（需像素图标）

---

## 全局 CSS 基线与 UX 准则

以下规则在所有 8 套设计系统中统一执行（蒸馏自 ui-ux-pro-max 的 99 条 UX 准则和 Accessibility 规范）。

### 排版层级

```
h1 (封面标题): 3rem~5rem, weight 700-900, letter-spacing -0.02em
h2 (章标题): 2rem~3rem, weight 700, 带编号
h3 (节标题): 1.25rem~1.75rem, weight 600
h4 (子节): 1rem~1.25rem, weight 600
正文: 1rem (16px min), line-height 1.75, max-width 72ch
小字/标注: 0.875rem, line-height 1.6
```

### 可访问性基线

| 规则 | 要求 |
|------|------|
| 正文对比度 | ≥ 4.5:1 (WCAG AA) |
| 大标题对比度 | ≥ 3:1 |
| 最小字号 | 16px（正文） |
| 焦点可见 | `:focus-visible` 3px 外环 |
| 减少动效 | `@media (prefers-reduced-motion)` 禁用所有动画 |
| 可打印 | `@media print` 隐藏阴影、保留分页符、调整页边距 |

### 通用反模式（所有主题必须避免）

- ❌ 仅用颜色传达信息（需补充图标/文字）
- ❌ 无 hover 状态的交互元素
- ❌ 无 `cursor: pointer` 的可点击元素
- ❌ 低于 16px 的正文字号
- ❌ 无 `alt` 属性的图片（如有）

### 页面结构

```
┌──────────────────────────────────────────────────────┐
│                    COVER（封面）                       │
│  项目名 / 副标题 / 版本日期 / 团队 / 汇报对象标签       │
├──────────────────────────────────────────────────────┤
│                    TOC（目录）                         │
│  自动生成锚点链接的编号列表                             │
├──────────────────────────────────────────────────────┤
│  一、项目概述                                         │
│  ├─ 设计目标 / 核心循环 / 系统结构图                    │
├──────────────────────────────────────────────────────┤
│  二、系统规则（如有策划案）                              │
│  ├─ 核心规则 / 流程说明 / 边界情况                      │
├──────────────────────────────────────────────────────┤
│  三、数值框架（如有策划案中的数值部分）                    │
│  ├─ 成长曲线 / 投放节奏 / 经济模型（仅当有具体数据时）     │
├──────────────────────────────────────────────────────┤
│  四、UI/UX 设计（如有原型图）                           │
│  ├─ 界面清单 / 交互流程图 / 各界面线框图                 │
├──────────────────────────────────────────────────────┤
│  五、资源需求与排期（如有资源清单）                       │
│  ├─ 美术/音频/特效/其他资源统计表 + 排期时间线            │
├──────────────────────────────────────────────────────┤
│  六、风险与扩展方向                                     │
│  ├─ 风险分析 / 扩展方向 / 开放问题                       │
├──────────────────────────────────────────────────────┤
│  附录：版本历史 / 参考来源                               │
└──────────────────────────────────────────────────────┘
```

**章节显示规则**：仅当输入材料中包含对应章节内容时才渲染该章节。

### 表格规范

- 斑马纹（alternating row colors，2-5% 背景色差异）
- 圆角（跟随主题 `--radius-md`）
- 无竖线分割
- 表头 sticky（`position: sticky; top: 0`）
- 数字列右对齐
- P0/P1/P2 优先级用彩色圆点徽章（`●` P0 红 / `●` P1 橙 / `●` P2 灰）

### CSS 变量注入规则

在 HTML `<style>` 中**必须**包含完整的 `:root` 变量块，将选定设计系统的所有令牌声明为 CSS 自定义属性。

---

## 特殊内容渲染

### 线框图

```
<pre class="wireframe">
  {保留原始 ASCII 线框图，等宽字体，左强调边框}
</pre>
```

### 流程图

```
<div class="flow-steps">
  <span class="step">步骤 A</span>
  <span class="arrow">→</span>
  <span class="step">步骤 B</span>
  <span class="arrow">→</span>
  <span class="step">步骤 C</span>
</div>
```

### 状态机/复杂分支

使用缩进列表 + 树形符号：
```
- 状态A
  ├─ 条件1 → 状态B
  ├─ 条件2 → 状态C
  └─ 条件3 → 状态D
```

---

## 预交付检查清单（Pre-Delivery Checklist）

生成 HTML 后自检以下项：

```
☐ 所有 CSS 变量在 :root 中声明完整
☐ 无外部资源引用（CDN / Google Fonts / 外部图片）
☐ @media print 样式存在且隐藏阴影+调整页边距
☐ @media (prefers-reduced-motion) 禁用动画
☐ 正文对比度 ≥ 4.5:1
☐ 最小正文字号 ≥ 16px
☐ 所有表格使用斑马纹
☐ 无 emoji 作为图标（除非 bright-cartoon / pixel-retro 主题）
☐ cursor:pointer 在所有可点击元素上
☐ hover 状态有 smooth transition
☐ 封面包含：项目名 + 版本号 + 日期
☐ 目录锚点链接有效
☐ 无编造内容（缺材料章节标注"待补充"或跳过）
☐ 响应式：375px / 768px / 1024px / 1440px 均可用
```

---

## 输出格式

### 文件写入

使用 `write_file` 将完整 HTML 写入当前工作目录。

### 完成后输出

```
✅ HTML 汇报文档已生成：`{文件名}`

🎨 设计系统：{主题名}
   ├─ 配色：{主色} + {强调色}
   ├─ 字体：{标题字体} / {正文字体}
   ├─ 圆角：{圆角体系描述}
   └─ 动效：{动效描述}

📄 包含章节：
  - 封面
  - 目录
  - {实际包含的章节列表}

📐 排版：正文 16px / 行高 1.75 / 行宽 72ch

🔍 反模式检查：已避免 {列出本次应用的反模式}

💡 浏览器打开：open {文件名} (macOS) / start {文件名} (Windows)
🖨️ 打印：Ctrl+P / Cmd+P（已优化打印样式）
```

---

## 约束

1. **一次性输出**：不分步交互，直接生成完整 HTML
2. 所有输出用中文，术语保留英文
3. HTML 必须是**自包含的单文件**，无外部资源引用
4. 不编造内容：输入材料中没有的内容不填充，对应章节不出现或标注"待补充"
5. 封面必须包含：项目名、版本号、日期
6. 目录自动生成锚点链接，与章节标题对应
7. 金额/数值保持原样，不替换为占位符
8. ASCII 线框图保留原样放入 `<pre>` 标签，不重新绘制
9. **设计令牌必须全部注入 `:root` CSS 变量块**，不遗漏任何一个变量
