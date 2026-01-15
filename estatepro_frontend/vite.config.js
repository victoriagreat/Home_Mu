import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Home_Mu/',   // 👈 Set this to your GitHub repo name (case-sensitive)
  plugins: [react(), tailwindcss()],
})
