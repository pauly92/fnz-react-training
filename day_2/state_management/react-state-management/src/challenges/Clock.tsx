/** SOURCE: https://react.dev/learn/choosing-the-state-structure */
import { useState } from "react";

type ClockProps = {
  time: string;
  color: string;
};
const Clock: React.FC<ClockProps> = ({ color, time }) => {
  return <h1 style={{ color: color }}>{time}</h1>;
};

type ColorPickerProps = {
  color: string;
  changeColor: (color: string) => void;
};
const ColorPicker: React.FC<ColorPickerProps> = ({ color, changeColor }) => {
  return (
    <select value={color} onChange={(e) => changeColor(e.target.value)}>
      <option value="black">Black</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="red">Red</option>
    </select>
  );
};

export const ClockApp = () => {
  const [color, setColor] = useState("black");
  const [time] = useState(new Date().toLocaleTimeString());
  return (
    <>
      <Clock time={time} color={color} />
      <ColorPicker color={color} changeColor={setColor} />
    </>
  );
};
