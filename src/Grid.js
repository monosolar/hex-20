import { useSelector } from "react-redux";
import Cell from "./Cell";
import { ss } from "./consts";
import { getIJArray } from "./utils";

const Grid = () => {
  const values = useSelector((state) => state.map);

  const handleClick = (i, j) => {
    // setValues({
    //   ...values,
    //   ...getValueMap([[i, j]], 1000),
    //   ...getValueMap(getNext([[i, j]]), 1000),
    // });
  };

  return (
    <svg width="400" viewBox="-100 -100 1000 1000">
      {getIJArray(ss, ss).map(([i, j]) => (
        <Cell
          key={`${i}${j}`}
          value={values[`${i}${j}`]}
          i={i}
          j={j}
          onClick={handleClick}
        />
      ))}
    </svg>
  );
};

export default Grid;
