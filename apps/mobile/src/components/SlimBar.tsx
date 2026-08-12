import { Pressable, StyleSheet, Text } from 'react-native';
import { palette, radius, spacing } from '../theme/colors';
import { Icon } from './illustrations/icons';

/**
 * Slim secondary bar shown under the sticky header with the Sign out action.
 * Non-sticky by design (rendered at the top of the screen's scroll content)
 * so it's a quiet utility row. Aligned to the right edge.
 */
export function SlimBar({ onSignOut }: { onSignOut?: () => void }) {
  if (!onSignOut) return null;
  return (
    <Pressable
      onPress={onSignOut}
      accessibilityRole="button"
      accessibilityLabel="Sign out"
      hitSlop={6}
      style={({ pressed }) => [styles.action, pressed && styles.pressed]}
    >
      <Icon name="lock" tint={palette.slate} size={15} />
      <Text style={styles.label}>Sign out</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    alignSelf: 'flex-end',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.pill,
  },
  label: { fontSize: 12, fontWeight: '700', color: palette.slate },
  pressed: { opacity: 0.6 },
});
