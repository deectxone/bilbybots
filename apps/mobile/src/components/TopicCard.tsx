import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Topic } from '../types/curriculum';
import { palette, radius, spacing, subjectColor } from '../theme/colors';
import { subjectById } from '../data/subjects';
import { Icon } from './illustrations/icons';

export function TopicCard({
  topic,
  onPress,
  completed = false,
}: {
  topic: Topic;
  onPress?: (topic: Topic) => void;
  completed?: boolean;
}) {
  const subject = subjectById(topic.subject);
  const accent = subjectColor[topic.subject] ?? subjectColor.default;
  const covered = topic.cd.map((c) => c.ac).join(' · ');

  return (
    <Pressable
      onPress={() => onPress?.(topic)}
      style={({ pressed }) => [styles.card, completed && styles.cardDone, pressed && styles.pressed]}
    >
      <View style={[styles.accentBar, { backgroundColor: palette[accent] }]} />
      <View style={styles.body}>
        <View style={styles.subjectRow}>
          <View style={[styles.subjectBadge, { backgroundColor: palette[accent] + '26' }]}>
            <Icon name={subject.icon} tint={palette[accent]} size={14} />
          </View>
          <Text style={[styles.subject, { color: palette[accent] }]}>{subject.label}</Text>
          {completed && (
            <View style={styles.doneChip}>
              <Text style={styles.doneChipText}>Done</Text>
            </View>
          )}
        </View>
        <Text style={styles.title}>{topic.title}</Text>
        <Text style={styles.meta}>{covered}</Text>
        <View style={styles.slotRow}>
          <View style={styles.slot}>
            <Icon name="clock" tint={palette.slate} size={13} />
            <Text style={styles.slotText}>{topic.learn.learnTimeMin} min lesson</Text>
          </View>
          <View style={styles.slot}>
            <Icon name="check-box" tint={palette.slate} size={13} />
            <Text style={styles.slotText}>
              {topic.assignment.compactCount}–{topic.assignment.nominalCount} questions
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    overflow: 'hidden',
    shadowColor: palette.ink,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },
  cardDone: { opacity: 0.85 },
  pressed: { transform: [{ scale: 0.98 }] },
  accentBar: { width: 8 },
  body: { flex: 1, padding: spacing.md },
  subjectRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  subjectBadge: {
    width: 26,
    height: 26,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subject: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase' },
  doneChip: {
    marginLeft: 'auto',
    backgroundColor: palette.lime + '33',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  doneChipText: { fontSize: 12, fontWeight: '800', color: palette.ink },
  title: { fontSize: 17, fontWeight: '800', color: palette.ink, marginTop: spacing.sm },
  meta: { fontSize: 12, color: palette.slate, marginTop: spacing.xs },
  slotRow: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.sm },
  slot: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  slotText: { fontSize: 13, color: palette.ink, fontWeight: '600' },
});