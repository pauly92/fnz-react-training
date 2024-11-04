import { useState } from "react";
import { Panel } from "./Panel";

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h1>Accordion</h1>
      <Panel
        title="About"
        isActive={activeIndex == 0}
        showPanel={() => setActiveIndex(0)}
      >
        About content ....
      </Panel>
      <Panel
        title="Home"
        isActive={activeIndex == 1}
        showPanel={() => setActiveIndex(1)}
      >
        Home content ...
      </Panel>
    </>
  );
};
