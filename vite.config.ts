import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3333,
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@styles": "/src/styles",
    },
  },
  test: {
    setupFiles: "./src/setup-tests.ts",
  },
  base: "/FM-Social-Profile/",
});
