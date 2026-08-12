import Svg, { Circle, Ellipse, Line, Path, Polygon, Rect, Text as SvgText } from 'react-native-svg';
import { palette } from '../../theme/colors';

/**
 * BilbyBots' vector pictogram set — flat, geometric, palette-only shapes
 * (never emoji). Every `icon-scene` illustration composes from this set so
 * the app reads as one consistent illustrated world. See AGENTS.md
 * "Illustration style reference" before adding a new name here.
 */
export type IconName =
  | 'book' | 'map' | 'people' | 'flag' | 'suitcase' | 'ship' | 'plane' | 'house'
  | 'globe' | 'gift-box' | 'bowl' | 'ball' | 'coin' | 'piggy-bank' | 'shopping-bag'
  | 'sun' | 'tree' | 'fish' | 'wave' | 'orbit' | 'battery' | 'bolt' | 'bulb'
  | 'nail' | 'telescope' | 'helix' | 'recycle' | 'bottle' | 'ruler' | 'clock'
  | 'clipboard' | 'microscope' | 'bar-chart' | 'price-tag' | 'cart' | 'traffic-light'
  | 'cube' | 'knife' | 'triangle-shape' | 'rotate-arrow' | 'mirror' | 'newspaper'
  | 'phone' | 'chat-bubble' | 'envelope' | 'robot' | 'smiley' | 'paw' | 'link'
  | 'train-engine' | 'train-car' | 'walker' | 'runner' | 'picture-frame' | 'cat'
  | 'raincloud' | 'stop-sign' | 'go-circle' | 'pen' | 'music-note' | 'burst'
  | 'wind' | 'bookmark' | 'magnifier' | 'eye' | 'crystal-ball' | 'speaker'
  | 'mic' | 'droplet' | 'arrow-right'
  | 'brain' | 'calc' | 'quill' | 'calendar' | 'lock' | 'timer'
  | 'sprout' | 'rocket' | 'trophy' | 'check-box' | 'box' | 'cog';

const SZ = 24;

/**
 * Icons render at their natural 24px. `size` lets callers inline a scaled
 * copy next to text (e.g. mode buttons) without duplicating artwork — the
 * shared Frame reads the current requested size for the whole subtree.
 */
let iconSize = SZ;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <Svg width={iconSize} height={iconSize} viewBox={`0 0 ${SZ} ${SZ}`}>
      {children}
    </Svg>
  );
}

export function Icon({ name, tint = palette.ink, size = SZ }: { name: IconName; tint?: string; size?: number }) {
  iconSize = size;
  switch (name) {
    case 'book':
      return (
        <Frame>
          <Rect x={4} y={4} width={16} height={16} rx={2} fill={tint} opacity={0.15} />
          <Line x1={12} y1={4} x2={12} y2={20} stroke={tint} strokeWidth={1.6} />
          <Line x1={7} y1={8} x2={10} y2={8} stroke={tint} strokeWidth={1.4} strokeLinecap="round" />
          <Line x1={14} y1={8} x2={17} y2={8} stroke={tint} strokeWidth={1.4} strokeLinecap="round" />
        </Frame>
      );
    case 'map':
      return (
        <Frame>
          <Polygon points="4,6 10,4 14,6 20,4 20,18 14,20 10,18 4,20" fill={tint} opacity={0.15} stroke={tint} strokeWidth={1.4} />
          <Line x1={10} y1={4} x2={10} y2={18} stroke={tint} strokeWidth={1} opacity={0.5} />
          <Line x1={14} y1={6} x2={14} y2={20} stroke={tint} strokeWidth={1} opacity={0.5} />
          <Circle cx={16} cy={11} r={1.6} fill={tint} />
        </Frame>
      );
    case 'people':
      return (
        <Frame>
          <Circle cx={9} cy={9} r={4} fill={tint} opacity={0.85} />
          <Circle cx={16} cy={10} r={3.4} fill={tint} opacity={0.5} />
          <Path d="M4 20c0-3.3 2.7-5.5 5.5-5.5S15 16.7 15 20" fill={tint} opacity={0.85} />
          <Path d="M13 20c0-2.6 2-4.3 4-4.3s4 1.7 4 4.3" fill={tint} opacity={0.5} />
        </Frame>
      );
    case 'flag':
      return (
        <Frame>
          <Line x1={6} y1={3} x2={6} y2={21} stroke={tint} strokeWidth={1.6} strokeLinecap="round" />
          <Path d="M6 4 L19 7 L6 11 Z" fill={tint} opacity={0.8} />
        </Frame>
      );
    case 'suitcase':
      return (
        <Frame>
          <Path d="M9 6V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v1" fill="none" stroke={tint} strokeWidth={1.4} />
          <Rect x={4} y={6} width={16} height={12} rx={2} fill={tint} opacity={0.15} stroke={tint} strokeWidth={1.4} />
          <Line x1={4} y1={12} x2={20} y2={12} stroke={tint} strokeWidth={1} opacity={0.5} />
        </Frame>
      );
    case 'ship':
      return (
        <Frame>
          <Path d="M5 13 L19 13 L17 18 L7 18 Z" fill={tint} opacity={0.8} />
          <Line x1={12} y1={3} x2={12} y2={13} stroke={tint} strokeWidth={1.4} />
          <Path d="M12 4 L17 8 L12 8 Z" fill={tint} opacity={0.4} />
        </Frame>
      );
    case 'plane':
      return (
        <Frame>
          <Path d="M3 14 L21 8 L15 13 L21 18 L13 15 L9 19 L9 15 L3 14 Z" fill={tint} opacity={0.8} />
        </Frame>
      );
    case 'house':
      return (
        <Frame>
          <Polygon points="12,4 21,12 3,12" fill={tint} opacity={0.8} />
          <Rect x={6} y={12} width={12} height={8} fill={tint} opacity={0.2} stroke={tint} strokeWidth={1.2} />
          <Rect x={10.5} y={15} width={3} height={5} fill={tint} />
        </Frame>
      );
    case 'globe':
      return (
        <Frame>
          <Circle cx={12} cy={12} r={8} fill="none" stroke={tint} strokeWidth={1.5} />
          <Ellipse cx={12} cy={12} rx={3.2} ry={8} fill="none" stroke={tint} strokeWidth={1.2} />
          <Line x1={4} y1={12} x2={20} y2={12} stroke={tint} strokeWidth={1.2} />
        </Frame>
      );
    case 'gift-box':
      return (
        <Frame>
          <Rect x={4} y={10} width={16} height={10} fill={tint} opacity={0.18} stroke={tint} strokeWidth={1.4} />
          <Rect x={4} y={7} width={16} height={4} fill={tint} opacity={0.5} />
          <Line x1={12} y1={7} x2={12} y2={20} stroke={tint} strokeWidth={1.4} />
          <Path d="M12 7c-2-4-6-3-6 0M12 7c2-4 6-3 6 0" fill="none" stroke={tint} strokeWidth={1.3} />
        </Frame>
      );
    case 'bowl':
      return (
        <Frame>
          <Path d="M4 12h16a8 6 0 0 1-16 0Z" fill={tint} opacity={0.7} />
          <Line x1={4} y1={12} x2={20} y2={12} stroke={tint} strokeWidth={1.4} />
          <Path d="M9 8c0-2 1-3 1-4M14 8c0-2 1-3 1-4" fill="none" stroke={tint} strokeWidth={1.1} opacity={0.6} />
        </Frame>
      );
    case 'ball':
      return (
        <Frame>
          <Circle cx={12} cy={12} r={8} fill="none" stroke={tint} strokeWidth={1.5} />
          <Polygon points="12,8 14.5,10 13.5,13 10.5,13 9.5,10" fill={tint} opacity={0.6} />
        </Frame>
      );
    case 'coin':
      return (
        <Frame>
          <Circle cx={12} cy={12} r={8} fill={tint} opacity={0.2} stroke={tint} strokeWidth={1.5} />
          <SvgText x={12} y={16} fontSize={10} fontWeight="800" fill={tint} textAnchor="middle">$</SvgText>
        </Frame>
      );
    case 'piggy-bank':
      return (
        <Frame>
          <Ellipse cx={12} cy={13} rx={8} ry={6} fill={tint} opacity={0.4} />
          <Polygon points="6,9 3,7 5,11" fill={tint} opacity={0.4} />
          <Line x1={12} y1={9} x2={12} y2={11} stroke={tint} strokeWidth={1.4} />
          <Circle cx={16} cy={12} r={1} fill={palette.white} />
          <Line x1={8} y1={19} x2={8} y2={21} stroke={tint} strokeWidth={1.6} />
          <Line x1={16} y1={19} x2={16} y2={21} stroke={tint} strokeWidth={1.6} />
        </Frame>
      );
    case 'shopping-bag':
      return (
        <Frame>
          <Path d="M6 9 L18 9 L17 20 L7 20 Z" fill={tint} opacity={0.2} stroke={tint} strokeWidth={1.4} />
          <Path d="M9 9c0-3 1.5-5 3-5s3 2 3 5" fill="none" stroke={tint} strokeWidth={1.3} />
        </Frame>
      );
    case 'sun':
      return (
        <Frame>
          <Circle cx={12} cy={12} r={5} fill={tint} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const r1 = 8;
            const r2 = 10.5;
            const rad = (deg * Math.PI) / 180;
            return (
              <Line
                key={deg}
                x1={12 + r1 * Math.cos(rad)}
                y1={12 + r1 * Math.sin(rad)}
                x2={12 + r2 * Math.cos(rad)}
                y2={12 + r2 * Math.sin(rad)}
                stroke={tint}
                strokeWidth={1.4}
                strokeLinecap="round"
              />
            );
          })}
        </Frame>
      );
    case 'tree':
      return (
        <Frame>
          <Line x1={12} y1={13} x2={12} y2={21} stroke={tint} strokeWidth={1.6} />
          <Circle cx={12} cy={9} r={6} fill={tint} opacity={0.7} />
        </Frame>
      );
    case 'fish':
      return (
        <Frame>
          <Ellipse cx={11} cy={12} rx={7} ry={4} fill={tint} opacity={0.7} />
          <Polygon points="17,12 21,8 21,16" fill={tint} opacity={0.7} />
          <Circle cx={7} cy={11} r={0.9} fill={palette.white} />
        </Frame>
      );
    case 'wave':
      return (
        <Frame>
          <Path d="M2 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4-2 6-0" fill="none" stroke={tint} strokeWidth={1.6} strokeLinecap="round" />
          <Path d="M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4-2 6-0" fill="none" stroke={tint} strokeWidth={1.6} strokeLinecap="round" opacity={0.5} />
        </Frame>
      );
    case 'orbit':
      return (
        <Frame>
          <Circle cx={12} cy={12} r={3} fill={tint} />
          <Ellipse cx={12} cy={12} rx={9} ry={4} fill="none" stroke={tint} strokeWidth={1.3} />
          <Circle cx={20} cy={12} r={1.4} fill={tint} />
        </Frame>
      );
    case 'battery':
      return (
        <Frame>
          <Rect x={3} y={8} width={16} height={8} rx={1.5} fill="none" stroke={tint} strokeWidth={1.5} />
          <Rect x={19} y={10.5} width={2} height={3} fill={tint} />
          <Rect x={5} y={10} width={5} height={4} fill={tint} opacity={0.7} />
        </Frame>
      );
    case 'bolt':
      return (
        <Frame>
          <Polygon points="13,2 5,14 11,14 9,22 19,9 13,9" fill={tint} opacity={0.85} />
        </Frame>
      );
    case 'bulb':
      return (
        <Frame>
          <Circle cx={12} cy={10} r={6} fill={tint} opacity={0.3} stroke={tint} strokeWidth={1.4} />
          <Rect x={10} y={16} width={4} height={3} fill={tint} />
          <Line x1={12} y1={2} x2={12} y2={4} stroke={tint} strokeWidth={1.3} strokeLinecap="round" />
        </Frame>
      );
    case 'nail':
      return (
        <Frame>
          <Line x1={6} y1={5} x2={18} y2={5} stroke={tint} strokeWidth={2} strokeLinecap="round" />
          <Line x1={12} y1={5} x2={12} y2={21} stroke={tint} strokeWidth={2} strokeLinecap="round" />
        </Frame>
      );
    case 'telescope':
      return (
        <Frame>
          <Path d="M4 16 L17 6 L19 9 L6 19 Z" fill={tint} opacity={0.75} />
          <Line x1={6} y1={19} x2={4} y2={22} stroke={tint} strokeWidth={1.4} />
          <Line x1={16} y1={7} x2={19} y2={9.5} stroke={tint} strokeWidth={1} opacity={0.5} />
        </Frame>
      );
    case 'helix':
      return (
        <Frame>
          <Path d="M7 3c5 3 5 6 0 9s-5 6 0 9" fill="none" stroke={tint} strokeWidth={1.5} />
          <Path d="M17 3c-5 3-5 6 0 9s5 6 0 9" fill="none" stroke={tint} strokeWidth={1.5} opacity={0.5} />
          <Line x1={7.5} y1={7} x2={16.5} y2={7} stroke={tint} strokeWidth={1} opacity={0.4} />
          <Line x1={7.5} y1={17} x2={16.5} y2={17} stroke={tint} strokeWidth={1} opacity={0.4} />
        </Frame>
      );
    case 'recycle':
      return (
        <Frame>
          <Circle cx={12} cy={12} r={8} fill="none" stroke={tint} strokeWidth={1.5} strokeDasharray="4 3" />
          <Polygon points="12,7 15,11 9,11" fill={tint} />
        </Frame>
      );
    case 'bottle':
      return (
        <Frame>
          <Rect x={9} y={3} width={6} height={3} fill={tint} />
          <Path d="M9 6 L9 9 L7 12 L7 20 A2 2 0 0 0 9 22 H15 A2 2 0 0 0 17 20 V12 L15 9 L15 6 Z" fill={tint} opacity={0.25} stroke={tint} strokeWidth={1.3} />
        </Frame>
      );
    case 'ruler':
      return (
        <Frame>
          <Rect x={3} y={9} width={18} height={6} rx={1} fill={tint} opacity={0.15} stroke={tint} strokeWidth={1.3} transform="rotate(-8 12 12)" />
          {[6, 9, 12, 15, 18].map((x) => (
            <Line key={x} x1={x} y1={9.5} x2={x} y2={11.5} stroke={tint} strokeWidth={1} transform="rotate(-8 12 12)" />
          ))}
        </Frame>
      );
    case 'clock':
      return (
        <Frame>
          <Circle cx={12} cy={12} r={8} fill="none" stroke={tint} strokeWidth={1.5} />
          <Line x1={12} y1={12} x2={12} y2={7} stroke={tint} strokeWidth={1.4} strokeLinecap="round" />
          <Line x1={12} y1={12} x2={16} y2={13.5} stroke={tint} strokeWidth={1.4} strokeLinecap="round" />
        </Frame>
      );
    case 'clipboard':
      return (
        <Frame>
          <Rect x={5} y={4} width={14} height={17} rx={1.5} fill={tint} opacity={0.12} stroke={tint} strokeWidth={1.3} />
          <Rect x={9} y={3} width={6} height={3} rx={1} fill={tint} />
          <Line x1={8} y1={11} x2={16} y2={11} stroke={tint} strokeWidth={1.1} opacity={0.6} />
          <Line x1={8} y1={14} x2={16} y2={14} stroke={tint} strokeWidth={1.1} opacity={0.6} />
          <Line x1={8} y1={17} x2={13} y2={17} stroke={tint} strokeWidth={1.1} opacity={0.6} />
        </Frame>
      );
    case 'microscope':
      return (
        <Frame>
          <Line x1={7} y1={21} x2={17} y2={21} stroke={tint} strokeWidth={1.5} strokeLinecap="round" />
          <Path d="M12 21v-4a4 4 0 0 1 4-4" fill="none" stroke={tint} strokeWidth={1.5} />
          <Path d="M9 13 L14 6" stroke={tint} strokeWidth={2} strokeLinecap="round" />
          <Circle cx={9} cy={13} r={1.8} fill={tint} />
        </Frame>
      );
    case 'bar-chart':
      return (
        <Frame>
          <Rect x={4} y={13} width={4} height={8} fill={tint} opacity={0.5} />
          <Rect x={10} y={8} width={4} height={13} fill={tint} opacity={0.75} />
          <Rect x={16} y={4} width={4} height={17} fill={tint} />
        </Frame>
      );
    case 'price-tag':
      return (
        <Frame>
          <Path d="M4 4 L13 4 L20 11 L13 18 L4 18 Z" fill={tint} opacity={0.2} stroke={tint} strokeWidth={1.3} transform="rotate(0 12 11)" />
          <Circle cx={8} cy={9} r={1.4} fill={tint} />
        </Frame>
      );
    case 'cart':
      return (
        <Frame>
          <Path d="M3 4h2l2 11h11l2-7H8" fill="none" stroke={tint} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          <Circle cx={9} cy={19} r={1.4} fill={tint} />
          <Circle cx={16} cy={19} r={1.4} fill={tint} />
        </Frame>
      );
    case 'traffic-light':
      return (
        <Frame>
          <Rect x={9} y={2} width={6} height={20} rx={3} fill={tint} opacity={0.15} stroke={tint} strokeWidth={1.2} />
          <Circle cx={12} cy={6.5} r={2} fill={palette.coral} />
          <Circle cx={12} cy={12} r={2} fill={palette.sunny} />
          <Circle cx={12} cy={17.5} r={2} fill={palette.lime} />
        </Frame>
      );
    case 'cube':
      return (
        <Frame>
          <Polygon points="5,9 12,5 19,9 19,17 12,21 5,17" fill={tint} opacity={0.2} stroke={tint} strokeWidth={1.3} />
          <Line x1={5} y1={9} x2={12} y2={13} stroke={tint} strokeWidth={1.1} opacity={0.6} />
          <Line x1={19} y1={9} x2={12} y2={13} stroke={tint} strokeWidth={1.1} opacity={0.6} />
          <Line x1={12} y1={13} x2={12} y2={21} stroke={tint} strokeWidth={1.1} opacity={0.6} />
        </Frame>
      );
    case 'knife':
      return (
        <Frame>
          <Polygon points="4,16 16,4 20,8 8,20" fill={tint} opacity={0.75} />
          <Line x1={4} y1={16} x2={8} y2={20} stroke={tint} strokeWidth={2} strokeLinecap="round" />
        </Frame>
      );
    case 'triangle-shape':
      return (
        <Frame>
          <Polygon points="12,4 21,20 3,20" fill={tint} opacity={0.7} />
        </Frame>
      );
    case 'rotate-arrow':
      return (
        <Frame>
          <Path d="M5 12a7 7 0 1 1 2 5" fill="none" stroke={tint} strokeWidth={1.6} strokeLinecap="round" />
          <Polygon points="4,14 5,19 9,16" fill={tint} />
        </Frame>
      );
    case 'mirror':
      return (
        <Frame>
          <Ellipse cx={12} cy={10} rx={6} ry={7} fill={tint} opacity={0.15} stroke={tint} strokeWidth={1.4} />
          <Line x1={12} y1={17} x2={12} y2={22} stroke={tint} strokeWidth={1.5} />
          <Line x1={8} y1={22} x2={16} y2={22} stroke={tint} strokeWidth={1.5} strokeLinecap="round" />
        </Frame>
      );
    case 'newspaper':
      return (
        <Frame>
          <Rect x={3} y={5} width={18} height={14} rx={1} fill={tint} opacity={0.12} stroke={tint} strokeWidth={1.3} />
          <Rect x={5.5} y={7.5} width={6} height={5} fill={tint} opacity={0.5} />
          <Line x1={13} y1={8} x2={18.5} y2={8} stroke={tint} strokeWidth={1} opacity={0.6} />
          <Line x1={13} y1={10.5} x2={18.5} y2={10.5} stroke={tint} strokeWidth={1} opacity={0.6} />
          <Line x1={5.5} y1={15} x2={18.5} y2={15} stroke={tint} strokeWidth={1} opacity={0.6} />
        </Frame>
      );
    case 'phone':
      return (
        <Frame>
          <Rect x={7} y={2} width={10} height={20} rx={2} fill={tint} opacity={0.15} stroke={tint} strokeWidth={1.4} />
          <Circle cx={12} cy={19} r={1} fill={tint} />
        </Frame>
      );
    case 'chat-bubble':
      return (
        <Frame>
          <Path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H10l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" fill={tint} opacity={0.2} stroke={tint} strokeWidth={1.3} />
        </Frame>
      );
    case 'envelope':
      return (
        <Frame>
          <Rect x={3} y={6} width={18} height={13} rx={1.5} fill={tint} opacity={0.15} stroke={tint} strokeWidth={1.3} />
          <Path d="M3 7l9 7 9-7" fill="none" stroke={tint} strokeWidth={1.3} />
        </Frame>
      );
    case 'robot':
      return (
        <Frame>
          <Rect x={5} y={8} width={14} height={11} rx={2} fill={tint} opacity={0.2} stroke={tint} strokeWidth={1.4} />
          <Line x1={12} y1={4} x2={12} y2={8} stroke={tint} strokeWidth={1.3} />
          <Circle cx={12} cy={3} r={1.2} fill={tint} />
          <Rect x={8} y={12} width={3} height={3} fill={tint} />
          <Rect x={13} y={12} width={3} height={3} fill={tint} />
        </Frame>
      );
    case 'smiley':
      return (
        <Frame>
          <Circle cx={12} cy={12} r={8} fill={tint} opacity={0.2} stroke={tint} strokeWidth={1.4} />
          <Circle cx={9} cy={10} r={1.1} fill={tint} />
          <Circle cx={15} cy={10} r={1.1} fill={tint} />
          <Path d="M8 14c1.5 2 6.5 2 8 0" fill="none" stroke={tint} strokeWidth={1.4} strokeLinecap="round" />
        </Frame>
      );
    case 'paw':
      return (
        <Frame>
          <Circle cx={12} cy={16} r={4} fill={tint} opacity={0.75} />
          <Circle cx={6} cy={11} r={2} fill={tint} opacity={0.6} />
          <Circle cx={10} cy={7} r={2} fill={tint} opacity={0.6} />
          <Circle cx={15} cy={7} r={2} fill={tint} opacity={0.6} />
          <Circle cx={18} cy={11} r={2} fill={tint} opacity={0.6} />
        </Frame>
      );
    case 'link':
      return (
        <Frame>
          <Rect x={3} y={9} width={10} height={6} rx={3} fill="none" stroke={tint} strokeWidth={1.6} transform="rotate(-20 8 12)" />
          <Rect x={11} y={9} width={10} height={6} rx={3} fill="none" stroke={tint} strokeWidth={1.6} transform="rotate(-20 16 12)" />
        </Frame>
      );
    case 'train-engine':
      return (
        <Frame>
          <Rect x={4} y={8} width={12} height={9} rx={2} fill={tint} opacity={0.25} stroke={tint} strokeWidth={1.3} />
          <Rect x={13} y={4} width={5} height={5} fill={tint} opacity={0.5} />
          <Circle cx={8} cy={19} r={1.6} fill={tint} />
          <Circle cx={13} cy={19} r={1.6} fill={tint} />
        </Frame>
      );
    case 'train-car':
      return (
        <Frame>
          <Rect x={4} y={7} width={16} height={10} rx={2} fill={tint} opacity={0.18} stroke={tint} strokeWidth={1.3} />
          <Line x1={12} y1={7} x2={12} y2={17} stroke={tint} strokeWidth={1} opacity={0.5} />
          <Circle cx={8} cy={19} r={1.6} fill={tint} />
          <Circle cx={16} cy={19} r={1.6} fill={tint} />
        </Frame>
      );
    case 'walker':
      return (
        <Frame>
          <Circle cx={12} cy={5} r={2.2} fill={tint} />
          <Line x1={12} y1={7.5} x2={12} y2={15} stroke={tint} strokeWidth={1.8} strokeLinecap="round" />
          <Line x1={12} y1={15} x2={9} y2={21} stroke={tint} strokeWidth={1.8} strokeLinecap="round" />
          <Line x1={12} y1={15} x2={15} y2={20} stroke={tint} strokeWidth={1.8} strokeLinecap="round" />
          <Line x1={12} y1={10} x2={8} y2={12} stroke={tint} strokeWidth={1.6} strokeLinecap="round" />
          <Line x1={12} y1={10} x2={16} y2={9} stroke={tint} strokeWidth={1.6} strokeLinecap="round" />
        </Frame>
      );
    case 'runner':
      return (
        <Frame>
          <Circle cx={9} cy={5} r={2.2} fill={tint} />
          <Line x1={9} y1={7.5} x2={13} y2={13} stroke={tint} strokeWidth={1.8} strokeLinecap="round" />
          <Line x1={13} y1={13} x2={9} y2={17} stroke={tint} strokeWidth={1.8} strokeLinecap="round" />
          <Line x1={13} y1={13} x2={18} y2={11} stroke={tint} strokeWidth={1.8} strokeLinecap="round" />
          <Line x1={9} y1={17} x2={14} y2={19} stroke={tint} strokeWidth={1.8} strokeLinecap="round" />
          <Line x1={13} y1={9} x2={7} y2={7} stroke={tint} strokeWidth={1.6} strokeLinecap="round" />
        </Frame>
      );
    case 'picture-frame':
      return (
        <Frame>
          <Rect x={3} y={4} width={18} height={16} rx={1.5} fill={tint} opacity={0.1} stroke={tint} strokeWidth={1.4} />
          <Circle cx={8} cy={9} r={1.6} fill={tint} opacity={0.6} />
          <Path d="M5 17l5-5 4 4 3-3 5 5" fill="none" stroke={tint} strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
        </Frame>
      );
    case 'cat':
      return (
        <Frame>
          <Circle cx={12} cy={13} r={6.5} fill={tint} opacity={0.7} />
          <Polygon points="6,9 8,3 10,9" fill={tint} opacity={0.7} />
          <Polygon points="18,9 16,3 14,9" fill={tint} opacity={0.7} />
          <Circle cx={9.5} cy={12} r={0.9} fill={palette.white} />
          <Circle cx={14.5} cy={12} r={0.9} fill={palette.white} />
        </Frame>
      );
    case 'raincloud':
      return (
        <Frame>
          <Path d="M6 12a4 4 0 0 1 7.5-2 4.5 4.5 0 0 1 4.5 4.4A3.5 3.5 0 0 1 17.5 21H7a4 4 0 0 1-1-7.9Z" fill={tint} opacity={0.5} />
          <Line x1={9} y1={19} x2={8} y2={22} stroke={tint} strokeWidth={1.3} strokeLinecap="round" />
          <Line x1={13} y1={19} x2={12} y2={22} stroke={tint} strokeWidth={1.3} strokeLinecap="round" />
          <Line x1={17} y1={19} x2={16} y2={22} stroke={tint} strokeWidth={1.3} strokeLinecap="round" />
        </Frame>
      );
    case 'stop-sign':
      return (
        <Frame>
          <Polygon points="8,3 16,3 21,8 21,16 16,21 8,21 3,16 3,8" fill={palette.coral} />
          <Rect x={7} y={11} width={10} height={2} fill={palette.white} />
        </Frame>
      );
    case 'go-circle':
      return (
        <Frame>
          <Circle cx={12} cy={12} r={9} fill={palette.lime} />
          <Path d="M9 12l2 2 4-4" fill="none" stroke={palette.white} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        </Frame>
      );
    case 'pen':
      return (
        <Frame>
          <Polygon points="16,3 21,8 9,20 4,21 5,16" fill={tint} opacity={0.8} />
        </Frame>
      );
    case 'music-note':
      return (
        <Frame>
          <Circle cx={7} cy={18} r={2.4} fill={tint} />
          <Line x1={9.2} y1={18} x2={9.2} y2={5} stroke={tint} strokeWidth={1.5} />
          <Path d="M9.2 5l6.6 2v4l-6.6-2Z" fill={tint} />
        </Frame>
      );
    case 'burst':
      return (
        <Frame>
          <Polygon points="12,2 14,9 21,7 15,12 21,17 14,15 12,22 10,15 3,17 9,12 3,7 10,9" fill={palette.sunny} />
        </Frame>
      );
    case 'wind':
      return (
        <Frame>
          <Path d="M3 9h11a2.5 2.5 0 1 0-2-4" fill="none" stroke={tint} strokeWidth={1.5} strokeLinecap="round" />
          <Path d="M3 14h15a2.5 2.5 0 1 1-2 4" fill="none" stroke={tint} strokeWidth={1.5} strokeLinecap="round" />
          <Line x1={3} y1={19} x2={12} y2={19} stroke={tint} strokeWidth={1.5} strokeLinecap="round" opacity={0.6} />
        </Frame>
      );
    case 'bookmark':
      return (
        <Frame>
          <Path d="M6 3h12v18l-6-4-6 4Z" fill={tint} opacity={0.25} stroke={tint} strokeWidth={1.3} />
          <Line x1={9} y1={8} x2={15} y2={8} stroke={tint} strokeWidth={1.1} opacity={0.6} />
        </Frame>
      );
    case 'magnifier':
      return (
        <Frame>
          <Circle cx={10} cy={10} r={6} fill="none" stroke={tint} strokeWidth={1.6} />
          <Line x1={14.5} y1={14.5} x2={20} y2={20} stroke={tint} strokeWidth={1.8} strokeLinecap="round" />
        </Frame>
      );
    case 'eye':
      return (
        <Frame>
          <Path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" fill="none" stroke={tint} strokeWidth={1.4} />
          <Circle cx={12} cy={12} r={2.6} fill={tint} />
        </Frame>
      );
    case 'crystal-ball':
      return (
        <Frame>
          <Circle cx={12} cy={11} r={7} fill={tint} opacity={0.2} stroke={tint} strokeWidth={1.4} />
          <Path d="M6 20h12l-2-2H8Z" fill={tint} opacity={0.6} />
        </Frame>
      );
    case 'speaker':
      return (
        <Frame>
          <Polygon points="4,10 8,10 13,6 13,18 8,14 4,14" fill={tint} opacity={0.8} />
          <Path d="M16 9a5 5 0 0 1 0 6M18.5 7a8 8 0 0 1 0 10" fill="none" stroke={tint} strokeWidth={1.4} strokeLinecap="round" />
        </Frame>
      );
    case 'mic':
      return (
        <Frame>
          <Rect x={9.5} y={3} width={5} height={10} rx={2.5} fill={tint} opacity={0.8} />
          <Path d="M6 11a6 6 0 0 0 12 0" fill="none" stroke={tint} strokeWidth={1.5} strokeLinecap="round" />
          <Line x1={12} y1={17} x2={12} y2={21} stroke={tint} strokeWidth={1.5} />
          <Line x1={8} y1={21} x2={16} y2={21} stroke={tint} strokeWidth={1.5} strokeLinecap="round" />
        </Frame>
      );
    case 'droplet':
      return (
        <Frame>
          <Path d="M12 3c4 5 7 8.5 7 12a7 7 0 0 1-14 0c0-3.5 3-7 7-12Z" fill={tint} opacity={0.7} />
        </Frame>
      );
    case 'arrow-right':
      return (
        <Frame>
          <Line x1={4} y1={12} x2={18} y2={12} stroke={tint} strokeWidth={1.8} strokeLinecap="round" />
          <Polygon points="15,7 21,12 15,17" fill={tint} />
        </Frame>
      );
    case 'brain':
      return (
        <Frame>
          <Path
            d="M12 3c-3.5 0-6 2.5-6 5.5 0 .9.2 1.7.6 2.4C5 11.6 4 13.1 4 14.8c0 1.5.8 2.9 2 3.7-.1.4-.2.9-.2 1.4 0 2.3 1.9 4.1 4.2 4.1 1 0 1.9-.3 2.6-.9.7.6 1.6.9 2.6.9 2.3 0 4.2-1.8 4.2-4.1 0-.5-.1-1-.2-1.4 1.2-.8 2-2.2 2-3.7 0-1.7-1-3.2-2.6-3.9.4-.7.6-1.5.6-2.4C18 5.5 15.5 3 12 3Z"
            fill={tint}
            opacity={0.85}
          />
          <Line x1={12} y1={7} x2={12} y2={19} stroke={palette.white} strokeWidth={1.1} opacity={0.7} />
          <Line x1={8.5} y1={9.5} x2={8.5} y2={15.5} stroke={palette.white} strokeWidth={1} opacity={0.7} />
          <Line x1={15.5} y1={9.5} x2={15.5} y2={15.5} stroke={palette.white} strokeWidth={1} opacity={0.7} />
        </Frame>
      );
    case 'calc':
      return (
        <Frame>
          <Rect x={5} y={2} width={14} height={20} rx={2} fill={tint} opacity={0.15} stroke={tint} strokeWidth={1.4} />
          <Rect x={7} y={5} width={10} height={3.5} fill={tint} opacity={0.6} />
          {[0, 1, 2].flatMap((row) =>
            [0, 1, 2].map((col) => (
              <Circle key={`${row}-${col}`} cx={8.5 + col * 3.2} cy={11.5 + row * 3.2} r={1.1} fill={tint} />
            )),
          )}
        </Frame>
      );
    case 'quill':
      return (
        <Frame>
          <Path d="M4 21c4-9 10-16 17-18-2 7-8 13-17 18Z" fill={tint} opacity={0.75} />
          <Line x1={12} y1={12} x2={5} y2={21} stroke={palette.white} strokeWidth={1} opacity={0.6} />
          <Line x1={7} y1={17} x2={10} y2={14} stroke={palette.white} strokeWidth={1} opacity={0.5} />
        </Frame>
      );
    case 'calendar':
      return (
        <Frame>
          <Rect x={4} y={5} width={16} height={16} rx={2} fill={tint} opacity={0.15} stroke={tint} strokeWidth={1.4} />
          <Line x1={4} y1={10} x2={20} y2={10} stroke={tint} strokeWidth={1.2} />
          <Line x1={8.5} y1={3} x2={8.5} y2={7} stroke={tint} strokeWidth={1.4} strokeLinecap="round" />
          <Line x1={15.5} y1={3} x2={15.5} y2={7} stroke={tint} strokeWidth={1.4} strokeLinecap="round" />
          <Circle cx={8} cy={14} r={1.2} fill={tint} />
          <Circle cx={12} cy={14} r={1.2} fill={tint} />
          <Circle cx={16} cy={14} r={1.2} fill={tint} />
        </Frame>
      );
    case 'lock':
      return (
        <Frame>
          <Rect x={5} y={11} width={14} height={10} rx={2} fill={tint} opacity={0.2} stroke={tint} strokeWidth={1.4} />
          <Path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke={tint} strokeWidth={1.6} />
          <Circle cx={12} cy={16} r={1.6} fill={tint} />
        </Frame>
      );
    case 'timer':
      return (
        <Frame>
          <Circle cx={12} cy={14} r={7} fill="none" stroke={tint} strokeWidth={1.6} />
          <Line x1={12} y1={14} x2={12} y2={9} stroke={tint} strokeWidth={1.6} strokeLinecap="round" />
          <Line x1={12} y1={9} x2={15} y2={10.5} stroke={tint} strokeWidth={1.6} strokeLinecap="round" />
          <Line x1={10} y1={4} x2={14} y2={4} stroke={tint} strokeWidth={1.6} strokeLinecap="round" />
        </Frame>
      );
    case 'sprout':
      return (
        <Frame>
          <Line x1={12} y1={21} x2={12} y2={13} stroke={tint} strokeWidth={1.6} strokeLinecap="round" />
          <Path d="M12 13c-4 0-6-2-6-5 3 0 6 2 6 5Z" fill={tint} opacity={0.7} />
          <Path d="M12 10c0-3 2-5 5-5 0 3-2 5-5 5Z" fill={tint} opacity={0.45} />
        </Frame>
      );
    case 'rocket':
      return (
        <Frame>
          <Path d="M12 2c3 3 4 7 4 10l-4 4-4-4c0-3 1-7 4-10Z" fill={tint} opacity={0.25} stroke={tint} strokeWidth={1.4} />
          <Circle cx={12} cy={9} r={1.8} fill={tint} />
          <Path d="M8 13l-3 3 2 2 2-2M16 13l3 3-2 2-2-2" fill="none" stroke={tint} strokeWidth={1.3} strokeLinecap="round" />
        </Frame>
      );
    case 'trophy':
      return (
        <Frame>
          <Rect x={7} y={3} width={10} height={11} rx={2} fill={tint} opacity={0.25} stroke={tint} strokeWidth={1.4} />
          <Path d="M7 5H4v2c0 2.5 1.5 4 4 4M17 5h3v2c0 2.5-1.5 4-4 4" fill="none" stroke={tint} strokeWidth={1.4} />
          <Line x1={12} y1={14} x2={12} y2={19} stroke={tint} strokeWidth={1.5} />
          <Line x1={9} y1={21} x2={15} y2={21} stroke={tint} strokeWidth={1.5} strokeLinecap="round" />
        </Frame>
      );
    case 'check-box':
      return (
        <Frame>
          <Rect x={4} y={4} width={16} height={16} rx={3} fill={palette.teal} />
          <Path d="M8 12.5l2.5 2.5L16 9.5" fill="none" stroke={palette.white} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Frame>
      );
    case 'box':
      return (
        <Frame>
          <Rect x={4} y={4} width={16} height={16} rx={3} fill="none" stroke={tint} strokeWidth={1.6} />
        </Frame>
      );
    case 'cog':
      return (
        <Frame>
          <Circle cx={12} cy={12} r={3.2} fill={tint} />
          <Circle cx={12} cy={12} r={7} fill="none" stroke={tint} strokeWidth={1.8} strokeDasharray="3 2.6" />
          <Circle cx={5.5} cy={7} r={1.6} fill={tint} />
          <Circle cx={18.5} cy={17} r={1.6} fill={tint} />
        </Frame>
      );
    default:
      return null;
  }
}
