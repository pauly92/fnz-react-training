import React, { useState, ReactNode } from "react";

interface PanelProps {
  title: string; 
  children: ReactNode; 
}

const Panel: React.FC<PanelProps> = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleShowClick = () => {
    setIsActive(true);
  };

  return (
    <div className="panel">
      <h2>{title}</h2>
      {!isActive && <button onClick={handleShowClick}>Show</button>}
      {isActive && <div className="panel-content">{children}</div>}
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <>
      <h3>Accordion - Basic</h3>
      <div className="accordion">
      <Panel title="Panel 1">
        <p>Panel 1 - content</p>
      </Panel>
      <Panel title="Panel 2">
        <p>TPanel 2 - content</p>
      </Panel>
    </div>
    </>
  );
};

export default Accordion;
