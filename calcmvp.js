const PageReady = () => {
    const selectElements = document.getElementsByClassName('enemy-select')

    getUserSets()
    userPokemon = calculatePokemonFromSets(userSets)
    displayUserTeam()

    for(let i = 0; i<selectElements.length; i++) {
        autocomplete(selectElements[i], pokemonNames)
    }

    for(let i = 0; i<selectElements.length; i++) {
        selectElements[i].onkeydown = () => {
            if (basestats[selectElements[i].value] && selectElements[i].value != enemyPokemon[i][0].name) {
                enemyRowBuilder(selectElements[i].value, i)
            }
        }
    }
}

window.onload = PageReady
