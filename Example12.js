
// CHARACTER CREATION SECTION ******************************************************


class baseCharacter {
    constructor(name, health, skills = {sneak: 0, attack: 0, persuade:0}, barriers = {sneak: 10, attack: 10, persuade:10}) {
        this.name = name;
        this.maxHealth = health;
        this.currentHealth = health;
        this.isIncapacitated = false;
        this.skills = skills;
        this.barriers = barriers;
    }
    characterAttack () {
        let attackValue= (Math.floor(Math.random()*20)+1)+ this.skills.attack;
        return attackValue;
    }
}

// Define Monster class

class Monster extends baseCharacter {
    constructor(name, health, skills, barriers, equippedWeapon = {minDamage : null, maxDamage : null}){
        super(name, health, skills, barriers);
        this.equippedWeapon = equippedWeapon;
    }    
    characterDamage () {
        let damageValue= this.equippedWeapon.minDamage + (Math.floor(Math.random()* (this.equippedWeapon.maxDamage-this.equippedWeapon.minDamage+1)));
        console.log(damageValue);   
        return damageValue;             
    }                     
}                   

// Define the HERO class

class Hero extends baseCharacter {
    constructor(name, health, skills, barriers, characterRole, 
        equippedWeapon = {name : 'None', minDamage : null, maxDamage : null}, 
        armorType = {name: 'None', mitigation: null}) {
        super(name, health, skills, barriers);
        this.characterRole = characterRole;
        this.equippedWeapon = equippedWeapon;
        this.armorType= armorType;
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
        console.log(damageValue);   
        return damageValue;         
    }
    characterLevelUp (hero) {
        hero.skills.attack ++;
        hero.skills.persuade ++;
        hero.skills.sneak ++;
        let newLevel = hero.skills.attack;
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
}

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


// let name = prompt('What is your character name?');
// let characterRole = prompt('What is your class? (warrior, hunter or rogue)');
// const mainHero = new Hero(name, 100, skills= undefined, characterRole);
// checkClass(mainHero, mainHero.characterRole);
// armorAssignment (mainHero, mainHero.characterRole);

// mainHero.equippedWeapon = ({
//     name: prompt('which weapon do you choose? (Sword, Axe, Polearm)'),
//     minDamage: 1,
//     maxDamage: 6 
// });
const mainHero = new Hero('Tom', 40, skills= {sneak: 4, attack: 2, persuade: 5}, barriers= {sneak: 13, attack: 13, persuade: 13}, 'hunter', equippedWeapon= {name: 'Axe', minDamage: 2, maxDamage: 8}, armorType= {name: 'mail', mitigation: 7});

const mainParty = [mainHero]; // create mainParty array and add main character (mainHero) to the party array.

// Declare and create the Follower to the main character
const mainFollower = new Hero('Thor', 40, skills= {sneak: 5, attack: 4, persuade: 3}, barriers= {sneak: 13, attack: 13, persuade: 13}, 'rogue', equippedWeapon= {name: 'Sword', minDamage: 3, maxDamage: 7}, armorType= {name: 'leather', mitigation: 5});

// Testing returns below:
// let tiptoe = mainHero.chaacterSneak();
// let blow = mainHero.characterAttack();
// let smile = mainHero.characterPersuade();
// let hit = mainHero.characterDamage();
// let level= mainHero.characterLevelUp(mainHero);
// console.log(tiptoe, blow, smile, hit, level);
// mainHero.newEquippedWeapon('broadsword', 5, 9);
// mainHero.newEquippedArmor('chainmail', 8);
// console.log(mainHero); 
// console.log(mainFollower); 

mainParty.push (mainFollower); // add the main follower to the party array.

//Declare and create a monster
const monster1 = new Monster(name= 'goblin1', health=40, skills= {sneak: 3, attack: 8, persuade: 3}, barriers= {sneak: 13, attack: 13, persuade: 13}, equippedWeapon= {minDamage: 1, maxDamage: 7});
const monster2 = new Monster(name= 'goblin2', health=40, skills= {sneak: 3, attack: 8, persuade: 3}, barriers= {sneak: 13, attack: 13, persuade: 13}, equippedWeapon= {minDamage: 1, maxDamage: 7});
const monster3 = new Monster(name= 'goblin3', health=40, skills= {sneak: 3, attack: 8, persuade: 3}, barriers= {sneak: 13, attack: 13, persuade: 13}, equippedWeapon= {minDamage: 1, maxDamage: 7});
const monsterParty = [monster1, monster2, monster3];

// Make a function to sneak

const sneakEncounter =(partySneak=monsterSneak=0) => {
    mainParty.forEach(element => {
    partySneak=partySneak+(element.characterSneak());
    });
console.log(partySneak);
    monsterParty.forEach(element => {
    monsterSneak=monsterSneak+(element.barriers.sneak);
    });
console.log(monsterSneak);
     return partySneak >= monsterSneak; 
};

console.log(sneakEncounter());
                                    
const fightEncounter = (heroes, enemies, starter) => {      // main fightEncounter function - start with a roll of a dice (1-2) to see who starts attacking - either heroes or enemies.
    let startParty= Math.floor(Math.random()*2);            //rolls a number between 1 and2

    switch (startParty) {                                   // assign either heroes or monsters to start, depending on the dice roll above
        case 1:                                             // if the dice roll = 1 the heroes wil attack first
            attackers = heroes;
            defenders = enemies;
            break;
        default:                                            // if the dice roll was 2, the monsters will attack first
            attackers = enemies;
            defenders = heroes;
            break;   }
            
    const countAttackers = (numAttackersReady=0) => {       // create a function to count alive attackers
        attackers.forEach(element => {
            if (element.isIncapacitated===false) {
            numAttackersReady ++};
        });
        return numAttackersReady;    };  
    const countDefenders = (numDefendersReady=0) => {       // and a function to count all dead defenders
        defenders.forEach(element => {
            if (element.isIncapacitated===false) {
            numDefendersReady ++};
        });
        return numDefendersReady;    };
    
    numAttackersReady = countAttackers();                   // call two functions to count attackers/defenders and set a variable to hold the number of ready attackers, if any
    numDefendersReady = countDefenders();
    
    console.log((numAttackersReady > 0));  // check to see that there are still attackers alive, as well as defenders alive.
    while (numAttackersReady >0) {
        console.log((numAttackersReady >0));
        console.log((numDefendersReady > 0));
        while (numDefendersReady > 0) {
            console.log((numDefendersReady > 0));
             
            //create two new arrays - a new attacker and a new defenders array with all those not incapacitated
            let defendersAlive= defenders.filter(element => element.isIncapacitated===false); // new array with capable defenders
            let attackersAlive= attackers.filter(element => element.isIncapacitated===false); // new array with capable attackers
            // if (defendersAlive.length === 0) {
            //     break;
            // }   
       
            //if (attackersAlive.length === 0) break;
            let defenderIndex= (Math.floor(Math.random()*defendersAlive.length)); // generate a random number amongst those defenders able to fight
            let defender = defendersAlive[defenderIndex];       // pick a defender
            let attackerIndex=(Math.floor(Math.random()*attackersAlive.length)); // generate a random number amongst those attackers able to fight
            let attacker= attackersAlive[attackerIndex];        // pick the attacker
            attackResult = attacker.characterAttack()-defender.barriers.attack; // decides hit or miss based on the characters skill vs barrier level
            console.log(attackResult);
            if (attackResult>0) {                               // if the result is positive it is a hit, else if negative it is a miss
                let damageValue = attacker.characterDamage();   // if it is a hit, the damage function is called, giving the damage done
                defender.currentHealth -= damageValue;          // the target looses the amount of health done by the damage
                attackLog = attacker.name + ' swings and hits ' + defender.name + ' for ' + damageValue + ' hitpoints';
                console.log(attackLog);
                if (defender.currentHealth <= 0) {
                    defender.isIncapacitated = true;
                    console.log(defender.name + ' dies!');
                }
                
                }   else {                                        // if the result is not positive, the attack misses, and no health is lost
                attackLog = attacker.name + ' swings at ' + defender.name + ' and misses!';
            } 
            
            console.log (defender.currentHealth);
        }          
    }    
  
    console.log(attackersIncapacitated, numberOfAttackers, defendersIncapacitated, numerOfDefenders);
};
// monsterParty[1].isIncapacitated = true;
fightEncounter (mainParty, monsterParty);

 // need to get turn based so the mobs hit back

