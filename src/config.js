// 遊戲配置參數
window.GameData = window.GameData || {};
window.GameData.GAME_CONFIG = {
  initialCompanionCount: 3, // 一開始勇者的同伴數量
  maxCompanionCount: 3, // 最大同伴數量上限
  defaultTargetLevel: 40, // 預設目標等級
  companionAdvancementLevel: 40, // 伙伴可以進階職業的等級
  startStage:1, // 起始階段（1-6）
  startNodeIndex:0, // 起始節點索引（0-19）
  // 成長配置
  heroGrowthMin: 1, // 主角每等級基本成長最小值
  heroGrowthMin: 3.0, // 主角每等級基本成長最大值
  companionGrowthMin: 0.5, // 伙伴每等級基本成長最小值
  companionGrowthMax: 2.0, // 伙伴每等級基本成長最大值
  // 每個階段的怪物數量配置 [min, max]
  stageMonsterCounts: {
    1: { min: 1, max: 1 }, // 階段1：1-2隻
    2: { min: 1, max: 2 }, // 階段2：1-3隻
    3: { min: 2, max: 3 }, // 階段3：2-4隻
    4: { min: 2, max: 4 }, // 階段4：2-5隻
    5: { min: 3, max: 5 }, // 階段5：3-5隻
    6: { min: 3, max: 5 }, // 階段6：3-5隻
  },
  // 每個階層的怪物屬性加成（所有屬性都會加上這個數值）
  stageAttributeBonus: {
    1: 1,   // 階層1：無加成
    2: 1,   // 階層2：所有屬性+5
    3: 1,  // 階層3：所有屬性+10
    4: 0,  // 階層4：所有屬性+15
    5: 0,  // 階層5：所有屬性+20
    6: 0,  // 階層6：所有屬性+25
  },
  // 初始裝備階層（如果 >= 1，則在創建勇者時裝備該階層的該流派裝備）
  initialEquipmentTier:4, // 0 表示不裝備初始裝備
  // 魔王部下配置：每個魔王可以配置部下ID數組
  // 格式：{ bossId: [minionId1, minionId2, ...] }
  bossMinions: {
    // 範例：
    // 'green_dragon': ['slime', 'orc'],
    'kandar': [ 'imp','imp'],
    'orochi': ['orc', 'goodybag'],
    'baramos': ['troll', 'king_slime','orc_king'],
    'zoma': ['orc', 'orc'],
    'darkream': ['orc', 'orc'],
  },
  // 測試模式配置
  testMode: false, // 測試模式開關
  testModeCompanionLevel: 30, // 測試模式下同伴加入時的等級
  testModeAllowAdvancement: true, // 測試模式下是否允許職業進階
};

