const Cell = ({ id, value, affectChoice, radar, setRadar }) => {
  return (
    <div
      id={id}
      onClick={() => {
        if (radar[id] === false) {
          affectChoice(id);
          setRadar(
            radar.map((element, index) => {
              if (index === id) {
                return true;
              }
              return false;
            })
          );
        }
      }}
      className="cell"
    >
      {value}
    </div>
  );
};

export default Cell;
