import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
