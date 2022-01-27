var addTeam = () => {
    const pasteLink = document.getElementById('pokepaste-input').value
    document.getElementById('pokepaste-input').value = ''

    if(pasteLink != ''){
        parsePokePaste(pasteLink)
    } else {
        teamText = document.getElementById('raw-text-input').value.trim()
        document.getElementById('raw-text-input').value = ''
        parseTextTeam(teamText,'\n')
        const team = convertTeamArray()
        saveTeam(team)
    }

    $('#update-interface').slideUp(200,() => {
        $('#teams-holder').slideDown(200)
    })
}