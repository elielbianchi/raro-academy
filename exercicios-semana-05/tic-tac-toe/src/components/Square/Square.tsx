import { FC } from "react";
import "./Square.css";

export type SquareProps = {
  squareNumber: number;
};

const Square: FC<SquareProps> = ({ children, squareNumber }) => {
  return (
    <span className="square" square-number={squareNumber}>
      {children}
    </span>
  );
};

export default Square;