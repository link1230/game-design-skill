const PptxGenJS = require("pptxgenjs");
const path = require("path");
const os = require("os");

const BG      = "FFFBF5";
const HEADING = "2D2418";
const BODY    = "2D2418";
const ACCENT  = "C4956A";
const MUTED   = "7A6E5E";
const ACCENT_LT = "F5F0E8";

const pptx = new PptxGenJS();
pptx.defineLayout({ name: "WIDE", width: "13.333", height: "7.5" });
pptx.layout = "WIDE";

const MARGIN = 1.0;

function addTitleSlide(title, subtitle, date = "v1.0", team = "游戏设计部") {
  const slide = pptx.addSlide();
  slide.background = { fill: BG };
  slide.addShape(pptx.ShapeType.rect, {
    x: 5.5, y: 2.8, w: 2.3, h: 0.04, fill: { color: ACCENT }
  });
  slide.addText(title, {
    x: 1.5, y: 3.2, w: 10.3, h: 1.6,
    fontSize: 44, bold: true, color: HEADING, align: "center",
    fontFace: "Microsoft YaHei"
  });
  slide.addText(subtitle, {
    x: 1.5, y: 4.7, w: 10.3, h: 0.8,
    fontSize: 24, color: MUTED, align: "center",
    fontFace: "Microsoft YaHei"
  });
  slide.addText(`${date}   |   ${team}`, {
    x: 1.5, y: 6.4, w: 10.3, h: 0.6,
    fontSize: 14, color: MUTED, align: "center",
    fontFace: "Microsoft YaHei"
  });
}

function addBulletSlide(title, bullets) {
  const slide = pptx.addSlide();
  slide.background = { fill: BG };
  slide.addText(title, {
    x: MARGIN, y: 0.5, w: 11.3, h: 0.9,
    fontSize: 32, bold: true, color: ACCENT, fontFace: "Microsoft YaHei"
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: MARGIN, y: 1.35, w: 3.5, h: 0.03, fill: { color: ACCENT }
  });
  const items = bullets.map((b, i) => ({
    text: `•  ${b}`,
    options: {
      fontSize: 18, color: BODY, fontFace: "Microsoft YaHei",
      bullet: false, breakType: i > 0 ? "none" : undefined,
      paraSpaceAfter: 14, lineSpacingMultiple: 1.5
    }
  }));
  slide.addText(items, {
    x: MARGIN + 0.3, y: 1.8, w: 10.7, h: 5.0,
    valign: "top", fontFace: "Microsoft YaHei"
  });
}

function addTableSlide(title, headers, rows) {
  const slide = pptx.addSlide();
  slide.background = { fill: BG };
  slide.addText(title, {
    x: MARGIN, y: 0.5, w: 11.3, h: 0.9,
    fontSize: 32, bold: true, color: ACCENT, fontFace: "Microsoft YaHei"
  });
  slide.addShape(pptx.ShapeType.rect, {
    x: MARGIN, y: 1.35, w: 3.5, h: 0.03, fill: { color: ACCENT }
  });

  const tblData = [
    headers.map(h => ({ text: h, options: { bold: true, fontSize: 13, color: HEADING, fill: { color: ACCENT_LT }, fontFace: "Microsoft YaHei" } })),
    ...rows.map((row, i) =>
      row.map(val => ({
        text: String(val),
        options: {
          fontSize: 12, color: BODY, fontFace: "Microsoft YaHei",
          fill: { color: i % 2 === 1 ? "FAF6F0" : "FFFFFF" }
        }
      }))
    )
  ];

  slide.addTable(tblData, {
    x: MARGIN, y: 1.9, w: 11.3,
    colW: [0.7, 2.6, 0.9, 7.1],
    rowH: [0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45],
    border: { type: "solid", pt: 0.5, color: "E8DDD0" },
    fontFace: "Microsoft YaHei"
  });
}

// ======== 7 Slides ========

addTitleSlide(
  "装备合成系统 · 龙鳞工坊",
  "收集材料 → 合成装备 → 强化成长 → 挑战更强敌人",
  "v1.0 · 2025-07-16", "游戏设计部"
);

addBulletSlide("项目概述", [
  "核心循环：战斗/探索 → 收集龙鳞·龙心·矿石 → 合成工坊合成 → 强化提升 → 挑战更强敌人 → 获得稀有材料",
  "目标受众：18-35岁，喜欢RPG成长感+收集养成，偏好奇幻题材，手机/PC双端",
  "差异化定位：配方确定产物类型（龙鳞×5+龙心×1→龙鳞剑），属性580~650随机——兼顾确定性和惊喜感",
  "竞品对比：原神圣遗物随机过强 vs 怪物猎人锻造过于确定 → 本作取中，保留'手造'仪式感",
  "稀有材料可锁定1条属性范围，提高下限避免极品变废品",
]);

addBulletSlide("系统设计", [
  "战斗系统：碰撞盒检测+韧性条硬直机制，破韧硬直2s，0.2s弹反窗口返还50%伤害，火>草>水>火元素克制",
  "养成体系：武器Lv.80、防具Lv.60、饰品Lv.50封顶，费用阶梯指数增长 Cost = 100 × 1.15^Level",
  "合成工坊核心流程：预览区 → 投放材料×3 → 查看预期属性范围 → 确认合成，材料不足按钮灰态",
  "装备属性随机：攻击力580~650 / 暴击率8~15% / 暴伤20~30%，稀有材料可锁定1条属性下限",
  "辅助系统：合成图鉴自动记录已解锁配方，筛选排序快速查找，容量50/50时底栏变红提醒",
]);

addTableSlide("交互与UI设计 — 界面清单（9/9 对应原型图）",
  ["序号", "界面名称", "优先级", "关键说明"],
  [
    ["01", "装备背包主界面", "P0", "3列网格 + Tab栏 + 底栏合成/分解入口"],
    ["02", "装备详情面板", "P0", "3D模型可旋转 + 主属性进度条 + 副属性列表"],
    ["03", "合成入口·配方列表", "P0", "搜索框 + 分类Tab + 配方卡片（✓充足/⚠不足/🔒未解锁）"],
    ["04", "合成工坊", "P0", "预览区 + 3材料槽位 + 预期属性范围 + 开始合成按钮"],
    ["05", "合成结果弹窗", "P0", "暗色遮罩 + 光柱升起动画 + 4属性 + 查看详情/装备按钮"],
    ["06", "装备强化界面", "P1", "属性对比（当前→强化后）+ 强化石×12 + 金币×8000 + 成功率100%"],
    ["07", "材料分解界面", "P1", "多选checkbox + 预计获得汇总 + 分解确认按钮"],
    ["08", "合成图鉴", "P2", "进度 8/24 + 已解锁/未解锁Tab + 解锁条件提示"],
    ["09", "筛选·排序弹窗", "P2", "类型/星级checkbox + 排序radio + 重置/确定"],
  ]
);

addBulletSlide("数值设计", [
  "伤害公式：最终伤害 = (攻击力 × 技能倍率 − 防御力 × 0.6) × (1 + 暴击伤害加成) × 元素克制系数",
  "生存模型：EHP = HP ÷ (1 − 减伤率)，普通怪 TTK 3~8s，BOSS TTK 60~120s",
  "经济系统：金币（战斗掉落+分解）→ 合成/强化，钻石（充值+成就）→ 扩充背包，合成精华（分解高品质）→ 锁定属性",
  "强化消耗：武器 Cost=100×1.15^Level，防具 Cost=80×1.12^Level，饰品 Cost=60×1.10^Level",
  "敌人成长：1-5波 1.0× → 6-10波 1.5× 闪避格挡 → 16-20波 4.0× AOE狂暴 → 21-25波 6.5× 双形态元素免疫",
]);

addBulletSlide("美术需求", [
  "视觉风格：高奢柔软 Premium Soft — 暖奶油底 #FFFBF5 + 深咖啡 #2D2418 + 铜金 #C4956A，双重边框嵌套卡片",
  "主角动画7组：Idle循环60帧 / Run 24帧三段 / Jump 1s / 轻攻击1-2-3各0.4s / 重攻击 1s蓄力+释放 / Hit 0.33s / Death 1.33s",
  "特效清单 P0：合成光柱金色800ms + 星级点亮 stagger 150ms + 材料放入绿色脉冲扩散",
  "特效清单 P1-P2：强化成功金色上扬飞字 + 分解金粉飞出 + 按钮 hover 上浮2px + God Rays 斜射光柱",
  "场景分层：前景UI粒子 1.0× / 中景可玩区域 1.0× 1024px tile / 远景1建筑山体 0.5× 2048px / 远景2天空云 0.2×",
]);

addBulletSlide("总结与下一步", [
  "核心优势：材料确定产物类型提供目标感，属性范围随机提供每次合成的惊喜——玩家享受'打造'而非纯抽奖",
  "风险缓解：属性范围过宽 → 稀有材料锁定下限；背包容量50 → 监控使用率；暗色调对比度 ≥ 4.5:1",
  "扩展方向：PVP排行榜展示最优装备、赛季限定配方、公会材料交易所、装备外观幻化系统",
  "下一步：④ game-asset-requirements 梳理美术/音频/特效资源清单 → ⑤ 整合为 HTML 汇报文档交付",
]);

const outPath = "C:/Users/Administrator/Desktop/装备合成系统_设计汇报_PPT_test.pptx";
pptx.writeFile({ fileName: outPath }).then(() => {
  console.log(`✅ PPT 已保存: ${outPath}`);
  console.log(`📊 7 页 | 📐 16:9 | 🎨 premium-soft`);
});
