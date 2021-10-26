
// DO NOT MODIFY
class Hero {
    constructor(name, maxHP) {
        this.name = name;
        this.maxHP = maxHP
        this.hp = maxHP;
    }
}

let highlander = new Hero('Highlander', 100);
let mage = new Hero('Mage', 60);
let ranger = new Hero('Ranger', 80)

console.log(highlander.name + ' - ' + highlander.hp);
console.log(mage.name + ' - ' + mage.hp);
console.log(ranger.name + ' - ' + ranger.hp);