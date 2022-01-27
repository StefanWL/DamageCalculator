var setFavourability = (user, userMoves, enemy, enemyMoves) => {
    
    let favourability
    let eventOrder = []
    let eventSubject = []

    let hps = [user.hp, enemy.hp]

    const userMaxRoll = Math.max(...userMoves[2])
    const enemyMaxRoll = Math.max(...enemyMoves[2])
    const userMaxIndex = userMoves[2].indexOf(userMaxRoll)
    const enemyMaxIndex = enemyMoves[2].indexOf(enemyMaxRoll)
    const userDetails = userMoves[3][userMaxIndex]
    const enemyDetails = enemyMoves[3][enemyMaxIndex]
    
    let userSpeed = user.spe
    if (user.item == "Choice Scarf"){
        userSpeed = user.spe * 1.5
    }
    let enemySpeed = enemy.spe
    if (enemy.item == "Choice Scarf"){
        enemySpeed = enemy.spe * 1.5
    }

    if (userSpeed > enemySpeed) {
        for(let i = 0; i < userDetails.length; i++){
            for(let j = 0; j < userDetails[i].length; j++){
                eventOrder.push(userDetails[i][j])
            }
            eventSubject.push(1,0,0,0)
        }
        for(let i = 0; i < enemyDetails.length; i++){
            for(let j = 0; j < enemyDetails[i].length; j++){
                eventOrder.push(enemyDetails[i][j])
            }
            eventSubject.push(0,1,1,1)
        }
        if((user.item == 'Leftovers') || (user.item == 'Black Sludge')){
            eventOrder.push(Math.floor(-user.hp / 16))
            eventSubject.push(0)
        }
        if((enemy.item == 'Leftovers') || (enemy.item == 'Black Sludge')){
            eventOrder.push(Math.floor(-enemy.hp / 16))
            eventSubject.push(1)
        }
    }
    else {
        for(let i = 0; i < enemyDetails.length; i++){
            for(let j = 0; j < enemyDetails[i].length; j++){
                eventOrder.push(enemyDetails[i][j])
            }
            eventSubject.push(0,1,1,1)
        }
        for(let i = 0; i < userDetails.length; i++){
            for(let j = 0; j < userDetails[i].length; j++){
                eventOrder.push(userDetails[i][j])
            }
            eventSubject.push(1,0,0,0)
        }
        if((enemy.item == 'Leftovers') || (enemy.item == 'Black Sludge')){
            eventOrder.push(Math.floor(-enemy.hp / 16))
            eventSubject.push(1)
        }
        if((user.item == 'Leftovers') || (user.item == 'Black Sludge')){
            eventOrder.push(Math.floor(-user.hp / 16))
            eventSubject.push(0)
        }
    }

    let counter = 0
    while((hps[0] > 0) & (hps[1] > 0)){
        const damage = eventOrder[counter % eventOrder.length]
        const subject = eventSubject[counter % eventOrder.length]

        hps[subject] -= damage

        counter ++
    }
    
    if (hps[0] > hps[1]){
        favourability = "UserFavoured"
    } 
    else {
        favourability = "EnemyFavoured"
    }

    const userTurnsSimple = Math.ceil(1 / userMaxRoll)
    const enemyTurnsSimple = Math.ceil(1 / enemyMaxRoll)

    if((userSpeed == enemySpeed) & (userTurnsSimple == enemyTurnsSimple)){
        favourability = "Draw"
    }

    let userWalls
    let enemyWalls
    for (let i = 0; i<enemyMoves[0].length; i++){
        if(moves[enemyMoves[0][i]].special == "recover" && moves[enemyMoves[0][i]].value > userMaxRoll) {
            enemyWalls = true
        }
    }
    for (let i = 0; i<userMoves[0].length; i++) {
        if(moves[userMoves[0][i]].special == "recover" && moves[userMoves[0][i]].value > enemyMaxRoll) {
            userWalls = true
        }
    }


    
    if(userWalls & enemyWalls){
        favourability = "Draw"
    }
    else if(enemyWalls){
        favourability = "EnemyFavoured"
    }
    else if(userWalls){
        favourability = "UserFavoured"
    }

    return favourability
}