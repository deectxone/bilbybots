/**
 * Generate the Supabase curriculum seed from the authored topic banks.
 *
 * Usage: `npm run seed:generate` (from apps/mobile). Writes
 * `supabase/seed/curriculum-seed.sql` (single file, for `supabase db push` /
 * SQL Editor) plus per-table browser-runnable files (`curriculum.sql`,
 * `topic.sql`, `lesson.sql`, `question.sql`, `assignment.sql`; large tables
 * chunked into `-N` parts). Content tables are write-protected by RLS for the
 * app, so seeding uses the service role (dashboard / SQL editor), never a
 * committed key.
 */
import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { allYearTopics } from '../src/data/content';
import { buildIngestRows, generateSeedFiles, generateSeedSql } from '../src/data/ingest';

const rows = buildIngestRows(allYearTopics());
const outDir = resolve(process.cwd(), 'supabase/seed');
mkdirSync(outDir, { recursive: true });

const outFile = resolve(outDir, 'curriculum-seed.sql');
writeFileSync(outFile, generateSeedSql(rows));

const files = generateSeedFiles(rows);
for (const file of files) {
  writeFileSync(resolve(outDir, file.name), file.content);
}

console.log(`Wrote ${outFile}`);
console.log(`  curriculum: ${rows.curriculum.length}`);
console.log(`  topics:     ${rows.topics.length}`);
console.log(`  lessons:    ${rows.lessons.length}`);
console.log(`  questions:  ${rows.questions.length}`);
console.log(`  assignments:${rows.assignments.length}`);
console.log(`Browser-runnable per-table files:`);
for (const file of files) {
  console.log(`  ${file.name}`);
}
