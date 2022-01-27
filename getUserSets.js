var getUserSets = () => {

    const keys = Object.keys(userteam)

    keys.forEach((key,index) => {
        userSets[index] = userteam[key] 
    })
    
}