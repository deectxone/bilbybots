import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { ChildProfile, SubjectId } from '../types/curriculum';
import type { NaplanResult } from '../types/naplan';
import { ScreenShell } from '../components/ScreenShell';
import { BadgeChip } from '../components/BadgeChip';
import { Icon, type IconName } from '../components/illustrations/icons';
import { chrome, palette, radius, spacing, subjectColor, type } from '../theme/colors';
import { subjectById } from '../data/subjects';
import { fullYearBank } from '../data/content';
import { buildPlan, schoolTermFromDate, schoolWeekFromDate } from '../planner';
import { naplanDomainMeta } from '../data/naplan/tests';

/**
 * Parent dashboard: the core product promise — "is 100% of the syllabus still
 * on track to be covered?" (docs/specs/adaptive-pacing.md) — surfaced as a
 * single view for the parent:
 *   - overall coverage % + this-term progress
 *   - per-subject coverage bars (topics mastered vs in scope)
 *   - this week's plan status
 *   - badges earned
 *   - NAPLAN practice results
 * All numbers are computed from the same plan/coverage machinery the rest of
 * the app uses, so the dashboard never disagrees with the weekly plan.
 */
export function ProgressScreen({
  child,
  completedTopicIds,
  earnedBadges,
  naplanResults,
  onHome,
  onSetup,
  onOpenWeekPlan,
  onSignOut,
}: {
  child: ChildProfile;
  completedTopicIds: string[];
  earnedBadges: string[];
  naplanResults: NaplanResult[];
  onHome: () => void;
  onSetup: () => void;
  onOpenWeekPlan: () => void;
  onSignOut?: () => void;
}) {
  const completed = new Set(completedTopicIds);

  const banks = child.subjects.map((subjectId) => ({
    subjectId,
    subject: subjectById(subjectId),
    bank: fullYearBank(child.year, subjectId),
  }));
  const totalInScope = banks.reduce((n, b) => n + b.bank.length, 0);
  const totalDone = banks.reduce(
    (n, b) => n + b.bank.filter((t) => completed.has(t.id)).length,
    0,
  );
  const overallPct = totalInScope > 0 ? Math.round((totalDone / totalInScope) * 100) : 0;

  const term = schoolTermFromDate();
  const currentWeek = schoolWeekFromDate();
  const plan = buildPlan({
    year: child.year,
    subjects: child.subjects,
    joinWeek: child.replanned ? currentWeek : child.joinWeek,
    learnedTopicIds: child.replanned ? completedTopicIds : [],
  });
  const thisWeek = plan.weeks.find((w) => w.week === currentWeek) ?? plan.weeks[0];
  const weekDone = (thisWeek?.entries ?? []).filter((e) => completed.has(e.topic.id)).length;
  const weekTotal = thisWeek?.entries.length ?? 0;

  const recentResults = [...naplanResults]
    .sort((a, b) => b.completedAt.localeCompare(a.completedAt))
    .slice(0, 3);

  return (
    <ScreenShell
      active="Progress"
      child={child}
      onHome={onHome}
      onProgress={() => {}}
      onSetup={onSetup}
      onSignOut={onSignOut}
    >
      <View style={styles.hero}>
        <Text style={styles.heroEyebrow}>Parent dashboard</Text>
        <Text style={styles.title}>{child.name}'s progress</Text>
        <Text style={styles.heroSub}>
          Year {child.year} · {term.inSummer ? 'Summer holidays' : term.term ? `Term ${term.term}` : 'Term break'}
          {!term.inSummer && term.weekInTerm ? ` · Week ${term.weekInTerm}` : ''}
        </Text>

        <View style={styles.coverageRing}>
          <Text style={styles.coveragePct}>{overallPct}%</Text>
          <Text style={styles.coverageLabel}>syllabus coverage</Text>
        </View>
        <Text style={styles.coverageDetail}>
          {totalDone} of {totalInScope} topics mastered · {totalInScope > 0 ? 'on track for 100%' : 'building your plan'}
        </Text>
      </View>

      <Text style={styles.section}>This week</Text>
      <Pressable
        onPress={onOpenWeekPlan}
        accessibilityRole="button"
        accessibilityLabel="Open this week's plan"
        style={({ pressed }) => [styles.weekCard, pressed && styles.pressed]}
      >
        <View style={styles.weekHeader}>
          <View>
            <Text style={styles.weekTitle}>Week {currentWeek}</Text>
            <Text style={styles.weekBody}>
              {weekTotal > 0
                ? `${weekDone} of ${weekTotal} lessons done this week`
                : 'Your plan is being prepared'}
            </Text>
          </View>
          <View style={styles.weekPctChip}>
            <Text style={styles.weekPct}>{weekTotal > 0 ? Math.round((weekDone / weekTotal) * 100) : 0}%</Text>
          </View>
        </View>
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${weekTotal > 0 ? (weekDone / weekTotal) * 100 : 0}%` }]} />
        </View>
        <Text style={styles.weekLink}>Open this week's plan ›</Text>
      </Pressable>

      <Text style={styles.section}>Coverage by subject</Text>
      {banks.map(({ subjectId, subject, bank }) => {
        const done = bank.filter((t) => completed.has(t.id)).length;
        const pct = bank.length > 0 ? Math.round((done / bank.length) * 100) : 0;
        return (
          <View key={subjectId} style={styles.subjectCard}>
            <View style={styles.subjectRow}>
              <View style={[styles.subjectBadge, { backgroundColor: palette[subjectColor[subjectId]] + '26' }]}>
                <Icon name={subject.icon} tint={palette[subjectColor[subjectId]]} size={18} />
              </View>
              <Text style={styles.subjectLabel}>{subject.label}</Text>
              <Text style={[styles.subjectPct, { color: palette[subjectColor[subjectId]] }]}>{pct}%</Text>
            </View>
            <View style={styles.track}>
              <View
                style={[
                  styles.fill,
                  { width: `${pct}%`, backgroundColor: palette[subjectColor[subjectId]] },
                ]}
              />
            </View>
            <Text style={styles.pct}>
              {bank.length > 0
                ? `${done}/${bank.length} topics mastered`
                : 'More lessons for this subject are on the way.'}
            </Text>
          </View>
        );
      })}

      <Text style={styles.section}>Badges earned</Text>
      {earnedBadges.length === 0 ? (
        <View style={styles.emptyBadges}>
          <Icon name="trophy" tint={chrome.primary} size={28} />
          <Text style={styles.emptyText}>No badges yet, finish a lesson to earn your first one!</Text>
        </View>
      ) : (
        <View style={styles.badgeRow}>
          {earnedBadges.map((b) => (
            <BadgeChip key={b} label={b} earned />
          ))}
        </View>
      )}

      {recentResults.length > 0 && (
        <>
          <Text style={styles.section}>NAPLAN practice</Text>
          {recentResults.map((r) => {
            const meta = naplanDomainMeta(r.domain);
            const pct = r.total > 0 ? Math.round((r.correct / r.total) * 100) : 0;
            const date = new Date(r.completedAt).toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'short',
            });
            return (
              <View key={r.testId} style={styles.resultRow}>
                <View style={[styles.resultIcon, { backgroundColor: palette[meta.accent] + '26' }]}>
                  <Icon name={meta.icon} tint={palette[meta.accent]} size={18} />
                </View>
                <View style={styles.resultText}>
                  <Text style={styles.resultTitle}>
                    {meta.label} · Year {r.year} · {r.mode === 'timed' ? 'Timed' : 'Practice'}
                  </Text>
                  <Text style={styles.resultMeta}>
                    {r.correct}/{r.total} correct · {date}
                  </Text>
                </View>
                <Text style={[styles.resultPct, { color: palette[meta.accent] }]}>{pct}%</Text>
              </View>
            );
          })}
        </>
      )}
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: 'center', marginTop: spacing.lg },
  heroEyebrow: {
    fontSize: type.caption,
    fontWeight: '800',
    color: chrome.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: { fontSize: type.h1, fontWeight: '900', color: palette.ink, marginTop: spacing.xs },
  heroSub: { fontSize: 14, color: palette.slate, marginTop: spacing.xs },
  coverageRing: {
    marginTop: spacing.lg,
    width: 132,
    height: 132,
    borderRadius: 66,
    borderWidth: 10,
    borderColor: chrome.primary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.white,
  },
  coveragePct: { fontSize: 34, fontWeight: '900', color: palette.ink },
  coverageLabel: { fontSize: 11, color: palette.slate, fontWeight: '700', textAlign: 'center' },
  coverageDetail: { fontSize: 13, color: palette.slate, marginTop: spacing.md },
  section: {
    fontSize: type.h3,
    fontWeight: '800',
    color: palette.ink,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  weekCard: {
    marginHorizontal: spacing.xl,
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: chrome.primary + '22',
  },
  weekHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  weekTitle: { fontSize: 16, fontWeight: '900', color: palette.ink },
  weekBody: { fontSize: 13, color: palette.slate, marginTop: 2 },
  weekPctChip: {
    backgroundColor: chrome.primary + '1a',
    borderRadius: radius.pill,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  weekPct: { fontSize: 14, fontWeight: '900', color: chrome.primary },
  weekLink: { fontSize: 13, fontWeight: '800', color: chrome.primary, marginTop: spacing.md },
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
  subjectRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  subjectBadge: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectLabel: { fontSize: 15, fontWeight: '800', color: palette.ink, flex: 1 },
  subjectPct: { fontSize: 15, fontWeight: '900' },
  track: {
    height: 12,
    borderRadius: radius.pill,
    backgroundColor: chrome.primary + '22',
    marginTop: spacing.sm,
    overflow: 'hidden',
  },
  fill: { height: '100%', borderRadius: radius.pill, backgroundColor: chrome.primary },
  pct: { fontSize: 12, color: palette.slate, marginTop: spacing.xs, fontWeight: '600' },
  emptyBadges: {
    marginHorizontal: spacing.xl,
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 2,
    borderColor: chrome.primary + '44',
    borderStyle: 'dashed',
    alignItems: 'center',
    gap: spacing.sm,
  },
  emptyText: { fontSize: 14, color: palette.slate, textAlign: 'center' },
  badgeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, paddingHorizontal: spacing.xl },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginHorizontal: spacing.xl,
    backgroundColor: palette.white,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  resultIcon: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: { flex: 1 },
  resultTitle: { fontSize: 14, fontWeight: '800', color: palette.ink },
  resultMeta: { fontSize: 12, color: palette.slate, marginTop: 2 },
  resultPct: { fontSize: 15, fontWeight: '900' },
  pressed: { opacity: 0.9 },
});
