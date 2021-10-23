// exercise-4 solution

// DO NOT MODIFY
let hero = {
    name: 'Highlander',
    int: 8,
    str: 6,
    agi: 11,
    equipment: [],
    speak() {
        console.log('There can only be one Highlander!');
    }
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

hero.speak();

// for the following, do not modify the above code
// add a property called hp to your hero and set it to 100
// add a function to your hero called takeDamage that takes a parameter called amount
//      the amount parameter should be subtracted from the hero's HP
// call this takeDamage function with 20 for the amount, then log the hero's new hp
