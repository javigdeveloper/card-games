const Deck = ({ getData, pics }) => {
  return (
    <div>
      <div>
        <button onClick={getData}>Draw cards</button>
      </div>
      {pics.map((card) => (
        <span key={card.code}>
          <img src={card.image} alt="card" />
        </span>
      ))}
    </div>
  );
};

export default Deck;
