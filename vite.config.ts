/// <reference types="vitest/config" />
import { defineConfig } from "vite";

const config = defineConfig({
  resolve: {
    conditions: ['my-package-dev'],
  }
})

export default config
