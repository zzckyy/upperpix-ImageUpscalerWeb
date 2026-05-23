import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  return {
    base: command === 'build'
      ? '/upperpix-ImageUpscalerWeb/' // pas deploy
      : '/upperpix/', // pas dev
  }
})