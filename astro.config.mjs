// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://czapy.github.io",
  base: "/pages-test",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
});
