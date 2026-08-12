import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, G, Line, Path, Polygon, Rect, Text as SvgText } from 'react-native-svg';
import type { DiagramSpec } from '../../types/curriculum';
import { palette, radius } from '../../theme/colors';
import { Icon } from './icons';

const W = 280;
const H = 150;

/** Shared frame every diagram renders inside, fixed viewbox, consistent margins. */
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <Svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`}>
      {children}
    </Svg>
  );
}

function polarPoint(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function pieSlicePath(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const start = polarPoint(cx, cy, r, startDeg);
  const end = polarPoint(cx, cy, r, endDeg);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y} Z`;
}

function NumberLine({ spec }: { spec: Extract<DiagramSpec, { kind: 'number-line' }> }) {
  const { min, max, marks } = spec;
  const pad = 24;
  const y = H / 2;
  const x = (v: number) => pad + ((v - min) / (max - min)) * (W - pad * 2);
  return (
    <Frame>
      <Line x1={pad} y1={y} x2={W - pad} y2={y} stroke={palette.ink} strokeWidth={2} />
      {[min, max].map((v) => (
        <SvgText key={v} x={x(v)} y={y + 22} fontSize={11} fill={palette.slate} textAnchor="middle">
          {v}
        </SvgText>
      ))}
      {marks.map((m, i) => (
        <G key={i}>
          <Circle cx={x(m.value)} cy={y} r={5} fill={palette.berry} />
          <SvgText x={x(m.value)} y={y - 12} fontSize={11} fontWeight="700" fill={palette.ink} textAnchor="middle">
            {m.label}
          </SvgText>
        </G>
      ))}
    </Frame>
  );
}

function PieFraction({ spec }: { spec: Extract<DiagramSpec, { kind: 'pie-fraction' }> }) {
  const r = 46;
  const cy = H / 2;
  const gap = W / spec.pies.length;
  return (
    <Frame>
      {spec.pies.map((pie, pi) => {
        const cx = gap * pi + gap / 2;
        const slices = Array.from({ length: pie.slices }, (_, i) => i);
        return (
          <G key={pi}>
            {slices.map((i) => {
              const startDeg = (360 / pie.slices) * i;
              const endDeg = (360 / pie.slices) * (i + 1);
              return (
                <Path
                  key={i}
                  d={pieSlicePath(cx, cy, r, startDeg, endDeg)}
                  fill={i < pie.filled ? palette.teal : palette.white}
                  stroke={palette.ink}
                  strokeWidth={1.5}
                />
              );
            })}
            <SvgText x={cx} y={cy + r + 20} fontSize={13} fontWeight="800" fill={palette.ink} textAnchor="middle">
              {pie.label}
            </SvgText>
          </G>
        );
      })}
    </Frame>
  );
}

function FractionBar({ spec }: { spec: Extract<DiagramSpec, { kind: 'fraction-bar' }> }) {
  const barW = W - 48;
  const barH = 26;
  const x0 = 24;
  const rowGap = 40;
  const top = (H - spec.bars.length * rowGap) / 2 + 10;
  return (
    <Frame>
      {spec.bars.map((bar, bi) => {
        const segW = barW / bar.segments;
        const y = top + bi * rowGap;
        return (
          <G key={bi}>
            {Array.from({ length: bar.segments }, (_, i) => (
              <Rect
                key={i}
                x={x0 + i * segW}
                y={y}
                width={segW}
                height={barH}
                fill={i < bar.filled ? palette.lime : palette.white}
                stroke={palette.ink}
                strokeWidth={1.5}
              />
            ))}
            <SvgText x={x0 + barW + 6} y={y + barH / 2 + 4} fontSize={12} fontWeight="800" fill={palette.ink}>
              {bar.label}
            </SvgText>
          </G>
        );
      })}
    </Frame>
  );
}

function PlaceValue({ spec }: { spec: Extract<DiagramSpec, { kind: 'place-value' }> }) {
  const digits = spec.digits.split('');
  const boxW = Math.min(30, (W - 20) / digits.length);
  const x0 = (W - boxW * digits.length) / 2;
  const y = H / 2 - 18;
  return (
    <Frame>
      {digits.map((d, i) => (
        <G key={i}>
          <Rect
            x={x0 + i * boxW}
            y={y}
            width={boxW - 4}
            height={36}
            rx={6}
            fill={palette.sky + '33'}
            stroke={palette.sky}
            strokeWidth={2}
          />
          <SvgText x={x0 + i * boxW + (boxW - 4) / 2} y={y + 25} fontSize={17} fontWeight="900" fill={palette.ink} textAnchor="middle">
            {d}
          </SvgText>
          <SvgText
            x={x0 + i * boxW + (boxW - 4) / 2}
            y={y + 50}
            fontSize={11}
            fill={palette.slate}
            textAnchor="middle"
          >
            {spec.labels[i] ?? ''}
          </SvgText>
        </G>
      ))}
    </Frame>
  );
}

function Thermometer({ spec }: { spec: Extract<DiagramSpec, { kind: 'thermometer' }> }) {
  const top = 16;
  const bottom = H - 30;
  const cx = W / 2;
  const frac = (spec.value - spec.min) / (spec.max - spec.min);
  const fillY = bottom - frac * (bottom - top);
  return (
    <Frame>
      <Rect x={cx - 6} y={top} width={12} height={bottom - top} rx={6} fill={palette.white} stroke={palette.ink} strokeWidth={2} />
      <Rect x={cx - 6} y={fillY} width={12} height={bottom - fillY} rx={6} fill={spec.value < 0 ? palette.sky : palette.coral} />
      <Circle cx={cx} cy={bottom + 8} r={11} fill={spec.value < 0 ? palette.sky : palette.coral} stroke={palette.ink} strokeWidth={2} />
      <Line x1={cx - 6} y1={top + (bottom - top) / 2} x2={cx + 18} y2={top + (bottom - top) / 2} stroke={palette.slate} strokeWidth={1} />
      <SvgText x={cx + 22} y={top + (bottom - top) / 2 + 4} fontSize={12} fill={palette.slate}>0{spec.unit}</SvgText>
      <SvgText x={cx} y={top - 4} fontSize={13} fontWeight="900" fill={palette.ink} textAnchor="middle">
        {spec.value}{spec.unit}
      </SvgText>
    </Frame>
  );
}

function BarCompare({ spec }: { spec: Extract<DiagramSpec, { kind: 'bar-compare' }> }) {
  const max = Math.max(...spec.items.map((i) => i.value), 1);
  const gap = W / spec.items.length;
  const baseline = H - 24;
  const maxBarH = H - 50;
  return (
    <Frame>
      <Line x1={10} y1={baseline} x2={W - 10} y2={baseline} stroke={palette.slate} strokeWidth={1} />
      {spec.items.map((item, i) => {
        const barH = (item.value / max) * maxBarH;
        const x = gap * i + gap / 2 - 16;
        return (
          <G key={i}>
            <Rect x={x} y={baseline - barH} width={32} height={barH} rx={4} fill={palette.grape} />
            <SvgText x={x + 16} y={baseline - barH - 6} fontSize={11} fontWeight="800" fill={palette.ink} textAnchor="middle">
              {item.value}
              {spec.unit ?? ''}
            </SvgText>
            <SvgText x={x + 16} y={baseline + 14} fontSize={12} fill={palette.slate} textAnchor="middle">
              {item.label}
            </SvgText>
          </G>
        );
      })}
    </Frame>
  );
}

function DotPlot({ spec }: { spec: Extract<DiagramSpec, { kind: 'dot-plot' }> }) {
  const uniq = [...new Set(spec.values)].sort((a, b) => a - b);
  const counts = uniq.map((v) => spec.values.filter((x) => x === v).length);
  const gap = W / (uniq.length + 1);
  const baseline = H - 20;
  return (
    <Frame>
      <Line x1={10} y1={baseline} x2={W - 10} y2={baseline} stroke={palette.slate} strokeWidth={1} />
      {uniq.map((v, i) => {
        const x = gap * (i + 1);
        return (
          <G key={v}>
            {Array.from({ length: counts[i] }, (_, d) => (
              <Circle key={d} cx={x} cy={baseline - 10 - d * 15} r={6} fill={palette.teal} />
            ))}
            <SvgText x={x} y={baseline + 14} fontSize={11} fill={palette.slate} textAnchor="middle">
              {v}
              {spec.unit ?? ''}
            </SvgText>
          </G>
        );
      })}
    </Frame>
  );
}

function QuadrantGrid({ spec }: { spec: Extract<DiagramSpec, { kind: 'quadrant-grid' }> }) {
  const range = spec.range ?? 5;
  const cx = W / 2;
  const cy = H / 2;
  const scale = Math.min(W, H * 2) / (range * 2.6);
  const toX = (v: number) => cx + v * scale;
  const toY = (v: number) => cy - v * scale;
  return (
    <Frame>
      <Line x1={cx - range * scale} y1={cy} x2={cx + range * scale} y2={cy} stroke={palette.slate} strokeWidth={1} />
      <Line x1={cx} y1={cy - range * scale} x2={cx} y2={cy + range * scale} stroke={palette.slate} strokeWidth={1} />
      {spec.points.map((p, i) => (
        <G key={i}>
          <Circle cx={toX(p.x)} cy={toY(p.y)} r={5} fill={palette.berry} />
          <SvgText x={toX(p.x) + 8} y={toY(p.y) - 6} fontSize={11} fontWeight="800" fill={palette.ink}>
            {p.label} ({p.x},{p.y})
          </SvgText>
        </G>
      ))}
    </Frame>
  );
}

function BalanceScale({ spec }: { spec: Extract<DiagramSpec, { kind: 'balance-scale' }> }) {
  const cx = W / 2;
  const beamY = 50;
  const tilt = spec.balanced ? 0 : 10;
  return (
    <Frame>
      <Line x1={cx} y1={beamY} x2={cx} y2={H - 24} stroke={palette.slate} strokeWidth={4} />
      <Line
        x1={cx - 90}
        y1={beamY - tilt}
        x2={cx + 90}
        y2={beamY + tilt}
        stroke={palette.ink}
        strokeWidth={4}
      />
      {[-90, 90].map((dx, i) => {
        const y = beamY + (dx < 0 ? -tilt : tilt);
        return (
          <G key={i}>
            <Line x1={cx + dx} y1={y} x2={cx + dx} y2={y + 20} stroke={palette.slate} strokeWidth={2} />
            <Rect x={cx + dx - 34} y={y + 20} width={68} height={30} rx={8} fill={palette.sunny + '55'} stroke={palette.sunny} strokeWidth={2} />
            <SvgText x={cx + dx} y={y + 40} fontSize={13} fontWeight="800" fill={palette.ink} textAnchor="middle">
              {i === 0 ? spec.left : spec.right}
            </SvgText>
          </G>
        );
      })}
    </Frame>
  );
}

function MetricLadder({ spec }: { spec: Extract<DiagramSpec, { kind: 'metric-ladder' }> }) {
  const rowH = H / spec.units.length;
  return (
    <Frame>
      {spec.units.map((u, i) => {
        const active = i === spec.highlight;
        const y = i * rowH;
        return (
          <G key={u}>
            <Rect
              x={W / 2 - 60}
              y={y + 4}
              width={120}
              height={rowH - 8}
              rx={8}
              fill={active ? palette.teal : palette.white}
              stroke={palette.teal}
              strokeWidth={2}
            />
            <SvgText
              x={W / 2}
              y={y + rowH / 2 + 5}
              fontSize={13}
              fontWeight="800"
              fill={active ? palette.white : palette.ink}
              textAnchor="middle"
            >
              {u}
            </SvgText>
          </G>
        );
      })}
    </Frame>
  );
}

function RectangleArea({ spec }: { spec: Extract<DiagramSpec, { kind: 'rectangle-area' }> }) {
  const maxW = W - 70;
  const maxH = H - 60;
  const ratio = spec.length / spec.width;
  let rw = maxW;
  let rh = rw / ratio;
  if (rh > maxH) {
    rh = maxH;
    rw = rh * ratio;
  }
  const x0 = (W - rw) / 2;
  const y0 = 20;
  const cols = Math.min(Math.round(spec.length), 10);
  const rows = Math.min(Math.round(spec.width), 10);
  return (
    <Frame>
      <Rect x={x0} y={y0} width={rw} height={rh} fill={palette.lime + '33'} stroke={palette.ink} strokeWidth={2} />
      {Array.from({ length: cols - 1 }, (_, i) => (
        <Line key={`c${i}`} x1={x0 + ((i + 1) * rw) / cols} y1={y0} x2={x0 + ((i + 1) * rw) / cols} y2={y0 + rh} stroke={palette.lime} strokeWidth={1} />
      ))}
      {Array.from({ length: rows - 1 }, (_, i) => (
        <Line key={`r${i}`} x1={x0} y1={y0 + ((i + 1) * rh) / rows} x2={x0 + rw} y2={y0 + ((i + 1) * rh) / rows} stroke={palette.lime} strokeWidth={1} />
      ))}
      <SvgText x={x0 + rw / 2} y={y0 + rh + 18} fontSize={12} fontWeight="800" fill={palette.ink} textAnchor="middle">
        length {spec.length}{spec.unit}
      </SvgText>
      <SvgText x={x0 - 8} y={y0 + rh / 2} fontSize={12} fontWeight="800" fill={palette.ink} textAnchor="middle" rotation={-90} origin={`${x0 - 8}, ${y0 + rh / 2}`}>
        width {spec.width}{spec.unit}
      </SvgText>
    </Frame>
  );
}

function AngleDiagram({ spec }: { spec: Extract<DiagramSpec, { kind: 'angle-diagram' }> }) {
  const cx = W / 2;
  const cy = H - 24;
  const r = 70;
  let cursor = spec.style === 'point' ? 0 : spec.style === 'vertical' ? -spec.angles[0] / 2 : 0;
  const rays = [cursor];
  spec.angles.forEach((a) => {
    cursor += a;
    rays.push(cursor);
  });
  const colors = [palette.berry, palette.teal, palette.grape, palette.coral];
  return (
    <Frame>
      {spec.style === 'straight' ? (
        <Line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke={palette.ink} strokeWidth={2} />
      ) : (
        <Circle cx={cx} cy={cy} r={2} fill={palette.ink} />
      )}
      {rays.map((deg, i) => {
        const p = polarPoint(cx, cy, r, deg - 90);
        return <Line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke={palette.ink} strokeWidth={2} />;
      })}
      {spec.angles.map((a, i) => {
        const mid = polarPoint(cx, cy, 30, (rays[i] + rays[i + 1]) / 2 - 90);
        return (
          <SvgText key={i} x={mid.x} y={mid.y} fontSize={12} fontWeight="800" fill={colors[i % colors.length]} textAnchor="middle">
            {a}°
          </SvgText>
        );
      })}
    </Frame>
  );
}

function ProbabilityScale({ spec }: { spec: Extract<DiagramSpec, { kind: 'probability-scale' }> }) {
  const pad = 24;
  const y = H / 2;
  const x = (v: number) => pad + v * (W - pad * 2);
  return (
    <Frame>
      <Line x1={pad} y1={y} x2={W - pad} y2={y} stroke={palette.ink} strokeWidth={4} />
      <SvgText x={pad} y={y + 24} fontSize={11} fill={palette.slate} textAnchor="middle">impossible</SvgText>
      <SvgText x={W - pad} y={y + 24} fontSize={11} fill={palette.slate} textAnchor="middle">certain</SvgText>
      {spec.markers.map((m, i) => (
        <G key={i}>
          <Circle cx={x(m.value)} cy={y} r={6} fill={palette.sunny} stroke={palette.ink} strokeWidth={1.5} />
          <SvgText x={x(m.value)} y={y - 14} fontSize={11} fontWeight="800" fill={palette.ink} textAnchor="middle">
            {m.label}
          </SvgText>
        </G>
      ))}
    </Frame>
  );
}

function DotArray({ spec }: { spec: Extract<DiagramSpec, { kind: 'dot-array' }> }) {
  const cell = Math.min(20, (W - 40) / spec.cols, (H - 40) / spec.rows);
  const gw = cell * spec.cols;
  const gh = cell * spec.rows;
  const x0 = (W - gw) / 2;
  const y0 = (H - gh) / 2 - 6;
  return (
    <Frame>
      {Array.from({ length: spec.rows }, (_, r) =>
        Array.from({ length: spec.cols }, (_, c) => (
          <Circle key={`${r}-${c}`} cx={x0 + c * cell + cell / 2} cy={y0 + r * cell + cell / 2} r={cell / 3} fill={palette.grape} />
        )),
      )}
      <SvgText x={W / 2} y={y0 + gh + 20} fontSize={12} fontWeight="800" fill={palette.ink} textAnchor="middle">
        {spec.label}
      </SvgText>
    </Frame>
  );
}

function Flowchart({ spec }: { spec: Extract<DiagramSpec, { kind: 'flowchart' }> }) {
  const rowH = H / spec.steps.length;
  return (
    <Frame>
      {spec.steps.map((s, i) => {
        const y = i * rowH + rowH / 2;
        return (
          <G key={i}>
            {s.decision ? (
              <Polygon
                points={`${W / 2},${y - 18} ${W / 2 + 90},${y} ${W / 2},${y + 18} ${W / 2 - 90},${y}`}
                fill={palette.sunny + '55'}
                stroke={palette.sunny}
                strokeWidth={2}
              />
            ) : (
              <Rect x={W / 2 - 90} y={y - 16} width={180} height={32} rx={8} fill={palette.sky + '33'} stroke={palette.sky} strokeWidth={2} />
            )}
            <SvgText x={W / 2} y={y + 4} fontSize={11} fontWeight="700" fill={palette.ink} textAnchor="middle">
              {s.text}
            </SvgText>
            {i < spec.steps.length - 1 && (
              <Line x1={W / 2} y1={y + rowH / 2 - 4} x2={W / 2} y2={y + rowH / 2 + 4} stroke={palette.slate} strokeWidth={2} />
            )}
          </G>
        );
      })}
    </Frame>
  );
}

const chipTints = [palette.grape, palette.teal, palette.berry, palette.sky, palette.lime] as const;

function IconScene({ spec }: { spec: Extract<DiagramSpec, { kind: 'icon-scene' }> }) {
  return (
    <View style={styles.iconScene}>
      <View style={styles.iconRow}>
        {spec.items.flatMap((item, i) => {
          const tint = chipTints[i % chipTints.length];
          const node = (
            <View key={`item-${i}`} style={styles.iconStep}>
              <View style={[styles.iconChip, { backgroundColor: tint + '22', borderColor: tint }]}>
                <Icon name={item.icon} tint={tint} />
              </View>
              {item.label && (
                <Text style={styles.iconLabel} numberOfLines={2}>
                  {item.label}
                </Text>
              )}
            </View>
          );
          if (i === spec.items.length - 1) return [node];
          return [node, <Text key={`arrow-${i}`} style={styles.iconConnector}>›</Text>];
        })}
      </View>
      <Text style={styles.iconCaption}>{spec.caption}</Text>
    </View>
  );
}

/** Dispatches a `DiagramSpec` to its renderer. Returns null for unknown kinds (caller falls back). */
export function DiagramView({ diagram }: { diagram: DiagramSpec }) {
  switch (diagram.kind) {
    case 'number-line':
      return <NumberLine spec={diagram} />;
    case 'pie-fraction':
      return <PieFraction spec={diagram} />;
    case 'fraction-bar':
      return <FractionBar spec={diagram} />;
    case 'place-value':
      return <PlaceValue spec={diagram} />;
    case 'thermometer':
      return <Thermometer spec={diagram} />;
    case 'bar-compare':
      return <BarCompare spec={diagram} />;
    case 'dot-plot':
      return <DotPlot spec={diagram} />;
    case 'quadrant-grid':
      return <QuadrantGrid spec={diagram} />;
    case 'balance-scale':
      return <BalanceScale spec={diagram} />;
    case 'metric-ladder':
      return <MetricLadder spec={diagram} />;
    case 'rectangle-area':
      return <RectangleArea spec={diagram} />;
    case 'angle-diagram':
      return <AngleDiagram spec={diagram} />;
    case 'probability-scale':
      return <ProbabilityScale spec={diagram} />;
    case 'dot-array':
      return <DotArray spec={diagram} />;
    case 'flowchart':
      return <Flowchart spec={diagram} />;
    case 'icon-scene':
      return <IconScene spec={diagram} />;
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  iconScene: { alignItems: 'center', justifyContent: 'center', paddingVertical: 12 },
  iconRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' },
  iconStep: { alignItems: 'center', width: 64 },
  iconChip: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: { fontSize: 12, fontWeight: '700', color: palette.ink, marginTop: 4, textAlign: 'center' },
  iconConnector: { fontSize: 22, fontWeight: '900', color: palette.slate, marginHorizontal: 2 },
  iconCaption: { fontSize: 12, fontWeight: '700', color: palette.ink, marginTop: 10, textAlign: 'center' },
});

export { W as DIAGRAM_WIDTH, H as DIAGRAM_HEIGHT, radius as _radius };
