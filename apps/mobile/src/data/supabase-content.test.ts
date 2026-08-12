import { describe, expect, it, vi } from 'vitest';
import { allYearTopics } from './content';
import { buildIngestRows, mapContentRowsHelper } from './supabase-content-test-helper';
import { uuidFromKey } from './ingest';
import { mapContentRows, yearFromCode } from './supabase-content';

vi.mock('../utils/supabase', () => ({ supabase: null }));

const ingestRows = buildIngestRows(allYearTopics());
const seededRows = mapContentRowsHelper(ingestRows);

describe('supabase-content mapper (inverse of ingest)', () => {
  const allTopics = allYearTopics();
  const topics = mapContentRows(seededRows);

  it('reconstructs one topic per authored topic', () => {
    expect(topics.length).toBe(allTopics.length);
  });

  it('round-trips title, year, subject and strand', () => {
    for (const t of allTopics) {
      const mapped = topics.find(
        (m) => m.title === t.title && m.year === t.year && m.subject === t.subject
      );
      expect(mapped, t.title).toBeDefined();
      expect(mapped!.strand).toBe(t.strand);
    }
  });

  it('round-trips lesson body and illustrations', () => {
    for (const t of allTopics) {
      const mapped = topics.find(
        (m) => m.title === t.title && m.year === t.year && m.subject === t.subject
      );
      expect(mapped).toBeDefined();
      expect(mapped!.learn.body).toEqual(t.learn.body);
      expect(mapped!.learn.learnTimeMin).toBe(t.learn.learnTimeMin);
      expect(mapped!.learn.illustrations.length).toBe(t.learn.illustrations.length);
    }
  });

  it('round-trips every question', () => {
    for (const t of allTopics) {
      const mapped = topics.find(
        (m) => m.title === t.title && m.year === t.year && m.subject === t.subject
      );
      expect(mapped).toBeDefined();
      expect(mapped!.assignment.questions.length).toBe(t.assignment.questions.length);
      for (const q of t.assignment.questions) {
        const mq = mapped!.assignment.questions.find((x) => x.id === uuidFromKey(`question:${q.id}`));
        expect(mq, `${t.title} / ${q.prompt}`).toBeDefined();
        expect(mq!.prompt).toBe(q.prompt);
        expect(mq!.answer).toBe(q.answer);
        expect(mq!.difficulty).toBe(q.difficulty);
      }
    }
  });

  it('round-trips assignment nominal/compact counts', () => {
    for (const t of allTopics) {
      const mapped = topics.find(
        (m) => m.title === t.title && m.year === t.year && m.subject === t.subject
      );
      expect(mapped).toBeDefined();
      expect(mapped!.assignment.nominalCount).toBe(t.assignment.nominalCount);
      expect(mapped!.assignment.compactCount).toBe(t.assignment.compactCount);
    }
  });

  it('preserves curriculum codes and state mappings', () => {
    for (const t of allTopics) {
      const mapped = topics.find(
        (m) => m.title === t.title && m.year === t.year && m.subject === t.subject
      );
      expect(mapped).toBeDefined();
      expect(mapped!.cd.map((c) => c.ac)).toEqual(t.cd.map((c) => c.ac));
    }
  });

  it('derives year levels from AC codes', () => {
    expect(yearFromCode('AC9M6N01')).toBe('6');
    expect(yearFromCode('AC9HS6K01')).toBe('6');
    expect(yearFromCode('AC9HH7K01')).toBe('7');
    expect(yearFromCode('AC9M10A01')).toBe('10');
    expect(yearFromCode('AC9E1LA01')).toBe('1');
    expect(yearFromCode('not-a-code')).toBeNull();
  });
});
