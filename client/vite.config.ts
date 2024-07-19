/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  //@ts-ignore
  test: {
    coverage: {
      provider: 'v8'
    },
  },

  server: {
    host: "0.0.0.0",
    hmr: {
      clientPort: 5173
    },
    port: 5173,
    watch: {
      usePolling: true
    }
    
  },

  build: {
    target: 'esnext'
  }
});
