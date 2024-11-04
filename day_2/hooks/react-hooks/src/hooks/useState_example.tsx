import { useState } from "react";

/** State Hook
 *  Keep track of data in your components.
 */
export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      Counter: {count}
      <button onClick={increment}>Increment</button>
    </>
  );
};
