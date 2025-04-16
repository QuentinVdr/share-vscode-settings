import react from '@vitejs/plugin-react';
import sass from 'sass';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        api: 'modern'
      }
    }
  },
  // for development on linux
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    proxy: {
      '/': {
        target: 'share-vscode-settings.quentin-verdier.com',
        changeOrigin: true
      }
    },
    watch: {
      usePolling: true, // Enable polling instead of native file watching
      interval: 100 // Optional: adjust the polling interval (in milliseconds)
    }
  },
  preview: {
    host: 'share-vscode-settings.quentin-verdier.com',
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
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
