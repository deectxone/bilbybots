import { StyleSheet, Text, View } from 'react-native';
import type { IllustrationSlot } from '../types/curriculum';
import { palette, radius, spacing } from '../theme/colors';
import { DiagramView } from './illustrations/diagrams';
import { Icon } from './illustrations/icons';

/**
 * Renders the topic's vector diagram when one is authored (`slot.diagram`).
 * Falls back to a "pending" placeholder only for slots not yet authored —
 * this is the seam where the Phase-2 photo/video pipeline can later swap in
 * a real asset URI instead.
 * Colour variants keep each frame visually distinct & vibrant.
 */
const frameTints = [palette.sky, palette.lime, palette.sunny, palette.berry, palette.grape] as const;

export function IllustrationFrame({
  slot,
  index,
}: {
  slot: IllustrationSlot;
  index: number;
}) {
  const tint = frameTints[index % frameTints.length];

  if (slot.diagram) {
    return (
      <View style={[styles.frame, styles.diagramFrame, { backgroundColor: tint + '1a', borderColor: tint }]}>
        <DiagramView diagram={slot.diagram} />
        <Text style={styles.diagramCaption}>{slot.brief}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.frame, { backgroundColor: tint + '33', borderColor: tint }]}>
      <Icon name="pen" tint={palette.slate} size={26} />
      <Text style={styles.brief}>{slot.brief}</Text>
      <Text style={[styles.state, { color: slot.ready ? palette.teal : palette.slate }]}>
        {slot.ready ? 'Illustration ready' : 'Illustration coming soon'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    borderRadius: radius.md,
    borderWidth: 2,
    borderStyle: 'dashed',
    padding: spacing.md,
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    marginVertical: spacing.sm,
  },
  diagramFrame: { borderStyle: 'solid', padding: spacing.sm, alignItems: 'stretch' },
  diagramCaption: { fontSize: 12, color: palette.slate, fontWeight: '600', textAlign: 'center' },
  brief: { fontSize: 14, color: palette.ink, fontWeight: '600', textAlign: 'center' },
  state: { fontSize: 11, textTransform: 'uppercase', fontWeight: '700' },
});