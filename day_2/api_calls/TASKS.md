# API Calls

## Topics

### FETCH API

### React Query

SOURCE: <https://tanstack.com/query/latest/docs/framework/react/overview>
Get Started: <https://tanstack.com/query/latest/docs/framework/react/installation>

React Query is a powerful tool for managing server-state in React applications. It simplifies data fetching, caching, synchronization, and more, making it easier to handle asynchronous operations. React Query helps to reduce the amount of boilerplate code and provides a more declarative approach to data fetching.

#### Why React Query is Helpful

- **Simplifies Data Fetching**: Automatically handles caching, background updates, and stale data.
- **Improves Performance**: Reduces the number of network requests by caching data and reusing it when possible.
- **Declarative Approach**: Makes it easier to manage server-state with hooks and a clear API.
- **Automatic Refetching**: Keeps data up-to-date by automatically refetching data in the background.
- **Error Handling**: Provides built-in mechanisms for handling errors and retries.

### SWR

SWR (stale-while-revalidate) is a strategy for data fetching that first returns cached data (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data. It is a React Hooks library for remote data fetching developed by Vercel.

#### Why SWR is Useful

- **Optimistic UI**: Provides a fast and responsive user experience by showing cached data first.
- **Automatic Revalidation**: Keeps data fresh by automatically revalidating it in the background.
- **Focus on Simplicity**: Easy to use with a minimal API surface.
- **Built-in Caching**: Efficiently caches data to reduce the number of network requests.
- **Error Handling**: Simplifies error handling with built-in support for retries and fallback data.

### MSW

Source: <https://mswjs.io/docs/getting-started>

MSW (Mock Service Worker) is a library for mocking API requests in development and testing environments. It intercepts requests made with the Fetch API or Axios and provides a way to mock responses. MSW helps to simulate server responses without the need for a real server, making it easier to test components that rely on external APIs.

#### Why MSW is Valuable

- **Mocking API Requests**: Allows developers to mock API responses for testing purposes.
- **Server Simulation**: Simulates server responses without the need for a real server.
- **Request Interception**: Intercepts requests made with the Fetch API or Axios.
- **Request Handlers**: Provides a way to define custom request handlers for different endpoints.

#### Installation

To install MSW, you can use npm:

SOURCE BROWSER ENV: <https://mswjs.io/docs/integrations/browser>

SOURCE: <https://www.mattstobbs.com/msw-2-in-react-vite/>

```bash
npm install msw@latest --save-dev
npx msw init public --save
```
