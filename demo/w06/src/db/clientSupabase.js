import { createClient } from '@supabase/supabase-js';

const supabaesUrl = process.env.REACT_APP_SUPERBASE_URL;
const supabaesAnonKey = process.env.REACT_APP_SUPERBASE_ANON_KEY;

export const supabaes = createClient(supabaesUrl, supabaesAnonKey);
