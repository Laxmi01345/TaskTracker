import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/TodoList-using-React-and-Tailwind-CSS/",
  plugins: [react()],
})
