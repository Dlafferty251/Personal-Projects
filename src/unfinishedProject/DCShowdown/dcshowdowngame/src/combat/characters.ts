import { buildCharacter, Character } from "characters/buildcharacter";

export const characters: Character[] = [
    {
        name: "Batman",
        power: "Gadgets",
        strength: 7, //Out of ten
        speed: 7, //Out of ten
        hp: 100,
            moves: [
                { name: "Batarang", damage: 20 },
                { name: "Smoke Bomb", damage: 10, effect: "dodge" },
                { name: "Punch", damage: 15 }
              ]
    },

    {
        name: "Bane",
        power: "Super Strength",
        strength: 10,
        speed: 6,
        hp: 120,
            moves: [
                { name: "Super Punch", damage: 25 },
                { name: "Throw", damage: 15, effect: "stun" },
                { name: "Backbreaker", damage: 30, effect: "lifesteal" }
            ]
    },

    {
        name: "Joker",
        power: "Gadgets",
        strength: 5,
        speed: 5,
        hp: 100,
        moves: [
                { name: "Joker Gas", damage: 20, effect: "lifesteal" },
                { name: "Punch", damage: 15 },
                { name: "Laughing Gas", damage: 10, effect: "confuse" }
            ]
    },
    {
        name: "Flash",
        power: "Super Speed",
        strength: 6,
        speed: 10,
        hp: 100,
            moves: [
                { name: "Speed Punch", damage: 20 , effect: "double-damage" },
                { name: "Vibrate", damage: 0, effect: "dodge" },
                { name: "Lightning Bolt", damage: 30, effect: "stun"}
            ]
      },
      {
        name: "Six Pack",
        power: "Super Strength",
        strength: 10,
        speed: 6,
        hp: 100,
            moves: [
            { name: "Drink Beer", damage: 0, effect: "heal" },
            { name: "Throw Can", damage: 10, effect: "requires-drink" },
            { name: "Chug", damage: 0, effect: "big-heal" }
            ]
      }
];
            //thats makes the oppenent stun for one turn because of throw

            //this move will take 20% of the opponents hp and will restore 10% Bane's hp
            //this move will take 20% of the opponents hp and will restore 10% Joker's hp
            //maybe add a feature that allows the opponent to miss the next attack


