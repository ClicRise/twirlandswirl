// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const basePath = (process.env.VITE_BASE_PATH ?? "/").replace(/\/$/, "");
// Keep product paths in sync with the slugs in src/lib/business.ts.
const staticRoutes = [
  "/",
  "/collection",
  "/our-story",
  "/custom-orders",
  "/contact",
  "/products/granny-square-handbag",
  "/products/sunflower-bouquet",
  "/products/crochet-bow-charms",
  "/products/pink-crochet-handbag",
  "/products/crochet-bow-keychain",
  "/products/sunflower-daisy-bouquet",
];

export default defineConfig({
  // GitHub Pages serves project sites below /<repository>/.
  vite: {
    base: process.env.VITE_BASE_PATH ?? "/",
  },
  tanstackStart: {
    // GitHub Pages cannot run the Nitro server, so generate each route as static HTML.
    prerender: {
      enabled: true,
      // Prerender the prefixed URLs used by GitHub Pages, then write each page
      // at the matching path inside the published artifact.
      autoStaticPathsDiscovery: false,
      crawlLinks: false,
      failOnError: true,
    },
    pages: staticRoutes.map((route) => ({
      path: `${basePath}${route}` || "/",
      prerender: {
        enabled: true,
        outputPath: route === "/" ? "/index.html" : `${route}/index.html`,
      },
    })),
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
