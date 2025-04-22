import { describe, it, expect, vi} from "vitest";
import promptSync from "prompt-sync";
import { fight } from "./dcshowdown";
import type { Character } from "./buildcharacter";

vi.mock("prompt-sync", () => {
    const mockPrompt = vi.fn();
    mockPrompt
      .mockReturnValueOnce("Batarang")
      .mockReturnValueOnce("Backbreaker");
  
    return {
      default: () => mockPrompt
    };
  });

describe("fight function", () => {
    it("should correctly simulate a fight between two characters", () => {
        const mockPrompt = promptSync();
        mockPrompt
            .mockReturnValueOnce("Batarang")
            .mockReturnValueOnce("Backbreaker");
        
        const char1: Character = {
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
        };

        const char2: Character = {
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
        };

        fight(char1, char2);

        expect(char1.hp).toBeLessThanOrEqual(100);
        expect(char2.hp).toBeLessThanOrEqual(120);
    });
});
        