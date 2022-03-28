import { FC } from "react";
import { useGameState } from "../../parts/game/GameState";
import RestartButton from "../RestartButton/RestartButton";
import "./Header.css";

const Header: FC = ({ children }) => {
  const { resetGame } = useGameState();

  return (
    <header className="header">
      <h1 className="game-title">Tic Tac Toe</h1>
      <RestartButton onClick={() => resetGame()}> Reiniciar Jogo </RestartButton>
      <p className="game-info">{children}</p>
    </header>
  );
};
export default Header;
