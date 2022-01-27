var singleRoll = (moveName, attacker, defender) => {
    const move = moves[moveName]
    let offensiveStat
    let defensiveStat
    let calculating
    let lowDamage
    let highDamage
    let details
    let favourabilityDetailArray

    switch (move.category) {
        case "physical":
            offensiveStat = attacker.atk
            if(attacker.item === "Choice Band"){
                offensiveStat = attacker.atk * 1.5
            }

            defensiveStat = defender.def

            calculating = true

            break;

        case "special":
            offensiveStat = attacker.spa
            if(attacker.item === "Choice Specs"){
                offensiveStat = attacker.spa * 1.5
            }

            defensiveStat = defender.spd
            if(defender.item === "Assault Vest"){
                defensiveStat = defender.spd * 1.5
            }

            calculating = true

            break;

        case "nondamaging":
            lowDamage = 0
            highDamage = 0

            details = []
            favourabilityDetailArray = favourabilityDetails(move,attacker,defender,lowDamage,highDamage)
            details.push(favourabilityDetailArray)

            calculating = false

            break;

        case "set":
            lowDamage = move.power
            highDamage = move.power

            details = []
            favourabilityDetailArray = favourabilityDetails(move,attacker,defender,lowDamage,highDamage)
            details.push(favourabilityDetailArray)

            calculating = false

            break;

        case "proportion":
            lowDamage = Math.floor(move.power * defender.hp / 100)
            highDamage = Math.floor(move.power * defender.hp / 100)

            details = []
            favourabilityDetailArray = favourabilityDetails(move,attacker,defender,lowDamage,highDamage)
            details.push(favourabilityDetailArray)

            calculating = false

            break;

        case "bodypress":
            offensiveStat = attacker.def
            defensiveStat = defender.def

            calculating = true

            break;

        case "psyshock":
            offensiveStat = attacker.spa
            if(attacker.item === "Choice Specs"){
                offensiveStat = attacker.spa * 1.5
            }

            defensiveStat = defender.def

            calculating = true

            break;

        case "foulplay":
            offensiveStat = defender.atk
            if(attacker.item === "Choice Band"){
                offensiveStat = defender.atk * 1.5
            }

            defensiveStat = defender.def

            calculating = true

            break;

        default:
            lowDamage = 0
            highDamage = 0

            details = []
            favourabilityDetailArray = favourabilityDetails(move,attacker,defender,lowDamage,highDamage)
            details.push(favourabilityDetailArray)

            calculating = false
            break;
    }

    if(calculating){
        let typematchup = 1
        typematchup *= typematchups[move.type][defender.type1]
        if(defender.type2 != "none"){
            typematchup *= typematchups[move.type][defender.type2]
        }
        
        let stab = 1
        if (attacker.type1 === move.type || attacker.type2 === move.type){
            stab *=1.5
        }

        if(move.power.length == 5){
            highDamage = 0
            lowDamage = 0
            details = []

            for(let k = 0; k < 3; k++){
                const highDamageSingle = Math.floor((42 * move.power[k] * offensiveStat / defensiveStat / 50 + 2) * typematchup * stab * (attacker.item == "Life Orb" ? 1.3 : 1))
                const lowDamageSingle = Math.floor(highDamage * 0.85)

                highDamage += highDamageSingle
                lowDamage += lowDamageSingle

                favourabilityDetailArray = favourabilityDetails(move,attacker,defender,lowDamage,highDamage)
                details.push(favourabilityDetailArray)
            }
        }
        else if(move.power.length > 1){
            highDamage = 0
            lowDamage = 0
            details = []

            for(let k = 0; k < move.power.length; k++){
                const highDamageSingle = Math.floor((42 * move.power[k] * offensiveStat / defensiveStat / 50 + 2) * typematchup * stab * (attacker.item == "Life Orb" ? 1.3 : 1))
                const lowDamageSingle = Math.floor(highDamage * 0.85)

                highDamage += highDamageSingle
                lowDamage += lowDamageSingle

                favourabilityDetailArray = favourabilityDetails(move,attacker,defender,lowDamage,highDamage)
                details.push(favourabilityDetailArray)
            }
            
        }
        else {
            highDamage = Math.floor((42 * move.power * offensiveStat / defensiveStat / 50 + 2) * typematchup * stab * (attacker.item == "Life Orb" ? 1.3 : 1))
            lowDamage = Math.floor(highDamage * 0.85)

            details = []
            favourabilityDetailArray = favourabilityDetails(move,attacker,defender,lowDamage,highDamage)
            details.push(favourabilityDetailArray)
        }
    }
    return [move.name, lowDamage / defender.hp, highDamage / defender.hp, details]
}