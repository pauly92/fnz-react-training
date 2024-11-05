import { createContext, useContext, useState } from "react";

type ParentContextType = {
  message: string;
  setMessage: (message: string) => void;
};

const ParentContext = createContext<ParentContextType>(null);

// const ParentContextProvider = ({ children }) => {
//   const [message, setMessage] = useState("Hello!");
//   console.log("🚀 ~ ParentContextProvider rendered:");

//   return (
//     <ParentContext.Provider value={{ message, setMessage }}>
//       {children}
//     </ParentContext.Provider>
//   );
// };

const NotGuilty = () => {
  console.log("🚀 ~ NotGuily rerendered");
  return <h1>DO NOT RE-RENDER ME</h1>;
};

const AppComponent = () => {
  const [message, setMessage] = useState("Hello from Parent Component!");
  console.log("🚀 ~ ParentComponent rendered ");

  return (
    <ParentContext.Provider value={message}>
      <div>
        <h1>Parent Component</h1>
        <NotGuilty />
        <IntermediateComponent />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </ParentContext.Provider>
  );
};

const InputComponent = () => {
  const { message, setMessage } = useContext(ParentContext);
  return (
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  );
};

const IntermediateComponent = () => {
  console.log("🚀 ~ IntermediateComponent rendered ");

  return (
    <div>
      <h2>Intermediate Component</h2>
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  const { message } = useContext(ParentContext);
  console.log("🚀 ~ ChildComponent rendered ");
  return (
    <div>
      <h3>Child Component</h3>
      <p>{message}</p>
    </div>
  );
};

export default AppComponent;
