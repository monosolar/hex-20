import { useState, useRef } from "react";
import Cell from "./Cell";

const SIZE = 50;
const w = Math.sqrt(3) * SIZE;
const h = 2 * SIZE;

const ss = 10;

const isEven = (a) => a % 2 === 0;
const getIntRandom = (to) => Math.floor(Math.random() * (to + 1));

const getGrid = () =>
  new Array(ss * ss).fill().map((_, k) => {
    const i = Math.floor(k / ss);
    const j = Math.floor(k % ss) + (isEven(i) ? 0 : 1);

    const x = i * h * (3 / 4);
    const y = j * w;
    const yShift = isEven(i) ? 0 : -w / 2;

    return { i, j, x, y: yShift + y };
  });

const getIJArray = (iLength, jLength) =>
  new Array(iLength * iLength).fill().map((_, k) => {
    const i = Math.floor(k / iLength);
    const j = Math.floor(k % iLength) + (isEven(i) ? 0 : 1);

    return [i, j];
  });

const SIZE_IJ_ARRAY = getIJArray(ss, ss);

const getRound = (i, j) => {
  const di = isEven(i) ? 1 : 0;

  return [
    [i, j - 1], //u
    [i + 1, j - 1 + di],
    [i + 1, j + di],
    [i, j + 1], //d
    [i - 1, j + di],
    [i - 1, j - 1 + di],
  ];
};

const getArc = (arr, start, count) => [
  ...arr.splice(start, count),
  ...arr.splice(0, count + start - arr.length - 1),
];

const getNext = (arr) => {
  return getArc(
    getRound(arr[0][0], arr[0][1]),
    getIntRandom(6),
    getIntRandom(6)
  );
};

const getValueMap = (arr, value) =>
  arr.reduce((acc, [i, j]) => ({ ...acc, [`${i}${j}`]: value }), {});

const Grid = () => {
  const [values, setValues] = useState(getValueMap(SIZE_IJ_ARRAY, 500));

  const nextCells = useRef([]);

  const handleClick = (i, j) => {
    nextCells.current = [[i, j]];

    setInterval(() => {
      console.log("----->", "", nextCells.current);
      if (nextCells.current.length > 0) {
        setValues({
          ...values,
          ...getValueMap(nextCells.current, 1000),
        });
      }

      nextCells.current = getNext(nextCells.current);
    }, 1000);
  };

  return (
    <svg width="400" viewBox="-100 -100 1000 1000">
      {getGrid().map(({ i, j, x, y }) => (
        <Cell
          key={`${x}${y}`}
          id={`${i}${j}`}
          value={values[`${i}${j}`]}
          size={SIZE - 1}
          i={i}
          j={j}
          x={x}
          y={y}
          onClick={handleClick}
        />
      ))}
    </svg>
  );
};

export default Grid;
