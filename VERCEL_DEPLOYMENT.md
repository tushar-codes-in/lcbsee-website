# Deploy the ICBSEE website on Vercel

## Why the deployed page showed code

The image you shared shows the contents of `server/index.ts`, which is an **Express server source file**, not the website. This ICBSEE project should be deployed to Vercel as a **Vite static website**. Vercel must run the build and serve the resulting `dist/public` folder.

The project now includes `vercel.json`, which specifies the correct build command, output folder, and React single-page-app route rewrite. Vercel documents that Vite single-page applications require a root-level rewrite to `index.html` for direct links such as `/scope` to work. [1]

## Correct Vercel deployment procedure

### 1. Delete the incorrect Vercel project or deployment

In Vercel, open the project that currently displays code. Open **Settings** and then **General**. You may delete that project, or create a new Vercel project so the incorrect settings cannot be reused.

### 2. Upload the correct files

Use the **complete source project folder**, not the `server` folder and not only the `server/index.ts` file. The top-level folder must include all of these items:

```text
client/
server/
package.json
pnpm-lock.yaml
vite.config.ts
vercel.json
```

If you deploy from GitHub, upload the whole project to one GitHub repository first. Then use **Add New → Project** in Vercel and import that repository.

### 3. Enter these Vercel project settings

Open **Settings → Build and Deployment** and set the following values:

| Vercel setting | Required value |
|---|---|
| Framework Preset | **Vite** |
| Root Directory | Leave blank; use the top-level project folder |
| Build Command | `pnpm build` |
| Output Directory | `dist/public` |
| Install Command | `pnpm install --frozen-lockfile` |
| Node.js Version | 20.x or newer |

Do **not** set `server` as the Root Directory or Output Directory. Do **not** use `server/index.ts` as a build or start command.

### 4. Deploy

Click **Deploy**. In the deployment log, confirm that Vercel runs `pnpm build` and reports `dist/public` as the output directory.

After it finishes, open the generated `vercel.app` address. You should see the ICBSEE home page, not code.

### 5. Test direct links

Open and refresh each address below after replacing `your-project.vercel.app` with your real Vercel address:

```text
https://your-project.vercel.app/
https://your-project.vercel.app/scope
https://your-project.vercel.app/registration
https://your-project.vercel.app/abstract-submission
```

If each page opens and survives a browser refresh, the rewrite configuration is working.

## If you used the previous ZIP package

Download the updated source archive delivered with this correction. It includes `vercel.json`. Extract it, then deploy the **project root folder** using the instructions above.

## References

[1] [Vercel, “Vite on Vercel”](https://vercel.com/docs/frameworks/frontend/vite)
