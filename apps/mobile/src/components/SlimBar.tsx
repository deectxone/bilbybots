import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing } from '../theme/colors';
import { Icon } from './illustrations/icons';

/**
 * Slim utility bar shown under the sticky header with the Sign out action.
 * Non-sticky by design (rendered at the top of the screen's scroll content)
 * and full-width so the action hugs the screen's right edge — NOT the
 * responsive content column.
 */
export function SlimBar({ onSignOut }: { onSignOut?: () => void }) {
  if (!onSignOut) return null;
  return (
    <View style={styles.bar}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
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
