# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**勇者鬥弱鴿 (Rogue's Quest)** — a browser-based pixel roguelike adventure game built in vanilla JavaScript with Traditional Chinese UI. Inspired by classic Dragon Quest aesthetics, featuring turn-based combat, 6-stage branching node maps, and permadeath per run.

## Running the Game

Must be served over HTTP (ES6 modules fail on `file://` protocol):

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

There is no build step, no package manager, and no external JS dependencies. All code runs directly in the browser.

## Test Mode

Toggle in `src/config.js` via `testMode: true`. This auto-levels companions to level 30 and hero to level 40 for rapid testing. The `startStage` and `startNodeIndex` fields let you jump to specific game points.

## Architecture

### Module Loading

All JS modules attach data to `window.GameData` and are loaded via `<script>` tags in `index.html`. `main.js` destructures everything from `window.GameData` at startup.

### File Responsibilities

| File | Role |
|------|------|
| `main.js` (~26K lines) | Core engine: battle system, UI rendering, game state, event handling, all game logic |
| `skills.js` | 40+ skill definitions organized in 5 flows (sword, defender, recovery, magic, agility) with multi-tier evolution chains |
| `heroTypes.js` | Hero (5 archetypes) and companion (8 classes) definitions with growth multipliers and personalities |
| `monsters.js` | 40+ enemy types across 6 tiers with AI behavior patterns and drop tables |
| `equipment.js` | 96 equipment pieces (6 tiers × 4 flows × 4 slots) |
| `relics.js` | 36 relics (6 stages × 6 flows) for meta progression |
| `config.js` | Game tuning parameters, test mode toggle, boss minion config |
| `attributes.js` | 6 core attributes (attack, vitality, defense, recovery, magic, agility) |
| `items.js` | Consumable item definitions |
| `nodeTypes.js` | Overworld node type enum |
| `flowPalette.js` | UI color palette for skill flows |

### Key Data Patterns

- **SKILL_LOOKUP**: `Map` built from `SKILL_CHAINS` at startup for O(1) skill access by ID
- **ITEM_LOOKUP**: `Map` from `ITEMS` array
- **EQUIPMENT_LOOKUP**: Pre-built lookup table from `equipment.js`
- Game state lives in a centralized `state` object in `main.js` containing `hero`, `companions[]`, `relics[]`, `world`, `ui`, `settings`, and `log[]`
- Save/load uses `localStorage`

### Game Systems (all in main.js)

- **Battle**: Turn-based with command queue, AOE, multi-party-member support
- **Leveling**: EXP-based, HP/MP growth rolls, attribute allocation (pick 2), 3-choice skill draft
- **Companion**: Up to 3 companions with class/personality combinations affecting behavior
- **Equipment/Shop**: Tiered gear with flow synergies, town node trading
- **Events**: Branching narrative choices with risk/reward at overworld nodes
- **Relics**: Meta progression unlocks across stages

## Language

All user-facing strings and code comments are in **Traditional Chinese** (繁體中文). Some documentation files (TROUBLESHOOTING.md) use Simplified Chinese.

## Documentation

- `docs/spec.md` — Game design specification (v0.1)
- `docs/LEVEL_UP_RULES.md` — Detailed leveling formulas and growth mechanics
- `COMPANION_TENDENCIES.md` — Companion class × personality behavior matrix
- `PASSIVE_SKILLS_CHECK.md` — Passive skill audit with bug fix notes

## Asset Processing

Python scripts (`remove_background.py`, `remove_white_background.py`) process sprite assets using Pillow. Dependencies in `requirements.txt`.
