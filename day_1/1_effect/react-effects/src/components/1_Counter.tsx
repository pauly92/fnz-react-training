import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${count}`; 
  }, [count]);

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
