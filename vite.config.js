import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: 'react',
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx']
      }
    }),
    // tailwindcss(),
    // reactRouter(),
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});