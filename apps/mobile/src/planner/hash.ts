/**
 * Deterministic input hash (FNV-1a 32-bit, hex). Same normalized input always
 * produces the same hash, so a plan snapshot is auditable ("why this plan?")
 * and two runs with identical inputs can be compared (spec §5.4).
 */
export function planInputHash(value: unknown): string {
  const json = JSON.stringify(value);
  let h = 0x811c9dc5;
  for (let i = 0; i < json.length; i++) {
    h ^= json.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}
