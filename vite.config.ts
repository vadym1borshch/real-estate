import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      api: '/src/api',
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      helpers: '/src/helpers',
      store: '/src/store',
      styles: '/src/styles',
    },
  },
   server: {
     //enable to test on mobile devices
     host: '0.0.0.0',
     port: 5173,
   }
})
