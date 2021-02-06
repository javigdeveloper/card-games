import "./App.css";
import Player from "./Player";
import useCustom from "./useCustom";

function App() {
  const { pics, getData, getPlayers, players } = useCustom();

  const calculateChips = (player) => {
    fetch(`http://localhost:8000/players/${player.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chips: player.chips + 1 }),
    }).then(() => {
      getPlayers();
    });
  };

  const handleBets = async () => {
    for (let i = 0; i < players.length; i++) {
      await fetch(`http://localhost:8000/players/${players[i].id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chips: players[i].chips - 2,
          bet: players[i].bet + 2,
        }),
      });
    }
    getPlayers();
  };

  return (
    <div className="App">
      <h2>CARD GAME</h2>
      {players && <button onClick={handleBets}>All Bet</button>}
      {!players && <button onClick={getPlayers}>Create Players</button>}
      {players && <button onClick={getData}>Draw cards</button>}
      {players &&
        players.map((player) => (
          <div key={player.id}>
            <Player
              player={player}
              calculateChips={calculateChips}
              pics={pics}
            />
          </div>
        ))}
    </div>
  );
}

export default App;
