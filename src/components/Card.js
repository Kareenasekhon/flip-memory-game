import React from "react";
import "../styles/App.css";

function Card({ card, index, isFlipped, onClick }) {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => onClick(index)}>
      <div className="card-back">
        {isFlipped && <img src={card} alt="Memory Card" />}
      </div>
    </div>
  );
}

export default Card;
