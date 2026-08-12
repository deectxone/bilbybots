import { Platform } from 'react-native';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import type { Session } from '@supabase/supabase-js';

/**
 * Supabase client (Google OAuth via Supabase's auth providers — see
 * docs/specs/auth-setup.md for the one-time setup).
 *
 * Tokens are persisted:
 *   - native: expo-secure-store (Keychain / Keystore)
 *   - web:    AsyncStorage (localStorage-backed), since SecureStore has no web module
 *
 * The Supabase auth `storage` adapter only needs the AsyncStorage-shaped
 * getItem/setItem/removeItem surface, so a tiny wrapper around both backends
 * is enough. Credentials come from `EXPO_PUBLIC_SUPABASE_URL` and
 * `EXPO_PUBLIC_SUPABASE_ANON_KEY` (dotenv in `.env`, never committed).
 */

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';

const secureStorage = {
  async getItem(key: string): Promise<string | null> {
    try {
      if (Platform.OS === 'web') return await AsyncStorage.getItem(key);
      return await SecureStore.getItemAsync(key);
    } catch {
      return null;
    }
  },
  async setItem(key: string, value: string): Promise<void> {
    try {
      if (Platform.OS === 'web') {
        await AsyncStorage.setItem(key, value);
      } else {
        await SecureStore.setItemAsync(key, value);
      }
    } catch {
      // Non-fatal: session just won't persist across relaunch.
    }
  },
  async removeItem(key: string): Promise<void> {
    try {
      if (Platform.OS === 'web') {
        await AsyncStorage.removeItem(key);
      } else {
        await SecureStore.deleteItemAsync(key);
      }
    } catch {
      // Non-fatal.
    }
  },
};

/** Configured Supabase client. Valid only when env vars are present. */
export const supabase: SupabaseClient | null = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: secureStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: Platform.OS === 'web',
  },
});

/** True once a Supabase project URL + anon key are configured. */
export const isAuthConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/** Current session, or null when not signed in / not configured. */
export async function getCurrentSession(): Promise<Session | null> {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session;
}

/** Listen for auth changes (sign-in, token refresh, sign-out). */
export function onAuthStateChange(listener: (session: Session | null) => void): () => void {
  if (!supabase) return () => undefined;
  const { data } = supabase.auth.onAuthStateChange((_event, session) => listener(session));
  return () => data.subscription.unsubscribe();
}
