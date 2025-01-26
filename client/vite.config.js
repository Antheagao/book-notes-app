import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use process.env to access environment variables in vite.config.js
const apiUrl = process.env.VITE_API_URL || 'http://localhost:5000';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: apiUrl,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});