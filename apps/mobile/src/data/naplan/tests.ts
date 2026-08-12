import type { ColorKey } from '../../theme/colors';
import type { IconName } from '../../components/illustrations/icons';
import type {
  NaplanDomain,
  NaplanItem,
  NaplanStimulus,
  NaplanTest,
  NaplanYear,
} from '../../types/naplan';
import { NUMERACY_ITEMS } from './numeracy';
import { CONVENTIONS_ITEMS } from './conventions';
import { READING_ITEMS, READING_STIMULI } from './reading';
import { WRITING_PROMPTS } from './writing';

/** The year levels NAPLAN actually tests (spec: only these). */
export const NAPLAN_YEARS: Readonly<NaplanYear[]> = ['3', '5', '7', '9'];

export const isNaplanYear = (year: string): year is NaplanYear =>
  (NAPLAN_YEARS as readonly string[]).includes(year);

/**
 * The NAPLAN year a child should practise for: their current year when it is
 * a NAPLAN year (3/5/7/9), otherwise the NEXT NAPLAN year up (e.g. Year 4 → 5,
 * Year 6 → 7, Year 8 → 9) so the track enables the upcoming NAPLAN instead of
 * locking out between test years. Returns null once there is no upcoming
 * NAPLAN (Year 10).
 */
export function nextNaplanYear(year: string): NaplanYear | null {
  if (isNaplanYear(year)) return year;
  if (year < '3') return '3';
  if (year < '5') return '5';
  if (year < '7') return '7';
  if (year < '9') return '9';
  return null;
}

export interface NaplanDomainMeta {
  id: NaplanDomain;
  label: string;
  /** Themed vector pictogram (never emoji), see components/illustrations/icons.tsx. */
  icon: IconName;
  accent: ColorKey;
  tagline: string;
  /** Official item count (real NAPLAN), shown so parents see the target shape. */
  officialItems: Record<NaplanYear, number>;
}

export const NAPLAN_DOMAINS: ReadonlyArray<NaplanDomainMeta> = [
  {
    id: 'numeracy',
    label: 'Numeracy',
    icon: 'calc',
    accent: 'teal',
    tagline: 'Numbers, algebra, measurement and data',
    officialItems: { '3': 36, '5': 42, '7': 48, '9': 48 },
  },
  {
    id: 'conventions',
    label: 'Language conventions',
    icon: 'pen',
    accent: 'coral',
    tagline: 'Spelling, grammar and punctuation',
    officialItems: { '3': 52, '5': 52, '7': 52, '9': 52 },
  },
  {
    id: 'reading',
    label: 'Reading',
    icon: 'book',
    accent: 'grape',
    tagline: 'Read texts and answer questions',
    officialItems: { '3': 39, '5': 39, '7': 48, '9': 48 },
  },
  {
    id: 'writing',
    label: 'Writing',
    icon: 'quill',
    accent: 'berry',
    tagline: 'One narrative or persuasive text',
    officialItems: { '3': 1, '5': 1, '7': 1, '9': 1 },
  },
];

export const naplanDomainMeta = (id: NaplanDomain): NaplanDomainMeta =>
  NAPLAN_DOMAINS.find((d) => d.id === id) ?? NAPLAN_DOMAINS[0];

const bankByDomain: Record<NaplanDomain, NaplanItem[]> = {
  numeracy: NUMERACY_ITEMS,
  conventions: CONVENTIONS_ITEMS,
  reading: READING_ITEMS,
  writing: [],
};

export const naplanItemById = (id: string): NaplanItem | undefined =>
  Object.values(bankByDomain)
    .flat()
    .find((item) => item.id === id);

export const naplanStimulusById = (id: string): NaplanStimulus | undefined =>
  READING_STIMULI.find((s) => s.id === id);

export const naplanPromptById = (id: string) =>
  WRITING_PROMPTS.find((p) => p.id === id);

/** Official duration in minutes per domain/year (research doc §3). */
const DURATION: Record<NaplanDomain, Record<NaplanYear, number>> = {
  reading: { '3': 45, '5': 50, '7': 65, '9': 65 },
  conventions: { '3': 45, '5': 45, '7': 45, '9': 45 },
  numeracy: { '3': 45, '5': 50, '7': 65, '9': 65 },
  writing: { '3': 40, '5': 42, '7': 42, '9': 42 },
};

/**
 * Builds a practice test for a domain/year from the authored bank.
 * The facade is a SHORTENED sample (`fullLength: false`), the real bank
 * ships via the content pipeline. Section layout mirrors real NAPLAN:
 * conventions = Spelling → Grammar & punctuation (locked);
 * Y7/9 numeracy = Non-calculator → Calculator (locked).
 */
export function buildNaplanTest(year: NaplanYear, domain: NaplanDomain): NaplanTest {
  const items = bankByDomain[domain].filter((i) => i.year === year);

  if (domain === 'writing') {
    const prompts = WRITING_PROMPTS.filter((p) => (year === '3' || year === '5')
      ? p.id.includes('Y35')
      : p.id.includes('Y79'));
    const prompt = prompts[Math.floor(Math.random() * prompts.length)];
    return {
      id: `NP-${year}-${domain}`,
      domain,
      year,
      title: `Year ${year} · ${naplanDomainMeta(domain).label}`,
      durationMin: DURATION[domain][year],
      sections: [{ title: 'Writing', itemIds: [], locked: false }],
      promptId: prompt?.id,
      fullLength: false,
    };
  }

  let sections: NaplanTest['sections'];
  if (domain === 'conventions') {
    const spelling = items.filter((i) => i.skill === 'spelling');
    const grammar = items.filter((i) => i.skill === 'grammar & punctuation');
    sections = [
      { title: 'Spelling', itemIds: spelling.map((i) => i.id), locked: true },
      { title: 'Grammar & punctuation', itemIds: grammar.map((i) => i.id), locked: true },
    ];
  } else if (domain === 'numeracy' && (year === '7' || year === '9')) {
    const nc = items.filter((i) => i.tool !== 'calculator');
    const ca = items.filter((i) => i.tool === 'calculator');
    sections = [
      { title: 'Non-calculator', itemIds: nc.map((i) => i.id), locked: true },
      { title: 'Calculator allowed', itemIds: ca.map((i) => i.id), locked: true },
    ];
  } else {
    sections = [{ title: naplanDomainMeta(domain).label, itemIds: items.map((i) => i.id), locked: false }];
  }

  return {
    id: `NP-${year}-${domain}`,
    domain,
    year,
    title: `Year ${year} · ${naplanDomainMeta(domain).label}`,
    durationMin: DURATION[domain][year],
    sections,
    fullLength: false,
  };
}

/** Flatten a test's items in section order (with their stimulus, for reading). */
export function orderedItems(test: NaplanTest): NaplanItem[] {
  const ids = test.sections.flatMap((s) => s.itemIds);
  return ids
    .map((id) => naplanItemById(id))
    .filter((item): item is NaplanItem => Boolean(item));
}

/** Reading stimuli referenced by the test, in first-appearance order. */
export function orderedStimuli(test: NaplanTest): NaplanStimulus[] {
  const seen = new Set<string>();
  const out: NaplanStimulus[] = [];
  for (const item of orderedItems(test)) {
    if (item.stimulusId && !seen.has(item.stimulusId)) {
      seen.add(item.stimulusId);
      const s = naplanStimulusById(item.stimulusId);
      if (s) out.push(s);
    }
  }
  return out;
}
