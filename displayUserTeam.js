var displayUserTeam = () => {
    const teamHolder = document.getElementById('user-team-holder')
    for(let i = 0; i < userPokemon.length; i++){
        const div = document.createElement('DIV')
        const span = document.createElement('SPAN')
        const name = document.createTextNode(userPokemon[i].name)
        const img = document.createElement('IMG')

        div.classList.add('user-team-member')
        div.classList.add(userPokemon[i].type1)
        span.classList.add('team-text-holder')
        img.classList.add('team-sprite')
        img.src = `content/${userPokemon[i].name.replace(' ', '').toLowerCase()}.png`

        span.appendChild(name)
        div.appendChild(span)
        div.appendChild(img)
        teamHolder.appendChild(div)
    }
}