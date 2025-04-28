// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  // URL de producción de tu sitio
  site: "https://www.comproantiguedades.cl",
  // Base path (subcarpeta) tanto en dev como en prod
  base: "compro_antiguedades/",
  integrations: [tailwind(), icon()],
  server: {
    // Origen para que Astro pueda resolver new URL(...) en dev
    origin: "http://localhost:4321",
  },
});
