# Deploying the ICBSEE Website

This archive contains the editable React source, configuration, and a production build in `dist/`.

## Static hosting

After unzipping, upload the contents of `dist/public/` to any static host that supports a single-page application. Configure a rewrite rule so every route serves `index.html`; otherwise direct links such as `/scope` or `/registration` will show a 404 page.

## Node hosting

Use Node.js 20 or newer and pnpm. From the project directory, run:

```bash
pnpm install --frozen-lockfile
pnpm build
NODE_ENV=production pnpm start
```

The server uses the `PORT` environment variable when your host provides one; otherwise it starts on port 3000.

## Media assets

The supplied visual assets are referenced by durable public media URLs in `client/src/pages/ConferenceSite.tsx`. The `deployment-assets/` folder is also included for archival and optional self-hosting. If you move those images to your own storage, update the corresponding URLs in that source file before building.
