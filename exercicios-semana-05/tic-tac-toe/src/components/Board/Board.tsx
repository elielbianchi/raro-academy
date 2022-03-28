import { FC } from "react";
import { BoardState } from "../../parts/game/GameState";
import Square from "../Square/Square";
import "./Board.css";

type BoardProps = {
  board: BoardState;
  onClick: (squareNumber: number) => void;
};

const Board: FC<BoardProps> = ({ board, onClick }) => {
  return (
    <main className="board">
      <div className="row">
        <Square squareNumber={0} value={board[0]} onClick={() => onClick(0)} />
        <Square squareNumber={1} value={board[1]} onClick={() => onClick(1)} />
        <Square squareNumber={2} value={board[2]} onClick={() => onClick(2)} />
      </div>
      <div className="row">
        <Square squareNumber={3} value={board[3]} onClick={() => onClick(3)} />
        <Square squareNumber={4} value={board[4]} onClick={() => onClick(4)} />
        <Square squareNumber={5} value={board[5]} onClick={() => onClick(5)} />
      </div>
      <div className="row">
        <Square squareNumber={6} value={board[6]} onClick={() => onClick(6)} />
        <Square squareNumber={7} value={board[7]} onClick={() => onClick(7)} />
        <Square squareNumber={8} value={board[8]} onClick={() => onClick(8)} />
      </div>
    </main>
  );
};

export default Board;
