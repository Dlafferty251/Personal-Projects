import { Character } from "./buildcharacter";

export function renderArena(char1: Character, char2: Character) {
  const arena = document.getElementById("arena")!;
  arena.innerHTML = "";

  [char1, char2].forEach((char) => {
    const div = document.createElement("div");
    div.className = "character-card";

    const healthWidth = `${char.hp}%`;

    div.innerHTML = `
      <h2>${char.name}</h2>
      <p><strong>Power:</strong> ${char.power}</p>
      <p><strong>Strength:</strong> ${char.strength}</p>
      <p><strong>Speed:</strong> ${char.speed}</p>
      <div class="health-bar" style="width: ${healthWidth}; background-color: ${char.hp > 50 ? "green" : "red"};"></div>
      <h3>Moves</h3>
      <ul>
        ${char.moves.map(move => `<li>${move.name} - ${move.damage} dmg</li>`).join("")}
      </ul>
    `;

    arena.appendChild(div);
  });
}
