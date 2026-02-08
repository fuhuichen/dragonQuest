// data.js - 整合所有遊戲數據
// 此文件負責整合從其他文件載入的數據
// 所有定義已移到各自的文件：
// - config.js: GAME_CONFIG
// - attributes.js: ATTRIBUTES, FLOWS, BASE_ATTRIBUTES, BASE_STATS
// - nodeTypes.js: NODE_TYPES
// - flowPalette.js: FLOW_PALETTE
// - heroTypes.js: HERO_TYPES, COMPANION_TYPES
// - skills.js: SKILL_CHAINS
// - items.js: ITEMS, STARTING_ITEMS
// - equipment.js: EQUIPMENT, EQUIPMENT_LOOKUP
// - monsters.js: ENEMY_DECK

// 確保 window.GameData 已初始化（由其他文件初始化）
window.GameData = window.GameData || {};

// 所有數據已由其他文件載入到 window.GameData
// 此文件不需要額外操作，只是作為整合點
