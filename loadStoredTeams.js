var loadStoredTeams = () => {
    for (let i = 0; i < localStorage.length; i++){
        const storageKey = localStorage.key(i)
        if (storageKey != 'active-team'){
            createTeamBlock(storageKey)
        }
    }
}