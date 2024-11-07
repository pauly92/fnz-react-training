import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides custom matchers for Jest
import { describe, expect, it } from "vitest"; // Test framework

import App from "./App"; // Import the component to be tested
/**
 * Characteristics of Good Tests:
 *
 * 1. Clear and Descriptive:
 *    - Each test should have a clear and descriptive name explaining its purpose.
 *    - This makes it easier to understand the test's intent.
 *
 * 2. Isolated:
 *    - Tests should be independent of each other.
 *    - The outcome of one test should not affect another.
 *
 * 3. Repeatable:
 *    - Tests should produce the same results every time they are run.
 *    - This ensures consistency regardless of the environment.
 *
 * 4. Fast:
 *    - Tests should run quickly to encourage frequent testing.
 *    - Slow tests can hinder development speed.
 *
 * 5. Comprehensive:
 *    - Tests should cover a wide range of scenarios, including edge cases.
 *    - This ensures correct behavior in all expected situations.
 *
 * 6. Maintainable:
 *    - Tests should be easy to read and maintain.
 *    - Use clear assertions and avoid complex logic within tests.
 *
 * 7. Automated:
 *    - Tests should be automated for frequent execution without manual intervention.
 *    - This helps catch issues early in the development process.
 *
 * 8. Focused:
 *    - Each test should focus on a single aspect of functionality.
 *    - This makes it easier to identify what is broken when a test fails.
 */
// Grouping all tests related to the App component
describe("App", () => {
  // Test to check if the headline is rendered
  it("renders headline", () => {
    render(<App />); // Render the App component
    screen.debug(); // Output the current state of the DOM for debugging

    // Check if an element with the test ID "headline" is present
    screen.getAllByTestId("headline");
    // Check if the text "Vite + React" is present in the document
    screen.getByText("Vite + React");
  });

  // Test to check if the Vite logo is rendered
  it("renders Vite logo", () => {
    render(<App />); // Render the App component
    // Find the image with the alt text "Vite logo"
    const viteLogo = screen.getByAltText("Vite logo");
    // Assert that the Vite logo is in the document
    expect(viteLogo).toBeInTheDocument();
  });

  // Test to check if the React logo is rendered
  it("renders React logo", () => {
    render(<App />); // Render the App component
    // Find the image with the alt text "React logo"
    const reactLogo = screen.getByAltText("React logo");
    // Assert that the React logo is in the document
    expect(reactLogo).toBeInTheDocument();
  });

  // Test to check if the button with initial count is rendered
  it("renders button with initial count", () => {
    render(<App />); // Render the App component
    // Find the button with the text "count is 0"
    const button = screen.getByRole("button", { name: /count is 0/i });
    // Assert that the button is in the document
    expect(button).toBeInTheDocument();
  });

  // Test to check if the count increments on button click
  it("increments count on button click", () => {
    render(<App />); // Render the App component
    // Find the button with the text "count is 0"
    const button = screen.getByRole("button", { name: /count is 0/i });
    // Simulate a click event on the button
    fireEvent.click(button);
    // Assert that the button text changes to "count is 1"
    expect(button).toHaveTextContent("count is 1");
  });

  // Test to check if the learn more text is rendered
  it("renders learn more text", () => {
    render(<App />); // Render the App component
    // Find the text "Click on the Vite and React logos to learn more"
    const learnMoreText = screen.getByText(
      /Click on the Vite and React logos to learn more/i
    );
    // Assert that the learn more text is in the document
    expect(learnMoreText).toBeInTheDocument();
  });

  // Test to check if two links are rendered
  it("renders two links", () => {
    render(<App />); // Render the App component
    // Find all elements with the role "link"
    const links = screen.getAllByRole("link");
    // Assert that there are exactly two links
    expect(links).toHaveLength(2);
  });

  // Test to check if the Vite link is rendered with the correct href
  it("renders Vite link", () => {
    render(<App />); // Render the App component
    // Find the link with the text "vite"
    const viteLink = screen.getByRole("link", { name: /vite/i });
    // Assert that the link has the correct href attribute
    expect(viteLink).toHaveAttribute("href", "https://vite.dev");
  });

  // Test to check if the React link is rendered with the correct href
  it("renders React link", () => {
    render(<App />); // Render the App component
    // Find the link with the text "react"
    const reactLink = screen.getByRole("link", { name: /react/i });
    // Assert that the link has the correct href attribute
    expect(reactLink).toHaveAttribute("href", "https://react.dev");
  });
});
