import { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { palette, radius, spacing } from '../theme/colors';
import { BilbyLogo } from '../components/BilbyLogo';
import { PrimaryButton } from '../components/PrimaryButton';
import { Icon } from '../components/illustrations/icons';
import { isAuthConfigured } from '../utils/supabase';
import { signInWithGoogle } from '../utils/auth';

/**
 * Google sign-in gate. Shown at launch when there's no Supabase session.
 * A parent signs in with their Google account; the family + child profiles
 * then live under that account (Supabase Auth + RLS).
 */
export function SignInScreen({ onSignedIn }: { onSignedIn: () => void }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const go = async () => {
    if (busy) return;
    setBusy(true);
    setError(null);
    const result = await signInWithGoogle();
    setBusy(false);
    if (result.ok) {
      onSignedIn();
    } else {
      setError(result.error);
    }
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={[palette.teal, palette.sky]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <BilbyLogo markSize={72} textSize={40} tone="light" />
        <Text style={styles.tagline}>A smarter weekly plan for your little learner</Text>
      </LinearGradient>

      <View style={styles.card}>
        <Text style={styles.title}>Welcome, parent</Text>
        <Text style={styles.body}>
          Sign in with Google to set up your family's learning plans and keep
          progress safe in your account.
        </Text>

        {!isAuthConfigured ? (
          <View style={styles.notice}>
            <Icon name="cog" tint={palette.coral} size={20} />
            <Text style={styles.noticeText}>
              Auth isn't configured yet. Add EXPO_PUBLIC_SUPABASE_URL and
              EXPO_PUBLIC_SUPABASE_ANON_KEY to .env — see docs/specs/auth-setup.md.
            </Text>
          </View>
        ) : (
          <PrimaryButton
            disabled={busy}
            tone="coral"
            label={busy ? 'Opening Google…' : 'Sign in with Google'}
            icon="paw"
            onPress={go}
          />
        )}

        {busy && <ActivityIndicator style={{ marginTop: spacing.lg }} color={palette.teal} />}

        {error && <Text style={styles.error}>{error}</Text>}
      </View>

      <Pressable onPress={onSignedIn} hitSlop={12} style={styles.skip}>
        <Text style={styles.skipText}>Skip for now — explore as a guest</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.cream },
  hero: {
    paddingTop: spacing.xl * 3,
    paddingBottom: spacing.xl * 2,
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  tagline: { color: palette.white, fontSize: 16, opacity: 0.95, marginTop: spacing.md, textAlign: 'center' },
  card: {
    marginHorizontal: spacing.xl,
    marginTop: -spacing.lg,
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    shadowColor: palette.ink,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 14,
    elevation: 4,
  },
  title: { fontSize: 22, fontWeight: '900', color: palette.ink },
  body: { fontSize: 14, color: palette.slate, lineHeight: 21, marginTop: spacing.sm, marginBottom: spacing.lg },
  notice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: palette.coral + '14',
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 2,
    borderColor: palette.coral + '44',
  },
  noticeText: { flex: 1, fontSize: 12, color: palette.ink, lineHeight: 18 },
  error: { color: palette.coral, fontSize: 13, fontWeight: '700', marginTop: spacing.md, textAlign: 'center' },
  skip: { alignItems: 'center', marginTop: spacing.xl },
  skipText: { color: palette.slate, fontSize: 14, fontWeight: '700' },
});
