
//Creates interfaces for the characters and their move sets
export interface Move {
    name: string;
    damage: number;
    effect?: string;
}

export interface Character {
    name: string;
    power: string;
    strength: number;
    speed: number;
    hp: number;
    moves: Move[];
}

export function buildCharacter(data: Character): Character {
    return data;
}
