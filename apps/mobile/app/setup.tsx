import { Redirect, useRouter } from 'expo-router';
import { OnboardingScreen } from '../src/screens/OnboardingScreen';
import { useApp } from '../src/state/AppContext';

export default function SetupRoute() {
  const router = useRouter();
  const { authed, child, saveChild, resetAll, signOutUser } = useApp();

  if (!authed) return <Redirect href="/sign-in" />;

  return (
    <OnboardingScreen
      initial={child ?? undefined}
      onDone={(c) => {
        saveChild(c);
        router.replace('/');
      }}
      onCancel={() => (router.canGoBack() ? router.back() : router.replace('/'))}
      onReset={async () => {
        await resetAll();
        router.replace('/');
      }}
      onSignOut={async () => {
        await signOutUser();
        router.replace('/sign-in');
      }}
      onOpenDoc={(doc) => router.push(`/legal/${doc}`)}
    />
  );
}
