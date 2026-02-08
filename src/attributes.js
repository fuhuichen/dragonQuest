// 屬性定義
window.GameData = window.GameData || {};
window.GameData.ATTRIBUTES = [
  {
    id: 'attack',
    name: '攻擊',
    description: '提升物理傷害與暴擊率',
  },
  {
    id: 'vitality',
    name: '體力',
    description: '提升 HP 成長率與微量減傷',
  },
  {
    id: 'defense',
    name: '防禦',
    description: '降低受到的物理傷害',
  },
  {
    id: 'recovery',
    name: '恢復力',
    description: '提升治療與淨化能力',
  },
  {
    id: 'magic',
    name: '魔力',
    description: '提升 MP 成長與魔法傷害',
  },
  {
    id: 'agility',
    name: '敏捷',
    description: '先攻、閃避與技能冷卻',
  },
];

window.GameData.FLOWS = {
  sword: { id: 'sword', label: '劍技' },
  defender: { id: 'defender', label: '防守' },
  recovery: { id: 'recovery', label: '回復' },
  magic: { id: 'magic', label: '魔法' },
  agility: { id: 'agility', label: '敏捷' },
  hero: { id: 'hero', label: '勇者' },
};

window.GameData.BASE_ATTRIBUTES = {
  attack: 5,
  vitality: 5,
  defense: 5,
  recovery: 5,
  magic: 5,
  agility: 5,
};

window.GameData.BASE_STATS = {
  level: 1,
  xp: 10,
  nextLevelXp: 20,
  hp: 10,
  maxHp: 10,
  mp: 5,
  maxMp: 5,
  gold: 50,
};

