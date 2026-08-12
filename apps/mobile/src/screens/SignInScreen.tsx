import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing, type } from '../theme/colors';
import { BilbyLogo } from '../components/BilbyLogo';
import { PrimaryButton } from '../components/PrimaryButton';
import { Icon, type IconName } from '../components/illustrations/icons';
import { HeroPark } from '../components/HeroPark';
import { isAuthConfigured } from '../utils/supabase';
import { signInWithGoogle } from '../utils/auth';

/**
 * Google sign-in gate, styled as the product landing page (HiBob/ELMO
 * inspired): hero visual, headline, feature rows, trust chips, CTA and a
 * legal footer. Footer links open in-app legal pages.
 */
export function SignInScreen({
  onSignedIn,
  onGuest,
  onOpenDoc,
}: {
  onSignedIn: () => void;
  /** Explore without an account, sample lesson + one practice test, then sign-up prompt. */
  onGuest: () => void;
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
      <View style={styles.stickyHeader}>
        <BilbyLogo markSize={40} textSize={22} tone="dark" />
      </View>
      <ScrollView contentContainerStyle={styles.root} style={styles.scroll} bounces={false}>
        <HeroPark>
          <View style={styles.heroSpacer} />
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
        </HeroPark>

      <View style={styles.card}>
        <Text style={styles.cardEyebrow}>Parent sign-in</Text>
        <Text style={styles.cardTitle}>Welcome</Text>
        <Text style={styles.cardBody}>
          Sign in with Google to set up your family's learning plans and keep
          progress safe in your account.
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

        {busy && <ActivityIndicator style={{ marginTop: spacing.lg }} color={palette.grape} />}
        {error && <Text style={styles.error}>{error}</Text>}
      </View>

      <View style={styles.features}>
        {features.map((f) => (
          <View key={f.title} style={styles.feature}>
            <View style={styles.featureIcon}>
              <Icon name={f.icon} tint={palette.grape} size={20} />
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
          <Icon name="check-box" tint={palette.teal} size={14} />
          <Text style={styles.trustText}>Years 1–10</Text>
        </View>
        <View style={styles.trustChip}>
          <Icon name="map" tint={palette.teal} size={14} />
          <Text style={styles.trustText}>Australian Curriculum</Text>
        </View>
        <View style={styles.trustChip}>
          <Icon name="lock" tint={palette.teal} size={14} />
          <Text style={styles.trustText}>Parent-managed</Text>
        </View>
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
        Practice questions are original, NAPLAN-style items, not official NAPLAN
        tests, and no ACARA affiliation.
      </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.cream },
  scroll: { flex: 1, backgroundColor: palette.cream },
  root: { paddingBottom: spacing.xl * 2, flexGrow: 1 },
  stickyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    backgroundColor: palette.cream,
    borderBottomWidth: 1,
    borderBottomColor: palette.ink + '14',
    elevation: 4,
  },
  heroSpacer: { flex: 1 },
  heroText: { alignItems: 'center', marginTop: spacing.sm },
  headline: {
    fontSize: type.h1 + 14,
    lineHeight: 50,
    fontWeight: '900',
    color: palette.ink,
    textAlign: 'center',
  },
  headlineAccent: { color: palette.grape },
  sub: {
    color: palette.ink,
    fontSize: type.body,
    lineHeight: 23,
    marginTop: spacing.md,
    textAlign: 'center',
    maxWidth: 420,
    opacity: 0.85,
  },
  card: {
    marginHorizontal: spacing.xl,
    marginTop: -spacing.xl,
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    shadowColor: palette.ink,
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 5,
  },
  cardEyebrow: {
    fontSize: type.caption,
    fontWeight: '800',
    color: palette.berry,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  cardTitle: { fontSize: type.h1, fontWeight: '900', color: palette.ink, marginTop: spacing.xs },
  cardBody: { fontSize: 14, color: palette.slate, lineHeight: 22, marginTop: spacing.sm, marginBottom: spacing.lg },
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
  features: { paddingHorizontal: spacing.xl, marginTop: spacing.xl, gap: spacing.md },
  feature: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
    backgroundColor: palette.white,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: radius.sm,
    backgroundColor: palette.grape + '1a',
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
    backgroundColor: palette.white,
    borderWidth: 1.5,
    borderColor: palette.teal + '44',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  trustText: { color: palette.ink, fontSize: 13, fontWeight: '700' },
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
