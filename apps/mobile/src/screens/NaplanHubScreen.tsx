import { useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { ChildProfile } from '../types/curriculum';
import type { NaplanDomain, NaplanResult, NaplanYear } from '../types/naplan';
import { ScreenShell } from '../components/ScreenShell';
import { BadgeChip } from '../components/BadgeChip';
import { Icon } from '../components/illustrations/icons';
import { chrome, palette, radius, spacing, gradients } from '../theme/colors';
import {
  nextNaplanYear,
  NAPLAN_DOMAINS,
  NAPLAN_YEARS,
  buildNaplanTest,
  orderedItems,
} from '../data/naplan/tests';

/**
 * NAPLAN practice hub, the track's landing page. Lists the four domains as
 * cards with official test shape and the child's best score per domain.
 *
 * Year handling: the hub works with or without a child profile. When a
 * profile exists, the year defaults to the child's NEXT NAPLAN year (their
 * current year if it's 3/5/7/9, otherwise the year up, e.g. a Year 6 child
 * practises toward Year 7), and it is always overridable via the year pills.
 */
export function NaplanHubScreen({
  child,
  results,
  onOpenTest,
  onHome,
  onProgress,
  onSetup,
  onSignOut,
}: {
  child: ChildProfile | null;
  results: NaplanResult[];
  onOpenTest: (year: NaplanYear, domain: NaplanDomain) => void;
  onHome: () => void;
  onProgress: () => void;
  onSetup: () => void;
  onSignOut?: () => void;
}) {
  const recommended = child ? nextNaplanYear(child.year) : null;
  const [year, setYear] = useResolvedYear(recommended, child);

  const bestFor = (domain: NaplanDomain): number | null => {
    const scores = results
      .filter((r) => r.year === year && r.domain === domain && r.total > 0)
      .map((r) => r.correct / r.total);
    return scores.length > 0 ? Math.round(Math.max(...scores) * 100) : null;
  };

  return (
    <ScreenShell
      active="NaplanHub"
      child={child}
      onHome={onHome}
      onProgress={onProgress}
      onSetup={onSetup}
      onSignOut={onSignOut}
    >
      <LinearGradient
        colors={[...gradients.brand]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <Text style={styles.heroTitle}>NAPLAN practice</Text>
        <Text style={styles.heroSub}>
          Original questions in the real NAPLAN format, timed, with the same
          item types and locked sections.
        </Text>
        {child && recommended ? (
          <BadgeChip
            label={
              recommended === child.year
                ? `${child.name}'s NAPLAN year, Year ${recommended}`
                : `Next NAPLAN: Year ${recommended}`
            }
            earned
          />
        ) : null}
      </LinearGradient>

      <Text style={styles.section}>Pick a test year</Text>
      <View style={styles.yearRow}>
        {NAPLAN_YEARS.map((y) => {
          const on = y === year;
          const isRecommended = y === recommended;
          return (
            <Pressable
              key={y}
              onPress={() => setYear(y)}
              style={[styles.yearPill, on && styles.yearPillOn, isRecommended && !on && styles.yearPillRec]}
            >
              <Text style={[styles.yearText, on && styles.yearTextOn]}>Year {y}</Text>
              {isRecommended && (
                <Text style={[styles.yearRec, on && styles.yearRecOn]}>next</Text>
              )}
            </Pressable>
          );
        })}
      </View>

      <Text style={styles.section}>Pick a domain</Text>
      {NAPLAN_DOMAINS.map((domain) => {
        const test = buildNaplanTest(year, domain.id);
        const itemCount = orderedItems(test).length;
        const best = bestFor(domain.id);
        return (
          <Pressable
            key={domain.id}
            onPress={() => onOpenTest(year, domain.id)}
            style={({ pressed }) => [styles.card, pressed && styles.pressed]}
          >
            <View style={[styles.iconChip, { backgroundColor: palette[domain.accent] + '26' }]}>
              <Icon name={domain.icon} tint={palette[domain.accent]} size={24} />
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardTop}>
                <Text style={styles.cardTitle}>{domain.label}</Text>
                {best !== null && <BadgeChip label={`Best ${best}%`} earned />}
              </View>
              <Text style={styles.cardSub}>{domain.tagline}</Text>
              <Text style={styles.meta}>
                {domain.id === 'writing'
                  ? '1 text · rubric marked'
                  : `${itemCount} practice items · ${test.durationMin} min`}
              </Text>
            </View>
          </Pressable>
        );
      })}

      <Text style={styles.note}>
        Official NAPLAN has {year === '3' ? '36–52' : '42–52'} items per domain,
        these practice tests are shorter, with results indicative only. They are
        original NAPLAN-style questions, not official NAPLAN material.
      </Text>
    </ScreenShell>
  );
}

/**
 * Holds the selected practice year. Kept in sync when the recommended year
 * changes (e.g. a child profile is created), without clobbering a parent's
 * manual pick.
 */
function useResolvedYear(
  recommended: NaplanYear | null,
  child: ChildProfile | null,
): [NaplanYear, (year: NaplanYear) => void] {
  const [year, setYear] = useState<NaplanYear>(recommended ?? '3');
  const lastRecommended = useRef<NaplanYear | null>(null);
  const lastChild = useRef<ChildProfile | null>(null);

  if (lastChild.current !== child) {
    lastChild.current = child;
    if (recommended) setYear(recommended);
  } else if (lastRecommended.current !== recommended) {
    lastRecommended.current = recommended;
    if (recommended) setYear(recommended);
  }

  return [year, setYear];
}

const styles = StyleSheet.create({
  container: { backgroundColor: palette.cream, flexGrow: 1, paddingBottom: spacing.xl },
  hero: {
    marginHorizontal: spacing.xl,
    borderRadius: radius.lg,
    padding: spacing.xl,
    gap: spacing.md,
  },
  heroTitle: { fontSize: 24, fontWeight: '900', color: palette.white },
  heroSub: { fontSize: 14, color: palette.white, opacity: 0.95, lineHeight: 20 },
  section: {
    fontSize: 20,
    fontWeight: '800',
    color: palette.ink,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  yearRow: { flexDirection: 'row', gap: spacing.sm, paddingHorizontal: spacing.xl },
  yearPill: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: chrome.primary + '0d',
    borderRadius: radius.pill,
    borderWidth: 2,
    borderColor: chrome.primary + '55',
    paddingVertical: spacing.sm,
  },
  yearPillOn: { backgroundColor: chrome.primary, borderColor: chrome.primary },
  yearPillRec: { borderColor: chrome.accent },
  yearText: { fontSize: 14, fontWeight: '900', color: palette.ink },
  yearTextOn: { color: palette.white },
  yearRec: { fontSize: 12, fontWeight: '800', color: chrome.highlight, textTransform: 'uppercase', marginTop: 2 },
  yearRecOn: { color: palette.white, opacity: 0.85 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
    borderRadius: radius.pill,
    marginHorizontal: spacing.xl,
    marginBottom: spacing.md,
    padding: spacing.md,
    shadowColor: palette.ink,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },
  iconChip: {
    width: 52,
    height: 52,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  cardBody: { flex: 1 },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  cardTitle: { fontSize: 17, fontWeight: '900', color: palette.ink },
  cardSub: { fontSize: 13, color: palette.slate, marginTop: 2 },
  meta: { fontSize: 12, color: palette.slate, fontWeight: '600', marginTop: spacing.xs },
  pressed: { transform: [{ scale: 0.99 }], opacity: 0.9 },
  note: {
    fontSize: 11,
    color: palette.slate,
    textAlign: 'center',
    marginTop: spacing.md,
    paddingHorizontal: spacing.xl,
  },
});
