// vite.config.js
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  root: ".", // index.html is at root
  build: {
    outDir: "dist",
  },
  plugins: [
    injectHTML(), // Enables the <load> tag
  ],
});
