import { Redirect, useRouter } from 'expo-router';
import { ProgressScreen } from '../src/screens/ProgressScreen';
import { useApp } from '../src/state/AppContext';

export default function ProgressRoute() {
  const router = useRouter();
  const { authed, child, completedTopicIds, earnedBadges, signOutUser } = useApp();

  if (!authed) return <Redirect href="/sign-in" />;
  if (!child) return <Redirect href="/" />;

  return (
    <ProgressScreen
      child={child}
      completedTopicIds={completedTopicIds}
      earnedBadges={earnedBadges}
      onHome={() => router.replace('/')}
      onSetup={() => router.push('/setup')}
      onSignOut={async () => {
        await signOutUser();
        router.replace('/sign-in');
      }}
    />
  );
}
