import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing, type ChromeTokens } from '../theme/colors';
import type { ChildProfile } from '../types/curriculum';
import { BilbyLogo } from './BilbyLogo';
import { useThemeChrome } from '../state/ThemeContext';
import { useApp } from '../state/AppContext';

/**
 * Sticky top header (rendered OUTSIDE each screen's ScrollView).
 *
 * Deliberately minimal and calm: a dark maroon band with the BilbyBots logo
 * in light (tapping it goes home) and the active child's profile (name +
 * Year). Settings / Sign out live in the slim non-sticky bar below (see
 * ScreenShell), so the top stays quiet.
 */
export function AppHeader({
  child,
  isGuest = false,
  onHome,
  onProfilePress,
}: {
  /** Active child profile (name + Year shown in the header when present). */
  child?: ChildProfile | null;
  /** Guest preview session — label the profile as a guest instead. */
  isGuest?: boolean;
  /** Tapping the logo returns to Home. */
  onHome: () => void;
  /** Tapping the kid's profile opens Settings. */
  onProfilePress?: () => void;
}) {
  const chrome = useThemeChrome();
  const styles = getStyles(chrome);
  const profileName = isGuest ? 'Guest' : child?.name;
  const { trialDaysLeft } = useApp();
  return (
    <View style={styles.bar}>
      <Pressable
        onPress={onHome}
        accessibilityRole="button"
        accessibilityLabel="BilbyBots home"
        hitSlop={8}
        style={({ pressed }) => [styles.logoWrap, pressed && styles.pressed]}
      >
        <BilbyLogo markSize={30} textSize={19} tone="light" />
      </Pressable>

      <View style={styles.right}>
        {trialDaysLeft !== null && (
          <View style={styles.trialPill}>
            <Text style={styles.trialPillText}>
              {trialDaysLeft > 0
                ? `Trial: ${trialDaysLeft} day${trialDaysLeft === 1 ? '' : 's'} left`
                : 'Trial ended'}
            </Text>
          </View>
        )}

        {child && (
          <Pressable
            onPress={onProfilePress}
            accessibilityRole="button"
            accessibilityLabel={`Open settings for ${profileName}, Year ${child.year}`}
            hitSlop={8}
            style={({ pressed }) => [styles.profile, pressed && styles.pressed]}
          >
            <View style={styles.meta}>
              <Text style={styles.name} numberOfLines={1}>
                {profileName}
              </Text>
              <Text style={styles.year}>Year {child.year}</Text>
            </View>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{profileName?.charAt(0).toUpperCase()}</Text>
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const getStyles = (chrome: ChromeTokens) =>
  StyleSheet.create({
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.sm,
      paddingBottom: spacing.sm,
      backgroundColor: chrome.primary,
      zIndex: 20,
      overflow: 'hidden',
    },
    logoWrap: { paddingVertical: spacing.xs },
    right: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
    trialPill: {
      borderRadius: radius.pill,
      backgroundColor: palette.white + '26',
      paddingVertical: 5,
      paddingHorizontal: spacing.sm,
    },
    trialPillText: { color: palette.white, fontSize: 11, fontWeight: '800' },
    profile: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
    meta: { alignItems: 'flex-end' },
    name: { fontSize: 15, fontWeight: '800', color: palette.white },
    year: {
      fontSize: 11,
      fontWeight: '700',
      color: palette.white,
      opacity: 0.7,
      textTransform: 'uppercase',
    },
    avatar: {
      width: 34,
      height: 34,
      borderRadius: radius.pill,
      backgroundColor: chrome.accent,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: { color: palette.white, fontSize: 15, fontWeight: '900' },
    pressed: { opacity: 0.6 },
  });
