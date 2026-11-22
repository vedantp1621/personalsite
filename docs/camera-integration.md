# Photo Vault: local scroll-controlled camera

The camera now lives exclusively behind Photo Vault. The previous home-page
Sketchfab iframe has been removed. No viewer SDK, watermark, overlay, floor,
shadow-catching plane, or visible environment background is used.

## Supplied model and license

The user's archive is `asset-sources/models/fujifilm_x-t3_with_18-55mm_lens.zip`: **Fujifilm X-T3 with
18–55mm Lens**, by **thelogicmatrix**. This is a different model from the earlier
hosted X-M5. Its included `license.txt` specifies **CC BY-NC-ND 4.0**: attribution,
noncommercial use, and no distribution of modified versions.

All sixteen model/texture/license files are copied byte-for-byte to
`public/models/fujifilm-x-t3/`; SHA-256 comparisons verified they match the ZIP.
The original ZIP is retained. The creator, model source, and license are visibly
credited in Photo Vault's footer. The model must not be repurposed for commercial
use without the necessary permission.

## Implementation

- `VaultCameraBackground.js` owns mounting, scroll/resize/visibility observers,
  reduced-motion preferences, loading state and fallback.
- `vaultCameraAssets.js` preloads the glTF, binary buffer, all thirteen textures,
  and the renderer chunk as soon as the app initially renders, including on the
  home page. A shared in-memory Blob cache deduplicates requests across route
  changes and vault visits. Failed resources can be retried.
- `createVaultCamera.js` initializes WebGL only when Photo Vault mounts, reusing
  the downloaded bytes through local Blob URLs. Uses the project's existing
  Three.js; no new runtime dependencies. Texture decoding and GPU uploads still
  happen when the viewer is created; the home page has no WebGL canvas.
- GLTFLoader retains original materials. Bounds center the model and a parent
  group normalizes its size. Scroll rotates that parent group about the vertical
  Y axis through 153 degrees, with small tilt changes and short damped settling.
  It never spins on a timer.
- WebGLRenderer has `alpha: true` and clear alpha zero. Scene background stays
  unset. A generated RoomEnvironment is used only for PBR reflections. The canvas
  and its containers have transparent backgrounds and ignore pointer input.
- Sticky decoration spans the vault; content, photos, navigation and attribution
  stay in front. The model has a low layer opacity to remain subtle.
- Device-aware DPR and runtime ImageBitmap decoding cap texture dimensions at
  1024px mobile / 2048px desktop. The supplied files are not rewritten; each
  original image is 4096px square. The original download payload is about 60 MB.
- The renderer paints only on changes/while settling; it has no continuous idle
  loop. Hidden/offscreen content stops painting. Reduced motion holds one pose.
- Viewer waits, Blob URLs, animation frames, geometry, materials, textures, image
  bitmaps, reflection render targets, listeners and observers are cleaned up on
  unmount. The shared asset downloads/cache intentionally persist for the page
  session, so leaving or reopening the vault does not restart downloads. The
  45-second initialization timeout and WebGL/model errors use a lightweight local
  SVG illustration instead.

## Verification

- Build, existing navigation/preservation tests and whitespace checks pass.
- Real model loads in Chrome at 1440px desktop and 390px mobile widths.
- Isolated canvas screenshots reveal genuinely different 3D views after scroll;
  reverse scroll returns pixel-for-pixel to the initial view on both sizes.
- Transparent-page screenshots show alpha zero at every viewport corner on both
  sizes; there is no opaque rectangle outside the model.
- All nine supplied gallery photos remain and open their full-size files.
- Tested stationary reduced-motion pose, zero idle draw calls, home navigation
  and canvas cleanup, and model-request/WebGL failures with usable fallback.
- No iframe or Sketchfab network requests are made by the new implementation.
- Confirmed all fifteen required camera assets finish downloading on the home
  page before opening the vault, with zero additional model/texture downloads
  on the first vault visit or a subsequent reopen; no home-page camera canvas
  and no browser runtime errors.
- GitHub Pages-safe resource URLs use `process.env.PUBLIC_URL` under
  `/personalsite/`. The original website deployment setup is unchanged.
- Local implementation only; no public deployment performed.

Model: https://sketchfab.com/3d-models/fujifilm-x-t3-with-18-55mm-lens-3137e2c26cab47538f7c3e75aa80af49
Creator: https://sketchfab.com/thelogicmatrix
License: https://creativecommons.org/licenses/by-nc-nd/4.0/
