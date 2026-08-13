import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { palette, radius, spacing, type, THEME_PRESETS, type ChromeTokens } from '../theme/colors';
import { useTheme, useThemeChrome } from '../state/ThemeContext';
import { ScreenShell } from '../components/ScreenShell';
import { Icon } from '../components/illustrations/icons';
import { BilbyLogoMark } from '../components/BilbyLogo';
import { DEFAULT_PLANNER_CONFIG } from '../planner';
import { YEAR_LEVELS, type ChildProfile, type YearLevel } from '../types/curriculum';
import { STATES, SUBJECTS } from '../data/subjects';
import { PrimaryButton } from '../components/PrimaryButton';

function FieldLabel({
  children,
  first = false,
}: {
  children: React.ReactNode;
  first?: boolean;
}) {
  const chrome = useThemeChrome();
  const styles = getStyles(chrome);
  return (
    <View style={[styles.labelRow, first && styles.labelRowFirst]}>
      <View style={styles.labelDot} />
      <Text style={styles.label}>{children}</Text>
    </View>
  );
}

/**
 * Child-profile form. Two modes:
 *   - create (no `initial`): the onboarding step that builds a fresh profile;
 *   - edit (`initial`): the Setup screen, which also exposes Cancel + a
 *     destructive "Reset all data" action.
 * Used from both Onboarding and Setup routes so the form stays in one place.
 */
export function OnboardingScreen({
  initial,
  onDone,
  onCancel,
  onReset,
  onSignOut,
}: {
  initial?: ChildProfile;
  onDone: (child: ChildProfile) => void;
  onCancel?: () => void;
  onReset?: () => void;
  onSignOut?: () => void;
}) {
  const { themeId, setThemeId } = useTheme();
  const chrome = useThemeChrome();
  const styles = getStyles(chrome);
  const editing = Boolean(initial);
  const [name, setName] = useState(initial?.name ?? '');
  const [year, setYear] = useState<YearLevel>(initial?.year ?? '6');
  const [stateId, setStateId] = useState(initial?.state ?? 'nsw');
  const [joinWeek, setJoinWeek] = useState(initial?.joinWeek ?? 1);
  const [replanned, setReplanned] = useState(initial?.replanned ?? false);
  // Phase-1 facade: English + Maths are P1; Science/HASS toggleable in Pro.
  const [subjects, setSubjects] = useState<(typeof SUBJECTS)[number]['id'][]>(
    initial?.subjects ?? ['mathematics', 'english'],
  );

  const toggleSubject = (id: (typeof SUBJECTS)[number]['id']) =>
    setSubjects((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );

  const canSubmit = name.trim().length > 0 && subjects.length > 0;

  const submit = () =>
    onDone({
      id: initial?.id ?? `child-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
      name: name.trim(),
      avatar: initial?.avatar ?? 'bilby-green',
      state: stateId,
      year,
      subjects,
      createdAt: initial?.createdAt ?? new Date().toISOString(),
      joinWeek,
      replanned,
    });

  return (
    <ScreenShell
      active="Setup"
      child={initial}
      onHome={onCancel ?? (() => {})}
      onSetup={() => {}}
      onSignOut={onSignOut}
    >
      <View style={styles.heading}>
        <View style={styles.headingRow}>
          <View style={styles.headingMascot}>
            <BilbyLogoMark size={40} tone="light" />
          </View>
          <View style={styles.headingText}>
            <Text style={styles.eyebrow}>{editing ? 'Settings' : 'Welcome'}</Text>
            <Text style={styles.title}>
              {editing ? `Setup — ${initial!.name}'s plan` : "G'day! Meet your learning buddy."}
            </Text>
            <Text style={styles.headingSub}>
              {editing
                ? 'Tweak the plan, subjects and pacing for your child.'
                : "A learning plan made just for your child — it takes a minute."}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.form}>
      <FieldLabel first>Child's name</FieldLabel>
      <View style={styles.inputWrap}>
        <Icon name="pen" tint={chrome.accent} size={18} />
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="e.g. Mia"
          placeholderTextColor={palette.slate}
          accessibilityLabel="Child's name"
        />
      </View>

      <FieldLabel>School year</FieldLabel>
      <View style={styles.yearGrid}>
        {YEAR_LEVELS.map((y) => {
          const selected = y === year;
          return (
            <Pressable
              key={y}
              onPress={() => setYear(y)}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              accessibilityLabel={y === 'K' ? 'Kindergarten' : `Year ${y}`}
              style={[styles.yearPill, selected && styles.yearPillSelected]}
            >
              <Text style={[styles.yearText, selected && styles.yearTextSelected]}>
                {y === 'K' ? 'K' : `Y${y}`}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <FieldLabel>State (curriculum)</FieldLabel>
      <View style={styles.stateRow}>
        {STATES.slice(0, 4).map((s) => {
          const selected = s.id === stateId;
          return (
            <Pressable
              key={s.id}
              onPress={() => setStateId(s.id)}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              accessibilityLabel={s.label}
              style={[styles.statePill, selected && styles.statePillSelected]}
            >
              <Text style={[styles.stateText, selected && styles.stateTextSelected]}>
                {s.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <FieldLabel>Joined in school week</FieldLabel>
      <View style={styles.weekRow}>
        <Pressable
          onPress={() => setJoinWeek((w) => Math.max(1, w - 1))}
          accessibilityRole="button"
          accessibilityLabel="Earlier week"
          style={styles.weekBtn}
        >
          <Text style={styles.weekBtnText}>−</Text>
        </Pressable>
        <View style={styles.weekValue}>
          <Text style={styles.weekValueText}>Week {joinWeek}</Text>
          <Text style={styles.weekValueSub}>of {DEFAULT_PLANNER_CONFIG.totalWeeks} teaching weeks</Text>
        </View>
        <Pressable
          onPress={() => setJoinWeek((w) => Math.min(DEFAULT_PLANNER_CONFIG.totalWeeks, w + 1))}
          accessibilityRole="button"
          accessibilityLabel="Later week"
          style={styles.weekBtn}
        >
          <Text style={styles.weekBtnText}>+</Text>
        </Pressable>
      </View>

      {editing && (
        <Pressable
          onPress={() => setReplanned((v) => !v)}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: replanned }}
          style={[styles.replanRow, replanned && styles.replanRowOn]}
        >
          <Icon name={replanned ? 'check-box' : 'box'} size={26} tint={replanned ? chrome.primary : palette.slate} />
          <View style={{ flex: 1 }}>
            <Text style={styles.replanTitle}>Re-plan from now</Text>
            <Text style={styles.replanBody}>
              Packs the remaining topics into the weeks left and skips the ones already completed.
            </Text>
          </View>
        </Pressable>
      )}

      <FieldLabel>Subjects in this plan</FieldLabel>
      <View style={styles.subjectList}>
        {SUBJECTS.map((subj) => {
          const on = subjects.includes(subj.id);
          return (
            <Pressable key={subj.id} onPress={() => toggleSubject(subj.id)} accessibilityRole="checkbox" accessibilityState={{ checked: on }} accessibilityLabel={`${subj.label}: ${subj.tagline}`} style={[styles.subjectRow, on && styles.subjectRowOn]}>
              <View style={[styles.subjectIcon, { borderColor: on ? chrome.primary : chrome.primary + '55' }]}>
                <Icon name={subj.icon} tint={on ? chrome.primary : palette.slate} size={22} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.subjectTitle}>{subj.label}</Text>
                <Text style={styles.subjectSub}>{subj.tagline}</Text>
              </View>
              <Icon name={on ? 'check-box' : 'box'} size={24} tint={on ? chrome.primary : palette.slate} />
            </Pressable>
          );
        })}
      </View>

      {editing && (
        <>
          <FieldLabel>App theme</FieldLabel>
          <View style={styles.themeRow}>
            {Object.values(THEME_PRESETS).map((preset) => {
              const on = preset.id === themeId;
              return (
                <Pressable
                  key={preset.id}
                  onPress={() => setThemeId(preset.id)}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: on }}
                  accessibilityLabel={`${preset.label} theme`}
                  style={styles.themeOption}
                >
                  <View
                    style={[
                      styles.themeSwatch,
                      { backgroundColor: preset.chrome.primary },
                      on && styles.themeSwatchOn,
                    ]}
                  >
                    <View style={[styles.themeSwatchHalf, { backgroundColor: preset.chrome.accent }]} />
                    {on && <Icon name="check-box" tint={palette.white} size={16} />}
                  </View>
                  <Text style={[styles.themeLabel, on && styles.themeLabelOn]}>{preset.label}</Text>
                </Pressable>
              );
            })}
          </View>
        </>
      )}

      <PrimaryButton
        disabled={!canSubmit}
        tone="header"
        label={editing ? 'Save changes' : `Create ${name.trim() || 'child'}'s plan`}
        icon="rocket"
        onPress={submit}
      />

      {onCancel && (
        <Pressable onPress={onCancel} hitSlop={12} style={styles.backRow}>
          <Text style={styles.backText}>← Back, keep current plan</Text>
        </Pressable>
      )}

      {editing && onSignOut && (
        <View style={styles.danger}>
          <View style={styles.dangerRow}>
            <Icon name="lock" tint={palette.slate} size={18} />
            <Text style={styles.dangerTitle}>Account</Text>
          </View>
          <Text style={styles.dangerBody}>
            Sign out of this Google account on this device. Your saved plans stay
            here; you can sign back in any time.
          </Text>
          <Pressable
            onPress={onSignOut}
            style={({ pressed }) => [styles.signOutBtn, pressed && styles.pressed]}
          >
            <Text style={styles.signOutBtnText}>Sign out</Text>
          </Pressable>
        </View>
      )}

      {editing && onReset && (
        <View style={styles.danger}>
          <View style={styles.dangerRow}>
            <Icon name="cog" tint={palette.coral} size={18} />
            <Text style={styles.dangerTitle}>Reset</Text>
          </View>
          <Text style={styles.dangerBody}>
            Wipe this device's saved profile, badges and NAPLAN results and start
            fresh. This can't be undone.
          </Text>
          <Pressable
            onPress={onReset}
            style={({ pressed }) => [styles.resetBtn, pressed && styles.pressed]}
          >
            <Text style={styles.resetBtnText}>Reset all data</Text>
          </Pressable>
        </View>
      )}
      </View>
    </ScreenShell>
  );
}

const getStyles = (chrome: ChromeTokens) =>
  StyleSheet.create({
  heading: { paddingHorizontal: spacing.lg, marginTop: spacing.lg, marginBottom: spacing.lg },
  headingRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  headingMascot: {
    width: 64,
    height: 64,
    borderRadius: radius.pill,
    backgroundColor: chrome.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: { flex: 1 },
  eyebrow: {
    fontSize: type.label,
    fontWeight: '800',
    color: chrome.accent,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  title: { fontSize: type.h1, fontWeight: '900', color: palette.ink },
  headingSub: {
    fontSize: type.bodySmall,
    color: palette.slate,
    marginTop: spacing.xs,
    lineHeight: 18,
  },
  form: {
    marginHorizontal: spacing.lg,
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    shadowColor: palette.ink,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 14,
    elevation: 4,
  },
  labelRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: spacing.lg, marginBottom: spacing.sm },
  labelRowFirst: { marginTop: 0 },
  labelDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: chrome.accent },
  label: { fontSize: 13, fontWeight: '800', color: palette.ink, textTransform: 'uppercase', letterSpacing: 0.4 },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: palette.white,
    borderRadius: radius.pill,
    borderWidth: 2,
    borderColor: chrome.primary + '66',
    paddingHorizontal: spacing.md,
  },
  input: {
    flex: 1,
    paddingVertical: spacing.md,
    fontSize: 17,
    color: palette.ink,
  },
  yearGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  yearPill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    backgroundColor: chrome.primary + '14',
    borderWidth: 2,
    borderColor: chrome.primary + '55',
    minWidth: 52,
    alignItems: 'center',
  },
  yearPillSelected: { backgroundColor: chrome.primary, borderColor: chrome.primary },
  yearText: { fontSize: 15, fontWeight: '800', color: palette.ink },
  yearTextSelected: { color: palette.white },
  stateRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  weekRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  weekBtn: {
    width: 46,
    height: 46,
    borderRadius: radius.pill,
    borderWidth: 2,
    borderColor: chrome.primary,
    backgroundColor: chrome.primary + '14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekBtnText: { fontSize: 24, fontWeight: '900', color: chrome.primary, lineHeight: 28 },
  weekValue: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: chrome.primary + '14',
    borderWidth: 2,
    borderColor: chrome.primary + '88',
    borderRadius: radius.pill,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  weekValueText: { fontSize: 17, fontWeight: '900', color: palette.ink },
  weekValueSub: { fontSize: 12, color: palette.slate, marginTop: 2 },
  replanRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: chrome.primary + '0d',
    borderRadius: radius.pill,
    borderWidth: 2,
    borderColor: chrome.primary + '33',
    padding: spacing.md,
    marginTop: spacing.lg,
  },
  replanRowOn: { backgroundColor: chrome.primary + '1a', borderColor: chrome.primary },
  replanTitle: { fontSize: 15, fontWeight: '800', color: palette.ink },
  replanBody: { fontSize: 12, color: palette.slate, lineHeight: 18, marginTop: 2 },
  statePill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    backgroundColor: chrome.primary + '14',
    borderWidth: 2,
    borderColor: chrome.primary + '55',
  },
  statePillSelected: { backgroundColor: chrome.primary, borderColor: chrome.primary },
  stateText: { fontSize: 13, fontWeight: '700', color: palette.ink },
  stateTextSelected: { color: palette.white },
  subjectList: { gap: spacing.sm, marginBottom: spacing.lg },
  subjectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: chrome.primary + '0d',
    borderRadius: radius.pill,
    borderWidth: 2,
    borderColor: chrome.primary + '44',
    padding: spacing.md,
  },
  subjectRowOn: { backgroundColor: chrome.primary + '14', borderColor: chrome.primary, borderWidth: 2 },
  subjectIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectTitle: { fontSize: 16, fontWeight: '800', color: palette.ink },
  subjectSub: { fontSize: 12, color: palette.slate },
  themeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md, marginBottom: spacing.lg },
  themeOption: { alignItems: 'center', gap: spacing.xs, width: 64 },
  themeSwatch: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  themeSwatchOn: { borderColor: palette.ink },
  themeSwatchHalf: { position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%' },
  themeLabel: { fontSize: 12, fontWeight: '700', color: palette.slate },
  themeLabelOn: { color: palette.ink, fontWeight: '800' },
  backRow: { alignItems: 'center', marginTop: spacing.lg },
  backText: { fontSize: 14, fontWeight: '700', color: palette.slate },
  danger: {
    marginTop: spacing.xl,
    borderTopWidth: 2,
    borderTopColor: palette.coral + '33',
    paddingTop: spacing.lg,
  },
  dangerRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  dangerTitle: { fontSize: 16, fontWeight: '900', color: palette.ink },
  dangerBody: { fontSize: 12, color: palette.slate, lineHeight: 18, marginTop: spacing.xs, marginBottom: spacing.md },
  resetBtn: {
    backgroundColor: palette.coral + '22',
    borderWidth: 2,
    borderColor: palette.coral,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  resetBtnText: { fontSize: 15, fontWeight: '900', color: palette.coral },
  signOutBtn: {
    backgroundColor: palette.slate + '22',
    borderWidth: 2,
    borderColor: palette.slate,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  signOutBtnText: { fontSize: 15, fontWeight: '900', color: palette.slate },
  pressed: { opacity: 0.7 },
});
