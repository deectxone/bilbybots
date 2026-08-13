import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { ChildProfile, Topic } from '../types/curriculum';
import { buildPlan, schoolWeekFromDate, selectPlanWeek } from '../planner';
import { TopicCard } from '../components/TopicCard';
import { ScreenShell } from '../components/ScreenShell';
import { Icon } from '../components/illustrations/icons';
import { palette, radius, spacing, type, type ChromeTokens } from '../theme/colors';
import { useThemeChrome } from '../state/ThemeContext';
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
  onOpenTopic: (topic: Topic, questionCount?: number) => void;
  onHome: () => void;
  onProgress: () => void;
  onSetup: () => void;
  onSignOut?: () => void;
}) {
  const chrome = useThemeChrome();
  const styles = getStyles(chrome);
  const currentWeek = schoolWeekFromDate();
  const joinWeek = child.replanned ? currentWeek : child.joinWeek;
  const plan = buildPlan({
    year: child.year,
    subjects: child.subjects,
    joinWeek,
    learnedTopicIds: child.replanned ? completedTopicIds : [],
  });
  const thisWeek = selectPlanWeek(plan, currentWeek, completedTopicIds);
  const entries = thisWeek?.entries ?? [];
  const topics = entries.map((e) => e.topic);
  const done = new Set(completedTopicIds);
  const completedThisWeek = topics.filter((t) => done.has(t.id)).length;
  const compact = plan.compactedSubjects.length > 0 || Boolean(child.replanned);
  // The plan finished ahead of the school year (every planned topic is done
  // and nothing is scheduled for this week) — celebrate instead of replaying.
  const planComplete =
    thisWeek === null &&
    plan.weeks.length > 0 &&
    plan.weeks.every((w) => w.entries.every((e) => done.has(e.topic.id)));

  // All topics scheduled before this week — used for the "revise a past
  // lesson" suggestion when the current week has no new lessons.
  const pastTopics = plan.weeks
    .filter((w) => w.week < currentWeek)
    .flatMap((w) => w.entries.map((e) => e.topic));

  const revise = () => {
    if (pastTopics.length === 0) return;
    const pick = pastTopics[Math.floor(Math.random() * pastTopics.length)];
    onOpenTopic(pick, pick.assignment.nominalCount);
  };

  // The plan label reflects every subject the parent selected, so a week with
  // a single lesson still reads as the child's full schedule.
  const planLabel =
    child.subjects.length > 0
      ? child.subjects.map((s) => subjectById(s).label).join(' + ')
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
        <Text style={styles.note}>
          {child.replanned
            ? 'Re-planned from now: remaining topics packed in, completed ones skipped.'
            : compact
              ? `Compact pace: ${plan.coverage.pct}% coverage with lighter assignments.`
              : `Full-year plan · ${plan.coverage.pct}% coverage.`}
        </Text>
      </View>

      <Text style={styles.section}>This week</Text>

      {topics.length === 0 ? (
        <View style={styles.empty}>
          <Icon name={planComplete ? 'trophy' : 'book'} tint={chrome.primary} size={30} />
          <Text style={styles.emptyTitle}>
            {planComplete ? 'All planned lessons done!' : 'No new lessons this week'}
          </Text>
          <Text style={styles.emptyBody}>
            {planComplete
              ? `Amazing work — ${child.name} has finished every lesson in the ${planLabel} plan. Revise any past lesson to keep the streak going.`
              : `Your ${planLabel} plan is still on track — next lessons are coming up. Pick any subject below to revise a past lesson.`}
          </Text>
          <View style={styles.subjectRow}>
            {child.subjects.map((s) => (
              <View key={s} style={styles.subjectChip}>
                <Icon name={subjectById(s).icon} tint={chrome.primary} size={14} />
                <Text style={styles.subjectChipText}>{subjectById(s).label}</Text>
              </View>
            ))}
          </View>
          {pastTopics.length > 0 && (
            <Pressable
              onPress={revise}
              accessibilityRole="button"
              accessibilityLabel="Revise a past lesson"
              style={({ pressed }) => [styles.reviseBtn, pressed && styles.pressed]}
            >
              <Text style={styles.reviseBtnText}>Revise a past lesson</Text>
            </Pressable>
          )}
        </View>
      ) : (
        <>
          <Text style={styles.weekSummary}>
            {completedThisWeek} of {topics.length} lessons done
          </Text>
          {topics.map((topic) => (
            <View key={topic.id} style={styles.topicWrap}>
              <TopicCard
                topic={topic}
                completed={done.has(topic.id)}
                onPress={() => onOpenTopic(topic, entries.find((e) => e.topic.id === topic.id)?.questionCount)}
              />
            </View>
          ))}
        </>
      )}
    </ScreenShell>
  );
}

const getStyles = (chrome: ChromeTokens) =>
  StyleSheet.create({
  scroll: { backgroundColor: palette.cream },
  container: { paddingBottom: spacing.xl, flexGrow: 1 },
  welcome: { paddingHorizontal: spacing.xl, marginTop: spacing.lg },
  greeting: { fontSize: type.display, fontWeight: '900', color: palette.ink },
  sub: { fontSize: 14, color: palette.slate, marginTop: spacing.xs },
  note: { fontSize: 12, color: palette.slate, marginTop: spacing.sm, maxWidth: 420 },
  section: {
    fontSize: type.h3,
    fontWeight: '800',
    color: palette.ink,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  topicWrap: { marginBottom: spacing.md, marginHorizontal: spacing.xl },
  weekSummary: {
    fontSize: 13,
    fontWeight: '700',
    color: palette.slate,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  subjectRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  subjectChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: palette.white,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: chrome.primary + '44',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  subjectChipText: { fontSize: 13, fontWeight: '700', color: palette.ink },
  reviseBtn: {
    marginTop: spacing.md,
    backgroundColor: chrome.primary,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  reviseBtnText: { color: palette.white, fontSize: 14, fontWeight: '800' },
  pressed: { opacity: 0.85, transform: [{ scale: 0.99 }] },
  empty: {
    marginHorizontal: spacing.xl,
    backgroundColor: palette.white,
    borderRadius: 24,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: chrome.primary + '55',
  },
  emptyTitle: { fontSize: 18, fontWeight: '800', color: palette.ink },
  emptyBody: { fontSize: 14, color: palette.slate, textAlign: 'center', marginTop: spacing.sm },
});
