import { SIZE } from "./consts";
import { isEven } from "./utils";

const Cell = ({ i, j, value = 0, onClick }) => {
  const size = SIZE;
  const w = Math.sqrt(3) * size;
  const h = 2 * size;
  const x = i * h * (3 / 4);
  const y = j * w + (isEven(i) ? 0 : -w / 2);

  return (
    <g
      fill="aqua"
      opacity={parseInt(value) / 1000}
      transform={`translate(${x},${y})`}
      onClick={() => {
        onClick(i, j);
      }}
    >
      <polygon
        points={`${size},0 ${size / 2},-${w / 2} -${size / 2},-${
          w / 2
        } -${size},-0 -${size / 2},${w / 2} ${size / 2},${w / 2}`}
      ></polygon>
      {/* <text
        x="-40"
        y="10"
        fontFamily="Verdana"
        fontSize={size * 0.8}
        fill="blue"
      >
        {i},{j}
      </text> */}
    </g>
  );
};

export default Cell;
