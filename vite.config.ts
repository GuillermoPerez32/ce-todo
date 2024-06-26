/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // https://vitest.dev/config/
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    coverage: {
      reportOnFailure: true,
      provider: "v8",
      exclude: [
        "**/__tests__/**",
        "**/*.test.*",
        "**/*.stories.*",
        "**/storybookUtils/**",
        "**/*.d.ts",
        "**/types.ts",
        "**/theme.ts",
        "**/__mocks__/**",
        "**/coverage/**",
        "src/lib/icons",
        "src/sandbox",
        "vite.config.ts",
      ],
      all: true,
    },
  },
});
