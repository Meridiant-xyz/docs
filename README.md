# Meridiant docs

Public documentation site for **Meridiant** — isolated-market lending on Canton Network.

Live (once DNS and GitHub Pages are connected): **[docs.meridiant.xyz](https://docs.meridiant.xyz)**

These pages are a high-level introduction: what Meridiant is, how the venue works, who is involved, and what we are building. They are not a protocol specification.

## Local preview

Requires Node 20+.

```bash
cd docs
npm install
npm start
```

Opens [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm run serve
```

## Deploy

The site is hosted as a GitHub Pages project at [`Meridiant-xyz/docs`](https://github.com/Meridiant-xyz/docs).

1. Push to `main`.
2. A push to `main` runs `.github/workflows/deploy.yml`, which builds Docusaurus and publishes to the `gh-pages` branch.
3. In the repo: **Settings → Pages → Source** = GitHub Actions (or the `gh-pages` branch, depending on how the action lands).
4. Custom domain: **Settings → Pages → Custom domain** = `docs.meridiant.xyz`.
5. At the DNS provider, add a CNAME:

   ```
   docs  CNAME  meridiant-xyz.github.io
   ```

6. Enable **Enforce HTTPS** once the certificate is ready.

`static/CNAME` contains `docs.meridiant.xyz` so the custom domain survives each build.

## Content

| Path | Topic |
|---|---|
| `docs/intro.md` | What is Meridiant |
| `docs/why-canton.md` | Why the venue is on Canton |
| `docs/how-it-works.md` | The lending loop |
| `docs/markets.md` | Isolated markets |
| `docs/supplying.md` / `borrowing.md` / `liquidation.md` | User flows |
| `docs/who-is-involved.md` | Roles and Catalyst Labs |
| `docs/what-we-are-building.md` | Product path |
| `docs/getting-started.md` | Invite-gated access |

Brand assets are copied from `meridiant-site`. Keep the olive (`#A8B454`) and ink/paper palette; do not recolor the mark.
