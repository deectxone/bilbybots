import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing, type } from '../theme/colors';
import { AppHeader } from '../components/AppHeader';

/**
 * Generic legal/policy page. Reused for Privacy, Terms and Contact so the
 * app ships a finished set of parent-facing pages without extra routing
 * machinery. Content is plain-language and kid/parent friendly.
 */
export type LegalDoc = {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
};

export function LegalScreen({
  doc,
  onHome,
  onProgress,
  onSetup,
  onSignOut,
}: {
  doc: LegalDoc;
  onHome: () => void;
  onProgress: () => void;
  onSetup?: () => void;
  onSignOut?: () => void;
}) {
  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scroll}>
      <AppHeader active="Home" onHome={onHome} onProgress={onProgress} onSetup={onSetup} onSignOut={onSignOut} />
      <View style={styles.content}>
        <Text style={styles.title}>{doc.title}</Text>
        <Text style={styles.updated}>Last updated: {doc.updated}</Text>
        {doc.sections.map((s) => (
          <View key={s.heading} style={styles.section}>
            <Text style={styles.heading}>{s.heading}</Text>
            <Text style={styles.body}>{s.body}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: palette.cream },
  container: { paddingBottom: spacing.xl * 2, flexGrow: 1 },
  content: { paddingHorizontal: spacing.xl },
  title: { fontSize: type.h1, fontWeight: '900', color: palette.ink, marginTop: spacing.lg },
  updated: { fontSize: 13, color: palette.slate, marginTop: spacing.xs, marginBottom: spacing.lg },
  section: {
    backgroundColor: palette.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  heading: { fontSize: type.h3, fontWeight: '800', color: palette.ink, marginBottom: spacing.sm },
  body: { fontSize: 14, lineHeight: 22, color: palette.ink },
});
