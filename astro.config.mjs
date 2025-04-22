import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ricardoflopiza.github.io",
  base: "compro_antiguedades",
  integrations: [tailwind(), icon()],
});
