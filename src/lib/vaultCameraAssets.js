const base = `${process.env.PUBLIC_URL}/models/fujifilm-x-t3/`;
const resources = new Map();
let assetsPromise;

const absolute = (url) => new URL(url, document.baseURI).href;

// Share the bytes across preloading and every vault visit. An individual viewer
// can cancel its wait without aborting the site's shared background download.
export function getVaultCameraAsset(url, signal) {
  const key = absolute(url);
  if (!resources.has(key)) {
    const request = fetch(key)
      .then((response) => {
        if (!response.ok) throw new Error("Camera asset unavailable");
        return response.blob();
      })
      .catch((error) => {
        resources.delete(key);
        throw error;
      });
    resources.set(key, request);
  }
  const request = resources.get(key);
  if (!signal) return request;
  if (signal.aborted)
    return Promise.reject(new DOMException("Aborted", "AbortError"));
  return new Promise((resolve, reject) => {
    const aborted = () => reject(new DOMException("Aborted", "AbortError"));
    signal.addEventListener("abort", aborted, { once: true });
    request
      .then(resolve, reject)
      .finally(() => signal.removeEventListener("abort", aborted));
  });
}

export function loadVaultCameraAssets() {
  if (!assetsPromise) {
    assetsPromise = (async () => {
      const json = await (
        await getVaultCameraAsset(`${base}scene.gltf`)
      ).text();
      const model = JSON.parse(json);
      const uris = [...(model.buffers || []), ...(model.images || [])]
        .map((entry) => entry.uri)
        .filter((uri) => uri && !uri.startsWith("data:"));
      const files = await Promise.all(
        [...new Set(uris)].map(async (uri) => {
          const url = absolute(`${base}${uri}`);
          return [url, await getVaultCameraAsset(url)];
        }),
      );
      return { json, base, files: new Map(files) };
    })().catch((error) => {
      assetsPromise = undefined;
      throw error;
    });
  }
  return assetsPromise;
}

export function preloadVaultCamera() {
  // No WebGL canvas or render loop on the home page. Fetch both the model
  // assets and the renderer chunk immediately after the app's first render.
  if (typeof window.fetch !== "function") return;
  loadVaultCameraAssets().catch(() => {});
  import("./createVaultCamera").catch(() => {});
}
