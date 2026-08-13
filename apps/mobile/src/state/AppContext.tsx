import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { Platform } from 'react-native';
import type { ChildProfile, Topic } from '../types/curriculum';
import type { NaplanDomain, NaplanResult, NaplanTest, NaplanYear } from '../types/naplan';
import { buildNaplanTest } from '../data/naplan/tests';
import { buildWeekPlan } from '../data/content';
import {
  clearPersistedState,
  loadPersistedState,
  savePersistedState,
  type PersistedAppState,
} from '../utils/persistence';
import { getCurrentSession, onAuthStateChange, supabase } from '../utils/supabase';
import { signOut } from '../utils/auth';
import { pullState, pushState, deleteFamilyData } from '../utils/sync';
import { clearSupabaseTopicBankCache, loadSupabaseTopicBank } from '../data/supabase-content';

/**
 * App-wide state lifted out of the old App.tsx mini-nav so expo-router routes
 * can share it: the child profile, progress (topics/badges/NAPLAN results),
 * the auth session + guest mode, and transient "active" lesson/test selections.
 *
 * Also owns hydration (AsyncStorage), auth tracking, and the Supabase pull /
 * debounced push mirror.
 */
interface AppContextValue {
  child: ChildProfile | null;
  completedTopicIds: string[];
  earnedBadges: string[];
  naplanResults: NaplanResult[];
  session: { email?: string } | null;
  guest: boolean;
  authReady: boolean;
  hydrated: boolean;
  /** True once the curriculum content source is ready (local banks, or Supabase loaded). */
  contentReady: boolean;
  activeTopic: Topic | null;
  activeQuestionCount?: number;
  activeNaplan: { year: NaplanYear; domain: NaplanDomain; test: NaplanTest } | null;
  /** Signed in with Google, or exploring as a guest. */
  authed: boolean;
  saveChild: (child: ChildProfile) => void;
  openTopic: (topic: Topic, questionCount?: number) => void;
  markTopicCompleted: (topic: Topic) => void;
  openNaplanTest: (year: NaplanYear, domain: NaplanDomain) => void;
  addNaplanResult: (result: NaplanResult) => void;
  resetAll: () => Promise<void>;
  signOutUser: () => Promise<void>;
  enterGuest: () => void;
  exitGuest: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [child, setChild] = useState<ChildProfile | null>(null);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [activeQuestionCount, setActiveQuestionCount] = useState<number | undefined>(undefined);
  const [activeNaplan, setActiveNaplan] = useState<AppContextValue['activeNaplan']>(null);
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>([]);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [naplanResults, setNaplanResults] = useState<NaplanResult[]>([]);
  const [session, setSession] = useState<{ email?: string } | null>(null);
  const [guest, setGuest] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [contentReady, setContentReady] = useState(true);

  const hydratedRef = useRef(false);
  const dbRef = useRef<{ familyId?: string; childId?: string; ownerUserId?: string }>({});
  const pushTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const didPullRef = useRef(false);
  /** True once the account's data has been pulled (or there was nothing to
   *  pull) — the debounced push waits for it so a freshly-signed-in device
   *  never creates a duplicate child row before adopting the account's own. */
  const [pullDone, setPullDone] = useState(false);

  // Hydrate persisted state (profile, progress, sync ids).
  useEffect(() => {
    let cancelled = false;
    loadPersistedState().then((state) => {
      if (cancelled) return;
      setChild(state.child);
      setCompletedTopicIds(state.completedTopicIds);
      setEarnedBadges(state.earnedBadges);
      setNaplanResults(state.naplanResults);
      dbRef.current = { familyId: state.dbFamilyId, childId: state.dbChildId, ownerUserId: state.dbOwnerUserId };
      hydratedRef.current = true;
      setHydrated(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Auth session: hydrate once, then track sign-in/out.
  useEffect(() => {
    let unsub: (() => void) | undefined;
    getCurrentSession().then((s) => {
      setSession(s ? { email: s.user.email } : null);
      setAuthReady(true);
    });
    unsub = onAuthStateChange((s) => setSession(s ? { email: s.user.email } : null));
    return () => unsub?.();
  }, []);

  // Persist to AsyncStorage on every change.
  useEffect(() => {
    if (!hydratedRef.current) return;
    const state: PersistedAppState = {
      version: 1,
      child,
      completedTopicIds,
      earnedBadges,
      naplanResults,
      dbFamilyId: dbRef.current.familyId,
      dbChildId: dbRef.current.childId,
      dbOwnerUserId: dbRef.current.ownerUserId,
    };
    savePersistedState(state);
  }, [child, completedTopicIds, earnedBadges, naplanResults, hydrated]);

  // When signed in, Supabase is the source of truth: adopt its data once.
  useEffect(() => {
    if (!hydratedRef.current) return;
    if (!session) {
      didPullRef.current = false;
      setPullDone(false);
      clearSupabaseTopicBankCache();
      setContentReady(true);
      return;
    }
    if (didPullRef.current) return;
    didPullRef.current = true;
    let cancelled = false;
    setContentReady(false);
    // Curriculum content is read-only for the app: load the seeded topic bank.
    loadSupabaseTopicBank().then(({ topics, error }) => {
      if (cancelled) return;
      if (!error && topics.length > 0) {
        console.log(`Loaded ${topics.length} topics from Supabase.`);
      } else if (error) {
        console.warn(`Supabase content load skipped: ${error}`);
      }
      setContentReady(true);
    });
    pullState()
      .then(({ state }) => {
        if (cancelled) return;
        if (state.child) {
          setChild(state.child);
          setCompletedTopicIds(state.completedTopicIds ?? []);
          setEarnedBadges(state.earnedBadges ?? []);
          setNaplanResults(state.naplanResults ?? []);
          dbRef.current = {
            familyId: state.dbFamilyId,
            childId: state.dbChildId,
            ownerUserId: state.dbOwnerUserId,
          };
        }
      })
      .finally(() => {
        if (!cancelled) setPullDone(true);
      });
    return () => {
      cancelled = true;
    };
  }, [hydrated, session]);

  /** Mirror the current local state to Supabase now (idempotent, gated on
   *  session + pull being done). Reused by the debounce and the page-hide
   *  flush so progress isn't lost when a tab closes right after an action. */
  const runPush = useCallback(async () => {
    if (!hydratedRef.current || !session || !supabase) return;
    if (pushTimer.current) {
      clearTimeout(pushTimer.current);
      pushTimer.current = null;
    }
    const result = await pushState({
      version: 1,
      child,
      completedTopicIds,
      earnedBadges,
      naplanResults,
      dbFamilyId: dbRef.current.familyId,
      dbChildId: dbRef.current.childId,
      dbOwnerUserId: dbRef.current.ownerUserId,
    });
    if (result.ok && result.dbChildId) {
      dbRef.current = {
        familyId: result.dbFamilyId,
        childId: result.dbChildId,
        ownerUserId: result.dbOwnerUserId ?? dbRef.current.ownerUserId,
      };
    }
  }, [session, child, completedTopicIds, earnedBadges, naplanResults]);

  // Debounced mirror of local state to Supabase while signed in.
  useEffect(() => {
    if (!hydratedRef.current || !session || !pullDone) return;
    if (pushTimer.current) clearTimeout(pushTimer.current);
    pushTimer.current = setTimeout(() => {
      void runPush();
    }, 800);
    return () => {
      if (pushTimer.current) clearTimeout(pushTimer.current);
    };
  }, [session, child, completedTopicIds, earnedBadges, naplanResults, pullDone, runPush]);

  // Flush a pending push when the web tab is hidden or closed, so the last
  // action (a completed topic, a finished test) is never stranded in the
  // debounce window.
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') return;
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') void runPush();
    };
    const onPageHide = () => void runPush();
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pagehide', onPageHide);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pagehide', onPageHide);
    };
  }, [runPush]);

  const saveChild = (c: ChildProfile) => setChild(c);

  const openTopic = (topic: Topic, questionCount?: number) => {
    setActiveTopic(topic);
    setActiveQuestionCount(questionCount);
  };

  const markTopicCompleted = (topic: Topic) => {
    setCompletedTopicIds((ids) => (ids.includes(topic.id) ? ids : [...ids, topic.id]));
    const badge = `${topic.title} star`;
    setEarnedBadges((badges) => (badges.includes(badge) ? badges : [...badges, badge]));
  };

  const openNaplanTest = (year: NaplanYear, domain: NaplanDomain) =>
    setActiveNaplan({ year, domain, test: buildNaplanTest(year, domain) });

  const addNaplanResult = (result: NaplanResult) => {
    setNaplanResults((results) => [result, ...results]);
    const badge = `${result.domain} practice star`;
    setEarnedBadges((badges) => (badges.includes(badge) ? badges : [...badges, badge]));
  };

  const resetAll = async () => {
    // A signed-in parent's "reset" really deletes their saved setup/progress
    // in Supabase too, otherwise the next sign-in pull resurrects it.
    if (session && supabase) {
      await deleteFamilyData();
    }
    await clearPersistedState();
    dbRef.current = {};
    setChild(null);
    setActiveTopic(null);
    setActiveQuestionCount(undefined);
    setActiveNaplan(null);
    setCompletedTopicIds([]);
    setEarnedBadges([]);
    setNaplanResults([]);
  };

  const signOutUser = async () => {
    // Flush any pending debounced push first — otherwise a sign-out right
    // after finishing setup/progress cancels the timer and that change is
    // never mirrored to Supabase, so the next sign-in pull can't find it.
    await runPush();
    await signOut();
    clearSupabaseTopicBankCache();
    dbRef.current = {};
    setGuest(false);
    setSession(null);
  };

  /** Guest mode: no account, a demo child + sample lesson to preview the app. */
  const enterGuest = () => {
    const demoChild: ChildProfile = {
      id: 'guest-demo',
      name: 'Sam',
      avatar: 'bilby-green',
      state: 'nsw',
      year: '6',
      subjects: ['mathematics', 'english'],
      joinWeek: 1,
      createdAt: new Date().toISOString(),
    };
    setChild(demoChild);
    setGuest(true);
    setContentReady(true);
    setCompletedTopicIds([]);
    setEarnedBadges([]);
    setNaplanResults([]);
    const sample = buildWeekPlan('6')[0] ?? null;
    if (sample) {
      setActiveTopic(sample);
      setActiveQuestionCount(sample.assignment.nominalCount);
    }
  };

  /** Return to the sign-in gate (e.g. guest hits a paywall / wants an account). */
  const exitGuest = () => {
    clearSupabaseTopicBankCache();
    setGuest(false);
    setChild(null);
    setActiveTopic(null);
    setActiveNaplan(null);
    setSession(null);
  };

  return (
    <AppContext.Provider
      value={{
        child,
        completedTopicIds,
        earnedBadges,
        naplanResults,
        session,
        guest,
        authReady,
        hydrated,
        contentReady,
        activeTopic,
        activeQuestionCount,
        activeNaplan,
        authed: Boolean(session) || guest,
        saveChild,
        openTopic,
        markTopicCompleted,
        openNaplanTest,
        addNaplanResult,
        resetAll,
        signOutUser,
        enterGuest,
        exitGuest,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
