import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment";
import {
  getVaultCameraAsset,
  loadVaultCameraAssets,
} from "./vaultCameraAssets";

// This module is preloaded at startup; WebGL initializes only inside Photo Vault.
// Original files stay intact and decoded textures respect the device budget.
export function createVaultCamera(host, { onReady, onError }) {
  const abort = new AbortController();
  let disposed = false,
    visible = true,
    reduced = false;
  let model,
    environmentTarget,
    environmentRoom,
    frame = 0,
    previousTime = 0;
  let progress = 0,
    targetProgress = 0,
    textureFailed = false;
  const bitmaps = new Set();
  const objectURLs = new Set();
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 30);
  camera.position.set(0, 0.14, 6);
  camera.lookAt(0, 0, 0);
  const turntable = new THREE.Group();
  scene.add(turntable);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  renderer.setPixelRatio(
    Math.min(
      window.devicePixelRatio || 1,
      window.innerWidth < 700 ? 1.25 : 1.5,
    ),
  );
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.appendChild(renderer.domElement);

  const releaseModel = (root) => {
    if (!root) return;
    const geometries = new Set(),
      materials = new Set(),
      textures = new Set();
    root.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      for (const material of [object.material].flat().filter(Boolean)) {
        materials.add(material);
        Object.values(material).forEach((value) => {
          if (value?.isTexture) textures.add(value);
        });
      }
    });
    textures.forEach((texture) => texture.dispose());
    materials.forEach((material) => material.dispose());
    geometries.forEach((geometry) => geometry.dispose());
  };

  const render = (time = 0) => {
    frame = 0;
    if (disposed || !visible || !model) return;
    const dt = previousTime
      ? Math.min((time - previousTime) / 1000, 0.05)
      : 1 / 60;
    previousTime = time;
    progress = reduced
      ? 0
      : THREE.MathUtils.damp(progress, targetProgress, 14, dt);
    if (Math.abs(progress - targetProgress) < 0.0001 && !reduced)
      progress = targetProgress;
    turntable.rotation.set(
      0.07 + Math.sin(progress * Math.PI) * 0.045,
      1.1 + progress * Math.PI * 0.85,
      -0.025,
    );
    renderer.render(scene, camera);
    if (!reduced && Math.abs(progress - targetProgress) > 0.0001)
      frame = requestAnimationFrame(render);
  };
  const invalidate = () => {
    if (!disposed && visible && model && !frame)
      frame = requestAnimationFrame(render);
  };
  const resize = () => {
    if (disposed) return;
    const { width, height } = host.getBoundingClientRect();
    const aspect = width / Math.max(1, height);
    const halfHeight = 1.75 / Math.min(1, aspect);
    camera.left = -halfHeight * aspect;
    camera.right = halfHeight * aspect;
    camera.top = halfHeight;
    camera.bottom = -halfHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    invalidate();
  };
  const contextLost = (event) => {
    event.preventDefault();
    if (!disposed) onError();
  };
  renderer.domElement.addEventListener("webglcontextlost", contextLost);
  resize();

  const ready = async () => {
    const assets = await loadVaultCameraAssets();
    if (disposed) return;
    const manager = new THREE.LoadingManager();
    const cachedURLs = new Map();
    assets.files.forEach((blob, url) => {
      const objectURL = URL.createObjectURL(blob);
      cachedURLs.set(url, objectURL);
      objectURLs.add(objectURL);
    });
    manager.setURLModifier(
      (url) => cachedURLs.get(new URL(url, document.baseURI).href) || url,
    );
    manager.onError = () => {
      textureFailed = true;
    };
    const cap = window.innerWidth < 700 ? 1024 : 2048;
    if (window.createImageBitmap) {
      // Every texture in the supplied archive is square (4096 × 4096).
      // A handler allows aborting texture fetches and decoding directly at the
      // device budget without exporting or distributing modified model assets.
      manager.addHandler(/\.png$/i, {
        isImageBitmapLoader: true,
        load(url, onLoad, _onProgress, fail) {
          manager.itemStart(url);
          getVaultCameraAsset(url, abort.signal)
            .then((blob) =>
              createImageBitmap(blob, {
                imageOrientation: "none",
                premultiplyAlpha: "none",
                colorSpaceConversion: "none",
                resizeWidth: cap,
                resizeHeight: cap,
                resizeQuality: "high",
              }),
            )
            .then((bitmap) => {
              if (disposed) {
                bitmap.close();
                throw new Error("Camera disposed");
              }
              bitmaps.add(bitmap);
              onLoad(bitmap);
              manager.itemEnd(url);
            })
            .catch((error) => {
              fail?.(error);
              manager.itemError(url);
              manager.itemEnd(url);
            });
        },
      });
    }
    const gltf = await new GLTFLoader(manager).parseAsync(
      assets.json,
      assets.base,
    );
    objectURLs.forEach((url) => URL.revokeObjectURL(url));
    objectURLs.clear();
    if (disposed || textureFailed) {
      releaseModel(gltf.scene);
      if (!disposed) throw new Error("Camera textures unavailable");
      return;
    }
    model = gltf.scene;
    const bounds = new THREE.Box3().setFromObject(model);
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3());
    model.position.sub(center);
    turntable.scale.setScalar(2.6 / Math.max(size.x, size.y, size.z));
    turntable.add(model);

    // Studio reflections illuminate the model but never become a visible
    // background or floor. Only the camera geometry is drawn to the canvas.
    const pmrem = new THREE.PMREMGenerator(renderer);
    environmentRoom = new RoomEnvironment();
    environmentTarget = pmrem.fromScene(environmentRoom, 0.04);
    scene.environment = environmentTarget.texture;
    pmrem.dispose();
    const key = new THREE.DirectionalLight(0xfff6eb, 1.8);
    key.position.set(3, 4, 5);
    const rim = new THREE.DirectionalLight(0xe4edf7, 1.2);
    rim.position.set(-3, 1, -3);
    scene.add(key, rim, new THREE.HemisphereLight(0xffffff, 0x35404b, 0.65));
    invalidate();
    onReady();
  };
  ready().catch(() => {
    if (!disposed) onError();
  });

  return {
    resize,
    setProgress(value, reduceMotion) {
      const next = reduceMotion ? 0 : value;
      const changed = next !== targetProgress || reduced !== reduceMotion;
      targetProgress = next;
      reduced = reduceMotion;
      if (changed) invalidate();
    },
    setVisible(value) {
      visible = value;
      previousTime = 0;
      if (visible) invalidate();
      else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      abort.abort();
      objectURLs.forEach((url) => URL.revokeObjectURL(url));
      objectURLs.clear();
      cancelAnimationFrame(frame);
      renderer.domElement.removeEventListener("webglcontextlost", contextLost);
      releaseModel(model);
      bitmaps.forEach((bitmap) => bitmap.close());
      environmentTarget?.dispose();
      environmentRoom?.dispose();
      scene.clear();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    },
  };
}
