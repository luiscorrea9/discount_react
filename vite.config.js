import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://luiscorrea9.github.io/discount_react/',
  plugins: [react()],
})
