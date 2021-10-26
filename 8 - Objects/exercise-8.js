class Hero {
    constructor(name, maxHP) {
        this.name = name;
        this.maxHP = maxHP
        this.hp = maxHP;
    }
}

let highlander = new Hero('Highlander', 100);

// create two more instances of hero
// - a hero named 'Mage' with HP = 60
// - a hero name 'Ranger' with HP = 80