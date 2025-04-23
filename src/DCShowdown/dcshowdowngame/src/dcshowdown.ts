
// game.ts
import { characters } from ".characters/characters";
import { Character } from "../../../dc-showdown-ui/src/characters/buildcharacter";
import promptSync from "prompt-sync";

export function selectCharacters(): [Character, Character] {
  const shuffled = [...characters].sort(() => 0.5 - Math.random());
  let [char1, char2] = shuffled;

  if (char1.name === char2.name) {
    char2 = shuffled.find(c => c.name !== char1.name)!;
  }

  return [char1, char2];
}

export function fight(char1: Character, char2: Character) {
  const prompt = promptSync();

  let turn = 6;

  for (let i = 0; i < turn; ++i) {
    console.log(`\nTurn ${i + 1}\n`);
    
    console.log(`${char1.name}'s Moves: `);

    const move1Name = prompt(`${char1.name}, choose your move: `);
    char1.moves.forEach((move, index) => {
      console.log(`${index + 1}: ${move.name} - Damage: ${move.damage} - Effect: ${move.effect}`);
    });

    console.log(`------------`);
    console.log(`${char2.name}'s Moves:`)
    const move2Name = prompt(`${char2.name}, choose your move: `);
    char2.moves.forEach((move, index) => {
      console.log(`${index + 1}: ${move.name} - Damage: ${move.damage} - Effect: ${move.effect}`);
    });

    const move1 = char1.moves.find(move => move.name === move1Name);
    const move2 = char2.moves.find(move => move.name === move2Name);
    
    if (!move1 || !move2) {
      console.log("Invalid move! Turn skipped.");
      continue;
    }

    // Determine who attacks first
    let first, second;

    if (char1.speed >= char2.speed) {
      first = [char1, move1, char2];
      second = [char2, move2, char1];
    } else {
      first = [char2, move2, char1];
      second = [char1, move1, char2];
    }

    // First attack
    console.log(`\n${first[0].name} attacks first with ${first[1].name}!`);
    second[2].hp -= first[1].damage;
    console.log(`${second[2].name} has ${second[2].hp} HP left.`);
    if (second[2].hp <= 0) {
      console.log(`${second[2].name} is defeated!`);
      break;
    }

    // Second attack
    console.log(`${second[0].name} retaliates with ${second[1].name}!`);
    first[2].hp -= second[1].damage;
    console.log(`${first[2].name} has ${first[2].hp} HP left.`);
    if (first[2].hp <= 0) {
      console.log(`${first[2].name} is defeated!`);
      break;
    }
  }
}

export function effects() {
  
}

export function startGame() {
  const [char1, char2] = selectCharacters();
  console.log("Game started:", char1.name, "vs", char2.name); 

  fight(char1, char2);


}
