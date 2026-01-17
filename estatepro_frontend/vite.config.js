import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // ← Add this import

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',

  plugins: [react(), tailwindcss()],

  // Add this block to enable @ alias for src/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Optional: improve dev server experience
  server: {
    port: 5173,
    open: true, // auto-open browser on dev start
  },
})