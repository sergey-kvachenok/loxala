import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
