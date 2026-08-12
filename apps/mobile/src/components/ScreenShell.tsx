import { ScrollView, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { palette } from '../theme/colors';
import type { ChildProfile } from '../types/curriculum';
import type { RootScreen } from '../navigation/types';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { SlimBar } from './SlimBar';
import { ResponsiveColumn } from './ResponsiveColumn';

/**
 * Shared screen shell:
 *   - AppHeader: sticky top bar (logo → home, kid name + Year).
 *   - SlimBar: non-sticky utility row (Settings / Sign out), rendered at the
 *     top of the scroll content so it scrolls away with the page.
 *   - ScrollView: the screen body.
 *   - AppFooter: universal dark footer (Privacy / Terms / Contact us + note)
 *     at the bottom of the scroll content, pushed to the bottom of short
 *     pages via flexGrow so it reads consistently on every screen.
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
  /** Reserved — kept for API compatibility; navigation is via the logo. */
  onProgress?: () => void;
  onSetup?: () => void;
  onSignOut?: () => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.root}>
      <AppHeader child={child} isGuest={isGuest} onHome={onHome} onProfilePress={onSetup} />
      <ScrollView
        contentContainerStyle={[styles.content, contentContainerStyle]}
        style={[styles.scroll, style]}
      >
        <SlimBar onSignOut={onSignOut} />
        <ResponsiveColumn>
          {children}
        </ResponsiveColumn>
        <AppFooter />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.cream, zIndex: 0 },
  scroll: { flex: 1 },
  content: { paddingBottom: 48, flexGrow: 1 },
});
