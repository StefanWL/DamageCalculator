var addTable = (enemyNum,userNum,setNum) => {
    const tableHolder = document.getElementById(`table-col-${enemyNum + 1}-${userNum + 1}-${setNum + 1}`)
    const rollTable = damageRollGrid[enemyNum][userNum][setNum]
    const userMoves = rollTable.userMoves
    const enemyMoves = rollTable.enemyMoves

    const table = document.createElement('TABLE')
    const headerRow = document.createElement('TR')
    const header =  document.createElement('TH')
    const headerText = document.createTextNode(`${userPokemon[userNum].name} vs. ${enemyPokemon[enemyNum][setNum].name}`)
    
    header.classList.add(`${rollTable.favourability}`)
    header.colSpan = "4"

    header.appendChild(headerText)
    headerRow.appendChild(header)
    table.appendChild(headerRow)
    tableHolder.appendChild(table)

    for (let i = 0; i < Math.max(userMoves[0].length, enemyMoves[0].length); i++) {
        const tableRow = document.createElement('TR')
        const userMoveData =  document.createElement('TD')
        const userDamageData = document.createElement('TD')
        const enemyMoveData =  document.createElement('TD')
        const enemyDamageData = document.createElement('TD')

        if(userMoves[0][i]) {
            const userMove = document.createTextNode(userMoves[0][i])
            const userDamage = document.createTextNode(`${(userMoves[1][i] * 100).toFixed(1)}% - ${(userMoves[2][i] * 100).toFixed(1)}%`)

            userMoveData.classList.add('td-filled')
            userDamageData.classList.add('td-filled')

            userMoveData.appendChild(userMove)
            userDamageData.appendChild(userDamage)
        }
        if(enemyMoves[0][i]) {
            const enemyMove = document.createTextNode(enemyMoves[0][i])
            const enemyDamage = document.createTextNode(`${(enemyMoves[1][i] * 100).toFixed(1)}% - ${(enemyMoves[2][i] * 100).toFixed(1)}%`)

            enemyMoveData.classList.add('td-filled')
            enemyDamageData.classList.add('td-filled')

            enemyMoveData.appendChild(enemyMove)
            enemyDamageData.appendChild(enemyDamage)
        }

        tableRow.appendChild(userMoveData)
        tableRow.appendChild(userDamageData)
        tableRow.appendChild(enemyMoveData)
        tableRow.appendChild(enemyDamageData)
        table.appendChild(tableRow)
    }
}