import React from "react";

// 1. Add props to the WelcomeMessage component, add a title prop, and use it in the h1 tag, also add the type of the prop
// 2. Add a boolean state to show a message when a button is clicked
const WelcomeMessage: React.FC = () => {
  return (
    <div>
      <h1>{/* add a title here passed as prop. Add types there needed.*/}</h1>
      <p>We are glad to have you here. Let's start learning React!</p>

      <h2>Agenda</h2>
      {/* create a list of agenda items here*/}


      {/*create a button here */}
      {/* Add a button to the WelcomeMessage component */}
      {/* Add a click event to the button */}
      {/* Add a conditional rendering to the WelcomeMessage component, when the button is clicked, show a message */}
    </div>
  );
};

export default WelcomeMessage;