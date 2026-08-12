# BilbyBots — Deploy to Vercel (Web)

**Status:** Ready — all config files committed. This walks through pushing the
web app to Vercel from this repo.

The web app is a **static export** (`expo export --platform web` → `apps/mobile/dist`).
Vercel serves it with an SPA rewrite so deep links (e.g. the Google auth callback
`/auth/callback`) load the app.

## Files that make this work

| File | Purpose |
|---|---|
| `vercel.json` (repo root) | Build + install command, output dir, SPA rewrite for auth deep links |
| `package.json` (repo root) | `build` script → runs `expo export --platform web` in `apps/mobile` |
| `apps/mobile/package.json` | `build:web` script (`expo export --platform web`) |
| `apps/mobile/scripts/vercel-env.sh` | Copies `.env` values into Vercel env vars |
| `.vercelignore` (repo root) | Excludes node_modules, `.env*`, native dirs, dist from upload |
| `.env` / `.env.example` (gitignored) | Build-time secrets, set on Vercel below |

## One-time setup

### 1. Install + log in to Vercel CLI
```sh
npm i -g vercel
vercel login
```

### 2. Link the repo to a Vercel project
```sh
vercel link
```
Run this from the **repo root**. Create a new project (e.g. `bilbybots`).
- **Root directory: leave as `/`** — the root `vercel.json` + `package.json`
  drive the whole build (no `apps/mobile` root-directory setting needed).
- (Vercel will detect the framework — leave it as "Other".)

### 3. Set the build-time env vars
```sh
bash apps/mobile/scripts/vercel-env.sh
```
This adds the `EXPO_PUBLIC_*` values from `apps/mobile/.env` to Vercel for
production/preview/development. **Only the Supabase URL + anon key are
required**; the anon key is client-safe by design (RLS protects the data).
You can also paste them in the Vercel dashboard under **Project → Settings →
Environment Variables**.

### 4. Deploy
```sh
vercel --prod
```
Preview URL → open it, sign in with Google, confirm the redirect lands back
signed in. Production URL gets its own `*.vercel.app` domain.

## After first deploy — tell Google + Supabase about the live URL

Google's OAuth only allows origins you whitelist, and Supabase only redirects to
URLs in its allowlist. Once you have your production URL (e.g.
`https://bilbybots.vercel.app`):

1. **Google Cloud Console → Credentials → your *Web* OAuth client:**
   - **Authorized JavaScript origins:** add `https://bilbybots.vercel.app`
     (and `http://localhost:8081` stays for local dev).
2. **Supabase → Authentication → URL Configuration → Redirect URLs:** add
   `https://bilbybots.vercel.app` (and `https://bilbybots.vercel.app/auth/callback`).

Then re-deploy and test sign-in from the live URL. Local `http://localhost:8081`
keeps working the whole time.

## Optional: custom domain

In Vercel → your project → **Domains**, add your domain. Then add it to the
same two places above (Google JS origins + Supabase redirect allowlist).

## Notes

- **Secrets never enter git.** `.env`, `.env.production`, etc. are gitignored
  (`.env*` except `.env.example`). Vercel env vars are the only place build-time
  values live for production builds.
- Changing a non-`EXPO_PUBLIC_` value (e.g. a Google client secret, which is only
  stored server-side in Supabase) needs no redeploy.
- Native (iOS/Android) is a separate path — see `docs/specs/auth-setup.md` and
  the `eas.json` build profiles.
