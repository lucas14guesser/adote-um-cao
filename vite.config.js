import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        adotar: resolve(__dirname, './src/pages/Adotar.jsx'),
        sobre: resolve(__dirname, './src/pages/Sobre.jsx'),
        sucesso: resolve(__dirname, './src/pages/Sucesso.jsx')
      }
    }
  }
})
