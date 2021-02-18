//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COEFFICIENT = 10;
const MIN_ABILITY_SCORE = 3;
const MAX_ABILITY_SCORE = 18;

const MAX_DICE_VAL = 6;
const ROLL_COUNT = 4;

export const abilityModifier = (constitution) => {
  if (constitution < MIN_ABILITY_SCORE) {
    throw new Error(`Ability scores must be at least ${MIN_ABILITY_SCORE}`);
  }
  if (constitution > MAX_ABILITY_SCORE) {
    throw new Error(`Ability scores can be at most ${MAX_ABILITY_SCORE}`);
  }
  return Math.floor((constitution - COEFFICIENT)/2);
};

export class Character {
  constructor() {
    this._strength = 0;
    this._dexterity = 0;
    this._constitution = 0;
    this._intelligence = 0;
    this._wisdom = 0;
    this._charisma = 0;
    this._hitpoints = 0;
  }
  
  static rollAbility() {
    let sumDiceRolls = 0;
    let minDiceRoll = Infinity;
    for (let i = 0; i < ROLL_COUNT; i++) {
      let rollDice = 1 + Math.floor(Math.random() * MAX_DICE_VAL);
      sumDiceRolls += rollDice;
      minDiceRoll = Math.min(rollDice, minDiceRoll);
    }
    return sumDiceRolls - minDiceRoll;
  }

  get strength() {
    let val = 0;
    if (this._strength == 0) {
      val = Character.rollAbility();
      this._strength = val;
    } else {
      val = this._strength;
    }
    return val;
  }

  get dexterity() {
    let val = 0;
    if (this._dexterity == 0) {
      val = Character.rollAbility();
      this._dexterity = val;
    } else {
      val = this._dexterity;
    }
    return val;
  }

  get constitution() {
    let val = 0;
    if (this._constitution == 0) {
      val = Character.rollAbility();
      this._constitution = val;
    } else {
      val = this._constitution;
    }
    return val;
  }

  get intelligence() {
    let val = 0;
    if (this._intelligence == 0) {
      val = Character.rollAbility();
      this._intelligence = val;
    } else {
      val = this._intelligence;
    }
    return val;
  }

  get wisdom() {
    let val = 0;
    if (this._wisdom == 0) {
      val = Character.rollAbility();
      this._wisdom = val;
    } else {
      val = this._wisdom;
    }
    return val;
  }

  get charisma() {
    let val = 0;
    if (this._charisma == 0) {
      val = Character.rollAbility();
      this._charisma = val;
    } else {
      val = this._charisma;
    }
    return val;
  }

  get hitpoints() {
    let val = 0;
    if (this._hitpoints == 0) {
      val = COEFFICIENT + abilityModifier(this.constitution);
      this._hitpoints = val;
    } else {
      val = this._hitpoints;
    }
    return val;
  }
}
