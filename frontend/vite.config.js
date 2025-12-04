import { defineConfig } from 'vite'
import wails from "@wailsio/runtime/plugins/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [wails("./bindings")],
})
