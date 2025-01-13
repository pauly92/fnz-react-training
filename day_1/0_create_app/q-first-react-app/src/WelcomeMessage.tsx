import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface WelcomeMessageProps {title: string}

const agendaItems = [
  { id: uuidv4(), text: "Welcome and Introductions" },
  { id: uuidv4(), text: "Project Updates" },
  { id: uuidv4(), text: "Budget Review" },
  { id: uuidv4(), text: "Team Discussion" },
  { id: uuidv4(), text: "Q&A Session" },
  { id: uuidv4(), text: "Closing Remarks" }
];

// 1. Add props to the WelcomeMessage component, add a title prop, and use it in the h1 tag, also add the type of the prop
// 2. Add a boolean state to show a message when a button is clicked
const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ title }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <h1>{title}</h1>
      <p>We are glad to have you here. Let's start learning React!</p>

      <hr />

      <h2>Agenda</h2>
      {/* create a list of agenda items here*/}
      <ul>
        {agendaItems.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>

      <hr />

      {/*create a button here */}
      {/* Add a button to the WelcomeMessage component */}
      {/* Add a click event to the button */}
      {/* Add a conditional rendering to the WelcomeMessage component, when the button is clicked, show a message */}
      <button onClick={() => setIsShown(!isShown)}>
        Click me
      </button>
     {isShown &&  <p>Button clicked!</p>}
     {/* { isShown ?  <p>Button clicked!</p> : null} */}

    </div>
  );
};

export default WelcomeMessage;
