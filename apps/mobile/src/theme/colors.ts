/**
 * BilbyBots theme tokens.
 *
 * Palette is the single source of colour for the whole app (no hex codes in
 * components). Values are tuned for legibility on a light background:
 *   - `ink`  = primary text (near-black, high contrast)
 *   - `slate` = secondary text (>= 4.6:1 on white)
 *   - `cream` = app background
 *
 * Brand direction (inspired by polished ANZ SaaS products such as ELMO):
 * strong, confident hero gradients, one clear primary CTA colour, and white
 * cards with soft shadows, playful enough for kids, professional enough for
 * parents.
 */
export const palette = {
  coral: '#F06C5E',
  sunny: '#F5B93D',
  teal: '#0FA3A6',
  berry: '#C9578A',
  sky: '#6FB8E8',
  lime: '#8FBF5A',
  grape: '#8A6FCB',
  brand: '#5B21B6',
  brandDeep: '#3B0F8F',
  cream: '#FAF7F1',
  ink: '#22263B',
  slate: '#4B5563',
  white: '#FFFFFF',
} as const;

export type ColorKey = keyof typeof palette;

/** Default hero gradient pairs (ELMO-style bold, but on-brand). */
export const gradients = {
  hero: ['#8A6FCB', '#C9578A'] as const,
  heroAlt: ['#5B21B6', '#0FA3A6'] as const,
  accent: ['#F06C5E', '#F5B93D'] as const,
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
