
// CHARACTER CREATION SECTION ******************************************************


class baseCharacter {
    constructor(name, health, skills = {sneak: 0, attack: 0, persuade:0}) {
        this.name = name;
        this.maxHealth = health;
        this.currentHealth = health;
        this.skills = skills;
    }
};


// Define the HERO class

class Hero extends baseCharacter {
    constructor(name, health, skills, characterRole){
        super(name, health, skills);
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

mainHero = new Hero(name, 100, skills= undefined, characterRole);
// const mainHero = new Hero(name, 100, skills= {sneak: 5, attack: 4, persuade: 3}, characterRole);
checkClass(mainHero, mainHero.characterRole);
armorAssignment (mainHero, mainHero.characterRole);

mainHero.equippedWeapon = ({
    name: prompt('which weapon do you choose? (Sword, Axe, Polearm)'),
    minDamage: 1,
    maxDamage: 6 
});



console.log(mainHero); 
