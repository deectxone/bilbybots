import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';
import { palette } from '../theme/colors';

/**
 * BilbyBots' mascot, full-body, rendered big, translucent and
 * non-interactive in the bottom-right corner of every screen, like a
 * watermark peeking in rather than a floating button. Pure vector (no
 * image asset), so it stays crisp at any size.
 */
function BilbyFigure({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 220 260">
      {/* tail, a bilby's signature crested tail, curling up behind */}
      <Path
        d="M 168 190 C 210 170 214 100 190 60 C 205 95 198 150 165 175 Z"
        fill={palette.ink}
      />
      <Path
        d="M 176 172 C 198 148 202 108 190 78"
        stroke={palette.cream}
        strokeWidth={6}
        fill="none"
        strokeLinecap="round"
      />
      {/* back foot */}
      <Ellipse cx={140} cy={244} rx={20} ry={11} fill={palette.grape} />
      {/* body */}
      <Ellipse cx={100} cy={190} rx={54} ry={62} fill={palette.grape} />
      <Ellipse cx={96} cy={205} rx={32} ry={38} fill={palette.cream} opacity={0.9} />
      {/* front foot */}
      <Ellipse cx={70} cy={246} rx={18} ry={10} fill={palette.grape} />
      {/* arms */}
      <Ellipse cx={48} cy={170} rx={13} ry={26} fill={palette.grape} transform="rotate(18 48 170)" />
      {/* ears */}
      <Ellipse cx={58} cy={58} rx={20} ry={34} fill={palette.grape} transform="rotate(-20 58 58)" />
      <Ellipse cx={122} cy={58} rx={20} ry={34} fill={palette.grape} transform="rotate(20 122 58)" />
      <Ellipse cx={58} cy={62} rx={10} ry={20} fill={palette.berry} transform="rotate(-20 58 62)" />
      <Ellipse cx={122} cy={62} rx={10} ry={20} fill={palette.berry} transform="rotate(20 122 62)" />
      {/* head */}
      <Circle cx={90} cy={104} r={52} fill={palette.grape} />
      <Ellipse cx={90} cy={122} rx={28} ry={20} fill={palette.cream} opacity={0.9} />
      {/* eyes */}
      <Circle cx={72} cy={98} r={9} fill={palette.ink} />
      <Circle cx={108} cy={98} r={9} fill={palette.ink} />
      <Circle cx={75} cy={95} r={2.6} fill={palette.white} />
      <Circle cx={111} cy={95} r={2.6} fill={palette.white} />
      {/* nose */}
      <Ellipse cx={90} cy={120} rx={7} ry={5} fill={palette.ink} />
      {/* smile */}
      <Path d="M 78 130 Q 90 140 102 130" stroke={palette.ink} strokeWidth={3} fill="none" strokeLinecap="round" />
      {/* cheeks */}
      <Circle cx={58} cy={116} r={7} fill={palette.berry} opacity={0.5} />
      <Circle cx={122} cy={116} r={7} fill={palette.berry} opacity={0.5} />
    </Svg>
  );
}

export function BilbyMascot() {
  return (
    <View style={styles.corner} pointerEvents="none">
      <BilbyFigure size={260} />
    </View>
  );
}

const styles = StyleSheet.create({
  corner: {
    position: 'absolute',
    right: -30,
    bottom: -20,
    opacity: 0.12,
  },
});
