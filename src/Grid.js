import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cell from "./Cell";
import { gridSize } from "./consts";
import { getIJArray, getIntRandom, getNext, getValueMap } from "./utils";

import { INITIAL_STATE } from "./map";

const Grid = () => {
  //const values = useSelector((state) => state.map);
  const [values, setValues] = useState(INITIAL_STATE);

  const handleClick = (i, j) => {
    setValues({
      ...values,
      ...getValueMap([[i, j]], 1000),
      ...getValueMap(getNext([[i, j]]), 1000),
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setValues((prevValues) => ({
        ...prevValues,

        ...getValueMap(
          getNext([[getIntRandom(gridSize), getIntRandom(gridSize)]]),
          1000
        ),
        //...getValueMap([[getIntRandom(6), getIntRandom(6)]], 1000),
        //...getValueMap(getNext([[i, j]]), 1000),
      }));
      //
    }, 100);

    return () => clearInterval(timer);
  }, [setValues]);

  (state) => {
    //cell = getNext();

    return {
      ...state,
      ...getNext([[getIntRandom(gridSize), getIntRandom(gridSize)]], 1000),
    };
  };

  return (
    <svg width="400" viewBox="-100 -100 1000 1000">
      {getIJArray(gridSize, gridSize).map(([i, j]) => (
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
