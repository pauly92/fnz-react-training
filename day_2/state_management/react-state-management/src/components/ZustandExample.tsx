import React from "react";
import { useAppStore } from "../App.store";

const ChildA = ({ children }) => {
//   const increment = useAppStore((state) => state.increment);
  return (
    <>
      <h1>Child A</h1>
      {children}
    </>
  );
};

const ChildB = () => {
  const count = useAppStore((state) => state.count);

  return (
    <>
      <h1>Child B</h1>
      Counter: {count}
      <ChildC />
    </>
  );
};

const ChildC = () => {
  const count = useAppStore((state) => state.count);
  const increment = useAppStore((state) => state.increment);

  return (
    <>
      <h1>Child C</h1>
      <button onClick={() => increment()}>Update Counter</button>
      Counter: {count}
    </>
  );
};

export const ZustandExample = () => {
  return (
    <>
      <ChildA>
        <ChildB />
      </ChildA>
    </>
  );
};
