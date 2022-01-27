var createTeamBlock = (teamName) => {
    const names = Object.keys(JSON.parse(localStorage.getItem(teamName)))
    const teamsHolder = document.getElementById('teams-holder')

    const div = document.createElement('DIV')
    const span = document.createElement('SPAN')
    const nameText = document.createTextNode(teamName)
    const xIcon = document.createElement('IMG')

    div.classList.add('team')
    span.classList.add('team-name')
    xIcon.classList.add('x-sprite')
    xIcon.src = 'content/x-icon.png'

    span.appendChild(nameText)
    div.appendChild(span)
    teamsHolder.appendChild(div)

    for(let i = 0; i < names.length; i++){
        const img = document.createElement('IMG')

        img.classList.add('team-sprite')
        img.src = `content/${names[i].replace(' ', '').toLowerCase()}.png`

        div.appendChild(img)
    }

    div.appendChild(xIcon)

    xIcon.onclick = () =>{
        localStorage.removeItem(teamName)
        div.remove()
    }
    div.onclick = () =>{
        localStorage.setItem('active-team',localStorage.getItem(teamName))
        $('.team').removeClass('active-team')
        div.classList.add('active-team')
    }
}