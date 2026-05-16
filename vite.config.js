// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/pages/html/upscale.page.html'),
        // or a nested page
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
})
