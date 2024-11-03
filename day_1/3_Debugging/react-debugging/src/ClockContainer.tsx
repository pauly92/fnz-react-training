/** SOURCE: https://react.dev/learn/choosing-the-state-structure */

import { useState } from "react";

const Clock = (props) => {
  const [color] = useState(props.color);
  return <h1 style={{ color: color }}>{props.time}</h1>;
};

const ColorPicker = ({ color, changeColor }) => {
  return (
    <select value={color} onChange={(e) => changeColor(e.target.value)}>
      <option value="black">Black</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="red">Red</option>
    </select>
  );
};

export const ClockContainer = () => {
  const [color, setColor] = useState("black");
  const [time] = useState(new Date().toLocaleTimeString());
  return (
    <>
      <Clock time={time} color={color} />
      <ColorPicker color={color} changeColor={setColor} />
    </>
  );
};
