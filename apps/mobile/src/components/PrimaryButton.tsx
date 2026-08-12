import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette, radius, spacing } from '../theme/colors';
import { Icon, type IconName } from './illustrations/icons';

/** Tones light enough that ink text reads better than white. */
const LIGHT_TONES = new Set<keyof typeof palette>(['sunny', 'lime', 'cream', 'white']);

export function PrimaryButton({
  label,
  tone = 'teal',
  onPress,
  disabled = false,
  icon,
}: {
  label: string;
  tone?: keyof typeof palette;
  onPress?: () => void;
  disabled?: boolean;
  /** Optional themed pictogram shown before the label (never emoji). */
  icon?: IconName;
}) {
  const light = LIGHT_TONES.has(tone);
  const fg = light ? palette.ink : palette.white;
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.btn,
        { backgroundColor: palette[tone] },
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      {icon && (
        <View style={styles.iconWrap}>
          <Icon name={icon} tint={fg} size={18} />
        </View>
      )}
      <Text style={[styles.label, { color: fg }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    shadowColor: palette.ink,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  iconWrap: { marginRight: spacing.sm },
  pressed: { transform: [{ scale: 0.97 }] },
  disabled: { opacity: 0.4 },
  label: { fontSize: 17, fontWeight: '800' },
});
