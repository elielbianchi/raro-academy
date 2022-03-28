import { FC } from "react";
import Square from "../Square/Square";
import "./Board.css";

type BoardProps = {};

const Board: FC<BoardProps> = () => {
  return (
    <main className="board">
      <div className="row">
        <Square squareNumber={0} />
        <Square squareNumber={1} />
        <Square squareNumber={2} />
      </div>
      <div className="row">
        <Square squareNumber={3} />
        <Square squareNumber={4} />
        <Square squareNumber={5} />
      </div>
      <div className="row">
        <Square squareNumber={6} />
        <Square squareNumber={7} />
        <Square squareNumber={8} />
      </div>
    </main>
  );
};

export default Board;
