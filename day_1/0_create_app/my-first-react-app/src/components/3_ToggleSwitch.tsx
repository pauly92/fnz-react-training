import React, { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>The switch is {isOn ? "ON" : "OFF"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Turn {isOn ? "OFF" : "ON"}
      </button>
    </div>
  );
};

export default ToggleSwitch;