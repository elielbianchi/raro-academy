import { FC } from "react";
import Board from "../../components/Board/Board";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const TicTacToe: FC = () => {

  return (
    <section className="ticTacToe">
      <Header>
        {"Começou a partida!"}
      </Header>
      <Board />
      <Footer />
    </section>
  );
};
export default TicTacToe;