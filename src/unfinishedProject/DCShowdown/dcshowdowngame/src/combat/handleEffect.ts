import { Character, Move } from "../models/types";

export function handleEffect(
    attacker: Character,
    defender: Character,
    move: Move
  ): { skipNextTurn: boolean } {
    
    // Use a switch to determine what kind of effect is applied
    switch (move.effect) {
  
      // Life-steal restores a portion of the damage dealt to the attacker
      case "lifesteal":
        const healed = Math.floor(move.damage * 0.3); // Heal 30% of the damage dealt
        attacker.hp = Math.min(attacker.hp + healed, 100); // Cap healing at 100 HP
        console.log(`${attacker.name} steals ${healed} HP!`);
        return { skipNextTurn: false };
  
      // Stun prevents the defender from acting on their next turn
      case "stun":
        console.log(`${defender.name} is stunned and will skip their next turn!`);
        return { skipNextTurn: true };
  
      // Dodge puts the attacker in a state where they may avoid the next attack
      case "dodge":
        // Assume attacker has a status object to store temporary effects
        attacker.status = { ...(attacker.status || {}), dodging: true };
        console.log(`${attacker.name} is ready to dodge the next attack!`);
        return { skipNextTurn: false };
  
      // If no effect or an unknown effect is present, do nothing special
      default:
        return { skipNextTurn: false };
    }
  } 
  