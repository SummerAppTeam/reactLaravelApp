import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
    react(),
  ],
  server: {
    host: "localhost",  
    port: 5199,
    strictPort: true,
    hmr: {
      host: "localhost",
      protocol: "http",
      port: 5199,
    },
  },
});
