import { FC } from "react";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">Placar acumulado</h2>
      <div className="footer-content">
        <span className="score-player">Vitórias Jogador X: 0</span>
        <span className="score-player">Vitórias Jogador O: 0</span>
      </div>
    </footer>
  );
};
export default Footer;
