import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import type {
  NaplanItem,
  NaplanMode,
  NaplanResult,
  NaplanStimulus,
  NaplanTest,
} from '../types/naplan';
import type { ChildProfile } from '../types/curriculum';
import { ScreenShell } from '../components/ScreenShell';
import { PrimaryButton } from '../components/PrimaryButton';
import { BadgeChip } from '../components/BadgeChip';
import { Icon } from '../components/illustrations/icons';
import { chrome, palette, radius, spacing } from '../theme/colors';
import {
  naplanDomainMeta,
  naplanPromptById,
  naplanStimulusById,
  orderedItems,
} from '../data/naplan/tests';
import { WRITING_RUBRIC } from '../data/naplan/writing';
import { isItemCorrect } from '../utils/naplan-marking';

type Phase = 'intro' | 'running' | 'gate' | 'rubric' | 'results';

interface Step {
  item: NaplanItem;
  sectionIdx: number;
  isFirst: boolean;
  isLast: boolean;
}

/**
 * NAPLAN practice-test runner.
 * Mirrors the real test feel: timed (official duration) or practice mode,
 * flagged items, locked sections (conventions spelling→G&P; Y7/9 numeracy
 * NC→calculator), and an indicative (never official) results breakdown.
 */
export function NaplanTestScreen({
  test,
  child,
  onFinish,
  onExit,
  onHome,
  onProgress,
  onSetup,
  onSignOut,
}: {
  test: NaplanTest;
  /** Active child profile, shown in the sticky header. */
  child?: ChildProfile | null;
  onFinish: (result: NaplanResult) => void;
  onExit: () => void;
  onHome: () => void;
  onProgress: () => void;
  onSetup: () => void;
  onSignOut?: () => void;
}) {
  const meta = naplanDomainMeta(test.domain);
  const isWriting = test.domain === 'writing';
  const prompt = test.promptId ? naplanPromptById(test.promptId) : undefined;

  const [phase, setPhase] = useState<Phase>('intro');
  const [mode, setMode] = useState<NaplanMode>('practice');
  const [index, setIndex] = useState(0);
  /** Bumped each time practice mode loops back to the start of the item pool
   *, reshuffles so a repeat lap doesn't just replay the exact same order. */
  const [lap, setLap] = useState(0);

  const flatItems = useMemo(() => orderedItems(test), [test]);

  /**
   * Timed mode keeps the real section structure (and its locks) so it feels
   * like the actual test. Practice mode is a flat, continuous pool, no
   * locked sections, since the whole point is free, repeatable practice,
   * that loops (reshuffled) once the student reaches the end, so it only
   * stops when they tap "End practice".
   */
  const steps = useMemo<Step[]>(() => {
    if (isWriting) return [];
    if (mode === 'timed') {
      return test.sections.flatMap((section, sectionIdx) =>
        section.itemIds.map((id, j) => {
          const item = flatItems.find((i) => i.id === id);
          return {
            item,
            sectionIdx,
            isFirst: j === 0,
            isLast: j === section.itemIds.length - 1,
          } as Step;
        }),
      );
    }
    const pool = [...flatItems];
    if (lap > 0) {
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
    }
    return pool.map((item, j) => ({
      item,
      sectionIdx: 0,
      isFirst: j === 0,
      isLast: j === pool.length - 1,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [test, mode, flatItems, lap]);

  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [rubric, setRubric] = useState<Set<string>>(new Set());
  const [text, setText] = useState('');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [gateSection, setGateSection] = useState<number | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(test.durationMin * 60);
  const [result, setResult] = useState<NaplanResult | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (phase === 'running' && mode === 'timed') {
      timerRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, mode]);

  useEffect(() => {
    if (phase === 'running' && mode === 'timed' && secondsLeft === 0) {
      finishTest();
    }
  }, [secondsLeft, phase, mode]);

  const step = steps[index];
  const currentItem = step?.item;
  const answered = !currentItem
    ? false
    : currentItem.itemType === 'multi'
      ? ((answers[currentItem.id] as string[] | undefined)?.length ?? 0) > 0
      : currentItem.itemType === 'text'
        ? text.trim().length > 0
        : answers[currentItem.id] !== undefined;
  const inPractice = phase === 'running' && mode === 'practice';
  const itemChecked = !!currentItem && checkedItems.has(currentItem.id);
  const showFeedback = inPractice && itemChecked;

  // The text input only commits into `answers` on Submit, so switching
  // between text items never leaks one question's draft into the next.
  useEffect(() => {
    setText('');
  }, [index]);

  function submitCurrent() {
    if (!currentItem || itemChecked) return;
    if (currentItem.itemType === 'text' && answers[currentItem.id] === undefined) {
      setAnswers((a) => ({ ...a, [currentItem.id]: text }));
    }
    setCheckedItems((prev) => new Set(prev).add(currentItem.id));
  }

  const stimulus: NaplanStimulus | undefined = useMemo(() => {
    if (!currentItem?.stimulusId) return undefined;
    const prev = steps[index - 1]?.item;
    return prev?.stimulusId === currentItem.stimulusId
      ? undefined
      : (naplanStimulusById(currentItem.stimulusId) ?? undefined);
  }, [currentItem, index, steps]);

  const mm = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  function selectOption(option: string) {
    if (!currentItem) return;
    setAnswers((a) => {
      if (currentItem.itemType === 'multi') {
        const current = (a[currentItem.id] as string[] | undefined) ?? [];
        const next = current.includes(option) ? current.filter((o) => o !== option) : [...current, option];
        return { ...a, [currentItem.id]: next };
      }
      return { ...a, [currentItem.id]: option };
    });
  }

  function next() {
    if (!currentItem) return;
    if (mode === 'timed') {
      const atSectionEnd = step.isLast;
      const nextSectionIdx = step.sectionIdx + 1;
      const nextSection = test.sections[nextSectionIdx];

      if (atSectionEnd && nextSection && nextSection.locked) {
        setGateSection(nextSectionIdx);
        return;
      }
    }
    advance();
  }

  function advance() {
    if (index < steps.length - 1) {
      setIndex(index + 1);
    } else if (mode === 'practice') {
      // Continuous practice: loop back to a reshuffled pass instead of
      // ending, practice only stops when the student taps "End practice".
      setIndex(0);
      setLap((l) => l + 1);
    } else {
      finishTest();
    }
  }

  /** Ends a continuous practice session on demand, scoring only the items
   * actually submitted so far (not the whole pool, which they may not have
   * finished a lap of). */
  function endPractice() {
    if (timerRef.current) clearInterval(timerRef.current);
    const attempted = flatItems.filter((item) => checkedItems.has(item.id));
    const correct = attempted.filter((item) => isItemCorrect(item, answers[item.id])).length;
    const r: NaplanResult = {
      testId: test.id,
      domain: test.domain,
      year: test.year,
      mode,
      answers,
      correct,
      total: attempted.length,
      completedAt: new Date().toISOString(),
    };
    setResult(r);
    onFinish(r);
    setPhase('results');
  }

  function finishTest() {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isWriting) {
      if (phase !== 'results' && phase !== 'rubric') {
        setPhase('rubric');
        return;
      }
      const checked = WRITING_RUBRIC.filter((r) => rubric.has(r.id));
      const r: NaplanResult = {
        testId: test.id,
        domain: test.domain,
        year: test.year,
        mode,
        answers: { writing: text },
        correct: checked.length,
        total: WRITING_RUBRIC.length,
        rubric: checked.map((r2) => r2.id),
        completedAt: new Date().toISOString(),
      };
      setResult(r);
      onFinish(r);
      setPhase('results');
      return;
    }
    const correct = steps.filter((s) => isItemCorrect(s.item, answers[s.item.id])).length;
    const r: NaplanResult = {
      testId: test.id,
      domain: test.domain,
      year: test.year,
      mode,
      answers,
      correct,
      total: steps.length,
      completedAt: new Date().toISOString(),
    };
    setResult(r);
    onFinish(r);
    setPhase('results');
  }

  function formatAnswer(v: string | string[] | undefined): string {
    if (v === undefined || (Array.isArray(v) && v.length === 0) || v === '') return 'Not answered';
    return Array.isArray(v) ? v.join(', ') : v;
  }

  const pct = result && result.total > 0 ? Math.round((result.correct / result.total) * 100) : 0;
  const isPerfect = !!result && !isWriting && result.total > 0 && result.correct === result.total;
  const descriptor =
    pct >= 80 ? 'Strong, keep it up!' : pct >= 50 ? 'Developing, good progress!' : 'Getting started, keep practising!';

  const resultIcon: 'quill' | 'burst' | 'sprout' = isWriting ? 'quill' : pct >= 80 ? 'burst' : 'sprout';
  const resultTint = isWriting ? chrome.accent : pct >= 80 ? palette.sunny : pct >= 50 ? palette.teal : palette.slate;
  const textType = prompt?.textType === 'persuasive' ? 'Persuasive writing' : 'Narrative writing';
  const textTypeIcon: 'chat-bubble' | 'pen' = prompt?.textType === 'persuasive' ? 'chat-bubble' : 'pen';

  // Practice sessions can end mid-lap (via "End practice") or run several
  // laps, so the review/breakdown below is built from what was actually
  // attempted rather than the full (possibly looped) `steps` list. Timed
  // tests keep the fixed section list, a skipped item there is a real 0.
  const reviewItems = useMemo(() => {
    if (!result || isWriting) return [];
    if (mode === 'practice') {
      return flatItems.filter((item) => result.answers[item.id] !== undefined);
    }
    return steps.map((s) => s.item);
  }, [result, isWriting, mode, flatItems, steps]);

  const skillBreakdown = useMemo(() => {
    if (!result || isWriting) return [];
    const map = new Map<string, { c: number; t: number }>();
    for (const item of reviewItems) {
      const entry = map.get(item.skill) ?? { c: 0, t: 0 };
      entry.t += 1;
      if (isItemCorrect(item, result.answers[item.id])) entry.c += 1;
      map.set(item.skill, entry);
    }
    return [...map.entries()];
  }, [result, reviewItems, isWriting]);

  return (
    <ScreenShell
      active="NaplanTest"
      child={child}
      onHome={onHome}
      onProgress={onProgress}
      onSetup={onSetup}
      onSignOut={onSignOut}
    >
      {phase === 'intro' && (
        <View style={styles.pad}>
          <View style={styles.iconTextRow}>
            <Icon name={meta.icon} tint={palette[meta.accent]} size={18} />
            <Text style={styles.domainLabel}>
              {meta.label} · Year {test.year}
            </Text>
          </View>
          <Text style={styles.title}>{test.title}</Text>

          {isWriting ? (
            <View style={styles.introCard}>
              <View style={styles.iconTextRow}>
                <Icon name={textTypeIcon} tint={chrome.accent} size={16} />
                <Text style={styles.introPromptTitle}>{textType}</Text>
              </View>
              <Text style={styles.introPrompt}>{prompt?.text}</Text>
              <Text style={styles.introHint}>
                You'll have about {test.durationMin} minutes. Write one complete text, then mark it
                against the check-list.
              </Text>
            </View>
          ) : (
            <View style={styles.introCard}>
              <View style={styles.iconTextRow}>
                <Icon name="clipboard" tint={palette.ink} size={16} />
                <Text style={styles.introLine}>{steps.length} practice items</Text>
              </View>
              <View style={styles.iconTextRow}>
                <Icon name="timer" tint={palette.ink} size={16} />
                <Text style={styles.introLine}>{test.durationMin} minutes (like the real test)</Text>
              </View>
              <View style={styles.iconTextRow}>
                <Icon name="lock" tint={palette.ink} size={16} />
                <Text style={styles.introLine}>
                  {test.sections.filter((s) => s.locked).length > 0 ? 'Some sections lock, no going back' : 'One section'}
                </Text>
              </View>
            </View>
          )}

          <Text style={styles.label}>How do you want to practise?</Text>
          <View style={styles.modeRow}>
            <Pressable
              onPress={() => setMode('practice')}
              style={[styles.modeBtn, mode === 'practice' && styles.modeBtnOn]}
            >
              <View style={[styles.iconTextRow, styles.modeBtnInner]}>
                <Icon name="sprout" tint={mode === 'practice' ? palette.white : chrome.accent} size={18} />
                <Text style={[styles.modeText, mode === 'practice' && styles.modeTextOn]}>Practice</Text>
              </View>
              <Text style={[styles.modeSub, mode === 'practice' && styles.modeTextOn]}>Instant feedback</Text>
            </Pressable>
            <Pressable
              onPress={() => setMode('timed')}
              style={[styles.modeBtn, mode === 'timed' && styles.modeBtnOn]}
            >
              <View style={[styles.iconTextRow, styles.modeBtnInner]}>
                <Icon name="timer" tint={mode === 'timed' ? palette.white : chrome.accent} size={18} />
                <Text style={[styles.modeText, mode === 'timed' && styles.modeTextOn]}>Timed</Text>
              </View>
              <Text style={[styles.modeSub, mode === 'timed' && styles.modeTextOn]}>Real test feel</Text>
            </Pressable>
          </View>

          <PrimaryButton
            tone="header"
            label="Start test"
            icon="rocket"
            onPress={() => {
              setPhase('running');
              setSecondsLeft(test.durationMin * 60);
            }}
          />
          <Pressable onPress={onExit} hitSlop={12} style={{ marginTop: spacing.md, alignItems: 'center' }}>
            <Text style={styles.backText}>← Back to NAPLAN hub</Text>
          </Pressable>
        </View>
      )}

      {phase === 'running' && isWriting && (
        <View style={styles.pad}>
          {mode === 'timed' && (
            <View style={styles.timerRow}>
              <View style={styles.iconTextRow}>
                <Icon name="timer" tint={secondsLeft <= 300 ? palette.coral : palette.ink} size={18} />
                <Text style={[styles.timer, secondsLeft <= 300 && styles.timerWarn]}>{mm(secondsLeft)}</Text>
              </View>
              <Text style={styles.progress}>{text.trim().split(/\s+/).filter(Boolean).length} words</Text>
            </View>
          )}

          <View style={styles.sectionChip}>
            <Icon name={textTypeIcon} tint={chrome.primary} size={14} />
            <Text style={styles.sectionChipText}>{textType}</Text>
          </View>
          <View style={styles.stimulus}>
            <Text style={styles.stimulusTitle}>{prompt?.title}</Text>
            <Text style={styles.stimulusPara}>{prompt?.text}</Text>
          </View>

          <TextInput
            style={[styles.textInput, styles.writingInput]}
            value={text}
            onChangeText={setText}
            multiline
            placeholder={`Write your ${prompt?.textType ?? 'narrative'} text here…`}
            placeholderTextColor={palette.slate}
            textAlignVertical="top"
          />

          <PrimaryButton
            tone="header"
            label={`Finish writing (${text.trim().split(/\s+/).filter(Boolean).length} words)`}
            disabled={text.trim().split(/\s+/).filter(Boolean).length < 10}
            onPress={finishTest}
          />
          <Text style={styles.wordHint}>
            Aim for a full text, real NAPLAN writing needs paragraphs and detail.
          </Text>
        </View>
      )}

      {phase === 'running' && !isWriting && currentItem && (
        <View style={styles.pad}>
          {mode === 'timed' && (
            <View style={styles.timerRow}>
              <View style={styles.iconTextRow}>
                <Icon name="timer" tint={secondsLeft <= 300 ? palette.coral : palette.ink} size={18} />
                <Text style={[styles.timer, secondsLeft <= 300 && styles.timerWarn]}>{mm(secondsLeft)}</Text>
              </View>
              <Text style={styles.progress}>
                {index + 1} / {steps.length}
              </Text>
            </View>
          )}
          {mode === 'practice' && (
            <View style={styles.timerRow}>
              <Text style={styles.progress}>
                {lap > 0 ? `Lap ${lap + 1} · ` : ''}
                {index + 1}/{steps.length} · {checkedItems.size} answered
              </Text>
              <Pressable onPress={endPractice} hitSlop={8}>
                <Text style={styles.endPracticeText}>End practice</Text>
              </Pressable>
            </View>
          )}

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${((index + 1) / steps.length) * 100}%` }]} />
          </View>

          {step.isFirst && (
            <View style={styles.sectionChip}>
              {test.sections[step.sectionIdx].locked && (
                <Icon name="lock" tint={chrome.primary} size={13} />
              )}
              <Text style={styles.sectionChipText}>{test.sections[step.sectionIdx].title}</Text>
            </View>
          )}

          {stimulus && (
            <View style={styles.stimulus}>
              <Text style={styles.stimulusTitle}>{stimulus.title}</Text>
              {stimulus.body.map((p, i) => (
                <Text key={i} style={styles.stimulusPara}>
                  {p}
                </Text>
              ))}
            </View>
          )}

          <View style={styles.questionCard}>
            <Text style={styles.qPrompt}>
              {index + 1}. {currentItem.prompt}
            </Text>

            {currentItem.itemType === 'text' ? (
              <View>
                <TextInput
                  style={[
                    styles.textInput,
                    showFeedback && (isItemCorrect(currentItem, answers[currentItem.id]) ? styles.inputGood : styles.inputBad),
                  ]}
                  value={text}
                  onChangeText={setText}
                  editable={!itemChecked}
                  placeholder="Type your answer"
                  placeholderTextColor={palette.slate}
                />
                {showFeedback && (
                  <View style={styles.iconTextRow}>
                    <Icon
                      name={isItemCorrect(currentItem, answers[currentItem.id]) ? 'check-box' : 'box'}
                      tint={isItemCorrect(currentItem, answers[currentItem.id]) ? palette.teal : palette.coral}
                      size={16}
                    />
                    <Text style={styles.feedbackHint}>
                      {isItemCorrect(currentItem, answers[currentItem.id])
                        ? 'Correct!'
                        : `Correct answer: ${formatAnswer(currentItem.answer)}`}
                    </Text>
                  </View>
                )}
              </View>
            ) : (
              <View style={styles.optionList}>
                {(currentItem.options ?? []).map((o) => {
                  const selected =
                    currentItem.itemType === 'multi'
                      ? ((answers[currentItem.id] as string[] | undefined) ?? []).includes(o)
                      : answers[currentItem.id] === o;
                  const isCorrectOption = Array.isArray(currentItem.answer)
                    ? currentItem.answer.includes(o)
                    : currentItem.answer === o;
                  return (
                    <Pressable
                      key={o}
                      onPress={() => !itemChecked && selectOption(o)}
                      style={[
                        styles.option,
                        selected && styles.optionSelected,
                        showFeedback && (isCorrectOption ? styles.optionGood : selected ? styles.optionBad : null),
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
                      {showFeedback && (isCorrectOption || selected) && (
                        <Text style={styles.feedbackMark}>{isCorrectOption ? '✓' : '✗'}</Text>
                      )}
                    </Pressable>
                  );
                })}
              </View>
            )}

            <View style={styles.actions}>
              <Pressable
                onPress={() =>
                  setFlagged((f) => {
                    const n = new Set(f);
                    if (n.has(currentItem.id)) n.delete(currentItem.id);
                    else n.add(currentItem.id);
                    return n;
                  })
                }
                style={styles.flagBtn}
              >
                <View style={styles.iconTextRow}>
                  <Icon
                    name="flag"
                    size={15}
                    tint={flagged.has(currentItem.id) ? chrome.accent : palette.slate}
                  />
                  <Text style={[styles.flagText, flagged.has(currentItem.id) && styles.flagTextOn]}>
                    {flagged.has(currentItem.id) ? 'Flagged' : 'Flag'}
                  </Text>
                </View>
              </Pressable>
              {inPractice && !itemChecked ? (
                <PrimaryButton tone="header" label="Submit" disabled={!answered} onPress={submitCurrent} />
              ) : (
                <PrimaryButton
                  tone="header"
                  label={mode === 'timed' && index === steps.length - 1 ? 'Finish test' : 'Next →'}
                  onPress={next}
                />
              )}
            </View>
          </View>
        </View>
      )}

      {phase === 'gate' && gateSection !== null && (
        <View style={styles.pad}>
          <View style={styles.gateCard}>
            <View style={[styles.iconTextRow, styles.gateTitleRow]}>
              <Icon name="lock" tint={chrome.accent} size={22} />
              <Text style={styles.gateTitle}>{test.sections[gateSection].title}</Text>
            </View>
            <Text style={styles.gateBody}>
              This section is locked, once you continue you can't return to the
              previous section to change your answers. Ready?
            </Text>
            <PrimaryButton
              tone="header"
              label="Continue"
              onPress={() => {
                setGateSection(null);
                advance();
              }}
            />
            <PrimaryButton
              tone="header"
              label="Go back and check"
              onPress={() => setGateSection(null)}
            />
          </View>
        </View>
      )}

      {phase === 'rubric' && (
        <View style={styles.pad}>
          <View style={styles.iconTextRow}>
            <Icon name="pen" tint={palette.ink} size={22} />
            <Text style={styles.title}>Self check</Text>
          </View>
          <Text style={styles.rubricIntro}>
            Tick the check-list items you think you did. This is your own
            reflection, it never becomes an official mark.
          </Text>
          <View style={styles.rubricCard}>
            {WRITING_RUBRIC.map((r) => {
              const on = rubric.has(r.id);
              return (
                <Pressable
                  key={r.id}
                  onPress={() =>
                    setRubric((prev) => {
                      const n = new Set(prev);
                      if (n.has(r.id)) n.delete(r.id);
                      else n.add(r.id);
                      return n;
                    })
                  }
                  style={[styles.rubricRow, on && styles.rubricRowOn]}
                >
                  <View style={styles.iconTextRow}>
                    <Icon name={on ? 'check-box' : 'box'} size={24} tint={on ? chrome.primary : palette.slate} />
                    <Text style={[styles.rubricRowText, on && styles.rubricRowTextOn]}>{r.label}</Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
          <PrimaryButton tone="header" label="See my result" onPress={finishTest} />
        </View>
      )}

      {phase === 'results' && result && (
        <View style={styles.pad}>
          {isWriting ? (
            <View style={styles.resultCard}>
              <Icon name="quill" tint={chrome.accent} size={46} />
              <Text style={styles.resultTitle}>Writing complete!</Text>
              <Text style={styles.resultMeta}>
                {result.rubric?.length ?? 0}/{result.total} check-list items · {result.answers.writing ? String(result.answers.writing).trim().split(/\s+/).filter(Boolean).length : 0} words
              </Text>
              <BadgeChip label={descriptor} earned />
            </View>
          ) : (
            <View style={styles.resultCard}>
              <Icon name={resultIcon} tint={resultTint} size={46} />
              <Text style={styles.resultTitle}>
                {result.correct}/{result.total} correct
              </Text>
              <Text style={styles.resultPct}>{pct}%</Text>
              <View style={styles.badgeRow}>
                <BadgeChip label={descriptor} earned />
                {isPerfect && <BadgeChip label="Perfect score!" earned />}
              </View>
            </View>
          )}

          <Text style={styles.sectionTitle}>Your breakdown</Text>
          {isWriting ? (
            <View style={styles.skillCard}>
              <Text style={styles.skillLabel}>Check-list</Text>
              {WRITING_RUBRIC.map((r) => (
                <View key={r.id} style={styles.iconTextRow}>
                  <Icon
                    name={result.rubric?.includes(r.id) ? 'check-box' : 'box'}
                    size={20}
                    tint={result.rubric?.includes(r.id) ? chrome.primary : palette.slate}
                  />
                  <Text style={styles.rubricLine}>{r.label}</Text>
                </View>
              ))}
            </View>
          ) : (
            skillBreakdown.map(([skill, { c, t }]) => {
              const p = t > 0 ? Math.round((c / t) * 100) : 0;
              return (
                <View key={skill} style={styles.skillCard}>
                  <Text style={styles.skillLabel}>{skill}</Text>
                  <View style={styles.track}>
                    <View style={[styles.fill, { width: `${p}%` }]} />
                  </View>
                  <Text style={styles.skillPct}>
                    {c}/{t} · {p}%
                  </Text>
                </View>
              );
            })
          )}

          {!isWriting && (
            <>
              <Text style={styles.sectionTitle}>Question by question</Text>
              {reviewItems.map((item, i) => {
                const given = result.answers[item.id];
                const itemCorrect = isItemCorrect(item, given);
                return (
                  <View
                    key={item.id}
                    style={[styles.reviewRow, itemCorrect ? styles.reviewRowCorrect : styles.reviewRowWrong]}
                  >
                    <View style={styles.reviewHeaderRow}>
                      <Icon
                        name={itemCorrect ? 'check-box' : 'box'}
                        tint={itemCorrect ? palette.teal : palette.coral}
                        size={18}
                      />
                      <Text style={styles.reviewPrompt} numberOfLines={3}>
                        {i + 1}. {item.prompt}
                      </Text>
                    </View>
                    <Text style={styles.reviewAnswer}>
                      Your answer:{' '}
                      <Text style={itemCorrect ? styles.reviewAnswerOk : styles.reviewAnswerBad}>
                        {formatAnswer(given)}
                      </Text>
                    </Text>
                    {!itemCorrect && (
                      <Text style={styles.reviewAnswer}>
                        Correct answer: <Text style={styles.reviewAnswerOk}>{formatAnswer(item.answer)}</Text>
                      </Text>
                    )}
                  </View>
                );
              })}
            </>
          )}

          <Text style={styles.indicative}>
            Indicative result for practice only, not an official NAPLAN score.
          </Text>

          <PrimaryButton tone="header" label="Back to NAPLAN hub" onPress={onExit} />
          <Pressable onPress={onHome} hitSlop={12} style={{ marginTop: spacing.md, alignItems: 'center' }}>
            <View style={styles.iconTextRow}>
              <Icon name="house" tint={palette.slate} size={16} />
              <Text style={styles.backText}>Home</Text>
            </View>
          </Pressable>
        </View>
      )}
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: palette.cream, flexGrow: 1, paddingBottom: spacing.xl },
  pad: { paddingHorizontal: spacing.xl },
  domainLabel: { fontSize: 13, fontWeight: '800', color: palette.slate, textTransform: 'uppercase', marginTop: spacing.sm },
  title: { fontSize: 24, fontWeight: '900', color: palette.ink, marginTop: spacing.xs },
  introCard: {
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: chrome.primary + '33',
    padding: spacing.lg,
    marginTop: spacing.lg,
    gap: spacing.sm,
  },
  introPromptTitle: { fontSize: 16, fontWeight: '800', color: palette.ink },
  introPrompt: { fontSize: 17, lineHeight: 25, color: palette.ink },
  introHint: { fontSize: 13, color: palette.slate, lineHeight: 19 },
  introLine: { fontSize: 15, color: palette.ink, fontWeight: '600' },
  label: { fontSize: 13, fontWeight: '800', color: palette.ink, textTransform: 'uppercase', marginTop: spacing.lg, marginBottom: spacing.sm },
  modeRow: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg },
  modeBtn: {
    flex: 1,
    backgroundColor: chrome.primary + '0d',
    borderRadius: radius.pill,
    borderWidth: 2,
    borderColor: chrome.primary + '55',
    padding: spacing.md,
  },
  modeBtnOn: { backgroundColor: chrome.primary, borderColor: chrome.primary },
  modeBtnInner: { marginBottom: spacing.xs },
  modeText: { fontSize: 16, fontWeight: '900', color: palette.ink },
  modeSub: { fontSize: 12, color: palette.slate, marginTop: spacing.xs },
  modeTextOn: { color: palette.white },
  backText: { fontSize: 14, fontWeight: '700', color: palette.slate },
  timerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.md },
  timer: { fontSize: 16, fontWeight: '900', color: palette.ink },
  timerWarn: { color: palette.coral },
  progress: { fontSize: 14, fontWeight: '700', color: palette.slate },
  endPracticeText: { fontSize: 13, fontWeight: '800', color: chrome.accent },
  progressTrack: { height: 8, borderRadius: radius.pill, backgroundColor: chrome.primary + '22', marginTop: spacing.sm, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: radius.pill, backgroundColor: chrome.primary },
  iconTextRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  sectionChip: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: chrome.primary + '14',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginTop: spacing.lg,
  },
  sectionChipText: { fontSize: 12, fontWeight: '800', color: palette.ink },
  stimulus: {
    backgroundColor: chrome.primary + '0d',
    borderColor: chrome.primary + '55',
    borderWidth: 2,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginTop: spacing.md,
  },
  stimulusTitle: { fontSize: 15, fontWeight: '900', color: palette.ink },
  stimulusPara: { fontSize: 15, lineHeight: 22, color: palette.ink, marginTop: spacing.xs },
  questionCard: {
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.md,
    shadowColor: palette.ink,
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 2,
  },
  qPrompt: { fontSize: 17, fontWeight: '700', color: palette.ink, marginBottom: spacing.md, lineHeight: 24 },
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
  feedbackMark: { fontSize: 18, fontWeight: '900' },
  feedbackHint: { fontSize: 13, fontWeight: '700', color: palette.ink },
  textInput: {
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: chrome.primary + '66',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    fontSize: 16,
    color: palette.ink,
    marginBottom: spacing.md,
  },
  inputGood: { borderColor: palette.teal, backgroundColor: palette.lime + '22' },
  inputBad: { borderColor: palette.coral, backgroundColor: palette.coral + '15' },
  writingInput: { minHeight: 220, marginTop: spacing.md, lineHeight: 24, borderRadius: radius.lg, textAlignVertical: 'top' },
  wordHint: { fontSize: 12, color: palette.slate, textAlign: 'center', marginTop: spacing.md },
  rubricIntro: { fontSize: 14, color: palette.slate, lineHeight: 20, marginTop: spacing.md },
  rubricCard: { gap: spacing.sm, marginTop: spacing.lg, marginBottom: spacing.lg },
  rubricRow: {
    backgroundColor: chrome.primary + '0d',
    borderRadius: radius.pill,
    borderWidth: 2,
    borderColor: chrome.primary + '55',
    padding: spacing.md,
  },
  rubricRowOn: { backgroundColor: chrome.primary + '14', borderColor: chrome.primary },
  rubricRowText: { fontSize: 15, color: palette.ink, fontWeight: '600' },
  rubricRowTextOn: { color: palette.ink },
  actions: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.md, marginTop: spacing.lg },
  flagBtn: { paddingVertical: spacing.sm, paddingHorizontal: spacing.md },
  flagText: { fontSize: 14, fontWeight: '700', color: palette.slate },
  flagTextOn: { color: chrome.accent },
  gateCard: {
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    borderWidth: 3,
    borderColor: chrome.primary,
    padding: spacing.xl,
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  gateTitle: { fontSize: 20, fontWeight: '900', color: palette.ink, textAlign: 'center' },
  gateTitleRow: { justifyContent: 'center' },
  gateBody: { fontSize: 15, color: palette.ink, lineHeight: 22, textAlign: 'center' },
  resultCard: {
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.xl,
    borderWidth: 3,
    borderColor: palette.sunny,
    marginTop: spacing.lg,
  },
  resultTitle: { fontSize: 22, fontWeight: '900', color: palette.ink },
  resultPct: { fontSize: 34, fontWeight: '900', color: chrome.primary },
  resultMeta: { fontSize: 14, color: palette.slate, fontWeight: '600' },
  sectionTitle: { fontSize: 16, fontWeight: '800', color: palette.ink, marginTop: spacing.xl, marginBottom: spacing.md },
  skillCard: {
    backgroundColor: palette.white,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  skillLabel: { fontSize: 14, fontWeight: '800', color: palette.ink, textTransform: 'capitalize' },
  rubricLine: { fontSize: 14, color: palette.ink },
  track: { height: 10, borderRadius: radius.pill, backgroundColor: chrome.primary + '22', marginTop: spacing.sm, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: radius.pill, backgroundColor: chrome.primary },
  skillPct: { fontSize: 12, color: palette.slate, marginTop: spacing.xs, fontWeight: '600' },
  badgeRow: { flexDirection: 'row', gap: spacing.sm, flexWrap: 'wrap', justifyContent: 'center' },
  reviewRow: {
    backgroundColor: palette.white,
    borderRadius: radius.md,
    borderWidth: 2,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  reviewRowCorrect: { borderColor: palette.teal + '55' },
  reviewRowWrong: { borderColor: palette.coral + '55' },
  reviewHeaderRow: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.sm },
  reviewPrompt: { flex: 1, fontSize: 14, fontWeight: '700', color: palette.ink, lineHeight: 20 },
  reviewAnswer: { fontSize: 13, color: palette.slate, marginTop: spacing.xs, marginLeft: 26 },
  reviewAnswerOk: { color: palette.teal, fontWeight: '700' },
  reviewAnswerBad: { color: palette.coral, fontWeight: '700' },
  indicative: { fontSize: 12, color: palette.slate, textAlign: 'center', marginVertical: spacing.lg },
});
