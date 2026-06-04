# 游戏设计 Skill Pack

Reasonix Code 游戏设计三件套——从系统策划到原型图到资源需求，一站式输出。

## 包含的 Skill

| Skill | 描述 | 用途 |
|-------|------|------|
| `game-system-design` | 交互式分步游戏系统策划 | 拆解系统→设计方案→数值建模→输出正式策划案 |
| `game-ui-prototype` | 游戏原型图设计 | 根据策划案+参考游戏，产出文字线框图和交互流程 |
| `game-asset-requirements` | 游戏资源需求整理 | 根据策划案+原型图，输出美术/音频/特效资源清单和排期 |

## 工作流

```
game-system-design  ──→  game-ui-prototype  ──→  game-asset-requirements
   (系统策划案)            (原型图设计)              (资源需求清单)
```

## 安装方式

### 方式一：手动复制（推荐）

1. 将本目录下的三个 `.md` 文件复制到你项目的 `.reasonix/skills/` 目录中：

```bash
cp game-*-design.md game-asset-requirements.md path/to/your/project/.reasonix/skills/
```

如果 `.reasonix/skills/` 目录不存在，先创建它：

```bash
mkdir -p path/to/your/project/.reasonix/skills/
```

2. 重启 Reasonix Code（执行 `/new` 或退出重进），Skill 就会出现在索引中。

### 方式二：用 `install_skill` 逐一手动安装

在你的 Reasonix Code 会话中，对每个 skill 依次执行：

```
/install game-system-design
<将 game-system-design.md 的完整内容粘贴进去>
/install game-ui-prototype
<将 game-ui-prototype.md 的完整内容粘贴进去>
/install game-asset-requirements
<将 game-asset-requirements.md 的完整内容粘贴进去>
```

### 方式三：用 `run_command` 复制（如果你有终端权限）

```bash
cd your-project
for f in /path/to/game-design-skill-pack/*.md; do
  cp "$f" .reasonix/skills/
done
```

## 使用方式

安装完成后，在 Reasonix Code 会话中调用：

```
@agent /skill game-system-design game系统名称: "XX系统", 目标游戏: "XX游戏 版本"
@agent /skill game-ui-prototype 系统策划案: "...", 目标游戏参考: "..."
@agent /skill game-asset-requirements 策划案: "...", 原型图: "..."
```

### 推荐顺序

```
Step 1: /skill game-system-design   → 产出系统策划案
Step 2: /skill game-ui-prototype    → 以策划案为输入，产出原型图
Step 3: /skill game-asset-requirements → 以策划案+原型图为输入，产出资源清单
```

## 文件说明

```
game-design-skill-pack/
├── README.md                         ← 本文件
├── game-system-design.md             ← 系统策划 Skill
├── game-ui-prototype.md              ← 原型图设计 Skill
└── game-asset-requirements.md        ← 资源需求 Skill
```

## 前置要求

- **平台**: Reasonix Code（任何模型版本）
- **安装方式**: 文件复制到 `.reasonix/skills/` 或通过 `install_skill` 命令
- **技能依赖**:
  - `game-system-design`、`game-asset-requirements`: 无需额外安装
  - `game-ui-prototype`: ⚠️ 需要安装 draw.io MCP 服务器（见下方说明）

### 安装 draw.io MCP（game-ui-prototype 必需）

`game-ui-prototype` 的 **Step 6** 会调用 draw.io 生成原型图文件，需要先安装 draw.io MCP 服务器。

在 Reasonix Code 中让助手执行：

```
add_mcp_server name="drawio-mcp" transport="stdio" command="npx" args=["-y","@drawio/mcp"]
```

或者手动在 Reasonix Code 配置文件的 `mcpServers` 中添加：

```json
{
  "mcpServers": {
    "drawio-mcp": {
      "command": "npx",
      "args": ["-y", "@drawio/mcp"]
    }
  }
}
```

> **注意**：draw.io MCP 为 `game-ui-prototype` 的 Step 6 专用。如果不需要生成 draw.io 文件（在 Step 5 的确认中选择"跳过"），可以不安装此依赖。
