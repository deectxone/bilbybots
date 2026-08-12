import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing } from '../theme/colors';
import type { ChildProfile } from '../types/curriculum';
import { BilbyLogo } from './BilbyLogo';

/**
 * Sticky top header (rendered OUTSIDE each screen's ScrollView).
 *
 * Deliberately minimal: the BilbyBots logo (tapping it goes home) and the
 * active child's profile (name + Year). Settings / Sign out live in the slim
 * non-sticky bar below (see ScreenShell), so the top stays calm.
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
        <BilbyLogo markSize={28} textSize={18} />
      </Pressable>

      {child && (
        <View style={styles.profile} accessibilityLabel={`${profileName}, Year ${child.year}`}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{profileName?.charAt(0).toUpperCase()}</Text>
          </View>
          <View style={styles.meta}>
            <Text style={styles.name} numberOfLines={1}>
              {profileName}
            </Text>
            <Text style={styles.year}>Year {child.year}</Text>
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
    backgroundColor: palette.white,
    borderBottomWidth: 1,
    borderBottomColor: palette.grape + '22',
    zIndex: 20,
  },
  logoWrap: { paddingVertical: spacing.xs },
  profile: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: radius.pill,
    backgroundColor: palette.grape,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: palette.white, fontSize: 15, fontWeight: '900' },
  meta: { alignItems: 'flex-end' },
  name: { fontSize: 15, fontWeight: '800', color: palette.ink },
  year: { fontSize: 11, fontWeight: '700', color: palette.slate, textTransform: 'uppercase' },
  pressed: { opacity: 0.6 },
});
