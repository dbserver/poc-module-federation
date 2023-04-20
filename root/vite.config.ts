import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  server: {
    port: 3070
  },
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
          products: "http://localhost:3071/assets/remoteEntry.js",
      },
      shared: ['react', 'react-dom']
    }),
  ],
});
