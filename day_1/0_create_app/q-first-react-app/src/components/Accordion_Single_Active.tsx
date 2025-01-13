import React, { useState, ReactNode } from "react";

interface PanelProps {
  title: string; 
  isActive: boolean;
  onClick: () => void;
  children: ReactNode; 
}

const Panel: React.FC<PanelProps> = ({ title, isActive, onClick, children }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleShowClick = () => {
//     setIsActive(true);
//   };

  return (
    <div className="panel">
      <h2>{title}</h2>
      {!isActive && <button onClick={onClick}>Show</button>}
      {isActive && <div className="panel-content">{children}</div>}
    </div>
  );
};

const Accordion: React.FC = () => {

  const [activePanel, setActivePanel] = useState<string | null>(null);

  function handleClick(panelId: string) {
    setActivePanel(prev => prev === panelId ? null : panelId)
  }

  return (
    <>
        <h3>Accordion - Single Active</h3>
        <div className="accordion">
        <Panel title="Panel 1" isActive={activePanel === 'panel1'} onClick={() => handleClick('panel1')}>
            <p>Panel 1 - content</p>
        </Panel>
        <Panel title="Panel 2" isActive={activePanel === 'panel2'} onClick={() => handleClick('panel2')}>
            <p>TPanel 2 - content</p>
        </Panel>
        </div>
    </>
  );
};

export default Accordion;
