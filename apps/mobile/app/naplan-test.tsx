import { Redirect, useRouter } from 'expo-router';
import { NaplanTestScreen } from '../src/screens/NaplanTestScreen';
import { useApp } from '../src/state/AppContext';

export default function NaplanTestRoute() {
  const router = useRouter();
  const {
    authed,
    child,
    activeNaplan,
    guest,
    addNaplanResult,
    exitGuest,
    signOutUser,
  } = useApp();

  if (!authed) return <Redirect href="/sign-in" />;
  if (!activeNaplan) return <Redirect href="/naplan-hub" />;

  return (
    <NaplanTestScreen
      test={activeNaplan.test}
      child={child}
      onFinish={(result) => {
        if (guest) {
          exitGuest();
          router.replace('/sign-in');
          return;
        }
        addNaplanResult(result);
        router.replace('/naplan-hub');
      }}
      onExit={() => router.replace('/naplan-hub')}
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
