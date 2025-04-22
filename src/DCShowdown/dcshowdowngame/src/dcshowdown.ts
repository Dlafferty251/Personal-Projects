
// game.ts
import { characters } from "./characters";
import { Character } from "./buildcharacter";
import { renderArena } from "./ui";


export function selectCharacters(): [Character, Character] {
  const shuffled = [...characters].sort(() => 0.5 - Math.random());
  let [char1, char2] = shuffled;

  if (char1.name === char2.name) {
    char2 = shuffled.find(c => c.name !== char1.name)!;
  }

  return [char1, char2];
}

export function startGame() {
  const [char1, char2] = selectCharacters();
  console.log("Game started:", char1.name, "vs", char2.name);
  renderArena(char1, char2);
}
