import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing } from '../theme/colors';
import type { ChildProfile } from '../types/curriculum';
import { BilbyLogo } from './BilbyLogo';

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
}: {
  /** Active child profile (name + Year shown in the header when present). */
  child?: ChildProfile | null;
  /** Guest preview session — label the profile as a guest instead. */
  isGuest?: boolean;
  /** Tapping the logo returns to Home. */
  onHome: () => void;
}) {
  const profileName = isGuest ? 'Guest' : child?.name;
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

      {child && (
        <View style={styles.profile} accessibilityLabel={`${profileName}, Year ${child.year}`}>
          <View style={styles.meta}>
            <Text style={styles.name} numberOfLines={1}>
              {profileName}
            </Text>
            <Text style={styles.year}>Year {child.year}</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{profileName?.charAt(0).toUpperCase()}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    backgroundColor: palette.header,
    zIndex: 20,
  },
  logoWrap: { paddingVertical: spacing.xs },
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
    backgroundColor: palette.headerAccent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: palette.white, fontSize: 15, fontWeight: '900' },
  pressed: { opacity: 0.6 },
});
