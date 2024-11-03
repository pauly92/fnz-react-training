import { useState } from "react";
import { ExpensiveCalculation } from "./ExpensiveCalculation";

export const UserContainer = () => {
  console.log("🚀 ~ Container ~ rendered");

  return (
    <div className="container">
      <UserList />
    </div>
  );
};
const UserList = () => {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ UserList ~ rendered");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Click me | Counter: {count}
      </button>
      <ExpensiveCalculation />
      <div className="user-list">
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    </>
  );
};

const UserItem = () => {
  console.log("🚀 ~ UserItem ~ rendered");
  return <div className="user-item">User Item</div>;
};
