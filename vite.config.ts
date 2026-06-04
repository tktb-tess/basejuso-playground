import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      formats: ['es'],
    },
  },
  preview: {
    port: 8000,
  },
  server: {
    port: 8000,
  },
});
