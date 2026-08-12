#!/usr/bin/env node
/**
 * Generate the BilbyBots favicon deterministically:
 *   - brand gradient rounded-square background
 *   - bold white "B" (two lobes + stem)
 * Writes a real PNG (zlib) — no external image tooling, fully verifiable.
 */
import { deflateSync } from 'node:zlib';
import { statSync, writeFileSync } from 'node:fs';

const SIZE = Number(process.argv[2] || 64);

// ---- PNG encoding ----
function crc32(buf) {
  let c;
  const table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crc]);
}

function encodePNG(width, height, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// ---- Drawing helpers ----
const s = SIZE / 64;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function inRoundedRect(x, y, rx, ry, w, h, r) {
  const cx = Math.max(rx + r, Math.min(x, rx + w - r));
  const cy = Math.max(ry + r, Math.min(y, ry + h - r));
  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= r * r && x >= rx && x <= rx + w && y >= ry && y <= ry + h;
}

function inCircle(x, y, cx, cy, r) {
  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= r * r;
}

// The white "B": stem + two lobes. Geometry in 64-space, scaled.
const STEM = { x: 14, y: 13, w: 9.5, h: 38, r: 4.75 };
const TOP = { cx: 44, cy: 23, r: 10.5 }; // top lobe right arc
const TOP_RECT = { x: 24, y: 13, w: 21, h: 20, r: 6 }; // top lobe body (rounded left/bottom)
const BOTTOM = { cx: 44, cy: 41, r: 10.5 }; // bottom lobe right arc
const BOTTOM_RECT = { x: 24, y: 31, w: 21, h: 20, r: 6 }; // bottom lobe body

function insideB(x, y) {
  const sx = x / s;
  const sy = y / s;
  if (inRoundedRect(sx, sy, STEM.x, STEM.y, STEM.w, STEM.h, STEM.r)) return true;
  // top lobe: body rect OR right arc
  if (inRoundedRect(sx, sy, TOP_RECT.x, TOP_RECT.y, TOP_RECT.w, TOP_RECT.h, TOP_RECT.r)) return true;
  if (inCircle(sx, sy, TOP.cx, TOP.cy, TOP.r)) return true;
  // bottom lobe
  if (inRoundedRect(sx, sy, BOTTOM_RECT.x, BOTTOM_RECT.y, BOTTOM_RECT.w, BOTTOM_RECT.h, BOTTOM_RECT.r)) return true;
  if (inCircle(sx, sy, BOTTOM.cx, BOTTOM.cy, BOTTOM.r)) return true;
  return false;
}

// Background gradient (diagonal purple -> pink), rounded 22% corner radius.
function bgColor(x, y) {
  const t = (x / SIZE + y / SIZE) / 2;
  return [Math.round(lerp(0x8a, 0xc9, t)), Math.round(lerp(0x6f, 0x57, t)), Math.round(lerp(0xcb, 0x8a, t))];
}

const rgba = Buffer.alloc(SIZE * SIZE * 4);
const radius = Math.round(SIZE * 0.21);
for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    const i = (y * SIZE + x) * 4;
    const rounded = inRoundedRect(x, y, 0, 0, SIZE, SIZE, radius);
    if (!rounded) {
      rgba[i] = rgba[i + 1] = rgba[i + 2] = rgba[i + 3] = 0; // transparent outside the rounded square
    } else if (insideB(x, y)) {
      rgba[i] = rgba[i + 1] = rgba[i + 2] = 255;
      rgba[i + 3] = 255;
    } else {
      const [r, g, bl] = bgColor(x, y);
      rgba[i] = r;
      rgba[i + 1] = g;
      rgba[i + 2] = bl;
      rgba[i + 3] = 255;
    }
  }
}

const out = process.argv[3];
writeFileSync(out, encodePNG(SIZE, SIZE, rgba));
console.log(`wrote ${out} (${SIZE}x${SIZE}, ${statSync(out).size} bytes)`);
