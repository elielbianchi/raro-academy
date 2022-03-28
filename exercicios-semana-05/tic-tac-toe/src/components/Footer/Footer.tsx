import { FC } from "react";
import { useGameState } from "../../parts/game/GameState";
import "./Footer.css";

const Footer: FC = () => {
  const { xWinnings, oWinnings } = useGameState();

  return (
    <footer className="footer">
      <h2 className="footer-title">Placar acumulado</h2>
      <span className="score-player">Vitórias Jogador X: {xWinnings / 2}</span>
      <span className="score-player">Vitórias Jogador O: {oWinnings / 2}</span>
    </footer>
  );
};
export default Footer;
