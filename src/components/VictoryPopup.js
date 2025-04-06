import React from "react";
import "../styles/App.css";

function VictoryPopup({ show, initializeGame }) {
  return (
    <div className={`victory-popup ${show ? "show" : ""}`}>
      <p>🎉 Congratulations! You won! 🎉</p>
      <button onClick={initializeGame}>Play Again</button>
    </div>
  );
}

export default VictoryPopup;
