import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  base: "/luminary_website/", // This ensures your assets (CSS/JS) load correctly on GitHub Pages
  build: {
    assetsInlineLimit: 0,
  },
  plugins: [
    injectHTML(), // Enables the <load> tag
  ],
});
