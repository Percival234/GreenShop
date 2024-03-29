import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@Root': path.resolve(__dirname, 'src/Root'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@Store': path.resolve(__dirname, 'src/Store'),
      '@Hooks': path.resolve(__dirname, 'src/Hooks'),
      '@Assets': path.resolve(__dirname, 'src/Assets'),
      '@Styles': path.resolve(__dirname, 'src/Styles'),
      '@Routes': path.resolve(__dirname, 'src/Routes'),
      '@Helpers': path.resolve(__dirname, 'src/Helpers'),
      '@UI': path.resolve(__dirname, 'src/Components/UI'),
      '@Constants': path.resolve(__dirname, 'src/Constants'),
      '@Middleware': path.resolve(__dirname, 'src/Middleware'),
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@API': path.resolve(__dirname, 'src/API'),
    },
  },
});
