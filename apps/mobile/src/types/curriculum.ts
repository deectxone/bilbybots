/**
 * Core curriculum-facing types.
 *
 * These mirror the authoring schema in `docs/content/year-6/README.md` so the
 * ingestion pipeline (ACARA MRAC → Postgres) can map 1:1 onto the app.
 * Provenance (the acara `AC9xxxxx` codes) is NEVER dropped.
 */
import type { IconName } from '../components/illustrations/icons';

export type YearLevel =
  | 'K'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10';

export type SubjectId = 'mathematics' | 'english' | 'science' | 'hass';

export interface CurriculumCode {
  /** Australian Curriculum v9.0 content description id, e.g. AC9M6N01 */
  ac: string;
  /** Optional state outcome refs, e.g. { nsa: 'MA2-4NA-01' } */
  state?: Record<string, string>;
}

/**
 * A vector diagram the app can render itself (no external asset needed).
 * `params` is a discriminated union keyed by `kind`, see
 * `src/components/illustrations/diagrams.tsx` for the renderer per kind.
 */
export type DiagramSpec =
  | { kind: 'number-line'; min: number; max: number; step?: number; marks: { value: number; label: string }[] }
  | { kind: 'pie-fraction'; pies: { slices: number; filled: number; label: string }[] }
  | { kind: 'fraction-bar'; bars: { segments: number; filled: number; label: string }[] }
  | { kind: 'place-value'; digits: string; labels: string[] }
  | { kind: 'thermometer'; min: number; max: number; value: number; unit: string }
  | { kind: 'bar-compare'; unit?: string; items: { label: string; value: number }[] }
  | { kind: 'dot-plot'; values: number[]; unit?: string }
  | { kind: 'quadrant-grid'; points: { x: number; y: number; label: string }[]; range?: number }
  | { kind: 'balance-scale'; left: string; right: string; balanced: boolean }
  | { kind: 'metric-ladder'; units: string[]; highlight: number }
  | { kind: 'rectangle-area'; length: number; width: number; unit: string }
  | { kind: 'angle-diagram'; style: 'point' | 'straight' | 'vertical'; angles: number[] }
  | { kind: 'probability-scale'; markers: { value: number; label: string }[] }
  | { kind: 'dot-array'; rows: number; cols: number; label: string }
  | { kind: 'flowchart'; steps: { text: string; decision?: boolean }[] }
  | { kind: 'icon-scene'; items: { icon: IconName; label?: string }[]; caption: string };

export interface IllustrationSlot {
  /** one-line description feeding the Phase-1 illustration pipeline (and Phase-2 video) */
  brief: string;
  /** true after the asset is produced & reviewed */
  ready: boolean;
  /** Structured diagram the app renders as real vector art (Phase-1). Omit to fall back to the "pending" placeholder. */
  diagram?: DiagramSpec;
}

export interface Lesson {
  /** Kid-friendly, sentence-safe markdown-ish text (vibrant, warm) */
  body: string[];
  illustrations: IllustrationSlot[];
  learnTimeMin: number;
}

export type QuestionType = 'mcq' | 'short' | 'ordering';

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  /** correct answer; never shipped means a human wrote+reviewed it */
  answer: string;
  difficulty: 1 | 2 | 3;
}

export interface Assignment {
  questions: Question[];
  /** question budget @ ideal pace */
  nominalCount: number;
  /** question budget when adaptive pacing compresses this week */
  compactCount: number;
}

export interface Topic {
  /** e.g. Y6-MAT-NN01, same id as the topic index docs */
  id: string;
  title: string;
  year: YearLevel;
  subject: SubjectId;
  strand: string;
  cd: CurriculumCode[];
  learn: Lesson;
  assignment: Assignment;
  /** Phase-2: URL once rendered & reviewed from video-prompts markup */
  videoUrl?: string;
  sensitivity?: boolean;
}

export interface WeekPlan {
  weekIndex: number;
  subject: SubjectId;
  topics: Topic[];
  questionCount: number;
}

export interface ChildProfile {
  id: string;
  name: string;
  avatar: string;
  state: string;
  year: YearLevel;
  /** subjects selected for this child (secondary years default 4-core) */
  subjects: SubjectId[];
  createdAt: string;
}

export const YEAR_LEVELS: Readonly<YearLevel[]> = [
  'K',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
];