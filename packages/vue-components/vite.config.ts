import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from "vite-plugin-dts";
// @ts-ignore
import { resolve } from "node:path";

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      // @ts-ignore
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueComponents",
      fileName: (format) => `vue-components.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
