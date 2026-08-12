import { StyleSheet, View } from 'react-native';
import { palette } from '../theme/colors';

/**
 * Full-width adaptive frame. On any screen (phone → desktop) the app fills
 * the viewport width — no fixed column. Individual screens wrap their content
 * in a centered responsive column (see ScreenShell / ResponsiveColumn) so
 * wide monitors still get a comfortable reading width without a hard cap.
 */
export function AppFrame({ children }: { children: React.ReactNode }) {
  return <View style={styles.frame}>{children}</View>;
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    width: '100%',
    backgroundColor: palette.cream,
  },
});
