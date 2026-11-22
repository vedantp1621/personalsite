# Photo Vault photos

Put your photography in this folder. Photo Vault automatically includes JPG,
JPEG, PNG, WebP, AVIF, and GIF files, including files inside subfolders.

- Use descriptive filenames such as `madison-at-sunset.jpg`. Filenames become
  the visible captions and image descriptions.
- Photos are sorted by filename. Prefix names with numbers if you want a
  particular order, such as `01-madison-at-sunset.jpg`.
- Convert HEIC or RAW images to a supported web format first.
- Resize and compress large originals before adding them.

The development server rebuilds the gallery when photos are added. If it does
not detect a new file, restart `npm start`. For the public website, rebuild and
deploy using the existing workflow after adding photos.
