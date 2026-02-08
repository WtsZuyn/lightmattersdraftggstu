import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    // ✅ Fix GitHub Pages blank screen (assets resolve under /<repo>/)
    // Option 1 (recommended for GH Pages): use relative base
    base: "./",

    server: {
      port: 3000,
      host: "0.0.0.0",
    },

    plugins: [react()],

    define: {
      // Keep your env injections
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
