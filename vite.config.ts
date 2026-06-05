/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {},
  preview: {
    port: 8000,
  },
  server: {
    port: 8000,
  },
  test: {
    testTimeout: 30000,
  },
});
