
// CHARACTER CREATION SECTION ******************************************************


class baseCharacter {
    constructor(name, health) {
        this.name = name;
        this.maxHealth = health;
        this.currentHealth = health;
        this.skills = {
            sneak: 0, 
            attack: 0, 
            persuade:0
        };
    }
};


// Define the HERO class

class Hero extends baseCharacter {
    constructor(name, health, characterRole){
        super(name, health);
        this.characterRole = characterRole;
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

const checkClass = (hero, characterRole) => {
    let lowerCharacterRole = characterRole.toLowerCase();
    switch (lowerCharacterRole) {
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
            characterRole = prompt('"${characterRole}" is not a valid option. Please choose warrior, hunter or rogue.');
            hero.characterRole = characterRole;
            checkClass(hero, characterRole);
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
let characterRole = prompt('What is your class? (warrior, hunter or rogue)');


const mainHero = new Hero(name, 100, characterRole);
checkClass(mainHero, mainHero.characterRole);
armorAssignment (mainHero, mainHero.characterRole);


console.log(mainHero); 


