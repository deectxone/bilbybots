# AI-Video Prompt Markup — Template & Playbook (Phase 2)

> One markdown file per topic, in `docs/content/year-6/video-prompts/`.
> Each file is a ready-to-use prompt set to produce one **short (~30–45 s)
> explanatory lesson video** for a topic — kid-friendly, curriculum-accurate,
> style-consistent with the BilbyBots look from Phase 1 illustrations.

## Recommended toolchain (2026) — Google Flow first

| Need | Tool | Why |
| --- | --- | --- |
| Scene/video generation | **Google Flow** + **Gemini Omni Flash** (default) or **Veo 3.1** | Voice-free conversational generation, 4–10 s clips, image "Ingredients"/frames, character & avatar consistency, native audio. Manual, human-in-the-loop — ideal for quality during Phase 2 pilots. |
| Programmatic/batch (scale later) | **Gemini API** video endpoints (`generateContent` with Omni Flash / Veo 3.1) | Async job queue: prompt → render → store in object storage → app serves URL. Same prompt files feed both Flow (manual) and the API (automated). |
| Illustration stills (same look as Phase 1) | **Nano Banana** image model in Flow (or our own Phase-1 illustrator style block) | Use the app's existing illustration frames as "Ingredients → Frames to Video" so video style matches lesson art exactly. |
| Narration (optional TTS) | **ElevenLabs** or **Google Cloud Text-to-Speech** (WaveNet/Neural2) | Warm, clear child-safe voices; the Bilby mascot voice is fixed per language. Veo 3.1 native audio can also carry simple SFX. |
| Assembly (if >1 clip) | FFmpeg / Flow's conversational editing | Stitch scene clips + narration; trim to ≤45 s. |

**Alternative tools** if Google Flow isn't suitable: Runway Gen-4 (character-consistent
shots), Pika, or open-source self-hosted (Wan 2.2 / LTX-Video / HunyuanVideo) for
cheap test renders — none beat Flow's style-lock + voice UX for this use case today.

## Front matter (required)

```yaml
video:
  topic_id: Y6-MAT-NN03                # same id as docs/content/year-6 topics index
  title: "Fractions — equivalence, comparing & ordering"
  subject: mathematics
  year: 6
  cd: [AC9M6N03]                        # ACARA v9.0 codes (must match topic index)
  duration_target_sec: 35               # 30–45 s recommended
  voice: bilby_friendly_aussie          # fixed mascot voice (TTS or Veo native)
  style_ref: phase1_lesson_illustrations # consistency anchor (app art direction)
  aspect: portrait_9x16                 # mobile-first; web can crop 16:9
  ready: false                          # set true after human accuracy review
  reviewed_by: null                     # only vetted content ships to kids
```

## Scene-by-scene markup

A short video = 3–5 scenes. One scene = one visual moment + one spoken beat.
Write for kids aged ~11–12: one idea per scene, concrete examples, warm and
playful, no jargon beyond the CD.

```markdown
## Scene 1 — Hook (≤8 s)
### Visual
> Describe the frame exactly. Subject, action, environment, colours, style.
> Reference the Phase-1 illustration if one exists ("same as lesson art for
> Y6-MAT-NN03 frame 2").
### Voiceover
> Bilby narrator, plain sentence(s). e.g. "Ever tried to share 4 cakes between
> 8 mates? Half each? Yes! That's equivalent fractions!"

## Scene 2 — Explain (≤12 s)
### Visual
> ... (concrete model: fraction bars, pie slices, number line)
### Voiceover
> ... (one concept only)

## Scene 3 — Example/worked (≤12 s)
### Visual
> ... (step-by-step: 1/2 = 2/4 = 3/6; show on the number line)
### Voiceover
> ... (walk one worked example slowly)

## Scene 4 — Recap (≤8 s)
### Visual
> ... (key idea card + friendly Bilby thumbs-up)
### Voiceover
> ... (one-sentence takeaway)
```

## Quality & safety rules (non-negotiable)

1. **Accuracy first:** voiceover must read word-for-word (or near) the approved
   lesson text; never invent curriculum content. Mark `reviewed_by` only after a
   human checks the render against the CD.
2. **Facts & names:** no real child faces; mascot-only characters; no
   brand/school/logos; respectful image of First Nations content (see
   `sensitivity: review` topics — those get an extra review gate).
3. **Voice & vocabulary:** warm, clear, child-appropriate; reading level ≤ the
   year's text; avoid sarcasm, slang, or scary imagery; always end on success.
4. **Duration:** 30–45 s, one concept, recap at the end. Kids scroll off after
   ~45 s.
5. **Consistency:** always embed the `style_ref` + mascot voice; scene colours
   from the app's palette (see AGENTS.md conventions).
6. **Serving:** video URLs are signed, short-lived, streamed from object storage
   via CDN (architecture.md §4); alt-text / captioned transcript served with the
   video for accessibility.

## How to run one in Google Flow (operator steps)

1. Open **labs.google/fx/tools/flow** → new project.
2. Drop Phase-1 illustration "Ingredients" for the topic (keeps the style).
3. Paste **each scene's `### Visual`** as the frame/ingredients description
   (or "Frames to Video" with start/end frames); set length 4–10 s; pick **Gemini
   Omni Flash**; request **3 variations**.
4. Select best render per scene; optionally extend/edit a scene conversationally.
5. Record/attach narration (ElevenLabs TTS of the `### Voiceover` lines) and
   assemble contiguous clips; target ≤45 s total.
6. Export 9:16 (portrait) primary + 16:9 fallback; upload to object storage.
7. Human accuracy review → flip `ready: true`, fill `reviewed_by`.

## Batch (Phase-2 production)

Same `.md` scenes, plus a small JSONL export per file feeding the Gemini API
video job queue (Omni Flash `generateContent`). Scenes render in parallel;
AssemblyBot concatenates + TTS; QA queue checks `reviewed_by` before a topic's
`video_url` is published.