(() => {
const EQUIPMENT = [];

// 裝備數據定義（根據用戶提供的列表）
const EQUIPMENT_DATA = {
  // 階層1：冒險的開端
  1: {
    attack: {
      weapon: { name: '檜木棒', price: 50, description: '最基礎的攻擊武器' },
      armor: { name: '皮鎧甲', price: 60, description: '輕便且有些微防禦' },
      shield: { name: '鍋蓋', price: 40, description: '隨手可得的盾牌' },
      accessory: { name: '力量戒指', price: 70, description: '微幅提升力量' },
    },
    defense: {
      weapon: { name: '銅劍', price: 55, description: '比木棒可靠' },
      armor: { name: '鎖子甲', price: 65, description: '鐵環編織的防具' },
      shield: { name: '皮盾', price: 45, description: '皮革製成的盾' },
      accessory: { name: '金手鐲', price: 75, description: '提升守備力' },
    },
    magic: {
      weapon: { name: '聖樹之杖', price: 50, description: '帶有微弱魔力' },
      armor: { name: '絲綢長袍', price: 60, description: '適合施法者穿著' },
      shield: { name: '小盾', price: 40, description: '法師也能裝備' },
      accessory: { name: '金戒指', price: 70, description: '有些微抗性' },
    },
    agility: {
      weapon: { name: '石牙匕首', price: 45, description: '輕巧的短刀' },
      armor: { name: '布衣', price: 55, description: '完全不影響行動' },
      shield: { name: '皮托盤', price: 40, description: '極輕的盾牌' },
      accessory: { name: '兔尾巴', price: 70, description: '提升幸運與速度' },
    },
  },
  // 階層2：旅程的試煉
  2: {
    attack: {
      weapon: { name: '鐵槍', price: 100, description: '具備穿透力' },
      armor: { name: '鱗片鎧甲', price: 120, description: '堅硬鱗片製成' },
      shield: { name: '鱗盾', price: 80, description: '對應鎧甲的盾' },
      accessory: { name: '豪傑手環', price: 140, description: '攻擊力提升' },
    },
    defense: {
      weapon: { name: '鐵斧', price: 110, description: '沉重但威力大' },
      armor: { name: '青銅鎧甲', price: 130, description: '青銅打造' },
      shield: { name: '青銅盾', price: 85, description: '基礎金屬盾' },
      accessory: { name: '史萊姆耳環', price: 135, description: '稍微提升防禦' },
    },
    magic: {
      weapon: { name: '魔道士手杖', price: 100, description: '法師愛用' },
      armor: { name: '舞者服裝', price: 120, description: '輕盈且有些微魔抗' },
      shield: { name: '貝殼盾', price: 80, description: '帶有自然防護' },
      accessory: { name: '蝴蝶結', price: 140, description: '稍微提升魔防' },
    },
    agility: {
      weapon: { name: '神聖匕首', price: 100, description: '對不死系有效' },
      armor: { name: '旅人服', price: 115, description: '適合長途跋涉' },
      shield: { name: '輕盾', price: 80, description: '不妨礙動作' },
      accessory: { name: '疾風戒指', price: 145, description: '提升敏捷度' },
    },
  },
  // 階層3：劍士的成長
  3: {
    attack: {
      weapon: { name: '鐵劍', price: 200, description: '標準劍士武器' },
      armor: { name: '鐵鎧甲', price: 240, description: '全鐵製防具' },
      shield: { name: '鐵盾', price: 160, description: '堅固的鐵盾' },
      accessory: { name: '泰坦腰帶', price: 280, description: '大幅提升力量' },
    },
    defense: {
      weapon: { name: '破甲劍', price: 210, description: '能造成重擊' },
      armor: { name: '鐵胸甲', price: 250, description: '強化胸部防禦' },
      shield: { name: '騎士之盾', price: 170, description: '騎士專用' },
      accessory: { name: '守護紅寶石', price: 290, description: '增加防禦力' },
    },
    magic: {
      weapon: { name: '符文之杖', price: 200, description: '刻有符文' },
      armor: { name: '魔法裙', price: 240, description: '減輕咒文傷害' },
      shield: { name: '小貓盾', price: 160, description: '帶有特殊魔力' },
      accessory: { name: '祈禱戒指', price: 280, description: '可恢復MP' },
    },
    agility: {
      weapon: { name: '毒蛾小刀', price: 200, description: '可能使敵麻痺' },
      armor: { name: '華麗服飾', price: 240, description: '極輕且耀眼' },
      shield: { name: '白銀托盤', price: 160, description: '輕量金屬盾' },
      accessory: { name: '短襪', price: 270, description: '女性專用，輕便' },
    },
  },
  // 階層4：熟練的勇者
  4: {
    attack: {
      weapon: { name: '鋼鐵劍', price: 400, description: '精煉鋼鐵打造' },
      armor: { name: '鋼鐵鎧甲', price: 480, description: '高強度防禦' },
      shield: { name: '鋼鐵盾', price: 320, description: '標準高級盾' },
      accessory: { name: '力量護手', price: 560, description: '增強臂力' },
    },
    defense: {
      weapon: { name: '戰錘', price: 420, description: '兼具破壞與格擋' },
      armor: { name: '全身板甲', price: 500, description: '覆蓋全身' },
      shield: { name: '白銀之盾', price: 330, description: '帶有抗性' },
      accessory: { name: '命之戒指', price: 580, description: '增加HP或防禦' },
    },
    magic: {
      weapon: { name: '審判之杖', price: 400, description: '神官愛用' },
      armor: { name: '魔法鎧甲', price: 480, description: '優秀的抗魔性' },
      shield: { name: '魔法盾', price: 320, description: '減輕咒文傷害' },
      accessory: { name: '學者眼鏡', price: 550, description: '提升智慧' },
    },
    agility: {
      weapon: { name: '刺客匕首', price: 400, description: '高暴擊率' },
      armor: { name: '迴避披風', price: 480, description: '容易閃避攻擊' },
      shield: { name: '黑盾', price: 320, description: '輕量且堅硬' },
      accessory: { name: '星降手環', price: 560, description: '敏捷翻倍' },
    },
  },
  // 階層5：傳說的門檻
  5: {
    attack: {
      weapon: { name: '火焰劍', price: 800, description: '帶有火屬性' },
      armor: { name: '白銀鎧甲', price: 960, description: '閃耀的鎧甲' },
      shield: { name: '火焰盾', price: 640, description: '抗冰冷吐息' },
      accessory: { name: '戰神臂環', price: 1100, description: '戰神加護' },
    },
    defense: {
      weapon: { name: '白金劍', price: 850, description: '極高硬度' },
      armor: { name: '白金鎧甲', price: 1000, description: '完美的物理防禦' },
      shield: { name: '白金盾', price: 660, description: '難以破壞' },
      accessory: { name: '生命項鍊', price: 1150, description: '大幅提升生存' },
    },
    magic: {
      weapon: { name: '賢者之杖', price: 800, description: '賢者專用' },
      armor: { name: '賢者長袍', price: 960, description: '極高的魔力抗性' },
      shield: { name: '力量之盾', price: 640, description: '可當道具補血' },
      accessory: { name: '博學戒指', price: 1120, description: '大幅提升魔力' },
    },
    agility: {
      weapon: { name: '獵鷹劍', price: 820, description: '可攻擊兩次' },
      armor: { name: '黑暗長袍', price: 960, description: '極高的閃避率' },
      shield: { name: '風神之盾', price: 640, description: '如風般輕盈' },
      accessory: { name: '幻影面具', price: 1120, description: '提升迴避率' },
    },
  },
  // 階層6：英雄的證明
  6: {
    attack: {
      weapon: { name: '屠龍劍', price: 1600, description: '對龍特效' },
      armor: { name: '龍之鎧甲', price: 1920, description: '抗火與吐息' },
      shield: { name: '龍盾', price: 1280, description: '最強抗性盾' },
      accessory: { name: '豪傑臂環', price: 2200, description: '極致的力量' },
    },
    defense: {
      weapon: { name: '奇蹟之劍', price: 1650, description: '攻擊吸血' },
      armor: { name: '尖刺鎧甲', price: 1950, description: '反彈物理傷害' },
      shield: { name: '食人魔盾', price: 1300, description: '超重型防禦' },
      accessory: { name: '女神戒指', price: 2250, description: '全方位抗性' },
    },
    magic: {
      weapon: { name: '復活之杖', price: 1600, description: '帶有復活之力' },
      armor: { name: '水之羽衣', price: 1920, description: '傳說中的抗火衣' },
      shield: { name: '水鏡之盾', price: 1280, description: '反射咒文' },
      accessory: { name: '精靈護符', price: 2240, description: '防止所有異常' },
    },
    agility: {
      weapon: { name: '黃金爪', price: 1600, description: '武鬥家最強武' },
      armor: { name: '神秘緊身衣', price: 1920, description: '兼具防禦與速度' },
      shield: { name: '多瑪吉之盾', price: 1280, description: '特殊魔法金屬' },
      accessory: { name: '流星手環', price: 2240, description: '速度提升至極限' },
    },
  },
};

// 生成裝備的輔助函數
function generateEquipment() {
  // 類型對應到flow
  const typeToFlow = {
    attack: 'sword',
    defense: 'sword', // 防守型也使用sword flow
    magic: 'magic',
    agility: 'agility',
  };
  
  // 基礎能力值（階層1的值）
  const baseStats = {
    weapon: { attack: 2}, // 武器基礎攻擊力（所有武器都有攻擊力）
    armor: { defense: 2 }, // 防具基礎防禦力（所有防具都有防禦力）
    shield: { defense: 1 }, // 盾牌基礎防禦力（所有盾牌都有防禦力）
    accessory: {}, // 飾品只有屬性加成
  };
  
  // 隨機生成 HP 和 MP 加成的輔助函數
  function randomHpMpBonus(tier) {
    // 根據階層決定 HP/MP 加成範圍：0 - 3×階層
    // 每種裝備只會隨機加HP或MP的其中一種
    const maxBonus = tier * 3;
    const bonus = Math.floor(Math.random() * (maxBonus + 1)); // 0 到 maxBonus
    
    // 隨機選擇是HP還是MP
    const isHp = Math.random() < 0.5;
    return {
      hpBonus: isHp ? bonus : 0,
      mpBonus: isHp ? 0 : bonus
    };
  }
  
  // 每個階層（1-6）
  for (let tier = 1; tier <= 6; tier += 1) {
    const multiplier = Math.pow(2, tier - 1); // 每階層翻倍
    
    // 每種類型
    Object.keys(EQUIPMENT_DATA[tier]).forEach((type) => {
      const flow = typeToFlow[type];
      const typeData = EQUIPMENT_DATA[tier][type];
      
      // 武器 - 攻擊流派：3倍×階段攻擊力，無其他附加能力
      // 其他流派：1倍×階段×2攻擊力，但會得到該類型階段×2的能力值
      const weaponHpMp = randomHpMpBonus(tier);
      // 構建說明文字，包含 HP/MP 加成
      let weaponDescription = typeData.weapon.description;
      const weaponBonusText = [];
      if (weaponHpMp.hpBonus > 0) weaponBonusText.push(`HP+${weaponHpMp.hpBonus}`);
      if (weaponHpMp.mpBonus > 0) weaponBonusText.push(`MP+${weaponHpMp.mpBonus}`);
      if (weaponBonusText.length > 0) {
        weaponDescription += ` (${weaponBonusText.join(' ')})`;
      }
      
      let weaponAttack = 0;
      let weaponAttributes = {};
      
      if (type === 'attack') {
        // 攻擊流派：3倍 × 階段
        weaponAttack = 3 * tier;
        weaponAttributes = {}; // 無其他附加能力
      } else {
        // 其他流派：1倍 × 階段 × 2 = 2 × 階段
        weaponAttack = 2 * tier;
        // 會得到該類型階段×2的能力值
        if (type === 'defense') {
          weaponAttributes = { defense: tier * 2 };
        } else if (type === 'magic') {
          weaponAttributes = { magic: tier * 2, recovery: tier * 2 };
        } else if (type === 'agility') {
          weaponAttributes = { agility: tier * 2 };
        }
      }
      
      const weapon = {
        id: `${type}_weapon_t${tier}`,
        name: typeData.weapon.name,
        type: 'weapon',
        tier,
        flow,
        description: weaponDescription,
        attack: weaponAttack,
        price: typeData.weapon.price,
        attributes: weaponAttributes,
        // 隨機 HP 和 MP 加成
        hpBonus: weaponHpMp.hpBonus,
        mpBonus: weaponHpMp.mpBonus,
      };
      
      // 防具
      // 防守流派：3倍×階段防禦力，無其他附加能力
      // 其他流派：1倍×階段×2防禦力，但會得到該類型階段×2的能力值
      const armorHpMp = randomHpMpBonus(tier);
      // 構建說明文字，包含 HP/MP 加成
      let armorDescription = typeData.armor.description;
      const armorBonusText = [];
      if (armorHpMp.hpBonus > 0) armorBonusText.push(`HP+${armorHpMp.hpBonus}`);
      if (armorHpMp.mpBonus > 0) armorBonusText.push(`MP+${armorHpMp.mpBonus}`);
      if (armorBonusText.length > 0) {
        armorDescription += ` (${armorBonusText.join(' ')})`;
      }
      
      let armorDefense = 0;
      let armorAttributes = {};
      
      if (type === 'defense') {
        // 防守流派：3倍 × 階段
        armorDefense = 3 * tier;
        armorAttributes = {}; // 無其他附加能力
      } else {
        // 其他流派：1倍 × 階段 × 2 = 2 × 階段
        armorDefense = 2 * tier;
        // 會得到該類型階段×2的能力值
        if (type === 'attack') {
          armorAttributes = { attack: tier * 2 };
        } else if (type === 'magic') {
          armorAttributes = { magic: tier * 2, recovery: tier * 2 };
        } else if (type === 'agility') {
          armorAttributes = { agility: tier * 2 };
        }
      }
      
      const armor = {
        id: `${type}_armor_t${tier}`,
        name: typeData.armor.name,
        type: 'armor',
        tier,
        flow,
        description: armorDescription,
        defense: armorDefense,
        price: typeData.armor.price,
        attributes: armorAttributes,
        // 隨機 HP 和 MP 加成
        hpBonus: armorHpMp.hpBonus,
        mpBonus: armorHpMp.mpBonus,
      };
      
      // 盾牌 - 提高防禦力數值
      const shieldHpMp = randomHpMpBonus(tier);
      // 構建說明文字，包含 HP/MP 加成
      let shieldDescription = typeData.shield.description;
      const shieldBonusText = [];
      if (shieldHpMp.hpBonus > 0) shieldBonusText.push(`HP+${shieldHpMp.hpBonus}`);
      if (shieldHpMp.mpBonus > 0) shieldBonusText.push(`MP+${shieldHpMp.mpBonus}`);
      if (shieldBonusText.length > 0) {
        shieldDescription += ` (${shieldBonusText.join(' ')})`;
      }
      const shield = {
        id: `${type}_shield_t${tier}`,
        name: typeData.shield.name,
        type: 'shield',
        tier,
        flow,
        description: shieldDescription,
        defense: Math.round(baseStats.shield.defense * multiplier * 0.5), // 提高後的防禦力
        price: typeData.shield.price,
        // 防守型盾牌不再另外加防守能力，同樣所加的數值加倍
        // 其他類型的盾牌所加的數值加倍
        attributes: type === 'attack' ? { defense: tier * 2 } :
                    type === 'defense' ? { vitality: tier * 2 } :
                    type === 'magic' ? { magic: tier * 2, recovery: tier * 2 } :
                    { agility: tier * 2, defense: tier * 2 },
        // 隨機 HP 和 MP 加成
        hpBonus: shieldHpMp.hpBonus,
        mpBonus: shieldHpMp.mpBonus,
      };
      
      // 飾品
      const accessoryHpMp = randomHpMpBonus(tier);
      // 構建說明文字，包含 HP/MP 加成
      let accessoryDescription = typeData.accessory.description;
      const accessoryBonusText = [];
      if (accessoryHpMp.hpBonus > 0) accessoryBonusText.push(`HP+${accessoryHpMp.hpBonus}`);
      if (accessoryHpMp.mpBonus > 0) accessoryBonusText.push(`MP+${accessoryHpMp.mpBonus}`);
      if (accessoryBonusText.length > 0) {
        accessoryDescription += ` (${accessoryBonusText.join(' ')})`;
      }
      const accessory = {
        id: `${type}_accessory_t${tier}`,
        name: typeData.accessory.name,
        type: 'accessory',
        tier,
        flow,
        description: accessoryDescription,
        price: typeData.accessory.price,
        // 飾品獲得 4 × 階段 該流派的加成
        attributes: type === 'attack' ? { attack: tier * 4 } :
                    type === 'defense' ? { vitality: tier * 4 } : // 飾品不提供防禦力，改為體力
                    type === 'magic' ? { magic: tier * 4, recovery: tier * 4 } :
                    { agility: tier * 4 },
        // 隨機 HP 和 MP 加成
        hpBonus: accessoryHpMp.hpBonus,
        mpBonus: accessoryHpMp.mpBonus,
      };
      
      EQUIPMENT.push(weapon, armor, shield, accessory);
    });
  }
  
  // 初始裝備（特殊處理）
  EQUIPMENT.push({
    id: 'wooden_stick',
    name: '木棒',
    type: 'weapon',
    tier: 0,
    flow: 'sword',
    description: '最基礎的武器',
    attack: Math.round(1 * 0.5),
    price: 0,
  });
  
  EQUIPMENT.push({
    id: 'cloth_armor',
    name: '布衣',
    type: 'armor',
    tier: 0,
    flow: 'general',
    description: '最基礎的防具',
    defense: Math.round(1 * 0.5),
    price: 0,
  });
  
  // 羅德裝備（特殊裝備，從第六階層第二節點獲得）
  EQUIPMENT.push({
    id: 'rod_sword',
    name: '羅德之劍',
    type: 'weapon',
    tier: 99  ,
    flow: 'sword',
    description: '傳說中勇者羅德使用的神劍（裝備後獲得被動技能：命中率+10%，會心一擊率+10%）',
    attack: 48,
    attributes: { agility: 32 },
    price: 0, // 無法購買，只能從事件獲得
  });
  
  EQUIPMENT.push({
    id: 'rod_shield',
    name: '羅德之盾',
    type: 'shield',
    tier: 99,
    flow: 'defense',
    description: '傳說中勇者羅德使用的神盾（裝備後獲得被動技能：閃避率+20%）',
    defense: 24,
    attributes: { attack: 24 }, // 32防禦（屬性）+ 32防禦（基礎）= 64總防禦
    hpBonus: 50,
    mpBonus: 50,
    price: 0, // 無法購買，只能從事件獲得
  });
  
  EQUIPMENT.push({
    id: 'rod_armor',
    name: '羅德之鎧',
    type: 'armor',
    tier: 99,
    flow: 'defense',
    description: '傳說中勇者羅德使用的神鎧（裝備後獲得被動技能：被攻擊率+20%）',
    defense: 48,
    attributes: { vitality: 24 },
    hpBonus: 200,
    price: 0, // 無法購買，只能從事件獲得
  });
  
  EQUIPMENT.push({
    id: 'rod_emblem',
    name: '羅德紋章',
    type: 'accessory',
    tier: 99,
    flow: 'magic',
    description: '傳說中勇者羅德使用的紋章（裝備後獲得被動技能：每回合HP/MP回復10點）',
    attributes: { magic: 64, recovery: 64 },
    mpBonus: 100,
    price: 0, // 無法購買，只能從事件獲得
  });
}

// 生成所有裝備
generateEquipment();

// 生成所有裝備
generateEquipment();

const EQUIPMENT_LOOKUP = new Map();
EQUIPMENT.forEach((eq) => {
  EQUIPMENT_LOOKUP.set(eq.id, eq);
});

window.GameData = window.GameData || {};
window.GameData.EQUIPMENT = EQUIPMENT;
window.GameData.EQUIPMENT_LOOKUP = EQUIPMENT_LOOKUP;
})();
