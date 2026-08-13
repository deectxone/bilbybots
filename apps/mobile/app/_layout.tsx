import { Stack } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppProvider, useApp } from '../src/state/AppContext';
import { ThemeProvider } from '../src/state/ThemeContext';
import { AppFrame } from '../src/components/AppFrame';
import { BilbyLogo } from '../src/components/BilbyLogo';
import { BilbyMascot } from '../src/components/BilbyMascot';
import { palette, radius, spacing, type } from '../src/theme/colors';
import '../src/theme/web.css';

function Splash() {
  return (
    <AppFrame>
      <View style={{ flex: 1, backgroundColor: palette.cream, alignItems: 'center', justifyContent: 'center' }}>
        <BilbyLogo markSize={64} textSize={32} />
      </View>
    </AppFrame>
  );
}

/** Blocks the whole app once a signed-in account's 14-day trial has lapsed.
 *  No paywall yet (roadmap) — the only way out is signing out. */
function TrialExpired() {
  const { signOutUser } = useApp();
  return (
    <AppFrame>
      <View style={trialStyles.screen}>
        <BilbyLogo markSize={56} textSize={28} />
        <Text style={trialStyles.title}>Your trial period has expired</Text>
        <Text style={trialStyles.body}>
          Get a full subscription to keep using BilbyBots. Subscriptions are coming
          soon — check back shortly.
        </Text>
        <Pressable
          onPress={() => void signOutUser()}
          accessibilityRole="button"
          accessibilityLabel="Sign out"
          style={({ pressed }) => [trialStyles.button, pressed && { opacity: 0.8 }]}
        >
          <Text style={trialStyles.buttonText}>Sign out</Text>
        </Pressable>
      </View>
    </AppFrame>
  );
}

const trialStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.cream,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  title: {
    fontSize: type.h1,
    fontWeight: '900',
    color: palette.ink,
    marginTop: spacing.lg,
    textAlign: 'center',
  },
  body: {
    fontSize: 15,
    color: palette.slate,
    lineHeight: 22,
    marginTop: spacing.sm,
    textAlign: 'center',
    maxWidth: 420,
  },
  button: {
    marginTop: spacing.xl,
    backgroundColor: palette.coral,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  buttonText: { color: palette.white, fontSize: 15, fontWeight: '800' },
});

function Root() {
  const { hydrated, authReady, trialExpired } = useApp();
  if (!hydrated || !authReady) return <Splash />;
  if (trialExpired) return <TrialExpired />;
  return (
    <View style={{ flex: 1, backgroundColor: palette.cream }}>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: palette.cream } }} />
      <BilbyMascot />
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Root />
      </AppProvider>
    </ThemeProvider>
  );
}
