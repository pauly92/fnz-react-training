import React from "react";

type PanelProps = {
  title: string;
  isActive: boolean;
  showPanel: () => void;
} & React.PropsWithChildren;

export const Panel: React.FC<PanelProps> = ({
  title,
  isActive,
  showPanel,
  children,
}) => {
  return (
    <>
      <h2>{title}</h2>
      {isActive ? <p>{children}</p> : <button onClick={showPanel}>Show</button>}
    </>
  );
};
