import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  theme:{
      backgroundColor :{
        "app-green":"rgb(0,255,67)",
      }
  },
  plugins: [
    react(),tailwindcss(),
  ],
  
});