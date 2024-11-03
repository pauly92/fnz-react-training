# Tasks

## Styling

1. **Create a React component that uses inline styles to style a button.**
    - A Button with a green background, white font color, 5px border-radius, and a pointer cursor.

2. **Create a React component that uses a CSS file to style a button.**
    - A Button with a red background, white font color, 5px border-radius, and a pointer cursor.

3. **Create a React component that uses CSS Modules to style a button.**
    - A Button with a yellow background, white font color, 5px border-radius, and a pointer cursor.

4. **Create a React component that uses Tailwind CSS to style a button.**
    - A Button with a blue background, white font color, 5px border-radius, and a pointer cursor.
    - [Tailwind CSS Documentation](https://tailwindcss.com/docs/)

### Adding Tailwind CSS to Your Project

1. **Install Tailwind CSS:**

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

2. **Configure your template paths (`tailwind.config.js`):**

    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

3. **Add Tailwind CSS to your CSS file (`src/index.css`):**

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

### Install Tailwind CSS Intellisense Extension

- **VSCode:** Tailwind CSS Intellisense
- **Webstorm:** [Tailwind CSS Intellisense for Webstorm](https://www.jetbrains.com/help/webstorm/tailwind-css.html#ws_css_tailwind_before_you_start)
