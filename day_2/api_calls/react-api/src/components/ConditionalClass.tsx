import React, { useState } from "react";
import classNames from "classnames";

const ConditionalClass: React.FC = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonClass = classNames({
    "btn": true,             // Always apply "btn"
    "highlighted": isHighlighted, // Apply if `isHighlighted` is true
    "disabled": isDisabled,  // Apply if `isDisabled` is true
  });

  return (
    <div>
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle Highlight
      </button>
      <button onClick={() => setIsDisabled(!isDisabled)}>
        Toggle Disabled
      </button>
      <div className={buttonClass}>
        This button has conditional classes.
      </div>
    </div>
  );
};

export default ConditionalClass;
