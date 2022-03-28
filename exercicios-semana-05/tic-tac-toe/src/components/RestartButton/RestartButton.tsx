import { FC } from "react";
import "./RestartButton.css";

export type ButtonProps = {
  onClick: () => void;
};

const RestartButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="restart-button" onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default RestartButton;
