/**
 * Test helper: renders the same in-DB row shapes that `buildIngestRows` +
 * `insertStatements` produce, so `supabase-content`'s `mapContentRows` can be
 * tested against the exact data the seed writes. Imported only by
 * `supabase-content.test.ts`.
 */
import { buildIngestRows, type IngestRows } from './ingest';

export { buildIngestRows };

/** Convert ingest rows into the row objects Supabase returns per table. */
export function mapContentRowsHelper(rows: IngestRows) {
  return {
    curriculum: rows.curriculum.map((c) => ({
      code: c.code,
      strand: c.strand,
      state_mapping: c.state_mapping,
    })),
    topics: rows.topics.map((t) => ({
      id: t.id,
      curriculum_codes: t.curriculum_codes,
      title: t.title,
      learning_area: t.learning_area,
      nominal_questions: t.nominal_questions,
      min_depth_questions: t.min_depth_questions,
    })),
    lessons: rows.lessons.map((l) => ({
      id: l.id,
      topic_id: l.topic_id,
      body_json: l.body_json,
    })),
    questions: rows.questions.map((q) => ({
      id: q.id,
      prompt: q.prompt,
      type: q.type,
      options: q.options,
      answer: q.answer,
      difficulty: q.difficulty,
    })),
    assignments: rows.assignments.map((a) => ({
      id: a.id,
      topic_id: a.topic_id,
      questions_meta: a.questions_meta,
    })),
  };
}
