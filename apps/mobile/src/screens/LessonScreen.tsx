import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import type { ChildProfile, Topic } from '../types/curriculum';
import { IllustrationFrame } from '../components/IllustrationFrame';
import { BadgeChip } from '../components/BadgeChip';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenShell } from '../components/ScreenShell';
import { chrome, palette, radius, spacing, subjectColor, type } from '../theme/colors';
import { subjectById } from '../data/subjects';
import { Icon } from '../components/illustrations/icons';
import { isAnswerCorrect as sharedIsAnswerCorrect } from '../utils/answer-matching';

/**
 * Kids type numbers with or without thousands separators (spaces or commas,
 * e.g. "600405" / "600 405" / "600,405"), and list answers with or without
 * spaces after commas ("-8,-3,0,5" / "-8, -3, 0, 5") — all should count as
 * correct. Word answers keep trimmed, case-insensitive matching.
 */
function isAnswerCorrect(given: string, expected: string): boolean {
  return sharedIsAnswerCorrect(given, expected);
}

/**
 * Learn-first lesson facade: explain → illustrate → practise → reward.
 * Phase 1 is text + illustration slots; Phase 2 adds the AI-video player
 * fed from `docs/content/year-6/video-prompts`.
 */
export function LessonScreen({
  child,
  topic,
  questionCount,
  onBack,
  onHome,
  onProgress,
  onSetup,
  onTopicCompleted,
  onSignOut,
  isGuest = false,
  onSignUp,
}: {
  child: ChildProfile;
  topic: Topic;
  /** Assignment budget from the planner (compact under pacing); defaults to the full authored set. */
  questionCount?: number;
  onBack: () => void;
  onHome: () => void;
  onProgress: () => void;
  onSetup: () => void;
  onTopicCompleted: (topic: Topic) => void;
  onSignOut?: () => void;
  /** Guest preview: show sign-up prompt instead of awarding badges. */
  isGuest?: boolean;
  onSignUp?: () => void;
}) {
  const subject = subjectById(topic.subject);
  const [phase, setPhase] = useState<'learn' | 'practise' | 'reward'>('learn');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [earned, setEarned] = useState(false);

  const budget = Math.max(1, Math.min(questionCount ?? topic.assignment.nominalCount, topic.assignment.questions.length));
  const practiseQuestions = topic.assignment.questions.slice(0, budget);

  const score = practiseQuestions.filter((q) => isAnswerCorrect(answers[q.id] ?? '', q.answer)).length;
  const allCorrect = checked && practiseQuestions.length > 0 && score === practiseQuestions.length;

  return (
    <ScreenShell
      active="Lesson"
      child={child}
      isGuest={isGuest}
      onHome={onHome}
      onProgress={onProgress}
      onSetup={onSetup}
      onSignOut={onSignOut}
    >
      <View style={styles.content}>
      <Pressable onPress={onBack} hitSlop={12} style={styles.backWrap}>
        <Text style={styles.back}>‹ Back to my week</Text>
      </Pressable>

      <Text style={[styles.subject, { color: palette[subjectColor[topic.subject] ?? 'sky'] }]}>
        {subject.label} · Year {child.year}
      </Text>
      <Text style={styles.title}>{topic.title}</Text>
      <Text style={styles.meta}>{topic.cd.map((c) => c.ac).join(' · ')}</Text>

      {phase === 'learn' && (
        <View style={styles.section}>
          {topic.learn.body.map((p, i) => (
            <Text key={i} style={styles.para}>
              {p}
            </Text>
          ))}
          {topic.learn.illustrations.map((slot, i) => (
            <IllustrationFrame key={i} slot={slot} index={i} />
          ))}
          <View style={styles.reviewNote}>
            <Icon name="clock" tint={chrome.primary} size={16} />
            <Text style={styles.reviewNoteText}>
              Focus · {topic.learn.learnTimeMin} min lesson · built for {child.name}
            </Text>
          </View>
          <PrimaryButton
            tone="header"
            label={practiseQuestions.length === 0 ? 'Finish lesson' : 'Ready to practise'}
            onPress={() => setPhase('practise')}
          />
        </View>
      )}

      {phase === 'practise' && practiseQuestions.length === 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lesson complete</Text>
          <Text style={styles.para}>
            Nice work reading through this lesson. Its practice questions are
            coming soon — claim your badge to mark it done.
          </Text>
          <PrimaryButton
            tone="header"
            label={isGuest ? 'Create account to save your star' : 'Claim my badge'}
            onPress={() => {
              if (isGuest) {
                onSignUp?.();
                return;
              }
              setEarned(true);
              setPhase('reward');
              onTopicCompleted(topic);
            }}
          />
        </View>
      )}

      {phase === 'practise' && practiseQuestions.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your quick check</Text>
          {practiseQuestions.map((q, qi) => {
            const questionCorrect = checked && isAnswerCorrect(answers[q.id] ?? '', q.answer);
            return (
              <View key={q.id} style={styles.question}>
                <View style={styles.qPromptRow}>
                  <Text style={styles.qPrompt}>
                    {qi + 1}. {q.prompt}
                  </Text>
                  {checked && (
                    <Text style={[styles.qMark, questionCorrect ? styles.qMarkGood : styles.qMarkBad]}>
                      {questionCorrect ? '✓' : '✗'}
                    </Text>
                  )}
                </View>
                {q.type === 'mcq' && q.options ? (
                  <View style={styles.optionList}>
                    {q.options.map((o) => {
                      const selected = answers[q.id] === o;
                      const isCorrectOption = isAnswerCorrect(o, q.answer);
                      const showFeedback = checked && (selected || isCorrectOption);
                      return (
                        <Pressable
                          key={o}
                          accessibilityRole="radio"
                          accessibilityState={{ checked: selected }}
                          accessibilityLabel={`${q.prompt}, ${o}`}
                          onPress={() => {
                            setChecked(false);
                            setAnswers((a) => ({ ...a, [q.id]: o }));
                          }}
                          style={[
                            styles.option,
                            selected && styles.optionSelected,
                            showFeedback && (isCorrectOption ? styles.optionGood : styles.optionBad),
                          ]}
                        >
                          <Text
                            style={[
                              styles.optionText,
                              selected && styles.optionTextSelected,
                              showFeedback && styles.optionTextFeedback,
                            ]}
                          >
                            {o}
                          </Text>
                          {showFeedback && (
                            <Text style={styles.optionMark}>{isCorrectOption ? '✓' : '✗'}</Text>
                          )}
                        </Pressable>
                      );
                    })}
                  </View>
                ) : (
                  <View>
                    <TextInput
                      accessibilityLabel={`${q.prompt}, type your answer`}
                      style={[
                        styles.answerInput,
                        checked && (questionCorrect ? styles.answerInputGood : styles.answerInputBad),
                      ]}
                      value={answers[q.id] ?? ''}
                      onChangeText={(t) => {
                        setChecked(false);
                        setAnswers((a) => ({ ...a, [q.id]: t }));
                      }}
                      placeholder="Type your answer"
                      placeholderTextColor={palette.slate}
                    />
                    {checked && !questionCorrect && (
                      <Text style={styles.correctAnswerHint}>Correct answer: {q.answer}</Text>
                    )}
                  </View>
                )}
              </View>
            );
          })}

          <PrimaryButton
            tone="header"
            label={checked ? 'Check again' : 'Check my answers'}
            disabled={practiseQuestions.some((q) => !answers[q.id])}
            onPress={() => setChecked(true)}
          />

          {checked && (
            <View style={[styles.result, allCorrect ? styles.resultGood : styles.resultBad]}>
              <Text style={styles.resultTitle}>
                {allCorrect ? 'Nailed it!' : 'Almost, have another go'}
              </Text>
              <Text style={styles.resultScore}>
                {score}/{practiseQuestions.length} correct
              </Text>
              <View style={styles.badgeRow}>
                {allCorrect && <BadgeChip label="Perfect score!" earned />}
              </View>
              {allCorrect && (
                <PrimaryButton
                  tone="header"
                  label={isGuest ? 'Create account to save your star' : 'Claim my badge'}
                  onPress={() => {
                    if (isGuest) {
                      onSignUp?.();
                      return;
                    }
                    setEarned(true);
                    setPhase('reward');
                    onTopicCompleted(topic);
                  }}
                />
              )}
            </View>
          )}
        </View>
      )}

      {phase === 'reward' && (
        <View style={styles.section}>
          <View style={styles.rewardCard}>
            <View style={styles.rewardMedal}>
              <Icon name="trophy" tint={palette.sunny} size={34} />
            </View>
            <Text style={styles.rewardTitle}>Badge earned!</Text>
            <BadgeChip label={`${subject.label} star of the week`} earned />

            <View style={styles.advanceBox}>
              <Text style={styles.advanceTitle}>Advance level unlocked</Text>
              <Text style={styles.advanceText}>
                You finished early! Bonus challenges are coming soon, your star
                badge is saved either way.
              </Text>
            </View>

            <PrimaryButton
              tone="header"
              label="Back to my week"
              onPress={onBack}
            />
          </View>
        </View>
      )}
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: palette.cream, flexGrow: 1, paddingBottom: spacing.xl },
  content: { paddingHorizontal: spacing.xl },
  backWrap: { marginTop: spacing.xs },
  back: { fontSize: 14, fontWeight: '700', color: palette.slate, marginBottom: spacing.md },
  subject: { fontSize: 13, fontWeight: '800', textTransform: 'uppercase' },
  title: { fontSize: 26, fontWeight: '900', color: palette.ink, marginTop: spacing.xs },
  meta: { fontSize: 12, color: palette.slate, marginTop: spacing.xs },
  section: { marginTop: spacing.lg },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: palette.ink, marginBottom: spacing.md },
  para: { fontSize: 17, lineHeight: 26, color: palette.ink, marginBottom: spacing.md },
  reviewNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: chrome.primary + '0d',
    borderRadius: radius.pill,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  reviewNoteText: { fontSize: 13, color: palette.ink, fontWeight: '600', flex: 1 },
  question: { marginBottom: spacing.lg },
  qPromptRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: spacing.sm, marginBottom: spacing.sm },
  qPrompt: { flex: 1, fontSize: 16, fontWeight: '700', color: palette.ink },
  qMark: { fontSize: 18, fontWeight: '900' },
  qMarkGood: { color: palette.teal },
  qMarkBad: { color: palette.coral },
  optionList: { gap: spacing.sm },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: chrome.primary + '55',
    backgroundColor: palette.white,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  optionSelected: { backgroundColor: chrome.primary, borderColor: chrome.primary },
  optionGood: { backgroundColor: palette.lime + '33', borderColor: palette.teal },
  optionBad: { backgroundColor: palette.coral + '22', borderColor: palette.coral },
  optionText: { fontSize: 15, color: palette.ink, fontWeight: '600', flexShrink: 1 },
  optionTextSelected: { color: palette.white },
  optionTextFeedback: { color: palette.ink },
  optionMark: { fontSize: 18, fontWeight: '900' },
  answerInput: {
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: chrome.primary + '66',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    fontSize: 16,
    color: palette.ink,
  },
  answerInputGood: { borderColor: palette.teal, backgroundColor: palette.lime + '22' },
  answerInputBad: { borderColor: palette.coral, backgroundColor: palette.coral + '15' },
  correctAnswerHint: { fontSize: 13, fontWeight: '700', color: palette.coral, marginTop: spacing.xs },
  result: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  resultGood: { backgroundColor: palette.lime + '44' },
  resultBad: { backgroundColor: palette.coral + '22' },
  resultTitle: { fontSize: 18, fontWeight: '900', color: palette.ink },
  resultScore: { fontSize: 15, fontWeight: '800', color: palette.ink },
  badgeRow: { flexDirection: 'row', gap: spacing.sm, flexWrap: 'wrap' },
  rewardCard: {
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    gap: spacing.md,
    borderWidth: 3,
    borderColor: palette.sunny,
  },
  rewardMedal: {
    width: 76,
    height: 76,
    borderRadius: radius.pill,
    backgroundColor: chrome.primary + '14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardTitle: { fontSize: 24, fontWeight: '900', color: palette.ink },
  advanceBox: {
    backgroundColor: chrome.primary + '14',
    borderRadius: radius.lg,
    padding: spacing.md,
    width: '100%',
  },
  advanceTitle: { fontSize: 16, fontWeight: '800', color: palette.ink },
  advanceText: { fontSize: 14, color: palette.ink, marginTop: spacing.xs },
});