import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// Import of Aliaases @ for File path which we know from Vue CLI
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // Here we define the respective alias
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
