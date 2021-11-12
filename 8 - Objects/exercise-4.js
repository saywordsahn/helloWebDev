// exercise-4 solution

// DO NOT MODIFY
let hero = {
    name: 'Highlander',
    int: 8,
    str: 6,
    agi: 11,
    equipment: []
}

let sword = {
    name: 'Short Blade',
    type: 'One Handed',
    damage: 16
}

hero.equipment.push(sword);

let shield = {
    name: 'Kite Shield',
    defense: 8
}

hero.equipment.push(shield);

console.log(hero);

// add a function named speak to the hero object definition above
// the function should print (log to console) 'There can only be one Highlander!'
// call the speak function on your hero
