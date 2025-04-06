import React, { useState, useEffect } from "react";
import GameBoard from "./GameBoard";
import VictoryPopup from "./VictoryPopup";
import GameOverPopup from "./GameOverPopup";
import { THEMES } from "../constants/themes";
import { DIFFICULTIES } from "../constants/difficulties";
import "../styles/App.css";

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [theme, setTheme] = useState("animals");
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DIFFICULTIES.easy.time);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);

  useEffect(() => {
    initializeGame();
  }, [difficulty, theme]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!gameOver && !victory) {
        setTimeLeft((time) => {
          if (time <= 1) {
            clearInterval(timer);
            setGameOver(true);
            return 0;
          }
          return time - 1;
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [gameOver, victory]);

  const initializeGame = () => {
    const { pairs } = DIFFICULTIES[difficulty];
    const themeImages = THEMES[theme].slice(0, pairs);
    const gameCards = [...themeImages, ...themeImages];
    setCards(shuffleArray(gameCards));
    setFlipped([]);
    setMatched([]);
    setScore(0);
    setTimeLeft(DIFFICULTIES[difficulty].time);
    setGameOver(false);
    setVictory(false);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleCardClick = (index) => {
    if (gameOver || victory || flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setMatched([...matched, ...newFlipped]);
        setScore(score + 10);
        setFlipped([]);
        if (matched.length + 2 === cards.length) {
          setVictory(true);
        }
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className={`app-container ${theme}-theme ${difficulty}-theme`}>
      <div className="header">Memory Game</div>

      <div className="difficulty-selector">
        <label>
          Difficulty:
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
      </div>

      <div className="difficulty-selector">
        <label>
          Theme:
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="fruits">Fruits</option>
            <option value="animals">Animals</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </label>
      </div>

      <GameBoard
        cards={cards}
        flipped={flipped}
        matched={matched}
        handleCardClick={handleCardClick}
        score={score}
        timeLeft={timeLeft}
        theme={theme}
      />

      <VictoryPopup show={victory} initializeGame={initializeGame} />
      <GameOverPopup show={gameOver} initializeGame={initializeGame} />
    </div>
  );
}

export default App;
