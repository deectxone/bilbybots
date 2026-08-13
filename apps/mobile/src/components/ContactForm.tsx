import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { palette, radius, spacing, type ChromeTokens } from '../theme/colors';
import { useThemeChrome } from '../state/ThemeContext';
import { PrimaryButton } from './PrimaryButton';
import { getCurrentSession } from '../utils/supabase';
import { submitContactMessage } from '../utils/contact';

/**
 * Contact-us form shown on the Contact page. Pre-fills the email from the
 * signed-in session (when present), saves the message to the Supabase
 * `contact_messages` table and confirms inline. Works signed in or as a
 * guest, no mailbox/email accounts are needed yet.
 */
export function ContactForm() {
  const chrome = useThemeChrome();
  const styles = getStyles(chrome);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getCurrentSession().then((s) => {
      if (!cancelled && s?.user?.email) setEmail(s.user.email);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const canSubmit = message.trim().length > 0 && !busy;

  const submit = async () => {
    if (!canSubmit) return;
    setBusy(true);
    setError(null);
    setSent(false);
    const result = await submitContactMessage(message, email);
    setBusy(false);
    if (result.ok) {
      setSent(true);
      setMessage('');
    } else {
      setError(result.error);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Your email (optional, so we can reply)</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        placeholder="you@example.com"
        placeholderTextColor={palette.slate}
        accessibilityLabel="Your email address"
      />

      <Text style={styles.label}>Message</Text>
      <TextInput
        style={[styles.input, styles.message]}
        value={message}
        onChangeText={setMessage}
        multiline
        textAlignVertical="top"
        placeholder="How can we help?"
        placeholderTextColor={palette.slate}
        accessibilityLabel="Your message"
      />

      <PrimaryButton
        disabled={!canSubmit}
        tone="header"
        label={busy ? 'Sending…' : 'Send message'}
        icon="envelope"
        onPress={submit}
      />

      {sent && (
        <Text style={styles.success}>
          Thanks, we&apos;ve got your message and will get back to you soon.
        </Text>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const getStyles = (chrome: ChromeTokens) =>
  StyleSheet.create({
  card: {
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    gap: spacing.sm,
  },
  label: {
    fontSize: 13,
    fontWeight: '800',
    color: palette.ink,
    textTransform: 'uppercase',
    marginTop: spacing.xs,
  },
  input: {
    backgroundColor: palette.white,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    fontSize: 16,
    color: palette.ink,
    borderWidth: 2,
    borderColor: chrome.primary + '66',
  },
  message: {
    minHeight: 120,
    lineHeight: 22,
    marginBottom: spacing.sm,
    borderRadius: radius.lg,
    textAlignVertical: 'top',
  },
  success: {
    fontSize: 13,
    fontWeight: '700',
    color: palette.teal,
    marginTop: spacing.sm,
  },
  error: {
    fontSize: 13,
    fontWeight: '700',
    color: palette.coral,
    marginTop: spacing.sm,
  },
});
