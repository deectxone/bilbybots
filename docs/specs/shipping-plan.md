# BilbyBots — Cross-Platform Shipping Plan (web · iOS · Android)

**Status:** Draft — no code changes yet. This is the executable plan for turning
the Expo facade in `apps/mobile` into a shippable product on **web, iOS and
Android** from the single codebase.

**Audience:** this repo's AI agents and contributors. Every workstream lists
concrete tasks, the files to touch and the commands to verify — pick a
workstream, execute, tick the boxes.

---

## 1. Goals & non-goals

**Goals**
- Ship the same codebase to: static web hosting, Apple App Store (iPhone/iPad),
  Google Play (Android phone/tablet).
- Keep one codebase — no separate web/native forks. Expo handles the platform
  split.
- Establish a repeatable release loop: dev → test → store → OTA JS updates.

**Non-goals (for now)**
- Custom native modules beyond what Expo hosts in a dev build.
- Server-side rendering (auth-wall app; static export is sufficient at first).
- Windows/macOS/desktop targets.

## 2. Current state (verified)

- Expo SDK 57, React 19, RN 0.86, TypeScript. Single package `apps/mobile`.
- Web: `npx expo export --platform web` builds a static `dist/`. ✓
- Native runtime deps today: `expo-linear-gradient`, `react-native-svg`,
  `@react-native-async-storage/async-storage` — all Expo Go compatible. ✓
- `app.json` identity (bundle id `au.bilbybots.mobile` / package / icons / splash) set.
- Auth **wired** (Supabase + Google, `src/utils/supabase.ts`/`auth.ts`/`SignInScreen.tsx`, SecureStore on native) but **not yet configured** — needs Supabase project + Google OAuth clients (`docs/specs/auth-setup.md`). No backend tables/analytics/store metadata yet.
- State persists on-device via AsyncStorage (`src/utils/persistence.ts`).
- Verified every session with: `npx tsc --noEmit` + `npx expo export --platform web`.

## 3. Decisions to lock first (one-time)

| # | Decision | Default recommendation | Where it lives |
|---|---|---|---|
| D1 | App display name | `BilbyBots` | `apps/mobile/app.json` `name` |
| D2 | Android package name | `com.bilbybots.app` | `app.json` `android.package` |
| D3 | iOS bundle identifier | `com.bilbybots.app` | `app.json` `ios.bundleIdentifier` |
| D4 | Web hosting | Vercel (or Netlify/Cloudflare Pages) | repo CI / dashboard |
| D5 | Native build service | **EAS Build (cloud)** — no Xcode/Android Studio needed | `eas.json` + `expo` package |
| D6 | Credential management | EAS-managed signing keys | `eas credentials` |
| D7 | App icon/splash source | Vector `BilbyLogoMark` → export PNG set | `assets/` |
| D8 | JS update channel | EAS Update | `eas-update` |

> If the founder has a personal Apple dev account now, register it immediately —
> Apple takes up to 48h+ to approve the Apple Developer Program enrolment and
> it gates every iOS step.

## 4. Workstream A — Web release (smallest loop, do first)

**Goal:** production web URL users can open today.

- [ ] A1. Add identity to `apps/mobile/app.json` (name, slug, orientation, primary color) per D1–D3 defaults (no native fields required for web).
- [ ] A2. Add app icon + splash PNGs to `apps/mobile/assets/` (from `BilbyLogoMark`, sizes: icon 1024×1024, splash 1284×2778 / 2732×2732 for iOS, 1080×2400 for Android). Wire `expo-splash-screen` + `app.json` `icon`/`splash`.
- [ ] A3. Configure `dist/` export: confirm `npx expo export --platform web` output, note the `.well-known` and asset-prefix options (`--output-dir`, `EXPO_PUBLIC_*` env for any public keys).
- [ ] A4. Deploy: push `dist/` to Vercel (framework preset "Other" / static) or Netlify. Add a simple deploy script or CI (`eas build`/GH Action) that runs typecheck → export → deploy. **Config ready:** `apps/mobile/vercel.json`, `build:web` script, `scripts/vercel-env.sh`, `.vercelignore`. See `docs/specs/vercel-deploy.md`.
- [ ] A5. Smoke-test: onboarding → weekly plan → lesson → NAPLAN hub/test → close & reopen browser (persistence survives). Verify AsyncStorage uses `localStorage`.
- [ ] A6. Verify HTTPS + mobile-width rendering (react-native-web).

**Verify:** `npx tsc --noEmit`, `npx expo export --platform web`, open deployed URL.

## 5. Workstream B — Native dev loop (Expo Go → dev build)

**Goal:** reliable native testing before store submission.

- [x] B1. Install EAS CLI: `npx expo install expo-dev-client`, `npm i -g eas-cli` (or `npx eas-cli`). **Done:** `expo-dev-client` installed.
- [x] B2. Create `eas.json` with `development`, `preview`, `production` profiles (development → dev client, no store build; production → store-ready, `appStore`/`play` distribution). **Done.**
- [ ] B3. Add EAS project: `eas init` (login via `eas login`).
- [ ] B4. Android dev build: `eas build --platform android --profile development` → install on phone/simulator → verify AsyncStorage, svg, gradient on real hardware.
- [ ] B5. iOS dev build: `eas build --platform ios --profile development` (needs Apple account, D5) → install via TestFlight or simulator → verify same.
- [ ] B6. Check native quirks list (see §9) and fix as found.
- [ ] B7. Set `app.config` env for keys (never in repo) — introduce `EXPO_PUBLIC_*` / `eas.json` `env` now so auth can follow.

**Verify:** dev build installs, app launches to the BilbyBots splash, all five
screens + persistence work on device.

## 6. Workstream C — Auth & backend milestone (gates native changes)

**Why:** Google OAuth (product-spec) adds native-only SDKs that Expo Go cannot
host. This is the milestone that permanently moves the team to dev builds.

- [x] C1. Pick auth: **Supabase** (already in roadmap) `@supabase/supabase-js` + `expo-auth-session` (or `expo-web-browser` + Supabase's web OAuth) — web uses redirect flow, native uses custom URL scheme. **Done:** `src/utils/supabase.ts`, `src/utils/auth.ts`, `src/screens/SignInScreen.tsx`, wired in `App.tsx`. See `docs/specs/auth-setup.md`.
- [ ] C2. Add config plugin for iOS `GoogleSignIn` / Android `google-services.json` (only via config plugins — do NOT hand-edit the native dirs; regenerate with `expo prebuild` if needed). **Partial:** `expo-secure-store` + `expo-web-browser` plugins added to `app.json`; Google native SDK config (if we switch from Supabase web-OAuth to `@react-native-google-signin`) deferred — current flow needs no native Google SDK.
- [ ] C3. Register OAuth client IDs (iOS bundle id + Android package + web origin) in Google Cloud Console. **Manual step — walk through `docs/specs/auth-setup.md` §2.**
- [x] C4. Persist auth session (`expo-secure-store` for tokens on device; web keeps localStorage) layered over the existing AsyncStorage profile state. **Done:** `src/utils/supabase.ts` secureStorage adapter.
- [ ] C5. Smoke-test sign-in on web + both native dev builds. **Blocked on C3 + a dev build (Workstream B).**

**Verify:** sign in with Google on all three platforms; token survives relaunch;
logout works.

## 7. Workstream D — Store packaging & submission

**Goal:** `.ipa` on TestFlight and `.aab` on Play internal track.

- [ ] D1. Assets: final icon, splash, feature/screenshot set (6.7" + 6.5" iPhone, 8" tablet, 1080×1920 phone).
- [ ] D2. Android: `eas build --platform android --profile production` → `.aab` → `eas submit --platform android` (Play Console: create app, internal test track, privacy + data-safety forms — child-directed app forms required for kids' apps).
- [ ] D3. iOS: `eas build --platform ios --profile production` → `.ipa` → `eas submit --platform ios` (App Store Connect: TestFlight beta first, then review).
- [ ] D4. Privacy: write/privacy notice + data-collection answers (parent-managed child data — eSafety-informed; see `docs/specs/curriculum-research.md`).
- [ ] D5. Version/track strategy: bump `version` + `buildNumber`/`versionCode` in `app.json` per release; keep iOS + Android in lockstep.

**Verify:** TestFlight + Play internal builds install on fresh devices with no
Expo Go dependency.

## 8. Workstream E — Release cadence & OTA

**Goal:** ship fast without waiting on store review.

- [ ] E1. EAS Update: `eas channel:create` + `eas update` for JS-only fixes to all three platforms.
- [ ] E2. Enforce "native change → store build, JS change → OTA" rule in the release checklist (this repo convention — document in `AGENTS.md`).
- [ ] E3. Rollback drill: `eas update --channel production` to a previous bundle id.

**Verify:** a JS-only change (e.g. text tweak) reaches a store build without a
new store submission.

## 9. Native-vs-web gotchas to verify early (not blockers)

| Area | Risk | Check in workstream |
|---|---|---|
| AsyncStorage | Works on all three (localStorage web) but is sync-budget-sensitive on native | B4/B5 |
| Text input / keyboard | `multiline` writing box + keyboard avoidance differs per platform | B4 |
| Safe areas / notch | Header padding needs `react-native-safe-area-context` on native | B4 |
| Fonts | System fonts differ; emoji render differently (we've removed emoji — vector icons stay consistent) | B4 |
| Deep links | Needed later for auth + share flows (`expo-linking`) | C2 |
| Date handling | `toLocaleString` varies — keep UTC ISO in persisted state | B6 |

## 10. Definition of done (gate for green light)

1. Web URL live (A) with persistence working after reload.
2. Android + iOS dev builds installable and all five screens verified (B).
3. Google sign-in works on all three platforms (C).
4. TestFlight + Play internal builds distributed without Expo Go (D).
5. OTA update demonstrated (E).
6. Typecheck + web export green at every step; docs updated.

## 11. Suggested order & parallel tracks

- **Do first:** lock §3 decisions → A1–A6 (web live) → B1–B3 (EAS scaffolding).
- **Parallel:** C (auth) can start as soon as B4/B5 exist, since auth is the
  biggest unknown for native.
- **After auth:** D (stores) + E (OTA) are mostly mechanical once C lands.
- Keep the existing verification loop (`tsc` + `expo export`) as a CI gate
  before every EAS build.

## 12. Budget / accounts checklist

- [ ] Apple Developer Program US$99/yr (apply early — takes days to approve)
- [ ] Google Play Console US$25 one-time
- [ ] EAS (Expo) account — free tier covers dev builds; metered for production
- [ ] Vercel/Netlify account (free tier fine)
- [ ] Google Cloud project for OAuth (free tier)

## Related docs

- `docs/roadmap.md` — Phase 1 item 0 (auth/planner) and general timeline.
- `docs/specs/product-spec.md` — auth, Lite/Pro, parent dashboard.
- `docs/architecture.md` — proposed Supabase backend + data model.
- `apps/mobile/app.json` — identity lives here once §4 tasks run.
