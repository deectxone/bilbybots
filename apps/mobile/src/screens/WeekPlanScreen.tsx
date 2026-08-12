import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { ChildProfile, Topic } from '../types/curriculum';
import { buildWeekPlan } from '../data/content';
import { TopicCard } from '../components/TopicCard';
import { BadgeChip } from '../components/BadgeChip';
import { AppHeader } from '../components/AppHeader';
import { palette, radius, spacing } from '../theme/colors';
import { subjectById } from '../data/subjects';

/**
 * Facade of the weekly plan produced by the adaptive-pacing planner
 * (`docs/specs/adaptive-pacing.md`). A real plan snapshot is an immutable,
 * versioned row served from Postgres.
 */
export function WeekPlanScreen({
  child,
  completedTopicIds,
  onOpenTopic,
  onHome,
  onProgress,
  onSetup,
  onSignOut,
}: {
  child: ChildProfile;
  completedTopicIds: string[];
  onOpenTopic: (topic: Topic) => void;
  onHome: () => void;
  onProgress: () => void;
  onSetup: () => void;
  onSignOut?: () => void;
}) {
  const allTopics = buildWeekPlan(child.year);
  const topics = allTopics.filter((t) => child.subjects.includes(t.subject));
  const done = new Set(completedTopicIds);
  const completedThisWeek = topics.filter((t) => done.has(t.id)).length;

  // Label the plan by what's actually shown this week, not just the first
  // subject the parent happened to toggle — those can disagree once more
  // than one subject is selected.
  const shownSubjects = [...new Set(topics.map((t) => t.subject))];
  const planLabel =
    shownSubjects.length > 0
      ? shownSubjects.map((s) => subjectById(s).label).join(' + ')
      : subjectById(child.subjects[0]).label;

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scroll}>
      <AppHeader active="WeekPlan" onHome={onHome} onProgress={onProgress} onSetup={onSetup} onSignOut={onSignOut} />

      <LinearGradient
        colors={[palette.grape, palette.berry]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <Text style={styles.greeting}>G'day, {child.name}! 🦘</Text>
        <Text style={styles.sub}>
          Year {child.year} · {planLabel} plan · Term 1
        </Text>
        <View style={styles.coverageRow}>
          <BadgeChip label="Coverage 100% tracked" />
          <BadgeChip label={`${completedThisWeek}/${topics.length || 0} done this week`} earned={completedThisWeek > 0} />
        </View>
      </LinearGradient>

      <Text style={styles.section}>This week 🎯</Text>

      {topics.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Content lands soon 🚀</Text>
          <Text style={styles.emptyBody}>
            Year {child.year} lessons for the chosen subjects aren't published yet —
            Years 1–10 are ready today.
          </Text>
        </View>
      ) : (
        topics.map((topic) => (
          <View key={topic.id} style={styles.topicWrap}>
            <TopicCard topic={topic} onPress={onOpenTopic} completed={done.has(topic.id)} />
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: palette.cream },
  container: { paddingBottom: spacing.xl, flexGrow: 1 },
  hero: {
    marginHorizontal: spacing.xl,
    borderRadius: radius.lg,
    padding: spacing.xl,
  },
  greeting: { fontSize: 26, fontWeight: '900', color: palette.white },
  sub: { fontSize: 14, color: palette.white, opacity: 0.9, marginTop: spacing.xs },
  coverageRow: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.lg, flexWrap: 'wrap' },
  section: {
    fontSize: 20,
    fontWeight: '800',
    color: palette.ink,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  topicWrap: { marginBottom: spacing.md, marginHorizontal: spacing.xl },
  empty: {
    marginHorizontal: spacing.xl,
    backgroundColor: palette.white,
    borderRadius: 24,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: palette.sky,
  },
  emptyTitle: { fontSize: 18, fontWeight: '800', color: palette.ink },
  emptyBody: { fontSize: 14, color: palette.slate, textAlign: 'center', marginTop: spacing.sm },
});
