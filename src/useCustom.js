import { useEffect, useState } from "react";

const useCustom = () => {
  const [pics, setPics] = useState([]);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    console.log("useEffect ran");
  }, [players]);

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

  const calculateChips = (player) => {
    console.log(player);
    fetch(`http://localhost:8000/players/${player.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chips: `${player.chips + 1}` }),
    }).then(() => {
      console.log("new");
      getPlayers();
    });
  };

  const getPlayers = async () => {
    try {
      const res = await fetch("http://localhost:8000/players");
      const data = await res.json();
      console.log(data);
      setPlayers(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return { pics, getData, calculateChips, getPlayers, players };
};

export default useCustom;
