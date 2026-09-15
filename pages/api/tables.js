import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  // Test reading sessions with anon key
  const { data: sessions, error: sessErr } = await supabase.from('sessions').select('id, name, is_active').order('created_at', { ascending: false }).limit(5);
  // Test reading session_courses with anon key
  const { data: courses, error: coursesErr } = await supabase.from('session_courses').select('id, session_id, course_name').limit(5);
  res.status(200).json({ sessions, sessErr, courses, coursesErr });
}
