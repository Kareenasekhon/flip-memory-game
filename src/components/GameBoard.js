import React from "react";
import Card from "./Card";
import "../styles/App.css";

function GameBoard({ cards, flipped, matched, handleCardClick, score, timeLeft, theme }) {
  return (
    <div className="main-content">
      <div className={`board ${theme}-theme`}>
        <div className="timer">⏱️ Time Left: {timeLeft}s</div>
        <div className="score">🏆 Score: {score}</div>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            isFlipped={flipped.includes(index) || matched.includes(index)}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
