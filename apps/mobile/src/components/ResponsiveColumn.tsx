import { Platform, StyleSheet, View } from 'react-native';

/**
 * Responsive content column: full width on phones/tablets, but on wide
 * desktop screens it centres content within a comfortable reading width so
 * the app adapts to the viewport instead of either being cramped or
 * stretching edge-to-edge. Screens wrap their inner content in this.
 */
export function ResponsiveColumn({ children }: { children: React.ReactNode }) {
  return <View style={styles.column}>{children}</View>;
}

const styles = StyleSheet.create({
  column: {
    width: '100%',
    alignSelf: 'center',
    maxWidth: 1100,
    ...Platform.select({
      web: { paddingHorizontal: 24 },
      default: {},
    }),
  },
});
