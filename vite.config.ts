/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: '/basejuso-playground',
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
