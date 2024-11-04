import React, { useState } from "react";

type PanelProps = {
  title: string;
} & React.PropsWithChildren;

export const Panel: React.FC<PanelProps> = ({ title, children }) => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setActive(!isActive)}>Show</button>
      )}
    </>
  );
};
