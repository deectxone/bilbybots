import { supabase } from './supabase';

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * Persist a contact-us submission to the `contact_messages` table. The
 * signed-in user's email is attached when available (see ContactForm).
 * Table + RLS live in `apps/mobile/supabase/migrations/`.
 */
export async function submitContactMessage(message: string, email?: string): Promise<ContactSubmitResult> {
  if (!supabase) {
    return { ok: false, error: 'Contact form is not configured yet, Supabase env vars are missing.' };
  }
  const trimmed = message.trim();
  if (!trimmed) return { ok: false, error: 'Please write a message before sending.' };

  const { error } = await supabase.from('contact_messages').insert([
    { email: email?.trim() || null, message: trimmed },
  ]);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
