import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const resolveRoot = (...pathSegments: string[]) =>
  path.resolve(process.cwd(), ...pathSegments);

// https://vite.dev/config/
export default defineConfig({
  base: "/<repo>/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [resolveRoot("src", "styles", "common")],
      },
    },
  },
});
