import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Automated-Job-Hunting-Hub/',
  server: {
    port: 3000
  }
})
