import { isEven } from "./math";

export const getRound = (i, j) => {
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

export const getArc = (arr, start, count) => [
  ...arr.splice(start, count),
  ...arr.splice(0, count + start - arr.length - 1),
];
