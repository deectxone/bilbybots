import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { chrome, palette, radius, spacing, type } from '../theme/colors';
import { AppHeader } from '../components/AppHeader';
import { AppFooter } from '../components/AppFooter';
import { FloatingDots } from '../components/FloatingDots';
import { PrimaryButton } from '../components/PrimaryButton';
import { Icon, type IconName } from '../components/illustrations/icons';
import { HeroPark } from '../components/HeroPark';
import { ResponsiveColumn } from '../components/ResponsiveColumn';
import { isAuthConfigured } from '../utils/supabase';
import { signInWithGoogle } from '../utils/auth';

/**
 * Google sign-in gate, styled as the product landing page: a photographic
 * hero band (kids learning in a sunny park), headline, feature rows, trust
 * chips, CTA and the universal AppFooter. Uses the same dark header and
 * footer as every other screen.
 */
export function SignInScreen({
  onSignedIn,
  onGuest,
}: {
  onSignedIn: () => void;
  /** Explore without an account, sample lesson + one practice test, then sign-up prompt. */
  onGuest: () => void;
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

  const features: { icon: IconName; title: string; body: string }[] = [
    {
      icon: 'map',
      title: 'A weekly plan, built for your child',
      body: 'Lessons and practice arranged week by week, aligned to your child\u2019s school year.',
    },
    {
      icon: 'book',
      title: 'Aligned to the Australian Curriculum',
      body: 'Every topic maps to ACARA v9.0 content descriptions, NSW first, then QLD, VIC, WA.',
    },
    {
      icon: 'brain',
      title: 'NAPLAN-style practice',
      body: 'Original timed practice in the real NAPLAN format for Years 3, 5, 7 and 9.',
    },
    {
      icon: 'lock',
      title: 'Safe and parent-managed',
      body: 'A parent controls each child profile and every piece of saved data.',
    },
  ];

  return (
    <View style={styles.screen}>
      <AppHeader onHome={() => {}} />
      <FloatingDots tone="dark" count={36} sizeRange={[6, 26]} maxOpacity={0.12} />
      <ScrollView contentContainerStyle={styles.root} style={styles.scroll} bounces={false}>
        <HeroPark>
          <View style={styles.heroText}>
            <Text style={styles.headline}>
              A smarter weekly plan for {'\n'}
              <Text style={styles.headlineAccent}>every young learner</Text>
            </Text>
            <Text style={styles.sub}>
              BilbyBots helps Australian kids in Years 1–10 stay on track, with
              lessons, badges and practice that fit their school year.
            </Text>
          </View>

          <View style={styles.welcome}>
            <Text style={styles.welcomeEyebrow}>Parent sign-in</Text>
            <Text style={styles.welcomeTitle}>Welcome</Text>
            <Text style={styles.welcomeBody}>
              Sign in with Google to set up your family's learning plans and keep
              progress safe in your account.
            </Text>

            {isAuthConfigured ? (
              <>
                <PrimaryButton
                  disabled={busy}
                  tone="header"
                  label={busy ? 'Opening Google…' : 'Sign in with Google'}
                  onPress={go}
                />
                <Pressable
                  onPress={onGuest}
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
                  onPress={onGuest}
                  accessibilityRole="button"
                  accessibilityLabel="Explore as a guest"
                  style={({ pressed }) => [styles.guestBtn, pressed && styles.pressed]}
                >
                  <Text style={styles.guestBtnText}>Explore as a guest</Text>
                </Pressable>
              </View>
            )}

            {busy && <ActivityIndicator style={{ marginTop: spacing.lg }} color={chrome.primary} />}
            {error && <Text style={styles.error}>{error}</Text>}
          </View>
        </HeroPark>

        <ResponsiveColumn>
      <View style={styles.features}>
        {features.map((f) => (
          <View key={f.title} style={styles.feature}>
            <View style={styles.featureIcon}>
              <Icon name={f.icon} tint={chrome.primary} size={20} />
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>{f.title}</Text>
              <Text style={styles.featureBody}>{f.body}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.trustRow}>
        <View style={styles.trustChip}>
          <Icon name="check-box" tint={chrome.primary} size={14} />
          <Text style={styles.trustText}>Years 1–10</Text>
        </View>
        <View style={styles.trustChip}>
          <Icon name="map" tint={chrome.primary} size={14} />
          <Text style={styles.trustText}>Australian Curriculum</Text>
        </View>
        <View style={styles.trustChip}>
          <Icon name="lock" tint={chrome.primary} size={14} />
          <Text style={styles.trustText}>Parent-managed</Text>
        </View>
      </View>
        </ResponsiveColumn>

        <AppFooter />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.cream, zIndex: 0 },
  scroll: { flex: 1 },
  root: { paddingBottom: spacing.xl * 2, flexGrow: 1 },
  heroText: { alignItems: 'center', marginTop: spacing.sm },
  headline: {
    fontSize: type.h1 + 14,
    lineHeight: 50,
    fontWeight: '900',
    color: palette.ink,
    textAlign: 'center',
  },
  headlineAccent: { color: palette.header },
  sub: {
    color: palette.ink,
    fontSize: type.body,
    lineHeight: 23,
    marginTop: spacing.md,
    textAlign: 'center',
    maxWidth: 420,
    opacity: 1,
  },
  welcome: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 480,
    alignItems: 'stretch',
  },
  welcomeEyebrow: {
    fontSize: type.caption,
    fontWeight: '800',
    color: chrome.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  welcomeTitle: { fontSize: type.h1, fontWeight: '900', color: palette.ink, marginTop: spacing.xs, textAlign: 'center' },
  welcomeBody: {
    fontSize: 14,
    color: palette.ink,
    lineHeight: 22,
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  skip: { alignItems: 'center', marginTop: spacing.lg },
  skipText: { color: palette.slate, fontSize: 14, fontWeight: '700' },
  notice: {
    alignItems: 'flex-start',
    gap: spacing.sm,
    backgroundColor: chrome.primary + '14',
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 2,
    borderColor: chrome.primary + '33',
  },
  noticeText: { flex: 1, fontSize: 13, color: palette.ink, lineHeight: 19 },
  guestBtn: {
    alignSelf: 'stretch',
    marginTop: spacing.xs,
    backgroundColor: chrome.primary,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  guestBtnText: { color: palette.white, fontSize: 15, fontWeight: '800' },
  pressed: { opacity: 0.8 },
  error: { color: palette.coral, fontSize: 13, fontWeight: '700', marginTop: spacing.md, textAlign: 'center' },
  features: { paddingHorizontal: spacing.xl, marginTop: spacing.xl, gap: spacing.md },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: palette.white + 'd9',
    borderRadius: radius.pill,
    padding: spacing.md,
  },
  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    backgroundColor: chrome.primary + '14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: { flex: 1 },
  featureTitle: { fontSize: 15, fontWeight: '800', color: palette.ink },
  featureBody: { fontSize: 13, color: palette.slate, lineHeight: 19, marginTop: 2 },
  trustRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing.xl,
    paddingHorizontal: spacing.xl,
  },
  trustChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    borderRadius: radius.pill,
    backgroundColor: palette.white + 'd9',
    borderWidth: 1.5,
    borderColor: chrome.primary + '44',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  trustText: { color: palette.ink, fontSize: 13, fontWeight: '700' },
});
