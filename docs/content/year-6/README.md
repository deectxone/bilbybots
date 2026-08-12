# BilbyBots — Content Authoring (Year 6)

Organisation and conventions for authoring Year 6 curriculum-aligned content.
Every topic is a self-contained unit: **lesson (text + illustrations) +
quick-check + assignment**, tagged with the Australian Curriculum v9.0 content
descriptions (CD) it covers, plus an optional **video-prompt markup** for the
Phase-2 AI-video pipeline.

> Phase 1 = text-only lessons with vibrant illustrated visuals.
> Phase 2 = a short AI video per topic, generated from `video-prompts/` marks.

## File layout

```
docs/content/year-6/
├── README.md                 ← this file
├── mathematics.md            ← all Y6 Maths topics (index)
├── english.md                ← all Y6 English topics (index)
├── science.md                ← all Y6 Science topics (index)
├── hass.md                   ← all Y6 HASS topics (index)
└── video-prompts/
    ├── template.md           ← markup template + Google Flow guidance
    └── <subject>--<topic>.md ← one filled prompt per topic (Phase 2)
```

## Topic markup (front matter used in every topic index entry)

```yaml
topic: MAT-NUM-01                     # stable id, e.g. <SUBJ-STRAND-NN>
title: "Whole numbers & place value up to millions"
year: 6
subject: mathematics
strand: number
audience_age: 11-12
cd: [AC9M6N01, AC9M6N02]               # Australian Curriculum v9.0 codes
state_map: {nsa: MA2-4NA-01}           # optional NSW outcome refs
video_prompt: video-prompts/mathematics--whole-numbers.md   # Phase 2
lesson:
  learn_time_min: 12
  assignment_qs: 8
  assignment_qs_compact: 5             # used by adaptive pacing
```

(In the markdown index docs these appear as readable headings/tables, not raw
YAML. The YAML is the eventual DB import format.)

## Authoring rules

- **Kid-friendly voice, vibrant colour:** short sentences, concrete examples,
  brave + friendly tone; the Bilby (mascot) narrates. No age-inappropriate
  concepts beyond the curriculum CD.
- **Illustration slots:** every lesson has ≤ 6 illustrated frames; each frame is
  described by one line so the illustration pipeline (and later, video scenes)
  can be generated consistently.
- **Coverage:** topics must jointly cover **every** CD listed in the index —
  the pacing validator does not pass until `covered == scope`.
- **Provenance:** keep the `cd:` list untouched; never renumber CD codes.
- **Sensitivity:** HASS/First Nations content follows ACARA protocols — use
  respectful, consultation-informed language; where a topic (e.g. "Changes in
  citizenship and First Nations Australians") needs care, the topic doc flags
  `sensitivity: review` for a Foundations-of-knowledge review before release.