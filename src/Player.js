const Player = ({ player, calculateChips, pics }) => {
  return (
    <div className="Player">
      <span>
        <h1>{player.name}</h1>
        <p>${player.chips}</p>
        <button onClick={() => calculateChips(player)}>Add 1</button>
      </span>
      <span className="bet">Your bet is: {player.bet}</span>
      {pics.map((card) => (
        <span key={card.code}>
          <img src={card.image} alt="card" />
        </span>
      ))}
    </div>
  );
};

export default Player;
