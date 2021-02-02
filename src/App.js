import { useState } from "react";
import "./App.css";
import Deck from "./Deck";

function App() {
  const [pics, setPics] = useState([]);

  const getData = async () => {
    try {
      const obj = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      const deck = await obj.json();
      const resp = await fetch(
        `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=4`
      );
      const cards = await resp.json();
      setPics(cards.cards);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h2>CARD GAME</h2>
      <Deck pics={pics} getData={getData} />
    </div>
  );
}

export default App;
