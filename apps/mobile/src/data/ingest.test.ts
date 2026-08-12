import { describe, expect, it } from 'vitest';
import { allYearTopics } from './content';
import { buildIngestRows, generateSeedFiles, generateSeedSql, uuidFromKey } from './ingest';

describe('curriculum ingestion coverage', () => {
  const allTopics = allYearTopics();
  const rows = buildIngestRows(allTopics);

  it('has content to ingest', () => {
    expect(allTopics.length).toBeGreaterThan(0);
  });

  it('maps every authored topic to exactly one topic row (no dup ids)', () => {
    expect(rows.topics.length).toBe(allTopics.length);
    expect(new Set(rows.topics.map((t) => t.id)).size).toBe(rows.topics.length);
  });

  it('maps every authored question to exactly one question row', () => {
    const authored = allTopics.reduce((n, t) => n + t.assignment.questions.length, 0);
    expect(rows.questions.length).toBe(authored);
    expect(new Set(rows.questions.map((q) => q.id)).size).toBe(rows.questions.length);
  });

  it('covers every curriculum code exactly once', () => {
    const codes = allTopics.flatMap((t) => t.cd.map((c) => c.ac));
    const unique = new Set(codes);
    expect(rows.curriculum.length).toBe(unique.size);
    expect(new Set(rows.curriculum.map((c) => c.code))).toEqual(unique);
  });

  it('creates one lesson and one assignment per topic, referencing existing topics', () => {
    expect(rows.lessons.length).toBe(allTopics.length);
    expect(rows.assignments.length).toBe(allTopics.length);
    const topicIds = new Set(rows.topics.map((t) => t.id));
    for (const l of rows.lessons) expect(topicIds.has(l.topic_id)).toBe(true);
    for (const a of rows.assignments) expect(topicIds.has(a.topic_id)).toBe(true);
  });

  it('every question belongs to an existing lesson', () => {
    const lessonIds = new Set(rows.lessons.map((l) => l.id));
    for (const q of rows.questions) expect(lessonIds.has(q.lesson_id)).toBe(true);
  });

  it('is deterministic: same input produces identical ids', () => {
    const again = buildIngestRows(allTopics);
    expect(rows.topics.map((t) => t.id)).toEqual(again.topics.map((t) => t.id));
    expect(uuidFromKey('topic:Y6-MAT-NN01')).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
    );
  });

  it('generates idempotent SQL covering every row', () => {
    const sql = generateSeedSql(rows);
    expect(sql).toContain('ON CONFLICT (id) DO NOTHING');
    expect(sql).toContain('BEGIN;');
    expect(sql).toContain('COMMIT;');
    for (const t of rows.topics) expect(sql).toContain(t.id);
  });

  it('generates browser-runnable per-table files in dependency order', () => {
    const files = generateSeedFiles(rows);
    expect(files.map((f) => f.name)).toEqual([
      'curriculum.sql',
      'topic.sql',
      ...files.filter((f) => f.name.startsWith('lesson-')).map((f) => f.name),
      ...files.filter((f) => f.name.startsWith('question-')).map((f) => f.name),
      ...files.filter((f) => f.name.startsWith('assignment-')).map((f) => f.name),
    ]);
    for (const file of files) {
      expect(file.content).toContain('BEGIN;');
      expect(file.content).toContain('COMMIT;');
      expect(file.content).toContain('ON CONFLICT (id) DO NOTHING');
    }
    const combined = generateSeedSql(rows);
    expect(files.flatMap((f) => f.content).join('\n')).not.toBe(combined);
  });
});
