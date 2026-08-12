import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { palette, radius, spacing, gradients } from '../theme/colors';
import { BilbyLogo } from '../components/BilbyLogo';
import { Icon } from '../components/illustrations/icons';
import { YEAR_LEVELS, type ChildProfile, type YearLevel } from '../types/curriculum';
import { STATES, SUBJECTS } from '../data/subjects';
import { PrimaryButton } from '../components/PrimaryButton';

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
  onOpenDoc,
}: {
  initial?: ChildProfile;
  onDone: (child: ChildProfile) => void;
  onCancel?: () => void;
  onReset?: () => void;
  onSignOut?: () => void;
  onOpenDoc?: (doc: 'privacy' | 'terms' | 'contact') => void;
}) {
  const editing = Boolean(initial);
  const [name, setName] = useState(initial?.name ?? '');
  const [year, setYear] = useState<YearLevel>(initial?.year ?? '6');
  const [stateId, setStateId] = useState(initial?.state ?? 'nsw');
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
    });

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scroll}>
      <LinearGradient
        colors={[...gradients.heroAlt]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <BilbyLogo markSize={56} textSize={30} tone="light" />
        <Text style={styles.hello}>
          {editing ? `Setup, ${initial!.name}'s learning plan` : "G'day! Meet your learning buddy."}
        </Text>
      </LinearGradient>

      <View style={styles.form}>
      <Text style={styles.label}>Child's name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="e.g. Mia"
        placeholderTextColor={palette.slate}
        accessibilityLabel="Child's name"
      />

      <Text style={styles.label}>School year</Text>
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

      <Text style={styles.label}>State (curriculum)</Text>
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

      <Text style={styles.label}>Subjects in this plan</Text>
      <View style={styles.subjectList}>
        {SUBJECTS.map((subj) => {
          const on = subjects.includes(subj.id);
          return (
            <Pressable key={subj.id} onPress={() => toggleSubject(subj.id)} accessibilityRole="checkbox" accessibilityState={{ checked: on }} accessibilityLabel={`${subj.label}: ${subj.tagline}`} style={[styles.subjectRow, on && styles.subjectRowOn]}>
              <View style={[styles.subjectIcon, { borderColor: on ? palette.teal : palette.sky }]}>
                <Icon name={subj.icon} tint={on ? palette.teal : palette.slate} size={22} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.subjectTitle}>{subj.label}</Text>
                <Text style={styles.subjectSub}>{subj.tagline}</Text>
              </View>
              <Icon name={on ? 'check-box' : 'box'} size={22} tint={on ? palette.teal : palette.slate} />
            </Pressable>
          );
        })}
      </View>

      <PrimaryButton
        disabled={!canSubmit}
        tone="coral"
        label={editing ? 'Save changes' : `Create ${name.trim() || 'child'}'s plan`}
        icon="rocket"
        onPress={submit}
      />

      {onCancel && (
        <Pressable onPress={onCancel} hitSlop={12} style={styles.backRow}>
          <Text style={styles.backText}>← Back, keep current plan</Text>
        </Pressable>
      )}

      {editing && onOpenDoc && (
        <View style={styles.legalLinks}>
          <Text style={styles.legalLinksLabel}>Legal</Text>
          <View style={styles.legalLinksRow}>
            {(['privacy', 'terms', 'contact'] as const).map((doc) => (
              <Pressable key={doc} onPress={() => onOpenDoc(doc)} hitSlop={8} accessibilityRole="link">
                <Text style={styles.legalLink}>{doc === 'privacy' ? 'Privacy' : doc === 'terms' ? 'Terms' : 'Contact'}</Text>
              </Pressable>
            ))}
          </View>
        </View>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: palette.cream },
  container: { paddingBottom: spacing.xl * 2, flexGrow: 1 },
  hero: { padding: spacing.xl, paddingBottom: spacing.xl * 1.4 },
  form: {
    marginHorizontal: spacing.lg,
    marginTop: -spacing.lg,
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    shadowColor: palette.ink,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 14,
    elevation: 4,
  },
  hello: { fontSize: 17, color: palette.white, opacity: 0.95, marginTop: spacing.md },
  label: { fontSize: 13, fontWeight: '800', color: palette.ink, textTransform: 'uppercase', marginTop: spacing.lg, marginBottom: spacing.sm },
  input: {
    backgroundColor: palette.white,
    borderRadius: radius.md,
    padding: spacing.md,
    fontSize: 17,
    color: palette.ink,
    borderWidth: 2,
    borderColor: palette.sky,
  },
  yearGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  yearPill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.sky,
    minWidth: 52,
    alignItems: 'center',
  },
  yearPillSelected: { backgroundColor: palette.teal, borderColor: palette.teal },
  yearText: { fontSize: 15, fontWeight: '800', color: palette.ink },
  yearTextSelected: { color: palette.white },
  stateRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  statePill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.grape + '66',
  },
  statePillSelected: { backgroundColor: palette.grape, borderColor: palette.grape },
  stateText: { fontSize: 13, fontWeight: '700', color: palette.ink },
  stateTextSelected: { color: palette.white },
  subjectList: { gap: spacing.sm, marginBottom: spacing.lg },
  subjectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: palette.white,
    borderRadius: radius.md,
    borderWidth: 2,
    borderColor: palette.sky + '66',
    padding: spacing.md,
  },
  subjectRowOn: { borderColor: palette.teal, borderWidth: 2 },
  subjectIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectTitle: { fontSize: 16, fontWeight: '800', color: palette.ink },
  subjectSub: { fontSize: 12, color: palette.slate },
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
  legalLinks: {
    marginTop: spacing.xl,
    borderTopWidth: 2,
    borderTopColor: palette.grape + '33',
    paddingTop: spacing.lg,
  },
  legalLinksLabel: { fontSize: 13, fontWeight: '800', color: palette.ink, textTransform: 'uppercase', marginBottom: spacing.sm },
  legalLinksRow: { flexDirection: 'row', gap: spacing.md },
  legalLink: { fontSize: 14, fontWeight: '700', color: palette.grape },
  pressed: { opacity: 0.7 },
});
