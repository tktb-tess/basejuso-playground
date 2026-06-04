import { defineConfig } from 'vite';
import dts from 'unplugin-dts/vite';

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: './lib/main.ts',
      formats: ['es'],
      fileName: () => 'main.js',
    },
  },
  preview: {
    port: 8000,
  },
  server: {
    port: 8000,
  },
});
