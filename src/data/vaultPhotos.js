// Webpack includes these local images with GitHub Pages-safe asset URLs.
const images = require.context(
  "../assets/photos",
  true,
  /\.(jpe?g|png|webp|avif|gif)$/i,
);

const vaultPhotos = images
  .keys()
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path) => ({
    src: images(path),
    title: path
      .split("/")
      .pop()
      .replace(/\.[^.]+$/, "")
      .replace(/^\d+[-_\s]+/, "")
      .replace(/[-_]+/g, " "),
  }));

export default vaultPhotos;
