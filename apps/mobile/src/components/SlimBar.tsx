import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing } from '../theme/colors';
import { Icon } from './illustrations/icons';
import { schoolTermFromDate } from '../planner';

/**
 * Slim utility bar shown under the sticky header:
 *   - left: the current Australian school term, week-in-term and a fun
 *     "X days until break" countdown for the kid to watch;
 *   - right: Sign out.
 * Non-sticky by design (rendered at the top of the screen's scroll content)
 * and full-width so the action hugs the screen's right edge.
 */
export function SlimBar({ onSignOut }: { onSignOut?: () => void }) {
  const info = schoolTermFromDate();

  let status = '';
  if (info.term !== null) {
    status = `Term ${info.term} · Week ${info.weekInTerm}`;
  } else if (info.inSummer) {
    status = 'Summer break';
  } else {
    status = 'School holidays';
  }

  const countdown =
    info.term !== null
      ? `${info.daysToBreak} ${info.daysToBreak === 1 ? 'day' : 'days'} to break`
      : info.inSummer
        ? `${info.daysToNextYear} ${info.daysToNextYear === 1 ? 'day' : 'days'} to next year`
        : 'Back to school soon';

  return (
    <View style={styles.bar}>
      <View style={styles.status} accessibilityLabel={`${status}. ${countdown}`}>
        <Text style={styles.statusText}>{status}</Text>
        <View style={styles.countdownChip}>
          <Icon name="sun" tint={palette.sunny} size={13} />
          <Text style={styles.countdownText}>{countdown}</Text>
        </View>
      </View>

      {onSignOut && (
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
  },
  status: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, flexShrink: 1 },
  statusText: { fontSize: 12, fontWeight: '700', color: palette.slate },
  countdownChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: palette.sunny + '22',
    borderRadius: radius.pill,
    paddingVertical: 2,
    paddingHorizontal: spacing.sm,
  },
  countdownText: { fontSize: 11, fontWeight: '800', color: palette.ink },
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
