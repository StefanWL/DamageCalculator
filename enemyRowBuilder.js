var enemyRowBuilder  = (enemy, enemyNum) => {
    clearRow(enemyNum)
    getEnemySets(enemy, enemyNum)
    enemyPokemon[enemyNum] = calculatePokemonFromSets(enemySets[enemyNum])
    for (let j = 0; j<userPokemon.length; j++) {
        calculateMatchUp(enemyNum, j)
    }
    addDamageRolls(enemyNum)
}