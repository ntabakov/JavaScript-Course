function heroesInventory(array){
    let heroes = [];
    for(let item of array){
        let token = item.split(" / ");
        let hero = {
            name : token[0],
            level : Number(token[1]),
            items : token[2] ? token[2].split(", ") : []
        }
        heroes.push(hero);

    }
    return JSON.stringify(heroes);
}

console.log(heroesInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));