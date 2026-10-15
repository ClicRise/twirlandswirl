# Twirl and Swirl

Handmade crochet storefront built with TanStack Start, React, and Tailwind CSS.

## Run locally

Install [Bun](https://bun.sh/), then run:

```sh
bun install
bun run dev
```

## Publish on GitHub Pages

1. Create a new GitHub repository and upload/push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. The included `Deploy to GitHub Pages` workflow builds the static routes and deploys them on every push to `main`. The first run can also be started from the **Actions** tab.

The workflow detects whether the repository is a project site (`owner.github.io/repository/`) or a user site (`owner.github.io/`) and sets the app's base path accordingly. The generated site is in `.output/public`.

## Images

The storefront imports its logo and product photographs from `src/assets/`, so Vite bundles them with the site for GitHub Pages. The `.asset.json` files are Lovable metadata; the storefront uses the image files alongside them.

The site is an enquiry catalogue. Orders are sent to WhatsApp; there is no checkout or personal-data storage.
