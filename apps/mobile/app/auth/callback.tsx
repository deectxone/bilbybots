import { Redirect } from 'expo-router';

/**
 * OAuth callback target (Supabase web redirect `https://…/auth/callback`, and
 * the native `bilbybots://auth/callback` deep link). supabase-js detects the
 * session from the URL on client init, so this route just sends the user home.
 */
export default function AuthCallbackRoute() {
  return <Redirect href="/" />;
}
