import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test.setup.ts", // assuming the test folder is in the root of our project
  },
});
