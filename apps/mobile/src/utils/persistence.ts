import AsyncStorage from '@react-native-async-storage/async-storage';
import type { ChildProfile } from '../types/curriculum';
import type { NaplanResult } from '../types/naplan';

/**
 * Key-value persistence for the app's client-side state.
 *
 * Backed by AsyncStorage (Expo SDK 57) so data survives reloads on native
 * AND web. Everything lives under one versioned key so schema migrations are
 * a single bump + sanitise; a corrupt or unknown payload degrades to the
 * empty default rather than crashing.
 *
 * Persisted state (mirrors App.tsx):
 *   - child profile (name/year/state/subjects)
 *   - lesson-started + completed topics + earned badges (weekly plan)
 *   - practice test scores, for the subject-pill fill/star indicators
 *   - NAPLAN results
 * "Reset" clears the whole key.
 */
export interface TopicScore {
  correct: number;
  total: number;
}

export interface PersistedAppState {
  version: 1;
  child: ChildProfile | null;
  /** Topics where the child has read the lesson and reached the practice
   *  test (the week-plan subject pill's 50%-fill stage). Superseded by
   *  `completedTopicIds` once the practice test is finished. */
  startedTopicIds: string[];
  completedTopicIds: string[];
  /** Practice test result per completed topic, for the pill's star badge. */
  topicScores: Record<string, TopicScore>;
  earnedBadges: string[];
  naplanResults: NaplanResult[];
  /** Supabase ids of the synced family/child + the account that owns them. */
  dbFamilyId?: string;
  dbChildId?: string;
  dbOwnerUserId?: string;
}

const STORAGE_KEY = 'bilbybots:app-state:v1';

export function emptyPersistedState(): PersistedAppState {
  return {
    version: 1,
    child: null,
    startedTopicIds: [],
    completedTopicIds: [],
    topicScores: {},
    earnedBadges: [],
    naplanResults: [],
  };
}

/** Load and validate persisted state. Never throws, worst case returns empty. */
export async function loadPersistedState(): Promise<PersistedAppState> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyPersistedState();
    return sanitise(JSON.parse(raw));
  } catch {
    return emptyPersistedState();
  }
}

/** Persist current state. Fire-and-forget; write failures are non-fatal. */
export async function savePersistedState(state: PersistedAppState): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Non-fatal: the app keeps working in-memory; the next save retries.
  }
}

/** Wipe all saved data (setup → "Reset"). */
export async function clearPersistedState(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch {
    // Non-fatal.
  }
}

function isChild(value: unknown): value is ChildProfile {
  if (!value || typeof value !== 'object') return false;
  const c = value as Record<string, unknown>;
  return (
    typeof c.id === 'string' &&
    typeof c.name === 'string' &&
    typeof c.avatar === 'string' &&
    typeof c.state === 'string' &&
    typeof c.year === 'string' &&
    typeof c.createdAt === 'string' &&
    Array.isArray(c.subjects) &&
    c.subjects.every((s) => typeof s === 'string')
  );
}

function isNaplanResult(value: unknown): value is NaplanResult {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r.testId === 'string' &&
    typeof r.domain === 'string' &&
    typeof r.year === 'string' &&
    (r.mode === 'practice' || r.mode === 'timed') &&
    typeof r.correct === 'number' &&
    typeof r.total === 'number' &&
    typeof r.completedAt === 'string' &&
    typeof r.answers === 'object' &&
    r.answers !== null
  );
}

/** Coerce an unknown parsed payload into a safe `PersistedAppState`. */
function sanitise(raw: unknown): PersistedAppState {
  const base = emptyPersistedState();
  if (!raw || typeof raw !== 'object') return base;
  const r = raw as Record<string, unknown>;

  const strings = (value: unknown): string[] =>
    Array.isArray(value) ? value.filter((x): x is string => typeof x === 'string') : [];

  const rawChild = isChild(r.child) ? r.child : null;

  const topicScores: Record<string, TopicScore> = {};
  if (r.topicScores && typeof r.topicScores === 'object') {
    for (const [id, value] of Object.entries(r.topicScores as Record<string, unknown>)) {
      if (isTopicScore(value)) topicScores[id] = value;
    }
  }

  return {
    version: 1,
    child: rawChild
      ? {
          ...rawChild,
          joinWeek: typeof rawChild.joinWeek === 'number' && rawChild.joinWeek >= 1 ? rawChild.joinWeek : 1,
          replanned: rawChild.replanned ?? false,
        }
      : null,
    startedTopicIds: strings(r.startedTopicIds),
    completedTopicIds: strings(r.completedTopicIds),
    topicScores,
    earnedBadges: strings(r.earnedBadges),
    naplanResults: Array.isArray(r.naplanResults) ? r.naplanResults.filter(isNaplanResult) : [],
    dbFamilyId: typeof r.dbFamilyId === 'string' ? r.dbFamilyId : undefined,
    dbChildId: typeof r.dbChildId === 'string' ? r.dbChildId : undefined,
    dbOwnerUserId: typeof r.dbOwnerUserId === 'string' ? r.dbOwnerUserId : undefined,
  };
}

function isTopicScore(value: unknown): value is TopicScore {
  if (!value || typeof value !== 'object') return false;
  const s = value as Record<string, unknown>;
  return typeof s.correct === 'number' && typeof s.total === 'number';
}
