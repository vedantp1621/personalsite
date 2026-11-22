import vaultPhotos from "../data/vaultPhotos";
import { useEffect, useRef, useState } from "react";
import VaultCameraBackground from "../components/VaultCameraBackground";
import { afterPaint } from "../lib/afterPaint";

export default function PhotoVault({ onBackHome }) {
  const sectionRef = useRef(null);
  const loaderRef = useRef(null);
  const [cameraState, setCameraState] = useState("loading");
  const [photoState, setPhotoState] = useState(
    vaultPhotos.length ? "loading" : "ready",
  );
  const [attempt, setAttempt] = useState(0);
  const loading = cameraState !== "ready" || photoState !== "ready";
  const failed = cameraState === "error" || photoState === "error";

  useEffect(() => {
    if (!vaultPhotos.length) return undefined;
    let cancelled = false;
    const images = [];
    const queue = [...vaultPhotos];
    const results = [];
    const loadPhoto = (photo) => new Promise((resolve) => {
      const image = new Image();
      images.push(image);
      image.onload = () => {
        const decoded = image.decode ? image.decode() : Promise.resolve();
        decoded.then(() => resolve(true), () => resolve(false));
      };
      image.onerror = () => resolve(false);
      image.src = photo.src;
    });
    const deadline = setTimeout(() => {
      if (!cancelled) setPhotoState("error");
    }, 90000);
    // Still wait for every photo, but avoid decoding the whole archive at once
    // while the 3D model is also initializing.
    const worker = async () => {
      while (queue.length && !cancelled) {
        results.push(await loadPhoto(queue.shift()));
      }
    };
    const cancelStart = afterPaint(() => {
      Promise.all([worker(), worker()]).then(() => {
        if (cancelled) return;
        clearTimeout(deadline);
        setPhotoState(results.every(Boolean) ? "ready" : "error");
      });
    });
    return () => {
      cancelled = true;
      cancelStart();
      clearTimeout(deadline);
      images.forEach((image) => { image.onload = null; image.onerror = null; });
    };
  }, [attempt]);

  useEffect(() => {
    if (!loading) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const siblings = [...(sectionRef.current?.parentElement.children || [])]
      .filter((element) => element !== sectionRef.current)
      .map((element) => ({ element, inert: element.getAttribute("inert"), hidden: element.getAttribute("aria-hidden") }));
    siblings.forEach(({ element }) => {
      element.setAttribute("inert", "");
      element.setAttribute("aria-hidden", "true");
    });
    loaderRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = previousOverflow;
      siblings.forEach(({ element, inert, hidden }) => {
        if (inert === null) element.removeAttribute("inert");
        else element.setAttribute("inert", inert);
        if (hidden === null) element.removeAttribute("aria-hidden");
        else element.setAttribute("aria-hidden", hidden);
      });
    };
  }, [loading]);

  useEffect(() => {
    if (!loading && (document.activeElement === document.body || sectionRef.current?.contains(document.activeElement))) {
      document.getElementById("photo-vault-title")?.focus({ preventScroll: true });
    }
  }, [loading]);

  const retry = () => {
    setCameraState("loading");
    setPhotoState(vaultPhotos.length ? "loading" : "ready");
    setAttempt((value) => value + 1);
  };

  const containFocus = (event) => {
    if (event.key !== "Tab") return;
    const buttons = [...loaderRef.current.querySelectorAll("button")];
    if (!buttons.length) event.preventDefault();
    else if (event.shiftKey && (document.activeElement === buttons[0] || document.activeElement === loaderRef.current)) {
      event.preventDefault();
      buttons[buttons.length - 1].focus();
    } else if (!event.shiftKey && document.activeElement === buttons[buttons.length - 1]) {
      event.preventDefault();
      buttons[0].focus();
    }
  };

  return (
    <main
      ref={sectionRef}
      id="main-content"
      tabIndex="-1"
      className="photo-vault-screen"
      data-loading={loading}
    >
      <VaultCameraBackground key={attempt} sectionRef={sectionRef} onStateChange={setCameraState} />

      {loading && (
        <div className="vault-loader" ref={loaderRef} tabIndex="-1" role="dialog" aria-modal="true" aria-label="Loading Photo Vault" onKeyDown={containFocus}>
          <div className="vault-loader-center">
            <div className="vault-loader-camera" data-failed={failed} aria-hidden="true">
            <svg viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 13h12l5-7h18l5 7h12v29H6z" />
              <circle cx="33" cy="27" r="10" />
              <circle cx="33" cy="27" r="6" className="vault-loader-lens" />
              <path d="M11 19h7M48 19h5" />
            </svg>
            </div>
            <p className="vault-loader-announcement" role="status" aria-live="polite">
              {failed ? "Some assets could not load. Please try again." : "Loading Photo Vault. Preparing the camera and all photographs."}
            </p>
            {failed && <div className="vault-loader-error">
              <p>Unable to load the vault.</p>
              <button type="button" className="box-link" onClick={retry}>Try again</button>
              <button type="button" className="box-link" onClick={onBackHome}>Back home</button>
            </div>}
          </div>
        </div>
      )}

      <section
        className="photo-vault-content"
        aria-labelledby="photo-vault-title"
        aria-hidden={loading ? "true" : undefined}
        aria-busy={loading}
        inert={loading ? "" : undefined}
      >
        <div className="photo-vault-introduction">
          <p className="photo-vault-eyebrow">Vedant Patel · Photography</p>
          <h1 id="photo-vault-title" tabIndex="-1">
            Photo Vault
          </h1>
          <p className="photo-vault-intro">
            A growing archive of quiet moments, interesting places, and
            everything worth remembering.
          </p>
          <span className="photo-vault-scroll-note">
            Collected moments. A new perspective.
          </span>
        </div>

        {vaultPhotos.length > 0 ? (
          <div className="photo-vault-gallery">
            {vaultPhotos.map((photo) => (
              <figure key={photo.src}>
                <a
                  href={photo.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${photo.title} full size`}
                >
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                </a>
                <figcaption>{photo.title}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div
            className="photo-vault-starter"
            aria-label="Photo gallery coming soon"
          >
            <div className="photo-vault-starter-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <rect x="4.5" y="7" width="23" height="18" rx="2.5" />
                <circle cx="12" cy="14" r="2.5" />
                <path d="m7.5 22 6.25-5.75 4.1 3.5 2.9-2.65 3.75 4.9" />
              </svg>
            </div>
            <p>Your first collection will live here.</p>
            <span>The gallery is ready for your photographs.</span>
          </div>
        )}

        <button
          type="button"
          className="photo-vault-home-button"
          onClick={onBackHome}
        >
          Back home
        </button>
        <p className="vault-model-credit">
          Camera:{" "}
          <a
            href="https://sketchfab.com/3d-models/fujifilm-x-t3-with-18-55mm-lens-3137e2c26cab47538f7c3e75aa80af49"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fujifilm X-T3 with 18–55mm Lens
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/thelogicmatrix"
            target="_blank"
            rel="noopener noreferrer"
          >
            thelogicmatrix
          </a>{" "}
          ·{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-ND 4.0
          </a>
        </p>
      </section>
    </main>
  );
}
