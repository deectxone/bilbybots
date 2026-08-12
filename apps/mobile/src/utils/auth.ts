import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { supabase, isAuthConfigured } from './supabase';

/**
 * Google sign-in via Supabase Auth.
 *
 * Native: build the Supabase OAuth URL (`skipBrowserRedirect: true`), open it
 * in a browser session, then exchange the returned `code` for a session.
 * Web: the browser redirects back with tokens in the URL and supabase-js
 * picks them up via `detectSessionInUrl`.
 *
 * The redirect URI intentionally includes a path (`auth/callback`): bare
 * custom schemes (`bilbybots://`) can get mangled by Supabase's PKCE URL
 * handling on iOS, corrupting the auth code. `bilbybots://auth/callback`
 * round-trips cleanly (RFC 8252 recommends a host/path anyway).
 */
WebBrowser.maybeCompleteAuthSession();

export function makeRedirectUri(): string {
  if (Platform.OS === 'web' && process.env.EXPO_PUBLIC_SITE_URL) {
    return `${process.env.EXPO_PUBLIC_SITE_URL.replace(/\/+$/, '')}/auth/callback`;
  }
  return AuthSession.makeRedirectUri({ scheme: 'bilbybots', path: 'auth/callback' });
}

/** Bare origin for the current web page, e.g. `https://bilbybots.com`. */
function getWebOrigin(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return process.env.EXPO_PUBLIC_SITE_URL?.replace(/\/+$/, '') ?? 'https://bilbybots.com';
}

export type SignInResult =
  | { ok: true }
  | { ok: false; error: string };

/** Kick off Google sign-in. Throws if auth isn't configured (see auth-setup.md). */
export async function signInWithGoogle(): Promise<SignInResult> {
  if (!isAuthConfigured || !supabase) {
    return { ok: false, error: 'Supabase is not configured. Add EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY to .env' };
  }

  const redirectTo = makeRedirectUri();

  if (Platform.OS === 'web') {
    // Web: redirect back to the bare origin so the static site always serves
    // index.html (no reliance on an SPA deep-link rewrite). supabase-js picks
    // the session up from the URL via `detectSessionInUrl`.
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: getWebOrigin() },
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  }

  // Native: open the provider page in a browser session and exchange the code.
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo, skipBrowserRedirect: true },
  });
  if (error || !data.url) {
    return { ok: false, error: error?.message ?? 'Could not start Google sign-in' };
  }

  const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo, {
    preferEphemeralSession: false,
  });

  if (result.type !== 'success' || !result.url) {
    return { ok: false, error: result.type === 'cancel' ? 'Sign-in was cancelled' : 'Sign-in did not complete' };
  }

  const code = extractCode(result.url);
  if (!code) {
    return { ok: false, error: 'Google did not return an authorisation code' };
  }

  const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
  if (exchangeError) return { ok: false, error: exchangeError.message };
  return { ok: true };
}

/** Sign out of Supabase (clears persisted session on all platforms). */
export async function signOut(): Promise<void> {
  if (supabase) await supabase.auth.signOut();
}

/** Pull the `code` query param out of the auth redirect URL. */
function extractCode(url: string): string | null {
  try {
    const parsed = new URL(url);
    return parsed.searchParams.get('code');
  } catch {
    // Fallback for exotic URLs new URL() can't parse.
    const m = url.match(/[?&#]code=([^&#]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  }
}
