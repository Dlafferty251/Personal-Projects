import React, { useState } from "react";
import { characters } from "./logic/characters";
import { fightTurn } from "./logic/fight";

export function Game() {
    const [char1, setChar1] = useState({...characters[0] });
    const [char2, setChar2] = useState({...characters[1] });

    console.log("Characters loaded:", characters);

    const[logs, setLogs] = useState<string[]>([]);
    const [turn, setTurn] = useState(1);

    const handleMove = (move1: string, move2: string) => {
        const selectedMove1 = char1.moves.find((m) => m.name === move1)!;
        
        const selectedMove2 = char2.moves.find((m) => m.name === move2)!;

        if (!selectedMove1 || !selectedMove2) {
            console.error("invalid move: ", move1, move2);
            return;
        }
        const result = fightTurn(char1, selectedMove1, char2, selectedMove2);

        setChar1(result.updatedChar1);
        setChar2(result.updatedChar2);
        setLogs((prevLogs) => [...prevLogs, `\n---Turn ${turn} ---`, ...result.logs]);
        setTurn(turn + 1);

    };

    return (
        <div className="p-4 font-mono">
      <h1 className="text-xl mb-4">⚔️ DC Showdown</h1>

      <div className="flex gap-10 mb-6">
        <div>
          <h2>{char1.name}</h2>
          <p>HP: {char1.hp}</p>
          {char1.moves.map((m) => (
            <button key={m.name} onClick={() => handleMove(m.name, "Punch")}>
              {m.name}
            </button>
          ))}
        </div>
        <div>
          <h2>{char2.name}</h2>
          <p>HP: {char2.hp}</p>
        </div>
      </div>

      <div className="whitespace-pre">
        <h3>Battle Log</h3>
        {logs.map((log, i) => (
          <p key={i}>{log}</p>
        ))}
      </div>
    </div>
    );
}