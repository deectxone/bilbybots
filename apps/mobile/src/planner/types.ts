import type { SubjectId, Topic, YearLevel } from '../types/curriculum';

/** Pedagogy knobs and calendar defaults (see docs/specs/adaptive-pacing.md §3). */
export interface PlannerConfig {
  /** Teaching weeks in the school year (term calendar). Default 40. */
  totalWeeks: number;
  /** Upper bound on topics per week (spec: default 1.5 → 3). */
  maxTopicsPerWeek: number;
  /** Depth floor per topic under compaction (spec: ≥ 5). */
  minQuestionBudgetPerTopic: number;
  /** Fixed subject rotation order used to interleave subjects. */
  subjectOrder: SubjectId[];
  /** Semantic algorithm version stored on every snapshot. */
  algorithmVersion: string;
}

export const DEFAULT_PLANNER_CONFIG: PlannerConfig = {
  totalWeeks: 40,
  maxTopicsPerWeek: 3,
  minQuestionBudgetPerTopic: 5,
  subjectOrder: ['english', 'mathematics', 'science', 'hass'],
  algorithmVersion: 'adaptive-pacing@1.0',
};

export interface PlanInput {
  year: YearLevel;
  /** Subjects in scope for this child (English + Maths core, + Science/HASS per tier). */
  subjects: SubjectId[];
  /** 1-based school week the child joins / re-plans from (1 = full-year join). */
  joinWeek: number;
  /** Curriculum variant (defaults to 'nsw'). Kept for the input hash. */
  state?: string;
  /** Topics already learned, excluded from the re-packed remainder (spec Step 5). */
  learnedTopicIds?: string[];
  /** Overrides for the pedagogy knobs above. */
  config?: Partial<PlannerConfig>;
}

/** One topic assigned to one school week, with its assignment budget. */
export interface PlanWeekEntry {
  topic: Topic;
  /** Question budget for this week: nominal at ideal pace, compact under pacing. */
  questionCount: number;
}

export interface PlanWeek {
  /** 1-based school week. */
  week: number;
  entries: PlanWeekEntry[];
}

export interface CoverageBreakdown {
  subject: SubjectId;
  inScope: number;
  covered: number;
  pct: number;
}

export interface CoverageSummary {
  inScope: number;
  covered: number;
  pct: number;
}

/** Immutable, versioned output of the planner (spec §4 Step 4). */
export interface PlanSnapshot {
  algorithmVersion: string;
  /** Deterministic hash of the normalized input + config (spec §5.4). */
  inputHash: string;
  input: {
    year: YearLevel;
    subjects: SubjectId[];
    state: string;
    joinWeek: number;
    learnedTopicIds: string[];
  };
  /** Effective pedagogy knobs used for this snapshot (the weekly cap is lifted
   *  to at least the number of subjects in scope, see planner.ts). */
  config: PlannerConfig;
  /** Subjects whose depth was compacted because their topics/week ratio c > 1. */
  compactedSubjects: SubjectId[];
  weeks: PlanWeek[];
  coverage: CoverageSummary;
  breakdown: CoverageBreakdown[];
}
