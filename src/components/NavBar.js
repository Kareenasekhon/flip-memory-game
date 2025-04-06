import React from 'react';
import './NavBar.css';

function NavBar() {
  const games = [
    { name: '2048', url: 'http://localhost:3000' },
    { name: 'Flip Memory', url: 'http://localhost:3001' },
    { name: 'Sliding Puzzle', url: 'http://localhost:3002' },
    { name: 'Whack-a-Mole', url: 'http://localhost:3003' }
  ];

  return (
    <nav className="games-navbar" style={{ marginBottom: '20px' }}>
      <div className="nav-content">
        {/* Make GamesNest clickable and navigate to localhost:3004 */}
        <a href="http://localhost:3004" className="nav-brand">
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
