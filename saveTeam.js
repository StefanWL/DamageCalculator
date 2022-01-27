var saveTeam = (team) => {
   freeTeamNumber = 1
   while (localStorage.getItem(`Team ${freeTeamNumber}`) != null){
      freeTeamNumber +=1
   }
   localStorage.setItem(`Team ${freeTeamNumber}`, JSON.stringify(team))
   createTeamBlock(`Team ${freeTeamNumber}`)
}