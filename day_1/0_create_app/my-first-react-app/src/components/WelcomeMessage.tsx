import React from "react";

// https://www.youtube.com/watch?v=82PXenL4MGg&t=352s


// https://www.google.com/search?q=react+app+training&rlz=1C1GCEB_enDE1039DE1039&oq=react+app+training&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyCggFEAAYgAQYogQyCggGEAAYgAQYogQyBggHEEUYQNIBCDM0ODFqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:7ed85ef7,vid:82PXenL4MGg,st:0
// 1. Add props to the WelcomeMessage component, add a title prop, and use it in the h1 tag, also add the type of the prop
// 2. Add a boolean state to show a message when a button is clicked
const WelcomeMessage: React.FC = () => {
  return (
    <div>
      <h1>{/* add a title here using a variable*/}</h1>
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