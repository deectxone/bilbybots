export const palette = {
  coral: '#F76C5E',
  sunny: '#FFD166',
  teal: '#06BCC1',
  berry: '#D95D87',
  sky: '#7AC1FF',
  lime: '#A8D672',
  grape: '#9B7EDE',
  cream: '#FFF9EC',
  ink: '#2B2D42',
  slate: '#6B7280',
  white: '#FFFFFF',
} as const;

export type ColorKey = keyof typeof palette;

/** Per-subject accent so kids recognise a learning area at a glance. */
export const subjectColor: Record<string, ColorKey> = {
  mathematics: 'teal',
  english: 'coral',
  science: 'lime',
  hass: 'grape',
  default: 'sky',
};

export const radius = {
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;