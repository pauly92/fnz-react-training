import { useCallback, useState } from "react";

/** Performance Hook
 * Prevent unnecessary re-renders in your components.
 * useCallback is used to memoize a function so that it is only re-created.
 */
const ChildComponent: React.FC<{ onButtonClick: () => void }> = ({
  onButtonClick,
}) => {
  console.log("ChildComponent rendered");
  return <button onClick={onButtonClick}>Click Me</button>;
};

/**
 *  When the "Increment Count" button is clicked,
 *  the count state is incremented, causing the ParentComponent to re-render.
 *  The ChildComponent will only re-render if its props change.
 *  Since the handleButtonClick function is memoized with useCallback,
 *  it will not change on every render, preventing unnecessary re-renders
 *  of the ChildComponent.
 */
export const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoize the callback function using useCallback
  const handleButtonClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  // const handleButtonClick = () => {
  //   console.log("Button clicked");
  // }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent onButtonClick={handleButtonClick} />
    </div>
  );
};
