import { Redirect, useRouter } from 'expo-router';
import { NaplanHubScreen } from '../src/screens/NaplanHubScreen';
import { useApp } from '../src/state/AppContext';

export default function NaplanHubRoute() {
  const router = useRouter();
  const { authed, child, naplanResults, openNaplanTest, signOutUser } = useApp();

  if (!authed) return <Redirect href="/sign-in" />;

  return (
    <NaplanHubScreen
      child={child}
      results={naplanResults}
      onOpenTest={(year, domain) => {
        openNaplanTest(year, domain);
        router.push('/naplan-test');
      }}
      onHome={() => router.replace('/')}
      onProgress={() => router.push(child ? '/progress' : '/onboarding')}
      onSetup={() => router.push('/setup')}
      onSignOut={async () => {
        await signOutUser();
        router.replace('/sign-in');
      }}
    />
  );
}
