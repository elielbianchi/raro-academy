import { useEffect, useState } from "react";

export type SquareValue = "X" | "O" | null;

export type BoardState = SquareValue[];

let xWinnings = 0;

let oWinnings = 0;

let restart: boolean = false;

const createBoard = () => Array<SquareValue>(9).fill(null);

function calculateWinner(boardState: BoardState) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      boardState[a] === "X" ? xWinnings++ : oWinnings++;
      return boardState[a];
    }
  }
  return null;
}

export type GameState = {
  played: BoardState[];
  round: number;
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    played: [createBoard()],
    round: 0,
  });

  function resetGame() {
    console.log("Função chamada");
    restart = true;
    }
  

  useEffect(() => {
    setGameState({
      played: [createBoard()],
      round: 0,
    });
    restart = false;
}, [restart]);


  const current = gameState.played[gameState.round];
  const xIsNext = gameState.round % 2 === 0;
  const winner = calculateWinner(current);

  function handleClick(square: number) {
    const played = gameState.played.slice(0, gameState.round + 1);
    const current = played[played.length - 1];
    const squares = [...current];
    if (winner || squares[square]) {
      return;
    }
    squares[square] = xIsNext ? "X" : "O";
    setGameState({
      played: played.concat([squares]),
      round: played.length,
    });
  }

  return {
    gameState,
    current,
    xIsNext,
    winner,
    handleClick,
    xWinnings,
    oWinnings,
    resetGame,
  };
}
