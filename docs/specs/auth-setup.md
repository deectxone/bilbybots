# BilbyBots — Google Auth Setup (Supabase + Google OAuth)

**Status:** In progress — code is wired (`src/utils/supabase.ts`, `src/utils/auth.ts`,
`src/screens/SignInScreen.tsx`); this doc is the one-time manual setup to make
sign-in actually work. It's the concrete steps behind shipping-plan Workstream C.

**Cost note:** Supabase is open source (Apache-2.0) but the cheapest path is the
**free managed tier** (2 projects, 500 MB DB, 50k monthly active users, all auth
providers included) plus **Google Sign-In, which is free**. Self-hosting Supabase
saves the subscription only if you outgrow the free tier — at that point the
server/ops bill usually exceeds it. Start on the free tier.

---

## 0. What you're creating

```
Google Cloud Console                    Supabase project
├── OAuth Client: Web                   ├── Auth → Providers → Google
├── OAuth Client: Android (SHA-1)  ──►  │     (Client IDs + Secrets, comma list)
└── OAuth Client: iOS (bundle id)       ├── Auth → URL Configuration
                                        │     (redirect URLs allowlist)
                                        └── Project Settings → API
                                              (EXPO_PUBLIC_SUPABASE_URL / anon key)
```

The app sends the user to Google → Google hands back to Supabase → Supabase
creates the session → the app stores it in SecureStore/AsyncStorage.

---

## 1. Supabase project (free)

1. Sign up at https://supabase.com/dashboard (free tier).
2. **New project** → pick a name + region. Copy these from **Project Settings → API**:
   - Project URL → `EXPO_PUBLIC_SUPABASE_URL` (e.g. `https://xyz.supabase.co`)
   - `anon` `public` key → `EXPO_PUBLIC_SUPABASE_ANON_KEY`
   - ⚠️ The anon key is safe for clients (RLS protects data) — don't use the
     `service_role` key in the app, ever.
3. (Later, production) set a **custom domain** so users see your brand instead of
   `<project>.supabase.co` on the Google consent screen.

## 2. Google Cloud project + OAuth clients

1. Go to https://console.cloud.google.com/auth/clients → create a project.
2. **Data Access (Scopes)** — Supabase needs `openid`, `.../auth/userinfo.email`,
   `.../auth/userinfo.profile`.
3. **Branding** — app name + logo + privacy policy/ToS links (Google shows this
   consent screen; brand verification takes a few business days, fine to skip at
   first).
4. Create **three** OAuth clients:

   | Client type | Values | Purpose |
   |---|---|---|
   | **Web application** | Authorized JS origins: `http://localhost:8081`, `http://localhost:19006`, your prod URL. Authorized redirect URIs: `https://<project-ref>.supabase.co/auth/v1/callback` | Web build |
   | **Android** | Package name `au.bilbybots.mobile` + **SHA-1 fingerprint** (see below) | Android dev/build |
   | **iOS** | Bundle ID `au.bilbybots.mobile` | iOS dev/build |

   Android SHA-1 — from the app's signing key. Expo provides it per environment:
   ```sh
   # Android: needs a dev build first (see §4). Get the fingerprint from:
   npx expo credentials  # or the EAS dashboard → your project → Android keystore
   # iOS doesn't need a fingerprint, just the bundle ID.
   ```
   > Android has **different SHA-1 fingerprints for local vs production** (two
   > keystores). Add both to Google Cloud Console so both environments work.

## 3. Supabase → Auth → Google provider

1. Supabase Dashboard → **Authentication → Sign In / Up → Providers → Google**.
2. **Enable**, paste the Web client ID + secret into **Client ID / Client Secret**.
3. Add the iOS and Android client IDs to the same field, **comma-separated,
   web client first** (e.g. `web-id.apps.googleusercontent.com,ios-id,android-id`).
4. Keep **Skip Nonce Check** **off** (default, more secure).
5. **Authentication → URL Configuration**:
   - **Site URL** must be your production origin (e.g. `https://bilbybots.com`),
     **not** `http://localhost:8081`. If a prod `redirect_to` isn't in the
     allowlist, GoTrue falls back to the Site URL — a leftover localhost Site URL
     is what makes prod sign-in bounce to `localhost:8081`.
   - Add to the redirect allowlist:
     - `bilbybots://auth/callback` (native deep link — matches the scheme in
       `app.json` and `makeRedirectUri()` in `src/utils/auth.ts`)
     - `http://localhost:8081` + `http://localhost:19006` (web dev)
     - your production web URL (`https://bilbybots.com`) and
       `https://bilbybots.com/auth/callback`

## 4. App config

1. `cp apps/mobile/.env.example apps/mobile/.env` and fill in the two
   `EXPO_PUBLIC_SUPABASE_*` values. (`.env` is gitignored.)
2. **Web prod:** set `EXPO_PUBLIC_SITE_URL` to your production origin
   (e.g. `https://bilbybots.com`) as a Vercel env var and redeploy. Leave it
   empty locally so web dev keeps using `http://localhost:8081`.
   On web the app redirects back to the **bare origin** (no `/auth/callback`
   path) so the static site always serves `index.html` — see
   `getWebOrigin()` in `src/utils/auth.ts`.
2. Dev builds (native) — Expo Go cannot host the native auth flow, so install a
   **development build** once:
   ```sh
   npx eas-cli login
   npx eas-cli build --platform ios --profile development
   npx eas-cli build --platform android --profile development
   ```
   (Or `npx expo run:ios` / `npx expo run:android` locally with Xcode/Android
   Studio.) The `developmentClient: true` profile is already in `eas.json`.
3. Run with `npx expo start` → press `i`/`a` on the dev build, or `w` for web.

## 5. Verify

- **Web:** `npx expo start` → `w` → sign in with Google → lands back signed in.
- **iOS/Android dev build:** sign in → app returns via `bilbybots://auth/callback`
  → token persists after full relaunch → Setup → **Sign out** → sign back in.
- If the Google consent page errors with *"redirect_uri_mismatch"*, the URL
  returned by `makeRedirectUri()` isn't in the Supabase redirect allowlist or the
  Google authorized-redirect list. On a dev build it is `bilbybots://auth/callback`.

## 6. Common gotchas

- **`No valid flow state found`** on iOS → the redirect URI must include a path,
  not a bare scheme. `bilbybots://auth/callback` is already correct (Supabase's
  PKCE handling mangles bare `bilbybots://`).
- **Web sign-in shows "this app is blocked"** → the Google web client's
  *Authorized JavaScript origins* must include the exact localhost origin you run.
- **Prod sign-in redirects to `localhost:8081`** → the Supabase **Site URL** is
  still `http://localhost:8081` and/or `https://bilbybots.com` isn't in the
  Supabase redirect allowlist. Set the Site URL to your production origin and
  allowlist the prod URL (see §3). The client code computes the redirect from
  `getWebOrigin()` / `EXPO_PUBLIC_SITE_URL` on web — set that on Vercel too.
- **Session doesn't survive relaunch on native** → SecureStore write failed; check
  the simulator/device keychain permissions. Usually fine once on a real device.
- **Multiple SHA-1s** — add both debug + release Android fingerprints to Google
  Cloud Console or the dev build and the store build won't both sign in.

## 7. Files touched

- `apps/mobile/.env.example` — env template (copy to `.env`)
- `apps/mobile/src/utils/supabase.ts` — Supabase client + SecureStore/AsyncStorage storage
- `apps/mobile/src/utils/auth.ts` — Google sign-in / sign-out / redirect helpers
- `apps/mobile/src/screens/SignInScreen.tsx` — the auth gate UI
- `apps/mobile/App.tsx` — session hydration + auth gate + sign-out wiring
- `apps/mobile/src/screens/OnboardingScreen.tsx` — Sign out action in Setup
- `apps/mobile/app.json` — `scheme: "bilbybots"` + `expo-secure-store`/`expo-web-browser` plugins
- `apps/mobile/eas.json` — dev/preview/production build profiles
