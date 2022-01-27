var convertTeamArray = () => {
    let team = {}
    for(let i = 0; i<teamArray.length; i++){
        let pokemon = convertPokemon(i)
        team[pokemon.name] = pokemon
    }
    return team
} 