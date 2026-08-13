import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { ChildProfile } from '../types/curriculum';
import { ScreenShell } from '../components/ScreenShell';
import { Icon, type IconName } from '../components/illustrations/icons';
import { palette, radius, spacing, type, type ChromeTokens } from '../theme/colors';
import { useThemeChrome } from '../state/ThemeContext';
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
  const chrome = useThemeChrome();
  const styles = getStyles(chrome);
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
        title="Weekly plan"
        body={child ? `Year ${child.year} · lessons & badges` : 'Set up a profile to start'}
        onPress={onOpenWeekPlan}
      />

      <TrackCard
        icon="brain"
        accent={chrome.primary}
        title="NAPLAN practice"
        body={
          naplanNext
            ? `Timed tests · Year ${naplanNext}`
            : `Years ${NAPLAN_YEARS.join(', ')}`
        }
        onPress={onOpenNaplan}
      />

      <TrackCard
        icon="trophy"
        accent={chrome.primary}
        title="Parent dashboard"
        body="Coverage, badges & results"
        onPress={onProgress}
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
  const chrome = useThemeChrome();
  const styles = getStyles(chrome);
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

const getStyles = (chrome: ChromeTokens) =>
  StyleSheet.create({
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
    marginBottom: spacing.sm,
    padding: spacing.md,
  },
  iconChip: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackText: { flex: 1 },
  trackTitle: { fontSize: 16, fontWeight: '900', color: palette.ink },
  trackSub: { fontSize: 12, color: palette.slate, marginTop: 2, lineHeight: 16 },
  chevron: { fontSize: 22, color: palette.slate },
  pressed: { transform: [{ scale: 0.99 }], opacity: 0.9 },
  });
