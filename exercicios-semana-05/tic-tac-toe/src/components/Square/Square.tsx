import { FC } from "react";
import { SquareValue } from "../../parts/game/GameState";
import "./Square.css";

export type SquareProps = {
  value: SquareValue;
  onClick: () => void;
  squareNumber: number;
};

const Square: FC<SquareProps> = ({ value, onClick, squareNumber }) => {
  return (
    <span className="square" square-number={squareNumber} onClick={onClick}>
      {value}
    </span>
  );
};

export default Square;
