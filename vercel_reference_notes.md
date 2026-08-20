# Vercel reference notes

Vercel’s official Vite guidance states that single-page-application deep links do not work by default. It specifies a root-level `vercel.json` with this rewrite:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

The project must be deployed as a Vite static site rather than an Express server. For this project, the Vite build writes the static output to `dist/public`.

Sources:

1. https://vercel.com/docs/frameworks/frontend/vite (retrieved 2026-08-20)
2. https://vercel.com/docs/builds/configure-a-build (retrieved 2026-08-20)
