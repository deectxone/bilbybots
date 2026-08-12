import { StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing } from '../theme/colors';

export function BadgeChip({
  label,
  earned = false,
}: {
  label: string;
  earned?: boolean;
}) {
  return (
    <View style={[styles.chip, earned ? styles.earned : styles.locked]}>
      <Text style={[styles.dot, { backgroundColor: earned ? palette.sunny : palette.slate }]}>
        ★
      </Text>
      <Text style={[styles.label, earned && styles.labelEarned]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    gap: spacing.sm,
  },
  earned: { backgroundColor: palette.cream, borderWidth: 2, borderColor: palette.sunny },
  locked: { backgroundColor: palette.slate + '22' },
  dot: { fontSize: 12 },
  label: { fontSize: 13, color: palette.ink, fontWeight: '600' },
  labelEarned: { color: palette.ink },
});