
// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.0.144:5214",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
