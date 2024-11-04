export const GreenButton = () => {
  return (
    <button style={{
        backgroundColor: 'green',
        color: 'white',
        borderRadius: '5px',
    }}>Click me</button>
  )
}

/**
 * Using inline styles in React can be considered bad practice for several reasons:
 * Performance: Inline styles are re-created every time a component re-renders
 * Maintainability: Inline styles can make your code harder to maintain and read, especially as the number of styles grows. 
 * Reusability: Inline styles are not reusable.
 * CSS Features: No support for CSS features such as pseudo-classes (:hover, :focus, etc.), media queries, and keyframe animations.
 */