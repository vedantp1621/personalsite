import vaultPhotos from "../data/vaultPhotos";
import { useRef } from "react";
import VaultCameraBackground from "../components/VaultCameraBackground";

export default function PhotoVault({ onBackHome }) {
  const sectionRef = useRef(null);
  return (
    <main
      ref={sectionRef}
      id="main-content"
      tabIndex="-1"
      className="photo-vault-screen"
    >
      <VaultCameraBackground sectionRef={sectionRef} />

      <section
        className="photo-vault-content"
        aria-labelledby="photo-vault-title"
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
