import React, { useState } from "react";

const agenda = [
  "Introduction to React",
  "React Components",
  "React Props",
  "React State",
  "React Hooks",
  "React Router",
  "React Zustand",
  "React Testing",
  "React Best Practices",
];

type WelcomeMessageProps = {
  title: string;
} & React.PropsWithChildren;

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({title, children}) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <h1>{title}</h1>
      <p>We are glad to have you here. Let's start learning React!</p>

      <h2>Agenda</h2>
      <ul>
        {agenda.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide" : "Show"} Welcome Message
      </button>

      {showMessage && <p>Welcome to React Training!</p>}

      <div>{children}</div>
    </div>
  );
};

export default WelcomeMessage;
