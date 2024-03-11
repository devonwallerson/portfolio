import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',  // Add this line with your GitHub repository name.
  plugins: [react()],
  build:{
    outDir: 'dist',
  }
})
