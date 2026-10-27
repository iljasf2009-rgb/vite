import { useState } from "react";
import "./App.css";
import GameCard from "./components/GameCard";
import gamesData from "./components/games.json";

function App() {
  const [search, setSearch] = useState("");
  const [games] = useState(gamesData);

  return (
    <div className="app-container">
      <h1>🎮 My Game Collection</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Zoek een game..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="games-list">
        {games
          .filter((game) =>
            game.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
              genre={game.genre}
              rating={game.rating}
              year={game.year}
              image={game.image}
            />
          ))}
      </div>
    </div>
  );
}

export default App;