import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing } from '../theme/colors';
import type { RootScreen } from '../navigation/types';
import type { ChildProfile } from '../types/curriculum';
import { BilbyLogo } from './BilbyLogo';
import { Icon, type IconName } from './illustrations/icons';

/**
 * Sticky header (rendered OUTSIDE each screen's ScrollView).
 *
 * IXL/Khan-inspired: a quiet top bar with a clear primary nav (Home /
 * Progress) as plain labelled tabs with a subtle active underline, the active
 * child's profile as a compact chip (avatar initial + name + Year), and
 * Settings / Sign out as quiet secondary actions. No mascot clutter.
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
  const profileName = isGuest ? 'Guest' : child?.name;
  return (
    <View style={styles.bar}>
      <BilbyLogo markSize={24} textSize={14} />

      <View style={styles.nav}>
        <Tab label="Home" active={active === 'WeekPlan'} onPress={onHome} />
        <Tab label="Progress" active={active === 'Progress'} onPress={onProgress} />
      </View>

      <View style={styles.right}>
        {child && (
          <View
            style={styles.childChip}
            accessibilityLabel={`${profileName}, Year ${child.year}`}
          >
            <View style={styles.childAvatar}>
              <Text style={styles.childAvatarText}>{profileName?.charAt(0).toUpperCase()}</Text>
            </View>
            <View style={styles.childMeta}>
              <Text style={styles.childName} numberOfLines={1}>
                {profileName}
              </Text>
              <Text style={styles.childYear}>Year {child.year}</Text>
            </View>
          </View>
        )}
        {onSetup && <IconButton icon="cog" label="Settings" onPress={onSetup} />}
        {onSignOut && <IconButton icon="lock" label="Sign out" onPress={onSignOut} />}
      </View>
    </View>
  );
}

function Tab({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      accessibilityLabel={label}
      style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
    >
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
      {active && <View style={styles.tabUnderline} />}
    </Pressable>
  );
}

function IconButton({
  icon,
  label,
  onPress,
}: {
  icon: IconName;
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={6}
      style={({ pressed }) => [styles.iconBtn, pressed && styles.pressed]}
    >
      <Icon name={icon} tint={palette.slate} size={16} />
      <Text style={styles.iconBtnLabel}>{label}</Text>
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
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
    backgroundColor: palette.cream,
    borderBottomWidth: 1,
    borderBottomColor: palette.grape + '22',
    zIndex: 20,
  },
  nav: { flexDirection: 'row', gap: spacing.md, alignItems: 'flex-end', alignSelf: 'stretch' },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: spacing.xs,
    paddingHorizontal: spacing.xs,
    alignSelf: 'stretch',
  },
  tabLabel: { fontSize: 14, fontWeight: '700', color: palette.slate },
  tabLabelActive: { color: palette.ink, fontWeight: '800' },
  tabUnderline: {
    marginTop: spacing.xs,
    height: 3,
    borderRadius: radius.pill,
    backgroundColor: palette.grape,
    alignSelf: 'stretch',
  },
  right: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs, flexShrink: 1 },
  childChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: palette.white,
    borderWidth: 1,
    borderColor: palette.grape + '33',
    borderRadius: radius.pill,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    marginRight: spacing.xs,
  },
  childAvatar: {
    width: 28,
    height: 28,
    borderRadius: radius.pill,
    backgroundColor: palette.grape,
    alignItems: 'center',
    justifyContent: 'center',
  },
  childAvatarText: { color: palette.white, fontSize: 13, fontWeight: '900' },
  childMeta: { maxWidth: 84 },
  childName: { fontSize: 12, fontWeight: '800', color: palette.ink },
  childYear: { fontSize: 10, fontWeight: '700', color: palette.slate, textTransform: 'uppercase' },
  iconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  iconBtnLabel: { fontSize: 12, fontWeight: '700', color: palette.slate },
  pressed: { opacity: 0.6 },
});
