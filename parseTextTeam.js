var parseTextTeam = (teamText, delimiter) => {
    const pokemonText = teamText.split(`${delimiter}${delimiter}`)
    pokemonText.forEach((pokemon, i) => {
        teamArray[i] = pokemon.split(`${delimiter}`)
    })
}