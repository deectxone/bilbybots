import { Stack } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppProvider, useApp } from '../src/state/AppContext';
import { AppFrame } from '../src/components/AppFrame';
import { BilbyLogo } from '../src/components/BilbyLogo';
import { BilbyMascot } from '../src/components/BilbyMascot';
import { palette } from '../src/theme/colors';

function Splash() {
  return (
    <AppFrame>
      <View style={{ flex: 1, backgroundColor: palette.cream, alignItems: 'center', justifyContent: 'center' }}>
        <BilbyLogo markSize={64} textSize={32} />
      </View>
    </AppFrame>
  );
}

function Root() {
  const { hydrated, authReady } = useApp();
  if (!hydrated || !authReady) return <Splash />;
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
    <AppProvider>
      <Root />
    </AppProvider>
  );
}
