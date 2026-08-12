import { Platform, StyleSheet, View } from 'react-native';
import { palette } from '../theme/colors';

/**
 * Constrains the app to a centered phone-width column on large screens.
 *
 * BilbyBots is a mobile-first app. On a wide desktop browser the raw layout
 * stretches edge-to-edge and looks broken; this wrapper centres it in a
 * clean, calm backdrop (like HiBob/IXL/Khan present their app UIs) with a
 * subtle shadow so it reads as a proper product, not a stretched page.
 * On phones/tablets it is effectively full-width, so nothing changes.
 */
export function AppFrame({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.backdrop}>
      <View style={styles.frame}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: palette.slate + '1f',
    alignItems: 'center',
  },
  frame: {
    flex: 1,
    width: '100%',
    maxWidth: 520,
    backgroundColor: palette.cream,
    ...Platform.select({
      web: {
        boxShadow: '0 0 40px rgba(34, 38, 59, 0.12)',
      },
      default: {},
    }),
  },
});
