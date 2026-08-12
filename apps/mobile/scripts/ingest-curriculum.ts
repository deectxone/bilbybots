/**
 * Generate the Supabase curriculum seed from the authored topic banks.
 *
 * Usage: `npm run seed:generate` (from apps/mobile). Writes
 * `supabase/seed/curriculum-seed.sql`; run that file in Supabase → SQL Editor.
 * Content tables are write-protected by RLS for the app, so seeding uses the
 * service role (dashboard / SQL editor), never a committed key.
 */
import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { allYearTopics } from '../src/data/content';
import { buildIngestRows, generateSeedSql } from '../src/data/ingest';

const rows = buildIngestRows(allYearTopics());
const outDir = resolve(process.cwd(), 'supabase/seed');
mkdirSync(outDir, { recursive: true });
const outFile = resolve(outDir, 'curriculum-seed.sql');
writeFileSync(outFile, generateSeedSql(rows));

console.log(`Wrote ${outFile}`);
console.log(`  curriculum: ${rows.curriculum.length}`);
console.log(`  topics:     ${rows.topics.length}`);
console.log(`  lessons:    ${rows.lessons.length}`);
console.log(`  questions:  ${rows.questions.length}`);
console.log(`  assignments:${rows.assignments.length}`);
