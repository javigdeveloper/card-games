import "./App.css";
import Deck from "./Deck";
import Player from "./Player";
import useCustom from "./useCustom";

function App() {
  const { pics, getData, getPlayers, players } = useCustom();

  return (
    <div className="App">
      <h2>CARD GAME</h2>
      <button onClick={getPlayers}>Get Players</button>
      <Deck pics={pics} getData={getData} />
      {players &&
        players.map((player) => (
          <div key={player.id}>
            <Player player={player} />
          </div>
        ))}
    </div>
  );
}

export default App;
