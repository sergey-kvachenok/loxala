import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@ui': '/src/ui',
      '@components': '/src/ui/components',
      '@icons': '/src/ui/icons',
      '@images': '/src/shared/ui/images',
    },
  },
});
