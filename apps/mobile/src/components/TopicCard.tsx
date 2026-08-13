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

  return (
    <Pressable
      onPress={() => onPress?.(topic)}
      style={({ pressed }) => [styles.card, completed && styles.cardDone, pressed && styles.pressed]}
    >
      <View style={[styles.subjectIcon, { backgroundColor: palette[accent] + '26' }]}>
        <Icon name={subject.icon} tint={palette[accent]} size={20} />
      </View>
      <View style={styles.body}>
        <Text style={[styles.subject, { color: palette[accent] }]}>{subject.label}</Text>
        <Text style={styles.title} numberOfLines={1}>{topic.title}</Text>
      </View>
      <View style={styles.meta}>
        <Text style={styles.metaText}>
          {topic.learn.learnTimeMin}m · {topic.assignment.compactCount}–{topic.assignment.nominalCount}q
        </Text>
        {completed ? (
          <View style={styles.doneChip}>
            <Icon name="check-box" tint={palette.ink} size={12} />
          </View>
        ) : (
          <Icon name="clock" tint={palette.slate} size={13} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
    borderRadius: radius.pill,
    borderWidth: 1.5,
    borderColor: palette.ink + '0d',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
    shadowColor: palette.ink,
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 2,
  },
  cardDone: { opacity: 0.75 },
  pressed: { transform: [{ scale: 0.98 }] },
  subjectIcon: {
    width: 38,
    height: 38,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: { flex: 1, minWidth: 0 },
  subject: { fontSize: 11, fontWeight: '800', textTransform: 'uppercase' },
  title: { fontSize: 15, fontWeight: '800', color: palette.ink, marginTop: 1 },
  meta: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, flexShrink: 0 },
  metaText: { fontSize: 12, color: palette.slate, fontWeight: '600' },
  doneChip: {
    backgroundColor: palette.lime + '55',
    borderRadius: radius.pill,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
