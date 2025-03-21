import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
/** @type {import('tailwindcss').Config} */

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
    react()
  ],
  base: '/My-portfolio/', // ✅ Set repo name correctly
  build: {
    outDir: 'dist', // ✅ Build files go to /dist
  },
})
