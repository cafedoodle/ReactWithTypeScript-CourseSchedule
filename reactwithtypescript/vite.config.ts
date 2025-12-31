import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Simulate browser environment
    globals: true, // Use global test functions like `describe`, `it`
    setupFiles: "./src/setupTests.ts", // Optional setup file
    include: ["**/*.test.ts", "**/*.test.tsx"], // Include files ending in .test.ts or .test.tsx
    exclude: ["**/node_modules/**", "**/tests/e2e/**"], // Exclude your Playwright e2e folder
  },
});
