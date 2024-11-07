# Testing

## React Testing

### Vitest

Vitest is a testing library for React that is built on top of Jest. It is designed to be simple and easy to use, while still providing powerful features for testing React components.

SOURCE: <https://www.builder.io/blog/test-custom-hooks-react-testing-library>

#### Installation

SOURCE: <https://www.robinwieruch.de/vitest-react-testing-library/>

To install Vitest, run the following command:

```bash
npm install -D vitest
npm i @testing-library/jest-dom --save-dev
npm i @testing-library/react'
npm i jsdom
```

'vitest.config.ts' file:

```typescript
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test.setup.ts", // assuming the test folder is in the root of our project
  },
});
```

'./test.setup.ts' file:

```typescript
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```
