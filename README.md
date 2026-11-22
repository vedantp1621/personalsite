# Vedant Patel — Portfolio

Personal portfolio, project archive, and Photo Vault built with React.

## Run locally

```sh
npm install
npm start
```

Open [localhost:3000/personalsite/](http://localhost:3000/personalsite/).

```sh
npm run build                       # Production output in build/
CI=true npm test -- --runInBand      # Regression tests
```

## Project layout

```text
src/
  Sections/            Page sections and screens
  components/          Shared UI and camera components
  data/                Portfolio content and photo discovery
  lib/                 Camera loading and rendering
  assets/
    branding/          Current VP branding
    documents/         Résumé
    icons/             Social icons and store badges
    images/
      campus/          Campus section images
      portraits/       Headshot
    logos/             Company, club, and project logos
    photos/            Photo Vault gallery images
    videos/            Project demos
public/
  branding/            Branding used by HTML and the web manifest
  models/              Runtime camera model, textures, and license
asset-sources/
  originals/           Original uploads, retained for reference
  legacy/              Older branding, portrait, and starter images
  models/              Original model download archive
docs/                 Design notes and camera documentation
build/                 Generated production site; do not edit directly
```

Edit roles, projects, skills, and campus involvement in `src/data/portfolio.js`.
Put new logos in `src/assets/logos/` and import them into that data file.

Add gallery photos to `src/assets/photos/`; Photo Vault discovers supported
images automatically, including subfolders. See that folder's README for naming
and ordering. Images elsewhere in `src/assets/` do not enter the gallery.

Keep original uploads in `asset-sources/` and place site-ready assets in
`src/assets/`. Imported assets receive build-generated URLs compatible with the
GitHub Pages `/personalsite/` base path. Camera assets live in `public/models/`
because their glTF files use relative references to textures and binary data.

The public VP logo is also needed in `src/assets/branding/` for React imports.
When changing that logo, update both copies.

## Deployment

`npm run build` prepares the site without publishing it. The existing
`npm run deploy` command publishes `build/` to GitHub Pages when explicitly run.
