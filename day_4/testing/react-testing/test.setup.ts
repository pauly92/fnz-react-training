import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

import '@testing-library/jest-dom';

vi.mock('zustand'); // to make it works like Jest (auto-mocking)

expect.extend(matchers);

afterEach(() => {
  cleanup();
});