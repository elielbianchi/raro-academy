import { FC } from "react";
import Board from "../../components/Board/Board";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useGameState } from "../game/GameState";

const TicTacToe: FC = () => {
  const { current, xIsNext, winner, handleClick, gameState } = useGameState();

  return (
    <section className="ticTacToe">
      <Header>
        {winner
          ? `Vencedor: ${winner}`
          : gameState.round === 9
          ? `Empate`
          : `Próximo jogador: ${xIsNext ? "X" : "O"}`}
      </Header>
      <Board board={current} onClick={handleClick} />
      <Footer />
    </section>
  );
};
export default TicTacToe;
