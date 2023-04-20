import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

const port = 3071;
const origin = `http://localhost:${port}`;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext' 
  },
  preview: { port, },
  server: { 
    port, 
    origin
  },
  plugins: [
    react(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
          './Counter': './src/Counter.tsx',
      },
      shared: ['react', 'react-dom']
    }),
  ],
});
