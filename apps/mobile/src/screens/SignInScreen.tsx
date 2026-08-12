import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { palette, radius, spacing, type, gradients } from '../theme/colors';
import { BilbyLogo } from '../components/BilbyLogo';
import { PrimaryButton } from '../components/PrimaryButton';
import { Icon } from '../components/illustrations/icons';
import { isAuthConfigured } from '../utils/supabase';
import { signInWithGoogle } from '../utils/auth';

/**
 * Google sign-in gate. Shown at launch when there's no Supabase session.
 * A parent signs in with their Google account; the family + child profiles
 * then live under that account (Supabase Auth + RLS).
 *
 * Footer links open in-app legal pages (Privacy, Terms, Contact) so the
 * sign-in screen doubles as a finished public landing for the product.
 */
export function SignInScreen({
  onSignedIn,
  onOpenDoc,
}: {
  onSignedIn: () => void;
  onOpenDoc: (doc: 'privacy' | 'terms' | 'contact') => void;
}) {
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
    <ScrollView contentContainerStyle={styles.root} style={styles.scroll} bounces={false}>
      <LinearGradient
        colors={[...gradients.hero]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <View style={styles.heroInner}>
          <BilbyLogo markSize={80} textSize={42} tone="light" />
          <Text style={styles.tagline}>A smarter weekly plan for your little learner</Text>
          <View style={styles.trustRow}>
            <View style={styles.trustChip}>
              <Icon name="check-box" tint={palette.white} size={14} />
              <Text style={styles.trustText}>Years 1–10</Text>
            </View>
            <View style={styles.trustChip}>
              <Icon name="map" tint={palette.white} size={14} />
              <Text style={styles.trustText}>Australian Curriculum</Text>
            </View>
            <View style={styles.trustChip}>
              <Icon name="lock" tint={palette.white} size={14} />
              <Text style={styles.trustText}>Parent-managed</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.card}>
        <Text style={styles.title}>Welcome, parent</Text>
        <Text style={styles.body}>
          Sign in with Google to set up your family's learning plans, keep
          progress in your account, and see how your child is tracking.
        </Text>

        {isAuthConfigured ? (
          <>
            <PrimaryButton
              disabled={busy}
              tone="berry"
              label={busy ? 'Opening Google…' : 'Sign in with Google'}
              icon="paw"
              onPress={go}
            />
            <Pressable
              onPress={onSignedIn}
              hitSlop={12}
              accessibilityRole="button"
              accessibilityLabel="Continue without signing in"
              style={styles.skip}
            >
              <Text style={styles.skipText}>Continue without signing in</Text>
            </Pressable>
          </>
        ) : (
          <View style={styles.notice}>
            <Icon name="cog" tint={palette.slate} size={20} />
            <Text style={styles.noticeText}>
              Sign-in is being set up for this release. You can still explore the
              app as a guest for now.
            </Text>
            <Pressable
              onPress={onSignedIn}
              accessibilityRole="button"
              accessibilityLabel="Explore as a guest"
              style={({ pressed }) => [styles.guestBtn, pressed && styles.pressed]}
            >
              <Text style={styles.guestBtnText}>Explore as a guest</Text>
            </Pressable>
          </View>
        )}

        {busy && <ActivityIndicator style={{ marginTop: spacing.lg }} color={palette.grape} />}
        {error && <Text style={styles.error}>{error}</Text>}
      </View>

      <View style={styles.legalRow}>
        <Pressable onPress={() => onOpenDoc('privacy')} hitSlop={8} accessibilityRole="link">
          <Text style={styles.legalLink}>Privacy</Text>
        </Pressable>
        <Text style={styles.legalDot}>·</Text>
        <Pressable onPress={() => onOpenDoc('terms')} hitSlop={8} accessibilityRole="link">
          <Text style={styles.legalLink}>Terms</Text>
        </Pressable>
        <Text style={styles.legalDot}>·</Text>
        <Pressable onPress={() => onOpenDoc('contact')} hitSlop={8} accessibilityRole="link">
          <Text style={styles.legalLink}>Contact</Text>
        </Pressable>
      </View>

      <Text style={styles.footnote}>
        Built for Australian families · content aligned to the Australian
        Curriculum (ACARA v9.0). Practice questions are original, NAPLAN-style
        items — not official NAPLAN tests.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: palette.cream },
  root: { paddingBottom: spacing.xl * 2, flexGrow: 1 },
  hero: { paddingTop: spacing.xl * 3, paddingBottom: spacing.xl * 2 },
  heroInner: { alignItems: 'center', paddingHorizontal: spacing.xl },
  tagline: {
    color: palette.white,
    fontSize: type.body,
    fontWeight: '600',
    marginTop: spacing.md,
    textAlign: 'center',
    maxWidth: 360,
  },
  trustRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: spacing.sm, marginTop: spacing.xl },
  trustChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    borderRadius: radius.pill,
    backgroundColor: palette.white + '22',
    borderWidth: 1,
    borderColor: palette.white + '55',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  trustText: { color: palette.white, fontSize: 13, fontWeight: '700' },
  card: {
    marginHorizontal: spacing.xl,
    marginTop: -spacing.lg,
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    shadowColor: palette.ink,
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 5,
  },
  title: { fontSize: type.h1, fontWeight: '900', color: palette.ink },
  body: { fontSize: 14, color: palette.slate, lineHeight: 22, marginTop: spacing.sm, marginBottom: spacing.lg },
  skip: { alignItems: 'center', marginTop: spacing.lg },
  skipText: { color: palette.slate, fontSize: 14, fontWeight: '700' },
  notice: {
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: palette.grape + '14',
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 2,
    borderColor: palette.grape + '33',
  },
  noticeText: { flex: 1, fontSize: 13, color: palette.ink, lineHeight: 19 },
  guestBtn: {
    alignSelf: 'stretch',
    marginTop: spacing.xs,
    backgroundColor: palette.grape,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  guestBtnText: { color: palette.white, fontSize: 15, fontWeight: '800' },
  pressed: { opacity: 0.8 },
  error: { color: palette.coral, fontSize: 13, fontWeight: '700', marginTop: spacing.md, textAlign: 'center' },
  legalRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  legalDot: { color: palette.slate, fontSize: 14 },
  legalLink: { color: palette.grape, fontSize: 14, fontWeight: '700' },
  footnote: {
    fontSize: type.caption,
    color: palette.slate,
    textAlign: 'center',
    marginTop: spacing.lg,
    paddingHorizontal: spacing.xl,
    lineHeight: 18,
  },
});
