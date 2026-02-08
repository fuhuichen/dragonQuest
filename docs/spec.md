# 勇者鬥弱鴿 Rogue's Quest Specification (v0.1)

## 1. Vision & Pillars
- **Pixel Roguelike Adventure**: Short, highly replayable runs inspired by classic Dragon Quest aesthetics (勇者鬥弱鴿 Rogue's Quest).
- **Branching Journeys**: Node-based overworld with random routes, events, dungeons, and towns on every run.
- **Build Variety**: Level-up choices and loot let the hero specialize in swordplay, recovery, or attack magic while still dipping into other styles.
- **Meaningful Failure**: Permadeath per run with meta progression that unlocks cosmetics, events, weapons, and skill pools.

## 2. Core Loop
1. Start run → pick male/female hero (visual only) → receive starter gear.
2. Traverse node map; at each node encounter battle, event, or town/shop.
3. Win battles to gain EXP, gold, loot; resolve events for bonuses/penalties.
4. Level up → auto stat growth → player stat allocation (2 picks) → skill 3-choice draft.
5. Reach dungeon boss; defeat to clear run or unlock deeper tiers. Death ends run and returns to camp/meta screen.

## 3. Player Character
- **Class**: Fixed “Hero” archetype (balanced base stats).
- **Gender Choice**: Male/Female toggle; affects sprite/voice only.
- **Base Stats**: HP, MP, Attack, Defense, Vitality (HP growth), Spirit (MP growth), Recovery, Magic, Agility.
- **Derived Stats**: Crit rate (from Attack/Magic mix), initiative (from Agility), status resistances (from Vitality/Spirit).

## 4. Attribute System
- On level-up the hero must choose **exactly 2** attributes to increase by +1 (or higher tiers if granted via events). Attributes:
  1. `Attack`: boosts physical skills & weapon damage.
  2. `Vitality`: raises HP growth chance per level and grants minor damage reduction.
  3. `Defense`: flat damage reduction and guard effectiveness.
  4. `Recovery`: increases healing skills/items, improves cleanse success.
  5. `Magic`: boosts MP growth chance, elemental spell damage, and status application.
  6. `Agility`: affects turn order, dodge, and some cooldown reductions.
- Optional variation knobs:
  - Randomly hide 2 attributes each level to force variety.
  - “Pity rule”: if an attribute hasn’t been offered for N levels, force it next level.

## 5. HP/MP Growth Logic
- Each level triggers two automatic rolls:
  - **HP Growth** = base value (e.g., +10) + `Vitality`-based chance to gain an extra chunk (+15~25). Example: every 10 Vitality grants +5% success chance; on success add bonus HP.
  - **MP Growth** = base value (+5) + `Magic`-based chance for extra chunk (+20~35).
- Growth results are shown before manual attribute selection so players see the impact of prior choices.

## 6. Skill System
- **Skill Pools by Flow**:
  - `Sword Arts`: physical techniques (Slash, Guard Break, Riposte, Sword Wave, etc.).
  - `Recovery`: heals, shields, cleanses, revive, HoTs.
  - `Attack Magic`: split into Lightning and Fireball sub-lines with evolutions (e.g., Lightning → Great Lightning → Chain Lightning AOE; Fireball → Mega Fireball → Inferno DoT).
- **Skill Evolution**:
  - Skills have tiers; acquiring the same skill again offers its upgraded version if prerequisites met.
  - Example chain: Lightning (single target) → Great Lightning (higher damage + splash) → Chain Lightning (full row), with added effects such as Shock debuff.
- **Passives**: mix of flow-specific (e.g., Sword Mastery) and general (e.g., Mana Siphon). Included in skill pools.

## 7. Level-Up Skill Draft (3-Choice System)
- After stat allocation, present 3 skill/perk options chosen via weighted random:
  - Determine current flow distribution: count hero skills per flow; highest count = **Primary Flow**.
  - Weight options: Primary Flow 60%, other flows share 40%.
  - Guarantee: at least 1 option is from a non-primary flow (replace if all three from primary).
  - If a skill can evolve, prioritize offering its next tier before new base skills.
  - Include passives/utility to avoid dead rolls when active skill limit reached.
- Optional safeguards:
  - Streak breaker to ensure neglected flow appears if absent for multiple levels.
  - Rarity tiers (common/rare/legendary) to spice choices.

## 8. Equipment & Shops
- Slots: Weapon, Armor, Accessory x2, Relic (late game).
- Weapon classes influence flow synergy: swords boost Sword Arts damage, staves enhance Magic, charms empower Recovery.
- Town nodes include:
  - **Weapon Smith**: upgrade/purchase weapons.
  - **Armor Dealer**: defensive gear.
  - **Item Shop**: consumables (potions, ethers, cleanse herbs, temp buffs).
- Loot pools roll per encounter; higher danger nodes grant better chances at rare gear.

## 9. Events & Nodes
- **Node Types**: Battle, Elite, Boss, Mystery Event, Town, Rest Camp, Shrine.
- **Events**: branching narrative choices with risk/reward (gain gold, lose HP, gain random skill, curse, etc.).
- **Branching Map**: at each stage present multiple nodes; player chooses path, some nodes lock others when taken.
- **Rest Camps**: heal % HP/MP, possibly let player re-roll upcoming skill draft.

## 10. Meta Progression (Future Work Hooks)
- Persistent currency unlocks:
  - Additional starting weapons, passive perks.
  - New event types, enemy variants, cosmetic sprites.
  - “Deck” modifiers that tweak weight tables (e.g., more Recovery rolls).
- Achievements tied to flow specialization encourage replay.

## 11. UX Flow
1. Title → Meta Camp → Start Run.
2. Gender select → tutorial tips (first run).
3. Overworld map screen with node selection.
4. Encounter screen (battle/event).
5. Level-up modal: HP/MP rolls → stat pick → skill draft.
6. Inventory/equipment screen accessible between nodes.
7. Run summary on death/clear, showing stats, choices, unlocks.

## 12. Open Questions / Next Steps
1. Finalize numerical tables (base stats, growth per level, skill damages).
2. Define concrete skill lists per flow with icons, cooldowns, costs.
3. Flesh out enemy families and how they interact with the three flows.
4. Specify meta progression currency, unlock costs, and pacing.
5. Choose engine/tech stack and define data schema (JSON, ScriptableObjects, etc.).

