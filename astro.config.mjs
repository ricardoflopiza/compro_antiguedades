// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  // apúntalo a tu dominio custom
  site: "https://comproantiguedades.cl",
  // sin subcarpeta, ¡va en la raíz!
  base: "/",
  integrations: [tailwind(), icon()],
  server: {
    origin: "http://localhost:4321",
  },
});
