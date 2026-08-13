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
  header: '#61032A',
  headerAccent: '#CB1345',
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
  /** Header-anchored brand gradient (AppHeader band → its accent), used for
   * any hero/chrome band that should read as one brand with the header. */
  brand: ['#61032A', '#CB1345'] as const,
} as const;

/**
 * Header-anchored interactive tokens. Every button, selected pill, input
 * border, checkbox and link uses this family — built from the AppHeader band
 * (`palette.header`) and the header logo's sunny accent — so the whole app
 * reads as one brand instead of a per-field rainbow. `subjectColor` remains
 * the only per-area colouring, and only for content labelling.
 *
 * This is the DEFAULT (dark red) preset. Screens should prefer
 * `useThemeChrome()` from `state/ThemeContext`, which returns the same shape
 * but reflects the user's chosen theme — this static export only remains for
 * call sites that can't reach the hook (e.g. StyleSheet-free branding used
 * before the provider mounts).
 */
export const chrome = {
  /** Primary interactive colour (matches the AppHeader band). */
  primary: palette.header,
  /** Secondary accent derived from the header band (header accent). */
  accent: palette.headerAccent,
  /** Header-logo accent (white + sunny wordmark) for highlights/badges. */
  highlight: palette.sunny,
} as const;

export type ChromeTokens = { primary: string; accent: string; highlight: string };

/** A whole-app colour theme: id, display label, and the chrome it drives. */
export interface ThemePreset {
  id: string;
  label: string;
  chrome: ChromeTokens;
}

/**
 * The switchable app themes (Setup → Theme). Each swaps the header/footer
 * band, buttons, selected pills and borders app-wide — everything that reads
 * `chrome.*` — while `subjectColor` (per-subject icon tints) stays put so
 * lessons stay recognisable regardless of theme.
 */
export const THEME_PRESETS: Record<string, ThemePreset> = {
  darkred: {
    id: 'darkred',
    label: 'Dark red',
    chrome: { primary: '#61032A', accent: '#CB1345', highlight: palette.sunny },
  },
  blue: {
    id: 'blue',
    label: 'Blue',
    chrome: { primary: '#123E7A', accent: '#2C6BD1', highlight: palette.sunny },
  },
  green: {
    id: 'green',
    label: 'Green',
    chrome: { primary: '#0B5C3D', accent: '#1E9A63', highlight: palette.sunny },
  },
  grey: {
    id: 'grey',
    label: 'Grey',
    chrome: { primary: '#33383F', accent: '#5B626C', highlight: palette.sunny },
  },
  multi: {
    id: 'multi',
    label: 'Multi',
    chrome: { primary: '#7C35FF', accent: '#14B8A6', highlight: palette.sunny },
  },
};

export const DEFAULT_THEME_ID = 'darkred';
export type ThemeId = keyof typeof THEME_PRESETS;

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
