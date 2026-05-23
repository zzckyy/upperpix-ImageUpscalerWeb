import { defineConfig } from 'vite';
import {resolve} from 'path';

export default defineConfig(({ command }) => {
    return {
        base: command === 'build'
            ? '/upperpix-ImageUpscalerWeb/' // pas deploy
            : '/upperpix/', // pas dev

        // resolve pages
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    lowlight: resolve(__dirname, 'lowlight.page.html'),
                    upscale: resolve(__dirname, 'upscale.page.html'),
                    bgremove: resolve(__dirname, 'bgremove.page.html'),
                },
            },
        }
    }
})