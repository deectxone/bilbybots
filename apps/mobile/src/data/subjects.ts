import type { SubjectId } from '../types/curriculum';
import type { IconName } from '../components/illustrations/icons';

/**
 * Static subject metadata shown in onboarding + plan screens.
 * Content itself ships via the ingest pipeline; this list is UI config.
 */
export const SUBJECTS: ReadonlyArray<{
  id: SubjectId;
  label: string;
  /** Themed vector pictogram (never emoji) — see components/illustrations/icons.tsx. */
  icon: IconName;
  emoji: string;
  tagline: string;
}> = [
  {
    id: 'mathematics',
    label: 'Mathematics',
    icon: 'calc',
    emoji: '🔢',
    tagline: 'Numbers, shapes, data and puzzles',
  },
  {
    id: 'english',
    label: 'English',
    icon: 'book',
    emoji: '📚',
    tagline: 'Reading, writing, talking and imagining',
  },
  {
    id: 'science',
    label: 'Science',
    icon: 'microscope',
    emoji: '🔬',
    tagline: 'Explore our world and how it works',
  },
  {
    id: 'hass',
    label: 'HASS',
    icon: 'map',
    emoji: '🗺️',
    tagline: 'History, people, places and big ideas',
  },
];

/** States (curriculum variants). NSW ships first. */
export const STATES: ReadonlyArray<{ id: string; label: string }> = [
  { id: 'nsw', label: 'New South Wales' },
  { id: 'qld', label: 'Queensland' },
  { id: 'vic', label: 'Victoria' },
  { id: 'wa', label: 'Western Australia' },
  { id: 'sa', label: 'South Australia' },
  { id: 'tas', label: 'Tasmania' },
  { id: 'act', label: 'ACT' },
  { id: 'nt', label: 'Northern Territory' },
];

export const subjectById = (id: SubjectId) =>
  SUBJECTS.find((s) => s.id === id) ?? SUBJECTS[0];