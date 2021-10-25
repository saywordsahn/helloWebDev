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



// We now want to make some more heros, we will make a class to use as a blueprint for our other heros
// you do not need to use the previous code we've written for this

// make a class with the following properties
// - the name of the class should be Hero
// - there should be a property called name, which will be the name of the hero
// - there should be a property called maxHP, which will be the hero's maximum HP
// - there should be a property called hp, which will be the hero's current HP
// - the hero's name should be set by a parameter passed into the constructor
// - the hero's max hp should be set by a parameter passed into the constructor
// - the hero's current hp (hp) should be set equal to the hero's max HP