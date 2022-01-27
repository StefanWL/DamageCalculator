const PageReady = () => {
    loadStoredTeams()

    startMatchButton = document.getElementById('start-match')
    newTeamButton = document.getElementById('new-team')
    addTeamButton = document.getElementById('add-team')
    teamReturnButton = document.getElementById('team-return')

    startMatchButton.onclick = startMatch
    addTeamButton.onclick = addTeam

    newTeamButton.onclick = () =>{
        $('#teams-holder').slideUp(200,() => {
            $('#update-interface').slideDown(200)
        })
    }
    teamReturnButton.onclick = () =>{
        $('#update-interface').slideUp(200,() => {
            $('#teams-holder').slideDown(200)
        })
    }
}

window.onload = PageReady