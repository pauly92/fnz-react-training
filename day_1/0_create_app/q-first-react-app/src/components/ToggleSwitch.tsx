import './ToggleSwitch.css';

import React, { useState } from "react";

const ToggleSwitch: React.FC = () => {
    const [isOn, setIsOn] = useState(false);

    function handleClick() {
        setIsOn(!isOn);
    }

    return (
        <div className="toggle-switch" onClick={handleClick}>
            <div className={`switch ${isOn ? "on" : "off"}`}>
                {isOn ? "On" : "Off"}
            </div>
        </div>
    );
};

export default ToggleSwitch;