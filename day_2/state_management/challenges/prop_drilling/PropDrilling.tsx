import { useState } from "react";

const NotGuilty = () => {
  console.log("🚀 ~ NotGuily rerendered");
  return <h1>DO NOT RE-RENDER ME</h1>;
};

const ParentComponent = () => {
  const [message, setMessage] = useState("Hello from Parent Component!");
  console.log("🚀 ~ ParentComponent rendered ");

  return (
    <div>
      <h1>Parent Component</h1>
      |<NotGuilty />
      <IntermediateComponent message={message} />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

const IntermediateComponent = ({ message }) => {
  console.log("🚀 ~ IntermediateComponent rendered ");
  return (
    <div>
      <h2>Intermediate Component</h2>
      <ChildComponent message={message} />
    </div>
  );
};

const ChildComponent = ({ message }) => {
  console.log("🚀 ~ ChildComponent rendered ");
  return (
    <div>
      <h3>Child Component</h3>
      <p>{message}</p>
    </div>
  );
};

export default ParentComponent;
