/**
 * @param {string} path Ruta dentro de public/, p.ej. "assets/foo.png" o "/assets/foo.png"
 * @returns {string}     "/assets/foo.png" en dev, o "/compro_antiguedades/assets/foo.png" en prod
 */
export function getAssetPath(path) {
  // quito slash inicial si existe
  const clean = path.replace(/^\//, "");
  // import.meta.env.BASE_URL viene de astro.config.mjs → "/compro_antiguedades/"
  return `${import.meta.env.BASE_URL}${clean}`;
}
