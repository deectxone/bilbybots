import { StyleSheet, Text, View } from 'react-native';
import type { SubjectId } from '../types/curriculum';
import { palette, radius, spacing, subjectColor } from '../theme/colors';
import { subjectById } from '../data/subjects';
import { Icon } from './illustrations/icons';

/**
 * This week's per-subject progress: fills left→right as the child works
 * through the subject's scheduled topic(s) — half-filled once the lesson is
 * read and the practice test is reached, full once the test is finished —
 * with a star badge (from the practice test score) once at least one topic
 * is complete. See `starsForScore` for the 3/2/1-star rule.
 */
export function SubjectPill({
  subjectId,
  fillPct,
  stars,
}: {
  subjectId: SubjectId;
  /** 0 = not started, 50 = lesson read, 100 = practice test finished. */
  fillPct: number;
  /** Set once at least one of this subject's topics this week is complete. */
  stars?: 1 | 2 | 3;
}) {
  const subject = subjectById(subjectId);
  const accent = subjectColor[subjectId] ?? subjectColor.default;
  const tint = palette[accent];

  return (
    <View style={styles.wrap}>
      <View style={[styles.pill, { borderColor: tint + '55' }]}>
        <View style={[styles.fill, { width: `${fillPct}%`, backgroundColor: tint + '2e' }]} />
        <View style={styles.content}>
          <Icon name={subject.icon} tint={tint} size={14} />
          <Text style={[styles.label, { color: tint }]}>{subject.label}</Text>
        </View>
      </View>
      {stars !== undefined && (
        <View style={styles.badge} accessibilityLabel={`${stars} star${stars === 1 ? '' : 's'}`}>
          <Text style={styles.badgeText}>{'⭐'.repeat(stars)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: 'relative' },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius.pill,
    borderWidth: 1.5,
    backgroundColor: palette.white,
    overflow: 'hidden',
  },
  fill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: radius.pill,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  label: { fontSize: 12, fontWeight: '800' },
  badge: {
    position: 'absolute',
    top: -10,
    right: -6,
    backgroundColor: palette.white,
    borderRadius: radius.pill,
    paddingHorizontal: 4,
    paddingVertical: 1,
    shadowColor: palette.ink,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  badgeText: { fontSize: 9 },
});
