import { useLocalSearchParams, useRouter } from 'expo-router';
import { LegalScreen } from '../../src/screens/LegalScreen';
import { PRIVACY_DOC, TERMS_DOC, CONTACT_DOC } from '../../src/data/legal';
import { useApp } from '../../src/state/AppContext';

export default function LegalRoute() {
  const router = useRouter();
  const params = useLocalSearchParams<{ doc?: string }>();
  const { child, authed, signOutUser } = useApp();

  if (!params.doc) return null;
  const doc = params.doc === 'privacy' ? PRIVACY_DOC : params.doc === 'terms' ? TERMS_DOC : CONTACT_DOC;

  return (
    <LegalScreen
      doc={doc}
      child={child}
      onHome={() => router.replace(authed ? '/' : '/sign-in')}
      onProgress={() => router.push('/progress')}
      onSetup={() => (authed ? router.push('/setup') : router.replace('/sign-in'))}
      onSignOut={async () => {
        await signOutUser();
        router.replace('/sign-in');
      }}
    />
  );
}
