import { getArc, getRound } from "./hex";
import { getIntRandom, isEven } from "./math";

/*
export const getGrid = (iLength, jLength, size) => {
  const w = Math.sqrt(3) * size;
  const h = 2 * size;

  return getIJArray(iLength, jLength).map(([i, j]) => {
    const x = i * h * (3 / 4);
    const y = j * w;
    const yShift = isEven(i) ? 0 : -w / 2;

    return { i, j, x, y: yShift + y };
  });
};
*/

export const getIJArray = (iLength, jLength) =>
  new Array(iLength * iLength).fill().map((_, k) => {
    const i = Math.floor(k / iLength);
    const j = Math.floor(k % iLength) + (isEven(i) ? 0 : 1);

    return [i, j];
  });

export const getNext = (arr) => {
  return [
    arr[0],
    ...getArc(
      getRound(arr[0][0], arr[0][1]),
      0, //getIntRandom(6),
      6 //getIntRandom(6)
    ),
  ];
};

export const getValueMap = (arr, value) =>
  arr.reduce((acc, [i, j]) => ({ ...acc, [`${i}${j}`]: value }), {});

export * from "./hex";
export * from "./math";
