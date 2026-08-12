import { Redirect, useRouter } from 'expo-router';
import { WeekPlanScreen } from '../src/screens/WeekPlanScreen';
import { useApp } from '../src/state/AppContext';

export default function WeekPlanRoute() {
  const router = useRouter();
  const { authed, child, completedTopicIds, openTopic, signOutUser } = useApp();

  if (!authed) return <Redirect href="/sign-in" />;
  if (!child) return <Redirect href="/" />;

  return (
    <WeekPlanScreen
      child={child}
      completedTopicIds={completedTopicIds}
      onOpenTopic={(topic, questionCount) => {
        openTopic(topic, questionCount);
        router.push('/lesson');
      }}
      onHome={() => router.replace('/')}
      onProgress={() => router.push('/progress')}
      onSetup={() => router.push('/setup')}
      onSignOut={async () => {
        await signOutUser();
        router.replace('/sign-in');
      }}
    />
  );
}
