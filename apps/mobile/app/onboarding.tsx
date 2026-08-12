import { Redirect, useRouter } from 'expo-router';
import { OnboardingScreen } from '../src/screens/OnboardingScreen';
import { useApp } from '../src/state/AppContext';

export default function OnboardingRoute() {
  const router = useRouter();
  const { authed, saveChild } = useApp();

  if (!authed) return <Redirect href="/sign-in" />;

  return (
    <OnboardingScreen
      onDone={(c) => {
        saveChild(c);
        router.replace('/week-plan');
      }}
    />
  );
}
