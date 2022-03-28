import { FC } from "react";
import "./Header.css";

const Header: FC = ({ children }) => {
  return (
    <header className="header">
      <h1 className="game-title">Tic Tac Toe</h1>
      <p className="game-info">{children}</p>
    </header>
  );
};
export default Header;