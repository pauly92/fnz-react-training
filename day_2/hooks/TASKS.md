# React Hooks

Source: [React Hooks Documentation](https://react.dev/reference/react/hooks)

## Introduction

Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class. They are functions that let you "hook into" React state and lifecycle features from function components.

## Built-in Hooks

- **State Hook**: `useState` - Allows you to add state to functional components.
- **Effect Hook**: `useEffect` - Lets you perform side effects in function components.
- **Context Hook**: `useContext` - Accepts a context object and returns the current context value.
- **Reducer Hook**: `useReducer` - An alternative to `useState` for more complex state logic.
- **Callback Hook**: `useCallback` - Returns a memoized callback.
- **Memo Hook**: `useMemo` - Returns a memoized value.
- **Ref Hook**: `useRef` - Returns a mutable ref object.

## Rules of Hooks

Source: [Invalid Hook Call Warning](https://react.dev/warnings/invalid-hook-call-warning)

1. Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.
2. Only call Hooks from React function components. Don't call Hooks from regular JavaScript functions.

**Important:**

- 🔴 Do not call Hooks inside conditions or loops.
- 🔴 Do not call Hooks after a conditional return statement.
- 🔴 Do not call Hooks in event handlers.
- 🔴 Do not call Hooks in class components.
- 🔴 Do not call Hooks inside functions passed to `useMemo`, `useReducer`, or `useEffect`.

## Custom Hooks

Source: [Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks#recap)

Custom Hooks are JavaScript functions whose names start with `use` and may call other Hooks. They can be used to reuse stateful logic between components.

1. Custom Hooks let you share logic between components.
2. Custom Hooks must be named starting with `use` followed by a capital letter.
3. Custom Hooks only share stateful logic, not state itself.
4. You can pass reactive values from one Hook to another, and they stay up-to-date.
5. All Hooks re-run every time your component re-renders.
6. The code of your custom Hooks should be pure, like your component’s code.
7. Don’t create custom Hooks like `useMount`. Keep their purpose specific.

## Tasks

### 1. Create a Component to Scroll to a Section

Create a React component that uses the `useRef` hook to scroll to a specific section of the page when a button is clicked.

**Instructions:**

- Create a new file named `ScrollToSection.tsx` in your `src` directory.
- Use the `useRef` hook to create a reference to a section of the page.
- Implement a function that scrolls to the referenced section when a button is clicked.
- Create a container `div` with a height of `100vh`.
- Add a button that, when clicked, scrolls to the referenced section.

### 2. Create a Custom Hook for Window Resize

Create a custom hook that tracks the window size and demonstrates how to use it in a React component.

**Hint:** Use `window.addEventListener('resize', handleResize);`

**Instructions:**

- Use the custom hook in your App to display the window size.
