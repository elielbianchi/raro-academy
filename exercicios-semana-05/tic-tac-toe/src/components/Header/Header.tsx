import { FC } from "react";
import RestartButton from "../RestartButton/RestartButton";
import "./Header.css";

const Header: FC = ({ children }) => {
  return (
    <header className="header">
      <h1 className="game-title">Tic Tac Toe</h1>
      <RestartButton> Reiniciar Jogo </RestartButton>
      <p className="game-info">{children}</p>
    </header>
  );
};
export default Header;
