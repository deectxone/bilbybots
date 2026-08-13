import { Redirect, useRouter } from 'expo-router';
import { LessonScreen } from '../src/screens/LessonScreen';
import { useApp } from '../src/state/AppContext';

export default function LessonRoute() {
  const router = useRouter();
  const {
    authed,
    child,
    activeTopic,
    activeQuestionCount,
    guest,
    markTopicStarted,
    markTopicCompleted,
    exitGuest,
    signOutUser,
  } = useApp();

  if (!authed) return <Redirect href="/sign-in" />;
  if (!child || !activeTopic) return <Redirect href="/" />;

  return (
    <LessonScreen
      child={child}
      topic={activeTopic}
      questionCount={activeQuestionCount}
      isGuest={guest}
      onSignUp={
        guest
          ? () => {
              exitGuest();
              router.replace('/sign-in');
            }
          : undefined
      }
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/week-plan'))}
      onHome={() => router.replace('/')}
      onProgress={() => router.push('/progress')}
      onSetup={() => router.push('/setup')}
      onSignOut={async () => {
        await signOutUser();
        router.replace('/sign-in');
      }}
      onTopicStarted={markTopicStarted}
      onTopicCompleted={markTopicCompleted}
    />
  );
}
