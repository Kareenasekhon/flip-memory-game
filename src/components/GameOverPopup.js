import React from "react";
import "../styles/App.css";

function GameOverPopup({ show, initializeGame }) {
  return (
    <div className={`game-over-popup ${show ? "show" : ""}`}>
      <p>⏰ Game Over! You ran out of time.</p>
      <button onClick={initializeGame}>Try Again</button>
    </div>
  );
}

export default GameOverPopup;
