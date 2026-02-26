// 勇者類型定義
window.GameData = window.GameData || {};
window.GameData.HERO_TYPES = {
  attacker: {
    id: 'attacker',
    name: '攻擊型',
    description: '專注於物理輸出與速度',
    initialHpBonus: 0.7,
    initialMpBonus: 0.5,
    initialSkills: ['slash_1', 'rapid_strike_1'], // 斬擊、多重斬擊
    initialBonus: {
      attack: 6,
      agility: 4,
      defense: 4,
      vitality: 4,
    },
    levelUpBonus: {
      attack: 3.3,
      agility: 1.0,
      defense: 1.5,
      vitality: 1.2,
    },
  },
  mage: {
    id: 'mage',
    name: '魔法型',
    description: '專注於攻擊魔法與魔力',
    initialBonus: {
      magic: 6,
      attack: 2,
      recovery: 2,
      agility: 3,
      defense: 2,
      vitality: 2,
    },
    initialHpBonus: 0.2,
    initialMpBonus: 3,
    initialSkills: ['iceball_1'], // 冰球
    levelUpBonus: {
      magic: 3.3,
      recovery: 1,
      agility: 1.5,
      defense: 0.8,
    },
  },
  healer: {
    id: 'healer',
    name: '恢復型',
    description: '專注於治療與恢復能力',
    initialBonus: {
      recovery: 5,
      attack: 4,
      defense: 3,
      vitality: 3,
      agility: 2,
      magic: 2,
    },
    initialMpBonus: 0.9,
    initialHpBonus: 0.6,
    initialSkills: ['enhanced_heal_1'], // 聖擊
    levelUpBonus: {
      recovery: 3.5,
      magic: 1.2,
      attack: 1.5,
      defense: 1.5,
      vitality: 2.0,
    },
  },
  defender: {
    id: 'defender',
    name: '防守型',
    description: '提升生存能力與體力',
    initialBonus: {
      attack: 3,
      defense: 4,
      vitality: 4,
      magic: 2,
      agility: 2,
      recovery: 2,
    },
    initialHpBonus: 1.5,
    initialSkills: ['sacrifice_slash_1'], // 捨身斬
    levelUpBonus: {
      defense: 2.1,
      vitality: 3.5,
      magic: 0.5,
      attack: 2.0,
      recovery: 1.0,
    },
  },
  agile: {
    id: 'agile',
    name: '敏捷型',
    description: '極致速度與先攻優勢',
    initialHpBonus: 0.5,
    initialMpBonus: 0.4,
    initialBonus: {
      attack: 4,
      agility: 4,
      defense: 2,
      vitality: 2,
      magic: 2,
      recovery: 2,
    },
    initialSkills: ['agility_strike_1', 'sneak_attack_1'], // 敏捷斬、偷襲
    levelUpBonus: {
      attack: 2.6,
      vitality: 1.6,
      defense: 0.8,
      agility: 4.1,
    },
  },
};

// 同伴類型定義
window.GameData.COMPANION_TYPES = {
  warrior: {
    id: 'warrior',
    name: '劍士',
    heroType: 'attacker', // 對應勇者類型（用於技能流派）
    description: '專注於物理輸出與速度',
    icon: '⚔️',
    initialBonus: {
      attack: 3,
      agility: 2,
    },
    initialHpBonus: 0.8, // 0.5 * 10 = 5 HP
    initialMpBonus: 0.4,
    initialSkills: ['slash_1', 'rapid_strike_1'], // 斬擊、多重斬擊
    levelUpBonus: {
      attack: 6.0,
      agility: 1.8,
      vitality: 2.9,
      defense: 3.0,
      magic: 1.0,
    },
  },
  knight: {
    id: 'knight',
    name: '騎士',
    heroType: 'defender',
    description: '提升生存能力與體力',
    icon: '🛡️',
    initialBonus: {
      attack: 4,
      defense: 4,
      vitality: 4,
    },
    initialHpBonus: 0.8, // 0.5 * 10 = 5 HP
    initialMpBonus: 0,
    levelUpBonus: {
      attack: 3.5,
      agility: 0.5,
      recovery: 1.5,
      vitality: 4.8,
      defense: 3.8,
    },
  },
  mage: {
    id: 'mage',
    name: '魔法師',
    heroType: 'mage',
    description: '專注於攻擊魔法與魔力',
    icon: '🔮',
    initialBonus: {
      magic: 4,
      agility: 1,
    },
    initialHpBonus: -0.2,
    initialMpBonus: 2,
    initialSkills: ['iceball_1','fireball_1'], // 冰球、火球
    levelUpBonus: {
      magic: 4.6,
      recovery: 1.5,
      agility: 2.2,
      defense: 2.7,
      attack: 1.5,
      vitality: 1.5,
    },
  },
  healer: {
    id: 'healer',
    name: '僧侶',
    heroType: 'healer',
    description: '專注於治療與恢復能力',
    icon: '💚',
    initialBonus: {
      recovery: 4,
      defense: 2,
      vitality: 2,
    },
    initialHpBonus: 0.3,
    initialMpBonus: 0.6,
    initialSkills: ['enhanced_heal_1', 'heal_1'], // 聖擊、治療術
    levelUpBonus: {
      attack: 2.5,
      recovery: 4.0,
      defense: 2.5,
      magic: 1.5,
      vitality: 2.5,
    },
  },
  thief: {
    id: 'thief',
    name: '盜賊',
    heroType: 'agile',
    description: '極致速度與先攻優勢',
    icon: '🗡️',
    initialBonus: {
      attack: 4,
      agility: 4,
    },
    initialHpBonus: 0.1,
    initialMpBonus: 0.0,
    initialSkills: ['agility_strike_1', 'sneak_attack_1'], // 敏捷斬、偷襲
    levelUpBonus: {
      attack: 5.0,
      agility: 5.0,
      defense: 2.7,
      vitality: 1.5,
    },
  },
  sage: {
    id: 'sage',
    name: '賢者',
    heroType: 'sage', // 特殊類型，可以學習魔法和回復兩種流派
    description: '精通魔法與回復，平衡的支援型',
    icon: '📜',
    isAdvanced: true, // 進階職業，不能直接選擇
    initialBonus: {
      magic: 4,
      recovery: 4,
      agility: 1,
      defense: 2,
      vitality: 2,
    },
    initialHpBonus: 0.8,
    initialMpBonus: 1.5,
    initialSkills: ['iceball_3','fireball_3','heal_3'], // 冰球、火球、治療術
    levelUpBonus: {
      magic: 5.5,
      recovery: 5.5,
      agility: 2.5,
      vitality: 2.5,
      defense: 3.5,
      attack: 3.5,
    },
  },
  paladin: {
    id: 'paladin',
    name: '聖騎士',
    heroType: 'paladin', // 特殊類型，可以學習防守和回復兩種流派
    description: '精通防守與回復，堅韌的守護者',
    icon: '🛡️💚',
    isAdvanced: true, // 進階職業，不能直接選擇
    initialBonus: {
      defense: 3.5,
      recovery: 3.5,
      magic: 1.5,
      vitality: 4.5,
      attack: 3.5,
    },
    initialHpBonus: 1.0,
    initialMpBonus: 0.8,
    initialSkills: ['sacrifice_slash_3', 'heal_3'], // 捨身斬、治療術
    levelUpBonus: {
      defense:  3.8,
      recovery: 4.5,
      magic: 1.8,
      vitality: 4.7,
      attack: 3.0,
    },
  },
  weaponmaster: {
    id: 'weaponmaster',
    name: '武器大師',
    heroType: 'weaponmaster', // 特殊類型，可以學習劍士和盜賊兩種流派
    description: '精通劍技與敏捷，極致的戰鬥藝術家',
    icon: '⚔️🗡️',
    isAdvanced: true, // 進階職業，不能直接選擇
    initialSkills: ['slash_3', 'agility_strike_3'], // 斬擊、敏捷斬
    initialBonus: {
      attack: 4,
      agility: 4,
      vitality: 1,
      defense: 1,
    },
    initialHpBonus: 0.6,
    initialMpBonus: 0.2,
    levelUpBonus: {
      attack: 5.5,
      agility: 5.5,
      vitality: 3.5,
      defense: 3.0,
    },
  },
};

// 同伴個性系統定義
window.GameData.COMPANION_PERSONALITIES = {
  coward: {
    id: 'coward',
    name: '怕死',
    description: '謹慎小心，傾向於防守',
    aiBehavior: {
      // 技能使用略低，傾向於防守與治療
      skillUseChance: 0.45, // 比基準略低，較常選擇普攻/防守
      guardChance: 0.15, // 15% 機率使用防守
      healPriority: 1.3, // 回復傾向 +30%（舊系統，保留兼容）
    },
    // 傾向修正（-0.2 到 +0.2，相對於基準值的百分比增減）
    tendencyModifiers: {
      heal: 0.1,      // 治療傾向 +10%
      support: -0.1,  // 輔助傾向 -10%
      defense: 0.15,   // 防守傾向 +15%
      attack: -0.15,  // 攻擊傾向 -15%
      aoe: -0.2,      // 全體攻擊傾向 -20%
    },
    attributeModifiers: {
      defense: 0.5, // 每等級+0.5防守
    },
  },
  berserker: {
    id: 'berserker',
    name: '敢死隊',
    description: '勇猛無畏，攻擊至上',
    aiBehavior: {
      // 非常常用攻擊技能，但幾乎不會治療
      skillUseChance: 0.7, // 明顯高於基準的技能使用率
      guardChance: 0.0, // 不使用防守
      healPriority: 0.7, // 回復傾向 -30%（舊系統，保留兼容）
      attackPriority: 1.3, // 攻擊優先級提高30%（舊系統，保留兼容）
    },
    tendencyModifiers: {
      heal: -0.2,     // 治療傾向 -20%
      support: -0.1,  // 輔助傾向 -10%
      defense: -0.2,  // 防守傾向 -20%
      attack: 0.2,    // 攻擊傾向 +20%
      aoe: 0.15,      // 全體攻擊傾向 +15%
    },
    attributeModifiers: {
      attack: 0.5, // 每等級+0.5攻擊
      vitality: -0.5, // 每等級-0.5體力
    },
  },
  protector: {
    id: 'protector',
    name: '守護者',
    description: '專注保護隊友，治療優先',
    aiBehavior: {
      // 偏好治療與防守
      skillUseChance: 0.55, // 略高於基準，較常用技能
      guardChance: 0.08, // 小幅防守機率
      healPriority: 1.7, // 回復傾向 +70%（舊系統，保留兼容）
      aoeHealThreshold: 0.5, // 隊伍有人 HP < 50% 就考慮群補
    },
    tendencyModifiers: {
      heal: 0.2,      // 治療傾向 +20%
      support: 0.15,  // 輔助傾向 +15%
      defense: 0.1,   // 防守傾向 +10%
      attack: -0.1,   // 攻擊傾向 -10%
      aoe: -0.15,     // 全體攻擊傾向 -15%
    },
    attributeModifiers: {
      recovery: 0.5, // 每等級+0.5回復力
      defense: 0.5, // 每等級+0.5防守
    },
  },
  strategist: {
    id: 'strategist',
    name: '戰略家',
    description: '善於分析戰況，優先使用全體攻擊',
    aiBehavior: {
      // 偏好使用技能與全體攻擊
      skillUseChance: 0.65, // 比基準高，常用技能
      guardChance: 0.0,
      aoePriority: 1.4, // 舊系統，保留兼容
      aoeThreshold: 2, // 2 個敵人以上就會優先使用 AOE
    },
    tendencyModifiers: {
      heal: 0.0,      // 治療傾向 0%
      support: 0.1,   // 輔助傾向 +10%
      defense: -0.1,  // 防守傾向 -10%
      attack: 0.1,    // 攻擊傾向 +10%
      aoe: 0.2,       // 全體攻擊傾向 +20%
    },
    attributeModifiers: {
      magic: 0.5, // 每等級+0.5魔力
      agility: 0.5, // 每等級+0.5敏捷
    },
  },
  balanced: {
    id: 'balanced',
    name: '平衡型',
    description: '各方面均衡發展',
    aiBehavior: {
      // 完全中立的技能使用率
      skillUseChance: 0.5,
      guardChance: 0.0,
    },
    tendencyModifiers: {
      heal: 0.0,      // 治療傾向 0%
      support: 0.0,  // 輔助傾向 0%
      defense: 0.0,  // 防守傾向 0%
      attack: 0.0,   // 攻擊傾向 0%
      aoe: 0.0,      // 全體攻擊傾向 0%
    },
    attributeModifiers: {
      // 無特殊修正
    },
  },
  aggressive: {
    id: 'aggressive',
    name: '激進型',
    description: '攻擊性強，優先使用攻擊技能',
    aiBehavior: {
      // 明顯偏攻擊技能
      skillUseChance: 0.65, // 比基準高，常用攻擊技能
      guardChance: 0.0,
      healPriority: 0.9, // 回復傾向略低（舊系統，保留兼容）
      attackPriority: 1.2, // 舊系統，保留兼容
    },
    tendencyModifiers: {
      heal: -0.1,     // 治療傾向 -10%
      support: -0.05, // 輔助傾向 -5%
      defense: -0.15, // 防守傾向 -15%
      attack: 0.2,    // 攻擊傾向 +20%
      aoe: 0.1,       // 全體攻擊傾向 +10%
    },
    attributeModifiers: {
      attack: 0.5, // 每等級+0.5攻擊
      agility: 0.5, // 每等級+0.5敏捷
    },
  },
  cautious: {
    id: 'cautious',
    name: '謹慎型',
    description: '小心謹慎，傾向於防守和治療',
    aiBehavior: {
      // 技能略少用，但更常防守與治療
      skillUseChance: 0.45, // 稍低於基準
      guardChance: 0.18, // 18% 機率防守
      healPriority: 1.4, // 回復傾向 +40%（舊系統，保留兼容）
    },
    tendencyModifiers: {
      heal: 0.15,     // 治療傾向 +15%
      support: 0.05,  // 輔助傾向 +5%
      defense: 0.15,  // 防守傾向 +15%
      attack: -0.15,  // 攻擊傾向 -15%
      aoe: -0.15,     // 全體攻擊傾向 -15%
    },
    attributeModifiers: {
      defense: 0.5, // 每等級+0.5防守
      vitality: 0.5, // 每等級+0.5體力
    },
  },
  healer_focused: {
    id: 'healer_focused',
    name: '治療專精',
    description: '專注於治療，治療效果更強',
    aiBehavior: {
      // 偏愛治療技能
      skillUseChance: 0.55, // 略偏好技能
      guardChance: 0.0,
      healPriority: 2.0, // 回復傾向 +100%（舊系統，保留兼容）
      aoeHealThreshold: 0.4, // 約 40% 以下就使用群補
    },
    tendencyModifiers: {
      heal: 0.2,      // 治療傾向 +20%
      support: 0.15,  // 輔助傾向 +15%
      defense: 0.0,   // 防守傾向 0%
      attack: -0.15,  // 攻擊傾向 -15%
      aoe: -0.2,      // 全體攻擊傾向 -20%
    },
    attributeModifiers: {
      recovery: 0.5, // 每等級+0.5回復力
      magic: 0.5, // 每等級+0.5魔力
    },
  },
  speed_demon: {
    id: 'speed_demon',
    name: '速度狂',
    description: '追求極致速度，先發制人',
    aiBehavior: {
      skillUseChance: 0.6, // 稍微偏好技能
      guardChance: 0.0,
      attackPriority: 1.1, // 舊系統，保留兼容
    },
    tendencyModifiers: {
      heal: -0.1,     // 治療傾向 -10%
      support: -0.05, // 輔助傾向 -5%
      defense: -0.15, // 防守傾向 -15%
      attack: 0.15,   // 攻擊傾向 +15%
      aoe: 0.05,      // 全體攻擊傾向 +5%
    },
    attributeModifiers: {
      agility: 0.5, // 每等級+0.5敏捷
      attack: 0.5, // 每等級+0.5攻擊
    },
  },
  tank: {
    id: 'tank',
    name: '坦克',
    description: '高防禦高血量，擅長防守',
    aiBehavior: {
      // 偏防守，不常用技能
      skillUseChance: 0.4, // 顯著低於基準
      guardChance: 0.25, // 25% 機率防守
      healPriority: 1.1, // 回復傾向稍微提高（舊系統，保留兼容）
    },
    tendencyModifiers: {
      heal: 0.05,     // 治療傾向 +5%
      support: 0.0,   // 輔助傾向 0%
      defense: 0.2,   // 防守傾向 +20%
      attack: -0.2,   // 攻擊傾向 -20%
      aoe: -0.2,      // 全體攻擊傾向 -20%
    },
    attributeModifiers: {
      defense: 0.5, // 每等級+0.5防守
      vitality: 0.5, // 每等級+0.5體力
      attack: -0.5, // 每等級-0.5攻擊
    },
  },
  magic_fanatic: {
    id: 'magic_fanatic',
    name: '魔法狂熱',
    description: '專注魔法攻擊，魔力至上',
    aiBehavior: {
      // 偏好施放魔法技能
      skillUseChance: 0.65, // 比基準高，常用技能
      guardChance: 0.0,
      attackPriority: 1.2, // 舊系統，保留兼容
    },
    tendencyModifiers: {
      heal: 0.0,      // 治療傾向 0%
      support: 0.1,   // 輔助傾向 +10%
      defense: -0.1,  // 防守傾向 -10%
      attack: 0.15,   // 攻擊傾向 +15%
      aoe: 0.15,      // 全體攻擊傾向 +15%
    },
    attributeModifiers: {
      magic: 0.8, // 每等級+1魔力
      recovery: 0.5, // 每等級+0.5回復力
    },
  },
  support_specialist: {
    id: 'support_specialist',
    name: '支援專家',
    description: '優先支援和治療隊友',
    aiBehavior: {
      skillUseChance: 0.55, // 略偏好技能
      guardChance: 0.0,
      healPriority: 1.8, // 回復傾向 +80%（舊系統，保留兼容）
      aoeHealThreshold: 0.45, // ~45% 以下就使用群補
    },
    tendencyModifiers: {
      heal: 0.15,     // 治療傾向 +15%
      support: 0.2,   // 輔助傾向 +20%
      defense: 0.0,   // 防守傾向 0%
      attack: -0.1,   // 攻擊傾向 -10%
      aoe: -0.1,      // 全體攻擊傾向 -10%
    },
    attributeModifiers: {
      recovery: 0.5, // 每等級+0.5回復力
      magic: 0.5, // 每等級+0.5魔力
    },
  },
  guerrilla: {
    id: 'guerrilla',
    name: '游擊手',
    description: '靈活機動，優先使用敏捷技能',
    aiBehavior: {
      skillUseChance: 0.6, // 稍微偏好技能
      guardChance: 0.0,
      attackPriority: 1.15, // 舊系統，保留兼容
    },
    tendencyModifiers: {
      heal: -0.05,    // 治療傾向 -5%
      support: 0.0,   // 輔助傾向 0%
      defense: -0.1,  // 防守傾向 -10%
      attack: 0.15,   // 攻擊傾向 +15%
      aoe: 0.0,       // 全體攻擊傾向 0%
    },
    attributeModifiers: {
      agility: 0.5, // 每等級+0.5敏捷
      attack: 0.5, // 每等級+0.5攻擊
    },
  },
  destroyer: {
    id: 'destroyer',
    name: '破壞者',
    description: '專注全體攻擊，清場專家',
    aiBehavior: {
      // 非常偏好 AOE 攻擊
      skillUseChance: 0.7, // 高技能使用率
      guardChance: 0.0,
      aoePriority: 1.5, // 舊系統，保留兼容
      aoeThreshold: 2, // 2 個敵人以上就優先用 AOE
    },
    tendencyModifiers: {
      heal: -0.15,    // 治療傾向 -15%
      support: -0.1,  // 輔助傾向 -10%
      defense: -0.2,  // 防守傾向 -20%
      attack: 0.15,   // 攻擊傾向 +15%
      aoe: 0.2,       // 全體攻擊傾向 +20%
    },
    attributeModifiers: {
      attack: 0.5, // 每等級+0.5攻擊
      magic: 0.5, // 每等級+0.5魔力
    },
  },
  resilient: {
    id: 'resilient',
    name: '堅韌',
    description: '高血量高生存，持久戰專家',
    aiBehavior: {
      skillUseChance: 0.5, // 中立技能率
      guardChance: 0.08, // 小幅防守
      healPriority: 1.3, // 回復傾向 +30%（舊系統，保留兼容）
    },
    tendencyModifiers: {
      heal: 0.1,      // 治療傾向 +10%
      support: 0.05,  // 輔助傾向 +5%
      defense: 0.1,   // 防守傾向 +10%
      attack: -0.05,  // 攻擊傾向 -5%
      aoe: -0.1,      // 全體攻擊傾向 -10%
    },
    attributeModifiers: {
      vitality: 0.5, // 每等級+0.5體力
      defense: 0.5, // 每等級+0.5防守
    },
  },
  precise: {
    id: 'precise',
    name: '神射手',
    description: '高命中高敏捷，精準打擊',
    aiBehavior: {
      skillUseChance: 0.55, // 稍微偏好技能
      guardChance: 0.0,
      attackPriority: 1.15, // 舊系統，保留兼容
    },
    tendencyModifiers: {
      heal: -0.05,    // 治療傾向 -5%
      support: 0.0,   // 輔助傾向 0%
      defense: -0.1,  // 防守傾向 -10%
      attack: 0.15,   // 攻擊傾向 +15%
      aoe: 0.0,       // 全體攻擊傾向 0%
    },
    attributeModifiers: {
      agility: 0.5, // 每等級+0.5敏捷
      attack: 0.5, // 每等級+0.5攻擊
    },
  },
  mage: {
    id: 'mage',
    name: '賢者之心',
    description: '平衡的魔法型，魔力與回復並重',
    aiBehavior: {
      skillUseChance: 0.6, // 較常使用魔法技能
      guardChance: 0.0,
      attackPriority: 1.1, // 舊系統，保留兼容
    },
    tendencyModifiers: {
      heal: 0.1,      // 治療傾向 +10%
      support: 0.1,   // 輔助傾向 +10%
      defense: -0.05, // 防守傾向 -5%
      attack: 0.1,    // 攻擊傾向 +10%
      aoe: 0.05,      // 全體攻擊傾向 +5%
    },
    attributeModifiers: {
      magic: 0.8, // 每等級+1魔力
      recovery: 0.5, // 每等級+0.5回復力
    },
  },
  warrior: {
    id: 'warrior',
    name: '劍士天賦',
    description: '平衡的物理型，攻擊與體力並重',
    aiBehavior: {
      skillUseChance: 0.55, // 略偏好技能
      guardChance: 0.0,
      attackPriority: 1.15, // 舊系統，保留兼容
    },
    tendencyModifiers: {
      heal: 0.0,      // 治療傾向 0%
      support: 0.0,   // 輔助傾向 0%
      defense: 0.0,   // 防守傾向 0%
      attack: 0.1,    // 攻擊傾向 +10%
      aoe: 0.0,       // 全體攻擊傾向 0%
    },
    attributeModifiers: {
      attack: 0, // 每等級+1攻擊
      vitality: 0.5, // 每等級+0.5體力
    },
  },
  guardian_knight: {
    id: 'guardian_knight',
    name: '守護之心',
    description: '高防禦，專注保護隊友',
    aiBehavior: {
      skillUseChance: -0.1, // 稍低於基準
      guardChance: 0.10, // 15% 機率防守
      healPriority: 0.1, // 回復傾向 +40%（舊系統，保留兼容）
    },
    tendencyModifiers: {
      heal: 0.1,      // 治療傾向 +10%
      support: 0.1,   // 輔助傾向 +10%
      defense: 0.2,   // 防守傾向 +20%
      attack: -0.15,  // 攻擊傾向 -15%
      aoe: -0.15,     // 全體攻擊傾向 -15%
    },
    attributeModifiers: {
      defense: 0.5, // 每等級+0.5防守
      vitality: 0.5, // 每等級+0.5體力
    },
  },
  all_rounder: {
    id: 'all_rounder',
    name: '全能型',
    description: '各方面都有小幅加成，均衡發展',
    aiBehavior: {
      // 純中立的個性，不偏技能也不偏普攻
      skillUseChance: 0.0,
      guardChance: 0.0,
    },
    tendencyModifiers: {
    },
    attributeModifiers: {
      attack: 0.2, // 每等級+0.2攻擊
      vitality: 0.2, // 每等級+0.2體力
      defense: 0.2, // 每等級+0.2防守
      recovery: 0.2, // 每等級+0.2回復力
      magic: 0.2, // 每等級+0.2魔力
      agility: 0.2, // 每等級+0.2敏捷
    },
  },
};

