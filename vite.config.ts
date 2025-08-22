import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ✅ make sure Vercel knows where the output is
    rollupOptions: {
      input: './index.html',
    },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
