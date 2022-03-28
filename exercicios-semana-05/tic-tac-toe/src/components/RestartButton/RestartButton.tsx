import { FC } from "react";
import { useGameState } from "../../parts/game/GameState";
import "./RestartButton.css";


const RestartButton: FC = ({ children }) => {
  const { resetGame } = useGameState();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    resetGame();
  };

  return (
    <button className="restart-button" onClick={handleClick} type="button">
      {children}
    </button>
  );
};

export default RestartButton;
