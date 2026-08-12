/**
 * BilbyBots theme tokens.
 *
 * Colour direction inspired by HiBob (and Khan/IXL for the clean, light feel):
 * a confident primary purple, a coral/pink accent, a trustworthy blue, and
 * calm neutrals — dark ink text, soft off-white background. One clear primary
 * accent for CTAs, gentle tints for cards, no clashing rainbow.
 */
export const palette = {
  coral: '#FF4D67',
  sunny: '#FFB84D',
  teal: '#14B8A6',
  berry: '#C9448A',
  sky: '#5AA7F0',
  lime: '#7BC96F',
  grape: '#7C35FF',
  brand: '#4E148C',
  brandDeep: '#3A0D6B',
  blue: '#1C4CF6',
  cream: '#F7F7F8',
  ink: '#1C1C1C',
  slate: '#5A5F66',
  white: '#FFFFFF',
} as const;

export type ColorKey = keyof typeof palette;

/** HiBob-inspired hero gradient: purple → coral. */
export const gradients = {
  hero: ['#7C35FF', '#FF4D67'] as const,
  heroAlt: ['#4E148C', '#14B8A6'] as const,
  accent: ['#FF4D67', '#FFB84D'] as const,
} as const;

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

/**
 * Type ramp, consistent display sizes so every screen reads like one
 * product (no ad-hoc fontSizes in components).
 */
export const type = {
  display: 28,
  h1: 24,
  h2: 20,
  h3: 17,
  body: 15,
  bodySmall: 13,
  caption: 12,
  label: 11,
} as const;
