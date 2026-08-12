import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

/**
 * FloatingDots — a subtle animated backdrop of translucent dots drifting
 * slowly behind content. Each dot is a small pill (random size, random
 * opacity) in a colour from the surrounding palette:
 *   - `dark`:  grey → header maroon, for cream/light backgrounds
 *   - `light`: white → soft pink, for the dark maroon header band
 * Dots never capture touches (`pointerEvents="none"`). Layer this with
 * `zIndex: -1` inside a positioned parent so it sits behind the content.
 */
type Tone = 'dark' | 'light';

const DARK_COLORS = ['#9AA0A8', '#5A5F66', '#6B4857', '#61032A', '#CB1345'] as const;
const LIGHT_COLORS = ['#FFFFFF', '#FFE7ED', '#FFC4D1', '#E8A6B6'] as const;

interface DotSpec {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  dx: number;
  dy: number;
  duration: number;
}

function buildDots(tone: Tone, count: number, sizeRange: [number, number], maxOpacity: number): DotSpec[] {
  const colors = tone === 'dark' ? DARK_COLORS : LIGHT_COLORS;
  const dots: DotSpec[] = [];
  for (let i = 0; i < count; i++) {
    const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
    dots.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.04 + Math.random() * (maxOpacity - 0.04),
      dx: (Math.random() - 0.5) * 130,
      dy: (Math.random() - 0.5) * 130,
      duration: 5000 + Math.random() * 9000,
    });
  }
  return dots;
}

function Dot({ dot }: { dot: DotSpec }) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(progress, {
          toValue: 1,
          duration: dot.duration,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
        Animated.timing(progress, {
          toValue: 0,
          duration: dot.duration,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: false,
        }),
      ]),
    );
    anim.start();
    return () => anim.stop();
  }, [progress, dot.duration]);

  const translateX = progress.interpolate({ inputRange: [0, 1], outputRange: [0, dot.dx] });
  const translateY = progress.interpolate({ inputRange: [0, 1], outputRange: [0, dot.dy] });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.dot,
        {
          left: `${dot.x}%`,
          top: `${dot.y}%`,
          width: dot.size,
          height: dot.size,
          borderRadius: dot.size / 2,
          backgroundColor: dot.color,
          opacity: dot.opacity,
          transform: [{ translateX }, { translateY }],
        },
      ]}
    />
  );
}

export function FloatingDots({
  tone = 'dark',
  count = 40,
  sizeRange = [6, 30],
  maxOpacity = 0.16,
  style,
}: {
  tone?: Tone;
  count?: number;
  sizeRange?: [number, number];
  maxOpacity?: number;
  style?: StyleProp<ViewStyle>;
}) {
  const dots = useMemo(() => buildDots(tone, count, sizeRange, maxOpacity), [tone, count, sizeRange, maxOpacity]);
  return (
    <View pointerEvents="none" style={[styles.layer, style]}>
      {dots.map((dot, i) => (
        <Dot key={i} dot={dot} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  layer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    overflow: 'hidden',
  },
  dot: { position: 'absolute' },
});
