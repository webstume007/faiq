import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  const { data: session } = await supabase.from('sessions').select('*').eq('is_active', true).single();
  if (!session) {
    return res.status(200).json({ error: 'No active session' });
  }

  const { data, error } = await supabase.from('session_courses').select('*').eq('session_id', session.id);
  res.status(200).json({
    sessionId: session.id,
    courses: data,
    error: error
  });
}
