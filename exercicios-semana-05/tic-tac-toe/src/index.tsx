import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import GamePage from "./pages/GamePage/GamePage";

ReactDOM.render(
  <React.StrictMode>
    <GamePage />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
