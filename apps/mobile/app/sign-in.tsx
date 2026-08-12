import { Redirect, useRouter } from 'expo-router';
import { SignInScreen } from '../src/screens/SignInScreen';
import { useApp } from '../src/state/AppContext';

export default function SignInRoute() {
  const router = useRouter();
  const { authed, enterGuest } = useApp();

  if (authed) return <Redirect href="/" />;

  return (
    <SignInScreen
      onSignedIn={() => router.replace('/')}
      onGuest={() => {
        enterGuest();
        router.replace('/lesson');
      }}
      onOpenDoc={(doc) => router.push(`/legal/${doc}`)}
    />
  );
}
