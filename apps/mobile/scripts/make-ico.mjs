#!/usr/bin/env node
/**
 * Build a modern multi-size .ico from the generated favicon PNGs.
 * PNG-compressed ICO entries are supported on all modern platforms.
 *
 * ICO layout: 6-byte header, then 16-byte dir entries, then image blobs.
 * Dir entries start at offset 6 (NOT 16).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sources = [
  { file: join(root, 'assets/favicon-64.png'), size: 64 },
  { file: join(root, 'assets/favicon.png'), size: 48 },
  { file: join(root, 'assets/favicon.png'), size: 32 },
];

const images = sources.map((s) => ({ ...s, data: readFileSync(s.file) }));

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(images.length, 4);

const entries = Buffer.alloc(16 * images.length);
let offset = 6 + 16 * images.length;
images.forEach((img, i) => {
  const e = i * 16;
  entries[e] = img.size >= 256 ? 0 : img.size; // width
  entries[e + 1] = img.size >= 256 ? 0 : img.size; // height
  entries[e + 2] = 0; // palette
  entries[e + 3] = 0; // reserved
  entries.writeUInt16LE(1, e + 4); // planes
  entries.writeUInt16LE(32, e + 6); // bpp
  entries.writeUInt32LE(img.data.length, e + 8);
  entries.writeUInt32LE(offset, e + 12);
  offset += img.data.length;
});

writeFileSync(join(root, 'public/favicon.ico'), Buffer.concat([header, entries, ...images.map((i) => i.data)]));
console.log('wrote public/favicon.ico');
