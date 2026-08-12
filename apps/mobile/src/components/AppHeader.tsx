import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing } from '../theme/colors';
import type { RootScreen } from '../navigation/types';
import type { ChildProfile } from '../types/curriculum';
import { BilbyLogo } from './BilbyLogo';
import { Icon, type IconName } from './illustrations/icons';

/**
 * Reachable from every post-onboarding screen so a child (or a parent
 * looking over their shoulder) is never more than one tap from "my week"
 * or "my progress", regardless of how deep they navigated into a lesson.
 *
 * Rendered OUTSIDE each screen's ScrollView so it stays fixed/sticky at the
 * top while content scrolls underneath. Shows the active child's profile
 * (name + Year) when one is set.
 */
export function AppHeader({
  active,
  child,
  isGuest = false,
  onHome,
  onProgress,
  onSetup,
  onSignOut,
}: {
  active: RootScreen;
  /** Active child profile (name + Year shown in the header when present). */
  child?: ChildProfile | null;
  /** Guest preview session — label the chip as a guest instead. */
  isGuest?: boolean;
  onHome: () => void;
  onProgress: () => void;
  /** Opens Setup (edit profile / reset data). Hidden when not provided. */
  onSetup?: () => void;
  /** Signs out of the Google account. Hidden when not provided. */
  onSignOut?: () => void;
}) {
  return (
    <View style={styles.bar}>
      <BilbyLogo markSize={26} textSize={15} />
      <View style={styles.childWrap}>
        {child && (
          <View style={styles.childChip} accessibilityLabel={`${isGuest ? 'Guest' : child.name}, Year ${child.year}`}>
            <Icon name="paw" tint={palette.grape} size={13} />
            <Text style={styles.childText}>
              {isGuest ? 'Guest' : child.name}
              <Text style={styles.childYear}> · Year {child.year}</Text>
            </Text>
          </View>
        )}
      </View>
      <View style={styles.actions}>
        <NavButton icon="house" label="Home" active={active === 'WeekPlan'} onPress={onHome} />
        <NavButton icon="trophy" label="Progress" active={active === 'Progress'} onPress={onProgress} />
        {onSetup && (
          <Pressable
            onPress={onSetup}
            accessibilityRole="button"
            accessibilityLabel="Settings"
            hitSlop={8}
            style={({ pressed }) => [styles.setupBtn, pressed && styles.pressed]}
          >
            <Icon name="cog" tint={palette.ink} size={18} />
          </Pressable>
        )}
        {onSignOut && (
          <Pressable
            onPress={onSignOut}
            accessibilityRole="button"
            accessibilityLabel="Sign out"
            hitSlop={8}
            style={({ pressed }) => [styles.setupBtn, pressed && styles.pressed]}
          >
            <Icon name="lock" tint={palette.ink} size={18} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

function NavButton({
  icon,
  label,
  active,
  onPress,
}: {
  icon: IconName;
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      accessibilityLabel={label}
      style={({ pressed }) => [styles.navBtn, active && styles.navBtnActive, pressed && styles.pressed]}
    >
      <Icon name={icon} tint={active ? palette.white : palette.ink} size={15} />
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
    backgroundColor: palette.cream,
    borderBottomWidth: 1,
    borderBottomColor: palette.grape + '22',
    zIndex: 20,
  },
  childWrap: { flex: 1, alignItems: 'center' },
  childChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: palette.white,
    borderWidth: 1.5,
    borderColor: palette.grape + '44',
    borderRadius: radius.pill,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  childText: { fontSize: 13, fontWeight: '800', color: palette.ink },
  childYear: { fontWeight: '700', color: palette.slate },
  actions: { flexDirection: 'row', gap: spacing.sm, alignItems: 'center' },
  navBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.sky + '55',
    minHeight: 40,
  },
  setupBtn: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.sky + '55',
  },
  navBtnActive: { backgroundColor: palette.grape, borderColor: palette.grape },
  pressed: { opacity: 0.7 },
  navLabel: { fontSize: 12, fontWeight: '800', color: palette.ink },
  navLabelActive: { color: palette.white },
});
