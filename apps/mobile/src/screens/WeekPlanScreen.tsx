import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { ChildProfile, Topic } from '../types/curriculum';
import { buildPlan, schoolWeekFromDate } from '../planner';
import { TopicCard } from '../components/TopicCard';
import { ScreenShell } from '../components/ScreenShell';
import { Icon } from '../components/illustrations/icons';
import { palette, spacing, type } from '../theme/colors';
import { subjectById } from '../data/subjects';

/**
 * This week's topics from the adaptive-pacing planner
 * (`docs/specs/adaptive-pacing.md`). The plan snapshot is versioned and
 * deterministic; `joinWeek` will come from the child's enrollment once a
 * parent can set it (defaults to a full-year join = ideal pace).
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
  const plan = buildPlan({ year: child.year, subjects: child.subjects, joinWeek: 1 });
  const currentWeek = schoolWeekFromDate();
  const thisWeek = plan.weeks.find((w) => w.week === currentWeek) ?? plan.weeks[plan.weeks.length - 1];
  const topics = (thisWeek?.entries ?? []).map((e) => e.topic);
  const done = new Set(completedTopicIds);
  const completedThisWeek = topics.filter((t) => done.has(t.id)).length;
  const compact = plan.compactedSubjects.length > 0;

  // Label the plan by what's actually shown this week, not just the first
  // subject the parent happened to toggle, those can disagree once more
  // than one subject is selected.
  const shownSubjects = [...new Set(topics.map((t) => t.subject))];
  const planLabel =
    shownSubjects.length > 0
      ? shownSubjects.map((s) => subjectById(s).label).join(' + ')
      : subjectById(child.subjects[0]).label;

  return (
    <ScreenShell
      active="WeekPlan"
      child={child}
      onHome={onHome}
      onProgress={onProgress}
      onSetup={onSetup}
      onSignOut={onSignOut}
    >
      <View style={styles.welcome}>
        <Text style={styles.greeting}>G'day, {child.name}!</Text>
        <Text style={styles.sub}>
          Year {child.year} · {planLabel} plan · Week {currentWeek}
        </Text>
      </View>

      <Text style={styles.section}>This week</Text>

      {topics.length === 0 ? (
        <View style={styles.empty}>
          <Icon name="book" tint={palette.grape} size={30} />
          <Text style={styles.emptyTitle}>Your plan is being prepared</Text>
          <Text style={styles.emptyBody}>
            Year {child.year} lessons for the chosen subjects are being finalised.
            Years 1–10 are available now.
          </Text>
        </View>
      ) : (
        topics.map((topic) => (
          <View key={topic.id} style={styles.topicWrap}>
            <TopicCard topic={topic} onPress={onOpenTopic} completed={done.has(topic.id)} />
          </View>
        ))
      )}
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: palette.cream },
  container: { paddingBottom: spacing.xl, flexGrow: 1 },
  welcome: { paddingHorizontal: spacing.xl, marginTop: spacing.lg },
  greeting: { fontSize: type.display, fontWeight: '900', color: palette.ink },
  sub: { fontSize: 14, color: palette.slate, marginTop: spacing.xs },
  section: {
    fontSize: type.h3,
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
