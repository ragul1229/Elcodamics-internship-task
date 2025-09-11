import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      // Allow JSX inside .js files
      jsxRuntime: "automatic",
      babel: {
        presets: [["@babel/preset-react", { runtime: "automatic" }]],
      },
    }),
  ],
  esbuild: {
    loader: "jsx",              // Tell esbuild to treat .js files as JSX
    include: /src\/.*\.js$/,    // Only apply to your src/*.js files
  },
});
