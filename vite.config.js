import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Simple-react-calculator/', // 👈 must match GitHub repo name
})
