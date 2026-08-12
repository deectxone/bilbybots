import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import type { ChildProfile, Topic } from './src/types/curriculum';
import type { NaplanDomain, NaplanResult, NaplanTest, NaplanYear } from './src/types/naplan';
import type { RootScreen } from './src/navigation/types';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { WeekPlanScreen } from './src/screens/WeekPlanScreen';
import { LessonScreen } from './src/screens/LessonScreen';
import { ProgressScreen } from './src/screens/ProgressScreen';
import { NaplanHubScreen } from './src/screens/NaplanHubScreen';
import { NaplanTestScreen } from './src/screens/NaplanTestScreen';
import { BilbyMascot } from './src/components/BilbyMascot';
import { BilbyLogo } from './src/components/BilbyLogo';
import { buildNaplanTest } from './src/data/naplan/tests';
import { buildWeekPlan } from './src/data/content';
import {
  clearPersistedState,
  emptyPersistedState,
  loadPersistedState,
  savePersistedState,
  type PersistedAppState,
} from './src/utils/persistence';
import { getCurrentSession, onAuthStateChange } from './src/utils/supabase';
import { signOut } from './src/utils/auth';
import { pullState, pushState } from './src/utils/sync';
import { SignInScreen } from './src/screens/SignInScreen';
import { AppFrame } from './src/components/AppFrame';
import { LegalScreen, type LegalDoc } from './src/screens/LegalScreen';
import { PRIVACY_DOC, TERMS_DOC, CONTACT_DOC } from './src/data/legal';
import { palette } from './src/theme/colors';

/**
 * BilbyBots mobile app (Expo/React Native + web via react-native-web).
 *
 * Facade root: a typed mini-navigator until a router is pulled in.
 * The real flow (docs/specs/product-spec.md):
 *   Google OAuth → family → child profile → planner snapshot → home.
 *
 * Home hosts the two learning tracks: the weekly plan and NAPLAN practice.
 * Progress (completed topics, badges, NAPLAN results) lives here, not
 * per-screen state, so "Home" and "Progress" are reachable from anywhere
 * without losing it.
 *
 * Persistence: the profile, completed topics, badges and NAPLAN results are
 * hydrated from AsyncStorage on launch (a small splash while that resolves)
 * and auto-saved on every change. "Setup" (gear in the header) edits the
 * profile or resets all saved data.
 */
export default function App() {
  const [screen, setScreen] = useState<RootScreen>('Home');
  const [child, setChild] = useState<ChildProfile | null>(null);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [activeNaplan, setActiveNaplan] = useState<{ year: NaplanYear; domain: NaplanDomain; test: NaplanTest } | null>(null);
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>([]);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [naplanResults, setNaplanResults] = useState<NaplanResult[]>([]);
  const [session, setSession] = useState<{ email?: string } | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [legalDoc, setLegalDoc] = useState<LegalDoc | null>(null);
  const [guest, setGuest] = useState(false);

  const hydratedRef = useRef(false);
  const dbRef = useRef<{ familyId?: string; childId?: string; ownerUserId?: string }>({});

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

  // Google auth session: hydrate once, then track sign-in/out.
  useEffect(() => {
    let unsub: (() => void) | undefined;
    getCurrentSession().then((s) => {
      setSession(s ? { email: s.user.email } : null);
      setAuthReady(true);
    });
    unsub = onAuthStateChange((s) => setSession(s ? { email: s.user.email } : null));
    return () => unsub?.();
  }, []);

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

  // When signed in, Supabase is the source of truth for this account: adopt its
  // child + progress once per sign-in, falling back to local state when empty.
  useEffect(() => {
    if (!hydratedRef.current || !session) return;
    let cancelled = false;
    pullState().then(({ state, error }) => {
      if (cancelled || !state.child) return;
      setChild(state.child);
      setCompletedTopicIds(state.completedTopicIds ?? []);
      setEarnedBadges(state.earnedBadges ?? []);
      setNaplanResults(state.naplanResults ?? []);
      dbRef.current = {
        familyId: state.dbFamilyId,
        childId: state.dbChildId,
        ownerUserId: state.dbOwnerUserId,
      };
    });
    return () => {
      cancelled = true;
    };
  }, [hydrated, session]);

  // Debounced mirror of local state to Supabase while signed in.
  const pushTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!hydratedRef.current || !session) return;
    if (pushTimer.current) clearTimeout(pushTimer.current);
    pushTimer.current = setTimeout(async () => {
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
    }, 800);
    return () => {
      if (pushTimer.current) clearTimeout(pushTimer.current);
    };
  }, [session, child, completedTopicIds, earnedBadges, naplanResults]);

  const goHome = () => {
    setLegalDoc(null);
    setScreen('Home');
  };
  const goProgress = () => {
    setLegalDoc(null);
    setScreen(child ? 'Progress' : 'Onboarding');
  };
  const goNaplanHub = () => {
    setLegalDoc(null);
    setScreen('NaplanHub');
  };
  const goSetup = () => {
    setLegalDoc(null);
    setScreen('Setup');
  };

  const resetAll = async () => {
    await clearPersistedState();
    dbRef.current = {};
    setChild(null);
    setActiveTopic(null);
    setActiveNaplan(null);
    setCompletedTopicIds([]);
    setEarnedBadges([]);
    setNaplanResults([]);
    setScreen('Home');
  };

  const handleSignOut = async () => {
    await signOut();
    dbRef.current = {};
    setGuest(false);
    setSession(null);
    setScreen('Home');
  };

  /** Guest mode: no account, a demo child + sample lesson to preview the app. */
  const enterGuestMode = () => {
    const demoChild: ChildProfile = {
      id: 'guest-demo',
      name: 'Sam',
      avatar: 'bilby-green',
      state: 'nsw',
      year: '6',
      subjects: ['mathematics', 'english'],
      createdAt: new Date().toISOString(),
    };
    setChild(demoChild);
    setGuest(true);
    setCompletedTopicIds([]);
    setEarnedBadges([]);
    setNaplanResults([]);
    const sample = buildWeekPlan('6')[0] ?? null;
    if (sample) {
      setActiveTopic(sample);
      setScreen('Lesson');
    } else {
      setScreen('Home');
    }
  };

  /** Return to the sign-in gate (e.g. guest hits a paywall / wants an account). */
  const exitGuest = () => {
    setGuest(false);
    setChild(null);
    setActiveTopic(null);
    setActiveNaplan(null);
    setSession(null);
    setScreen('Home');
  };

  // Google OAuth gate: wait for both local persistence and the auth session
  // to resolve before showing anything, then require a sign-in (guest "skip"
  // is available until real auth config exists, see SignInScreen).
  if (!hydrated || !authReady) {
    return (
      <AppFrame>
        <View style={{ flex: 1, backgroundColor: palette.cream, alignItems: 'center', justifyContent: 'center' }}>
          <BilbyLogo markSize={64} textSize={32} />
        </View>
      </AppFrame>
    );
  }

  if (!session) {
    if (legalDoc) {
      return (
        <AppFrame>
          <View style={{ flex: 1 }}>
            <StatusBar style="dark" />
            <LegalScreen child={child} doc={legalDoc} onHome={() => setLegalDoc(null)} onProgress={() => setLegalDoc(null)} onSetup={() => setLegalDoc(null)} onSignOut={() => setLegalDoc(null)} />
          </View>
        </AppFrame>
      );
    }
    return (
      <AppFrame>
        <View style={{ flex: 1 }}>
          <StatusBar style="dark" />
          <SignInScreen
            onSignedIn={() => setScreen('Home')}
            onGuest={enterGuestMode}
            onOpenDoc={(doc) => setLegalDoc(doc === 'privacy' ? PRIVACY_DOC : doc === 'terms' ? TERMS_DOC : CONTACT_DOC)}
          />
        </View>
      </AppFrame>
    );
  }

  return (
    <AppFrame>
      <View style={{ flex: 1 }}>
        <StatusBar style="dark" />
        {legalDoc ? (
        <LegalScreen
          child={child}
          doc={legalDoc}
          onHome={goHome}
          onProgress={goProgress}
          onSetup={goSetup}
          onSignOut={handleSignOut}
        />
      ) : (
        <>
      {screen === 'Onboarding' && (
        <OnboardingScreen
          onDone={(c) => {
            setChild(c);
            setScreen('WeekPlan');
          }}
        />
      )}
      {screen === 'Setup' && (
        <OnboardingScreen
          initial={child ?? undefined}
          onDone={(c) => {
            setChild(c);
            setScreen('Home');
          }}
          onCancel={goHome}
          onReset={resetAll}
          onSignOut={handleSignOut}
          onOpenDoc={(doc) => setLegalDoc(doc === 'privacy' ? PRIVACY_DOC : doc === 'terms' ? TERMS_DOC : CONTACT_DOC)}
        />
      )}
      {screen === 'Home' && (
        <HomeScreen
          child={child}
          isGuest={guest}
          onOpenWeekPlan={() => setScreen(child ? 'WeekPlan' : 'Onboarding')}
          onOpenNaplan={goNaplanHub}
          onProgress={goProgress}
          onSetup={goSetup}
          onSignOut={handleSignOut}
          onSignUp={guest ? exitGuest : undefined}
        />
      )}
      {screen === 'WeekPlan' && child && (
        <WeekPlanScreen
          child={child}
          completedTopicIds={completedTopicIds}
          onOpenTopic={(t) => {
            setActiveTopic(t);
            setScreen('Lesson');
          }}
          onHome={goHome}
          onProgress={goProgress}
          onSetup={goSetup}
          onSignOut={handleSignOut}
        />
      )}
      {screen === 'Lesson' && child && activeTopic && (
        <LessonScreen
          child={child}
          topic={activeTopic}
          isGuest={guest}
          onSignUp={guest ? exitGuest : undefined}
          onBack={() => setScreen('WeekPlan')}
          onHome={goHome}
          onProgress={goProgress}
          onSetup={goSetup}
          onSignOut={handleSignOut}
          onTopicCompleted={(topic) => {
            setCompletedTopicIds((ids) => (ids.includes(topic.id) ? ids : [...ids, topic.id]));
            const badge = `${topic.title} star`;
            setEarnedBadges((badges) => (badges.includes(badge) ? badges : [...badges, badge]));
          }}
        />
      )}
      {screen === 'Progress' && child && (
        <ProgressScreen
          child={child}
          completedTopicIds={completedTopicIds}
          earnedBadges={earnedBadges}
          onHome={goHome}
          onSetup={goSetup}
          onSignOut={handleSignOut}
        />
      )}
      {screen === 'NaplanHub' && (
        <NaplanHubScreen
          child={child}
          results={naplanResults}
          onOpenTest={(year, domain) => {
            const test = buildNaplanTest(year, domain);
            setActiveNaplan({ year, domain, test });
            setScreen('NaplanTest');
          }}
          onHome={goHome}
          onProgress={goProgress}
          onSetup={goSetup}
          onSignOut={handleSignOut}
        />
      )}
      {screen === 'NaplanTest' && activeNaplan && (
        <NaplanTestScreen
          test={activeNaplan.test}
          child={child}
          onFinish={(result) => {
            if (guest) {
              exitGuest();
              return;
            }
            setNaplanResults((results) => [result, ...results]);
            const badge = `${result.domain} practice star`;
            setEarnedBadges((badges) => (badges.includes(badge) ? badges : [...badges, badge]));
          }}
          onExit={goNaplanHub}
          onHome={goHome}
          onProgress={goProgress}
          onSetup={goSetup}
          onSignOut={handleSignOut}
        />
      )}
        </>
      )}
      <BilbyMascot />
      </View>
    </AppFrame>
  );
}
