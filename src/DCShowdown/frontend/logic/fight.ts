// logic/fight.ts
import { Character, Move } from "../../dcshowdowngame/src/characters/buildcharacter";

export interface FightResult {
  updatedChar1: Character;
  updatedChar2: Character;
  logs: string[];
}

export function fightTurn(
  char1: Character,
  move1: Move,
  char2: Character,
  move2: Move
): FightResult {
  const logs: string[] = [];

  // Copy characters so we don't mutate the originals directly
  const updatedChar1 = { ...char1 };
  const updatedChar2 = { ...char2 };

  let first, second;

  if (char1.speed >= char2.speed) {
    first = [updatedChar1, move1, updatedChar2];
    second = [updatedChar2, move2, updatedChar1];
  } else {
    first = [updatedChar2, move2, updatedChar1];
    second = [updatedChar1, move1, updatedChar2];
  }

  // First attack
  logs.push(`${first[0].name} attacks first with ${first[1].name}!`);
  first[2].hp -= first[1].damage;
  logs.push(`${first[2].name} has ${first[2].hp} HP left.`);
  if (first[2].hp <= 0) {
    logs.push(`${first[2].name} is defeated!`);
    return { updatedChar1, updatedChar2, logs };
  }

  // Second attack
  logs.push(`${second[0].name} retaliates with ${second[1].name}!`);
  second[2].hp -= second[1].damage;
  logs.push(`${second[2].name} has ${second[2].hp} HP left.`);
  if (second[2].hp <= 0) {
    logs.push(`${second[2].name} is defeated!`);
  }

  return { updatedChar1, updatedChar2, logs };
}
