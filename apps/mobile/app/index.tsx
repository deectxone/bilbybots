import { Redirect, useRouter } from 'expo-router';
import { HomeScreen } from '../src/screens/HomeScreen';
import { useApp } from '../src/state/AppContext';

export default function HomeRoute() {
  const router = useRouter();
  const { child, guest, authed, exitGuest, signOutUser } = useApp();

  if (!authed) return <Redirect href="/sign-in" />;

  return (
    <HomeScreen
      child={child}
      isGuest={guest}
      onOpenWeekPlan={() => router.replace(child ? '/week-plan' : '/onboarding')}
      onOpenNaplan={() => router.push('/naplan-hub')}
      onProgress={() => router.push(child ? '/progress' : '/onboarding')}
      onSetup={() => router.push('/setup')}
      onSignOut={async () => {
        await signOutUser();
        router.replace('/sign-in');
      }}
      onSignUp={
        guest
          ? () => {
              exitGuest();
              router.replace('/sign-in');
            }
          : undefined
      }
    />
  );
}
