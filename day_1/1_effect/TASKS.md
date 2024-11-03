# Lifecycle and Effects

## Introduction

1. React Hooks allow you to use state and lifecycle features in function components.
2. `useEffect` runs additional code after React updates the DOM.
3. Side effects affect things outside the component.
4. Keep side effects separate from rendering for:
    - **Performance**: Avoid slowing down rendering.
    - **Predictability**: Ensure pure and predictable rendering.
    - **Consistency**: Prevent multiple or unexpected executions.

### Use Cases

- Fetching data
- Subscribing to services
- DOM manipulation
- Event listeners
- Timeouts and intervals

### Sources

- [Guide to useEffect Hook in React](https://radixweb.com/blog/guide-to-useeffect-hook-in-react)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

## Tasks

### 1. Simple Counter with useEffect

- Create a simple counter that updates the document title with the current count.
- Create a new component called `Counter`.
- Use the `useState` Hook to create a count state variable.
- Use the `useEffect` Hook to update the document title with the current count whenever the count changes.
- Add a button to increment the count.

### 2. Fetch Data on Component Mount

- Fetch data from an API when the component mounts and display it.
- Use the `useEffect` Hook to fetch data from an API (e.g., [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)) when the component mounts.
- Display the fetched data in a list, showing only the first 5 results.
- Display a loading message during data retrieval.
- Create a `PostList` component.

#### Data Type

```json
{
  "userId": number,
  "id": number,
  "title": string,
  "body": string
}
```

### 3. Create a Blog Component with Post Display

- Create a `Post` component that displays the title and body of a post.
- Create a `Blog` component that fetches and passes data to the `Post` component.
- The `Blog` component should have a button labeled "Get Next Post".
- Clicking the "Get Next Post" button should increment the `currentPostID` by one, starting from post ID 1.
- Fetch the new post data from the API `https://jsonplaceholder.typicode.com/posts/:id` when the button is clicked.
- Pass the fetched data down to the `Post` component to update the displayed post.
- Make the functional components type-safe.

### 4. Cleanup and Dependency Management

- Create a component that sets up an interval to update the time every second and cleans up the interval when the component unmounts.
- Create a new component called `Clock`.
- Display the current time.
- Ensure that the interval is cleared when the component unmounts to avoid memory leaks.
