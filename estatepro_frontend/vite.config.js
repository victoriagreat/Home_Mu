import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/HOME_MU/',   // 👈 ADD THIS LINE
  plugins: [react(), tailwindcss()],
})
