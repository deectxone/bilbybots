/// <reference types="node" />
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it, vi } from 'vitest';

vi.mock('./supabase', () => ({ supabase: null }));
vi.mock('expo-crypto', () => ({ randomUUID: () => '00000000-0000-0000-0000-000000000000' }));

const { STARTED_KIND, COMPLETION_KIND, BADGE_KIND, RESULT_KIND } = await import('./sync');

/**
 * Regression test for the bug where adding STARTED_KIND ('started') to
 * sync.ts without widening progress_event's `kind` check constraint made
 * every push batch containing a started event fail outright — silently
 * blocking ALL progress (completions, badges, NAPLAN results too) from
 * reaching Supabase, not just the started events. Parses the migrations for
 * the constraint's allowed values and asserts every kind this client writes
 * is one of them, so a future new kind can't reintroduce the same class of
 * bug.
 */
describe('progress_event kind ↔ DB check constraint', () => {
  it('every kind sync.ts writes is allowed by the progress_event check constraint', () => {
    const here = dirname(fileURLToPath(import.meta.url));
    const migrationsDir = join(here, '..', '..', 'supabase', 'migrations');
    const files = readdirSync(migrationsDir).filter((f) => f.endsWith('.sql')).sort();

    let allowed: string[] | null = null;
    for (const file of files) {
      const sql = readFileSync(join(migrationsDir, file), 'utf8');
      // Matches both the inline CREATE TABLE constraint and a later
      // `alter table ... add constraint ... check (kind in (...))` migration.
      const match = /check\s*\(\s*kind\s+in\s*\(([^)]+)\)\s*\)/i.exec(sql);
      if (match) {
        allowed = match[1].split(',').map((s) => s.trim().replace(/^'|'$/g, ''));
      }
    }

    expect(allowed, 'no progress_event kind check constraint found in migrations').not.toBeNull();
    for (const kind of [STARTED_KIND, COMPLETION_KIND, BADGE_KIND, RESULT_KIND]) {
      expect(allowed, `kind '${kind}' must be in the DB check constraint`).toContain(kind);
    }
  });
});
