(() => {
const ITEMS = [
  // HP回復道具 - 6個階段
  {
    id: 'herb_1',
    name: '藥草',
    description: '恢復 10 HP。',
    type: 'heal',
    value: 10,
    tier: 1,
    price: 25,
  },
  {
    id: 'herb_2',
    name: '高級藥草',
    description: '恢復 50 HP。',
    type: 'heal',
    value: 50,
    tier: 2,
    price: 100,
  },
  {
    id: 'herb_3',
    name: '特級藥草',
    description: '恢復 100 HP。',
    type: 'heal',
    value: 100,
    tier: 3,
    price: 250,
  },
  {
    id: 'herb_4',
    name: '超級藥草',
    description: '恢復 200 HP。',
    type: 'heal',
    value: 200,
    tier: 4,
    price: 600,
  },
  {
    id: 'herb_5',
    name: '極品藥草',
    description: '恢復 400 HP。',
    type: 'heal',
    value: 400,
    tier: 5,
    price: 1500,
  },
  {
    id: 'herb_6',
    name: '神級藥草',
    description: '恢復 999 HP。',
    type: 'heal',
    value: 999,
    tier: 6,
    price: 4000,
  },
  // MP回復道具 - 6個階段（價格是對應藥草的兩倍）
  {
    id: 'ether_1',
    name: '靈氣藥',
    description: '恢復 10 MP。',
    type: 'mp',
    value: 10,
    tier: 1,
    price: 50, // 藥草價格 25 的兩倍
  },
  {
    id: 'ether_2',
    name: '高級靈氣藥',
    description: '恢復 30 MP。',
    type: 'mp',
    value: 30,
    tier: 2,
    price: 200, // 高級藥草價格 100 的兩倍
  },
  {
    id: 'ether_3',
    name: '特級靈氣藥',
    description: '恢復 60 MP。',
    type: 'mp',
    value: 60,
    tier: 3,
    price: 500, // 特級藥草價格 250 的兩倍
  },
  {
    id: 'ether_4',
    name: '超級靈氣藥',
    description: '恢復 100 MP。',
    type: 'mp',
    value: 100,
    tier: 4,
    price: 1200, // 超級藥草價格 600 的兩倍
  },
  {
    id: 'ether_5',
    name: '極品靈氣藥',
    description: '恢復 200 MP。',
    type: 'mp',
    value: 200,
    tier: 5,
    price: 3000, // 極品藥草價格 1500 的兩倍
  },
  {
    id: 'ether_6',
    name: '神級靈氣藥',
    description: '恢復 999 MP。',
    type: 'mp',
    value: 999,
    tier: 6,
    price: 8000, // 神級藥草價格 4000 的兩倍
  },
  {
    id: 'elixir',
    name: '勇者靈藥',
    description: 'HP/MP 全滿（稀有）。',
    type: 'full',
    value: 0,
    tier: 6,
    price: 20000,
  },
];

const STARTING_ITEMS = [
  { id: 'herb_1', qty: 3 },
  { id: 'ether_1', qty: 2 },
];
  window.GameData = window.GameData || {};
  window.GameData.ITEMS = ITEMS;
  window.GameData.STARTING_ITEMS = STARTING_ITEMS;
})();
