# BilbyBots — Architecture

> Technical blueprint at concept stage. Principles: one React codebase → web,
> iOS, Android; Google-first auth; offline-friendly; content-heavy but
> read-mostly; multi-tenant family accounts; auditable curriculum alignment.

---

## 1. Shape of the system

```
┌─────────────────────────────┐
│  React clients              │   web (PWA) · iOS · Android
│  ─ React Native / Expo      │
│  ─ off-line-first via SQLite│◄─────────┐
│  ─ local-first progress store│          │ sync (REST + background)
└──────────┬──────────────────┘          │
           │ HTTPS / GraphQL              │
┌──────────▼───────────────┐    ┌────────┴───────────────┐
│  Edge / API services     │    │  Object storage/CDN    │
│  ─ Auth (Google OAuth)   │    │  illustrations, vid    │
│  ─ Planner (pacing)      │    └────────────────────────┘
│  ─ Progress/XP/badges    │
│  ─ Curriculum ingestion  │◄── ACARA MRAC (JSON/RDF/Excel)
└──────────┬───────────────┘
┌──────────▼───────────────┐
│  PostgreSQL  (system of  │   open-source; source of truth;
│  record, RLS per family) │   migration-friendly, JSONB, FTS
└──────────────────────────┘
```

## 2. Client strategy

- **Shared React core.** One UI kit (React + Expo/React Native) targeting web
  (PWA-capable) + mobile builds. High-reuse "learn-first reader", assignment
  runner, badge UI, parent dashboard.
- **Offline-first.** The weekly plan + assets for the current week are cached
  on-device. Progress events queue locally and sync when online — this matters
  for kids on tablets/commutes and reduces server load (read-mostly workload).
- Local store: SQLite via `expo-sqlite` / OPFS for web, or a sync layer such as
  PowerSync/`libSQL`.

## 3. Open-source database recommendation

The workload is **content-heavy but read-mostly**, multi-tenant, SQL-shaped,
and includes rich progress events. Recommendation:

### Primary: **PostgreSQL** (open source) as system of record
- Rationale: relational curriculum graph (year → subject → strand → CD →
  topic → lesson → assignment), JSONB for flexible lesson/asset blobs,
  built-in full-text search, transactional progress mutations.
- **Supabase** (open-source BaaS on Postgres) as the reference deployment:
  Google OAuth, **Row-Level Security** (perfect for the family multi-tenant
  model: every query scoped to the family + child), object storage (S3
  compatible) for media, and an API/edge layer. Self-hostable, or pick Neon /
  plain RDS — schema is vanilla Postgres.

### On-device: **SQLite**
- The mobile/web offline cache. WAL mode, copied from server via sync
  (e.g. PowerSync, or a lightweight REST sync). SQLite is the standard embedded
  choice, and the curriculum+plan payload for one child is tiny (see sizing).

### Why not alternative engines
| Engine | Verdict |
| --- | --- |
| MongoDB | Schema-free tempting, but the curriculum is deeply relational (states, years, strands, mappings); Postgres JSONB already covers flexible content while keeping joins/indexes. |
| MySQL/MariaDB | Fine, but weaker JSON + FTS + RLS story than Postgres for this shape. |
| ClickHouse / DuckDB | Great for analytics (parent reports) — can be *added later* as a read replica/OLAP for progress dashboards, not the OLTP source of truth. |
| Turso / libSQL only | Edge-distributed SQLite is nice for reads, but the multi-writer accounting (XP, streaks, plan snapshots) and RLS needs point to Postgres central authority. |

**Bottom line:** PostgreSQL (Supabase-flavoured) for server truth + SQLite for
on-device. This mirrors common production patterns for read-heavy, multi-tenant
edtech; avoids a multi-engine zoo at MVP.

## 4. Data sizing

| Data set | Approx size | Notes |
| --- | --- | --- |
| Curriculum (CDs + elaborations + achievement standards, F–6 all learning areas) | low thousands of rows; single-digit MB | Ingested from ACARA MRAC/Excel. |
| Authored lessons & assignments (per year × state × subject) | 10–100MB text/structured | Grows fastest; authored content, not DB-bound. |
| Illustrations/media | 1–10 GB+ over time | **Object storage + CDN**, referenced by URL — never in DB. |
| Progress/XP/badge events | 100s of MB, spiky | Row growth manageable; partition by date later; consider ClickHouse only at scale. |
| AI-video lessons (Phase 2) | Up to many GB | Offloaded to media pipeline; tenants stream, don't download. |

## 5. Data model (core entities)

```
users (id, google_sub, email, display_name, role)
families (id, name, owner_user_id, plan_tier)
family_members (family_id, user_id)          -- multi-user families
children (id, family_id, name, avatar, state, year, subjects[], created_at)
curriculum (id, code, version, learning_area, strand, sub_strand, cd_text,
             elaborations[], achievement_standard_id, state_mapping{nsa, qld, ...})
topic (id, curriculum_codes[], title, learning_area, prereq_topic_ids[],
        nominal_questions, min_depth_questions)
lesson (id, topic_id, title, body_json, media_refs[])       -- learn-first content
question (id, lesson_id/assignment_id, prompt, type, options, answer, difficulty)
assignment (id, topic_id, questions_meta, depth_level)
plan_snapshot (id, child_id, algorithm_version, input_hash, coverage_pct,
               generated_at, approved_at)
plan_week (snapshot_id, week_index, subject, topics[], question_counts)
progress_event (child_id, kind[xp|answer|completion|badge], ref, payload, ts)
badge (id, code, name, icon, criteria)
child_badge (child_id, badge_id, earned_at)
subscription (family_id, tier, started_at, renews_at, provider)
```

RLS policy pattern: `children` are scoped by `family_id ∈ families of user`;
progress/badges by `child_id ∈ children of family`.

## 6. Key flows

1. **Ingestion** (batch, CI): parse MRAC JSON + Excel → seed `curriculum`,
   `topic`, lesson/question scaffolding with provenance tags and versions.
   Verified by coverage tests (docs 4 §Curriculum).
2. **Auth/onboarding:** Google OAuth → family → add child (name, avatar,
   state, year) → planner runs (`adaptive-pacing.md`) → snapshot → app shows
   Week W plan.
3. **Weekly loop:** app serves lessons/assignments from offline cache; answers
   → local store → sync; server awards XP & badges, checks advance-level
   unlock, updates `progress_event` and parent dashboard.
4. **Parent dashboard:** coverage %, badges, streaks, "what's next week"
   preview; re-plan button (parent-gated) triggers new snapshot.

## 7. Tiers & licensing hooks

- Lite vs Pro encoded as `plans.tier` on the family; entitlement check in API;
  feature flags in client (number of subjects, child count, offline packs,
  progress reports). No ads, per child-safety policy (see AGENTS.md).
- License compliance seals: ACARA CC BY attribution + disclaimer in onboarding,
  footer, and lesson-back matter; state outcome codes used as references with
  a "not affiliated" notice.

## 8. Security & privacy posture

- Zero-trust RLS; tables child-scoped; row access via `family_id`.
- Google OAuth only (plus magic-link/PKCE fallback later). No child accounts.
- Data minimisation; APPs-aware privacy (Privacy Act 1988); eSafety guidance.
- Secrets never in repo; config via environment; media URLs signed & short-lived.

## 9. Open decisions

- GraphQL vs REST for client sync (REST + typed client likely simpler at MVP).
- Sync engine for offline (PowerSync vs hand-rolled REST sync vs TiDB-style
  replication) — prototype needed for tablet experience.
- Deployment: Supabase cloud vs self-hosted Postgres at MVP.
- Analytics tier timing (ClickHouse read-replica) deferred until scale.