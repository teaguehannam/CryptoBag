import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 5000,
    },
    resolve: {
        alias: {
            '#cmp': process.cwd() + '/src/components',
            '#stores': process.cwd() + '/src/stores',
            '#classes': process.cwd() + '/src/classes',
        },
    },
    plugins: [svelte()],
});
