// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// En prod Gh-Pages uso la subruta, en dev sirvo en /
const BASE = import.meta.env.PROD
  ? "/compro_antiguedades/" // <-- la carpeta donde publicas en GitHub Pages
  : "/"; // <-- en local sirvo siempre desde la raíz

export default defineConfig({
  // tu dominio custom en prod
  site: import.meta.env.PROD
    ? "https://antiguedades.midominio.com"
    : "http://localhost:4322",

  base: BASE,
  integrations: [tailwind(), icon()],

  server: {
    // para que Astro pueda hacer new URL(...) en dev
    origin: "http://localhost:4322",
  },
});
