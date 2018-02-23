


// CHARACTER CREATION SECTION ******************************************************


class baseCharacter {
    constructor(name, health, skills = {sneak: 0, attack: 0, persuade:0}) {
        this.name = name;
        this.maxHealth = health;
        this.currentHealth = health;
        this.skills = skills;
    }
    characterAttack () {
        let attackValue= (Math.floor(Math.random()*20)+1)+ this.skills.attack;
        return attackValue;
    }
};

// Define Monster class

class Monster extends baseCharacter {
    constructor(name, health, skills, persuasionBarrier, sneakBarrier, minDamage, maxDamage){
        super(name, health, skills);
        this.persuasionBarrier = persuasionBarrier;
        this.sneakBarrier = sneakBarrier;
        this.equippedWeapon = {
            minDamage: minDamage,
            maxDamage: maxDamage
        }
    }
    characterDamage () {
        let damageValue= this.minDamage + (Math.floor(Math.random()* (this.maxDamage-this.minDamage+1)));
        return damageValue;
    }
}

// Define the HERO class

class Hero extends baseCharacter {
    constructor(name, health, skills, characterRole, 
        equippedWeapon = {name : 'None', minDamage : null, maxDamage : null}, 
        armorType = {name: 'None', mitigation: null}) {
        super(name, health, skills);
        this.characterRole = characterRole;
        this.equippedWeapon = equippedWeapon;
        this.armorType= armorType;
        this.isIncapacitated = false;
        this.barriers = {
            attack : 10,
            sneak : 10,
            persuade : 10
        };
    }
    characterSneak () {
        let sneakValue= (Math.floor(Math.random()*20)+1)+ this.skills.sneak;
        return sneakValue;
    }
    characterPersuade () {
        let persuadeValue= (Math.floor(Math.random()*20)+1)+ this.skills.persuade;
        return persuadeValue;
    }
    characterDamage () {
        let damageValue= this.equippedWeapon.minDamage + (Math.floor(Math.random()* (this.equippedWeapon.maxDamage-this.equippedWeapon.minDamage+1)));
        return damageValue;
    }
    characterLevelUp (hero) {
        hero.skills.attack ++;
        hero.skills.persuade ++;
        hero.skills.sneak ++;
        let newLevel = hero.skills.attack
        return newLevel;
    }
    newEquippedWeapon (name, minDamage, maxDamage) {
        this.equippedWeapon.name = name;
        this.equippedWeapon.minDamage = minDamage;
        this.equippedWeapon.maxDamage = maxDamage;
        console.log(this.name + ' has equipped a new '+ name);
    }
    newEquippedArmor (name, mitigation) {
        this.armorType.name = name;
        this.armorType.mitigation = mitigation;
        console.log(this.name + ' has equipped a new '+ name);
    }
    rest() {
        this.isIncapacitated = false;
        this.currentHealth = this.maxHealth;
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


// Ask for user inputs to create main character


let name = prompt('What is your character name?');
let characterRole = prompt('What is your class? (warrior, hunter or rogue)');
const mainHero = new Hero(name, 100, skills= undefined, characterRole);
checkClass(mainHero, mainHero.characterRole);
armorAssignment (mainHero, mainHero.characterRole);

mainHero.equippedWeapon = ({
    name: prompt('which weapon do you choose? (Sword, Axe, Polearm)'),
    minDamage: 1,
    maxDamage: 6 
});

const mainParty = [mainHero]; // add main character (mainHero) to a party array

// Declare the Follower to the main character

const mainFollower = new Hero('Thor', 100, skills= {sneak: 5, attack: 4, persuade: 3}, 'rogue', equippedWeapon= {name: 'Sword', minDamage: 3, maxDamage: 7}, armorType= {name: 'leather', mitigation: 5});

// Testing returns below:
// let tiptoe = mainHero.characterSneak();
// let blow = mainHero.characterAttack();
// let smile = mainHero.characterPersuade();
// let hit = mainHero.characterDamage();
// let level= mainHero.characterLevelUp(mainHero);
// console.log(tiptoe, blow, smile, hit, level);
// mainHero.newEquippedWeapon('broadsword', 5, 9);
// mainHero.newEquippedArmor('chainmail', 8);
// console.log(mainHero); 
// console.log(mainFollower); 

mainParty.push (mainFollower);

console.log(mainParty);


