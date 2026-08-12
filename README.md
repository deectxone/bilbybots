# BilbyBots

**A curriculum-aligned learning app for Australian students (Years 1–10):**
adaptive weekly learning plans, NAPLAN-style practice, and gamified progress —
built on Expo (React Native) + Supabase.

> **Status:** Working product scaffold. Google sign-in (Supabase Auth), account
> sync (families → children → progress), a contact form, weekly-plan and
> NAPLAN-practice tracks, and a web deployment on Vercel are live. Full authored
> curriculum content and the AI-video lesson pipeline are the next milestones.

## The idea

A parent signs up with Google, creates a profile for each child (name, school
year, state, subjects), and BilbyBots generates a **curated weekly learning
plan** per subject. Each week pairs **learn-first content** (text with worked,
illustrated examples) with **on-device assignments**. Completion earns
**badges**; finishing the weekly assignment unlocks a **bonus challenge**. If a
child joins partway through the school year, the planner **re-packs the full
year's syllabus into the remaining weeks** so 100% of topics are still covered
(adaptive pacing). Ships as web + iOS + Android at **Lite** and **Pro** tiers.

## What's implemented

- **Google sign-in** via Supabase Auth (web + native deep-link)
- **Account sync** — family, child profile, completed topics, badges and NAPLAN
  results mirrored to Supabase (RLS-scoped, idempotent push/pull)
- **Weekly plan** track: plan → lesson → topic completion
- **Adaptive-pacing planner** — deterministic weekly plans with a 100%-coverage
  validator and depth compaction for late joiners (`src/planner/`, unit-tested)
- **Curriculum ingestion** — authored TS topic banks seeded into Supabase
  (`curriculum`/`topic`/`lesson`/`question`) via `npm run seed:generate`,
  with coverage tests
- **NAPLAN-style practice** (Years 3/5/7/9): reading, writing, language
  conventions and numeracy runners with original items
- **Contact form** backed by a Supabase table
- **Themed vector illustrations** (SVG, palette-only — never emoji)

## Tech stack

| Layer | Choice |
| --- | --- |
| Client | Expo SDK 57 (React Native + web via react-native-web) |
| Auth | Supabase Auth (Google OAuth) |
| Backend / DB | Supabase (PostgreSQL + Row-Level Security) |
| Hosting | Vercel (static web export) |
| Local persistence | AsyncStorage (`src/utils/persistence.ts`) |

## Getting started

Prereqs: Node 20+, npm, an Expo account (for `expo start`).

```bash
cd apps/mobile
npm install
cp .env.example .env        # fill in the two EXPO_PUBLIC_SUPABASE_* values
npm start                   # press w / i / a for web / iOS / Android
npx tsc --noEmit            # typecheck
```

### Supabase setup

1. Create a free project at [supabase.com](https://supabase.com), enable the
   **Google** provider (see `docs/specs/auth-setup.md`).
2. Run the migrations in **SQL Editor** (in order):
   - `apps/mobile/supabase/migrations/20260812000100_contact_messages.sql`
   - `apps/mobile/supabase/migrations/20260812000200_full_schema.sql`
3. For web, set `EXPO_PUBLIC_SITE_URL` to your production origin on Vercel
   (leave it empty locally). Details in `docs/specs/vercel-deploy.md`.

## Docs

| Doc | Purpose |
| --- | --- |
| [`docs/specs/product-spec.md`](docs/specs/product-spec.md) | Product requirements, UX, gamification, Lite/Pro |
| [`docs/specs/adaptive-pacing.md`](docs/specs/adaptive-pacing.md) | Late-join 100% syllabus coverage algorithm |
| [`docs/specs/naplan-research.md`](docs/specs/naplan-research.md) | NAPLAN licensing wall + real test structure |
| [`docs/specs/naplan-test-spec.md`](docs/specs/naplan-test-spec.md) | Original NAPLAN-style test module spec |
| [`docs/specs/curriculum-research.md`](docs/specs/curriculum-research.md) | ACARA/state feasibility + licensing rules |
| [`docs/content/year-6/`](docs/content/year-6/) | Year-6 topic indexes + AI-video prompt markup |
| [`docs/architecture.md`](docs/architecture.md) | Stack, data model, offline strategy, RLS |
| [`docs/roadmap.md`](docs/roadmap.md) | Phased delivery plan |
| [`AGENTS.md`](AGENTS.md) | Licensing, accuracy and child-safety constraints |

## Licensing & compliance

- **This codebase is proprietary — all rights reserved.** It is published for
  reference only; no licence to reuse it is granted. (The `MIT` file under
  `apps/mobile/LICENSE` covers only the Expo scaffold it was generated from.)
- Curriculum content follows ACARA v9.0 (CC BY 4.0, with attribution +
  non-endorsement disclaimer). NAPLAN-style practice items are **original** —
  ACARA forbids reproducing released past papers in an app.
- The app is designed for parent-managed accounts and follows Australian
  Privacy Principles / eSafety guidance for services used by children.

## Security

Secrets never live in this repo: `.env` files are git-ignored, and only
client-safe public keys (Supabase `anon` key) are used at runtime behind
Row-Level Security. If you spot a leak, rotate the key and contact the owner.
