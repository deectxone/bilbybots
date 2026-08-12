import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { ChildProfile } from '../types/curriculum';
import { AppHeader } from '../components/AppHeader';
import { BadgeChip } from '../components/BadgeChip';
import { palette, radius, spacing } from '../theme/colors';
import { subjectById } from '../data/subjects';
import { fullYearBank } from '../data/content';

/**
 * Parent-facing coverage view: "is 100% of the syllabus still on track to be
 * covered?" is the product's core promise (docs/specs/adaptive-pacing.md) —
 * this facade shows it per subject from topics completed so far.
 */
export function ProgressScreen({
  child,
  completedTopicIds,
  earnedBadges,
  onHome,
  onSetup,
  onSignOut,
}: {
  child: ChildProfile;
  completedTopicIds: string[];
  earnedBadges: string[];
  onHome: () => void;
  onSetup: () => void;
  onSignOut?: () => void;
}) {
  const completed = new Set(completedTopicIds);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AppHeader active="Progress" onHome={onHome} onProgress={() => {}} onSetup={onSetup} onSignOut={onSignOut} />

      <Text style={styles.title}>{child.name}'s progress 🏅</Text>
      <Text style={styles.sub}>Year {child.year} · every subject, tracked to 100% coverage</Text>

      <Text style={styles.section}>Badges earned</Text>
      {earnedBadges.length === 0 ? (
        <View style={styles.emptyBadges}>
          <Text style={styles.emptyText}>No badges yet — finish a lesson to earn your first one!</Text>
        </View>
      ) : (
        <View style={styles.badgeRow}>
          {earnedBadges.map((b) => (
            <BadgeChip key={b} label={b} earned />
          ))}
        </View>
      )}

      <Text style={styles.section}>Coverage by subject</Text>
      {child.subjects.map((subjectId) => {
        const subject = subjectById(subjectId);
        const bank = fullYearBank(child.year, subjectId);
        const done = bank.filter((t) => completed.has(t.id)).length;
        const pct = bank.length > 0 ? Math.round((done / bank.length) * 100) : 0;
        return (
          <View key={subjectId} style={styles.subjectCard}>
            <Text style={styles.subjectLabel}>
              {subject.emoji} {subject.label}
            </Text>
            <View style={styles.track}>
              <View style={[styles.fill, { width: `${pct}%` }]} />
            </View>
            <Text style={styles.pct}>
              {bank.length > 0
                ? `${done}/${bank.length} topics · ${pct}% covered`
                : 'Content lands soon — no topics authored yet'}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: palette.cream, flexGrow: 1, paddingBottom: spacing.xl },
  title: { fontSize: 24, fontWeight: '900', color: palette.ink, paddingHorizontal: spacing.xl },
  sub: { fontSize: 13, color: palette.slate, paddingHorizontal: spacing.xl, marginTop: spacing.xs },
  section: {
    fontSize: 16,
    fontWeight: '800',
    color: palette.ink,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  emptyBadges: {
    marginHorizontal: spacing.xl,
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 2,
    borderColor: palette.sky + '55',
    borderStyle: 'dashed',
  },
  emptyText: { fontSize: 13, color: palette.slate, textAlign: 'center' },
  badgeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, paddingHorizontal: spacing.xl },
  subjectCard: {
    marginHorizontal: spacing.xl,
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: palette.ink,
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 2,
  },
  subjectLabel: { fontSize: 15, fontWeight: '800', color: palette.ink },
  track: {
    height: 12,
    borderRadius: radius.pill,
    backgroundColor: palette.sky + '22',
    marginTop: spacing.sm,
    overflow: 'hidden',
  },
  fill: { height: '100%', borderRadius: radius.pill, backgroundColor: palette.teal },
  pct: { fontSize: 12, color: palette.slate, marginTop: spacing.xs, fontWeight: '600' },
});
