import useCustom from "./useCustom";

const Player = ({ player }) => {
  const { calculateChips } = useCustom();
  return (
    <div>
      <h1>{player.name}</h1>
      <p>${player.chips}</p>
      <button onClick={() => calculateChips(player)}>Add 1</button>
    </div>
  );
};

export default Player;
