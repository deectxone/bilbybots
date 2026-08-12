import Svg, { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';
import { palette } from '../../theme/colors';

/**
 * Sign-in hero illustration: the bilby mascot studying with a book and a
 * mini "weekly plan" clipboard, with floating learning badges around it.
 * Pure vector (palette colours only) so it stays crisp and on-brand at any
 * size — no photo, no emoji. Designed for a ~360px wide slot.
 */
export function SignInHero({ size = 360 }: { size?: number }) {
  const s = size / 360;
  return (
    <Svg width={size} height={size * 0.86} viewBox="0 0 360 310">
      {/* soft backdrop */}
      <Ellipse cx={180} cy={300} rx={150} ry={18} fill={palette.grape} opacity={0.12} />
      <Circle cx={308} cy={42} r={30} fill={palette.sunny} opacity={0.5} />
      <Circle cx={56} cy={66} r={22} fill={palette.lime} opacity={0.55} />
      <Circle cx={176} cy={22} r={14} fill={palette.sky} opacity={0.6} />

      {/* floating badge — "star" (achievement) */}
      <GStar cx={300} cy={120} r={15} fill={palette.sunny} />
      {/* floating badge — "check" (task done) */}
      <GCircle cx={52} cy={160} r={17} fill={palette.lime} />
      <Path d="M 44 160 L 51 168 L 62 152" stroke={palette.ink} strokeWidth={3.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* mini weekly-plan clipboard */}
      <G transform="translate(228 150)">
        <Rect x={0} y={4} width={74} height={96} rx={10} fill={palette.white} stroke={palette.grape} strokeWidth={3} />
        <Rect x={26} y={0} width={22} height={10} rx={4} fill={palette.berry} />
        <Rect x={12} y={22} width={50} height={8} rx={4} fill={palette.sky} opacity={0.8} />
        <Rect x={12} y={38} width={38} height={8} rx={4} fill={palette.lime} opacity={0.85} />
        <Rect x={12} y={54} width={50} height={8} rx={4} fill={palette.sunny} opacity={0.85} />
        <Rect x={12} y={70} width={30} height={8} rx={4} fill={palette.berry} opacity={0.75} />
      </G>

      {/* book on the left */}
      <G transform="translate(18 210)">
        <Path d="M 0 6 Q 20 -6 40 6 V 78 Q 20 66 0 78 Z" fill={palette.sky} stroke={palette.ink} strokeWidth={2.5} />
        <Path d="M 40 6 Q 60 -6 80 6 V 78 Q 60 66 40 78 Z" fill={palette.sky} opacity={0.75} stroke={palette.ink} strokeWidth={2.5} />
        <Path d="M 40 6 V 78" stroke={palette.ink} strokeWidth={2} />
        <Circle cx={20} cy={30} r={5} fill={palette.white} />
        <Circle cx={20} cy={48} r={5} fill={palette.white} />
        <Circle cx={60} cy={30} r={5} fill={palette.white} opacity={0.85} />
        <Circle cx={60} cy={48} r={5} fill={palette.white} opacity={0.85} />
      </G>

      {/* bilby mascot, centre, holding the book */}
      <G transform="translate(112 40)">
        {/* tail */}
        <Path d="M 100 150 C 150 128 158 58 136 12 C 152 52 140 116 96 140 Z" fill={palette.ink} />
        <Path d="M 108 134 C 134 110 140 66 130 26" stroke={palette.cream} strokeWidth={5} fill="none" strokeLinecap="round" />
        {/* body */}
        <Ellipse cx={64} cy={150} rx={40} ry={46} fill={palette.grape} />
        <Ellipse cx={60} cy={160} rx={24} ry={30} fill={palette.cream} opacity={0.92} />
        {/* feet */}
        <Ellipse cx={40} cy={196} rx={15} ry={8} fill={palette.grape} />
        <Ellipse cx={84} cy={196} rx={15} ry={8} fill={palette.grape} />
        {/* arms around the book */}
        <Ellipse cx={26} cy={140} rx={10} ry={20} fill={palette.grape} transform="rotate(24 26 140)" />
        <Ellipse cx={102} cy={140} rx={10} ry={20} fill={palette.grape} transform="rotate(-24 102 140)" />
        {/* book held in front */}
        <G transform="translate(22 132)">
          <Path d="M 0 4 Q 18 -6 36 4 V 56 Q 18 46 0 56 Z" fill={palette.sunny} stroke={palette.ink} strokeWidth={2.4} />
          <Path d="M 36 4 Q 54 -6 72 4 V 56 Q 54 46 36 56 Z" fill={palette.sunny} opacity={0.8} stroke={palette.ink} strokeWidth={2.4} />
          <Path d="M 36 4 V 56" stroke={palette.ink} strokeWidth={2} />
        </G>
        {/* ears */}
        <Ellipse cx={38} cy={26} rx={16} ry={28} fill={palette.grape} transform="rotate(-18 38 26)" />
        <Ellipse cx={96} cy={26} rx={16} ry={28} fill={palette.grape} transform="rotate(18 96 26)" />
        <Ellipse cx={38} cy={30} rx={8} ry={16} fill={palette.berry} transform="rotate(-18 38 30)" />
        <Ellipse cx={96} cy={30} rx={8} ry={16} fill={palette.berry} transform="rotate(18 96 30)" />
        {/* head */}
        <Circle cx={67} cy={74} r={42} fill={palette.grape} />
        <Ellipse cx={67} cy={90} rx={22} ry={16} fill={palette.cream} opacity={0.9} />
        {/* eyes */}
        <Circle cx={52} cy={68} r={7.5} fill={palette.ink} />
        <Circle cx={82} cy={68} r={7.5} fill={palette.ink} />
        <Circle cx={55} cy={65.4} r={2.2} fill={palette.white} />
        <Circle cx={85} cy={65.4} r={2.2} fill={palette.white} />
        {/* nose + smile */}
        <Ellipse cx={67} cy={88} rx={5.6} ry={4.2} fill={palette.ink} />
        <Path d="M 58 96 Q 67 104 76 96" stroke={palette.ink} strokeWidth={2.6} fill="none" strokeLinecap="round" />
        {/* cheeks */}
        <Circle cx={42} cy={86} r={5.5} fill={palette.berry} opacity={0.45} />
        <Circle cx={92} cy={86} r={5.5} fill={palette.berry} opacity={0.45} />
      </G>
    </Svg>
  );
}

function GStar({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) {
  const pts = 5;
  const outer = r;
  const inner = r * 0.45;
  let d = '';
  for (let i = 0; i < pts * 2; i++) {
    const rad = i % 2 === 0 ? outer : inner;
    const a = (i * Math.PI) / pts - Math.PI / 2;
    const x = cx + rad * Math.cos(a);
    const y = cy + rad * Math.sin(a);
    d += (i === 0 ? 'M' : 'L') + x + ' ' + y + ' ';
  }
  d += 'Z';
  return <Path d={d} fill={fill} />;
}

function GCircle({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) {
  return <Circle cx={cx} cy={cy} r={r} fill={fill} />;
}
