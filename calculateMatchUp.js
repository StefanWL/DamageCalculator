var calculateMatchUp = (enemyNum, userNum) => {
    const user = userPokemon[userNum]
    const enemyOptions = enemyPokemon[enemyNum]
    let enemyMatchupsList = []
    let favourability
    let enemy

    for(let i = 0; i < enemyOptions.length; i++) {
        enemy = enemyOptions[i]
        let userMoves = [[],[],[],[]]
        let enemyMoves = [[],[],[],[]]

        for(let j = 0; j < user.moves.length; j++) {
            const rollsOut = singleRoll(user.moves[j], user, enemy)
            userMoves[0][j] = rollsOut[0]
            userMoves[1][j] = rollsOut[1]
            userMoves[2][j] = rollsOut[2]
            userMoves[3][j] = rollsOut[3]
        }

        for(let j = 0; j < enemy.moves.length; j++) {
            const rollsOut = singleRoll(enemy.moves[j], enemy, user)
            enemyMoves[0][j] = rollsOut[0]
            enemyMoves[1][j] = rollsOut[1]
            enemyMoves[2][j] = rollsOut[2]
            enemyMoves[3][j] = rollsOut[3]
        }

        favourability = setFavourability(user, userMoves, enemy, enemyMoves)

        enemyMatchupsList[i] = {
            userMoves: userMoves,
            enemyMoves: enemyMoves,
            favourability: favourability
        }
    }

    damageRollGrid[enemyNum][userNum] = enemyMatchupsList
}