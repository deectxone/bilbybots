import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { palette, spacing } from '../theme/colors';
import { BilbyLogo } from './BilbyLogo';
import { ResponsiveColumn } from './ResponsiveColumn';

/**
 * Universal footer shown at the bottom of every screen. Bookends the app
 * with the same dark band as AppHeader and carries the parent-facing
 * links (Privacy, Terms, Contact us) plus the attribution/disclaimer note.
 * Links navigate through the legal routes, so the footer works on any
 * screen without threading callbacks through.
 */
const LINKS: { label: string; href: '/legal/privacy' | '/legal/terms' | '/legal/contact' }[] = [
  { label: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms of Service', href: '/legal/terms' },
  { label: 'Contact us', href: '/legal/contact' },
];

export function AppFooter() {
  const router = useRouter();

  return (
    <View style={styles.band}>
      <ResponsiveColumn>
        <View style={styles.inner}>
          <View style={styles.brand}>
            <BilbyLogo markSize={26} textSize={17} tone="light" />
            <Text style={styles.tagline}>
              Learning plans that help Australian school kids stay on track.
            </Text>
          </View>

          <View style={styles.links}>
            {LINKS.map((link) => (
              <Pressable
                key={link.href}
                onPress={() => router.push(link.href)}
                accessibilityRole="link"
                accessibilityLabel={link.label}
                hitSlop={8}
                style={({ pressed }) => [styles.link, pressed && styles.pressed]}
              >
                <Text style={styles.linkText}>{link.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <Text style={styles.note}>
          © 2026 BilbyBots · Weekly plans align to the Australian Curriculum (ACARA v9.0, CC BY
          4.0); ACARA does not endorse this product. Practice questions are original, NAPLAN-style
          items, not official NAPLAN tests. No advertising, no data brokering.
        </Text>
      </ResponsiveColumn>
    </View>
  );
}

const styles = StyleSheet.create({
  band: {
    width: '100%',
    marginTop: spacing.xl,
    paddingVertical: spacing.xl,
    backgroundColor: palette.header,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: spacing.lg,
    rowGap: spacing.md,
  },
  brand: { flexGrow: 1, flexBasis: 220, gap: spacing.xs },
  tagline: {
    fontSize: 12,
    lineHeight: 17,
    color: palette.white,
    opacity: 0.7,
    maxWidth: 320,
  },
  links: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },
  link: { paddingVertical: spacing.xs },
  linkText: {
    fontSize: 13,
    fontWeight: '800',
    color: palette.white,
    opacity: 0.85,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  pressed: { opacity: 0.5 },
  note: {
    marginTop: spacing.lg,
    fontSize: 12,
    lineHeight: 18,
    color: palette.white,
    opacity: 0.6,
  },
});
