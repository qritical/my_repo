
// CHARACTER CREATION SECTION ******************************************************

// Define the HERO class

class Hero {
    constructor(name, heroType, health){
        this.name = name;
        this.heroType = heroType;
        this.currentHealth = health;
        this.maxHealth = 0;
        this.skills = {
            sneak : 0,
            attack : 0,
            persuade : 0
        };
        this.barriers = {
            attack : 10,
            sneak : 10,
            persuade : 10
        };
        this.equippedWeapon = {
            name : 'None',
            minDamage : null,
            maxDamage : null
        };
        this.armorType = {
            name : 'None',
            mitigation : null
        };
    }
};

// Assign values based on user input, i.e. character class specific values

const checkClass = (hero, heroType) => {
    let lowerHeroType = heroType.toLowerCase();

    switch (lowerHeroType) {
        case 'warrior':
            hero.skills.attack +=3;
            hero.skills.sneak --;
            hero.armorType.name = 'plate';
            break;
        case 'hunter':
            hero.skills.attack ++;
            hero.skills.persuade ++;
            hero.skills.sneak ++;
            hero.armorType.name = 'mail';
            break;
        case 'rogue':
            hero.skills.attack --;
            hero.skills.sneak +=3;
            hero.armorType.name = 'leather';
            break;
        default:
            heroType = prompt('"${heroType}" is not a valid option. Please choose warrior, hunter or rogue.');
            hero.heroType = heroType;
            checkClass(hero, heroType);
            break;
    }
};

const armorAssignment = (hero) => {
    switch (this.armorType) {
        case 'plate':
            hero.armorType.mitigation = 80;
            hero.maxHealth = 80;
            break;
        case 'mail':
            hero.armorType.mitigation = 60;
            hero.maxHealth = 70;
            break;
        case 'leather':
            hero.armorType.mitigation = 40;
            hero.maxHealth = 60;
            break;
       }
};

// Ask for user inputs to create character

let name = prompt('What is your character name?');
let heroType = prompt('What is your class? (warrior, hunter or rogue)');

const hero1 = new Hero(name, heroType, 100);

checkClass(hero1, hero1.heroType);
armorAssignment (hero1, hero1.heroType);

console.log(hero1); 



// STORY CREATION SECTION **************************************************************************


hero1.equippedWeapon = ({
    name: prompt('which weapon do you choose? (Sword, Axe, Polearm)'),
    minDamage: 1,
    maxDamage: 6
});

console.log(hero1); 
