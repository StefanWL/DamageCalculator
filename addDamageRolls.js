var addDamageRolls = (enemyNum) => {
    let rollList = damageRollGrid[enemyNum]
    let enemyRow = document.getElementById(`row-${enemyNum + 1}`)

    const enemyBar = document.createElement('DIV')
    const span = document.createElement('SPAN')
    const enemyName = document.createTextNode(enemyPokemon[enemyNum][0].name)
    const img = document.createElement('IMG')

    enemyBar.classList.add('enemy-bar')
    enemyBar.id = `enemy-bar-${enemyNum + 1}`
    span.classList.add('enemy-text-holder')
    img.classList.add('enemy-sprite')
    img.src = `content/${enemyPokemon[enemyNum][0].name.replace(' ', '').toLowerCase()}.png`

    span.appendChild(enemyName)
    enemyBar.appendChild(span)
    enemyBar.appendChild(img)
    enemyRow.appendChild(enemyBar)

    addArrow(enemyBar.id)

    for(let k = 0; k < rollList[0].length; k++) {

        const setRow = document.createElement('DIV')
        const setBar = document.createElement('DIV')
        const setText = document.createElement('SPAN')
        const setName = document.createTextNode(enemySets[enemyNum][k].moveset)

        setRow.classList.add('set-row')
        setRow.id = `set-row-${enemyNum + 1}-${k + 1}`
        setBar.classList.add('set-bar')
        setBar.id = `set-bar-${enemyNum + 1}-${k + 1}`
        setText.classList.add('set-text-holder')

        setText.appendChild(setName)
        setBar.appendChild(setText)
        setRow.appendChild(setBar)
        enemyRow.appendChild(setRow)

        addArrow(setBar.id)

        for(let l = 0; l < rollList.length; l++) {

            const tableCol = document.createElement('DIV')

            tableCol.classList.add('table-col')
            tableCol.id = `table-col-${enemyNum + 1}-${l + 1}-${k + 1}`

            setRow.appendChild(tableCol)

            addTable(enemyNum,l,k)
        }
        $(`#${setBar.id}`).click(() =>{
            $(`#${setRow.id}`).children('.table-col').slideToggle(300)
            $(`#${setBar.id}`).children('.bar-close-arrow').toggleClass('rotate')
            $(`#${setBar.id}`).children('.bar-close-arrow').toggleClass('rotate-reset')
        })
    }
    $(`#${enemyBar.id}`).click(() =>{
        $(`#${enemyRow.id}`).children('.set-row').slideToggle(300)
        $(`#${enemyBar.id}`).children('.bar-close-arrow').toggleClass('rotate')
        $(`#${enemyBar.id}`).children('.bar-close-arrow').toggleClass('rotate-reset')
    })
}