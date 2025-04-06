import React from 'react';
import './NavBar.css';

function NavBar() {
  const games = [
    { name: '2048', url: 'https://monicatvera.github.io/2048/' },
    { name: 'Flip Memory', url: 'https://flip-memory-game-nu.vercel.app/' },
    { name: 'Sliding Puzzle', url: 'https://sliding-puzzle-game-red.vercel.app/' },
    { name: 'Whack-a-Mole', url: 'https://whack-the-mole-game.vercel.app/' }
  ];

  return (
    <nav className="games-navbar" style={{ marginBottom: '20px' }}>
      <div className="nav-content">
        {/* Make GamesNest clickable and navigate to localhost:3004 */}
        <a href="https://game-nest-ivory.vercel.app/" className="nav-brand">
          GamesNest
        </a>
        <div className="nav-links">
          {games.map(game => (
            <a 
              key={game.name}
              href={game.url}
              className="nav-link"
              // Highlight current game
              style={{
                backgroundColor: window.location.href.includes(game.url) ? '#4a90e2' : 'transparent'
              }}
            >
              {game.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
