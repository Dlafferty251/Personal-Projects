
//Creates interfaces for the characters and their move sets

type EffectType = "lifesteal" | "stun" | "dodge" | "double-damage" | "heal" | 
                   "big-heal" | "requires-drink" | "confuse" | "none";

export interface Move {
    name: string;
    damage: number;
    effect?: EffectType;
}

export interface Character {
    name: string;
    power: string;
    strength: number;
    speed: number;
    hp: number;
    moves: Move[];
    status?: {
        stunned?: boolean;
        dodging?: boolean;
        lifestole?: boolean;
        dmgDouble?: boolean;
        confused?: boolean;
        healing?: boolean;
    }
}

export function buildCharacter(data: Character): Character {
    return data;
}
