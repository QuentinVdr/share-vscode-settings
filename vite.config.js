import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  resolve: {
    // Registering alias paths
    alias: {
      '@api': '/src/api',
      '@assets': '/public/assets',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@stores': '/src/stores',
      '@styles': '/src/styles',
      '@utils': '/src/utils'
    }
  }
});
