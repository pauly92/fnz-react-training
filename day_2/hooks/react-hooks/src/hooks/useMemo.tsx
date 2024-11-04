import React, { useState, useMemo } from "react";

/**
 * Performance Hook
 * Prevent unnecessary re-computation in your components.
 */
const ExpensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000; i++) {} // Simulate a heavy computation
  return num * 2;
};

const MemoExample: React.FC = () => {
  console.log("MemoExample rendered");
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // Memoize the result of the expensive calculation
  const memoizedValue = useMemo(() => ExpensiveCalculation(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default MemoExample;

/**
 * Explanation: Expensive Calculation:
 * We define a function ExpensiveCalculation that simulates
 * a heavy computation by looping a large number of times and
 * then returns the double of the input number.
 *
 * useMemo Hook: We use the useMemo hook to memoize the result
 * of the ExpensiveCalculation function.
 * The useMemo hook takes a function and a dependency array.
 * It only recomputes the memoized value when one of the dependencies
 * has changed. In this case, it will only recompute when count changes.
 * State Management: We use the useState hook to manage the count and
 * input state variables.
 *
 * Rendering: We render the current count, the memoized value,
 * a button to increment the count, and an input field.
 */
