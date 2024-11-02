# Tasks

1.Create a Welcome Message Component (Timebox 15min)

- Finish the component `WelcomeMessage` in 'src/components/WelcomeMessage.tsx' and add it to the app.

2.Create a Counter Component (Timebox 10min)

- The component displays a number and has two buttons: one to increment the number and one to decrement it. The component should be created in 'src/components/Counter.tsx' and added to the app.

3.Create a Toggle Switch (Timebox 10min)

- The component should display a switch that toggles between "On" and "Off" states.
- The switch should have a visual indicator to show its current state.
- The component should be created in 'src/components/ToggleSwitch.tsx' and added to the app.
- The switch should have an `onChange` event handler to update the state when toggled.

4.Create an Accordion Component

4.1 (Timebox 30min)

- The Accordion component should render multiple Panel components.
- Each Panel component should have a boolean `isActive` state to determine whether its content is visible. Also it should have a title prop.
- The Panel should have a Button 'show' that reveals the content of the panel, and disapears itself after click
- Create two Panels and one Accordion
- Add the Accordion component to the app.

4.2 (Timebox 20min)

- Notice how pressing one panel’s button does not affect the other panel — they are independent.
- But now let’s say you want to change it so that only one panel is expanded at any given time. With that design, expanding the second panel should collapse the first one.
- Create a second version of the Accordion to achieve this behavior
