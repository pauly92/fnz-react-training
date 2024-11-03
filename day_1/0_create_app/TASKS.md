# Tasks

0. Create a new React app using vite.
    **Install Node.js**:
    - Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

    **Create a New Vite Project**:
    - Open your terminal and run:

        ```sh
        npm create vite@latest
        ```

    **Navigate to Project Directory**:

    - Move into your project folder:

        ```sh
        cd my-react-app
        ```

    **Install Dependencies**:

    - Install the necessary dependencies:

        ```sh
        npm install
        ```

    **Start the Development Server**:

    - Run the development server:

        ```sh
        npm run dev
        ```

1. **Create a Welcome Message Component**

- Add the component `WelcomeMessage` in `day_1/excercises/WelcomeMessage.tsx` to your app and follow the instructions in the file.

2. **Create a Counter Component**

- The component displays a number and has two buttons: one to increment the number and one to decrement it.
- The component should be created in `src/components/Counter.tsx` and added to the app.

3. **Create a Toggle Switch**

- The component should display a switch that toggles between "On" and "Off" states.
- The switch should have a visual indicator to show its current state.
- The component should be created in `src/components/ToggleSwitch.tsx` and added to the app.
- The switch should have an `onChange` event handler to update the state when toggled.

4.**Create an Accordion Component**

4.1 **Basic Accordion**

- The Accordion component should render multiple Panel components.
- Each Panel component should have a boolean `isActive` state to determine whether its content is visible and a title prop.
- The Panel should have a Button 'show' that reveals the content of the panel and disappears itself after click.
- Create two Panels and one Accordion.
- Add the Accordion component to the app.

 4.2 **Single Active Panel Accordion**

- Notice how pressing one panel’s button does not affect the other panel — they are independent.
- Change it so that only one panel is expanded at any given time. Expanding the second panel should collapse the first one.
- Create a second version of the Accordion to achieve this behavior.
