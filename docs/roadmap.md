# BilbyBots — Roadmap

## Progress so far (updated Aug 2026)

**Shipped since this roadmap was written:**

- [x] **Google Auth live** (Supabase OAuth) on web + native deep-link; production redirect fixed via `EXPO_PUBLIC_SITE_URL`
- [x] **Supabase backend foundation**: full schema + RLS (`apps/mobile/supabase/migrations/`), contact form backed by `contact_messages`
- [x] **Account sync**: family / child / progress mirror to Supabase (`src/utils/sync.ts`) — pull on sign-in, debounced idempotent push
- [x] **Web deployment**: static export on Vercel at `bilbybots.com` (custom domain)
- [x] **NAPLAN practice facade**: original Y3/5/7/9 items across reading, writing, conventions, numeracy
- [x] **Public repo**: README, GitHub description, licensing note

**Current focus (Phase 1):** content review/expansion, then soft-launch. Adaptive-pacing planner, expo-router navigation and the curriculum ingestion pipeline are now implemented.

## Phase 0 — Foundations (research & spec) — complete
- [x] Curriculum feasibility research (ACARA v9.0, NESA & states, licensing)
- [x] Product spec, adaptive-pacing spec, architecture, this roadmap
- [x] K–10 scope confirmed (Years 7–10 subject structure mapped)
- [x] **Year‑6 topic lists** (Maths 24, English 23/23, Science 12/12, HASS 8K+7S) in `docs/content/year-6/`
- [x] **Year‑6 full lesson content** (all 4 subjects) authored in `apps/mobile/src/data/year6/`: lesson text, rendered vector illustrations, quiz questions per topic — wired into the app facade
- [x] Phase‑2 AI‑video prompt markup + Google Flow playbook (template + 2 filled examples)
- [x] **Expo/React scaffold** (`apps/mobile`): theming, types, onboarding→plan→lesson facade
- [x] **NAPLAN research** (`docs/specs/naplan-research.md`): past papers 2008–2016, FOI-licence wall, structure to replicate
- [x] **NAPLAN practice-test spec** (`docs/specs/naplan-test-spec.md`): original NAPLAN-style module (Y3/5/7/9)
- [x] **NAPLAN track facade** (`apps/mobile`): Home page hosts weekly-plan + NAPLAN tracks; NAPLAN hub (domain cards + year picker defaulting to the child's next NAPLAN year), test runner (practice/timed, locked sections, indicative results), original sample items for Y3/5/7/9
- [x] **On-device persistence + setup** (`apps/mobile`): AsyncStorage-backed save/load of child profile, completed topics, badges and NAPLAN results; hydration splash on launch; Setup (header gear) edits profile / changes year & subjects, plus destructive "Reset all data"
- [x] **Shipping plan** (`docs/specs/shipping-plan.md`): executable plan to ship the one Expo codebase to web (static hosting), iOS + Android (EAS builds), incl. auth milestone, store submission and OTA updates
- [ ] Decision: state rollout order (NSW first), term-calendar source, Pro price (AUD)

## Phase 1 — MVP (target: 3–4 months from green light)
**Scope:** English + Maths, Years 1–6, AC v9.0 / NSW 2022 outcomes. Web + iOS + Android via React/Expo. Google Auth. Lite + Pro billing. Badges/streaks + basic advance-level. Adaptive pacing for late joins.

0. **Extend scaffold → app:**
   - [x] Google OAuth (Supabase) — live on web + native
   - [x] Planner wire-up (facade `buildWeekPlan`) + AsyncStorage persistence + Setup screen
   - [x] Real navigation (expo-router — file-based routes, auth gate, OAuth callback route, deep links)
   - [ ] SQLite offline cache (`expo-sqlite` — not started)
1. **Curriculum ingestion pipeline** (MRAC JSON + Excel → Postgres) with coverage tests (seed from the Year‑6 topic indexes).
   - [x] TS topic banks → Postgres seed (`npm run seed:generate` → `supabase/seed/curriculum-seed.sql`, gitignored): 714 CDs, 708 topics, 708 lessons, 4248 questions + assignments, with ingestion coverage tests (`src/data/ingest.test.ts`)
   - [ ] Seed CD text/elaborations from the official MRAC JSON/Excel source once licensed content is structured
2. **Backend** on Supabase (Postgres + RLS + storage):
   - [x] Auth, full schema + RLS, children + progress sync (live)
   - [ ] plans (`plan_snapshot`/`plan_week`), badges (`child_badge`), subscriptions wired into the app (tables exist, unused)
   - [ ] Object storage for media
3. **Planner** implementing `adaptive-pacing.md`:
   - [x] Core algorithm (balanced, order-preserving placement), 100% coverage validator + determinism, unit-tested (`src/planner/`, `npm test`), wired into the WeekPlan screen
   - [x] Snapshots persisted to `plan_snapshot`/`plan_week` (idempotent, archived); parent-set `joinWeek` + opt-in re-planning (excludes learned topics); compact `questionCount` threaded into the lesson runner
4. **Content authoring** foundation: Year‑6 English + Maths + Science + HASS topics authored (✓ facade-quality, see Phase 0); still needed — human curriculum review/sign-off, richer question banks per topic (currently 2–5 of the spec'd 6–8), template-driven authoring tooling. Expand to other years afterwards.
5. [ ] **Client MVP:** completion of the facade into a real app (planner-driven weekly plan, learn-first reader, assignment runner, badges, parent dashboard with coverage %).
6. **Offline cache + sync** for the current week:
   - [x] On-device AsyncStorage persistence + Supabase pull/push for child/progress
   - [ ] SQLite on device (`expo-sqlite`)
7. [ ] **Soft-launch:** small NSW parent pilot cohort; measure completion, accuracy, retention.

## Phase 2 — Content expansion & video (4–6 months)
- Science + HASS (Years 1–6). Facade topic banks exist in `src/data/year*/` for most years; pending: full deep-content coverage, curriculum review/sign-off.
- Deep-content expansion to full-year coverage for all six years across English/Maths/Science/HASS.
- **AI-generated video lessons** driven by `docs/content/year-6/video-prompts/` — Google Flow (Nano Banana stills + Gemini Omni Flash / Veo 3.1) for pilots, then the Gemini API batch job queue for scale; human accuracy review (`ready` gate) before release.
- K–10 expansion: author English/Maths/Science/History topic sets for Years 7–10 (same planner). Facade topic banks for Y7–10 already scaffolded in `src/data/`.
- Parent progress reports (PDF) + advanced insights.
- QLD / VIC / WA state packs via curriculum mapping tables.
- Advance-level depth (honours) content for all subjects.
- **NAPLAN practice module** (`naplan-test-spec.md`):
  - [x] Original-item facade for all four domains (reading, writing, conventions, numeracy) on Y3/5/7/9 with timed + practice modes
  - [ ] Phase 2a = expanded numeracy + conventions item banks; Phase 2b = reading stimulus bank + writing rubric depth, Y7/9 NC/calculator numeracy

## Phase 3 — Scale & polish
- Analytics layer (ClickHouse/OLAP replica) for parent dashboards & product telemetry.
- Hardware-grade offline (on-device video, larger caches), sync hardening.
- The Arts / PDHPE / Languages content (partial or pilots).
- Localisation of marketing/onboarding; international parents (Aus expats).
- Marketplace/family sharing, referral mechanics (non-child-facing), lifetime vs annual pricing test.

## Risks & mitigations
| Risk | Mitigation |
| --- | --- |
| NESA licensing restricts NSW-specific content | Align to AC v9.0 (CC BY), map outcomes as references; engage NESA for permission if NSW-native content needed |
| NSW syllabus reform churn to 2027 | Version-tag everything; ship stable English/Maths 2022 + AC-aligned others |
| Content authoring effort is large | Build authoring tooling early; template-driven lessons; AI-assisted drafting with human review |
| Coverage promise demands determinism | Planner validator ("covered == scope") is a CI gate, not a manual review |
| Child-safety compliance | Parent-managed accounts, no child accounts, no ads, APPs + eSafety-informed design from day one |