import type { Topic, SubjectId, YearLevel } from '../types/curriculum';
import { supabase } from '../utils/supabase';
import { allLocalTopics, setContentSource } from './content';

/**
 * Supabase content reader: loads the curriculum content tables (curriculum /
 * topic / lesson / question / assignment) that `npm run seed:generate` seeded
 * and maps them back onto the app's `Topic` shape (the inverse of
 * `src/data/ingest.ts`). This is the client-side counterpart to the ingest
 * pipeline so the app can read curriculum content from Supabase instead of the
 * bundled TS topic banks.
 *
 * Content tables are read-only for the app (RLS grants `select` to
 * `authenticated`), so a signed-in session is required — see
 * `supabase/migrations/20260812000200_full_schema.sql`.
 *
 * NOTE: Topic ids here are the deterministic uuids produced by the ingest
 * pipeline (e.g. uuidFromKey('topic:Y6-MAT-NN01')), not the author-facing
 * 'Y6-MAT-NN01' keys. Switching a child's progress to this source therefore
 * changes the `completedTopicIds` key space.
 */

interface CurriculumRow {
  code: string;
  strand: string | null;
  state_mapping: Record<string, string> | null;
}

interface TopicRow {
  id: string;
  curriculum_codes: string[];
  title: string;
  learning_area: string;
  nominal_questions: number;
  min_depth_questions: number;
}

interface LessonRow {
  id: string;
  topic_id: string;
  /** jsonb — may arrive as a parsed object or a JSON string. */
  body_json: unknown;
}

interface QuestionRow {
  id: string;
  prompt: string;
  type: string;
  options: unknown;
  answer: string | null;
  difficulty: number;
}

interface AssignmentRow {
  id: string;
  topic_id: string;
  /** jsonb — may arrive as a parsed object or a JSON string. */
  questions_meta: unknown;
}

const LEARNING_AREA_TO_SUBJECT: Record<string, SubjectId> = {
  Mathematics: 'mathematics',
  English: 'english',
  Science: 'science',
  HASS: 'hass',
};

const YEAR_LOOKUP: Record<string, true> = {
  K: true,
  '1': true,
  '2': true,
  '3': true,
  '4': true,
  '5': true,
  '6': true,
  '7': true,
  '8': true,
  '9': true,
  '10': true,
};

/**
 * Derive the year level from an AC v9.0 content-description code, e.g.
 * AC9M6N01 -> '6', AC9HS6K01 -> '6', AC9HH7K01 -> '7', AC9M10A01 -> '10'.
 * Returns null for codes that don't carry a year.
 */
export function yearFromCode(code: string): YearLevel | null {
  const match = /^AC9(?:M|E|S|HS|HH)(\d+)/i.exec(code);
  if (!match || !(match[1] in YEAR_LOOKUP)) return null;
  return match[1] as YearLevel;
}

export interface ContentRows {
  curriculum: CurriculumRow[];
  topics: TopicRow[];
  lessons: LessonRow[];
  questions: QuestionRow[];
  assignments: AssignmentRow[];
}

/**
 * Parse a value that may be a JSONB object/array (supabase-js parses jsonb
 * into JS values) or a JSON string (some clients / older PostgREST versions
 * return jsonb columns as text). Falls back to the raw value.
 */
function parseJson<T>(value: unknown): T | undefined {
  if (value === null || value === undefined) return undefined;
  if (typeof value === 'object') return value as T;
  if (typeof value === 'string') {
    try {
      return JSON.parse(value) as T;
    } catch {
      return undefined;
    }
  }
  return undefined;
}

/**
 * Pure mapping from seeded content rows back to app `Topic`s. Exported for
 * tests; `loadSupabaseTopicBank` fetches the rows then delegates here.
 */
export function mapContentRows(rows: ContentRows): Topic[] {
  const curriculumByCode = new Map(rows.curriculum.map((c) => [c.code, c]));
  const lessonByTopicId = new Map(rows.lessons.map((l) => [l.topic_id, l]));
  const questionById = new Map(rows.questions.map((q) => [q.id, q]));
  const assignmentByTopicId = new Map(rows.assignments.map((a) => [a.topic_id, a]));

  return rows.topics.flatMap((row) => {
    const subject = LEARNING_AREA_TO_SUBJECT[row.learning_area];
    const year = row.curriculum_codes.map(yearFromCode).find((y): y is YearLevel => y !== null);
    if (!subject || !year) return [];

    const cd = row.curriculum_codes.map((code) => {
      const c = curriculumByCode.get(code);
      return { ac: code, state: c?.state_mapping ?? undefined };
    });

    const lesson = lessonByTopicId.get(row.id);
    const assignmentRow = assignmentByTopicId.get(row.id);
    const meta = parseJson<{ nominalCount?: number; compactCount?: number; questionIds?: string[] }>(
      assignmentRow?.questions_meta,
    );
    const questionIds = meta?.questionIds ?? [];
    const assignmentQuestions = questionIds
      .map((id) => questionById.get(id))
      .filter((q): q is QuestionRow => Boolean(q))
      .map((q) => ({
        id: q.id,
        type: (['mcq', 'short', 'ordering'].includes(q.type) ? q.type : 'short') as Topic['assignment']['questions'][number]['type'],
        prompt: q.prompt,
        options: (q.options as string[] | null) ?? undefined,
        answer: q.answer ?? '',
        difficulty: (q.difficulty as 1 | 2 | 3) ?? 1,
      }));

    const body = lesson ? parseJson<{ body?: string[]; illustrations?: unknown[]; learnTimeMin?: number }>(lesson.body_json) : undefined;

    return [
      {
        id: row.id,
        title: row.title,
        year,
        subject,
        strand: curriculumByCode.get(row.curriculum_codes[0])?.strand ?? '',
        cd,
        learn: body
          ? {
              body: body.body ?? [],
              illustrations: (body.illustrations ?? []) as Topic['learn']['illustrations'],
              learnTimeMin: body.learnTimeMin ?? 10,
            }
          : { body: [], illustrations: [], learnTimeMin: 10 },
        assignment: {
          questions: assignmentQuestions,
          nominalCount: meta?.nominalCount ?? row.nominal_questions,
          compactCount: meta?.compactCount ?? row.min_depth_questions,
        },
      },
    ];
  });
}

let cachedTopics: Topic[] | null = null;

export interface SupabaseContentResult {
  topics: Topic[];
  /** Human-readable error, e.g. missing session / not configured / fetch failure. */
  error?: string;
}

/**
 * Reconcile Supabase topic uuids back to the author-facing keys (e.g.
 * 'Y6-MAT-NN01') so `completedTopicIds` / badge refs stored against the local
 * banks keep matching. Matches on the stable (year, subject, title) triple;
 * any Supabase-only topic keeps its uuid.
 */
export function reconcileLocalIds(topics: Topic[]): Topic[] {
  const localByKey = new Map(
    allLocalTopics().map((t) => [`${t.year}|${t.subject}|${t.title}`, t.id]),
  );
  return topics.map((t) => ({
    ...t,
    id: localByKey.get(`${t.year}|${t.subject}|${t.title}`) ?? t.id,
  }));
}

/** Load the full content bank from Supabase. Cached after first success. */
export async function loadSupabaseTopicBank(): Promise<SupabaseContentResult> {
  if (cachedTopics) return { topics: cachedTopics };

  if (!supabase) {
    return { topics: [], error: 'Supabase is not configured.' };
  }
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return { topics: [], error: 'Sign in to load curriculum content.' };
  }

  const [curriculumRes, topicRes, lessonRes, questionRes, assignmentRes] = await Promise.all([
    supabase.from('curriculum').select('code, strand, state_mapping').limit(100000),
    supabase.from('topic').select('*').limit(100000),
    supabase.from('lesson').select('*').limit(100000),
    // PostgREST defaults to a 1000-row cap per request; the question bank is
    // ~4200 rows, so an un-capped select would silently drop most of them and
    // leave lessons with empty assignments.
    supabase.from('question').select('*').limit(100000),
    supabase.from('assignment').select('*').limit(100000),
  ]);

  const failed = [curriculumRes, topicRes, lessonRes, questionRes, assignmentRes].find(
    (r) => r.error
  );
  if (failed) {
    return { topics: [], error: failed.error?.message ?? 'Failed to load curriculum content.' };
  }

  const topics = mapContentRows({
    curriculum: (curriculumRes.data ?? []) as CurriculumRow[],
    topics: (topicRes.data ?? []) as TopicRow[],
    lessons: (lessonRes.data ?? []) as LessonRow[],
    questions: (questionRes.data ?? []) as QuestionRow[],
    assignments: (assignmentRes.data ?? []) as AssignmentRow[],
  });

  const reconciled = reconcileLocalIds(topics);

  cachedTopics = reconciled;
  setContentSource(reconciled);
  return { topics: reconciled };
}

/** Drop the cache and return content consumers to the local banks (e.g. sign-out). */
export function clearSupabaseTopicBankCache(): void {
  cachedTopics = null;
  setContentSource(null);
}
