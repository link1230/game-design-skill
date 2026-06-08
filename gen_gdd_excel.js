const ExcelJS = require("exceljs");
const path = require("path");
const os = require("os");

const desktop = path.join(os.homedir(), "Desktop");
const outPath = path.join(desktop, "装备合成系统_正式策划案_GDD_test.xlsx");

const wb = new ExcelJS.Workbook();
wb.creator = "Reasonix Code";
wb.created = new Date();

// ==================== Style Presets ====================
const h1 = { name: "Microsoft YaHei", size: 18, bold: true, color: { argb: "FF2D2418" } };
const h2 = { name: "Microsoft YaHei", size: 14, bold: true, color: { argb: "FF2D2418" } };
const h3 = { name: "Microsoft YaHei", size: 11, bold: true, color: { argb: "FFC4956A" } };
const body = { name: "Microsoft YaHei", size: 11, color: { argb: "FF2D2418" } };
const small = { name: "Microsoft YaHei", size: 10, color: { argb: "FF7A6E5E" } };
const mono = { name: "JetBrains Mono", size: 11, bold: true, color: { argb: "FF2D2418" } };

const fills = {
  header:    { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFFBF5" } },
  accent:    { type: "pattern", pattern: "solid", fgColor: { argb: "FFC4956A" } },
  accentLt:  { type: "pattern", pattern: "solid", fgColor: { argb: "FFF5F0E8" } },
  p0:        { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFE0E0" } },
  p1:        { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF3E0" } },
  p2:        { type: "pattern", pattern: "solid", fgColor: { argb: "FFF5F5F5" } },
  white:     { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFFFFF" } },
  dark:      { type: "pattern", pattern: "solid", fgColor: { argb: "FF1A1714" } },
  greenBg:   { type: "pattern", pattern: "solid", fgColor: { argb: "FFE8F5E9" } },
  yellowBg:  { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF9C4" } },
};

const border = {
  top:    { style: "thin", color: { argb: "FFE8DDD0" } },
  left:   { style: "thin", color: { argb: "FFE8DDD0" } },
  bottom: { style: "thin", color: { argb: "FFE8DDD0" } },
  right:  { style: "thin", color: { argb: "FFE8DDD0" } },
};

function hdrRow(ws, rowNum, values, fill = fills.header) {
  values.forEach((v, i) => {
    const cell = ws.getCell(rowNum, i + 1);
    cell.value = v;
    cell.font = { ...h3, color: { argb: "FF2D2418" } };
    cell.fill = fill;
    cell.border = border;
    cell.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
  });
}

function dataRow(ws, rowNum, values) {
  values.forEach((v, i) => {
    const cell = ws.getCell(rowNum, i + 1);
    cell.value = v;
    cell.font = body;
    cell.border = border;
    cell.alignment = { vertical: "top", wrapText: true };
  });
}

function titleRow(ws, rowNum, text, font = h1, fill = fills.header) {
  ws.mergeCells(rowNum, 1, rowNum, 8);
  const cell = ws.getCell(rowNum, 1);
  cell.value = text;
  cell.font = font;
  cell.fill = fill;
  cell.alignment = { vertical: "middle" };
  ws.getRow(rowNum).height = 32;
}

function sectionRow(ws, rowNum, text) {
  ws.mergeCells(rowNum, 1, rowNum, 8);
  const cell = ws.getCell(rowNum, 1);
  cell.value = text;
  cell.font = h2;
  cell.alignment = { vertical: "middle" };
  ws.getRow(rowNum).height = 24;
}

function prioFill(val) {
  return val === "P0" ? fills.p0 : val === "P1" ? fills.p1 : fills.p2;
}

// ============================================================
// Sheet 0: 文档概述
// ============================================================
{
  const ws = wb.addWorksheet("0-文档概述");
  ws.columns = [
    { key: "A", width: 22 }, { key: "B", width: 65 }, { key: "C", width: 15 }, { key: "D", width: 15 },
  ];

  let r = 1;
  titleRow(ws, r++, "§0 文档概述");
  r++; // blank
  sectionRow(ws, r++, "0.1 游戏名称");
  ws.getCell(r, 1).value = "游戏名称"; ws.getCell(r, 1).font = h3; ws.getCell(r, 1).fill = fills.accentLt;
  ws.getCell(r, 2).value = "装备合成系统（暂定名：龙鳞工坊）"; ws.getCell(r, 2).font = body;
  ws.mergeCells(r, 2, r, 3); r++;
  r++; // blank

  sectionRow(ws, r++, "0.2 一句话介绍 (Elevator Pitch)");
  ws.getCell(r, 1).value = "一句话介绍";
  ws.getCell(r, 1).font = h3; ws.getCell(r, 1).fill = fills.accentLt;
  ws.getCell(r, 2).value = "收集材料→合成装备→强化成长→挑战更强敌人的核心循环，让每一件装备都有\"手造\"的价值感。";
  ws.getCell(r, 2).font = { ...body, size: 12, italic: true };
  ws.mergeCells(r, 2, r, 4);
  ws.getRow(r).height = 30; r++;
  r++;

  sectionRow(ws, r++, "0.3 核心循环 (Core Loop)");
  ws.getCell(r, 1).value = "核心循环";
  ws.getCell(r, 1).font = h3; ws.getCell(r, 1).fill = fills.accentLt;
  ws.getCell(r, 2).value = "战斗/探索 → 收集材料(龙鳞/龙心/矿石...) → 合成工坊合成装备 → 强化提升 → 挑战更强敌人 → 获得稀有材料 → 合成更高级装备";
  ws.getCell(r, 2).font = { ...body, size: 12 };
  ws.mergeCells(r, 2, r, 4);
  ws.getRow(r).height = 36; r++;
  r++;

  sectionRow(ws, r++, "0.4 目标受众与市场定位");
  r++;
  hdrRow(ws, r++, ["维度", "描述", "", ""]);
  [
    ["目标玩家画像", "18-35岁，喜欢RPG成长感+收集养成，偏好奇幻题材，手机/PC双端"],
    ["市场定位", "区别于\"一键强化\"的数值堆积，强调材料收集→合成→属性随机的\"手造\"仪式感"],
    ["竞品分析", "原神圣遗物（随机性太强）/ 怪物猎人装备锻造（确定性太强）→ 本作取中：材料确定产物类型 + 属性范围随机"],
  ].forEach(row => {
    dataRow(ws, r, row);
    ws.mergeCells(r, 2, r, 4);
    r++;
  });
}

// ============================================================
// Sheet 1: 系统设计
// ============================================================
{
  const ws = wb.addWorksheet("1-系统设计");
  ws.columns = [
    { key: "A", width: 18 }, { key: "B", width: 14 }, { key: "C", width: 16 },
    { key: "D", width: 58 }, { key: "E", width: 20 },
  ];

  let r = 1;
  titleRow(ws, r++, "§1 系统设计");
  r++;
  hdrRow(ws, r++, ["章节", "子系统", "条目", "内容", "关联界面(原型图)"]);

  const rows = [
    ["§1.1\n核心玩法", "操作机制", "移动/攻击/跳跃/交互", "触屏虚拟摇杆+按钮；手柄左摇杆移动 / A攻击 / B跳跃 / X交互", "01 装备背包"],
    ["", "战斗系统", "受击判定", "碰撞盒检测，前摇帧不可打断，后摇帧可闪避取消", "战斗HUD"],
    ["", "", "硬直/韧性", "每个敌人有韧性条，累积伤害破韧后进入硬直 2s", "战斗HUD"],
    ["", "", "格挡/弹反", "精确时机格挡（0.2s 窗口）触发弹反，返还50%伤害", "战斗HUD"],
    ["", "关卡机制", "地形交互", "可攀爬岩壁（体力消耗）、可破坏木箱（掉落材料）", "-"],
    ["", "", "陷阱/机关", "地刺（周期性弹出）、毒雾区（持续掉血）；压力板开门、火把点燃解锁", "-"],
    ["§1.2\n养成局外", "角色成长", "技能树", "角色 Lv.10 解锁主动技能分支", "角色界面"],
    ["", "", "装备槽位", "Lv.5 / Lv.15 / Lv.30 分别解锁 武器 / 防具 / 饰品槽", "01 装备背包"],
    ["", "装备系统", "武器", "1个/角色，消耗强化石+金币，每级属性+4%，Lv.80 封顶", "06 装备强化"],
    ["", "", "防具", "1个/角色，消耗强化石+金币，每级防御+3%，Lv.60 封顶", "06 装备强化"],
    ["", "", "饰品", "2个/角色，消耗强化石+金币，每级特殊属性+2%，Lv.50 封顶", "06 装备强化"],
    ["", "局内构建", "合成随机性", "配方确定产物类型；属性在范围内随机；稀有材料可锁定1条属性范围", "04 合成工坊"],
    ["§1.3\n辅助系统", "合成图鉴", "记录已解锁配方", "首次合成某配方自动记录", "08 合成图鉴"],
    ["", "筛选排序", "快速查找装备", "点击筛选按钮弹出弹窗", "09 筛选弹窗"],
    ["", "容量提示", "背包满时提醒", "容量达到 50/50 时底栏变红", "01 装备背包"],
  ];

  rows.forEach(row => { dataRow(ws, r, row); r++; });

  // Zebra striping
  for (let i = 3; i < r; i++) {
    if (i % 2 === 0) {
      for (let c = 1; c <= 5; c++) ws.getCell(i, c).fill = fills.accentLt;
    }
  }
  // Merge repeated section labels
  const merges = [
    [3, 8, 1], [9, 14, 1], [15, 17, 1],
  ];
  merges.forEach(([start, end, col]) => {
    const vals = [];
    for (let i = start; i <= end; i++) {
      vals.push(ws.getCell(i, col).value || "");
    }
    const uniq = [...new Set(vals.filter(Boolean))];
    if (uniq.length === 1) {
      ws.mergeCells(start, col, end, col);
      ws.getCell(start, col).alignment = { horizontal: "center", vertical: "middle", wrapText: true, textRotation: 0 };
    }
  });
  // §1.3 already merged by the loop above
}

// ============================================================
// Sheet 2: 交互与UI设计
// ============================================================
{
  const ws = wb.addWorksheet("2-交互与UI设计");
  ws.columns = [
    { key: "A", width: 6 }, { key: "B", width: 20 }, { key: "C", width: 8 },
    { key: "D", width: 32 }, { key: "E", width: 36 }, { key: "F", width: 22 },
    { key: "G", width: 28 }, { key: "H", width: 16 },
  ];

  let r = 1;
  titleRow(ws, r++, "§2 交互与UI设计");
  r++;
  sectionRow(ws, r++, "§2.1 界面清单 — 9/9 全部对应原型图 ✓");
  r++;
  hdrRow(ws, r++, ["序号", "界面名称", "优先级", "关键元素", "功能说明", "入口", "状态覆盖", "原型图"]);

  const ui = [
    ["01", "装备背包主界面", "P0", "3列网格 / 卡片 / Tab栏 / 底栏", "浏览所有装备；容量指示；入口枢纽", "主菜单→背包", "默认 / 空 / 满 / 筛选", "Step 3-01"],
    ["02", "装备详情面板", "P0", "3D模型 / 属性列表 / 操作按钮", "查看装备完整属性；强化/分解入口", "01 点击装备", "默认 / 锁定 / 空槽", "Step 3-02"],
    ["03", "合成入口/配方列表", "P0", "搜索框 / 分类Tab / 配方卡片", "展示所有可合成配方及材料需求", "01 合成工坊按钮", "充足 / 不足 / 未解锁", "Step 3-03"],
    ["04", "合成工坊", "P0", "预览区 / 材料槽位×3 / 预期属性 / 合成按钮", "核心合成交互：投放材料→预览→确认", "03 点击配方", "材料未满 / 已满 / 合成中", "Step 3-04"],
    ["05", "合成结果弹窗", "P0", "暗色遮罩 / 武器展示 / 属性 / 双按钮", "合成结果反馈：产物属性展示+操作", "04 合成完成", "成功(高品) / 成功(普通) / 失败", "Step 3-05"],
    ["06", "装备强化界面", "P1", "属性对比 / 消耗材料 / 成功率 / 强化按钮", "消耗资源提升装备等级", "02 强化按钮", "材料充足 / 不足 / 满级", "Step 3-06"],
    ["07", "材料分解界面", "P1", "装备列表+checkbox / 预计获得 / 分解按钮", "分解溢出装备回收材料", "01 分解按钮", "已选 / 未选 / 确认弹窗", "Step 3-07"],
    ["08", "合成图鉴", "P2", "进度条 / 已解锁Tab / 未解锁Tab / 卡片网格", "收集展示：已解锁配方一览", "主菜单→图鉴", "已解锁 / 未解锁 / 空", "Step 3-08"],
    ["09", "筛选/排序弹窗", "P2", "类型checkbox / 星级checkbox / 排序radio", "快速筛选排序装备列表", "01 筛选按钮", "默认 / 已选 / 重置", "Step 3-09"],
  ];

  ui.forEach(row => {
    dataRow(ws, r, row);
    ws.getCell(r, 3).fill = prioFill(row[2]);
    ws.getCell(r, 3).alignment = { horizontal: "center", vertical: "top" };
    ws.getCell(r, 1).alignment = { horizontal: "center", vertical: "top" };
    ws.getRow(r).height = 44;
    r++;
  });

  r += 2;
  sectionRow(ws, r++, "§2.3 交互反馈设计");
  r++;
  hdrRow(ws, r++, ["触发事件", "反馈类型", "视觉/听觉/震动", "强度/时长", "关联界面"]);

  const fb = [
    ["暴击", "视觉 + 震动", "屏幕震动", "2级 8ms", "战斗HUD"],
    ["合成成功", "视觉 + 音效 + 震动", "光柱升起 + ⭐弹入 / Craft_Success / HD震动", "光柱 800ms·stagger 150ms·震动 500ms", "05"],
    ["卡片点击", "视觉", "弹性缩放 0.97 → 1.0", "100ms spring", "01 / 03 / 08"],
    ["按钮 hover", "视觉", "上浮 2px + 阴影加深", "200ms ease", "全局"],
    ["材料放入", "视觉", "绿色脉冲边框闪烁 ×2", "400ms", "04"],
    ["UI 点击", "听觉", "UI_Click", "按下瞬间", "全局"],
    ["强化成功", "听觉 + 震动", "Enhance_Success / HD震动", "震动 300ms", "06"],
    ["分解确认", "听觉 + 震动", "Decompose_Confirm / HD震动", "震动 150ms", "07"],
  ];

  fb.forEach(row => {
    dataRow(ws, r, row);
    ws.getRow(r).height = 28;
    r++;
  });

  // Zebra
  for (let i = 5; i <= 13; i++) {
    if (i % 2 === 1) {
      for (let c = 1; c <= 8; c++) {
        if (!ws.getCell(i, c).fill || ws.getCell(i, c).fill.fgColor.argb === "FFFFFFFF")
          ws.getCell(i, c).fill = fills.accentLt;
      }
    }
  }
}

// ============================================================
// Sheet 3: 数值设计
// ============================================================
{
  const ws = wb.addWorksheet("3-数值设计");
  ws.columns = [
    { key: "A", width: 24 }, { key: "B", width: 36 }, { key: "C", width: 22 },
    { key: "D", width: 18 }, { key: "E", width: 18 }, { key: "F", width: 18 },
  ];

  let r = 1;
  titleRow(ws, r++, "§3 数值设计");
  r++;
  sectionRow(ws, r++, "§3.1 核心战斗公式");
  r++;

  // Formula box
  ws.mergeCells(r, 1, r, 5);
  const fc = ws.getCell(r, 1);
  fc.value = "最终伤害 = (攻击力 × 技能倍率 − 防御力 × 0.6) × (1 + 暴击伤害加成) × 元素克制系数";
  fc.font = mono;
  fc.fill = fills.dark;
  fc.font = { ...mono, color: { argb: "FF4AF626" } };
  fc.alignment = { horizontal: "center", vertical: "middle" };
  ws.getRow(r).height = 36; r++;
  r++;

  hdrRow(ws, r++, ["变量", "说明", "取值范围", "来源", ""]);
  [
    ["攻击力", "角色基础 + 装备加成", "100 ~ 2000", "角色 + 武器"],
    ["技能倍率", "各技能独立倍率", "0.5 ~ 5.0", "技能等级"],
    ["防御力", "敌人属性", "0 ~ 800", "敌人等级"],
    ["暴击伤害加成", "基础 150% + 装备加成", "50% ~ 250%", "武器 / 饰品"],
    ["元素克制系数", "火→草→水→火 循环", "0.5 / 1.0 / 1.5", "属性相克"],
  ].forEach(row => { dataRow(ws, r, row); ws.getRow(r).height = 22; r++; });
  r++;

  // Survival model
  sectionRow(ws, r++, "生存模型");
  r++;
  hdrRow(ws, r++, ["概念", "公式", "说明", "", ""]);
  [
    ["有效生命值 (EHP)", "EHP = HP ÷ (1 − 减伤率)", "减伤率来自防具"],
    ["预期击杀时间 (TTK)", "TTK = EHP(敌) ÷ DPS(玩家)", "普通怪 3~8s · BOSS 60~120s"],
  ].forEach(row => { dataRow(ws, r, row); ws.mergeCells(r, 2, r, 4); ws.getRow(r).height = 22; r++; });
  r += 2;

  // Economy
  sectionRow(ws, r++, "§3.2 经济系统与产销模型");
  r++;
  hdrRow(ws, r++, ["货币", "类型", "获取途径", "主要消耗", ""]);
  [
    ["金币", "软货币", "战斗掉落 · 分解装备 · 每日任务", "合成 · 强化"],
    ["钻石", "硬货币", "充值 · 成就奖励 · 活动", "扩充背包 · 加速合成"],
    ["合成精华", "特殊货币", "分解高品质装备", "锁定属性范围"],
  ].forEach(row => { dataRow(ws, r, row); ws.getRow(r).height = 22; r++; });
  r++;

  hdrRow(ws, r++, ["消耗项", "费用阶梯", "上限", "", ""]);
  [
    ["武器合成", "金币 1,500 ~ 8,000（按星级）", "-"],
    ["武器强化", "Cost = 100 × 1.15 ^ Level", "Lv.80"],
    ["防具强化", "Cost = 80 × 1.12 ^ Level", "Lv.60"],
    ["饰品强化", "Cost = 60 × 1.10 ^ Level", "Lv.50"],
  ].forEach(row => { dataRow(ws, r, row); ws.getRow(r).height = 22; r++; });
  r += 2;

  // Difficulty curve
  sectionRow(ws, r++, "§3.3 节奏与难度控制 — 敌人属性成长曲线");
  r++;
  hdrRow(ws, r++, ["关卡 / 波次", "HP 倍率", "攻击力倍率", "移动速度倍率", "新增行为"]);
  [
    ["1 ~ 5",  "1.0×", "1.0×", "1.0×", "基础攻击"],
    ["6 ~ 10", "1.5×", "1.3×", "1.1×", "闪避 · 格挡"],
    ["11 ~ 15","2.5×", "1.8×", "1.2×", "护盾 · 召唤小怪"],
    ["16 ~ 20","4.0×", "2.5×", "1.3×", "AOE 技能 · 狂暴 (HP<30%)"],
    ["21 ~ 25","6.5×", "3.5×", "1.5×", "双形态 · 元素免疫循环"],
  ].forEach(row => { dataRow(ws, r, row); ws.getRow(r).height = 22;
    // Color gradient: darker rows for harder levels
    if (r >= 23) {
      const alpha = ["FF","FF","F5","F0","EB"][r - 19] || "F5";
      ws.getCell(r, 1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: alpha + "F0E8" } };
    }
    r++;
  });
}

// ============================================================
// Sheet 4: 美术需求
// ============================================================
{
  const ws = wb.addWorksheet("4-美术需求");
  ws.columns = [
    { key: "A", width: 22 }, { key: "B", width: 18 }, { key: "C", width: 44 },
    { key: "D", width: 16 }, { key: "E", width: 16 },
  ];

  let r = 1;
  titleRow(ws, r++, "§4 美术需求");
  r++;
  sectionRow(ws, r++, "§4.1 视觉风格定调");
  r++;

  // Style card - visual
  ws.mergeCells(r, 1, r + 3, 1);
  const sc = ws.getCell(r, 1);
  sc.value = "高奢柔软\nPremium Soft";
  sc.font = { ...h2, size: 22, color: { argb: "FFC4956A" } };
  sc.fill = fills.accentLt;
  sc.alignment = { horizontal: "center", vertical: "middle", wrapText: true };
  ws.getRow(r).height = 28; ws.getRow(r+1).height = 28; ws.getRow(r+2).height = 28; ws.getRow(r+3).height = 28;

  const styleItems = [
    ["整体风格", "奇幻 RPG 风格化渲染"],
    ["UI 风格", "高奢柔软 Premium Soft (8种之一)"],
    ["配色方案", "暖奶油底 #FFFBF5 ＋ 深咖啡 #2D2418 ＋ 铜金 #C4956A"],
    ["字体方案", "标题：无衬线粗体 (700) · 正文：清晰无衬线 (400)"],
  ];
  styleItems.forEach(([k, v], i) => {
    ws.getCell(r + i, 2).value = k;
    ws.getCell(r + i, 2).font = h3;
    ws.getCell(r + i, 2).fill = fills.header;
    ws.getCell(r + i, 2).border = border;
    ws.getCell(r + i, 3).value = v;
    ws.getCell(r + i, 3).font = body;
    ws.getCell(r + i, 3).border = border;
    ws.mergeCells(r + i, 3, r + i, 4);
  });
  r += 5;
  r++;

  sectionRow(ws, r++, "§4.2 角色与怪物资产 — 动画列表（主角）");
  r++;
  hdrRow(ws, r++, ["动画", "帧数 / 时长", "是否可打断", "备注", ""]);
  [
    ["待机 Idle", "循环 · 60帧", "—", "含呼吸微动 + 装备微光"],
    ["跑动 Run", "循环 · 24帧", "✓ 是", "起步 4帧 / 循环 16帧 / 停止 4帧"],
    ["跳跃 Jump", "30帧 · 1s", "✗ 否", "起跳 8帧 / 滞空 14帧 / 落地 8帧"],
    ["轻攻击 1 / 2 / 3", "各 12帧 · 0.4s", "后摇可打断", "三连招递增范围"],
    ["重攻击", "30帧 · 1s", "✗ 否", "蓄力 18帧 + 释放 12帧"],
    ["受击 Hit", "10帧 · 0.33s", "✗ 否", "身体后仰 + 装备闪烁"],
    ["死亡 Death", "40帧 · 1.33s", "✗ 否", "倒地 + 装备散落粒子"],
  ].forEach(row => {
    dataRow(ws, r, row);
    ws.getCell(r, 4).alignment = { horizontal: "center", vertical: "top" };
    r++;
  });
  r++;

  sectionRow(ws, r++, "§4.3 场景与环境 — 背景分层");
  r++;
  hdrRow(ws, r++, ["层级", "内容", "视差滚动倍率", "资源规格", ""]);
  [
    ["前景", "UI层 / 粒子特效 / 角色", "1.0×", "不参与视差"],
    ["中景", "可玩区域 (地面 / 平台 / 机关)", "1.0×", "1024px tile"],
    ["远景 1", "建筑 / 树木 / 山体", "0.5×", "2048px 长图"],
    ["远景 2", "天空 / 云 / 远山", "0.2×", "2048px 静态"],
  ].forEach(row => { dataRow(ws, r, row); r++; });
  r++;

  sectionRow(ws, r++, "§4.4 特效需求清单");
  r++;
  hdrRow(ws, r++, ["特效", "触发事件", "类型", "优先级", "关联原型图"]);
  [
    ["合成光柱 VFX", "合成完成", "粒子：金色光柱从底部升起", "P0", "05"],
    ["星级逐个点亮", "合成结果展示", "序列帧：⭐ 从灰变金 · stagger 150ms", "P0", "05"],
    ["材料放入 VFX", "材料拖入槽位", "粒子：绿色脉冲扩散", "P0", "04"],
    ["强化成功 VFX", "强化完成", "粒子：金色上扬 + 属性绿色飞字", "P1", "06"],
    ["分解 VFX", "装备分解", "粒子：装备碎成金粉 + 材料图标飞出", "P1", "07"],
    ["按钮 hover VFX", "按钮 hover", "缓动：上浮 2px + 阴影扩散", "P2", "全局"],
    ["God Rays", "合成工坊环境", "粒子：顶部斜射光柱", "P2", "04"],
  ].forEach(row => {
    dataRow(ws, r, row);
    ws.getCell(r, 4).fill = prioFill(row[3]);
    ws.getCell(r, 4).alignment = { horizontal: "center", vertical: "top" };
    ws.getRow(r).height = 24;
    r++;
  });
}

// ==================== Write ====================
wb.xlsx.writeFile(outPath).then(() => {
  console.log("✅ GDD Excel 已保存: " + outPath);
});
