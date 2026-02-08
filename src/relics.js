(() => {
// 圣物系统
// 6个阶段，每阶段6个流派，总共36个圣物

const RELIC_NAMES = {
  // 阶段1 - 剑士系
  sword_1: ['初生之剑', '勇者之刃', '战士之剑', '新手的剑', '见习剑', '基础剑'],
  // 阶段1 - 防守系
  defender_1: ['初生之盾', '守护之盾', '防御之盾', '新手的盾', '见习盾', '基础盾'],
  // 阶段1 - 恢复系
  recovery_1: ['初生之杖', '治愈之杖', '恢复之杖', '新手的杖', '见习杖', '基础杖'],
  // 阶段1 - 魔法系
  magic_1: ['初生之书', '魔法之书', '元素之书', '新手的书', '见习书', '基础书'],
  // 阶段1 - 敏捷系
  agility_1: ['初生之靴', '疾风之靴', '敏捷之靴', '新手的靴', '见习靴', '基础靴'],
  // 阶段1 - 英雄系
  hero_1: ['初生之徽', '勇者之徽', '英雄之徽', '新手的徽', '见习徽', '基础徽'],
  
  // 阶段2 - 剑士系
  sword_2: ['精钢之剑', '锋利之刃', '战将之剑', '进阶剑', '熟练剑', '强化剑'],
  // 阶段2 - 防守系
  defender_2: ['精钢之盾', '坚固之盾', '守卫之盾', '进阶盾', '熟练盾', '强化盾'],
  // 阶段2 - 恢复系
  recovery_2: ['精钢之杖', '圣光之杖', '治疗之杖', '进阶杖', '熟练杖', '强化杖'],
  // 阶段2 - 魔法系
  magic_2: ['精钢之书', '奥术之书', '秘法之书', '进阶书', '熟练书', '强化书'],
  // 阶段2 - 敏捷系
  agility_2: ['精钢之靴', '迅捷之靴', '疾行之靴', '进阶靴', '熟练靴', '强化靴'],
  // 阶段2 - 英雄系
  hero_2: ['精钢之徽', '勇士之徽', '战将之徽', '进阶徽', '熟练徽', '强化徽'],
  
  // 阶段3 - 剑士系
  sword_3: ['秘银之剑', '传奇之刃', '大师之剑', '高级剑', '精英剑', '专家剑'],
  // 阶段3 - 防守系
  defender_3: ['秘银之盾', '传奇之盾', '大师之盾', '高级盾', '精英盾', '专家盾'],
  // 阶段3 - 恢复系
  recovery_3: ['秘银之杖', '传奇之杖', '大师之杖', '高级杖', '精英杖', '专家杖'],
  // 阶段3 - 魔法系
  magic_3: ['秘银之书', '传奇之书', '大师之书', '高级书', '精英书', '专家书'],
  // 阶段3 - 敏捷系
  agility_3: ['秘银之靴', '传奇之靴', '大师之靴', '高级靴', '精英靴', '专家靴'],
  // 阶段3 - 英雄系
  hero_3: ['秘银之徽', '传奇之徽', '大师之徽', '高级徽', '精英徽', '专家徽'],
  
  // 阶段4 - 剑士系
  sword_4: ['龙鳞之剑', '传说之刃', '宗师之剑', '顶级剑', '史诗剑', '传奇剑'],
  // 阶段4 - 防守系
  defender_4: ['龙鳞之盾', '传说之盾', '宗师之盾', '顶级盾', '史诗盾', '传奇盾'],
  // 阶段4 - 恢复系
  recovery_4: ['龙鳞之杖', '传说之杖', '宗师之杖', '顶级杖', '史诗杖', '传奇杖'],
  // 阶段4 - 魔法系
  magic_4: ['龙鳞之书', '传说之书', '宗师之书', '顶级书', '史诗书', '传奇书'],
  // 阶段4 - 敏捷系
  agility_4: ['龙鳞之靴', '传说之靴', '宗师之靴', '顶级靴', '史诗靴', '传奇靴'],
  // 阶段4 - 英雄系
  hero_4: ['龙鳞之徽', '传说之徽', '宗师之徽', '顶级徽', '史诗徽', '传奇徽'],
  
  // 阶段5 - 剑士系
  sword_5: ['神铁之剑', '神话之刃', '至尊之剑', '神话剑', '神级剑', '至尊剑'],
  // 阶段5 - 防守系
  defender_5: ['神铁之盾', '神话之盾', '至尊之盾', '神话盾', '神级盾', '至尊盾'],
  // 阶段5 - 恢复系
  recovery_5: ['神铁之杖', '神话之杖', '至尊之杖', '神话杖', '神级杖', '至尊杖'],
  // 阶段5 - 魔法系
  magic_5: ['神铁之书', '神话之书', '至尊之书', '神话书', '神级书', '至尊书'],
  // 阶段5 - 敏捷系
  agility_5: ['神铁之靴', '神话之靴', '至尊之靴', '神话靴', '神级靴', '至尊靴'],
  // 阶段5 - 英雄系
  hero_5: ['神铁之徽', '神话之徽', '至尊之徽', '神话徽', '神级徽', '至尊徽'],
  
  // 阶段6 - 剑士系
  sword_6: ['混沌之剑', '创世之刃', '终焉之剑', '终极剑', '究极剑', '至强剑'],
  // 阶段6 - 防守系
  defender_6: ['混沌之盾', '创世之盾', '终焉之盾', '终极盾', '究极盾', '至强盾'],
  // 阶段6 - 恢复系
  recovery_6: ['混沌之杖', '创世之杖', '终焉之杖', '终极杖', '究极杖', '至强杖'],
  // 阶段6 - 魔法系
  magic_6: ['混沌之书', '创世之书', '终焉之书', '终极书', '究极书', '至强书'],
  // 阶段6 - 敏捷系
  agility_6: ['混沌之靴', '创世之靴', '终焉之靴', '终极靴', '究极靴', '至强靴'],
  // 阶段6 - 英雄系
  hero_6: ['混沌之徽', '创世之徽', '终焉之徽', '终极徽', '究极徽', '至强徽'],
};

// 属性到流派的映射
const ATTRIBUTE_TO_FLOWS = {
  attack: ['sword'], // 力量 -> 剑士系
  vitality: ['recovery', 'defender'], // 体力 -> 恢复系或防守系
  recovery: ['recovery', 'defender'], // 恢复 -> 恢复系或防守系
  magic: ['magic'], // 魔力 -> 魔法系
  agility: ['agility'], // 敏捷 -> 敏捷系
};

// 生成圣物（需要在main.js中调用时传入SKILL_CHAINS）
function generateRelic(stage, flow, attributeType, skillChains) {
  const key = `${flow}_${stage}`;
  const namePool = RELIC_NAMES[key] || [`${flow}圣物${stage}`];
  const name = namePool[Math.floor(Math.random() * namePool.length)];
  
  // 能力值加成 = 阶段 × 5
  const attributeBonus = stage * 5;
  
  // 根据属性类型和阶段，获取可用的被动技能
  const availablePassives = getAvailablePassiveSkills(flow, stage, skillChains);
  let passiveSkill = null;
  
  if (availablePassives.length > 0) {
    const selectedPassive = availablePassives[Math.floor(Math.random() * availablePassives.length)];
    // 确保被动技能包含chainId（从技能链中查找）
    if (selectedPassive && skillChains) {
      const chain = skillChains.find(c => c.flow === flow && c.steps.some(s => s.id === selectedPassive.id));
      if (chain) {
        passiveSkill = {
          ...selectedPassive,
          chainId: chain.id,
          flow: flow,
        };
      } else {
        passiveSkill = {
          ...selectedPassive,
          flow: flow,
        };
      }
    } else {
      passiveSkill = selectedPassive;
    }
  }
  
  return {
    id: `relic_${flow}_${stage}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name: name,
    stage: stage,
    flow: flow,
    attributeType: attributeType, // 'attack', 'vitality', 'recovery', 'magic', 'agility'
    attributeBonus: attributeBonus,
    passiveSkillId: passiveSkill ? passiveSkill.id : null,
    passiveSkill: passiveSkill, // 保存完整的被动技能数据（包含chainId）
  };
}

// 获取可用的被动技能（根据流派和阶段，需要在main.js中调用时传入SKILL_CHAINS）
function getAvailablePassiveSkills(flow, stage, skillChains) {
  if (!skillChains) return [];
  
  // 根据阶段确定技能等级范围
  // 阶段1: 0-10级, 阶段2: 10-20级, 阶段3: 20-30级, 阶段4/5/6: 30-40级
  const levelRanges = [
    { min: 0, max: 10 },   // 阶段1
    { min: 10, max: 20 },  // 阶段2
    { min: 20, max: 30 },  // 阶段3
    { min: 30, max: 40 },  // 阶段4
    { min: 30, max: 40 },  // 阶段5（与阶段4相同）
    { min: 30, max: 40 },  // 阶段6（与阶段4相同）
  ];
  
  const range = levelRanges[stage - 1] || levelRanges[0];
  
  // 从技能链中查找符合条件的被动技能
  const passives = [];
  
  skillChains.forEach(chain => {
    if (chain.flow === flow) {
      chain.steps.forEach(step => {
        // 只选择被动技能，且等级在范围内
        if (step.kind === 'passive' && 
            step.requiredLevel >= range.min && 
            step.requiredLevel <= range.max) {
          // 确保包含chainId和flow信息
          passives.push({
            ...step,
            chainId: chain.id,
            flow: flow,
          });
        }
      });
    }
  });
  
  return passives;
}

// 导出函数供 main.js 使用
window.RelicSystem = {
  generateRelic: generateRelic,
  ATTRIBUTE_TO_FLOWS: ATTRIBUTE_TO_FLOWS,
  RELIC_NAMES: RELIC_NAMES,
  getAvailablePassiveSkills: getAvailablePassiveSkills,
};

})();


