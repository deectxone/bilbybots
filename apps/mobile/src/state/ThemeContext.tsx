import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DEFAULT_THEME_ID,
  THEME_PRESETS,
  type ChromeTokens,
  type ThemeId,
} from '../theme/colors';

/**
 * Whole-app colour theme (Setup → Theme): a handful of chrome presets
 * (dark red, blue, green, grey, multi) that everything reading `chrome.*`
 * — header/footer bands, buttons, selected pills, borders — switches to
 * together. Persisted locally (device preference, not account data) so it
 * survives reloads without round-tripping through Supabase.
 */
const STORAGE_KEY = 'bilbybots:theme:v1';

interface ThemeContextValue {
  themeId: ThemeId;
  chrome: ChromeTokens;
  setThemeId: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState<ThemeId>(DEFAULT_THEME_ID);

  useEffect(() => {
    let cancelled = false;
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (cancelled || !stored) return;
      if (stored in THEME_PRESETS) setThemeIdState(stored as ThemeId);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const setThemeId = (id: ThemeId) => {
    setThemeIdState(id);
    void AsyncStorage.setItem(STORAGE_KEY, id);
  };

  const chrome = (THEME_PRESETS[themeId] ?? THEME_PRESETS[DEFAULT_THEME_ID]).chrome;

  return (
    <ThemeContext.Provider value={{ themeId, chrome, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

/** The active theme's chrome tokens (primary/accent/highlight) + setter. */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

/** Convenience for call sites that only need the colour tokens. */
export function useThemeChrome(): ChromeTokens {
  return useTheme().chrome;
}
