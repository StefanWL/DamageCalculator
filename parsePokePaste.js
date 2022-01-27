var parsePokePaste = async (url) => {
    fetchUrl = url + '/raw'
    fetch(fetchUrl)
    .then(response => response.text())
    .then(text => {
        teamText = text
    })
    .then(() => {
        parseTextTeam(teamText.trim(),'\r\n')
        const team = convertTeamArray()
        saveTeam(team)
    })
}
