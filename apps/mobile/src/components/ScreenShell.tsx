import { ScrollView, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { palette } from '../theme/colors';
import type { ChildProfile } from '../types/curriculum';
import type { RootScreen } from '../navigation/types';
import { AppHeader } from './AppHeader';

/**
 * Shared screen shell: renders the AppHeader OUTSIDE the ScrollView so the
 * header stays fixed/sticky at the top while the screen content scrolls
 * underneath. Every logged-in screen uses this so navigation + the active
 * child's profile are always one glance away.
 */
export function ScreenShell({
  active,
  child,
  isGuest = false,
  onHome,
  onProgress,
  onSetup,
  onSignOut,
  contentContainerStyle,
  style,
  children,
}: {
  active: RootScreen;
  child?: ChildProfile | null;
  isGuest?: boolean;
  onHome: () => void;
  onProgress: () => void;
  onSetup?: () => void;
  onSignOut?: () => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.root}>
      <AppHeader
        active={active}
        child={child}
        isGuest={isGuest}
        onHome={onHome}
        onProgress={onProgress}
        onSetup={onSetup}
        onSignOut={onSignOut}
      />
      <ScrollView
        contentContainerStyle={[styles.content, contentContainerStyle]}
        style={[styles.scroll, style]}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.cream },
  scroll: { flex: 1, backgroundColor: palette.cream },
  content: { paddingBottom: 48, flexGrow: 1 },
});
