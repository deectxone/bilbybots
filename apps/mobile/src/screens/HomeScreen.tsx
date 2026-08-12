import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { ChildProfile } from '../types/curriculum';
import { ScreenShell } from '../components/ScreenShell';
import { Icon, type IconName } from '../components/illustrations/icons';
import { chrome, palette, radius, spacing, type } from '../theme/colors';
import { nextNaplanYear, NAPLAN_YEARS } from '../data/naplan/tests';
import { subjectById } from '../data/subjects';

/**
 * The landing/home screen, the app opens here, before any profile is built.
 * It hosts the two learning tracks side by side:
 *   1. The weekly plan (learn-first lessons, badges, 100% coverage).
 *   2. NAPLAN practice (original NAPLAN-style tests for Years 3/5/7/9).
 *
 * Khan/IXL-style: clean, light, no saturated hero band, generous whitespace.
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
  const planSubjects = child ? child.subjects.map((s) => subjectById(s).label).join(' · ') : '';

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

      <View style={styles.welcome}>
        <Text style={styles.greeting}>
          {child ? `G'day, ${child.name}!` : "G'day!"}
        </Text>
        {child && (
          <Text style={styles.sub}>
            Year {child.year} · {planSubjects}
          </Text>
        )}
      </View>

      <Text style={styles.section}>Choose a track</Text>

      <TrackCard
        icon="map"
        accent={chrome.primary}
        title="My weekly plan"
        body={
          child
            ? `Lessons, badges and your coverage for Year ${child.year}`
            : 'Set up a child profile, then get a weekly plan, badges and 100% coverage'
        }
        onPress={onOpenWeekPlan}
      />

      <TrackCard
        icon="brain"
        accent={chrome.primary}
        title="NAPLAN practice"
        body={
          naplanNext
            ? child && naplanNext === child.year
              ? `Timed practice tests for Year ${naplanNext} — Reading, Writing, Conventions, Numeracy`
              : `Timed practice tests for Year ${naplanNext}, the next NAPLAN for ${child!.name}`
            : `Practice tests for Years ${NAPLAN_YEARS.join(', ')} — pick a year to start`
        }
        onPress={onOpenNaplan}
      />
    </ScreenShell>
  );
}

function TrackCard({
  icon,
  accent,
  title,
  body,
  onPress,
}: {
  icon: IconName;
  accent: string;
  title: string;
  body: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={({ pressed }) => [styles.track, pressed && styles.pressed]}
    >
      <View style={[styles.iconChip, { backgroundColor: accent + '1a' }]}>
        <Icon name={icon} tint={accent} size={26} />
      </View>
      <View style={styles.trackText}>
        <Text style={styles.trackTitle}>{title}</Text>
        <Text style={styles.trackSub}>{body}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  guestBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginHorizontal: spacing.xl,
    marginTop: spacing.lg,
    backgroundColor: chrome.primary + '1a',
    borderRadius: radius.lg,
    borderWidth: 1.5,
    borderColor: chrome.primary + '44',
    padding: spacing.md,
  },
  guestBannerText: { flex: 1 },
  guestBannerTitle: { fontSize: 14, fontWeight: '800', color: palette.ink },
  guestBannerBody: { fontSize: 12, color: palette.slate, lineHeight: 17, marginTop: 2 },
  guestCta: {
    backgroundColor: chrome.primary,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  guestCtaText: { color: palette.white, fontSize: 13, fontWeight: '800' },
  welcome: { paddingHorizontal: spacing.xl, marginTop: spacing.lg },
  greeting: { fontSize: type.display, fontWeight: '900', color: palette.ink },
  sub: { fontSize: 14, color: palette.slate, marginTop: spacing.xs },
  section: {
    fontSize: type.h3,
    fontWeight: '800',
    color: palette.ink,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  track: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: palette.white,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: chrome.primary + '22',
    marginHorizontal: spacing.xl,
    marginBottom: spacing.md,
    padding: spacing.lg,
  },
  iconChip: {
    width: 56,
    height: 56,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackText: { flex: 1 },
  trackTitle: { fontSize: 18, fontWeight: '900', color: palette.ink },
  trackSub: { fontSize: 14, color: palette.slate, marginTop: spacing.xs, lineHeight: 20 },
  chevron: { fontSize: 26, color: palette.slate },
  pressed: { transform: [{ scale: 0.99 }], opacity: 0.9 },
});
