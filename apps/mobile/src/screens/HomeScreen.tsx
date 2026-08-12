import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { ChildProfile } from '../types/curriculum';
import { ScreenShell } from '../components/ScreenShell';
import { BadgeChip } from '../components/BadgeChip';
import { Icon } from '../components/illustrations/icons';
import { palette, radius, spacing, type, gradients } from '../theme/colors';
import { nextNaplanYear, NAPLAN_YEARS } from '../data/naplan/tests';
import { subjectById } from '../data/subjects';

/**
 * The landing/home screen, the app opens here, before any profile is built.
 * It hosts the two learning tracks side by side:
 *   1. The weekly plan (learn-first lessons, badges, 100% coverage). Needs a
 *      child profile, so without one it steps into onboarding first.
 *   2. NAPLAN practice (original NAPLAN-style tests for Years 3/5/7/9),
 *      usable immediately via the hub's year picker.
 */
export function HomeScreen({
  child,
  isGuest = false,
  onOpenWeekPlan,
  onOpenNaplan,
  onProgress,
  onSetup,
  onSignOut,
  onSignUp,
}: {
  child: ChildProfile | null;
  /** Guest preview session, show a "create account" banner instead of saving. */
  isGuest?: boolean;
  onOpenWeekPlan: () => void;
  onOpenNaplan: () => void;
  onProgress: () => void;
  onSetup: () => void;
  onSignOut?: () => void;
  /** Returns a guest to the sign-in gate. */
  onSignUp?: () => void;
}) {
  const naplanNext = child ? nextNaplanYear(child.year) : null;
  const planSubjects = child ? child.subjects.map((s) => subjectById(s).label).join(' + ') : '';

  return (
    <ScreenShell
      active="Home"
      child={child}
      isGuest={isGuest}
      onHome={() => {}}
      onProgress={onProgress}
      onSetup={onSetup}
      onSignOut={onSignOut}
    >
      {isGuest && onSignUp && (
        <View style={styles.guestBanner}>
          <View style={styles.guestBannerText}>
            <Text style={styles.guestBannerTitle}>You're exploring as a guest</Text>
            <Text style={styles.guestBannerBody}>
              Preview a sample lesson and one practice test. Create an account to
              save progress and unlock the full weekly plan.
            </Text>
          </View>
          <Pressable
            onPress={onSignUp}
            accessibilityRole="button"
            accessibilityLabel="Create an account"
            style={({ pressed }) => [styles.guestCta, pressed && styles.pressed]}
          >
            <Text style={styles.guestCtaText}>Create account</Text>
          </Pressable>
        </View>
      )}

      <LinearGradient
        colors={[...gradients.hero]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <View style={styles.heroRow}>
          <View style={styles.heroBadge}>
            <Icon name="paw" tint={palette.white} size={30} />
          </View>
          <View style={styles.heroText}>
            <Text style={styles.greeting}>{child ? `G'day, ${child.name}!` : "G'day!"}</Text>
            <Text style={styles.sub}>
              {child
                ? `Year ${child.year} · ${planSubjects}`
                : 'A smarter weekly plan and NAPLAN practice in one place'}
            </Text>
          </View>
        </View>
        {child ? (
          <View style={styles.coverageRow}>
            <BadgeChip label="100% coverage tracked" />
          </View>
        ) : null}
      </LinearGradient>

      <Text style={styles.section}>Choose a track</Text>

      <Pressable
        onPress={onOpenWeekPlan}
        accessibilityRole="button"
        accessibilityLabel="Open my weekly plan"
        style={({ pressed }) => [styles.track, pressed && styles.pressed]}
      >
        <View style={[styles.trackAccent, { backgroundColor: palette.teal }]} />
        <View style={styles.trackBody}>
          <View style={[styles.iconChip, { borderColor: palette.teal }]}>
            <Icon name="map" tint={palette.teal} />
          </View>
          <View style={styles.trackText}>
            <Text style={styles.trackTitle}>My weekly plan</Text>
            <Text style={styles.trackSub}>
              {child
                ? `Learn-first lessons, badges and your coverage % for Year ${child.year}`
                : 'Set up a child profile, then get a weekly plan, badges and 100% coverage'}
            </Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>
      </Pressable>

      <Pressable
        onPress={onOpenNaplan}
        accessibilityRole="button"
        accessibilityLabel="Open NAPLAN practice"
        style={({ pressed }) => [styles.track, pressed && styles.pressed]}
      >
        <View style={[styles.trackAccent, { backgroundColor: palette.coral }]} />
        <View style={styles.trackBody}>
          <View style={[styles.iconChip, { borderColor: palette.coral }]}>
            <Icon name="brain" tint={palette.coral} />
          </View>
          <View style={styles.trackText}>
            <Text style={styles.trackTitle}>NAPLAN practice</Text>
            <Text style={styles.trackSub}>
              {naplanNext
                ? child && naplanNext === child.year
                  ? `Timed practice tests for Year ${naplanNext} · Reading, Writing, Conventions, Numeracy`
                  : `Timed practice tests for Year ${naplanNext}, the next NAPLAN for ${child!.name}`
                : `Practice tests for Years ${NAPLAN_YEARS.join(', ')}, pick a year to start`}
            </Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>
      </Pressable>

      <Text style={styles.footnote}>
        All questions are original, NAPLAN-style items, not official NAPLAN
        questions, and no ACARA affiliation.
      </Text>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: palette.cream },
  container: { paddingBottom: spacing.xl * 2, flexGrow: 1 },
  hero: {
    marginHorizontal: spacing.xl,
    borderRadius: radius.lg,
    padding: spacing.xl,
  },
  heroRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  heroBadge: {
    width: 54,
    height: 54,
    borderRadius: radius.pill,
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.95,
  },
  guestBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginHorizontal: spacing.xl,
    marginTop: spacing.lg,
    backgroundColor: palette.grape + '1a',
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: palette.grape + '44',
    padding: spacing.md,
  },
  guestBannerText: { flex: 1 },
  guestBannerTitle: { fontSize: 14, fontWeight: '800', color: palette.ink },
  guestBannerBody: { fontSize: 12, color: palette.slate, lineHeight: 17, marginTop: 2 },
  guestCta: {
    backgroundColor: palette.grape,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  guestCtaText: { color: palette.white, fontSize: 13, fontWeight: '800' },
  heroText: { flex: 1 },
  greeting: { fontSize: type.display, fontWeight: '900', color: palette.white },
  sub: { fontSize: 14, color: palette.white, opacity: 0.95, marginTop: spacing.xs },
  coverageRow: { flexDirection: 'row', marginTop: spacing.lg },
  section: {
    fontSize: type.h2,
    fontWeight: '800',
    color: palette.ink,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  track: {
    flexDirection: 'row',
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginHorizontal: spacing.xl,
    marginBottom: spacing.md,
    shadowColor: palette.ink,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },
  trackAccent: { width: 10 },
  trackBody: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.lg },
  iconChip: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.white,
  },
  trackText: { flex: 1 },
  trackTitle: { fontSize: 18, fontWeight: '900', color: palette.ink },
  trackSub: { fontSize: 14, color: palette.slate, marginTop: spacing.xs, lineHeight: 20 },
  chevron: { fontSize: 28, color: palette.slate },
  pressed: { transform: [{ scale: 0.99 }], opacity: 0.9 },
  footnote: {
    fontSize: type.caption,
    color: palette.slate,
    textAlign: 'center',
    marginTop: spacing.xl,
    paddingHorizontal: spacing.xl,
    lineHeight: 18,
  },
});
