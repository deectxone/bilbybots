import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';
import { palette } from '../theme/colors';

/**
 * BilbyBots logo lockup: a compact bilby-head mark + wordmark. Pure vector,
 * so it renders crisp at any size — a 24px header mark and a 72px onboarding
 * hero mark are the same component, just scaled.
 */
export function BilbyLogoMark({ size = 32 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      {/* ears */}
      <Ellipse cx={24} cy={26} rx={15} ry={24} fill={palette.grape} transform="rotate(-22 24 26)" />
      <Ellipse cx={76} cy={26} rx={15} ry={24} fill={palette.grape} transform="rotate(22 76 26)" />
      <Ellipse cx={24} cy={28} rx={7} ry={14} fill={palette.berry} transform="rotate(-22 24 28)" />
      <Ellipse cx={76} cy={28} rx={7} ry={14} fill={palette.berry} transform="rotate(22 76 28)" />
      {/* head */}
      <Circle cx={50} cy={58} r={36} fill={palette.grape} />
      <Ellipse cx={50} cy={70} rx={19} ry={14} fill={palette.cream} />
      {/* eyes */}
      <Circle cx={38} cy={54} r={6.5} fill={palette.ink} />
      <Circle cx={62} cy={54} r={6.5} fill={palette.ink} />
      <Circle cx={40} cy={51.8} r={1.9} fill={palette.white} />
      <Circle cx={64} cy={51.8} r={1.9} fill={palette.white} />
      {/* nose */}
      <Ellipse cx={50} cy={68} rx={5} ry={3.8} fill={palette.ink} />
      {/* smile */}
      <Path d="M 42 76 Q 50 82 58 76" stroke={palette.ink} strokeWidth={2.2} fill="none" strokeLinecap="round" />
    </Svg>
  );
}

export function BilbyLogo({
  markSize = 32,
  textSize = 20,
  tone = 'dark',
}: {
  markSize?: number;
  textSize?: number;
  /** 'dark' for light backgrounds, 'light' for the gradient hero bands */
  tone?: 'dark' | 'light';
}) {
  const primary = tone === 'light' ? palette.white : palette.ink;
  const accent = tone === 'light' ? palette.sunny : palette.grape;
  return (
    <View style={styles.row}>
      <BilbyLogoMark size={markSize} />
      <Text style={[styles.word, { fontSize: textSize, color: primary }]}>
        Bilby<Text style={{ color: accent }}>Bots</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  word: { fontWeight: '900', letterSpacing: 0.2 },
});
