import type { SubjectId, Topic } from '../types/curriculum';

/**
 * Curriculum ingestion: transforms the authored TS topic banks
 * (`src/data/yearN/*`) into the Supabase content schema
 * (`supabase/migrations/20260812000200_full_schema.sql`): curriculum
 * (content descriptions), topic, lesson, question, assignment.
 *
 * Pure + deterministic: ids are derived from stable keys, so a re-run always
 * maps the same content to the same rows (`ON CONFLICT (id) DO NOTHING` in the
 * generated seed). Coverage is asserted by `src/data/ingest.test.ts`
 * ("every CD → one curriculum row, every topic → one topic row", etc.).
 */

const SUBJECT_LABEL: Record<SubjectId, string> = {
  mathematics: 'Mathematics',
  english: 'English',
  science: 'Science',
  hass: 'HASS',
};

export interface CurriculumRow {
  id: string;
  code: string;
  version: string;
  learning_area: string;
  strand: string | null;
  sub_strand: string | null;
  cd_text: string | null;
  elaborations: unknown[];
  achievement_standard_id: string | null;
  state_mapping: Record<string, string>;
}

export interface TopicRow {
  id: string;
  curriculum_codes: string[];
  title: string;
  learning_area: string;
  prereq_topic_ids: string[];
  nominal_questions: number;
  min_depth_questions: number;
}

export interface LessonRow {
  id: string;
  topic_id: string;
  title: string;
  body_json: { body: string[]; illustrations: unknown[]; learnTimeMin: number };
  media_refs: unknown[];
}

export interface QuestionRow {
  id: string;
  lesson_id: string;
  prompt: string;
  type: string;
  options: string[] | null;
  answer: string;
  difficulty: number;
}

export interface AssignmentRow {
  id: string;
  topic_id: string;
  questions_meta: { nominalCount: number; compactCount: number; questionIds: string[] };
  depth_level: number;
}

export interface IngestRows {
  curriculum: CurriculumRow[];
  topics: TopicRow[];
  lessons: LessonRow[];
  questions: QuestionRow[];
  assignments: AssignmentRow[];
}

/** Deterministic 128-bit uuid from a stable key (FNV-1a variants, pure JS). */
export function uuidFromKey(key: string): string {
  const fnv = (seed: number) => {
    let h = seed >>> 0;
    for (let i = 0; i < key.length; i++) {
      h ^= key.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h.toString(16).padStart(8, '0');
  };
  const hex = [0x811c9dc5, 0x9e3779b9, 0x85ebca6b, 0xc2b2ae35].map(fnv).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export function buildIngestRows(allTopics: Topic[]): IngestRows {
  const curriculum = new Map<string, CurriculumRow>();
  const topics: TopicRow[] = [];
  const lessons: LessonRow[] = [];
  const questions: QuestionRow[] = [];
  const assignments: AssignmentRow[] = [];

  for (const topic of allTopics) {
    const learningArea = SUBJECT_LABEL[topic.subject];

    for (const cd of topic.cd) {
      const code = cd.ac;
      if (!curriculum.has(code)) {
        curriculum.set(code, {
          id: uuidFromKey(`curriculum:${code}`),
          code,
          version: '9.0',
          learning_area: learningArea,
          strand: topic.strand,
          sub_strand: null,
          cd_text: null,
          elaborations: [],
          achievement_standard_id: null,
          state_mapping: cd.state ?? {},
        });
      }
    }

    const topicId = uuidFromKey(`topic:${topic.id}`);
    const lessonId = uuidFromKey(`lesson:${topic.id}`);

    topics.push({
      id: topicId,
      curriculum_codes: topic.cd.map((c) => c.ac),
      title: topic.title,
      learning_area: learningArea,
      prereq_topic_ids: [],
      nominal_questions: topic.assignment.nominalCount,
      min_depth_questions: topic.assignment.compactCount,
    });

    lessons.push({
      id: lessonId,
      topic_id: topicId,
      title: topic.title,
      body_json: {
        body: topic.learn.body,
        illustrations: topic.learn.illustrations,
        learnTimeMin: topic.learn.learnTimeMin,
      },
      media_refs: [],
    });

    const questionIds: string[] = [];
    for (const q of topic.assignment.questions) {
      const qid = uuidFromKey(`question:${q.id}`);
      questionIds.push(qid);
      questions.push({
        id: qid,
        lesson_id: lessonId,
        prompt: q.prompt,
        type: q.type,
        options: q.options ?? null,
        answer: q.answer,
        difficulty: q.difficulty,
      });
    }

    assignments.push({
      id: uuidFromKey(`assignment:${topic.id}`),
      topic_id: topicId,
      questions_meta: {
        nominalCount: topic.assignment.nominalCount,
        compactCount: topic.assignment.compactCount,
        questionIds,
      },
      depth_level: 1,
    });
  }

  return {
    curriculum: [...curriculum.values()],
    topics,
    lessons,
    questions,
    assignments,
  };
}

/** SQL string literal for any JS value (strings escaped, objects as JSON). */
function sql(v: unknown): string {
  if (v === null || v === undefined) return 'NULL';
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  const s = typeof v === 'string' ? v : JSON.stringify(v);
  return `'${s.replace(/'/g, "''")}'`;
}

/** Postgres text[] literal from a string array. */
function arrayLit(arr: string[]): string {
  return `{${arr.map((s) => `"${s.replace(/"/g, '\\"')}"`).join(',')}}`;
}

const BATCH = 400;

/** Target max size (bytes) of a single browser-runnable per-table seed file. */
const FILE_MAX_BYTES = 250_000;

const CURRICULUM_COLUMNS = ['id', 'code', 'version', 'learning_area', 'strand', 'sub_strand', 'cd_text', 'elaborations', 'achievement_standard_id', 'state_mapping'] as const;
const TOPIC_COLUMNS = ['id', 'curriculum_codes', 'title', 'learning_area', 'prereq_topic_ids', 'nominal_questions', 'min_depth_questions'] as const;
const LESSON_COLUMNS = ['id', 'topic_id', 'title', 'body_json', 'media_refs'] as const;
const QUESTION_COLUMNS = ['id', 'lesson_id', 'assignment_id', 'prompt', 'type', 'options', 'answer', 'difficulty'] as const;
const ASSIGNMENT_COLUMNS = ['id', 'topic_id', 'questions_meta', 'depth_level'] as const;

function insertStatements<T>(table: string, columns: readonly string[], rows: T[], values: (row: T) => string): string[] {
  const out: string[] = [];
  for (let i = 0; i < rows.length; i += BATCH) {
    const chunk = rows.slice(i, i + BATCH).map(values);
    out.push(`INSERT INTO public.${table} (${columns.join(', ')}) VALUES\n  ${chunk.join(',\n  ')}\nON CONFLICT (id) DO NOTHING;`);
  }
  return out;
}

/**
 * Batch rows into INSERT statements capped by a byte budget rather than a row
 * count, so each statement stays small enough to paste into a browser SQL
 * editor. Separator/newline overhead is estimated; the cap is approximate.
 */
function insertStatementsBySize<T>(table: string, columns: readonly string[], rows: T[], values: (row: T) => string, maxBytes: number): string[] {
  const prefix = `INSERT INTO public.${table} (${columns.join(', ')}) VALUES`;
  const suffix = 'ON CONFLICT (id) DO NOTHING;';
  const out: string[] = [];
  let chunk: string[] = [];
  let size = prefix.length + suffix.length + 4;
  const flush = () => {
    if (chunk.length === 0) return;
    out.push(`${prefix}\n  ${chunk.join(',\n  ')}\n${suffix}`);
    chunk = [];
    size = prefix.length + suffix.length + 4;
  };
  for (const row of rows) {
    const line = values(row);
    const added = line.length + 2;
    if (chunk.length > 0 && size + added > maxBytes) flush();
    chunk.push(line);
    size += added;
  }
  flush();
  return out;
}

/** One generated SQL file (browser-runnable fallback seed). */
export interface SeedFile {
  name: string;
  content: string;
}

const RUN_ORDER = ['curriculum', 'topic', 'lesson', 'question', 'assignment'];

function seedFileContent(table: string, part: number, total: number, statement: string): string {
  const partLabel = total > 1 ? ` (part ${part} of ${total})` : '';
  return [
    `-- BilbyBots seed — ${table} table${partLabel}. Generated by \`npm run seed:generate\`.`,
    `-- Run in the browser SQL editor, in order: ${RUN_ORDER.join(' → ')}.`,
    '-- Idempotent (ON CONFLICT (id) DO NOTHING), so re-running is safe.',
    'BEGIN;',
    '',
    statement,
    '',
    'COMMIT;',
  ].join('\n');
}

function tableFiles<T>(spec: { table: string; columns: readonly string[]; rows: T[]; values: (row: T) => string }): SeedFile[] {
  const statements = insertStatementsBySize(spec.table, spec.columns, spec.rows, spec.values, FILE_MAX_BYTES);
  return statements.map((statement, i) => ({
    name: statements.length === 1 ? `${spec.table}.sql` : `${spec.table}-${i + 1}.sql`,
    content: seedFileContent(spec.table, i + 1, statements.length, statement),
  }));
}

/**
 * Generate an idempotent SQL seed for the content tables. Run the result in
 * Supabase → SQL Editor (or `supabase db push`); writes are service-role only.
 */
export function generateSeedSql(rows: IngestRows): string {
  const statements: string[] = [];

  statements.push(...insertStatements(
    'curriculum',
    CURRICULUM_COLUMNS,
    rows.curriculum,
    (r) => `(${sql(r.id)}, ${sql(r.code)}, ${sql(r.version)}, ${sql(r.learning_area)}, ${sql(r.strand)}, ${sql(r.sub_strand)}, ${sql(r.cd_text)}, ${sql(r.elaborations)}, ${sql(r.achievement_standard_id)}, ${sql(r.state_mapping)})`,
  ));

  statements.push(...insertStatements(
    'topic',
    TOPIC_COLUMNS,
    rows.topics,
    (r) => `(${sql(r.id)}, ${sql(arrayLit(r.curriculum_codes))}, ${sql(r.title)}, ${sql(r.learning_area)}, ${sql(arrayLit(r.prereq_topic_ids))}, ${sql(r.nominal_questions)}, ${sql(r.min_depth_questions)})`,
  ));

  statements.push(...insertStatements(
    'lesson',
    LESSON_COLUMNS,
    rows.lessons,
    (r) => `(${sql(r.id)}, ${sql(r.topic_id)}, ${sql(r.title)}, ${sql(r.body_json)}, ${sql(r.media_refs)})`,
  ));

  statements.push(...insertStatements(
    'question',
    QUESTION_COLUMNS,
    rows.questions,
    (r) => `(${sql(r.id)}, ${sql(r.lesson_id)}, NULL, ${sql(r.prompt)}, ${sql(r.type)}, ${sql(r.options)}, ${sql(r.answer)}, ${sql(r.difficulty)})`,
  ));

  statements.push(...insertStatements(
    'assignment',
    ASSIGNMENT_COLUMNS,
    rows.assignments,
    (r) => `(${sql(r.id)}, ${sql(r.topic_id)}, ${sql(r.questions_meta)}, ${sql(r.depth_level)})`,
  ));

  return [
    '-- BilbyBots curriculum seed (generated by `npm run seed:generate`).',
    '-- Run once in Supabase → SQL Editor. Idempotent (ON CONFLICT (id) DO NOTHING).',
    'BEGIN;',
    '',
    ...statements,
    '',
    'COMMIT;',
  ].join('\n');
}

/**
 * Browser-only fallback: per-table seed files, run in this order —
 * curriculum → topic → lesson → question → assignment. Each file is wrapped in
 * BEGIN/COMMIT and byte-capped (chunked with a `-N` suffix when a table is too
 * large to paste into a browser SQL editor at once).
 */
export function generateSeedFiles(rows: IngestRows): SeedFile[] {
  return [
    ...tableFiles({ table: 'curriculum', columns: CURRICULUM_COLUMNS, rows: rows.curriculum, values: (r) => `(${sql(r.id)}, ${sql(r.code)}, ${sql(r.version)}, ${sql(r.learning_area)}, ${sql(r.strand)}, ${sql(r.sub_strand)}, ${sql(r.cd_text)}, ${sql(r.elaborations)}, ${sql(r.achievement_standard_id)}, ${sql(r.state_mapping)})` }),
    ...tableFiles({ table: 'topic', columns: TOPIC_COLUMNS, rows: rows.topics, values: (r) => `(${sql(r.id)}, ${sql(arrayLit(r.curriculum_codes))}, ${sql(r.title)}, ${sql(r.learning_area)}, ${sql(arrayLit(r.prereq_topic_ids))}, ${sql(r.nominal_questions)}, ${sql(r.min_depth_questions)})` }),
    ...tableFiles({ table: 'lesson', columns: LESSON_COLUMNS, rows: rows.lessons, values: (r) => `(${sql(r.id)}, ${sql(r.topic_id)}, ${sql(r.title)}, ${sql(r.body_json)}, ${sql(r.media_refs)})` }),
    ...tableFiles({ table: 'question', columns: QUESTION_COLUMNS, rows: rows.questions, values: (r) => `(${sql(r.id)}, ${sql(r.lesson_id)}, NULL, ${sql(r.prompt)}, ${sql(r.type)}, ${sql(r.options)}, ${sql(r.answer)}, ${sql(r.difficulty)})` }),
    ...tableFiles({ table: 'assignment', columns: ASSIGNMENT_COLUMNS, rows: rows.assignments, values: (r) => `(${sql(r.id)}, ${sql(r.topic_id)}, ${sql(r.questions_meta)}, ${sql(r.depth_level)})` }),
  ];
}
