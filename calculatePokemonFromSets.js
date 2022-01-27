var calculatePokemonFromSets = (setList) => {
    let pokemonStats
    let finishedPokemon
    let set
    let whileIncrement
    let outputArray = []

    for(let i = 0; i < setList.length; i++) {
        set = setList[i]
        pokemonStats = basestats[set.name]

        finishedPokemon = {
            name: set.name,
            type1: pokemonStats.type1,
            type2: pokemonStats.type2,
            hp: 2 * pokemonStats.hp + 31 + Math.floor(set.hpEV/4) + 110,
            atk: Math.floor((2 * pokemonStats.atk + (set.atkIV == null ? 31: set.atkIV) + Math.floor(set.atkEV/4) + 5) * natures[set.nature].atk),
            def: Math.floor((2 * pokemonStats.def + (set.defIV == null ? 31: set.defIV) + Math.floor(set.defEV/4) + 5) * natures[set.nature].def),
            spa: Math.floor((2 * pokemonStats.spa + (set.spaIV == null ? 31: set.spaIV) + Math.floor(set.spaEV/4) + 5) * natures[set.nature].spa),
            spd: Math.floor((2 * pokemonStats.spd + (set.spdIV == null ? 31: set.spdIV) + Math.floor(set.spdEV/4) + 5) * natures[set.nature].spd),
            spe: Math.floor((2 * pokemonStats.spe + (set.speIV == null ? 31: set.speIV) + Math.floor(set.speEV/4) + 5) * natures[set.nature].spe),
            moves: [],
            item: set.item,
            ability: set.ability
        }
        
        whileIncrement = 1
        while(`move${whileIncrement}` in set){
            finishedPokemon.moves[whileIncrement-1] = set[`move${whileIncrement}`]
            whileIncrement ++
        }

        outputArray[i] = finishedPokemon
    }
    
    return outputArray
}