import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing } from '../theme/colors';
import type { RootScreen } from '../navigation/types';
import { BilbyLogo } from './BilbyLogo';
import { Icon, type IconName } from './illustrations/icons';

/**
 * Reachable from every post-onboarding screen so a child (or a parent
 * looking over their shoulder) is never more than one tap from "my week"
 * or "my progress" — regardless of how deep they navigated into a lesson.
 */
export function AppHeader({
  active,
  onHome,
  onProgress,
  onSetup,
  onSignOut,
}: {
  active: RootScreen;
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
      <View style={styles.actions}>
        <NavButton icon="house" label="Home" active={active === 'WeekPlan'} onPress={onHome} />
        <NavButton icon="trophy" label="Progress" active={active === 'Progress'} onPress={onProgress} />
        {onSetup && (
          <Pressable
            onPress={onSetup}
            accessibilityLabel="Setup"
            style={({ pressed }) => [styles.setupBtn, pressed && styles.pressed]}
          >
            <Icon name="cog" tint={active === 'Setup' ? palette.white : palette.ink} size={17} />
          </Pressable>
        )}
        {onSignOut && (
          <Pressable
            onPress={onSignOut}
            accessibilityLabel="Sign out"
            style={({ pressed }) => [styles.setupBtn, pressed && styles.pressed]}
          >
            <Icon name="lock" tint={palette.slate} size={17} />
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
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
    backgroundColor: palette.cream,
  },
  actions: { flexDirection: 'row', gap: spacing.sm },
  navBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    borderRadius: radius.pill,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.sky + '55',
  },
  setupBtn: {
    width: 34,
    height: 34,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.sky + '55',
  },
  navBtnActive: { backgroundColor: palette.teal, borderColor: palette.teal },
  pressed: { opacity: 0.7 },
  navLabel: { fontSize: 12, fontWeight: '800', color: palette.ink },
  navLabelActive: { color: palette.white },
});
