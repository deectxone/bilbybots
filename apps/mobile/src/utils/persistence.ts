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
 *   - completed topics + earned badges (weekly plan)
 *   - NAPLAN results
 * "Reset" clears the whole key.
 */
export interface PersistedAppState {
  version: 1;
  child: ChildProfile | null;
  completedTopicIds: string[];
  earnedBadges: string[];
  naplanResults: NaplanResult[];
}

const STORAGE_KEY = 'bilbybots:app-state:v1';

export function emptyPersistedState(): PersistedAppState {
  return {
    version: 1,
    child: null,
    completedTopicIds: [],
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

  return {
    version: 1,
    child: isChild(r.child) ? r.child : null,
    completedTopicIds: strings(r.completedTopicIds),
    earnedBadges: strings(r.earnedBadges),
    naplanResults: Array.isArray(r.naplanResults) ? r.naplanResults.filter(isNaplanResult) : [],
  };
}
