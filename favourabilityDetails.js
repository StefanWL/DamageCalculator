var favourabilityDetails = (move,attacker,defender,lowDamage,highDamage) => {
    const middleDamage = Math.floor((lowDamage + highDamage) / 2)
    
    const damageHealing = (move.special == "heal" ? - middleDamage * move.value : 0)
    
    let contactDamage = 0
    if (move.contact){
        if (defender.item == "Rocky Helmet"){
            contactDamage += Math.floor(attacker.hp / 8)
        }
        if (defender.ability == "Rough Skin"){
            contactDamage += Math.floor(attacker.hp / 8)
        }
        if (defender.ability == "Iron Barbs"){
            contactDamage += Math.floor(attacker.hp / 8)
        }
    }

    const lifeOrbDamage = (attacker.item == "Life Orb" ? Math.floor(attacker.hp / 10) : 0)

    return [middleDamage,damageHealing,contactDamage,lifeOrbDamage]
}
