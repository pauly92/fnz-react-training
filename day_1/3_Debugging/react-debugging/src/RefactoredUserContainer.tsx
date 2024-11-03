import { useState } from "react";

export const UserContainer = () => {
  console.log("🚀 ~ Container ~ rendered");

  return (
    <div className="container">
      <UserList>
        <UserItem />
        <UserItem />
        <UserItem />
      </UserList>
    </div>
  );
};

const UserList = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ UserList ~ rendered");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Click me | Counter: {count}
      </button>
      <div className="user-list">{children}</div>
    </>
  );
};

const UserItem = () => {
  console.log("🚀 ~ UserItem ~ rendered");
  return <div className="user-item">User Item</div>;
};
