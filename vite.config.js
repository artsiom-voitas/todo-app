import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/todo-app/',
    plugins: [
        react()
        // vitePluginFaviconsInject('./public/logo.svg')
    ]
});
