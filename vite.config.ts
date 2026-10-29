import { defineConfig } from 'vite'; import react from '@vitejs/plugin-react';
export default defineConfig({ plugins: [react()], build: { rollupOptions: { output: { manualChunks: { 'vendor-router': ['react-router-dom'], 'vendor-motion': ['motion'] } } } } });
