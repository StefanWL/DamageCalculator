var moves = {
    "Accelerock": {
        "name": "Accelerock",
        "power": 40,
        "accuracy": 100,
        "type": "rock",
        "category": "physical",
        "contact": true,
        "special": "priority",
        "value": 1
    },
    "Acrobatics": {
        "name": "Acrobatics",
        "power": 110,
        "accuracy": 100,
        "type": "flying",
        "category": "physical",
        "contact": true,
        "special": "acrobatics",
        "value": 1
    },
    "Agility": {
        "name": "Agility",
        "power": 0,
        "accuracy": "-",
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": "self-spe-2",
        "value": 1
    },
    "Air Slash": {
        "name": "Air Slash",
        "power": 75,
        "accuracy": 95,
        "type": "flying",
        "category": "special",
        "contact": false,
        "special": "flinch",
        "value": 0.3
    },
    "Ancient Power": {
        "name": "Ancient Power",
        "power": 60,
        "accuracy": 100,
        "type": "rock",
        "category": "special",
        "contact": false,
        "special": "self-all-stats",
        "value": 0.2
    },
    "Aqua Jet": {
        "name": "Aqua Jet",
        "power": 40,
        "accuracy": 100,
        "type": "water",
        "category": "physical",
        "contact": true,
        "special": "priority",
        "value": 1
    },
    "Aqua Tail": {
        "name": "Aqua Tail",
        "power": 90,
        "accuracy": 90,
        "type": "water",
        "category": "physical",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Aromatherapy": {
        "name": "Aromatherapy",
        "power": 0,
        "accuracy": "-",
        "type": "grass",
        "category": "nondamaging",
        "contact": false,
        "special": "cure-team",
        "value": 0
    },
    "Assurance": {
        "name": "Assurance",
        "power": 0,
        "accuracy": "100",
        "type": "dark",
        "category": "assurance",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Aurora Veil": {
        "name": "Aurora Veil",
        "power": 0,
        "accuracy": "-",
        "type": "ice",
        "category": "nondamaging",
        "contact": false,
        "special": "aurora-veil",
        "value": 0
    },
    "Aura Sphere": {
        "name": "Aura Sphere",
        "power": 80,
        "accuracy": "-",
        "type": "fighting",
        "category": "special",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Autotomize": {
        "name": "Autotomize",
        "power": 0,
        "accuracy": "-",
        "type": "steel",
        "category": "nondamaging",
        "contact": false,
        "special": "self-spe-2",
        "value": 1
    },
    "Beat Up": {
        "name": "Beat Up",
        "power": 0,
        "accuracy": 100,
        "type": "dark",
        "category": "beatup",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Belly Drum": {
        "name": "Belly Drum",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "belly-drum",
        "value": 1
    },
    "Body Press": {
        "name": "Body Press",
        "power": 80,
        "accuracy": 100,
        "type": "fighting",
        "category": "bodypress",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Body Slam": {
        "name": "Body Slam",
        "power": 85,
        "accuracy": 100,
        "type": "normal",
        "category": "physical",
        "contact": true,
        "special": "paralyze",
        "value": 0.3
    },
    "Bolt Beak": {
        "name": "Bolt Beak",
        "power": 170,
        "accuracy": 100,
        "type": "electric",
        "category": "physical",
        "contact": true,
        "special": "bolt-beak",
        "value": 1
    },
    "Bolt Strike": {
        "name": "Bolt Strike",
        "power": 130,
        "accuracy": 85,
        "type": "electric",
        "category": "physical",
        "contact": true,
        "special": "paralyze",
        "value": 0.2
    },
    "Bonemerang": {
        "name": "Dragon Darts",
        "power": [50,50],
        "accuracy": [90,"-"],
        "type": "ground",
        "category": "physical",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Boomburst": {
        "name": "Boomburst",
        "power": 140,
        "accuracy": 100,
        "type": "normal",
        "category": "special",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Brave Bird": {
        "name": "Brave Bird",
        "power": 120,
        "accuracy": 100,
        "type": "flying",
        "category": "physical",
        "contact": true,
        "special": "recoil",
        "value": 0.33
    },
    "Bug Buzz": {
        "name": "Bug Buzz",
        "power": 90,
        "accuracy": 100,
        "type": "bug",
        "category": "special",
        "contact": false,
        "special": "opp-spd",
        "value": 0.1
    },
    "Bulk Up": {
        "name": "Bulk Up",
        "power": 0,
        "accuracy": "-",
        "type": "fighting",
        "category": "nondamaging",
        "contact": false,
        "special": ["self-atk", "self-def"],
        "value": [1,1]
    },
    "Bullet Punch": {
        "name": "Bullet Punch",
        "power": 40,
        "accuracy": 100,
        "type": "steel",
        "category": "physical",
        "contact": true,
        "special": "priority",
        "value": 1
    },
    "Calm Mind": {
        "name": "Calm Mind",
        "power": 0,
        "accuracy": "-",
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": ["self-spa", "self-spd"],
        "value": [1,1]
    },
    "Clanging Scales": {
        "name": "Clanging Scales",
        "power": 110,
        "accuracy": 100,
        "type": "dragon",
        "category": "special",
        "contact": false,
        "special": "self-def-down",
        "value": 1
    },
    "Clangorous Soul": {
        "name": "Clangorous Soul",
        "power": 0,
        "accuracy": "-",
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": "clangorous-soul",
        "value": 1
    },
    "Clear Smog": {
        "name": "Clear Smog",
        "power": 50,
        "accuracy": "-",
        "type": "poison",
        "category": "special",
        "contact": false,
        "special": "haze",
        "value": 1
    },
    "Close Combat": {
        "name": "Close Combat",
        "power": 120,
        "accuracy": 100,
        "type": "fighting",
        "category": "physical",
        "contact": true,
        "special": ["self-def-down", "self-spd-down"],
        "value": [1,1]
    },
    "Cosmic Power": {
        "name": "Cosmic Power",
        "power": 0,
        "accuracy": "-",
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": ["self-def", "self-spd"],
        "value": [1,1]
    },
    "Crabhammer": {
        "name": "Crabhammer",
        "power": 100,
        "accuracy": 90,
        "type": "water",
        "category": "physical",
        "contact": true,
        "special": "crit",
        "value": 1
    },
    "Crunch": {
        "name": "Crunch",
        "power": 80,
        "accuracy": 100,
        "type": "dark",
        "category": "physical",
        "contact": true,
        "special": "opp-def",
        "value": 0.2
    },
    "Curse": {
        "name": "Curse",
        "power": 0,
        "accuracy": "-",
        "type": "ghost",
        "category": "nondamaging",
        "contact": false,
        "special": ["self-atk", "self-def", "self-spe-down"],
        "value": [1,1,1]
    },
    "Dark Pulse": {
        "name": "Dark Pulse",
        "power": 80,
        "accuracy": 100,
        "type": "dark",
        "category": "special",
        "contact": false,
        "special": "flinch",
        "value": 0.2
    },
    "Darkest Lariat": {
        "name": "Darkest Lariat",
        "power": 85,
        "accuracy": 100,
        "type": "dark",
        "category": "physical",
        "contact": true,
        "special": "thru-boosts",
        "value": 1
    },
    "Dazzling Gleam": {
        "name": "Dazzling Gleam",
        "power": 80,
        "accuracy": 100,
        "type": "fairy",
        "category": "special",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Defog": {
        "name": "Defog",
        "power": 0,
        "accuracy": "-",
        "type": "flying",
        "category": "nondamaging",
        "contact": false,
        "special": ["defog", "opp-eva"],
        "value": [1, 1]
    },
    "Discharge": {
        "name": "Discharge",
        "power": 80,
        "accuracy": 100,
        "type": "electric",
        "category": "special",
        "contact": false,
        "special": "paralyze",
        "value": 0.3
    },
    "Double Iron Bash": {
        "name": "Double Iron Bash",
        "power": [60,60],
        "accuracy": [100,"-"],
        "type": "steel",
        "category": "physical",
        "contact": true,
        "special": "flinch",
        "value": 0.3
    },
    "Draco Meteor": {
        "name": "Draco Meteor",
        "power": 130,
        "accuracy": 90,
        "type": "dragon",
        "category": "special",
        "contact": false,
        "special": "self-spa-down-2",
        "value": 1
    },
    "Dragon Dance": {
        "name": "Dragon Dance",
        "power": 0,
        "accuracy": "-",
        "type": "dragon",
        "category": "nondamaging",
        "contact": false,
        "special": ["self-atk", "self-spe"],
        "value": [1,1]
    },
    "Dragon Claw": {
        "name": "Dragon Claw",
        "power": 80,
        "accuracy": 100,
        "type": "dragon",
        "category": "physical",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Dragon Darts": {
        "name": "Dragon Darts",
        "power": [50,50],
        "accuracy": [100,"-"],
        "type": "dragon",
        "category": "physical",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Drain Punch": {
        "name": "Drain Punch",
        "power": 75,
        "accuracy": 100,
        "type": "fighting",
        "category": "physical",
        "contact": true,
        "special": "heal",
        "value": 0.5
    },
    "Draining Kiss": {
        "name": "Draining Kiss",
        "power": 50,
        "accuracy": 100,
        "type": "fairy",
        "category": "special",
        "contact": true,
        "special": "heal",
        "value": 0.75
    },
    "Drill Peck": {
        "name": "Drill Peck",
        "power": 80,
        "accuracy": 100,
        "type": "flying",
        "category": "physical",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Dual Wingbeat": {
        "name": "Dual Wingbeat",
        "power": [40,40],
        "accuracy": [90,"-"],
        "type": "flying",
        "category": "physical",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Earth Power": {
        "name": "Earth Power",
        "power": 90,
        "accuracy": 100,
        "type": "ground",
        "category": "special",
        "contact": false,
        "special": "opp-spd",
        "value": 0.1
    },
    "Earthquake": {
        "name": "Earthquake",
        "power": 100,
        "accuracy": 100,
        "type": "ground",
        "category": "physical",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Electro Ball": {
        "name": "Electro Ball",
        "power": "-",
        "accuracy": 100,
        "type": "electric",
        "category": "speed",
        "contact": true,
        "special": "",
        "value": 1
    },
    "Encore": {
        "name": "Encore",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "encore",
        "value": 0
    },
    "Endeavor": {
        "name": "Endeavor",
        "power": 0,
        "accuracy": 100,
        "type": "normal",
        "category": "endeavor",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Energy Ball": {
        "name": "Energy Ball",
        "power": 90,
        "accuracy": 100,
        "type": "grass",
        "category": "special",
        "contact": false,
        "special": "opp-spd",
        "value": 0.1
    },
    "Expanding Force": {
        "name": "Expanding Force",
        "power": 80,
        "accuracy": 100,
        "type": "psychic",
        "category": "special",
        "contact": false,
        "special": "terrain-boost",
        "value": 1.5
    },
    "Explosion": {
        "name": "Explosion",
        "power": 250,
        "accuracy": 100,
        "type": "normal",
        "category": "physical",
        "contact": false,
        "special": "sd",
        "value": 1
    },
    "Extreme Speed": {
        "name": "Extreme Speed",
        "power": 40,
        "accuracy": 100,
        "type": "normal",
        "category": "physical",
        "contact": true,
        "special": "priority",
        "value": 1
    },
    "Facade": {
        "name": "Facade",
        "power": 140,
        "accuracy": 100,
        "type": "normal",
        "category": "physical",
        "contact": true,
        "special": "facade",
        "value": 1
    },
    "Fiery Wrath": {
        "name": "Fiery Wrath",
        "power": 90,
        "accuracy": 100,
        "type": "dark",
        "category": "special",
        "contact": false,
        "special": "flinch",
        "value": 0.2
    },
    "Final Gambit": {
        "name": "Final Gambit",
        "power": 0,
        "accuracy": "-",
        "type": "fighting",
        "category": "finalgambit",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Fire Blast": {
        "name": "Fire Blast",
        "power": 110,
        "accuracy": 85,
        "type": "fire",
        "category": "special",
        "contact": false,
        "special": "burn",
        "value": 0.1
    },
    "Fire Fang": {
        "name": "Fire Fang",
        "power": 65,
        "accuracy": 95,
        "type": "fire",
        "category": "physical",
        "contact": true,
        "special": ["burn", "flinch"],
        "value": [0.1, 0.1]
    },
    "Fire Punch": {
        "name": "Fire Punch",
        "power": 75,
        "accuracy": 100,
        "type": "fire",
        "category": "physical",
        "contact": true,
        "special": "burn",
        "value": 0.1
    },
    "First Impression": {
        "name": "First Impression",
        "power": 90,
        "accuracy": 100,
        "type": "bug",
        "category": "physical",
        "contact": true,
        "special": "priority",
        "value": 1
    },
    "Flamethrower": {
        "name": "Flamethrower",
        "power": 90,
        "accuracy": 100,
        "type": "fire",
        "category": "special",
        "contact": false,
        "special": "burn",
        "value": 0.1
    },
    "Flare Blitz": {
        "name": "Flare Blitz",
        "power": 120,
        "accuracy": 100,
        "type": "fire",
        "category": "physical",
        "contact": true,
        "special": "recoil",
        "value": 0.33
    },
    "Flash Cannon": {
        "name": "Flash Cannon",
        "power": 80,
        "accuracy": 100,
        "type": "steel",
        "category": "special",
        "contact": false,
        "special": "opp-spd",
        "value": 0.1
    },
    "Flip Turn": {
        "name": "Flip Turn",
        "power": 60,
        "accuracy": 100,
        "type": "water",
        "category": "physical",
        "contact": true,
        "special": "switch",
        "value": 0
    },
    "Focus Blast": {
        "name": "Focus Blast",
        "power": 120,
        "accuracy": 70,
        "type": "fighting",
        "category": "special",
        "contact": false,
        "special": "opp-spd",
        "value": 0.1
    },
    "Foul Play": {
        "name": "Foul Play",
        "power": 95,
        "accuracy": 00,
        "type": "dark",
        "category": "foulplay",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Freeze-Dry": {
        "name": "Freeze-Dry",
        "power": 70,
        "accuracy": 100,
        "type": "ice",
        "category": "special",
        "contact": false,
        "special": "water-multiplier",
        "value": 4
    },
    "Future Sight": {
        "name": "Future Sight",
        "power": 120,
        "accuracy": 100,
        "type": "psychic",
        "category": "special",
        "contact": false,
        "special": "delay",
        "value": 2
    },
    "Future Sight": {
        "name": "Future Sight",
        "power": 120,
        "accuracy": 100,
        "type": "psychic",
        "category": "special",
        "contact": false,
        "special": "delay",
        "value": 2
    },
    "Giga Drain": {
        "name": "Giga Drain",
        "power": 75,
        "accuracy": 100,
        "type": "grass",
        "category": "special",
        "contact": false,
        "special": "heal",
        "value": 0.5
    },
    "Glaciate": {
        "name": "Glaciate",
        "power": 65,
        "accuracy": 95,
        "type": "ice",
        "category": "special",
        "contact": false,
        "special": "opp-spe",
        "value": 1
    },
    "Grass Knot": {
        "name": "Grass Knot",
        "power": "weight",
        "accuracy": 100,
        "type": "grass",
        "category": "weight",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Grassy Glide": {
        "name": "Grassy Glide",
        "power": 70,
        "accuracy": 100,
        "type": "grass",
        "category": "physical",
        "contact": true,
        "special": "terrain-priority",
        "value": 1
    },
    "Growth": {
        "name": "Growth",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": ["self-atk-2", "self-spa-2"],
        "value": [1,1]
    },
    "Gyro Ball": {
        "name": "Gyro Ball",
        "power": "-",
        "accuracy": 100,
        "type": "steel",
        "category": "speed",
        "contact": true,
        "special": "",
        "value": 1
    },
    "Hail": {
        "name": "Hail",
        "power": 0,
        "accuracy": "-",
        "type": "ice",
        "category": "nondamaging",
        "contact": false,
        "special": "weather-hail",
        "value": 0
    },
    "Haze": {
        "name": "Haze",
        "power": 0,
        "accuracy": "-",
        "type": "ice",
        "category": "nondamaging",
        "contact": false,
        "special": "stats-clear",
        "value": 0
    },
    "Heal Bell": {
        "name": "Heal Bell",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "cure-team",
        "value": 0
    },
    "Healing Wish": {
        "name": "Healing Wish",
        "power": 0,
        "accuracy": "-",
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": "healing-wish",
        "value": 1
    },
    "Heat Wave": {
        "name": "Heat Wave",
        "power": 95,
        "accuracy": 90,
        "type": "fire",
        "category": "special",
        "contact": false,
        "special": "burn",
        "value": 0.1
    },
    "Heavy Slam": {
        "name": "Heavy Slam",
        "power": "-",
        "accuracy": 100,
        "type": "steel",
        "category": "self-weight",
        "contact": true,
        "special": "",
        "value": 0
    },
    "High Horsepower": {
        "name": "High Horsepower",
        "power": 95,
        "accuracy": 95,
        "type": "ground",
        "category": "physical",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Hone Claws": {
        "name": "Hone Claws",
        "power": 0,
        "accuracy": "-",
        "type": "dark",
        "category": "nondamaging",
        "contact": false,
        "special": ["self-atk", "self-acc"],
        "value": [1,1]
    },
    "Horn Leech": {
        "name": "Horn Leech",
        "power": 75,
        "accuracy": 100,
        "type": "grass",
        "category": "physical",
        "contact": true,
        "special": "heal",
        "value": 0.5
    },
    "Hurricane": {
        "name": "Hurricane",
        "power": 110,
        "accuracy": 70,
        "type": "flying",
        "category": "special",
        "contact": false,
        "special": "confuse",
        "value": 0.3
    },
    "Hydro Pump": {
        "name": "Hydro Pump",
        "power": 110,
        "accuracy": 80,
        "type": "water",
        "category": "special",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Hypnosis": {
        "name": "Hypnosis",
        "power": 0,
        "accuracy": 60,
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": "sleep",
        "value": 1
    },
    "Ice Beam": {
        "name": "Ice Beam",
        "power": 90,
        "accuracy": 100,
        "type": "ice",
        "category": "special",
        "contact": false,
        "special": "freeze",
        "value": 0.1
    },
    "Ice Fang": {
        "name": "Ice Fang",
        "power": 65,
        "accuracy": 95,
        "type": "ice",
        "category": "physical",
        "contact": true,
        "special": ["freeze", "flinch"],
        "value": [0.1, 0.1]
    },
    "Ice Punch": {
        "name": "Ice Punch",
        "power": 75,
        "accuracy": 100,
        "type": "ice",
        "category": "physical",
        "contact": true,
        "special": "freeze",
        "value": 0.1
    },
    "Ice Shard": {
        "name": "Ice Shard",
        "power": 40,
        "accuracy": 100,
        "type": "ice",
        "category": "physical",
        "contact": true,
        "special": "priority",
        "value": 1
    },
    "Icicle Crash": {
        "name": "Icicle Spear",
        "power": 85,
        "accuracy": 90,
        "type": "ice",
        "category": "physical",
        "contact": false,
        "special": "flinch",
        "value": 0.3
    },
    "Icicle Spear": {
        "name": "Icicle Spear",
        "power": [25,25,25,25,25],
        "accuracy": [90,"-",65,46,50],
        "type": "ice",
        "category": "physical",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Icy Wind": {
        "name": "Icy Wind",
        "power": 55,
        "accuracy": 95,
        "type": "ice",
        "category": "special",
        "contact": false,
        "special": "opp-spe-down",
        "value": 1
    },
    "Iron Defense": {
        "name": "Iron Defense",
        "power": 0,
        "accuracy": "-",
        "type": "steel",
        "category": "nondamaging",
        "contact": false,
        "special": "self-def-2",
        "value": 1
    },
    "Iron Head": {
        "name": "Iron Head",
        "power": 80,
        "accuracy": 100,
        "type": "steel",
        "category": "physical",
        "contact": true,
        "special": "opp-def-down",
        "value": 0.3
    },
    "Iron Tail": {
        "name": "Iron Tail",
        "power": 100,
        "accuracy": 75,
        "type": "steel",
        "category": "physical",
        "contact": true,
        "special": "flinch",
        "value": 0.3
    },
    "King's Shield": {
        "name": "King's Shield",
        "power": 0,
        "accuracy": "-",
        "type": "steel",
        "category": "nondamaging",
        "contact": false,
        "special": "protect",
        "value": 1
    },
    "Knock Off": {
        "name": "Knock Off",
        "power": 65,
        "accuracy": 100,
        "type": "dark",
        "category": "physical",
        "contact": true,
        "special": "knock-off",
        "value": 0
    },
    "Lava Plume": {
        "name": "Lava Plume",
        "power": 80,
        "accuracy": 100,
        "type": "fire",
        "category": "special",
        "contact": false,
        "special": "burn",
        "value": 0.3
    },
    "Leaf Blade": {
        "name": "Leaf Blade",
        "power": 90,
        "accuracy": 100,
        "type": "grass",
        "category": "physical",
        "contact": true,
        "special": "crit",
        "value": 0.3
    },
    "Leaf Storm": {
        "name": "Leaf Storm",
        "power": 130,
        "accuracy": 90,
        "type": "grass",
        "category": "special",
        "contact": false,
        "special": "self-spa-down-2",
        "value": 1
    },
    "Leech Life": {
        "name": "Leech Life",
        "power": 75,
        "accuracy": 100,
        "type": "bug",
        "category": "physical",
        "contact": true,
        "special": "heal",
        "value": 0.5
    },
    "Leech Seed": {
        "name": "Leech Seed",
        "power": 0,
        "accuracy": 90,
        "type": "grass",
        "category": "nondamaging",
        "contact": false,
        "special": "seed",
        "value": 1
    },
    "Light Screen": {
        "name": "Light Screen",
        "power": 0,
        "accuracy": "-",
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": "light-screen",
        "value": 1
    },
    "Liquidation": {
        "name": "Liquidation",
        "power": 85,
        "accuracy": 100,
        "type": "water",
        "category": "physical",
        "contact": true,
        "special": "opp-def",
        "value": 0.2
    },
    "Low Kick": {
        "name": "Low Kick",
        "power": "weight",
        "accuracy": 100,
        "type": "fighting",
        "category": "weight",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Lunar Dance": {
        "name": "Lunar Dance",
        "power": 0,
        "accuracy": "-",
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": "healing-wish",
        "value": 1
    },
    "Mach Punch": {
        "name": "Mach Punch",
        "power": 40,
        "accuracy": 100,
        "type": "fighting",
        "category": "physical",
        "contact": true,
        "special": "priority",
        "value": 1
    },
    "Magic Coat": {
        "name": "Magic Coat",
        "power": "-",
        "accuracy": 100,
        "type": "psychic",
        "category": "magiccoat",
        "contact": true,
        "special": "",
        "value": 1
    },
    "Magma Storm": {
        "name": "Magma Storm",
        "power": 100,
        "accuracy": 75,
        "type": "fire",
        "category": "special",
        "contact": false,
        "special": "vortex",
        "value": 0
    },
    "Mega Kick": {
        "name": "Mega Kick",
        "power": 120,
        "accuracy": 75,
        "type": "normal",
        "category": "physical",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Megahorn": {
        "name": "Megahorn",
        "power": 120,
        "accuracy": 85,
        "type": "bug",
        "category": "physical",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Meteor Beam": {
        "name": "Meteor Beam",
        "power": 120,
        "accuracy": 90,
        "type": "rock",
        "category": "special",
        "contact": false,
        "special": "self-spa",
        "value": 1
    },
    "Meteor Mash": {
        "name": "Meteor Mash",
        "power": 90,
        "accuracy": 90,
        "type": "steel",
        "category": "physical",
        "contact": true,
        "special": "self-atk",
        "value": 0.2
    },
    "Misty Explosion": {
        "name": "Misty Explosion",
        "power": 100,
        "accuracy": 100,
        "type": "fairy",
        "category": "special",
        "contact": false,
        "special": "sd",
        "value": 1
    },
    "Moonblast": {
        "name": "Moonblast",
        "power": 95,
        "accuracy": 100,
        "type": "fairy",
        "category": "special",
        "contact": false,
        "special": "opp-spa",
        "value": 0.3
    },
    "Moonlight": {
        "name": "Moonlight",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "recover",
        "value": 0.5
    },
    "Morning Sun": {
        "name": "Morning Sun",
        "power": 0,
        "accuracy": "-",
        "type": "fairy",
        "category": "nondamaging",
        "contact": false,
        "special": "recover",
        "value": 0.5
    },
    "Mystical Fire": {
        "name": "Mystical Fire",
        "power": 75,
        "accuracy": 100,
        "type": "fire",
        "category": "special",
        "contact": false,
        "special": "opp-spa-down",
        "value": 1
    },
    "Nasty Plot": {
        "name": "Nasty Plot",
        "power": 0,
        "accuracy": "-",
        "type": "dark",
        "category": "nondamaging",
        "contact": false,
        "special": "self-spa-2",
        "value": 1
    },
    "Nature's Madness": {
        "name": "Nature's Madness",
        "power": 50,
        "accuracy": 90,
        "type": "fairy",
        "category": "proportion",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Obstruct": {
        "name": "Obstruct",
        "power": 0,
        "accuracy": "-",
        "type": "dark",
        "category": "nondamaging",
        "contact": false,
        "special": ["protect", "opp-def-down-2"],
        "value": [1,1]
    },
    "Outrage": {
        "name": "Outrage",
        "power": 120,
        "accuracy": 100,
        "type": "dragon",
        "category": "physical",
        "contact": true,
        "special": "locked",
        "value": 0
    },
    "Overdrive": {
        "name": "Overdrive",
        "power": 80,
        "accuracy": 100,
        "type": "electric",
        "category": "special",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Overheat": {
        "name": "Overheat",
        "power": 130,
        "accuracy": 90,
        "type": "fire",
        "category": "special",
        "contact": false,
        "special": "self-spa-down-2",
        "value": 1
    },
    "Pain Split": {
        "name": "Pain Split",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "painsplit",
        "value": 1
    },
    "Parting Shot": {
        "name": "Parting Shot",
        "power": 0,
        "accuracy": 100,
        "type": "dark",
        "category": "nondamaging",
        "contact": true,
        "special": ["opp-atk-down", "opp-spd-down","switch"],
        "value": [1,1,0]
    },
    "Phantom Force": {
        "name": "Phantom Force",
        "power": 90,
        "accuracy": 100,
        "type": "ghost",
        "category": "physical",
        "contact": true,
        "special": ["disappears", "thru-screens"],
        "value": [1, 1]
    },
    "Photon Geyser": {
        "name": "Photon Geyser",
        "power": 100,
        "accuracy": 100,
        "type": "psychic",
        "category": "photongeyser",
        "contact": true,
        "special": "photongeyser",
        "value": 1
    },
    "Plasma Fists": {
        "name": "Plasma Fists",
        "power": 100,
        "accuracy": 100,
        "type": "electric",
        "category": "physical",
        "contact": true,
        "special": "plasmafists",
        "value": 1
    },
    "Play Rough": {
        "name": "Play Rough",
        "power": 90,
        "accuracy": 90,
        "type": "fairy",
        "category": "physical",
        "contact": true,
        "special": "opp-atk",
        "value": 0.1
    },
    "Poison Jab": {
        "name": "Poison Jab",
        "power": 80,
        "accuracy": 100,
        "type": "poison",
        "category": "physical",
        "contact": true,
        "special": "poison",
        "value": 0.3
    },
    "Poltergeist": {
        "name": "Poltergeist",
        "power": 90,
        "accuracy": 90,
        "type": "ghost",
        "category": "physical",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Power Gem": {
        "name": "Power Gem",
        "power": 80,
        "accuracy": 100,
        "type": "rock",
        "category": "special",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Power Whip": {
        "name": "Power Whip",
        "power": 120,
        "accuracy": 85,
        "type": "grass",
        "category": "physical",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Protect": {
        "name": "Protect",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "protect",
        "value": 1
    },
    "Psychic": {
        "name": "Psychic",
        "power": 90,
        "accuracy": 100,
        "type": "psychic",
        "category": "special",
        "contact": false,
        "special": "opp-spd",
        "value": 0.1
    },
    "Psychic Fangs": {
        "name": "Psychic Fangs",
        "power": 85,
        "accuracy": 100,
        "type": "psychic",
        "category": "physical",
        "contact": true,
        "special": "end-screens",
        "value": 0
    },
    "Psycho Cut": {
        "name": "Psycho Cut",
        "power": 70,
        "accuracy": 100,
        "type": "psychic",
        "category": "physical",
        "contact": true,
        "special": "crit",
        "value": 0.3
    },
    "Psyshock": {
        "name": "Psyshock",
        "power": 80,
        "accuracy": 100,
        "type": "psychic",
        "category": "psyshock",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Quick Attack": {
        "name": "Quick Attack",
        "power": 40,
        "accuracy": 100,
        "type": "normal",
        "category": "physical",
        "contact": true,
        "special": "priority",
        "value": 1
    },
    "Quiver Dance": {
        "name": "Quiver Dance",
        "power": 0,
        "accuracy": "-",
        "type": "bug",
        "category": "nondamaging",
        "contact": false,
        "special": ["self-spa", "self-spa", "self-spe"],
        "value": [1,1,1]
    },
    "Rapid Spin": {
        "name": "Rapid Spin",
        "power": 50,
        "accuracy": 100,
        "type": "normal",
        "category": "physical",
        "contact": true,
        "special": "rapid-spin",
        "value": 0
    },
    "Recover": {
        "name": "Recover",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "recover",
        "value": 0.5
    },
    "Reflect": {
        "name": "Reflect",
        "power": 0,
        "accuracy": "-",
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": "reflect",
        "value": 1
    },
    "Rest": {
        "name": "Rest",
        "power": 0,
        "accuracy": "-",
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": ["recover","self-sleep"],
        "value": [0.5,1]
    },
    "Rising Voltage": {
        "name": "Rising Voltage",
        "power": 140,
        "accuracy": 100,
        "type": "electric",
        "category": "special",
        "contact": false,
        "special": "risingvoltage",
        "value": 0.1
    },
    "Rock Blast": {
        "name": "Rock Blast",
        "power": [25,25,25,25,25],
        "accuracy": [90,"-",65,46,50],
        "type": "rock",
        "category": "physical",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Rock Polish": {
        "name": "Rock Polish",
        "power": 0,
        "accuracy": "-",
        "type": "rock",
        "category": "nondamaging",
        "contact": false,
        "special": "self-spe-2",
        "value": 1
    },
    "Roost": {
        "name": "Roost",
        "power": 0,
        "accuracy": "-",
        "type": "flying",
        "category": "nondamaging",
        "contact": false,
        "special": "recover",
        "value": 0.5
    },
    "Sacred Sword": {
        "name": "Sacred Sword",
        "power": 90,
        "accuracy": 100,
        "type": "fighting",
        "category": "physical",
        "contact": true,
        "special": "thru-boosts",
        "value": 1
    },
    "Safeguard": {
        "name": "Safeguard",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "safeguard",
        "value": 1
    },
    "Sand Tomb": {
        "name": "Sand Tomb",
        "power": 35,
        "accuracy": 85,
        "type": "ground",
        "category": "physical",
        "contact": false,
        "special": "vortex",
        "value": 0
    },
    "Scald": {
        "name": "Scald",
        "power": 80,
        "accuracy": 100,
        "type": "water",
        "category": "special",
        "contact": false,
        "special": "burn",
        "value": 0.3
    },
    "Scale Shot": {
        "name": "Scale Shot",
        "power": [25,25,25,25,25],
        "accuracy": [90,"-",65,46,50],
        "type": "dragon",
        "category": "physical",
        "contact": false,
        "special": ["self-spe","self-def-down"],
        "value": [1,1]
    },
    "Scorching Sands": {
        "name": "Scorching Sands",
        "power": 70,
        "accuracy": 100,
        "type": "ground",
        "category": "special",
        "contact": false,
        "special": "burn",
        "value": 0.3
    },
    "Secret Sword": {
        "name": "Secret Sword",
        "power": 90,
        "accuracy": 100,
        "type": "fighting",
        "category": "special",
        "contact": false,
        "special": "thru-boosts",
        "value": 1
    },
    "Seismic Toss": {
        "name": "Seismic Toss",
        "power": 100,
        "accuracy": 100,
        "type": "fighting",
        "category": "set",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Shadow Ball": {
        "name": "Shadow Ball",
        "power": 80,
        "accuracy": 100,
        "type": "ghost",
        "category": "special",
        "contact": false,
        "special": "opp-spd",
        "value": 0.2
    },
    "Shadow Claw": {
        "name": "Shadow Claw",
        "power": 70,
        "accuracy": 100,
        "type": "ghost",
        "category": "physical",
        "contact": true,
        "special": "crit",
        "value": 1
    },
    "Shadow Sneak": {
        "name": "Shadow Sneak",
        "power": 40,
        "accuracy": 100,
        "type": "ghost",
        "category": "physical",
        "contact": true,
        "special": "priority",
        "value": 1
    },
    "Shell Side Arm": {
        "name": "Shell Side Arm",
        "power": 90,
        "accuracy": 100,
        "type": "poison",
        "category": "shellsidearm",
        "contact": false,
        "special": "poison",
        "value": 0.2
    },
    "Shell Smash": {
        "name": "Shell Smash",
        "power": 0,
        "accuracy": "-",
        "type": "water",
        "category": "nondamaging",
        "contact": false,
        "special": ["self-atk-2","self-spa-2","self-spe-2","self-def-down","self-spd-down"],
        "value": [1,1,1,1,1]
    },
    "Shift Gear": {
        "name": "Shift Gear",
        "power": 0,
        "accuracy": "-",
        "type": "steel",
        "category": "nondamaging",
        "contact": false,
        "special": ["self-atk", "self-spe-2"],
        "value": [1,1]
    },
    "Slack Off": {
        "name": "Slack Off",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "recover",
        "value": 0.5
    },
    "Sleep Powder": {
        "name": "Sleep Powder",
        "power": 0,
        "accuracy": 75,
        "type": "grass",
        "category": "nondamaging",
        "contact": false,
        "special": "sleep",
        "value": 1
    },
    "Sleep Talk": {
        "name": "Sleep Talk",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "sleeptalk",
        "value": 1
    },
    "Sludge Bomb": {
        "name": "Sludge Bomb",
        "power": 90,
        "accuracy": 100,
        "type": "poison",
        "category": "special",
        "contact": false,
        "special": "poison",
        "value": 0.3
    },
    "Sludge Wave": {
        "name": "Sludge Wave",
        "power": 95,
        "accuracy": 100,
        "type": "poison",
        "category": "special",
        "contact": false,
        "special": "poison",
        "value": 0.1
    },
    "Smart Strike": {
        "name": "Smart Strike",
        "power": 70,
        "accuracy": "-",
        "type": "steel",
        "category": "physical",
        "contact": true,
        "special": "",
        "value": 0
    },
    "Soft-Boiled": {
        "name": "Soft-Boiled",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "recover",
        "value": 0.5
    },
    "Solar Beam": {
        "name": "Solar Beam",
        "power": 120,
        "accuracy": 100,
        "type": "grass",
        "category": "special",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Spikes": {
        "name": "Spikes",
        "power": 0,
        "accuracy": "-",
        "type": "ground",
        "category": "nondamaging",
        "contact": false,
        "special": "spikes",
        "value": 1
    },
    "Spirit Break": {
        "name": "Spirit Break",
        "power": 75,
        "accuracy": 100,
        "type": "fairy",
        "category": "physical",
        "contact": false,
        "special": "opp-spa-down",
        "value": 1
    },
    "Spore": {
        "name": "Spore",
        "power": 0,
        "accuracy": 100,
        "type": "grass",
        "category": "nondamaging",
        "contact": false,
        "special": "sleep",
        "value": 1
    },
    "Stealth Rock": {
        "name": "Stealth Rock",
        "power": 0,
        "accuracy": "-",
        "type": "rock",
        "category": "nondamaging",
        "contact": false,
        "special": "stealthrock",
        "value": 1
    },
    "Steam Eruption": {
        "name": "Steam Eruption",
        "power": 110,
        "accuracy": 95,
        "type": "water",
        "category": "special",
        "contact": false,
        "special": "burn",
        "value": 0.3
    },
    "Sticky Web": {
        "name": "Sticky Web",
        "power": 0,
        "accuracy": "-",
        "type": "bug",
        "category": "nondamaging",
        "contact": false,
        "special": "stickyweb",
        "value": 1
    },
    "Stomping Tantrum": {
        "name": "Stomping Tantrum",
        "power": 75,
        "accuracy": 100,
        "type": "ground",
        "category": "physical",
        "contact": false,
        "special": "stomping-tantrum",
        "value": 1
    },
    "Stone Edge": {
        "name": "Stone Edge",
        "power": 100,
        "accuracy": 80,
        "type": "rock",
        "category": "physical",
        "contact": true,
        "special": "crit",
        "value": 0.3
    },
    "Stored Power": {
        "name": "Stored Power",
        "power": "storedpower",
        "accuracy": 100,
        "type": "psychic",
        "category": "storedpower",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Strange Steam": {
        "name": "Strange Steam",
        "power": 90,
        "accuracy": 95,
        "type": "fairy",
        "category": "special",
        "contact": false,
        "special": "confuse",
        "value": 0.2
    },
    "Substitute": {
        "name": "Substitute",
        "power": 0,
        "accuracy": "-",
        "type": "ground",
        "category": "nondamaging",
        "contact": false,
        "special": "substitute",
        "value": 1
    },
    "Sucker Punch": {
        "name": "Sucker Punch",
        "power": 70,
        "accuracy": 100,
        "type": "dark",
        "category": "physical",
        "contact": true,
        "special": ["priority","suckerpunch"],
        "value": [1,1]
    },
    "Superpower": {
        "name": "Superpower",
        "power": 120,
        "accuracy": 100,
        "type": "fighting",
        "category": "physical",
        "contact": true,
        "special": ["self-atk-down", "self-def-down"],
        "value": [1,1]
    },
    "Surf": {
        "name": "Surf",
        "power": 90,
        "accuracy": 100,
        "type": "water",
        "category": "special",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Surging Strikes": {
        "name": "Surging Strikes",
        "power": [25,25,25],
        "accuracy": [100,"-","-"],
        "type": "water",
        "category": "physical",
        "contact": true,
        "special": "crit",
        "value": 1
    },
    "Switcheroo": {
        "name": "Switcheroo",
        "power": 0,
        "accuracy": 100,
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": "trick",
        "value": 1
    },
    "Swords Dance": {
        "name": "Swords Dance",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "self-atk-2",
        "value": 1
    },
    "Synthesis": {
        "name": "Synthesis",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "recover",
        "value": 0.5
    },
    "Taunt": {
        "name": "Taunt",
        "power": 0,
        "accuracy": "-",
        "type": "dark",
        "category": "nondamaging",
        "contact": false,
        "special": "taunt",
        "value": 1
    },
    "Teleport": {
        "name": "Teleport",
        "power": 0,
        "accuracy": "-",
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": ["priority","switch"],
        "value": [-5,0]
    },
    "Thousand Arrows": {
        "name": "Thousand Arrows",
        "power": 90,
        "accuracy": 100,
        "type": "ground",
        "category": "physical",
        "contact": false,
        "special": "smack-down",
        "value": 1
    },
    "Throat Chop": {
        "name": "Throat Chop",
        "power": 80,
        "accuracy": 100,
        "type": "dark",
        "category": "physical",
        "contact": false,
        "special": "mute",
        "value": 1
    },
    "Thunder": {
        "name": "Thunder",
        "power": 110,
        "accuracy": 70,
        "type": "electric",
        "category": "special",
        "contact": false,
        "special": "paralyze",
        "value": 0.3
    },
    "Thunder Fang": {
        "name": "Thunder Fang",
        "power": 65,
        "accuracy": 95,
        "type": "fire",
        "category": "physical",
        "contact": true,
        "special": ["paralyze", "flinch"],
        "value": [0.1, 0.1]
    },
    "Thunder Punch": {
        "name": "Thunder Punch",
        "power": 75,
        "accuracy": 100,
        "type": "electric",
        "category": "physical",
        "contact": true,
        "special": "paralyze",
        "value": 0.1
    },
    "Thunder Wave": {
        "name": "Thunder Wave",
        "power": 0,
        "accuracy": 90,
        "type": "electric",
        "category": "nondamaging",
        "contact": false,
        "special": "paralyze",
        "value": 1
    },
    "Thunderbolt": {
        "name": "Thunderbolt",
        "power": 90,
        "accuracy": 100,
        "type": "electric",
        "category": "special",
        "contact": false,
        "special": "paralyze",
        "value": 0.1
    },
    "Thunderous Kick": {
        "name": "Thunderous Kick",
        "power": 90,
        "accuracy": 100,
        "type": "fighting",
        "category": "physical",
        "contact": false,
        "special": "opp-def-down",
        "value": 1
    },
    "Toxic": {
        "name": "Toxic",
        "power": 0,
        "accuracy": 85,
        "type": "poison",
        "category": "nondamaging",
        "contact": false,
        "special": "toxic",
        "value": 1
    },
    "Toxic Spikes": {
        "name": "Toxic Spikes",
        "power": 0,
        "accuracy": "-",
        "type": "poison",
        "category": "nondamaging",
        "contact": false,
        "special": "toxicspikes",
        "value": 1
    },
    "Transform": {
        "name": "Transform",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "transform",
        "value": 1
    },
    "Tri Attack": {
        "name": "Tri Attack",
        "power": 80,
        "accuracy": 100,
        "type": "normal",
        "category": "special",
        "contact": false,
        "special": ["burn","paralyze","freeze"],
        "value": [0.066,0.066,0.066]
    },
    "Trick": {
        "name": "Trick",
        "power": 0,
        "accuracy": 100,
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": "trick",
        "value": 1
    },
    "Trick Room": {
        "name": "Trick Room",
        "power": 0,
        "accuracy": '-',
        "type": "psychic",
        "category": "nondamaging",
        "contact": false,
        "special": "trick-room",
        "value": 1
    },
    "Triple Axel": {
        "name": "Triple Axel",
        "power": [20,40,60],
        "accuracy": [90,90,90],
        "type": "ice",
        "category": "physical",
        "contact": true,
        "special": "",
        "value": 0
    },
    "U-turn": {
        "name": "U-turn",
        "power": 70,
        "accuracy": 100,
        "type": "bug",
        "category": "physical",
        "contact": true,
        "special": "switch",
        "value": 0
    },
    "V-create": {
        "name": "V-create",
        "power": 180,
        "accuracy": 95,
        "type": "fire",
        "category": "physical",
        "contact": true,
        "special": ["self-def-down","self-spd-down","self-spe-down"],
        "value": [1,1,1]
    },
    "Vacuum Wave": {
        "name": "Vacuum Wave",
        "power": 40,
        "accuracy": 100,
        "type": "fighting",
        "category": "special",
        "contact": true,
        "special": "priority",
        "value": 1
    },
    "Volt Switch": {
        "name": "Volt Switch",
        "power": 70,
        "accuracy": 100,
        "type": "electric",
        "category": "special",
        "contact": false,
        "special": "switch",
        "value": 0
    },
    "Waterfall": {
        "name": "Waterfall",
        "power": 80,
        "accuracy": 100,
        "type": "water",
        "category": "physical",
        "contact": true,
        "special": "flinch",
        "value": 0.2
    },
    "Weather Ball": {
        "name": "Weather Ball",
        "power": "weatherball",
        "accuracy": 100,
        "type": "weatherball",
        "category": "weatherball",
        "contact": false,
        "special": "",
        "value": 0
    },
    "Whirlpool": {
        "name": "Whirlpool",
        "power": 35,
        "accuracy": 85,
        "type": "water",
        "category": "special",
        "contact": false,
        "special": "vortex",
        "value": 0
    },
    "Whirlwind": {
        "name": "Whirlwind",
        "power": 0,
        "accuracy": "-",
        "type": "flying",
        "category": "nondamaging",
        "contact": false,
        "special": "switch-enemy",
        "value": 0
    },
    "Wild Charge": {
        "name": "Wild Charge",
        "power": 90,
        "accuracy": 100,
        "type": "electric",
        "category": "physical",
        "contact": false,
        "special": "recoil",
        "value": 0.25
    },
    "Will-o-Wisp": {
        "name": "Will-o-Wisp",
        "power": 0,
        "accuracy": 85,
        "type": "fire",
        "category": "nondamaging",
        "contact": false,
        "special": "burn",
        "value": 1
    },
    "Wish": {
        "name": "Wish",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": ["recover","delay"],
        "value": [0.5,1]
    },
    "Wood Hammer": {
        "name": "Wood Hammer",
        "power": 120,
        "accuracy": 100,
        "type": "grass",
        "category": "physical",
        "contact": true,
        "special": "recoil",
        "value": 0.33
    },
    "Yawn": {
        "name": "Yawn",
        "power": 0,
        "accuracy": "-",
        "type": "normal",
        "category": "nondamaging",
        "contact": false,
        "special": "yawn",
        "value": 1
    },
    "Zen Headbutt": {
        "name": "Zen Headbutt",
        "power": 80,
        "accuracy": 90,
        "type": "psychic",
        "category": "physical",
        "contact": true,
        "special": "flinch",
        "value": 0.2
    },
}