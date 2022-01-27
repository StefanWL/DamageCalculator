var convertPokemon = (index) => {
    rawArray = teamArray[index]
    let pokemon = {
        'hpEV': 0,
        'atkEV': 0,
        'defEV': 0,
        'spaEV': 0,
        'spdEV': 0,
        'speEV': 0
    }
    pokemon['name'] = rawArray[0].split('@')[0].trim()

    if(pokemon['name'].includes('(')){
        pokemon['name'] = pokemon['name'].slice(0,-4)
    }

    pokemon['item'] = rawArray[0].split('@')[1].trim()
    pokemon['ability'] = rawArray[1].split(':')[1].trim()
    pokemon['nature'] = rawArray[3].trim().split(' ')[0]

    evs = rawArray[2].split(':')[1].trim().split('/')
    evs.forEach(stat => {
        const statArray = stat.trim().split(' ')
        pokemon[`${statArray[1].toLowerCase()}EV`] = statArray[0]
    })

    pokemon['move1'] = rawArray[rawArray.length - 4].slice(1).trim()
    pokemon['move2'] = rawArray[rawArray.length - 3].slice(1).trim()
    pokemon['move3'] = rawArray[rawArray.length - 2].slice(1).trim()
    pokemon['move4'] = rawArray[rawArray.length - 1].slice(1).trim()

    return pokemon
}