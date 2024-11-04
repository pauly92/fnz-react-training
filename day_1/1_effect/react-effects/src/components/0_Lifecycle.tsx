import React, { useEffect, useState } from "react";

export const Lifecycle: React.FC = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ value: 0 });

  const computedCount = count * 2;

  console.log("Component rendered");
  console.log("computedCount:", computedCount);
  
  useEffect(() => {
    console.log("Component updated");
  });

  useEffect(() => {
    console.log("Component mounted");
    // add eventlistener

    return () => {
      // remove eventlistener  
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Object dependency updated");
  }, [obj]);

  useEffect(() => {
    console.log("Primitive count dependency updated");
  }, [count]);

  return (
    <div>
      <h1 onClick={console.log('markup here we go')}>Lifecycle Component</h1>
      <p>Count: {count}</p>
      <p>ComputedCount: {computedCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setObj({ value: obj.value + 1 })}>
        Object update
      </button>
      <button onClick={() => setObj({ value: 0})}>
        Object update with same value
      </button>
    </div>
  );
};
