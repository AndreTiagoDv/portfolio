// vite.config.ts
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { visualizer } from 'rollup-plugin-visualizer'; // Importe o visualizer aqui

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // Adicione o visualizer aqui. A opção `open: true` abre o relatório
    // automaticamente no seu navegador após a build.
    visualizer({
      open: true,
      filename: 'bundle-report.html',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/_breakpoints.scss" as *;
        `,
      },
    },
  },
  build: {
    // Esta é a nova seção
    rollupOptions: {
      output: {
        // Separa as dependências do `node_modules` em um chunk 'vendor'
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
