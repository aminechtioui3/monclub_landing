# MonClub product assets

Drop the final optimized WebP screenshots in this directory using the filenames defined in `src/data/productFeatures.ts`, then set that asset's `assetAvailable` flag to `true`. Until then, every placement renders the built-in code-native product placeholder without a broken image request.

The early mobile showcase expects these optional assets:

- `public/product/mobile/reservation-loop.webm`
- `public/product/mobile/reservation-loop.mp4`
- `public/product/mobile/reservation-poster.webp`

Until a recording is supplied, the phone renders its built-in reservation-flow placeholder.
