// exercise-5 solution

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

hero.hp = 100;

hero.takeDamage = function(amount) {
    this.hp = hero.hp - amount;
}

hero.takeDamage(20);

console.log(hero.hp);