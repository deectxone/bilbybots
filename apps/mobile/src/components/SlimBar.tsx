import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing } from '../theme/colors';
import { Icon, type IconName } from './illustrations/icons';

/**
 * Slim secondary bar shown under the sticky header with Settings and
 * Sign out. Non-sticky by design (rendered inside the screen's scroll
 * content) so it's a quiet utility row, not permanent chrome — matching how
 * Khan/IXL tuck account actions away instead of crowding the top.
 */
export function SlimBar({
  onSetup,
  onSignOut,
}: {
  onSetup?: () => void;
  onSignOut?: () => void;
}) {
  if (!onSetup && !onSignOut) return null;
  return (
    <View style={styles.bar}>
      {onSetup && <Action icon="cog" label="Settings" onPress={onSetup} />}
      {onSignOut && <Action icon="lock" label="Sign out" onPress={onSignOut} />}
    </View>
  );
}

function Action({
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
      style={({ pressed }) => [styles.action, pressed && styles.pressed]}
    >
      <Icon name={icon} tint={palette.slate} size={15} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
    backgroundColor: palette.cream,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.pill,
  },
  label: { fontSize: 12, fontWeight: '700', color: palette.slate },
  pressed: { opacity: 0.6 },
});
